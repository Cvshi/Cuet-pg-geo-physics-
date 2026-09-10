/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Question,
  UserResponse,
  TestResult,
  TestMetadata,
  TestMode,
  SubjectCategory
} from './types';
import {
  official2024Questions,
  CUET_PG_GEOPHYSICS_2024_METADATA,
  getQuickMockQuestions,
  getQuestionsByCategory
} from './data/allQuestions';
import { Header } from './components/Header';
import { QuestionView } from './components/QuestionView';
import { QuestionPalette } from './components/QuestionPalette';
import { ResultReport } from './components/ResultReport';
import { HomeDashboard } from './components/HomeDashboard';
import { FreeClassesView } from './components/FreeClassesView';
import { QuestionBankView } from './components/QuestionBankView';
import { FormulaHandbookView } from './components/FormulaHandbookView';
import { VirtualCalculator } from './components/VirtualCalculator';
import { RoughSheetModal } from './components/RoughSheetModal';
import { InstructionsModal } from './components/InstructionsModal';
import { QuestionPaperModal } from './components/QuestionPaperModal';
import { SubmitConfirmModal } from './components/SubmitConfirmModal';
import { allQuestionsPool } from './data/allQuestions';

export default function App() {
  // App view state: 'home' | 'classes' | 'qbank' | 'formulas' | 'test' | 'result'
  const [currentView, setCurrentView] = useState<'home' | 'classes' | 'qbank' | 'formulas' | 'test' | 'result'>('home');
  const [testMode, setTestMode] = useState<TestMode>('full_mock');
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory | undefined>(undefined);


  // Language state: 'en' | 'hi'
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  // Active test state
  const [testQuestions, setTestQuestions] = useState<Question[]>(official2024Questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userResponses, setUserResponses] = useState<Record<number, UserResponse>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(105 * 60);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [testStartTime, setTestStartTime] = useState<number>(Date.now());
  const [activeMetadata, setActiveMetadata] = useState<TestMetadata>(CUET_PG_GEOPHYSICS_2024_METADATA);

  // Final calculated result
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  // Modals state
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isRoughSheetOpen, setIsRoughSheetOpen] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isQuestionPaperOpen, setIsQuestionPaperOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Timer interval ref
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Start test handler
  const handleStartTest = (mode: TestMode, category?: SubjectCategory) => {
    setTestMode(mode);
    setSelectedCategory(category);

    let questionsToUse: Question[] = [];
    let durationMinutes = 105;

    if (mode === 'quick_drill') {
      questionsToUse = getQuickMockQuestions(25);
      durationMinutes = 35;
    } else if (mode === 'category_practice' && category) {
      questionsToUse = getQuestionsByCategory(category);
      durationMinutes = Math.max(20, Math.round(questionsToUse.length * 1.4));
    } else {
      questionsToUse = [...official2024Questions];
      durationMinutes = 105;
    }

    setTestQuestions(questionsToUse);
    setCurrentQuestionIndex(0);
    setUserResponses({});
    setTimeRemainingSeconds(durationMinutes * 60);
    setIsPaused(false);
    setTestStartTime(Date.now());

    setActiveMetadata({
      ...CUET_PG_GEOPHYSICS_2024_METADATA,
      paperName:
        mode === 'category_practice'
          ? `Geophysics: ${category}`
          : mode === 'quick_drill'
          ? 'Geophysics Rapid Speed Drill'
          : mode === 'study_mode'
          ? 'Geophysics Study & Practice'
          : CUET_PG_GEOPHYSICS_2024_METADATA.paperName,
      durationMinutes,
      totalQuestions: questionsToUse.length,
      totalMarks: questionsToUse.length * 4
    });

    // Mark question 0 as not_answered (visited)
    setUserResponses({
      0: {
        questionId: questionsToUse[0].id,
        status: 'not_answered'
      }
    });

    setCurrentView('test');
  };

  // Start custom questions test (from Question Bank or Free Class)
  const handleStartCustomQuestionsTest = (questions: Question[], title: string) => {
    if (questions.length === 0) return;
    setTestMode('category_practice');
    setSelectedCategory(undefined);
    setTestQuestions(questions);
    setCurrentQuestionIndex(0);
    setUserResponses({
      0: {
        questionId: questions[0].id,
        status: 'not_answered'
      }
    });
    const durationMinutes = Math.max(15, Math.round(questions.length * 1.4));
    setTimeRemainingSeconds(durationMinutes * 60);
    setIsPaused(false);
    setTestStartTime(Date.now());
    setActiveMetadata({
      ...CUET_PG_GEOPHYSICS_2024_METADATA,
      paperName: title,
      durationMinutes,
      totalQuestions: questions.length,
      totalMarks: questions.length * 4
    });
    setCurrentView('test');
  };

  // Start class specific drill
  const handleStartClassDrill = (questionIds: number[], title: string) => {
    const matched = allQuestionsPool.filter(q => questionIds.includes(q.id));
    if (matched.length > 0) {
      handleStartCustomQuestionsTest(matched, title);
    }
  };

  // Submit test computation
  const computeAndSubmitTest = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const totalSecondsSpent = Math.max(
      1,
      Math.round((Date.now() - testStartTime) / 1000)
    );

    let correct = 0;
    let incorrect = 0;
    let attempted = 0;
    let unattempted = 0;
    let totalScore = 0;

    const evaluatedResponses: Record<number, UserResponse> = { ...userResponses };

    testQuestions.forEach((q, idx) => {
      const resp = evaluatedResponses[idx];
      const hasAnswer = resp?.selectedOptionId !== undefined;

      // In NTA, 'answered' AND 'answered_and_marked' are evaluated
      if (hasAnswer && (resp.status === 'answered' || resp.status === 'answered_and_marked')) {
        attempted++;
        const isCorrect = resp.selectedOptionId === q.correctOptionId;
        evaluatedResponses[idx] = {
          ...resp,
          isCorrect
        };

        if (isCorrect) {
          correct++;
          totalScore += 4;
        } else {
          incorrect++;
          totalScore -= 1;
        }
      } else {
        unattempted++;
        if (resp) {
          evaluatedResponses[idx] = {
            ...resp,
            isCorrect: false
          };
        }
      }
    });

    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    const result: TestResult = {
      testId: `cuet_geo_${Date.now()}`,
      date: new Date().toISOString(),
      totalQuestions: testQuestions.length,
      attempted,
      correctAnswers: correct,
      incorrectAnswers: incorrect,
      unattempted,
      totalScore,
      maxMarks: testQuestions.length * 4,
      accuracy,
      timeSpentSeconds: totalSecondsSpent,
      userResponses: evaluatedResponses
    };

    setTestResult(result);
    setIsSubmitModalOpen(false);
    setCurrentView('result');

    // Save to local storage history
    try {
      const existing = localStorage.getItem('cuet_geophysics_history');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(result);
      localStorage.setItem('cuet_geophysics_history', JSON.stringify(list.slice(0, 10)));
    } catch {
      // ignore
    }
  }, [testQuestions, userResponses, testStartTime]);

  // Countdown timer hook
  useEffect(() => {
    if (currentView !== 'test' || testMode === 'study_mode') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          computeAndSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentView, isPaused, testMode, computeAndSubmitTest]);

  // Navigate to specific question and mark visited
  const handleSelectQuestion = (index: number) => {
    if (index < 0 || index >= testQuestions.length) return;
    setCurrentQuestionIndex(index);

    setUserResponses((prev) => {
      const existing = prev[index];
      if (!existing || existing.status === 'not_visited') {
        return {
          ...prev,
          [index]: {
            questionId: testQuestions[index].id,
            status: 'not_answered'
          }
        };
      }
      return prev;
    });
  };

  // Option selection
  const handleSelectOption = (optionId: number) => {
    setUserResponses((prev) => {
      const current = prev[currentQuestionIndex];
      return {
        ...prev,
        [currentQuestionIndex]: {
          questionId: testQuestions[currentQuestionIndex].id,
          selectedOptionId: optionId,
          status:
            current?.status === 'marked_for_review' || current?.status === 'answered_and_marked'
              ? 'answered_and_marked'
              : 'answered',
          isBookmarked: current?.isBookmarked
        }
      };
    });
  };

  // Clear Response
  const handleClearResponse = () => {
    setUserResponses((prev) => {
      const current = prev[currentQuestionIndex];
      return {
        ...prev,
        [currentQuestionIndex]: {
          questionId: testQuestions[currentQuestionIndex].id,
          selectedOptionId: undefined,
          status: 'not_answered',
          isBookmarked: current?.isBookmarked
        }
      };
    });
  };

  // Save & Next
  const handleSaveAndNext = () => {
    setUserResponses((prev) => {
      const current = prev[currentQuestionIndex];
      const hasAnswer = current?.selectedOptionId !== undefined;
      return {
        ...prev,
        [currentQuestionIndex]: {
          questionId: testQuestions[currentQuestionIndex].id,
          selectedOptionId: current?.selectedOptionId,
          status: hasAnswer ? 'answered' : 'not_answered',
          isBookmarked: current?.isBookmarked
        }
      };
    });

    if (currentQuestionIndex < testQuestions.length - 1) {
      handleSelectQuestion(currentQuestionIndex + 1);
    }
  };

  // Mark for Review & Next
  const handleMarkForReviewAndNext = () => {
    setUserResponses((prev) => {
      const current = prev[currentQuestionIndex];
      const hasAnswer = current?.selectedOptionId !== undefined;
      return {
        ...prev,
        [currentQuestionIndex]: {
          questionId: testQuestions[currentQuestionIndex].id,
          selectedOptionId: current?.selectedOptionId,
          status: hasAnswer ? 'answered_and_marked' : 'marked_for_review',
          isBookmarked: current?.isBookmarked
        }
      };
    });

    if (currentQuestionIndex < testQuestions.length - 1) {
      handleSelectQuestion(currentQuestionIndex + 1);
    }
  };

  // Previous
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      handleSelectQuestion(currentQuestionIndex - 1);
    }
  };

  // Toggle Bookmark
  const handleToggleBookmark = () => {
    setUserResponses((prev) => {
      const current = prev[currentQuestionIndex];
      const isBookmarked = !current?.isBookmarked;
      return {
        ...prev,
        [currentQuestionIndex]: {
          questionId: testQuestions[currentQuestionIndex].id,
          selectedOptionId: current?.selectedOptionId,
          status: current?.status || 'not_answered',
          isBookmarked
        }
      };
    });
  };

  // Language toggle
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 font-sans antialiased text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* 1. Home Dashboard View */}
      {currentView === 'home' && (
        <HomeDashboard
          onStartTest={handleStartTest}
          language={language}
          onToggleLanguage={toggleLanguage}
          onNavigateToClasses={() => setCurrentView('classes')}
          onNavigateToQuestionBank={() => setCurrentView('qbank')}
          onNavigateToFormulas={() => setCurrentView('formulas')}
        />
      )}

      {/* 1.1 Free Classes Learning View */}
      {currentView === 'classes' && (
        <FreeClassesView
          language={language}
          onToggleLanguage={toggleLanguage}
          onBackToHome={() => setCurrentView('home')}
          onStartCustomDrill={handleStartClassDrill}
        />
      )}

      {/* 1.2 Mega Question Bank & DPP View */}
      {currentView === 'qbank' && (
        <QuestionBankView
          language={language}
          onToggleLanguage={toggleLanguage}
          onBackToHome={() => setCurrentView('home')}
          onStartCustomTest={handleStartCustomQuestionsTest}
        />
      )}

      {/* 1.3 Formula Handbook View */}
      {currentView === 'formulas' && (
        <FormulaHandbookView
          language={language}
          onToggleLanguage={toggleLanguage}
          onBackToHome={() => setCurrentView('home')}
          onPracticeTopic={(category) => handleStartTest('category_practice', category)}
        />
      )}

      {/* 2. Active Test View */}
      {currentView === 'test' && (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* Top Bar Header */}
          <Header
            metadata={activeMetadata}
            timeRemainingSeconds={timeRemainingSeconds}
            isPaused={isPaused}
            onTogglePause={() => setIsPaused(!isPaused)}
            language={language}
            onToggleLanguage={toggleLanguage}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
            onOpenRoughSheet={() => setIsRoughSheetOpen(true)}
            onOpenQuestionPaper={() => setIsQuestionPaperOpen(true)}
            onOpenInstructions={() => setIsInstructionsOpen(true)}
            onSubmitClick={() => setIsSubmitModalOpen(true)}
          />

          {/* Test workspace layout: Left Question view, Right Question palette */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
            <QuestionView
              question={testQuestions[currentQuestionIndex]}
              currentIndex={currentQuestionIndex}
              totalQuestions={testQuestions.length}
              response={userResponses[currentQuestionIndex]}
              language={language}
              onSelectOption={handleSelectOption}
              onClearResponse={handleClearResponse}
              onSaveAndNext={handleSaveAndNext}
              onMarkForReviewAndNext={handleMarkForReviewAndNext}
              onPrevious={handlePrevious}
              onToggleBookmark={handleToggleBookmark}
              isPracticeMode={testMode === 'study_mode'}
            />

            <QuestionPalette
              questions={testQuestions}
              currentIndex={currentQuestionIndex}
              responses={userResponses}
              onSelectQuestion={handleSelectQuestion}
              onSubmitClick={() => setIsSubmitModalOpen(true)}
            />
          </div>
        </div>
      )}

      {/* 3. Result Scorecard View */}
      {currentView === 'result' && testResult && (
        <ResultReport
          result={testResult}
          questions={testQuestions}
          onRetake={() => handleStartTest(testMode, selectedCategory)}
          onHome={() => setCurrentView('home')}
          language={language}
        />
      )}

      {/* Modals */}
      <VirtualCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <RoughSheetModal
        isOpen={isRoughSheetOpen}
        onClose={() => setIsRoughSheetOpen(false)}
      />

      <InstructionsModal
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
      />

      <QuestionPaperModal
        isOpen={isQuestionPaperOpen}
        onClose={() => setIsQuestionPaperOpen(false)}
        questions={testQuestions}
        onSelectQuestion={handleSelectQuestion}
        language={language}
      />

      <SubmitConfirmModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirmSubmit={computeAndSubmitTest}
        responses={userResponses}
        totalQuestions={testQuestions.length}
        timeRemainingSeconds={timeRemainingSeconds}
      />
    </div>
  );
}
