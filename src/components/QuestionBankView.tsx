import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  Search,
  Filter,
  Bookmark,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  ArrowLeft,
  RotateCcw,
  BookOpen,
  Zap,
  Play,
  Share2,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Question, SubjectCategory } from '../types';
import { allQuestionsPool, CATEGORIES } from '../data/allQuestions';
import confetti from 'canvas-confetti';

interface Props {
  language: 'en' | 'hi';
  onToggleLanguage: () => void;
  onBackToHome: () => void;
  onStartCustomTest: (questions: Question[], title: string) => void;
}

export const QuestionBankView: React.FC<Props> = ({
  language,
  onToggleLanguage,
  onBackToHome,
  onStartCustomTest
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory | 'All'>('All');
  const [selectedYear, setSelectedYear] = useState<string | 'All'>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | 'All'>('All');
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);

  // User interactive practice state for instant solve
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem('triz_bookmarked_questions');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleBookmark = (qId: number) => {
    setBookmarkedIds(prev => {
      const updated = { ...prev, [qId]: !prev[qId] };
      try {
        localStorage.setItem('triz_bookmarked_questions', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleSelectAnswer = (qId: number, optionId: number, correctOptionId: number) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optionId }));
    setRevealedSolutions(prev => ({ ...prev, [qId]: true }));

    if (optionId === correctOptionId) {
      try {
        confetti({
          particleCount: 25,
          spread: 50,
          origin: { y: 0.8 }
        });
      } catch {
        // ignore
      }
    }
  };

  const toggleSolution = (qId: number) => {
    setRevealedSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    return allQuestionsPool.filter(q => {
      const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
      const matchesYear = selectedYear === 'All' || q.examYear === selectedYear;
      const matchesDiff = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
      const matchesBookmark = !onlyBookmarked || bookmarkedIds[q.id];

      const query = searchQuery.toLowerCase();
      const matchesSearch =
        q.textEn.toLowerCase().includes(query) ||
        q.textHi.toLowerCase().includes(query) ||
        q.options.some(o => o.textEn.toLowerCase().includes(query) || (o.textHi && o.textHi.toLowerCase().includes(query))) ||
        (q.explanation.en && q.explanation.en.toLowerCase().includes(query));

      return matchesCategory && matchesYear && matchesDiff && matchesBookmark && matchesSearch;
    });
  }, [selectedCategory, selectedYear, selectedDifficulty, onlyBookmarked, searchQuery, bookmarkedIds]);

  const solvedCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(([qId, ans]) => {
    const q = allQuestionsPool.find(item => item.id === Number(qId));
    return q && q.correctOptionId === ans;
  }).length;

  return (
    <div id="question-bank-view" className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
            <div className="h-4 w-px bg-slate-800 hidden sm:block" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  Mega Question Bank & DPPs
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                  {allQuestionsPool.length}+ Questions
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Previous Years 2024, 2023, 2022 & Topic Practice Problems with step-by-step solutions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onStartCustomTest(filteredQuestions, `Practice Drill (${filteredQuestions.length} Questions)`)}
              disabled={filteredQuestions.length === 0}
              className="px-3 sm:px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch as CBT Test ({filteredQuestions.length})</span>
            </button>

            <button
              onClick={onToggleLanguage}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition"
            >
              {language === 'en' ? 'English' : 'हिंदी'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Practice Stats Header */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 text-xs">
          <div>
            <span className="text-slate-400">Total in Repository</span>
            <div className="text-base font-bold text-white">{allQuestionsPool.length} Questions</div>
          </div>
          <div>
            <span className="text-slate-400">Filtered Matches</span>
            <div className="text-base font-bold text-indigo-400">{filteredQuestions.length} Available</div>
          </div>
          <div>
            <span className="text-slate-400">Solved in This Session</span>
            <div className="text-base font-bold text-emerald-400">{solvedCount} Solved</div>
          </div>
          <div>
            <span className="text-slate-400">Accuracy</span>
            <div className="text-base font-bold text-amber-400">
              {solvedCount > 0 ? `${Math.round((correctCount / solvedCount) * 100)}%` : '—'}
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="space-y-3 bg-slate-800/40 p-4 rounded-2xl border border-slate-800">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by keywords (e.g., Poynting, Brewster, Seismic, Carnot, Op-Amp, Curl)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          {/* Filter Dropdowns & Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
            {/* Subject Category Select */}
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value as any)}
              className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold focus:outline-none focus:border-indigo-500"
            >
              <option value="All">All Subject Domains ({allQuestionsPool.length})</option>
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>
                  {cat} ({allQuestionsPool.filter(q => q.category === cat).length})
                </option>
              ))}
            </select>

            {/* Exam Year Select */}
            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold focus:outline-none focus:border-indigo-500"
            >
              <option value="All">All Years & Sources</option>
              <option value="2024">2024 Official Paper (75 Qs)</option>
              <option value="2023">2023 Previous Year Paper</option>
              <option value="2022">2022 Previous Year Paper</option>
              <option value="DPP Practice">DPP Practice Sets</option>
            </select>

            {/* Difficulty Select */}
            <select
              value={selectedDifficulty}
              onChange={e => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold focus:outline-none focus:border-indigo-500"
            >
              <option value="All">All Difficulties</option>
              <option value="Foundational">Foundational</option>
              <option value="Moderate">Moderate</option>
              <option value="Advanced">Advanced</option>
            </select>

            {/* Bookmarked toggle */}
            <button
              onClick={() => setOnlyBookmarked(!onlyBookmarked)}
              className={`px-3 py-2 rounded-xl border flex items-center gap-1.5 font-semibold transition ${
                onlyBookmarked
                  ? 'bg-amber-950/80 border-amber-600 text-amber-300'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarked ? 'fill-current' : ''}`} />
              <span>Bookmarked ({Object.values(bookmarkedIds).filter(Boolean).length})</span>
            </button>

            {/* Reset Filters */}
            {(selectedCategory !== 'All' || selectedYear !== 'All' || selectedDifficulty !== 'All' || onlyBookmarked || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedYear('All');
                  setSelectedDifficulty('All');
                  setOnlyBookmarked(false);
                  setSearchQuery('');
                }}
                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center gap-1 text-xs transition ml-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            )}
          </div>
        </div>

        {/* Question Cards List */}
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-16 bg-slate-800/40 rounded-2xl border border-slate-800 space-y-3">
            <HelpCircle className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-slate-300">No Questions Match Your Filter</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search query or reset the subject category filter.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => {
              const selectedAns = userAnswers[q.id];
              const isRevealed = revealedSolutions[q.id];
              const isBookmarked = bookmarkedIds[q.id];
              const isAnswered = selectedAns !== undefined;
              const isCorrect = isAnswered && selectedAns === q.correctOptionId;

              return (
                <div
                  key={q.id}
                  className="rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 p-5 sm:p-6 transition space-y-4 shadow-md"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-700/60 pb-3 text-xs">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-extrabold text-indigo-400 text-sm">
                        Q.{idx + 1} (ID #{q.id})
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-700/80 text-slate-200 font-semibold">
                        {q.category}
                      </span>
                      {q.examYear && (
                        <span className="px-2 py-0.5 rounded-md bg-indigo-900/60 text-indigo-300 border border-indigo-700 font-bold">
                          {q.examYear}
                        </span>
                      )}
                      {q.difficulty && (
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                            q.difficulty === 'Advanced'
                              ? 'bg-rose-950 text-rose-300 border border-rose-800'
                              : q.difficulty === 'Moderate'
                              ? 'bg-amber-950 text-amber-300 border border-amber-800'
                              : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          }`}
                        >
                          {q.difficulty}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleBookmark(q.id)}
                        className={`p-1.5 rounded-lg border transition ${
                          isBookmarked
                            ? 'bg-amber-950 border-amber-600 text-amber-400'
                            : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                        }`}
                        title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Question Statement */}
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base font-medium text-white leading-relaxed">
                      {language === 'hi' && q.textHi ? q.textHi : q.textEn}
                    </p>

                    {/* Optional Match-the-following Lists */}
                    {q.listI && q.listII && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-700/60 text-xs">
                        <div className="space-y-1.5">
                          <strong className="text-indigo-400 block pb-1 border-b border-slate-800">
                            {language === 'hi' ? 'सूची I' : 'List I'}
                          </strong>
                          {q.listI.map(item => (
                            <div key={item.label} className="flex gap-2">
                              <span className="font-bold text-slate-300">({item.label})</span>
                              <span className="text-slate-300">
                                {language === 'hi' && item.textHi ? item.textHi : item.textEn}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-1.5">
                          <strong className="text-emerald-400 block pb-1 border-b border-slate-800">
                            {language === 'hi' ? 'सूची II' : 'List II'}
                          </strong>
                          {q.listII.map(item => (
                            <div key={item.label} className="flex gap-2">
                              <span className="font-bold text-slate-300">({item.label})</span>
                              <span className="text-slate-300">
                                {language === 'hi' && item.textHi ? item.textHi : item.textEn}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Interactive Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map(opt => {
                      const isOptionSelected = selectedAns === opt.id;
                      const isOptionCorrect = opt.id === q.correctOptionId;

                      let btnStyle = 'bg-slate-900/80 hover:bg-slate-900 border-slate-700 text-slate-200';

                      if (isRevealed) {
                        if (isOptionCorrect) {
                          btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold shadow-md shadow-emerald-950';
                        } else if (isOptionSelected && !isOptionCorrect) {
                          btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                        }
                      } else if (isOptionSelected) {
                        btnStyle = 'bg-indigo-900/80 border-indigo-500 text-white font-bold';
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectAnswer(q.id, opt.id, q.correctOptionId)}
                          className={`p-3 rounded-xl border text-left text-xs transition flex items-start justify-between gap-2 ${btnStyle}`}
                        >
                          <div className="flex items-start gap-2">
                            <span className="font-mono font-bold w-5 h-5 rounded bg-slate-800 text-slate-300 flex items-center justify-center flex-shrink-0 text-[11px]">
                              {opt.id}
                            </span>
                            <span>{language === 'hi' && opt.textHi ? opt.textHi : opt.textEn}</span>
                          </div>

                          {isRevealed && isOptionCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          )}
                          {isRevealed && isOptionSelected && !isOptionCorrect && (
                            <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Bottom Action / Explanation Toggle */}
                  <div className="pt-2 flex items-center justify-between text-xs">
                    <button
                      onClick={() => toggleSolution(q.id)}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition"
                    >
                      {isRevealed ? (
                        <>
                          <ChevronUp className="w-4 h-4" /> Hide Detailed Solution
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" /> Reveal Answer Key & Explanation
                        </>
                      )}
                    </button>

                    {isAnswered && (
                      <span className={`font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {isCorrect ? '✓ Correct (+4 Marks)' : '✗ Incorrect (-1 Penalty)'}
                      </span>
                    )}
                  </div>

                  {/* Expandable Explanation Box */}
                  {isRevealed && (
                    <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-2.5 text-xs text-slate-300 animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-emerald-400">Official Answer Key:</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700 font-bold">
                          Option {q.correctOptionId}
                        </span>
                      </div>

                      <p className="leading-relaxed">
                        {language === 'hi' && q.explanation.hi ? q.explanation.hi : q.explanation.en}
                      </p>

                      {q.explanation.keyFormula && (
                        <div className="mt-2 p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-900 font-mono text-emerald-300 text-xs">
                          <strong className="text-indigo-300">Key Formula: </strong>
                          {q.explanation.keyFormula}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};
