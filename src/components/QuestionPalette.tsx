import React, { useState } from 'react';
import { Bookmark, Filter } from 'lucide-react';
import { Question, UserResponse, QuestionStatus } from '../types';

interface Props {
  questions: Question[];
  currentIndex: number;
  responses: Record<number, UserResponse>;
  onSelectQuestion: (index: number) => void;
  onSubmitClick: () => void;
}

export const QuestionPalette: React.FC<Props> = ({
  questions,
  currentIndex,
  responses,
  onSelectQuestion,
  onSubmitClick
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'answered' | 'unanswered' | 'marked' | 'bookmarked'>('all');

  // Compute status counts
  let answered = 0;
  let notAnswered = 0;
  let markedForReview = 0;
  let answeredAndMarked = 0;
  let notVisited = 0;
  let bookmarked = 0;

  questions.forEach((_, idx) => {
    const r = responses[idx];
    if (r?.isBookmarked) bookmarked++;

    if (!r || r.status === 'not_visited') {
      notVisited++;
    } else if (r.status === 'answered_and_marked') {
      answeredAndMarked++;
    } else if (r.status === 'marked_for_review') {
      markedForReview++;
    } else if (r.status === 'answered') {
      answered++;
    } else if (r.status === 'not_answered') {
      notAnswered++;
    }
  });

  const getStatusColorClass = (status: QuestionStatus, isCurrent: boolean) => {
    const base = isCurrent ? 'ring-2 ring-offset-2 ring-indigo-600 font-extrabold scale-105 z-10 ' : '';
    switch (status) {
      case 'answered':
        return `${base}bg-emerald-600 text-white hover:bg-emerald-700`;
      case 'not_answered':
        return `${base}bg-rose-600 text-white hover:bg-rose-700`;
      case 'marked_for_review':
        return `${base}bg-purple-600 text-white rounded-full hover:bg-purple-700`;
      case 'answered_and_marked':
        return `${base}bg-purple-600 text-white rounded-full relative hover:bg-purple-700`;
      case 'not_visited':
      default:
        return `${base}bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200`;
    }
  };

  const isQuestionVisible = (idx: number) => {
    if (activeFilter === 'all') return true;
    const r = responses[idx];
    if (activeFilter === 'bookmarked') return !!r?.isBookmarked;
    if (activeFilter === 'answered') return r?.status === 'answered' || r?.status === 'answered_and_marked';
    if (activeFilter === 'unanswered') return !r || r.status === 'not_visited' || r.status === 'not_answered';
    if (activeFilter === 'marked') return r?.status === 'marked_for_review' || r?.status === 'answered_and_marked';
    return true;
  };

  return (
    <aside id="question-palette-sidebar" className="w-full lg:w-80 bg-slate-50 border-l border-slate-200 flex flex-col h-full overflow-hidden select-none">
      {/* Palette Header */}
      <div className="p-3.5 bg-slate-100 border-b border-slate-200">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
          <span>Question Palette</span>
          <span className="text-[11px] font-normal text-slate-500 lowercase">
            75 total questions
          </span>
        </h3>

        {/* Legend Grid */}
        <div className="grid grid-cols-2 gap-2 mt-3 text-[11px] font-medium text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center">
              {answered}
            </span>
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded bg-rose-600 text-white font-bold text-[10px] flex items-center justify-center">
              {notAnswered}
            </span>
            <span>Not Answered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded bg-slate-200 text-slate-700 font-bold text-[10px] flex items-center justify-center">
              {notVisited}
            </span>
            <span>Not Visited</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-purple-600 text-white font-bold text-[10px] flex items-center justify-center">
              {markedForReview}
            </span>
            <span>Marked Review</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <span className="relative w-4 h-4 rounded-full bg-purple-600 text-white font-bold text-[10px] flex items-center justify-center">
              {answeredAndMarked}
              <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-500 rounded-full border border-white"></span>
            </span>
            <span>Answered & Marked (Evaluated)</span>
          </div>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex items-center gap-1 mt-3 pt-2 border-t border-slate-200 text-[11px] overflow-x-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-2 py-0.5 rounded transition whitespace-nowrap ${
              activeFilter === 'all' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('answered')}
            className={`px-2 py-0.5 rounded transition whitespace-nowrap ${
              activeFilter === 'answered' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            Ans ({answered + answeredAndMarked})
          </button>
          <button
            onClick={() => setActiveFilter('unanswered')}
            className={`px-2 py-0.5 rounded transition whitespace-nowrap ${
              activeFilter === 'unanswered' ? 'bg-rose-600 text-white font-bold' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            Unans ({notAnswered + notVisited})
          </button>
          <button
            onClick={() => setActiveFilter('marked')}
            className={`px-2 py-0.5 rounded transition whitespace-nowrap ${
              activeFilter === 'marked' ? 'bg-purple-600 text-white font-bold' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            Review ({markedForReview + answeredAndMarked})
          </button>
          {bookmarked > 0 && (
            <button
              onClick={() => setActiveFilter('bookmarked')}
              className={`px-2 py-0.5 rounded transition whitespace-nowrap flex items-center gap-0.5 ${
                activeFilter === 'bookmarked' ? 'bg-amber-500 text-white font-bold' : 'text-amber-700 hover:bg-amber-100'
              }`}
            >
              <Bookmark className="w-3 h-3 fill-current" /> ({bookmarked})
            </button>
          )}
        </div>
      </div>

      {/* Question Number Buttons Grid */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="grid grid-cols-5 gap-2">
          {questions.map((q, idx) => {
            if (!isQuestionVisible(idx)) return null;
            const r = responses[idx];
            const status: QuestionStatus = r?.status || 'not_visited';
            const isCurrent = idx === currentIndex;
            const hasBookmark = r?.isBookmarked;

            return (
              <button
                key={q.id}
                id={`btn-palette-q-${idx + 1}`}
                onClick={() => onSelectQuestion(idx)}
                className={`h-9 relative text-xs font-semibold rounded flex items-center justify-center transition shadow-2xs ${getStatusColorClass(
                  status,
                  isCurrent
                )}`}
              >
                {idx + 1}

                {/* Answered and Marked green dot */}
                {status === 'answered_and_marked' && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-white" />
                )}

                {/* Bookmark indicator */}
                {hasBookmark && (
                  <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Palette Footer Submit Button */}
      <div className="p-3 bg-slate-100 border-t border-slate-200">
        <button
          id="btn-palette-submit"
          onClick={onSubmitClick}
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow-xs transition active:scale-98"
        >
          Submit Examination
        </button>
      </div>
    </aside>
  );
};
