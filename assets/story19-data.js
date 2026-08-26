/* story19-data.js — chapter 19's 52 words as one evening, teacup to doorstep.
 *
 * Five scenes carrying every word in VOCAB19, each word in exactly one of
 * them. `one-day.js` renders it, from `lessons/0019-describing-things.html`
 * with data-story="STORY19" data-sets="VOCAB19". Edit here, nowhere else.
 *
 * THE SHAPE IS THE DIALOGUE'S OWN: Minna 第8課's conversation is a guest at a
 * host's table being asked what things are like, and leaving politely. So the
 * walk is that visit — the question over tea, the town described, the table
 * itself, the photo album of famous things, and the goodbye at the door. It
 * continues chapter 18's season: the walk is set in winter, which is also why
 * あつい (暑い, weather-hot) belongs to an overheated ROOM and never to the
 * tea — hot-to-the-touch is 熱い, the kanji the sheet dropped, and marking
 * the tea あつい would teach the exact confusion the lesson warns about.
 *
 * NOT MERGED INTO ANY OTHER WALK. Four of these words have cards in VOCAB and
 * VOCAB6; each walk is scoped to its own set so every chapter carries its own
 * copies, per check_one_day.py.
 *
 * THE MARKER CONTRACT, unchanged: {{かな}} markers are the single source of
 * truth, one home per word, strip derived from marker order, romaji read off
 * VOCAB19. A word may be MENTIONED in plain text — ふるい and もう are —
 * because a marker means "this word lives here".
 *
 * NO ADJECTIVE IS EVER CONJUGATED, per learning-records/0023: every describing
 * word appears bare or before です, and あまり appears WITHOUT the negative
 * sentence it really wants — that grammar is still ahead of the course, and
 * the lesson says so. The 〜が、〜 frame appears in prose as the printed frame
 * only.
 *
 * English is the carrier language by necessity. No Arabic in the prose —
 * every word carries its Arabic on its own card.
 *
 * Fields: id · n scene number · title · lede one line · body array of paragraphs
 */

window.STORY19 = {
  scenes: [
    {
      id: "ocha",
      n: 1,
      title: "The question over tea",
      lede: "The host pours, and asks the question this whole chapter exists to answer.",
      body: [
        "The visit again — chapter 18's door, a little later in the evening. The host pours tea and asks the day's real question: your life here, {{どう}} — how is it? Your {{せいかつ}}, the daily living of it. You start with where you live: the {{りょう}} — the building itself is {{ふるい}}, up since before anyone can remember, but your room is {{あたらしい}}, repainted this spring.",
        "And the {{べんきょう}}? Some of it is {{むずかしい}} — the kanji column grows every week — but the kana, you say honestly, were {{やさしい}}: easy, the 易しい kind, not the 優しい kind, though your teacher is that too — {{しんせつ}}, kind, patient with every question. The {{おしごと}} the host asks after next keeps you {{いそがしい}}. Busy, yes — but {{げんき}}: well, cheerful, the word the greeting おげんきですか has been carrying all along.",
      ],
    },
    {
      id: "machi",
      n: 2,
      title: "What kind of town",
      lede: "どんな summons an adjective — and the town supplies a whole evening of them.",
      body: [
        "The host leans in: and the town — {{どんな}} {{まち}} is it? What kind? By day it is {{にぎやか}} — market street full, voices everywhere — and by night {{しずか}}, so quiet you hear the trains. It is a {{べんり}} {{ところ}}: shops downstairs, station five minutes, no {{くるま}} needed at all. Most things are {{やすい}}, too — the student quarter keeps its prices honest.",
        "On a {{ひま}} day, you walk. The air up the hill is {{いい}}; the Monday-morning crush on the platform, that is the one thing here that is honestly {{わるい}}. One town, described twice over — which is exactly what the ［な］ words and the 〜い words are for.",
      ],
    },
    {
      id: "shokutaku",
      n: 3,
      title: "The winter table",
      lede: "Hot and cold split by where you feel them — the chapter's finest distinction, served at dinner.",
      body: [
        "Dinner arrives, and the {{たべもの}} is {{おいしい}} — you say it twice, because it is true and because it is the thing to say. The kitchen has made the little room almost {{あつい}} — hot the way weather and rooms are hot, 暑い — while the juice in your glass is {{つめたい}}, cold the way things you touch are cold. Two temperatures, two words each way: that is the split this table teaches.",
        "You notice the dishes themselves: a {{くろい}} lacquer tray, {{あかい}} bowls, and a plate with a deep {{あおい}} glaze — the blue that Japanese lets run all the way to green. The whole spread is, you tell the host, {{すてき}} — and the word that chapter 18 could only say inside a frozen phrase is now simply yours.",
      ],
    },
    {
      id: "arubamu",
      n: 4,
      title: "The album of famous things",
      lede: "The textbook's own subjects, page by page — the famous five, each with its adjective.",
      body: [
        "After dinner the host brings out a photo album, and it turns out to be the sheet's last five rows in order. First {{ふじさん}} — a {{やま}} so {{たかい}} it makes its own weather, {{しろい}} with snow in the winter shot; the hills behind the host's own house sit {{ひくい}} beside the memory of it. Then {{びわこ}}, so {{おおきい}} the far shore is haze, the boats on it {{ちいさい}} as rice grains.",
        "A Kyoto page: {{きんかくじ}}, gold to the waterline, every visitor agreeing it is {{きれい}} — and a spring page of {{さくら}}, the blossom the whole country turns out for. All of them {{ゆうめい}} — famous, the ［な］ word this album exists to exercise.",
        "The last pictures are a cinema poster and a trip abroad: {{しちにんのさむらい}} — an old film, says the host, using the sheet's own hinge, ふるいですが — but, {{おもしろい}}; its lead actor, everyone agreed, {{ハンサム}}. And one bright page from {{シャンハイ}}, a city with more lights than the whole prefecture.",
      ],
    },
    {
      id: "kaerimichi",
      n: 5,
      title: "Time to go",
      lede: "The clock says もう, the guest says そろそろ — the visit closes the way chapter 18 opened it.",
      body: [
        "The clock surprises everyone — もう nine, already — and the leaving phrases queue up in their printed order: another cup? no, thank you; it is about time. The evening was {{とても}} {{たのしい}} — very enjoyable, the degree word and its adjective doing their first real work together.",
        "Outside it is {{さむい}} — the winter air kind of cold, the one you stand in — {{そして}} the street is dark and quiet. But the way home is not far: {{あまり}}, <em>not-so</em>, is the word Japanese would hang on that sentence — though the negative ending it leans on is grammar still ahead of this course. また いらっしゃってください, the host calls from the door: come again. You will.",
      ],
    },
  ],
};
