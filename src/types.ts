export type QuestionStatus = 
  | 'not_visited'
  | 'not_answered'
  | 'answered'
  | 'marked_for_review'
  | 'answered_and_marked';

export type SubjectCategory = 
  | 'Optics & Waves'
  | 'Electrodynamics & EM'
  | 'Thermodynamics & Stat Mech'
  | 'Mechanics & Relativity'
  | 'Modern Physics & Quantum'
  | 'Electronics & Semiconductors'
  | 'Mathematical Methods'
  | 'Solid Earth Geophysics';

export type TestMode = 
  | 'full_mock'
  | 'quick_drill'
  | 'study_mode'
  | 'category_practice'
  | 'custom_dpp';

export interface Question {
  id: number;
  questionId: string;
  category: SubjectCategory;
  examYear?: string;
  difficulty?: 'Foundational' | 'Moderate' | 'Advanced';
  textEn: string;
  textHi: string;
  listI?: { label: string; textEn: string; textHi: string }[];
  listII?: { label: string; textEn: string; textHi: string }[];
  options: {
    id: number;
    optionId: string;
    textEn: string;
    textHi?: string;
  }[];
  correctOptionId: number; // 1, 2, 3, or 4
  explanation: {
    en: string;
    hi?: string;
    keyFormula?: string;
  };
}

export interface FormulaItem {
  id: string;
  name: string;
  category: SubjectCategory;
  formula: string;
  descriptionEn: string;
  descriptionHi?: string;
  keyApplications: string[];
}

export interface FreeClass {
  id: string;
  title: string;
  titleHi?: string;
  topic: SubjectCategory;
  duration: string;
  instructor: string;
  level: 'Foundational' | 'Moderate' | 'Advanced';
  youtubeId: string; // Embeddable YouTube video ID
  description: string;
  descriptionHi?: string;
  keyConcepts: string[];
  keyFormulas: { name: string; formula: string; note: string }[];
  lectureNotes: {
    heading: string;
    content: string;
  }[];
  relatedQuestionIds?: number[];
}

export interface UserResponse {
  questionId: number;
  selectedOptionId?: number; // 1, 2, 3, 4
  status: QuestionStatus;
  isCorrect?: boolean;
  timeSpentSeconds?: number;
  isBookmarked?: boolean;
}

export interface TestMetadata {
  paperName: string;
  subjectName: string;
  year: string;
  shift: string;
  durationMinutes: number;
  totalQuestions: number;
  totalMarks: number;
  marksPerCorrect: number;
  negativeMarksPerWrong: number;
}

export interface TestResult {
  testId: string;
  date: string;
  totalQuestions: number;
  attempted: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unattempted: number;
  totalScore: number;
  maxMarks: number;
  accuracy: number;
  timeSpentSeconds: number;
  userResponses: Record<number, UserResponse>;
}

