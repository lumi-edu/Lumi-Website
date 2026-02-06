import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function SavingLesson1Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [incorrectAnswers, setIncorrectAnswers] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswerClick = (questionNum: number, answer: string, isCorrect: boolean) => {
    if (isCorrect) {
      setSelectedAnswers(prev => ({...prev, [questionNum]: answer}));
      // Clear any incorrect answers for this question
      const keys = Object.keys(incorrectAnswers).filter(key => !key.startsWith(`${questionNum}-`));
      const newIncorrect: {[key: string]: boolean} = {};
      keys.forEach(key => newIncorrect[key] = true);
      setIncorrectAnswers(newIncorrect);
    } else {
      // Mark this answer as incorrect
      setIncorrectAnswers(prev => ({...prev, [`${questionNum}-${answer}`]: true}));
    }
  };

  return (
    <div className="min-h-screen bg-[#E5D7C4]">
      {/* Header */}
      <div className="sticky top-0 z-50 border-t-[16px] border-[#354024]">
        <header className="bg-[#889063] px-6 py-6 md:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <img src={lumiLogo} alt="lumi" className="h-6 md:h-8 md:-ml-7" style={{ mixBlendMode: 'multiply' }} />
            <nav className="flex gap-4 md:gap-8">
              <Link to="/" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                home
              </Link>
              <Link to="/learn" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                learn
              </Link>
              <Link to="/resources" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                resources
              </Link>
              <Link to="/blog" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                blog
              </Link>
            </nav>
          </div>
        </header>
      </div>

      {/* Back Button */}
      <div className="px-6 py-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/saving-strategies" 
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Lesson Map
          </Link>
        </div>
      </div>

      {/* Lesson Header */}
      <section className="px-6 pb-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 flex items-center gap-4 text-base text-[#354024] opacity-70">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>5–7 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              <span>Beginner</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.1px' }}>
            Why Saving Matters More Than You Think
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Saving Strategies • Lesson 1
          </p>
        </div>
      </section>

      {/* Main Content - Horizontal Card Flow Layout */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Intro - Full width banner */}
          <div className="bg-gradient-to-r from-[#889063] via-[#889063]/90 to-[#889063]/80 text-white rounded-2xl p-10 shadow-xl">
            <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.1px' }}>
              Saving is not just about having extra money
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xl mb-4">
                  A lot of people think saving is something you do after everything else is handled.
                </p>
                <p className="text-xl">
                  In reality, saving is what makes everything else feel easier.
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 rounded-lg p-6 flex items-center">
                <p className="text-xl font-semibold">
                  Saving is not about being rich or never spending money. It is about giving yourself options and reducing stress when life does what it always does.
                </p>
              </div>
            </div>
          </div>

          {/* What saving does - Horizontal scrolling cards */}
          <div>
            <h2 className="text-3xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              What saving actually does for you
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-6">Saving gives you:</p>
            <div className="flex gap-6 overflow-x-auto pb-4">
              <div className="min-w-[300px] bg-white rounded-xl p-6 shadow-md border-t-4 border-[#889063]">
                <CheckCircle2 className="w-8 h-8 text-[#889063] mb-4" />
                <p className="text-[#1C1C1C] text-lg font-semibold">A cushion when something unexpected happens</p>
              </div>
              <div className="min-w-[300px] bg-white rounded-xl p-6 shadow-md border-t-4 border-[#CFBB99]">
                <CheckCircle2 className="w-8 h-8 text-[#889063] mb-4" />
                <p className="text-[#1C1C1C] text-lg font-semibold">More freedom to make choices</p>
              </div>
              <div className="min-w-[300px] bg-white rounded-xl p-6 shadow-md border-t-4 border-[#354024]">
                <CheckCircle2 className="w-8 h-8 text-[#889063] mb-4" />
                <p className="text-[#1C1C1C] text-lg font-semibold">Less stress around money decisions</p>
              </div>
            </div>
            <div className="mt-6 bg-[#CFBB99]/50 p-6 rounded-lg text-center">
              <p className="text-[#1C1C1C] text-lg font-semibold">
                When you have savings, small problems stay small. Without savings, small problems can feel overwhelming.
              </p>
            </div>
          </div>

          {/* Real-life scenario - Side by side comparison */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Real-life scenario: an unexpected expense
            </h3>
            <div className="grid md:grid-cols-[1fr_2fr] gap-6 mb-6">
              <div className="bg-[#E5D7C4] p-5 rounded-lg">
                <p className="text-[#1C1C1C] text-lg font-semibold mb-3">You have a normal month planned.</p>
                <p className="text-[#1C1C1C] text-lg mb-3">Then something happens:</p>
                <ul className="list-disc list-inside space-y-2 text-[#1C1C1C] text-lg ml-4">
                  <li>Your phone breaks</li>
                  <li>You have an unexpected fee</li>
                  <li>Transportation costs more than usual</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FFCFD0]/30 border-2 border-[#FFCFD0] p-5 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg mb-3">Without savings</p>
                  <p className="text-[#1C1C1C] text-lg">You might feel stuck or stressed.</p>
                </div>
                <div className="bg-[#889063]/10 border-2 border-[#889063] p-5 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg mb-3">With savings</p>
                  <p className="text-[#1C1C1C] text-lg">You handle it and move on. The situation is the same, but the experience is completely different.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Not the same as not spending - Stacked cards */}
          <div className="grid md:grid-cols-[300px_1fr] gap-6">
            <div className="bg-[#354024] text-white rounded-xl p-6 flex items-center justify-center">
              <h2 className="text-2xl text-center" style={{ letterSpacing: '-0.1px' }}>
                Saving ≠ Not Spending
              </h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-[#1C1C1C] text-lg mb-4">
                Saving does not mean you stop enjoying your money.
              </p>
              <p className="text-[#1C1C1C] text-lg mb-4">
                It means you decide ahead of time what portion of your money is for:
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-[#889063] text-white p-4 rounded-lg text-center">
                  <p className="font-semibold text-lg">Today</p>
                </div>
                <div className="bg-[#CFBB99] text-[#354024] p-4 rounded-lg text-center">
                  <p className="font-semibold text-lg">The near future</p>
                </div>
                <div className="bg-[#354024] text-white p-4 rounded-lg text-center">
                  <p className="font-semibold text-lg">Unexpected situations</p>
                </div>
              </div>
              <div className="bg-[#E5D7C4] p-4 rounded-lg">
                <p className="text-[#1C1C1C] text-lg text-center">
                  Spending and saving can exist at the same time. One does not cancel out the other.
                </p>
              </div>
            </div>
          </div>

          {/* Small savings matter - Quote style */}
          <div>
            <h2 className="text-3xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Why small savings matter more than you think
            </h2>
            <div className="bg-[#354024] text-white p-8 rounded-xl mb-6 italic text-2xl text-center">
              "I will start saving when I have more money."
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-[#1C1C1C] text-lg mb-4">
                  The problem is that more money does not automatically lead to saving.
                </p>
                <p className="text-[#1C1C1C] text-lg mb-4">
                  Saving works best when it is:
                </p>
                <div className="space-y-3">
                  <div className="bg-[#E5D7C4] p-3 rounded">
                    <p className="text-[#1C1C1C] text-lg">Consistent</p>
                  </div>
                  <div className="bg-[#E5D7C4] p-3 rounded">
                    <p className="text-[#1C1C1C] text-lg">Realistic</p>
                  </div>
                  <div className="bg-[#E5D7C4] p-3 rounded">
                    <p className="text-[#1C1C1C] text-lg">Built into your routine</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-8 flex items-center justify-center">
                <p className="text-2xl text-center" style={{ letterSpacing: '-0.1px' }}>
                  Saving $10 regularly builds a stronger habit than saving $100 once and stopping.
                </p>
              </div>
            </div>
          </div>

          {/* Waiting scenario - Timeline visual */}
          <div className="bg-white rounded-xl p-8 shadow-md border-l-8 border-[#889063]">
            <h3 className="text-2xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Real-life scenario: waiting to save
            </h3>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CFBB99]"></div>
              <div className="mb-6">
                <div className="absolute left-0 w-4 h-4 rounded-full bg-[#354024] -ml-1.5"></div>
                <p className="text-[#1C1C1C] text-lg">
                  You tell yourself you will save later when things feel easier.
                </p>
              </div>
              <div className="mb-6">
                <div className="absolute left-0 w-4 h-4 rounded-full bg-[#354024] -ml-1.5"></div>
                <p className="text-[#1C1C1C] text-lg">
                  Months go by and saving still feels hard.
                </p>
              </div>
              <div>
                <div className="absolute left-0 w-4 h-4 rounded-full bg-[#889063] -ml-1.5"></div>
                <div className="bg-[#CFBB99]/50 p-5 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg font-semibold">
                    Starting small now creates momentum. Momentum matters more than the amount.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What saving gives you - Icon grid */}
          <div>
            <h2 className="text-3xl text-[#354024] mb-6 text-center" style={{ letterSpacing: '-0.1px' }}>
              What saving really gives you
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-8 text-center">
              Saving is not just about the money itself.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-8 text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                <p className="text-2xl">Confidence</p>
              </div>
              <div className="bg-gradient-to-br from-[#CFBB99] to-[#CFBB99]/80 text-[#354024] rounded-xl p-8 text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                <p className="text-2xl">Flexibility</p>
              </div>
              <div className="bg-gradient-to-br from-[#354024] to-[#354024]/80 text-white rounded-xl p-8 text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                <p className="text-2xl">A sense of control</p>
              </div>
            </div>
            <div className="bg-[#E5D7C4] p-6 rounded-lg text-center">
              <p className="text-[#1C1C1C] text-lg font-semibold">
                Even a small amount of savings can change how you feel about money decisions.
              </p>
            </div>
          </div>

          {/* Recap - Horizontal badges */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>Quick recap</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-[#889063]/10 border border-[#889063] px-6 py-4 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg font-semibold">Saving reduces stress</span>
              </div>
              <div className="flex items-center gap-3 bg-[#889063]/10 border border-[#889063] px-6 py-4 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg font-semibold">Saving gives you options</span>
              </div>
              <div className="flex items-center gap-3 bg-[#889063]/10 border border-[#889063] px-6 py-4 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg font-semibold">You do not need a lot to start</span>
              </div>
              <div className="flex items-center gap-3 bg-[#889063]/10 border border-[#889063] px-6 py-4 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg font-semibold">Consistency matters more than amount</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Check Quiz */}
      <section className="px-6 py-12 md:px-12 bg-[#CFBB99]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
            <h3 className="text-xl text-[#1C1C1C] mb-4">
              1. What is one of the biggest benefits of saving?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'It stops you from spending', correct: false },
                { label: 'B', text: 'It gives you more options', correct: true },
                { label: 'C', text: 'It makes budgeting perfect', correct: false },
                { label: 'D', text: 'It guarantees no problems', correct: false }
              ].map((option) => {
                const isSelected = selectedAnswers[1] === option.label;
                const isIncorrect = incorrectAnswers[`1-${option.label}`];
                
                return (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerClick(1, option.label, option.correct)}
                    disabled={selectedAnswers[1] !== undefined}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all text-lg ${
                      isSelected
                        ? 'border-[#889063] bg-[#889063]/10'
                        : isIncorrect
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="font-semibold text-[#1C1C1C]">{option.label})</span> {option.text}
                    {isSelected && (
                      <CheckCircle2 className="inline-block ml-2 w-5 h-5 text-[#889063]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
            <h3 className="text-xl text-[#1C1C1C] mb-4">
              2. Why is starting small with saving effective?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'It feels impressive', correct: false },
                { label: 'B', text: 'It avoids effort', correct: false },
                { label: 'C', text: 'It builds a habit', correct: true },
                { label: 'D', text: 'It replaces budgeting', correct: false }
              ].map((option) => {
                const isSelected = selectedAnswers[2] === option.label;
                const isIncorrect = incorrectAnswers[`2-${option.label}`];
                
                return (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerClick(2, option.label, option.correct)}
                    disabled={selectedAnswers[2] !== undefined}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all text-lg ${
                      isSelected
                        ? 'border-[#889063] bg-[#889063]/10'
                        : isIncorrect
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="font-semibold text-[#1C1C1C]">{option.label})</span> {option.text}
                    {isSelected && (
                      <CheckCircle2 className="inline-block ml-2 w-5 h-5 text-[#889063]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl text-[#1C1C1C] mb-4">
              3. Is saving only for emergencies?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Yes', correct: false },
                { label: 'B', text: 'No, saving can have many purposes', correct: true },
                { label: 'C', text: 'Only for large expenses', correct: false },
                { label: 'D', text: 'Only for the future', correct: false }
              ].map((option) => {
                const isSelected = selectedAnswers[3] === option.label;
                const isIncorrect = incorrectAnswers[`3-${option.label}`];
                
                return (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerClick(3, option.label, option.correct)}
                    disabled={selectedAnswers[3] !== undefined}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all text-lg ${
                      isSelected
                        ? 'border-[#889063] bg-[#889063]/10'
                        : isIncorrect
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="font-semibold text-[#1C1C1C]">{option.label})</span> {option.text}
                    {isSelected && (
                      <CheckCircle2 className="inline-block ml-2 w-5 h-5 text-[#889063]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Action Step */}
      <section className="px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#889063] text-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl mb-4" style={{ letterSpacing: '-0.1px' }}>Action step</h2>
            <p className="text-lg mb-4">
              Think about one reason saving could make your life easier right now.
            </p>
            <p className="text-lg mb-4">
              Write it down.
            </p>
            <p className="text-lg">
              This will help guide your saving goals in the next lesson.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/saving-strategies"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Back to Module
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/saving-strategies/lesson-2"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Short-term vs. Long-term Savings →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}