/* one-day.js — a walk that carries a set of words in a fixed order.
 *
 * Mount point: any element whose id STARTS WITH "one-day" — anything already
 * inside is replaced, so put a plain-HTML fallback there for the no-JavaScript
 * case. The prefix match is the same arrangement kana-grid.js, kana-drill.js and
 * yoon-grid.js use, and for the same reason: one page may mount two walks.
 *
 * Three optional attributes, all defaulting to the course-wide walk so every
 * page written before them renders byte-for-byte as it did:
 *
 *   data-story  which global holds the scenes        (default ONEDAY)
 *   data-sets   which vocabulary globals resolve the markers, space-separated
 *                                                    (default the lessons 4-7 sets)
 *   data-scenes limit to these scene ids, space-separated  (default all)
 *
 * `data-scenes` is why lesson 6 can mount only "asking" while the reference
 * sheet mounts all fourteen — the paragraph is authored once and appears in two
 * places rather than being copied into both. `data-story` and `data-sets` are
 * the same idea one level up, added 2026-08-07 for chapter 11: NOTES.md's
 * story-first rule makes every vocabulary chapter carry its own short walk, and
 * merging those into ONEDAY would break the course-wide walk's own premise that
 * it holds exactly the words of lessons 4-7. Same call as `data-vocab` on
 * vocab-list.js — one renderer, one data file per chapter, never a shared array.
 *
 * Prose carries its Japanese as {{kana}} markers. This file turns each into a
 * speak button and derives the word strip under each scene from them, so there
 * is no second list of words to drift out of sync with the sentences.
 *
 * Neither the romaji nor the English gloss is stored in the scene data. Both are
 * read off the four vocabulary sets, so a reading or a meaning shown here cannot
 * disagree with the word card it came from.
 *
 * Romaji appears on a word's FIRST occurrence in the page only — NOTES.md calls
 * romaji a crutch with a deadline, and repeating it every time means it never
 * comes off. The gloss appears every time, because it is the opposite kind of
 * thing: not a crutch to be withdrawn but the meaning the walk is teaching.
 */

import { available } from './speech.js';
import { wordsLanguage, onWordsLanguage } from './lang-switch.js';

const MARKER = /\{\{([^}]+)\}\}/g;
const DEFAULT_STORY = 'ONEDAY';
const DEFAULT_SETS = ['VOCAB', 'VOCAB5', 'VOCAB6', 'VOCAB7'];

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

/* Build a kana -> word-record lookup from the named word sets. First set wins:
   どこ and だれ are in both lesson 5's and lesson 6's, with the same reading and
   the same Arabic either way. The kana stays the key in both languages — it is
   what the prose markers are written in and what identifies a word regardless
   of which script is on screen.

   A chapter walk passes only its own set, so a word this chapter teaches is
   resolved against this chapter's card even where an earlier set also has it —
   だれ and どなた are in VOCAB6 and VOCAB11 both, and lesson 11 means its own. */
function lookup(sets) {
  const map = new Map();
  for (const name of sets) {
    const set = window[name];
    if (!set) continue;
    for (const w of set.words) if (!map.has(w.k)) map.set(w.k, w);
  }
  return map;
}

/* The walk used to assume you already knew all 230 words, which made it a memory
   test and nothing else — you cannot learn みち from a sentence that only tells
   you a road is there. Taking the first sense keeps the gloss to a few words:
   the `e` fields run to a median of six characters once the alternatives are
   dropped, and to twenty at the very worst. */
const firstSense = e => e.split(/[,;(]|\s+—\s+/)[0].trim();

/* Wired for the delegated listener in speech.js rather than its own handler,
   and marked dead up front when the device has no voice for the language — a
   button that looks live and does nothing is worse than one that says so.
 *
 * In Arabic mode the same button carries the Arabic word, its transliteration
 * and the same English gloss, and speaks with the Arabic voice. `data-word`
 * holds the kana in BOTH modes: it is the word's identity, and the strip, the
 * checker and the tests all need something stable to key on while the visible
 * script changes underneath. */
function wordButton(rec, opts) {
  const { lang, showTranslit, showGloss, speakable } = opts;
  const ar = lang === 'ar';
  const text = ar ? rec.a : rec.k;
  const translit = ar ? rec.at : rec.r;
  const gloss = firstSense(rec.e);

  const b = el('button', 'od-w');
  b.type = 'button';
  b.dataset.word = rec.k;
  b.dataset.speak = text;
  b.dataset.lang = ar ? 'ar' : 'ja';
  b.setAttribute('aria-label', `Say ${translit || text} — ${gloss}`);
  if (!speakable) b.classList.add('no-voice');

  const k = el('span', 'od-wk', text);
  k.lang = ar ? 'ar' : 'ja';
  b.appendChild(k);
  /* The spaces and brackets are in the markup, not CSS gaps: with the stylesheet
     stripped this must still read "みち michi (road)" and not run the three
     together. */
  if (showTranslit && translit) b.appendChild(el('span', 'od-wr', ` ${translit}`));
  if (showGloss && gloss) b.appendChild(el('span', 'od-wen', ` (${gloss})`));
  return b;
}

export function mountOneDay(root) {
  if (!root) return;
  const data = window[root.dataset.story || DEFAULT_STORY];
  if (!data) return;

  const only = root.dataset.scenes ? root.dataset.scenes.trim().split(/\s+/) : null;
  const sets = root.dataset.sets ? root.dataset.sets.trim().split(/\s+/) : DEFAULT_SETS;
  const lang = wordsLanguage();
  const words = lookup(sets);
  const speakable = available(lang);
  const seen = new Set();

  /* Re-render on a language change. Registered once per root — mountOneDay is
     itself the re-render, so without the guard every switch would add another
     listener and the next one would rebuild the page N times. */
  if (!root.dataset.langWired) {
    root.dataset.langWired = '1';
    onWordsLanguage(() => mountOneDay(root));
  }

  root.textContent = '';
  root.classList.add('od-mounted');

  const scenes = data.scenes.filter(s => !only || only.includes(s.id));
  const blocks = [];

  scenes.forEach(scene => {
    const block = el('section', 'od-scene');
    block.id = `scene-${scene.id}`;
    blocks.push(block);

    const head = el('h3', 'od-scenehead');
    head.append(el('span', 'od-scenen', String(scene.n)),
                el('span', 'od-scenetitle', scene.title),
                sceneToggle(block));
    block.appendChild(head);
    if (scene.lede) block.appendChild(el('p', 'od-lede', scene.lede));

    const strip = el('p', 'od-strip');
    strip.lang = lang === 'ar' ? 'ar' : 'ja';
    const inStrip = new Set();

    scene.body.forEach(para => {
      const p = el('p', 'od-p');
      let last = 0;
      /* The prose carries inline <em>, so the runs between markers go in as
         HTML. The marked words become elements, never strings, so nothing
         inside {{…}} can arrive as markup. */
      for (const m of para.matchAll(MARKER)) {
        const before = para.slice(last, m.index);
        if (before) p.insertAdjacentHTML('beforeend', before);

        const kana = m[1];
        const rec = words.get(kana);
        const first = !seen.has(kana);
        seen.add(kana);
        /* A marker naming a word no set has is a typo. check_one_day.py is what
           catches it; here it would throw, so render the raw marker text and let
           it be visibly wrong rather than break the page. */
        if (!rec) { p.insertAdjacentHTML('beforeend', kana); last = m.index + m[0].length; continue; }

        p.appendChild(wordButton(rec, {
          lang, showTranslit: first, showGloss: true, speakable,
        }));

        /* The strip stays bare — the word only, no transliteration and no
           gloss. It is the checklist you scan to see whether you have the
           scene, and glossing it would make it a second copy of the
           paragraph. */
        if (!inStrip.has(kana)) {
          inStrip.add(kana);
          strip.appendChild(wordButton(rec, {
            lang, showTranslit: false, showGloss: false, speakable,
          }));
        }
        last = m.index + m[0].length;
      }
      const tail = para.slice(last);
      if (tail) p.insertAdjacentHTML('beforeend', tail);
      block.appendChild(p);
    });

    if (inStrip.size) {
      const label = el('span', 'od-striplabel', `${inStrip.size} words`);
      strip.insertBefore(label, strip.firstChild);
      block.appendChild(strip);
    }
    root.appendChild(block);
  });

  /* The page-wide control only earns its place over several scenes. Where one
     scene is mounted — lesson 6's paragraph — its own toggle already is the
     page-wide one, and a second button saying the same thing is furniture. */
  if (blocks.length > 1) wireToggle(root, blocks);
  wireReveal(root);
}

/* Recall mode.
 *
 * The first version of this hid the word strips, which did nothing useful:
 * every word in a strip is also printed in the prose above it, larger and with
 * romaji. The strip is a DUPLICATE, not an answer key, so hiding it removed no
 * information and the promise that "each scene is a recall test" was false.
 *
 * To make a scene an actual test, the Japanese has to come out of the
 * SENTENCES, leaving the English to carry the context. Then you produce the
 * word yourself and tap the gap to check. The gloss goes with it — showing
 * "(road)" beside the gap would answer the question — and so do the strips,
 * being the same answers in a shorter form.
 *
 * The gap keeps the hidden word's exact width, so you can see how long the word
 * is. That is a deliberate scaffold rather than an oversight — at this stage
 * knowing a four-mora word is wanted is a fair clue, not the answer.
 *
 * The mode lives on the SCENE rather than the page, which is what lets a single
 * scene be tested on its own. The page-wide control is then the same operation
 * applied to every scene rather than a second mechanism.
 */
function setTesting(block, on) {
  if (on) {
    block.classList.add('od-testing');
  } else {
    block.classList.remove('od-testing');
    /* Leaving clears the reveals, so the next pass starts blank instead of
       remembering which words you gave up on last time. */
    block.querySelectorAll('.od-w').forEach(w => w.classList.remove('is-revealed'));
  }
  const btn = block.querySelectorAll('.od-scenetoggle')[0];
  if (btn) {
    btn.textContent = on ? 'Show' : 'Hide';
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label',
      on ? 'Show the Japanese in this scene' : 'Hide the Japanese in this scene');
  }
}

/* A long walk is too much to work through with one control at the top of the
   page — you study a scene, not a walk. Each scene carries its own. */
function sceneToggle(block) {
  const btn = el('button', 'od-scenetoggle', 'Hide');
  btn.type = 'button';
  btn.setAttribute('aria-pressed', 'false');
  btn.setAttribute('aria-label', 'Hide the Japanese in this scene');
  btn.addEventListener('click', () => {
    setTesting(block, !block.classList.contains('od-testing'));
  });
  return btn;
}

function wireToggle(root, blocks) {
  const bar = el('div', 'od-bar');
  const btn = el('button', 'od-toggle', 'Hide all the Japanese');
  btn.type = 'button';
  btn.setAttribute('aria-pressed', 'false');

  btn.addEventListener('click', () => {
    /* Read this button's own state rather than the scenes', so that a page where
       some scenes were toggled individually still has one predictable next
       action instead of a result that depends on which scenes happen to be on. */
    const on = btn.getAttribute('aria-pressed') !== 'true';
    blocks.forEach(b => setTesting(b, on));
    btn.setAttribute('aria-pressed', String(on));
    btn.textContent = on ? 'Show all the Japanese' : 'Hide all the Japanese';
  });

  bar.append(btn, el('span', 'od-barnote',
    'Read the English and say the Japanese yourself. Tap any gap to check it.'));
  root.insertBefore(bar, root.firstChild);
}

/* One delegated listener rather than one per word — a full walk has 460 of
   them. speech.js speaks the word on the same tap, which is what you want here:
   reveal it and hear it together. Outside recall mode this does nothing, so the
   tap is just the speak button it has always been. */
function wireReveal(root) {
  root.addEventListener('click', e => {
    const word = e.target.closest('.od-w');
    if (!word) return;
    const scene = word.closest('.od-scene');
    if (scene && scene.classList.contains('od-testing')) word.classList.add('is-revealed');
  });
}

document.querySelectorAll('[id^="one-day"]').forEach(mountOneDay);
