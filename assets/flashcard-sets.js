/* flashcard-sets.js — which vocabulary sets the practice deck draws from.
 *
 * The deck is the one page in this course that crosses chapter boundaries, so
 * it needs a list of what to cross. This is that list, and nothing else: the
 * sets themselves stay separate globals, exactly as NOTES.md requires. Merging
 * them into one array would make each set's premise false the moment the next
 * chapter was appended — "the words of chapter 12" does not grow.
 *
 * ADDING A FUTURE VOCABULARY CHAPTER IS TWO LINES:
 *
 *   1. one entry here, in chapter order;
 *   2. one <script src="../assets/vocabNN-data.js"></script> on
 *      practice/flash-cards.html, above flashcards.js.
 *
 * Then re-run `node scripts/test_flashcards.mjs`, which counts the pool against
 * the sets and will fail if the script tag was forgotten — a registered set
 * whose global never loads is otherwise invisible, because `buildPool` skips
 * what it cannot find.
 *
 * Chapters 4–7 have sets too (`VOCAB`, `VOCAB5`, `VOCAB6`, `VOCAB7`) and are
 * deliberately absent: the deck was scoped to 10–13. They join the same way if
 * that changes.
 *
 * `label` is what the chapter checkbox says. Keep it short — four of them sit
 * on one line at 390px.
 */

window.FLASHCARD_SETS = [
  {
    global: "VOCAB10",
    n: 10,
    label: "The calendar",
    lesson: "lessons/0010-days-and-months.html",
  },
  {
    global: "VOCAB11",
    n: 11,
    label: "Introducing yourself",
    lesson: "lessons/0011-introducing-yourself.html",
  },
  {
    global: "VOCAB12",
    n: 12,
    label: "This, that, that over there",
    lesson: "lessons/0012-this-that-and-that-over-there.html",
  },
  {
    global: "VOCAB13",
    n: 13,
    label: "Places, floors and prices",
    lesson: "lessons/0013-how-much-and-which-floor.html",
  },
  {
    global: "VOCAB14",
    n: 14,
    label: "The working day",
    lesson: "lessons/0014-the-working-day.html",
  },
];
