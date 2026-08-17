/* number-data.js — the two numeral series and the places they build on.
 *
 * `number-core.js` reads this to turn a numeral into a reading; `number-say.js`
 * renders both. Edit here, nowhere else. `scripts/check_numbers.py` builds every
 * reading from this file and compares it against a table of forms taken from a
 * source, so a typo here fails rather than teaches.
 *
 * WHY THE DATA HOLDS THE IRREGULARS AND THE CODE HOLDS NOTHING. Record 0009 —
 * a shared renderer carries claims too. The reading of 300 is a fact about
 * Japanese, not a step in an algorithm, so さんびゃく is a field. What the code
 * is allowed to know is only the shape of the system: four-digit groups,
 * largest place first, a place with nothing in it is skipped.
 *
 * ---- The two series ----
 *
 * 漢語数詞 (`sino`) is the borrowed Chinese series and the one that does all the
 * arithmetic. 和語数詞 (`native`) is the older Japanese one; it survives only as
 * far as ten, and everything above that in the native series (はた 20, もも 100,
 * ち 1000, よろず 10,000) is archaic — en.wikipedia marks all of them †.
 *
 * とお IS THE FACT WORTH KEEPING. Nine native numerals end in つ and the tenth
 * does not: ここのつ, then とお. So the series does not run out at ten so much as
 * stop being a counter there, which is why 11 upward has no native form at all.
 *
 * ---- Where the sound changes come from ----
 *
 * Only 百 and 千 change in this file, and only at 3, 6 and 8. That is not a
 * property of hundreds and thousands — it is the SAME rule the counter sheet
 * carries, seen from the number's side:
 *
 *   1, 6, 8, 10 end in ち / く / う and collapse to a small っ before a
 *   voiceless counter        → ろっぴゃく, はっぴゃく, はっせん
 *   3, 4, 何, 千 end in ん and make a は-row counter change
 *                            → さんびゃく, さんぜん (and さんぷん, さんがい)
 *   2, 5, 7, 9 end in a vowel and never do anything at all.
 *
 * The last line is the useful one and it is exceptionless across all eight
 * counters this course has taught; `check_counters.py` asserts it. 百 and 千 are
 * the two counters a NUMBER is built out of, so the rule shows up here first.
 *
 * ---- 一千万, and why the widget's ceiling is where it is ----
 *
 * 千 immediately before a myriad word takes its 一: 10,000,000 is いっせんまん,
 * not せんまん (en.wikipedia, Japanese numerals). Where the 千 is not immediately
 * before it — 15,000,000 — the 一 is optional and this file's `myriadOne` is not
 * applied, which is why the rule is a field on 千 and a condition in the reader
 * rather than a general "1000 is いっせん".
 *
 * The ceiling is 999,999,999. Above that comes 兆, which needs a fourth myriad
 * word and buys a beginner nothing.
 *
 * READINGS VERIFIED 2026-08-17 against
 * <https://en.wikipedia.org/wiki/Japanese_numerals> and, for every word that is
 * also a vocabulary card, JMdict through <https://jisho.org/api/v1/search/words>.
 * What the commonness check found is recorded in `vocab15-data.js`.
 *
 * Fields
 *   sino    [{ n, k kanji, r reading, ro romaji, alt·altRo·altNote optional }]
 *   native  [{ n, k, r, ro, note optional }]
 *   group   the three places inside one four-digit block, largest first
 *           [{ v, k, r, ro, bareAtOne, irr {digit: {r, ro}}, myriadOne optional }]
 *   myriad  the block multipliers, largest first  [{ v, k, r, ro }]
 */

window.NUMBERS = {
  max: 999999999,

  /* 漢語数詞 — the counting series. Where a digit has two readings the FIRST is
     the one to default to, and the second is filed as `alt` with the reason.
     JMdict lists both members of all three pairs as common, so neither is
     wrong; what decides them is the counter, and the counter sheet is where
     that lives. */
  sino: [
    { n: 0, k: "〇", r: "ゼロ", ro: "zero", alt: "れい", altRo: "rei",
      altNote: "ゼロ is the English word — which is why it is in katakana — and it is the one you hear spoken. れい 零 is the written and formal one: a temperature, a score, a train time. Both are JMdict-common." },
    { n: 1, k: "一", r: "いち", ro: "ichi" },
    { n: 2, k: "二", r: "に", ro: "ni" },
    { n: 3, k: "三", r: "さん", ro: "san" },
    { n: 4, k: "四", r: "よん", ro: "yon", alt: "し", altRo: "shi",
      altNote: "し is JMdict's headword reading for 四, but よん is what is said when counting. し survives in fixed places — しがつ April, しちじ seven o'clock's neighbour, 四季 しき the four seasons — and is avoided elsewhere because it is also 死, death." },
    { n: 5, k: "五", r: "ご", ro: "go" },
    { n: 6, k: "六", r: "ろく", ro: "roku" },
    { n: 7, k: "七", r: "なな", ro: "nana", alt: "しち", altRo: "shichi",
      altNote: "しち is JMdict's headword reading; なな is preferred aloud because しち is hard to tell from いち and はち down a telephone. しち holds in しちがつ July and しちじ seven o'clock." },
    { n: 8, k: "八", r: "はち", ro: "hachi" },
    { n: 9, k: "九", r: "きゅう", ro: "kyū", alt: "く", altRo: "ku",
      altNote: "く is avoided for the same kind of reason as し: it is also 苦, suffering. It is obligatory in くがつ September and くじ nine o'clock, and essentially nowhere else." },
    { n: 10, k: "十", r: "じゅう", ro: "jū" },
  ],

  /* 和語数詞 — the native series, which is also the general counter. Nine of the
     ten end in つ; とお does not, and that is where the series stops. */
  native: [
    { n: 1, k: "一つ", r: "ひとつ", ro: "hitotsu" },
    { n: 2, k: "二つ", r: "ふたつ", ro: "futatsu" },
    { n: 3, k: "三つ", r: "みっつ", ro: "mittsu" },
    { n: 4, k: "四つ", r: "よっつ", ro: "yottsu" },
    { n: 5, k: "五つ", r: "いつつ", ro: "itsutsu" },
    { n: 6, k: "六つ", r: "むっつ", ro: "muttsu" },
    { n: 7, k: "七つ", r: "ななつ", ro: "nanatsu" },
    { n: 8, k: "八つ", r: "やっつ", ro: "yattsu" },
    { n: 9, k: "九つ", r: "ここのつ", ro: "kokonotsu" },
    { n: 10, k: "十", r: "とお", ro: "tō",
      note: "No つ, and no 〜つ written on it either. The series stops here and 11 hands back to じゅういち." },
  ],

  /* The three places inside one four-digit block. `bareAtOne` is why 100 is
     ひゃく and not いちひゃく — the digit 1 is simply not said in front of these
     three. 万 and 億 below do not have it, which is the whole of Trick 3. */
  group: [
    { v: 1000, k: "千", r: "せん", ro: "sen", bareAtOne: true,
      /* 千 immediately before 万 or 億 takes its 一 back: 1000万 is いっせんまん.
         Applied only when the block is exactly 1000 — see the header. */
      myriadOne: { r: "いっせん", ro: "issen" },
      irr: { 3: { r: "さんぜん", ro: "sanzen" }, 8: { r: "はっせん", ro: "hassen" } } },
    { v: 100, k: "百", r: "ひゃく", ro: "hyaku", bareAtOne: true,
      irr: { 3: { r: "さんびゃく", ro: "sanbyaku" },
             6: { r: "ろっぴゃく", ro: "roppyaku" },
             8: { r: "はっぴゃく", ro: "happyaku" } } },
    { v: 10, k: "十", r: "じゅう", ro: "jū", bareAtOne: true, irr: {} },
  ],

  /* The block multipliers. No `bareAtOne`, so 10,000 comes out いちまん and
     100,000,000 comes out いちおく — which is the one thing about large numbers
     that has to be remembered rather than derived. */
  myriad: [
    { v: 100000000, k: "億", r: "おく", ro: "oku" },
    { v: 10000, k: "万", r: "まん", ro: "man" },
  ],
};
