/* theme.js — the theme switch: paper ↔ fuji.
 *
 * Two themes, chosen explicitly by the reader and never by the operating system:
 *
 *   paper  the original cream page — the default, and what every page renders
 *          as if this script never runs or localStorage is unavailable.
 *   fuji   charcoal with the mountain's blue. The night option.
 *
 * A third, `sora` — sky blue with chocolate text, from the second reference —
 * was built, reviewed and removed on 2026-08-06. The structure it left behind is
 * kept on purpose: the cycle is a ring defined by `FACE`, not an if/else, so a
 * theme can be added or dropped by editing one map. With two entries the ring is
 * simply a toggle.
 *
 * The choice persists in localStorage, under the same reading of NOTES.md that
 * `lang-switch.js` records: preferences persist, results do not. The rule there
 * bars persisting the recognition drill's SCORES, because the drill must behave
 * identically on localhost and on Pages. A theme touches neither, and a switch
 * that reset on every page load would be useless for the one thing it is for —
 * you would re-flip it walking from a lesson to a reference sheet.
 *
 * ---- The flash, and why this file cannot fix it alone ----
 *
 * A deferred module runs after first paint, so applying the theme here would
 * show a cream page for a frame before it turned. Every page therefore carries a
 * tiny synchronous snippet in its <head>, maintained by scripts/wire_theme.py:
 *
 *   <script>try{var t=localStorage.getItem('jp-ar:theme');
 *     if(t==='fuji')document.documentElement.setAttribute('data-theme',t)}
 *     catch(e){}</script>
 *
 * That snippet, not this file, is what makes the theme correct on first paint.
 * Note that it whitelists rather than passing the stored value straight through:
 * a junk value must leave the page on the default, not stamp an arbitrary
 * attribute onto <html>. `stored()` below applies the same whitelist, and the
 * two have to agree — if a fourth theme is ever added, both change together.
 */

const KEY = 'jp-ar:theme';
const DEFAULT = 'paper';

/* The ring lives here and nowhere else: each theme names the one the button
   moves to, so the order cannot drift between the handler and the label, and
   `THEMES` is derived from the keys. The glyph shows the theme you would GET by
   pressing, not the one you are in; the label carries both, because a glyph
   alone does not say where you are. */
const FACE = {
  paper: { glyph: '🗻', next: 'fuji',  label: 'Theme: paper. Switch to Fuji — night.' },
  fuji:  { glyph: '📄', next: 'paper', label: 'Theme: Fuji. Switch back to paper.' },
};

const THEMES = Object.keys(FACE);

/* localStorage throws in real situations — Safari private browsing, a file://
   origin, storage disabled by policy. None of them should cost the reader the
   button itself, so every access is guarded and falls back to the paper theme. */
function stored() {
  try {
    const v = localStorage.getItem(KEY);
    return THEMES.includes(v) ? v : null;
  } catch { return null; }
}

function remember(theme) {
  try { localStorage.setItem(KEY, theme); } catch { /* not fatal */ }
}

export function currentTheme() {
  const t = document.documentElement.getAttribute('data-theme');
  return THEMES.includes(t) ? t : DEFAULT;
}

/* `paper` removes the attribute rather than setting data-theme="paper". The
   default theme is then the plain, unqualified stylesheet — exactly what the
   page was before this feature existed — instead of a third themed state that
   has to be kept in step with the other two. */
export function applyTheme(theme) {
  const next = THEMES.includes(theme) ? theme : DEFAULT;
  if (next === DEFAULT) document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', next);
  return next;
}

function paint(btn, theme) {
  const face = FACE[theme] || FACE[DEFAULT];
  btn.textContent = face.glyph;
  btn.title = face.label;
  btn.setAttribute('aria-label', face.label);
  /* Deliberately NOT aria-pressed: this cycles through three states, and
     aria-pressed announces a two-state toggle. The label carries the state. */
  btn.dataset.theme = theme;
}

export function mountThemeToggle() {
  if (!document.body) return;
  /* Idempotent: a page that ends up loading this twice gets one button. */
  if (document.querySelector('.theme-btn')) return;

  const theme = applyTheme(stored() || DEFAULT);

  const btn = document.createElement('button');
  btn.className = 'theme-btn';
  btn.type = 'button';
  paint(btn, theme);

  btn.addEventListener('click', () => {
    const next = FACE[currentTheme()].next;
    applyTheme(next);
    remember(next);
    paint(btn, next);
  });

  document.body.appendChild(btn);
}

/* Another tab may switch the theme; follow it, so two lessons open side by side
   do not disagree. Only fires for changes made in a *different* document. */
window.addEventListener('storage', e => {
  if (e.key !== KEY) return;
  const theme = applyTheme(stored() || DEFAULT);
  const btn = document.querySelector('.theme-btn');
  if (btn) paint(btn, theme);
});

mountThemeToggle();
