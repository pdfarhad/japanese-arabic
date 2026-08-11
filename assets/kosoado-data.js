/* kosoado-data.js — the こそあど demonstrative sets, as a four-by-seven grid.
 *
 * Read by kosoado-grid.js, which renders it in lesson 6 and in
 * reference/question-words.html. Edit here, nowhere else.
 *
 * The claim the grid is making: every one of these words is a prefix marking
 * distance plus an ending marking word type, and the two are independent. Learn
 * one ending and you can read its whole row; learn one prefix and you can read
 * its whole column. The ど column is the one lesson 6 is about, and it is the
 * question member of every set.
 *
 * Sets and their groupings follow Tofugu's こそあど overview
 * <https://www.tofugu.com/japanese-grammar/kosoado/>; every reading and gloss
 * was then checked against JMdict through <https://jisho.org/>.
 *
 * Two members break the pattern, and both are marked `odd` so the grid can say
 * so rather than let the reader trip over them:
 *   あそこ — not あこ, which is what the row predicts.
 *   ああ    — not あう.
 *
 * `dim` marks a word that is archaic and not worth learning as vocabulary. It
 * stays in the grid because deleting it would leave a hole where the pattern is
 * in fact intact — こなた and そなた are real words, just old ones.
 *
 * The こっち · そっち · あっち · どっち set is deliberately absent: it is a casual
 * contraction of the ちら set and it needs the small っ, which the course has not
 * taught. The lesson mentions it in prose instead.
 *
 * Fields: k kana · r romaji · e English · odd irregular · dim archaic
 */

window.KOSOADO = {
  cols: [
    { p: "こ", r: "ko", en: "near me" },
    { p: "そ", r: "so", en: "near you" },
    { p: "あ", r: "a",  en: "over there" },
    { p: "ど", r: "do", en: "which?" },
  ],

  sets: [
    {
      id: "re", end: "れ", en: "One thing, standing alone",
      cells: [
        { k: "これ", r: "kore", e: "this one" },
        { k: "それ", r: "sore", e: "that one" },
        { k: "あれ", r: "are",  e: "that one over there" },
        { k: "どれ", r: "dore", e: "which one?" },
      ],
    },
    {
      id: "no", end: "の", en: "Before a noun — この ほん",
      cells: [
        { k: "この", r: "kono", e: "this …" },
        { k: "その", r: "sono", e: "that …" },
        { k: "あの", r: "ano",  e: "that … over there" },
        { k: "どの", r: "dono", e: "which …?" },
      ],
    },
    {
      id: "ko", end: "こ", en: "Places",
      cells: [
        { k: "ここ",   r: "koko",  e: "here" },
        { k: "そこ",   r: "soko",  e: "there" },
        { k: "あそこ", r: "asoko", e: "over there", odd: "あこ" },
        { k: "どこ",   r: "doko",  e: "where?" },
      ],
    },
    {
      id: "chira", end: "ちら", en: "Directions — and the polite way to point at a person",
      cells: [
        { k: "こちら", r: "kochira", e: "this way" },
        { k: "そちら", r: "sochira", e: "that way" },
        { k: "あちら", r: "achira",  e: "that way over there" },
        { k: "どちら", r: "dochira", e: "which way?" },
      ],
    },
    {
      id: "nna", end: "んな", en: "What something is like, before a noun",
      cells: [
        { k: "こんな", r: "konna", e: "this kind of …" },
        { k: "そんな", r: "sonna", e: "that kind of …" },
        { k: "あんな", r: "anna",  e: "that kind of … over there" },
        { k: "どんな", r: "donna", e: "what kind of …?" },
      ],
    },
    {
      id: "u", end: "う", en: "How something is done, before a verb",
      cells: [
        { k: "こう", r: "kō",  e: "like this" },
        { k: "そう", r: "sō",  e: "like that" },
        { k: "ああ", r: "ā",   e: "like that, over there", odd: "あう" },
        { k: "どう", r: "dō",  e: "how?" },
      ],
    },
    {
      id: "nata", end: "なた", en: "People — the polite set",
      cells: [
        { k: "こなた", r: "konata", e: "archaic", dim: true },
        { k: "そなた", r: "sonata", e: "archaic", dim: true },
        { k: "あなた", r: "anata",  e: "you" },
        { k: "どなた", r: "donata", e: "who?" },
      ],
    },
  ],
};
