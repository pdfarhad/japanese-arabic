/* course-map.js — the course's own table of contents, consumed by nav.js.
 *
 * Paths are relative to the workspace root; nav.js rewrites them per page.
 * Update this file AND index.html in the same session whenever a lesson or
 * reference doc is added or renamed. A stale map is worse than no map.
 */

window.COURSE_MAP = {
  title: "Japanese & Arabic, side by side",
  subtitle: "One lesson per day, built from the day's lecture notes.",
  index: "index.html",

  lessons: [
    {
      n: 1,
      id: "0001-hiragana-and-the-classroom",
      title: "The first 25 hiragana, and a classroom in two languages",
      path: "lessons/0001-hiragana-and-the-classroom.html",
      min: 18,
    },
    {
      n: 2,
      id: "0002-completing-the-hiragana",
      title: "Completing the hiragana: the last twenty-one",
      path: "lessons/0002-completing-the-hiragana.html",
      min: 14,
    },
    {
      n: 3,
      id: "0003-mnemonics-and-recognition",
      title: "Forty-six shapes, forty-six stories",
      path: "lessons/0003-mnemonics-and-recognition.html",
      min: 12,
    },
    {
      n: 4,
      id: "0004-two-kana-words",
      title: "Eighty words, two letters each",
      path: "lessons/0004-two-kana-words.html",
      min: 15,
    },
    {
      n: 5,
      id: "0005-tenten-and-maru",
      title: "Two strokes and a circle",
      path: "lessons/0005-tenten-and-maru.html",
      min: 14,
    },
    {
      n: 6,
      id: "0006-question-words",
      title: "Four stems, thirty-two questions",
      path: "lessons/0006-question-words.html",
      min: 17,
    },
    {
      n: 7,
      id: "0007-yoon-small-kana",
      title: "Three small letters, thirty-three sounds",
      path: "lessons/0007-yoon-small-kana.html",
      min: 14,
    },
    {
      n: 8,
      id: "0008-katakana-first-25",
      title: "Twenty-five new shapes, no new sounds",
      path: "lessons/0008-katakana-first-25.html",
      min: 18,
    },
    {
      n: 9,
      id: "0009-completing-the-katakana",
      title: "The last twenty-one, and the kanji still showing through",
      path: "lessons/0009-completing-the-katakana.html",
      min: 32,
    },
    {
      n: 10,
      id: "0010-days-and-months",
      title: "Seven planets, twelve numbers",
      path: "lessons/0010-days-and-months.html",
      min: 20,
    },
    {
      n: 11,
      id: "0011-introducing-yourself",
      title: "Two ways to say every person",
      path: "lessons/0011-introducing-yourself.html",
      min: 22,
    },
    {
      n: 12,
      id: "0012-this-that-and-that-over-there",
      title: "This, that, and that over there",
      path: "lessons/0012-this-that-and-that-over-there.html",
      min: 20,
    },
    {
      n: 13,
      id: "0013-how-much-and-which-floor",
      title: "How much, and which floor",
      path: "lessons/0013-how-much-and-which-floor.html",
      min: 22,
    },
  ],

  /* Reading chapters are a separate category on purpose — they are the
     textbook's own pages reproduced line for line, not lessons built from the
     day's notes, and numbering them among the lessons would say the course had
     reached a chapter it has not. nav.js renders each group under its own
     heading and gives it its own prev/next chain. */
  groups: [
    {
      label: "Reading Chapters",
      items: [
        {
          n: 1,
          id: "0001-minna-no-nihongo-1-3",
          title: "Minna no Nihongo I, lessons 1–3",
          path: "reading/0001-minna-no-nihongo-1-3.html",
          min: 25,
        },
      ],
    },
  ],

  reference: [
    { title: "Hiragana stroke chart", path: "reference/hiragana-chart.html" },
    { title: "Katakana stroke chart", path: "reference/katakana-chart.html" },
    { title: "Tenten and maru", path: "reference/marked-kana.html" },
    { title: "Yōon — the small ゃ ゅ ょ", path: "reference/yoon-chart.html" },
    { title: "Two-kana word list", path: "reference/two-kana-words.html" },
    { title: "Question words", path: "reference/question-words.html" },
    { title: "The calendar", path: "reference/calendar.html" },
    { title: "One day, every word", path: "reference/one-day.html" },
    { title: "Classroom phrasebook", path: "reference/classroom-phrases.html" },
  ],

  external: [
    { title: "Tofugu — Learn Hiragana", url: "https://www.tofugu.com/japanese/learn-hiragana/" },
    { title: "NHK — Easy Japanese", url: "https://www.nhk.or.jp/lesson/en/" },
    { title: "Jisho.org dictionary", url: "https://jisho.org/" },
    { title: "Madinah Arabic", url: "https://www.madinaharabic.com/" },
  ],
};
