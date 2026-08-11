/* story12-data.js — chapter 12's 42 words as one short walk.
 *
 * Four scenes carrying every word in VOCAB12, each word in exactly one of them.
 * `one-day.js` renders it, from `lessons/0012-this-that-and-that-over-there.html`
 * with data-story="STORY12" data-sets="VOCAB12". Edit here, nowhere else.
 *
 * WHY A STORY. NOTES.md's story-first rule, set 2026-08-07: any chapter whose
 * material is a word list is built around a story, and the story lives in the
 * lesson. Chapter 12 qualifies for the same reason chapter 11 did — it is a
 * plain list off a lecture sheet with no generating rule to derive it from.
 *
 * BUT THE SHAPE OF THIS ONE IS DIFFERENT, and the difference is the chapter.
 * Chapter 11's forty-two words were unrelated, so sequence was the only relation
 * available. Chapter 12's are mostly OBJECTS IN ONE ROOM, which means the walk
 * can be a place rather than a plot: the desk, then the bag, then the machines
 * at the back. Scene order is spatial, and the reader can point at each thing in
 * turn — which is the chapter's own grammar being rehearsed by the layout of the
 * story. The six demonstratives get scene 1 to themselves for that reason: you
 * have to be able to point before the tour is worth taking.
 *
 * SHORT IS THE POINT, unchanged. Four scenes over 42 words, the same size as
 * chapter 11's. Read once, at the point of learning.
 *
 * NOT MERGED INTO ONEDAY or STORY11, deliberately, and the reason has teeth
 * here: seven of these words (これ それ あれ この その あの そう) are in VOCAB6,
 * so a merged walk would have to decide which chapter owns them, and
 * check_one_day.py's one-word-one-home rule would fire. Each walk is scoped to
 * its own sets precisely so both chapters can carry their own copies.
 *
 * THE MARKER CONTRACT, unchanged from one-day-data.js and story11-data.js.
 * Japanese in the prose is written {{これ}}. one-day.js turns each marker into a
 * speak button and builds the scene's word strip from the markers in order, so
 * there is no separate word list to fall out of sync. scripts/check_one_day.py
 * verifies both directions: every marker names a real VOCAB12 word, and every
 * VOCAB12 word appears in exactly one scene. A word may be MENTIONED again in
 * plain text — どれ, どの, じん and あのひと all are — because a marker means
 * "this word lives here", and a word gets one home.
 *
 * Prose may carry inline <em>; it is inserted as HTML. Markers become elements,
 * never strings, so nothing inside {{…}} can be injected as markup.
 *
 * Romaji is not stored here — one-day.js reads it off VOCAB12 and shows it on a
 * word's first appearance only. No Arabic here either: every one of the 42
 * carries its Arabic on its own card, and a walk that also carried Arabic script
 * would be a third thing to read. The rule cost story11 a redraft; see NOTES.md.
 *
 * THE CHAIN. The last sentence of every scene asks the question the next scene
 * answers — what are these things, what else is here, what language is it in.
 * The chapter's own frame これは なんですか。 is the question being asked, so the
 * chain is not a device bolted on: it is the grammar the chapter teaches.
 *
 * English is the carrier language by necessity. A story told in Japanese needs
 * verbs and particles beyond the one frame this chapter teaches.
 *
 * Fields: id · n scene number · title · lede one line · body array of paragraphs
 */

window.STORY12 = {
  scenes: [
    {
      id: "yubi",
      n: 1,
      title: "Three distances and a finger",
      lede: "Six words in two rows of three. Which row you need depends on one thing only: whether a noun is coming.",
      body: [
        "Your hand is flat on the desk and there is a book underneath it. Nothing in the room is nearer to you, so the word is {{これ}} — <em>this one</em> — and it stands on its own as a complete noun. Now say the noun as well, and the word changes shape rather than staying put: {{この}} book. One of them means <em>this one</em>; the other means <em>this ~</em> and cannot be said without the ~.",
        "The person opposite is holding a second book. It is not far — you could reach it — but it is not on your side, and that is what Japanese is measuring. Whose territory a thing is in, not how many centimetres away. So it is {{それ}}, and with the noun spoken, {{その}} book. The middle word of this set is not <em>middle distance</em>. It is <em>your</em> distance.",
        "A third book sits on a shelf behind you both. It belongs to neither side of the conversation, which makes it the only one the two of you can point at with the same word: {{あれ}}, or {{あの}} book. You have been using that last one for a week without being told it was a pattern — あのひと and あのかた in chapter 11 were this あの with a noun behind it.",
        "Lesson 6 already gave you the fourth member of each row: どれ, <em>which one</em>, and どの, <em>which ~</em>. So you learned the questions first and the answers second, and the grid that was three-quarters empty is now full. Which leaves the thing どれ exists to ask — what are all these objects?",
      ],
    },
    {
      id: "tsukue",
      n: 2,
      title: "Everything within arm's reach",
      lede: "Fourteen things on and around one desk, three of which are the same word with a noun bolted onto the front.",
      body: [
        "Start with the furniture, because you are already touching both pieces: the {{つくえ}} you are sitting at and the {{いす}} you are sitting on. Lesson 4 taught いす as a two-kana word with nothing around it; here it arrives with the rest of the room.",
        "On the desk, a {{ほん}} — and beside it the two books that are not quite books. A {{じしょ}}, thick and alphabetical. A {{ざっし}}, thin and glossy. Under both, today's {{しんぶん}}, whose two characters together mean <em>newly heard</em>, which is a better description of a newspaper than the English word manages.",
        "Three things to write in, and the difference between them is size. A {{ノート}} stays on the desk. A {{てちょう}} lives in a pocket. A {{めいし}} is not for writing in at all — it is the small stiff card with your name on it, handed over and received with both hands here. Its second character is one stroke of meaning away from the word for <em>noun</em>, and that is the mistake the lecture sheet makes.",
        "Which brings up the card family. A plain {{カード}} is the head of it, and Japanese builds the rest by putting a noun in front — a {{テレホンカード}}, for a payphone nobody has fed in twenty years. It is the one word on the page a dictionary will not call common. Arabic builds its cards in exactly the same order.",
        "Last, three things to write with, in ascending order of engineering: an {{えんぴつ}}, a {{ボールペン}}, and a {{シャープペンシル}} — which is named after the company, which was named after the pencil. The person opposite picks one of them up and asks the question this whole chapter is built to answer. What is that, the one near you?",
      ],
    },
    {
      id: "kaban",
      n: 3,
      title: "The bag, and the machines at the back",
      lede: "Four things you leave the house carrying, and seven that never leave the room.",
      body: [
        "Everything you carry goes into one {{かばん}} — briefcase, satchel and handbag are all this single word, because Japanese names the bag and not the errand. Inside it: a {{かぎ}}, a {{とけい}} if it is not already on your wrist, and by the door a {{かさ}}, which in this country is not an optional item.",
        "The equipment stacked at the back of the room is a small museum. A {{テープ}} — the sheet prints カセット in brackets in front of it, and the brackets are telling you the short form is the word. A {{テープレコーダー}} to play it on, which runs to nine beats once the long vowels are counted and is the longest thing in the chapter. A {{テレビ}}, which is <em>television</em> cut in half, and a {{ラジオ}}, which was short enough already to survive whole.",
        "Two of them are still in use. A {{カメラ}}, which both of your languages borrowed from the same Latin word for a room. And a {{コンピューター}} — lesson 7's word, where ピュ is one beat however wide it looks on the page. Outside the window a {{じどうしゃ}} goes past, three characters meaning <em>self-moving vehicle</em>, which is what <em>automobile</em> means too. Someone picks up the manual and asks what language it is in.",
      ],
    },
    {
      id: "okurimono",
      n: 4,
      title: "What language, and what to say when handed a box",
      lede: "Three words for naming a language, three for answering a question, and the five that carry you through being given a present.",
      body: [
        "The manual is in {{えいご}}. The book on the desk is in {{にほんご}}. Both end the same way, because both are a country plus {{ご}} — the suffix that turns a place into its language, exactly as chapter 11's じん turned a place into a nationality. It is one mora long, and four other common words are spelled with it.",
        "Now the answering. The question word is {{なん}}, sitting directly in front of です, and there are two replies to it and no others. Agree, and the word is {{そう}} — literally <em>that way</em>, the そ of this chapter's own set, so agreeing in Japanese means agreeing with the <em>shape</em> of the other person's question. Disagree, and it is {{ちがいます}}, <em>it differs</em>: Japanese corrects the statement rather than the speaker.",
        "Someone has been waiting to hand you something, and opens with {{あのう}} — which is あの held for an extra beat while they find the words. Then the box: {{チョコレート}}, or a bag of {{コーヒー}}, offered with {{どうぞ}}, the word that belongs to the hand giving and never to the hand asking. You take it and say {{どうも}}, which alone can mean thanks, hello, sorry, or <em>very</em>, depending on what the rest of the sentence turns out to be.",
        "Five set sentences finish that exchange, and they are in the next section. One of them is the answer to the greeting you learned yesterday — which means the two lecture sheets, a day apart, are two halves of one conversation.",
      ],
    },
  ],
};
