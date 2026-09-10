import { Question, TestMetadata, SubjectCategory } from '../types';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';
import { questionsPart3 } from './questionsPart3';
import { additionalQuestions } from './additionalQuestions';

export const CUET_PG_GEOPHYSICS_2024_METADATA: TestMetadata = {
  paperName: 'CUET PG Geophysics 2024 (Official Shift 3)',
  subjectName: 'CUET PG Geophysics (SCQP14)',
  year: '2024',
  shift: 'Shift 3',
  durationMinutes: 105,
  totalQuestions: 75,
  totalMarks: 300,
  marksPerCorrect: 4,
  negativeMarksPerWrong: 1
};

export const official2024Questions: Question[] = [
  ...questionsPart1.map(q => ({ ...q, examYear: '2024', difficulty: (q.id % 3 === 0 ? 'Advanced' : q.id % 2 === 0 ? 'Moderate' : 'Foundational') as 'Foundational' | 'Moderate' | 'Advanced' })),
  ...questionsPart2.map(q => ({ ...q, examYear: '2024', difficulty: (q.id % 3 === 0 ? 'Advanced' : q.id % 2 === 0 ? 'Moderate' : 'Foundational') as 'Foundational' | 'Moderate' | 'Advanced' })),
  ...questionsPart3.map(q => ({ ...q, examYear: '2024', difficulty: (q.id % 3 === 0 ? 'Advanced' : q.id % 2 === 0 ? 'Moderate' : 'Foundational') as 'Foundational' | 'Moderate' | 'Advanced' }))
];

export const allQuestionsPool: Question[] = [
  ...official2024Questions,
  ...additionalQuestions
];

export const CATEGORIES: SubjectCategory[] = [
  'Optics & Waves',
  'Electrodynamics & EM',
  'Thermodynamics & Stat Mech',
  'Mechanics & Relativity',
  'Modern Physics & Quantum',
  'Electronics & Semiconductors',
  'Mathematical Methods',
  'Solid Earth Geophysics'
];

export function getQuestionsByCategory(category: SubjectCategory): Question[] {
  return allQuestionsPool.filter(q => q.category === category);
}

export function getQuestionsByYear(year: string): Question[] {
  return allQuestionsPool.filter(q => q.examYear === year);
}

export function getQuickMockQuestions(count = 25): Question[] {
  // Balanced sample across categories from the full pool
  const perCategory = Math.ceil(count / CATEGORIES.length);
  const selected: Question[] = [];
  
  for (const cat of CATEGORIES) {
    const fromCat = getQuestionsByCategory(cat);
    selected.push(...fromCat.slice(0, perCategory));
  }
  
  return selected.slice(0, count);
}

