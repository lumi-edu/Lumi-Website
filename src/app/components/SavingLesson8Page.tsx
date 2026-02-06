import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, Shield, RefreshCw, TrendingDown, TrendingUp, Heart, RotateCcw, AlertTriangle, Flag } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function SavingLesson8Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [incorrectAnswers, setIncorrectAnswers] = useState<{[key: string]: boolean}>({});

  const handleAnswerClick = (questionNum: number, answer: string, isCorrect: boolean) => {
    if (isCorrect) {
      setSelectedAnswers(prev => ({...prev, [questionNum]: answer}));
      const keys = Object.keys(incorrectAnswers).filter(key => !key.startsWith(`${questionNum}-`));
      const newIncorrect: {[key: string]: boolean} = {};
      keys.forEach(key => newIncorrect[key] = true);
      setIncorrectAnswers(newIncorrect);
    } else {
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
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Saving Strategies
          </Link>
        </div>
      </div>

      {/* Lesson Header */}
      <section className="px-6 pb-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 flex items-center gap-4 text-lg text-[#1C1C1C] opacity-70">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>6–8 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              <span>Beginner</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
            What to Do When You Use Your Savings
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Saving Strategies • Lesson 8
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Opening Statement with Shield */}
          <div className="bg-gradient-to-br from-[#889063] to-[#354024] text-white rounded-lg p-8 shadow-md">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                  <Shield className="w-12 h-12 text-[#889063]" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                  Using savings is normal and expected
                </h2>
                <p className="text-xl mb-4">
                  Savings are not meant to sit untouched forever. They exist to be used when needed.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-lg">Savings are a tool for handling life's unexpected moments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-lg">Using them does not mean you failed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-lg">It means the system worked</span>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-6 mt-6 border border-white/30">
                  <p className="text-2xl font-bold">
                    Savings are protection, not failure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why People Feel Bad */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Why people feel bad after using savings
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">It usually feels discouraging because:</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4 p-5 bg-[#FFCFD0]/50 rounded-lg border-l-4 border-[#FFCFD0]">
                <TrendingDown className="w-6 h-6 text-[#354024] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#1C1C1C] font-semibold mb-1 text-lg">The balance goes down</p>
                  <p className="text-[#1C1C1C] text-lg opacity-70">Feels like going backward</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#FFCFD0]/50 rounded-lg border-l-4 border-[#FFCFD0]">
                <Heart className="w-6 h-6 text-[#354024] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#1C1C1C] font-semibold mb-1 text-lg">It took effort to build it</p>
                  <p className="text-[#1C1C1C] text-lg opacity-70">Attachment to the progress made</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#FFCFD0]/50 rounded-lg border-l-4 border-[#FFCFD0]">
                <RotateCcw className="w-6 h-6 text-[#354024] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#1C1C1C] font-semibold mb-1 text-lg">Starting over feels frustrating</p>
                  <p className="text-[#1C1C1C] text-lg opacity-70">Rebuilding seems overwhelming</p>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/20 border-2 border-[#889063] p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl">
                Those feelings are completely normal, but they should not stop you from continuing.
              </p>
            </div>
          </div>

          {/* Emergency Scenario */}
          <div>
            <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Real-life scenario: emergency happens
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Without Savings */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border-2 border-[#FFCFD0]">
                <div className="bg-[#FFCFD0]/50 p-4 border-b-2 border-[#FFCFD0]">
                  <p className="font-bold text-[#1C1C1C] text-lg">Without Savings</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <AlertTriangle className="w-16 h-16 text-[#354024]" />
                  </div>
                  <p className="text-[#1C1C1C] text-center text-lg">
                    Stress, panic, and uncertainty about how to handle the situation
                  </p>
                </div>
              </div>

              {/* With Savings */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border-2 border-[#889063]">
                <div className="bg-[#889063] p-4 border-b-2 border-[#889063]">
                  <p className="font-bold text-white text-lg">With Savings</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Shield className="w-16 h-16 text-[#889063]" />
                  </div>
                  <p className="text-[#1C1C1C] text-center text-lg">
                    Calm, prepared, and able to handle it confidently
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-6 rounded-lg text-center">
              <p className="text-xl mb-2">
                Having savings available is exactly why you saved.
              </p>
              <p className="text-2xl font-semibold">
                Using them is success, not failure.
              </p>
            </div>
          </div>

          {/* Mindset Shift - Side by Side */}
          <div className="bg-gradient-to-r from-[#CFBB99] to-[#E5D7C4] rounded-lg p-8">
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              The right mindset after using savings
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Wrong Mindset */}
              <div>
                <div className="bg-white/50 rounded-lg p-4 mb-3 text-center">
                  <p className="text-lg font-semibold text-[#1C1C1C] opacity-70">Instead of thinking:</p>
                </div>
                <div className="bg-[#FFCFD0] border-2 border-[#FFCFD0] rounded-lg p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#354024] flex items-center justify-center">
                      <span className="text-white font-bold text-xl">×</span>
                    </div>
                  </div>
                  <p className="text-[#1C1C1C] text-center text-xl font-semibold">
                    "I lost my savings"
                  </p>
                </div>
              </div>

              {/* Right Mindset */}
              <div>
                <div className="bg-white/50 rounded-lg p-4 mb-3 text-center">
                  <p className="text-lg font-semibold text-[#1C1C1C] opacity-70">Think:</p>
                </div>
                <div className="bg-[#889063] border-2 border-[#889063] rounded-lg p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-[#889063]" />
                    </div>
                  </div>
                  <p className="text-white text-center text-xl font-semibold">
                    "My savings did their job"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Steps After Using Savings */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              What to do after using savings
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-8">Follow these steps to rebuild confidently:</p>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center font-bold flex-shrink-0 text-xl">
                  1
                </div>
                <div className="flex-1 bg-[#E5D7C4] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">
                    Acknowledge what happened
                  </h3>
                  <p className="text-[#1C1C1C] text-lg">
                    Using savings was necessary. You handled the situation responsibly.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center font-bold flex-shrink-0 text-xl">
                  2
                </div>
                <div className="flex-1 bg-[#E5D7C4] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">
                    Start rebuilding slowly
                  </h3>
                  <p className="text-[#1C1C1C] text-lg">
                    Even saving small amounts consistently will rebuild your cushion over time.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center font-bold flex-shrink-0 text-xl">
                  3
                </div>
                <div className="flex-1 bg-[#E5D7C4] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">
                    Celebrate that you had it
                  </h3>
                  <p className="text-[#1C1C1C] text-lg">
                    Many people do not have savings to use. You prepared, and that preparation helped you.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center font-bold flex-shrink-0 text-xl">
                  4
                </div>
                <div className="flex-1 bg-[#E5D7C4] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">
                    Keep going without guilt
                  </h3>
                  <p className="text-[#1C1C1C] text-lg">
                    Using savings is not failure. It is exactly why you built them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rebuilding Progress */}
          <div className="border-2 border-[#889063] rounded-lg p-8 bg-white">
            <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Real-life scenario: rebuilding after use
            </h3>
            <p className="text-[#1C1C1C] text-xl mb-6">
              You used $300 from your emergency fund for an unexpected expense.
            </p>
            
            <div className="bg-[#889063]/10 rounded-lg p-6 mb-6">
              <p className="text-[#1C1C1C] font-semibold mb-4 text-xl">Your rebuilding plan:</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#1C1C1C] text-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#889063]" />
                  <span>Save $25 per week</span>
                </div>
                <div className="flex items-center gap-3 text-[#1C1C1C] text-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#889063]" />
                  <span>In 3 months, you rebuild the full $300</span>
                </div>
                <div className="flex items-center gap-3 text-[#1C1C1C] text-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#889063]" />
                  <span>Continue saving beyond to grow the fund further</span>
                </div>
              </div>
            </div>

            <div className="bg-[#889063] text-white p-6 rounded-lg text-center">
              <p className="text-2xl font-semibold">
                Small, consistent steps rebuild savings.
              </p>
            </div>
          </div>

          {/* Avoiding Common Mistakes */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Avoid these common mistakes after using savings
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#354024] font-bold text-lg">×</span>
                  </div>
                  <p className="text-[#1C1C1C] text-lg">Feeling ashamed or guilty</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#354024] font-bold text-lg">×</span>
                  </div>
                  <p className="text-[#1C1C1C] text-lg">Stopping the habit completely</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#354024] font-bold text-lg">×</span>
                  </div>
                  <p className="text-[#1C1C1C] text-lg">Waiting too long to restart</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#354024] font-bold text-lg">×</span>
                  </div>
                  <p className="text-[#1C1C1C] text-lg">Expecting immediate recovery</p>
                </div>
              </div>
            </div>

            <div className="bg-[#CFBB99] p-6 rounded-lg text-center">
              <p className="text-[#1C1C1C] text-2xl font-semibold">
                Rebuilding takes time, but consistency wins.
              </p>
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-8">
            <h2 className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Using savings is not failure</span>
              </div>
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Savings did their job when you needed them</span>
              </div>
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Rebuild slowly and without guilt</span>
              </div>
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Keep going consistently</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Check Quiz */}
      <section className="px-6 py-12 md:px-12 bg-[#CFBB99]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
            <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-4">
              1. What does it mean when you use your savings?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'You failed', correct: false },
                { label: 'B', text: 'Savings did their job', correct: true },
                { label: 'C', text: 'You should stop saving', correct: false },
                { label: 'D', text: 'You made a mistake', correct: false }
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
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/50 opacity-50'
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
            <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-4">
              2. What should you do after using savings?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Stop saving', correct: false },
                { label: 'B', text: 'Feel ashamed', correct: false },
                { label: 'C', text: 'Start rebuilding slowly', correct: true },
                { label: 'D', text: 'Wait a long time', correct: false }
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
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/50 opacity-50'
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
            <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-4">
              3. Why are savings important?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'To never use them', correct: false },
                { label: 'B', text: 'To handle unexpected situations', correct: true },
                { label: 'C', text: 'To avoid planning', correct: false },
                { label: 'D', text: 'To replace income', correct: false }
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
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/50 opacity-50'
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
          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-[#889063]">
            <div className="flex items-start gap-4 mb-6">
              <Flag className="w-12 h-12 text-[#889063] flex-shrink-0" />
              <div>
                <h2 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Action step</h2>
                <p className="text-[#1C1C1C] text-xl mb-6">
                  If you have used savings recently, write down a small rebuilding goal to restart this week.
                </p>
                <p className="text-[#1C1C1C] text-xl">
                  Even saving $5 or $10 is a step forward.
                </p>
              </div>
            </div>
            
            {/* Example Rebuilding Tracker */}
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <p className="text-[#1C1C1C] font-semibold mb-4 text-xl">Example rebuilding plan:</p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                  <span className="text-[#1C1C1C] text-lg">This week I will save:</span>
                  <span className="text-[#1C1C1C] opacity-50 text-lg">$ _____</span>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                  <span className="text-[#1C1C1C] text-lg">Goal to rebuild:</span>
                  <span className="text-[#1C1C1C] opacity-50 text-lg">$ _____</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/saving-strategies/lesson-7"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Congratulations!</p>
              <Link 
                to="/saving-strategies"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Back to Module Overview
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