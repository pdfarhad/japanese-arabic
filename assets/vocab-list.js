/* vocab-list.js — the two-kana words, as cards grouped by meaning.
 *
 * Mount point: <div id="vocab-list"></div> — anything already inside is
 * replaced, so put a plain-HTML fallback there for the no-JavaScript case.
 * Optional `data-cats` limits the render to those category ids, space-separated.
 * Optional `data-vocab` names the global to read, defaulting to `VOCAB`. Each
 * lesson with its own word set gets its own global (lesson 4 owns `VOCAB`,
 * lesson 5 owns `VOCAB5`), so no lesson can silently inherit another's words —
 * lesson 4's premise is that no word on it carries a mark, and a shared array
 * would break that the moment day 5 was written.
 *
 * The card leads with the kana at reading size and gives the romaji second, in
 * smaller mono. That order is the point: by lesson 4 the kana is the thing being
 * read and the romaji is only a safety net, so it must never be the first thing
 * the eye lands on. See NOTES.md, "Romaji is a crutch with a deadline".
 *
 * Data comes from vocab-data.js, which is also what the drill and the reference
 * sheet read. Nothing here is hand-written per lesson.
 */

import { available } from './speech.js';
import { wordsLanguage, onWordsLanguage } from './lang-switch.js';

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

/* A speaker button wired for the delegated listener in speech.js. Marked dead
   up front when the device has no voice for the language, rather than looking
   live and doing nothing. */
function playBtn(text, lang, label) {
  const b = el('button', lang === 'ar' ? 'kana-play kana-play-ar' : 'kana-play', '🔊');
  b.type = 'button';
  b.dataset.speak = text;
  b.dataset.lang = lang;
  b.setAttribute('aria-label', label);
  if (!available(lang)) b.classList.add('no-voice');
  return b;
}

/* The card's five slots are POSITIONS, not languages: headline word, its
 * transliteration, the English meaning, the other language's word, its
 * transliteration. In Japanese mode the headline is the kana; in Arabic mode the
 * two swap and the card carries `is-ar` so the stylesheet can give each slot the
 * right face and direction. Both languages stay on the card either way — the
 * switch changes which one you are being asked to learn, not which one exists.
 */
export function wordCard(w, lang) {
  const ar = lang === 'ar';
  const lead = ar ? { text: w.a, tl: w.at, lang: 'ar' } : { text: w.k, tl: w.r, lang: 'ja' };
  const also = ar ? { text: w.k, tl: w.r, lang: 'ja' } : { text: w.a, tl: w.at, lang: 'ar' };

  const card = el('div', ar ? 'vw is-ar' : 'vw');

  const head = el('div', 'vw-jp');
  const headWord = el('span', 'vw-kana', lead.text);
  headWord.lang = lead.lang;
  head.append(headWord, playBtn(lead.text, lead.lang, `Say ${lead.tl}`));

  /* No dir="rtl" on the row itself: the run reverses on its own, and an RTL row
     would flush the script right, away from the card's left edge and away from
     its own transliteration. */
  const second = el('div', 'vw-ar');
  second.lang = also.lang;
  const secondWord = el('span', 'ar-i', also.text);
  secondWord.lang = also.lang;
  second.append(secondWord, playBtn(also.text, also.lang, `Say ${also.tl}`));

  card.append(
    head,
    el('span', 'vw-romaji', lead.tl),
    el('p', 'vw-en', w.e),
    second,
    el('span', 'vw-translit', also.tl),
  );
  if (w.n) card.appendChild(el('p', 'vw-note', w.n));
  return card;
}

export function mountVocabList(root) {
  const data = root && window[root.dataset.vocab || 'VOCAB'];
  if (!data) return;
  const { cats, words } = data;

  const only = root.dataset.cats ? root.dataset.cats.trim().split(/\s+/) : null;
  const lang = wordsLanguage();

  /* Re-render on a language change. Registered once per root — mountVocabList
     is itself the re-render, so without the guard each switch would leave
     another listener behind. */
  if (!root.dataset.langWired) {
    root.dataset.langWired = '1';
    onWordsLanguage(() => mountVocabList(root));
  }

  root.textContent = '';
  root.classList.add('vocab-list-mounted');

  cats.filter(c => !only || only.includes(c.id)).forEach(cat => {
    const group = el('section', 'vw-group');

    const head = el('h3', 'vw-grouphead');
    const name = el('span', 'vw-groupname', cat.jp);
    name.lang = 'ja';
    /* The separators are in the markup, not in CSS gaps: if the stylesheet is
       late or stripped, "からだ karada · The body" still reads as three things. */
    head.append(
      name,
      el('span', 'vw-grouproma', ` ${cat.r} · `),
      el('span', 'vw-groupen', cat.en),
    );

    const grid = el('div', 'vw-grid');
    words.filter(w => w.c === cat.id).forEach(w => grid.appendChild(wordCard(w, lang)));

    group.append(head, grid);
    root.appendChild(group);
  });
}

const mount = document.getElementById('vocab-list');
if (mount) mountVocabList(mount);
