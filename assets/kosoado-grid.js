/* kosoado-grid.js — the こそあど sets as tappable rows of four.
 *
 * Mount point: <div id="kosoado-grid"></div> — anything already inside is
 * replaced, so put a plain-HTML fallback there for the no-JavaScript case.
 * Optional `data-sets` limits the render to those set ids, space-separated.
 *
 * Deliberately not a <table>. A seven-by-four table of three-line cells is
 * unreadable on a phone and scrolls sideways inside its own box, which is legal
 * but unpleasant. Each set is its own small block instead, so four cells become
 * two-by-two on a narrow screen and nothing is ever out of view.
 *
 * The whole cell is the button, as in kana-grid.js — tapping it speaks the word.
 * Thirty-two separate 🔊 buttons would be visual noise on a grid whose entire
 * job is to make a pattern visible at a glance.
 *
 * Data comes from kosoado-data.js. Nothing here is hand-written per lesson.
 */

import { speak, available } from './speech.js';

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

export function mountKosoado(root) {
  const data = window.KOSOADO;
  if (!root || !data) return;
  const { cols, sets } = data;

  const only = root.dataset.sets ? root.dataset.sets.trim().split(/\s+/) : null;

  root.textContent = '';
  root.classList.add('ks-mounted');

  /* One header, once, above every set: which column is which distance. It is
     sticky-free on purpose — the sets are short enough that the header stays in
     view, and a sticky bar would cover the row you just tapped. */
  const head = el('div', 'ks-head');
  head.append(el('span', 'ks-headlabel', 'Set'));
  const headline = el('div', 'ks-line ks-headline');
  cols.forEach((c, i) => {
    const cell = el('div', i === cols.length - 1 ? 'ks-col is-q' : 'ks-col');
    const p = el('span', 'ks-colchar', c.p);
    p.lang = 'ja';
    /* The separator lives in the markup: with the stylesheet stripped this must
       still read "こ ko · near me" rather than "koko near me". */
    cell.append(p, el('span', 'ks-colroma', ` ${c.r} · `), el('span', 'ks-colen', c.en));
    headline.appendChild(cell);
  });
  head.appendChild(headline);
  root.appendChild(head);

  const speakable = available('ja');

  sets.filter(s => !only || only.includes(s.id)).forEach(set => {
    const block = el('section', 'ks-set');

    const label = el('h4', 'ks-setlabel');
    const end = el('span', 'ks-setend', `-${set.end}`);
    end.lang = 'ja';
    label.append(end, el('span', 'ks-seten', ` · ${set.en}`));

    const line = el('div', 'ks-line');
    set.cells.forEach((w, i) => {
      const isQ = i === cols.length - 1;
      const b = el('button', `ks-cell${isQ ? ' is-q' : ''}${w.dim ? ' is-dim' : ''}`);
      b.type = 'button';
      b.setAttribute('aria-label', `Say ${w.r} — ${w.e}`);
      if (!speakable) b.classList.add('no-voice');

      const k = el('span', 'ks-jp', w.k);
      k.lang = 'ja';
      /* The column header is hidden on a phone, where four cells wrap to two by
         two and a four-column header would sit above the wrong things. Each cell
         carries its own distance label instead, shown only at that width. */
      b.append(el('span', 'ks-pfx', cols[i].en), k,
               el('span', 'ks-roma', w.r), el('span', 'ks-en', w.e));
      if (w.odd) {
        const flag = el('span', 'ks-odd', `not ${w.odd}`);
        flag.lang = 'ja';
        b.appendChild(flag);
      }

      b.addEventListener('click', () => {
        speak(w.k, 'ja');
        b.classList.add('speaking');
        setTimeout(() => b.classList.remove('speaking'), 600);
      });
      line.appendChild(b);
    });

    block.append(label, line);
    root.appendChild(block);
  });
}

const mount = document.getElementById('kosoado-grid');
if (mount) mountKosoado(mount);
