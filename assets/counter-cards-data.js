/* counter-cards-data.js — the 35 counter readings that are NOT regular, as cards.
 *
 * `window.VOCABC`, in the same shape as every `vocab*-data.js` set, so the
 * practice deck reads it through `flashcard-sets.js` with no special case.
 *
 * WHY ONLY 35 OF THE 80. `reference/counters.html` lists every reading from 1 to
 * 10 for eight counters. Forty-five of those are the number word joined to the
 * counter and nothing else — にさい, ろくじ, ごえん — and drilling them teaches
 * nothing a learner does not already have. **The exceptions are the whole
 * problem**, so the deck gets exactly the exceptions: every cell the sheet flags
 * with っ, ぷ, が or ✱.
 *
 * That is also the honest division of labour between the two pages. The sheet
 * teaches the RULE, which is derivable and should be understood rather than
 * memorised. The deck drills what the rule cannot predict.
 *
 * THIS FILE AND `counter-data.js` MUST NOT DRIFT, and nothing prevents that
 * except `scripts/check_counters.py`, which checks both directions: every kana
 * here is a tagged reading over there, and every tagged reading over there has a
 * card here. Deliberately a checked copy rather than a runtime derivation —
 * `check_one_day.py` establishes the pattern, and a builder would put the
 * glosses somewhere anyway.
 *
 * FIFTEEN OF THE 35 ARE ALREADY CARDS ELSEWHERE — thirteen in VOCAB10 (the
 * three irregular months and all ten native day-readings) and, from 2026-08-17,
 * ひとり and ふたり in VOCAB15. They are kept here so the set's premise ("every
 * reading that changes") stays true, and their **English and Arabic are copied
 * verbatim from the chapter that owns them** so a learner meeting ついたち in two
 * places never meets two glosses for it. `check_counters.py` asserts the copies
 * against both sets. The deck's dedupe drops them and deals the chapter's
 * copies, which is exactly what dedupe is for: **this set adds 20 cards to the
 * deck, not 35.**
 *
 * THE ARABIC IS A SECOND EXERCISE HERE, not a gloss. Japanese counters and
 * Arabic number agreement are the same kind of difficulty in different clothes —
 * Arabic changes the *noun* to suit the number where Japanese changes the
 * *counter's sound*. So 一分 is دَقِيقَةٌ وَاحِدَة (singular + agreeing adjective),
 * 三分 is ثَلَاثُ دَقَائِقَ (the 3–10 plural), and 四円 is أَرْبَعَةُ يِنَّاتٍ. Reading
 * down the ふん group is a tour of the Arabic rule as well as the Japanese one.
 *
 * Readings verified with `counter-data.js` against
 * <https://en.wikipedia.org/wiki/Japanese_counter_word>, 2026-08-14.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n note — which rule fired, and why it matters
 */

window.VOCABC = {
  cats: [
    { id: "gatsu", jp: "〜がつ", r: "~gatsu", en: "Months — a different number word" },
    { id: "nichi", jp: "〜にち", r: "~nichi", en: "Days — a native numeral series" },
    { id: "sai",   jp: "〜さい", r: "~sai",   en: "Age — gemination, with one refusal" },
    { id: "kai",   jp: "〜かい", r: "~kai",   en: "Floors — gemination, and the one voicing" },
    { id: "en",    jp: "〜えん", r: "~en",    en: "Yen — the only irregular cell it has" },
    { id: "ji",    jp: "〜じ",   r: "~ji",    en: "Hours — three different number words" },
    { id: "fun",   jp: "〜ふん", r: "~fun",   en: "Minutes — the busiest counter in the course" },
    { id: "nin",   jp: "〜にん", r: "~nin",   en: "People — where the old series still shows" },
  ],

  words: [
    /* ---------- 〜がつ · the three that swap the number word ---------- */
    { c: "gatsu", k: "しがつ", r: "shigatsu", e: "April", a: "أَبْرِيل", at: "Abrīl",
      n: "四月 takes し, not よん — and it is not optional: よんがつ is not a word. A different number word, not a sound change." },
    { c: "gatsu", k: "しちがつ", r: "shichigatsu", e: "July", a: "يُولِيُو", at: "Yūliyū",
      n: "七月 takes しち, not なな. The same しち turns up in しちじ, seven o'clock — the two counters that swap number words swap the same three." },
    { c: "gatsu", k: "くがつ", r: "kugatsu", e: "September", a: "سِبْتَمْبَر", at: "Sibtambar",
      n: "九月 takes く, not きゅう. Nothing about が has changed; が is voiced and cannot." },

    /* ---------- 〜にち · a numeral series of its own ---------- */
    { c: "nichi", k: "ついたち", r: "tsuitachi", e: "the 1st of the month", a: "الْأَوَّل مِنَ الشَّهْر", at: "al-awwal min ash-shahr",
      n: "From 月立ち, “the moon rising”. Not built from いち at all, and it does not end in にち — the clearest evidence that days 1–10 are a separate series." },
    { c: "nichi", k: "ふつか", r: "futsuka", e: "the 2nd of the month", a: "الثَّانِي مِنَ الشَّهْر", at: "ath-thānī min ash-shahr",
      n: "ふた, the native two — the same ふた inside ふたり, two people." },
    { c: "nichi", k: "みっか", r: "mikka", e: "the 3rd of the month", a: "الثَّالِث مِنَ الشَّهْر", at: "ath-thālith min ash-shahr",
      n: "The っ here is native to the word, not gemination caused by a counter. Same shape, different cause — worth keeping straight." },
    { c: "nichi", k: "よっか", r: "yokka", e: "the 4th of the month", a: "الرَّابِع مِنَ الشَّهْر", at: "ar-rābiʿ min ash-shahr",
      n: "And it survives into 14 じゅうよっか and 24 にじゅうよっか, long after the rest have gone regular." },
    { c: "nichi", k: "いつか", r: "itsuka", e: "the 5th of the month", a: "الْخَامِس مِنَ الشَّهْر", at: "al-khāmis min ash-shahr",
      n: "Identical in sound to いつ, “when” — context alone separates them." },
    { c: "nichi", k: "むいか", r: "muika", e: "the 6th of the month", a: "السَّادِس مِنَ الشَّهْر", at: "as-sādis min ash-shahr",
      n: "む is the native six, the same one inside むっつ." },
    { c: "nichi", k: "なのか", r: "nanoka", e: "the 7th of the month", a: "السَّابِع مِنَ الشَّهْر", at: "as-sābiʿ min ash-shahr",
      n: "な is the native seven — and it is the なな of ななふん worn down to one mora." },
    { c: "nichi", k: "ようか", r: "yōka", e: "the 8th of the month", a: "الثَّامِن مِنَ الشَّهْر", at: "ath-thāmin min ash-shahr",
      n: "Three beats, and the pair to watch: ようか eight against よっか four. One long vowel against one small っ." },
    { c: "nichi", k: "ここのか", r: "kokonoka", e: "the 9th of the month", a: "التَّاسِع مِنَ الشَّهْر", at: "at-tāsiʿ min ash-shahr",
      n: "Four beats, the longest of the ten." },
    { c: "nichi", k: "とおか", r: "tōka", e: "the 10th of the month", a: "الْعَاشِر مِنَ الشَّهْر", at: "al-ʿāshir min ash-shahr",
      n: "The last of the native series. From 11 the days go regular — じゅういちにち — until 14, 20 and 24 pull pieces of it back." },

    /* ---------- 〜さい · gemination, and the one that refuses ---------- */
    { c: "sai", k: "いっさい", r: "issai", e: "one year old", a: "سَنَةٌ وَاحِدَة", at: "sana wāḥida",
      n: "いち collapses to いっ before さ. Arabic agrees the adjective instead: واحدة is feminine to match سنة." },
    { c: "sai", k: "はっさい", r: "hassai", e: "eight years old", a: "ثَمَانِي سَنَوَاتٍ", at: "thamānī sanawāt",
      n: "はち → はっ, the same collapse. **Note what is missing from this group: ろくさい, not ろっさい** — six declines to geminate before さ, and it is the only such cell in the whole sheet." },
    { c: "sai", k: "じゅっさい", r: "jussai", e: "ten years old", a: "عَشْرُ سَنَوَاتٍ", at: "ʿashr sanawāt",
      n: "じゅう → じゅっ. Also heard as じっさい, which is the older form — じゅっ has the younger speakers. Twenty is neither: it is はたち, a word rather than a reading." },

    /* ---------- 〜かい · gemination plus the one voicing ---------- */
    { c: "kai", k: "いっかい", r: "ikkai", e: "the 1st floor", a: "الطَّابِقُ الْأَوَّل", at: "aṭ-ṭābiq al-awwal",
      n: "いち → いっ before か. Unlike 〜さい, this counter geminates at all four of 1, 6, 8 and 10." },
    { c: "kai", k: "さんがい", r: "sangai", e: "the 3rd floor", a: "الطَّابِقُ الثَّالِث", at: "aṭ-ṭābiq ath-thālith",
      n: "**The only voicing in the course**: か → が after さん. さんかい is also accepted, but なんがい is the standard question — and the question word is the evidence the voicing is real." },
    { c: "kai", k: "ろっかい", r: "rokkai", e: "the 6th floor", a: "الطَّابِقُ السَّادِس", at: "aṭ-ṭābiq as-sādis",
      n: "ろく → ろっ before か. Compare ろくさい, where the same six leaves さ alone — the consonant that follows decides it." },
    { c: "kai", k: "はっかい", r: "hakkai", e: "the 8th floor", a: "الطَّابِقُ الثَّامِن", at: "aṭ-ṭābiq ath-thāmin",
      n: "はち → はっ. Depending on the building this is also where the lift stops calling it 8 — some hotels skip 4 and 9 entirely." },
    { c: "kai", k: "じゅっかい", r: "jukkai", e: "the 10th floor", a: "الطَّابِقُ الْعَاشِر", at: "aṭ-ṭābiq al-ʿāshir",
      n: "じゅう → じゅっ, or じっかい in older speech. The basement below it all is ちか, from chapter 13." },

    /* ---------- 〜えん · one cell, and it is not a sound change ---------- */
    { c: "en", k: "よえん", r: "yoen", e: "four yen", a: "أَرْبَعَةُ يِنَّاتٍ", at: "arbaʿat yinnāt",
      n: "The only irregular cell 〜えん has, and it is a number word rather than a sound: よ, not よん. **えん begins with a vowel, so no sound change is even possible** — there is nothing to double against and nothing to harden." },

    /* ---------- 〜じ · three number words, no sound changes ---------- */
    { c: "ji", k: "よじ", r: "yoji", e: "four o'clock", a: "السَّاعَةُ الرَّابِعَة", at: "as-sāʿa ar-rābiʿa",
      n: "よ, not よん — and obligatory. Arabic uses an ordinal for the hour, “the fourth hour”, where Japanese just counts." },
    { c: "ji", k: "しちじ", r: "shichiji", e: "seven o'clock", a: "السَّاعَةُ السَّابِعَة", at: "as-sāʿa as-sābiʿa",
      n: "しち, not なな. Announcements sometimes say ななじ to avoid confusion with いちじ over a bad speaker — but the clock word is しちじ." },
    { c: "ji", k: "くじ", r: "kuji", e: "nine o'clock", a: "السَّاعَةُ التَّاسِعَة", at: "as-sāʿa at-tāsiʿa",
      n: "く, not きゅう. Two morae for a whole hour — the shortest time word in the language, and the one every station announcement leans on." },

    /* ---------- 〜ふん · six of ten, and two things at once ---------- */
    { c: "fun", k: "いっぷん", r: "ippun", e: "one minute", a: "دَقِيقَةٌ وَاحِدَة", at: "daqīqa wāḥida",
      n: "Both changes at once: いち → いっ, and ふ → ぷ after the っ. Four of this group's six do both." },
    { c: "fun", k: "さんぷん", r: "sanpun", e: "three minutes", a: "ثَلَاثُ دَقَائِقَ", at: "thalāth daqāʾiq",
      n: "Hardening with no gemination — ふ → ぷ happens after ん as well as after っ. Arabic switches to its 3–10 plural here, دقائق, which is the same “small numbers behave differently” instinct." },
    { c: "fun", k: "よんぷん", r: "yonpun", e: "four minutes", a: "أَرْبَعُ دَقَائِقَ", at: "arbaʿ daqāʾiq",
      n: "よん keeps its ん and so hardens the ふ — and note this counter takes よん where 〜じ takes よ. The two are on the same clock and disagree." },
    { c: "fun", k: "ろっぷん", r: "roppun", e: "six minutes", a: "سِتُّ دَقَائِقَ", at: "sitt daqāʾiq",
      n: "ろく → ろっ, then ふ → ぷ. Six geminates here and in ろっかい, but not in ろくさい." },
    { c: "fun", k: "はっぷん", r: "happun", e: "eight minutes", a: "ثَمَانِي دَقَائِقَ", at: "thamānī daqāʾiq",
      n: "Both changes again. はちふん is also heard and is not wrong, which makes this the loosest cell on the sheet." },
    { c: "fun", k: "じゅっぷん", r: "juppun", e: "ten minutes", a: "عَشْرُ دَقَائِقَ", at: "ʿashr daqāʾiq",
      n: "Both changes, and the alternative じっぷん. Ten minutes is the unit Japanese timetables actually think in — じゅっぷんごとに, every ten minutes." },

    /* ---------- 〜にん · no sound change at all, and four old words ---------- */
    /* The only group here whose irregulars are ALL of the `n`/`x` kind. That is
       the sheet's own thesis holding: に is a nasal, so nothing can geminate or
       harden against it, and everything odd about this counter is vocabulary
       left over from the older series rather than phonetics. ひとり and ふたり
       repeat VOCAB15's cards and their glosses are copied from it verbatim,
       exactly as the thirteen VOCAB10 readings above are. */
    { c: "nin", k: "ひとり", r: "hitori", e: "one person", a: "شَخْصٌ وَاحِدٌ", at: "shakhṣun wāḥid",
      n: "一人 — native ひと with an old counter り, not 〜にん. It also means *alone*: ひとりで, by oneself." },
    { c: "nin", k: "ふたり", r: "futari", e: "two people", a: "شَخْصَانِ", at: "shakhṣāni",
      n: "二人, the same り. These two are the last survivors of the native series inside a counter — from three onward it is にん and nothing else." },
    { c: "nin", k: "よにん", r: "yonin", e: "four people", a: "أَرْبَعَةُ أَشْخَاصٍ", at: "arbaʿatu ashkhāṣ",
      n: "よ, not よん — the same short reading 〜じ takes at four o'clock, and the opposite of what 〜ふん and 〜かい do. Four is the number this course has now seen said three different ways." },
    { c: "nin", k: "しちにん", r: "shichinin", e: "seven people", a: "سَبْعَةُ أَشْخَاصٍ", at: "sabʿatu ashkhāṣ",
      n: "しち, not なな — the reading that survives in 七月 and 七時. ななにん is heard and understood; 黒澤's 七人の侍 is しちにん." },
  ],
};
