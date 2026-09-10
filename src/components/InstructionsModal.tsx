import React from 'react';
import { X, CheckCircle2, AlertTriangle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const InstructionsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div id="instructions-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="w-full max-w-2xl max-h-[85vh] flex flex-col rounded-xl bg-white border border-slate-300 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div>
            <h3 className="font-bold text-base">Official Exam Instructions</h3>
            <p className="text-xs text-slate-300">CUET PG Geophysics - Computer Based Test (CBT)</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 text-sm text-slate-700 leading-relaxed">
          {/* General instructions */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-1.5 text-indigo-700">
              <CheckCircle2 className="w-4 h-4" /> 1. General Examination Guidelines
            </h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1">
              <li>Total duration of the examination is <strong>105 minutes</strong> (1 Hour 45 Minutes).</li>
              <li>The clock will be set at the server. The countdown timer in the top right corner displays the remaining time.</li>
              <li>The question paper consists of <strong>75 Multiple Choice Questions</strong> totaling <strong>300 marks</strong>.</li>
            </ul>
          </div>

          {/* Marking scheme */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3.5">
            <h4 className="font-semibold text-amber-900 mb-1.5 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" /> 2. Marking Scheme
            </h4>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 bg-emerald-100/70 border border-emerald-200 rounded text-emerald-800 font-medium">
                <span className="block text-sm font-bold">+4</span>
                Correct Answer
              </div>
              <div className="p-2 bg-rose-100/70 border border-rose-200 rounded text-rose-800 font-medium">
                <span className="block text-sm font-bold">-1</span>
                Incorrect Answer
              </div>
              <div className="p-2 bg-slate-100 border border-slate-200 rounded text-slate-700 font-medium">
                <span className="block text-sm font-bold">0</span>
                Unattempted
              </div>
            </div>
          </div>

          {/* Color coding */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-2.5">
              3. Navigating to a Question & Palette Symbols
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                <span className="w-6 h-6 rounded bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs shrink-0">1</span>
                <span>You have not visited the question yet.</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-rose-50 rounded border border-rose-200">
                <span className="w-6 h-6 rounded bg-rose-600 text-white font-bold flex items-center justify-center text-xs shrink-0">2</span>
                <span>You have not answered the question.</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-emerald-50 rounded border border-emerald-200">
                <span className="w-6 h-6 rounded bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0">3</span>
                <span>You have answered the question.</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded border border-purple-200">
                <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0">4</span>
                <span>You have marked the question for review.</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded border border-purple-200 col-span-2 sm:col-span-2">
                <span className="relative w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
                  5
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-white"></span>
                </span>
                <span>The question is answered AND marked for review (will be evaluated).</span>
              </div>
            </div>
          </div>

          {/* Bilingual mode info */}
          <div className="border-t border-slate-200 pt-3 text-xs text-slate-500">
            <strong>Bilingual Feature:</strong> You can switch the question view language between English and Hindi at any time using the language selector.
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-xs shadow-xs transition"
          >
            I Understand, Close Instructions
          </button>
        </div>
      </div>
    </div>
  );
};
