/* yoon-data.js — the 33 yōon, as eleven rows of three.
 *
 * Read by yoon-grid.js, which renders it in lesson 7 and in
 * reference/yoon-chart.html. Edit here, nowhere else.
 *
 * The claim the grid is making: a yōon is not a new character and not even a new
 * combination to memorise. It is an i-column kana with its i thrown away and a
 * y-glide put in its place. Read a row across and the consonant is constant;
 * read a column down and the vowel is constant. Eleven bases times three
 * columns, and the arithmetic is the whole lesson.
 *
 * Which eleven, and why exactly eleven: thirteen kana end in -i — い き し ち に
 * ひ み り, plus ぎ じ ぢ び ぴ. い is a bare vowel with no consonant to
 * palatalise, and ぢ is as dead as it is on its own (see lesson 5), so
 * ぢゃ ぢゅ ぢょ are omitted here exactly as every standard chart omits them.
 * Eleven remain.
 *
 * Row order follows lesson 5's marked rows (が ざ ば ぱ) rather than the lecture
 * sheet's, which puts ぎ last. The sheet fixes scope, not ordering — same call
 * as lesson 6's regrouping.
 *
 * `w` is one common word containing the yōon, written wholly in kana the course
 * has taught. Six cells have no such word and carry `gap` instead, with the word
 * that WOULD serve if the small っ had been taught. Checked against JMdict
 * through <https://jisho.org/> on 2026-08-02:
 *
 *   ひゅ みゅ びゅ  no common native word at all; these live in katakana
 *                  loanwords (ヒューズ, ミュージック, インタビュー).
 *   ぴゃ ぴゅ ぴょ  the ぴ row again. はっぴょう, はっぴゃく and ろっぴゃく are
 *                  where it actually lives, and every one of them needs っ.
 *
 * にゃ is thin rather than empty and is marked `thin`: the only common JMdict
 * entry reachable with today's characters is にゃあ, the cat. That is honest and
 * it is also the truth about the row.
 *
 * Fields: b base kana · br base romaji · mk tenten|maru · cells[3]
 *         k yōon · r romaji · w example word · wr its romaji · we its English
 *         gap the word that needs っ · thin the row is nearly empty
 */

window.YOON = {
  cols: [
    { s: "ゃ", r: "ya", v: "a" },
    { s: "ゅ", r: "yu", v: "u" },
    { s: "ょ", r: "yo", v: "o" },
  ],

  rows: [
    {
      b: "き", br: "ki",
      cells: [
        { k: "きゃ", r: "kya", w: "きゃく",     wr: "kyaku",     we: "guest" },
        { k: "きゅ", r: "kyu", w: "きゅう",     wr: "kyū",       we: "nine" },
        { k: "きょ", r: "kyo", w: "きょう",     wr: "kyō",       we: "today" },
      ],
    },
    {
      b: "し", br: "shi",
      cells: [
        { k: "しゃ", r: "sha", w: "しゃしん",   wr: "shashin",   we: "photograph" },
        { k: "しゅ", r: "shu", w: "しゅみ",     wr: "shumi",     we: "hobby" },
        { k: "しょ", r: "sho", w: "しょうゆ",   wr: "shōyu",     we: "soy sauce" },
      ],
    },
    {
      b: "ち", br: "chi",
      cells: [
        { k: "ちゃ", r: "cha", w: "おちゃ",     wr: "ocha",      we: "tea" },
        { k: "ちゅ", r: "chu", w: "ちゅうい",   wr: "chūi",      we: "caution" },
        { k: "ちょ", r: "cho", w: "ちょうど",   wr: "chōdo",     we: "exactly" },
      ],
    },
    {
      b: "に", br: "ni", thin: true,
      cells: [
        { k: "にゃ", r: "nya", w: "にゃあ",     wr: "nyā",       we: "meow" },
        { k: "にゅ", r: "nyu", w: "にゅういん", wr: "nyūin",     we: "hospital stay" },
        { k: "にょ", r: "nyo", w: "にょうぼう", wr: "nyōbō",     we: "wife" },
      ],
    },
    {
      b: "ひ", br: "hi",
      cells: [
        { k: "ひゃ", r: "hya", w: "ひゃく",     wr: "hyaku",     we: "hundred" },
        { k: "ひゅ", r: "hyu", gap: "ヒューズ", wr: "hyūzu",     we: "fuse — katakana only" },
        { k: "ひょ", r: "hyo", w: "ひょう",     wr: "hyō",       we: "table, chart" },
      ],
    },
    {
      b: "み", br: "mi",
      cells: [
        { k: "みゃ", r: "mya", w: "みゃく",     wr: "myaku",     we: "pulse" },
        { k: "みゅ", r: "myu", gap: "ミュージック", wr: "myūjikku", we: "music — katakana only" },
        { k: "みょ", r: "myo", w: "みょうじ",   wr: "myōji",     we: "surname" },
      ],
    },
    {
      b: "り", br: "ri",
      cells: [
        { k: "りゃ", r: "rya", w: "りゃく",     wr: "ryaku",     we: "abbreviation" },
        { k: "りゅ", r: "ryu", w: "りゅうがく", wr: "ryūgaku",   we: "study abroad" },
        { k: "りょ", r: "ryo", w: "りょこう",   wr: "ryokō",     we: "travel" },
      ],
    },
    {
      b: "ぎ", br: "gi", mk: "tenten",
      cells: [
        { k: "ぎゃ", r: "gya", w: "ぎゃく",     wr: "gyaku",     we: "the reverse" },
        { k: "ぎゅ", r: "gyu", w: "ぎゅうにゅう", wr: "gyūnyū",  we: "milk" },
        { k: "ぎょ", r: "gyo", w: "きんぎょ",   wr: "kingyo",    we: "goldfish" },
      ],
    },
    {
      b: "じ", br: "ji", mk: "tenten",
      cells: [
        { k: "じゃ", r: "ja",  w: "じゃま",     wr: "jama",      we: "in the way" },
        { k: "じゅ", r: "ju",  w: "じゅぎょう", wr: "jugyō",     we: "a class" },
        { k: "じょ", r: "jo",  w: "じょせい",   wr: "josei",     we: "woman" },
      ],
    },
    {
      b: "び", br: "bi", mk: "tenten",
      cells: [
        { k: "びゃ", r: "bya", w: "さんびゃく", wr: "sanbyaku",  we: "three hundred" },
        { k: "びゅ", r: "byu", gap: "インタビュー", wr: "intabyū", we: "interview — katakana only" },
        { k: "びょ", r: "byo", w: "びょういん", wr: "byōin",     we: "hospital" },
      ],
    },
    {
      b: "ぴ", br: "pi", mk: "maru",
      cells: [
        { k: "ぴゃ", r: "pya", gap: "はっぴゃく", wr: "happyaku", we: "eight hundred — needs っ" },
        { k: "ぴゅ", r: "pyu", gap: "コンピューター", wr: "konpyūtā", we: "computer — katakana only" },
        { k: "ぴょ", r: "pyo", gap: "はっぴょう", wr: "happyō",  we: "announcement — needs っ" },
      ],
    },
  ],
};
