/* reading-log.js — the reading plan's finished-book checkboxes.
 *
 * Practice-track memory, same footing as flashcard-store.js (NOTES.md,
 * "the practice track may remember; nothing else may"): no server call, no
 * account, no sync, byte-identical on localhost and on Pages, and every
 * storage access wrapped so a blocked store costs the memory, never the page.
 *
 * Markup contract:
 *   <input type="checkbox" class="rl-box" data-book="tadoku-61273">
 *     — one per book row, data-book unique across the page. NEVER reuse or
 *       rename an id: the log is keyed on it, so a rename silently loses the
 *       reader's tick for that book.
 *   <span data-rl-count>            — replaced with "n of m" for the whole page
 *   <span data-rl-count="ID">       — "n of m" over the boxes inside #ID only
 *
 * The counts are derived from the live DOM, so a book added to the page is
 * counted the moment it exists; scripts/test_reading_log.mjs asserts the
 * page's own prose numbers against the real box count.
 */

const KEY = 'jp-ar:reading-log:v1';

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    const data = raw ? JSON.parse(raw) : {};
    return data && typeof data === 'object' ? data : {};
  } catch {
    return {};
  }
}

function save(log) {
  try {
    localStorage.setItem(KEY, JSON.stringify(log));
  } catch {
    /* blocked or full store: the tick still shows until the page unloads */
  }
}

function boxes(scope) {
  const root = scope ? document.getElementById(scope) : document;
  return root ? [...root.querySelectorAll('input.rl-box[data-book]')] : [];
}

function counts() {
  for (const el of document.querySelectorAll('[data-rl-count]')) {
    const list = boxes(el.getAttribute('data-rl-count') || null);
    const done = list.filter(b => b.checked).length;
    el.textContent = `${done} of ${list.length}`;
  }
}

const log = load();
for (const box of boxes(null)) {
  box.checked = Boolean(log[box.dataset.book]);
  box.addEventListener('change', () => {
    if (box.checked) log[box.dataset.book] = 1;
    else delete log[box.dataset.book];
    save(log);
    counts();
  });
}
counts();
