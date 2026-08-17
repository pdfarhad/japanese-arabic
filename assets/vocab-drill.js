/* vocab-drill.js — meaning drill: see a two-kana word, name what it means.
 *
 * Mount point: <div id="vocab-drill"></div>. Optional `data-dir` picks the
 * starting direction and `data-cat` the starting group; both default to
 * everything. Optional `data-vocab` names the global to drill, defaulting to
 * `VOCAB` — same contract as vocab-list.js, so a lesson drills exactly the words
 * it displays.
 *
 * This is the sibling of kana-drill.js and keeps its shape — a finite shuffled
 * pass, then an optional second pass over only the misses — but asks a different
 * question. Lesson 3 drilled shape → sound. Here the sound is assumed and the
 * drill asks shape → meaning, in three directions:
 *
 *   ja-en   read the kana, pick the English      (reading)
 *   en-ja   read the English, pick the kana      (production — the hard one)
 *   ja-ar   read the kana, pick the Arabic       (the mission's own direction)
 *
 * Three constraints carried over from the kana drill:
 *
 * - **The question is never spoken before it is answered.** The word is said
 *   aloud once an answer is in, never on the question, or the tap becomes a
 *   freebie for anyone who already knows the sound.
 * - **Distractors come from the same meaning group first.** Offering "mountain,
 *   cat, to buy, chair" against うみ tests nothing but categories; offering
 *   "mountain, river, sky, forest" tests the word. Only when a group is too
 *   small does the pool widen.
 * - **Every miss is corrected on the spot** — the full card, both languages,
 *   both play buttons — rather than left standing.
 *
 * No persistence and no server call: it behaves identically on localhost and on
 * GitHub Pages, which NOTES.md requires.
 */

import { speak, available } from './speech.js';
import { richEl } from './rich-note.js';
import { wordsLanguage, onWordsLanguage } from './lang-switch.js';

/* Each direction carries its own accessors and the language of each side, so
   nothing downstream has to branch on the direction's id. Adding the Arabic set
   was then a matter of writing three more rows rather than threading a second
   condition through the render.
 *
 * The two sets mirror each other exactly — meaning, production, and across to
 * the other script — because the Arabic is being learned the same way the
 * Japanese is, not skimmed. See MISSION.md, "The Arabic goal is vocabulary". */
const DIRECTION_SETS = {
  ja: [
    { id: 'ja-en', label: 'かな → English', hint: 'What does this word mean?',
      ask: w => w.k, answer: w => w.e, askLang: 'ja', ansLang: 'en' },
    { id: 'en-ja', label: 'English → かな', hint: 'Which word is this?',
      ask: w => w.e, answer: w => w.k, askLang: 'en', ansLang: 'ja' },
    { id: 'ja-ar', label: 'かな → العربية', hint: 'Which Arabic word matches?',
      ask: w => w.k, answer: w => w.a, askLang: 'ja', ansLang: 'ar' },
  ],
  ar: [
    { id: 'ar-en', label: 'العربية → English', hint: 'What does this word mean?',
      ask: w => w.a, answer: w => w.e, askLang: 'ar', ansLang: 'en' },
    { id: 'en-ar', label: 'English → العربية', hint: 'Which word is this?',
      ask: w => w.e, answer: w => w.a, askLang: 'en', ansLang: 'ar' },
    { id: 'ar-ja', label: 'العربية → かな', hint: 'Which Japanese word matches?',
      ask: w => w.a, answer: w => w.k, askLang: 'ar', ansLang: 'ja' },
  ],
};

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

export function mountVocabDrill(root) {
  const data = root && window[root.dataset.vocab || 'VOCAB'];
  if (!data) return;
  const { cats, words } = data;
  if (words.length < 4) return;

  const DIRECTIONS = DIRECTION_SETS[wordsLanguage()] || DIRECTION_SETS.ja;
  let dir = DIRECTIONS.find(d => d.id === root.dataset.dir) || DIRECTIONS[0];
  let catId = root.dataset.cat || 'all';

  /* Re-render on a language change. Registered once per root — mountVocabDrill
     is itself the re-render, and a half-finished round in the old language is
     not worth preserving across a deliberate switch. */
  if (!root.dataset.langWired) {
    root.dataset.langWired = '1';
    onWordsLanguage(() => mountVocabDrill(root));
  }

  /* What is shown as the question, and what the four buttons carry. */
  const askText = (w) => dir.ask(w);
  const answerText = (w) => dir.answer(w);

  root.textContent = '';
  root.classList.add('vocab-drill-mounted');

  /* ---------- controls ---------- */

  const controls = el('div', 'vd-controls');

  const seg = el('div', 'vd-seg');
  seg.setAttribute('role', 'group');
  seg.setAttribute('aria-label', 'Which way round to drill');
  const segButtons = DIRECTIONS.map(d => {
    const b = el('button', 'vd-segbtn', d.label);
    b.type = 'button';
    b.dataset.dir = d.id;
    /* No lang on these: every label is mixed script ("かな → English"), so any
       single value would be wrong for most of the button. */
    b.addEventListener('click', () => {
      dir = d;
      paintControls();
      start(pool());
    });
    seg.appendChild(b);
    return b;
  });

  const catWrap = el('label', 'vd-cat');
  catWrap.append(el('span', 'vd-catlabel', 'Group:'));
  const select = el('select', 'vd-select');
  const all = el('option', null, `Everything · ${words.length} words`);
  all.value = 'all';
  select.appendChild(all);
  cats.forEach(c => {
    const n = words.filter(w => w.c === c.id).length;
    const o = el('option', null, `${c.en} · ${n} words`);
    o.value = c.id;
    select.appendChild(o);
  });
  select.value = catId;
  select.addEventListener('change', () => {
    catId = select.value;
    start(pool());
  });
  catWrap.appendChild(select);

  controls.append(seg, catWrap);

  /* ---------- chrome, shared with the kana drill's stylesheet ---------- */

  const head = el('div', 'drill-head');
  const count = el('p', 'drill-count');
  const tally = el('p', 'drill-tally');
  head.append(count, tally);

  const bar = el('div', 'drill-bar');
  const barFill = el('span', 'drill-bar-fill');
  bar.appendChild(barFill);

  const stage = el('div', 'drill-stage');
  const hint = el('p', 'drill-hint');
  const prompt = el('p', 'drill-prompt');
  const choices = el('div', 'drill-choices vd-choices');
  stage.append(hint, prompt, choices);

  const verdict = el('p', 'drill-verdict');
  verdict.setAttribute('aria-live', 'polite');

  const reveal = el('div', 'drill-reveal');
  const nextBtn = el('button', 'kana-btn drill-next', 'Next →');
  nextBtn.type = 'button';

  const done = el('div', 'drill-done');

  root.append(controls, head, bar, stage, verdict, reveal, nextBtn, done);

  /* ---------- state ---------- */

  let queue = [];
  let at = 0;
  let right = 0;
  let missed = [];
  let locked = false;
  let advance = null;

  const pool = () => (catId === 'all' ? words : words.filter(w => w.c === catId));

  function paintControls() {
    segButtons.forEach(b => b.classList.toggle('on', b.dataset.dir === dir.id));
  }

  function distractorsFor(entry) {
    const taken = new Set([answerText(entry)]);
    const out = [];
    const consider = (w) => {
      if (out.length >= 3 || taken.has(answerText(w))) return;
      taken.add(answerText(w));
      out.push(w);
    };
    /* Same meaning group first — that is where the useful confusions live —
       then the whole list, so a six-word group still fills four buttons. */
    shuffled(words.filter(w => w.c === entry.c && w.k !== entry.k)).forEach(consider);
    shuffled(words.filter(w => w.k !== entry.k)).forEach(consider);
    return out;
  }

  function playBtn(text, lang, label) {
    const b = el('button', lang === 'ar' ? 'kana-play kana-play-ar' : 'kana-play', '🔊');
    b.type = 'button';
    b.dataset.speak = text;
    b.dataset.lang = lang;
    b.setAttribute('aria-label', label);
    if (!available(lang)) b.classList.add('no-voice');
    return b;
  }

  function showReveal(entry) {
    reveal.textContent = '';

    const headline = el('p', 'kana-headline');
    const word = el('span', 'kana-headline-char', entry.k);
    word.lang = 'ja';
    headline.append(word, el('span', 'kana-headline-romaji', entry.r),
                    playBtn(entry.k, 'ja', `Say ${entry.r}`));

    const en = el('p', 'vd-reveal-en', entry.e);

    const ar = el('p', 'vd-reveal-ar');
    const arText = el('span', 'ar-i', entry.a);
    arText.lang = 'ar';
    arText.dir = 'rtl';
    ar.append(arText, playBtn(entry.a, 'ar', `Say ${entry.at}`),
              el('span', 'kana-word-translit', entry.at));

    reveal.append(headline, en, ar);

    const cat = cats.find(c => c.id === entry.c);
    if (cat) reveal.appendChild(el('p', 'vd-reveal-cat', `Group: ${cat.en}`));
    if (entry.n) reveal.appendChild(richEl('p', 'kana-mnemonic', entry.n));

    reveal.classList.add('shown');
  }

  function paintTally() {
    const asked = right + missed.length;
    tally.textContent = asked ? `${right} right · ${missed.length} missed` : '';
  }

  function answer(btn, entry, picked) {
    if (locked) return;
    locked = true;

    const ok = answerText(picked) === answerText(entry);
    Array.from(choices.children).forEach(b => {
      b.disabled = true;
      if (b.dataset.answer === answerText(entry)) b.classList.add('right');
    });
    if (!ok) btn.classList.add('wrong');

    if (ok) right += 1;
    else missed.push(entry);
    paintTally();

    /* The sound is the reward and the glue: hear the word the moment the
       meaning has been committed to, whichever direction was being drilled. */
    if (available('ja')) speak(entry.k, 'ja');

    if (ok) {
      verdict.textContent = `Correct — ${entry.k} (${entry.r}) is ${entry.e}.`;
      verdict.className = 'drill-verdict is-right';
      advance = setTimeout(next, 900);
    } else {
      verdict.textContent = `Not quite — ${entry.k} is ${entry.e}.`;
      verdict.className = 'drill-verdict is-wrong';
      showReveal(entry);
      nextBtn.classList.add('shown');
      nextBtn.focus();
    }
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

    count.textContent = `Word ${at + 1} of ${queue.length}`;
    barFill.style.width = `${(at / queue.length) * 100}%`;

    hint.textContent = dir.hint;

    prompt.textContent = askText(entry);
    /* The prompt is styled by which language it is IN, not by which direction is
       running — three scripts, three treatments, and the direction only has to
       name its side. */
    prompt.className = dir.askLang === 'en' ? 'drill-prompt is-en'
                     : dir.askLang === 'ar' ? 'drill-prompt is-ar ar-i'
                     : 'drill-prompt';
    prompt.lang = dir.askLang;
    prompt.dir = dir.askLang === 'ar' ? 'rtl' : 'ltr';

    choices.textContent = '';
    shuffled([entry, ...distractorsFor(entry)]).forEach((w, i) => {
      const b = el('button', 'drill-choice vd-choice');
      b.type = 'button';
      b.dataset.answer = answerText(w);
      const text = el('span', 'vd-choice-text', answerText(w));
      if (dir.ansLang === 'ja') { text.classList.add('is-jp'); text.lang = 'ja'; }
      if (dir.ansLang === 'ar') {
        text.classList.add('is-ar', 'ar-i');
        text.lang = 'ar';
        text.dir = 'rtl';
      }
      b.append(el('span', 'drill-choice-key', String(i + 1)), text);
      b.addEventListener('click', () => answer(b, entry, w));
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
    done.appendChild(el('p', 'drill-score', `${right} of ${queue.length} on sight.`));

    if (missed.length) {
      done.appendChild(el('p', 'drill-missed-label', missed.length === 1
        ? 'The one that got away:'
        : 'The ones that got away:'));
      const chips = el('p', 'drill-missed');
      missed.forEach(w => {
        const chip = el('span', 'drill-chip');
        const c = el('span', 'drill-chip-char', w.k);
        c.lang = 'ja';
        chip.append(c, el('span', 'drill-chip-romaji', w.e));
        chips.appendChild(chip);
      });
      const again = el('button', 'kana-btn', missed.length === 1
        ? 'Drill that one again'
        : `Drill those ${missed.length} again`);
      again.type = 'button';
      const retry = missed.slice();
      again.addEventListener('click', () => start(retry));
      done.append(chips, again);
    } else {
      done.appendChild(el('p', 'drill-clean',
        'Every word, first time. Change the direction and see if it holds.'));
    }

    const over = el('button', 'kana-btn drill-restart', 'Start the round over');
    over.type = 'button';
    over.addEventListener('click', () => start(pool()));
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

  /* 1–4 answer the current question, as in the kana drill. */
  document.addEventListener('keydown', (e) => {
    if (locked || !stage.classList.contains('shown')) return;
    /* e.target is the document itself when nothing is focused, and Document has
       no matches() — test before calling it. */
    if (e.target instanceof Element && e.target.matches('input, textarea, select')) return;
    const n = Number(e.key);
    if (!Number.isInteger(n) || n < 1 || n > choices.children.length) return;
    e.preventDefault();
    choices.children[n - 1].click();
  });

  paintControls();
  start(pool());
}

const mount = document.getElementById('vocab-drill');
if (mount) mountVocabDrill(mount);
