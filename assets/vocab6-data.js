/* vocab6-data.js — the thirty-four interrogatives, in five groups.
 *
 * The single source of truth for lesson 6, exactly as `vocab-data.js` is for
 * lesson 4 and `vocab5-data.js` for lesson 5: `vocab-list.js` renders the cards
 * from it, `vocab-drill.js` builds its questions from it, and
 * reference/question-words.html prints it. Edit here, nowhere else.
 *
 * Unlike lessons 4 and 5, the list is not chosen — the lecture notes fix it, and
 * both pages of them are now in scope. Page 1 gave twenty-two lines; page 2
 * (ingested 2026-08-02) gave twelve more. The job here was to check each one and
 * group them so the structure shows. The grouping IS the lesson:
 *
 *   dare      the three that ask about people
 *   kosoado   the six ど-words that are the question member of a こそあど set
 *   awase     the eight that are two shorter words glued together
 *   iku       the い-stem: when, how many, how much — plus their two answers
 *   nan       なに, and the eleven なん + counter compounds
 *
 * Thirty-two of the thirty-four are questions. いつも and ちょっと are not:
 * they are the answers that arrived alongside them, and both attach to
 * something on this page, so they are filed here rather than dropped.
 *
 * Page 2 is why the lesson is no longer called "two stems". いつ, いくつ and
 * いくら begin with neither ど nor なに, so there is a fourth opening.
 *
 * Every reading and gloss checked against <https://jisho.org/api/v1/search/words>.
 * Findings worth keeping:
 *
 *   どやって, as the notes write it, is not a word — JMdict has no entry and no
 *   variant. The standard form is どうやって, and the missing う is a full mora.
 *   Taught as どうやって; the slip is named in the lesson.
 *
 *   ちっと, as the notes write it, is a real entry (些と) but is not tagged
 *   common. The ordinary word is ちょっと. Taught as ちょっと; slip named.
 *
 *   どこの has no dictionary entry at all, and neither does だれと, and neither
 *   does なんしゅうかん. That is not a problem, it is the point of the `awase`
 *   group and of the かん suffix: they are どこ + の, だれ + と and なん + 週間,
 *   and a dictionary does not list a phrase it can generate.
 *
 * The commonness bar that governed lessons 4 and 5 does not apply here. There
 * the question was "is this word worth a beginner's time"; here the syllabus
 * names the words and the only question is whether they are correctly written.
 * JMdict does not tag なんようび, なんがつ, なんかげつ or なんねんかん common,
 * and they are still exactly what a beginner asks in their first week.
 *
 * Arabic is Modern Standard with full harakat. Every gloss is a distinct string:
 * the drill's かな → العربية direction marks an answer right by comparing the
 * Arabic text, so two cards sharing one Arabic phrase would make a correct
 * answer score as wrong. Enforced by `scripts/check_vocab.py`.
 *
 * That constraint turned out to carry the lesson's main point. A point in time
 * takes أَيُّ and a span of time takes كَمْ, which is exactly the distinction
 * かん makes in Japanese — so なんねん is أَيُّ سَنَةٍ and なんねんかん is
 * كَمْ سَنَةً, and the fix for the drill and the teaching point are one fact.
 *
 * The なん counters are stored largest unit first — ねん · がつ · にち · ようび ·
 * じ · ぷん — because that is the order a Japanese date is written and the lesson
 * asks the reader to rehearse them that way. The span forms follow, then the one
 * counter that is not time at all.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB6 = {
  cats: [
    { id: "dare",    jp: "だれ",       r: "dare",       en: "Asking about people" },
    { id: "kosoado", jp: "こそあど",   r: "kosoado",    en: "The six with a family" },
    { id: "awase",   jp: "くみあわせ", r: "kumiawase",  en: "Two words glued together" },
    { id: "iku",     jp: "いつ・いく", r: "itsu · iku", en: "When, how many, how much" },
    { id: "nan",     jp: "なん",       r: "nan",        en: "What, and how many" },
  ],

  words: [
    /* ---------- だれ · asking about people ---------- */
    { c: "dare", k: "だれ", r: "dare", e: "who", a: "مَنْ", at: "man",
      n: "Already met as a word in lesson 5. Here it is doing its real job." },
    { c: "dare", k: "どなた", r: "donata", e: "who — politely", a: "مَنْ حَضْرَتُكَ", at: "man ḥaḍratuka",
      n: "The ど-member of こなた・そなた・あなた・どなた. あなた, “you”, is its surviving cousin — which is why どなた sounds respectful." },
    { c: "dare", k: "だれと", r: "dare to", e: "with whom", a: "مَعَ مَنْ", at: "maʿa man",
      n: "だれ + と, the particle “with”. It points at an action, so it normally wants a verb — だれとですか is the version you can say today." },

    /* ---------- こそあど · the six with a family ---------- */
    { c: "kosoado", k: "どこ", r: "doko", e: "where, what place", a: "أَيْنَ", at: "ayna",
      n: "ここ · そこ · あそこ · どこ. Places." },
    { c: "kosoado", k: "どちら", r: "dochira", e: "which way; where — politely", a: "أَيُّ جِهَةٍ", at: "ayyu jihatin",
      n: "こちら · そちら · あちら · どちら. Directions — and asking a direction instead of a place is what makes it the polite どこ." },
    { c: "kosoado", k: "どの", r: "dono", e: "which — before a noun", a: "أَيُّ", at: "ayyu",
      n: "この · その · あの · どの. Cannot stand alone: どの always has a noun behind it." },
    { c: "kosoado", k: "どれ", r: "dore", e: "which one", a: "أَيُّ وَاحِدٍ", at: "ayyu wāḥidin",
      n: "これ · それ · あれ · どれ. Stands alone, where どの cannot — and it means three or more." },
    { c: "kosoado", k: "どんな", r: "donna", e: "what kind of", a: "أَيُّ نَوْعٍ", at: "ayyu nawʿin",
      n: "こんな · そんな · あんな · どんな. Before a noun, like どの, but asking for a description rather than a choice." },
    { c: "kosoado", k: "どう", r: "dō", e: "how, in what way", a: "كَيْفَ", at: "kayfa",
      n: "こう · そう · ああ · どう. Before a verb. Three of the compounds in the next group are built on this one." },

    /* ---------- くみあわせ · two words glued together ---------- */
    { c: "awase", k: "どうして", r: "dōshite", e: "why, for what reason", a: "لِمَاذَا", at: "li-mādhā",
      n: "どう + して, the て-form of する. Usually “why”, but it can also mean “in what manner” — なぜ is the unambiguous one." },
    { c: "awase", k: "どうやって", r: "dōyatte", e: "how, by what means", a: "بِأَيِّ طَرِيقَةٍ", at: "bi-ayyi ṭarīqatin",
      n: "どう + やって, the て-form of やる. Method only, so unlike どうして it cannot be misread. Wants a verb after it." },
    { c: "awase", k: "どういう", r: "dō iu", e: "what sort of", a: "مَا نَوْعُ", at: "mā nawʿu",
      n: "どう + いう (“to say”) — literally “how would you call it”. A noun must follow, as with どの." },
    { c: "awase", k: "どのぐらい", r: "dono gurai", e: "how long, how much", a: "كَمْ", at: "kam",
      n: "どの + ぐらい (“about, roughly”). どのくらい with an unmarked く is the same word — pick either." },
    { c: "awase", k: "どこの", r: "doko no", e: "of where, from where", a: "مِنْ أَيْنَ", at: "min ayna",
      n: "どこ + の. の demands a noun after it, so this can never end a sentence: どこのくるま, “which car / what make of car”." },
    { c: "awase", k: "なんの", r: "nan no", e: "what …, of what", a: "أَيُّ شَيْءٍ", at: "ayyu shayʾin",
      n: "なん + の, same machine — なんのほん, “what kind of book”. なん rather than なに because の begins with an n." },
    { c: "awase", k: "なんで", r: "nan de", e: "why — casually; by what means", a: "لِمَ", at: "lima",
      n: "なん + で, the particle “by means of”. Literally “by what”; in speech, “why”. Both senses are standard, and the second grew out of the first." },
    { c: "awase", k: "なぜ", r: "naze", e: "why — and only why", a: "لِأَيِّ سَبَبٍ", at: "li-ayyi sababin",
      n: "何 + 故, “what-cause”. 故 is not a word you have, so this is the one why on the page that hands you no reusable part — and the one you meet in writing." },

    /* ---------- いつ・いく · when, how many, how much ---------- */
    { c: "iku", k: "いつ", r: "itsu", e: "when", a: "مَتَى", at: "matā",
      n: "Written 何時 — the same two characters as なんじ. なんじ pins the question to a clock; いつ leaves the unit open." },
    { c: "iku", k: "いつも", r: "itsumo", e: "always", a: "دَائِمًا", at: "dāʾiman",
      n: "いつ + も (“also, even”) — “at any when”. Not a question: it is the answer. The same も later gives だれも and どこも." },
    { c: "iku", k: "いくつ", r: "ikutsu", e: "how many", a: "كَمْ عَدَدًا", at: "kam ʿadadan",
      n: "いく (幾, “how many”) + つ, the all-purpose counter. It also asks someone's age." },
    { c: "iku", k: "いくら", r: "ikura", e: "how much — of money", a: "بِكَمْ", at: "bi-kam",
      n: "The same いく, counting price rather than things. これは いくらですか is the sentence you will need first." },
    { c: "iku", k: "ちょっと", r: "chotto", e: "a little, a bit", a: "قَلِيلًا", at: "qalīlan",
      n: "The answer to いくら and いくつ when the answer is small. Contains the small っ, which this course has not taught yet." },

    /* ---------- なん · what, and how many ---------- */
    { c: "nan", k: "なに", r: "nani", e: "what", a: "مَاذَا", at: "mādhā",
      n: "Becomes なん before a counter, before です, and before any t, d or n sound. Everywhere else it stays なに." },

    /* the point questions, largest unit first — the order a date is written */
    { c: "nan", k: "なんねん", r: "nannen", e: "what year", a: "أَيُّ سَنَةٍ", at: "ayyu sanatin" },
    { c: "nan", k: "なんがつ", r: "nangatsu", e: "what month", a: "أَيُّ شَهْرٍ", at: "ayyu shahrin" },
    { c: "nan", k: "なんにち", r: "nannichi", e: "what date; how many days", a: "كَمْ يَوْمًا", at: "kam yawman",
      n: "The one word that does both jobs — a date and a duration. Every other unit needs かん for the second sense; this one does not bother." },
    { c: "nan", k: "なんようび", r: "nan'yōbi", e: "what day of the week", a: "أَيُّ يَوْمٍ", at: "ayyu yawmin" },
    { c: "nan", k: "なんじ", r: "nanji", e: "what time, which hour", a: "كَمِ السَّاعَةُ", at: "kami s-sāʿatu" },
    { c: "nan", k: "なんぷん", r: "nanpun", e: "how many minutes", a: "كَمْ دَقِيقَةً", at: "kam daqīqatan",
      n: "ふん turns into ぷん after ん — lesson 5's rule that maru kana live only after ん or っ, caught in the act." },

    /* the span questions: かん (間), “the gap between”, turns a point into a stretch */
    { c: "nan", k: "なんじかん", r: "nanjikan", e: "how many hours", a: "كَمْ سَاعَةً", at: "kam sāʿatan",
      n: "なんじ + かん (間, “the gap between”). なんじ asks what o'clock; adding かん asks how long." },
    { c: "nan", k: "なんしゅうかん", r: "nanshūkan", e: "how many weeks", a: "كَمْ أُسْبُوعًا", at: "kam usbūʿan",
      n: "Same かん. JMdict has no entry for it, exactly as it has none for どこの — generated, not lexical." },
    { c: "nan", k: "なんかげつ", r: "nankagetsu", e: "how many months", a: "كَمْ شَهْرًا", at: "kam shahran",
      n: "The exception: month swaps its counter instead of taking かん. なんがつ asks which month, なんかげつ how many." },
    { c: "nan", k: "なんねんかん", r: "nannenkan", e: "how many years", a: "كَمْ سَنَةً", at: "kam sanatan",
      n: "なんねん + かん. Years, not months — ねん is the same year unit as in なんねん, and the two are easy to mix up." },

    /* the counter that is not time */
    { c: "nan", k: "なんにん", r: "nannin", e: "how many people", a: "كَمْ شَخْصًا", at: "kam shakhṣan",
      n: "The one counter on this page that has nothing to do with the clock." },
  ],
};
