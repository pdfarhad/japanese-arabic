/* story11-data.js — chapter 11's 42 words as one short walk.
 *
 * Four scenes carrying every word in VOCAB11, each word in exactly one of them.
 * `one-day.js` renders it, from `lessons/0011-introducing-yourself.html` with
 * data-story="STORY11" data-sets="VOCAB11". Edit here, nowhere else.
 *
 * WHY A STORY AT ALL, and why per chapter. NOTES.md's story-first rule, set
 * 2026-08-07: any chapter whose material is a word list is built around a story,
 * and the story lives in the lesson. Chapter 11 is where that starts because it
 * is the first chapter with no generating rule — chapters 4, 5 and 7 each had a
 * spelling constraint and chapter 10 had the calendar, so in each of those a
 * rule could tell you which words to expect. Here nothing can. Sequence is the
 * only thing that supplies a relation between forty-two unrelated words. Full
 * argument in learning-records/0011 and, before it, 0007.
 *
 * SHORT IS THE POINT. reference/one-day.html is fourteen scenes over 230 words
 * and is the right size for the course. This is four scenes over 42 and is the
 * right size for a chapter — read once, at the point of learning. Resist growing
 * it; a chapter walk that needs a table of contents has stopped being one.
 *
 * NOT MERGED INTO ONEDAY, deliberately. The course-wide walk's premise is that
 * it holds exactly the words of lessons 4-7, and check_one_day.py enforces it in
 * both directions. Appending chapter 11 would make that claim false rather than
 * bigger. Same call as keeping VOCAB11 out of VOCAB.
 *
 * THE MARKER CONTRACT, unchanged from one-day-data.js. Japanese in the prose is
 * written {{わたし}}. one-day.js turns each marker into a speak button and builds
 * the scene's word strip from the markers in order, so there is no separate word
 * list to fall out of sync. scripts/check_one_day.py verifies both directions:
 * every marker names a real VOCAB11 word, and every VOCAB11 word appears in
 * exactly one scene. A word may be MENTIONED again in plain text — a second
 * marker for it is an error, because a word gets one home.
 *
 * Prose may carry inline <em>; it is inserted as HTML. Markers become elements,
 * never strings, so nothing inside {{…}} can be injected as markup.
 *
 * Romaji is not stored here — one-day.js reads it off VOCAB11 and shows it on a
 * word's first appearance only. No Arabic here either: every one of the 42
 * carries its Arabic on its own card, and doubling the length would turn a
 * recall device into a third thing to read.
 *
 * THE CHAIN. The last sentence of every scene is a question that pulls you into
 * the next — who is here, what do they do, how old are they, where are they
 * from. The four scenes are the four blocks of the lecture sheet, in the order
 * a real self-introduction actually goes.
 *
 * English is the carrier language by necessity. A story told in Japanese needs
 * verbs and particles beyond the two frames this chapter teaches.
 *
 * Fields: id · n scene number · title · lede one line · body array of paragraphs
 */

window.STORY11 = {
  scenes: [
    {
      id: "heya",
      n: 1,
      title: "A room full of strangers",
      lede: "Every pronoun in the chapter, and the four endings you can put on a name — in the order you would actually reach for them.",
      body: [
        "The door closes behind you and the room turns round. {{わたし}} — <em>I</em> — is the first word you need and the last one to overuse: Japanese leaves it out whenever the sentence is obviously about you. Say it once to introduce yourself, then let it go. Speaking for the group you arrived with, it takes an ending and becomes {{わたしたち}}. Hang lesson 6's の on it and you own something: {{わたしの}} name, on the badge somebody is holding out to you.",
        "The person holding it is {{あなた}}, and that word is a trap. English says <em>you</em> every second sentence; Japanese would rather use your name, and to someone senior あなた can land as blunt. Its possessive is built exactly as わたしの was — {{あなたの}} name is on the next badge along. The safe move, though, is the name plus {{さん}} — one ending covering Mr., Ms. and Mrs. at once, where Arabic would have to settle on a gender before it could say anything at all.",
        "Three more endings share that slot. A child gets {{ちゃん}}, warm rather than respectful. A boy — or a junior at work, whatever his age — gets {{くん}}. And a country plus {{じん}} makes a nationality, which is the one that will multiply on you in scene four.",
        "Someone has been watching from the far side of the room. You do not know their name, so you say {{あのひと}}, <em>that person</em> — then you see who it is, and correct yourself to {{あのかた}}. The teacher claps, addresses the whole room as {{みなさん}}, and asks the question that runs the rest of the hour: what does everybody do?",
      ],
    },
    {
      id: "shigoto",
      n: 2,
      title: "What everybody does",
      lede: "Nine jobs, two endings that build five of them, and the three places they happen in.",
      body: [
        "The man who clapped is a {{せんせい}} — and he will never use that word about himself. Asked what he does, he says {{きょうし}}. The same job; the only difference is whose mouth it comes out of. 先生 is an honour other people give you, 教師 is a line on a form, and that rule holds all the way down this page.",
        "Round the table. A {{がくせい}}, who walked over from the {{だいがく}} across the road. A {{かいしゃいん}} — which is what you say when you are not naming the company; name it and the same person is a {{しゃいん}} instead. A {{ぎんこういん}}, and that is now three jobs in a row ending in 員, <em>member</em>. Then an {{いしゃ}} from the {{びょういん}} up the hill, and a {{けんきゅうしゃ}} who works two floors above her — both of those are 者, <em>one who</em>. Two endings, five of the nine jobs.",
        "Last, the woman kneeling by the projector: an {{エンジニア}}, the only borrowed word in the list, and so the only one written in katakana with no kanji to its name. The bulb goes, someone says the {{でんき}} has failed, and in the dark nobody can see a single face. Which is exactly when the next question gets asked — who is that, and how old are they?",
      ],
    },
    {
      id: "kiku",
      n: 3,
      title: "Asking, twice as politely",
      lede: "Two questions, each with a polite twin, and the two words you answer them with.",
      body: [
        "In the dark you ask {{だれ}} — <em>who?</em> Lesson 6's word, unchanged. Then the light comes back on, you see you have just said it to someone twice your age, and the polite twin arrives a beat longer: {{どなた}}. Politeness costs beats in this language, and it costs them in Arabic too.",
        "Age runs the same way. The counter is {{さい}}, so twenty-five is にじゅうごさい. Put lesson 6's なん in front and you get {{なんさい}}, <em>how old</em> — fine asked of a child, rude asked of almost anyone else. The polite form is not a new word at all: it is いくつ, which you have had since chapter 6, wearing one polite お — {{おいくつ}}.",
        "All of it can be answered in two syllables. {{はい}} agrees; {{いいえ}} does not, though in practice いいえ is often swallowed and left as ちょっと… and a pause. Nobody has yet asked the thing the whole room has been circling: where is everyone from?",
      ],
    },
    {
      id: "kuni",
      n: 4,
      title: "Where everyone is from",
      lede: "Eleven countries, each of which becomes a nationality the moment you add じん.",
      body: [
        "Round the table one more time, and every answer plus じん gives a nationality free. {{アメリカ}}. {{ブラジル}}. {{イギリス}} — which reached Japanese from Portuguese <em>inglês</em> rather than from English, four hundred years before anyone in this room was born, and ブラジル came down the same road.",
        "{{フランス}}. {{ドイツ}}, from the German <em>Deutsch</em>, which makes the Japanese name closer to what the country calls itself than the English one is. {{インド}} — and then {{インドネシア}}, which opens on the same two beats and is the longest word in the chapter, so hearing the start of it tells you nothing.",
        "Three from nearer by. {{ちゅうごく}}, the middle country, which is what the name means in Chinese too. {{かんこく}} — written in kana alone that could equally be 勧告, <em>advice</em>, and telling them apart is the entire job of the kanji column. {{タイ}}, where katakana abandons you altogether: the same two characters are a sea bream before they are a country. And {{にほん}}, sun-origin, where all of this is happening.",
        "Everyone has now said who they are, what they do, and where they came from. Which leaves one sentence — the one that actually says it.",
      ],
    },
  ],
};
