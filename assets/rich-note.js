/* rich-note.js — the tiny bit of markup a data file's note is allowed to carry.
 *
 * `**bold**` becomes <strong>, `*italic*` becomes <em>, and nothing else does
 * anything. A data file must not be able to write HTML, so this builds elements
 * and sets their `textContent`; it never assigns `innerHTML`.
 *
 * WHY IT EXISTS. `counter-grid.js` had this logic inline and every other
 * renderer did not, so notes written in the same convention rendered two
 * different ways: bold on the counter sheet, and the literal characters
 * `**The sheet prints なんぶん**` on the word cards of lessons 11 to 15. Found by
 * a screenshot on 2026-08-17, four cards deep into lesson 14. **345 notes across
 * the data files, 39 of them using an asterisk** — none of which was reaching a
 * reader as emphasis.
 *
 * The lesson in it: a convention that only one of four renderers implements is
 * not a convention, it is a bug with a style guide. Any new renderer that shows
 * a `n` field imports this.
 *
 * Asterisks must be balanced, and every one of the 39 is. An unpaired `*` simply
 * stays a literal asterisk rather than swallowing the rest of the note, because
 * the pattern requires a closing mark before the note ends.
 */

/* `**…**` first, so a bold run is never mistaken for two italic ones. Neither
   pattern crosses an asterisk, which is what keeps an unpaired mark harmless. */
const TOKEN = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;

export function richNote(text) {
  const frag = document.createDocumentFragment();
  let last = 0;
  let m;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text)) !== null) {
    if (m.index > last) frag.append(text.slice(last, m.index));
    const node = document.createElement(m[1] != null ? 'strong' : 'em');
    node.textContent = m[1] != null ? m[1] : m[2];
    frag.append(node);
    last = TOKEN.lastIndex;
  }
  if (last < text.length) frag.append(text.slice(last));
  return frag;
}

/* The shape every caller actually wants: one element, class set, note inside. */
export function richEl(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  n.append(richNote(text));
  return n;
}
