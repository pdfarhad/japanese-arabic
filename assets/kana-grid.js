/* kana-grid.js — the interactive kana chart.
 *
 * Renders every kana in `window.KANA` (see kana-data.js) as a tappable cell.
 * Tapping one opens a detail card that animates the character stroke by stroke
 * in the correct order, speaks it aloud, and lists example words.
 *
 * Mount point: <div id="kana-grid"></div> — anything already inside is replaced,
 * so put a plain-HTML fallback there for the no-JavaScript case.
 *
 * Optional `data-rows` on the mount point limits the chart to those row keys,
 * space-separated (`data-rows="a ka sa ta na"`). Without it every row renders.
 * A lesson teaches a subset of the chart, so it pins itself to its own rows —
 * otherwise adding a later day's kana to kana-data.js would silently rewrite
 * every earlier lesson's chart.
 *
 * Optional `data-kana` names the global to read instead of `KANA` — day 8's
 * katakana live in `window.KATAKANA`, which reuses the same row keys and so
 * cannot be merged into the hiragana set. Same arrangement as `data-vocab` on
 * vocab-list.js.
 *
 * Three optional per-entry fields change what a cell says, and a character
 * carries at most one of the first two:
 *   b  — the character this one was built from by adding a mark (day 5). The
 *        cell stacks both and the romaji shows the sound change.
 *   h  — the hiragana twin of a katakana, with `hn` its stroke count. The cell
 *        stacks both; the romaji is shown once, because the sound is identical.
 *   o/ho/sib — the man'yōgana kanji each of the pair was cut from, and whether
 *        that was the same character.
 *
 * Stroke paths come from KanjiVG <http://kanjivg.tagaini.net>, CC BY-SA 3.0.
 */

import { speak, available } from './speech.js';

const SVG_NS = 'http://www.w3.org/2000/svg';
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};
const svgEl = (tag, attrs = {}) => {
  const n = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  return n;
};

export function mountKanaGrid(root) {
  if (!root) return;
  const set = window[root.dataset.kana || 'KANA'];
  if (!set) return;
  const { rows, kana } = set;
  root.textContent = '';
  root.classList.add('kana-grid-mounted');

  const cells = new Map();
  /* Which row group each character belongs to. The detail card is moved into
     that group on select, so it always opens directly beneath the letter you
     tapped rather than at the bottom of the whole chart — on a phone the latter
     puts the answer a screen and a half away from the question. */
  const rowOf = new Map();
  const board = el('div', 'kana-board');

  const only = root.dataset.rows ? root.dataset.rows.trim().split(/\s+/) : null;
  const rowKeys = Object.keys(rows).filter(k => !only || only.includes(k));

  /* Looked up from the unfiltered set, so a marked kana can name its base even
     when the base's own row is not on this page. */
  const byChar = new Map(kana.map(k => [k.k, k]));

  rowKeys.forEach(rowKey => {
    const group = el('div', 'kana-row');
    group.appendChild(el('p', 'kana-row-label', rows[rowKey]));
    const line = el('div', 'kana-line');
    kana.filter(k => k.row === rowKey).forEach(k => {
      const base = k.b ? byChar.get(k.b) : null;
      const btn = el('button', 'kana-cell');
      btn.type = 'button';
      btn.setAttribute('aria-label', base
        ? `${k.k}, pronounced ${k.r}, from ${k.b} pronounced ${base.r}`
        : k.h
          ? `${k.k}, pronounced ${k.r}, the katakana for ${k.h}`
          : `${k.k}, pronounced ${k.r}`);
      /* A marked kana is a kana already learned wearing a diacritic, so its box
         carries both: the base above in muted type, the marked form beneath at
         reading size. The romaji line then spells the sound change out, and it
         owns its own arrow — a separator in the markup, never a CSS gap.

         A katakana stacks the same way for a different reason: the hiragana
         above is not what it was built from, it is the character that already
         has this sound. So there is no arrow and one romaji — the whole point
         being that nothing about the sound changed. */
      if (base || k.h) {
        btn.classList.add(base ? 'kana-cell-marked' : 'kana-cell-pair');
        const from = el('span', 'kana-cell-from', base ? k.b : k.h);
        from.lang = 'ja';
        btn.appendChild(from);
      }
      const char = el('span', 'kana-cell-char', k.k);
      char.lang = 'ja';
      btn.appendChild(char);
      btn.appendChild(el('span', 'kana-cell-romaji',
        base ? `${base.r} → ${k.r}` : k.r));
      btn.addEventListener('click', () => select(k.k));
      cells.set(k.k, btn);
      rowOf.set(k.k, group);
      line.appendChild(btn);
    });
    group.appendChild(line);
    board.appendChild(group);
  });
  root.appendChild(board);

  /* ---------- detail card ---------- */

  const card = el('div', 'kana-detail');
  card.setAttribute('aria-live', 'polite');

  const stage = el('div', 'kana-stage');
  const svg = svgEl('svg', {
    viewBox: '0 0 109 109', class: 'kana-svg', role: 'img',
  });
  const ghost = svgEl('g', { class: 'kana-ghost' });
  const ink = svgEl('g', { class: 'kana-ink' });
  const marks = svgEl('g', { class: 'kana-marks' });
  svg.append(svgEl('line', { class: 'kana-guide', x1: '54.5', y1: '2', x2: '54.5', y2: '107' }));
  svg.append(svgEl('line', { class: 'kana-guide', x1: '2', y1: '54.5', x2: '107', y2: '54.5' }));
  svg.append(ghost, ink, marks);
  stage.appendChild(svg);

  const controls = el('div', 'kana-controls');
  const replayBtn = el('button', 'kana-btn', '↻ Replay strokes');
  replayBtn.type = 'button';
  const sayBtn = el('button', 'kana-btn kana-btn-say', '🔊 Say it');
  sayBtn.type = 'button';
  controls.append(replayBtn, sayBtn);
  stage.appendChild(controls);

  const info = el('div', 'kana-info');
  const heading = el('p', 'kana-headline');
  const strokeNote = el('p', 'kana-strokes');
  const mnemonic = el('p', 'kana-mnemonic');
  const origin = el('p', 'kana-origin');
  const wordsTitle = el('p', 'kana-words-title', 'Words that start with it');
  const words = el('ul', 'kana-words');
  info.append(heading, strokeNote, mnemonic, origin, wordsTitle, words);

  card.append(stage, info);

  /* ---------- behaviour ---------- */

  let timers = [];
  let current = null;
  let mounted = false;

  const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };

  function draw(entry) {
    clearTimers();
    ghost.textContent = '';
    ink.textContent = '';
    marks.textContent = '';

    entry.s.forEach(d => ghost.appendChild(svgEl('path', { d })));

    let delay = 0;
    entry.s.forEach((d, i) => {
      const p = svgEl('path', { d });
      ink.appendChild(p);
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len} ${len}`;
      p.style.strokeDashoffset = String(len);

      const start = p.getPointAtLength(0);
      const badge = svgEl('g', { class: 'kana-mark' });
      badge.appendChild(svgEl('circle', { cx: start.x, cy: start.y, r: '6.5' }));
      const t = svgEl('text', { x: start.x, y: start.y });
      t.textContent = String(i + 1);
      badge.appendChild(t);
      marks.appendChild(badge);

      const dur = reduced ? 1 : Math.max(300, Math.min(950, len * 8));
      timers.push(setTimeout(() => {
        badge.classList.add('on');
        p.style.transition = `stroke-dashoffset ${dur}ms linear`;
        p.style.strokeDashoffset = '0';
      }, delay));
      delay += dur + (reduced ? 0 : 200);
    });
  }

  function select(char) {
    const entry = kana.find(k => k.k === char);
    if (!entry) return;
    current = entry;

    cells.forEach((btn, key) => {
      const on = key === char;
      btn.classList.toggle('on', on);
      btn.setAttribute('aria-pressed', String(on));
    });

    /* Re-home the card under this character's row before filling it in. */
    const group = rowOf.get(char);
    if (group && card.parentNode !== group) group.appendChild(card);

    svg.setAttribute('aria-label', `Stroke order for ${entry.k}`);
    const base = entry.b ? byChar.get(entry.b) : null;

    heading.textContent = '';
    heading.append(
      el('span', 'kana-headline-char', entry.k),
      el('span', 'kana-headline-romaji', entry.r),
    );
    if (base || entry.h) {
      /* The '·' rides in the text, not in a CSS gap, so the pair still reads as
         two things if the stylesheet never arrives. */
      const from = el('span', 'kana-headline-from', base
        ? `· from ${base.k} ${base.r}`
        : `· the katakana for ${entry.h}`);
      from.lang = 'ja';
      heading.appendChild(from);
    }

    /* KanjiVG draws the mark last, as its own stroke or two. Splitting the count
       says the useful thing out loud: the base shape has not changed at all, and
       there is no new hand movement to learn beyond the mark itself. */
    if (base) {
      const extra = entry.n - base.n;
      strokeNote.textContent =
        `Written in ${entry.n} strokes — the ${base.n} of ${base.k}, then `
        + (extra === 1 ? 'one more for the mark.' : `${extra} more for the mark.`);
    } else if (entry.h) {
      /* The stroke counts are the concrete reason katakana feel easier to write,
         so the card states both rather than only its own. */
      const mine = entry.n === 1 ? '1 stroke' : `${entry.n} strokes`;
      const theirs = entry.hn === 1 ? '1' : String(entry.hn);
      strokeNote.textContent = entry.n === entry.hn
        ? `Written in ${mine}, in this order — the same count as ${entry.h}.`
        : `Written in ${mine}, in this order. ${entry.h} takes ${theirs}.`;
    } else {
      strokeNote.textContent = entry.n === 1
        ? 'Written in 1 stroke.'
        : `Written in ${entry.n} strokes, in this order.`;
    }
    mnemonic.textContent = entry.m;

    /* Where a katakana and its hiragana were cut from the same man'yōgana kanji,
       any resemblance between them is inherited and worth trusting; where the
       source characters differ there is nothing to see, and saying so stops the
       reader hunting for a pattern that is not there. */
    origin.textContent = '';
    origin.hidden = !entry.o && !entry.od && !entry.oc;
    if (entry.o) {
      const kanji = el('span', 'kana-origin-kanji', entry.o);
      kanji.lang = 'ja';
      origin.append('Cut from the kanji ', kanji, entry.sib
        ? ` — and so was ${entry.h}. The two are siblings.`
        : ', ');
      if (!entry.sib) {
        const other = el('span', 'kana-origin-kanji', entry.ho);
        other.lang = 'ja';
        origin.append(`but ${entry.h} came from `, other,
          '. They are unrelated shapes.');
      }
    } else if (entry.od) {
      /* Naming one ancestor here would be inventing a fact. The dispute is
         itself the answer to "why does this one have no story".

         Whether the twin is *also* unsettled is per-character and must come
         from the data: つ is disputed exactly as ツ is, but ん is settled (无)
         while ン is not. Carrying that in shared prose would have made the
         card state something false about ン the day day 9 landed. */
      const list = el('span', 'kana-origin-kanji', entry.od.join(' '));
      list.lang = 'ja';
      origin.append('Its ancestor is disputed — ', list, ' have all been proposed');
      if (entry.ho) {
        const twin = el('span', 'kana-origin-kanji', entry.ho);
        twin.lang = 'ja';
        origin.append(`, while ${entry.h} comes from `, twin,
          ', which is not in doubt.');
      } else {
        origin.append(`, and ${entry.h} is unsettled the same way.`);
      }
    } else if (entry.oc) {
      /* A different kind of unsettled from `od`: two candidates, and which one
         it is decides whether the pair are siblings at all. Since that is the
         very question this line exists to answer, it has to be said out loud
         rather than resolved by picking a favourite source. */
      const cands = el('span', 'kana-origin-kanji', entry.oc.join(' or '));
      cands.lang = 'ja';
      const twin = el('span', 'kana-origin-kanji', entry.ho);
      twin.lang = 'ja';
      origin.append('Cut from ', cands, ' — the sources split. ',
        `${entry.h} came from `, twin,
        ', so whether the two are siblings is exactly what is in dispute.');
      /* How the two candidates reconcile is a fact about those particular
         kanji, so it lives in the data. 仁 literally contains 二; 末 does not
         contain 万, and the generic sentence would have been a false claim
         dressed as a structural one. */
      if (entry.ocn) origin.append(' ' + entry.ocn);
    }

    /* ん and を cannot begin a word, and る effectively never does, so those
       cards override the heading rather than claim something untrue. */
    wordsTitle.textContent = entry.wl || 'Words that start with it';

    words.textContent = '';
    entry.w.forEach(w => {
      const li = el('li', 'kana-word');
      const play = el('button', 'kana-play');
      play.type = 'button';
      play.dataset.speak = w.k;
      play.dataset.lang = 'ja';
      play.textContent = '🔊';
      play.setAttribute('aria-label', `Say ${w.r}`);
      if (!available('ja')) play.classList.add('no-voice');

      const body = el('span', 'kana-word-body');
      body.append(
        el('span', 'kana-word-jp', w.k),
        el('span', 'kana-word-romaji', w.r),
        el('span', 'kana-word-en', w.e),
      );

      /* Days whose notes carry no sentences hang the Arabic parallel on the
         example words instead. Absent on day 1's words, so those cards are
         unchanged. */
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
      words.appendChild(li);
    });

    card.classList.add('shown');
    draw(entry);
    if (available('ja')) speak(entry.k, 'ja');

    /* 'nearest' scrolls only when the card is actually off-screen, so tapping a
       letter that is already comfortably in view does not jerk the page. Skipped
       on the initial mount, which must not scroll the reader anywhere. */
    if (mounted) card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  replayBtn.addEventListener('click', () => { if (current) draw(current); });
  sayBtn.addEventListener('click', () => { if (current) speak(current.k, 'ja'); });

  const first = cells.keys().next().value;
  if (!first) return;
  select(first);
  mounted = true;
}

/* Prefix match rather than a single id: day 9 mounts two charts on one page —
   the gojūon in section 3 and the marked rows in section 8 — and mountKanaGrid
   was already written per-element, so this is the only line that had to change.
   Pages with a single `id="kana-grid"` behave exactly as before. */
document.querySelectorAll('[id^="kana-grid"]').forEach(mountKanaGrid);
