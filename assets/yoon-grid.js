/* yoon-grid.js — the 33 yōon as eleven tappable rows of three.
 *
 * Mount point: <div id="yoon-grid"></div> — anything already inside is replaced,
 * so put a plain-HTML fallback there for the no-JavaScript case.
 *   data-rows   space-separated base kana, to render only those rows
 *   data-words  "off" drops the example words, leaving a bare sound chart
 *
 * Deliberately not a <table>, for the reason kosoado-grid.js gives: an
 * eleven-by-three table of four-line cells is unreadable on a phone. Each base
 * is its own small block instead, and three cells fit across a phone at every
 * width the course supports.
 *
 * The whole cell is the button and it speaks the yōon, not the example word.
 * The chart's job is the sound; the word underneath is evidence that the sound
 * is worth having, and it has its own reading in the word list below.
 *
 * A `gap` cell — six of the thirty-three — is drawn dimmed with its word struck
 * through the "you cannot write this yet" colour. Hiding them would make the
 * chart look complete when it is not, and the gaps are a teaching point: three
 * of them belong to the ぴ row, which needed the small っ in lesson 5 and needs
 * it again here.
 *
 * Data comes from yoon-data.js. Nothing here is hand-written per lesson.
 */

import { speak, available } from './speech.js';

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

export function mountYoon(root) {
  /* `data-yoon` names the global to read, the same arrangement kana-grid.js has
     with `data-kana` and vocab-list.js with `data-vocab`. Day 9 mounts the
     katakana set (window.YOON_KATAKANA) on the same component; the two are kept
     apart rather than merged because their gaps are different — and the fact
     that they are different is the whole point of that section. */
  const data = window[root.dataset.yoon || 'YOON'];
  if (!root || !data) return;
  const { cols, rows } = data;

  const only = root.dataset.rows ? root.dataset.rows.trim().split(/\s+/) : null;
  const showWords = root.dataset.words !== 'off';

  root.textContent = '';
  root.classList.add('yo-mounted');

  /* One header above every row: which column is which vowel. The separators are
     in the markup, not in CSS gaps — with the stylesheet stripped this still has
     to read "ゃ ya · the a column" rather than "yathe a column". */
  const head = el('div', 'yo-head');
  head.append(el('span', 'yo-headlabel', 'Small kana'));
  const headline = el('div', 'yo-line yo-headline');
  cols.forEach(c => {
    const cell = el('div', 'yo-col');
    const s = el('span', 'yo-colchar', c.s);
    s.lang = 'ja';
    cell.append(s, el('span', 'yo-colroma', ` ${c.r} · `),
                el('span', 'yo-colen', `the ${c.v} column`));
    headline.appendChild(cell);
  });
  head.appendChild(headline);
  root.appendChild(head);

  const speakable = available('ja');

  rows.filter(r => !only || only.includes(r.b)).forEach(row => {
    const block = el('section', 'yo-row');

    const label = el('h4', 'yo-rowlabel');
    const base = el('span', 'yo-rowbase', row.b);
    base.lang = 'ja';
    label.append(base, el('span', 'yo-rowroma', ` ${row.br} `));
    /* Which mark the base is wearing, said out loud: the ぎ じ び rows are
       lesson 5's tenten and the ぴ row is its maru, so a reader who has
       forgotten why ぎ exists is one word away from the answer. */
    if (row.mk) label.appendChild(el('span', 'yo-rowmk', `· ${row.mk}`));

    const line = el('div', 'yo-line');
    row.cells.forEach((c, i) => {
      const isGap = Boolean(c.gap);
      const b = el('button', `yo-cell${isGap ? ' is-gap' : ''}`);
      b.type = 'button';
      b.setAttribute('aria-label', `Say ${c.r}`);
      if (!speakable) b.classList.add('no-voice');

      const k = el('span', 'yo-jp', c.k);
      k.lang = 'ja';
      /* The column header is hidden on a phone, where it would sit too far
         above the row it labels. Each cell carries its own vowel instead. */
      b.append(el('span', 'yo-vow', cols[i].v), k, el('span', 'yo-roma', c.r));

      if (showWords) {
        const w = el('span', isGap ? 'yo-word is-gap' : 'yo-word');
        const wj = el('span', 'yo-wordjp', c.gap || c.w);
        wj.lang = 'ja';
        w.append(wj, el('span', 'yo-worden', c.we));
        b.appendChild(w);
      }

      b.addEventListener('click', () => {
        speak(c.k, 'ja');
        b.classList.add('speaking');
        setTimeout(() => b.classList.remove('speaking'), 600);
      });
      line.appendChild(b);
    });

    block.append(label, line);
    root.appendChild(block);
  });
}

/* Prefix match, as kana-grid.js and kana-drill.js do: day 9 carries both the
   hiragana-facing chart and the katakana one on a single page. */
document.querySelectorAll('[id^="yoon-grid"]').forEach(mountYoon);
