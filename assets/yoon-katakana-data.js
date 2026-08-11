/* yoon-katakana-data.js — the 33 katakana yōon, as eleven rows of three.
 *
 * Read by yoon-grid.js via `data-yoon="YOON_KATAKANA"` on the mount point, the
 * same arrangement kana-grid.js has with `data-kana`. Rendered in lesson 9.
 *
 * Deliberately a separate global from window.YOON rather than a script field on
 * it. The two sets have the SAME 33 cells and DIFFERENT holes, and that
 * difference is the entire teaching point of the section — merging them would
 * dissolve exactly the fact worth showing.
 *
 * The eleven rows are the same eleven, and for the same reason: thirteen kana
 * end in -i (イ キ シ チ ニ ヒ ミ リ, plus ギ ジ ヂ ビ ピ); イ is a bare vowel with
 * no consonant to palatalise, and ヂ is dead (lesson 5 for ぢ, lesson 9 §8 for
 * ヂ), so ヂャ ヂュ ヂョ are omitted as every standard chart omits them. Eleven
 * remain, times three columns, is 33.
 *
 * WHERE THE HOLES ARE, AND WHY IT MATTERS
 *
 * yoon-data.js has six `gap` cells — ひゅ みゅ びゅ ぴゃ ぴゅ ぴょ — and its own
 * comment says the first three "live in katakana loanwords (ヒューズ,
 * ミュージック, インタビュー)". That turns out to be exactly right, and checkable:
 *
 *   hiragana gap  ->  katakana cell
 *   ひゅ              ヒュ  ヒューズ          common
 *   みゅ              ミュ  ミュージック      common
 *   びゅ              ビュ  インタビュー      common
 *   ぴゅ              ピュ  コンピューター    common
 *   ぴょ              ピョ  ピョンヤン        common
 *   ぴゃ              ピャ  — nothing, in either script
 *
 * Five of hiragana's six holes are filled here. The tenth katakana hole, ピャ, is
 * the one cell in the whole 33 with no common word in EITHER script.
 *
 * It runs the other way too. This set is empty at ニャ ニョ ヒャ ヒョ ミョ リャ
 * リョ ビャ ビョ, and hiragana fills every one of them — にゃあ, にょうぼう,
 * ひゃく, ひょう, みょうじ, りゃく, りょこう, さんびゃく, びょういん. Those are
 * native words, and native words are not written in katakana; the yōon katakana
 * fills are loanwords, and loanwords are not written in hiragana. The two charts
 * are complements, not duplicates.
 *
 * Every word below is written in katakana in real Japanese and is tagged common
 * by JMdict, checked through <https://jisho.org/api/v1/search/words> on
 * 2026-08-05. Rejected on that bar: リュック (use リュックサック), ヒョウ,
 * コンニャク, ニョッキ, ウェイター.
 *
 * Note ギュ and ピュ are carried by words where the yōon sits INSIDE
 * (レギュラー, コンピューター) rather than at the head. That is normal for these
 * sounds and is not a lowering of the bar.
 *
 * Fields match yoon-data.js exactly so one component reads both:
 *   b base kana · br base romaji · mk tenten|maru · cells[3]
 *   k yōon · r romaji · w example word · wr its romaji · we its English
 *   gap the word that would serve if one existed · thin the row is nearly empty
 */

window.YOON_KATAKANA = {
  script: 'katakana',

  /* Named `cols`, not `smalls` — yoon-grid.js destructures `{ cols, rows }`, so
     this field name is part of the contract with the component. */
  cols: [
    { s: "ャ", r: "ya", v: "a" },
    { s: "ュ", r: "yu", v: "u" },
    { s: "ョ", r: "yo", v: "o" },
  ],

  rows: [
    {
      b: "キ", br: "ki",
      cells: [
        { k: "キャ", r: "kya", w: "キャベツ",       wr: "kyabetsu",   we: "cabbage" },
        { k: "キュ", r: "kyu", w: "バーベキュー",   wr: "bābekyū",    we: "barbecue" },
        { k: "キョ", r: "kyo", w: "キョロキョロ",   wr: "kyorokyoro", we: "looking around restlessly" },
      ],
    },
    {
      b: "シ", br: "shi",
      cells: [
        { k: "シャ", r: "sha", w: "シャワー",       wr: "shawā",      we: "shower" },
        { k: "シュ", r: "shu", w: "シューズ",       wr: "shūzu",      we: "shoes" },
        { k: "ショ", r: "sho", w: "ショッピング",   wr: "shoppingu",  we: "shopping" },
      ],
    },
    {
      b: "チ", br: "chi",
      cells: [
        { k: "チャ", r: "cha", w: "チャンス",       wr: "chansu",     we: "chance" },
        { k: "チュ", r: "chu", w: "チューリップ",   wr: "chūrippu",   we: "tulip" },
        { k: "チョ", r: "cho", w: "チョコレート",   wr: "chokorēto",  we: "chocolate" },
      ],
    },
    {
      /* にゃ was the thin row in hiragana; here ニャ and ニョ are empty outright.
         Both sounds are native rather than borrowed, so hiragana carries them. */
      b: "ニ", br: "ni",
      cells: [
        { k: "ニャ", r: "nya", gap: "にゃあ",       wr: "nyā",        we: "meow — hiragana" },
        { k: "ニュ", r: "nyu", w: "ニュース",       wr: "nyūsu",      we: "news" },
        { k: "ニョ", r: "nyo", gap: "にょうぼう",   wr: "nyōbō",      we: "wife — hiragana" },
      ],
    },
    {
      /* The row the hiragana chart could not finish. ヒュ was a dashed cell in
         lesson 7 with ヒューズ named as the word that would serve; here it is. */
      b: "ヒ", br: "hi",
      cells: [
        { k: "ヒャ", r: "hya", gap: "ひゃく",       wr: "hyaku",      we: "hundred — hiragana" },
        { k: "ヒュ", r: "hyu", w: "ヒューズ",       wr: "hyūzu",      we: "fuse" },
        { k: "ヒョ", r: "hyo", gap: "ひょう",       wr: "hyō",        we: "chart — hiragana" },
      ],
    },
    {
      b: "ミ", br: "mi",
      cells: [
        { k: "ミャ", r: "mya", w: "ミャンマー",     wr: "myanmā",     we: "Myanmar" },
        { k: "ミュ", r: "myu", w: "ミュージック",   wr: "myūjikku",   we: "music" },
        { k: "ミョ", r: "myo", gap: "みょうじ",     wr: "myōji",      we: "surname — hiragana" },
      ],
    },
    {
      b: "リ", br: "ri",
      cells: [
        { k: "リャ", r: "rya", gap: "りゃく",       wr: "ryaku",      we: "abbreviation — hiragana" },
        { k: "リュ", r: "ryu", w: "リュックサック", wr: "ryukkusakku", we: "rucksack" },
        { k: "リョ", r: "ryo", gap: "りょこう",     wr: "ryokō",      we: "travel — hiragana" },
      ],
    },
    {
      b: "ギ", br: "gi",
      cells: [
        { k: "ギャ", r: "gya", w: "ギャラリー",     wr: "gyararī",    we: "gallery" },
        { k: "ギュ", r: "gyu", w: "レギュラー",     wr: "regyurā",    we: "regular" },
        { k: "ギョ", r: "gyo", w: "ギョーザ",       wr: "gyōza",      we: "gyoza dumpling" },
      ],
    },
    {
      b: "ジ", br: "ji",
      cells: [
        { k: "ジャ", r: "ja",  w: "ジャケット",     wr: "jaketto",    we: "jacket" },
        { k: "ジュ", r: "ju",  w: "ジュース",       wr: "jūsu",       we: "juice" },
        { k: "ジョ", r: "jo",  w: "ジョギング",     wr: "jogingu",    we: "jogging" },
      ],
    },
    {
      /* びゅ was dashed in lesson 7; インタビュー is the word that fills it. */
      b: "ビ", br: "bi",
      cells: [
        { k: "ビャ", r: "bya", gap: "さんびゃく",   wr: "sanbyaku",   we: "three hundred — hiragana" },
        { k: "ビュ", r: "byu", w: "インタビュー",   wr: "intabyū",    we: "interview" },
        { k: "ビョ", r: "byo", gap: "びょういん",   wr: "byōin",      we: "hospital — hiragana" },
      ],
    },
    {
      /* All three were dashed in hiragana. Two of them fill here — and ピャ is
         the single cell in the whole chart that is empty in both scripts. */
      b: "ピ", br: "pi",
      cells: [
        { k: "ピャ", r: "pya", gap: "—",            wr: "",           we: "no common word in either script" },
        { k: "ピュ", r: "pyu", w: "コンピューター", wr: "konpyūtā",   we: "computer" },
        { k: "ピョ", r: "pyo", w: "ピョンヤン",     wr: "pyonyan",    we: "Pyongyang" },
      ],
    },
  ],
};
