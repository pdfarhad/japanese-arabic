/* kana-panel.js — the kana chart that rides along the edge of every lesson.
 *
 * One panel, pulling out from the left, with one tab fixed to that edge and
 * always on screen: the chart is one tap away wherever the page has been scrolled
 * to and one tap from gone again. The right edge is left clear for nav.js, whose
 * drawer belongs there.
 *
 * Wiring, at the end of <body> on any page that wants it:
 *   <script src="../assets/kana-panel-data.js"></script>
 *   <script src="../assets/kana-panel.js"></script>
 *
 * Progressive enhancement, on the nav.js pattern: no KANA_PANEL, no panel, and
 * the lesson is unchanged. Styles live in jp-ar.css with the other components.
 *
 * THREE LAYERS, THREE TOGGLES, AND THAT IS THE POINT OF IT. Every slot stacks the
 * hiragana, the katakana and the reading they share, and each of the three can be
 * switched off independently. That turns one reference chart into a rack of drills
 * — hiragana off to read katakana cold, romaji off to match the two scripts, both
 * scripts off to recall the kana from the reading — and MISSION.md wants exactly
 * that: the romaji withdrawn once the kana are solid, and neither script leaning
 * on the other. The choices persist, like the words-language switch: preferences,
 * not scores.
 *
 * Hiding is `visibility`, never `display`. The cells keep their size, so flipping
 * a layer never reflows the chart under the reader's finger.
 */

/* Bumped from 'jp-ar:kana-panel' when the two panels became one: under the old
   key `hiragana` and `katakana` meant "this panel is open", and they now mean
   "show this script". Same names, same type, different meaning — so the old
   values are dropped rather than misread. */
const KEY = 'jp-ar:kana-panel-2';

/* The three switchable layers, in the order they appear in the head. Each owns a
   `kp-no-<key>` class on <html> and a field of the same name in the state. */
const LAYERS = [
  { key: 'hiragana', cls: 'kp-h', field: 'h', title: 'show or hide the hiragana' },
  { key: 'katakana', cls: 'kp-k', field: 'k', title: 'show or hide the katakana' },
  { key: 'romaji', cls: 'kp-romaji', title: 'show or hide the readings' },
];
const SCRIPTS = LAYERS.filter(l => l.field);

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

/* localStorage throws on a file:// origin, in Safari private browsing, and when
   storage is switched off. None of that should cost the reader the panel, so
   every access falls back to the defaults instead. */
function stored() {
  try {
    const v = JSON.parse(localStorage.getItem(KEY));
    return v && typeof v === 'object' ? v : {};
  } catch { return {}; }
}
function remember(state) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* not fatal */ }
}

/* A section is taught, partly taught, or not reached — `"*"`, a list of row keys,
   or absent. Anything not reached still renders, dimmed. The question is asked per
   script, because the two do not advance together: lesson 5 finished the marked
   hiragana four lessons before the marked katakana existed. */
function isTaught(taught, script, sectionId, rowKey) {
  const scope = taught?.[script]?.[sectionId];
  if (scope === '*') return true;
  return Array.isArray(scope) && scope.includes(rowKey);
}

function buildSection(section, taught) {
  const wrap = el('section', 'kp-section');

  const head = el('div', 'kp-sectionhead');
  head.appendChild(el('h3', 'kp-sectiontitle', section.title));
  head.appendChild(el('p', 'kp-sectionsub', section.sub));
  wrap.appendChild(head);

  const grid = el('div', `kp-grid kp-grid-${section.cols.length}`);

  /* The column heads are the vowels, and they are what makes a label-less grid
     readable — the characters down the left already name their own rows. */
  section.cols.forEach(c => grid.appendChild(el('span', 'kp-col', c)));

  let anyNew = false;
  section.rows.forEach(row => {
    /* The reading decides whether a slot exists at all: a null there is a sound
       Japanese never had, and both scripts are null alongside it. */
    row.r.forEach((reading, i) => {
      if (reading == null) {
        const gap = el('span', 'kp-cell kp-gap');
        gap.setAttribute('aria-hidden', 'true');
        gap.textContent = '·';
        grid.appendChild(gap);
        return;
      }
      const cell = el('span', 'kp-cell');
      SCRIPTS.forEach(s => {
        const covered = isTaught(taught, s.key, section.id, row.key);
        if (!covered) anyNew = true;
        const char = el('span', `kp-char ${s.cls} jp${covered ? '' : ' kp-new'}`, row[s.field][i]);
        if (!covered) char.title = `${s.key}: not covered by the course yet`;
        cell.appendChild(char);
      });
      cell.appendChild(el('span', 'kp-romaji', reading));
      grid.appendChild(cell);
    });
  });

  wrap.appendChild(grid);
  if (anyNew) wrap.appendChild(el('p', 'kp-legend', 'Dimmed — not covered yet.'));
  return wrap;
}

function buildPanel(meta, data, state, api) {
  const aside = el('aside', `kp kp-${meta.side}`);
  const bodyId = `kp-body-${meta.id}`;

  const tab = el('button', 'kp-tab');
  tab.type = 'button';
  tab.setAttribute('aria-controls', bodyId);
  tab.setAttribute('aria-expanded', 'false');
  tab.appendChild(el('span', 'kp-tab-native jp', meta.native));
  /* The separator is in the markup, not a CSS gap: with the stylesheet late or
     stripped the two words must still not run together. */
  tab.appendChild(el('span', 'kp-tab-label', ` · ${meta.label}`));

  const body = el('div', 'kp-body');
  body.id = bodyId;
  body.setAttribute('role', 'region');
  body.setAttribute('aria-label', `${meta.label} chart`);

  const head = el('div', 'kp-head');
  head.appendChild(el('h2', 'kp-title', meta.label));

  const toggles = {};
  const bar = el('div', 'kp-toggles');
  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', 'show or hide each layer of the chart');
  LAYERS.forEach(layer => {
    const b = el('button', 'kp-toggle', layer.key);
    b.type = 'button';
    b.title = layer.title;
    b.setAttribute('aria-pressed', 'true');
    b.addEventListener('click', () => api.setLayer(layer.key, !state[layer.key]));
    toggles[layer.key] = b;
    bar.appendChild(b);
  });
  head.appendChild(bar);
  body.appendChild(head);

  data.sections.forEach(s => body.appendChild(buildSection(s, data.taught)));

  /* Order decides which side of the body the tab lands on, and the tab must end
     up on the outer edge so it survives the panel sliding away. */
  if (meta.side === 'left') aside.append(body, tab);
  else aside.append(tab, body);

  const setOpen = (open, { persist = true } = {}) => {
    aside.classList.toggle('kp-open', open);
    tab.setAttribute('aria-expanded', String(open));
    /* Off-screen is not out of the tab order — without this, a closed panel puts
       two hundred cells between the reader and the next link. */
    body.toggleAttribute('inert', !open);
    state.open = open;
    if (persist) remember(state);
  };

  tab.addEventListener('click', () => setOpen(!aside.classList.contains('kp-open')));

  document.body.appendChild(aside);
  return { setOpen, toggles, isOpen: () => aside.classList.contains('kp-open') };
}

function mount() {
  const data = window.KANA_PANEL;
  if (!data?.panel || !document.body) return;

  const saved = stored();
  const state = { open: saved.open === true };
  /* Every layer defaults ON: the panel is a reference first and a drill second,
     so a reader who has never touched a toggle gets the whole chart. */
  LAYERS.forEach(l => { state[l.key] = saved[l.key] !== false; });

  let panel;
  const api = {
    setLayer(key, on) {
      state[key] = on;
      document.documentElement.classList.toggle(`kp-no-${key}`, !on);
      panel.toggles[key].setAttribute('aria-pressed', String(on));
      remember(state);
    },
  };

  panel = buildPanel(data.panel, data, state, api);
  LAYERS.forEach(l => api.setLayer(l.key, state[l.key]));
  panel.setOpen(state.open, { persist: false });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel.isOpen()) panel.setOpen(false);
  });
}

mount();
