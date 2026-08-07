/* kana-panel-data.js — the bare kana index behind the floating side panel.
 *
 * Hand-authored, and deliberately NOT derived from kana-data.js / katakana-data.js
 * at runtime: those two files are 80 KB of KanjiVG stroke paths between them, they
 * are only loaded by the lessons that draw characters, and a lookup panel that has
 * to be on every page cannot carry that weight. What it needs is the character and
 * its reading, which is what this holds — about 2 KB.
 *
 * The duplication is real, so it is checked rather than trusted:
 *
 *     node scripts/check_kana_panel.mjs
 *
 * fails if any character or reading here disagrees with the generated files.
 * Run it after regenerating either one.
 *
 * Both scripts sit in ONE table, three characters to a slot — hiragana, katakana,
 * and the reading they share. That is the fact the panel exists to make visible:
 * the two scripts spell the same sound system. Since 2026-08-05 the panel renders
 * that table as it is written — one slot, three characters stacked — instead of
 * splitting it across a left and a right panel.
 *
 * `taught` pins how far the course has gone, per script. A section key that is
 * absent means none of it has been covered yet; "*" means all of it. Rows past
 * that line still render, dimmed, so the chart never looks shorter than it is —
 * but nothing claims to have been taught that has not been. **Update this when a
 * lesson adds kana**, or the panel will quietly present new material as revision.
 */

window.KANA_PANEL = {
  /* One panel, and it lives on the LEFT because the course-nav drawer owns the
     right edge. `id` is the panel's name in the DOM and in localStorage. */
  panel: {
    id: 'hiragana-katakana',
    label: 'Hiragana · Katakana',
    native: 'かな',
    side: 'left',
  },

  /* How far the course has taken each script. Hiragana: the gojūon (lessons 1–2),
     the marked rows (lesson 5), the yōon (lesson 7). Katakana: the first five rows
     (lesson 8), the remaining six, the marked rows and the yōon (lesson 9). Both
     scripts are now complete, so nothing in the panel is dimmed. It is still kept
     per script, because dimming now lands on the individual character rather than
     the slot: an untaught katakana can sit under a taught hiragana. The small ッ
     and the small vowels ァ ィ ゥ ェ ォ are taught in lesson 9 §10–11 but are not
     in this table: it is a table of *sounds*, three characters to a slot, and
     those two are modifiers rather than sounds of their own. */
  taught: {
    hiragana: { gojuon: '*', marked: '*', yoon: '*' },
    katakana: { gojuon: '*', marked: '*', yoon: '*' },
  },

  sections: [
    {
      id: 'gojuon',
      title: 'Gojūon',
      sub: 'the 46 basic sounds',
      cols: ['a', 'i', 'u', 'e', 'o'],
      rows: [
        { key: 'a',  h: ['あ', 'い', 'う', 'え', 'お'], k: ['ア', 'イ', 'ウ', 'エ', 'オ'], r: ['a', 'i', 'u', 'e', 'o'] },
        { key: 'ka', h: ['か', 'き', 'く', 'け', 'こ'], k: ['カ', 'キ', 'ク', 'ケ', 'コ'], r: ['ka', 'ki', 'ku', 'ke', 'ko'] },
        { key: 'sa', h: ['さ', 'し', 'す', 'せ', 'そ'], k: ['サ', 'シ', 'ス', 'セ', 'ソ'], r: ['sa', 'shi', 'su', 'se', 'so'] },
        { key: 'ta', h: ['た', 'ち', 'つ', 'て', 'と'], k: ['タ', 'チ', 'ツ', 'テ', 'ト'], r: ['ta', 'chi', 'tsu', 'te', 'to'] },
        { key: 'na', h: ['な', 'に', 'ぬ', 'ね', 'の'], k: ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'], r: ['na', 'ni', 'nu', 'ne', 'no'] },
        { key: 'ha', h: ['は', 'ひ', 'ふ', 'へ', 'ほ'], k: ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'], r: ['ha', 'hi', 'fu', 'he', 'ho'] },
        { key: 'ma', h: ['ま', 'み', 'む', 'め', 'も'], k: ['マ', 'ミ', 'ム', 'メ', 'モ'], r: ['ma', 'mi', 'mu', 'me', 'mo'] },
        /* The i and e slots of the ya row never existed. */
        { key: 'ya', h: ['や', null, 'ゆ', null, 'よ'], k: ['ヤ', null, 'ユ', null, 'ヨ'], r: ['ya', null, 'yu', null, 'yo'] },
        { key: 'ra', h: ['ら', 'り', 'る', 'れ', 'ろ'], k: ['ラ', 'リ', 'ル', 'レ', 'ロ'], r: ['ra', 'ri', 'ru', 're', 'ro'] },
        /* を is read o and is only ever the object particle; wi/wu/we are obsolete. */
        { key: 'wa', h: ['わ', null, null, null, 'を'], k: ['ワ', null, null, null, 'ヲ'], r: ['wa', null, null, null, 'o'] },
        { key: 'n',  h: ['ん', null, null, null, null], k: ['ン', null, null, null, null], r: ['n', null, null, null, null] },
      ],
    },
    {
      id: 'marked',
      title: 'Tenten and maru',
      sub: 'the 25 marked kana',
      cols: ['a', 'i', 'u', 'e', 'o'],
      rows: [
        { key: 'ga', h: ['が', 'ぎ', 'ぐ', 'げ', 'ご'], k: ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ'], r: ['ga', 'gi', 'gu', 'ge', 'go'] },
        { key: 'za', h: ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'], k: ['ザ', 'ジ', 'ズ', 'ゼ', 'ゾ'], r: ['za', 'ji', 'zu', 'ze', 'zo'] },
        /* ぢ and づ are read exactly as じ and ず; almost no common word uses them. */
        { key: 'da', h: ['だ', 'ぢ', 'づ', 'で', 'ど'], k: ['ダ', 'ヂ', 'ヅ', 'デ', 'ド'], r: ['da', 'ji', 'zu', 'de', 'do'] },
        { key: 'ba', h: ['ば', 'び', 'ぶ', 'べ', 'ぼ'], k: ['バ', 'ビ', 'ブ', 'ベ', 'ボ'], r: ['ba', 'bi', 'bu', 'be', 'bo'] },
        { key: 'pa', h: ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'], k: ['パ', 'ピ', 'プ', 'ペ', 'ポ'], r: ['pa', 'pi', 'pu', 'pe', 'po'] },
      ],
    },
    {
      /* Eleven bases — every kana ending in -i except い, which has no consonant to
         palatalise, and ぢ, which is dead. Row order follows the marked rows above. */
      id: 'yoon',
      title: 'Yōon',
      sub: 'eleven bases + small ゃ ゅ ょ',
      cols: ['ya', 'yu', 'yo'],
      rows: [
        { key: 'ki',  h: ['きゃ', 'きゅ', 'きょ'], k: ['キャ', 'キュ', 'キョ'], r: ['kya', 'kyu', 'kyo'] },
        { key: 'shi', h: ['しゃ', 'しゅ', 'しょ'], k: ['シャ', 'シュ', 'ショ'], r: ['sha', 'shu', 'sho'] },
        { key: 'chi', h: ['ちゃ', 'ちゅ', 'ちょ'], k: ['チャ', 'チュ', 'チョ'], r: ['cha', 'chu', 'cho'] },
        { key: 'ni',  h: ['にゃ', 'にゅ', 'にょ'], k: ['ニャ', 'ニュ', 'ニョ'], r: ['nya', 'nyu', 'nyo'] },
        { key: 'hi',  h: ['ひゃ', 'ひゅ', 'ひょ'], k: ['ヒャ', 'ヒュ', 'ヒョ'], r: ['hya', 'hyu', 'hyo'] },
        { key: 'mi',  h: ['みゃ', 'みゅ', 'みょ'], k: ['ミャ', 'ミュ', 'ミョ'], r: ['mya', 'myu', 'myo'] },
        { key: 'ri',  h: ['りゃ', 'りゅ', 'りょ'], k: ['リャ', 'リュ', 'リョ'], r: ['rya', 'ryu', 'ryo'] },
        { key: 'gi',  h: ['ぎゃ', 'ぎゅ', 'ぎょ'], k: ['ギャ', 'ギュ', 'ギョ'], r: ['gya', 'gyu', 'gyo'] },
        { key: 'ji',  h: ['じゃ', 'じゅ', 'じょ'], k: ['ジャ', 'ジュ', 'ジョ'], r: ['ja', 'ju', 'jo'] },
        { key: 'bi',  h: ['びゃ', 'びゅ', 'びょ'], k: ['ビャ', 'ビュ', 'ビョ'], r: ['bya', 'byu', 'byo'] },
        { key: 'pi',  h: ['ぴゃ', 'ぴゅ', 'ぴょ'], k: ['ピャ', 'ピュ', 'ピョ'], r: ['pya', 'pyu', 'pyo'] },
      ],
    },
  ],
};
