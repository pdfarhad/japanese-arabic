/* vocab11-data.js — 42 words for introducing yourself, in six groups.
 *
 * The single source of truth for lesson 11, exactly as `vocab-data.js` is for
 * lesson 4 and `vocab10-data.js` for lesson 10: `vocab-list.js` renders the
 * cards, `vocab-drill.js` builds its questions, and `story11-data.js` walks
 * every one of them. Edit here, nowhere else. Do not merge the sets.
 *
 * Word rule for chapter 11: **there isn't one.** Chapters 4, 5 and 7 were
 * defined by a spelling constraint (two kana, one marked kana, one yōon) and
 * chapter 10 by a subject. This chapter is a plain list from the lecture sheet
 * with no generating rule at all, which is exactly why it is the first chapter
 * taught as a story — see learning-records/0011.
 *
 * The 45 rows of the sheet are 48 items; 42 are word cards and the remaining six
 * are the set phrases of a self-introduction (しつれいですが, おなまえは？,
 * はじめまして, どうぞよろしくおねがいします, こちらは〜さんです, 〜からきました),
 * which live in the lesson's phrase list because they are sentences, not words.
 *
 * OVERLAP IS DELIBERATE. だれ and どなた are also in VOCAB6, and わたし, せんせい,
 * だいがく and びょういん have appeared as kana example words. Repeating them here
 * is the same call NOTES.md records for どこ/だれ across VOCAB5 and VOCAB6: this
 * chapter's argument is the polite/plain pair, and a pair cannot be shown with
 * one of its halves missing.
 *
 * Readings and commonness checked against JMdict through
 * <https://jisho.org/api/v1/search/words> on 2026-08-07. Everything below is
 * tagged common except ぎんこういん, which is on the sheet and so in scope by
 * syllabus rather than by frequency — the same call chapter 6 records.
 *
 * The check earned its keep for the fourth chapter running, and both catches are
 * teaching points rather than near-misses:
 *
 *   かんこく as a bare kana lookup returns **勧告, "advice, counsel"** — not
 *   韓国, South Korea. The kanji is what disambiguates, which is the strongest
 *   argument on the page for why the sheet has a kanji column at all.
 *
 *   タイ in katakana returns **鯛, the sea bream**, before Thailand — and "tie"
 *   after it. Three common senses, and the country is not the first. Precisely
 *   the trap recorded for ナス (network-attached storage) in chapter 8 and for
 *   なす in chapter 4.
 *
 * Arabic is Modern Standard with full harakat, and every gloss is a distinct
 * string, because `vocab-drill.js` grades the かな → العربية direction by
 * comparing the Arabic text.
 *
 * The politeness ladder is carried in the Arabic rather than only described:
 * حَضْرَة is the root of the polite half of three separate pairs — どなた
 * (مَنْ حَضْرَتُكَ, already the gloss chosen in VOCAB6), おいくつ and みなさん. So the
 * Japanese pattern and the Arabic pattern are the same pattern, and the word
 * cards show it without the lesson having to assert it.
 *
 * The four suffixes are glossed by DESCRIPTION, not by translation, because they
 * have no translation — Arabic marks all four jobs differently. 〜じん is the one
 * exception and it is a true structural match: Japanese appends じん, Arabic
 * appends the nisba ending ـِيّ, so نِسْبَة is not an approximation but the name of
 * the very same operation.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB11 = {
  cats: [
    { id: "hito",     jp: "ひと",     r: "hito",     en: "People, and who owns what" },
    { id: "yobikata", jp: "よびかた", r: "yobikata", en: "The four endings you put on a name" },
    { id: "shigoto",  jp: "しごと",   r: "shigoto",  en: "Work" },
    { id: "mono",     jp: "もの",     r: "mono",     en: "Places and things" },
    { id: "kiku",     jp: "きく",     r: "kiku",     en: "Asking about a person" },
    { id: "kuni",     jp: "くに",     r: "kuni",     en: "Eleven countries" },
  ],

  words: [
    /* ---------- ひと · people, and who owns what ---------- */
    { c: "hito", k: "わたし", r: "watashi", e: "I, me", a: "أَنَا", at: "anā",
      n: "私. The safe pronoun in any situation. Japanese drops it far more often than English or Arabic drop theirs — if the sentence is obviously about you, leave it out." },
    { c: "hito", k: "わたしたち", r: "watashitachi", e: "we, us", a: "نَحْنُ", at: "naḥnu",
      n: "私たち. たち is the plural ending for people, and it is added rather than built in — one word, one ending, no new vocabulary." },
    { c: "hito", k: "わたしの", r: "watashino", e: "my, mine", a: "مِلْكِي", at: "milkī",
      n: "Not a new word: わたし plus lesson 6's の. Arabic does the same job with an ending on the thing owned (كِتابِي, “my book”) rather than a word before it." },
    { c: "hito", k: "あなた", r: "anata", e: "you", a: "أَنْتَ", at: "anta",
      n: "貴方, but written in kana. Use it far less than English “you” — Japanese prefers the person's name plus さん, and あなた to someone senior can sound blunt." },
    { c: "hito", k: "あなたの", r: "anatano", e: "your, yours", a: "مِلْكُكَ", at: "milkuka",
      n: "あなた plus の, exactly as わたしの is わたし plus の. The particle never changes shape." },
    { c: "hito", k: "あのひと", r: "anohito", e: "that person, he, she", a: "ذٰلِكَ الشَّخْص", at: "dhālika ash-shakhṣ",
      n: "あの人 — literally “that person”, and it does the work of both he and she. Japanese does not choose a gender here and neither does the listener." },
    { c: "hito", k: "あのかた", r: "anokata", e: "that person (polite)", a: "ذٰلِكَ السَّيِّد", at: "dhālika as-sayyid",
      n: "あの方. The polite twin of あのひと. 方 read かた is a respectful word for a person; read ほう it means a direction." },
    { c: "hito", k: "みなさん", r: "minasan", e: "everyone, all of you", a: "حَضَراتُكُم", at: "ḥaḍarātukum",
      n: "皆さん — みな “all” wearing the same さん you put on a name. It is how a room full of people is addressed." },

    /* ---------- よびかた · the four endings you put on a name ---------- */
    { c: "yobikata", k: "さん", r: "san", e: "Mr., Ms. — added to a name", a: "سَيِّد أَوْ سَيِّدَة", at: "sayyid aw sayyida",
      n: "One ending for everyone: no gender, no marital status, no age. Arabic has to pick between سيد and سيدة before it can say anything, and Japanese never does. Never attach it to your own name." },
    { c: "yobikata", k: "ちゃん", r: "chan", e: "added to a child's name", a: "صِيغَةُ تَدْلِيلٍ", at: "ṣīghat tadlīl",
      n: "Warm rather than respectful, and it replaces さん rather than joining it. Also used between close friends and for small animals." },
    { c: "yobikata", k: "くん", r: "kun", e: "added to a boy's name", a: "لِلْأَوْلاد", at: "li-l-awlād",
      n: "〜君. Used to boys, and by a senior to a junior at work regardless of age. Like ちゃん it replaces さん." },
    { c: "yobikata", k: "じん", r: "jin", e: "a national of ~", a: "نِسْبَةٌ إِلَى بَلَدٍ", at: "nisbatun ilā balad",
      n: "〜人 — the same character as ひと, read じん as an ending. Country plus じん gives the nationality: アメリカじん, にほんじん. Arabic runs the identical operation with the nisba ending ـِيّ — أَمْرِيكِيّ, يابانِيّ." },

    /* ---------- しごと · work ---------- */
    { c: "shigoto", k: "せんせい", r: "sensei", e: "teacher — someone else's", a: "مُعَلِّم", at: "muʿallim",
      n: "先生. A title as much as a job, and like さん it is something you are given, not something you claim. Doctors, lawyers and politicians are called せんせい too." },
    { c: "shigoto", k: "きょうし", r: "kyōshi", e: "teacher — your own job", a: "مُدَرِّس", at: "mudarris",
      n: "教師. The plain occupation word, which is why it is the one to use about yourself. Same job, no honour attached." },
    { c: "shigoto", k: "がくせい", r: "gakusei", e: "student", a: "طالِب", at: "ṭālib",
      n: "学生 — 学 “study” + 生. Usually a university student; a school pupil is せいと 生徒." },
    { c: "shigoto", k: "かいしゃいん", r: "kaishain", e: "company employee", a: "مُوَظَّفُ شَرِكَةٍ", at: "muwaẓẓafu sharika",
      n: "会社員 — 会社 “company” + 員 “member”. The general answer to what you do for a living." },
    { c: "shigoto", k: "しゃいん", r: "shain", e: "employee of a named company", a: "عُضْوُ الشَّرِكَة", at: "ʿuḍwu ash-sharika",
      n: "社員. Takes a company in front of it — IMCの しゃいん. Say かいしゃいん when you are not naming the company." },
    { c: "shigoto", k: "ぎんこういん", r: "ginkōin", e: "bank employee", a: "مُوَظَّفُ بَنْكٍ", at: "muwaẓẓafu bank",
      n: "銀行員 — 銀行 “bank” + the same 員. Third word on this page built from that ending." },
    { c: "shigoto", k: "いしゃ", r: "isha", e: "medical doctor", a: "طَبِيب", at: "ṭabīb",
      n: "医者 — 医 “medicine” + 者 “one who”. Addressed as おいしゃさん, with both the polite お and さん." },
    { c: "shigoto", k: "けんきゅうしゃ", r: "kenkyūsha", e: "researcher, scholar", a: "باحِث", at: "bāḥith",
      n: "研究者 — 研究 “research” + the same 者 as いしゃ. Two endings, 員 and 者, cover five of the nine jobs here." },
    { c: "shigoto", k: "エンジニア", r: "enjinia", e: "engineer", a: "مُهَنْدِس", at: "muhandis",
      n: "The only borrowed job on the page, so the only one in katakana and the only one with no kanji." },

    /* ---------- もの · places and things ---------- */
    { c: "mono", k: "だいがく", r: "daigaku", e: "university", a: "جامِعَة", at: "jāmiʿa",
      n: "大学 — “big learning”. The 学 is the one inside がくせい." },
    { c: "mono", k: "びょういん", r: "byōin", e: "hospital", a: "مُسْتَشْفًى", at: "mustashfan",
      n: "病院. Four beats — びょ・う・い・ん — not five. Lesson 7's pair びょういん against びよういん, the beauty salon, is the reason that matters." },
    { c: "mono", k: "でんき", r: "denki", e: "electricity, the light", a: "كَهْرَباء", at: "kahrabāʾ",
      n: "電気. One word for the supply and for the lamp on the ceiling, so でんきを つけて means “turn the light on”." },

    /* ---------- きく · asking about a person ---------- */
    { c: "kiku", k: "だれ", r: "dare", e: "who", a: "مَنْ", at: "man",
      n: "誰. Lesson 6's word, back because this chapter introduces its polite twin." },
    { c: "kiku", k: "どなた", r: "donata", e: "who (polite)", a: "مَنْ حَضْرَتُكَ", at: "man ḥaḍratuka",
      n: "The polite twin of だれ, and it takes an extra beat to say — politeness costs length in both languages." },
    { c: "kiku", k: "さい", r: "sai", e: "~ years old", a: "مِنَ الْعُمْر", at: "min al-ʿumr",
      n: "〜歳. A counter, so it attaches to a number: にじゅうごさい, twenty-five. 二十歳 is the exception, read はたち." },
    { c: "kiku", k: "なんさい", r: "nansai", e: "how old", a: "كَمْ عُمْرُكَ", at: "kam ʿumruka",
      n: "何歳 — lesson 6's なん plus this page's counter. The pattern has not changed since chapter 6; only the counter is new." },
    { c: "kiku", k: "おいくつ", r: "oikutsu", e: "how old (polite)", a: "كَمْ عُمْرُ حَضْرَتِكَ", at: "kam ʿumru ḥaḍratika",
      n: "Lesson 6's いくつ wearing the polite お. Not a new word — a word you already had, made polite by one character." },
    { c: "kiku", k: "はい", r: "hai", e: "yes", a: "نَعَمْ", at: "naʿam",
      n: "From day one's classroom phrases. Closer to “I am with you” than to “that is true” — it answers a negative question differently from English." },
    { c: "kiku", k: "いいえ", r: "iie", e: "no", a: "لا", at: "lā",
      n: "Also from day one. Often softened or avoided entirely; ちょっと… does the same job without the word." },

    /* ---------- くに · eleven countries ---------- */
    { c: "kuni", k: "アメリカ", r: "amerika", e: "America, the U.S.A.", a: "أَمْرِيكا", at: "Amrīkā",
      n: "アメリカじん is an American. Japanese took the name from the continent rather than from “United States”, so the word covers both and context decides." },
    { c: "kuni", k: "イギリス", r: "igirisu", e: "the U.K.", a: "بِرِيطانْيا", at: "Birīṭānyā",
      n: "Not from English at all — from Portuguese *inglês*, which reached Japan centuries before English did." },
    { c: "kuni", k: "インド", r: "indo", e: "India", a: "الْهِنْد", at: "al-Hind" },
    { c: "kuni", k: "インドネシア", r: "indoneshia", e: "Indonesia", a: "إِنْدُونِيسْيا", at: "Indūnīsyā",
      n: "Six characters, and the longest word on the page. It begins exactly as インド does, which is the whole difficulty." },
    { c: "kuni", k: "かんこく", r: "kankoku", e: "South Korea", a: "كُورِيا الْجَنُوبِيَّة", at: "Kūriyā al-Janūbiyya",
      n: "韓国, and in kana alone it is ambiguous: a bare かんこく lookup returns 勧告, “advice”, first. The kanji is what tells the two apart." },
    { c: "kuni", k: "タイ", r: "tai", e: "Thailand", a: "تايْلانْد", at: "Tāylānd",
      n: "Three common senses share this spelling, and the country is not the first: 鯛 the sea bream comes before it, and “tie” after. Katakana does not guarantee a foreign word." },
    { c: "kuni", k: "ちゅうごく", r: "chūgoku", e: "China", a: "الصِّين", at: "aṣ-Ṣīn",
      n: "中国 — “the middle country”, which is what the name means in Chinese too." },
    { c: "kuni", k: "ドイツ", r: "doitsu", e: "Germany", a: "أَلْمانْيا", at: "Almānyā",
      n: "From German *Deutsch*, not from English “Germany” — so the Japanese is nearer the country's own name than English is." },
    { c: "kuni", k: "にほん", r: "nihon", e: "Japan", a: "الْيابان", at: "al-Yābān",
      n: "日本 — “sun origin”, the source of “Land of the Rising Sun”. Also read にっぽん, which is the more formal and more emphatic of the two." },
    { c: "kuni", k: "フランス", r: "furansu", e: "France", a: "فَرَنْسا", at: "Faransā" },
    { c: "kuni", k: "ブラジル", r: "burajiru", e: "Brazil", a: "الْبَرازِيل", at: "al-Barāzīl",
      n: "From Portuguese *Brasil*, like イギリス — the two oldest European contacts left their spellings behind." },
  ],
};
