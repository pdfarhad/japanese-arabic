/* vocab17-data.js — 45 words for the first verbs with objects, in eight groups.
 *
 * The single source of truth for lesson 17, exactly as `vocab16-data.js` is for
 * lesson 16: `vocab-list.js` renders the cards, `vocab-drill.js` builds its
 * questions, `story17-data.js` walks every one of them, and the practice deck
 * reads it through `flashcard-sets.js`. Edit here, nowhere else. Do not merge
 * the sets.
 *
 * The lecture sheet is **Minna no Nihongo I 第6課** — the second TYPED sheet —
 * cross-checked 2026-08-20 against `raw_lessons_files/shokyuu_1/lessons6.txt`
 * in github.com/clementval/minna. See LIBRARY.md, `lesson 17/1.png` and
 * `2.png`. No scan gap this time; the pages join cleanly at ビデオ／てがみ.
 * メキシコ is the teacher's own addition — not in the textbook's list, in by
 * syllabus like every row of every sheet.
 *
 * THE SHEET'S 53 ROWS ARE 45 CARDS HERE, on record 0019's line — a row rejoins
 * the set when the chapter's argument needs it; it stays home when it is only
 * being re-listed:
 *
 *   FIVE ROWS ARE UTTERANCES, not words — ええ, いいですね, わかりました,
 *   なんですか。, じゃ、また［あした］ — and live in the lesson's phrase list,
 *   as どういたしまして did in chapter 16. They are the ANSWER half of the
 *   textbook's invitation dialogue; the inviting half (ませんか) is not on the
 *   sheet and stays untaught. See learning-records/0020.
 *
 *   THREE ROWS STAY HOME — なに, ちょっと, いつも, all VOCAB6 cards since
 *   chapter 6, re-listed with no new kanji shown and no new sense. The lesson
 *   revises them in prose and points at their home.
 *
 * SEVEN CARDS ARE DELIBERATE REPEATS — にく and にわ (VOCAB, lesson 4), みず
 * (VOCAB5), おちゃ, ぎゅうにゅう, しゃしん and しゅくだい (VOCAB7) — and each
 * passes record 0019's argument test twice over: every one is an object the
 * chapter's verb frame exists to swap in (しゃしん is 撮ります' own printed
 * bracket; しゅくだい is します' most inevitable object), and every one gains
 * its kanji here for the first time (肉, 庭, 水-as-みず, お茶, 牛乳, 写真,
 * 宿題). English and Arabic are copied VERBATIM from the owning sets, which
 * `check_vocab.py`'s cross-set invariant enforces.
 *
 * ONE SLIP ON THE SHEET, taught correctly here: とります is printed 取ります
 * where its own bracket ［写真を〜］ wants **撮ります** — the homophone class
 * of slip, in a verb for the first time. 取る is real and common, which is why
 * nothing looks wrong; the kanji chooses WHICH taking, and for photographs it
 * is 撮. The textbook prints 撮ります. Four common verbs share the sound とる:
 * 取・撮・捕・採.
 *
 * ALL ELEVEN GROUP MARKERS ARE CORRECT — the first sheet with this many verbs
 * and no marker slip (verified against JMdict part-of-speech 2026-08-20).
 * Verbs stay fixed ます shapes per Farhad's 2026-08-14 decision
 * (learning-records/0017; re-ask trigger checked against 第6課 and NOT met —
 * no negative, no past, bare ます shapes only). 〜を + verb is taught as a
 * frame, the fifth spending of the grammar exemption — see
 * learning-records/0020. あいます is the sheet's one intransitive verb, and
 * its bracket says ともだちに where the others say を.
 *
 * Readings and commonness checked against JMdict through
 * <https://jisho.org/api/v1/search/words> on 2026-08-20. Everything here is
 * tagged common EXCEPT ＣＤ (a listed headword, untagged — in by syllabus, as
 * ばんせん was) and メキシコ, a proper noun. What the check FOUND this chapter
 * is that the homophone problem has reached the verbs at full strength:
 * かいます is 買います *buys* and 飼います *keeps a pet*; ききます is 聞きます
 * *hears* and 効きます *takes effect*; あいます is 会います *meets* and
 * 合います *fits*; みます is 見ます *sees* and 診ます *examines a patient* —
 * every one of them common. The seventh chapter running in which a short kana
 * string identifies almost nothing.
 *
 * Verbs are glossed with the Arabic present tense, third person masculine
 * singular, per vocab14-data.js.
 *
 * Arabic is Modern Standard with full harakat, and every gloss is a distinct
 * string, because `vocab-drill.js` grades the かな → العربية direction by
 * comparing the Arabic text. The distinctness rule surfaced a real distinction
 * again: おちゃ and こうちゃ could not both be شَاي — and the honest split is
 * the two languages' own colour argument: Japanese names black tea 紅茶,
 * *crimson* tea, by the liquor; Arabic شَايٌ أَسْوَد names it *black*, by the
 * leaf, siding with English.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB17 = {
  cats: [
    { id: "doushi",   jp: "どうし",       r: "dōshi",    en: "Eleven verbs" },
    { id: "gohan",    jp: "ごはん",       r: "gohan",    en: "Rice three times a day" },
    { id: "tabemono", jp: "たべもの",     r: "tabemono", en: "In the shopping basket" },
    { id: "nomimono", jp: "のみもの",     r: "nomimono", en: "Seven things to drink" },
    { id: "media",    jp: "メディア",     r: "media",    en: "To watch, read and write" },
    { id: "basho",    jp: "ばしょ",       r: "basho",    en: "Places, near and far" },
    { id: "suru",     jp: "すること",     r: "suru koto", en: "Things you do" },
    { id: "kotoba",   jp: "ちいさいことば", r: "chiisai kotoba", en: "Three little words" },
  ],

  words: [
    /* ---------- どうし · the eleven verbs ---------- */
    { c: "doushi", k: "たべます", r: "tabemasu", e: "eat", a: "يَأْكُلُ", at: "yaʾkulu",
      n: "食べます, marked II. Its 食 is the 食 of chapter 13's 食堂, the department store's canteen — しょく there, た here: one character, met in two chapters, read two ways." },
    { c: "doushi", k: "のみます", r: "nomimasu", e: "drink", a: "يَشْرَبُ", at: "yashrabu",
      n: "飲みます, marked I. みずを のみます works for every card in the drinks group — and Japanese *drinks* soup and medicine too, where English eats the one and takes the other." },
    { c: "doushi", k: "すいます", r: "suimasu", e: "smoke", a: "يُدَخِّنُ", at: "yudakhkhinu",
      n: "吸います, marked I — *to inhale*. The sheet's bracket ［たばこを〜］ points straight at chapter 13's たばこ, which finally has its verb. The same verb breathes air and sucks through a straw; with tobacco it is *smoke*." },
    { c: "doushi", k: "みます", r: "mimasu", e: "see, look at, watch", a: "يَرَى", at: "yarā",
      n: "見ます, marked II. The 見 returns on this very sheet inside お花見, *blossom-viewing*. And みます is also 診ます, *examines a patient* — same sound, different kanji, both common." },
    { c: "doushi", k: "ききます", r: "kikimasu", e: "hear, listen", a: "يَسْمَعُ", at: "yasmaʿu",
      n: "聞きます, marked I — an 耳, *ear*, listening through a 門, *gate*. One verb for *hear* and *listen* both. And ききます is also 効きます, *takes effect* — この くすりは ききます is medicine working, not medicine listening." },
    { c: "doushi", k: "よみます", r: "yomimasu", e: "read", a: "يَقْرَأُ", at: "yaqraʾu",
      n: "読みます, marked I. The left half of 読 is 言, *speech* — reading as words held in strokes. Books, letters and newspapers all take it: てがみを よみます." },
    { c: "doushi", k: "かきます", r: "kakimasu", e: "write, draw, paint", a: "يَكْتُبُ", at: "yaktubu",
      n: "書きます, marked I. The sheet glosses it *write, draw, paint* because the sound かく covers all three; when the kanji is chosen, 書 takes the letters and 描 takes the pictures." },
    { c: "doushi", k: "かいます", r: "kaimasu", e: "buy", a: "يَشْتَرِي", at: "yashtarī",
      n: "買います, marked I. The lower half of 買 is 貝, a *shell* — the oldest money, still sitting inside the buying verb. Beware the homophone: かいます is also 飼います, *keeps an animal*. パンを かいます feeds you; パンダを かいます is a different afternoon." },
    { c: "doushi", k: "とります", r: "torimasu", e: "take (a photograph)", a: "يَلْتَقِطُ", at: "yaltaqiṭu",
      n: "**撮ります — the sheet prints 取ります, and that is the day's slip.** Four common verbs share the sound とる: 取る *picks up*, 撮る *photographs*, 捕る *catches*, 採る *harvests*. The row's own bracket ［写真を〜］ chooses 撮, and the textbook prints it." },
    { c: "doushi", k: "します", r: "shimasu", e: "do", a: "يَفْعَلُ", at: "yafʿalu",
      n: "Group III — the group with exactly two members, and you have now met both: 来ます in chapter 16, します here. No kanji: the course's first verb written in kana alone. テニスを します, しゅくだいを します — the verb that turns any noun into an activity." },
    { c: "doushi", k: "あいます", r: "aimasu", e: "meet (a friend)", a: "يُقَابِلُ", at: "yuqābilu",
      n: "会います, marked I — and **the odd one out: its bracket says ともだちに, not を.** You do not meet a friend the way you eat bread; に points at who. Arabic needs the same little word — يَلْتَقِي **بِ**صَدِيقِهِ. The 会 is the 会 of 会話, the dialogues you have been reading." },

    /* ---------- ごはん · the meals ---------- */
    { c: "gohan", k: "ごはん", r: "gohan", e: "a meal, cooked rice", a: "طَعَام", at: "ṭaʿām",
      n: "*Cooked rice*, and therefore *a meal* — rice stands for eating itself, the way bread does across much of the world. The ご is the polite prefix 御, worn so permanently the word never appears without it." },
    { c: "gohan", k: "あさごはん", r: "asagohan", e: "breakfast", a: "فُطُور", at: "fuṭūr",
      n: "朝ごはん — chapter 14's あさ 朝 plus ごはん: *morning rice*, whatever is actually on the plate." },
    { c: "gohan", k: "ひるごはん", r: "hirugohan", e: "lunch", a: "غَدَاء", at: "ghadāʾ",
      n: "昼ごはん — the 昼 of ひるやすみ, plus ごはん. The pattern is doing the work now: name a time of day, add the rice." },
    { c: "gohan", k: "ばんごはん", r: "bangohan", e: "supper", a: "عَشَاء", at: "ʿashāʾ",
      n: "晩ごはん — chapter 14's ばん 晩 plus ごはん: the third meal the pattern generates for free." },

    /* ---------- たべもの · food ---------- */
    { c: "tabemono", k: "パン", r: "pan", e: "bread", a: "خُبْز", at: "khubz",
      n: "From Portuguese *pão* — bread reached Japan with sixteenth-century missionaries, centuries before English started supplying the loanwords. No kanji; it never had one." },
    { c: "tabemono", k: "たまご", r: "tamago", e: "egg", a: "بَيْضَة", at: "bayḍa",
      n: "卵 — and the word is たま, *ball*, plus ご, *child*: a ball-child. Menus often spell exactly that, 玉子." },
    { c: "tabemono", k: "にく", r: "niku", e: "meat", a: "لَحْمٌ", at: "laḥm",
      n: "肉 — lesson 4's two-kana card, carried again because a shopping basket cannot be walked without it, and now wearing its kanji: a cut of meat with the grain drawn in." },
    { c: "tabemono", k: "さかな", r: "sakana", e: "fish", a: "سَمَك", at: "samak",
      n: "魚 — the character is a whole fish: head at the top, scaled body, four strokes of tail. The animal and the food are one word." },
    { c: "tabemono", k: "やさい", r: "yasai", e: "vegetable", a: "خُضْرَاوَات", at: "khuḍrāwāt",
      n: "野菜 — 野, *field*, plus 菜, *greens*: field-greens. The grass radical sits on 菜's head, as it does on 茶 — plants wear it." },
    { c: "tabemono", k: "くだもの", r: "kudamono", e: "fruit", a: "فَاكِهَة", at: "fākiha",
      n: "果物 — 果, *fruit*, plus 物, *thing*. The 物 ends everyday words the way English *-stuff* once did — たべもの food, のみもの drink, くだもの fruit." },

    /* ---------- のみもの · drinks ---------- */
    { c: "nomimono", k: "みず", r: "mizu", e: "water", a: "مَاءٌ", at: "māʾ",
      n: "水 — lesson 5's card, carried for the shopping bag and now wearing the 水 you have had since 水曜日, read みず on its own. Cold water specifically: hot water has its own word." },
    { c: "nomimono", k: "おちゃ", r: "ocha", e: "tea", a: "شَايٌ", at: "shāy",
      n: "お茶 — lesson 7's card with its kanji on. Tea unmarked means **green** tea in Japan; the お is the polite 御 again, worn as permanently as ごはん's ご. The black kind is the next card." },
    { c: "nomimono", k: "こうちゃ", r: "kōcha", e: "black tea", a: "شَايٌ أَسْوَد", at: "shāy aswad",
      n: "紅茶 — 紅, *crimson*, plus 茶: Japanese names black tea by the colour of the liquor, English by the colour of the leaf. Arabic sides with English — شَايٌ أَسْوَد, *black*." },
    { c: "nomimono", k: "ぎゅうにゅう", r: "gyūnyū", e: "milk", a: "حَلِيبٌ", at: "ḥalīb",
      n: "牛乳 — lesson 7's yōon showpiece, now readable: 牛, *cow*, plus 乳, *milk*. The sheet brackets ミルク beside it and both are real — 牛乳 is what cartons print, ミルク what menus say." },
    { c: "nomimono", k: "ジュース", r: "jūsu", e: "juice", a: "عَصِير", at: "ʿaṣīr",
      n: "From English *juice* — and in Japan the word stretches over most soft drinks, not only the squeezed kind." },
    { c: "nomimono", k: "ビール", r: "bīru", e: "beer", a: "بِيرَة", at: "bīra",
      n: "From Dutch *bier*, not English *beer* — the Dutch were the Europeans allowed to keep trading through Japan's closed centuries, and the loanword keeps their vowel." },
    { c: "nomimono", k: "おさけ", r: "osake", e: "alcohol, Japanese rice wine", a: "خَمْر", at: "khamr",
      n: "お酒 — *alcohol in general*, and the rice wine in particular: the class named after its oldest member. Arabic خَمْر made exactly the same move, one drink's name spreading over the whole shelf. The sheet brackets the お — polite, and usually worn." },

    /* ---------- メディア · watch, read, write ---------- */
    { c: "media", k: "ビデオ", r: "bideo", e: "video tape, video deck", a: "فِيدْيُو", at: "fīdyū",
      n: "From English *video* — the tape and the machine that plays it, both, as English used the word in the same decade." },
    { c: "media", k: "えいが", r: "eiga", e: "movie", a: "فِيلْم", at: "fīlm",
      n: "映画 — 映, *project, reflect*, plus 画, *picture*: a projected picture. えいがを みます is the frame doing its ordinary work." },
    { c: "media", k: "ＣＤ", r: "shīdī", e: "CD, compact disc", a: "قُرْصٌ مُدْمَج", at: "qurṣ mudmaj",
      n: "Read シーディー. The sheet prints it in Latin letters because Japanese itself does — JMdict lists ＣＤ as a headword. Untagged for commonness, like ばんせん before it: in by syllabus." },
    { c: "media", k: "てがみ", r: "tegami", e: "letter", a: "رِسَالَة", at: "risāla",
      n: "手紙 — 手, *hand*, plus 紙, *paper*: a hand-paper. Learn it with a straight face in Chinese company — the same two characters in Chinese mean *toilet paper*, the classic false friend of the two languages." },
    { c: "media", k: "レポート", r: "repōto", e: "report", a: "تَقْرِير", at: "taqrīr",
      n: "From English *report* — the assignment kind. Four beats: レ・ポ・ー・ト, the ー holding its vowel open for a full mora." },
    { c: "media", k: "しゃしん", r: "shashin", e: "photograph", a: "صُورَةٌ", at: "ṣūra",
      n: "写真 — 写, *copy*, plus 真, *truth*: a copied truth. Lesson 7's card, carried again because 撮ります cannot be taught without its object — the bracket printed on the verb IS this word." },

    /* ---------- ばしょ · places ---------- */
    { c: "basho", k: "みせ", r: "mise", e: "store, shop", a: "مَتْجَر", at: "matjar",
      n: "店 — the plain word for a shop of any size, sitting under chapter 13's デパート and chapter 16's スーパー the way *shop* sits under *department store*." },
    { c: "basho", k: "レストラン", r: "resutoran", e: "restaurant", a: "مَطْعَم", at: "maṭʿam",
      n: "From French *restaurant* — and the katakana keeps the French silent t: レストラン ends on ン, not ト." },
    { c: "basho", k: "にわ", r: "niwa", e: "garden", a: "حَدِيقَةٌ", at: "ḥadīqa",
      n: "庭 — lesson 4's two-kana card, now wearing its kanji: the garden attached to a house, the one place in this chapter you do nothing in but look." },
    { c: "basho", k: "メキシコ", r: "Mekishiko", e: "Mexico", a: "الْمَكْسِيك", at: "al-Maksīk",
      n: "**The sheet's own addition — the textbook's 第6課 list does not carry it.** In by syllabus, like every row of every sheet. Chapter 11's pattern still works: メキシコじん, *a Mexican*." },

    /* ---------- すること · activities ---------- */
    { c: "suru", k: "しゅくだい", r: "shukudai", e: "homework", a: "وَاجِبٌ مَنْزِلِيٌّ", at: "wājib manzilī",
      n: "宿題 — 宿, *lodging*, plus 題, *problem*: the problem that boards with you overnight. Lesson 7's card, carried because します needs objects and this is its most inevitable one: しゅくだいを します." },
    { c: "suru", k: "テニス", r: "tenisu", e: "tennis", a: "تِنِس", at: "tinis",
      n: "From English *tennis*. テニスを します — with する, any game becomes a verb phrase; no *play* verb needed." },
    { c: "suru", k: "サッカー", r: "sakkā", e: "soccer, football", a: "كُرَةُ الْقَدَم", at: "kurat al-qadam",
      n: "From English *soccer* — Japan took the American name. Four beats, two of them silent or held: サ・ッ・カ・ー, the small ッ and the ー each carrying a full mora." },
    { c: "suru", k: "おはなみ", r: "ohanami", e: "cherry-blossom viewing", a: "مُشَاهَدَةُ أَزْهَارِ الْكَرَز", at: "mushāhadat azhār al-karaz",
      n: "お花見 — 花, *flower*, plus みます' own 見: *blossom-viewing*, wearing the polite お of a national institution. Specifically the cherry blossoms, and the picnic under them." },

    /* ---------- ちいさいことば · three little words ---------- */
    { c: "kotoba", k: "いっしょに", r: "issho ni", e: "together", a: "مَعًا", at: "maʿan",
      n: "一緒に — the 一 of the numbers chapter leading it: *in one bundle*. The に is glued on; learn いっしょに whole, the way あるいて was learned whole." },
    { c: "kotoba", k: "ときどき", r: "tokidoki", e: "sometimes", a: "أَحْيَانًا", at: "aḥyānan",
      n: "時々 — 時 is chapter 14's hour character 〜時, read とき on its own; 々 is not a kanji but a **repeater mark**: *time-time* → sometimes. The second とき voices to どき — lesson 5's tenten as a sound rule, inside a doubled word." },
    { c: "kotoba", k: "それから", r: "sorekara", e: "after that, and then", a: "بَعْدَ ذَلِكَ", at: "baʿda dhālika",
      n: "Assembled entirely from parts you own: chapter 12's それ, *that*, plus the から of 〜から きました — *from that* → *after that*. Two old cards making a third word." },
  ],
};
