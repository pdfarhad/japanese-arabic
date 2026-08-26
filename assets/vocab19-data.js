/* vocab19-data.js — 52 words for the describing chapter, in seven groups.
 *
 * The single source of truth for lesson 19, exactly as `vocab18-data.js` is
 * for lesson 18: `vocab-list.js` renders the cards, `vocab-drill.js` builds
 * its questions, `story19-data.js` walks every one of them, and the practice
 * deck reads it through `flashcard-sets.js`. Edit here, nowhere else. Do not
 * merge the sets.
 *
 * The lecture sheet is **Minna no Nihongo I 第8課** — the fourth TYPED sheet —
 * cross-checked 2026-08-26 against `raw_lessons_files/shokyuu_1/lessons8.txt`
 * in github.com/clementval/minna: same words, same order, the file's main
 * list ending at 〜が、〜 exactly where the sheet's does. (The repo file has a
 * slip of its own — romaji "ookii[na]", handing an い-adjective a ［na］ —
 * theirs, not the sheet's.) See LIBRARY.md, `lesson 19/1.png` and `2.png`.
 *
 * THE SHEET'S 62 ROWS ARE 52 CARDS HERE, on record 0019's line:
 *
 *   EIGHT ROWS ARE UTTERANCES, not words — おげんきですか, そうですね,
 *   にほんの せいかつに なれましたか, ［〜、］もう いっぱい いかがですか,
 *   いいえ、けっこうです, もう〜です［ね］, そろそろ しつれいします,
 *   また いらっしゃってください — and live in the lesson's phrase list, in
 *   the sheet's own order, which IS the conversation: chapter 18's dialogue
 *   opened the door, this one closes it.
 *   どれ STAYS HOME — a VOCAB6 card re-listed with nothing new; even its
 *   printed gloss ("which one (of three or more)") is what VOCAB6 already
 *   teaches. Revised in prose.
 *   〜が、〜 IS A FRAME, NOT A CARD — particles have never been cards in this
 *   course, and the row is taught as the printed frame in its own section.
 *
 * FOUR CARDS ARE DELIBERATE REPEATS — やま and まち (VOCAB, lesson 4) gain
 * their kanji here for the first time (山, 町 — record 0019's first-kanji
 * clause); どう and どんな (VOCAB6) are the two questions this chapter exists
 * to answer — どんな asks for an adjective before a noun, 〜は どうですか asks
 * for one as a sentence — the chapter-14 なんじ test passed exactly.
 * English and Arabic are copied VERBATIM from the owning sets, which
 * `check_vocab.py`'s cross-set invariant enforces.
 *
 * TWO SLIPS ON THE SHEET, both taught correctly here:
 *   1. あつい is printed with 暑い alone; the textbook prints 暑い、熱い.
 *      The touch-hot twin is dropped while touch-cold つめたい keeps its row —
 *      so the sheet ships a complete cold pair and half a hot one. 熱い is
 *      taught in prose.
 *   2. The another-cup row's kanji column prints いかがでか — the す dropped;
 *      the kana column has it right. (Also "negetive", English-side.)
 * ゆうめい's unclosed ［な bracket is cosmetic; the class is right.
 *
 * Readings and commonness checked against JMdict through
 * <https://jisho.org/api/v1/search/words> on 2026-08-26. Everything here is
 * tagged common EXCEPT おしごと (お仕事 is a listed headword, untagged — bare
 * 仕事 is common; in by syllabus, the ホッチキス class) and the proper nouns
 * (富士山, 琵琶湖 and 上海 are common-tagged; 金閣寺 is listed untagged;
 * 七人の侍 has no entry — a film title). What the check FOUND, ninth chapter
 * running for the short-string point:
 *   - やさしい is TWO common い-adjectives: 易しい *easy*, 優しい *kind* —
 *     and the sheet already teaches *kind* as しんせつ.
 *   - あつい is a common TRIPLE: 熱い touch-hot (listed first), 暑い
 *     weather-hot, 厚い thick.
 *   - やすい is 安い *cheap* and 易い *easy* — the same 易 as やさしい's.
 *   - りょう is a common sound-triple: 量 quantity, 寮 dormitory, 料 fee.
 *   - あまり is 余り, the *remainder*, before it is *not-very*.
 *   - さくら's third sense is a paid shill in the crowd.
 *   - まち 町 shares its sound with 待ち — and まちます is chapter 14's verb.
 *
 * THE ARABIC MIRROR THIS CHAPTER RUNS ON: temperature. Japanese splits the
 * cold by where you feel it — さむい in the air, つめたい on the skin — and
 * Arabic has one root, برد, for both, so the touch word here is the compound
 * بَارِدُ الْمَلْمَسِ. On the HOT side it is Arabic that splits — حَارّ for
 * weather, سَاخِن for what you touch (standard usage: الطَّقْسُ حَارٌّ but
 * مَاءٌ سَاخِنٌ) — precisely the 暑い／熱い split the sheet dropped. Each
 * language lexicalises one half of temperature and reaches for context on the
 * other.
 *
 * Arabic is Modern Standard with full harakat, and every gloss is a distinct
 * string, because `vocab-drill.js` grades the かな → العربية direction by
 * comparing the Arabic text. The distinctness rule surfaced real distinctions
 * again: おもしろい (مُثِيرٌ لِلِاهْتِمَامِ, stirs the interest) against
 * たのしい (مُمْتِع, gives pleasure) — curiosity against enjoyment; and
 * せいかつ is glossed مَعِيشَة, the *lived* daily life, not حَيَاة the
 * life-force — 生活 is the living you do, not the life you have.
 *
 * Fields: k kana · r romaji · e English · a Arabic · at Arabic transliteration
 *         c category id · n optional note
 */

window.VOCAB19 = {
  cats: [
    { id: "na",     jp: "［な］の ことば", r: "[na] no kotoba", en: "Ten words that take ［な］" },
    { id: "tsui",   jp: "はんたい",       r: "hantai",   en: "Opposites, in pairs" },
    { id: "solo",   jp: "あいてなし",     r: "aite nashi", en: "Four without partners" },
    { id: "iro",    jp: "いろ",           r: "iro",      en: "The four colour adjectives" },
    { id: "mono",   jp: "もの",           r: "mono",     en: "The things described" },
    { id: "kotoba", jp: "ちいさい ことば", r: "chiisai kotoba", en: "Asking, degree and joining" },
    { id: "meisho", jp: "ゆうめいな もの", r: "yūmei na mono", en: "The famous five" },
  ],

  words: [
    /* ---------- ［な］の ことば · the ten な-adjectives ---------- */
    { c: "na", k: "ハンサム", r: "hansamu", e: "handsome", a: "وَسِيم", at: "wasīm",
      n: "From English *handsome*, and a ［な］ word — the borrowed describers all join this class, because the 〜い machinery only fits native words. Every loan adjective the course will ever meet sits on this side of the line." },
    { c: "na", k: "きれい", r: "kirei", e: "beautiful, clean", a: "جَمِيل", at: "jamīl",
      n: "綺麗 — **ends in い and is still a ［な］ word**: the bracket, not the ear, decides. The double gloss is JMdict's own sense split — *pretty* and *clean* are one word here, which is why a just-wiped table and a temple can share an adjective. The い is part of the word, not the 〜い ending." },
    { c: "na", k: "しずか", r: "shizuka", e: "quiet", a: "هَادِئ", at: "hādiʾ",
      n: "静か ［な］. The 静 will return in 静かに — but that adverb form, like every other form, stays ahead of the course. For now the word is a block: しずかです, and done." },
    { c: "na", k: "にぎやか", r: "nigiyaka", e: "lively", a: "نَابِضٌ بِالْحَيَاةِ", at: "nābiḍ bi-l-ḥayāh",
      n: "賑やか in the dictionary, usually written in kana — しずか's opposite in everything including shape: both native, both 〜か, both ［な］. JMdict glosses it *bustling, crowded, lively (voices)* — a describing word for places and parties, positive where *noisy* is not. The Arabic نَابِضٌ بِالْحَيَاةِ is literally *pulsing with life*." },
    { c: "na", k: "ゆうめい", r: "yūmei", e: "famous", a: "مَشْهُور", at: "mashhūr",
      n: "有名 ［な］ — *has-name*, exactly parallel to English *famous* from *fame*. The second い-ending ［な］ word on the sheet (the sheet's bracket is printed unclosed here — cosmetic). The famous five at the bottom of this set exist to give this word subjects." },
    { c: "na", k: "しんせつ", r: "shinsetsu", e: "kind", a: "لَطِيف", at: "laṭīf",
      n: "親切 ［な］ — 親, *parent*, plus 切, the very character chapter 18 taught as *cut* (切ります, 切符). The compound's meaning is not the sum of its parts — a warning against reading kanji arithmetically. Keep this card in mind at やさしい, whose *other* spelling also means kind." },
    { c: "na", k: "げんき", r: "genki", e: "healthy, cheerful", a: "نَشِيط", at: "nashīṭ",
      n: "元気 ［な］ — JMdict: *lively, full of spirit; healthy, well*. Wearing the polite お it becomes the sheet's own greeting おげんきですか — the ［な］ word the course has been saying since its first dialogue, only now getting its card." },
    { c: "na", k: "ひま", r: "hima", e: "free (time)", a: "فَرَاغ", at: "farāgh",
      n: "暇 ［な］ — filed in JMdict as a noun first, *spare time*, and used as a ［な］ describer: ひまな ひ, a free day. The sheet's parenthesis — *free (time)* — is doing real work: ひま is free-as-unbusy, never free-as-costing-nothing (that is ただ, another course entirely)." },
    { c: "na", k: "べんり", r: "benri", e: "convenient", a: "عَمَلِيّ", at: "ʿamalī",
      n: "便利 ［な］ — 便, *convenience*, plus 利, *advantage*: usefulness on both sides of the compound. The Arabic عَمَلِيّ, *practical*, is built on عَمَل, *work* — which is this very set's おしごと gloss, further down. Do not confuse its べん with べんきょう's — same sound, different characters, same sheet." },
    { c: "na", k: "すてき", r: "suteki", e: "fine, wonderful", a: "رَائِع", at: "rāʾiʿ",
      n: "素敵 ［な］ — chapter 18's ［〜、］すてきですね, the admiring cry at the door, was carrying this word as a frozen phrase; here it thaws into ordinary vocabulary. The first utterance-to-word promotion in the course." },

    /* ---------- はんたい · fourteen い-adjectives, in pairs ---------- */
    { c: "tsui", k: "おおきい", r: "ōkii", e: "big, large", a: "كَبِير", at: "kabīr",
      n: "大きい — the 大 of だいがく (big learning, chapter 11) finally standing alone. First of the true 〜い adjectives: native, and the final い is the working part, the piece that will one day conjugate. That day is not today." },
    { c: "tsui", k: "ちいさい", r: "chiisai", e: "small, little", a: "صَغِير", at: "ṣaghīr",
      n: "小さい — おおきい's partner. The kanji pair 大／小 has been on every menu and price sign since chapter 13; now the words that read them are cards. Note the spelling: ちいさい with a full-size い, no long-vowel mark — hiragana never uses ー." },
    { c: "tsui", k: "あたらしい", r: "atarashii", e: "new", a: "جَدِيد", at: "jadīd",
      n: "新しい — the 新 of しんぶん (chapter 12's *new-hearing*, the newspaper) as an adjective. Ends in 〜しい, the shape many quality-adjectives take — watch how many of this sheet's words share it." },
    { c: "tsui", k: "ふるい", r: "furui", e: "old (not of age)", a: "قَدِيم", at: "qadīm",
      n: "古い — and the sheet's parenthesis is a real rule: ふるい is for things, never for people's age. Arabic draws the same line with the same word — قَدِيم for the old house, never the old man (he is مُسِنّ). Two languages, one restriction, independently." },
    { c: "tsui", k: "いい", r: "ii", e: "good", a: "جَيِّد", at: "jayyid",
      n: "The sheet prints いい（よい） — one word, two shapes, and JMdict files both under 良い. いい is what everyone says; よい is the shape the word takes in writing and in its other forms. Why the second shape exists is a conjugation fact, and conjugation is still ahead — for now, know both faces." },
    { c: "tsui", k: "わるい", r: "warui", e: "bad", a: "سَيِّئ", at: "sayyiʾ",
      n: "悪い — いい's partner, and the more regular of the two: it keeps one shape everywhere. JMdict's senses run *bad, poor, undesirable* down to *at fault* — the わるい of apologies, which is where the course will meet it next." },
    { c: "tsui", k: "あつい", r: "atsui", e: "hot", a: "حَارّ", at: "ḥārr",
      n: "**The sheet prints 暑い; the textbook prints 暑い、熱い** — three common あつい exist (熱い touch-hot is JMdict's first, 暑い weather-hot, 厚い thick), and the sheet kept only the weather one while giving cold its full pair. Arabic splits exactly where the sheet went silent: حَارّ for weather, سَاخِن for what you touch." },
    { c: "tsui", k: "さむい", r: "samui", e: "cold (weather)", a: "بَارِد", at: "bārid",
      n: "寒い — cold you stand in: weather, rooms, seasons. Never the drink. JMdict's second sense is a *cold* joke — さむい does in Japanese exactly what *that joke left me cold* does in English." },
    { c: "tsui", k: "つめたい", r: "tsumetai", e: "cold (to the touch)", a: "بَارِدُ الْمَلْمَسِ", at: "bārid al-malmas",
      n: "冷たい — cold you touch: water, hands, juice — and, JMdict sense 2, people (*cold-hearted*). Japanese keeps two whole words for cold; Arabic has one root برد and must say *cold-of-touch*, بَارِدُ الْمَلْمَسِ, to draw the line the Japanese draws for free. On the hot side the tables turn — see あつい." },
    { c: "tsui", k: "むずかしい", r: "muzukashii", e: "difficult", a: "صَعْب", at: "ṣaʿb",
      n: "難しい — another 〜しい. The 難 is the *dis-* of disaster words; the course will meet it again wherever something is hard. Its partner on the sheet is the most dangerous word of the day —" },
    { c: "tsui", k: "やさしい", r: "yasashii", e: "easy", a: "سَهْل", at: "sahl",
      n: "**Two common やさしい exist**: 易しい *easy* — this card — and 優しい *kind, gentle*. The sheet already teaches *kind* as しんせつ, so both halves of the confusion are on one page, and only the kanji tells them apart. The dictionary lists the kind one first; the sheet means the easy one." },
    { c: "tsui", k: "たかい", r: "takai", e: "expensive, tall, high", a: "غَالٍ", at: "ghālin",
      n: "高い — one word, two scales: price and height. Its opposites split it in half — やすい answers the price, ひくい answers the height — so the sheet's triple gloss is not generosity, it is the map of an asymmetry. The Arabic card carries the price sense, غَالٍ; the height sense is عَالٍ, one letter away." },
    { c: "tsui", k: "やすい", r: "yasui", e: "inexpensive", a: "رَخِيص", at: "rakhīṣ",
      n: "安い — the 安 on every 安売り banner in Japan: *cheap* as the shop's favourite word. And the dictionary holds a second common やすい — 易い, *easy*, spelled with the very 易 of this sheet's やさしい. Cheap and easy sit one sound apart, and *easy* itself is two words." },
    { c: "tsui", k: "ひくい", r: "hikui", e: "low", a: "مُنْخَفِض", at: "munkhafiḍ",
      n: "低い — たかい's *other* opposite: height and rank, never price. Low hills, low voices, low temperatures. The pair たかい／ひくい is the one the famous five will exercise — ふじさん is the tall one." },

    /* ---------- あいてなし · four without partners ---------- */
    { c: "solo", k: "おもしろい", r: "omoshiroi", e: "interesting", a: "مُثِيرٌ لِلِاهْتِمَامِ", at: "muthīr li-l-ihtimām",
      n: "面白い — 面, *face*, plus 白い, this sheet's own *white*: the folk story is a face lit up. JMdict runs *interesting* through *funny* to *enjoyable* — one word covering the documentary and the comedy. Its opposite (つまらない) is not on the sheet; the partner column stays empty for now." },
    { c: "solo", k: "おいしい", r: "oishii", e: "delicious", a: "لَذِيذ", at: "ladhīdh",
      n: "美味しい in the dictionary, almost always kana — the word every meal in Japan is waiting to hear. Its opposite (まずい) is likewise not on the sheet. The お is part of the word, not the polite prefix — おいしい never appears as *いしい*." },
    { c: "solo", k: "いそがしい", r: "isogashii", e: "busy", a: "مَشْغُول", at: "mashghūl",
      n: "忙しい — the kanji is the *heart* radical beside 亡, *perish*: a heart worked to death, which any busy week confirms. Another 〜しい. The Arabic مَشْغُول is *occupied* — the same word Arabic uses for an engaged phone line." },
    { c: "solo", k: "たのしい", r: "tanoshii", e: "enjoyable", a: "مُمْتِع", at: "mumtiʿ",
      n: "楽しい — its 楽 is the same character music wears in 音楽: one kanji covering pleasure and music both. Distinct from おもしろい on both sides of this card: おもしろい stirs the interest (مُثِيرٌ لِلِاهْتِمَامِ), たのしい gives the pleasure (مُمْتِع) — the film is おもしろい, the party is たのしい." },

    /* ---------- いろ · the four colour adjectives ---------- */
    { c: "iro", k: "しろい", r: "shiroi", e: "white", a: "أَبْيَض", at: "abyaḍ",
      n: "白い — the 白 hiding inside おもしろい, two cards up. Only a handful of colours are true 〜い adjectives: these four at the core, yellow and brown managing it only through 〜色い. The rest of the palette are nouns, and stay ahead of the course." },
    { c: "iro", k: "くろい", r: "kuroi", e: "black", a: "أَسْوَد", at: "aswad",
      n: "黒い — しろい's partner, and JMdict's later senses go where English *black* also goes: *dark, tanned; illicit*. The 黒 will return the day the course meets a 黒板, a blackboard." },
    { c: "iro", k: "あかい", r: "akai", e: "red", a: "أَحْمَر", at: "aḥmar",
      n: "赤い — the red of every torii gate and every あかちゃん (babies are *the red ones* in Japanese, from their newborn colour). Second sense in the dictionary: *Red, communist* — the political red travelled into Japanese too." },
    { c: "iro", k: "あおい", r: "aoi", e: "blue", a: "أَزْرَق", at: "azraq",
      n: "青い — **blue, and also green**: JMdict lists both, and Japan's green traffic light is officially あお. The word covers the sea-to-leaf range English cuts in two; *pale* (a face gone あおい) is sense 3. The sheet's one-word gloss is the exam answer, not the whole story." },

    /* ---------- もの · the things described ---------- */
    { c: "mono", k: "さくら", r: "sakura", e: "cherry (blossom)", a: "زَهْرُ الْكَرَز", at: "zahr al-karaz",
      n: "桜 — the tree lesson 1 used as an example word, now a card. Chapter 17's お花見 is the going-to-see of exactly this. JMdict's third sense is worth the price of the lookup: a さくら is also a *paid shill* — the planted customer who claps first, blooming on cue and gone by morning." },
    { c: "mono", k: "やま", r: "yama", e: "mountain", a: "جَبَلٌ", at: "jabal",
      n: "Lesson 4's card, now wearing 山 — and the kanji is the mountain: three peaks, the first pictograph in the course that still looks like its meaning. Keep the reading in hand for the famous five below: alone it is やま, inside 富士山 it is さん." },
    { c: "mono", k: "まち", r: "machi", e: "town", a: "مَدِينَةٌ", at: "madīna",
      n: "Lesson 4's card, now wearing 町 — and the dictionary adds a neighbour: 待ち, *the waiting*, equally common, is the stem of chapter 14's まちます. The town and the waiting share a sound; the kanji column, again, is not decoration." },
    { c: "mono", k: "たべもの", r: "tabemono", e: "food", a: "طَعَام", at: "ṭaʿām",
      n: "食べ物 — chapter 17's たべます with 物, *thing*, bolted on: *eat-thing*. The same 物 chapter 18 taught inside にもつ (荷物, load-thing). Japanese builds its nouns out of its verbs in plain sight — every 〜もの word the course meets from now on decomposes the same way." },
    { c: "mono", k: "くるま", r: "kuruma", e: "car", a: "سَيَّارَة", at: "sayyāra",
      n: "車 — the kanji is a cart seen from above, axle and wheels; the word predates the engine and simply moved in when cars arrived. JMdict sense 2 is still *wheel*. The Arabic سَيَّارَة is from سَارَ, *to travel* — the traveller-machine." },
    { c: "mono", k: "ところ", r: "tokoro", e: "place", a: "مَكَان", at: "makān",
      n: "所 — the all-purpose *place*: a spot, an address, a neighbourhood. Chapter 13's どこ asks for one; ところ is what the answer is made of. いいところ — a good place — is this sheet's two shortest words already making a sentence." },
    { c: "mono", k: "りょう", r: "ryō", e: "dormitory", a: "سَكَنُ الطُّلَّابِ", at: "sakan aṭ-ṭullāb",
      n: "寮 — where the course's がくせい actually live. One of THREE common りょう: 量 *quantity* and 料 *fee* share the sound — and that 料 already sits inside chapter 7's りょうり (料理, cooking). A two-beat word with three common owners: the short-string rule at full strength." },
    { c: "mono", k: "べんきょう", r: "benkyō", e: "study", a: "دِرَاسَة", at: "dirāsa",
      n: "勉強 — literally *exertion-forcing*: the kanji admit what studying feels like. A noun here; the verb it will join (べんきょうします) is chapter 17's します pattern, one bracket away. Do not confuse its べん with べんり's — same sound, different characters, one card apart on this very sheet." },
    { c: "mono", k: "せいかつ", r: "seikatsu", e: "life, living", a: "مَعِيشَة", at: "maʿīsha",
      n: "生活 — 生, *live*, plus 活, *vigour*: the daily round of living, not the pulse. That is why the Arabic is مَعِيشَة — the livelihood you *lead* — and not حَيَاة, the life you *have*. The sheet's own dialogue uses it exactly so: にほんの せいかつ, your life-in-Japan." },
    { c: "mono", k: "おしごと", r: "oshigoto", e: "work, business", a: "عَمَل", at: "ʿamal",
      n: "お仕事 — 仕事, *work*, wearing the outward-politeness お of おちゃ and お父さん: it is *your* work being asked after, どんな おしごとですか. The textbook brackets the お (［お］仕事); the sheet prints it welded on. Bare 仕事 is the common dictionary word; the お-form is what the visit's politeness requires." },

    /* ---------- ちいさい ことば · asking, degree and joining ---------- */
    { c: "kotoba", k: "どう", r: "dō", e: "how, in what way", a: "كَيْفَ", at: "kayfa",
      n: "VOCAB6's card, back on duty: this chapter is the answer to it. 〜は どうですか — *how is ~?* — is the question every adjective on this sheet exists to serve, and the dialogue asks it of your whole life in Japan. (The bare sound どう also belongs to 銅 copper, 胴 torso and 同 same — kana alone, as ever, undersells the string.)" },
    { c: "kotoba", k: "どんな", r: "donna", e: "what kind of", a: "أَيُّ نَوْعٍ", at: "ayyu nawʿin",
      n: "VOCAB6's card, back for the same reason: どんな まちですか — *what kind of town?* — is the question whose answer is an adjective **wearing its ［な］ or its 〜い in front of the noun**: にぎやかな まち, おおきい まち. The two shapes of describing, summoned by one question word." },
    { c: "kotoba", k: "とても", r: "totemo", e: "very", a: "جِدًّا", at: "jiddan",
      n: "迚も in the dictionary, always kana in practice — the volume knob: とても おいしい, *very* delicious. Sits before any describing word from either family. Its partner in degree is the next card, and they lean opposite ways —" },
    { c: "kotoba", k: "あまり", r: "amari", e: "not so, not very", a: "لَيْسَ كَثِيرًا", at: "laysa kathīran",
      n: "余り — and the kanji is the teaching point: *the remainder, the excess*. As an adverb it means *not-so* — but only leaning on a NEGATIVE sentence-end (あまり〜くない), and that negative is grammar the course has not taught. So the word waits here as a block, its sentence still ahead — exactly as もう and まだ wait since chapter 18. The Arabic gloss packages the negation in: لَيْسَ كَثِيرًا, *not much*." },
    { c: "kotoba", k: "そして", r: "soshite", e: "and (then)", a: "وَأَيْضًا", at: "wa-ayḍan",
      n: "The sentence-joiner: full stop, then そして, then the next sentence — *and (also), and (then)*, both jobs in one word where Arabic would pick وَ, ثُمَّ or أَيْضًا by sense. Its contrasting twin is not a word but the frame 〜が、〜, taught in its own section: そして agrees, が turns." },

    /* ---------- ゆうめいな もの · the famous five ---------- */
    { c: "meisho", k: "ふじさん", r: "Fujisan", e: "Mt. Fuji", a: "جَبَلُ فُوجِي", at: "jabal Fūjī",
      n: "富士山 — and the さん is 山, this sheet's own mountain wearing its compound reading, NOT the honorific さん of たなかさん: Japan does not call the mountain *Mr Fuji*, English guidebooks invented that. 3,776 m, the highest やま in Japan, snow-capped most of the year — here to be the tall one: ふじさんは たかいです." },
    { c: "meisho", k: "びわこ", r: "Biwako", e: "Lake Biwa", a: "بُحَيْرَةُ بِيوَا", at: "buḥayrat Bīwā",
      n: "琵琶湖 — Japan's biggest lake, named for the biwa lute its outline resembles, with 湖, *lake*, read こ on the end: the same one-character suffix arrangement as 〜山. Here to be the big one: びわこは おおきいです." },
    { c: "meisho", k: "シャンハイ", r: "Shanhai", e: "Shanghai", a: "شَنْغَهَاي", at: "Shanghāy",
      n: "上海 — a Chinese name, so katakana carries the sound while the kanji spelling 上海 stays Chinese: *on-the-sea*. The set's one foreign city, here to give にぎやか something to describe at scale." },
    { c: "meisho", k: "しちにんのさむらい", r: "Shichinin no Samurai", e: "Seven Samurai", a: "السَّامُورَاي السَّبْعَة", at: "as-sāmūrāy as-sabʿa",
      n: "七人の侍, Kurosawa 1954 — and the title decomposes entirely into taught pieces: しち is chapter 15's seven, にん the people-counter from なんにん, の the possessive. A film title you can already parse. 侍 itself is JMdict-common — and the sentence this course builds about the film, ふるいですが、とても おもしろいです, is the 〜が、〜 frame's own showcase." },
    { c: "meisho", k: "きんかくじ", r: "Kinkakuji", e: "Kinkakuji Temple", a: "مَعْبَدُ الْجَنَاحِ الذَّهَبِيِّ", at: "maʿbad al-janāḥ adh-dhahabī",
      n: "金閣寺 — *Gold-Pavilion-Temple*, Kyoto, and the 金 is an old friend: chapter 10's Friday (金曜日, gold-star day) and chapter 18's money (お金, the metal) — third appearance, now meaning the actual gold leaf on the walls. The Arabic translates the meaning: Temple of the Golden Pavilion. Here to be the beautiful one: きんかくじは きれいです." },
  ],
};
