export interface Question {
  id: number;
  type: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  topic: string;
}

type QuestionPool = Omit<Question, "id">[];

// ─── Mathematics ────────────────────────────────────────────────
const mathematicsQuestions: QuestionPool = [
  {
    type: "Multiple Choice",
    question: "Solve for x: 2x + 5 = 17",
    options: ["4", "5", "6", "7"],
    correctAnswer: "6",
    topic: "Algebra",
  },
  {
    type: "Multiple Choice",
    question: "What is the area of a triangle with base 10 cm and height 6 cm?",
    options: ["30 cm²", "60 cm²", "16 cm²", "20 cm²"],
    correctAnswer: "30 cm²",
    topic: "Geometry",
  },
  {
    type: "True or False",
    question: "The sum of the interior angles of a triangle is always 180°.",
    options: ["True", "False"],
    correctAnswer: "True",
    topic: "Geometry",
  },
  {
    type: "Identification",
    question: "What is the term for a polynomial with exactly three terms?",
    correctAnswer: "Trinomial",
    topic: "Algebra",
  },
  {
    type: "Multiple Choice",
    question: "What is the slope of the line y = 3x − 7?",
    options: ["3", "-7", "7", "-3"],
    correctAnswer: "3",
    topic: "Algebra",
  },
];

// ─── Science ────────────────────────────────────────────────────
const scienceQuestions: QuestionPool = [
  {
    type: "Multiple Choice",
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
    correctAnswer: "Mitochondria",
    topic: "Biology",
  },
  {
    type: "True or False",
    question: "The Earth's inner core is liquid.",
    options: ["True", "False"],
    correctAnswer: "False",
    topic: "Earth Science",
  },
  {
    type: "Multiple Choice",
    question: "Which type of rock is formed from cooled magma or lava?",
    options: ["Sedimentary", "Metamorphic", "Igneous", "Mineral"],
    correctAnswer: "Igneous",
    topic: "Earth Science",
  },
  {
    type: "Identification",
    question: "What gas do plants absorb from the atmosphere during photosynthesis?",
    correctAnswer: "Carbon dioxide",
    topic: "Biology",
  },
  {
    type: "Multiple Choice",
    question: "What is the chemical symbol for water?",
    options: ["HO", "H2O", "O2H", "OH2"],
    correctAnswer: "H2O",
    topic: "Chemistry",
  },
];

// ─── English ────────────────────────────────────────────────────
const englishQuestions: QuestionPool = [
  {
    type: "Multiple Choice",
    question: "Which sentence is grammatically correct?",
    options: [
      "She don't like apples.",
      "She doesn't likes apples.",
      "She doesn't like apples.",
      "She not like apples.",
    ],
    correctAnswer: "She doesn't like apples.",
    topic: "Grammar",
  },
  {
    type: "True or False",
    question: 'A "simile" compares two things using "like" or "as."',
    options: ["True", "False"],
    correctAnswer: "True",
    topic: "Reading Comprehension",
  },
  {
    type: "Identification",
    question: "What figure of speech gives human qualities to non-human things? (e.g., 'The wind whispered through the trees.')",
    correctAnswer: "Personification",
    topic: "Reading Comprehension",
  },
  {
    type: "Multiple Choice",
    question: "Choose the correct form: 'Neither the students nor the teacher ___ absent.'",
    options: ["are", "were", "was", "been"],
    correctAnswer: "was",
    topic: "Grammar",
  },
  {
    type: "Multiple Choice",
    question: "What is the main purpose of a thesis statement in an essay?",
    options: [
      "To list all the topics in the essay",
      "To present the central argument or claim",
      "To provide background information",
      "To summarize the conclusion",
    ],
    correctAnswer: "To present the central argument or claim",
    topic: "Reading Comprehension",
  },
];

// ─── History / Araling Panlipunan ───────────────────────────────
const historyQuestions: QuestionPool = [
  {
    type: "Multiple Choice",
    question: "Who is considered the national hero of the Philippines?",
    options: ["Andres Bonifacio", "Jose Rizal", "Emilio Aguinaldo", "Apolinario Mabini"],
    correctAnswer: "Jose Rizal",
    topic: "Philippine History",
  },
  {
    type: "True or False",
    question: "The Philippines was a colony of Spain for over 300 years.",
    options: ["True", "False"],
    correctAnswer: "True",
    topic: "Philippine History",
  },
  {
    type: "Identification",
    question: "What was the secret revolutionary society founded by Andres Bonifacio in 1892?",
    correctAnswer: "Katipunan",
    topic: "Philippine History",
  },
  {
    type: "Multiple Choice",
    question: "In what year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: "1945",
    topic: "World Events",
  },
  {
    type: "Multiple Choice",
    question: "The EDSA People Power Revolution of 1986 led to the ousting of which Philippine president?",
    options: ["Diosdado Macapagal", "Ferdinand Marcos", "Corazon Aquino", "Ramon Magsaysay"],
    correctAnswer: "Ferdinand Marcos",
    topic: "Philippine History",
  },
];

// ─── Fallback (generic placeholder) ─────────────────────────────
const fallbackQuestions: QuestionPool = [
  {
    type: "Multiple Choice",
    question: "This is a sample placeholder question. What is 1 + 1?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    topic: "General",
  },
  {
    type: "True or False",
    question: "This is a placeholder question. True or False: The sky is blue.",
    options: ["True", "False"],
    correctAnswer: "True",
    topic: "General",
  },
  {
    type: "Identification",
    question: "Placeholder: Name the planet we live on.",
    correctAnswer: "Earth",
    topic: "General",
  },
];

// ─── Subject Name → Question Pool Mapping ───────────────────────

/**
 * Maps a subject name (case-insensitive) to its question pool.
 * Subjects from PracticeSetupPage use names like "Mathematics", "Physics", etc.
 * We map liberally so that "Physics" and "Science" both resolve to scienceQuestions.
 */
const subjectMap: Record<string, QuestionPool> = {
  mathematics: mathematicsQuestions,
  math: mathematicsQuestions,
  science: scienceQuestions,
  physics: scienceQuestions,
  biology: scienceQuestions,
  english: englishQuestions,
  filipino: englishQuestions, // closest available pool; can be replaced with Filipino-specific later
  history: historyQuestions,
  "araling panlipunan": historyQuestions,
  "ap": historyQuestions,
};

/**
 * Returns the question pool for a given subject name.
 * Falls back to generic placeholder questions if the subject isn't mapped.
 */
export function getQuestionsForSubject(subjectName: string): QuestionPool {
  const key = subjectName.toLowerCase().trim();
  return subjectMap[key] || fallbackQuestions;
}

export { fallbackQuestions };
