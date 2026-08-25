/* story18-data.js — chapter 18's 41 words as one season of giving.
 *
 * Five scenes carrying every word in VOCAB18, each word in exactly one of
 * them. `one-day.js` renders it, from `lessons/0018-giving-and-receiving.html`
 * with data-story="STORY18" data-sets="VOCAB18". Edit here, nowhere else.
 *
 * THE SHAPE IS A SEASON, NOT A DAY, AND THE SHEET SUPPLIED IT — クリスマス is
 * on the list, and every noun on the sheet is either a thing you give, a tool
 * you give it with, or a person you give it to. So the walk runs from the
 * wrapping table to the post office to the family table to the evening phone
 * call: the presents move, and the words move with them.
 *
 * NOT MERGED INTO ANY OTHER WALK. Six of these words have cards in VOCAB,
 * VOCAB5 and VOCAB7; each walk is scoped to its own set so every chapter
 * carries its own copies, per check_one_day.py.
 *
 * THE MARKER CONTRACT, unchanged: {{かな}} markers are the single source of
 * truth, one home per word, strip derived from marker order, romaji read off
 * VOCAB18. A word may be MENTIONED in plain text — でんわ and おちゃ are —
 * because a marker means "this word lives here".
 *
 * THE VERBS ARE FIXED SHAPES, per learning-records/0017, and 〜を + verb is a
 * frame, per learning-records/0020. The prose swaps nouns into the frame and
 * never builds a second form from a ます word. もう and まだ appear WITHOUT
 * the past-tense sentence they really want — that grammar is still ahead of
 * the course, and the lesson says so.
 *
 * BOTH SLIPS ARE TAUGHT CORRECTLY HERE, not reproduced: the borrowing verb is
 * group II whatever the sheet's marker says, and the fax is ファクス with a
 * small ァ. See vocab18-data.js and LIBRARY.md.
 *
 * English is the carrier language by necessity. No Arabic in the prose —
 * every word carries its Arabic on its own card.
 *
 * Fields: id · n scene number · title · lede one line · body array of paragraphs
 */

window.STORY18 = {
  scenes: [
    {
      id: "tsutsumi",
      n: 1,
      title: "The wrapping table",
      lede: "A season on the calendar, and a tabletop of things about to change owners.",
      body: [
        "December, and {{クリスマス}} is close — the English name carried into Japanese sound by sound, the way Arabic instead translates it into <em>the feast of the Birth</em>. On the table sits every {{プレゼント}} of the season: a folded {{シャツ}} — the loanword that, alone, historically means the layer underneath — and one {{はな}} for the top of the box. Watch that word: it is 花, the flower, not lesson 4's 鼻, the nose. Same kana, different word, and only the kanji keeps them apart.",
        "The wrapping itself is this chapter's first verb at work. You take the {{かみ}} — 紙, paper, one sound shared with the god and the haircut — and with the {{はさみ}}, the tool named for its pinch, you {{きります}} it to size. A strip of {{セロテープ}} — a British brand name become an ordinary word — closes each corner.",
      ],
    },
    {
      id: "jimusho",
      n: 2,
      title: "At the office",
      lede: "One colleague teaches, one learns — the third pair of the chapter, at a desk full of katakana.",
      body: [
        "Next morning, the office. A colleague {{おしえます}} — teaches — and you {{ならいます}} — learn: one small ceremony seen from both desks, the way Arabic tells عَلَّمَ from تَعَلَّمَ with a change of verb form rather than a change of root. The syllabus today is machines: the {{パソコン}} — a personal computer clipped to four beats — the {{ワープロ}} beside it, clipped from a word processor the same way, and the {{ファクス}} in the corner, spelled with a small ァ whatever the sheet says.",
        "The drawer holds the smaller tools of the paper trade: a {{ホッチキス}} — a stapler still wearing the Hotchkiss company's name a century on — a {{パンチ}} for filing holes, and a {{けしゴム}}, the course's first half-kanji, half-katakana word: Japan's own <em>erase</em> welded to Dutch rubber.",
      ],
    },
    {
      id: "kozutsumi",
      n: 3,
      title: "The parcel and the trip",
      lede: "What cannot be handed over must be sent — and one box has already crossed a continent.",
      body: [
        "Not every present can wait for a doorway. The wrapped box becomes {{にもつ}} — a load-thing, luggage — and at the counter you {{おくります}} it: send it, for a little {{おかね}}, the metal that money still calls itself.",
        "One gift on the table travelled further than the rest. The {{りょこう}} last spring — <em>journey-going</em>, now wearing 旅行 — crossed {{ヨーロッパ}}, a name Japanese took from Portuguese ships, and ended in {{スペイン}}. The {{きっぷ}} that got you there is still in the guidebook: 切符, a <em>cut token</em>, this chapter's own verb sitting in its front seat. What came home is {{おみやげ}} — not a present for an occasion but a memento of a place, which is why Japanese refuses to call it プレゼント, and why Arabic glosses ticket and souvenir from one root: both are <em>a remembering</em>.",
      ],
    },
    {
      id: "shokutaku",
      n: 4,
      title: "The family table",
      lede: "Give and receive, humble and honorific — the chapter's two big pairs meet over dinner.",
      body: [
        "The visit itself. At your parents' house it is {{ちち}} who opens the door and {{はは}} who calls from the kitchen — the humble words, because they are <em>your own</em>. The neighbour at the gate asks after them with the other pair: your {{おとうさん}}, your {{おかあさん}} — honorific outward, humble inward, one rule wearing four words. Arabic keeps the same courtesy in وَالِد where plain أَب would sound bare.",
        "The presents change hands. You {{あげます}} — give, literally <em>raise up</em>, the politeness drawn inside the verb — and you {{もらいます}} in return: one moment, named from both ends. Then dinner, where every {{て}} — the shortest noun in the course — reaches for its tools: {{はし}} at the head of the table setting, and the western three from the drawer, {{スプーン}}, {{ナイフ}} and {{フォーク}}, on duty for the cake.",
      ],
    },
    {
      id: "denwa",
      n: 5,
      title: "The evening call",
      lede: "The last verb hangs on a wire, and two little adverbs face opposite ways in time.",
      body: [
        "Evening. You {{かけます}} — with でんわ in the を-slot, the bracket the sheet itself prints — and the phone call runs down the wire to a friend still packing for a trip of their own. You {{かします}} a camera for the journey; the guidebook from Spain, they {{かります}} — lend and borrow, one seam-syllable apart, and never mind the sheet's marker: the borrowing verb is group II.",
        "Has the parcel arrived? {{もう}} — already — or {{まだ}} — not yet: two adverbs holding opposite ends of the same question, waiting for the past tense that would finish their sentences, a grammar still ahead of this course. {{これから}}, the friend says — from now on, built from これ and から like それから before it — postcards, every week.",
      ],
    },
  ],
};
