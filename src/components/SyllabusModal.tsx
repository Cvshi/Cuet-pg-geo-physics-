import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Layers,
  Award,
  CheckCircle2,
  Video,
  Play,
  FileQuestion,
  ChevronDown,
  ChevronUp,
  Search,
  Zap,
  Info,
  ExternalLink
} from 'lucide-react';
import { OFFICIAL_CUET_PG_SYLLABUS, SyllabusUnit, SyllabusSubtopic } from '../data/syllabus';
import { SubjectCategory } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'hi';
  onStartCategoryPractice: (category: SubjectCategory) => void;
  onWatchClass: () => void;
}

export const SyllabusModal: React.FC<Props> = ({
  isOpen,
  onClose,
  language,
  onStartCategoryPractice,
  onWatchClass
}) => {
  const [expandedUnitId, setExpandedUnitId] = useState<string>('unit-geo');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState<'All' | 'Physics' | 'Mathematics' | 'Solid Earth Geophysics'>('All');

  if (!isOpen) return null;

  const filteredUnits = OFFICIAL_CUET_PG_SYLLABUS.filter(unit => {
    if (selectedSection !== 'All' && unit.section !== selectedSection) return false;
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      unit.titleEn.toLowerCase().includes(query) ||
      unit.titleHi.toLowerCase().includes(query) ||
      unit.subtopics.some(
        s =>
          s.nameEn.toLowerCase().includes(query) ||
          s.nameHi.toLowerCase().includes(query) ||
          s.descriptionEn.toLowerCase().includes(query)
      )
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">
                  {language === 'hi' ? 'आधिकारिक CUET PG भूभौतिकी पाठ्यक्रम' : 'Official CUET PG Geophysics Syllabus'}
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-900 text-indigo-300 border border-indigo-700">
                  SCQP14
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {language === 'hi'
                  ? 'एनटीए मानक पाठ्यक्रम • 6 इकाइयाँ • सटीक कठिनाई स्तर (मध्यम से उन्नत)'
                  : 'NTA Standard Syllabus • 6 Core Units • Calibrated CUET PG Difficulty Benchmark'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Level & Quality Benchmark Banner */}
        <div className="px-6 py-3 bg-gradient-to-r from-indigo-950/60 via-slate-900 to-indigo-950/60 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-indigo-300">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold">
              {language === 'hi'
                ? 'गुणवत्ता मानक: न बहुत कठिन (गेट/पीएचडी स्तर नहीं), न कमजोर (स्कूल स्तर नहीं)। विशुद्ध सीयूईटी पीजी स्तर।'
                : 'Difficulty Benchmark: Calibrated strictly to CUET PG level (B.Sc Honours physics & earth science standards).'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span>Total Weightage: 100% (300 Marks)</span>
            <span>•</span>
            <span>Duration: 105 Min (75 Qs)</span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="p-4 sm:px-6 bg-slate-950/40 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={language === 'hi' ? 'विषय या उप-विषय खोजें...' : 'Search unit or subtopic (e.g., Snell, Archie, Maxwell)...'}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2">
            {(['All', 'Solid Earth Geophysics', 'Physics', 'Mathematics'] as const).map(sec => (
              <button
                key={sec}
                onClick={() => setSelectedSection(sec)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                  selectedSection === sec
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>
        </div>

        {/* Units Accordion Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredUnits.map(unit => {
            const isExpanded = expandedUnitId === unit.id;

            return (
              <div
                key={unit.id}
                className="rounded-2xl border border-slate-800 bg-slate-850/60 overflow-hidden transition"
              >
                {/* Unit Header Bar */}
                <div
                  onClick={() => setExpandedUnitId(isExpanded ? '' : unit.id)}
                  className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-800/60 transition gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/30">
                      U{unit.unitNumber}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                          {unit.section}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                          Weightage ~{unit.weightagePercentage}%
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        {language === 'hi' ? unit.titleHi : unit.titleEn}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 hidden sm:inline">
                      {unit.subtopics.length} subtopics
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Subtopics List */}
                {isExpanded && (
                  <div className="border-t border-slate-800/80 bg-slate-900/90 p-4 sm:p-5 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {unit.subtopics.map(sub => (
                        <div
                          key={sub.id}
                          className="rounded-xl bg-slate-850 border border-slate-800 p-3.5 space-y-2 hover:border-slate-700 transition"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs font-bold text-slate-200">
                              {language === 'hi' ? sub.nameHi : sub.nameEn}
                            </h4>
                            <span
                              className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                                sub.cuetWeightage === 'High'
                                  ? 'bg-rose-950 text-rose-300 border border-rose-800'
                                  : 'bg-indigo-950 text-indigo-300 border border-indigo-800'
                              }`}
                            >
                              {sub.cuetWeightage}
                            </span>
                          </div>

                          <p className="text-[11px] text-slate-400 leading-relaxed">
                            {sub.descriptionEn}
                          </p>

                          <div className="flex items-center justify-between pt-1 border-t border-slate-800/60 text-[11px]">
                            <span className="text-slate-500">
                              Est. Questions: ~{sub.expectedQuestions}
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  onClose();
                                  onStartCategoryPractice(sub.category);
                                }}
                                className="px-2 py-1 rounded-md bg-indigo-950 hover:bg-indigo-900 text-indigo-300 font-semibold border border-indigo-800 flex items-center gap-1 transition"
                              >
                                <Play className="w-3 h-3" /> Practice
                              </button>
                              <button
                                onClick={() => {
                                  onClose();
                                  onWatchClass();
                                }}
                                className="px-2 py-1 rounded-md bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-semibold border border-emerald-800 flex items-center gap-1 transition"
                              >
                                <Video className="w-3 h-3" /> Class
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="p-4 px-6 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-400">
            Aligned with National Testing Agency (NTA) CUET PG Information Bulletin 2024 & 2025.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition"
          >
            Close Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};
