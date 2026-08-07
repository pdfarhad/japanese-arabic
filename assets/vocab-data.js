/* vocab-data.js — the two-kana word list, in nine meaning groups.
 *
 * The single source of truth for lesson 4: `vocab-list.js` renders the cards
 * from it, `vocab-drill.js` builds its questions from it, and
 * reference/two-kana-words.html prints it. Edit here, nowhere else.
 *
 * Two hard rules decide what may go in, both from the lesson's premise:
 *
 *   1. Exactly two kana. No more, no fewer.
 *   2. Both kana from the 46 taught in lessons 1 and 2 — so no dakuten (が, ず),
 *      no handakuten (ぱ), and no small kana (っ, ょ). That rules out perfectly
 *      ordinary words: みず, まど, そば, かぎ, ゆび. They arrive with the marks.
 *
 * Every reading and gloss was checked against the JMdict entry served by
 * <https://jisho.org/api/v1/search/words>, and every word here has at least one
 * entry JMdict tags `is_common`. Where a reading has several common entries the
 * gloss says which one is meant, and `n` carries the collision.
 *
 * Arabic is Modern Standard with full harakat. Verbs are given in the 3rd person
 * masculine singular imperfect (يَقْرَأُ), matching lessons 1–3.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB = {
  cats: [
    { id: "karada",   jp: "からだ",       r: "karada",      en: "The body" },
    { id: "shizen",   jp: "しぜん",       r: "shizen",      en: "Nature" },
    { id: "toki",     jp: "そら と とき", r: "sora to toki", en: "Sky, weather and time" },
    { id: "tabemono", jp: "たべもの",     r: "tabemono",    en: "Food" },
    { id: "doubutsu", jp: "どうぶつ",     r: "dōbutsu",     en: "Animals" },
    { id: "mono",     jp: "もの",         r: "mono",        en: "Things" },
    { id: "machi",    jp: "いえ と まち", r: "ie to machi", en: "Home and town" },
    { id: "hito",     jp: "ひと",         r: "hito",        en: "People" },
    { id: "ugoki",    jp: "うごき",       r: "ugoki",       en: "Actions" },
  ],

  words: [
    /* ---------- からだ · the body ---------- */
    { c: "karada", k: "かお", r: "kao",   e: "face",     a: "وَجْهٌ",   at: "wajh" },
    { c: "karada", k: "みみ", r: "mimi",  e: "ear",      a: "أُذُنٌ",   at: "udhun" },
    { c: "karada", k: "くち", r: "kuchi", e: "mouth",    a: "فَمٌ",     at: "fam" },
    { c: "karada", k: "はな", r: "hana",  e: "nose",     a: "أَنْفٌ",   at: "anf",
      n: "Also the word for flower — lesson 1 taught that sense." },
    { c: "karada", k: "した", r: "shita", e: "tongue",   a: "لِسَانٌ",  at: "lisān",
      n: "Also means below, under." },
    { c: "karada", k: "あし", r: "ashi",  e: "leg, foot", a: "رِجْلٌ",  at: "rijl",
      n: "One word covers the whole limb, foot included." },
    { c: "karada", k: "かた", r: "kata",  e: "shoulder", a: "كَتِفٌ",   at: "katif" },
    { c: "karada", k: "むね", r: "mune",  e: "chest",    a: "صَدْرٌ",   at: "ṣadr" },

    /* ---------- しぜん · nature ---------- */
    { c: "shizen", k: "やま", r: "yama",  e: "mountain", a: "جَبَلٌ",    at: "jabal" },
    { c: "shizen", k: "うみ", r: "umi",   e: "sea",      a: "بَحْرٌ",    at: "baḥr" },
    { c: "shizen", k: "かわ", r: "kawa",  e: "river",    a: "نَهْرٌ",    at: "nahr" },
    { c: "shizen", k: "そら", r: "sora",  e: "sky",      a: "سَمَاءٌ",   at: "samāʾ" },
    { c: "shizen", k: "もり", r: "mori",  e: "forest",   a: "غَابَةٌ",   at: "ghāba" },
    { c: "shizen", k: "いし", r: "ishi",  e: "stone",    a: "حَجَرٌ",    at: "ḥajar" },
    { c: "shizen", k: "すな", r: "suna",  e: "sand",     a: "رَمْلٌ",    at: "raml" },
    { c: "shizen", k: "しま", r: "shima", e: "island",   a: "جَزِيرَةٌ", at: "jazīra" },

    /* ---------- そら と とき · sky, weather and time ---------- */
    { c: "toki", k: "あめ", r: "ame",   e: "rain",   a: "مَطَرٌ",    at: "maṭar",
      n: "Same sound as あめ, sweets — the pitch differs, not the spelling." },
    { c: "toki", k: "ゆき", r: "yuki",  e: "snow",   a: "ثَلْجٌ",    at: "thalj" },
    { c: "toki", k: "くも", r: "kumo",  e: "cloud",  a: "سَحَابَةٌ", at: "saḥāba",
      n: "Also the word for spider." },
    { c: "toki", k: "つき", r: "tsuki", e: "moon",   a: "قَمَرٌ",    at: "qamar",
      n: "The same word means month." },
    { c: "toki", k: "ほし", r: "hoshi", e: "star",   a: "نَجْمٌ",    at: "najm" },
    { c: "toki", k: "あさ", r: "asa",   e: "morning", a: "صَبَاحٌ",  at: "ṣabāḥ" },
    { c: "toki", k: "ひる", r: "hiru",  e: "midday", a: "ظُهْرٌ",    at: "ẓuhr" },
    { c: "toki", k: "よる", r: "yoru",  e: "night",  a: "لَيْلٌ",    at: "layl" },
    { c: "toki", k: "はる", r: "haru",  e: "spring", a: "رَبِيعٌ",   at: "rabīʿ" },
    { c: "toki", k: "なつ", r: "natsu", e: "summer", a: "صَيْفٌ",    at: "ṣayf" },
    { c: "toki", k: "あき", r: "aki",   e: "autumn", a: "خَرِيفٌ",   at: "kharīf" },
    { c: "toki", k: "ふゆ", r: "fuyu",  e: "winter", a: "شِتَاءٌ",   at: "shitāʾ" },

    /* ---------- たべもの · food ---------- */
    { c: "tabemono", k: "こめ", r: "kome",  e: "rice (uncooked)", a: "أَرُزٌّ",     at: "aruzz" },
    { c: "tabemono", k: "めし", r: "meshi", e: "meal, cooked rice", a: "طَعَامٌ",  at: "ṭaʿām" },
    { c: "tabemono", k: "にく", r: "niku",  e: "meat",            a: "لَحْمٌ",      at: "laḥm" },
    { c: "tabemono", k: "しお", r: "shio",  e: "salt",            a: "مِلْحٌ",      at: "milḥ" },
    { c: "tabemono", k: "すし", r: "sushi", e: "sushi",           a: "سُوشِي",      at: "sūshī" },
    { c: "tabemono", k: "みそ", r: "miso",  e: "miso, soybean paste", a: "مِيسُو",  at: "mīsū" },
    { c: "tabemono", k: "まめ", r: "mame",  e: "bean",            a: "فَاصُولْيَا", at: "fāṣūlyā" },
    { c: "tabemono", k: "いも", r: "imo",   e: "potato",          a: "بَطَاطَا",    at: "baṭāṭā" },

    /* ---------- どうぶつ · animals ---------- */
    { c: "doubutsu", k: "いぬ", r: "inu",   e: "dog",    a: "كَلْبٌ",    at: "kalb" },
    { c: "doubutsu", k: "ねこ", r: "neko",  e: "cat",    a: "قِطٌّ",     at: "qiṭṭ" },
    { c: "doubutsu", k: "うし", r: "ushi",  e: "cow",    a: "بَقَرَةٌ",  at: "baqara" },
    { c: "doubutsu", k: "うま", r: "uma",   e: "horse",  a: "حِصَانٌ",   at: "ḥiṣān" },
    { c: "doubutsu", k: "とり", r: "tori",  e: "bird",   a: "طَائِرٌ",   at: "ṭāʾir",
      n: "In a kitchen the same word means chicken." },
    { c: "doubutsu", k: "さる", r: "saru",  e: "monkey", a: "قِرْدٌ",    at: "qird" },
    { c: "doubutsu", k: "しか", r: "shika", e: "deer",   a: "أَيِّلٌ",   at: "ayyil" },
    { c: "doubutsu", k: "くま", r: "kuma",  e: "bear",   a: "دُبٌّ",     at: "dubb" },
    { c: "doubutsu", k: "かに", r: "kani",  e: "crab",   a: "سَرَطَانٌ", at: "saraṭān" },
    { c: "doubutsu", k: "むし", r: "mushi", e: "insect", a: "حَشَرَةٌ",  at: "ḥashara" },

    /* ---------- もの · things ---------- */
    { c: "mono", k: "ほん", r: "hon",   e: "book",       a: "كِتَابٌ",           at: "kitāb" },
    { c: "mono", k: "かさ", r: "kasa",  e: "umbrella",   a: "مِظَلَّةٌ",         at: "miẓalla" },
    { c: "mono", k: "くつ", r: "kutsu", e: "shoes",      a: "حِذَاءٌ",           at: "ḥidhāʾ" },
    { c: "mono", k: "ふく", r: "fuku",  e: "clothes",    a: "مَلَابِسُ",         at: "malābis" },
    { c: "mono", k: "はこ", r: "hako",  e: "box",        a: "صُنْدُوقٌ",         at: "ṣundūq" },
    { c: "mono", k: "いす", r: "isu",   e: "chair",      a: "كُرْسِيٌّ",         at: "kursī" },
    { c: "mono", k: "さら", r: "sara",  e: "plate",      a: "طَبَقٌ",            at: "ṭabaq" },
    { c: "mono", k: "はし", r: "hashi", e: "chopsticks", a: "عِيدَانُ الطَّعَامِ", at: "ʿīdān aṭ-ṭaʿām",
      n: "Same spelling as はし, bridge." },
    { c: "mono", k: "いと", r: "ito",   e: "thread",     a: "خَيْطٌ",            at: "khayṭ" },
    { c: "mono", k: "かみ", r: "kami",  e: "paper",      a: "وَرَقٌ",            at: "waraq",
      n: "Also hair, and also god. Three words, one spelling." },

    /* ---------- いえ と まち · home and town ---------- */
    { c: "machi", k: "いえ", r: "ie",    e: "house",   a: "بَيْتٌ",     at: "bayt" },
    { c: "machi", k: "へや", r: "heya",  e: "room",    a: "غُرْفَةٌ",   at: "ghurfa" },
    { c: "machi", k: "にわ", r: "niwa",  e: "garden",  a: "حَدِيقَةٌ",  at: "ḥadīqa" },
    { c: "machi", k: "もん", r: "mon",   e: "gate",    a: "بَوَّابَةٌ", at: "bawwāba" },
    { c: "machi", k: "みち", r: "michi", e: "road",    a: "طَرِيقٌ",    at: "ṭarīq" },
    { c: "machi", k: "まち", r: "machi", e: "town",    a: "مَدِينَةٌ",  at: "madīna" },
    { c: "machi", k: "むら", r: "mura",  e: "village", a: "قَرْيَةٌ",   at: "qarya" },
    { c: "machi", k: "えき", r: "eki",   e: "station", a: "مَحَطَّةٌ",  at: "maḥaṭṭa" },

    /* ---------- ひと · people ---------- */
    { c: "hito", k: "ひと", r: "hito",   e: "person",         a: "شَخْصٌ",         at: "shakhṣ" },
    { c: "hito", k: "ちち", r: "chichi", e: "my father",      a: "أَبٌ",           at: "ab",
      n: "Used of your own father, to someone else." },
    { c: "hito", k: "はは", r: "haha",   e: "my mother",      a: "أُمٌّ",          at: "umm",
      n: "Used of your own mother, to someone else." },
    { c: "hito", k: "あに", r: "ani",    e: "my older brother", a: "أَخٌ أَكْبَرُ", at: "akh akbar" },
    { c: "hito", k: "あね", r: "ane",    e: "my older sister",  a: "أُخْتٌ كُبْرَى", at: "ukht kubrā" },
    { c: "hito", k: "とも", r: "tomo",   e: "friend",         a: "صَدِيقٌ",        at: "ṣadīq" },

    /* ---------- うごき · actions ---------- */
    { c: "ugoki", k: "みる", r: "miru",  e: "to see",   a: "يَرَى",       at: "yarā" },
    { c: "ugoki", k: "きく", r: "kiku",  e: "to listen", a: "يَسْمَعُ",   at: "yasmaʿu",
      n: "The same verb also means to ask." },
    { c: "ugoki", k: "よむ", r: "yomu",  e: "to read",  a: "يَقْرَأُ",    at: "yaqraʾu" },
    { c: "ugoki", k: "かく", r: "kaku",  e: "to write", a: "يَكْتُبُ",    at: "yaktubu" },
    { c: "ugoki", k: "のむ", r: "nomu",  e: "to drink", a: "يَشْرَبُ",    at: "yashrabu" },
    { c: "ugoki", k: "いく", r: "iku",   e: "to go",    a: "يَذْهَبُ",    at: "yadhhabu" },
    { c: "ugoki", k: "くる", r: "kuru",  e: "to come",  a: "يَأْتِي",     at: "yaʾtī" },
    { c: "ugoki", k: "ねる", r: "neru",  e: "to sleep", a: "يَنَامُ",     at: "yanāmu" },
    { c: "ugoki", k: "まつ", r: "matsu", e: "to wait",  a: "يَنْتَظِرُ",  at: "yantaẓiru" },
    { c: "ugoki", k: "かう", r: "kau",   e: "to buy",   a: "يَشْتَرِي",   at: "yashtarī" },
  ],
};
