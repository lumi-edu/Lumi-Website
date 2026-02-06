import { Link } from './RouterLink';
import { ArrowLeft, CheckCircle2, DollarSign, TrendingUp, PiggyBank, Wallet, AlertTriangle, Calculator } from 'lucide-react';
import { useState, useEffect } from 'react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function BudgetingLesson3Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [incorrectAnswers, setIncorrectAnswers] = useState<{[key: string]: boolean}>({});

  // Scroll to top on component mount
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
            to="/budgeting-basics" 
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Budgeting Basics
          </Link>
        </div>
      </div>

      {/* Lesson Header */}
      <section className="px-6 pb-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.1px' }}>
            Understanding Your Income
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-70">
            Module: Budgeting Basics • Lesson 3
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Introduction with side accent */}
          <div className="grid md:grid-cols-[1fr_3fr] gap-6">
            <div className="bg-[#354024] p-6 rounded-2xl flex items-center justify-center">
              <DollarSign className="w-16 h-16 text-[#FFCFD0]" />
            </div>
            <div>
              <h2 className="text-3xl text-[#354024] mb-4" style={{ letterSpacing: '-0.1px' }}>
                Let's talk about where your money actually comes from
              </h2>
              <p className="text-[#1C1C1C] text-lg mb-4">
                Before you can plan how to spend or save money, there's one question you have to answer honestly:
              </p>
              <div className="bg-[#FFCFD0]/30 border-l-4 border-[#FFCFD0] p-6 rounded-r-xl mb-4">
                <p className="text-xl text-[#354024] font-semibold">
                  How much money do I actually have coming in?
                </p>
              </div>
              <p className="text-[#1C1C1C] text-lg">
                A lot of budgeting frustration comes from guessing this part or planning based on a "best-case" paycheck that doesn't always show up.
              </p>
            </div>
          </div>

          {/* What income really means */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              What income really means
            </h2>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10 mb-6">
              <p className="text-xl text-[#1C1C1C] mb-6">
                Income is <strong className="text-[#354024]">any money you receive</strong>.
              </p>
              <p className="text-[#1C1C1C] mb-4">That could be:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#CFBB99]/30 p-4 rounded-xl">
                  <DollarSign className="w-5 h-5 text-[#354024]" />
                  <span className="text-[#1C1C1C]">Pay from a job</span>
                </div>
                <div className="flex items-center gap-3 bg-[#CFBB99]/30 p-4 rounded-xl">
                  <Wallet className="w-5 h-5 text-[#354024]" />
                  <span className="text-[#1C1C1C]">Allowance</span>
                </div>
                <div className="flex items-center gap-3 bg-[#CFBB99]/30 p-4 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-[#354024]" />
                  <span className="text-[#1C1C1C]">Babysitting, tutoring, or helping out</span>
                </div>
                <div className="flex items-center gap-3 bg-[#CFBB99]/30 p-4 rounded-xl">
                  <PiggyBank className="w-5 h-5 text-[#354024]" />
                  <span className="text-[#1C1C1C]">Money you get occasionally (like gifts)</span>
                </div>
              </div>
            </div>
            <div className="bg-[#889063]/30 border-l-4 border-[#889063] p-6 rounded-r-xl">
              <p className="text-[#1C1C1C] text-lg">
                <strong className="text-[#354024]">The important thing?</strong><br />
                Not all income is predictable - and that's completely normal.
              </p>
            </div>
          </div>

          {/* Real-life scenario: your hours change */}
          <div className="bg-[#CFBB99]/20 p-10 rounded-2xl">
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Real-life scenario: your hours change
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm mb-6 border border-[#354024]/10">
              <p className="text-[#1C1C1C] text-lg mb-6">
                Let's say you earn $15 an hour.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FFCFD0]/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#354024] mb-3">Some weeks:</h3>
                  <p className="text-[#1C1C1C]">You work a lot and earn more</p>
                </div>
                <div className="bg-[#889063]/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#354024] mb-3">Other weeks:</h3>
                  <p className="text-[#1C1C1C]">Your schedule is lighter and your paycheck is smaller</p>
                </div>
              </div>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-6">
              Even though your hourly pay stays the same, your income doesn't.
            </p>
            <div className="bg-[#354024] text-white p-8 rounded-2xl shadow-md">
              <p className="text-xl font-semibold">
                If you build a budget assuming every paycheck will be your biggest one, you'll probably end up stressed when a smaller one hits. Planning around a realistic number makes everything easier.
              </p>
            </div>
          </div>

          {/* Fixed vs. changing income */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Fixed vs. changing income
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#889063] rounded-full p-3">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>Fixed income</h3>
                </div>
                <p className="text-[#1C1C1C] text-lg mb-6">
                  This is money that stays about the same each time.
                </p>
                <p className="text-[#1C1C1C] font-semibold mb-4">Examples:</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[#889063]">•</span>
                    <span className="text-[#1C1C1C]">A set allowance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#889063]">•</span>
                    <span className="text-[#1C1C1C]">A consistent weekly schedule</span>
                  </div>
                </div>
                <div className="bg-[#CFBB99]/40 p-5 rounded-xl border-l-4 border-[#889063]">
                  <p className="text-[#1C1C1C]">
                    This kind of income is easier to plan around - but not everyone has it.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#FFCFD0] rounded-full p-3">
                    <AlertTriangle className="w-6 h-6 text-[#354024]" />
                  </div>
                  <h3 className="text-3xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>Changing income</h3>
                </div>
                <p className="text-[#1C1C1C] text-lg mb-6">
                  This is money that goes up and down.
                </p>
                <p className="text-[#1C1C1C] font-semibold mb-4">Examples:</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[#FFCFD0]">•</span>
                    <span className="text-[#1C1C1C]">Jobs with flexible hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FFCFD0]">•</span>
                    <span className="text-[#1C1C1C]">Tips or commissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FFCFD0]">•</span>
                    <span className="text-[#1C1C1C]">Freelance or side work</span>
                  </div>
                </div>
                <div className="bg-[#354024] text-white p-5 rounded-xl shadow-sm">
                  <p>
                    If this sounds like you, you're not doing anything wrong - it just means your budget needs to be a little smarter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real-life scenario: planning with ups and downs */}
          <div className="bg-gradient-to-br from-[#889063]/30 to-[#CFBB99]/20 p-10 rounded-2xl">
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Real-life scenario: planning with ups and downs
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm mb-6 border border-[#354024]/10">
              <p className="text-[#1C1C1C] text-lg mb-6">Imagine this:</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-[#CFBB99]/30 rounded-xl">
                  <span className="text-[#1C1C1C] font-semibold">One week you earn:</span>
                  <span className="text-[#354024] font-bold text-2xl">$180</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#FFCFD0]/30 rounded-xl">
                  <span className="text-[#1C1C1C] font-semibold">The next week:</span>
                  <span className="text-[#354024] font-bold text-2xl">$90</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#889063]/30 rounded-xl">
                  <span className="text-[#1C1C1C] font-semibold">Then:</span>
                  <span className="text-[#354024] font-bold text-2xl">$140</span>
                </div>
              </div>
              
              <p className="text-[#1C1C1C] text-lg mb-4">Instead of planning your spending around the highest number, a better move is to:</p>
              <div className="bg-[#889063]/20 p-6 rounded-xl border-l-4 border-[#889063]">
                <ul className="space-y-3 text-[#1C1C1C]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#889063]" />
                    <span>Look at your lowest or average week</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#889063]" />
                    <span>Build your budget from there</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-[#1C1C1C] text-lg font-semibold">
              That way, you're not caught off guard when income dips.
            </p>
          </div>

          {/* One thing people forget: taxes */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              One thing people forget: taxes
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-6">
              This part catches a lot of people off guard.
            </p>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Calculator className="w-6 h-6 text-[#889063]" />
                    <h3 className="text-2xl font-semibold text-[#354024]">Gross income</h3>
                  </div>
                  <p className="text-[#1C1C1C] text-lg">= what you earn before anything is taken out</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Wallet className="w-6 h-6 text-[#354024]" />
                    <h3 className="text-2xl font-semibold text-[#354024]">Net income</h3>
                  </div>
                  <p className="text-[#1C1C1C] text-lg">= what actually hits your account</p>
                </div>
              </div>
            </div>
            <div className="bg-[#CFBB99]/40 p-8 rounded-2xl mb-6 border-l-4 border-[#889063]">
              <p className="text-[#1C1C1C] text-lg">
                If you earn $300 but only receive $260, your budget should be based on <strong className="text-[#354024]">$260</strong>, not $300.
              </p>
            </div>
            <div className="bg-[#354024] text-white p-8 rounded-2xl shadow-md">
              <p className="text-xl font-semibold">
                Always plan with what you <strong>actually get</strong> - not what you expected to get.
              </p>
            </div>
          </div>

          {/* Common income mistakes */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Common income mistakes (easy to make)
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-6">
              Try to avoid these:
            </p>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10 mb-6">
              <ul className="space-y-5 text-[#1C1C1C] text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCFD0] text-2xl flex-shrink-0">×</span>
                  <span>Spending money before you receive it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCFD0] text-2xl flex-shrink-0">×</span>
                  <span>Assuming income will always be the same</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCFD0] text-2xl flex-shrink-0">×</span>
                  <span>Forgetting about taxes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCFD0] text-2xl flex-shrink-0">×</span>
                  <span>Planning around your "best" paycheck instead of a realistic one</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#889063]/30 p-8 rounded-2xl border-l-4 border-[#889063]">
              <p className="text-[#1C1C1C] text-lg font-semibold">
                None of these mean you're bad with money - they just make budgeting harder than it needs to be.
              </p>
            </div>
          </div>

          {/* Quick recap */}
          <div className="bg-[#354024] text-white p-10 rounded-2xl shadow-md">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.1px' }}>
              Quick recap
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
                <span className="text-xl">Income is the money you actually receive</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
                <span className="text-xl">It doesn't have to be the same every time</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
                <span className="text-xl">Planning conservatively reduces stress</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
                <span className="text-xl">Net (take-home) income matters more than gross</span>
              </div>
            </div>
          </div>

          {/* Mini Quiz */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Quick Check
            </h2>
            
            <div className="space-y-8">
              {/* Question 1 */}
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 1</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What counts as income?</p>
                <div className="space-y-4">
                  {[
                    { letter: 'A', text: 'Money you plan to earn', correct: false },
                    { letter: 'B', text: 'Money you actually receive', correct: true },
                    { letter: 'C', text: 'Only money in savings', correct: false },
                    { letter: 'D', text: 'Money after budgeting', correct: false }
                  ].map((option) => {
                    const isSelected = selectedAnswers[1] === option.letter;
                    const isIncorrect = incorrectAnswers[`1-${option.letter}`];
                    
                    return (
                      <button
                        key={option.letter}
                        onClick={() => handleAnswerClick(1, option.letter, option.correct)}
                        disabled={selectedAnswers[1] !== undefined}
                        className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                          isSelected
                            ? 'border-[#889063] bg-[#CFBB99]/30'
                            : isIncorrect
                            ? 'border-red-400 bg-red-50'
                            : 'border-[#354024]/10 hover:border-[#889063] hover:bg-[#E5D7C4]'
                        } ${selectedAnswers[1] !== undefined ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-[#354024] text-lg">{option.letter})</span>
                          <span className="text-[#1C1C1C] text-lg">{option.text}</span>
                          {isSelected && (
                            <CheckCircle2 className="w-6 h-6 text-[#889063] ml-auto" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {selectedAnswers[1] && (
                  <div className="mt-6 p-6 bg-[#CFBB99]/40 rounded-xl border-l-4 border-[#889063]">
                    <p className="text-[#1C1C1C] text-lg">
                      <strong className="text-[#354024]">Correct!</strong> Income is money you actually receive, not what you plan or hope to earn.
                    </p>
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 2</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What's a smart way to budget with changing income?</p>
                <div className="space-y-4">
                  {[
                    { letter: 'A', text: 'Use your highest paycheck', correct: false },
                    { letter: 'B', text: 'Guess each month', correct: false },
                    { letter: 'C', text: 'Use your lowest or average income', correct: true },
                    { letter: 'D', text: 'Ignore income changes', correct: false }
                  ].map((option) => {
                    const isSelected = selectedAnswers[2] === option.letter;
                    const isIncorrect = incorrectAnswers[`2-${option.letter}`];
                    
                    return (
                      <button
                        key={option.letter}
                        onClick={() => handleAnswerClick(2, option.letter, option.correct)}
                        disabled={selectedAnswers[2] !== undefined}
                        className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                          isSelected
                            ? 'border-[#889063] bg-[#CFBB99]/30'
                            : isIncorrect
                            ? 'border-red-400 bg-red-50'
                            : 'border-[#354024]/10 hover:border-[#889063] hover:bg-[#E5D7C4]'
                        } ${selectedAnswers[2] !== undefined ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-[#354024] text-lg">{option.letter})</span>
                          <span className="text-[#1C1C1C] text-lg">{option.text}</span>
                          {isSelected && (
                            <CheckCircle2 className="w-6 h-6 text-[#889063] ml-auto" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {selectedAnswers[2] && (
                  <div className="mt-6 p-6 bg-[#CFBB99]/40 rounded-xl border-l-4 border-[#889063]">
                    <p className="text-[#1C1C1C] text-lg">
                      <strong className="text-[#354024]">Correct!</strong> Planning with your lowest or average income helps you avoid stress when paychecks vary.
                    </p>
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 3</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">Why should you use net income when budgeting?</p>
                <div className="space-y-4">
                  {[
                    { letter: 'A', text: 'It sounds better', correct: false },
                    { letter: 'B', text: 'It includes bonuses', correct: false },
                    { letter: 'C', text: "It's what you actually have to spend", correct: true },
                    { letter: 'D', text: 'It ignores taxes', correct: false }
                  ].map((option) => {
                    const isSelected = selectedAnswers[3] === option.letter;
                    const isIncorrect = incorrectAnswers[`3-${option.letter}`];
                    
                    return (
                      <button
                        key={option.letter}
                        onClick={() => handleAnswerClick(3, option.letter, option.correct)}
                        disabled={selectedAnswers[3] !== undefined}
                        className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                          isSelected
                            ? 'border-[#889063] bg-[#CFBB99]/30'
                            : isIncorrect
                            ? 'border-red-400 bg-red-50'
                            : 'border-[#354024]/10 hover:border-[#889063] hover:bg-[#E5D7C4]'
                        } ${selectedAnswers[3] !== undefined ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-[#354024] text-lg">{option.letter})</span>
                          <span className="text-[#1C1C1C] text-lg">{option.text}</span>
                          {isSelected && (
                            <CheckCircle2 className="w-6 h-6 text-[#889063] ml-auto" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {selectedAnswers[3] && (
                  <div className="mt-6 p-6 bg-[#CFBB99]/40 rounded-xl border-l-4 border-[#889063]">
                    <p className="text-[#1C1C1C] text-lg">
                      <strong className="text-[#354024]">Correct!</strong> Net income is what you actually have available to spend after taxes and deductions.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Step */}
          <div className="bg-[#354024] text-white p-10 rounded-2xl shadow-md">
            <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.1px' }}>
              Action Step (Do This Now)
            </h2>
            <p className="text-xl mb-6">
              Take a minute to:
            </p>
            <div className="bg-white/10 rounded-xl p-8 mb-6">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Write down where your money usually comes from</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Estimate how much you earn in a lower or average week</span>
                </li>
              </ul>
            </div>
            <p className="text-lg italic opacity-90">
              You don't need exact numbers - just something realistic.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/budgeting-basics/lesson-2"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-2 text-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#1C1C1C] text-lg mb-2 opacity-70">Next Lesson</p>
              <Link 
                to="/budgeting-basics/lesson-4"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-[#FFCFD0] px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-semibold text-lg"
              >
                Tracking Your Spending →
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