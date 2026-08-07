/* vocab10-data.js — 53 calendar words, in six groups.
 *
 * The single source of truth for lesson 10, exactly as `vocab-data.js` is for
 * lesson 4 and `vocab7-data.js` for lesson 7: `vocab-list.js` renders the cards,
 * `vocab-drill.js` builds its questions, and reference/calendar.html prints it.
 * Edit here, nowhere else. Do not merge the sets — each lesson's premise is
 * different and one shared array would break all of them.
 *
 * Word rule for chapter 10: **every character already taught.** After lesson 9
 * that is both scripts entire, including っ and ゃゅょ, so for the first time in
 * the course the rule bars nothing — あさって and いっしゅうかん are writable here
 * and were not writable in chapter 7. There is no two-kana ceiling and no
 * marked-kana requirement; the set is defined by meaning alone.
 *
 * Readings and commonness checked against JMdict through
 * <https://jisho.org/api/v1/search/words> on 2026-08-05. Every entry below is
 * tagged common except なんようび and なんがつ, which are lesson 6's and are in
 * scope by syllabus rather than by frequency (same call NOTES.md records there).
 *
 * The check earned its keep twice, and both catches are teaching points rather
 * than near-misses:
 *
 *   一月 as an exact lookup returns **ひとつき, "one month"** — not いちがつ.
 *   一日 as an exact lookup returns **いちにち, "one day"** — not ついたち.
 *
 * Both readings exist and both are common; the kanji does not choose between
 * them and context does. That is the same point-against-span distinction
 * chapter 6 built its best trick on (なんじ against なんじかん), arriving in the
 * calendar. It is taught in the lesson, not hidden here.
 *
 * Arabic is Modern Standard with full harakat, and every gloss is a distinct
 * string, because `vocab-drill.js` grades the かな → العربية direction by
 * comparing the Arabic text. The day names are confirmed against en.wiktionary's
 * أَيَّامُ الْأُسْبُوع table; the month names are the set used in Egypt, Sudan,
 * Yemen and the Gulf, which en.wikipedia describes as the one "widely regarded
 * as standard across the Arab world". The Levantine/Aramaic set (كانون الثاني،
 * شباط، آذار …) is equally Modern Standard and is given in the lesson and on the
 * reference sheet rather than here, because a word set may hold only one gloss
 * per card.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB10 = {
  cats: [
    { id: "youbi",  jp: "ようび",   r: "yōbi",     en: "The seven days" },
    { id: "gatsu",  jp: "つき",     r: "tsuki",    en: "The twelve months" },
    { id: "hizuke", jp: "ひづけ",   r: "hizuke",   en: "Days of the month" },
    { id: "kyou",   jp: "きょう",   r: "kyō",      en: "Today, tomorrow, yesterday" },
    { id: "kon",    jp: "こんげつ", r: "kongetsu", en: "This one, last one, next one" },
    { id: "koyomi", jp: "こよみ",   r: "koyomi",   en: "Words for the calendar itself" },
  ],

  words: [
    /* ---------- ようび · the seven days ---------- */
    { c: "youbi", k: "にちようび", r: "nichiyōbi", e: "Sunday", a: "الْأَحَد", at: "al-aḥad",
      n: "日曜日. The sun's day — and الأحد is “the first”, so both languages agree this is where the week starts." },
    { c: "youbi", k: "げつようび", r: "getsuyōbi", e: "Monday", a: "الْاِثْنَيْن", at: "al-ithnayn",
      n: "月曜日. The moon's day. げつ is the same 月 that ends every month name — but read げつ here and がつ there." },
    { c: "youbi", k: "かようび", r: "kayōbi", e: "Tuesday", a: "الثُّلَاثَاء", at: "ath-thulāthāʾ",
      n: "火曜日, fire — because Mars is 火星 かせい, the fire star. Learn the planet and the day comes free." },
    { c: "youbi", k: "すいようび", r: "suiyōbi", e: "Wednesday", a: "الْأَرْبِعَاء", at: "al-arbiʿāʾ",
      n: "水曜日, water, from 水星 すいせい — Mercury. The character is みず when it stands alone." },
    { c: "youbi", k: "もくようび", r: "mokuyōbi", e: "Thursday", a: "الْخَمِيس", at: "al-khamīs",
      n: "木曜日, wood, from 木星 もくせい — Jupiter. Alone the character is き, a tree." },
    { c: "youbi", k: "きんようび", r: "kin'yōbi", e: "Friday", a: "الْجُمُعَة", at: "al-jumuʿa",
      n: "金曜日, metal, from 金星 きんせい — Venus. The apostrophe marks ん as its own beat: ki-n-yo-o-bi." },
    { c: "youbi", k: "どようび", r: "doyōbi", e: "Saturday", a: "السَّبْت", at: "as-sabt",
      n: "土曜日, earth, from 土星 どせい — Saturn, exactly as English Saturday is Saturn's day." },

    /* ---------- つき · the twelve months ---------- */
    { c: "gatsu", k: "いちがつ", r: "ichigatsu", e: "January", a: "يَنايِر", at: "Yanāyir",
      n: "Number one plus 月. Written 一月 it can also be read ひとつき, “one month” — the kanji does not choose, context does." },
    { c: "gatsu", k: "にがつ", r: "nigatsu", e: "February", a: "فِبْرايِر", at: "Fibrāyir" },
    { c: "gatsu", k: "さんがつ", r: "sangatsu", e: "March", a: "مارِس", at: "Māris" },
    { c: "gatsu", k: "しがつ", r: "shigatsu", e: "April", a: "أَبْرِيل", at: "Abrīl",
      n: "Not よんがつ. The month names came into Japanese from Chinese as one block, before よん existed as a counting word." },
    { c: "gatsu", k: "ごがつ", r: "gogatsu", e: "May", a: "مايُو", at: "Māyū" },
    { c: "gatsu", k: "ろくがつ", r: "rokugatsu", e: "June", a: "يُونِيُو", at: "Yūniyū" },
    { c: "gatsu", k: "しちがつ", r: "shichigatsu", e: "July", a: "يُولِيُو", at: "Yūliyū",
      n: "Not なながつ. Some speakers do say なながつ to keep it clear of いちがつ, but しちがつ is the standard form." },
    { c: "gatsu", k: "はちがつ", r: "hachigatsu", e: "August", a: "أَغُسْطُس", at: "Aghusṭus" },
    { c: "gatsu", k: "くがつ", r: "kugatsu", e: "September", a: "سِبْتَمْبَر", at: "Sibtambar",
      n: "Not きゅうがつ, and unlike July this one has no accepted alternative at all." },
    { c: "gatsu", k: "じゅうがつ", r: "jūgatsu", e: "October", a: "أُكْتُوبَر", at: "Uktūbar" },
    { c: "gatsu", k: "じゅういちがつ", r: "jūichigatsu", e: "November", a: "نُوفَمْبَر", at: "Nūfambar" },
    { c: "gatsu", k: "じゅうにがつ", r: "jūnigatsu", e: "December", a: "دِيسَمْبَر", at: "Dīsambar" },

    /* ---------- ひづけ · days of the month ---------- */
    { c: "hizuke", k: "ついたち", r: "tsuitachi", e: "the 1st of the month", a: "الْأَوَّل مِنَ الشَّهْر", at: "al-awwal min ash-shahr",
      n: "Nothing to do with いち. It is 月立ち つきたち, “the moon rising” — the day the new moon began the old month." },
    { c: "hizuke", k: "ふつか", r: "futsuka", e: "the 2nd of the month", a: "الثَّانِي مِنَ الشَّهْر", at: "ath-thānī min ash-shahr",
      n: "ふつ- is the native two, the same one in ふたつ." },
    { c: "hizuke", k: "みっか", r: "mikka", e: "the 3rd of the month", a: "الثَّالِث مِنَ الشَّهْر", at: "ath-thālith min ash-shahr" },
    { c: "hizuke", k: "よっか", r: "yokka", e: "the 4th of the month", a: "الرَّابِع مِنَ الشَّهْر", at: "ar-rābiʿ min ash-shahr",
      n: "This よっ- survives up the calendar: the 14th is じゅうよっか and the 24th is にじゅうよっか." },
    { c: "hizuke", k: "いつか", r: "itsuka", e: "the 5th of the month", a: "الْخَامِس مِنَ الشَّهْر", at: "al-khāmis min ash-shahr",
      n: "Same sound as lesson 6's いつ “when”, plus か. Written 五日 it is the date; written 何時か it means “someday”." },
    { c: "hizuke", k: "むいか", r: "muika", e: "the 6th of the month", a: "السَّادِس مِنَ الشَّهْر", at: "as-sādis min ash-shahr" },
    { c: "hizuke", k: "なのか", r: "nanoka", e: "the 7th of the month", a: "السَّابِع مِنَ الشَّهْر", at: "as-sābiʿ min ash-shahr" },
    { c: "hizuke", k: "ようか", r: "yōka", e: "the 8th of the month", a: "الثَّامِن مِنَ الشَّهْر", at: "ath-thāmin min ash-shahr",
      n: "The one most often misheard as よっか, the 4th. Both are three beats — よ・っ・か against よ・う・か — so length cannot separate them. The middle beat is silence in one and a held o in the other." },
    { c: "hizuke", k: "ここのか", r: "kokonoka", e: "the 9th of the month", a: "التَّاسِع مِنَ الشَّهْر", at: "at-tāsiʿ min ash-shahr" },
    { c: "hizuke", k: "とおか", r: "tōka", e: "the 10th of the month", a: "الْعَاشِر مِنَ الشَّهْر", at: "al-ʿāshir min ash-shahr" },
    { c: "hizuke", k: "はつか", r: "hatsuka", e: "the 20th of the month", a: "الْعِشْرُونَ مِنَ الشَّهْر", at: "al-ʿishrūn min ash-shahr",
      n: "The last survivor of an old word はた, twenty — the same one hiding in はたち, “twenty years old”." },

    /* ---------- きょう · today, tomorrow, yesterday ---------- */
    { c: "kyou", k: "きょう", r: "kyō", e: "today", a: "الْيَوْم", at: "al-yawm",
      n: "A lesson 7 word, back where it belongs. Two beats: kyo-o." },
    { c: "kyou", k: "あした", r: "ashita", e: "tomorrow", a: "غَدًا", at: "ghadan",
      n: "The same 明日 is also read あす and みょうにち, both common — あす is a touch more formal, みょうにち more formal still." },
    { c: "kyou", k: "きのう", r: "kinō", e: "yesterday", a: "أَمْسِ", at: "ams" },
    { c: "kyou", k: "あさって", r: "asatte", e: "the day after tomorrow", a: "بَعْدَ غَدٍ", at: "baʿda ghad",
      n: "Needs the small っ, so this word was unwritable in this course until lesson 9." },
    { c: "kyou", k: "おととい", r: "ototoi", e: "the day before yesterday", a: "أَوَّلَ أَمْسِ", at: "awwala ams" },
    { c: "kyou", k: "まいにち", r: "mainichi", e: "every day", a: "كُلَّ يَوْمٍ", at: "kulla yawm" },
    { c: "kyou", k: "まいしゅう", r: "maishū", e: "every week", a: "كُلَّ أُسْبُوعٍ", at: "kulla usbūʿ",
      n: "まい- is “every”, and it attaches to all three: まいにち, まいしゅう, まいつき." },

    /* ---------- こんげつ · this one, last one, next one ---------- */
    { c: "kon", k: "こんしゅう", r: "konshū", e: "this week", a: "هٰذَا الْأُسْبُوع", at: "hādhā al-usbūʿ" },
    { c: "kon", k: "せんしゅう", r: "senshū", e: "last week", a: "الْأُسْبُوعُ الْمَاضِي", at: "al-usbūʿ al-māḍī" },
    { c: "kon", k: "らいしゅう", r: "raishū", e: "next week", a: "الْأُسْبُوعُ الْقَادِم", at: "al-usbūʿ al-qādim" },
    { c: "kon", k: "こんげつ", r: "kongetsu", e: "this month", a: "هٰذَا الشَّهْر", at: "hādhā ash-shahr" },
    { c: "kon", k: "せんげつ", r: "sengetsu", e: "last month", a: "الشَّهْرُ الْمَاضِي", at: "ash-shahr al-māḍī" },
    { c: "kon", k: "らいげつ", r: "raigetsu", e: "next month", a: "الشَّهْرُ الْقَادِم", at: "ash-shahr al-qādim" },
    { c: "kon", k: "ことし", r: "kotoshi", e: "this year", a: "هٰذِهِ السَّنَة", at: "hādhihi as-sana",
      n: "Breaks the pattern: not こんねん. The year keeps an older native word." },
    { c: "kon", k: "きょねん", r: "kyonen", e: "last year", a: "السَّنَةُ الْمَاضِيَة", at: "as-sana al-māḍiya",
      n: "Breaks it again: not せんねん. Only らいねん behaves." },
    { c: "kon", k: "らいねん", r: "rainen", e: "next year", a: "السَّنَةُ الْقَادِمَة", at: "as-sana al-qādima" },

    /* ---------- こよみ · words for the calendar itself ---------- */
    { c: "koyomi", k: "ようび", r: "yōbi", e: "day of the week", a: "يَوْمُ الْأُسْبُوع", at: "yawm al-usbūʿ",
      n: "The ending every weekday shares. 曜 is the luminary, 日 is the day." },
    { c: "koyomi", k: "しゅうまつ", r: "shūmatsu", e: "the weekend", a: "نِهَايَةُ الْأُسْبُوع", at: "nihāyat al-usbūʿ",
      n: "週 week + 末 end. Which two days that means differs by country — in much of the Arab world it has been Friday and Saturday." },
    { c: "koyomi", k: "へいじつ", r: "heijitsu", e: "a weekday, a working day", a: "يَوْمُ عَمَلٍ", at: "yawm ʿamal" },
    { c: "koyomi", k: "いっしゅうかん", r: "isshūkan", e: "one week, a week long", a: "أُسْبُوعٌ وَاحِد", at: "usbūʿ wāḥid",
      n: "There is lesson 6's かん again, turning a point into a span — 一週 is week one, 一週間 is seven days long." },
    { c: "koyomi", k: "たんじょうび", r: "tanjōbi", e: "birthday", a: "عِيدُ مِيلَادٍ", at: "ʿīd mīlād" },
    { c: "koyomi", k: "やすみ", r: "yasumi", e: "a rest, a day off", a: "عُطْلَة", at: "ʿuṭla" },
    { c: "koyomi", k: "こよみ", r: "koyomi", e: "a calendar, an almanac", a: "تَقْوِيم", at: "taqwīm",
      n: "The old word for the thing this whole chapter is about." },
  ],
};
