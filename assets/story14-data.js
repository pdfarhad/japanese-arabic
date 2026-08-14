/* story14-data.js — chapter 14's 46 words as one short walk.
 *
 * Five scenes carrying every word in VOCAB14, each word in exactly one of them.
 * `one-day.js` renders it, from `lessons/0014-the-working-day.html` with
 * data-story="STORY14" data-sets="VOCAB14". Edit here, nowhere else.
 *
 * WHY A STORY. NOTES.md's story-first rule: any chapter whose material is a word
 * list is built around a story, and the story lives in the lesson.
 *
 * THE SHAPE IS THE CHAPTER'S OWN SUBJECT, WHICH HAS NOT HAPPENED BEFORE.
 * Chapter 12's walk was a room, chapter 13's a building — both places chosen to
 * hold the words. Chapter 14's words ARE a day, so the walk is simply a day in
 * order, and the route needs no invention. That is worth noticing rather than
 * repeating: a walk should be the cheapest true structure available, and here
 * the sheet supplied it.
 *
 * The route does move, though, from the smallest unit outward: what you do, then
 * what the clock says, then where you go, then which day it was, then a call to
 * another city. Each scene widens by one frame.
 *
 * NOT MERGED INTO ONEDAY, STORY11, STORY12 OR STORY13. Eleven of these words
 * already have cards in five other sets, so a merged walk would have to decide
 * which chapter owns あさ and check_one_day.py's one-word-one-home rule would
 * fire. Each walk is scoped to its own set exactly so both chapters can carry
 * their own copies.
 *
 * THE MARKER CONTRACT, unchanged. Japanese in the prose is written {{おきます}}.
 * one-day.js turns each marker into a speak button and builds the scene's word
 * strip from the markers in order, so there is no separate word list to fall out
 * of sync. scripts/check_one_day.py verifies both directions. A word may be
 * MENTIONED in plain text — よる, おてあらい, several numbers and the phone
 * phrases all are — because a marker means "this word lives here".
 *
 * Prose may carry inline <em>; it is inserted as HTML. Markers become elements,
 * never strings, so nothing inside {{…}} can be injected as markup.
 *
 * TWO SLIPS ARE TAUGHT CORRECTLY IN THE PROSE, not reproduced: the walk says
 * なんぷん (the sheet has なんぶん) and treats おきます as a Group II verb (the
 * sheet marks it I). See vocab14-data.js and LIBRARY.md.
 *
 * THE VERBS ARE FIXED SHAPES HERE, per Farhad's decision of 2026-08-14. The
 * prose says what each ます word means and never builds a second form from it.
 * See learning-records/0017.
 *
 * Romaji is not stored here — one-day.js reads it off VOCAB14. No Arabic either:
 * every one of the 46 carries its Arabic on its own card.
 *
 * English is the carrier language by necessity.
 *
 * Fields: id · n scene number · title · lede one line · body array of paragraphs
 */

window.STORY14 = {
  scenes: [
    {
      id: "ugoki",
      n: 1,
      title: "Six things a day is made of",
      lede: "The chapter opens with verbs, which is new — and every one of them arrives already finished, in the only form you need.",
      body: [
        "A day starts when you {{おきます}} and ends when you {{ねます}}. Between those two the sheet gives you four more: you {{はたらきます}}, you {{やすみます}}, you {{べんきょうします}}, and at some point the thing you were doing {{おわります}}.",
        "Every one of them ends in ます, and that ending is doing one job: it makes the verb <strong>polite</strong>. Learn each word with the ます already attached, the way you learned きました in chapter 11 and みせて in chapter 13 — as a block, not as something you assemble. The Roman numerals the sheet prints beside them are the beginnings of a system for building <em>other</em> forms, and that system is not in this course yet.",
        "One of those numerals is wrong, which is a useful accident. おきます is marked I; it belongs to group II, the same group as the ねます on the very next line, and for the same reason — both are verbs whose stem ends in a vowel. Nothing on this page depends on it. It is worth knowing only because a group number has exactly one use, and using the wrong one would spoil every form you built from it.",
        "You get up. What time is it?",
      ],
    },
    {
      id: "tokei",
      n: 2,
      title: "What the clock says",
      lede: "Six words for the clock and five for the day around it — and Japanese reads them in the opposite order to English.",
      body: [
        "{{いま}} — <em>now</em>. The character is 今, and you will see it again twice before this chapter is over. To answer the question you need two counters and a shortcut. {{じ}} is the hour, and after 〜階 and 〜円 it is a holiday: いちじ, にじ, さんじ, straight up to twelve with nothing changing. {{ふん}} is the minute, and it is the opposite.",
        "The shortcut is {{はん}}, <em>half</em>. It stands where the minutes would stand and replaces them: にじはん is half past two. Nobody says the long version out loud unless they are reading a departure board.",
        "Now the two questions, both of which you have had since lesson 6 with no way to answer them. {{なんじ}}, <em>what time</em> — and if your sheet says なんぶん for the other one, it is a slip: it is {{なんぷん}}, with a small circle, not two strokes. The sheet's own line for the counter prints 〜ふん（〜ぷん）, so it disagrees with itself by two rows. It matters because なにぶん, with the two strokes, is a real word meaning <em>anyway</em>.",
        "Around the clock sits the day. {{ごぜん}} is <em>before noon</em> and {{ごご}} is <em>after noon</em> — literally, in the characters: 午 is noon, 前 is before, 後 is after. Both of them go in front of the hour, not after it, so the whole time runs biggest unit to smallest with no exceptions: ごぜん しちじ よんじゅうごふん. English puts the day-half last and counts the minutes backwards from the hour; Japanese never does either.",
        "The plainer words for the same stretches are {{あさ}}, {{ひる}} and {{ばん}}, which lessons 4 and 5 gave you. The sheet brackets よる beside ばん and they are not the same: ばん is the evening as a <em>part of the day you do things in</em>, which is why every compound below is built on it. Where are you doing them?",
      ],
    },
    {
      id: "basho",
      n: 3,
      title: "Where the day is spent",
      lede: "Five buildings, and five words for the shape a week makes.",
      body: [
        "Five places, and four of them are named after what is kept inside. The {{ぎんこう}}, whose two characters are <em>silver</em> and <em>to go</em>. The {{ゆうびんきょく}}, the post bureau. The {{としょかん}}, the hall of drawings and books — lesson 7 taught you the word as a mouthful of yōon; here it is somewhere you walk into. And the {{びじゅつかん}}, the same 館 <em>hall</em> with fine art in it instead.",
        "The fifth is the {{デパート}}, which is not named after anything — it is English, clipped in half, and it is the building chapter 13 walked you up through floor by floor.",
        "Between the places, the gaps. {{やすみ}} is a rest, a holiday, a day off, and it is simply やすみます with the ます taken off — the commonest way this language turns a verb into a noun, handed to you on the same page as the verb it comes from. Put ひる in front and you get {{ひるやすみ}}, the lunch break.",
        "And when it happens every time, 毎 goes on the front: {{まいあさ}} every morning, {{まいばん}} every night — built on ばん, note, not on よる — and {{まいにち}}, which chapter 10 already gave you. Three compounds, one character, no new sounds. Which day was it, though?",
      ],
    },
    {
      id: "hi",
      n: 4,
      title: "Five days you can name without counting",
      lede: "A window two days either side of today, and Japanese has a single word for every position in it.",
      body: [
        "{{きょう}} is today. Behind it: {{きのう}} yesterday, and {{おととい}} the day before that. Ahead of it: {{あした}} tomorrow, and {{あさって}} the day after. Five consecutive days and <strong>five single words</strong> — no counting, no phrases. Arabic manages three of the five and builds أَوَّلَ أَمْسِ and بَعْدَ غَدٍ for the outer two; English builds phrases for both. Chapter 13 found Japanese short of a word English had; this is the same comparison running the other way.",
        "Two of those days get their parts named too. {{けさ}} is <em>this morning</em> — written 今朝, <em>now</em> plus <em>morning</em>, but read as neither of them, so you take the word whole. {{こんばん}} is <em>this evening</em>, written 今晩 with the same 今 behaving normally this time. Say こんばん with は on the end and you have the greeting you learned on day one.",
        "There is a trap sitting inside this scene and it is entirely fair. あした is 明日, tomorrow. But あした is also a listed reading of 朝 — the character this same sheet teaches four rows earlier as あさ, <em>morning</em>. Two of the chapter's own words are homophones of each other, and only the character separates them.",
        "The last question is {{なんようび}}, <em>what day of the week</em>. Your sheet lists it with no answers beside it, and the textbook it was copied from lists all seven. They were left out on purpose: chapter 10 taught げつようび through にちようび a month ago, so only the question was still missing.",
      ],
    },
    {
      id: "denwa",
      n: 5,
      title: "Ringing a number you do not have",
      lede: "Three connectives, two words about numbers, and five cities at the other end of the line.",
      body: [
        "You need a {{ばんごう}} — a number in the sense of a label rather than a quantity, which is what chapter 13's numbers were. So you dial 104 and ask {{なんばん}}, <em>what number</em>. Neither of those two question words has an entry of its own in the dictionary; both are simply なん with something stuck to it, the fifth and sixth time lesson 6's pattern has paid out.",
        "Three small words join the rest together. {{から}} means <em>from</em> — chapter 11 gave it to you buried inside 〜から きました, and here it stands on its own. {{まで}} means <em>until</em>, and the two are almost never apart: くじから ごじまで, from nine until five. {{と}} means <em>and</em>, but only between nouns; it cannot join two sentences, which makes it narrower than the English word and narrower than Arabic's وَ.",
        "The person who answers says something about {{そちら}} — <em>your end</em>. Chapter 13 taught this word as <em>that way</em>, the polite version of そこ, and its card said at the time that it also means <em>you</em> in letters and on the phone. This is that promise coming due: pointing at a direction rather than at a person is the same politeness move, and on a telephone the direction is wherever the other person is sitting.",
        "The call is about the time somewhere else, which is what the whole chapter has been building toward. It is one in the afternoon in {{ロンドン}}, eight in the morning in {{ニューヨーク}}, five in the afternoon in {{ペキン}}, six in the evening in {{バンコク}}, and five in the morning in {{ロサンゼルス}} — where nobody is awake to answer, so you will ring あした instead.",
      ],
    },
  ],
};
