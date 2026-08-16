/* counter-data.js — the seven counters the course has taught, 1 to 10 plus 何.
 *
 * `counter-grid.js` renders it into `reference/counters.html`. Edit here, nowhere
 * else. `scripts/check_counters.py` verifies every cell against the rule its own
 * tag claims, so a typo cannot pass and neither can a mislabelled sound change.
 *
 * WHY THE SHEET EXISTS. MISSION.md, chapter 13: "counters now run through four
 * chapters … if a later chapter adds three more they have earned a reference
 * sheet." Chapter 14 added 〜じ and 〜ふん, taking the total to seven across four
 * chapters, and 〜ふん has the heaviest sound-change table in the course. Farhad
 * asked for the sheet on 2026-08-14.
 *
 * THE ONE IDEA THIS SHEET EXISTS TO CARRY: **whether a counter changes at all is
 * decided by its own first sound, before you look at any number.**
 *
 *   〜えん begins with a vowel        → nothing can happen to it. Ever.
 *   〜じ, 〜がつ begin voiced          → nothing happens either.
 *   〜かい, 〜さい, 〜ふん begin voiceless → these are the ones that change.
 *
 * That is why 〜じ is free and 〜ふん is not, and it predicts the next counter
 * before it is taught. `first` on each entry records it.
 *
 * A SEPARATE AXIS, OFTEN CONFUSED WITH IT: which *number word* is used. よ/よん,
 * しち/なな, く/きゅう is a choice of vocabulary, not a sound change — よじ is not
 * よんじ worn down, it is a different word. Tagged `x`, and counted separately in
 * the sheet, because a learner who files them together will look for a phonetic
 * reason and not find one.
 *
 * READINGS AND EUPHONIC CHANGES verified 2026-08-14 against
 * <https://en.wikipedia.org/wiki/Japanese_counter_word>, and cross-checked
 * against what this course has already taught: the 〜にち column is
 * `reference/calendar.html`'s, and every 何 form is asserted equal to its
 * existing vocabulary card by `check_counters.py`.
 *
 * ALTERNATIVES ARE RECORDED, NOT HIDDEN, in `alt`: 三階 さんかい is as acceptable
 * as さんがい, 八分 is はっぷん or はちふん, and じゅっ/じっ is a live generational
 * split (じゅっ dominant, じっ older). A reference sheet that showed one form as
 * the only form would be lying about a language people actually speak.
 *
 * TAGS, per row:
 *   g  gemination — the number's last mora collapses to っ
 *   p  the counter's は-row sound hardens to ぱ (ふ → ぷ)
 *   v  the counter's か-row sound voices to が (rendaku)
 *   x  a different number word entirely (よ, しち, く)
 *   n  a native Japanese numeral, not the Sino-Japanese series at all
 *   ''  nothing happened: number word + counter, joined
 *
 * Fields per counter: id · jp · kanji · en · lesson · path · first · base
 *   rows [{ n, r reading, ro romaji, t tag, alt optional }] · nan · nanRo · note
 */

window.COUNTERS = {
  /* The Sino-Japanese series every `t: ''` cell is built from. check_counters.py
     asserts NUM[n] + base === reading for those cells, which is what makes an
     untagged row a claim rather than a copy. */
  num: { 1: "いち", 2: "に", 3: "さん", 4: "よん", 5: "ご", 6: "ろく",
         7: "なな", 8: "はち", 9: "きゅう", 10: "じゅう" },

  counters: [
    {
      id: "gatsu",
      jp: "〜がつ", kanji: "〜月", en: "month of the year",
      lesson: 10, path: "lessons/0010-days-and-months.html",
      first: "voiced", base: "がつ",
      note: "Nothing changes — が is already voiced, so there is nothing left to do to it. The only oddity is that 4, 7 and 9 use し, しち and く, and they are not optional: しがつ is April and よんがつ is not a word.",
      rows: [
        { n: 1,  r: "いちがつ",   ro: "ichigatsu",   t: "" },
        { n: 2,  r: "にがつ",     ro: "nigatsu",     t: "" },
        { n: 3,  r: "さんがつ",   ro: "sangatsu",    t: "" },
        { n: 4,  r: "しがつ",     ro: "shigatsu",    t: "x" },
        { n: 5,  r: "ごがつ",     ro: "gogatsu",     t: "" },
        { n: 6,  r: "ろくがつ",   ro: "rokugatsu",   t: "" },
        { n: 7,  r: "しちがつ",   ro: "shichigatsu", t: "x" },
        { n: 8,  r: "はちがつ",   ro: "hachigatsu",  t: "" },
        { n: 9,  r: "くがつ",     ro: "kugatsu",     t: "x" },
        { n: 10, r: "じゅうがつ", ro: "jūgatsu",     t: "" },
      ],
      nan: "なんがつ", nanRo: "nangatsu", nanT: "",
    },
    {
      id: "nichi",
      jp: "〜にち", kanji: "〜日", en: "day of the month",
      lesson: 10, path: "lessons/0010-days-and-months.html",
      first: "voiced", base: "にち",
      note: "The odd one out, and not a sound-change problem at all: days 1 to 10 use a native Japanese counting series that has nothing to do with いち・に・さん. From 11 they mostly behave — except 14, 20 and 24. The full 31 are on the calendar sheet.",
      rows: [
        { n: 1,  r: "ついたち",   ro: "tsuitachi", t: "n" },
        { n: 2,  r: "ふつか",     ro: "futsuka",   t: "n" },
        { n: 3,  r: "みっか",     ro: "mikka",     t: "n" },
        { n: 4,  r: "よっか",     ro: "yokka",     t: "n" },
        { n: 5,  r: "いつか",     ro: "itsuka",    t: "n" },
        { n: 6,  r: "むいか",     ro: "muika",     t: "n" },
        { n: 7,  r: "なのか",     ro: "nanoka",    t: "n" },
        { n: 8,  r: "ようか",     ro: "yōka",      t: "n" },
        { n: 9,  r: "ここのか",   ro: "kokonoka",  t: "n" },
        { n: 10, r: "とおか",     ro: "tōka",      t: "n" },
      ],
      nan: "なんにち", nanRo: "nannichi", nanT: "",
    },
    {
      id: "sai",
      jp: "〜さい", kanji: "〜歳", en: "years of age",
      lesson: 11, path: "lessons/0011-introducing-yourself.html",
      first: "voiceless", base: "さい",
      note: "Voiceless さ, so it geminates — but only at 1, 8 and 10. **6 does not**: ろくさい, not ろっさい. ろく collapses before か and ぱ sounds and leaves さ alone, which is the single most useful exception on this page. 20 is はたち, a word rather than a reading.",
      rows: [
        { n: 1,  r: "いっさい",     ro: "issai",   t: "g" },
        { n: 2,  r: "にさい",       ro: "nisai",   t: "" },
        { n: 3,  r: "さんさい",     ro: "sansai",  t: "" },
        { n: 4,  r: "よんさい",     ro: "yonsai",  t: "" },
        { n: 5,  r: "ごさい",       ro: "gosai",   t: "" },
        { n: 6,  r: "ろくさい",     ro: "rokusai", t: "" },
        { n: 7,  r: "ななさい",     ro: "nanasai", t: "" },
        { n: 8,  r: "はっさい",     ro: "hassai",  t: "g" },
        { n: 9,  r: "きゅうさい",   ro: "kyūsai",  t: "" },
        { n: 10, r: "じゅっさい",   ro: "jussai",  t: "g", alt: "じっさい" },
      ],
      nan: "なんさい", nanRo: "nansai", nanT: "",
    },
    {
      id: "kai",
      jp: "〜かい", kanji: "〜階", en: "floor of a building",
      lesson: 13, path: "lessons/0013-how-much-and-which-floor.html",
      first: "voiceless", base: "かい",
      note: "Voiceless か, so it geminates at 1, 6, 8 and 10 — all four, unlike 〜さい. And it is the only counter here that **voices**: さんがい. The question word なんがい proves the voicing is real, which is how chapter 13 derived it without being told.",
      rows: [
        { n: 1,  r: "いっかい",     ro: "ikkai",   t: "g" },
        { n: 2,  r: "にかい",       ro: "nikai",   t: "" },
        { n: 3,  r: "さんがい",     ro: "sangai",  t: "v", alt: "さんかい" },
        { n: 4,  r: "よんかい",     ro: "yonkai",  t: "" },
        { n: 5,  r: "ごかい",       ro: "gokai",   t: "" },
        { n: 6,  r: "ろっかい",     ro: "rokkai",  t: "g" },
        { n: 7,  r: "ななかい",     ro: "nanakai", t: "" },
        { n: 8,  r: "はっかい",     ro: "hakkai",  t: "g" },
        { n: 9,  r: "きゅうかい",   ro: "kyūkai",  t: "" },
        { n: 10, r: "じゅっかい",   ro: "jukkai",  t: "g", alt: "じっかい" },
      ],
      nan: "なんがい", nanRo: "nangai", nanT: "v",
    },
    {
      id: "en",
      jp: "〜えん", kanji: "〜円", en: "yen",
      lesson: 13, path: "lessons/0013-how-much-and-which-floor.html",
      first: "vowel", base: "えん",
      note: "**Begins with a vowel, so nothing can happen to it** — there is no consonant to geminate against and none to harden. The only irregular cell is 4, which takes よ rather than よん, and that is a word choice rather than a sound change.",
      rows: [
        { n: 1,  r: "いちえん",     ro: "ichien",  t: "" },
        { n: 2,  r: "にえん",       ro: "nien",    t: "" },
        { n: 3,  r: "さんえん",     ro: "san'en",  t: "" },
        { n: 4,  r: "よえん",       ro: "yoen",    t: "x" },
        { n: 5,  r: "ごえん",       ro: "goen",    t: "" },
        { n: 6,  r: "ろくえん",     ro: "rokuen",  t: "" },
        { n: 7,  r: "ななえん",     ro: "nanaen",  t: "" },
        { n: 8,  r: "はちえん",     ro: "hachien", t: "" },
        { n: 9,  r: "きゅうえん",   ro: "kyūen",   t: "" },
        { n: 10, r: "じゅうえん",   ro: "jūen",    t: "" },
      ],
      nan: "なんえん", nanRo: "nan'en", nanT: "",
    },
    {
      id: "ji",
      jp: "〜じ", kanji: "〜時", en: "o'clock",
      lesson: 14, path: "lessons/0014-the-working-day.html",
      first: "voiced", base: "じ",
      note: "Voiced じ, so no gemination and no hardening: twelve hours, twelve plain readings. What it does have is three different number words — よじ, しちじ, くじ — and those three are obligatory. Every clock in Japan says くじ; きゅうじ is not an alternative.",
      rows: [
        { n: 1,  r: "いちじ",     ro: "ichiji",   t: "" },
        { n: 2,  r: "にじ",       ro: "niji",     t: "" },
        { n: 3,  r: "さんじ",     ro: "sanji",    t: "" },
        { n: 4,  r: "よじ",       ro: "yoji",     t: "x" },
        { n: 5,  r: "ごじ",       ro: "goji",     t: "" },
        { n: 6,  r: "ろくじ",     ro: "rokuji",   t: "" },
        { n: 7,  r: "しちじ",     ro: "shichiji", t: "x" },
        { n: 8,  r: "はちじ",     ro: "hachiji",  t: "" },
        { n: 9,  r: "くじ",       ro: "kuji",     t: "x" },
        { n: 10, r: "じゅうじ",   ro: "jūji",     t: "" },
      ],
      nan: "なんじ", nanRo: "nanji", nanT: "",
    },
    {
      id: "fun",
      jp: "〜ふん", kanji: "〜分", en: "minute",
      lesson: 14, path: "lessons/0014-the-working-day.html",
      first: "voiceless", base: "ふん",
      note: "The busiest counter in the course: **six of the ten cells change**, and two things happen at once in four of them. ふ hardens to ぷ after っ *and* after ん, which is why 3 and 4 change without geminating. 2, 5, 7 and 9 end in a vowel, so nothing touches them.",
      rows: [
        { n: 1,  r: "いっぷん",     ro: "ippun",   t: "gp" },
        { n: 2,  r: "にふん",       ro: "nifun",   t: "" },
        { n: 3,  r: "さんぷん",     ro: "sanpun",  t: "p" },
        { n: 4,  r: "よんぷん",     ro: "yonpun",  t: "p" },
        { n: 5,  r: "ごふん",       ro: "gofun",   t: "" },
        { n: 6,  r: "ろっぷん",     ro: "roppun",  t: "gp" },
        { n: 7,  r: "ななふん",     ro: "nanafun", t: "" },
        { n: 8,  r: "はっぷん",     ro: "happun",  t: "gp", alt: "はちふん" },
        { n: 9,  r: "きゅうふん",   ro: "kyūfun",  t: "" },
        { n: 10, r: "じゅっぷん",   ro: "juppun",  t: "gp", alt: "じっぷん" },
      ],
      nan: "なんぷん", nanRo: "nanpun", nanT: "p",
    },
  ],
};
