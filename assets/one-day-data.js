/* one-day-data.js — every word the course has taught, as one day's walk.
 *
 * Fourteen scenes carrying all 230 words from lessons 4 to 7, each word in
 * exactly one of them. `one-day.js` renders it; `reference/one-day.html` mounts
 * every scene and `lessons/0006-question-words.html` mounts only the first.
 * Edit here, nowhere else.
 *
 * WHY A STORY, when NOTES.md says tricks rather than mnemonics from lesson 6 on:
 * because that rule answers a different question. Decomposition tells you what a
 * word means — どこ is ど + こ, なんじかん is なんじ + かん — and it is still the
 * right tool for that. It cannot tell you WHICH WORDS EXIST. Two hundred and
 * thirty individually-structured words have no relation to one another, and a
 * rule cannot supply one. Sequence can. See
 * learning-records/0007-a-story-earns-its-place-back.md.
 *
 * THE MARKER CONTRACT. Japanese in the prose is written {{だれ}}. one-day.js
 * turns each marker into a speak button and builds the scene's word strip from
 * the markers in order, so there is no separate word list to fall out of sync
 * with the sentences. scripts/check_one_day.py verifies in both directions:
 * every marker names a real word, and every taught word appears in exactly one
 * scene. A word may be MENTIONED again in a later scene, but only in plain text
 * — a second marker for the same word is an error, because a word gets one home.
 *
 * Prose may carry inline <em>; it is inserted as HTML. Markers become elements,
 * never strings, so nothing inside {{…}} can be injected as markup.
 *
 * Romaji is not stored here. one-day.js reads it off the four vocabulary sets
 * and shows it on a word's first appearance in the page only — NOTES.md calls
 * romaji a crutch with a deadline, and repeating it every time means it never
 * comes off.
 *
 * THE CHAIN. The last sentence of every scene is a question that names the next
 * scene. That is what makes the interrogatives load-bearing rather than
 * decorative: you cannot get from the kitchen to the street without asking
 * どこ, so the thirty-two question words are rehearsed on every pass.
 *
 * English is the carrier language by necessity, not preference. A story told in
 * Japanese needs verbs and particles this course has not taught; MISSION.md's
 * "grammar needed to make the day's sentences make sense" exemption is already
 * spent, once, on 〜は 〜ですか in lesson 6.
 *
 * Fields: id · n scene number · title · lede one line · body array of paragraphs
 */

window.ONEDAY = {
  scenes: [
    {
      id: "asking",
      n: 1,
      title: "Asking",
      lede: "Every question word in the course, in one paragraph, in the order lesson 6 argues for — people, then the ど family, then い, then なん and its counters.",
      body: [
        "You are new here and everything is a question. The first person you meet — {{だれ}}, <em>who is that?</em> — turns out to be someone you should have been politer to, so the second time you ask {{どなた}}. You want to know who they came with: {{だれと}}. Then the place itself: {{どこ}}, <em>where?</em> — or, in a shop where someone is being kind to you, {{どちら}}.",
        "There are three doors and you have to pick one: {{どれ}}, <em>which one?</em> But the moment you name the thing you are picking, it becomes {{どの}} — <em>which door?</em> You do not know what sort of building this is ({{どんな}}) and you do not know how any of it works ({{どう}}). From that last one the language builds three more without inventing a single new word: {{どうして}} <em>why</em>, {{どうやって}} <em>by what method</em>, {{どういう}} <em>what sort of</em>. Add {{どのぐらい}} for <em>how long</em>, {{どこの}} for <em>where from</em>, and {{なんの}} for <em>what kind of</em>, and you have run out of ど.",
        "Now the impatient ones. {{なんで}} is <em>why</em> in the street rather than <em>why</em> in an essay — and it is literally <em>by what</em>, なん plus で, “by means of”. {{なぜ}} is the same question in writing, and the only one of the three that can never mean anything else.",
        "Then the quantities, which do not begin with ど at all. {{いつ}} — <em>when?</em> Answer it with も, “also”, and you get {{いつも}}: <em>at any when</em>, which is <em>always</em>. {{いくつ}} counts things. {{いくら}} counts money, which is the one you will need first. And when the answer to any of them is small, it is {{ちょっと}} — <em>a little</em>.",
        "Everything left starts なん and takes a unit. {{なに}} on its own is just <em>what</em>. Then, in the order a Japanese date is written: {{なんねん}} what year, {{なんがつ}} what month, {{なんにち}} what date, {{なんようび}} what day of the week, {{なんじ}} what o'clock, {{なんぷん}} how many minutes. Now hang かん on the end — <em>the gap between</em> — and every point becomes a stretch: {{なんじかん}} how many hours, {{なんしゅうかん}} how many weeks, {{なんねんかん}} how many years. Month refuses and swaps its counter instead: {{なんかげつ}}. Day cannot be bothered and does both jobs with the one word you already have. And one counter has nothing to do with the clock at all: {{なんにん}}, <em>how many people</em>.",
        "That is thirty-four words and two of them are not questions. Which leaves only the question that gets you out of this paragraph and into the rest of the day — いま なんじ, <em>what time is it?</em> — and to answer that you have to wake up.",
      ],
    },

    {
      id: "body",
      n: 2,
      title: "Waking — the body",
      lede: "Nineteen body words from lessons 4 and 5, and the two from lesson 7 that belong with them.",
      body: [
        "You wake before the alarm and the first thing you are aware of is your own {{かお}} pressed into the pillow — one {{みみ}} flat against it, your {{くち}} dry, your {{はな}} cold because the window was left open. Your {{した}} feels like it belongs to somebody else. That is a whole face in five words.",
        "Sitting up costs more. One {{あし}} has gone to sleep. Your {{かた}} is stiff from the way you lay on it and there is an ache across your {{むね}} that is probably nothing. So you take inventory downward: ten {{ゆび}}, then {{くび}}, then {{ひじ}} and the long {{うで}} it bends, then {{ひざ}}. Your {{あご}} needs a razor — the {{ひげ}} is past the point where you could claim it was deliberate. Your {{はだ}} is dry and your {{のど}} hurts.",
        "There is a {{きず}} on one hand from yesterday, and an {{あざ}} on your shin that you cannot account for at all. You put two fingers on your wrist, find the {{みゃく}}, and count. Steady. So whatever this is, it is not {{びょうき}} — just a bad night.",
        "And a bad night raises the question the last scene ended on. いま なんじ — <em>what time is it?</em>",
      ],
    },

    {
      id: "hour",
      n: 3,
      title: "The hour, and what day it is",
      lede: "Times of day, then the numbers that a clock is useless without.",
      body: [
        "It is still {{あさ}}, but only just. The light on the floor is at the angle it reaches early and nowhere near it later, and the {{かげ}} of the window frame has not yet crossed the rug — which is how you tell the time in a room without looking at anything.",
        "By {{ひる}} that shadow will be gone. The {{ごご}} is already spoken for, the {{ばん}} is not, and {{よる}} is when you will regret both. Then the date: {{きょう}} is the one that matters, though you lose a moment on {{きょねん}} — this same week, last year, and you cannot bring back a single thing about it.",
        "And a clock is nothing without numbers. {{きゅう}} is nine, {{じゅう}} is ten, {{ひゃく}} is a hundred and {{さんびゃく}} is three hundred — that last one carrying a small ゃ, which is a whole lesson of its own. The hands sit at {{ちょうど}} the hour: exactly, no minutes to round off.",
        "Every {{たび}} you look, it is later than the {{つぎ}} time you meant to leave. Which makes the question どこ — <em>where</em> in this house is everything you need?",
      ],
    },

    {
      id: "house",
      n: 4,
      title: "The house, room by room",
      lede: "Eight words, and a route through them you could walk in the dark.",
      body: [
        "Out of the bedroom, and the {{いえ}} is quiet. Every {{へや}} in it is dark except the one behind you. You put a hand flat on the {{かべ}} to find the light switch, and miss — because the switch is on the {{みぎ}} and you reached left, as you do every morning.",
        "Round the {{かど}} is the kitchen. Its {{まど}} looks onto the {{にわ}}, where nothing has been done all summer, and past the garden is the {{もん}} you will walk out of in twenty minutes.",
        "Twenty minutes, so: なんの — <em>what sort of</em> things do you actually need to take?",
      ],
    },

    {
      id: "things",
      n: 5,
      title: "Things you pick up on the way out",
      lede: "Twenty-five objects — the largest scene, because a kitchen table is where everything ends up.",
      body: [
        "The kitchen table is where everything ends up. A {{ほん}} you did not finish, face down and splayed. The {{かさ}} you keep meaning to return. A {{はこ}} that has sat there long enough to stop being visible, and a {{かご}} of things too small to have a home of their own. You pull out the {{いす}}, move a {{さら}} and a pair of {{はし}} aside, and start a pile.",
        "The pile: {{かぎ}} first, always, because without them none of the rest matters. A {{ちず}} — the paper kind, because your phone will not last the day. A {{ふで}} and an {{えんぴつ}}, one for the handwriting you show people and one for the honest sort. A {{びん}} of water. Your {{くつ}} are already by the door and your {{ふく}} are over the back of the chair where you dropped them.",
        "What does not come: the {{なべ}} soaking in the sink, the {{ごみ}} you have not taken out, the reel of {{いと}} and the loose {{くぎ}} rolling in the drawer, the {{かみ}} you were going to write on. The {{つぼ}} on the shelf that nobody is allowed to touch. The {{ぼう}} propping the back door open. A single {{ばら}} in a glass, three days past its best. The {{げた}} nobody has worn since the summer festival, with an {{おび}} folded on top of them. And all the {{かぐ}} — the chairs, the chest, the table itself — which stays, obviously. Furniture is the one kind of thing you never carry.",
        "You are nearly out. But だれと — <em>with whom?</em> Somebody else lives here.",
      ],
    },

    {
      id: "people",
      n: 6,
      title: "Who else is in it",
      lede: "Eighteen people, from three different lessons, in one kitchen.",
      body: [
        "You are not the only {{ひと}} awake — though {{ぼく}}, the casual <em>I</em> you use in this house and would never use in an office, is the last one down.",
        "Your {{りょうしん}} are already at the table: {{ちち}} with the paper, {{はは}} with the radio turned too low to actually hear. Both {{きょうだい}} are home for the week, which is rare — {{あに}}, who has opinions about everything, and {{あね}}, who has better ones and says less. {{そぼ}} has the good chair by the window, where she has sat every morning for thirty years, and her {{まご}} is asleep upstairs and will not surface before ten.",
        "{{おば}} arrives at eight without being invited, a {{きゃく}} who has never once been treated as one. At some point she will spell your {{みょうじ}} down the phone to somebody, and get it wrong anyway.",
        "Through the window a {{しょうねん}} goes past on a bicycle, much too fast, and a {{じょせい}} walking a dog watches him go. Your {{とも}} messages to say they are running late; so does {{かのじょ}}. {{にょうぼう}} is the word your grandfather still uses for your grandmother, and nobody else in this room would say it out loud.",
        "All of which leaves the only question that matters before nine. なに — <em>what</em> is there to eat?",
      ],
    },

    {
      id: "breakfast",
      n: 7,
      title: "Breakfast",
      lede: "Seventeen words, and one distinction Japanese makes that English does not.",
      body: [
        "Breakfast is whatever is already made. There is {{めし}} in the cooker from last night — cooked rice, which is a different word from the {{こめ}} in the sack under the counter. That difference is worth keeping: one is a grain and the other is a meal, and Japanese declines to use one word for both.",
        "Beside it, {{みそ}} soup with a proper {{だし}} in it, which you can tell at once because the {{あじ}} goes deeper than the instant kind ever does. A dish of {{にく}} left from dinner. Cold {{そば}}. Two rounds of {{きゅうり}}. A boiled {{いも}}, and a bowl of {{まめ}} that nobody is going to finish. {{すし}} from yesterday which has to go today or not at all.",
        "On the table: {{しお}}, {{しょうゆ}}, and a jar of {{ごま}} to scatter over everything regardless. A glass of {{ぎゅうにゅう}} for the child who is still not down, and {{おちゃ}} for everyone else. None of this is {{りょうり}} in the sense of cooking — it is assembly — and nobody is complaining.",
        "You eat standing up, which is its own answer to どのぐらい. Then: どこ — <em>where</em> are you supposed to be, and how long does it take to get there?",
      ],
    },

    {
      id: "town",
      n: 8,
      title: "Out into the town",
      lede: "Twelve words between the gate and the platform.",
      body: [
        "Through the gate and onto the {{みち}}. It is a five-minute walk to the {{えき}} and you have four, so this is not the {{さんぽ}} it would be on a Sunday.",
        "This is a {{まち}} that used to be a {{むら}} and has not entirely decided which it is — three streets of shops, and then, without any transition at all, fields. The {{きんじょ}} is the sort where the woman behind the counter knows which {{きっぷ}} you want before you have said it. You say it anyway.",
        "Past the {{びょういん}}, where a neighbour has been for a fortnight. {{にゅういん}} is the word for being admitted, which is not the same thing as the building — and the difference matters the moment you try to ask after somebody. Then the {{でんしゃ}}, late again, which means the {{かいしゃ}} will get you when it gets you. You think, not for the first time this month, about {{りょこう}}: a real one, somewhere else, longer than a weekend.",
        "なんじかん — <em>how many hours</em> of a day are actually yours? Not this morning's. This morning belongs to a classroom.",
      ],
    },

    {
      id: "school",
      n: 9,
      title: "School",
      lede: "Nine words, seven of them carrying a small ゃ ゅ ょ.",
      body: [
        "The {{きょうしつ}} smells of chalk and hot radiator. {{じゅぎょう}} starts before you have your coat off.",
        "On the board is a {{ひょう}} of dates in three columns and everybody is copying it down. The {{もじ}} are too small for the back row, which nobody mentions. Beside the dates runs a column of {{かず}} — one number against each row, and the numbers are the part you will be asked about.",
        "{{しゅくだい}} is the last ten minutes of every lesson and the first hour of every evening. At the back sits somebody here on {{りゅうがく}}, a year from somewhere else, who works harder than anyone in the room and apologises for their Japanese constantly and has no need to. A {{しょうがくせい}} would find today's material easy. You are not certain that you do. Afterwards, the {{としょかん}}, until it closes.",
        "Out of the far door there is a hill, a path going up it, and above that nothing built at all. どちら — <em>which way</em> does the path go?",
      ],
    },

    {
      id: "nature",
      n: 10,
      title: "Nature, on the way",
      lede: "Fourteen words of landscape, walked through in the order you would meet them.",
      body: [
        "Behind the school the ground climbs. There is a {{やま}} you can see from the top floor on a clear day, and between here and it a {{もり}} that goes back further than anybody walks.",
        "Nearer than that: a {{かわ}} with a bed of flat {{いし}} you can cross in August without wetting your feet, and a bank of {{すな}} that shifts every time it floods. After rain the whole path is {{どろ}}. A single {{えだ}} has come down across it in the night and nobody has moved it yet.",
        "The {{かぜ}} up here is a different temperature from the one in the street. Follow the river far enough and it reaches the {{うみ}}; from the {{がけ}} — where the fence stops and the warning sign starts — you can make out a {{しま}} that is a smudge most days and sharp on perhaps ten a year. The {{そら}} is enormous. There is {{みず}} everywhere: in the river, in the air, in your shoes.",
        "Once, standing exactly here, you saw a {{にじ}} — the entire arc of it, end to end. どんな — <em>what kind of</em> weather does that actually take?",
      ],
    },

    {
      id: "weather",
      n: 11,
      title: "Weather and the four seasons",
      lede: "Nine words. Four of them go round and never stop.",
      body: [
        "The kind where it rains and shines at once. {{あめ}} first, hard and brief, and then the {{くも}} tearing open behind it.",
        "The four go round, and the list starts where the school year does. {{はる}}: a fortnight of blossom and then over. {{なつ}} is the long one and the loud one — you will remember the noise of it before you remember the heat. {{あき}} is the good one and the short one. {{ふゆ}} brings {{ゆき}}, which settles on the mountain a month before it reaches the town.",
        "Winter's compensation is the sky at night. The {{つき}} comes up over the ridge enormous and yellow and has gone small and white by ten, and there are more {{ほし}} out here than anyone has any use for.",
        "Something moves in the trees below the path. なに — <em>what</em> was that?",
      ],
    },

    {
      id: "animals",
      n: 12,
      title: "Animals",
      lede: "Seventeen animals, and one of them is a noise rather than a creature.",
      body: [
        "A {{さる}}, probably — this is the edge of where they come down. Further in there are {{しか}} that stand in the road at dusk and decline to be impressed by a car, and higher up, signs about {{くま}} that everybody photographs and nobody entirely believes.",
        "The ordinary ones first, though. The neighbour's {{いぬ}}, which barks at the postman and at nothing else in the world. A {{ねこ}} on a wall that says {{にゃあ}} exactly once and then ignores you completely — and that word is the noise, not the animal. A {{とり}} you cannot name on the telephone wire. Every {{むし}} that gets in when the window is open in August.",
        "Down at the fields: {{うし}} in one, a single elderly {{うま}} in the next, {{ぶた}} you can smell before you reach the corner. In the river, a {{かに}} the size of a coin under a stone. On ice at the fishmonger, {{えび}} and {{さば}}, both of which will be dinner inside the week, and behind the counter a {{きんぎょ}} in a bowl that has outlived two shopkeepers. And once, across the path and gone before you were sure, a {{へび}} — the only one you have seen here.",
        "The one animal not here at all is a {{ぞう}}. You have thought more than once about how odd it is that a word for something you will never meet is among the first you are taught.",
        "どうして — <em>why</em> is that? Which is exactly the kind of thing people have opinions about.",
      ],
    },

    {
      id: "ideas",
      n: 13,
      title: "What people say about it",
      lede: "Sixteen words that are not objects — opinions, warnings, and one riddle.",
      body: [
        "Opinions, on the way back down.",
        "Your {{しゅみ}} is photography, which in practice means a folder of {{しゃしん}} nobody has ever opened. Somebody tells you your framing is {{じょうず}} and you do not believe them. Somebody else says the {{ちゃいろ}} in the autumn shots is wrong — too warm — and they are right, and it is a {{べつ}} problem from the one you were trying to fix.",
        "There is a sign at the trailhead: {{ちゅうい}}, <em>caution</em>, about a {{じこ}} last spring. Another warns that a particular plant is {{どく}} if you eat it, which raises the question of who had been eating it. Somebody has scratched a {{なぞ}} into the wood beneath, a riddle with no answer posted anywhere, and it has been there for years.",
        "A woman ahead of you is on the phone in three languages and moves between them {{ぺらぺら}}, mid-sentence, without appearing to notice. Her friend writes everything in {{りゃく}} — the shortened form — and you cannot read a single note of it. The {{ぎん}} light on the river at this hour is the reason for coming at all.",
        "They ask whether you want to walk down together and you say {{ぜひ}}, <em>by all means</em>, and then spend the entire descent quietly certain you are being a {{じゃま}}. That feeling is {{しんぱい}}, and the {{ぎゃく}} of it — simply assuming you were wanted — is a thing you have never once managed.",
        "It is darker than it was when you started talking. いつ — <em>when</em> did it get this late?",
      ],
    },

    {
      id: "evening",
      n: 14,
      title: "Evening, and going to bed",
      lede: "Fifteen verbs, in dictionary form, which is the whole day said back in order.",
      body: [
        "Home in the dark. The verbs are the last of it, and laid end to end they are the day itself.",
        "You {{でる}} in the morning and you {{くる}} back at night. In between you {{いく}} to places, and to reach one of them you {{こぐ}} a bicycle up a hill you ought to be used to by now. You {{まつ}} on a platform. Somebody calls your name — that is {{よぶ}} — and you do not hear it.",
        "Then the evening ones, which are smaller. You {{ぬぐ}} your coat at the door. You {{かう}} something on the way because there is nothing in the house. You {{のむ}} something hot. You {{みる}} the last of the light come off the hill and you {{きく}} the house settling around you. You {{よむ}} a page, lose it, and read it again. You {{かく}} tomorrow's list, badly. A moth finds the lamp and cannot stop trying to {{とぶ}} into it.",
        "And then you {{ねる}} — which is the last word of the day, and the two hundred and thirtieth of the walk.",
        "Tomorrow it begins where it began: だれ, どこ, いつ, いくら. Go back to the first scene.",
      ],
    },
  ],
};
