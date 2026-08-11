/* vocab13-data.js — 41 words for places, floors and prices, in eight groups.
 *
 * The single source of truth for lesson 13, exactly as `vocab12-data.js` is for
 * lesson 12: `vocab-list.js` renders the cards, `vocab-drill.js` builds its
 * questions, and `story13-data.js` walks every one of them. Edit here, nowhere
 * else. Do not merge the sets.
 *
 * The lecture sheet titles itself "Lesson 3 (Vocabulary)" and is **Minna no
 * Nihongo I 第3課** verbatim, cross-checked 2026-08-11 against
 * `raw_lessons_files/shokyuu_1/lessons3.txt` in github.com/clementval/minna.
 * See LIBRARY.md, `lesson 13/1.png` and `2.png`.
 *
 * The sheet's 44 rows are 41 word cards plus 3 utterances — すみません,
 * ［〜を］みせてください and ［〜を］ください — which live in the lesson's phrase
 * list. Same split as chapters 11 and 12.
 *
 * TWO SLIPS ON THE SHEET, and the first is a new kind. Every previous slip in
 * this course sat in a gloss column, so the Japanese was still safe to learn.
 * This one is in the Japanese column itself:
 *
 *   ウイン → ワイン. The English says "Wine" and the transliteration says
 *   উয়াইন, wain; only the kana is wrong, ワ typed as ウ + イ. Taught as ワイン.
 *
 *   エレベータ → エレベーター. JMdict tags only the long form common, and the
 *   sheet contradicts itself one row later by keeping エスカレーター's ー.
 *
 * OVERLAP IS DELIBERATE AND LARGE, for the third chapter running. All eight
 * place words are in KOSOADO already — lesson 6 drew the grid and taught its ど
 * column, chapter 12 cashed in the れ and の rows, and this chapter cashes in the
 * こ and ちら rows. きょうしつ, かいしゃ and ひゃく are in VOCAB7; へや and くつ in
 * VOCAB (and へや again in VOCAB12); くに in VOCAB11; どこ, どちら and いくら in
 * VOCAB6. **いくら and ひゃく already having cards is the point, not an
 * accident**: chapter 6 taught how to ask the price and this chapter finally
 * supplies the numbers to answer with. Their VOCAB6 Arabic glosses are reused
 * verbatim (بِكَمْ, أَيْنَ, أَيُّ جِهَةٍ) so a learner meeting a word twice does not
 * meet two different Arabic words for it.
 *
 * Readings and commonness checked against JMdict through
 * <https://jisho.org/api/v1/search/words> on 2026-08-11. Everything here is
 * tagged common. One genuine ambiguity, and it sits inside the chapter's own
 * subject:
 *
 *   ちか is 地下 "underground" AND 地価 "the price of land", both common. A
 *   chapter about a department-store basement that is also about prices could
 *   plausibly mean either, and only the kanji separates them. It is the third
 *   chapter running where the commonness check produced the argument for the
 *   漢字 column rather than a near-miss.
 *
 * THE ARABIC HERE CONTINUES LESSON 12'S TRICK RATHER THAN REPEATING IT. The
 * place words هُنَا · هُنَاكَ · هُنَالِكَ are built from the same two morphemes as the
 * demonstratives ذَا · ذَاكَ · ذٰلِكَ were: كاف الخطاب, the second-person kāf, and
 * لام البعد, the lām of distance. en.wiktionary gives هُنَالِكَ's etymology
 * outright as ـكَ + لِ + هُنَا. So Japanese derives its place words from its
 * pointing words by swapping an ending (これ → ここ), and Arabic derives its by
 * stacking the same two suffixes — the SAME operation, one paradigm along. The
 * glosses carry it; the lesson states it.
 *
 * The ちら row is glossed with مِنْ, "from/by way of", because こちら asks a
 * DIRECTION where ここ asks a place — which is exactly what makes it the polite
 * one, and is already the reasoning `vocab6-data.js` records for どちら.
 *
 * Arabic is Modern Standard with full harakat, and every gloss is a distinct
 * string, because `vocab-drill.js` grades the かな → العربية direction by
 * comparing the Arabic text. まん is glossed عَشَرَةُ آلَافٍ, "ten thousands",
 * which is not a translation so much as the lesson's whole point: **Arabic has
 * no single word for it and Japanese does.**
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB13 = {
  cats: [
    { id: "basho",   jp: "ばしょ",     r: "basho",     en: "Pointing at a place — plain, then polite" },
    { id: "heya",    jp: "へや",       r: "heya",      en: "Rooms in a building" },
    { id: "ugoku",   jp: "うごく",     r: "ugoku",     en: "Getting around it" },
    { id: "jibun",   jp: "じぶんの",   r: "jibun no",  en: "What is yours" },
    { id: "kaimono", jp: "かいもの",   r: "kaimono",   en: "On the shelves" },
    { id: "kazu",    jp: "かず",       r: "kazu",      en: "Counting, floors and money" },
    { id: "yaritori",jp: "やりとり",   r: "yaritori",  en: "Asking, and answering politely" },
    { id: "namae",   jp: "なまえ",     r: "namae",     en: "Three names" },
  ],

  words: [
    /* ---------- ばしょ · pointing at a place ---------- */
    { c: "basho", k: "ここ", r: "koko", e: "here — where I am", a: "هُنَا", at: "hunā",
      n: "The こ of こそあど plus the place ending こ. Same prefix as これ and この, so the distance system you learned yesterday transfers whole." },
    { c: "basho", k: "そこ", r: "soko", e: "there — where you are", a: "هُنَاكَ", at: "hunāka",
      n: "Your side, not a middle distance — the same territory rule as それ. Arabic marks it with the second-person كاف, exactly as it marks ذَاكَ." },
    { c: "basho", k: "あそこ", r: "asoko", e: "over there — near neither", a: "هُنَالِكَ", at: "hunālika",
      n: "The one irregular member of the whole grid: あこ is what the pattern predicts, あそこ is what people say." },
    { c: "basho", k: "どこ", r: "doko", e: "where?", a: "أَيْنَ", at: "ayna",
      n: "Lesson 6's word, back because this chapter finally supplies the three answers to it." },
    { c: "basho", k: "こちら", r: "kochira", e: "this way — polite ここ", a: "مِنْ هُنَا", at: "min hunā",
      n: "Asks a direction where ここ asks a place, and that indirectness is the politeness. Chapter 11 met it as こちらは〜さんです." },
    { c: "basho", k: "そちら", r: "sochira", e: "that way — polite そこ", a: "مِنْ هُنَاكَ", at: "min hunāka",
      n: "Also means “you / your side” in letters and on the phone — pointing at a direction rather than at a person is the same politeness move again." },
    { c: "basho", k: "あちら", r: "achira", e: "over that way — polite あそこ", a: "مِنْ هُنَالِكَ", at: "min hunālika",
      n: "Regular, unlike あそこ. The ちら row keeps the pattern the こ row breaks." },
    { c: "basho", k: "どちら", r: "dochira", e: "which way? — polite どこ", a: "أَيُّ جِهَةٍ", at: "ayyu jihatin",
      n: "Lesson 6's word. Every polite member of this grid is one mora longer than its plain twin — chapter 11's rule, still holding." },

    /* ---------- へや · rooms ---------- */
    { c: "heya", k: "きょうしつ", r: "kyōshitsu", e: "classroom", a: "فَصْل", at: "faṣl",
      n: "教室 — 教 “teach” + 室 “room”. The 教 is the one inside chapter 11's きょうし 教師." },
    { c: "heya", k: "しょくどう", r: "shokudō", e: "dining hall, canteen", a: "مَطْعَم", at: "maṭʿam",
      n: "食堂 — 食 “eat” + 堂 “hall”. Arabic مطعم is built the same way, from طعم “to taste”: both name the room after what happens in it." },
    { c: "heya", k: "じむしょ", r: "jimusho", e: "office", a: "مَكْتَبٌ إِدَارِيّ", at: "maktab idārī",
      n: "事務所 — “business affairs place”. The 所 “place” ending turns up again in ばしょ and だいどころ later." },
    { c: "heya", k: "かいぎしつ", r: "kaigishitsu", e: "conference room", a: "قَاعَةُ اجْتِمَاعَاتٍ", at: "qāʿat ijtimāʿāt",
      n: "会議室 — 会議 “meeting” + the same 室 as きょうしつ. Two of this page's rooms end in it." },
    { c: "heya", k: "うけつけ", r: "uketsuke", e: "reception desk", a: "مَكْتَبُ الاسْتِقْبَال", at: "maktab al-istiqbāl",
      n: "受付 — “receive” + “attach”. It is the desk, the department and the person, all one word." },
    { c: "heya", k: "ロビー", r: "robī", e: "lobby", a: "بَهْو", at: "bahw",
      n: "Three beats: ロ・ビー, with ビー two. The ー is doing real work — ロビ would be a different word." },
    { c: "heya", k: "へや", r: "heya", e: "room", a: "غُرْفَة", at: "ghurfa",
      n: "部屋. Two kana, so lesson 4 had it; chapter 12 had it again. This is the third meeting, and the first time it sits with the other rooms." },

    /* ---------- うごく · getting around ---------- */
    { c: "ugoku", k: "トイレ", r: "toire", e: "toilet, rest room", a: "دَوْرَةُ مِيَاهٍ", at: "dawrat miyāh",
      n: "From English “toilet”. The sheet gives おてあらい お手洗い beside it — literally “honourable hand-washing”, the polite word, and the one to use in someone's home." },
    { c: "ugoku", k: "かいだん", r: "kaidan", e: "staircase", a: "دَرَج", at: "daraj",
      n: "階段 — and that 階 is this chapter's floor counter. Stairs are literally “floor steps”." },
    { c: "ugoku", k: "エレベーター", r: "erebētā", e: "lift, elevator", a: "مِصْعَد", at: "miṣʿad",
      n: "Six beats, three of them long vowels. **The sheet prints エレベータ without the last ー** — a slip; JMdict tags only this form common, and the next row's エスカレーター keeps its ー." },
    { c: "ugoku", k: "エスカレーター", r: "esukarētā", e: "escalator", a: "سُلَّمٌ كَهْرَبَائِيّ", at: "sullam kahrabāʾī",
      n: "Eight beats — the longest word in the chapter. Arabic calls it an “electric staircase”, which is a description rather than a borrowing." },
    { c: "ugoku", k: "ちか", r: "chika", e: "basement, underground", a: "قَبْو", at: "qabw",
      n: "地下 — “earth under”. In kana alone it is also 地価, “the price of land”, and both are common: a chapter about a basement that is also about prices needs the kanji to tell you which." },

    /* ---------- じぶんの · what is yours ---------- */
    { c: "jibun", k: "くに", r: "kuni", e: "country", a: "بَلَد", at: "balad",
      n: "国, and the sheet writes ［お］くに — the polite お goes on when you ask about somebody else's, never your own. Chapter 11's rule: the polite form never points at the speaker." },
    { c: "jibun", k: "かいしゃ", r: "kaisha", e: "company", a: "شَرِكَة", at: "sharika",
      n: "会社 — the two characters inside chapter 11's かいしゃいん 会社員. You had the employee before you had the employer." },
    { c: "jibun", k: "うち", r: "uchi", e: "house, home", a: "بَيْت", at: "bayt",
      n: "家. Means the building and the household both, and by extension “us, our side” — the group you belong to." },
    { c: "jibun", k: "でんわ", r: "denwa", e: "telephone, a phone call", a: "هَاتِف", at: "hātif",
      n: "電話 — “electric talk”. Shares its 電 with chapter 11's でんき 電気." },

    /* ---------- かいもの · on the shelves ---------- */
    { c: "kaimono", k: "くつ", r: "kutsu", e: "shoes", a: "حِذَاء", at: "ḥidhāʾ",
      n: "靴. Two kana, from lesson 4. Counted with 〜そく, and taken off at the door of every home in the country." },
    { c: "kaimono", k: "ネクタイ", r: "nekutai", e: "necktie", a: "رَبْطَةُ عُنُقٍ", at: "rabṭat ʿunuq",
      n: "“Neck tie”, both halves borrowed. Arabic translates rather than borrows: “a tying of the neck”." },
    { c: "kaimono", k: "ワイン", r: "wain", e: "wine", a: "نَبِيذ", at: "nabīdh",
      n: "**The sheet prints ウイン**, which is not a word — ワ mistyped as ウ + イ. Its own transliteration column says wain. Learn ワイン." },
    { c: "kaimono", k: "たばこ", r: "tabako", e: "tobacco, a cigarette", a: "سَجَائِر", at: "sajāʾir",
      n: "Usually written in kana or katakana. It reached Japanese from Portuguese in the 1500s, by the same route as パン and ブラジル." },
    { c: "kaimono", k: "うりば", r: "uriba", e: "counter, department", a: "قِسْم", at: "qism",
      n: "売り場 — “selling place”. It is the floor section of a department store, which is why this chapter pairs it with the floor counter." },

    /* ---------- かず · counting, floors and money ---------- */
    { c: "kazu", k: "ひゃく", r: "hyaku", e: "hundred", a: "مِئَة", at: "miʾa",
      n: "百. Three of its multiples change sound: 300 さんびゃく, 600 ろっぴゃく, 800 はっぴゃく. Lesson 7 taught ひゃく as a yōon word; this is the first time it has to be counted with." },
    { c: "kazu", k: "せん", r: "sen", e: "thousand", a: "أَلْف", at: "alf",
      n: "千. Two change: 3000 さんぜん, 8000 はっせん. 6000 stays regular — ろくせん — which is the exception to the exception." },
    { c: "kazu", k: "まん", r: "man", e: "ten thousand — a unit, not a word", a: "عَشَرَةُ آلَافٍ", at: "ʿasharat ālāf",
      n: "万, and it is never said alone: 10,000 is いちまん. From 万 upward a number needs its 一, where 百 and 千 do not. Arabic has no single word for it — عشرة آلاف is “ten thousands”." },
    { c: "kazu", k: "えん", r: "en", e: "yen", a: "يِنّ", at: "yinn",
      n: "円, which also means “circle” — the currency is named after the round coin. Attaches to a number with no gap: ひゃくえん." },
    { c: "kazu", k: "かい", r: "kai", e: "~th floor", a: "طَابِق", at: "ṭābiq",
      n: "階, the same character as かいだん. 1階 いっかい, 3階 さんがい, 6階 ろっかい, 8階 はっかい — the sheet writes 〜がい in brackets to warn you." },
    { c: "kazu", k: "なんがい", r: "nangai", e: "what floor?", a: "أَيُّ طَابِقٍ", at: "ayyu ṭābiqin",
      n: "何階 — lesson 6's なん plus this chapter's counter, and it takes the voiced が. The question word proves the rendaku is real." },

    /* ---------- やりとり · asking and answering ---------- */
    { c: "yaritori", k: "いくら", r: "ikura", e: "how much?", a: "بِكَمْ", at: "bi-kam",
      n: "Lesson 6 taught this the week the course had no numbers to answer it with. Now it does: これは いくらですか。— ごせんえんです。" },
    { c: "yaritori", k: "でございます", r: "de gozaimasu", e: "is — one step above です", a: "تَعْبِيرٌ أَشَدُّ تَهْذِيبًا", at: "taʿbīr ashadd tahdhīban",
      n: "The sheet's own gloss is “polite equivalent of です”. Shop staff say it to customers; the customer does not say it back. Politeness in this language is directional, and this is the clearest case yet." },
    { c: "yaritori", k: "じゃ", r: "ja", e: "well then, in that case", a: "إِذَنْ", at: "idhan",
      n: "The hinge of the whole dialogue: it marks the moment you stop asking and start deciding. A contraction of では, and the same じゃ lesson 7 taught as a yōon." },

    /* ---------- なまえ · three names ---------- */
    { c: "namae", k: "しんおおさか", r: "shin-Ōsaka", e: "Shin-Ōsaka — a station", a: "مَحَطَّةُ شِين أُوسَاكَا", at: "maḥaṭṭat Shīn Ōsākā",
      n: "新大阪 — “new Ōsaka”, the bullet-train station. Four long vowels in a row at しんおお: ん and おお are three beats between them." },
    { c: "namae", k: "イタリア", r: "Itaria", e: "Italy", a: "إِيطَالْيَا", at: "Īṭālyā",
      n: "Four beats. Both languages took the name from Latin rather than from each other." },
    { c: "namae", k: "スイス", r: "Suisu", e: "Switzerland", a: "سْوِيسْرَا", at: "Swīsrā",
      n: "From French Suisse, so the Japanese has no r in it — where English, Arabic and German all do." },
  ],
};
