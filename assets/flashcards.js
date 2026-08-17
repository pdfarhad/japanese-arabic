/* flashcards.js — the practice deck's screen. All of its thinking is in
 * flashcard-store.js; this file only draws.
 *
 * Mount point: <div id="flashcards"></div>. It reads `window.FLASHCARD_SETS`
 * and the vocabulary globals that registry names, so a page adds a set by
 * loading one more data file — there is nothing to configure here. A set need
 * not be a numbered chapter: `short` and `chip` let one say what it is instead.
 *
 * ---- Why this is a flip-card and not a fourth multiple-choice drill ----
 *
 * `vocab-drill.js` already asks four-way multiple choice, one chapter at a time.
 * Repeating that across four chapters would add a page and no exercise. A flash
 * card asks the harder and more useful question: retrieve it, with nothing on
 * screen to recognise it from. Recognition builds fluency, free recall builds
 * storage, and this deck exists for storage.
 *
 * It would also have been a bug. `check_vocab.py` guarantees unique Arabic
 * glosses WITHIN a set, because the drill grades that direction by comparing
 * strings. Across a 178-word pool drawn from four sets that guarantee does not
 * hold, so multiple-choice distractors could collide and mark a right answer
 * wrong.
 *
 * ---- Three rules carried over from the drill ----
 *
 * - **The card is never spoken before it is turned.** Hearing こうえん while
 *   looking at "park" is not a retrieval, it is a hint. Audio fires on the flip.
 * - **The back is the whole card** — kana, romaji, English, Arabic, its
 *   transliteration, the group, and the chapter's own note. A card you missed is
 *   worth more than a card you knew, so it is where the teaching goes.
 * - **No server call.** Everything here is client-side, so the deck behaves
 *   identically on localhost and on GitHub Pages. The localStorage memory
 *   (flashcard-store.js) is new and deliberate; the no-server rule is not.
 *
 * ---- What this page deliberately does NOT carry ----
 *
 * `lang-switch.js`. Every other word page has it, and it would do nothing here:
 * the back of a card shows Japanese and Arabic together, always, so there is no
 * "which language are the words in" to answer. The front selector is this page's
 * language control, and it is a finer one — it picks which script you are tested
 * FROM, which is the only choice a flash card actually offers.
 */

import { speak, available } from './speech.js';
import { richEl } from './rich-note.js';
import {
  SESSION_MAX, buildPool, buildSession, troubleDeck,
  loadStats, recordAnswer, resetStats, cardKey,
} from './flashcard-store.js';

/* The front is one field. The back is all of them, whichever front was used —
   which is why this table has no `answer` half, unlike the drill's. */
const FRONTS = [
  { id: 'mixed', label: 'Mixed',     hint: 'Whatever comes up — hardest, and the one to practise with.' },
  { id: 'kana',  label: 'かな',      hint: 'Read the Japanese. What does it mean?',  field: 'k', lang: 'ja' },
  { id: 'en',    label: 'English',   hint: 'Say the Japanese, then the Arabic.',     field: 'e', lang: 'en' },
  { id: 'ar',    label: 'العربية',   hint: 'Read the Arabic. What does it mean?',    field: 'a', lang: 'ar' },
];
const REAL_FRONTS = FRONTS.filter((f) => f.field);

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/* EVERY focus() call in this file passes this, and the deck is unusable without
   it. The deck sits below a title, a how-to-use table and a callout; a bare
   focus() scrolls its target into view, so `ask()` firing on mount threw the
   reader 1,254px down the page before they had read a word of the instructions.
   Nothing in the DOM was wrong, which is why the lesson gate passed it and only
   a screenshot caught it. Keeping the focus is still right — it is what makes
   the button reachable and shows a keyboard user where they are. */
const FOCUS = { preventScroll: true };

export function mountFlashcards(root) {
  const sets = window.FLASHCARD_SETS;
  if (!root || !Array.isArray(sets) || !sets.length) return;

  const pool = buildPool(sets, (name) => window[name]);
  if (pool.length < 2) return;

  let stats = loadStats();
  let frontId = 'mixed';
  let mode = 'fresh';
  /* Keyed on the GLOBAL's name, not on a chapter number. The deck was built when
     every set was a numbered chapter, and the counter set is not one — giving it
     a fake chapter number would have put a lie in the data to save a rename. */
  const active = new Set(sets.map((s) => s.global));

  root.textContent = '';
  root.classList.add('fc-mounted');

  /* ------------------------------------------------------------- controls */

  const controls = el('div', 'vd-controls fc-controls');

  const seg = el('div', 'vd-seg');
  seg.setAttribute('role', 'group');
  seg.setAttribute('aria-label', 'What is on the front of the card');
  const segButtons = FRONTS.map((f) => {
    const b = el('button', 'vd-segbtn', f.label);
    b.type = 'button';
    b.dataset.front = f.id;
    /* No `lang` on these: "かな" and "العربية" are labels for an English-speaking
       reader's control, not runs of those languages, and a screen reader
       switching voice mid-toolbar reads worse than it sounds. */
    b.addEventListener('click', () => { frontId = f.id; paintControls(); start(); });
    seg.appendChild(b);
    return b;
  });

  const chapWrap = el('div', 'fc-chapters');
  chapWrap.setAttribute('role', 'group');
  chapWrap.setAttribute('aria-label', 'Which sets to draw from');
  chapWrap.appendChild(el('span', 'vd-catlabel', 'In play:'));
  const chapLabels = sets.map((s) => {
    /* Counted off the DEDUPED pool, so a set whose words are already dealt by an
       earlier one reports what it actually contributes rather than what it
       contains. The counter set holds 31 readings and adds 18. */
    const count = pool.filter((c) => c.set === s.global).length;
    const lab = el('label', 'fc-chapbox on');
    const box = el('input');
    box.type = 'checkbox';
    box.checked = true;
    box.value = s.global;
    box.addEventListener('change', () => {
      if (box.checked) active.add(s.global); else active.delete(s.global);
      paintControls();
      start();
    });
    lab.append(box, el('span', 'fc-chapnum', s.short || String(s.n)),
               el('span', 'fc-chapname', `${s.label} · ${count}`));
    lab.dataset.set = s.global;
    chapWrap.appendChild(lab);
    return lab;
  });

  const modes = el('div', 'fc-modes');
  modes.setAttribute('role', 'group');
  modes.setAttribute('aria-label', 'Which kind of session');
  const freshBtn = el('button', 'kana-btn fc-mode', 'Fresh session');
  freshBtn.type = 'button';
  freshBtn.addEventListener('click', () => { mode = 'fresh'; paintControls(); start(); });
  const troubleBtn = el('button', 'kana-btn fc-mode', 'Trouble words');
  troubleBtn.type = 'button';
  troubleBtn.addEventListener('click', () => {
    if (troubleBtn.disabled) return;
    mode = 'trouble';
    paintControls();
    start();
  });
  modes.append(freshBtn, troubleBtn);

  const strip = el('p', 'fc-strip');
  strip.setAttribute('aria-live', 'polite');

  controls.append(seg, chapWrap);

  /* -------------------------------------------- stage, reusing drill chrome */

  const head = el('div', 'drill-head');
  const count = el('p', 'drill-count');
  const tally = el('p', 'drill-tally');
  head.append(count, tally);

  const bar = el('div', 'drill-bar');
  const barFill = el('span', 'drill-bar-fill');
  bar.appendChild(barFill);

  const stage = el('div', 'fc-stage');
  const hint = el('p', 'drill-hint');
  const card = el('div', 'fc-card');
  const front = el('div', 'fc-front');
  const back = el('div', 'fc-back');
  card.append(front, back);

  const flipBtn = el('button', 'kana-btn fc-flip', 'Flip it  ·  space');
  flipBtn.type = 'button';

  const rate = el('div', 'fc-rate');
  const knewBtn = el('button', 'fc-rate-btn is-knew', 'Knew it');
  knewBtn.type = 'button';
  const missBtn = el('button', 'fc-rate-btn is-miss', 'Missed it');
  missBtn.type = 'button';
  rate.append(knewBtn, missBtn);

  stage.append(hint, card, flipBtn, rate);

  const empty = el('p', 'fc-empty');
  const done = el('div', 'drill-done fc-done');

  root.append(controls, modes, strip, head, bar, stage, empty, done);

  /* ---------------------------------------------------------------- state */

  let queue = [];
  let at = 0;
  let right = 0;
  let missed = [];
  let flipped = false;

  const inScope = () => pool.filter((c) => active.has(c.set));

  function frontFor(entry) {
    if (frontId !== 'mixed') return FRONTS.find((f) => f.id === frontId);
    /* Chosen per card rather than per session, so the reader cannot settle into
       one direction halfway through — which is the whole point of interleaving. */
    return entry._front || (entry._front = pick(REAL_FRONTS));
  }

  function paintControls() {
    segButtons.forEach((b) => b.classList.toggle('on', b.dataset.front === frontId));
    chapLabels.forEach((l) => l.classList.toggle('on', active.has(l.dataset.set)));
    freshBtn.classList.toggle('on', mode === 'fresh');
    troubleBtn.classList.toggle('on', mode === 'trouble');

    const scope = inScope();
    const trouble = troubleDeck(scope, stats, Infinity);
    const seen = scope.filter((c) => stats[cardKey(c)]).length;

    troubleBtn.disabled = trouble.length === 0;
    troubleBtn.textContent = trouble.length
      ? `Trouble words · ${trouble.length}`
      : 'Trouble words';

    strip.textContent = scope.length === 0
      ? 'Nothing selected.'
      : trouble.length
        ? `${scope.length} words in play · ${seen} met · ${trouble.length} still catching you out.`
        : seen
          ? `${scope.length} words in play · ${seen} met · nothing outstanding.`
          : `${scope.length} words in play · none met yet.`;
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

  function paintFront(entry) {
    const f = frontFor(entry);
    front.textContent = '';
    hint.textContent = f.hint;

    const text = el('p', `fc-prompt is-${f.lang}`, entry[f.field]);
    if (f.lang === 'ja') text.classList.add('jp');
    if (f.lang === 'ar') { text.classList.add('ar-i'); text.dir = 'rtl'; }
    text.lang = f.lang;
    front.appendChild(text);

    /* Which way round you were asked, said out loud — with mixed fronts running,
       a bare Japanese word and a bare Arabic one look like the same question
       until you notice the script. */
    front.appendChild(el('p', 'fc-side', f.id === 'kana' ? 'Japanese'
                                      : f.id === 'ar' ? 'Arabic' : 'English'));
  }

  function paintBack(entry) {
    back.textContent = '';

    const headline = el('p', 'kana-headline');
    const word = el('span', 'kana-headline-char', entry.k);
    word.lang = 'ja';
    headline.append(word, el('span', 'kana-headline-romaji', entry.r),
                    playBtn(entry.k, 'ja', `Say ${entry.r}`));

    const en = el('p', 'fc-back-en', entry.e);

    const ar = el('p', 'fc-back-ar');
    const arText = el('span', 'ar-i', entry.a);
    arText.lang = 'ar';
    arText.dir = 'rtl';
    ar.append(arText, playBtn(entry.a, 'ar', `Say ${entry.at}`),
              el('span', 'kana-word-translit', entry.at));

    back.append(headline, en, ar);

    const where = el('p', 'fc-back-meta');
    where.append(el('span', 'fc-chip', entry.chip));
    /* The separator is a real character, not the flex `gap`. A CSS-only gap
       reads as "Chapter 11Asking about a person" the moment the stylesheet is
       late, overridden or stripped — which is how it was first noticed here,
       in a test's plain-text dump of the same node. */
    if (entry.catLabel) where.append(el('span', 'fc-back-cat', `· ${entry.catLabel}`));
    back.appendChild(where);

    if (entry.n) back.appendChild(richEl('p', 'kana-mnemonic', entry.n));

    const stat = stats[cardKey(entry)];
    if (stat && (stat.w || stat.r)) {
      back.appendChild(el('p', 'fc-history',
        `So far: ${stat.r} known, ${stat.w} missed.`));
    }
  }

  function flip() {
    const entry = queue[at];
    if (!entry || flipped) return;
    flipped = true;
    paintBack(entry);
    card.classList.add('is-flipped');
    flipBtn.hidden = true;
    rate.classList.add('shown');
    knewBtn.focus(FOCUS);
    /* The reward and the glue, exactly as the drill does it — the sound arrives
       once the retrieval has been attempted, never before. */
    if (available('ja')) speak(entry.k, 'ja');
  }

  function rated(ok) {
    const entry = queue[at];
    if (!entry || !flipped) return;
    recordAnswer(stats, entry, ok);
    if (ok) right += 1; else missed.push(entry);
    paintTally();
    paintControls();
    at += 1;
    ask();
  }

  function paintTally() {
    const asked = right + missed.length;
    tally.textContent = asked ? `${right} knew · ${missed.length} missed` : '';
  }

  function ask() {
    const entry = queue[at];
    if (!entry) return finish();

    flipped = false;
    card.classList.remove('is-flipped');
    back.textContent = '';
    rate.classList.remove('shown');
    flipBtn.hidden = false;
    done.classList.remove('shown');
    stage.classList.add('shown');

    count.textContent = `Card ${at + 1} of ${queue.length}`;
    barFill.style.width = `${(at / queue.length) * 100}%`;

    paintFront(entry);
    flipBtn.focus(FOCUS);
  }

  function finish() {
    stage.classList.remove('shown');
    count.textContent = queue.length ? 'Session complete' : '';
    barFill.style.width = '100%';

    done.textContent = '';
    if (!queue.length) return;

    done.appendChild(el('p', 'drill-score', `${right} of ${queue.length} from memory.`));

    if (missed.length) {
      done.appendChild(el('p', 'drill-missed-label', missed.length === 1
        ? 'The one that got away — it is in your trouble words now:'
        : `These ${missed.length} are in your trouble words now:`));
      const chips = el('p', 'drill-missed');
      missed.forEach((w) => {
        const chip = el('span', 'drill-chip');
        const c = el('span', 'drill-chip-char', w.k);
        c.lang = 'ja';
        chip.append(c, el('span', 'drill-chip-romaji', w.e));
        chips.appendChild(chip);
      });
      const again = el('button', 'kana-btn', missed.length === 1
        ? 'Turn that one again'
        : `Turn those ${missed.length} again`);
      again.type = 'button';
      const retry = missed.slice();
      again.addEventListener('click', () => start(retry));
      done.append(chips, again);
    } else {
      done.appendChild(el('p', 'drill-clean',
        'Every card, from memory. Try the mixed front, or add a chapter.'));
    }

    const over = el('button', 'kana-btn drill-restart', 'Deal a new session');
    over.type = 'button';
    over.addEventListener('click', () => start());
    done.append(over, forgetBtn());
    done.classList.add('shown');
  }

  function forgetBtn() {
    const b = el('button', 'fc-forget', 'Forget my history');
    b.type = 'button';
    b.addEventListener('click', () => {
      if (!window.confirm('Clear every right and wrong this browser has recorded? '
                        + 'The words themselves are untouched.')) return;
      resetStats();
      stats = loadStats();
      paintControls();
      start();
    });
    return b;
  }

  /* `set` is the end-of-session "turn those again" list; otherwise the session is
     dealt fresh from the chapters in scope. */
  function start(set) {
    const scope = inScope();
    at = 0;
    right = 0;
    missed = [];
    paintTally();

    if (!scope.length) {
      queue = [];
      stage.classList.remove('shown');
      done.classList.remove('shown');
      empty.textContent = 'Tick at least one set to deal a session.';
      empty.classList.add('shown');
      count.textContent = '';
      barFill.style.width = '0%';
      return;
    }
    empty.classList.remove('shown');

    if (set) {
      queue = set.slice();
    } else {
      queue = buildSession(scope, stats, { size: SESSION_MAX, mode });
      /* Trouble mode with nothing outstanding would deal an empty session and
         look broken. Fall back rather than dead-end. */
      if (!queue.length) {
        mode = 'fresh';
        paintControls();
        queue = buildSession(scope, stats, { size: SESSION_MAX, mode });
      }
    }
    /* Mixed picks a front per card and caches it on the card, so a re-deal has
       to clear the cache or the same word is asked the same way forever. */
    queue.forEach((c) => { delete c._front; });
    ask();
  }

  flipBtn.addEventListener('click', flip);
  knewBtn.addEventListener('click', () => rated(true));
  missBtn.addEventListener('click', () => rated(false));

  /* Space or Enter turns the card; 1 and 2 rate it, matching the drill's numeric
     keys. Deliberately no keyboard shortcut that rates an unflipped card — that
     is how you lose a word to a stray keypress. */
  document.addEventListener('keydown', (e) => {
    if (!stage.classList.contains('shown')) return;
    if (e.target instanceof Element && e.target.matches('input, textarea, select')) return;
    if (!flipped && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      flip();
      return;
    }
    if (!flipped) return;
    if (e.key === '1') { e.preventDefault(); rated(true); }
    if (e.key === '2') { e.preventDefault(); rated(false); }
  });

  paintControls();
  start();
}

const mount = document.getElementById('flashcards');
if (mount) mountFlashcards(mount);
