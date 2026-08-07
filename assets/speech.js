/* speech.js — read Japanese and Arabic aloud using the browser's own voices.
 *
 * No network, no audio files: everything runs through the Web Speech API, so it
 * works identically on localhost and on a static host like GitHub Pages.
 *
 * Two ways to use it:
 *   1. Markup — any <button data-speak="こんにちは" data-lang="ja"> is wired
 *      automatically by the delegated listener at the bottom of this file.
 *   2. Import — `import { speak, available } from './speech.js'`.
 *
 * Voice availability is the one thing we cannot control: a machine with no
 * Japanese voice installed cannot speak Japanese. We detect that and mark the
 * affected buttons rather than failing silently on click.
 */

const synth = window.speechSynthesis || null;

let voices = [];

function refresh() {
  voices = synth ? synth.getVoices() : [];
}

/* Preferred voices per language, best first — the common macOS, Windows, Android
   and Chrome built-ins. Anything not on the list still works: we fall back to any
   voice whose BCP-47 tag starts with the language code. */
const PREFERRED = {
  ja: ['Kyoko', 'O-Ren', 'Otoya', 'Google 日本語', 'Microsoft Nanami', 'Microsoft Ayumi', 'Microsoft Haruka'],
  ar: ['Majed', 'Maged', 'Tarik', 'Google العربية', 'Microsoft Hamed', 'Microsoft Naayf', 'Laila'],
};

export function voiceFor(lang) {
  const tagged = voices.filter(v =>
    String(v.lang || '').toLowerCase().replace(/_/g, '-').startsWith(lang));
  if (!tagged.length) return null;
  for (const name of PREFERRED[lang] || []) {
    const hit = tagged.find(v => v.name.includes(name));
    if (hit) return hit;
  }
  return tagged.find(v => v.localService) || tagged[0];
}

export function available(lang) {
  return Boolean(synth) && Boolean(voiceFor(lang));
}

/* Japanese defaults a touch slow — beginners need to hear the mora boundaries.
   Arabic sits closer to normal speed because the learner already reads it. */
const RATE = { ja: 0.78, ar: 0.85 };

export function speak(text, lang, opts = {}) {
  if (!synth) return false;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const v = voiceFor(lang);
  if (v) u.voice = v;
  u.lang = v ? v.lang : (lang === 'ja' ? 'ja-JP' : 'ar-SA');
  u.rate = opts.rate || RATE[lang] || 0.9;
  u.pitch = 1;
  synth.speak(u);
  return true;
}

/* ---------- markup wiring ---------- */

function markUnavailable(root = document) {
  root.querySelectorAll('button[data-speak][data-lang]').forEach(btn => {
    const lang = btn.dataset.lang;
    const ok = available(lang);
    btn.classList.toggle('no-voice', !ok);
    if (!ok) {
      btn.title = lang === 'ja'
        ? 'No Japanese voice installed on this device'
        : 'No Arabic voice installed on this device';
    } else {
      btn.title = 'Play';
    }
  });
  /* Surface the situation once, in prose, instead of leaving dead buttons. */
  document.querySelectorAll('[data-voice-warning]').forEach(el => {
    const missing = ['ja', 'ar'].filter(l => !available(l));
    if (!missing.length) { el.hidden = true; return; }
    el.hidden = false;
    const names = missing.map(l => (l === 'ja' ? 'Japanese' : 'Arabic')).join(' or ');
    el.textContent = `This device has no ${names} voice installed, so those play `
      + `buttons are silent. On macOS add one under System Settings → Accessibility `
      + `→ Spoken Content → System Voice → Manage Voices.`;
  });
}

if (synth) {
  refresh();
  markUnavailable();
  /* getVoices() is asynchronous in Chrome — the list is usually empty on first call. */
  synth.addEventListener('voiceschanged', () => { refresh(); markUnavailable(); });
  setTimeout(() => { refresh(); markUnavailable(); }, 400);
}

document.addEventListener('click', e => {
  const btn = e.target.closest('button[data-speak][data-lang]');
  if (!btn) return;
  e.preventDefault();
  speak(btn.dataset.speak, btn.dataset.lang);
  btn.classList.add('speaking');
  setTimeout(() => btn.classList.remove('speaking'), 600);
});

export { markUnavailable };
