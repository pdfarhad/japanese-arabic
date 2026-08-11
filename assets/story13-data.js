/* story13-data.js — chapter 13's 41 words as one short walk.
 *
 * Four scenes carrying every word in VOCAB13, each word in exactly one of them.
 * `one-day.js` renders it, from `lessons/0013-how-much-and-which-floor.html`
 * with data-story="STORY13" data-sets="VOCAB13". Edit here, nowhere else.
 *
 * WHY A STORY. NOTES.md's story-first rule: any chapter whose material is a word
 * list is built around a story, and the story lives in the lesson.
 *
 * THE SHAPE IS CHAPTER 12'S, ONE FLOOR UP. Chapter 12's walk was a place rather
 * than a plot — a desk, a bag, the machines at the back — because its words were
 * objects in one room. Chapter 13's are the rooms themselves, so the walk is a
 * **building**, and it moves VERTICALLY: the entrance, then up through the
 * floors, then the basement. That is not decoration. The chapter's own new
 * material is the floor counter 〜階 and the question なんがい, so a walk that
 * climbs is the chapter's grammar being rehearsed by the route.
 *
 * Scene 1 is the six-plus-two pointing words on their own, for the same reason
 * chapter 12 gave its demonstratives a scene to themselves: you have to be able
 * to point before a tour of anywhere is worth taking.
 *
 * NOT MERGED INTO ONEDAY, STORY11 OR STORY12. Eight of these words are in
 * KOSOADO and three of them (どこ, どちら, いくら) are VOCAB6 cards, so a merged
 * walk would have to decide which chapter owns them and check_one_day.py's
 * one-word-one-home rule would fire. Each walk is scoped to its own sets exactly
 * so both chapters can carry their own copies.
 *
 * THE MARKER CONTRACT, unchanged from one-day-data.js. Japanese in the prose is
 * written {{ここ}}. one-day.js turns each marker into a speak button and builds
 * the scene's word strip from the markers in order, so there is no separate word
 * list to fall out of sync. scripts/check_one_day.py verifies both directions:
 * every marker names a real VOCAB13 word, and every VOCAB13 word appears in
 * exactly one scene. A word may be MENTIONED in plain text — これ, なん, おてあらい
 * and several numbers all are — because a marker means "this word lives here".
 *
 * Prose may carry inline <em>; it is inserted as HTML. Markers become elements,
 * never strings, so nothing inside {{…}} can be injected as markup.
 *
 * Romaji is not stored here — one-day.js reads it off VOCAB13 and shows it on a
 * word's first appearance only. No Arabic here either: every one of the 41
 * carries its Arabic on its own card.
 *
 * TWO SLIPS ARE TAUGHT CORRECTLY IN THE PROSE, not reproduced: the walk says
 * ワイン (the sheet has ウイン) and エレベーター (the sheet drops the final ー).
 * See vocab13-data.js and LIBRARY.md.
 *
 * THE CHAIN. Each scene ends on the question the next answers — where is it,
 * what is in the building, what is on the shelves, what does it cost. The last
 * one is これは いくらですか, which is the sentence the chapter exists to build.
 *
 * English is the carrier language by necessity.
 *
 * Fields: id · n scene number · title · lede one line · body array of paragraphs
 */

window.STORY13 = {
  scenes: [
    {
      id: "sasu",
      n: 1,
      title: "Two more rows of the same grid",
      lede: "Eight words, and you have met every one of them before — as the ど column of a grid drawn in lesson 6.",
      body: [
        "You are standing in a doorway with a map in your hand. The place your feet are is {{ここ}} — the same こ that starts これ and この, now with a place ending on it. The place the person you are talking to is standing is {{そこ}}: their side, not a middle distance, exactly as それ was theirs and not merely further off. And the place neither of you is standing, across the concourse, is {{あそこ}} — the one word in the whole grid that refuses to follow the pattern, because あこ is what the rule predicts and nobody says it.",
        "The fourth is the one you have had since lesson 6: {{どこ}}, <em>where</em>. You learned the question two months before you learned its three answers, which is the shape this whole grid has been filled in — question column first, answers later.",
        "Now say all four again to someone you would not interrupt. {{こちら}}, {{そちら}}, {{あちら}}, {{どちら}}. The lecture sheet writes <em>polite equivalent of</em> beside each one, four times, and does not say why. The why is that these ask a <strong>direction</strong> where the short ones ask a <strong>place</strong> — and pointing vaguely at a direction is gentler than pointing at a spot. Every polite word in this course has been one beat longer than its plain twin, and these are no exception.",
        "You show the map to the person at the desk and ask どこ. They answer with a floor number you do not yet have the words for. First, the building.",
      ],
    },
    {
      id: "tatemono",
      n: 2,
      title: "Up through the building",
      lede: "Twelve rooms and ways between them, in the order you would meet them walking in and going up.",
      body: [
        "Through the doors into the {{ロビー}}, three beats with a long one at the end. On the left the {{うけつけ}} — one word covering the desk, the department and the person behind it. Behind that a corridor of doors: the {{じむしょ}} where the paperwork happens, the {{かいぎしつ}} with a long table in it, and a {{きょうしつ}} where somebody is teaching. Those last two end in the same character, 室, <em>room</em> — and the plainest word of all for the same thing is {{へや}}, which lesson 4 taught you when it was just two kana.",
        "Lunch is upstairs in the {{しょくどう}}. To get there: the {{かいだん}} if you are impatient, the {{エレベーター}} if you are not, or the {{エスカレーター}}, which is the longest word in the chapter at eight beats. Take the stairs and read the character on the sign — 階 — because it is about to become the counter you need most.",
        "First, though, the {{トイレ}}. The sheet gives a second word for it in brackets, おてあらい, literally <em>honourable hand-washing</em>: use that one in somebody's home and the borrowed one in a station. And below everything, down one more flight, the {{ちか}} — the basement, where in every Japanese department store the food is. Written in kana alone that word is also <em>the price of land</em>, which in a building like this is not even an unreasonable reading.",
        "The shop floors are above you. What is on them?",
      ],
    },
    {
      id: "mise",
      n: 3,
      title: "What is yours, and what is for sale",
      lede: "Four things you already own, five you could buy, and the word for the part of the shop that sells them.",
      body: [
        "Somebody at the reception asked you three questions while you waited, and each one is a word on this page. Your {{くに}} — the sheet writes an お in front of it, because that polite お goes on when the country is <em>somebody else's</em> and comes off when it is your own. Your {{かいしゃ}}, whose two characters you have had since chapter 11 sat inside かいしゃいん: you learned the employee before the employer. And your {{でんわ}}, <em>electric talk</em>, sharing its first character with chapter 11's でんき.",
        "You gave them the number and said you would be at {{うち}} after six — a word that is the building, the household, and by extension <em>us</em>, the group you belong to.",
        "Then upstairs to the {{うりば}}, the <em>selling place</em>, which is what a department store calls each of its floors. On this one: {{くつ}}, which lesson 4 gave you and which you will be taking off at every doorway in this country anyway. A {{ネクタイ}}, both halves borrowed straight from English. A bottle of {{ワイン}} — and if the lecture sheet in front of you says ウイン, the sheet is wrong; its own transliteration column says otherwise. And {{たばこ}}, which arrived from Portuguese four hundred years ago along the same road as パン.",
        "You pick up the tie. Now the only question left is the one the chapter was built for.",
      ],
    },
    {
      id: "nedan",
      n: 4,
      title: "How much, and which floor",
      lede: "The three units, the counter that changes sound, and the four words that turn a price into a purchase.",
      body: [
        "{{いくら}} — <em>how much?</em> Lesson 6 taught you that word at a point in the course when there was no way to answer it. Here are the answers. {{ひゃく}}, a hundred. {{せん}}, a thousand. And {{まん}}, which is where Japanese stops behaving like English: it is not a word meaning <em>ten thousand</em> so much as a <strong>unit</strong>, a fourth column the language counts in. It is never said alone — ten thousand is いちまん — and from it upward every number takes its 一, where 百 and 千 never do.",
        "Prices attach the counter straight onto the number with no gap: {{えん}}, the yen, whose character 円 also means <em>circle</em>, after the round coin. さんびゃくえん. はっせんえん. The sounds shift as you go — three hundred is さんびゃく, six hundred ろっぴゃく, eight hundred はっぴゃく — and nobody decided that; it is what happens when those consonants collide.",
        "The floors do the same thing. {{かい}} is the counter, the same 階 that was standing in かいだん two scenes ago, and the third floor is さんがい rather than さんかい. You can hear the rule in the question itself: {{なんがい}}, <em>what floor</em>, voiced exactly like さんがい. When the sheet prints 〜がい in brackets beside 〜かい, that bracket is the whole sound change, compressed.",
        "The assistant answers you in a register you have not met: {{でございます}}, which the sheet glosses only as <em>polite equivalent of です</em>. Shop staff say it to customers and customers do not say it back — politeness pointing away from the speaker, for the third chapter running. Then {{じゃ}}, the hinge of every transaction in the language: the moment you stop asking and start deciding. You buy the tie, and the receipt says the shop is near {{しんおおさか}}, the bullet-train station whose name simply means <em>new Ōsaka</em>. The wine was from {{イタリア}} and the watch in the case beside it from {{スイス}} — which in Japanese has no r in it at all, because it came by way of French.",
      ],
    },
  ],
};
