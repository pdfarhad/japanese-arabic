/* lang-switch.js — which language the WORDS are in.
 *
 * Mount point: <div id="lang-switch"></div>, placed under the lede. Sets
 * `document.body.dataset.words` to "ja" or "ar" and fires a `words-language`
 * event on `document`; vocab-list.js, vocab-drill.js and one-day.js listen and
 * re-render. Default is "ja", so a reader who never touches it sees the course
 * exactly as it was.
 *
 * WHAT THIS DOES NOT SWITCH, and why the label says so out loud: the numbered
 * sections of a lesson teach how JAPANESE builds a word, and several of them are
 * explicitly contrasted with Arabic on the same page — lesson 6 argues that the
 * opening mora identifies a question, right beside a callout noting that مَنْ,
 * مَا, مَتَى, أَيْنَ, كَيْفَ, كَمْ and أَيّ share no opening letter at all.
 * Swapping the words in that table would not translate the argument, it would
 * make the page assert something false. So only word-level content follows the
 * switch: the cards, the walk, and the drill.
 *
 * The choice persists in localStorage. NOTES.md bars persistence, but that rule
 * is about the recognition drill's RESULTS and its reason is that the drill must
 * behave identically on localhost and on Pages. A UI preference does not touch
 * that reason, and a switch that reset on every page load would be useless for
 * the thing it exists for — you would re-flip it walking from a lesson to the
 * one-day sheet.
 */

const KEY = 'jp-ar:words';
const LANGS = ['ja', 'ar'];

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

/* localStorage throws in a few real situations — Safari private browsing, a
   file:// origin, storage disabled. None of them should cost the reader the
   switch itself, so every access is guarded and simply falls back to Japanese. */
function stored() {
  try {
    const v = localStorage.getItem(KEY);
    return LANGS.includes(v) ? v : null;
  } catch { return null; }
}

function remember(lang) {
  try { localStorage.setItem(KEY, lang); } catch { /* not fatal */ }
}

/* Guarded against a missing body: every component script sits at the end of
   <body> so it is always there in practice, but a getter that throws would take
   the whole page down for a preference, which is the wrong trade. */
export function wordsLanguage() {
  return document.body && document.body.dataset.words === 'ar' ? 'ar' : 'ja';
}

export function setWordsLanguage(lang) {
  const next = LANGS.includes(lang) ? lang : 'ja';
  if (!document.body || document.body.dataset.words === next) return next;
  document.body.dataset.words = next;
  remember(next);
  document.dispatchEvent(new CustomEvent('words-language', { detail: { lang: next } }));
  return next;
}

/* Components mount in whatever order the page lists them, so any of them may
   run before or after this file. Reading document.body.dataset.words directly
   makes the order irrelevant: the flag is set below at module load, before any
   component's own listener matters. */
export function onWordsLanguage(fn) {
  document.addEventListener('words-language', e => fn(e.detail.lang));
}

export function mountLangSwitch(root) {
  if (!root) return;
  root.textContent = '';
  root.classList.add('lang-switch-mounted');

  const row = el('div', 'ls-row');
  row.append(el('span', 'ls-label', 'Words in'));

  const buttons = LANGS.map(lang => {
    const b = el('button', 'ls-btn', lang === 'ja' ? '日本語' : 'العربية');
    b.type = 'button';
    b.dataset.words = lang;
    /* lang on the button so a screen reader does not read العربية as if it were
       English, and so the Arabic renders in the Arabic face. */
    b.lang = lang === 'ja' ? 'ja' : 'ar';
    b.setAttribute('aria-label',
      lang === 'ja' ? 'Show the words in Japanese' : 'Show the words in Arabic');
    b.addEventListener('click', () => setWordsLanguage(lang));
    row.appendChild(b);
    return b;
  });

  const sync = () => {
    const now = wordsLanguage();
    buttons.forEach(b => {
      const on = b.dataset.words === now;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', String(on));
    });
  };

  root.append(row, el('p', 'ls-note',
    'The word cards, the paragraph and the drill follow this. The numbered '
    + 'sections stay Japanese — they are about how Japanese builds a question, '
    + 'and Arabic builds them differently.'));

  onWordsLanguage(sync);
  sync();
}

/* Set the flag at load, before any component renders, so nothing has to handle
   a mid-render change on first paint. */
if (document.body && !document.body.dataset.words) {
  document.body.dataset.words = stored() || 'ja';
}

const mount = document.getElementById('lang-switch');
if (mount) mountLangSwitch(mount);
