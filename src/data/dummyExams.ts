export interface Question {
  id?: number;
  type: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  topic: string;
}

export type QuestionPool = Question[];

// ─── Mathematics ────────────────────────────────────────────────
const mathematicsQuestions: QuestionPool = [
  {
    "type": "Multiple Choice",
    "question": "What is 60% of 10?",
    "options": [
      "12",
      "-4",
      "16",
      "6"
    ],
    "correctAnswer": "6",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the square root of 4?",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctAnswer": "2",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 19 + 13?",
    "options": [
      "30",
      "42",
      "33",
      "32"
    ],
    "correctAnswer": "32",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the square root of 121?",
    "options": [
      "22",
      "10",
      "11",
      "12"
    ],
    "correctAnswer": "11",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 60% of 50?",
    "options": [
      "30",
      "20",
      "60",
      "40"
    ],
    "correctAnswer": "30",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 80% of 20?",
    "options": [
      "6",
      "26",
      "32",
      "16"
    ],
    "correctAnswer": "16",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 70% of 50?",
    "options": [
      "35",
      "45",
      "25",
      "70"
    ],
    "correctAnswer": "35",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 80% of 80?",
    "options": [
      "128",
      "54",
      "74",
      "64"
    ],
    "correctAnswer": "64",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 40% of 70?",
    "options": [
      "56",
      "18",
      "38",
      "28"
    ],
    "correctAnswer": "28",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "Solve for x: 4x + 11 = 35",
    "options": [
      "7",
      "8",
      "6",
      "5"
    ],
    "correctAnswer": "6",
    "topic": "Algebra"
  },
  {
    "type": "Multiple Choice",
    "question": "Solve for x: 6x + 18 = 72",
    "options": [
      "8",
      "10",
      "9",
      "11"
    ],
    "correctAnswer": "9",
    "topic": "Algebra"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 8 + 13?",
    "options": [
      "31",
      "19",
      "22",
      "21"
    ],
    "correctAnswer": "21",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 19 + 21?",
    "options": [
      "41",
      "50",
      "38",
      "40"
    ],
    "correctAnswer": "40",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the area of a triangle with base 11 and height 7?",
    "options": [
      "43.5",
      "38.5",
      "77",
      "33.5"
    ],
    "correctAnswer": "38.5",
    "topic": "Geometry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 70% of 90?",
    "options": [
      "63",
      "73",
      "126",
      "53"
    ],
    "correctAnswer": "63",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the square root of 81?",
    "options": [
      "8",
      "9",
      "18",
      "10"
    ],
    "correctAnswer": "9",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the area of a triangle with base 8 and height 5?",
    "options": [
      "20",
      "25",
      "15",
      "40"
    ],
    "correctAnswer": "20",
    "topic": "Geometry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 50% of 70?",
    "options": [
      "35",
      "25",
      "45",
      "70"
    ],
    "correctAnswer": "35",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "Solve for x: 10x + 1 = 21",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctAnswer": "2",
    "topic": "Algebra"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the area of a triangle with base 14 and height 18?",
    "options": [
      "126",
      "131",
      "121",
      "252"
    ],
    "correctAnswer": "126",
    "topic": "Geometry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 80% of 80?",
    "options": [
      "64",
      "54",
      "74",
      "128"
    ],
    "correctAnswer": "64",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the area of a triangle with base 5 and height 11?",
    "options": [
      "55",
      "22.5",
      "32.5",
      "27.5"
    ],
    "correctAnswer": "27.5",
    "topic": "Geometry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the area of a triangle with base 8 and height 14?",
    "options": [
      "61",
      "51",
      "112",
      "56"
    ],
    "correctAnswer": "56",
    "topic": "Geometry"
  },
  {
    "type": "Multiple Choice",
    "question": "Solve for x: 6x + 15 = 39",
    "options": [
      "5",
      "4",
      "3",
      "6"
    ],
    "correctAnswer": "4",
    "topic": "Algebra"
  },
  {
    "type": "Multiple Choice",
    "question": "Solve for x: 5x + 8 = 23",
    "options": [
      "2",
      "4",
      "5",
      "3"
    ],
    "correctAnswer": "3",
    "topic": "Algebra"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 7 + 10?",
    "options": [
      "15",
      "17",
      "27",
      "18"
    ],
    "correctAnswer": "17",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "Solve for x: 6x + 20 = 32",
    "options": [
      "4",
      "3",
      "1",
      "2"
    ],
    "correctAnswer": "2",
    "topic": "Algebra"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 30% of 90?",
    "options": [
      "54",
      "27",
      "37",
      "17"
    ],
    "correctAnswer": "27",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 10% of 90?",
    "options": [
      "-1",
      "9",
      "19",
      "18"
    ],
    "correctAnswer": "9",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 50% of 30?",
    "options": [
      "30",
      "5",
      "25",
      "15"
    ],
    "correctAnswer": "15",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 15 + 19?",
    "options": [
      "35",
      "34",
      "32",
      "44"
    ],
    "correctAnswer": "34",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the area of a triangle with base 11 and height 12?",
    "options": [
      "66",
      "71",
      "61",
      "132"
    ],
    "correctAnswer": "66",
    "topic": "Geometry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the area of a triangle with base 17 and height 15?",
    "options": [
      "127.5",
      "132.5",
      "255",
      "122.5"
    ],
    "correctAnswer": "127.5",
    "topic": "Geometry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 21 + 21?",
    "options": [
      "52",
      "40",
      "43",
      "42"
    ],
    "correctAnswer": "42",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the square root of 49?",
    "options": [
      "6",
      "14",
      "7",
      "8"
    ],
    "correctAnswer": "7",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the square root of 144?",
    "options": [
      "24",
      "11",
      "13",
      "12"
    ],
    "correctAnswer": "12",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the area of a triangle with base 19 and height 15?",
    "options": [
      "142.5",
      "137.5",
      "147.5",
      "285"
    ],
    "correctAnswer": "142.5",
    "topic": "Geometry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the square root of 9?",
    "options": [
      "4",
      "6",
      "2",
      "3"
    ],
    "correctAnswer": "3",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "Solve for x: 2x + 4 = 16",
    "options": [
      "8",
      "6",
      "5",
      "7"
    ],
    "correctAnswer": "6",
    "topic": "Algebra"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the area of a triangle with base 19 and height 17?",
    "options": [
      "323",
      "156.5",
      "166.5",
      "161.5"
    ],
    "correctAnswer": "161.5",
    "topic": "Geometry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the area of a triangle with base 8 and height 7?",
    "options": [
      "28",
      "33",
      "23",
      "56"
    ],
    "correctAnswer": "28",
    "topic": "Geometry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 50% of 50?",
    "options": [
      "35",
      "15",
      "50",
      "25"
    ],
    "correctAnswer": "25",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 22 + 6?",
    "options": [
      "26",
      "28",
      "29",
      "38"
    ],
    "correctAnswer": "28",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the area of a triangle with base 18 and height 11?",
    "options": [
      "99",
      "104",
      "94",
      "198"
    ],
    "correctAnswer": "99",
    "topic": "Geometry"
  },
  {
    "type": "Multiple Choice",
    "question": "Solve for x: 6x + 5 = 29",
    "options": [
      "6",
      "3",
      "5",
      "4"
    ],
    "correctAnswer": "4",
    "topic": "Algebra"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the square root of 169?",
    "options": [
      "13",
      "14",
      "12",
      "26"
    ],
    "correctAnswer": "13",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 40% of 70?",
    "options": [
      "56",
      "38",
      "28",
      "18"
    ],
    "correctAnswer": "28",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 5 + 16?",
    "options": [
      "31",
      "22",
      "21",
      "19"
    ],
    "correctAnswer": "21",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 60% of 90?",
    "options": [
      "108",
      "64",
      "44",
      "54"
    ],
    "correctAnswer": "54",
    "topic": "Arithmetic"
  },
  {
    "type": "Multiple Choice",
    "question": "What is 50% of 90?",
    "options": [
      "90",
      "55",
      "45",
      "35"
    ],
    "correctAnswer": "45",
    "topic": "Arithmetic"
  }
];

// ─── Science ────────────────────────────────────────────────────
const scienceQuestions: QuestionPool = [
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Hydrogen?",
    "options": [
      "H",
      "Li",
      "Be",
      "He"
    ],
    "correctAnswer": "H",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Helium?",
    "options": [
      "B",
      "Be",
      "He",
      "Li"
    ],
    "correctAnswer": "He",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Lithium?",
    "options": [
      "B",
      "C",
      "Be",
      "Li"
    ],
    "correctAnswer": "Li",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Beryllium?",
    "options": [
      "C",
      "B",
      "N",
      "Be"
    ],
    "correctAnswer": "Be",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Boron?",
    "options": [
      "O",
      "N",
      "C",
      "B"
    ],
    "correctAnswer": "B",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Carbon?",
    "options": [
      "F",
      "O",
      "C",
      "N"
    ],
    "correctAnswer": "C",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Nitrogen?",
    "options": [
      "Ne",
      "F",
      "O",
      "N"
    ],
    "correctAnswer": "N",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Oxygen?",
    "options": [
      "O",
      "F",
      "Ne",
      "Na"
    ],
    "correctAnswer": "O",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Fluorine?",
    "options": [
      "Mg",
      "Na",
      "Ne",
      "F"
    ],
    "correctAnswer": "F",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Neon?",
    "options": [
      "Na",
      "Al",
      "Ne",
      "Mg"
    ],
    "correctAnswer": "Ne",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Sodium?",
    "options": [
      "Si",
      "Al",
      "Mg",
      "Na"
    ],
    "correctAnswer": "Na",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Magnesium?",
    "options": [
      "Si",
      "Al",
      "Mg",
      "P"
    ],
    "correctAnswer": "Mg",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Aluminum?",
    "options": [
      "S",
      "P",
      "Si",
      "Al"
    ],
    "correctAnswer": "Al",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Silicon?",
    "options": [
      "Si",
      "P",
      "S",
      "Cl"
    ],
    "correctAnswer": "Si",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Phosphorus?",
    "options": [
      "Ar",
      "Cl",
      "S",
      "P"
    ],
    "correctAnswer": "P",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Sulfur?",
    "options": [
      "S",
      "Cl",
      "Ar",
      "K"
    ],
    "correctAnswer": "S",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Chlorine?",
    "options": [
      "Ar",
      "K",
      "Ca",
      "Cl"
    ],
    "correctAnswer": "Cl",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Argon?",
    "options": [
      "Fe",
      "Ca",
      "K",
      "Ar"
    ],
    "correctAnswer": "Ar",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Potassium?",
    "options": [
      "Fe",
      "Ca",
      "Cu",
      "K"
    ],
    "correctAnswer": "K",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Calcium?",
    "options": [
      "Zn",
      "Cu",
      "Fe",
      "Ca"
    ],
    "correctAnswer": "Ca",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Iron?",
    "options": [
      "Fe",
      "Cu",
      "Zn",
      "Ag"
    ],
    "correctAnswer": "Fe",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Copper?",
    "options": [
      "Cu",
      "Ag",
      "Au",
      "Zn"
    ],
    "correctAnswer": "Cu",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Zinc?",
    "options": [
      "Ag",
      "Au",
      "H",
      "Zn"
    ],
    "correctAnswer": "Zn",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Silver?",
    "options": [
      "He",
      "Ag",
      "H",
      "Au"
    ],
    "correctAnswer": "Ag",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the chemical symbol for Gold?",
    "options": [
      "He",
      "Li",
      "H",
      "Au"
    ],
    "correctAnswer": "Au",
    "topic": "Chemistry"
  },
  {
    "type": "Multiple Choice",
    "question": "Which planet is known as the closest planet to the Sun?",
    "options": [
      "Earth",
      "Mars",
      "Mercury",
      "Venus"
    ],
    "correctAnswer": "Mercury",
    "topic": "Astronomy"
  },
  {
    "type": "Multiple Choice",
    "question": "Which planet is known as the hottest planet in our solar system?",
    "options": [
      "Mars",
      "Venus",
      "Earth",
      "Jupiter"
    ],
    "correctAnswer": "Venus",
    "topic": "Astronomy"
  },
  {
    "type": "Multiple Choice",
    "question": "Which planet is known as the only planet known to harbor life?",
    "options": [
      "Saturn",
      "Jupiter",
      "Mars",
      "Earth"
    ],
    "correctAnswer": "Earth",
    "topic": "Astronomy"
  },
  {
    "type": "Multiple Choice",
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Jupiter",
      "Uranus",
      "Saturn",
      "Mars"
    ],
    "correctAnswer": "Mars",
    "topic": "Astronomy"
  },
  {
    "type": "Multiple Choice",
    "question": "Which planet is known as the largest planet in our solar system?",
    "options": [
      "Neptune",
      "Uranus",
      "Saturn",
      "Jupiter"
    ],
    "correctAnswer": "Jupiter",
    "topic": "Astronomy"
  },
  {
    "type": "Multiple Choice",
    "question": "Which planet is known as the planet known for its prominent ring system?",
    "options": [
      "Saturn",
      "Mercury",
      "Neptune",
      "Uranus"
    ],
    "correctAnswer": "Saturn",
    "topic": "Astronomy"
  },
  {
    "type": "Multiple Choice",
    "question": "Which planet is known as the planet that rotates on its side?",
    "options": [
      "Mercury",
      "Venus",
      "Neptune",
      "Uranus"
    ],
    "correctAnswer": "Uranus",
    "topic": "Astronomy"
  },
  {
    "type": "Multiple Choice",
    "question": "Which planet is known as the farthest known planet from the Sun?",
    "options": [
      "Earth",
      "Venus",
      "Mercury",
      "Neptune"
    ],
    "correctAnswer": "Neptune",
    "topic": "Astronomy"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the powerhouse of the cell?",
    "options": [
      "Golgi Apparatus",
      "Ribosome",
      "Nucleus",
      "Mitochondria"
    ],
    "correctAnswer": "Mitochondria",
    "topic": "Biology"
  },
  {
    "type": "Multiple Choice",
    "question": "What pigment gives plants their green color?",
    "options": [
      "Chlorophyll",
      "Hemoglobin",
      "Melanin",
      "Carotene"
    ],
    "correctAnswer": "Chlorophyll",
    "topic": "Biology"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the human body's largest organ?",
    "options": [
      "Skin",
      "Brain",
      "Heart",
      "Liver"
    ],
    "correctAnswer": "Skin",
    "topic": "Biology"
  },
  {
    "type": "Multiple Choice",
    "question": "How many bones are in the adult human body?",
    "options": [
      "206",
      "205",
      "208",
      "207"
    ],
    "correctAnswer": "206",
    "topic": "Biology"
  },
  {
    "type": "Multiple Choice",
    "question": "What gas do plants absorb from the atmosphere?",
    "options": [
      "Hydrogen",
      "Nitrogen",
      "Oxygen",
      "Carbon Dioxide"
    ],
    "correctAnswer": "Carbon Dioxide",
    "topic": "Biology"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the basic unit of life?",
    "options": [
      "Cell",
      "Atom",
      "Molecule",
      "Organ"
    ],
    "correctAnswer": "Cell",
    "topic": "Biology"
  },
  {
    "type": "Multiple Choice",
    "question": "Which blood cells fight infection?",
    "options": [
      "Plasma",
      "White blood cells",
      "Red blood cells",
      "Platelets"
    ],
    "correctAnswer": "White blood cells",
    "topic": "Biology"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the main function of the respiratory system?",
    "options": [
      "Circulation",
      "Digestion",
      "Gas exchange",
      "Thinking"
    ],
    "correctAnswer": "Gas exchange",
    "topic": "Biology"
  },
  {
    "type": "Multiple Choice",
    "question": "What molecule carries genetic information?",
    "options": [
      "Protein",
      "RNA",
      "Carbohydrate",
      "DNA"
    ],
    "correctAnswer": "DNA",
    "topic": "Biology"
  },
  {
    "type": "Multiple Choice",
    "question": "What is the process by which plants make their food?",
    "options": [
      "Photosynthesis",
      "Respiration",
      "Fermentation",
      "Transpiration"
    ],
    "correctAnswer": "Photosynthesis",
    "topic": "Biology"
  },
  {
    "type": "True or False",
    "question": "True or False: The chemical symbol for Hydrogen is H.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Chemistry"
  },
  {
    "type": "True or False",
    "question": "True or False: The chemical symbol for Helium is He.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Chemistry"
  },
  {
    "type": "True or False",
    "question": "True or False: The chemical symbol for Lithium is Li.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Chemistry"
  },
  {
    "type": "True or False",
    "question": "True or False: The chemical symbol for Beryllium is Be.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Chemistry"
  },
  {
    "type": "True or False",
    "question": "True or False: The chemical symbol for Boron is B.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Chemistry"
  },
  {
    "type": "True or False",
    "question": "True or False: The chemical symbol for Carbon is C.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Chemistry"
  },
  {
    "type": "True or False",
    "question": "True or False: The chemical symbol for Nitrogen is N.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Chemistry"
  }
];

// ─── English ────────────────────────────────────────────────────
const englishQuestions: QuestionPool = [
  {
    "type": "Multiple Choice",
    "question": "Which word is a synonym for 'Happy'?",
    "options": [
      "Sad",
      "Angry",
      "Joyful",
      "Tired"
    ],
    "correctAnswer": "Joyful",
    "topic": "Vocabulary"
  },
  {
    "type": "Multiple Choice",
    "question": "Which word is a synonym for 'Fast'?",
    "options": [
      "Quick",
      "Slow",
      "Sluggish",
      "Heavy"
    ],
    "correctAnswer": "Quick",
    "topic": "Vocabulary"
  },
  {
    "type": "Multiple Choice",
    "question": "Which word is a synonym for 'Big'?",
    "options": [
      "Large",
      "Tiny",
      "Small",
      "Minute"
    ],
    "correctAnswer": "Large",
    "topic": "Vocabulary"
  },
  {
    "type": "Multiple Choice",
    "question": "Which word is a synonym for 'Smart'?",
    "options": [
      "Intelligent",
      "Dumb",
      "Foolish",
      "Silly"
    ],
    "correctAnswer": "Intelligent",
    "topic": "Vocabulary"
  },
  {
    "type": "Multiple Choice",
    "question": "Which word is a synonym for 'Cold'?",
    "options": [
      "Chilly",
      "Boiling",
      "Warm",
      "Hot"
    ],
    "correctAnswer": "Chilly",
    "topic": "Vocabulary"
  },
  {
    "type": "Multiple Choice",
    "question": "Which word is a synonym for 'Difficult'?",
    "options": [
      "Basic",
      "Easy",
      "Hard",
      "Simple"
    ],
    "correctAnswer": "Hard",
    "topic": "Vocabulary"
  },
  {
    "type": "Multiple Choice",
    "question": "Which word is a synonym for 'Begin'?",
    "options": [
      "Finish",
      "Stop",
      "End",
      "Start"
    ],
    "correctAnswer": "Start",
    "topic": "Vocabulary"
  },
  {
    "type": "Multiple Choice",
    "question": "Which word is a synonym for 'Beautiful'?",
    "options": [
      "Pretty",
      "Plain",
      "Ugly",
      "Hideous"
    ],
    "correctAnswer": "Pretty",
    "topic": "Vocabulary"
  },
  {
    "type": "Multiple Choice",
    "question": "Which word is a synonym for 'Brave'?",
    "options": [
      "Courageous",
      "Scared",
      "Cowardly",
      "Afraid"
    ],
    "correctAnswer": "Courageous",
    "topic": "Vocabulary"
  },
  {
    "type": "Multiple Choice",
    "question": "Which word is a synonym for 'Calm'?",
    "options": [
      "Peaceful",
      "Anxious",
      "Nervous",
      "Agitated"
    ],
    "correctAnswer": "Peaceful",
    "topic": "Vocabulary"
  },
  {
    "type": "Multiple Choice",
    "question": "Choose the correct spelling:",
    "options": [
      "Accommodate",
      "Accomoddate",
      "Acommodate",
      "Accomodate"
    ],
    "correctAnswer": "Accommodate",
    "topic": "Spelling"
  },
  {
    "type": "Multiple Choice",
    "question": "Choose the correct spelling:",
    "options": [
      "Emmbarrass",
      "Embarass",
      "Embarrass",
      "Embaras"
    ],
    "correctAnswer": "Embarrass",
    "topic": "Spelling"
  },
  {
    "type": "Multiple Choice",
    "question": "Choose the correct spelling:",
    "options": [
      "Fluorescent",
      "Flourescent",
      "Flourescant",
      "Fluorescant"
    ],
    "correctAnswer": "Fluorescent",
    "topic": "Spelling"
  },
  {
    "type": "Multiple Choice",
    "question": "Choose the correct spelling:",
    "options": [
      "Receive",
      "Recieve",
      "Receiv",
      "Receve"
    ],
    "correctAnswer": "Receive",
    "topic": "Spelling"
  },
  {
    "type": "Multiple Choice",
    "question": "Choose the correct spelling:",
    "options": [
      "Separate",
      "Seperate",
      "Seprate",
      "Seperrate"
    ],
    "correctAnswer": "Separate",
    "topic": "Spelling"
  },
  {
    "type": "Multiple Choice",
    "question": "Choose the correct spelling:",
    "options": [
      "Definitely",
      "Definately",
      "Definitly",
      "Defenitely"
    ],
    "correctAnswer": "Definitely",
    "topic": "Spelling"
  },
  {
    "type": "Multiple Choice",
    "question": "Choose the correct spelling:",
    "options": [
      "Acknowledge",
      "Acknowlege",
      "Aknowledge",
      "Acknowlegde"
    ],
    "correctAnswer": "Acknowledge",
    "topic": "Spelling"
  },
  {
    "type": "Multiple Choice",
    "question": "Choose the correct spelling:",
    "options": [
      "Pronounciation",
      "Pronunsiation",
      "Pronunciation",
      "Pronunciaton"
    ],
    "correctAnswer": "Pronunciation",
    "topic": "Spelling"
  },
  {
    "type": "Multiple Choice",
    "question": "Choose the correct spelling:",
    "options": [
      "Ocassion",
      "Ocasion",
      "Occassion",
      "Occasion"
    ],
    "correctAnswer": "Occasion",
    "topic": "Spelling"
  },
  {
    "type": "Multiple Choice",
    "question": "Choose the correct spelling:",
    "options": [
      "Neccessary",
      "Necesary",
      "Necessary",
      "Necessery"
    ],
    "correctAnswer": "Necessary",
    "topic": "Spelling"
  },
  {
    "type": "Multiple Choice",
    "question": "Identify the part of speech for the word 'quickly' in the sentence: \"He ran quickly to the store.\"",
    "options": [
      "Adverb",
      "Noun",
      "Verb",
      "Adjective"
    ],
    "correctAnswer": "Adverb",
    "topic": "Grammar"
  },
  {
    "type": "Multiple Choice",
    "question": "Identify the part of speech for the word 'blue' in the sentence: \"The blue sky was clear.\"",
    "options": [
      "Adverb",
      "Verb",
      "Noun",
      "Adjective"
    ],
    "correctAnswer": "Adjective",
    "topic": "Grammar"
  },
  {
    "type": "Multiple Choice",
    "question": "Identify the part of speech for the word 'jumped' in the sentence: \"The cat jumped over the fence.\"",
    "options": [
      "Adverb",
      "Adjective",
      "Noun",
      "Verb"
    ],
    "correctAnswer": "Verb",
    "topic": "Grammar"
  },
  {
    "type": "Multiple Choice",
    "question": "Identify the part of speech for the word 'apple' in the sentence: \"She ate a red apple.\"",
    "options": [
      "Noun",
      "Verb",
      "Adjective",
      "Adverb"
    ],
    "correctAnswer": "Noun",
    "topic": "Grammar"
  },
  {
    "type": "Multiple Choice",
    "question": "Identify the part of speech for the word 'they' in the sentence: \"They went to the park.\"",
    "options": [
      "Pronoun",
      "Noun",
      "Verb",
      "Adjective"
    ],
    "correctAnswer": "Pronoun",
    "topic": "Grammar"
  },
  {
    "type": "Multiple Choice",
    "question": "Identify the part of speech for the word 'under' in the sentence: \"The book is under the table.\"",
    "options": [
      "Preposition",
      "Noun",
      "Verb",
      "Adjective"
    ],
    "correctAnswer": "Preposition",
    "topic": "Grammar"
  },
  {
    "type": "Multiple Choice",
    "question": "Identify the part of speech for the word 'and' in the sentence: \"I like peanut butter and jelly.\"",
    "options": [
      "Adjective",
      "Verb",
      "Noun",
      "Conjunction"
    ],
    "correctAnswer": "Conjunction",
    "topic": "Grammar"
  },
  {
    "type": "Multiple Choice",
    "question": "Identify the part of speech for the word 'Wow' in the sentence: \"Wow, that is amazing!\"",
    "options": [
      "Interjection",
      "Noun",
      "Verb",
      "Adjective"
    ],
    "correctAnswer": "Interjection",
    "topic": "Grammar"
  },
  {
    "type": "Multiple Choice",
    "question": "Identify the part of speech for the word 'beautifully' in the sentence: \"She sang beautifully.\"",
    "options": [
      "Verb",
      "Adjective",
      "Noun",
      "Adverb"
    ],
    "correctAnswer": "Adverb",
    "topic": "Grammar"
  },
  {
    "type": "Multiple Choice",
    "question": "Identify the part of speech for the word 'mountain' in the sentence: \"The mountain was very high.\"",
    "options": [
      "Adverb",
      "Adjective",
      "Verb",
      "Noun"
    ],
    "correctAnswer": "Noun",
    "topic": "Grammar"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Happy' is 'Joyful'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Fast' is 'Quick'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Big' is 'Large'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Smart' is 'Intelligent'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Cold' is 'Chilly'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Difficult' is 'Hard'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Begin' is 'Start'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Beautiful' is 'Pretty'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Brave' is 'Courageous'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Calm' is 'Peaceful'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Happy' is 'Joyful'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Fast' is 'Quick'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Big' is 'Large'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Smart' is 'Intelligent'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Cold' is 'Chilly'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Difficult' is 'Hard'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Begin' is 'Start'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Beautiful' is 'Pretty'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Brave' is 'Courageous'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  },
  {
    "type": "True or False",
    "question": "True or False: A synonym for 'Calm' is 'Peaceful'.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Vocabulary"
  }
];

// ─── History / Araling Panlipunan ───────────────────────────────
const historyQuestions: QuestionPool = [
  {
    "type": "Multiple Choice",
    "question": "In what year did the Philippine Independence Declaration occur?",
    "options": [
      "1899",
      "1901",
      "1896",
      "1898"
    ],
    "correctAnswer": "1898",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "In what year did the Treaty of Manila (Philippine Independence from US) occur?",
    "options": [
      "1947",
      "1946",
      "1945",
      "1944"
    ],
    "correctAnswer": "1946",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "In what year did the Arrival of Ferdinand Magellan in the Philippines occur?",
    "options": [
      "1522",
      "1521",
      "1565",
      "1520"
    ],
    "correctAnswer": "1521",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "In what year did the EDSA People Power Revolution occur?",
    "options": [
      "1986",
      "1983",
      "1987",
      "1985"
    ],
    "correctAnswer": "1986",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "In what year did the Cry of Pugad Lawin occur?",
    "options": [
      "1898",
      "1897",
      "1895",
      "1896"
    ],
    "correctAnswer": "1896",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "In what year did the Fall of Bataan occur?",
    "options": [
      "1944",
      "1943",
      "1941",
      "1942"
    ],
    "correctAnswer": "1942",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "In what year did the Execution of Gomburza occur?",
    "options": [
      "1871",
      "1873",
      "1870",
      "1872"
    ],
    "correctAnswer": "1872",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "In what year did the Founding of the Katipunan occur?",
    "options": [
      "1893",
      "1891",
      "1890",
      "1892"
    ],
    "correctAnswer": "1892",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "In what year did the Start of Philippine-American War occur?",
    "options": [
      "1899",
      "1898",
      "1901",
      "1900"
    ],
    "correctAnswer": "1899",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "In what year did the Arrival of Miguel Lopez de Legazpi occur?",
    "options": [
      "1570",
      "1565",
      "1521",
      "1560"
    ],
    "correctAnswer": "1565",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "Who is known as the National Hero of the Philippines?",
    "options": [
      "Jose Rizal",
      "Andres Bonifacio",
      "Emilio Aguinaldo",
      "Apolinario Mabini"
    ],
    "correctAnswer": "Jose Rizal",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "Who is known as the Founder of the Katipunan?",
    "options": [
      "Andres Bonifacio",
      "Jose Rizal",
      "Juan Luna",
      "Emilio Jacinto"
    ],
    "correctAnswer": "Andres Bonifacio",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "Who is known as the First President of the Philippines?",
    "options": [
      "Emilio Aguinaldo",
      "Manuel L. Quezon",
      "Sergio Osmeña",
      "Jose P. Laurel"
    ],
    "correctAnswer": "Emilio Aguinaldo",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "Who is known as the Sublime Paralytic and Brains of the Revolution?",
    "options": [
      "Apolinario Mabini",
      "Emilio Jacinto",
      "Antonio Luna",
      "Gregorio del Pilar"
    ],
    "correctAnswer": "Apolinario Mabini",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "Who is known as the Brains of the Katipunan?",
    "options": [
      "Andres Bonifacio",
      "Apolinario Mabini",
      "Jose Rizal",
      "Emilio Jacinto"
    ],
    "correctAnswer": "Emilio Jacinto",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "Who is known as the Grand Woman of the Revolution (Tandang Sora)?",
    "options": [
      "Marcela Agoncillo",
      "Gregoria de Jesus",
      "Melchora Aquino",
      "Gabriela Silang"
    ],
    "correctAnswer": "Melchora Aquino",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "Who is known as the First female leader of a Filipino movement for independence?",
    "options": [
      "Teresa Magbanua",
      "Gregoria de Jesus",
      "Melchora Aquino",
      "Gabriela Silang"
    ],
    "correctAnswer": "Gabriela Silang",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "Who is known as the Regarded as one of the fiercest generals of his time?",
    "options": [
      "Antonio Luna",
      "Gregorio del Pilar",
      "Emilio Aguinaldo",
      "Artemio Ricarte"
    ],
    "correctAnswer": "Antonio Luna",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "Who is known as the Hero of the Battle of Tirad Pass?",
    "options": [
      "Gregorio del Pilar",
      "Antonio Luna",
      "Emilio Jacinto",
      "Andres Bonifacio"
    ],
    "correctAnswer": "Gregorio del Pilar",
    "topic": "Philippine History"
  },
  {
    "type": "Multiple Choice",
    "question": "Who is known as the Painter of the Spoliarium?",
    "options": [
      "Juan Luna",
      "Carlos Botong Francisco",
      "Felix Resurreccion Hidalgo",
      "Fernando Amorsolo"
    ],
    "correctAnswer": "Juan Luna",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Philippine Independence Declaration occurred in 1898.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Treaty of Manila (Philippine Independence from US) occurred in 1946.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Arrival of Ferdinand Magellan in the Philippines occurred in 1521.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The EDSA People Power Revolution occurred in 1986.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Cry of Pugad Lawin occurred in 1896.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Fall of Bataan occurred in 1942.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Execution of Gomburza occurred in 1872.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Founding of the Katipunan occurred in 1892.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Start of Philippine-American War occurred in 1899.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Arrival of Miguel Lopez de Legazpi occurred in 1565.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Philippine Independence Declaration occurred in 1898.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Treaty of Manila (Philippine Independence from US) occurred in 1946.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Arrival of Ferdinand Magellan in the Philippines occurred in 1521.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The EDSA People Power Revolution occurred in 1986.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: The Cry of Pugad Lawin occurred in 1896.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Jose Rizal is known as the National Hero of the Philippines.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Andres Bonifacio is known as the Founder of the Katipunan.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Emilio Aguinaldo is known as the First President of the Philippines.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Apolinario Mabini is known as the Sublime Paralytic and Brains of the Revolution.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Emilio Jacinto is known as the Brains of the Katipunan.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Melchora Aquino is known as the Grand Woman of the Revolution (Tandang Sora).",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Gabriela Silang is known as the First female leader of a Filipino movement for independence.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Antonio Luna is known as the Regarded as one of the fiercest generals of his time.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Gregorio del Pilar is known as the Hero of the Battle of Tirad Pass.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Juan Luna is known as the Painter of the Spoliarium.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Jose Rizal is known as the National Hero of the Philippines.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Andres Bonifacio is known as the Founder of the Katipunan.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Emilio Aguinaldo is known as the First President of the Philippines.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Apolinario Mabini is known as the Sublime Paralytic and Brains of the Revolution.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  },
  {
    "type": "True or False",
    "question": "True or False: Emilio Jacinto is known as the Brains of the Katipunan.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "True",
    "topic": "Philippine History"
  }
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
