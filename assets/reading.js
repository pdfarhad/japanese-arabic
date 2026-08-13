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
 * ---- and every word in the line is a third button ----
 *
 * Tap a word, hear that word. The line button stays exactly as it was: the two
 * are different questions — "how does this sentence run" and "what is that word"
 * — and a reader stuck on one word should not have to sit through the sentence
 * to hear it again.
 *
 * THE BOOK DOES THE CUTTING, NOT THIS FILE. Minna no Nihongo spaces a beginner's
 * line into phrases, brackets the subjects it expects to be dropped, separates a
 * foreign name with ・, and prints furigana over the words that carry kanji. Those
 * four marks are already on the page, and a word is what falls between them.
 * Inventing a boundary the book does not print would be this renderer stating a
 * fact of its own, which is the one thing it may never do — and it would teach a
 * lie the first time it split わたしは, because every speech engine reads a lone
 * は as "ha". A particle stays with the word in front of it.
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
export function spoken(line) {
  if (line.say) return line.say;
  return line.jp
    .replace(RUBY, (_, explicit, kanji, reading) => reading)
    .replace(/^……/, '')
    .replace(MARKS, '')
    .replace(/　/g, ' ')
    .trim();
}

/* ---------- the line, cut into words ---------- */

/* The four marks the book prints, and nothing else. A gap is anything that is on
   the page but not in the utterance-word before it: the spacing, the ellipsis
   that opens an answer, and the ・ between a given name and a family one. */
const GAP = /^(?:[　 ]+|……|・)/;
/* A bracketed run is a unit the book itself sets apart — ［あなたは］ is one word
   even though nothing inside it is spaced. */
const BRACKET = /^(?:［[^］]*］|「[^」]*」|（[^）]*）)/;
/* Anchored copy of RUBY: `g` regexes carry lastIndex between calls, and this one
   is asked the same question at every character. */
const RUBY_AT = new RegExp(`^(?:${RUBY.source})`);
/* Punctuation closes the word it follows rather than opening the next one. */
const CLOSERS = '、。？！';
/* Kana that are read differently when they stand alone. Never cut one off. */
const PARTICLE = /^[はへをがにもとのやか]{1,2}$/;
/* The book's layout marks: printed, never said. ｜ is our own ruby marker, and
   （…） is the book's footnote bracket around （では） — a voice reading the
   parentheses aloud would turn a footnote into a word. */
const MARKS = /[［］「」（）｜]/g;
/* What a voice can say: kana, the長音 bar, iteration marks, and punctuation it
   hears as a pause. A kanji or a digit left in here is a reading nobody checked. */
const SAYABLE = /^[ぁ-ゖァ-ヺーゝゞ・、。？！\s]+$/;

/* What the page PRINTS for a run of source: ruby resolved to its base, the
   book's layout marks off. This is what `w` keys are written against, so a data
   file can say { "地下1階": "ちかいっかい" } and read like the page. */
const printed = src => src.replace(RUBY, (_, explicit, kanji) => explicit || kanji).replace(MARKS, '');

/* Source in, an array of `{ gap }` and `{ src, say }` out — losslessly: joining
   every part back together gives the line character for character, which is what
   keeps a reproduction a reproduction. */
function cut(jp) {
  const out = [];
  let buf = '';
  const flush = () => { if (buf) { out.push({ src: buf }); buf = ''; } };

  for (let i = 0; i < jp.length;) {
    const rest = jp.slice(i);
    let m = GAP.exec(rest);
    if (m) { flush(); out.push({ gap: m[0] }); i += m[0].length; continue; }
    m = BRACKET.exec(rest);
    if (m) { flush(); out.push({ src: m[0] }); i += m[0].length; continue; }
    /* Ruby travels with its base, always: 会社員《かいしゃいん》 is one word and
       carries its own reading. */
    m = RUBY_AT.exec(rest);
    if (m) { flush(); out.push({ src: m[0], say: m[3] }); i += m[0].length; continue; }
    buf += jp[i];
    i += 1;
    if (CLOSERS.includes(jp[i - 1])) flush();
  }
  flush();

  /* A bare particle is not a word — it goes back onto the one before it. Say
     first, then source: the reading of what is already there has to be taken
     before the particle is appended to it. */
  const joined = [];
  for (const part of out) {
    const prev = joined[joined.length - 1];
    if (part.src && prev && prev.src && PARTICLE.test(printed(part.src))) {
      prev.say = (prev.say ?? printed(prev.src)) + printed(part.src);
      prev.src += part.src;
    } else joined.push({ ...part });
  }
  return joined;
}

/* `w` — the escape hatch, and the only place a word's reading is written by
   hand. It exists for the same reason `say` does: where the page prints a
   numeral, the furigana cannot voice it. Keys are what is printed, so a key may
   span several cut words (「9」 → きゅう, 地下1階 → ちかいっかい) and they are
   matched longest-first. A key that matches nothing is a typo, and
   test_reading.mjs fails on it rather than letting it pass silently. */
function regroup(parts, w) {
  if (!w) return parts;
  const out = [];
  let i = 0;
  while (i < parts.length) {
    if (parts[i].gap) { out.push(parts[i]); i += 1; continue; }
    let end = 0;
    for (let j = parts.length; j > i && !end; j--) {
      const run = parts.slice(i, j);
      if (run.some(p => p.gap)) continue;
      const src = run.map(p => p.src).join('');
      const key = printed(src);
      if (Object.hasOwn(w, key)) { end = j; out.push({ src, say: w[key], key }); }
    }
    if (!end) { out.push(parts[i]); i += 1; } else i = end;
  }
  return out;
}

/* The words of a line, each with the text to print and the kana to say. */
export function wordsOf(line) {
  return regroup(cut(line.jp), line.w).map(part => {
    if (part.gap) return part;
    const say = (part.say ?? printed(part.src)).replace(MARKS, '');
    return { ...part, say, speakable: SAYABLE.test(say) };
  });
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

/* The line as printed, with every word in it a button. The gaps between words are
   text nodes, so the paragraph still reads out — and still prints — as the
   book's own line, spacing included.

   `tabindex="-1"` is deliberate: a chapter is over two hundred words, and putting
   them all in the tab order would bury the two controls that matter — the line's
   own 🔊 and its EN·AR — behind a walk through the whole page. They stay
   reachable to a screen reader, which navigates by element rather than by tab.

   A word the furigana cannot voice is rendered as plain text rather than as a
   button that would say a reading nobody checked. With `w` filled in there are
   none; the test asserts that, so the day a new chapter arrives with a numeral
   in it the gap is a failure rather than a dead word. */
function jpLine(line, speakable) {
  const p = el('p', 'rd-jp');
  p.lang = 'ja';
  for (const part of wordsOf(line)) {
    if (part.gap) { p.appendChild(document.createTextNode(part.gap)); continue; }
    if (!part.speakable) { p.appendChild(withRuby(part.src)); continue; }
    const b = el('button', 'rd-w');
    b.type = 'button';
    b.dataset.speak = part.say;
    b.dataset.lang = 'ja';
    b.setAttribute('tabindex', '-1');
    if (!speakable) b.classList.add('no-voice');
    b.appendChild(withRuby(part.src));
    p.appendChild(b);
  }
  return p;
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

  row.appendChild(jpLine(line, opts.jaSpeakable));

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
