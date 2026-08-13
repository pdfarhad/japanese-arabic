/* reading.js — a source text, line for line, with a way in beside each line.
 *
 * Mount point: any element whose id STARTS WITH "reading" — same prefix match as
 * one-day.js and kana-grid.js, so a page can mount more than one. Anything already
 * inside is replaced, so leave the no-JavaScript fallback there.
 *
 *   <div id="reading" data-reading="READING1"></div>
 *
 * ---- What a reading chapter is, and what this renderer must not do ----
 *
 * A LESSON is written: the material is reordered, cut and explained. A READING
 * CHAPTER is a printed page reproduced — the lines stay in the book's order, in
 * the book's wording, with the book's own furigana. So this file lays lines out
 * and adds nothing to them. Everything it can offer sits in two buttons at the
 * end of the line:
 *
 *   🔊       hear the line
 *   EN·AR    reveal English, Arabic, the transliteration and any note
 *
 * Both start closed. Nothing is revealed until it is asked for, because the whole
 * value of a reading page is the beat where you try the line yourself first.
 *
 * ---- Ruby ----
 *
 * Aozora Bunko's markup: 会社員《かいしゃいん》, and ｜ to mark the base by hand where
 * "the kanji run immediately before" would take too much. Markers become <ruby>
 * ELEMENTS, never strings, so nothing inside 《…》 can arrive as markup.
 *
 * ---- The spoken form is derived, not stored ----
 *
 * Swapping every ruby base for its reading turns the line into kana, so the audio
 * is built from the furigana printed above it and cannot contradict it. A line
 * whose numerals the ruby cannot voice (地下1階 → ちかいっかい) carries an explicit
 * `say`. That is the same rule one-day.js follows for romaji: derive it from the
 * one place it is written down, never keep a second copy.
 */

import { available } from './speech.js';

const DEFAULT = 'READING1';

/* ｜ marks the base explicitly; otherwise it is the run of kanji before 《…》.
   々 and 〆 are in the class because they behave as kanji inside a name. */
const RUBY = /(?:｜([^《》｜]+)|([々〆一-鿿豈-﫿]+))《([^》]+)》/g;

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

/* Text in, DOM out. Runs between markers are text nodes, so a stray < in the
   source can never become an element. */
function withRuby(text) {
  const frag = document.createDocumentFragment();
  let last = 0;
  for (const m of text.matchAll(RUBY)) {
    const before = text.slice(last, m.index);
    if (before) frag.appendChild(document.createTextNode(before));
    const ruby = el('ruby', null, m[1] || m[2]);
    ruby.appendChild(el('rt', null, m[3]));
    frag.appendChild(ruby);
    last = m.index + m[0].length;
  }
  const tail = text.slice(last);
  if (tail) frag.appendChild(document.createTextNode(tail));
  return frag;
}

/* The line as it should be SAID. Ruby bases become their readings; the book's
   layout marks come out, because a speech voice reads ［ and 「 as pauses or as
   nothing depending on the engine, and the ellipsis that opens an answer is a
   typographic convention rather than a sound. The wide space becomes a normal
   one — Minna no Nihongo spaces its lines to show word boundaries to a learner,
   and that is not part of the utterance either. */
function spoken(line) {
  if (line.say) return line.say;
  return line.jp
    .replace(RUBY, (_, explicit, kanji, reading) => reading)
    .replace(/^……/, '')
    .replace(/[［］「」｜]/g, '')
    .replace(/　/g, ' ')
    .trim();
}

function sayButton(text, lang, label, speakable) {
  const b = el('button', lang === 'ar' ? 'say say-ar' : 'say', '🔊');
  b.type = 'button';
  b.dataset.speak = text;
  b.dataset.lang = lang;
  b.setAttribute('aria-label', label);
  /* speech.js marks these itself on load, but a component that mounts later
     would show a live-looking button for a voice the device does not have until
     the next voiceschanged fires. Mark it here too. */
  if (!speakable) b.classList.add('no-voice');
  return b;
}

/* The reveal. One button, one panel, and the panel is `hidden` rather than
   display:none in CSS so it stays closed for a reader with no stylesheet. */
function translation(line, id, arSpeakable) {
  const box = el('div', 'rd-tx');
  box.id = id;
  box.hidden = true;

  if (line.en) box.appendChild(el('p', 'rd-en', line.en));

  if (line.ar) {
    const p = el('p', 'rd-ar');
    const ar = el('span', 'ar-i', line.ar);
    ar.lang = 'ar';
    p.append(ar, ' ', sayButton(line.ar, 'ar', `Play the Arabic: ${line.at || line.ar}`, arSpeakable));
    box.appendChild(p);
  }
  if (line.at) box.appendChild(el('p', 'rd-at', line.at));
  if (line.n) box.appendChild(el('p', 'rd-note', line.n));
  return box;
}

function lineRow(line, id, opts) {
  const row = el('div', 'rd-line');
  if (line.paren) row.classList.add('is-paren');
  if (line.sp) row.classList.add('has-sp');
  /* A continuation line — the same speaker still talking — keeps the label
     column empty so the eye can see at a glance where a turn begins. */
  if (!line.sp && !line.i && opts.dialogue) row.classList.add('is-cont');

  const label = el('span', 'rd-lab');
  if (line.i) label.textContent = `${line.i}.`;
  else if (line.sp) label.appendChild(withRuby(`${line.sp}：`));
  row.appendChild(label);

  const jp = el('p', 'rd-jp');
  jp.lang = 'ja';
  jp.appendChild(withRuby(line.jp));
  row.appendChild(jp);

  const acts = el('span', 'rd-acts');
  const txId = `tx-${id}`;
  acts.appendChild(sayButton(spoken(line), 'ja', 'Play this line', opts.jaSpeakable));

  const tr = el('button', 'rd-tr', 'EN·AR');
  tr.type = 'button';
  tr.setAttribute('aria-expanded', 'false');
  tr.setAttribute('aria-controls', txId);
  tr.setAttribute('aria-label', 'Show the English and Arabic for this line');
  acts.appendChild(tr);
  row.appendChild(acts);

  const box = translation(line, txId, opts.arSpeakable);
  row.appendChild(box);

  tr.addEventListener('click', () => {
    const open = box.hidden;
    box.hidden = !open;
    row.classList.toggle('is-open', open);
    tr.setAttribute('aria-expanded', String(open));
    tr.setAttribute('aria-label', open
      ? 'Hide the English and Arabic for this line'
      : 'Show the English and Arabic for this line');
  });

  return row;
}

export function mountReading(root) {
  if (!root) return;
  const data = window[root.dataset.reading || DEFAULT];
  if (!data) return;

  const jaSpeakable = available('ja');
  const arSpeakable = available('ar');
  const opts = { jaSpeakable, arSpeakable };

  root.textContent = '';
  root.classList.add('rd-mounted');

  data.chapters.forEach(ch => {
    const chap = el('section', 'rd-chapter');
    chap.id = `ch-${ch.n}`;

    const head = el('div', 'rd-chaphead');
    const num = el('h2', 'rd-chapno');
    num.lang = 'ja';
    num.appendChild(withRuby(ch.jp));
    head.appendChild(num);
    if (ch.title) head.appendChild(el('p', 'rd-chaptitle', ch.title));
    if (ch.lede) head.appendChild(el('p', 'rd-chaplede', ch.lede));
    chap.appendChild(head);

    ch.sections.forEach(sec => {
      const block = el('section', 'rd-sec');
      block.id = sec.id;

      const h = el('h3', 'rd-sechead');
      const label = el('span', 'rd-secjp', sec.jp);
      label.lang = 'ja';
      /* The English name is inside the heading rather than in a line under it:
         one element, so it can never be separated from the Japanese it names. */
      h.append(label, el('span', 'rd-secen', sec.title));
      block.appendChild(h);

      if (sec.heading) {
        const t = el('p', 'rd-title');
        const jp = el('span', 'rd-titlejp');
        jp.lang = 'ja';
        jp.appendChild(withRuby(sec.heading));
        t.append(jp,
          sayButton(sec.heading.replace(RUBY, (_, e2, k, r) => r).replace(/　/g, ' '),
            'ja', 'Play the title', jaSpeakable));
        if (sec.headingEn) t.appendChild(el('span', 'rd-titleen', sec.headingEn));
        block.appendChild(t);
      }

      const dialogue = sec.lines.some(l => l.sp);
      let item = null;

      sec.lines.forEach((line, idx) => {
        if (line.sep) {
          item = null;
          block.appendChild(el('div', 'rd-sep'));
          return;
        }
        /* A numbered item and everything under it is one group, so the
           question and its ……answer stay together when the page reflows. */
        if (line.i || !item) {
          item = el('div', 'rd-item');
          block.appendChild(item);
        }
        item.appendChild(lineRow(line, `${sec.id}-${idx}`, { ...opts, dialogue }));
      });

      chap.appendChild(block);
    });

    root.appendChild(chap);
  });
}

document.querySelectorAll('[id^="reading"]').forEach(mountReading);
