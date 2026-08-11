/* kana-drill.js — recognition drill: see a character, name its sound.
 *
 * Mount point: <div id="kana-drill"></div> — anything already inside is replaced,
 * so put a plain-HTML fallback there for the no-JavaScript case. Optional
 * `data-rows` limits the pool to those row keys, space-separated, and optional
 * `data-kana` names the global to read instead of `KANA` — exactly as
 * kana-grid.js does.
 *
 * The loop is a finite shuffled pass over the pool, then an optional second pass
 * over only what was missed. Endless random questioning has no end state to aim
 * at; a pass you can finish is a session with a shape.
 *
 * Two deliberate constraints:
 *
 * - **The question is never spoken.** Audio is the answer — one tap of a speaker
 *   button would turn every question into a freebie. The character is only
 *   spoken once it has been answered.
 * - **Distractors come from the shapes the course says are confusable** (the
 *   pairs in reference/hiragana-chart.html §3) before falling back to the same
 *   row and then anything. A drill whose wrong answers are obviously wrong
 *   measures nothing.
 *
 * A miss reveals the mnemonic and the words already met in earlier lessons that
 * contain the character — not just the ones that start with it, because seeing
 * it sitting inside そと and ほんをよむ is what makes the shape stick.
 */

import { speak, available } from './speech.js';

/* The confusion sets taught in lesson 1 §4, lesson 2 §4 and the stroke chart §3.
   Kept here as plain characters rather than derived from the data, because
   "these look alike" is a fact about handwriting that no field in kana-data.js
   records. */
const CONFUSABLE = [
  ['さ', 'ち', 'き'],
  ['ぬ', 'め'],
  ['ね', 'れ', 'わ'],
  ['つ', 'し'],
  ['に', 'た'],
  ['は', 'ほ', 'ま'],
  ['る', 'ろ'],
  ['り', 'い'],
  ['を', 'お'],

  /* Day 5's families: a character and the same character wearing a mark. These
     are a different kind of confusion from the ones above — the shapes are not
     merely similar, they are identical, and everything hangs on a diacritic the
     eye is trained to skip. A drill over the marked rows has to offer them
     against each other or it is not testing the only thing that is new.
     Appended rather than inserted: `find` takes the first match, so は must keep
     reaching its shape group (は/ほ/ま) for lesson 3. Distractors are filtered by
     the mounted pool, so an earlier lesson can never be shown a marked kana. */
  ['か', 'が'], ['き', 'ぎ'], ['く', 'ぐ'], ['け', 'げ'], ['こ', 'ご'],
  ['さ', 'ざ'], ['し', 'じ'], ['す', 'ず'], ['せ', 'ぜ'], ['そ', 'ぞ'],
  ['た', 'だ'], ['ち', 'ぢ'], ['つ', 'づ'], ['て', 'で'], ['と', 'ど'],
  ['は', 'ば', 'ぱ'], ['ひ', 'び', 'ぴ'], ['ふ', 'ぶ', 'ぷ'],
  ['へ', 'べ', 'ぺ'], ['ほ', 'ぼ', 'ぽ'],

  /* Day 8's katakana. No collision with the groups above — the two scripts use
     disjoint characters, so one flat list serves both and `find` can never
     cross from one to the other.

     Ordered by evidence, because `find` takes the first match and so the first
     group a character appears in is the one that supplies its decoys. The
     ranking is 森田安徳 (2019), a writing test of all 45 katakana on 430 native
     children: シ and ツ dominate its error table, ヌ→ス appears in it, and
     neither ク nor タ appears anywhere — so ク is pointed at ケ first and only
     reaches タ through the stroke-count cluster below. Partners not yet taught
     (ン, ワ, メ, ユ) stay in the groups anyway: distractors are filtered by the
     mounted pool, so they cost nothing now and start working the day the second
     half of the chart arrives. */
  ['シ', 'ツ', 'ソ', 'ン'],
  ['ス', 'ヌ'],
  /* ワ→ウ is in 森田's table twice; ワ/ク is in it nowhere — the same finding
     that demoted ク/タ on day 8, arriving for the partner character. This sits
     above ['ク','ワ'] so ワ reaches the attested decoy first; ク is unaffected
     because it already resolves to ['ク','ケ'] above. */
  ['ワ', 'ウ'],
  ['ク', 'ケ'], ['ク', 'ワ'], ['ナ', 'メ'],
  ['タ', 'ク', 'ヌ'],
  ['コ', 'ユ'], ['チ', 'テ'],

  /* Day 9's characters, ranked from the same study's error tables rather than
     from the usual beginner lists. Every pair below is one 森田 actually
     recorded: ル→レ and レ→ル in two year groups, リ→ソ and マ→ユ among the
     stroke-slant errors, マ→ア, ヨ→ヲ, ロ→ル, and ヌ→ム・ヲ.

     ン is deliberately left to ['シ','ツ','ソ','ン'] above, which gives it
     exactly three decoys and leads with ソ — the commonest single substitution
     in the whole test. ン→ス is attested too, but adding ス there would dilute
     the pair the lesson is built around. */
  ['ル', 'レ'],
  ['リ', 'ソ'],
  ['マ', 'ユ', 'ア'],
  ['ヨ', 'ヲ', 'コ'],
  ['ロ', 'ル'],
  ['ム', 'ヌ', 'ヲ'],

  /* Day 9's marked katakana — a character against itself wearing a diacritic,
     which is a different kind of confusion from the shape groups above and the
     only genuinely new thing in that section. Appended last for exactly the
     reason day 5's marked hiragana were: `find` takes the first match, so any
     character that already has a shape group above — シ, ソ, ツ, ク, コ, タ, チ,
     ス — must keep reaching it before its tenten family. Distractors are
     filtered by the mounted pool, so lesson 9's gojūon drill in section 5 never
     sees these. */
  ['カ', 'ガ'], ['キ', 'ギ'], ['ク', 'グ'], ['ケ', 'ゲ'], ['コ', 'ゴ'],
  ['サ', 'ザ'], ['シ', 'ジ'], ['ス', 'ズ'], ['セ', 'ゼ'], ['ソ', 'ゾ'],
  ['タ', 'ダ'], ['チ', 'ヂ'], ['ツ', 'ヅ'], ['テ', 'デ'], ['ト', 'ド'],
  ['ハ', 'バ', 'パ'], ['ヒ', 'ビ', 'ピ'], ['フ', 'ブ', 'プ'],
  ['ヘ', 'ベ', 'ペ'], ['ホ', 'ボ', 'ポ'],
];

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

const shuffled = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export function mountKanaDrill(root) {
  if (!root) return;
  const set = window[root.dataset.kana || 'KANA'];
  if (!set) return;
  const { kana } = set;

  const only = root.dataset.rows ? root.dataset.rows.trim().split(/\s+/) : null;
  const pool = kana.filter(k => !only || only.includes(k.row));
  if (pool.length < 4) return;

  /* Every distinct word taught so far, so a reveal can show the character in
     context. kana-data.js lists a word under each kana it was chosen to
     illustrate, so the same word appears more than once — dedupe on the word. */
  const words = [];
  const seenWord = new Set();
  for (const k of kana) {
    for (const w of k.w || []) {
      if (seenWord.has(w.k)) continue;
      seenWord.add(w.k);
      words.push(w);
    }
  }
  const wordsWith = (char) => words.filter(w => w.k.includes(char)).slice(0, 6);

  root.textContent = '';
  root.classList.add('kana-drill-mounted');

  /* ---------- chrome ---------- */

  const head = el('div', 'drill-head');
  const count = el('p', 'drill-count');
  const tally = el('p', 'drill-tally');
  head.append(count, tally);

  const bar = el('div', 'drill-bar');
  const barFill = el('span', 'drill-bar-fill');
  bar.appendChild(barFill);

  const stage = el('div', 'drill-stage');
  const prompt = el('p', 'drill-prompt');
  prompt.lang = 'ja';
  const hint = el('p', 'drill-hint', 'Which sound is this?');
  const choices = el('div', 'drill-choices');
  stage.append(hint, prompt, choices);

  const verdict = el('p', 'drill-verdict');
  verdict.setAttribute('aria-live', 'polite');

  const reveal = el('div', 'drill-reveal');
  const nextBtn = el('button', 'kana-btn drill-next', 'Next →');
  nextBtn.type = 'button';

  const done = el('div', 'drill-done');

  root.append(head, bar, stage, verdict, reveal, nextBtn, done);

  /* ---------- state ---------- */

  let queue = [];
  let at = 0;
  let right = 0;
  let missed = [];
  let locked = false;
  let advance = null;

  function distractorsFor(entry) {
    const taken = new Set([entry.r]);
    const out = [];
    const consider = (k) => {
      /* を and お are both "o": offering one as a decoy for the other would put
         the right answer on two buttons. Dedupe on the romaji, not the kana. */
      if (out.length >= 3 || taken.has(k.r)) return;
      taken.add(k.r);
      out.push(k);
    };

    const set = CONFUSABLE.find(g => g.includes(entry.k)) || [];
    shuffled(pool.filter(k => set.includes(k.k) && k.k !== entry.k)).forEach(consider);
    shuffled(pool.filter(k => k.row === entry.row && k.k !== entry.k)).forEach(consider);
    shuffled(pool.filter(k => k.k !== entry.k)).forEach(consider);
    return out;
  }

  function wordRow(w, target) {
    const li = el('li', 'kana-word');

    const play = el('button', 'kana-play');
    play.type = 'button';
    play.dataset.speak = w.k;
    play.dataset.lang = 'ja';
    play.textContent = '🔊';
    play.setAttribute('aria-label', `Say ${w.r}`);
    if (!available('ja')) play.classList.add('no-voice');

    const jp = el('span', 'kana-word-jp');
    /* Split on the character being drilled so it can be marked inside the word —
       that is the whole point of showing the word at all. */
    for (const part of Array.from(w.k)) {
      if (part === target) jp.appendChild(el('b', 'drill-hit', part));
      else jp.appendChild(document.createTextNode(part));
    }

    const body = el('span', 'kana-word-body');
    body.append(jp, el('span', 'kana-word-romaji', w.r), el('span', 'kana-word-en', w.e));

    if (w.a) {
      const ar = el('span', 'kana-word-ar');
      ar.lang = 'ar';
      ar.dir = 'rtl';
      ar.appendChild(el('span', 'ar-i', w.a));
      const arSay = el('button', 'kana-play kana-play-ar');
      arSay.type = 'button';
      arSay.dataset.speak = w.a;
      arSay.dataset.lang = 'ar';
      arSay.textContent = '🔊';
      arSay.setAttribute('aria-label', `Say ${w.at}`);
      if (!available('ar')) arSay.classList.add('no-voice');
      ar.appendChild(arSay);
      body.append(ar, el('span', 'kana-word-translit', w.at));
    }

    li.append(play, body);
    return li;
  }

  function showReveal(entry) {
    reveal.textContent = '';

    const headline = el('p', 'kana-headline');
    /* The same picture the §3 cards carry, ghosted behind the character.
       Safe only here: the reveal exists after answering, so it never hints. */
    let charEl = el('span', 'kana-headline-char', entry.k);
    if (entry.pd || entry.p) {
      const pic = el('span', 'mn-pic mn-pic-drill');
      let bg;
      if (entry.pd) {
        const SVG_NS = 'http://www.w3.org/2000/svg';
        bg = document.createElementNS(SVG_NS, 'svg');
        bg.setAttribute('class', 'mn-pic-bg');
        bg.setAttribute('viewBox', '0 0 256 256');
        const path = document.createElementNS(SVG_NS, 'path');
        path.setAttribute('d', entry.pd);
        bg.appendChild(path);
      } else {
        bg = el('span', 'mn-pic-bg mn-pic-letters', entry.p);
      }
      bg.setAttribute('aria-hidden', 'true');
      pic.append(bg, charEl);
      charEl = pic;
    }
    headline.append(charEl, el('span', 'kana-headline-romaji', entry.r));
    /* On a katakana miss the hiragana twin is the most useful thing on the card:
       the sound is already known, so naming the character that already carries
       it turns a blank into a lookup. Absent on hiragana entries, which have no
       twin to name. */
    if (entry.h) {
      const from = el('span', 'kana-headline-from', `· the katakana for ${entry.h}`);
      from.lang = 'ja';
      headline.appendChild(from);
    }
    const strokes = el('p', 'kana-strokes', entry.n === 1
      ? 'Written in 1 stroke.'
      : `Written in ${entry.n} strokes.`);
    const mnemonic = el('p', 'kana-mnemonic', entry.m);

    const found = wordsWith(entry.k);
    const title = el('p', 'kana-words-title',
      found.length === 1
        ? 'A word you already know that uses it'
        : 'Words you already know that use it');
    const list = el('ul', 'kana-words');
    found.forEach(w => list.appendChild(wordRow(w, entry.k)));

    reveal.append(headline, strokes, mnemonic, title, list);
    reveal.classList.add('shown');
  }

  function answer(btn, entry, picked) {
    if (locked) return;
    locked = true;

    const ok = picked.r === entry.r;
    Array.from(choices.children).forEach(b => {
      b.disabled = true;
      if (b.dataset.romaji === entry.r) b.classList.add('right');
    });
    if (!ok) btn.classList.add('wrong');

    if (ok) right += 1;
    else missed.push(entry);
    paintTally();

    if (available('ja')) speak(entry.k, 'ja');

    if (ok) {
      verdict.textContent = `Correct — ${entry.k} is ${entry.r}.`;
      verdict.className = 'drill-verdict is-right';
      /* A correct answer earns speed: the drill moves on by itself. Getting it
         wrong is what buys you the explanation. */
      advance = setTimeout(next, 850);
    } else {
      verdict.textContent = `Not quite — ${entry.k} is ${entry.r}, not ${picked.r}.`;
      verdict.className = 'drill-verdict is-wrong';
      showReveal(entry);
      nextBtn.classList.add('shown');
      nextBtn.focus();
    }
  }

  function paintTally() {
    const asked = right + missed.length;
    tally.textContent = asked
      ? `${right} right · ${missed.length} missed`
      : '';
  }

  function ask() {
    const entry = queue[at];
    if (!entry) return finish();

    locked = false;
    verdict.textContent = '';
    verdict.className = 'drill-verdict';
    reveal.textContent = '';
    reveal.classList.remove('shown');
    nextBtn.classList.remove('shown');
    done.classList.remove('shown');
    stage.classList.add('shown');

    count.textContent = `Character ${at + 1} of ${queue.length}`;
    barFill.style.width = `${(at / queue.length) * 100}%`;

    prompt.textContent = entry.k;
    prompt.setAttribute('aria-label', 'Which sound is this character?');

    choices.textContent = '';
    shuffled([entry, ...distractorsFor(entry)]).forEach((k, i) => {
      const b = el('button', 'drill-choice');
      b.type = 'button';
      b.dataset.romaji = k.r;
      b.append(el('span', 'drill-choice-key', String(i + 1)),
               el('span', 'drill-choice-romaji', k.r));
      b.addEventListener('click', () => answer(b, entry, k));
      choices.appendChild(b);
    });
  }

  function next() {
    clearTimeout(advance);
    at += 1;
    ask();
  }

  function finish() {
    stage.classList.remove('shown');
    nextBtn.classList.remove('shown');
    reveal.classList.remove('shown');
    verdict.textContent = '';
    count.textContent = 'Round complete';
    barFill.style.width = '100%';

    done.textContent = '';
    const score = el('p', 'drill-score',
      `${right} of ${queue.length} on sight.`);
    done.appendChild(score);

    if (missed.length) {
      const label = el('p', 'drill-missed-label',
        missed.length === 1 ? 'The one that got away:' : 'The ones that got away:');
      const chips = el('p', 'drill-missed');
      missed.forEach(k => {
        const chip = el('span', 'drill-chip');
        chip.append(el('span', 'drill-chip-char', k.k),
                    el('span', 'drill-chip-romaji', k.r));
        chips.appendChild(chip);
      });
      const again = el('button', 'kana-btn', missed.length === 1
        ? 'Drill that one again'
        : `Drill those ${missed.length} again`);
      again.type = 'button';
      again.addEventListener('click', () => start(missed));
      done.append(label, chips, again);
    } else {
      done.appendChild(el('p', 'drill-clean',
        'Every character, first time. The chart is readable — now make it fast.'));
    }

    const over = el('button', 'kana-btn drill-restart', 'Start the full round over');
    over.type = 'button';
    over.addEventListener('click', () => start(pool));
    done.appendChild(over);
    done.classList.add('shown');
  }

  function start(set) {
    clearTimeout(advance);
    queue = shuffled(set);
    at = 0;
    right = 0;
    missed = [];
    paintTally();
    ask();
  }

  nextBtn.addEventListener('click', next);

  /* 1–4 answer the current question; that is faster than aiming at a button and
     is how anyone drilling for speed will want to work. */
  document.addEventListener('keydown', (e) => {
    if (locked || !stage.classList.contains('shown')) return;
    /* e.target is usually <body>, but it is the document itself when nothing is
       focused — and Document has no matches(), so test before calling it. */
    if (e.target instanceof Element && e.target.matches('input, textarea')) return;
    const n = Number(e.key);
    if (!Number.isInteger(n) || n < 1 || n > choices.children.length) return;
    e.preventDefault();
    choices.children[n - 1].click();
  });

  start(pool);
}

/* Prefix match, for the same reason kana-grid.js does it: day 9 runs a second
   drill over the marked rows. Each mount keeps its own independent state, and a
   page with a single `id="kana-drill"` is unaffected. */
document.querySelectorAll('[id^="kana-drill"]').forEach(mountKanaDrill);
