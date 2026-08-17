/* number-core.js — turn a numeral into the way it is said.
 *
 * A plain global rather than a module, deliberately: `scripts/check_numbers.py`
 * runs this file and `number-data.js` in a throwaway Node VM and asserts the
 * output against a verified table, exactly as `check_counters.py` does with
 * `counter-data.js`. A `type="module"` file cannot be loaded that way, and a
 * generator whose only test is "it looked right in the browser" is a generator
 * that will quietly teach a wrong reading.
 *
 * THE CODE KNOWS THE SHAPE, THE DATA KNOWS THE FACTS — record 0009. Nothing
 * here contains a Japanese string. Every reading, every irregular and every
 * "this place is bare at one" comes out of `window.NUMBERS`, so a fix to the
 * language is a fix to the data file and cannot be contradicted by a template
 * literal in here.
 *
 * WHAT IT RETURNS, and why it is not just a string: the blocks are the lesson.
 * A number is written in threes and said in fours, so the reader has to see the
 * four-digit blocks it will be said in — that is chapter 13's argument, made
 * operable. `read(12345678)` gives two blocks, 1234 万 and 5678, and the widget
 * draws them apart.
 *
 *   read(n) -> {
 *     n, ok,                       // ok is false when out of range
 *     digits: "12,345,678",        // how it is WRITTEN — commas every three
 *     blocks: [{ v, digits, k, r, ro, unitK, unitR, unitRo }],  // how it is SAID
 *     k, r, ro                     // the whole thing joined: kanji, kana, romaji
 *   }
 */

(function (global) {
  const NUMBERS = () => global.NUMBERS;

  /* One four-digit block: 千 place, 百 place, 十 place, then the bare digit.
     `atMyriad` is true when this block is immediately followed by 万 or 億,
     which is the only thing that can change how the 千 is said. */
  function block(value, atMyriad) {
    const data = NUMBERS();
    const sino = data.sino;
    /* Kana runs together the way Japanese writes it; romaji is collected as
       parts so it can be spaced. Spacing romaji is not decoration — the point
       of showing it at all is that a reader can see where one place ends and
       the next begins, which the kana deliberately does not show. */
    const out = { k: "", r: "", ro: [] };

    let rest = value;
    for (const place of data.group) {
      const digit = Math.floor(rest / place.v);
      rest %= place.v;
      if (!digit) continue;

      const irregular = place.irr[digit];
      if (irregular) {
        out.k += sino[digit].k + place.k;
        out.r += irregular.r;
        out.ro.push(irregular.ro);
      } else if (digit === 1 && place.bareAtOne) {
        /* 一 is not said in front of 十, 百 or 千 — except that a 千 sitting
           immediately in front of 万 or 億 takes it back. */
        const one = atMyriad && place.myriadOne && value === place.v
          ? place.myriadOne : null;
        out.k += (one ? sino[1].k : "") + place.k;
        out.r += one ? one.r : place.r;
        out.ro.push(one ? one.ro : place.ro);
      } else {
        out.k += sino[digit].k + place.k;
        out.r += sino[digit].r + place.r;
        out.ro.push(sino[digit].ro + place.ro);
      }
    }

    if (rest) {
      out.k += sino[rest].k;
      out.r += sino[rest].r;
      out.ro.push(sino[rest].ro);
    }
    return out;
  }

  function read(n) {
    const data = NUMBERS();
    const bad = { n, ok: false, digits: String(n), blocks: [], k: "", r: "", ro: "" };
    if (!data) return bad;
    if (!Number.isInteger(n) || n < 0 || n > data.max) return bad;

    const digits = n.toLocaleString("en-US");

    /* Zero has no block and no place; it is a word on its own. */
    if (n === 0) {
      const z = data.sino[0];
      return { n, ok: true, digits, k: z.k, r: z.r, ro: z.ro,
               blocks: [{ v: 1, digits: "0", k: z.k, r: z.r, ro: z.ro,
                          unitK: "", unitR: "", unitRo: "" }] };
    }

    const blocks = [];
    /* The myriad words largest first, then the bare block, which is what makes
       the four-digit grouping the loop's own structure rather than a comment. */
    const units = [...data.myriad, { v: 1, k: "", r: "", ro: "" }];
    for (const unit of units) {
      const value = Math.floor(n / unit.v) % 10000;
      if (!value) continue;
      const b = block(value, unit.v > 1);
      blocks.push({
        v: unit.v, digits: String(value),
        k: b.k, r: b.r,
        /* The myriad word is hyphenated onto its block rather than spaced off
           it, so the romaji shows the same two-level structure the kana has:
           spaces between places, a hyphen where 万 or 億 cuts. */
        ro: b.ro.join(" ") + (unit.ro ? "-" + unit.ro : ""),
        unitK: unit.k, unitR: unit.r, unitRo: unit.ro,
      });
    }

    return {
      n, ok: true, digits, blocks,
      k: blocks.map((b) => b.k + b.unitK).join(""),
      r: blocks.map((b) => b.r + b.unitR).join(""),
      ro: blocks.map((b) => b.ro).join(" "),
    };
  }

  global.readNumber = read;
})(typeof window !== "undefined" ? window : globalThis);
