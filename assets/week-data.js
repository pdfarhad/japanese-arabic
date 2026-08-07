/* week-data.js — the seven days, each beside the planet it is named after.
 *
 * Read by week-grid.js, which renders it in lesson 10 and in
 * reference/calendar.html. Edit here, nowhere else — same arrangement as
 * kosoado-data.js + kosoado-grid.js, and for the same reason: the chart is the
 * argument, and it must not be able to say two different things on two pages.
 *
 * The claim the grid makes is that a Japanese weekday is not an arbitrary name.
 * It is <element kanji> + 曜日, the element kanji names one of the seven
 * classical luminaries, and — this is the part worth the chapter — **the day
 * name and the planet name begin with the same reading**:
 *
 *     火星 かせい  Mars      → 火曜日 かようび  Tuesday
 *     水星 すいせい Mercury  → 水曜日 すいようび Wednesday
 *     木星 もくせい Jupiter  → 木曜日 もくようび Thursday
 *     金星 きんせい Venus    → 金曜日 きんようび Friday
 *     土星 どせい  Saturn    → 土曜日 どようび  Saturday
 *
 * Five of seven fall out of one fact. The other two are the Sun and the Moon,
 * which are not 〜星 because they are not planets. That is a decomposition, not
 * a mnemonic, which is the technique this course defaults to from chapter 6 on —
 * see learning-records/0005.
 *
 * Every reading and gloss checked against JMdict through
 * <https://jisho.org/api/v1/search/words> on 2026-08-05. All seven day names are
 * tagged common; 水星 and 七曜 are not, and are cited as facts about the sky
 * rather than offered as vocabulary.
 *
 * The Arabic is the mirror image and is why the two languages sit side by side
 * here at all: Arabic **numbers** five of its seven days and names the other
 * two after worship and rest. Forms confirmed against en.wiktionary's
 * أَيَّامُ الْأُسْبُوع table and ar.wikipedia. Wiktionary also records that the
 * numbering is itself a phono-semantic matching of Syriac (ܐܪܒܥܐ ܒܫܒܐ, "fourth
 * of the week"), replacing older native Arabic names — دُبَار for Wednesday,
 * جُبَار for Tuesday. So neither language invented its week: both inherited the
 * same Babylonian seven-day cycle by different roads.
 *
 * Fields: k kana · r romaji · kj kanji · el element kanji · elr its reading in
 *         the day name · elk that kanji standing alone · elken its meaning ·
 *         pl planet kanji · plr planet reading · plen planet in English ·
 *         en English day · a Arabic · at transliteration · alit Arabic literal
 *         sense · n note
 */

window.WEEK = {
  /* Sunday first, as the notes and every Japanese calendar have it. A Japanese
     week runs 日月火水木金土 and that order is itself the teaching point: it is
     the classical planetary order, not an arbitrary one. */
  days: [
    {
      k: "にちようび", r: "nichiyōbi", kj: "日曜日",
      el: "日", elr: "nichi", elk: "ひ", elken: "sun, day",
      pl: "太陽", plr: "taiyō", plen: "the Sun",
      en: "Sunday",
      a: "الْأَحَد", at: "al-aḥad", alit: "the first",
      n: "Heian calendars also wrote this day 密 — a transcription of Sogdian Myr, the god Mithra, picked up along the road the seven-day week travelled from Babylon to Japan.",
    },
    {
      k: "げつようび", r: "getsuyōbi", kj: "月曜日",
      el: "月", elr: "getsu", elk: "つき", elken: "moon, month",
      pl: "月", plr: "tsuki", plen: "the Moon",
      en: "Monday",
      a: "الْاِثْنَيْن", at: "al-ithnayn", alit: "the second",
      n: "月 is doing two jobs in this course: the moon here, and the counter that makes every month name. Both readings are on this page.",
    },
    {
      k: "かようび", r: "kayōbi", kj: "火曜日",
      el: "火", elr: "ka", elk: "ひ", elken: "fire",
      pl: "火星", plr: "kasei", plen: "Mars",
      en: "Tuesday",
      a: "الثُّلَاثَاء", at: "ath-thulāthāʾ", alit: "the third",
      n: "Mars is the fire star. か opens both 火星 and 火曜日.",
    },
    {
      k: "すいようび", r: "suiyōbi", kj: "水曜日",
      el: "水", elr: "sui", elk: "みず", elken: "water",
      pl: "水星", plr: "suisei", plen: "Mercury",
      en: "Wednesday",
      a: "الْأَرْبِعَاء", at: "al-arbiʿāʾ", alit: "the fourth",
      n: "みず was a lesson 5 word. Same character, different reading: すい inside a compound, みず standing alone.",
    },
    {
      k: "もくようび", r: "mokuyōbi", kj: "木曜日",
      el: "木", elr: "moku", elk: "き", elken: "tree, wood",
      pl: "木星", plr: "mokusei", plen: "Jupiter",
      en: "Thursday",
      a: "الْخَمِيس", at: "al-khamīs", alit: "the fifth",
      n: "き, the tree, is a word you can already read — and it is the whole of this character.",
    },
    {
      k: "きんようび", r: "kin'yōbi", kj: "金曜日",
      el: "金", elr: "kin", elk: "きん", elken: "gold, metal",
      pl: "金星", plr: "kinsei", plen: "Venus",
      en: "Friday",
      a: "الْجُمُعَة", at: "al-jumuʿa", alit: "the gathering",
      n: "The apostrophe in kin'yōbi is not decoration: it marks ん as its own beat, so the word is ki-n-yo-o-bi and not ki-nyo-o-bi.",
    },
    {
      k: "どようび", r: "doyōbi", kj: "土曜日",
      el: "土", elr: "do", elk: "つち", elken: "earth, soil",
      pl: "土星", plr: "dosei", plen: "Saturn",
      en: "Saturday",
      a: "السَّبْت", at: "as-sabt", alit: "the rest",
      n: "The one day where Japanese and Arabic point at the same thing from opposite directions: 土星 is Saturn, and English Saturday is Saturn's day, while السَّبْت is the Sabbath — rest, not a planet.",
    },
  ],
};
