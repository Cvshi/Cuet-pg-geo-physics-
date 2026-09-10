import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Compass,
  Clock,
  Award,
  ChevronRight,
  Flame,
  CheckCircle2,
  BarChart2,
  Atom,
  Zap,
  Layers,
  Globe,
  Play,
  RotateCcw,
  Sparkles,
  Video,
  FileQuestion,
  HelpCircle,
  TrendingUp,
  Bookmark
} from 'lucide-react';
import {
  CUET_PG_GEOPHYSICS_2024_METADATA,
  CATEGORIES,
  official2024Questions,
  allQuestionsPool
} from '../data/allQuestions';
import { FREE_CLASSES } from '../data/freeClasses';
import { TestMode, SubjectCategory, TestResult } from '../types';
import { SyllabusModal } from './SyllabusModal';

interface Props {
  onStartTest: (mode: TestMode, selectedCategory?: SubjectCategory) => void;
  language: 'en' | 'hi';
  onToggleLanguage: () => void;
  onNavigateToClasses: () => void;
  onNavigateToQuestionBank: () => void;
  onNavigateToFormulas: () => void;
}

export const HomeDashboard: React.FC<Props> = ({
  onStartTest,
  language,
  onToggleLanguage,
  onNavigateToClasses,
  onNavigateToQuestionBank,
  onNavigateToFormulas
}) => {
  const [history, setHistory] = useState<TestResult[]>([]);
  const [completedClassesCount, setCompletedClassesCount] = useState<number>(0);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cuet_geophysics_history');
      if (saved) {
        setHistory(JSON.parse(saved));
      }

      const completed = localStorage.getItem('triz_completed_classes');
      if (completed) {
        const parsed = JSON.parse(completed);
        setCompletedClassesCount(Object.values(parsed).filter(Boolean).length);
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <div id="home-dashboard" className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Top Navbar */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white">
                  Triz Science Portal
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-indigo-900/80 text-indigo-300 border border-indigo-700">
                  CUET PG Geophysics SCQP14
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Free Classes • 100+ Questions Bank • Previous Year Papers & CBT Mocks
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsSyllabusOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/70 hover:bg-indigo-900 border border-indigo-800/80 text-xs font-semibold text-indigo-300 transition"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Syllabus (SCQP14)</span>
            </button>

            <button
              onClick={onNavigateToClasses}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-800/80 text-xs font-semibold text-emerald-300 transition"
            >
              <Video className="w-3.5 h-3.5 text-emerald-400" />
              <span>Free Classes</span>
            </button>

            <button
              onClick={onNavigateToQuestionBank}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/70 hover:bg-indigo-900 border border-indigo-800/80 text-xs font-semibold text-indigo-300 transition"
            >
              <FileQuestion className="w-3.5 h-3.5 text-indigo-400" />
              <span>Question Bank ({allQuestionsPool.length})</span>
            </button>

            <button
              onClick={onNavigateToFormulas}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-950/70 hover:bg-amber-900 border border-amber-800/80 text-xs font-semibold text-amber-300 transition"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Formula Handbook</span>
            </button>

            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>{language === 'en' ? 'English' : 'हिंदी'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-900/50 p-8 sm:p-10 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 text-amber-400" /> Complete Exam Preparation & Learning Hub
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Learn Concepts With Free Classes & Master 100+ Exam Questions
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Triz Learning inspired masterclass series covering Electrodynamics, Seismology & Solid Earth Geophysics, Quantum Mechanics, Thermodynamics, Optics, and Electronics. Practice authentic previous year question papers (2024, 2023, 2022) with official CBT simulation.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="btn-nav-free-classes"
                onClick={onNavigateToClasses}
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Video className="w-4 h-4 fill-current" /> Free Video Classes & Notes ({FREE_CLASSES.length})
              </button>

              <button
                id="btn-nav-question-bank"
                onClick={onNavigateToQuestionBank}
                className="px-5 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileQuestion className="w-4 h-4" /> Mega Question Bank ({allQuestionsPool.length}+ Qs)
              </button>

              <button
                id="btn-start-full-mock"
                onClick={() => onStartTest('full_mock')}
                className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 flex items-center gap-2 transition"
              >
                <Play className="w-4 h-4 text-indigo-400 fill-current" /> Official 2024 Mock (75 Qs)
              </button>

              <button
                id="btn-open-syllabus"
                onClick={() => setIsSyllabusOpen(true)}
                className="px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-indigo-700/60 flex items-center gap-2 transition"
              >
                <BookOpen className="w-4 h-4 text-indigo-400" /> Syllabus (SCQP14)
              </button>
            </div>
          </div>

          {/* Repository Stats Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-indigo-900/60 text-xs">
            <div>
              <span className="block text-slate-400">Total Questions Bank</span>
              <span className="font-bold text-white text-base">{allQuestionsPool.length}+ Questions</span>
            </div>
            <div>
              <span className="block text-slate-400">Free Video Masterclasses</span>
              <span className="font-bold text-emerald-400 text-base">
                {FREE_CLASSES.length} Classes ({completedClassesCount} Completed)
              </span>
            </div>
            <div>
              <span className="block text-slate-400">Official Exam Papers</span>
              <span className="font-bold text-amber-400 text-base">2024, 2023, 2022 & DPP</span>
            </div>
            <div>
              <span className="block text-slate-400">Formula Sheets</span>
              <span className="font-bold text-white text-base">8 High-Yield Units</span>
            </div>
          </div>
        </div>

        {/* --- SECTION 1: FREE CLASSES CAROUSEL (TRIZ LEARNING FEATURE) --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-emerald-400" />
                Featured Free Classes for Topics & Concepts
              </h2>
              <p className="text-xs text-slate-400">
                In-depth video lectures with structured notes, derivations, and linked test questions
              </p>
            </div>

            <button
              onClick={onNavigateToClasses}
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition"
            >
              View All {FREE_CLASSES.length} Classes <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FREE_CLASSES.slice(0, 4).map(cls => (
              <div
                key={cls.id}
                onClick={onNavigateToClasses}
                className="rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/60 p-4 flex flex-col justify-between transition group cursor-pointer shadow-lg space-y-3"
              >
                <div className="relative aspect-video rounded-xl bg-slate-950 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${cls.youtubeId}/hqdefault.jpg`}
                    alt={cls.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
                    onError={e => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-bold text-slate-200">
                    {cls.duration}
                  </div>
                </div>

                <div className="space-y-1.5 flex-1">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                    {cls.topic}
                  </span>
                  <h3 className="font-bold text-sm text-white group-hover:text-emerald-300 transition line-clamp-2 leading-snug">
                    {language === 'hi' && cls.titleHi ? cls.titleHi : cls.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {cls.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-emerald-400 border-t border-slate-700/60 pt-2.5">
                  <span className="text-slate-400 text-[11px]">{cls.instructor}</span>
                  <span className="flex items-center gap-0.5 group-hover:translate-x-1 transition">
                    Watch Class <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: TEST MODES & CBT SIMULATOR --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              NTA CBT Exam Simulation & Practice Modes
            </h2>
            <button
              onClick={onNavigateToQuestionBank}
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition"
            >
              Browse All Questions <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Full Official Mock */}
            <div
              onClick={() => onStartTest('full_mock')}
              className="rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/60 p-6 flex flex-col justify-between transition group cursor-pointer shadow-lg"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-white group-hover:text-indigo-300 transition">
                  Official 2024 Full Mock Test
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Real 2024 exam conditions: 75 questions, 105-minute countdown, strict negative marking (+4 / -1), scientific calculator, and complete NTA question palette.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-semibold text-indigo-400 border-t border-slate-700/60 pt-4">
                <span>75 Questions • 105 Min</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition">
                  Launch CBT <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Card 2: Rapid Speed Drill */}
            <div
              onClick={() => onStartTest('quick_drill')}
              className="rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/60 p-6 flex flex-col justify-between transition group cursor-pointer shadow-lg"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-white group-hover:text-amber-300 transition">
                  Rapid Speed Drill (25 Qs)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-yield sprint: 25 balanced questions randomly selected across all syllabus units. Ideal for testing speed and accuracy in 35 minutes.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-semibold text-amber-400 border-t border-slate-700/60 pt-4">
                <span>25 Questions • 35 Min</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition">
                  Launch Drill <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Card 3: Untimed Study Mode */}
            <div
              onClick={() => onStartTest('study_mode')}
              className="rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/60 p-6 flex flex-col justify-between transition group cursor-pointer shadow-lg"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-white group-hover:text-emerald-300 transition">
                  Self-Paced Study Mode
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  No timer pressure. Immediate reveal of official answer keys, mathematical derivations, and bilingual explanations as you attempt each question.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-semibold text-emerald-400 border-t border-slate-700/60 pt-4">
                <span>Untimed • Solutions On</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition">
                  Start Study <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: TOPIC-WISE DRILL GRID --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Atom className="w-5 h-5 text-indigo-400" />
              Topic-Wise Question Sets & Subject Units
            </h2>
            <span className="text-xs text-slate-400">Click any topic to practice targeted questions</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {CATEGORIES.map(category => {
              const count = allQuestionsPool.filter(q => q.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => onStartTest('category_practice', category)}
                  className="p-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500 text-left transition flex items-center justify-between group"
                >
                  <div>
                    <h4 className="font-semibold text-sm text-slate-200 group-hover:text-indigo-300 transition">
                      {category}
                    </h4>
                    <span className="text-xs text-slate-400">
                      {count} Questions Available
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-slate-700/60 group-hover:bg-indigo-600 text-slate-300 group-hover:text-white flex items-center justify-center transition">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Previous Attempts History */}
        {history.length > 0 && (
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-emerald-400" />
              Your Previous Mock Test Attempts
            </h2>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden divide-y divide-slate-800">
              {history.slice(0, 5).map((attempt, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between gap-4 text-xs">
                  <div>
                    <div className="font-semibold text-slate-200">
                      Score: <span className="text-emerald-400 font-bold text-sm">{attempt.totalScore}</span> / {attempt.maxMarks}
                    </div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      {new Date(attempt.date).toLocaleString()} • Accuracy: {attempt.accuracy}% • Correct: {attempt.correctAnswers} • Wrong: {attempt.incorrectAnswers}
                    </div>
                  </div>

                  <button
                    onClick={() => onStartTest('full_mock')}
                    className="px-3 py-1.5 rounded-lg bg-indigo-900/60 text-indigo-300 hover:bg-indigo-900 font-semibold text-xs border border-indigo-700 transition"
                  >
                    Retake Mock
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500 space-y-1">
        <p>
          Triz Science & Geophysics Learning Portal • CUET PG SCQP14 Prep • IIT JAM & MSc Entrance Resources
        </p>
        <p className="text-slate-600">
          Includes 100+ Authentic Questions, Free Video Masterclasses, Lecture Notes & Formula Handbooks
        </p>
      </footer>

      {/* Official Syllabus Modal */}
      <SyllabusModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        language={language}
        onStartCategoryPractice={(category) => {
          setIsSyllabusOpen(false);
          onStartTest('category_practice', category);
        }}
        onWatchClass={() => {
          setIsSyllabusOpen(false);
          onNavigateToClasses();
        }}
      />
    </div>
  );
};
