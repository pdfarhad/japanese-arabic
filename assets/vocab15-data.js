/* vocab15-data.js — 32 words for the numbers and the two ways of counting.
 *
 * The single source of truth for lesson 15, exactly as `vocab14-data.js` is for
 * lesson 14: `vocab-list.js` renders the cards, `vocab-drill.js` builds its
 * questions, and the practice deck reads it through `flashcard-sets.js`. Edit
 * here, nowhere else. Do not merge the sets.
 *
 * NO LECTURE NOTES EXIST FOR THIS CHAPTER. Farhad asked for it by name on
 * 2026-08-17 — "make a chapter on number, counting" — which is the arrangement
 * `learning-records/0003` describes and chapters 9, 10 and the katakana half of
 * 8 were built under. Scope is therefore set here rather than by a sheet, and
 * it is set at **the number system plus the two general counters**: the Sino
 * and native series 0–10, the places 百・千・万・億, 〜つ and 〜にん. Object
 * counters (〜まい, 〜ほん, 〜さつ, 〜だい) are Minna no Nihongo 第11課 and are
 * deliberately left where the textbook has them.
 *
 * WHAT WAS ALREADY TAUGHT, and is repeated here on purpose: ひゃく, せん and まん
 * are chapter 13's cards and いくつ is chapter 6's, each with its English and
 * Arabic **copied verbatim** so a word met twice is not met as two different
 * words. The set carries them because a chapter about building numbers cannot
 * be missing the places numbers are built from — the same argument chapters 11
 * and 13 used for their repeats.
 *
 * ---- The commonness check found the lesson, for the fifth chapter running ----
 *
 * Checked against JMdict through <https://jisho.org/api/v1/search/words> on
 * 2026-08-17. The finding is not about one word, it is about the whole set:
 * **a numeral in kana is one of the shortest strings the language has, and short
 * strings identify almost nothing.**
 *
 *   じゅう returns 銃, a GUN, before 十.
 *   きゅう returns 急 "sudden" before 九.
 *   なな returns 七 read しち — the kana points at the other reading of its own
 *          kanji before it points at itself.
 *   よん does not return 四 at all; the top hit is 四 read し, then 四十.
 *   はち is 八, then 鉢 a bowl, then 蜂 a bee. せん is 千, then 線 a line, then
 *          栓 a stopper. まん is 万, then マン "man".
 *   つ is not tagged common in any sense: the kana alone is a conjunction, then
 *          津 the city, and only third 箇[つ], the general counter.
 *
 * That is chapter 11's かんこく/勧告 and chapter 12's ご・そう・なん arriving as a
 * property of an entire word class, and it is the honest answer to why modern
 * Japanese writes numbers in Arabic digits and why the kanji 一二三 exist at
 * all. **In by syllabus, not by frequency** applies to つ specifically; every
 * other card here is JMdict-common.
 *
 * Two more the check caught, both taught on the cards:
 *   とお in kana is 遠 "distant" before it is 十 — the only native numeral whose
 *   bare kana points somewhere else entirely.
 *   何人 has THREE common readings: なんにん how many people, なにびと anyone,
 *   なにじん what nationality. One string, three questions.
 *
 * ---- The Arabic is the second half of the argument, not a gloss ----
 *
 * Read the わご column's Arabic downward and it demonstrates Arabic's own
 * counting rule while translating Japanese's: شَيْءٌ وَاحِدٌ (singular + adjective),
 * شَيْئَانِ (dual, no numeral at all), then ثَلَاثَةُ أَشْيَاءَ — plural, genitive, and
 * the numeral carrying ة against a masculine noun. `check_vocab.py`'s
 * distinct-gloss rule forced these apart and, for the fifth time in this course,
 * what it forced out was a real distinction rather than a collision. See NOTES.
 *
 * Verified against <https://en.wikipedia.org/wiki/Arabic_grammar> and the
 * Arabic-language العدد والمعدود, which agree: 1–2 follow the noun as adjectives,
 * 3–10 take a genitive plural with reversed gender, 11–99 a singular accusative,
 * 100 and up a singular genitive.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB15 = {
  cats: [
    { id: "kango",   jp: "かんご",     r: "kango",   en: "The counting series — borrowed from Chinese" },
    { id: "wago",    jp: "わご",       r: "wago",    en: "The native series — it counts things, and stops at ten" },
    { id: "kurai",   jp: "くらい",     r: "kurai",   en: "The four places a number is built from" },
    { id: "hito",    jp: "ひと",       r: "hito",    en: "Counting people, where both series meet" },
    { id: "kazoeru", jp: "かぞえる",   r: "kazoeru", en: "Counting itself" },
  ],

  words: [
    /* ---------- かんご · the Sino-Japanese series ---------- */
    { c: "kango", k: "ゼロ", r: "zero", e: "zero", a: "صِفْر", at: "ṣifr",
      n: "Written in katakana because it is the English word. The formal one is れい 零 — a temperature, a score, a train time. **Arabic صِفْر is where the English word came from**, through Italian *zefiro*: the same word reached Japanese by going all the way round the world in the other direction." },
    { c: "kango", k: "いち", r: "ichi", e: "one", a: "وَاحِد", at: "wāḥid",
      n: "一. Before 十, 百 and 千 it is simply not said — 100 is ひゃく, never いちひゃく — but from 万 upward it comes back: 10,000 is いちまん." },
    { c: "kango", k: "に", r: "ni", e: "two", a: "اِثْنَانِ", at: "ithnāni",
      n: "二. The same kana as the particle に that has turned up twice in fixed phrases, which is a good reason to learn numbers with their kanji beside them." },
    { c: "kango", k: "さん", r: "san", e: "three", a: "ثَلَاثَة", at: "thalātha",
      n: "三 — and also chapter 11's さん, the one you add to a name. Three is the number that **voices what follows it**: さんびゃく, さんぜん, さんがい, さんぷん. It ends in ん, and that is why." },
    { c: "kango", k: "よん", r: "yon", e: "four", a: "أَرْبَعَة", at: "arbaʿa",
      n: "四, whose other reading is し — also the sound of 死, death. よん is what is said when counting; し survives in しがつ April and a few fixed words. Jisho's headword for 四 is still し." },
    { c: "kango", k: "ご", r: "go", e: "five", a: "خَمْسَة", at: "khamsa",
      n: "五. Chapter 12 noted that the kana ご returns 五 before it returns 語, *language* — this is the chapter where that first entry finally becomes a word you know." },
    { c: "kango", k: "ろく", r: "roku", e: "six", a: "سِتَّة", at: "sitta",
      n: "六. One of the four numbers that **collapse to a small っ** before a voiceless counter: ろっぴゃく, ろっかい, ろっぷん. Its one refusal is 〜さい — ろくさい, never ろっさい." },
    { c: "kango", k: "なな", r: "nana", e: "seven", a: "سَبْعَة", at: "sabʿa",
      n: "七, whose other reading is しち. なな is preferred aloud because しち is hard to tell from いち and はち. Search the kana なな in a dictionary and it hands you 七 read *しち* — the word pointing at its own other reading." },
    { c: "kango", k: "はち", r: "hachi", e: "eight", a: "ثَمَانِيَة", at: "thamāniya",
      n: "八, and a second っ number: はっぴゃく, はっせん, はっかい, はっぷん. The kana alone is also 鉢 a bowl and 蜂 a bee, both common." },
    { c: "kango", k: "きゅう", r: "kyū", e: "nine", a: "تِسْعَة", at: "tisʿa",
      n: "**Chapter 7 already gave you this card** — as a yōon word, with the Arabic written تِسْعَةٌ. Both are right: a numeral being *recited* carries no case ending, which is why the counting series here is bare. 九, other reading く — the sound of 苦, suffering, which is why きゅう is the default and く survives only in くがつ September and くじ nine o'clock. The bare kana returns 急 *sudden* before it returns 九." },
    { c: "kango", k: "じゅう", r: "jū", e: "ten", a: "عَشَرَة", at: "ʿashara",
      n: "十, also a chapter 7 card and bare here for the same reason as きゅう. Everything from 11 to 99 is built from this and nothing else: じゅういち is 10-1, にじゅう is 2-10, にじゅういち is 2-10-1. The bare kana returns 銃, a **gun**, before it returns ten." },

    /* ---------- わご · the native series ---------- */
    { c: "wago", k: "ひとつ", r: "hitotsu", e: "one thing", a: "شَيْءٌ وَاحِدٌ", at: "shayʾun wāḥid",
      n: "一つ. The older Japanese series, and it is a counter already — you can point at an apple and say ひとつ with nothing else attached. Arabic does the same thing from the other side: the noun is singular and وَاحِد follows it as an adjective." },
    { c: "wago", k: "ふたつ", r: "futatsu", e: "two things", a: "شَيْئَانِ", at: "shayʾāni",
      n: "二つ. Arabic needs **no numeral at all** here — شَيْئَانِ is the dual, the number marked on the noun itself. Japanese has no dual and no plural, so the counting has to go somewhere else entirely." },
    { c: "wago", k: "みっつ", r: "mittsu", e: "three things", a: "ثَلَاثَةُ أَشْيَاءَ", at: "thalāthatu ashyāʾa",
      n: "三つ. This is where Arabic's rule turns over: from three the noun goes **plural and genitive**, and the numeral takes ة against a masculine noun — ثَلَاثَة for شَيْء. Japanese changes nothing about the noun, ever." },
    { c: "wago", k: "よっつ", r: "yottsu", e: "four things", a: "أَرْبَعَةُ أَشْيَاءَ", at: "arbaʿatu ashyāʾa",
      n: "四つ. Note the small っ, which lesson 9 taught: よ・っ・つ is three beats. みっつ, よっつ, むっつ and やっつ all have it and it is easy to lose." },
    { c: "wago", k: "いつつ", r: "itsutsu", e: "five things", a: "خَمْسَةُ أَشْيَاءَ", at: "khamsatu ashyāʾa",
      n: "五つ, and the one that does **not** take a small っ — いつつ is い・つ・つ, three full beats with no silent one. The neighbour よっつ does. Say them back to back." },
    { c: "wago", k: "むっつ", r: "muttsu", e: "six things", a: "سِتَّةُ أَشْيَاءَ", at: "sittatu ashyāʾa",
      n: "六つ. The native six shares nothing with ろく, which is the clearest evidence that these are two unrelated series rather than two pronunciations of one." },
    { c: "wago", k: "ななつ", r: "nanatsu", e: "seven things", a: "سَبْعَةُ أَشْيَاءَ", at: "sabʿatu ashyāʾa",
      n: "七つ — and the only place the two series touch. なな is native, and it has been quietly borrowed into the Chinese series to replace しち." },
    { c: "wago", k: "やっつ", r: "yattsu", e: "eight things", a: "ثَمَانِيَةُ أَشْيَاءَ", at: "thamāniyatu ashyāʾa",
      n: "八つ. Compare やっつ with はち: the two series are as far apart at eight as they are everywhere else." },
    { c: "wago", k: "ここのつ", r: "kokonotsu", e: "nine things", a: "تِسْعَةُ أَشْيَاءَ", at: "tisʿatu ashyāʾa",
      n: "九つ, four beats and the longest of them. The 〜の〜 in the middle is the same shape as ここのか, the 9th of the month, from chapter 10 — one series, two jobs." },
    { c: "wago", k: "とお", r: "tō", e: "ten things", a: "عَشَرَةُ أَشْيَاءَ", at: "ʿasharatu ashyāʾa",
      n: "十, with **no つ on it** — nine of the ten end in つ and this one does not, which is where the series stops. There is no native eleven. In kana alone とお is 遠 *distant* before it is ten." },

    /* ---------- くらい · the places ---------- */
    { c: "kurai", k: "ひゃく", r: "hyaku", e: "hundred", a: "مِئَة", at: "miʾa",
      n: "百. Three of its multiples change sound: 300 さんびゃく, 600 ろっぴゃく, 800 はっぴゃく. Lesson 7 taught ひゃく as a yōon word; this is the first time it has to be counted with." },
    { c: "kurai", k: "せん", r: "sen", e: "thousand", a: "أَلْف", at: "alf",
      n: "千. Two change: 3000 さんぜん, 8000 はっせん. 6000 stays regular — ろくせん — which is the exception to the exception." },
    { c: "kurai", k: "まん", r: "man", e: "ten thousand — a unit, not a word", a: "عَشَرَةُ آلَافٍ", at: "ʿasharat ālāf",
      n: "万, and it is never said alone: 10,000 is いちまん. From 万 upward a number needs its 一, where 百 and 千 do not. Arabic has no single word for it — عشرة آلاف is “ten thousands”." },
    { c: "kurai", k: "おく", r: "oku", e: "hundred million", a: "مِئَةُ مِلْيُونٍ", at: "miʾat milyūn",
      n: "億 — 万 × 万, the next four-digit column up, and it needs its 一 too: 一億. English and Arabic both have to build this one out of two words, which is the mirror image of what they do to まん." },

    /* ---------- ひと · counting people ---------- */
    { c: "hito", k: "ひとり", r: "hitori", e: "one person", a: "شَخْصٌ وَاحِدٌ", at: "shakhṣun wāḥid",
      n: "一人 — native ひと with an old counter り, not 〜にん. It also means *alone*: ひとりで, by oneself." },
    { c: "hito", k: "ふたり", r: "futari", e: "two people", a: "شَخْصَانِ", at: "shakhṣāni",
      n: "二人, the same り. These two are the last survivors of the native series inside a counter — from three onward it is にん and nothing else." },
    { c: "hito", k: "にん", r: "nin", e: "~ people — the counter", a: "أَشْخَاص", at: "ashkhāṣ",
      n: "〜人. さんにん, よにん, ごにん. Note 4 is **よにん**, not よんにん, and 7 is しちにん — the two places where the old readings hold. 人 alone is also read ひと *person* and じん *-ian*, all three common." },
    { c: "hito", k: "なんにん", r: "nannin", e: "how many people", a: "كَمْ شَخْصًا", at: "kam shakhṣan",
      n: "何人 — chapter 6's card, back because the course can finally answer it, exactly as なんじ waited for chapter 14 and いくら for chapter 13. The same characters are also read なにびと *anyone* and なにじん *what nationality*, three common readings of one string. Arabic's كَمْ takes a **singular accusative** after it, شَخْصًا, exactly as its own 11–99 do." },

    /* ---------- かぞえる · counting itself ---------- */
    { c: "kazoeru", k: "つ", r: "tsu", e: "~ things — the general counter", a: "أَشْيَاء", at: "ashyāʾ",
      n: "The counter inside ひとつ…ここのつ, and the one to reach for when you do not know the right one. **In by syllabus, not by frequency**: the bare kana つ is not a common entry at all — it is a conjunction first and 津 the city second. It only exists attached to a number." },
    { c: "kazoeru", k: "いくつ", r: "ikutsu", e: "how many", a: "كَمْ عَدَدًا", at: "kam ʿadadan",
      n: "いく (幾, “how many”) + つ, the all-purpose counter. It also asks someone's age." },
    { c: "kazoeru", k: "かず", r: "kazu", e: "number, count", a: "عَدَدٌ", at: "ʿadad",
      n: "数 — how many of something there are. It has been a card since chapter 5, where it was just a two-kana word; here it is the chapter's own subject. Not chapter 14's ばんごう 番号, which is a number used as a **label**: a phone number, a room number. Japanese keeps the two apart and English does not." },
  ],
};
