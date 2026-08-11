/* vocab5-data.js — the words the marks unlock, in ten meaning groups plus one
 * deliberate exception.
 *
 * The single source of truth for lesson 5, exactly as `vocab-data.js` is for
 * lesson 4: `vocab-list.js` renders the cards from it, `vocab-drill.js` builds
 * its questions from it, and reference/marked-kana.html prints it. Edit here,
 * nowhere else. The two files are separate globals on purpose — lesson 4's whole
 * premise is that no word on it carries a mark, so the sets must never merge.
 *
 * The rules that decide what may go in:
 *
 *   1. Exactly two kana — with one named, visible exception, see `maru` below.
 *   2. At least one of them marked. A word made only of unmarked kana belongs to
 *      lesson 4, not here; nothing on this page is a repeat.
 *   3. The partner kana may be any of the 46 taught in lessons 1 and 2.
 *
 * Every reading and gloss was checked against the JMdict entry served by
 * <https://jisho.org/api/v1/search/words>, and every word has at least one entry
 * JMdict tags `is_common` whose reading matches the kana exactly. That check
 * earned its keep again here: かぐ is 家具 (furniture) long before it is 嗅ぐ (to
 * smell), so it is filed under Things, not Actions. Words that failed the bar
 * were dropped rather than downgraded — ざる (colander), かば (hippo), ぐみ,
 * やぎ (goat) and はなぢ (nosebleed) are all real words that JMdict does not tag
 * common, so none of them are here.
 *
 * Two kana get no word card at all, and their absence is the lesson:
 *   ぢ — no common word contains it. Not one.
 *   づ — none at two kana. つづく and こづつみ are as short as it gets.
 *
 * Arabic is Modern Standard with full harakat. Verbs are given in the 3rd person
 * masculine singular imperfect (يَقْرَأُ), matching lessons 1–4.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB5 = {
  cats: [
    { id: "karada",   jp: "からだ",         r: "karada",     en: "The body" },
    { id: "shizen",   jp: "しぜん",         r: "shizen",     en: "Nature" },
    { id: "toki",     jp: "そら と とき",   r: "sora to toki", en: "Sky and time" },
    { id: "tabemono", jp: "たべもの",       r: "tabemono",   en: "Food" },
    { id: "doubutsu", jp: "どうぶつ",       r: "dōbutsu",    en: "Animals" },
    { id: "mono",     jp: "もの",           r: "mono",       en: "Things" },
    { id: "machi",    jp: "いえ と まち",   r: "ie to machi", en: "Home and town" },
    { id: "hito",     jp: "ひと",           r: "hito",       en: "People" },
    { id: "ugoki",    jp: "うごき",         r: "ugoki",      en: "Actions" },
    { id: "kotoba",   jp: "ことば",         r: "kotoba",     en: "Words and ideas" },
    { id: "maru",     jp: "まる",           r: "maru",       en: "The maru words — three kana and more" },
  ],

  words: [
    /* ---------- からだ · the body ---------- */
    { c: "karada", k: "ゆび", r: "yubi",  e: "finger",        a: "إِصْبَعٌ",  at: "iṣbaʿ" },
    { c: "karada", k: "くび", r: "kubi",  e: "neck",          a: "رَقَبَةٌ",  at: "raqaba" },
    { c: "karada", k: "ひざ", r: "hiza",  e: "knee",          a: "رُكْبَةٌ",  at: "rukba" },
    { c: "karada", k: "ひじ", r: "hiji",  e: "elbow",         a: "مِرْفَقٌ",  at: "mirfaq" },
    { c: "karada", k: "あご", r: "ago",   e: "jaw, chin",     a: "ذَقْنٌ",    at: "dhaqn" },
    { c: "karada", k: "はだ", r: "hada",  e: "skin",          a: "بَشَرَةٌ",  at: "bashara" },
    { c: "karada", k: "うで", r: "ude",   e: "arm",           a: "ذِرَاعٌ",   at: "dhirāʿ" },
    { c: "karada", k: "ひげ", r: "hige",  e: "beard, moustache", a: "لِحْيَةٌ", at: "liḥya" },
    { c: "karada", k: "のど", r: "nodo",  e: "throat",        a: "حَلْقٌ",    at: "ḥalq" },
    { c: "karada", k: "きず", r: "kizu",  e: "wound, injury", a: "جُرْحٌ",    at: "jurḥ" },
    { c: "karada", k: "あざ", r: "aza",   e: "bruise, birthmark", a: "كَدْمَةٌ", at: "kadma" },

    /* ---------- しぜん · nature ---------- */
    { c: "shizen", k: "みず", r: "mizu",  e: "water",   a: "مَاءٌ",           at: "māʾ",
      n: "The word lesson 4 could not teach, for want of two small strokes." },
    { c: "shizen", k: "かぜ", r: "kaze",  e: "wind",    a: "رِيحٌ",           at: "rīḥ",
      n: "Also a head cold — 風 and 風邪, both common, both かぜ." },
    { c: "shizen", k: "がけ", r: "gake",  e: "cliff",   a: "جُرْفٌ",          at: "jurf" },
    { c: "shizen", k: "どろ", r: "doro",  e: "mud",     a: "طِينٌ",           at: "ṭīn" },
    { c: "shizen", k: "にじ", r: "niji",  e: "rainbow", a: "قَوْسُ قُزَحَ",   at: "qaws quzaḥ" },
    { c: "shizen", k: "えだ", r: "eda",   e: "branch",  a: "غُصْنٌ",          at: "ghuṣn" },

    /* ---------- そら と とき · sky and time ---------- */
    { c: "toki", k: "ごご", r: "gogo",  e: "afternoon", a: "بَعْدَ الظُّهْرِ", at: "baʿda ẓ-ẓuhr" },
    { c: "toki", k: "ばん", r: "ban",   e: "evening",   a: "مَسَاءٌ",          at: "masāʾ",
      n: "The ばん of こんばんは, the greeting lesson 1 taught." },
    { c: "toki", k: "かげ", r: "kage",  e: "shadow",    a: "ظِلٌّ",            at: "ẓill" },
    { c: "toki", k: "つぎ", r: "tsugi", e: "next",      a: "اَلتَّالِي",       at: "at-tālī" },
    { c: "toki", k: "たび", r: "tabi",  e: "journey",   a: "رِحْلَةٌ",         at: "riḥla",
      n: "Also the counter for occasions — three たび means three times." },

    /* ---------- たべもの · food ---------- */
    { c: "tabemono", k: "そば", r: "soba", e: "buckwheat noodles", a: "مَعْكَرُونَةٌ يَابَانِيَّةٌ", at: "maʿkarūna yābāniyya",
      n: "Also means beside, next to." },
    { c: "tabemono", k: "ごま", r: "goma", e: "sesame",     a: "سِمْسِمٌ", at: "simsim" },
    { c: "tabemono", k: "あじ", r: "aji",  e: "flavour, taste", a: "طَعْمٌ", at: "ṭaʿm",
      n: "Also a horse mackerel, which is a different word entirely." },
    { c: "tabemono", k: "だし", r: "dashi", e: "soup stock", a: "مَرَقٌ", at: "maraq" },

    /* ---------- どうぶつ · animals ---------- */
    { c: "doubutsu", k: "えび", r: "ebi",  e: "prawn, shrimp", a: "رُوبْيَانٌ",   at: "rūbyān" },
    { c: "doubutsu", k: "へび", r: "hebi", e: "snake",         a: "ثُعْبَانٌ",    at: "thuʿbān" },
    { c: "doubutsu", k: "ぞう", r: "zō",   e: "elephant",      a: "فِيلٌ",        at: "fīl" },
    { c: "doubutsu", k: "ぶた", r: "buta", e: "pig",           a: "خِنْزِيرٌ",    at: "khinzīr" },
    { c: "doubutsu", k: "さば", r: "saba", e: "mackerel",      a: "إِسْقُمْرِيٌّ", at: "isqumrī" },

    /* ---------- もの · things ---------- */
    { c: "mono", k: "かぎ", r: "kagi",  e: "key",         a: "مِفْتَاحٌ",  at: "miftāḥ" },
    { c: "mono", k: "ちず", r: "chizu", e: "map",         a: "خَرِيطَةٌ",  at: "kharīṭa" },
    { c: "mono", k: "ふで", r: "fude",  e: "writing brush", a: "فُرْشَاةٌ", at: "furshāh" },
    { c: "mono", k: "びん", r: "bin",   e: "bottle",      a: "زُجَاجَةٌ",  at: "zujāja" },
    { c: "mono", k: "くぎ", r: "kugi",  e: "nail",        a: "مِسْمَارٌ",  at: "mismār" },
    { c: "mono", k: "なべ", r: "nabe",  e: "pot, pan",    a: "قِدْرٌ",     at: "qidr" },
    { c: "mono", k: "ごみ", r: "gomi",  e: "rubbish",     a: "قُمَامَةٌ",  at: "qumāma" },
    { c: "mono", k: "おび", r: "obi",   e: "kimono sash", a: "حِزَامٌ",    at: "ḥizām" },
    { c: "mono", k: "かご", r: "kago",  e: "basket",      a: "سَلَّةٌ",    at: "salla" },
    { c: "mono", k: "げた", r: "geta",  e: "wooden sandals", a: "قَبْقَابٌ خَشَبِيٌّ", at: "qabqāb khashabī" },
    { c: "mono", k: "つぼ", r: "tsubo", e: "jar, pot",    a: "جَرَّةٌ",    at: "jarra" },
    { c: "mono", k: "ぼう", r: "bō",    e: "pole, rod",   a: "عَصًا",      at: "ʿaṣan" },
    { c: "mono", k: "ばら", r: "bara",  e: "rose",        a: "وَرْدَةٌ",   at: "warda" },
    { c: "mono", k: "かぐ", r: "kagu",  e: "furniture",   a: "أَثَاثٌ",    at: "athāth",
      n: "Also a verb, to smell — but the furniture is the commoner word." },

    /* ---------- いえ と まち · home and town ---------- */
    { c: "machi", k: "まど", r: "mado", e: "window",       a: "نَافِذَةٌ", at: "nāfidha" },
    { c: "machi", k: "かべ", r: "kabe", e: "wall",         a: "جِدَارٌ",   at: "jidār" },
    { c: "machi", k: "みぎ", r: "migi", e: "right, right-hand side", a: "يَمِينٌ", at: "yamīn" },
    { c: "machi", k: "どこ", r: "doko", e: "where",        a: "أَيْنَ",    at: "ayna" },
    { c: "machi", k: "かど", r: "kado", e: "corner",       a: "زَاوِيَةٌ", at: "zāwiya" },

    /* ---------- ひと · people ---------- */
    { c: "hito", k: "だれ", r: "dare", e: "who",           a: "مَنْ",     at: "man" },
    { c: "hito", k: "ぼく", r: "boku", e: "I, me",         a: "أَنَا",    at: "anā",
      n: "Said by men and boys. わたし, from lesson 1, is said by anyone." },
    { c: "hito", k: "まご", r: "mago", e: "grandchild",    a: "حَفِيدٌ",  at: "ḥafīd" },
    { c: "hito", k: "そぼ", r: "sobo", e: "my grandmother", a: "جَدَّةٌ", at: "jadda" },
    { c: "hito", k: "おば", r: "oba",  e: "aunt",          a: "عَمَّةٌ",  at: "ʿamma",
      n: "One おば for both: Arabic splits the paternal عَمَّة from the maternal خَالَة, Japanese does not." },

    /* ---------- うごき · actions ---------- */
    { c: "ugoki", k: "でる", r: "deru", e: "to go out, to leave", a: "يَخْرُجُ", at: "yakhruju" },
    { c: "ugoki", k: "ぬぐ", r: "nugu", e: "to take off (clothes)", a: "يَخْلَعُ", at: "yakhlaʿu" },
    { c: "ugoki", k: "とぶ", r: "tobu", e: "to fly, to jump", a: "يَطِيرُ", at: "yaṭīru" },
    { c: "ugoki", k: "よぶ", r: "yobu", e: "to call",       a: "يُنَادِي", at: "yunādī" },
    { c: "ugoki", k: "こぐ", r: "kogu", e: "to row, to pedal", a: "يَجْدِفُ", at: "yajdifu" },

    /* ---------- ことば · words and ideas ---------- */
    { c: "kotoba", k: "ぎん", r: "gin",   e: "silver",     a: "فِضَّةٌ",       at: "fiḍḍa" },
    { c: "kotoba", k: "かず", r: "kazu",  e: "number, count", a: "عَدَدٌ",     at: "ʿadad" },
    { c: "kotoba", k: "もじ", r: "moji",  e: "a written character", a: "حَرْفٌ", at: "ḥarf",
      n: "What every one of the 71 on this course is: a もじ." },
    { c: "kotoba", k: "なぞ", r: "nazo",  e: "riddle, mystery", a: "لُغْزٌ",   at: "lughz" },
    { c: "kotoba", k: "べつ", r: "betsu", e: "separate, another", a: "آخَرُ",  at: "ākhar" },
    { c: "kotoba", k: "じこ", r: "jiko",  e: "accident",   a: "حَادِثٌ",       at: "ḥādith" },
    { c: "kotoba", k: "どく", r: "doku",  e: "poison",     a: "سُمٌّ",         at: "summ" },
    { c: "kotoba", k: "ぜひ", r: "zehi",  e: "by all means", a: "بِالتَّأْكِيدِ", at: "bit-taʾkīd" },

    /* ---------- まる · the exception ----------
     *
     * These break the two-kana rule, and they are the only words on the page
     * that do. They have to: no common Japanese word puts a maru kana anywhere
     * but after ん or っ, so at two kana the ぱ row simply has no vocabulary.
     * Rather than leave five characters abstract, the rule bends once, in the
     * open, for exactly five words.
     */
    { c: "maru", k: "さんぽ", r: "sanpo", e: "a walk, a stroll", a: "نُزْهَةٌ", at: "nuzha",
      n: "ぽ after ん. さん + ぽ — three beats." },
    { c: "maru", k: "きっぷ", r: "kippu", e: "ticket", a: "تَذْكِرَةٌ", at: "tadhkira",
      n: "ぷ after a small っ, which is a held beat of silence — き · (pause) · ぷ." },
    { c: "maru", k: "えんぴつ", r: "enpitsu", e: "pencil", a: "قَلَمُ رَصَاصٍ", at: "qalam raṣāṣ",
      n: "ぴ after ん. Four beats: え · ん · ぴ · つ." },
    { c: "maru", k: "しんぱい", r: "shinpai", e: "worry, anxiety", a: "قَلَقٌ", at: "qalaq",
      n: "ぱ after ん. Four beats." },
    { c: "maru", k: "ぺらぺら", r: "perapera", e: "fluently", a: "بِطَلَاقَةٍ", at: "bi-ṭalāqa",
      n: "The only ぺ word worth teaching. ぺ is the rarest sound in Japanese and lives mostly in doubled words like this one." },
  ],
};
