import React from 'react';
import {
  Clock,
  Calculator,
  PenLine,
  FileText,
  HelpCircle,
  Globe,
  Send,
  User,
  ShieldCheck,
  Pause,
  Play
} from 'lucide-react';
import { TestMetadata } from '../types';

interface Props {
  metadata: TestMetadata;
  timeRemainingSeconds: number;
  isPaused: boolean;
  onTogglePause: () => void;
  language: 'en' | 'hi';
  onToggleLanguage: () => void;
  onOpenCalculator: () => void;
  onOpenRoughSheet: () => void;
  onOpenQuestionPaper: () => void;
  onOpenInstructions: () => void;
  onSubmitClick: () => void;
}

export const Header: React.FC<Props> = ({
  metadata,
  timeRemainingSeconds,
  isPaused,
  onTogglePause,
  language,
  onToggleLanguage,
  onOpenCalculator,
  onOpenRoughSheet,
  onOpenQuestionPaper,
  onOpenInstructions,
  onSubmitClick
}) => {
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (n: number) => (n < 10 ? `0${n}` : n);
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  const isTimeCritical = timeRemainingSeconds <= 300; // < 5 mins

  return (
    <header id="cbt-header" className="bg-slate-900 border-b border-slate-800 text-white shadow-md select-none sticky top-0 z-40">
      {/* Top bar with system branding and tools */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Exam and candidate details */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-600/90 border border-indigo-500 flex items-center justify-center font-bold text-lg text-white shadow-inner">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-sm sm:text-base leading-tight tracking-tight">
                {metadata.subjectName} Mock Test
              </h1>
              <span className="hidden sm:inline-block text-[11px] bg-indigo-950/80 text-indigo-300 font-mono px-2 py-0.5 rounded border border-indigo-800">
                PYQ 2024 Shift 3
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3 text-slate-500" />
                Roll: <span className="text-slate-300 font-mono">CUET2024GEO108</span>
              </span>
              <span>•</span>
              <span>NTA CBT Platform</span>
            </div>
          </div>
        </div>

        {/* Center: Live Timer */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border font-mono font-bold text-base sm:text-lg transition ${
              isTimeCritical
                ? 'bg-rose-950/90 text-rose-300 border-rose-700 animate-pulse'
                : 'bg-slate-950/90 text-emerald-400 border-slate-700'
            }`}
          >
            <Clock className={`w-4 h-4 ${isTimeCritical ? 'text-rose-400' : 'text-emerald-400'}`} />
            <span>{formatTime(timeRemainingSeconds)}</span>
          </div>

          <button
            id="btn-toggle-pause-timer"
            onClick={onTogglePause}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 text-xs transition"
            title={isPaused ? 'Resume timer' : 'Pause timer (Practice mode)'}
          >
            {isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4" />}
          </button>
        </div>

        {/* Right: Quick Tools & Submit Button */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          {/* Language Toggle */}
          <button
            id="btn-toggle-language"
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition"
            title="Switch Language (English / हिंदी)"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span>{language === 'en' ? 'ENG' : 'हिंदी'}</span>
          </button>

          {/* Calculator */}
          <button
            id="btn-open-calculator"
            onClick={onOpenCalculator}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition"
            title="Scientific Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">Calc</span>
          </button>

          {/* Rough Scratch Sheet */}
          <button
            id="btn-open-rough-sheet"
            onClick={onOpenRoughSheet}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition"
            title="Rough Sheet"
          >
            <PenLine className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Rough</span>
          </button>

          {/* Question Paper View */}
          <button
            id="btn-open-question-paper"
            onClick={onOpenQuestionPaper}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition"
            title="View Full Question Paper"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden md:inline">Paper</span>
          </button>

          {/* Instructions */}
          <button
            id="btn-open-instructions"
            onClick={onOpenInstructions}
            className="p-1.5 text-xs font-semibold rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 transition"
            title="Official Instructions"
          >
            <HelpCircle className="w-4 h-4 text-slate-300" />
          </button>

          {/* Submit Test Button */}
          <button
            id="btn-submit-test-header"
            onClick={onSubmitClick}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-md bg-rose-600 hover:bg-rose-500 text-white shadow-xs border border-rose-500 transition active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit</span>
          </button>
        </div>
      </div>
    </header>
  );
};
