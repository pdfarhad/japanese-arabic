/* kana-chart.js — the static, printable version of the kana chart.
 *
 * Where kana-grid.js animates one character at a time for study, this renders
 * all of them at once with every stroke already drawn and numbered — the form
 * you want on paper beside you while writing.
 *
 * Mount point: <div id="kana-chart"></div>. Optional `data-rows` limits it to
 * those row keys, space-separated; without it every row is drawn, which is what
 * the whole-gojūon reference sheet wants. Optional `data-kana` names the global
 * to read instead of `KANA` — the katakana sheet passes `KATAKANA`.
 * Stroke paths from KanjiVG <http://kanjivg.tagaini.net>, CC BY-SA 3.0.
 */

const SVG_NS = 'http://www.w3.org/2000/svg';

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};
const svgEl = (tag, attrs = {}) => {
  const n = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  return n;
};

export function mountKanaChart(root) {
  if (!root) return;
  const set = window[root.dataset.kana || 'KANA'];
  if (!set) return;
  const { rows, kana } = set;
  root.textContent = '';

  /* From the unfiltered set: a marked kana names its base even when the base's
     own row is not printed on this sheet. */
  const byChar = new Map(kana.map(k => [k.k, k]));

  const only = root.dataset.rows ? root.dataset.rows.trim().split(/\s+/) : null;
  Object.keys(rows).filter(k => !only || only.includes(k)).forEach(rowKey => {
    const group = el('section', 'chart-row');
    group.appendChild(el('h3', 'chart-row-label', rows[rowKey]));
    const line = el('div', 'chart-line');

    kana.filter(k => k.row === rowKey).forEach(entry => {
      const cellNode = el('figure', 'chart-cell');

      const svg = svgEl('svg', {
        viewBox: '0 0 109 109', class: 'chart-svg', role: 'img',
        'aria-label': `${entry.k}, ${entry.r}, ${entry.n} strokes`,
      });
      svg.append(
        svgEl('line', { class: 'kana-guide', x1: '54.5', y1: '3', x2: '54.5', y2: '106' }),
        svgEl('line', { class: 'kana-guide', x1: '3', y1: '54.5', x2: '106', y2: '54.5' }),
      );

      const ink = svgEl('g', { class: 'kana-ink' });
      const marks = svgEl('g', { class: 'kana-marks' });
      entry.s.forEach((d, i) => {
        ink.appendChild(svgEl('path', { d }));
        marks.appendChild(svgEl('g', { class: 'kana-mark on', 'data-i': String(i) }));
      });
      svg.append(ink, marks);

      const base = entry.b ? byChar.get(entry.b) : null;

      const cap = el('figcaption', 'chart-cap');
      cap.appendChild(el('span', 'chart-cap-romaji',
        base ? `${base.r} → ${entry.r}` : entry.r));
      /* On a marked kana the caption names the character it was built from, so
         the printed sheet says which strokes are old and which are the mark.
         The arrow is part of the text, not a CSS pseudo-element.

         A katakana names its hiragana twin the same way but with '=', not an
         arrow: one was not made from the other, they are two spellings of one
         sound. */
      if (base || entry.h) {
        const from = el('span', 'chart-cap-from', base
          ? `${base.k} → ${entry.k}` : `${entry.h} = ${entry.k}`);
        from.lang = 'ja';
        cap.appendChild(from);
      }
      cap.appendChild(el('span', 'chart-cap-strokes',
        entry.n === 1 ? '1 stroke' : `${entry.n} strokes`));

      /* The ancestry, printed where it is checkable at a glance: one kanji means
         the pair really are siblings, two means the likeness would be imaginary.
         Reference-grade precisely because it is the thing prose keeps fudging. */
      if (entry.o || entry.od || entry.oc) {
        const anc = el('span', 'chart-cap-origin');
        anc.lang = 'ja';
        anc.textContent = entry.od ? '? disputed'
          : entry.oc ? `? ${entry.oc.join(' or ')}`
          : entry.sib ? `← ${entry.o}` : `← ${entry.o} · ${entry.h} ← ${entry.ho}`;
        if (entry.sib) anc.classList.add('is-sib');
        cap.appendChild(anc);
      }

      /* ヲ, ヂ and ヅ carry no words, because modern Japanese does not write
         them — the absence is a fact the sheet should state, not a gap.
         Reading entry.w[0] unconditionally used to throw a TypeError here, and
         since `line` is only attached to the document after this loop finishes,
         one wordless character silently took its whole row — and every row
         after it — off the page. The cell keeps its slot and says why instead;
         scripts/test_charts.mjs counts the rendered cells so this cannot
         regress unnoticed again. */
      const word = el('p', 'chart-word');
      if (entry.w.length) {
        word.append(
          el('span', 'chart-word-jp', entry.w[0].k),
          el('span', 'chart-word-en', entry.w[0].e),
        );
      } else {
        word.classList.add('chart-word-none');
        word.appendChild(el('span', 'chart-word-en', 'not written today'));
      }

      cellNode.append(svg, cap, word);
      line.appendChild(cellNode);

      /* Stroke-start badges need the paths laid out, so number them once the
         SVG is in the document and getPointAtLength() has real geometry. */
      requestAnimationFrame(() => {
        const paths = [...ink.querySelectorAll('path')];
        [...marks.children].forEach((badge, i) => {
          const pt = paths[i].getPointAtLength(0);
          badge.appendChild(svgEl('circle', { cx: pt.x, cy: pt.y, r: '7' }));
          const t = svgEl('text', { x: pt.x, y: pt.y });
          t.textContent = String(i + 1);
          badge.appendChild(t);
        });
      });
    });

    group.appendChild(line);
    root.appendChild(group);
  });
}

const mount = document.getElementById('kana-chart');
if (mount) mountKanaChart(mount);
