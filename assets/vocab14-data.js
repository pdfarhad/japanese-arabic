/* vocab14-data.js — 46 words for the working day and the clock, in eight groups.
 *
 * The single source of truth for lesson 14, exactly as `vocab13-data.js` is for
 * lesson 13: `vocab-list.js` renders the cards, `vocab-drill.js` builds its
 * questions, `story14-data.js` walks every one of them, and the practice deck
 * reads it through `flashcard-sets.js`. Edit here, nowhere else. Do not merge
 * the sets.
 *
 * The lecture sheet is **Minna no Nihongo I 第4課** verbatim, cross-checked
 * 2026-08-13 against `raw_lessons_files/shokyuu_1/lessons4.txt` in
 * github.com/clementval/minna. See LIBRARY.md, `lesson 14/1.png` and `2.png`.
 *
 * The sheet's 53 rows are 46 word cards plus 7 items that only mean anything
 * inside the telephone call — たいへんですね。, えーと, 104, おねがいします,
 * かしこまりました, おといあわせのばんごう and どうも ありがとう ございました — which
 * live in the lesson's phrase list. Same split as chapters 11, 12 and 13.
 *
 * TWO SLIPS ON THE SHEET, and both are checkable against material Farhad
 * already has:
 *
 *   おきます I → II. 起きる is an ichidan verb (JMdict), which is precisely what
 *   Minna no Nihongo's Group II means. The sheet's own next row marks ねます II,
 *   and 寝る is the same class. Five of the six markers are right.
 *
 *   なんぶん → なんぷん. The sheet's own row 14 prints 〜ふん（〜ぷん）, so it
 *   disagrees with itself, and VOCAB6 has carried なんぷん since chapter 6. The
 *   cost is not a near-miss: 何分 has TWO common readings, なんぷん "what minute"
 *   and なにぶん "anyway, at any rate", so a voiced ぶ is the other word.
 *
 * SCOPE, DECIDED BY FARHAD 2026-08-14: the six verbs go in as **fixed ます
 * shapes**, exactly as きました, なります and みせて did. The I/II/III group
 * numbers are noted on the cards and NOT taught — a group number's only use is
 * conjugating, and MISSION.md still bars verb conjugation as a system. See
 * `learning-records/0017`.
 *
 * OVERLAP IS THE LARGEST YET — 17 of the sheet's 53 rows already have a card
 * somewhere in the course, and 11 of those 17 are in this set. あさ ひる ばん
 * (lessons 4 and 5), としょかん きょう (lesson 7), なんじ なんぷん なんようび
 * (lesson 6's question words), おととい きのう あした あさって やすみ まいにち
 * (lesson 10's calendar), そちら (chapter 13). **なんじ and なんぷん already
 * having cards is the point, not an accident**: lesson 6 taught how to ask the
 * time three weeks before the course had a way to answer, which is the same joke
 * chapter 13 made with いくら. Their Arabic is reused verbatim so a word met
 * twice is not met as two different Arabic words.
 *
 * そちら IS THE ONE DELIBERATE DISAGREEMENT, and it is a real sense difference
 * rather than drift. Chapter 13 glossed it "that way — polite そこ" (مِنْ هُنَاكَ)
 * and its note already promised this row: *"Also means you / your side in
 * letters and on the phone."* Here the sheet glosses it "your place", so the
 * card carries عِنْدَكُمْ and the lesson says the two cards are one word doing two
 * jobs.
 *
 * Readings and commonness checked against JMdict through
 * <https://jisho.org/api/v1/search/words> on 2026-08-13. Everything here is
 * tagged common EXCEPT なんようび and なんばん, which are built compounds with no
 * listed entry — **in by syllabus, not by frequency**, the same finding chapter
 * 13 recorded for なんがい. One ambiguity worth teaching:
 *
 *   あした is 明日 "tomorrow" — and あした is ALSO a listed reading of 朝, which
 *   this same sheet teaches as あさ, four rows away. Two of the chapter's own
 *   words are homographs of each other's readings.
 *
 * THE ARABIC HERE FINDS A THREE-WAY AGREEMENT rather than a contrast, which is
 * new. 午前 and 午後 are 午 "noon" with 前 "before" and 後 "after"; Arabic builds
 * قَبْلَ الظُّهْرِ and بَعْدَ الظُّهْرِ from ظُهْر, the very word this chapter teaches for
 * ひる; and English's own a.m./p.m. is Latin *ante/post meridiem*, midday again.
 * All three languages say "before noon" and "after noon" — the first time in
 * this course that Japanese, Arabic and English have agreed on a construction.
 * Chapter 13 found the opposite (まん, where Arabic sided with English against
 * Japanese); both are worth saying out loud.
 *
 * The mirror image is in the days: おととい and あさって are single words, where
 * Arabic builds أَوَّلَ أَمْسِ and بَعْدَ غَدٍ and English builds phrases too. Each
 * language keeps single words for a different handful of things.
 *
 * Verbs are glossed with the Arabic present tense, third person masculine
 * singular — the form that answers "what does this word mean" for a reader who
 * already reads Arabic and is acquiring its vocabulary.
 *
 * Arabic is Modern Standard with full harakat, and every gloss is a distinct
 * string, because `vocab-drill.js` grades the かな → العربية direction by
 * comparing the Arabic text.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB14 = {
  cats: [
    { id: "ugoki",     jp: "うごき",     r: "ugoki",     en: "Six things a day is made of" },
    { id: "basho",     jp: "ばしょ",     r: "basho",     en: "Places you go between them" },
    { id: "tokei",     jp: "とけい",     r: "tokei",     en: "Reading the clock" },
    { id: "ichinichi", jp: "いちにち",   r: "ichinichi", en: "Halves of the day" },
    { id: "hi",        jp: "ひ",         r: "hi",        en: "Five days, and two parts of them" },
    { id: "yasumi",    jp: "やすみ",     r: "yasumi",    en: "Rest, and what you do every day" },
    { id: "denwa",     jp: "でんわ",     r: "denwa",     en: "Asking which, and joining things" },
    { id: "machi",     jp: "まち",       r: "machi",     en: "Five cities you might ring" },
  ],

  words: [
    /* ---------- うごき · the six verbs ---------- */
    { c: "ugoki", k: "おきます", r: "okimasu", e: "get up, wake up", a: "يَسْتَيْقِظُ", at: "yastayqiẓu",
      n: "起きます. **The sheet marks this I; it is II** — 起きる is an ichidan verb, the same class as the next row's 寝る. Learn the whole ます shape as one block; the group number is what you would need to build the other forms, and those are not in this course yet." },
    { c: "ugoki", k: "ねます", r: "nemasu", e: "sleep, go to bed", a: "يَنَامُ", at: "yanāmu",
      n: "寝ます, marked II and correctly. Two kana before the ます, which is as short as a Japanese verb gets." },
    { c: "ugoki", k: "はたらきます", r: "hatarakimasu", e: "work", a: "يَعْمَلُ", at: "yaʿmalu",
      n: "働きます. The character 働 is 人 beside 動 “move” — a person moving. It is one of the few kanji Japan invented rather than borrowed." },
    { c: "ugoki", k: "やすみます", r: "yasumimasu", e: "take a rest, take a day off", a: "يَسْتَرِيحُ", at: "yastarīḥu",
      n: "休みます, and the noun やすみ is four rows further down the same sheet. 休 is a person 人 against a tree 木." },
    { c: "ugoki", k: "べんきょうします", r: "benkyō shimasu", e: "study", a: "يَدْرُسُ", at: "yadrusu",
      n: "勉強します — the noun べんきょう plus します. Marked III, which is the group with exactly two members in the whole language: します and きます." },
    { c: "ugoki", k: "おわります", r: "owarimasu", e: "finish, come to an end", a: "يَنْتَهِي", at: "yantahī",
      n: "終わります. Lesson 1's classroom phrase おわりましたか is this verb already — you have been answering it since day one without knowing its ます form." },

    /* ---------- ばしょ · places ---------- */
    { c: "basho", k: "デパート", r: "depāto", e: "department store", a: "مَتْجَرٌ كَبِيرٌ", at: "matjar kabīr",
      n: "Clipped from English “department”, and the store chapter 13 walked you through. Japanese shortens long loanwords rather than carrying them whole." },
    { c: "basho", k: "ぎんこう", r: "ginkō", e: "bank", a: "مَصْرِف", at: "maṣrif",
      n: "銀行 — “silver” + “go”. Reading 1 met ぎんこういん, a bank employee, built from this word and chapter 11's 〜いん." },
    { c: "basho", k: "ゆうびんきょく", r: "yūbinkyoku", e: "post office", a: "مَكْتَبُ الْبَرِيدِ", at: "maktab al-barīd",
      n: "郵便局 — “post” + “convenience” + “bureau”. Six beats with two long vowels; ゆう and きょく both carry one." },
    { c: "basho", k: "としょかん", r: "toshokan", e: "library", a: "مَكْتَبَةٌ", at: "maktaba",
      n: "図書館 — “drawings and books hall”. Lesson 7 gave you this as a yōon word; here it is a place you actually go. The 館 “hall” ending returns in the next row." },
    { c: "basho", k: "びじゅつかん", r: "bijutsukan", e: "art museum, gallery", a: "مَتْحَفُ الْفُنُونِ", at: "matḥaf al-funūn",
      n: "美術館 — 美術 “fine art” plus the same 館 as としょかん. Two of this page's five places are named by what is kept in the hall." },

    /* ---------- とけい · the clock ---------- */
    { c: "tokei", k: "いま", r: "ima", e: "now", a: "اَلْآنَ", at: "al-āna",
      n: "今. The same character opens きょう 今日 and こんばん 今晩 further down — “this day”, “this evening”. 今 is the course's first kanji to mean *the current one*." },
    { c: "tokei", k: "じ", r: "ji", e: "~ o'clock", a: "سَاعَة", at: "sāʿa",
      n: "〜時, and the counter is regular: いちじ, にじ, さんじ, all the way up with no sound changes at all. After 〜階 and 〜円 that is a relief, and it is why the minutes get a whole section instead." },
    { c: "tokei", k: "ふん", r: "fun", e: "~ minute", a: "دَقِيقَة", at: "daqīqa",
      n: "〜分, and the sheet writes 〜ふん（〜ぷん） — that bracket is the entire sound change, compressed, exactly as 〜かい（〜がい） was in chapter 13. Six of the first ten numbers turn ふ into ぷ." },
    { c: "tokei", k: "はん", r: "han", e: "half past", a: "نِصْف", at: "niṣf",
      n: "半. It goes where the minutes go and replaces them: にじはん, half past two. Never にじさんじゅっぷん unless you are reading a timetable aloud." },
    { c: "tokei", k: "なんじ", r: "nanji", e: "what time?", a: "كَمِ السَّاعَةُ", at: "kami s-sāʿatu",
      n: "何時 — lesson 6's word, back because the course finally has the answers. Note 何時 is also read いつ, “when”, and that reading is the commoner of the two in JMdict." },
    { c: "tokei", k: "なんぷん", r: "nanpun", e: "how many minutes?", a: "كَمْ دَقِيقَةً", at: "kam daqīqatan",
      n: "**The sheet prints なんぶん**, with a tenten. It is なんぷん, with a maru — the sheet's own 〜ぷん row says so, and lesson 6 gave you this card already. なにぶん *is* a word, meaning “anyway”, so the wrong mark is not a near-miss." },

    /* ---------- いちにち · halves of the day ---------- */
    { c: "ichinichi", k: "ごぜん", r: "gozen", e: "a.m., before noon", a: "قَبْلَ الظُّهْرِ", at: "qabla ẓ-ẓuhr",
      n: "午前 — 午 “noon” + 前 “before”. Arabic says قَبْلَ الظُّهْرِ, *before the noon*, from the same ظُهْر this chapter teaches for ひる; English's a.m. is Latin for it too. Three languages, one construction." },
    { c: "ichinichi", k: "ごご", r: "gogo", e: "p.m., afternoon", a: "بَعْدَ الظُّهْرِ", at: "baʿda ẓ-ẓuhr",
      n: "午後 — the same 午 with 後 “after”. Lesson 5 taught this word; now you can see it is built rather than learned. It goes *before* the hour: ごご さんじ." },
    { c: "ichinichi", k: "あさ", r: "asa", e: "morning", a: "صَبَاحٌ", at: "ṣabāḥ",
      n: "朝, from lesson 4. **朝 also has the reading あした**, which is this sheet's word for *tomorrow* four rows down — written 明日. Same sound, two characters, two meanings." },
    { c: "ichinichi", k: "ひる", r: "hiru", e: "daytime, noon", a: "ظُهْرٌ", at: "ẓuhr",
      n: "昼, from lesson 4. It is the 午 of 午前 and 午後 said in native Japanese instead of borrowed Chinese, and it returns below inside ひるやすみ." },
    { c: "ichinichi", k: "ばん", r: "ban", e: "evening, night", a: "مَسَاءٌ", at: "masāʾ",
      n: "晩, and the sheet brackets よる 夜 beside it. They are not interchangeable: ばん is the evening as a *stretch you do things in* — こんばん, まいばん — where よる is the dark itself. Lesson 4 gave you よる; this is the other one." },

    /* ---------- ひ · the five days ---------- */
    { c: "hi", k: "おととい", r: "ototoi", e: "the day before yesterday", a: "أَوَّلَ أَمْسِ", at: "awwala ams",
      n: "一昨日 — “one, previous, day”. Japanese has one word for this; Arabic builds أَوَّلَ أَمْسِ and English builds a phrase. From chapter 10." },
    { c: "hi", k: "きのう", r: "kinō", e: "yesterday", a: "أَمْسِ", at: "ams",
      n: "昨日. The 昨 is the same “previous” character sitting inside おととい's 一昨日 — you have known half of that word since chapter 10." },
    { c: "hi", k: "きょう", r: "kyō", e: "today", a: "الْيَوْم", at: "al-yawm",
      n: "今日 — 今 “now” + 日 “day”, and neither character is read the way it is alone. Lessons 7 and 10 both carry this card." },
    { c: "hi", k: "あした", r: "ashita", e: "tomorrow", a: "غَدًا", at: "ghadan",
      n: "明日 — “bright day”. Also read あす and みょうにち, in rising order of formality. And あした is a reading of 朝 as well; see あさ above." },
    { c: "hi", k: "あさって", r: "asatte", e: "the day after tomorrow", a: "بَعْدَ غَدٍ", at: "baʿda ghad",
      n: "明後日 — 明日 with 後 “after” pushed inside it. The small っ is lesson 9's silent beat: あ・さ・っ・て is four beats, not three." },
    { c: "hi", k: "けさ", r: "kesa", e: "this morning", a: "هٰذَا الصَّبَاحَ", at: "hādhā ṣ-ṣabāḥa",
      n: "今朝 — 今 “this” + 朝 “morning”, but read けさ, which is neither character's usual sound. A word you have to take whole." },
    { c: "hi", k: "こんばん", r: "konban", e: "this evening, tonight", a: "هٰذَا الْمَسَاءَ", at: "hādhā l-masāʾa",
      n: "今晩 — the same 今 as けさ, this time behaving itself as こん, plus ばん. Add は and you have こんばんは, the greeting from lesson 1." },

    /* ---------- やすみ · rest and routine ---------- */
    { c: "yasumi", k: "やすみ", r: "yasumi", e: "a rest, a holiday, a day off", a: "عُطْلَة", at: "ʿuṭla",
      n: "休み — the verb やすみます with its ます taken off. That is the commonest way Japanese makes a noun from a verb, and this sheet gives you both halves in one page." },
    { c: "yasumi", k: "ひるやすみ", r: "hiruyasumi", e: "lunch break", a: "اِسْتِرَاحَةُ الْغَدَاءِ", at: "istirāḥat al-ghadāʾ",
      n: "昼休み — ひる “midday” + やすみ “rest”, both on this page. A compound you can now build rather than memorise." },
    { c: "yasumi", k: "まいあさ", r: "maiasa", e: "every morning", a: "كُلَّ صَبَاحٍ", at: "kulla ṣabāḥin",
      n: "毎朝. 毎 “every” takes whatever time word follows it, and this sheet gives three of them in a row." },
    { c: "yasumi", k: "まいばん", r: "maiban", e: "every night", a: "كُلَّ مَسَاءٍ", at: "kulla masāʾin",
      n: "毎晩 — and it is built on ばん rather than よる, which is the clearest evidence that ばん is the one that means a *part of the day*." },
    { c: "yasumi", k: "まいにち", r: "mainichi", e: "every day", a: "كُلَّ يَوْمٍ", at: "kulla yawm",
      n: "毎日, from chapter 10. The 日 is にち here and ひ elsewhere — the same character chapter 10 taught you to read three ways." },

    /* ---------- でんわ · asking which, and joining ---------- */
    { c: "denwa", k: "なんようび", r: "nan'yōbi", e: "what day of the week?", a: "أَيُّ يَوْمٍ", at: "ayyu yawmin",
      n: "何曜日, from lesson 6. **The sheet skips the seven weekday words the textbook lists here** — chapter 10 already taught them, so only the question is left to add." },
    { c: "denwa", k: "ばんごう", r: "bangō", e: "number", a: "رَقَم", at: "raqam",
      n: "番号 — a number in the sense of a label you are assigned: a phone number, a room number. Not a quantity; that was chapter 13's job." },
    { c: "denwa", k: "なんばん", r: "nanban", e: "what number?", a: "أَيُّ رَقَمٍ", at: "ayyu raqamin",
      n: "何番. Lesson 6's なん again, with a fifth thing attached to it. Like なんようび it has no JMdict entry of its own — it is built, not listed." },
    { c: "denwa", k: "から", r: "kara", e: "from ~", a: "مِنْ", at: "min",
      n: "The particle chapter 11 met inside 〜から きました, now doing its plain job: くじから, from nine. It goes *after* what it marks, where Arabic مِنْ goes before." },
    { c: "denwa", k: "まで", r: "made", e: "up to ~, until ~", a: "إِلَى", at: "ilā",
      n: "The seventh particle in the course. It pairs with から and almost never appears without it: くじから ごじまで." },
    { c: "denwa", k: "と", r: "to", e: "and — joining two nouns", a: "وَ", at: "wa",
      n: "Joins nouns and only nouns. It cannot join two sentences, which は and が do differently — so it is narrower than Arabic وَ and much narrower than English *and*." },
    { c: "denwa", k: "そちら", r: "sochira", e: "your place, your end", a: "عِنْدَكُمْ", at: "ʿindakum",
      n: "Chapter 13 taught this as “that way — polite そこ”, and its note promised this: pointing at a *direction* instead of at a person is how you say “you” politely. On the phone that direction is where the other person is sitting." },

    /* ---------- まち · five cities ---------- */
    { c: "machi", k: "ニューヨーク", r: "Nyūyōku", e: "New York", a: "نِيُويُورْك", at: "Niyūyūrk",
      n: "Five beats: ニュー・ヨー・ク, with two long vowels. Japanese also has a kanji spelling, 紐育, from the days before katakana did this job." },
    { c: "machi", k: "ペキン", r: "Pekin", e: "Beijing", a: "بِكِّين", at: "Bikkīn",
      n: "北京, and this is the odd one out: Japanese reads those characters neither the Japanese way (ほっきょう) nor quite the Mandarin way, but as ペキン, an older southern pronunciation that reached Europe too — which is why English said *Peking*." },
    { c: "machi", k: "ロンドン", r: "Rondon", e: "London", a: "لَنْدَن", at: "Landan",
      n: "Both n sounds are ん, so the word is four beats: ロ・ン・ド・ン. Kanji spelling 倫敦." },
    { c: "machi", k: "バンコク", r: "Bankoku", e: "Bangkok", a: "بَانْكُوك", at: "Bānkūk",
      n: "Four beats. Thai's own name for the city is a different word entirely — บางกอก is the old riverside district, not what Thais call the capital." },
    { c: "machi", k: "ロサンゼルス", r: "Rosanzerusu", e: "Los Angeles", a: "لُوس أَنْجِلُوس", at: "Lūs Anjilūs",
      n: "Six beats, and the ゼ is voiced where English says a soft *g*. Often clipped to ロス in speech, the same shortening デパート went through." },
  ],
};
