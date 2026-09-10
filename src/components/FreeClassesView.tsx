import React, { useState } from 'react';
import {
  BookOpen,
  Play,
  CheckCircle,
  Clock,
  User,
  Sparkles,
  ArrowLeft,
  Share2,
  Bookmark,
  ChevronRight,
  HelpCircle,
  Layers,
  Search,
  Award,
  Video,
  FileText,
  Zap,
  ExternalLink
} from 'lucide-react';
import { FreeClass, SubjectCategory, Question } from '../types';
import { FREE_CLASSES } from '../data/freeClasses';
import { allQuestionsPool } from '../data/allQuestions';

interface Props {
  language: 'en' | 'hi';
  onToggleLanguage: () => void;
  onBackToHome: () => void;
  onStartCustomDrill: (questionIds: number[], title: string) => void;
}

export const FreeClassesView: React.FC<Props> = ({
  language,
  onToggleLanguage,
  onBackToHome,
  onStartCustomDrill
}) => {
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'notes' | 'formulas' | 'questions'>('notes');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory | 'All'>('All');
  const [completedClasses, setCompletedClasses] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('triz_completed_classes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleClassCompleted = (classId: string) => {
    setCompletedClasses(prev => {
      const updated = { ...prev, [classId]: !prev[classId] };
      try {
        localStorage.setItem('triz_completed_classes', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const selectedClass = selectedClassId
    ? FREE_CLASSES.find(c => c.id === selectedClassId)
    : null;

  const filteredClasses = FREE_CLASSES.filter(c => {
    const matchesCategory = selectedCategory === 'All' || c.topic === selectedCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.titleHi && c.titleHi.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const completedCount = Object.values(completedClasses).filter(Boolean).length;

  return (
    <div id="free-classes-view" className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Top Bar */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={selectedClass ? () => setSelectedClassId(null) : onBackToHome}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{selectedClass ? 'All Classes' : 'Dashboard'}</span>
            </button>
            <div className="h-4 w-px bg-slate-800 hidden sm:block" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-emerald-400" />
                  Free Video Classes & Masterclasses
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  100% Free Access
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Concept lectures, derivations, formula cheat sheets & linked practice sets
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-slate-300">
                Progress:{' '}
                <strong className="text-white">
                  {completedCount}/{FREE_CLASSES.length} Completed
                </strong>
              </span>
            </div>

            <button
              onClick={onToggleLanguage}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition"
            >
              {language === 'en' ? 'English' : 'हिंदी'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content: Either Class Player or Classes Library */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedClass ? (
          /* --- CLASS CATALOG VIEW --- */
          <div className="space-y-8">
            {/* Banner */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 border border-emerald-900/50 p-6 sm:p-8 shadow-xl">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> Structured Concept Learning
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  CUET PG Geophysics & Physics Free Video Classes
                </h1>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Watch dedicated masterclasses prepared for science entrance examinations. Each class is paired with structured lecture notes, mathematical derivations, formula summaries, and real exam questions.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-emerald-900/50 text-xs">
                <div>
                  <span className="text-slate-400">Total Classes</span>
                  <div className="text-base font-bold text-white">{FREE_CLASSES.length} Masterclasses</div>
                </div>
                <div>
                  <span className="text-slate-400">Syllabus Covered</span>
                  <div className="text-base font-bold text-emerald-400">100% Core Units</div>
                </div>
                <div>
                  <span className="text-slate-400">Study Materials</span>
                  <div className="text-base font-bold text-white">Notes + Formula Cards</div>
                </div>
                <div>
                  <span className="text-slate-400">Practice Drills</span>
                  <div className="text-base font-bold text-amber-400">Linked Questions</div>
                </div>
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search classes by topic, keyword, or instructor..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                    selectedCategory === 'All'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  All Topics
                </button>
                {Array.from(new Set(FREE_CLASSES.map(c => c.topic))).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Classes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map(cls => {
                const isCompleted = completedClasses[cls.id];
                const relatedCount = cls.relatedQuestionIds?.length || 0;

                return (
                  <div
                    key={cls.id}
                    className="rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/60 transition flex flex-col justify-between overflow-hidden group shadow-lg"
                  >
                    {/* Top thumbnail preview */}
                    <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${cls.youtubeId}/hqdefault.jpg`}
                        alt={cls.title}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
                        onError={e => {
                          // Fallback if image fails to load
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                      <button
                        onClick={() => setSelectedClassId(cls.id)}
                        className="absolute w-12 h-12 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition"
                      >
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </button>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-slate-200 text-[11px] font-bold">
                          {cls.duration}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-indigo-900/80 text-indigo-200 border border-indigo-700 text-[10px] font-bold">
                          {cls.level}
                        </span>
                      </div>

                      {isCompleted && (
                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-emerald-900/90 text-emerald-200 border border-emerald-600 text-[11px] font-bold flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Done
                        </div>
                      )}
                    </div>

                    {/* Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                          {cls.topic}
                        </div>
                        <h3 className="font-bold text-base text-white group-hover:text-indigo-300 transition leading-snug">
                          {language === 'hi' && cls.titleHi ? cls.titleHi : cls.title}
                        </h3>
                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                          {language === 'hi' && cls.descriptionHi ? cls.descriptionHi : cls.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-slate-700/60">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5 text-slate-500" />
                            {cls.instructor}
                          </span>
                          <span className="flex items-center gap-1 text-amber-400">
                            <HelpCircle className="w-3.5 h-3.5" />
                            {relatedCount} Practice Qs
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedClassId(cls.id)}
                            className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" /> Watch Class & Notes
                          </button>
                          <button
                            onClick={() => toggleClassCompleted(cls.id)}
                            title={isCompleted ? 'Mark Incomplete' : 'Mark Completed'}
                            className={`p-2.5 rounded-xl border transition ${
                              isCompleted
                                ? 'bg-emerald-950/80 border-emerald-600 text-emerald-400'
                                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                            }`}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* --- INDIVIDUAL CLASS LECTURE ROOM VIEW --- */
          <div className="space-y-6">
            {/* Class Header Title Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-indigo-400 font-semibold uppercase">
                  <span>{selectedClass.topic}</span>
                  <span>•</span>
                  <span>{selectedClass.duration}</span>
                  <span>•</span>
                  <span>{selectedClass.level}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  {language === 'hi' && selectedClass.titleHi ? selectedClass.titleHi : selectedClass.title}
                </h2>
                <p className="text-xs text-slate-300">
                  Instructor: <span className="text-white font-semibold">{selectedClass.instructor}</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleClassCompleted(selectedClass.id)}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition ${
                    completedClasses[selectedClass.id]
                      ? 'bg-emerald-900/60 border-emerald-500 text-emerald-300'
                      : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>
                    {completedClasses[selectedClass.id] ? 'Completed' : 'Mark as Completed'}
                  </span>
                </button>

                {selectedClass.relatedQuestionIds && selectedClass.relatedQuestionIds.length > 0 && (
                  <button
                    onClick={() =>
                      onStartCustomDrill(
                        selectedClass.relatedQuestionIds!,
                        `Practice Drill: ${selectedClass.title}`
                      )
                    }
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition"
                  >
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Practice Questions ({selectedClass.relatedQuestionIds.length})</span>
                  </button>
                )}
              </div>
            </div>

            {/* Video Player Container */}
            <div className="rounded-2xl overflow-hidden border border-slate-700 bg-black aspect-video max-h-[520px] mx-auto shadow-2xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedClass.youtubeId}?autoplay=0&rel=0`}
                title={selectedClass.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Tabs Bar: Notes, Formulas, Questions */}
            <div className="border-b border-slate-800 flex items-center gap-2">
              <button
                onClick={() => setActiveTab('notes')}
                className={`flex items-center gap-2 px-5 py-3 border-b-2 font-bold text-sm transition ${
                  activeTab === 'notes'
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Lecture Notes & Theory</span>
              </button>

              <button
                onClick={() => setActiveTab('formulas')}
                className={`flex items-center gap-2 px-5 py-3 border-b-2 font-bold text-sm transition ${
                  activeTab === 'formulas'
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>Key Formulas & Cheat Sheet ({selectedClass.keyFormulas.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('questions')}
                className={`flex items-center gap-2 px-5 py-3 border-b-2 font-bold text-sm transition ${
                  activeTab === 'questions'
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>Attached Practice Questions ({selectedClass.relatedQuestionIds?.length || 0})</span>
              </button>
            </div>

            {/* Tab 1: Lecture Notes & Theory */}
            {activeTab === 'notes' && (
              <div className="space-y-6">
                {/* Key Concepts Bullet Box */}
                <div className="rounded-2xl bg-indigo-950/40 border border-indigo-800/60 p-5 space-y-3">
                  <h4 className="text-sm font-bold text-indigo-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    Key Learning Objectives & Syllabus Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {selectedClass.keyConcepts.map((kc, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-indigo-900/50">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{kc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Structured Notes */}
                <div className="space-y-4">
                  {selectedClass.lectureNotes.map((note, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-slate-800/60 border border-slate-700/80 p-6 space-y-3"
                    >
                      <h3 className="text-base font-bold text-white border-b border-slate-700 pb-2">
                        {note.heading}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line font-mono sm:font-sans">
                        {note.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Key Formulas */}
            {activeTab === 'formulas' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedClass.keyFormulas.map((f, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-slate-800/80 border border-slate-700 p-5 space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                          {f.name}
                        </span>
                        <div className="p-3.5 rounded-xl bg-slate-950 border border-indigo-900/60 text-center font-mono text-emerald-400 text-sm sm:text-base font-bold overflow-x-auto">
                          {f.formula}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 border-t border-slate-700/60 pt-3">
                        <strong className="text-slate-300">Exam Note:</strong> {f.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Attached Practice Questions */}
            {activeTab === 'questions' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Targeted Practice Questions for {selectedClass.topic}
                    </h4>
                    <p className="text-xs text-slate-400">
                      Solve these questions directly to consolidate concepts learned in this class
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      onStartCustomDrill(
                        selectedClass.relatedQuestionIds || [],
                        `Drill: ${selectedClass.title}`
                      )
                    }
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" /> Launch as Mock Drill
                  </button>
                </div>

                <div className="space-y-4">
                  {selectedClass.relatedQuestionIds?.map(qid => {
                    const q = allQuestionsPool.find(item => item.id === qid);
                    if (!q) return null;

                    return (
                      <div
                        key={q.id}
                        className="rounded-2xl bg-slate-800/70 border border-slate-700 p-5 space-y-3"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-indigo-400">
                            Question #{q.id} • {q.category}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-700 text-slate-300 font-semibold">
                            Correct: Option {q.correctOptionId}
                          </span>
                        </div>

                        <p className="text-sm font-medium text-white">
                          {language === 'hi' && q.textHi ? q.textHi : q.textEn}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {q.options.map(opt => (
                            <div
                              key={opt.id}
                              className={`p-2.5 rounded-lg border ${
                                opt.id === q.correctOptionId
                                  ? 'bg-emerald-950/60 border-emerald-600 text-emerald-300 font-semibold'
                                  : 'bg-slate-900/60 border-slate-800 text-slate-300'
                              }`}
                            >
                              <span className="font-bold mr-1.5">({opt.id})</span>
                              <span>{language === 'hi' && opt.textHi ? opt.textHi : opt.textEn}</span>
                            </div>
                          ))}
                        </div>

                        {q.explanation && (
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
                            <span className="font-bold text-emerald-400">Explanation: </span>
                            <span>{language === 'hi' && q.explanation.hi ? q.explanation.hi : q.explanation.en}</span>
                            {q.explanation.keyFormula && (
                              <div className="font-mono text-indigo-300 mt-1">
                                Formula: {q.explanation.keyFormula}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
