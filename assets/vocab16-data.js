/* vocab16-data.js — 32 words for going, coming and the whole fleet, in six groups.
 *
 * The single source of truth for lesson 16, exactly as `vocab14-data.js` is for
 * lesson 14: `vocab-list.js` renders the cards, `vocab-drill.js` builds its
 * questions, `story16-data.js` walks every one of them, and the practice deck
 * reads it through `flashcard-sets.js`. Edit here, nowhere else. Do not merge
 * the sets.
 *
 * The lecture sheet is **Minna no Nihongo I 第5課** verbatim — the first TYPED
 * sheet of the course — cross-checked 2026-08-17 against
 * `raw_lessons_files/shokyuu_1/lessons5.txt` in github.com/clementval/minna.
 * See LIBRARY.md, `lesson 16/1.png` and `2.png`, including the SCAN GAP those
 * two screenshots leave between ついたち and 〜にち.
 *
 * THE SHEET'S 57 ROWS ARE 32 CARDS HERE, AND THAT IS A DECISION — see
 * `learning-records/0019`. Chapter 14's precedent was that every word row joins
 * the chapter's set; this sheet re-lists twenty-four rows the course already
 * owns outright — the nine relative-time words (先週…来年, VOCAB10), the whole
 * day-of-month block ついたち…とおか and はつか (VOCAB10/VOCABC), なんがつ,
 * なんにち and いつ (VOCAB6), 〜がつ and 〜にち (the counter sheet), and
 * たんじょうび (VOCAB10) — with nothing new on any of them, not even a kanji
 * the course has not shown. Re-carding them would gloss the same words twice
 * to no purpose; the lesson revises them as the systems they are and points at
 * their homes. どういたしまして is an utterance and lives in the phrase list.
 *
 * FOUR CARDS ARE DELIBERATE REPEATS — えき and ひと (VOCAB4), でんしゃ and
 * かのじょ (VOCAB7) — because the station scene cannot be walked without its
 * own station and train, and かれ cannot be taught with its pair missing.
 * English and Arabic are copied VERBATIM from the owning sets, which
 * `check_vocab.py`'s cross-set invariant enforces. じゅうよっか and
 * にじゅうよっか are NOT repeats: VOCAB10's よっか card promised them in a note
 * and no set has ever carded them.
 *
 * TWO SLIPS ON THE SHEET, both taught correctly here:
 *
 *   駅 sits in スーパー's row. The kanji column's 駅 belongs to えき, one row
 *   down, whose own cell is empty — the neighbouring-cell class of slip that
 *   day 11's アメリカ/ইউ.কে. row established. スーパー has no kanji; it is a
 *   clipped loanword.
 *
 *   甲子園 is glossed "Name of a town in Osaka". It is in Nishinomiya, Hyōgo
 *   Prefecture, between Osaka and Kobe — near Osaka, not in it. JMdict's two
 *   entries both say Nishinomiya, Hyōgo (checked 2026-08-17).
 *
 * THE VERB MARKERS ARE ALL RIGHT, WHICH IS WORTH A LINE: いきます I, きます III,
 * かえります I — and かえります is the classic trap, a verb that ends in -eru
 * sounds and is godan anyway. The sheet that got おきます wrong (chapter 14)
 * got the hard one right. Verbs stay fixed ます shapes per Farhad's 2026-08-14
 * decision; see `learning-records/0017`.
 *
 * Readings and commonness checked against JMdict through
 * <https://jisho.org/api/v1/search/words> on 2026-08-17. Everything here is
 * tagged common EXCEPT ばんせん (番線 is a listed word but untagged — in by
 * syllabus, as なんばん and なんがい were) and the four proper nouns, which no
 * frequency list decides. What the check FOUND this chapter is that the ます
 * form erases distinctions the kanji keeps: きます is 来ます (group III) and
 * ALSO 着ます "wears" (group II); いきます is 行きます and ALSO 生きます
 * "lives"; ふつう is 普通 "ordinary" and ALSO 不通 "service suspended" — both
 * things a station says; きゅうこう is 急行 "rapid" and ALSO 休講 "lecture
 * cancelled" and 休校 "school closed", all three common. The sixth chapter
 * running in which a short kana string identifies almost nothing, and the
 * strongest case yet for the kanji column.
 *
 * Verbs are glossed with the Arabic present tense, third person masculine
 * singular, per vocab14-data.js.
 *
 * Arabic is Modern Standard with full harakat, and every gloss is a distinct
 * string, because `vocab-drill.js` grades the かな → العربية direction by
 * comparing the Arabic text. The distinctness rule surfaced a real distinction
 * again: ふつう・きゅうこう・とっきゅう could not all be "قِطَار", and the honest
 * way apart — عَادِيّ, سَرِيع, سَرِيعٌ خَاصّ — is exactly the Japanese: 特急 IS
 * 特別 + 急行, "specially rapid", and خَاصّ is that 特.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB16 = {
  cats: [
    { id: "ido",      jp: "いどう",     r: "idō",      en: "Three verbs of motion" },
    { id: "norimono", jp: "のりもの",   r: "norimono", en: "Nine ways to go" },
    { id: "eki",      jp: "えき",       r: "eki",      en: "At the station" },
    { id: "hito",     jp: "ひとびと",   r: "hitobito", en: "Who goes with you" },
    { id: "basho",    jp: "ばしょ",     r: "basho",    en: "Where you are going" },
    { id: "hizuke",   jp: "ひづけ",     r: "hizuke",   en: "Two dates the calendar promised" },
  ],

  words: [
    /* ---------- いどう · the three verbs ---------- */
    { c: "ido", k: "いきます", r: "ikimasu", e: "go", a: "يَذْهَبُ", at: "yadhhabu",
      n: "行きます, marked I and correctly. The movement points **away from the speaker**. Same 行 as ひこうき and きゅうこう on this page, read こう there — one character, two readings, three words." },
    { c: "ido", k: "きます", r: "kimasu", e: "come", a: "يَأْتِي", at: "yaʾtī",
      n: "来ます, group III — the group with exactly two members, します and this. The movement points **toward the speaker**. And きます is also 着ます, *wears*, a group II verb: the ます form erases the difference, the kanji keeps it." },
    { c: "ido", k: "かえります", r: "kaerimasu", e: "go home, return", a: "يَعُودُ إِلَى الْبَيْتِ", at: "yaʿūdu ilā l-bayt",
      n: "帰ります, marked I — and that is the sheet's best marker, because 帰る *sounds* like a group II verb and is not. Not just *return*: return **to your own base** — home, your country, your desk." },

    /* ---------- のりもの · vehicles, and one non-vehicle ---------- */
    { c: "norimono", k: "ひこうき", r: "hikōki", e: "airplane", a: "طَائِرَة", at: "ṭāʾira",
      n: "飛行機 — *fly-go-machine*. The middle character is 行きます's 行, read こう." },
    { c: "norimono", k: "ふね", r: "fune", e: "ship", a: "سَفِينَة", at: "safīna",
      n: "船. A two-kana word that has sat on ふ's kana card since lesson 1, finally glossed." },
    { c: "norimono", k: "でんしゃ", r: "densha", e: "train", a: "قِطَارٌ", at: "qiṭār",
      n: "電車 — *electric car*. The third 車 word in the course: 自動車 moves itself, 自転車 turns itself, 電車 runs on electricity." },
    { c: "norimono", k: "ちかてつ", r: "chikatetsu", e: "subway, underground", a: "مِتْرُو الْأَنْفَاق", at: "mitrū l-anfāq",
      n: "地下鉄 — 地下, the *basement* of the department-store chapter, plus 鉄, *iron*: the underground iron road, clipped from 地下鉄道." },
    { c: "norimono", k: "しんかんせん", r: "shinkansen", e: "the Shinkansen, the bullet train", a: "قِطَارُ الشِّينْكَانْسِين", at: "qiṭār ash-shīnkānsīn",
      n: "新幹線 — *new trunk line*. The 新 of しんおおさか, which is where its western half starts; the 線 returns in ばんせん below." },
    { c: "norimono", k: "バス", r: "basu", e: "bus", a: "حَافِلَة", at: "ḥāfila",
      n: "A loanword, so katakana — and バス is also *bath* and *bass*, which context settles." },
    { c: "norimono", k: "タクシー", r: "takushī", e: "taxi", a: "سَيَّارَةُ أُجْرَة", at: "sayyārat ujra",
      n: "The ー carries a full beat: タクシー is four moras, not three." },
    { c: "norimono", k: "じてんしゃ", r: "jitensha", e: "bicycle", a: "دَرَّاجَة هَوَائِيَّة", at: "darrāja hawāʾiyya",
      n: "自転車 — *self-turn-vehicle*. One character from 自動車, *self-move-vehicle*: the middle character decides whether you pedal." },
    { c: "norimono", k: "あるいて", r: "aruite", e: "on foot", a: "مَشْيًا", at: "mashyan",
      n: "歩いて — a fixed shape of *walk*, learned whole like みせて. The one way of going that takes no で. Arabic does the same trick: مَشْيًا is a frozen form of الْمَشْي used as an adverb." },

    /* ---------- えき · the station ---------- */
    { c: "eki", k: "えき", r: "eki", e: "station", a: "مَحَطَّةٌ", at: "maḥaṭṭa",
      n: "駅 — the kanji on every station sign. Also えき: 液, *liquid*, equally common. Two kana identify very little; the character does the work." },
    { c: "eki", k: "ふつう", r: "futsū", e: "local (train)", a: "قِطَارٌ عَادِيّ", at: "qiṭār ʿādī",
      n: "普通 — *ordinary*, so the train that stops everywhere. Beware the other ふつう a station uses: 不通, *service suspended*. Both common; one means the train is coming and one means it is not." },
    { c: "eki", k: "きゅうこう", r: "kyūkō", e: "rapid", a: "قِطَارٌ سَرِيع", at: "qiṭār sarīʿ",
      n: "急行 — *hurry-go*, with 行 again. A student's other two きゅうこう are 休講, *lecture cancelled*, and 休校, *school closed* — all three common, told apart only in kanji." },
    { c: "eki", k: "とっきゅう", r: "tokkyū", e: "express", a: "قِطَارٌ سَرِيعٌ خَاصّ", at: "qiṭār sarīʿ khāṣṣ",
      n: "特急 — 特別 + 急行 clipped, *specially rapid*. The small っ is 特's く collapsing, the same gemination the counters taught: とく + きゅう → とっきゅう." },
    { c: "eki", k: "つぎの", r: "tsugi no", e: "next", a: "التَّالِي", at: "at-tālī",
      n: "次の — printed with its の attached, like この and その: a word that goes in front of a noun. つぎの でんしゃ, *the next train*." },
    { c: "eki", k: "ばんせん", r: "bansen", e: "platform ~, track number ~", a: "رَصِيف", at: "raṣīf",
      n: "〜番線 — 何番's 番 plus 新幹線's 線. The course's ninth counter, and its first sound is voiced, so **no number ever changes it**: いちばんせん, さんばんせん, straight through. Untagged in JMdict — in by syllabus." },

    /* ---------- ひとびと · people ---------- */
    { c: "hito", k: "ひと", r: "hito", e: "person", a: "شَخْصٌ", at: "shakhṣ",
      n: "人 — the character inside 一人で two cards down, and inside chapter 11's 〜じん. One kanji, three readings so far: ひと, り, じん." },
    { c: "hito", k: "ともだち", r: "tomodachi", e: "friend", a: "صَدِيق", at: "ṣadīq",
      n: "友達. On と's kana card since lesson 1; now it has a meaning. The たち is voiced to だち inside the word — lesson 5's tenten as a sound rule again." },
    { c: "hito", k: "かれ", r: "kare", e: "he; boyfriend", a: "هُوَ", at: "huwa",
      n: "彼 — *he*, and also *boyfriend*. Japanese uses one word for the person and the partner, and so does the next card." },
    { c: "hito", k: "かのじょ", r: "kanojo", e: "she, her; girlfriend", a: "هِيَ", at: "hiya",
      n: "彼女 — 彼 plus 女: *he* plus *woman*, literally. The pair to かれ in both jobs." },
    { c: "hito", k: "かぞく", r: "kazoku", e: "family", a: "عَائِلَة", at: "ʿāʾila",
      n: "家族 — the 家 of うち, *house*, plus 族, *tribe*: the house-tribe." },
    { c: "hito", k: "ひとりで", r: "hitori de", e: "alone, by oneself", a: "وَحْدَهُ", at: "waḥdahu",
      n: "一人で — ひとり, *one person*, plus the で of なんで: *by* one person. The native ひとり from the numbers chapter, doing grammar." },

    /* ---------- ばしょ · places ---------- */
    { c: "basho", k: "がっこう", r: "gakkō", e: "school", a: "مَدْرَسَة", at: "madrasa",
      n: "学校 — the 学 of 学生 and 大学. Small っ then long こう: two of the sounds the kana chapters fought hardest for, in one everyday word." },
    { c: "basho", k: "スーパー", r: "sūpā", e: "supermarket", a: "سُوبَرْمَارْكِت", at: "sūbarmārkit",
      n: "Clipped from *supermarket*, as デパート was from *department store*. No kanji — the 駅 printed beside it on the sheet belongs to the next row." },
    { c: "basho", k: "はかた", r: "Hakata", e: "Hakata — the old name of Fukuoka, in Kyushu", a: "هَاكَاتَا", at: "Hākātā",
      n: "博多 — where the Shinkansen's western line ends. The name survives as the station: 博多駅." },
    { c: "basho", k: "ふしみ", r: "Fushimi", e: "Fushimi — a district of Kyoto", a: "فُوشِيمِي", at: "Fūshīmī",
      n: "伏見 — southern Kyoto, famous for the red gates of 伏見稲荷 and for sake." },
    { c: "basho", k: "こうしえん", r: "Kōshien", e: "Kōshien — a district near Osaka, in Hyōgo", a: "كُوشِيِين", at: "Kūshiyīn",
      n: "甲子園 — in Nishinomiya, Hyōgo Prefecture, between Osaka and Kobe, home of Japan's most famous baseball ground. Near Osaka, not in it." },
    { c: "basho", k: "おおさかじょう", r: "Ōsaka-jō", e: "Osaka Castle", a: "قَلْعَةُ أُوسَاكَا", at: "qalʿat Ūsākā",
      n: "大阪城 — 大阪 plus 城, *castle*. The first proper noun in the course with an ordinary noun for a tail." },

    /* ---------- ひづけ · the two promised dates ---------- */
    { c: "hizuke", k: "じゅうよっか", r: "jūyokka", e: "the 14th of the month", a: "الرَّابِعَ عَشَرَ مِنَ الشَّهْر", at: "ar-rābiʿa ʿashara min ash-shahr",
      n: "十四日. The calendar chapter's よっか card promised this: the native よっ- survives up the calendar while everything around it goes regular — じゅういちにち, じゅうににち, then suddenly じゅうよっか." },
    { c: "hizuke", k: "にじゅうよっか", r: "nijūyokka", e: "the 24th of the month", a: "الرَّابِع وَالْعِشْرُونَ مِنَ الشَّهْر", at: "ar-rābiʿ wa-l-ʿishrūn min ash-shahr",
      n: "二十四日 — the same survival ten days later. 20 itself is はつか, wholly native, and already on the calendar sheet." },
  ],
};
