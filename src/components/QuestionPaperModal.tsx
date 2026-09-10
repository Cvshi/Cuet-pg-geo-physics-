import React, { useState } from 'react';
import { X, ExternalLink, Filter } from 'lucide-react';
import { Question } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  onSelectQuestion: (index: number) => void;
  language: 'en' | 'hi';
}

export const QuestionPaperModal: React.FC<Props> = ({
  isOpen,
  onClose,
  questions,
  onSelectQuestion,
  language
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  if (!isOpen) return null;

  const categories = Array.from(new Set(questions.map(q => q.category)));
  const filtered = filterCategory === 'all' 
    ? questions 
    : questions.filter(q => q.category === filterCategory);

  return (
    <div id="question-paper-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="w-full max-w-4xl max-h-[90vh] flex flex-col rounded-xl bg-white border border-slate-300 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div>
            <h3 className="font-bold text-base">Full Question Paper View</h3>
            <p className="text-xs text-slate-300">
              CUET PG Geophysics (2024 Shift 3) • Total {questions.length} Questions
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-slate-100 border-b border-slate-200 text-xs overflow-x-auto gap-3">
          <div className="flex items-center gap-1.5 text-slate-600 font-medium shrink-0">
            <Filter className="w-3.5 h-3.5 text-indigo-600" />
            Filter by Topic:
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-2.5 py-1 rounded-full font-medium transition ${
                filterCategory === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              All ({questions.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-2.5 py-1 rounded-full font-medium transition ${
                  filterCategory === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                {cat} ({questions.filter(q => q.category === cat).length})
              </button>
            ))}
          </div>
        </div>

        {/* Questions list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 divide-y divide-slate-200">
          {filtered.map((q) => {
            const actualIndex = questions.findIndex(item => item.id === q.id);
            const questionText = language === 'hi' && q.textHi ? q.textHi : q.textEn;

            return (
              <div key={q.id} className="pt-5 first:pt-0 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded bg-indigo-100 text-indigo-800 font-bold text-xs flex items-center justify-center">
                      Q.{q.id}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium border border-slate-200">
                      {q.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      ID: {q.questionId}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onSelectQuestion(actualIndex);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-medium hover:underline"
                  >
                    Go to Question <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* Question text */}
                <p className="text-sm font-medium text-slate-800 whitespace-pre-line leading-relaxed">
                  {questionText}
                </p>

                {/* Match Lists if present */}
                {q.listI && q.listII && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs bg-slate-50 p-3 rounded-lg border border-slate-200">
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

                {/* Options grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {q.options.map((opt) => (
                    <div key={opt.id} className="p-2 rounded bg-slate-50 border border-slate-200 flex items-start gap-2">
                      <span className="font-bold text-slate-500">({opt.id})</span>
                      <span>{language === 'hi' && opt.textHi ? opt.textHi : opt.textEn}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded"
          >
            Close Paper View
          </button>
        </div>
      </div>
    </div>
  );
};
