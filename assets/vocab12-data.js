/* vocab12-data.js — 42 words for pointing at things, in seven groups.
 *
 * The single source of truth for lesson 12, exactly as `vocab11-data.js` is for
 * lesson 11: `vocab-list.js` renders the cards, `vocab-drill.js` builds its
 * questions, and `story12-data.js` walks every one of them. Edit here, nowhere
 * else. Do not merge the sets — see the note in story12-data.js for why.
 *
 * Word rule for chapter 12: there isn't one, same as chapter 11. It is the
 * lecture sheet's list, which is Minna no Nihongo I 第2課 verbatim — 47 items,
 * same order, cross-checked 2026-08-11 against an independent listing of that
 * chapter (github.com/clementval/minna). See LIBRARY.md, `lesson 12/1.png`.
 *
 * The 47 rows are 42 word cards plus 5 sentences — そうですか。,
 * ほんのきもちです, [どうも]ありがとう[ございます], これからおせわになります and
 * こちらこそよろしく — which live in the lesson's phrase list because they are
 * utterances, not words. Same split as chapter 11's 42 + 6.
 *
 * OVERLAP IS DELIBERATE, and it is larger here than in any previous chapter.
 * これ それ あれ この その あの and そう are all in VOCAB6 already, as the
 * こ・そ・あ columns of the こそあど grid whose ど column lesson 6 taught; ほん,
 * かさ and いす are in VOCAB, えんぴつ and かぎ in VOCAB5, コンピューター and
 * チョコレート in VOCAB7's katakana set, なん in VOCAB6. Fifteen of the 42
 * therefore have a card elsewhere. They are repeated because this chapter's
 * argument is the れ/の split, and a two-row pattern cannot be shown with one
 * row missing — the same call NOTES.md records for どこ/だれ across VOCAB5 and
 * VOCAB6, and for だれ/どなた in VOCAB11.
 *
 * Readings and commonness checked against JMdict through
 * <https://jisho.org/api/v1/search/words> on 2026-08-11. Everything is tagged
 * common except テレホンカード, which is on the sheet and so in scope by
 * syllabus rather than by frequency — the same call chapter 6 records and
 * chapter 11 made for ぎんこういん.
 *
 * The check earned its keep for the fifth chapter running, and this time all
 * three catches are the SAME catch, which is what makes them worth teaching:
 *
 *   ご  — a bare ご returns 五 "five" first, then 後 "after", then 碁 the board
 *         game, and 語 is FOURTH. Five common words share that one mora.
 *   そう — 僧 "monk" first, 沿う "to run alongside" second, 総 "total" third;
 *         然う, the chapter's sense, is FIFTH.
 *   なん — 難 "difficulty" first; 何 "what" second.
 *
 * The shorter the kana string, the less it identifies — which is the honest
 * argument for the sheet's 漢字 column, and a sharper version of chapter 11's
 * かんこく/勧告. It is Trick 4 in the lesson.
 *
 * ちがいます has no JMdict headword of its own: it is the 〜ます form of 違う,
 * which is common. The card carries the polite form because the sheet does, and
 * because MISSION.md still bars verb conjugation — it is a fixed shape here, not
 * a pattern to generalise.
 *
 * Arabic is Modern Standard with full harakat, and every gloss is a distinct
 * string, because `vocab-drill.js` grades the かな → العربية direction by
 * comparing the Arabic text. Two families were forced apart by that rule and
 * both distinctions are real rather than invented:
 *
 *   بِطَاقَة alone is カード; بِطَاقَةُ عَمَلٍ "card of work" is めいし; بِطَاقَةُ هَاتِفٍ
 *   "card of telephone" is テレホンカード. Japanese builds the same three words
 *   the same way, by putting a noun in front of カード.
 *
 *   قَلَم is the head of all three writing tools, as えんぴつ/ボールペン/
 *   シャープペンシル are not — Arabic compounds where Japanese borrows.
 *
 * THE DEMONSTRATIVES ARE THE REASON THIS SET EXISTS, and their Arabic is the
 * lesson's centrepiece. Japanese splits pronoun (これ) from prenominal (この);
 * Arabic uses the SAME word for both and marks the difference on the noun with
 * the definite article — هٰذَا كِتَابٌ "this is a book" against هٰذَا الْكِتَابُ
 * "this book". So the glosses for この/その/あの carry the الـ, which is not
 * decoration: it is where the distinction lives. Sourced in the lesson.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB12 = {
  cats: [
    { id: "sashi",  jp: "さししめす", r: "sashishimesu", en: "Pointing — three distances, two shapes" },
    { id: "kaku",   jp: "かくもの",   r: "kakumono",     en: "Things you read and write with" },
    { id: "motsu",  jp: "もちもの",   r: "mochimono",    en: "Things you carry" },
    { id: "kikai",  jp: "きかい",     r: "kikai",        en: "Machines" },
    { id: "heya",   jp: "へや",       r: "heya",         en: "The room, and what is on the desk" },
    { id: "kotoba", jp: "ことば",     r: "kotoba",       en: "Languages" },
    { id: "kotae",  jp: "こたえ",     r: "kotae",        en: "Answering, and being given something" },
  ],

  words: [
    /* ---------- さししめす · pointing ---------- */
    { c: "sashi", k: "これ", r: "kore", e: "this one — near me", a: "هٰذَا", at: "hādhā",
      n: "此れ, but nobody writes it. Stands alone as a whole noun: これは ほんです. Lesson 6 taught its question twin どれ." },
    { c: "sashi", k: "それ", r: "sore", e: "that one — near you", a: "ذَاكَ", at: "dhāka",
      n: "其れ. Not “middle distance” — it is YOUR side of the conversation. The thing in the listener's hand is それ however close the listener is standing." },
    { c: "sashi", k: "あれ", r: "are", e: "that one — near neither", a: "ذٰلِكَ", at: "dhālika",
      n: "彼れ. Away from both of us, and so the only one of the three both speakers can point at together." },
    { c: "sashi", k: "この", r: "kono", e: "this ~ — near me", a: "هٰذَا الـ〜", at: "hādhā al-",
      n: "Cannot stand alone: この always needs a noun behind it — この ほん. The れ/の split is the whole chapter." },
    { c: "sashi", k: "その", r: "sono", e: "that ~ — near you", a: "ذَاكَ الـ〜", at: "dhāka al-",
      n: "その ほん — the book by you. Same territory rule as それ, just with the noun said out loud." },
    { c: "sashi", k: "あの", r: "ano", e: "that ~ — near neither", a: "ذٰلِكَ الـ〜", at: "dhālika al-",
      n: "You already used this in chapter 11's あのひと and あのかた without being told it was a pattern. This is the pattern." },

    /* ---------- かくもの · things you read and write with ---------- */
    { c: "kaku", k: "ほん", r: "hon", e: "book", a: "كِتَاب", at: "kitāb",
      n: "本 — the character is a tree 木 with a line through its root, so “origin”, and a book is where things originate. Also the counter for long thin objects." },
    { c: "kaku", k: "じしょ", r: "jisho", e: "dictionary", a: "قَامُوس", at: "qāmūs",
      n: "辞書 — 辞 “word” + 書 “writing”. The Arabic قاموس originally meant the deep ocean, which is roughly how it feels." },
    { c: "kaku", k: "ざっし", r: "zasshi", e: "magazine", a: "مَجَلَّة", at: "majalla",
      n: "雑誌 — 雑 “miscellaneous” + 誌 “record”. Four beats with a small っ: ざ・っ・し is three, and the っ is the middle one." },
    { c: "kaku", k: "しんぶん", r: "shinbun", e: "newspaper", a: "جَرِيدَة", at: "jarīda",
      n: "新聞 — “new” + “hear”. Literally the new things heard, which is a better description of a newspaper than “news paper” is." },
    { c: "kaku", k: "ノート", r: "nōto", e: "notebook", a: "دَفْتَر", at: "daftar",
      n: "From English “note”, but it means the book, not the note written in it. A note you write is a メモ." },
    { c: "kaku", k: "てちょう", r: "techō", e: "pocket notebook, diary", a: "مُفَكِّرَة", at: "mufakkira",
      n: "手帳 — 手 “hand” + 帳 “register”. The small one you carry; ノート is the one you leave on the desk." },
    { c: "kaku", k: "めいし", r: "meishi", e: "business card", a: "بِطَاقَةُ عَمَلٍ", at: "biṭāqat ʿamal",
      n: "名刺 — 名 “name” + 刺 “calling card”. Beware 名詞, also read めいし, which is the grammatical term “noun”: the lecture sheet prints that one by mistake." },
    { c: "kaku", k: "カード", r: "kādo", e: "card", a: "بِطَاقَة", at: "biṭāqa",
      n: "The bare word, and the one the other two are built on. Japanese and Arabic both compound it the same way, by putting a noun in front." },
    { c: "kaku", k: "テレホンカード", r: "terehonkādo", e: "telephone card", a: "بِطَاقَةُ هَاتِفٍ", at: "biṭāqat hātif",
      n: "The only word on the page JMdict does not tag common — a 1990s payphone card. It is here because the sheet has it, not because you will need it." },
    { c: "kaku", k: "えんぴつ", r: "enpitsu", e: "pencil", a: "قَلَمُ رَصَاصٍ", at: "qalam raṣāṣ",
      n: "鉛筆 — 鉛 “lead” + 筆 “brush”. Arabic قلم رصاص is “lead pen”: both languages named it after the metal it never contained." },
    { c: "kaku", k: "ボールペン", r: "bōrupen", e: "ballpoint pen", a: "قَلَمُ حِبْرٍ جَافٍّ", at: "qalam ḥibr jāff",
      n: "“Ball pen” — Japanese dropped “point”, English kept it. Neither is more correct; the borrowing simply stopped at a different word." },
    { c: "kaku", k: "シャープペンシル", r: "shāpupenshiru", e: "mechanical pencil", a: "قَلَمٌ مِيكَانِيكِيّ", at: "qalam mīkānīkī",
      n: "From the Sharp company, which was named after the pencil rather than the other way round. Shortened to シャーペン in speech." },

    /* ---------- もちもの · things you carry ---------- */
    { c: "motsu", k: "かぎ", r: "kagi", e: "key", a: "مِفْتَاح", at: "miftāḥ",
      n: "鍵 exists, but Minna no Nihongo writes this one in kana and so does the sheet — its 漢字 cell holds かぎ, the only kana in that column on either page." },
    { c: "motsu", k: "とけい", r: "tokei", e: "watch, clock", a: "سَاعَة", at: "sāʿa",
      n: "時計 — 時 “time” + 計 “measure”. One word for both, exactly as Arabic ساعة is both the clock and the hour." },
    { c: "motsu", k: "かさ", r: "kasa", e: "umbrella", a: "مِظَلَّة", at: "miẓalla",
      n: "傘 — one of the few kanji that is a picture of the thing: a canopy, a pole, and four people sheltering under it." },
    { c: "motsu", k: "かばん", r: "kaban", e: "bag, briefcase", a: "حَقِيبَة", at: "ḥaqība",
      n: "鞄, written in kana here. Covers briefcase, satchel and handbag alike — Japanese does not split the word by what you carry in it." },

    /* ---------- きかい · machines ---------- */
    { c: "kikai", k: "テープ", r: "tēpu", e: "tape", a: "شَرِيط", at: "sharīṭ",
      n: "The sheet prints it as [カセット]テープ: the brackets mean カセット is optional, so テープ alone is the word to learn." },
    { c: "kikai", k: "テープレコーダー", r: "tēpurekōdā", e: "tape recorder", a: "مُسَجِّلَة", at: "musajjila",
      n: "Six beats before the long vowels are counted and nine after — the longest word in the chapter. ー is a full beat each time." },
    { c: "kikai", k: "テレビ", r: "terebi", e: "television", a: "تِلْفَاز", at: "tilfāz",
      n: "“Terebi” is “television” cut in half, which is what Japanese does to nearly every long borrowing. Arabic built a native word instead, from فاز “to broadcast far”." },
    { c: "kikai", k: "ラジオ", r: "rajio", e: "radio", a: "مِذْيَاع", at: "midhyāʿ",
      n: "Kept whole, unlike テレビ — three beats was already short enough to survive." },
    { c: "kikai", k: "カメラ", r: "kamera", e: "camera", a: "كَامِيرَا", at: "kāmīrā",
      n: "Both languages borrowed it, and both from the same Latin word for a room — the camera obscura, the dark room." },
    { c: "kikai", k: "コンピューター", r: "konpyūtā", e: "computer", a: "حَاسُوب", at: "ḥāsūb",
      n: "Lesson 7's word: ピュ is one beat, not two. The Bangla gloss on the sheet drops both long vowels — কোনপিউতা — which loses two of its six beats." },
    { c: "kikai", k: "じどうしゃ", r: "jidōsha", e: "car, automobile", a: "سَيَّارَة", at: "sayyāra",
      n: "自動車 — “self” + “move” + “vehicle”. Exactly what “automobile” means in Greek and Latin, assembled from Chinese parts instead." },

    /* ---------- へや · the room ---------- */
    { c: "heya", k: "つくえ", r: "tsukue", e: "desk", a: "مَكْتَب", at: "maktab",
      n: "机 — a picture of a small table. Arabic مكتب is from كتب “to write”, so both words name the furniture by what happens on it." },
    { c: "heya", k: "いす", r: "isu", e: "chair", a: "كُرْسِيّ", at: "kursī",
      n: "椅子, written in kana here. Two kana, so it was in lesson 4's list already — this is the same word arriving with its meaning group." },
    { c: "heya", k: "チョコレート", r: "chokorēto", e: "chocolate", a: "شُوكُولَاتَة", at: "shūkūlāta",
      n: "Six beats: チョ・コ・レー・ト, with チョ one beat and レー two. Lesson 9's word, back as something to hand over." },
    { c: "heya", k: "コーヒー", r: "kōhī", e: "coffee", a: "قَهْوَة", at: "qahwa",
      n: "Four beats, and every other one is a long vowel. From Dutch koffie — which came from Arabic قهوة, so the word has travelled a long way back towards itself." },

    /* ---------- ことば · languages ---------- */
    { c: "kotoba", k: "えいご", r: "eigo", e: "the English language", a: "اللُّغَةُ الْإِنْجِلِيزِيَّة", at: "al-lugha al-injilīziyya" },
    { c: "kotoba", k: "にほんご", r: "nihongo", e: "the Japanese language", a: "اللُّغَةُ الْيَابَانِيَّة", at: "al-lugha al-yābāniyya",
      n: "日本語 — chapter 11's 日本 plus this chapter's 語. You have had both halves for a week without being able to say the word." },
    { c: "kotoba", k: "ご", r: "go", e: "~ language — a suffix", a: "لُغَةُ 〜", at: "lughat ~",
      n: "〜語. Country plus ご gives the language, exactly as chapter 11's 〜じん gave the nationality. One mora, and five common words share it: 五, 後, 碁, 語, 御." },

    /* ---------- こたえ · answering ---------- */
    { c: "kotae", k: "なん", r: "nan", e: "what", a: "مَا", at: "mā",
      n: "何 — lesson 6's word. なん before です and most counters, なに when it stands alone. A bare なん lookup returns 難 “difficulty” before it." },
    { c: "kotae", k: "そう", r: "sō", e: "so, that's right", a: "هٰكَذَا", at: "hākadhā",
      n: "然う, and the そ of こそあど: literally “that way, your way”. Answering そうです is agreeing with the shape of the other person's question." },
    { c: "kotae", k: "ちがいます", r: "chigaimasu", e: "no, that's wrong", a: "لَيْسَ كَذٰلِكَ", at: "laysa kadhālika",
      n: "違います, the polite form of 違う “to differ”. Japanese says “it differs” where English says “no” — softer, because it corrects the statement rather than the speaker." },
    { c: "kotae", k: "あのう", r: "anō", e: "um…, excuse me…", a: "عَفْوًا", at: "ʿafwan",
      n: "A held あの — the same あ as あれ, stretched to buy a beat. The sheet's Bangla renders the English “Well” as ভালো, “good”, which is the wrong sense of the word." },
    { c: "kotae", k: "どうぞ", r: "dōzo", e: "please, here you are", a: "تَفَضَّلْ", at: "tafaḍḍal",
      n: "Offering, never requesting: it goes with the hand that gives. Chapter 11 gave you it inside どうぞよろしく; this is the word on its own." },
    { c: "kotae", k: "どうも", r: "dōmo", e: "thanks; well…", a: "شُكْرًا", at: "shukran",
      n: "Does the work of a whole sentence — thanks, hello, sorry, or an intensifier on どうもありがとう. The most useful two beats in the language." },
  ],
};
