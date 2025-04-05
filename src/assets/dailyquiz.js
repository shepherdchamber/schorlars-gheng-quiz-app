const dailyQuizQuestion = [
  {
    id: 1,
    question: 'Which of the following is an example of compounding?',
    options: {
      A: 'Unhappy',
      B: 'Brunch',
      C: 'Blackboard',
      D: 'FBI',
    },
    answer: 'C',
    explanation:
      "Compounding combines two whole words to form a new one. 'Black' + 'board' = 'blackboard'.",
  },
  {
    id: 2,
    question: "The word 'unhappiness' is formed through which process?",
    options: {
      A: 'Blending',
      B: 'Affixation',
      C: 'Compounding',
      D: 'Clipping',
    },
    answer: 'B',
    explanation:
      "'Unhappiness' uses both a prefix ('un-') and a suffix ('-ness'), which is affixation.",
  },
  {
    id: 3,
    question: "The word 'brunch' is an example of:",
    options: {
      A: 'Clipping',
      B: 'Borrowing',
      C: 'Compounding',
      D: 'Blending',
    },
    answer: 'D',
    explanation: "'Brunch' blends 'breakfast' and 'lunch' to form a new word.",
  },
  {
    id: 4,
    question: "The term 'exam' is derived from 'examination' through:",
    options: {
      A: 'Clipping',
      B: 'Acronym',
      C: 'Blending',
      D: 'Derivation',
    },
    answer: 'A',
    explanation:
      'Clipping shortens a longer word without changing its meaning.',
  },
  {
    id: 5,
    question: "'NASA' is an example of which word formation process?",
    options: {
      A: 'Derivation',
      B: 'Acronym',
      C: 'Clipping',
      D: 'Affixation',
    },
    answer: 'B',
    explanation:
      "'NASA' stands for 'National Aeronautics and Space Administration', formed by using the initial letters.",
  },
  {
    id: 6,
    question: "The word 'ballet' used in English is an example of:",
    options: {
      A: 'Blending',
      B: 'Borrowing',
      C: 'Affixation',
      D: 'Clipping',
    },
    answer: 'B',
    explanation:
      "'Ballet' is borrowed from French and used in English without change.",
  },
  {
    id: 7,
    question: 'What is the main purpose of skimming a text?',
    options: {
      A: 'To locate specific information',
      B: 'To read deeply and understand every detail',
      C: 'To get the main idea quickly',
      D: "To evaluate the writer's argument",
    },
    answer: 'C',
    explanation:
      'Skimming is reading quickly to grasp the general idea of the text.',
  },
  {
    id: 8,
    question: 'Which of the following is a strategy of active listening?',
    options: {
      A: 'Ignoring distractions',
      B: 'Planning your response while the speaker talks',
      C: 'Avoiding eye contact',
      D: 'Multitasking during the conversation',
    },
    answer: 'A',
    explanation:
      'Active listening involves full attention, which includes ignoring distractions.',
  },
  {
    id: 9,
    question: 'What is the first step in the essay writing process?',
    options: {
      A: 'Writing the conclusion',
      B: 'Editing',
      C: 'Brainstorming and planning',
      D: 'Drafting',
    },
    answer: 'C',
    explanation:
      'Before drafting, one should brainstorm ideas and plan the essay structure.',
  },
  {
    id: 10,
    question: 'Scanning a text is best used when:',
    options: {
      A: 'Reading a novel',
      B: 'Looking for a specific date or fact',
      C: 'Analyzing a poem',
      D: 'Writing a summary',
    },
    answer: 'B',
    explanation:
      'Scanning is used to locate specific information quickly without reading the whole text.',
  },
  {
    id: 11,
    question: 'Which of the following enhances a presentation?',
    options: {
      A: 'Speaking in a monotone voice',
      B: 'Maintaining eye contact',
      C: 'Reading every word from your slides',
      D: 'Avoiding gestures',
    },
    answer: 'B',
    explanation:
      'Eye contact helps engage the audience and adds confidence to your presentation.',
  },
  {
    id: 12,
    question: 'In note-taking, the Cornell Method includes:',
    options: {
      A: 'Only writing full sentences',
      B: 'Making a mind map',
      C: 'Dividing the page into cues, notes, and summary',
      D: 'Highlighting only',
    },
    answer: 'C',
    explanation:
      'The Cornell Method organizes notes into three sections: cues, notes, and summary for efficient review.',
  },
  {
    id: 13,
    question: 'Which of the following is a collective noun?',
    options: {
      A: 'Joy',
      B: 'Team',
      C: 'John',
      D: 'Cat',
    },
    answer: 'B',
    explanation:
      "A collective noun refers to a group of people or things, like 'team' or 'family'.",
  },
  {
    id: 14,
    question:
      "Identify the action verb in the sentence: 'She writes every day.'",
    options: {
      A: 'She',
      B: 'Writes',
      C: 'Every',
      D: 'Day',
    },
    answer: 'B',
    explanation: "'Writes' shows an action, making it an action verb.",
  },
  {
    id: 15,
    question: 'Which of the following is a possessive pronoun?',
    options: {
      A: 'He',
      B: 'Me',
      C: 'Yours',
      D: 'Who',
    },
    answer: 'C',
    explanation: "'Yours' shows possession, making it a possessive pronoun.",
  },
  {
    id: 16,
    question:
      "Identify the demonstrative adjective in this sentence: 'That book is mine.'",
    options: {
      A: 'Book',
      B: 'Mine',
      C: 'Is',
      D: 'That',
    },
    answer: 'D',
    explanation:
      "'That' describes which book, so it's a demonstrative adjective.",
  },
  {
    id: 17,
    question:
      "In the sentence 'She quickly ran to school,' what type of adverb is 'quickly'?",
    options: {
      A: 'Adverb of place',
      B: 'Adverb of manner',
      C: 'Adverb of frequency',
      D: 'Adverb of time',
    },
    answer: 'B',
    explanation:
      "'Quickly' describes how the action was done, so it's an adverb of manner.",
  },
  {
    id: 18,
    question: 'Which of the following is a linking verb?',
    options: {
      A: 'Jump',
      B: 'Run',
      C: 'Is',
      D: 'Throw',
    },
    answer: 'C',
    explanation:
      "Linking verbs connect the subject to additional information. 'Is' links subject and description.",
  },
  {
    id: 19,
    question: 'Which word is an abstract noun?',
    options: {
      A: 'Table',
      B: 'Courage',
      C: 'Dog',
      D: 'London',
    },
    answer: 'B',
    explanation:
      'Abstract nouns refer to intangible ideas or qualities—like love, courage, or wisdom.',
  },
  {
    id: 20,
    question:
      "Choose the correct personal pronoun in this sentence: '___ went to the store.'",
    options: {
      A: 'Hers',
      B: 'Myself',
      C: 'She',
      D: 'Herself',
    },
    answer: 'C',
    explanation:
      "'She' is a subject personal pronoun that fits the sentence contextually.",
  },
  {
    id: 21,
    question: 'Which of the following sentences contains a helping verb?',
    options: {
      A: 'I sing every morning.',
      B: 'She will travel tomorrow.',
      C: 'He reads fast.',
      D: 'They swim often.',
    },
    answer: 'B',
    explanation:
      "'Will' is a helping (or auxiliary) verb assisting the main verb 'travel'.",
  },
  {
    id: 22,
    question: 'Which of these is a descriptive adjective?',
    options: {
      A: 'That',
      B: 'Tall',
      C: 'My',
      D: 'The',
    },
    answer: 'B',
    explanation:
      "Descriptive adjectives describe qualities like size, shape, or color—'tall' describes height.",
  },
  {
    id: 23,
    question:
      "'Always' in the sentence 'He always arrives early' is what kind of adverb?",
    options: {
      A: 'Adverb of time',
      B: 'Adverb of manner',
      C: 'Adverb of place',
      D: 'Adverb of frequency',
    },
    answer: 'D',
    explanation: "'Always' tells how often something happens.",
  },
  {
    id: 24,
    question: "In 'She spoke softly,' the word 'softly' is an adverb because:",
    options: {
      A: 'It shows time',
      B: 'It shows manner',
      C: 'It names a thing',
      D: 'It replaces a noun',
    },
    answer: 'B',
    explanation: "'Softly' tells how she spoke—so it's an adverb of manner.",
  },
  {
    id: 25,
    question: "The word 'email' is best described as:",
    options: {
      A: 'Clipping',
      B: 'Acronym',
      C: 'Blending',
      D: 'Compounding',
    },
    answer: 'C',
    explanation: "'Email' blends 'electronic' and 'mail'.",
  },
  {
    id: 26,
    question:
      'Which note-taking technique encourages organizing main ideas and details using symbols and indentation?',
    options: {
      A: 'Cornell method',
      B: 'Mind mapping',
      C: 'Outline method',
      D: 'Charting method',
    },
    answer: 'C',
    explanation:
      'The outline method uses bullets or indentation to structure information hierarchically.',
  },
  {
    id: 27,
    question: "'LOL' is an example of:",
    options: {
      A: 'Borrowing',
      B: 'Derivation',
      C: 'Acronym',
      D: 'Blending',
    },
    answer: 'C',
    explanation:
      "'LOL' stands for 'Laugh Out Loud' and is pronounced as a word, making it an acronym.",
  },
  {
    id: 28,
    question: 'What is the function of a linking verb in a sentence?',
    options: {
      A: 'Shows time of action',
      B: 'Connects the subject to additional information',
      C: 'Adds intensity',
      D: 'Replaces a noun',
    },
    answer: 'B',
    explanation:
      "Linking verbs (like 'is', 'seem', 'become') link subjects to complements.",
  },
  {
    id: 29,
    question:
      'An effective reading technique used for understanding difficult content thoroughly is:',
    options: {
      A: 'Scanning',
      B: 'Skimming',
      C: 'Intensive reading',
      D: 'Speed reading',
    },
    answer: 'C',
    explanation:
      'Intensive reading focuses on deep comprehension of complex materials.',
  },
  {
    id: 30,
    question: 'Which sentence uses a demonstrative pronoun correctly?',
    options: {
      A: 'This car is faster than that.',
      B: 'She is a this teacher.',
      C: 'That one is mine but this one is your.',
      D: 'I saw him with those of group.',
    },
    answer: 'A',
    explanation:
      "'This' and 'that' are demonstrative pronouns correctly showing contrast between two things.",
  },
];
export let dailyQuiz = [];
const ranomizedQuestions = [...dailyQuizQuestion].sort(
  () => Math.random() - 0.5
);

for (let i = 20; i > 0; i--) {
  const randomNumber = Math.floor(Math.random() * ranomizedQuestions.length);
  dailyQuiz.push(ranomizedQuestions.splice(randomNumber, 1)[0]);
}
