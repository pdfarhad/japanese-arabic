/* known-kana.js — highlight the kana the learner can already read.
 *
 * Walks any element carrying `data-mark-known` and wraps every character that
 * appears in `window.KANA` in <b class="known">. The point is motivational and
 * concrete: real sentences visibly light up as the chart is learned, so progress
 * is something you can see rather than something you're told.
 *
 * Also fills any `[data-known-count]` element with a live "N of M" tally.
 *
 * Optional `data-known-rows` on <body> limits what counts as known to those row
 * keys, space-separated. A lesson that taught five rows must keep saying so even
 * after a later day adds more kana to kana-data.js — otherwise its tally silently
 * inflates and it lights up characters the reader has not met yet.
 */

const scope = document.body.dataset.knownRows;
const only = scope ? scope.trim().split(/\s+/) : null;
const known = new Set(
  (window.KANA?.kana || [])
    .filter(k => !only || only.includes(k.row))
    .map(k => k.k),
);

function markElement(node) {
  let total = 0;
  let hit = 0;
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
  const texts = [];
  while (walker.nextNode()) texts.push(walker.currentNode);

  texts.forEach(text => {
    const chars = [...text.nodeValue];
    if (!chars.some(c => known.has(c))) {
      total += chars.filter(c => /[぀-ゟ]/.test(c)).length;
      return;
    }
    const frag = document.createDocumentFragment();
    let buffer = '';
    const flush = () => {
      if (buffer) { frag.appendChild(document.createTextNode(buffer)); buffer = ''; }
    };
    chars.forEach(c => {
      if (/[぀-ゟ]/.test(c)) total += 1;
      if (known.has(c)) {
        flush();
        const b = document.createElement('b');
        b.className = 'known';
        b.textContent = c;
        frag.appendChild(b);
        hit += 1;
      } else {
        buffer += c;
      }
    });
    flush();
    text.parentNode.replaceChild(frag, text);
  });
  return { total, hit };
}

let total = 0;
let hit = 0;
document.querySelectorAll('[data-mark-known]').forEach(node => {
  const r = markElement(node);
  total += r.total;
  hit += r.hit;
});

document.querySelectorAll('[data-known-count]').forEach(el => {
  el.textContent = `${hit} of the ${total}`;
});
