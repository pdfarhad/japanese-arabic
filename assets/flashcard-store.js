/* flashcard-store.js — the deck's memory and the rules that build a session.
 *
 * Everything in this file is pure except the four functions at the bottom that
 * touch localStorage, and that split is deliberate: `scripts/test_flashcards.mjs`
 * imports this module straight into Node, where there is no browser and no
 * store, and asserts the weighting, the decay, the 30-card cap and the trouble
 * ordering without rendering anything. The DOM lives in `flashcards.js`.
 *
 * ---- The one rule this file breaks, and why it is allowed to ----
 *
 * NOTES.md, under Publishing: "do not add persistence to results … scores and
 * progress stay out." Reversed 2026-08-13 on Farhad's instruction, which asked
 * for exactly this: *"wrong answers can be stored in localstorage of the browser
 * of the user … most frequent wrong answers will be fed in to make a wrong
 * answers repeatation flash cards sessions."*
 *
 * The REASON behind that rule is untouched and is the part worth keeping: no
 * server call, no build step, byte-identical behaviour on localhost and on
 * GitHub Pages. What was dropped is the blanket ban on remembering. See
 * learning-records/0016 before reinstating anything.
 *
 * Every store access is wrapped, exactly as lang-switch.js wraps its own.
 * Safari private browsing, a file:// origin and disabled storage all throw, and
 * none of them may cost the reader the deck: a blocked store means no memory,
 * not no practice.
 */

export const KEY = 'jp-ar:flashcards:v1';

/* At most 30 cards a session — Farhad's number. A pool smaller than that deals
   itself entirely. */
export const SESSION_MAX = 30;

/* The wrong-score ceiling. Without it a word missed twenty times would carry
   forty times the weight of everything else and the session would stop being a
   walk across four chapters. */
export const SCORE_MAX = 5;

/* A never-seen card outranks a settled one but loses to a missed one. This is
   the only reason new material surfaces at all once the store fills up. */
export const NEW_WEIGHT = 2.5;

/* ---------------------------------------------------------------- the pool */

/* Kana is the card's identity everywhere — the storage key, the dedupe key, the
   test's handle on a card. It can be, because within chapters 10–13 all 178
   kana are distinct (checked before this file was written). */
export const cardKey = (card) => card.k;

/* `lookup` is `name => window[name]` in the browser and a plain object's getter
   in the test, which is the whole reason this takes it rather than reading
   `window` itself.
 *
 * A registered set whose global is missing is SKIPPED rather than thrown on:
 * one forgotten <script> tag must not blank the page. test_flashcards.mjs
 * counts the pool so the silence cannot go unnoticed. */
export function buildPool(sets, lookup) {
  const out = [];
  const seen = new Set();

  for (const set of sets) {
    const data = lookup(set.global);
    if (!data || !Array.isArray(data.words)) continue;

    const catLabels = new Map((data.cats || []).map((c) => [c.id, c.en]));

    for (const w of data.words) {
      /* First registered set wins. Nothing collides across 10–13 today, but
         へや is already in both VOCAB (chapter 4) and VOCAB13, so the first
         cross-listed word to enter the deck's range would otherwise be dealt
         twice in one session — with two different notes attached. */
      if (seen.has(w.k)) continue;
      seen.add(w.k);
      out.push({ ...w, set: set.global, chapter: set.n, catLabel: catLabels.get(w.c) || '' });
    }
  }
  return out;
}

/* --------------------------------------------------------------- the rules */

export function weightFor(stat) {
  if (!stat) return NEW_WEIGHT;
  if (stat.s > 0) return 1 + 2 * stat.s;
  return 1;
}

/* Missed → +1, capped. Knew → −1, floored.
 *
 * THE DECAY IS THE LOAD-BEARING HALF. `w` and `r` are the lifetime record and
 * never move down; `s` is a working score, and if it only ever rose then a word
 * that was hard once would sit in the penalty box forever and the trouble deck
 * would slowly become the whole course. Getting it right twice should get you
 * out. */
export function scoreAfter(prev, ok, now = Date.now()) {
  const p = prev || { w: 0, r: 0, s: 0, t: 0 };
  return ok
    ? { w: p.w, r: p.r + 1, s: Math.max(0, p.s - 1), t: now }
    : { w: p.w + 1, r: p.r, s: Math.min(SCORE_MAX, p.s + 1), t: now };
}

/* Every card with a live wrong-score, hardest first: score, then lifetime
   misses, then kana so the order is total and the test can assert it. */
export function troubleDeck(pool, stats, size = SESSION_MAX) {
  return pool
    .filter((c) => (stats[cardKey(c)]?.s || 0) > 0)
    .sort((a, b) => {
      const sa = stats[cardKey(a)], sb = stats[cardKey(b)];
      return sb.s - sa.s || sb.w - sa.w || (a.k < b.k ? -1 : a.k > b.k ? 1 : 0);
    })
    .slice(0, size);
}

export function shuffle(arr, rand = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Roulette without replacement. Not the fastest way to do this, but the pool is
   178 cards and the draw is 30, so it is the readable way. */
function weightedDraw(pool, stats, n, rand) {
  const rest = pool.slice();
  const weights = rest.map((c) => weightFor(stats[cardKey(c)]));
  const out = [];

  while (out.length < n && rest.length) {
    let total = 0;
    for (const w of weights) total += w;
    let r = rand() * total;
    let i = 0;
    for (; i < rest.length - 1; i++) {
      r -= weights[i];
      if (r <= 0) break;
    }
    out.push(rest[i]);
    rest.splice(i, 1);
    weights.splice(i, 1);
  }
  return out;
}

/* A fresh deck on every call — which is what "generated in each refresh" means,
   since the page calls this on load.
 *
 * Trouble mode SELECTS deterministically and then shuffles for presentation:
 * which thirty words you get is a fact about how badly you know them, but the
 * order you meet them in should not be the same every time, or you start
 * remembering the sequence instead of the words. */
export function buildSession(pool, stats, opts = {}) {
  const size = Math.min(opts.size ?? SESSION_MAX, pool.length);
  const rand = opts.rand ?? Math.random;
  const picked = opts.mode === 'trouble'
    ? troubleDeck(pool, stats, size)
    : weightedDraw(pool, stats, size, rand);
  return shuffle(picked, rand);
}

/* ------------------------------------------------------------- the storage */

/* A stored entry is only trusted if every field is a finite, non-negative
   number. Anything else — a hand-edited store, a half-written value, a future
   version's shape — is dropped rather than coerced, because a NaN reaching
   `weightFor` would make the whole roulette wheel NaN and the session empty. */
function sane(cards) {
  const out = {};
  if (!cards || typeof cards !== 'object') return out;
  for (const [k, v] of Object.entries(cards)) {
    if (!v || typeof v !== 'object') continue;
    const num = (x) => (typeof x === 'number' && Number.isFinite(x) && x >= 0 ? x : null);
    const w = num(v.w), r = num(v.r), s = num(v.s), t = num(v.t);
    if (w === null || r === null || s === null || t === null) continue;
    out[k] = { w, r, s: Math.min(s, SCORE_MAX), t };
  }
  return out;
}

export function loadStats() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.v !== 1) return {};
    return sane(parsed.cards);
  } catch {
    return {};
  }
}

export function saveStats(stats) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ v: 1, cards: stats }));
    return true;
  } catch {
    return false;
  }
}

export function recordAnswer(stats, card, ok, now = Date.now()) {
  const key = cardKey(card);
  stats[key] = scoreAfter(stats[key], ok, now);
  saveStats(stats);
  return stats[key];
}

export function resetStats() {
  try {
    localStorage.removeItem(KEY);
    return true;
  } catch {
    return false;
  }
}
