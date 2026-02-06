import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, Shield, DollarSign, AlertTriangle, Wallet } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function SavingLesson3Page() {
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
            Building an Emergency Fund
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Saving Strategies • Lesson 3
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Intro with Shield Icon */}
          <div className="flex items-start gap-6 bg-white rounded-lg p-8 shadow-md">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-[#889063] text-white flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl text-[#354024] mb-4" style={{ letterSpacing: '-0.89px' }}>
                An emergency fund is about peace of mind
              </h2>
              <p className="text-[#1C1C1C] text-xl mb-3">
                An emergency fund is not about expecting bad things to happen.
              </p>
              <p className="text-[#1C1C1C] text-xl mb-3">
                It is about being prepared so unexpected things do not completely throw off your life.
              </p>
              <div className="bg-[#889063]/10 p-4 rounded-lg mt-4">
                <p className="text-[#354024] text-xl">
                  When you have emergency savings, problems feel manageable instead of overwhelming.
                </p>
              </div>
            </div>
          </div>

          {/* What it is */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              What an emergency fund actually is
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">
              An emergency fund is money set aside for unexpected expenses.
            </p>
            
            <div className="bg-[#889063]/20 rounded-lg p-6 mb-6">
              <p className="text-[#354024] text-xl mb-4">This money is for things like:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-[#1C1C1C] text-lg">
                  <div className="w-2 h-2 rounded-full bg-[#354024]"></div>
                  <span>A broken phone or laptop</span>
                </div>
                <div className="flex items-center gap-2 text-[#1C1C1C] text-lg">
                  <div className="w-2 h-2 rounded-full bg-[#354024]"></div>
                  <span>Transportation issues</span>
                </div>
                <div className="flex items-center gap-2 text-[#1C1C1C] text-lg">
                  <div className="w-2 h-2 rounded-full bg-[#354024]"></div>
                  <span>Unexpected fees or bills</span>
                </div>
                <div className="flex items-center gap-2 text-[#1C1C1C] text-lg">
                  <div className="w-2 h-2 rounded-full bg-[#354024]"></div>
                  <span>Anything important you did not plan for</span>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-6 rounded-lg">
              <p className="text-xl">
                It is <strong>not</strong> money for planned purchases, trips, or everyday spending.
              </p>
            </div>
          </div>

          {/* Comparison Scenario */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#354024] text-white p-6">
              <h3 className="text-3xl mb-2" style={{ letterSpacing: '-0.89px' }}>
                Real-life scenario: same problem, different outcomes
              </h3>
              <p className="text-lg opacity-90">
                Your phone breaks. You need to replace it.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 divide-x divide-[#354024]/10">
              {/* Without */}
              <div className="p-6 bg-[#FFCFD0]/30">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-[#354024]" />
                  <h4 className="text-xl text-[#354024]">Without an emergency fund:</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                    <span className="text-[#354024] font-bold">×</span>
                    <span>You feel stressed</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                    <span className="text-[#354024] font-bold">×</span>
                    <span>You might delay fixing the problem</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                    <span className="text-[#354024] font-bold">×</span>
                    <span>You may need to rely on someone else</span>
                  </li>
                </ul>
              </div>

              {/* With */}
              <div className="p-6 bg-[#889063]/10">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                  <h4 className="text-xl text-[#354024]">With an emergency fund:</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                    <span>You handle it</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                    <span>You move on</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                    <span>Your budget stays mostly intact</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-[#889063]/20">
              <p className="text-[#354024] text-center text-xl">
                The situation is the same. The experience is completely different.
              </p>
            </div>
          </div>

          {/* How much to save */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              How much should you save for emergencies
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">
              A lot of people think emergency funds have to be huge to matter.
            </p>
            <p className="text-[#1C1C1C] text-xl mb-6">
              They do not.
            </p>
            
            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-8 mb-6 shadow-lg">
              <p className="text-xl mb-4">A good starting goal is:</p>
              <p className="text-3xl font-semibold mb-6">Enough to cover one small emergency</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">$100</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">$250</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Wallet className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">One month of basic expenses</p>
                </div>
              </div>
            </div>

            <div className="bg-[#CFBB99] p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl">
                Start where you can. You can always build up over time.
              </p>
            </div>
          </div>

          {/* Why starting small works */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Why starting small actually works
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">
              Saving for emergencies can feel boring because you hope you never need the money.
            </p>
            <p className="text-[#1C1C1C] text-xl mb-6">
              That is why starting small helps.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-[#889063]/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#1C1C1C] text-lg font-semibold">Feel achievable</p>
                  <p className="text-[#1C1C1C] text-lg opacity-70">Small goals are easier to reach</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#889063]/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#1C1C1C] text-lg font-semibold">Build confidence</p>
                  <p className="text-[#1C1C1C] text-lg opacity-70">Success creates motivation</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#889063]/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#1C1C1C] text-lg font-semibold">Create momentum</p>
                  <p className="text-[#1C1C1C] text-lg opacity-70">Once you start, continuing feels easier</p>
                </div>
              </div>
            </div>
          </div>

          {/* Where to keep it */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Where to keep emergency savings
            </h2>
            
            <div className="bg-[#354024] text-white rounded-lg p-6 mb-6">
              <p className="text-xl mb-4">Emergency savings should be:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-semibold">Easy to access</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-semibold">Separate from everyday spending</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-semibold">Not locked away</p>
                </div>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-xl">
              A savings account works well because it keeps the money available without making it too tempting to spend.
            </p>
          </div>

          {/* Separation scenario */}
          <div className="border-l-4 border-[#889063] bg-[#889063]/10 rounded-r-lg p-6">
            <h3 className="text-2xl text-[#354024] mb-4" style={{ letterSpacing: '-0.89px' }}>
              Real-life scenario: keeping savings separate
            </h3>
            <p className="text-[#1C1C1C] text-xl mb-4">
              If emergency money sits in the same place as spending money, it is easy to use it without thinking.
            </p>
            <p className="text-[#1C1C1C] text-xl mb-4">Keeping it separate helps you:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span>Protect the money</span>
              </li>
              <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span>Use it only when needed</span>
              </li>
              <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span>Feel clearer about your finances</span>
              </li>
            </ul>
            <p className="text-[#1C1C1C] text-xl italic">
              Out of sight can be helpful here.
            </p>
          </div>

          {/* When to use it */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              When it is okay to use your emergency fund
            </h2>
            <div className="bg-[#889063]/10 p-6 rounded-lg mb-6">
              <p className="text-[#354024] text-xl font-semibold">
                Using emergency savings does not mean you failed.
              </p>
            </div>
            <p className="text-[#1C1C1C] text-xl mb-6">
              That money exists to be used when something unexpected happens.
            </p>
            <div className="bg-[#CFBB99] p-6 rounded-lg mb-6">
              <p className="text-[#1C1C1C] text-xl mb-3">If you use it:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                  <span className="font-bold">1.</span>
                  <span>Do not feel guilty</span>
                </li>
                <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                  <span className="font-bold">2.</span>
                  <span>Focus on solving the problem</span>
                </li>
                <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                  <span className="font-bold">3.</span>
                  <span>Make a plan to rebuild when you can</span>
                </li>
              </ul>
            </div>
            <p className="text-[#354024] text-xl font-semibold">
              Using emergency savings for an emergency is success, not failure.
            </p>
          </div>

          {/* Common mistakes */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Common emergency fund mistakes
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">These are very common.</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#FFCFD0]">
                <p className="text-[#1C1C1C] text-lg">Waiting for the perfect time to start</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#FFCFD0]">
                <p className="text-[#1C1C1C] text-lg">Thinking the amount has to be large</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#FFCFD0]">
                <p className="text-[#1C1C1C] text-lg">Using it for non emergencies</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#FFCFD0]">
                <p className="text-[#1C1C1C] text-lg">Feeling discouraged after using it</p>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-6 rounded-lg">
              <p className="text-xl">
                Emergency funds are meant to change over time.
              </p>
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-[#889063] text-white rounded-lg p-8">
            <h2 className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Emergency funds reduce stress</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">They are for unexpected expenses only</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Small amounts still matter</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Using them when needed is the point</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Check Quiz */}
      <section className="px-6 py-12 md:px-12 bg-[#889063]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
            <h3 className="text-2xl text-[#1C1C1C] mb-4">
              1. What is an emergency fund for?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Planned purchases', correct: false },
                { label: 'B', text: 'Fun spending', correct: false },
                { label: 'C', text: 'Unexpected expenses', correct: true },
                { label: 'D', text: 'Long term investing', correct: false }
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
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/30 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="text-[#354024]">{option.label})</span> {option.text}
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
            <h3 className="text-2xl text-[#1C1C1C] mb-4">
              2. What is a good way to start an emergency fund?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Waiting until income increases', correct: false },
                { label: 'B', text: 'Saving a large amount at once', correct: false },
                { label: 'C', text: 'Starting with a small realistic goal', correct: true },
                { label: 'D', text: 'Ignoring it', correct: false }
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
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/30 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="text-[#354024]">{option.label})</span> {option.text}
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
            <h3 className="text-2xl text-[#1C1C1C] mb-4">
              3. What should you do if you use your emergency fund?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Feel guilty', correct: false },
                { label: 'B', text: 'Quit saving', correct: false },
                { label: 'C', text: 'Rebuild it when you can', correct: true },
                { label: 'D', text: 'Never use it again', correct: false }
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
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/30 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="text-[#354024]">{option.label})</span> {option.text}
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
          <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl mb-4">Action step</h2>
            <p className="mb-6">
              Choose a small emergency savings goal.
            </p>
            <p className="mb-3">Write down:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Your starting target</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Where you will keep the money</span>
              </li>
            </ul>
            <p className="italic">
              Focus on starting, not finishing.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/saving-strategies/lesson-2"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/saving-strategies/lesson-4"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Saving on Any Income →
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