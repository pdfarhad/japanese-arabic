/* story17-data.js — chapter 17's 45 words as one day of doing things.
 *
 * Five scenes carrying every word in VOCAB17, each word in exactly one of them.
 * `one-day.js` renders it, from `lessons/0017-verbs-and-their-objects.html`
 * with data-story="STORY17" data-sets="VOCAB17". Edit here, nowhere else.
 *
 * THE SHAPE IS A DAY, AND THE SHEET SUPPLIED IT — the eleven verbs ARE a day's
 * work: you eat, you shop, you play and write, you meet someone under the
 * blossoms, and the evening watches and listens. The nouns arrive already
 * sorted into the scenes their verbs live in, because that is how the teacher
 * listed them: meals, food, drink, media, places, games.
 *
 * NOT MERGED INTO ANY OTHER WALK. Seven of these words have cards in VOCAB,
 * VOCAB5 and VOCAB7; each walk is scoped to its own set so every chapter
 * carries its own copies, per check_one_day.py.
 *
 * THE MARKER CONTRACT, unchanged: {{かな}} markers are the single source of
 * truth, one home per word, strip derived from marker order, romaji read off
 * VOCAB17. Base before derived: ごはん is marked before あさごはん in scene 1.
 * A word may be MENTIONED in plain text — たばこ, ともだち and the lesson-6
 * revision words are — because a marker means "this word lives here".
 *
 * THE VERBS ARE FIXED SHAPES, per learning-records/0017, and 〜を + verb is a
 * frame, per learning-records/0020. The prose swaps nouns into the frame and
 * never builds a second form from a ます word, never contrasts を with
 * anything, never moves it.
 *
 * THE SLIP IS TAUGHT CORRECTLY HERE, not reproduced: the photograph is taken
 * with 撮ります, as the sheet's own ［写真を〜］ bracket and the textbook both
 * require; the sheet's 取ります is flagged in the lesson. See vocab17-data.js
 * and LIBRARY.md.
 *
 * English is the carrier language by necessity. No Arabic in the prose — every
 * word carries its Arabic on its own card.
 *
 * Fields: id · n scene number · title · lede one line · body array of paragraphs
 */

window.STORY17 = {
  scenes: [
    {
      id: "asa",
      n: 1,
      title: "Morning rice",
      lede: "The first meal, and the word that names every meal after it.",
      body: [
        "The day starts with {{ごはん}} — <em>cooked rice</em>, and therefore <em>a meal</em>, because in this language rice stands for eating itself. This one is {{あさごはん}}, morning rice, whatever is actually on the table. Today it is {{パン}} and a boiled {{たまご}} — the missionaries' Portuguese loaf beside the ball-child.",
        "You {{たべます}} — verb last, the way this chapter will keep insisting — and you {{のみます}} something warm with it: {{こうちゃ}}, the <em>crimson</em> tea, or a glass of {{ぎゅうにゅう}}, now readable as <em>cow's milk</em> after two chapters of being lesson 7's hardest yōon." ,
      ],
    },
    {
      id: "kaimono",
      n: 2,
      title: "The shopping",
      lede: "One verb, one shop, and a basket of nouns to swap through the frame.",
      body: [
        "Mid-morning you walk to the {{みせ}} — the plain word for a shop, sitting under the department store and the supermarket of earlier chapters. Here the frame earns its keep: you {{かいます}} whatever the basket needs, and the sentence never changes shape. {{にく}} for tomorrow, a whole {{さかな}}, {{やさい}} from the field, {{くだもの}} for after.",
        "Something to drink goes in too: a bottle of {{みず}} — the 水 of Wednesday, finally read みず — and a carton of {{ジュース}}, which in Japan means most soft drinks, not only the squeezed kind.",
      ],
    },
    {
      id: "gogo",
      n: 3,
      title: "The afternoon",
      lede: "します turns nouns into games, and the desk turns paper into two directions.",
      body: [
        "A quick {{ひるごはん}} — midday rice — and the afternoon opens. You {{します}} something: {{テニス}} if there are two of you, {{サッカー}} if there are twenty-two. The same verb does quieter work at the desk, where {{しゅくだい}} — the problem that lodges with you overnight — is waiting to be done.",
        "Paper runs in two directions. You {{かきます}} a {{レポート}} for class — the sound かく covers <em>write</em>, <em>draw</em> and <em>paint</em>, and today it is all writing. Then you {{よみます}} a {{てがみ}} that came in the post: a <em>hand-paper</em>, from a hand far away. Through the window, the {{にわ}} — lesson 4's garden, now wearing 庭 — is the one thing in this chapter you do nothing to but look at.",
      ],
    },
    {
      id: "hanami",
      n: 4,
      title: "Under the blossoms",
      lede: "The one verb that points with に, at the one event with its own polite お.",
      body: [
        "Late afternoon you {{あいます}} — and this is the verb that breaks the pattern, because you meet a friend the way Arabic does, <em>with</em> them: ともだちに, the に pointing at who. The friend is from {{メキシコ}} — the sheet's own addition, beyond the textbook's list, and chapter 11's 〜じん still works on it.",
        "{{いっしょに}} — in one bundle — you head for {{おはなみ}}, the blossom-viewing that wears the polite お of a national institution. Under the trees you {{とります}} a {{しゃしん}} — with 撮, the photograph-taking とる, whatever the sheet printed — and pour {{おちゃ}} from a flask: green, because unmarked tea in Japan always is. {{ときどき}} — time-time, sometimes — a petal lands in the cup, which is the entire point of the institution.",
      ],
    },
    {
      id: "ban",
      n: 5,
      title: "The evening",
      lede: "Evening rice out, and then the room fills with things to watch and hear.",
      body: [
        "{{ばんごはん}} is eaten out tonight, at a {{レストラン}} — French word, French silent t. Someone orders {{ビール}}, the Dutch traders' vowel intact; someone orders {{おさけ}}, the drink so central its name covers the whole shelf. On the way out a stranger {{すいます}} — inhales — a cigarette by the door: chapter 13 sold you the たばこ, and this chapter finally supplies its verb.",
        "{{それから}} — <em>from that</em>, and then — home. You {{みます}} something: a {{えいが}} if the night is long, a {{ビデオ}} if it is longer still. Or the room goes dark and you {{ききます}} a {{ＣＤ}} instead — one verb for <em>hear</em> and <em>listen</em> both, and tonight it is listening.",
      ],
    },
  ],
};
