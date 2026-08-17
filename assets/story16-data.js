/* story16-data.js — chapter 16's 32 words as one short walk.
 *
 * Four scenes carrying every word in VOCAB16, each word in exactly one of them.
 * `one-day.js` renders it, from `lessons/0016-going-and-coming.html` with
 * data-story="STORY16" data-sets="VOCAB16". Edit here, nowhere else.
 *
 * THE SHAPE IS A JOURNEY, AND THE SHEET SUPPLIED IT — the second chapter
 * (after 14's day) whose walk needed no invention. The words ARE a trip: who
 * goes, how you cross town, what the departure board offers, and how far the
 * rails reach. Scene 4's route is not invented either: 伏見, 大阪城, 甲子園 and
 * 博多 sit on the Tōkaidō–San'yō Shinkansen corridor in exactly that order, so
 * geography does the sequencing.
 *
 * NOT MERGED INTO ANY OTHER WALK. Four of these words have cards in VOCAB4 and
 * VOCAB7; each walk is scoped to its own set so both chapters carry their own
 * copies, per check_one_day.py.
 *
 * THE MARKER CONTRACT, unchanged: {{かな}} markers are the single source of
 * truth, one home per word, strip derived from marker order, romaji read off
 * VOCAB16. Base before derived: ひと is marked before ひとりで in scene 1.
 * A word may be MENTIONED in plain text — ごばんせん, はつか and the revision
 * words are — because a marker means "this word lives here".
 *
 * THE VERBS ARE FIXED SHAPES, per learning-records/0017. The prose never
 * builds a second form from a ます word.
 *
 * TWO SLIPS ARE TAUGHT CORRECTLY HERE, not reproduced: スーパー gets no kanji
 * (the sheet's 駅 belongs to えき), and 甲子園 is placed in Hyōgo, between
 * Osaka and Kobe, not in Osaka. See vocab16-data.js and LIBRARY.md.
 *
 * English is the carrier language by necessity. No Arabic in the prose — every
 * word carries its Arabic on its own card.
 *
 * Fields: id · n scene number · title · lede one line · body array of paragraphs
 */

window.STORY16 = {
  scenes: [
    {
      id: "dare",
      n: 1,
      title: "Who is going",
      lede: "Three verbs arrive today, and they are the first in the course that move.",
      body: [
        "You {{いきます}} when the movement points away from where you stand. Someone {{きます}} when it points toward you. And when the day is spent you {{かえります}} — which is not just <em>return</em> but return <strong>to your own base</strong>: home, your desk, your country. Three verbs, and between them every journey in this chapter.",
        "Who comes along? A {{ともだち}} from class, for a start. {{かれ}} is <em>he</em> — and also <em>boyfriend</em>; {{かのじょ}} is <em>she</em> — and also <em>girlfriend</em>. One word each for the person and the partner, and the sentence decides which you said. Bring the friend's whole {{かぞく}}, add one more {{ひと}} from the office — or skip the lot and go {{ひとりで}}, <em>by one person</em>, with the で you have had since lesson 6 quietly marking the means.",
      ],
    },
    {
      id: "machi",
      n: 2,
      title: "Across town",
      lede: "The short trips first — and one of them needs no vehicle at all.",
      body: [
        "To {{がっこう}} you go {{あるいて}} — <em>on foot</em>, the one way of travelling that takes no で, because it is already a fixed shape with the manner baked in. The {{スーパー}} is further: take the {{じてんしゃ}} and pedal, or wave down the {{バス}}, or — if it is raining and you are feeling rich — a {{タクシー}}.",
        "And under the whole town runs the {{ちかてつ}}: the 地下 you learned in a department-store basement, plus 鉄, <em>iron</em>. The underground iron road.",
      ],
    },
    {
      id: "eki",
      n: 3,
      title: "At the station",
      lede: "Every train on the board is one of three speeds, and the platform is a counter.",
      body: [
        "For a real journey you walk into the {{えき}}. Every {{でんしゃ}} on the departure board is one of three kinds: the {{ふつう}} — <em>ordinary</em> — stops at every station there is; the {{きゅうこう}} skips the small ones; the {{とっきゅう}} — <em>specially</em> rapid, 特別 plus 急行 squeezed into one word — skips almost everything.",
        "The board says the {{つぎの}} train leaves from ごばんせん — platform five — because {{ばんせん}} is a counter, the course's ninth. Its first sound is voiced, so the counter sheet's rule promises no number will ever change it, and none does.",
      ],
    },
    {
      id: "minami",
      n: 4,
      title: "The long way south",
      lede: "Four place names, and they sit on the Shinkansen line in exactly this order.",
      body: [
        "On the {{じゅうよっか}} — the 14th, the date the calendar chapter promised you when it said the よっ- of the 4th survives up the calendar — you board the {{しんかんせん}} and ride the <em>new trunk line</em> south. Near Kyoto lies {{ふしみ}}, red gates and sake. Change at しんおおさか — chapter 13's station — for {{おおさかじょう}}, the castle above the city. A local hop further on is {{こうしえん}}, the baseball ground between Osaka and Kobe. And the rails end at {{はかた}}, deep in Kyushu.",
        "Further than that and you need a {{ひこうき}} — or, if the sea itself is the point, a {{ふね}}. Then home on the {{にじゅうよっか}}, the 24th, with the same よっ- riding on the end of it.",
      ],
    },
  ],
};
