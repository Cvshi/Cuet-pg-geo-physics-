import React from 'react';
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Check,
  Award,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { Question, UserResponse } from '../types';

interface Props {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  response?: UserResponse;
  language: 'en' | 'hi';
  onSelectOption: (optionId: number) => void;
  onClearResponse: () => void;
  onSaveAndNext: () => void;
  onMarkForReviewAndNext: () => void;
  onPrevious: () => void;
  onToggleBookmark: () => void;
  isPracticeMode?: boolean;
}

export const QuestionView: React.FC<Props> = ({
  question,
  currentIndex,
  totalQuestions,
  response,
  language,
  onSelectOption,
  onClearResponse,
  onSaveAndNext,
  onMarkForReviewAndNext,
  onPrevious,
  onToggleBookmark,
  isPracticeMode = false
}) => {
  const [showSolution, setShowSolution] = React.useState(false);

  // Reset showSolution when question changes
  React.useEffect(() => {
    setShowSolution(false);
  }, [question.id]);

  const questionText = language === 'hi' && question.textHi ? question.textHi : question.textEn;
  const isBookmarked = response?.isBookmarked ?? false;
  const selectedOption = response?.selectedOptionId;

  return (
    <div id="active-question-view" className="flex-1 flex flex-col h-full bg-white overflow-hidden">
      {/* Top Question Info Bar */}
      <div className="px-6 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-bold text-base text-slate-800">
            Question {currentIndex + 1}
            <span className="text-xs text-slate-400 font-normal ml-1">of {totalQuestions}</span>
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-medium border border-indigo-200">
            {question.category}
          </span>
          <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">
            ID: {question.questionId}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Marks display */}
          <div className="flex items-center gap-2 font-medium">
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Marks +4.00
            </span>
            <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              Negative -1.00
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            id="btn-bookmark-question"
            onClick={onToggleBookmark}
            className={`p-1.5 rounded-md border transition flex items-center gap-1 ${
              isBookmarked
                ? 'bg-amber-50 text-amber-600 border-amber-300'
                : 'bg-white text-slate-400 hover:text-slate-600 border-slate-200'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Question Body (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Question Text */}
        <div className="text-slate-900 font-medium text-base leading-relaxed tracking-normal select-text whitespace-pre-line">
          {questionText}
        </div>

        {/* List I and List II Table if available (Match the Following Questions) */}
        {question.listI && question.listII && (
          <div className="rounded-lg border border-slate-200 overflow-hidden bg-slate-50/50 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              {/* List I */}
              <div className="p-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-900 mb-2.5 pb-1 border-b border-indigo-100">
                  List I
                </h4>
                <div className="space-y-2 text-sm text-slate-800">
                  {question.listI.map((item) => (
                    <div key={item.label} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded bg-indigo-100 text-indigo-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {item.label}
                      </span>
                      <span>
                        {language === 'hi' && item.textHi ? item.textHi : item.textEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* List II */}
              <div className="p-4 bg-slate-50/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-900 mb-2.5 pb-1 border-b border-indigo-100">
                  List II
                </h4>
                <div className="space-y-2 text-sm text-slate-800">
                  {question.listII.map((item) => (
                    <div key={item.label} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {item.label}
                      </span>
                      <span>
                        {language === 'hi' && item.textHi ? item.textHi : item.textEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Multiple Choice Options List */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Choose your answer:
          </div>
          <div className="space-y-2.5" role="radiogroup">
            {question.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const optionText = language === 'hi' && option.textHi ? option.textHi : option.textEn;

              return (
                <label
                  key={option.id}
                  onClick={() => onSelectOption(option.id)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border transition cursor-pointer select-none ${
                    isSelected
                      ? 'bg-indigo-50/80 border-indigo-600 text-indigo-950 ring-1 ring-indigo-500 shadow-xs'
                      : 'bg-white border-slate-200 hover:bg-slate-50/90 text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </div>

                  <div className="flex-1 text-sm font-medium leading-relaxed">
                    <span className="font-bold mr-2 text-slate-700">({option.id})</span>
                    <span>{optionText}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Practice Mode Solution toggle (Allows instant learning if practicing) */}
        {isPracticeMode && (
          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              {showSolution ? 'Hide Solution & Explanation' : 'View Correct Answer & Detailed Formula'}
            </button>

            {showSolution && (
              <div className="mt-3 p-4 rounded-xl bg-slate-900 text-slate-200 text-xs space-y-2 border border-slate-800 animate-in fade-in duration-200">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-xs">
                    Correct Option: ({question.correctOptionId})
                  </span>
                </div>
                <p className="leading-relaxed text-slate-300">
                  {language === 'hi' && question.explanation.hi
                    ? question.explanation.hi
                    : question.explanation.en}
                </p>
                {question.explanation.keyFormula && (
                  <div className="p-2 rounded bg-slate-950 font-mono text-emerald-300 border border-slate-800 mt-2">
                    Formula: {question.explanation.keyFormula}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Action Bar (CBT Navigation Buttons) */}
      <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
        {/* Left grouping: Mark for review & Clear response */}
        <div className="flex items-center gap-2">
          <button
            id="btn-mark-for-review-next"
            onClick={onMarkForReviewAndNext}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-800 border border-purple-200 transition active:scale-95"
          >
            Mark for Review & Next
          </button>
          <button
            id="btn-clear-response"
            onClick={onClearResponse}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-white hover:bg-slate-100 text-slate-600 border border-slate-300 transition active:scale-95"
            disabled={!selectedOption}
          >
            Clear Response
          </button>
        </div>

        {/* Right grouping: Previous & Save and Next */}
        <div className="flex items-center gap-2">
          <button
            id="btn-previous-question"
            onClick={onPrevious}
            disabled={currentIndex === 0}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 disabled:opacity-40 disabled:pointer-events-none transition flex items-center gap-1 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <button
            id="btn-save-and-next"
            onClick={onSaveAndNext}
            className="px-5 py-2 text-xs font-bold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition flex items-center gap-1.5 active:scale-95"
          >
            Save & Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
