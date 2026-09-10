import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Filter,
  BarChart3,
  Bookmark,
  Share2,
  Download,
  AlertCircle
} from 'lucide-react';
import { TestResult, Question, SubjectCategory } from '../types';

interface Props {
  result: TestResult;
  questions: Question[];
  onRetake: () => void;
  onHome: () => void;
  language: 'en' | 'hi';
}

export const ResultReport: React.FC<Props> = ({
  result,
  questions,
  onRetake,
  onHome,
  language
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'incorrect' | 'unattempted' | 'correct' | 'bookmarked'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [expandedSolutions, setExpandedSolutions] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Launch celebratory confetti if score > 0
    if (result.totalScore > 0) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [result.totalScore]);

  const toggleSolution = (qId: number) => {
    setExpandedSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  // Filter questions
  const filteredQuestions = questions.filter(q => {
    const userAns = result.userResponses[q.id];
    const isCorrect = userAns?.isCorrect;
    const isAttempted = userAns?.selectedOptionId !== undefined;
    const isBookmarked = userAns?.isBookmarked;

    if (categoryFilter !== 'all' && q.category !== categoryFilter) return false;

    if (activeFilter === 'correct') return isCorrect === true;
    if (activeFilter === 'incorrect') return isAttempted && isCorrect === false;
    if (activeFilter === 'unattempted') return !isAttempted;
    if (activeFilter === 'bookmarked') return !!isBookmarked;
    return true;
  });

  const categories = Array.from(new Set(questions.map(q => q.category)));

  // Performance category analysis
  const categoryStats = categories.map(cat => {
    const catQs = questions.filter(q => q.category === cat);
    let catCorrect = 0;
    let catAttempted = 0;
    let catScore = 0;

    catQs.forEach(q => {
      const resp = result.userResponses[q.id];
      if (resp?.selectedOptionId !== undefined) {
        catAttempted++;
        if (resp.isCorrect) {
          catCorrect++;
          catScore += 4;
        } else {
          catScore -= 1;
        }
      }
    });

    const accuracy = catAttempted > 0 ? Math.round((catCorrect / catAttempted) * 100) : 0;
    return {
      category: cat,
      total: catQs.length,
      attempted: catAttempted,
      correct: catCorrect,
      score: catScore,
      accuracy
    };
  });

  return (
    <div id="cbt-result-report" className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Header Card */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-2">
                <Trophy className="w-3.5 h-3.5 text-indigo-600" />
                CUET PG Geophysics (2024 Shift 3) • Official Performance Scorecard
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Mock Test Result
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Completed on {new Date(result.date).toLocaleDateString()} • Paper Code: SCQP14 (Geophysics)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onRetake}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 shadow-xs transition"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake Test
              </button>
              <button
                onClick={onHome}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs border border-slate-300 transition"
              >
                Home Dashboard
              </button>
            </div>
          </div>

          {/* Primary Metric Score Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
            {/* Score */}
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200">
              <div className="text-[11px] font-medium text-indigo-700 uppercase tracking-wider">
                Total Score
              </div>
              <div className="text-2xl font-bold text-indigo-950 mt-1">
                {result.totalScore}
                <span className="text-xs font-normal text-indigo-600 ml-1">/ {result.maxMarks}</span>
              </div>
              <div className="text-[10px] text-indigo-600 mt-0.5">
                {Math.round((result.totalScore / result.maxMarks) * 100)}% Marks
              </div>
            </div>

            {/* Accuracy */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <div className="text-[11px] font-medium text-emerald-700 uppercase tracking-wider">
                Accuracy
              </div>
              <div className="text-2xl font-bold text-emerald-950 mt-1">
                {result.accuracy}%
              </div>
              <div className="text-[10px] text-emerald-700 mt-0.5">
                {result.correctAnswers} of {result.attempted} attempted
              </div>
            </div>

            {/* Correct */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <div className="text-[11px] font-medium text-emerald-700 uppercase tracking-wider">
                Correct (+4)
              </div>
              <div className="text-2xl font-bold text-emerald-900 mt-1">
                {result.correctAnswers}
              </div>
              <div className="text-[10px] text-emerald-600 mt-0.5">
                +{result.correctAnswers * 4} Marks gained
              </div>
            </div>

            {/* Incorrect */}
            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
              <div className="text-[11px] font-medium text-rose-700 uppercase tracking-wider">
                Incorrect (-1)
              </div>
              <div className="text-2xl font-bold text-rose-900 mt-1">
                {result.incorrectAnswers}
              </div>
              <div className="text-[10px] text-rose-600 mt-0.5">
                -{result.incorrectAnswers} Marks lost
              </div>
            </div>

            {/* Unattempted */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] font-medium text-slate-600 uppercase tracking-wider">
                Unattempted
              </div>
              <div className="text-2xl font-bold text-slate-800 mt-1">
                {result.unattempted}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                0 Marks affected
              </div>
            </div>

            {/* Time Spent */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="text-[11px] font-medium text-amber-700 uppercase tracking-wider">
                Time Spent
              </div>
              <div className="text-2xl font-bold text-amber-950 mt-1">
                {formatTime(result.timeSpentSeconds)}
              </div>
              <div className="text-[10px] text-amber-700 mt-0.5">
                Avg {Math.round(result.timeSpentSeconds / (result.attempted || 1))}s / question
              </div>
            </div>
          </div>
        </div>

        {/* Section / Category Performance Breakdown */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base font-bold text-slate-800">
              Syllabus Topic Breakdown
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryStats.map(stat => (
              <div key={stat.category} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-1.5">
                  <span>{stat.category}</span>
                  <span className="text-indigo-600 font-bold">{stat.score} Marks</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      stat.accuracy >= 70 ? 'bg-emerald-500' : stat.accuracy >= 40 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${Math.max(5, stat.accuracy)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5">
                  <span>
                    Attempted: {stat.attempted}/{stat.total} • Correct: {stat.correct}
                  </span>
                  <span>Accuracy: {stat.accuracy}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Question-by-Question Detailed Review */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                Detailed Question Solutions & Explanations
              </h2>
              <p className="text-xs text-slate-500">
                Review official answer keys, detailed physics derivations, and bilingual formulas
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap text-xs">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 rounded-full font-medium transition ${
                  activeFilter === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All ({questions.length})
              </button>
              <button
                onClick={() => setActiveFilter('incorrect')}
                className={`px-3 py-1 rounded-full font-medium transition ${
                  activeFilter === 'incorrect'
                    ? 'bg-rose-600 text-white'
                    : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
                }`}
              >
                Incorrect ({result.incorrectAnswers})
              </button>
              <button
                onClick={() => setActiveFilter('correct')}
                className={`px-3 py-1 rounded-full font-medium transition ${
                  activeFilter === 'correct'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                }`}
              >
                Correct ({result.correctAnswers})
              </button>
              <button
                onClick={() => setActiveFilter('unattempted')}
                className={`px-3 py-1 rounded-full font-medium transition ${
                  activeFilter === 'unattempted'
                    ? 'bg-slate-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Unattempted ({result.unattempted})
              </button>
            </div>
          </div>

          {/* Questions review list */}
          <div className="space-y-6">
            {filteredQuestions.map(q => {
              const userResp = result.userResponses[q.id];
              const isAttempted = userResp?.selectedOptionId !== undefined;
              const isCorrect = userResp?.isCorrect;
              const isExpanded = expandedSolutions[q.id] !== false; // expanded by default for easy review

              const questionText = language === 'hi' && q.textHi ? q.textHi : q.textEn;

              return (
                <div
                  key={q.id}
                  className="rounded-xl border border-slate-200 p-5 space-y-4 bg-slate-50/40"
                >
                  {/* Question header */}
                  <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-slate-200 font-bold text-slate-800 flex items-center justify-center text-xs">
                        Q.{q.id}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-medium border border-indigo-100">
                        {q.category}
                      </span>
                      <span className="font-mono text-slate-400">ID: {q.questionId}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" /> +4 Correct
                        </span>
                      ) : isAttempted ? (
                        <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-bold flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> -1 Incorrect
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                          0 Unattempted
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question text */}
                  <p className="text-sm font-medium text-slate-900 whitespace-pre-line leading-relaxed">
                    {questionText}
                  </p>

                  {/* Match lists if present */}
                  {q.listI && q.listII && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-white p-3 rounded-lg border border-slate-200">
                      <div>
                        <div className="font-semibold text-slate-700 mb-1 border-b pb-1">List I</div>
                        <div className="space-y-1">
                          {q.listI.map(item => (
                            <div key={item.label}>
                              <span className="font-bold text-indigo-600">({item.label})</span> {language === 'hi' && item.textHi ? item.textHi : item.textEn}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-700 mb-1 border-b pb-1">List II</div>
                        <div className="space-y-1">
                          {q.listII.map(item => (
                            <div key={item.label}>
                              <span className="font-bold text-indigo-600">({item.label})</span> {language === 'hi' && item.textHi ? item.textHi : item.textEn}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map(opt => {
                      const isUserSelected = userResp?.selectedOptionId === opt.id;
                      const isCorrectOpt = q.correctOptionId === opt.id;

                      let optClasses = 'bg-white border-slate-200 text-slate-700';
                      if (isCorrectOpt) {
                        optClasses = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-medium ring-1 ring-emerald-400';
                      } else if (isUserSelected) {
                        optClasses = 'bg-rose-50 border-rose-400 text-rose-900 font-medium ring-1 ring-rose-300';
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-lg border flex items-start justify-between gap-2 ${optClasses}`}
                        >
                          <div className="flex items-start gap-2">
                            <span className="font-bold">({opt.id})</span>
                            <span>{language === 'hi' && opt.textHi ? opt.textHi : opt.textEn}</span>
                          </div>
                          {isCorrectOpt && (
                            <span className="text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded shrink-0">
                              Correct Key
                            </span>
                          )}
                          {isUserSelected && !isCorrectOpt && (
                            <span className="text-[10px] bg-rose-600 text-white font-bold px-1.5 py-0.5 rounded shrink-0">
                              Your Choice
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Detailed explanation accordion */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleSolution(q.id)}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {isExpanded ? 'Hide Detailed Solution' : 'View Detailed Solution'}
                    </button>

                    {isExpanded && (
                      <div className="mt-2 p-4 rounded-xl bg-slate-900 text-slate-200 text-xs space-y-2 border border-slate-800">
                        <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                          <span>Explanation & Derivation:</span>
                        </div>
                        <p className="leading-relaxed text-slate-300">
                          {language === 'hi' && q.explanation.hi
                            ? q.explanation.hi
                            : q.explanation.en}
                        </p>
                        {q.explanation.keyFormula && (
                          <div className="p-2.5 rounded bg-slate-950 font-mono text-emerald-300 border border-slate-800">
                            Key Formula: {q.explanation.keyFormula}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
