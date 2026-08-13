/* reading1-data.js — Reading 1: Minna no Nihongo I, lessons 1, 2 and 3.
 *
 * The six pages in `library/raw/reading 1/` transcribed LINE FOR LINE. This is a
 * READING CHAPTER, not a lesson: nothing here is rewritten, reordered, summarised
 * or taught — the printed page is the artefact, and the only things added are the
 * two buttons `reading.js` puts beside each line (hear it, translate it).
 *
 * ---- The furigana contract ----
 *
 * Ruby is written the Aozora Bunko way: 会社員《かいしゃいん》 puts かいしゃいん over
 * 会社員. The base is the run of kanji immediately before 《…》; write ｜ in front to
 * mark the base by hand where that guess would be wrong (｜佐藤《さとう》けい子). The
 * furigana here is the BOOK'S OWN — where the book annotates only one character of
 * a compound, so does this file. 9歳《さい》 is exactly what page 1 prints.
 *
 * ---- Audio is derived from the furigana, never written twice ----
 *
 * reading.js builds the spoken form by swapping each kanji base for its reading,
 * so a line's audio cannot disagree with the ruby printed above it. `say` overrides
 * that, and is present ONLY where the page prints a numeral the ruby cannot voice:
 *
 *   9歳          → きゅうさい
 *   408          → よんまるはち     (a room number is read digit by digit)
 *   地下1階       → ちかいっかい     (いち + かい collide; the book prints only ちか・かい)
 *   18,600円      → いちまんはっせんろっぴゃくえん
 *   2,500円       → にせんごひゃくえん
 *   「9」「7」     → きゅう・なな
 *
 * Those five are lesson 13's sound changes turning up in running text, which is why
 * they carry a `n` note rather than being silently corrected.
 *
 * ---- Arabic ----
 *
 * Modern Standard Arabic with full harakat, and — where the course has already
 * translated a phrase — THE COURSE'S OWN WORDING, so a reader meeting はじめまして
 * here sees the same تَشَرَّفْنا lesson 11 gave. Phrases reused from lessons 11–13:
 * はじめまして, どうぞよろしくおねがいします, 〜からきました, こちらは〜さんです,
 * これからおせわになります, こちらこそ, どうもありがとうございます, すみません,
 * 〜をみせてください, 〜をください, どうぞ, どうも; greetings from the classroom
 * phrasebook. Nouns reuse their word-card gloss (かばん → حَقِيبَة, かぎ → مِفْتَاح,
 * ざっし → مَجَلَّة …) and the こそあど mapping lesson 12 and 13 fixed:
 * これ → هٰذَا · それ → ذَاكَ · あれ → ذٰلِكَ · ここ → هُنَا · あそこ → هُنَالِكَ.
 * Only بَائِع (店員) is new — no word card has covered a shop assistant yet.
 *
 * ---- Checked ----
 *
 * Every reading and gloss checked against Jisho/JMdict on 2026-08-13. Three things
 * the check turned up, all recorded in the notes below: 銀行員 is NOT tagged common
 * in JMdict though 会社員 is; 何歳 has no common entry of its own (it is 何 + a
 * counter, built rather than listed); and 階 on its own resolves first to the
 * archaic きざはし, which is why the counter reading has to come from the phrase.
 *
 * Fields per line: sp speaker · jp the line · en · ar · at · say audio override ·
 * n note · sep a dotted scene break · paren the book's own parenthetical.
 * A line carrying `i` starts a new numbered item; lines after it belong to it.
 */

window.READING1 = {
  id: "reading1",
  title: "Minna no Nihongo I — lessons 1, 2 and 3",
  source: "Minna no Nihongo I, 3A Corporation · 本冊 pages for 第1課–第3課",

  chapters: [
    /* ============================ 第 1 課 ============================ */
    {
      n: 1,
      jp: "第1課",
      title: "I am Mike Miller",
      lede: "Saying who you are, who you are not, and who else is the same.",
      sections: [
        {
          id: "bunkei1",
          jp: "文型",
          title: "Sentence patterns",
          lines: [
            {
              i: 1,
              jp: "わたしは　マイク・ミラーです。",
              en: "I am Mike Miller.",
              ar: "أَنَا مَايْك مِيلَر.",
              at: "anā Mayk Mīlar",
            },
            {
              i: 2,
              jp: "サントスさんは　学生《がくせい》じゃ　ありません。",
              en: "Mr Santos is not a student.",
              ar: "سَانْتُوس لَيْسَ طَالِبًا.",
              at: "Santōs laysa ṭāliban",
              n: "The negative of です. Arabic negates the sentence with لَيْسَ and puts the complement in the accusative — طَالِبًا, not طَالِبٌ.",
            },
            {
              paren: true,
              jp: "（では）",
              en: "(or では)",
              ar: "(الصِّيغَةُ الرَّسْمِيَّةُ)",
              at: "(aṣ-ṣīghatu r-rasmiyya)",
              n: "The book's own footnote to the line above: では is the formal written form of じゃ. Same meaning, and the は is still read wa.",
            },
            {
              i: 3,
              jp: "ミラーさんは　会社員《かいしゃいん》ですか。",
              en: "Is Mr Miller a company employee?",
              ar: "هَلْ مِيلَر مُوَظَّفُ شَرِكَةٍ؟",
              at: "hal Mīlar muwaẓẓafu sharika?",
            },
            {
              i: 4,
              jp: "サントスさんも　会社員《かいしゃいん》です。",
              en: "Mr Santos is a company employee too.",
              ar: "سَانْتُوس أَيْضًا مُوَظَّفُ شَرِكَةٍ.",
              at: "Santōs ayḍan muwaẓẓafu sharika",
              n: "も replaces は — it never sits beside it. It is the one particle on this page the course has not taught yet.",
            },
          ],
        },
        {
          id: "reibun1",
          jp: "例文",
          title: "Example sentences",
          lines: [
            {
              i: 1,
              jp: "［あなたは］　マイク・ミラーさんですか。",
              en: "Are you Mike Miller?",
              ar: "هَلْ أَنْتَ مَايْك مِيلَر؟",
              at: "hal anta Mayk Mīlar?",
              n: "The brackets are the book's, and they mean “sayable, but nobody says it”. Japanese drops the subject once it is obvious; Arabic keeps أَنْتَ.",
            },
            {
              jp: "……はい、［わたしは］　マイク・ミラーです。",
              en: "……Yes, I am Mike Miller.",
              ar: "نَعَمْ، أَنَا مَايْك مِيلَر.",
              at: "naʿam, anā Mayk Mīlar",
            },
            {
              i: 2,
              jp: "ミラーさんは　学生《がくせい》ですか。",
              en: "Are you a student, Mr Miller?",
              ar: "هَلْ أَنْتَ طَالِبٌ يَا سَيِّدَ مِيلَر؟",
              at: "hal anta ṭālibun yā sayyida Mīlar?",
              n: "Japanese asks about you by NAME, not with あなた. The English and the Arabic both have to switch to “you” to sound natural.",
            },
            {
              jp: "……いいえ、［わたしは］　学生《がくせい》じゃ　ありません。",
              en: "……No, I am not a student.",
              ar: "لَا، لَسْتُ طَالِبًا.",
              at: "lā, lastu ṭāliban",
            },
            {
              i: 3,
              jp: "ワンさんは　銀行員《ぎんこういん》ですか。",
              en: "Is Mr Wang a bank employee?",
              ar: "هَلْ وَانْغ مُوَظَّفُ بَنْكٍ؟",
              at: "hal Wāngh muwaẓẓafu bank?",
              n: "JMdict tags 会社員 common and 銀行員 not — the second is a transparent build, 銀行 “bank” + 員 “member”, the same 員 as in 会社員 and 店員.",
            },
            {
              jp: "……いいえ、［ワンさんは］　銀行員《ぎんこういん》じゃ　ありません。",
              en: "……No, Mr Wang is not a bank employee.",
              ar: "لَا، وَانْغ لَيْسَ مُوَظَّفَ بَنْكٍ.",
              at: "lā, Wāngh laysa muwaẓẓafa bank",
            },
            {
              jp: "医者《いしゃ》です。",
              en: "He is a doctor.",
              ar: "هُوَ طَبِيبٌ.",
              at: "huwa ṭabīb",
            },
            {
              i: 4,
              jp: "あの　方《かた》は　どなたですか。",
              en: "Who is that gentleman?",
              ar: "مَنْ ذٰلِكَ السَّيِّدُ؟",
              at: "man dhālika s-sayyid?",
              n: "方 read かた, not ほう: the polite word for a person. Both halves of the line are the polite ones — あの方 for あのひと, どなた for だれ.",
            },
            {
              jp: "……ワットさんです。　さくら大学《だいがく》の　先生《せんせい》です。",
              en: "……That is Mr Watt. He is a teacher at Sakura University.",
              ar: "هُوَ السَّيِّدُ وَاط. هُوَ أُسْتَاذٌ فِي جَامِعَةِ سَاكُورَا.",
              at: "huwa s-sayyid Wāṭ. huwa ustādhun fī jāmiʿati Sākūrā",
              n: "The word card glosses 先生 as مُعَلِّم. At a university the Arabic word is أُسْتَاذ — Japanese uses the one 先生 for both.",
            },
            {
              i: 5,
              jp: "グプタさんは　会社員《かいしゃいん》ですか。",
              en: "Is Mr Gupta a company employee?",
              ar: "هَلْ غُوبْتَا مُوَظَّفُ شَرِكَةٍ؟",
              at: "hal Ghūbtā muwaẓẓafu sharika?",
            },
            {
              jp: "……はい、会社員《かいしゃいん》です。",
              en: "……Yes, he is a company employee.",
              ar: "نَعَمْ، هُوَ مُوَظَّفُ شَرِكَةٍ.",
              at: "naʿam, huwa muwaẓẓafu sharika",
            },
            {
              jp: "カリナさんも　会社員《かいしゃいん》ですか。",
              en: "Is Ms Karina a company employee too?",
              ar: "وَهَلْ كَارِينَا أَيْضًا مُوَظَّفَةُ شَرِكَةٍ؟",
              at: "wa-hal Kārīnā ayḍan muwaẓẓafatu sharika?",
              n: "Arabic marks her feminine — مُوَظَّفَة. Japanese 会社員 does not change for a woman, and neither does 学生 in the next line.",
            },
            {
              jp: "……いいえ。　［カリナさんは］　学生《がくせい》です。",
              en: "……No. Ms Karina is a student.",
              ar: "لَا. كَارِينَا طَالِبَةٌ.",
              at: "lā. Kārīnā ṭāliba",
            },
            {
              i: 6,
              jp: "テレーザちゃんは　何歳《なんさい》ですか。",
              en: "How old are you, Teresa?",
              ar: "كَمْ عُمْرُكِ يَا تِيرِيزَا؟",
              at: "kam ʿumruki yā Tīrīzā?",
              n: "ちゃん, so she is a child — which is why asking is polite here. 何歳 has no dictionary entry of its own: it is built, 何 + the counter 〜さい.",
            },
            {
              jp: "……9歳《さい》です。",
              say: "きゅうさいです。",
              en: "……I am nine.",
              ar: "عُمْرِي تِسْعُ سَنَوَاتٍ.",
              at: "ʿumrī tisʿu sanawāt",
              n: "9歳 is きゅうさい, never くさい. Arabic runs the other way at this number: تِسْعُ سَنَوَاتٍ is “nine years”, feminine plural — the counted noun changes, not the number word.",
            },
          ],
        },
        {
          id: "kaiwa1",
          jp: "会話",
          title: "Conversation",
          heading: "初《はじ》めまして",
          headingEn: "How do you do",
          lines: [
            {
              sp: "佐藤《さとう》",
              jp: "おはよう　ございます。",
              en: "Good morning.",
              ar: "صَبَاحُ الْخَيْرِ.",
              at: "ṣabāḥu l-khayr",
            },
            {
              sp: "山田《やまだ》",
              jp: "おはよう　ございます。",
              en: "Good morning.",
              ar: "صَبَاحُ الْخَيْرِ.",
              at: "ṣabāḥu l-khayr",
            },
            {
              jp: "佐藤《さとう》さん、こちらは　マイク・ミラーさんです。",
              en: "Mr Sato, this is Mr Mike Miller.",
              ar: "يَا سَيِّدَ سَاتُو، هٰذَا السَّيِّدُ مَايْك مِيلَر.",
              at: "yā sayyida Sātū, hādhā s-sayyid Mayk Mīlar",
              n: "こちら, not これ — a person is introduced with the polite direction word, never with the word for a thing.",
            },
            {
              sp: "ミラー",
              jp: "初《はじ》めまして。",
              en: "How do you do.",
              ar: "تَشَرَّفْنا.",
              at: "tasharrafnā",
            },
            {
              jp: "マイク・ミラーです。",
              en: "I am Mike Miller.",
              ar: "أَنَا مَايْك مِيلَر.",
              at: "anā Mayk Mīlar",
            },
            {
              jp: "アメリカから　来《き》ました。",
              en: "I have come from America.",
              ar: "جِئْتُ مِنْ أَمْرِيكَا.",
              at: "jiʾtu min Amrīkā",
            },
            {
              jp: "どうぞ　よろしく。",
              en: "Pleased to meet you.",
              ar: "سُرِرْتُ بِمَعْرِفَتِكَ.",
              at: "surirtu bi-maʿrifatik",
            },
            {
              sp: "佐藤《さとう》",
              jp: "｜佐藤《さとう》けい子《こ》です。",
              en: "I am Keiko Sato.",
              ar: "أَنَا كِيكُو سَاتُو.",
              at: "anā Kīkū Sātū",
              n: "Family name first — 佐藤 is the surname, けい子 the given name. The English and Arabic both flip the order.",
            },
            {
              jp: "どうぞ　よろしく。",
              en: "Pleased to meet you.",
              ar: "سُرِرْتُ بِمَعْرِفَتِكَ.",
              at: "surirtu bi-maʿrifatik",
            },
          ],
        },
      ],
    },

    /* ============================ 第 2 課 ============================ */
    {
      n: 2,
      jp: "第2課",
      title: "This is a dictionary",
      lede: "Pointing at things, and saying whose they are.",
      sections: [
        {
          id: "bunkei2",
          jp: "文型",
          title: "Sentence patterns",
          lines: [
            {
              i: 1,
              jp: "これは　辞書《じしょ》です。",
              en: "This is a dictionary.",
              ar: "هٰذَا قَامُوسٌ.",
              at: "hādhā qāmūs",
            },
            {
              i: 2,
              jp: "それは　わたしの　傘《かさ》です。",
              en: "That is my umbrella.",
              ar: "ذَاكَ مِظَلَّتِي.",
              at: "dhāka miẓallatī",
              n: "の does what Arabic does with a suffix: わたしの 傘 is مِظَلَّتِي, one word carrying the owner.",
            },
            {
              i: 3,
              jp: "この　本《ほん》は　わたしのです。",
              en: "This book is mine.",
              ar: "هٰذَا الْكِتَابُ لِي.",
              at: "hādhā l-kitābu lī",
              n: "わたしの with nothing after it — の is holding the place of the noun. English does the same trick with “mine”.",
            },
          ],
        },
        {
          id: "reibun2",
          jp: "例文",
          title: "Example sentences",
          lines: [
            {
              i: 1,
              jp: "これは　ボールペンですか。",
              en: "Is this a ballpoint pen?",
              ar: "هَلْ هٰذَا قَلَمُ حِبْرٍ جَافٍّ؟",
              at: "hal hādhā qalamu ḥibrin jāff?",
            },
            {
              jp: "……はい、そうです。",
              en: "……Yes, it is.",
              ar: "نَعَمْ، هُوَ كَذٰلِكَ.",
              at: "naʿam, huwa kadhālik",
            },
            {
              i: 2,
              jp: "それは　ノートですか。",
              en: "Is that a notebook?",
              ar: "هَلْ ذَاكَ دَفْتَرٌ؟",
              at: "hal dhāka daftar?",
            },
            {
              jp: "……いいえ、［これは］　手帳《てちょう》です。",
              en: "……No, this is a pocket diary.",
              ar: "لَا، هٰذَا مُفَكِّرَةٌ.",
              at: "lā, hādhā mufakkira",
              n: "The pointer flips: what is それ to the asker is これ to the answerer. Same object, different hand.",
            },
            {
              i: 3,
              jp: "それは　何《なん》ですか。",
              en: "What is that?",
              ar: "مَا ذَاكَ؟",
              at: "mā dhāka?",
            },
            {
              jp: "……名刺《めいし》です。",
              en: "……It is a business card.",
              ar: "بِطَاقَةُ عَمَلٍ.",
              at: "biṭāqatu ʿamal",
            },
            {
              i: 4,
              jp: "これは「9」ですか、「7」ですか。",
              say: "これはきゅうですか、ななですか。",
              en: "Is this a “9” or a “7”?",
              ar: "هَلْ هٰذَا تِسْعَةٌ أَمْ سَبْعَةٌ؟",
              at: "hal hādhā tisʿatun am sabʿa?",
              n: "The handwriting question. Say なな, not しち — しち is misheard as いち, which is exactly what this line exists to prevent.",
            },
            {
              jp: "……「9」です。",
              say: "きゅうです。",
              en: "……It is a “9”.",
              ar: "هٰذَا تِسْعَةٌ.",
              at: "hādhā tisʿa",
            },
            {
              i: 5,
              jp: "それは　何《なん》の　雑誌《ざっし》ですか。",
              en: "What kind of magazine is that?",
              ar: "أَيُّ نَوْعٍ مِنَ الْمَجَلَّاتِ ذَاكَ؟",
              at: "ayyu nawʿin mina l-majallāti dhāka?",
              n: "何の, not 何 — “a magazine of what”. The の is the same の as in わたしの.",
            },
            {
              jp: "……コンピューターの　雑誌《ざっし》です。",
              en: "……It is a computer magazine.",
              ar: "مَجَلَّةُ حَاسُوبٍ.",
              at: "majallatu ḥāsūb",
            },
            {
              i: 6,
              jp: "あれは　だれの　かばんですか。",
              en: "Whose bag is that over there?",
              ar: "حَقِيبَةُ مَنْ تِلْكَ؟",
              at: "ḥaqībatu man tilka?",
            },
            {
              jp: "……佐藤《さとう》さんの　かばんです。",
              en: "……It is Mr Sato's bag.",
              ar: "هِيَ حَقِيبَةُ السَّيِّدِ سَاتُو.",
              at: "hiya ḥaqībatu s-sayyidi Sātū",
            },
            {
              i: 7,
              jp: "これは　ミラーさんのですか。",
              en: "Is this Mr Miller's?",
              ar: "هَلْ هٰذَا لِلسَّيِّدِ مِيلَر؟",
              at: "hal hādhā li-s-sayyidi Mīlar?",
            },
            {
              jp: "……いいえ、わたしのじゃ　ありません。",
              en: "……No, it is not mine.",
              ar: "لَا، لَيْسَ لِي.",
              at: "lā, laysa lī",
            },
            {
              i: 8,
              jp: "この　かぎは　だれのですか。",
              en: "Whose is this key?",
              ar: "لِمَنْ هٰذَا الْمِفْتَاحُ؟",
              at: "li-man hādhā l-miftāḥ?",
            },
            {
              jp: "……わたしのです。",
              en: "……It is mine.",
              ar: "هُوَ لِي.",
              at: "huwa lī",
            },
          ],
        },
        {
          id: "kaiwa2",
          jp: "会話",
          title: "Conversation",
          heading: "これから　お世話《せわ》に　なります",
          headingEn: "I shall be in your care from now on",
          lines: [
            {
              sp: "山田一郎《やまだいちろう》",
              jp: "はい。　どなたですか。",
              en: "Yes. Who is it?",
              ar: "نَعَمْ. مَنْ بِالْبَابِ؟",
              at: "naʿam. man bi-l-bāb?",
              n: "Spoken through a closed door, which is why どなた and not だれ — you are polite to someone you cannot yet see.",
            },
            {
              sp: "サントス",
              jp: "408の　サントスです。",
              say: "よんまるはちのサントスです。",
              en: "I am Santos from 408.",
              ar: "أَنَا سَانْتُوس مِنَ الشَّقَّةِ ٤٠٨.",
              at: "anā Santōs mina sh-shaqqati 408",
              n: "A room number is read digit by digit — よんまるはち. まる is the zero, the same まる as the circle on ぱ.",
            },
            { sep: true },
            {
              sp: "サントス",
              jp: "こんにちは。　サントスです。",
              en: "Hello. I am Santos.",
              ar: "نَهَارُكَ سَعِيدٌ. أَنَا سَانْتُوس.",
              at: "nahāruka saʿīd. anā Santōs",
            },
            {
              jp: "これから　お世話《せわ》に　なります。",
              en: "I shall be in your care from now on.",
              ar: "أَرْجُو حُسْنَ رِعَايَتِكُمْ.",
              at: "arjū ḥusna riʿāyatikum",
              n: "The phrase a new neighbour says. Taught whole in lesson 12 — the に inside it is not a particle to reuse yet.",
            },
            {
              jp: "どうぞ　よろしく　お願《ねが》いします。",
              en: "Pleased to meet you.",
              ar: "سُرِرْتُ بِمَعْرِفَتِكَ.",
              at: "surirtu bi-maʿrifatik",
            },
            {
              sp: "山田一郎《やまだいちろう》",
              jp: "こちらこそ　よろしく　お願《ねが》いします。",
              en: "The pleasure is mine.",
              ar: "بَلِ الشَّرَفُ لِي.",
              at: "bali sh-sharafu lī",
            },
            {
              sp: "サントス",
              jp: "あのう、これ、コーヒーです。　どうぞ。",
              en: "Er — this is coffee. Please take it.",
              ar: "عَفْوًا، هٰذِهِ قَهْوَةٌ. تَفَضَّلْ.",
              at: "ʿafwan, hādhihi qahwa. tafaḍḍal",
              n: "これ、コーヒーです with no は — the particle drops in speech. どうぞ goes with the hand that gives.",
            },
            {
              sp: "山田一郎《やまだいちろう》",
              jp: "どうも　ありがとう　ございます。",
              en: "Thank you very much.",
              ar: "شُكْرًا جَزِيلًا.",
              at: "shukran jazīlan",
            },
          ],
        },
      ],
    },

    /* ============================ 第 3 課 ============================ */
    {
      n: 3,
      jp: "第3課",
      title: "The dining hall is here",
      lede: "Where things are, where they come from, and what they cost.",
      sections: [
        {
          id: "bunkei3",
          jp: "文型",
          title: "Sentence patterns",
          lines: [
            {
              i: 1,
              jp: "ここは　食堂《しょくどう》です。",
              en: "This is the dining hall.",
              ar: "هُنَا الْمَطْعَمُ.",
              at: "hunā l-maṭʿam",
            },
            {
              i: 2,
              jp: "エレベーターは　あそこです。",
              en: "The lift is over there.",
              ar: "الْمِصْعَدُ هُنَالِكَ.",
              at: "al-miṣʿadu hunālika",
            },
          ],
        },
        {
          id: "reibun3",
          jp: "例文",
          title: "Example sentences",
          lines: [
            {
              i: 1,
              jp: "ここは　新大阪《しんおおさか》ですか。",
              en: "Is this Shin-Osaka?",
              ar: "هَلْ هٰذِهِ مَحَطَّةُ شِين أُوسَاكَا؟",
              at: "hal hādhihi maḥaṭṭatu Shīn Ūsākā?",
              n: "新 “new” + 大阪 Osaka — the shinkansen station, named new because it was built away from the old one.",
            },
            {
              jp: "……はい、そうです。",
              en: "……Yes, it is.",
              ar: "نَعَمْ، هِيَ كَذٰلِكَ.",
              at: "naʿam, hiya kadhālik",
            },
            {
              i: 2,
              jp: "トイレは　どこですか。",
              en: "Where is the toilet?",
              ar: "أَيْنَ دَوْرَةُ الْمِيَاهِ؟",
              at: "ayna dawratu l-miyāh?",
            },
            {
              jp: "……あそこです。",
              en: "……Over there.",
              ar: "هُنَالِكَ.",
              at: "hunālika",
            },
            {
              i: 3,
              jp: "山田《やまだ》さんは　どこですか。",
              en: "Where is Mr Yamada?",
              ar: "أَيْنَ السَّيِّدُ يَامَادَا؟",
              at: "ayna s-sayyidu Yāmādā?",
            },
            {
              jp: "……会議室《かいぎしつ》です。",
              en: "……He is in the conference room.",
              ar: "هُوَ فِي قَاعَةِ الِاجْتِمَاعَاتِ.",
              at: "huwa fī qāʿati l-ijtimāʿāt",
              n: "Japanese answers a where-question about a PERSON with the place alone — 会議室です, literally “he is conference room”.",
            },
            {
              i: 4,
              jp: "事務所《じむしょ》は　どちらですか。",
              en: "Which way is the office?",
              ar: "فِي أَيِّ جِهَةٍ الْمَكْتَبُ الْإِدَارِيُّ؟",
              at: "fī ayyi jihatin al-maktabu l-idārī?",
              n: "どちら is the polite どこ. Lesson 13 drew both rows of this grid.",
            },
            {
              jp: "……あちらです。",
              en: "……Over that way.",
              ar: "مِنْ هُنَالِكَ.",
              at: "min hunālika",
            },
            {
              i: 5,
              jp: "［お］国《くに》は　どちらですか。",
              en: "Which country are you from?",
              ar: "مِنْ أَيِّ بَلَدٍ أَنْتَ؟",
              at: "min ayyi baladin anta?",
              n: "The お is the politeness prefix, bracketed because it is optional — it goes on the listener's country, never on your own.",
            },
            {
              jp: "……アメリカです。",
              en: "……America.",
              ar: "أَمْرِيكَا.",
              at: "Amrīkā",
            },
            {
              i: 6,
              jp: "それは　どこの　靴《くつ》ですか。",
              en: "Where are those shoes from?",
              ar: "مِنْ أَيْنَ ذٰلِكَ الْحِذَاءُ؟",
              at: "min ayna dhālika l-ḥidhāʾ?",
              n: "どこの — “of where”. The same の as わたしの, but the owner slot is holding a country.",
            },
            {
              jp: "……イタリアの　靴《くつ》です。",
              en: "……They are Italian shoes.",
              ar: "حِذَاءٌ إِيطَالِيٌّ.",
              at: "ḥidhāʾun Īṭālī",
              n: "Arabic makes it an adjective — إِيطَالِيّ, the nisba. Japanese leaves the country a noun and links it with の.",
            },
            {
              i: 7,
              jp: "この　時計《とけい》は　いくらですか。",
              en: "How much is this watch?",
              ar: "بِكَمْ هٰذِهِ السَّاعَةُ؟",
              at: "bi-kam hādhihi s-sāʿa?",
            },
            {
              jp: "……18,600円《えん》です。",
              say: "いちまんはっせんろっぴゃくえんです。",
              en: "……18,600 yen.",
              ar: "بِثَمَانِيَةَ عَشَرَ أَلْفًا وَسِتِّمِائَةِ يِنٍّ.",
              at: "bi-thamāniyata ʿashara alfan wa-sittimiʾati yinn",
              n: "Read the Japanese in FOURS: 1万 8千 6百 → いちまんはっせんろっぴゃくえん. はっせん and ろっぴゃく are lesson 13's sound changes. Arabic groups in threes and says eighteen thousand.",
            },
          ],
        },
        {
          id: "kaiwa3",
          jp: "会話",
          title: "Conversation",
          heading: "これを　ください",
          headingEn: "I'll take this one",
          lines: [
            {
              sp: "店員《てんいん》A",
              jp: "いらっしゃいませ。",
              en: "Welcome.",
              ar: "أَهْلًا وَسَهْلًا.",
              at: "ahlan wa-sahlan",
              n: "Said to you, never by you. 店員 is the first shop-assistant word in the course — بَائِع in Arabic.",
            },
            {
              sp: "マリア",
              jp: "すみません。　ワイン売《う》り場《ば》は　どこですか。",
              en: "Excuse me. Where is the wine counter?",
              ar: "لَوْ سَمَحْتَ. أَيْنَ قِسْمُ النَّبِيذِ؟",
              at: "law samaḥt. ayna qismu n-nabīdh?",
            },
            {
              sp: "店員《てんいん》A",
              jp: "地下《ちか》1階《かい》です。",
              say: "ちかいっかいです。",
              en: "It is on basement floor 1.",
              ar: "فِي الطَّابِقِ الْأَوَّلِ تَحْتَ الْأَرْضِ.",
              at: "fī ṭ-ṭābiqi l-awwali taḥta l-arḍ",
              n: "The book prints ちか over 地下 and かい over 階, but the whole thing is ちかいっかい — いち + かい collide into いっかい. The furigana annotates characters, not the spoken word.",
            },
            {
              sp: "マリア",
              jp: "どうも。",
              en: "Thanks.",
              ar: "شُكْرًا.",
              at: "shukran",
            },
            { sep: true },
            {
              sp: "マリア",
              jp: "すみません。　その　ワインを　見《み》せて　ください。",
              en: "Excuse me. Please show me that wine.",
              ar: "لَوْ سَمَحْتَ. أَرِنِي ذَاكَ النَّبِيذَ، مِنْ فَضْلِكَ.",
              at: "law samaḥt. arinī dhāka n-nabīdha, min faḍlik",
              n: "を marks what the showing is done to. Taught in lesson 13 as part of the phrase, not as a pattern to build with.",
            },
            {
              sp: "店員《てんいん》B",
              jp: "はい、どうぞ。",
              en: "Certainly, here you are.",
              ar: "نَعَمْ، تَفَضَّلِي.",
              at: "naʿam, tafaḍḍalī",
              n: "Arabic has to choose a gender for “here you are”; he is speaking to Maria, so تَفَضَّلِي. Japanese どうぞ never chooses.",
            },
            {
              sp: "マリア",
              jp: "これは　どこの　ワインですか。",
              en: "Where is this wine from?",
              ar: "مِنْ أَيْنَ هٰذَا النَّبِيذُ؟",
              at: "min ayna hādhā n-nabīdh?",
            },
            {
              sp: "店員《てんいん》B",
              jp: "日本《にほん》のです。",
              en: "It is Japanese.",
              ar: "هٰذَا نَبِيذٌ يَابَانِيٌّ.",
              at: "hādhā nabīdhun yābānī",
              n: "日本の with the noun left off — the same の-standing-alone as わたしのです in lesson 2.",
            },
            {
              sp: "マリア",
              jp: "いくらですか。",
              en: "How much is it?",
              ar: "بِكَمْ؟",
              at: "bi-kam?",
            },
            {
              sp: "店員《てんいん》B",
              jp: "2,500円《えん》です。",
              say: "にせんごひゃくえんです。",
              en: "2,500 yen.",
              ar: "بِأَلْفَيْنِ وَخَمْسِمِائَةِ يِنٍّ.",
              at: "bi-alfayni wa-khamsimiʾati yinn",
              n: "にせん, with no sound change — compare さんぜん and はっせん, which have one. Arabic uses the dual أَلْفَيْنِ for exactly two thousand.",
            },
            {
              sp: "マリア",
              jp: "じゃ、これを　ください。",
              en: "I'll take this one, then.",
              ar: "إِذَنْ، أَعْطِنِي هٰذَا مِنْ فَضْلِكَ.",
              at: "idhan, aʿṭinī hādhā min faḍlik",
            },
          ],
        },
      ],
    },
  ],
};
