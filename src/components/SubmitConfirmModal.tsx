import React from 'react';
import { AlertCircle, CheckCircle2, Clock, HelpCircle, EyeOff, Bookmark } from 'lucide-react';
import { UserResponse, Question } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSubmit: () => void;
  responses: Record<number, UserResponse>;
  totalQuestions: number;
  timeRemainingSeconds: number;
}

export const SubmitConfirmModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onConfirmSubmit,
  responses,
  totalQuestions,
  timeRemainingSeconds
}) => {
  if (!isOpen) return null;

  let answered = 0;
  let notAnswered = 0;
  let markedForReview = 0;
  let answeredAndMarked = 0;
  let notVisited = 0;

  for (let i = 0; i < totalQuestions; i++) {
    const r = responses[i];
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
  }

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}m ${s < 10 ? '0' : ''}${s}s`;
  };

  return (
    <div id="submit-confirm-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="w-full max-w-lg rounded-xl bg-white border border-slate-300 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-indigo-900 text-white border-b border-indigo-800">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-300" />
            <h3 className="font-bold text-base">Confirm Test Submission</h3>
          </div>
          <div className="flex items-center gap-1 text-xs bg-indigo-950/80 px-2.5 py-1 rounded text-indigo-200 font-mono">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            {formatTime(timeRemainingSeconds)} Left
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-slate-600">
            Please review your question response summary before final submission. Once submitted, you cannot change your answers.
          </p>

          {/* Statistics table */}
          <div className="rounded-lg border border-slate-200 overflow-hidden text-xs">
            <div className="bg-slate-100 font-semibold px-4 py-2 text-slate-700 flex justify-between border-b border-slate-200">
              <span>Section: Geophysics</span>
              <span>Total Questions: {totalQuestions}</span>
            </div>
            <div className="divide-y divide-slate-100 p-2 space-y-1">
              <div className="flex items-center justify-between px-3 py-1.5 text-emerald-800 bg-emerald-50/70 rounded">
                <span className="flex items-center gap-2 font-medium">
                  <span className="w-3 h-3 rounded bg-emerald-600 inline-block"></span>
                  Answered
                </span>
                <span className="font-bold text-sm">{answered}</span>
              </div>

              <div className="flex items-center justify-between px-3 py-1.5 text-rose-800 bg-rose-50/70 rounded">
                <span className="flex items-center gap-2 font-medium">
                  <span className="w-3 h-3 rounded bg-rose-600 inline-block"></span>
                  Not Answered
                </span>
                <span className="font-bold text-sm">{notAnswered}</span>
              </div>

              <div className="flex items-center justify-between px-3 py-1.5 text-purple-800 bg-purple-50/70 rounded">
                <span className="flex items-center gap-2 font-medium">
                  <span className="w-3 h-3 rounded-full bg-purple-600 inline-block"></span>
                  Marked for Review
                </span>
                <span className="font-bold text-sm">{markedForReview}</span>
              </div>

              <div className="flex items-center justify-between px-3 py-1.5 text-indigo-900 bg-indigo-50/70 rounded">
                <span className="flex items-center gap-2 font-medium">
                  <span className="relative w-3 h-3 rounded-full bg-purple-600 inline-block">
                    <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  </span>
                  Answered & Marked for Review (Evaluated)
                </span>
                <span className="font-bold text-sm">{answeredAndMarked}</span>
              </div>

              <div className="flex items-center justify-between px-3 py-1.5 text-slate-700 bg-slate-50 rounded">
                <span className="flex items-center gap-2 font-medium">
                  <span className="w-3 h-3 rounded bg-slate-300 inline-block"></span>
                  Not Visited
                </span>
                <span className="font-bold text-sm">{notVisited}</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Note on Evaluation:</strong> Questions marked as "Answered & Marked for Review" will be considered for evaluation just like normally answered questions.
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200 rounded transition"
          >
            ← Return to Test
          </button>
          <button
            id="btn-confirm-final-submit"
            onClick={onConfirmSubmit}
            className="px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm hover:shadow transition"
          >
            Yes, Submit Test Now
          </button>
        </div>
      </div>
    </div>
  );
};
