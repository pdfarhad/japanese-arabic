/* vocab18-data.js — 41 words for the giving chapter, in seven groups.
 *
 * The single source of truth for lesson 18, exactly as `vocab17-data.js` is
 * for lesson 17: `vocab-list.js` renders the cards, `vocab-drill.js` builds
 * its questions, `story18-data.js` walks every one of them, and the practice
 * deck reads it through `flashcard-sets.js`. Edit here, nowhere else. Do not
 * merge the sets.
 *
 * The lecture sheet is **Minna no Nihongo I 第7課** — the third TYPED sheet —
 * cross-checked 2026-08-25 against `raw_lessons_files/shokyuu_1/lessons7.txt`
 * in github.com/clementval/minna: same words, same order. That file ends at
 * これから, exactly where the sheet's main list does — the remaining eleven
 * rows of page 2 are the textbook's 会話 block, reproduced in the textbook's
 * own order. (The repo file has slips of its own — 貨します for 貸します,
 * "nomotsu", "hashigomu" — theirs, not the sheet's.) See LIBRARY.md,
 * `lesson 18/1.png` and `2.png`.
 *
 * THE SHEET'S 48 ROWS ARE 41 CARDS HERE, on record 0019's line:
 *
 *   SEVEN ROWS ARE UTTERANCES, not words — ごめんください, いらっしゃい,
 *   どうぞおあがりください, しつれいします, ［〜は］いかがですか,
 *   いただきます, ［〜、］すてきですね — and live in the lesson's phrase
 *   list. Unlike chapter 17's answers-without-a-question, these are a WHOLE
 *   dialogue: the caller's lines and the host's lines arrive together.
 *   でんわ is not a row at all — it sits inside かけます' printed bracket
 *   ［でんわを〜］ and stays on its VOCAB13/14 cards, mentioned in prose.
 *
 * SIX CARDS ARE DELIBERATE REPEATS — はし, かみ, ちち and はは (VOCAB,
 * lesson 4), きっぷ (VOCAB5), りょこう (VOCAB7) — each needed by the
 * chapter's own argument: はし anchors the utensil group the western three
 * are defined against; ちち and はは are the humble half without which the
 * register pair cannot be taught; かみ, きっぷ and りょこう gain their kanji
 * here for the first time (紙, 切符, 旅行) — and 切符 carries the chapter's
 * own verb 切 in its front seat. English and Arabic are copied VERBATIM from
 * the owning sets, which `check_vocab.py`'s cross-set invariant enforces.
 *
 * はな IS NOT A REPEAT. Lesson 4's はな is 鼻, the *nose*; this card is 花,
 * the *flower* — the first time one kana string is two different words on
 * two different cards in this course. Registered in `check_vocab.py`'s
 * DIFFERENT_WORD list with that reason.
 *
 * TWO SLIPS ON THE SHEET, both taught correctly here:
 *   1. かります is marked I where 借りる is a group II (ichidan) verb — the
 *      first wrong group marker since chapter 14's おきます. JMdict settles
 *      it. The り before ます cannot tell you the group.
 *   2. フアクス is printed with a FULL-SIZE ア where the textbook prints
 *      ファクス — small ァ, two characters one beat, lesson 9's rule. The
 *      small-kana slip class (ウイン's cousin), first time in a headword.
 * Teacher additions, not slips: the kanji 上げます and 貰います, where the
 * textbook prints あげます and もらいます in kana.
 *
 * Readings and commonness checked against JMdict through
 * <https://jisho.org/api/v1/search/words> on 2026-08-25. Everything here is
 * tagged common EXCEPT ホッチキス (a listed headword, untagged under either
 * spelling — in by syllabus, as ＣＤ and ばんせん were) and スペイン/ヨーロッパ
 * as proper nouns (both carry common-tagged entries). What the check FOUND
 * this chapter, eighth chapter running for the short-string point:
 *   - ちち is 乳 *milk* before 父 *father* — both common; the humble family
 *     word shares its sound with the dairy.
 *   - かみ is a common TRIPLE: 紙 paper, 神 god, 髪 hair. So is はし:
 *     橋 bridge (listed first), 箸 chopsticks, 端 edge.
 *   - シャツ's first sense is *undershirt* — the buttoned shirt is ワイシャツ.
 *   - パンチ's first sense is the fist; the desk tool is あなあけパンチ.
 *   - かけます' phone sense is JMdict sense 4 of 掛ける (*to hang* is
 *     sense 1) — the ［でんわを〜］ bracket is what chooses the verb.
 *   - あげる's *give* is sense 5 of 上げる (*to raise* is sense 1): giving,
 *     in Japanese, is literally raising the thing up.
 *   - フォーク is *fork* and *folk* — the homophone problem reaches the
 *     loanwords.
 *
 * Verbs are glossed with the Arabic present tense, third person masculine
 * singular, per vocab14-data.js. The three direction pairs are glossed as
 * Arabic derived-form pairs from ONE root each where the language allows it:
 * أَعَارَ *lends* / اِسْتَعَارَ *borrows* (form IV hands over, form X requests)
 * and عَلَّمَ *teaches* / تَعَلَّمَ *learns* (form II passes on, form V takes
 * in) — the verb form doing in Arabic what the seam syllable does in
 * Japanese.
 *
 * Arabic is Modern Standard with full harakat, and every gloss is a distinct
 * string, because `vocab-drill.js` grades the かな → العربية direction by
 * comparing the Arabic text. The distinctness rule surfaced a real
 * distinction again, twice: プレゼント (هَدِيَّة, an occasion's gift) against
 * おみやげ (تِذْكَار, a journey's memento) — and تِذْكَار shares its root
 * ذ-ك-ر *remember* with きっぷ's own تَذْكِرَة: in Arabic the ticket that got
 * you there and the souvenir you carry back are both *a remembering*.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB18 = {
  cats: [
    { id: "doushi",    jp: "どうし",        r: "dōshi",     en: "Nine verbs, six in pairs" },
    { id: "dougu",     jp: "どうぐ",        r: "dōgu",      en: "The hand and what it holds" },
    { id: "jimusho",   jp: "じむしょ",      r: "jimusho",   en: "The desk in katakana" },
    { id: "okurimono", jp: "おくりもの",    r: "okurimono", en: "Presents and parcels" },
    { id: "kazoku",    jp: "かぞく",        r: "kazoku",    en: "The family, twice over" },
    { id: "tabi",      jp: "たび",          r: "tabi",      en: "The trip" },
    { id: "kotoba",    jp: "ちいさいことば", r: "chiisai kotoba", en: "Three little words" },
  ],

  words: [
    /* ---------- どうし · the nine verbs ---------- */
    { c: "doushi", k: "きります", r: "kirimasu", e: "cut, slice", a: "يَقْطَعُ", at: "yaqṭaʿu",
      n: "切ります, marked I. The 切 returns lower on this very sheet inside 切符 — a ticket is a *cut* token. And the marker matters here: きる written 切る is group I, while きる written 着る, *to wear* (chapter 16's homophone note), is group II. One sound, two verbs, two conjugation families." },
    { c: "doushi", k: "おくります", r: "okurimasu", e: "send", a: "يُرْسِلُ", at: "yursilu",
      n: "送ります, marked I — and the dictionary lists a second common おくる: 贈る, *to give as a gift*. On the sheet where giving begins, even *send* has a giving twin; the kanji decides whether the parcel travels (送) or honours (贈)." },
    { c: "doushi", k: "あげます", r: "agemasu", e: "give", a: "يُعْطِي", at: "yuʿṭī",
      n: "The textbook prints this word in kana; the sheet adds 上げます — and 上げる is *to raise* four senses before it is *to give* (JMdict sense 5). Giving in Japanese is literally raising the thing up to the receiver: the politeness is built into the verb's own picture." },
    { c: "doushi", k: "もらいます", r: "moraimasu", e: "receive", a: "يَتَلَقَّى", at: "yatalaqqā",
      n: "貰います on the sheet, usually written in kana — あげます' other half: one hand raises the gift, the other accepts it. The pair names a single moment from its two ends, exactly as 行きます and 来ます named one journey in chapter 16." },
    { c: "doushi", k: "かします", r: "kashimasu", e: "lend", a: "يُعِيرُ", at: "yuʿīru",
      n: "貸します, marked I — half of the chapter's tightest pair: かします *lends*, かります *borrows*, one syllable apart at the seam. Arabic builds the same pair from one root, ع-و-ر: أَعَارَ *lends*, اِسْتَعَارَ *asks to borrow* — form IV hands over, form X requests." },
    { c: "doushi", k: "かります", r: "karimasu", e: "borrow", a: "يَسْتَعِيرُ", at: "yastaʿīru",
      n: "**借ります is group II, and the sheet marks it I — the day's marker slip**, the first since chapter 14's おきます. 借りる is an ichidan verb (JMdict), so its り belongs to the stem — where かえります I, chapter 16's fake-ichidan trap, keeps its り in the ending. The り before ます cannot tell you the group; only the dictionary can." },
    { c: "doushi", k: "おしえます", r: "oshiemasu", e: "teach", a: "يُعَلِّمُ", at: "yuʿallimu",
      n: "教えます, marked II. The third pair: おしえます *teaches*, ならいます *learns* — one classroom, seen from both desks. Arabic mirrors it from the root ع-ل-م: عَلَّمَ *teaches*, تَعَلَّمَ *learns* — form II passes knowledge on, form V takes it in." },
    { c: "doushi", k: "ならいます", r: "naraimasu", e: "learn", a: "يَتَعَلَّمُ", at: "yataʿallamu",
      n: "習います, marked I — *to learn from someone*: JMdict's first gloss is *to take lessons in*, a teacher built into the verb. The character wears 羽, *wings*, on its head; the old dictionaries explain 習 as a fledgling's repeated practice flights — learning as doing again, not as reading once." },
    { c: "doushi", k: "かけます", r: "kakemasu", e: "make (a phone call)", a: "يَتَّصِلُ", at: "yattaṣilu",
      n: "掛けます, marked II, with the sheet's own bracket ［でんわを〜］ — chapters 13 and 14's でんわ finally gets its verb. The bracket is load-bearing: かける hangs a coat as JMdict's sense 1, seats a guest, spends time — *makes a call* only at sense 4. The noun in the を-slot chooses which かけます this is." },

    /* ---------- どうぐ · the hand and its tools ---------- */
    { c: "dougu", k: "て", r: "te", e: "hand, arm", a: "يَد", at: "yad",
      n: "手 — one character, one kana, one beat: the shortest noun in the course. The sheet glosses it *hand, arm* because て runs up to wherever the shoulder takes over. It heads this group because every row below it is something a て holds." },
    { c: "dougu", k: "はし", r: "hashi", e: "chopsticks", a: "عِيدَانُ الطَّعَامِ", at: "ʿīdān aṭ-ṭaʿām",
      n: "Lesson 4's card, back at the head of its own table setting. The dictionary holds three common はし — 橋 *bridge* (listed first), 箸 *chopsticks*, 端 *edge* — and the chopsticks/bridge pair is the textbook example of Japanese pitch accent: **は**し falling for the chopsticks, は**し** rising for the bridge." },
    { c: "dougu", k: "スプーン", r: "supūn", e: "spoon", a: "مِلْعَقَة", at: "milʿaqa",
      n: "From English *spoon*, stretched to four beats — ス・プ・ー・ン — the long ー and the ン each carrying a full mora. The Arabic مِلْعَقَة is built on لَعِقَ, *to lick*: the tool named at the mouth end." },
    { c: "dougu", k: "ナイフ", r: "naifu", e: "knife", a: "سِكِّين", at: "sikkīn",
      n: "From English *knife* — minus the k that English itself stopped saying centuries ago. Katakana borrows the sound, never the spelling." },
    { c: "dougu", k: "フォーク", r: "fōku", e: "fork", a: "شَوْكَة", at: "shawka",
      n: "From English *fork*, through lesson 9's small-vowel フォ. The dictionary lists a second common フォーク — *folk*, as in music: two English words folded into one katakana string, the homophone problem reaching the loanwords. The Arabic شَوْكَة is literally a *thorn* — the tool named at its points." },
    { c: "dougu", k: "はさみ", r: "hasami", e: "scissors", a: "مِقَصّ", at: "miqaṣṣ",
      n: "鋏 — a native word built on 挟み, *the pinching*: Japanese names the tool by how it holds. Arabic goes the other way — مِقَصّ is built on قَصَّ, *to cut*: the same tool, named at the blades." },

    /* ---------- じむしょ · the desk in katakana ---------- */
    { c: "jimusho", k: "ファクス", r: "fakusu", e: "fax", a: "فَاكْس", at: "fāks",
      n: "**The sheet prints フアクス with a full-size ア — the textbook prints ファクス**: small ァ, two characters, one beat, lesson 9's rule. Full-size フア would be two beats. JMdict's headword is ファックス with ファクス as a listed variant, so either spelling is right — but the ア must be small in both." },
    { c: "jimusho", k: "ワープロ", r: "wāpuro", e: "word processor", a: "مُعَالِجُ النُّصُوصِ", at: "muʿālij an-nuṣūṣ",
      n: "ワードプロセッサー clipped to four beats: ワープロ. Japanese routinely cuts a long loan to two beats from each half — テレビ was one, the next card is another. The full form survives in dictionaries; the clip is what people say." },
    { c: "jimusho", k: "パソコン", r: "pasokon", e: "personal computer", a: "حَاسُوبٌ شَخْصِيّ", at: "ḥāsūb shakhṣī",
      n: "パーソナルコンピューター clipped the same way — パソ + コン, two beats from each half. The clip is so complete that パソコン is the ordinary word; the full form sounds like reading a label aloud." },
    { c: "jimusho", k: "パンチ", r: "panchi", e: "punch (for paper)", a: "خَرَّامَة", at: "kharrāma",
      n: "From English *punch* — and JMdict's first パンチ is the fist. The desk tool is あなあけパンチ, the *hole-opening* punch, in full; on a stationery list the context does the choosing. The Arabic خَرَّامَة is the hole-maker, from خَرَمَ, *to pierce*." },
    { c: "jimusho", k: "ホッチキス", r: "hotchikisu", e: "stapler", a: "دَبَّاسَة", at: "dabbāsa",
      n: "**A company name become the word**: the first staplers sold in Japan carried the E. H. Hotchkiss name, and the brand swallowed the object. JMdict lists it untagged — in by syllabus, like ＣＤ — yet it is what every office actually says. The Arabic دَبَّاسَة is built on دَبُّوس, *a pin*." },
    { c: "jimusho", k: "セロテープ", r: "serotēpu", e: "sticky tape", a: "شَرِيطٌ لَاصِق", at: "sharīṭ lāṣiq",
      n: "A second brand become a word — *Sellotape*, clipped from セロハンテープ, cellophane tape. The sheet's English gloss says *Scotch tape*: a third brand doing the same job in American English. Three languages, three trademarks, one roll." },
    { c: "jimusho", k: "けしゴム", r: "keshigomu", e: "eraser", a: "مِمْحَاة", at: "mimḥāh",
      n: "**The first word in the course spelled half in kanji, half in katakana**: 消し, the native *erase*, welded to ゴム — Dutch *gom*, rubber. The spelling is the word's biography: Japan took the material from Dutch traders and kept its own verb for what it does. Arabic likewise names it from the erasing — مِمْحَاة, from مَحَا, *to erase*." },

    /* ---------- おくりもの · presents and parcels ---------- */
    { c: "okurimono", k: "かみ", r: "kami", e: "paper", a: "وَرَقٌ", at: "waraq",
      n: "Lesson 4's card, now wearing 紙 — and the kanji earns its keep at once: the dictionary holds three common かみ — 紙 *paper*, 神 *god*, 髪 *hair*. Wrapping paper, shrine and haircut all answer to one sound; only the character says which one is meant." },
    { c: "okurimono", k: "はな", r: "hana", e: "flower, blossom", a: "زَهْرَة", at: "zahra",
      n: "**Not lesson 4's はな.** That card is 鼻, the *nose*; this one is 花, the *flower* — the first time one kana string is two different words on two different cards in this course. Both common, both everyday, and the kanji is all that keeps them apart. Chapter 17's お花見 has been carrying this 花 all along." },
    { c: "okurimono", k: "シャツ", r: "shatsu", e: "shirt", a: "قَمِيص", at: "qamīṣ",
      n: "From English *shirt* — but JMdict's first sense is *undershirt*: on its own, シャツ historically names the layer worn underneath. The buttoned shirt is ワイシャツ, swallowed whole from *white shirt*. A loanword that narrowed on arrival." },
    { c: "okurimono", k: "プレゼント", r: "purezento", e: "present, gift", a: "هَدِيَّة", at: "hadiyya",
      n: "From English *present* — the everyday word for a gift between people. It marks an occasion; おみやげ, in the trip group, marks a journey. Two kinds of giving, and Japanese keeps separate words for them." },
    { c: "okurimono", k: "にもつ", r: "nimotsu", e: "baggage, parcel", a: "أَمْتِعَة", at: "amtiʿa",
      n: "荷物 — 荷, *load*, plus 物, *thing*: chapter 17's -もの suffix (たべもの, くだもの) wearing its other reading, もつ. Same character, second sound, same job of making stuff into a noun." },
    { c: "okurimono", k: "おかね", r: "okane", e: "money", a: "نُقُود", at: "nuqūd",
      n: "お金 — 金, *metal, gold*, wearing the polite お it almost never takes off (chapter 17's 御 prefix again). Money as *the metal*: coins came first and the word never updated. Bare かね exists, but sounds pointedly blunt." },
    { c: "okurimono", k: "きっぷ", r: "kippu", e: "ticket", a: "تَذْكِرَةٌ", at: "tadhkira",
      n: "Lesson 5's card, now wearing 切符 — and the front seat holds this chapter's own verb: 切, *cut*, plus 符, *tally*. A ticket is a cut token, torn at the gate. The Arabic تَذْكِرَة is from ذ-ك-ر, *remember* — a ticket as a little reminder; keep that root in mind when the souvenir card comes." },
    { c: "okurimono", k: "クリスマス", r: "Kurisumasu", e: "Christmas", a: "عِيدُ الْمِيلَاد", at: "ʿīd al-mīlād",
      n: "From English *Christmas*, sound by sound. Arabic translates instead of borrowing: عِيدُ الْمِيلَاد, *the feast of the Birth*. Two strategies for one import — Japanese carries the name, Arabic carries the meaning." },

    /* ---------- かぞく · the family, twice over ---------- */
    { c: "kazoku", k: "ちち", r: "chichi", e: "my father", a: "أَبٌ", at: "ab",
      n: "Lesson 4's card, now wearing 父 — the humble word for **your own** father, used when telling others about him. And the dictionary adds its warning: the string ちち is also 乳, *milk*, equally common. Father or milk — the kanji column is not decoration." },
    { c: "kazoku", k: "はは", r: "haha", e: "my mother", a: "أُمٌّ", at: "umm",
      n: "Lesson 4's card, now wearing 母 — はは for your own mother, おかあさん for anyone else's. Japanese decides *whose family it is* before it says anything at all: humble words point inward, honorific words point outward." },
    { c: "kazoku", k: "おとうさん", r: "otōsan", e: "someone else's father", a: "وَالِد", at: "wālid",
      n: "お父さん — the honorific: someone else's father, or your own when speaking *to* him at home. Arabic keeps the same courtesy in its lexicon: وَالِد, *the one who fathered*, is the polite word for asking after someone's father, where plain أَب would sound bare." },
    { c: "kazoku", k: "おかあさん", r: "okāsan", e: "someone else's mother", a: "وَالِدَة", at: "wālida",
      n: "お母さん — おとうさん's other half, built the same way: honorific お, the family word, さん. The four cards in this group are one rule shown twice — humble inward (ちち, はは), honorific outward (おとうさん, おかあさん)." },

    /* ---------- たび · the trip ---------- */
    { c: "tabi", k: "りょこう", r: "ryokō", e: "a trip, travel", a: "سَفَرٌ", at: "safar",
      n: "Lesson 7's card, now wearing 旅行 — 旅, *journey*, plus the 行 of 行きます, chapter 16's going-character, read こう in compounds. Travel is *journey-going*: the word carries its own verb inside it." },
    { c: "tabi", k: "おみやげ", r: "omiyage", e: "souvenir", a: "تِذْكَار", at: "tidhkār",
      n: "お土産 — and the kanji cannot be read character by character: 土産, *local product*, carries the whole native word みやげ pasted across the compound, the ついたち arrangement from chapter 10. The Arabic answers from ذ-ك-ر again: تِذْكَار, *a memento* — the ticket there (تَذْكِرَة) and the souvenir back are the same remembering, two nouns apart." },
    { c: "tabi", k: "ヨーロッパ", r: "Yōroppa", e: "Europe", a: "أُورُوبَّا", at: "Ūrūbbā",
      n: "Borrowed not from English but — like パン — from Portuguese *Europa*, arriving with the same sixteenth-century ships. The dictionary still lists its ateji, 欧羅巴: kanji chosen for sound alone, from before katakana owned the foreign words." },
    { c: "tabi", k: "スペイン", r: "Supein", e: "Spain", a: "إِسْبَانِيَا", at: "Isbāniyā",
      n: "The English name, resounded. Arabic إِسْبَانِيَا keeps the four-syllable *España* shape — with the إِ Arabic requires in front, because no Arabic word may open on two consonants. Japanese fixes borrowed sounds one way, Arabic another." },

    /* ---------- ちいさいことば · three little words ---------- */
    { c: "kotoba", k: "もう", r: "mō", e: "already", a: "بِالْفِعْلِ", at: "bi-l-fiʿl",
      n: "The adverb that says *the event is behind us*. Its full sentence needs the past tense this course has not taught — so it waits here as a word, its grammar still ahead. Arabic leans the same way on the particle قَدْ before a past verb." },
    { c: "kotoba", k: "まだ", r: "mada", e: "not yet", a: "لَيْسَ بَعْدُ", at: "laysa baʿdu",
      n: "未だ in the dictionary, almost always written in kana — もう's other half: *the event is still ahead*. One question, answered from opposite sides, like あげます and もらいます. Classical Arabic keeps a dedicated particle for exactly this meaning: لَمَّا with a verb is *has not yet…*." },
    { c: "kotoba", k: "これから", r: "korekara", e: "from now on", a: "مِنَ الْآنَ", at: "min al-ān",
      n: "Chapter 12's これ plus the から of 〜から きました: *from this point* — assembled exactly as それから, *after that*, was assembled in chapter 17. The pair points two ways along one line: それから looks back from a step just taken, これから looks forward from now." },
  ],
};
