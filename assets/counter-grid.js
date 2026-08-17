/* counter-grid.js — the counter sheet's two renders, from window.COUNTERS.
 *
 * Mount points, both optional:
 *   <div id="counter-table"></div>   the master grid — every counter × 1–10 + 何
 *   <div id="counter-notes"></div>   one row per counter: what it does and why
 *
 * Follows kana-grid.js rather than gen_kana.py, per NOTES.md's rule of thumb:
 * the markup here holds no drawings, only a list, so it is rendered at runtime
 * and there is no build step to forget.
 *
 * EVERY CELL IS A BUTTON THAT SAYS ITSELF. This sheet is entirely about sound —
 * the difference between ろくさい and ろっかい is not visible in any useful sense,
 * it is audible — so a silent table would be teaching the one thing the subject
 * is not about. Same argument the reading chapter makes for per-word audio.
 *
 * The changed cells are marked in the MARKUP, not only in colour: each carries a
 * one-character flag (っ, ぷ, が, ✱) after the reading. A reader printing this in
 * greyscale, or with the stylesheet stripped, still gets the pattern — which is
 * the whole reason to own a reference sheet on paper.
 *
 * Romaji follows `.romaji`, so the romaji toggle in `romaji.css` will hide it
 * along with everything else when that component lands.
 */

import { speak, available } from './speech.js';
import { richEl } from './rich-note.js';

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

/* What each tag is called, and the character that marks it in the markup. The
   flag is deliberately the kana that DID the changing rather than an abstract
   symbol: っ, ぷ and が are the three things to look for on the page. */
const FLAGS = {
  g: { mark: 'っ', label: 'the number collapses to a small っ' },
  p: { mark: 'ぷ', label: 'ふ hardens to ぷ' },
  v: { mark: 'が', label: 'か voices to が' },
  x: { mark: '✱', label: 'a different number word' },
  n: { mark: '✱', label: 'a native Japanese numeral' },
};

const flagsFor = (tag) => [...tag].filter((ch) => FLAGS[ch]);

/* SHADING MEANS A SOUND CHANGE, AND ONLY THAT. `x` and `n` cells carry their ✱
   and no background, because the sheet says in as many words that a different
   number word is *not* a sound change — shading them the same colour would have
   the page contradict its own callout. It also makes the split above true:
   the first table then genuinely has no shading in it, which is the claim the
   prose makes and which a screenshot caught being false. */
const isSoundChange = (tag) => /[gpv]/.test(tag);

function readingCell(reading, romaji, tag, alt) {
  const td = el('td', 'ct-cell');
  if (isSoundChange(tag)) td.classList.add('is-changed');

  const b = el('button', 'ct-say');
  b.type = 'button';
  b.dataset.speak = reading;
  b.dataset.lang = 'ja';
  b.setAttribute('aria-label', `Say ${romaji}`);
  if (!available('ja')) b.classList.add('no-voice');

  const jp = el('span', 'ct-jp', reading);
  jp.lang = 'ja';
  b.appendChild(jp);

  flagsFor(tag).forEach((ch) => {
    const f = el('span', 'ct-flag', FLAGS[ch].mark);
    f.title = FLAGS[ch].label;
    b.appendChild(f);
  });

  td.appendChild(b);
  td.appendChild(el('span', 'romaji ct-ro', romaji));
  if (alt) {
    const a = el('span', 'ct-alt');
    a.append('or ');
    const altJp = el('span', 'ct-alt-jp', alt);
    altJp.lang = 'ja';
    a.appendChild(altJp);
    td.appendChild(a);
  }
  return td;
}

/* TWO TABLES, NOT ONE, and the split is the sheet's own argument rather than a
 * layout workaround — though it began as one. Eight columns do not fit the 46rem
 * measure, so the seventh and eighth scrolled out of sight inside the table's own
 * overflow box; the column that vanished was 〜ふん, which is the one the sheet
 * exists to explain. Splitting on `first` puts every shaded cell in the second
 * table and none in the first, which states the thesis in the layout: whether a
 * counter changes is decided before you look at any number. */
const GROUPS = [
  { key: (c) => c.first !== 'voiceless',
    title: 'Start on a vowel or a voiced sound — nothing ever happens',
    cls: 'is-steady' },
  { key: (c) => c.first === 'voiceless',
    title: 'Start voiceless — these are the three that change',
    cls: 'is-shifty' },
];

export function mountCounterTable(root) {
  const data = window.COUNTERS;
  if (!root || !data) return;

  root.textContent = '';
  root.classList.add('ct-mounted');

  GROUPS.forEach((g) => {
    const counters = data.counters.filter(g.key);
    if (!counters.length) return;
    root.appendChild(el('p', `ct-caption ${g.cls}`, g.title));
    root.appendChild(buildTable(counters));
  });

  root.addEventListener('click', (e) => {
    const b = e.target.closest('.ct-say');
    if (b) speak(b.dataset.speak, 'ja');
  });
}

function buildTable(counters) {
  const table = el('table', 'ct-table');

  const thead = el('thead');
  const hr = el('tr');
  hr.appendChild(el('th', 'ct-numhead', '#'));
  counters.forEach((c) => {
    const th = el('th', 'ct-head');
    const jp = el('span', 'ct-head-jp', c.jp);
    jp.lang = 'ja';
    th.append(jp, el('span', 'ct-head-en', c.en));
    /* The classification the whole sheet turns on, on the column it describes. */
    th.appendChild(el('span', `ct-first is-${c.first}`,
      c.first === 'vowel' ? 'starts on a vowel'
      : c.first === 'voiced' ? 'starts voiced'
      : 'starts voiceless'));
    hr.appendChild(th);
  });
  thead.appendChild(hr);

  const tbody = el('tbody');
  for (let n = 1; n <= 10; n++) {
    const tr = el('tr');
    tr.appendChild(el('th', 'ct-num', String(n)));
    counters.forEach((c) => {
      const row = c.rows.find((r) => r.n === n);
      tr.appendChild(row ? readingCell(row.r, row.ro, row.t, row.alt)
                         : el('td', 'ct-cell'));
    });
    tbody.appendChild(tr);
  }

  const qr = el('tr', 'ct-qrow');
  const qh = el('th', 'ct-num');
  const qjp = el('span', null, '何');
  qjp.lang = 'ja';
  qh.appendChild(qjp);
  qr.appendChild(qh);
  counters.forEach((c) => {
    /* The question form carries whatever change the counter makes — なんがい and
       なんぷん are the cheapest possible evidence that さんがい and さんぷん are
       real, which is how chapter 13 derived its rendaku without being told.
       `nanT` comes from the data and is checked there: the first version of this
       line guessed the tag by looking for が in the string, and so flagged
       なんがつ as voiced — the が belongs to がつ, and nothing had happened to it
       at all. A renderer must not infer a fact the data can state. */
    qr.appendChild(readingCell(c.nan, c.nanRo, c.nanT || ''));
  });
  tbody.appendChild(qr);

  table.append(thead, tbody);
  return table;
}

export function mountCounterNotes(root) {
  const data = window.COUNTERS;
  if (!root || !data) return;

  root.textContent = '';
  root.classList.add('cn-mounted');

  const list = el('div', 'cn-list');
  data.counters.forEach((c) => {
    const item = el('div', `cn-item is-${c.first}`);

    const head = el('p', 'cn-head');
    const jp = el('span', 'cn-jp', c.jp);
    jp.lang = 'ja';
    const kanji = el('span', 'cn-kanji', c.kanji);
    kanji.lang = 'ja';
    head.append(jp, kanji, el('span', 'cn-en', c.en));
    item.appendChild(head);

    const meta = el('p', 'cn-meta');
    const a = el('a', 'cn-lesson', `Lesson ${c.lesson}`);
    /* Paths in the data are workspace-root-relative; this sheet lives one level
       down, exactly as course-map.js's consumers assume. */
    a.href = `../${c.path}`;
    const changed = c.rows.filter((r) => r.t).length;
    meta.append(a, el('span', 'cn-sep', ' · '),
      el('span', 'cn-count', `${changed} of 10 readings irregular`));
    item.appendChild(meta);

    /* `rich-note.js` — extracted from this very block on 2026-08-17, once it
       turned out that the word-card renderers had never had it and were showing
       the asterisks to the reader. A data file still cannot write markup. */
    item.appendChild(richEl('p', 'cn-note', c.note));

    list.appendChild(item);
  });
  root.appendChild(list);
}

const table = document.getElementById('counter-table');
if (table) mountCounterTable(table);
const notes = document.getElementById('counter-notes');
if (notes) mountCounterNotes(notes);
