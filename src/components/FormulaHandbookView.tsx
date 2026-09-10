import React, { useState } from 'react';
import {
  Zap,
  Search,
  ArrowLeft,
  Copy,
  Check,
  Sparkles,
  BookOpen,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SubjectCategory, FormulaItem } from '../types';
import { FORMULA_HANDBOOK } from '../data/formulas';
import { CATEGORIES } from '../data/allQuestions';

interface Props {
  language: 'en' | 'hi';
  onToggleLanguage: () => void;
  onBackToHome: () => void;
  onPracticeTopic: (category: SubjectCategory) => void;
}

export const FormulaHandbookView: React.FC<Props> = ({
  language,
  onToggleLanguage,
  onBackToHome,
  onPracticeTopic
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory | 'All'>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (formula: string, id: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredFormulas = FORMULA_HANDBOOK.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      item.formula.toLowerCase().includes(query) ||
      item.descriptionEn.toLowerCase().includes(query) ||
      (item.descriptionHi && item.descriptionHi.toLowerCase().includes(query)) ||
      item.keyApplications.some(app => app.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div id="formula-handbook-view" className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
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
                  <Zap className="w-4 h-4 text-amber-400" />
                  Physics & Geophysics Formula Handbook
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800">
                  Quick Revision Sheets
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Comprehensive formulas, derivations, and application guides across all exam units
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
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
        {/* Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-950 via-slate-900 to-indigo-950 border border-amber-900/50 p-6 sm:p-8 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> High-Yield Formula Repository
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Essential Formulas for CUET PG Geophysics & Physics
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Formulas selected from previous year papers, standard textbooks (Griffiths, Kittel, Zemansky, Telford), and NTA question patterns. Click any formula to copy or practice targeted questions.
            </p>
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
              placeholder="Search formulas by name, concept, or variable..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition ${
                selectedCategory === 'All'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All Domains ({FORMULA_HANDBOOK.length})
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Formulas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredFormulas.map(item => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/60 p-5 sm:p-6 transition flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-amber-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <button
                    onClick={() => handleCopy(item.formula, item.id)}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-700 transition"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Formula
                      </>
                    )}
                  </button>
                </div>

                <h3 className="font-bold text-base text-white">{item.name}</h3>

                {/* Formula Display Box */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center font-mono text-emerald-400 text-sm sm:text-base font-bold overflow-x-auto">
                  {item.formula}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'hi' && item.descriptionHi ? item.descriptionHi : item.descriptionEn}
                </p>

                {/* Key Applications Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.keyApplications.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 text-[10px] font-medium border border-slate-800"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action: Practice Questions from this Category */}
              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Ready to test this concept?</span>
                <button
                  onClick={() => onPracticeTopic(item.category)}
                  className="px-3 py-1.5 rounded-lg bg-amber-950 text-amber-300 hover:bg-amber-900 border border-amber-800 font-semibold text-xs flex items-center gap-1 transition"
                >
                  Practice Questions <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
