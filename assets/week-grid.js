/* week-grid.js — the seven days, each shown beside the sky it is named after.
 *
 * Mount point: <div id="week-grid"></div> — anything already inside is replaced,
 * so put a plain-HTML fallback there for the no-JavaScript case.
 *   data-week   names the global to read, defaulting to `WEEK`.
 *   data-notes="off"  drops the per-day notes, for the print reference sheet
 *                     where the same fact is already carried in prose.
 *
 * Three zones per day, and the order is the argument: what you write, where it
 * came from, and what Arabic does with the same day. Reading straight down the
 * middle column gives the planetary week in order, which is the thing worth
 * carrying away.
 *
 * The element character is wrapped separately inside the kanji so it can be
 * tinted — 日曜日 is <日>曜日, and the tinted character is the whole of the
 * difference between one weekday and the next. Every separator ( · ) is written
 * into the markup rather than produced by a CSS gap, per NOTES.md: with the
 * stylesheet stripped this must still read "taiyō · the Sun".
 *
 * Data comes from week-data.js. Nothing here is hand-written per lesson, and
 * nothing here states a fact of its own — learning-records/0009 is about exactly
 * that mistake, where a template string in a shared renderer made a claim that
 * was true of the rows it was written against and false of the next batch.
 */

import { available } from './speech.js';

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

function playBtn(text, lang, label) {
  const b = el('button', lang === 'ar' ? 'kana-play kana-play-ar' : 'kana-play', '🔊');
  b.type = 'button';
  b.dataset.speak = text;
  b.dataset.lang = lang;
  b.setAttribute('aria-label', label);
  if (!available(lang)) b.classList.add('no-voice');
  return b;
}

export function mountWeek(root) {
  const data = root && window[root.dataset.week || 'WEEK'];
  if (!data) return;

  const notes = root.dataset.notes !== 'off';

  root.textContent = '';
  root.classList.add('wk-mounted');

  const list = el('ol', 'wk-list');

  data.days.forEach(d => {
    const row = el('li', 'wk-day');

    /* ---- what you write ---- */
    const main = el('div', 'wk-main');

    const kanji = el('div', 'wk-kanji');
    kanji.lang = 'ja';
    kanji.append(el('span', 'wk-el', d.el), document.createTextNode(d.kj.slice(d.el.length)));

    const read = el('div', 'wk-read');
    const kana = el('span', 'wk-kana', d.k);
    kana.lang = 'ja';
    read.append(kana, playBtn(d.k, 'ja', `Say ${d.r}`));

    main.append(kanji, read, el('span', 'wk-roma', d.r), el('span', 'wk-en', d.en));

    /* ---- where it came from ---- */
    const from = el('div', 'wk-from');
    from.append(el('span', 'wk-label', 'named after'));

    const sky = el('div', 'wk-sky');
    const planet = el('span', 'wk-planet', d.pl);
    planet.lang = 'ja';
    sky.append(planet, el('span', 'wk-planetr', ` ${d.plr} · `), el('span', 'wk-planeten', d.plen));

    const alone = el('div', 'wk-alone');
    const ek = el('span', 'wk-elchar', d.el);
    ek.lang = 'ja';
    const ekana = el('span', 'wk-elkana', d.elk);
    ekana.lang = 'ja';
    /* "日 on its own is ひ · sun, day" — three pieces, three separators, all in
       the markup so the line survives without the stylesheet. */
    alone.append(ek, document.createTextNode(' alone is '), ekana,
                 el('span', 'wk-elen', ` · ${d.elken}`));

    from.append(sky, alone);

    /* ---- and in Arabic ---- */
    const ar = el('div', 'wk-ar');
    ar.append(el('span', 'wk-label', 'Arabic'));

    const arWord = el('div', 'wk-arword');
    const word = el('span', 'ar-i', d.a);
    word.lang = 'ar';
    arWord.append(word, playBtn(d.a, 'ar', `Say ${d.at}`));

    ar.append(arWord, el('span', 'wk-art', `${d.at} · “${d.alit}”`));

    row.append(main, from, ar);
    if (notes && d.n) row.appendChild(el('p', 'wk-note', d.n));

    list.appendChild(row);
  });

  root.appendChild(list);
}

document.querySelectorAll('[id^="week-grid"]').forEach(mountWeek);
