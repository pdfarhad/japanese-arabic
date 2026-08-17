/* number-say.js — the two series, and a number you can type.
 *
 * Mount points, both optional:
 *   <div id="number-series"></div>   漢語 against 和語, 0 to 10, every cell speaks
 *   <div id="number-reader"></div>   type a numeral, see and hear how it is said
 *
 * Reads `window.NUMBERS` for the words and `window.readNumber` for the rule.
 * It states nothing itself — record 0009 — which here matters more than usual,
 * because the reader answers numbers nobody has proof-read. Every string it can
 * show came from `number-data.js` and is checked by `scripts/check_numbers.py`.
 *
 * WHY THE READER HAS TWO MODES. Typing a number is exploration and the answer
 * should be there instantly; being GIVEN a number is retrieval, and an answer
 * on screen deletes the beat where the learner tries it themselves. So 🎲 hides
 * the reading behind a reveal and typing does not. That one difference is the
 * whole reason this is a lesson component and not a converter.
 *
 * THE BLOCKS ARE THE POINT, not the string. Chapter 13 taught that Japanese is
 * written in threes and said in fours; this draws both lines from the same
 * number, so the regrouping is something the reader watches happen rather than
 * something a paragraph asserts.
 */

import { speak, available } from './speech.js';

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

const jp = (tag, cls, text) => {
  const n = el(tag, cls, text);
  n.lang = 'ja';
  return n;
};

/* A speak button wrapping Japanese text. `data-speak`/`data-lang` is the same
   contract speech.js wires everywhere else, so these work through the delegated
   listener even where a component forgets its own. */
function sayButton(reading, label, cls) {
  const b = el('button', cls);
  b.type = 'button';
  b.dataset.speak = reading;
  b.dataset.lang = 'ja';
  b.setAttribute('aria-label', `Say ${label}`);
  if (!available('ja')) b.classList.add('no-voice');
  return b;
}

/* ------------------------------------------------ the two series, side by side */

export function mountSeries(root) {
  const data = window.NUMBERS;
  if (!root || !data) return;

  root.textContent = '';
  root.classList.add('ns-mounted');

  const native = new Map(data.native.map((w) => [w.n, w]));

  const table = el('table', 'ns-table');
  const thead = el('thead');
  const hr = el('tr');
  hr.appendChild(el('th', 'ns-numhead', '#'));

  const head = (jpText, ro, en) => {
    const th = el('th', 'ns-head');
    th.append(jp('span', 'ns-head-jp', jpText),
              el('span', 'ns-head-ro', ro),
              el('span', 'ns-head-en', en));
    return th;
  };
  /* Kana first, kanji second — the course's standing arrangement, since kanji
     is recognition-only here. 漢語数詞 and 和語数詞 are named in the lesson's
     own prose rather than in the header, where there is no room for both. */
  hr.append(head('かんご 漢語', 'kango — borrowed from Chinese',
                 'does all the arithmetic'),
            head('わご 和語', 'wago — the native series',
                 'counts things, and stops at ten'));
  thead.appendChild(hr);

  const tbody = el('tbody');
  data.sino.forEach((s) => {
    const tr = el('tr');
    tr.appendChild(el('th', 'ns-num', String(s.n)));
    tr.appendChild(seriesCell(s));

    const w = native.get(s.n);
    if (w) {
      tr.appendChild(seriesCell(w));
    } else {
      /* Zero has no native form, and the gap is a fact rather than missing
         data: a language names nothing zero times, so the older series never
         needed the word. Drawn rather than skipped for the same reason
         yoon-data.js dashes its empty cells. */
      const td = el('td', 'ns-cell is-empty');
      td.append(el('span', 'ns-dash', '—'),
                el('span', 'ns-empty-note', 'the native series has no zero'));
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });

  table.append(thead, tbody);
  root.appendChild(table);

  root.addEventListener('click', (e) => {
    const b = e.target.closest('.ns-say');
    if (b) speak(b.dataset.speak, 'ja');
  });
}

function seriesCell(w) {
  const td = el('td', 'ns-cell');
  const b = sayButton(w.r, w.ro, 'ns-say');
  b.append(jp('span', 'ns-k', w.k), jp('span', 'ns-r', w.r));
  td.appendChild(b);
  td.appendChild(el('span', 'romaji ns-ro', w.ro));

  /* An alternative reading is a second word, so it gets its own button rather
     than being printed as a footnote to the first. */
  if (w.alt) {
    const alt = el('span', 'ns-alt');
    const ab = sayButton(w.alt, w.altRo, 'ns-say ns-say-alt');
    ab.appendChild(jp('span', 'ns-alt-jp', w.alt));
    alt.append('or ', ab, el('span', 'romaji ns-alt-ro', ` ${w.altRo}`));
    td.appendChild(alt);
  }
  if (w.note) td.appendChild(el('span', 'ns-note', w.note));
  if (w.altNote) td.appendChild(el('span', 'ns-note', w.altNote));
  return td;
}

/* ---------------------------------------------------------------- the reader */

/* Numbers worth being handed: every irregular at least once, both sides of the
   一 rule, and a couple of shapes a learner actually meets — a year, a price, a
   population. Chosen rather than random so that a reader who presses 🎲 ten
   times has met every sound change; a uniform draw over a billion numbers would
   almost always give an eight-digit number with no irregular in it at all. */
const DECK = [
  4, 7, 9, 10, 14, 18, 33, 46, 58, 67, 99,
  100, 108, 300, 469, 600, 800, 900, 999,
  1000, 1080, 1980, 2026, 3000, 3600, 6000, 8000, 8800, 9999,
  10000, 12345, 38000, 100000, 360000,
  1000000, 3000000, 10000000, 15000000, 100000000, 123456789,
];

export function mountReader(root) {
  const data = window.NUMBERS;
  const read = window.readNumber;
  if (!root || !data || !read) return;

  root.textContent = '';
  root.classList.add('nr-mounted');

  const form = el('div', 'nr-form');

  const label = el('label', 'nr-label', 'Type a number');
  const input = el('input', 'nr-input');
  input.type = 'text';
  input.inputMode = 'numeric';
  input.autocomplete = 'off';
  input.id = `${root.id}-input`;
  input.placeholder = '2026';
  label.htmlFor = input.id;

  const dice = el('button', 'nr-dice');
  dice.type = 'button';
  dice.append(el('span', 'nr-dice-face', '🎲'), 'Give me one');

  form.append(label, input, dice);

  const out = el('div', 'nr-out');
  const hint = el('p', 'nr-hint');
  hint.append(`Anything from 0 to ${data.max.toLocaleString('en-US')}. Above that comes `,
              jp('span', null, '兆'), ', which is a different chapter.');

  root.append(form, out, hint);

  let asking = false;

  const render = (n, say) => {
    out.textContent = '';
    const r = read(n);
    if (!r.ok) {
      out.appendChild(el('p', 'nr-bad',
        `${input.value.trim()} is outside 0 – ${data.max.toLocaleString('en-US')}.`));
      return;
    }

    /* Line 1: how it is written. Always shown, in both modes — it is the
       question, not the answer. */
    const written = el('div', 'nr-line nr-written');
    written.append(el('p', 'nr-cap', 'how it is written · commas every three'),
                   el('p', 'nr-digits', r.digits));
    out.appendChild(written);

    if (asking) {
      const ask = el('div', 'nr-ask');
      ask.appendChild(el('p', 'nr-ask-say', 'Say it out loud. Then check.'));
      const reveal = el('button', 'nr-reveal');
      reveal.type = 'button';
      reveal.textContent = 'Show me';
      reveal.addEventListener('click', () => { asking = false; render(n, true); });
      ask.appendChild(reveal);
      out.appendChild(ask);
      return;
    }

    /* Line 2: how it is said — the same digits cut every four. This is the
       chapter-13 figure, drawn from the number in front of you. */
    const said = el('div', 'nr-line nr-said');
    said.appendChild(el('p', 'nr-cap', 'how it is said · cut every four'));
    const blocks = el('p', 'nr-blocks');
    r.blocks.forEach((b, i) => {
      if (i) blocks.appendChild(el('span', 'nr-plus', '+'));
      const chunk = el('span', 'nr-block');
      chunk.appendChild(el('span', 'nr-bd', b.digits));
      if (b.unitK) chunk.appendChild(jp('span', 'nr-bu', b.unitK));
      blocks.appendChild(chunk);
    });
    said.appendChild(blocks);
    out.appendChild(said);

    /* Line 3: the answer, with the button that makes it a sound. */
    const answer = el('div', 'nr-line nr-answer');
    const kana = sayButton(r.r, r.ro, 'nr-say');
    kana.appendChild(jp('span', 'nr-kana', r.r));
    answer.append(jp('p', 'nr-kanji', r.k), kana,
                  el('p', 'romaji nr-ro', r.ro));
    out.appendChild(answer);

    /* Spoken only when the reader asked to be told — pressing "Show me". Typing
       must stay silent, or 2026 says に, にじゅう, にひゃくに, にせんにじゅうろく
       one keystroke at a time and the page becomes unusable. */
    if (say) speak(r.r, 'ja');
  };

  input.addEventListener('input', () => {
    const raw = input.value.replace(/[,\s]/g, '');
    if (raw === '') { out.textContent = ''; return; }
    asking = false;
    const n = Number(raw);
    if (!Number.isInteger(n)) {
      out.textContent = '';
      out.appendChild(el('p', 'nr-bad', `${input.value.trim()} is not a whole number.`));
      return;
    }
    render(n);
  });

  dice.addEventListener('click', () => {
    const n = DECK[Math.floor(Math.random() * DECK.length)];
    input.value = n.toLocaleString('en-US');
    asking = true;
    render(n);
  });

  /* MOUNTS SHOWING SOMETHING, and that is not decoration. An empty box asks the
     reader to guess what it does before it will do anything, and an empty box is
     what a screenshot of this lesson shows.

     12,345 rather than a year, because the opening example has to make the
     component's own point: a four-digit number puts the whole reading in ONE
     block, so the "cut every four" line comes out identical to the digits above
     it and the figure appears to be doing nothing. Five digits is the smallest
     number where the two lines disagree. */
  const start = Number(root.dataset.start ?? 12345);
  if (Number.isInteger(start)) {
    input.value = start.toLocaleString('en-US');
    render(start);
  }
}

/* Prefix mounts, like kana-grid.js and yoon-grid.js, so a page may carry more
   than one of either without the second silently doing nothing. */
document.querySelectorAll('[id^="number-series"]').forEach(mountSeries);
document.querySelectorAll('[id^="number-reader"]').forEach(mountReader);
