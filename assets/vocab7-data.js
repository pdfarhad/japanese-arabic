/* vocab7-data.js — 45 words the small ゃ ゅ ょ unlock, in six meaning groups.
 *
 * The single source of truth for lesson 7, exactly as `vocab-data.js` is for
 * lesson 4, `vocab5-data.js` for lesson 5 and `vocab6-data.js` for lesson 6:
 * `vocab-list.js` renders the cards from it, `vocab-drill.js` builds its
 * questions from it, and reference/yoon-chart.html prints it. Edit here, nowhere
 * else. Do not merge the four sets — each lesson's premise is different, and one
 * shared array would break all four the first time a word was added.
 *
 * Word rule for chapter 7: **at least one yōon, and every character already
 * taught.** That means the 46 gojūon, the 25 marked kana of lesson 5, and the
 * three small kana of today — and it bars the small っ, which the notes have
 * still not reached. The bar is what makes the ぴ row wordless below; see the
 * gap note at the end.
 *
 * The two-kana ceiling of chapters 4 and 5 is gone, and it had to be. A yōon is
 * two characters and one mora, so a two-character word would be a single mora —
 * there is essentially no such thing. This is the first chapter of ordinary
 * multi-syllable vocabulary, which is exactly what the small kana buy you.
 *
 * Same JMdict commonness bar as chapters 4 and 5, checked through
 * <https://jisho.org/api/v1/search/words> on 2026-08-02. It earned its keep:
 *
 *   こんにゃく is NOT tagged common, so the obvious にゃ word is out. The only
 *   common entry reachable in taught kana is にゃあ, the cat. Kept, and the
 *   lesson says out loud that the row really is that thin.
 *   はっぴゃく, ろっぴゃく and ごひゃく are all not-common as well as needing っ.
 *   はっぴょう IS common and still needs っ — which is the whole ぴ-row story.
 *
 * Six yōon get no word here because no qualifying word exists: ひゅ, みゅ, びゅ,
 * ぴゃ, ぴゅ, ぴょ. They are shown in the grid (yoon-data.js) with the katakana
 * or っ-word that would have served, rather than quietly dropped.
 *
 * Arabic is Modern Standard with full harakat, and every gloss is a distinct
 * string: the drill's かな → العربية direction grades by comparing the Arabic
 * text, so two cards sharing a phrase would score a correct answer as wrong.
 * That constraint bit twice here — びょういん and にゅういん both want a hospital,
 * and りょこう and りゅうがく both want travel — and both times the distinct gloss
 * is also the truer one.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB7 = {
  cats: [
    { id: "gakko",  jp: "きょうしつ", r: "kyōshitsu", en: "School and study" },
    { id: "kazu",   jp: "かず",       r: "kazu",      en: "Numbers and time" },
    { id: "hito",   jp: "ひと",       r: "hito",      en: "People" },
    { id: "machi",  jp: "まち",       r: "machi",     en: "Out in town" },
    { id: "tabemono", jp: "たべもの", r: "tabemono",  en: "Food and the body" },
    { id: "mainichi", jp: "まいにち", r: "mainichi",  en: "Everyday words" },
  ],

  words: [
    /* ---------- きょうしつ · school and study ---------- */
    { c: "gakko", k: "きょうしつ", r: "kyōshitsu", e: "classroom", a: "فَصْلٌ دِرَاسِيٌّ", at: "faṣl dirāsī",
      n: "きょう + しつ. The きょう here is not today's きょう — same sound, different word." },
    { c: "gakko", k: "じゅぎょう", r: "jugyō", e: "a class, a lesson", a: "حِصَّةٌ دِرَاسِيَّةٌ", at: "ḥiṣṣa dirāsiyya",
      n: "Two yōon in four characters, four moras in total: ju-gyo-o. Count them on your fingers once." },
    { c: "gakko", k: "しゅくだい", r: "shukudai", e: "homework", a: "وَاجِبٌ مَنْزِلِيٌّ", at: "wājib manzilī" },
    { c: "gakko", k: "としょかん", r: "toshokan", e: "library", a: "مَكْتَبَةٌ", at: "maktaba" },
    { c: "gakko", k: "りゅうがく", r: "ryūgaku", e: "studying abroad", a: "اَلدِّرَاسَةُ فِي الْخَارِجِ", at: "ad-dirāsa fi l-khārij" },
    { c: "gakko", k: "しょうがくせい", r: "shōgakusei", e: "primary-school pupil", a: "تِلْمِيذٌ اِبْتِدَائِيٌّ", at: "tilmīdh ibtidāʾī" },
    { c: "gakko", k: "ひょう", r: "hyō", e: "a table, a chart", a: "جَدْوَلٌ", at: "jadwal",
      n: "Two characters, two moras — hyo-o. The ひょ is one beat and the う is the second." },

    /* ---------- かず · numbers and time ---------- */
    { c: "kazu", k: "きょう", r: "kyō", e: "today", a: "اَلْيَوْمَ", at: "al-yawma",
      n: "The most-used yōon word in the language, and it is two moras: kyo-o. きよう would be three." },
    { c: "kazu", k: "きょねん", r: "kyonen", e: "last year", a: "اَلْعَامَ الْمَاضِيَ", at: "al-ʿāma l-māḍiya",
      n: "Three moras. No long vowel here — きょ ね ん, and every one of the three is a full beat." },
    { c: "kazu", k: "きゅう", r: "kyū", e: "nine", a: "تِسْعَةٌ", at: "tisʿa" },
    { c: "kazu", k: "じゅう", r: "jū", e: "ten", a: "عَشَرَةٌ", at: "ʿashara",
      n: "Against じゆう, jiyū, “freedom” — three moras and a different word entirely. The size of one character is the whole difference." },
    { c: "kazu", k: "ひゃく", r: "hyaku", e: "a hundred", a: "مِائَةٌ", at: "miʾa",
      n: "Against ひやく, hiyaku, “a leap”. Both are common words." },
    { c: "kazu", k: "さんびゃく", r: "sanbyaku", e: "three hundred", a: "ثَلَاثُمِائَةٍ", at: "thalāthumiʾa",
      n: "ひゃく voices to びゃく after ん — lesson 5's rule, still running." },
    { c: "kazu", k: "ちょうど", r: "chōdo", e: "exactly, just", a: "بِالضَّبْطِ", at: "bi-ḍ-ḍabṭ" },

    /* ---------- ひと · people ---------- */
    { c: "hito", k: "かのじょ", r: "kanojo", e: "she, her; girlfriend", a: "هِيَ", at: "hiya" },
    { c: "hito", k: "じょせい", r: "josei", e: "woman", a: "اِمْرَأَةٌ", at: "imraʾa" },
    { c: "hito", k: "りょうしん", r: "ryōshin", e: "parents, both parents", a: "اَلْوَالِدَانِ", at: "al-wālidān" },
    { c: "hito", k: "きょうだい", r: "kyōdai", e: "brothers and sisters", a: "إِخْوَةٌ", at: "ikhwa" },
    { c: "hito", k: "みょうじ", r: "myōji", e: "surname, family name", a: "اِسْمُ الْعَائِلَةِ", at: "ismu l-ʿāʾila" },
    { c: "hito", k: "しょうねん", r: "shōnen", e: "a boy", a: "صَبِيٌّ", at: "ṣabī" },
    { c: "hito", k: "にょうぼう", r: "nyōbō", e: "wife — one's own, informally", a: "زَوْجَةٌ", at: "zawja",
      n: "Nearly the only common にょ word written in taught kana. Said of your own wife, and a shade old-fashioned." },
    { c: "hito", k: "きゃく", r: "kyaku", e: "guest, customer", a: "ضَيْفٌ", at: "ḍayf",
      n: "Against きやく, kiyaku, “rules, terms”. Another pair where only the size decides." },

    /* ---------- まち · out in town ---------- */
    { c: "machi", k: "びょういん", r: "byōin", e: "hospital", a: "مُسْتَشْفًى", at: "mustashfan",
      n: "The famous one: びよういん, biyōin, is a beauty salon. Four moras against five, and one small character between them." },
    { c: "machi", k: "でんしゃ", r: "densha", e: "train", a: "قِطَارٌ", at: "qiṭār" },
    { c: "machi", k: "かいしゃ", r: "kaisha", e: "company, firm", a: "شَرِكَةٌ", at: "sharika" },
    { c: "machi", k: "りょこう", r: "ryokō", e: "a trip, travel", a: "سَفَرٌ", at: "safar" },
    { c: "machi", k: "きんじょ", r: "kinjo", e: "the neighbourhood", a: "حَيٌّ مُجَاوِرٌ", at: "ḥayy mujāwir" },
    { c: "machi", k: "にゅういん", r: "nyūin", e: "going into hospital", a: "دُخُولُ الْمُسْتَشْفَى", at: "dukhūlu l-mustashfā" },

    /* ---------- たべもの · food and the body ---------- */
    { c: "tabemono", k: "ぎゅうにゅう", r: "gyūnyū", e: "milk", a: "حَلِيبٌ", at: "ḥalīb",
      n: "Two yōon and two long vowels in five characters — gyu-u-nyu-u, four moras. The hardest word on the page to say cleanly." },
    { c: "tabemono", k: "おちゃ", r: "ocha", e: "tea", a: "شَايٌ", at: "shāy",
      n: "Three characters, two moras: o-cha. The お is politeness, not part of the word." },
    { c: "tabemono", k: "しょうゆ", r: "shōyu", e: "soy sauce", a: "صَلْصَةُ الصُّويَا", at: "ṣalṣatu ṣ-ṣūyā",
      n: "A small ょ and a full-size ゆ in the same word, three characters apart. Look at the size, not the shape." },
    { c: "tabemono", k: "りょうり", r: "ryōri", e: "cooking, cuisine", a: "طَبْخٌ", at: "ṭabkh" },
    { c: "tabemono", k: "きゅうり", r: "kyūri", e: "cucumber", a: "خِيَارٌ", at: "khiyār" },
    { c: "tabemono", k: "びょうき", r: "byōki", e: "illness", a: "مَرَضٌ", at: "maraḍ" },
    { c: "tabemono", k: "みゃく", r: "myaku", e: "pulse", a: "نَبْضٌ", at: "nabḍ",
      n: "One of only two common みゃ words. The row is nearly as thin as に." },
    { c: "tabemono", k: "きんぎょ", r: "kingyo", e: "goldfish", a: "سَمَكَةٌ ذَهَبِيَّةٌ", at: "samaka dhahabiyya" },

    /* ---------- まいにち · everyday words ---------- */
    { c: "mainichi", k: "しゃしん", r: "shashin", e: "photograph", a: "صُورَةٌ", at: "ṣūra" },
    { c: "mainichi", k: "しゅみ", r: "shumi", e: "hobby, pastime", a: "هِوَايَةٌ", at: "hiwāya",
      n: "Three characters, two moras. The shortest yōon word you will use every week." },
    { c: "mainichi", k: "ちゅうい", r: "chūi", e: "caution, attention", a: "اِنْتِبَاهٌ", at: "intibāh" },
    { c: "mainichi", k: "じゃま", r: "jama", e: "in the way, a nuisance", a: "إِزْعَاجٌ", at: "izʿāj" },
    { c: "mainichi", k: "ぎゃく", r: "gyaku", e: "the reverse, the opposite", a: "عَكْسٌ", at: "ʿaks" },
    { c: "mainichi", k: "りゃく", r: "ryaku", e: "an abbreviation", a: "اِخْتِصَارٌ", at: "ikhtiṣār" },
    { c: "mainichi", k: "じょうず", r: "jōzu", e: "good at, skilled", a: "مَاهِرٌ", at: "māhir" },
    { c: "mainichi", k: "ちゃいろ", r: "chairo", e: "brown", a: "بُنِّيٌّ", at: "bunnī" },
    { c: "mainichi", k: "にゃあ", r: "nyā", e: "meow", a: "مُوَاءٌ", at: "muwāʾ",
      n: "Not a joke entry: JMdict tags it common, and こんにゃく — the obvious alternative — it does not." },
  ],
};
