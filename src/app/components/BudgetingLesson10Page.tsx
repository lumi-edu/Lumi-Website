import { Link } from './RouterLink';
import { ArrowLeft, CheckCircle2, RefreshCw, Calendar, TrendingUp, AlertCircle, Eye, ArrowRight, Repeat } from 'lucide-react';
import { useState, useEffect } from 'react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function BudgetingLesson10Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [incorrectAnswers, setIncorrectAnswers] = useState<{[key: string]: boolean}>({});

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Adjusting Your Budget Over Time
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-70">
            Module: Budgeting Basics • Lesson 10
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#889063] flex items-center justify-center shadow-lg flex-shrink-0">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Budgets are supposed to change
              </h2>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              One of the biggest misconceptions about budgeting is thinking you make one budget and then follow it forever.
            </p>

            <div className="bg-[#FFCFD0]/30 border-l-4 border-[#FFCFD0] p-8 rounded-r-2xl mb-8">
              <p className="text-[#354024] font-semibold text-lg">
                That is not how real life works.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-7 h-7 text-[#889063] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Income changes. Expenses change. Priorities change.</span>
                </div>
                <div className="flex items-center gap-4">
                  <RefreshCw className="w-7 h-7 text-[#889063] flex-shrink-0" />
                  <span className="text-[#354024] font-semibold text-lg">Your budget should change too.</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white p-10 rounded-3xl shadow-xl">
              <p className="text-2xl font-semibold">
                Adjusting your budget is not a failure. It is a sign that you are paying attention.
              </p>
            </div>
          </div>

          {/* Why checking in matters */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 border-2 border-[#CFBB99]">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#354024] flex items-center justify-center shadow-lg flex-shrink-0">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Why checking in matters
              </h2>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              If you never look at your budget again after making it, it slowly stops matching reality.
            </p>

            <div className="bg-white rounded-2xl p-8 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-6">Regular check ins help you:</p>
              <div className="space-y-5">
                <div className="flex items-start gap-5 p-5 bg-[#E5D7C4] rounded-xl">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#354024] font-semibold text-lg">Catch problems early</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-5 bg-[#E5D7C4] rounded-xl">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#354024] font-semibold text-lg">Reduce stress</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-5 bg-[#E5D7C4] rounded-xl">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#354024] font-semibold text-lg">Make better decisions going forward</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/30 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <p className="text-[#354024] text-lg italic font-semibold">
                Think of your budget as something you check in with, not something you obey.
              </p>
            </div>
          </div>

          {/* How often to adjust */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#889063] flex items-center justify-center shadow-lg flex-shrink-0">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                How often should you adjust your budget
              </h2>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              There is no perfect schedule, but here are some good options:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#FFCFD0]">
                <Calendar className="w-10 h-10 text-[#889063] mb-6" />
                <p className="text-[#354024] font-bold text-xl mb-2">Once a week</p>
                <p className="text-[#1C1C1C] text-base">for quick check ins</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#FFCFD0]">
                <Calendar className="w-10 h-10 text-[#889063] mb-6" />
                <p className="text-[#354024] font-bold text-xl mb-2">Once a month</p>
                <p className="text-[#1C1C1C] text-base">for bigger changes</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#FFCFD0]">
                <Calendar className="w-10 h-10 text-[#889063] mb-6" />
                <p className="text-[#354024] font-bold text-xl mb-2">Anytime</p>
                <p className="text-[#1C1C1C] text-base">something important changes</p>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-8 rounded-2xl">
              <p className="text-lg">
                Choose a rhythm that feels manageable.
              </p>
            </div>
          </div>

          {/* Real-life scenario 1 */}
          <div className="bg-gradient-to-br from-[#889063] to-[#CFBB99] rounded-3xl p-10 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <Repeat className="w-10 h-10 text-[#354024]" />
              <h2 className="text-3xl font-bold text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Real-life scenario: a change in income
              </h2>
            </div>
            
            <div className="space-y-5 mb-8">
              <div className="bg-white p-6 rounded-xl flex items-start gap-4 shadow-sm">
                <TrendingUp className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                <span className="text-[#1C1C1C] text-lg">You pick up more hours one month.</span>
              </div>
              <div className="bg-white p-6 rounded-xl flex items-start gap-4 shadow-sm">
                <TrendingUp className="w-7 h-7 text-[#FFCFD0] flex-shrink-0 mt-1 transform rotate-180" />
                <span className="text-[#1C1C1C] text-lg">Then the next month, your schedule slows down.</span>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              If you keep the same budget through both months, one of them will feel stressful.
            </p>

            <div className="bg-[#354024] text-white p-8 rounded-2xl">
              <p className="font-semibold text-xl mb-6">Adjusting your budget lets you:</p>
              <div className="space-y-3 ml-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  <p className="text-lg">Save more during higher income periods</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  <p className="text-lg">Scale back during lower income periods</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  <p className="text-lg">Stay balanced overall</p>
                </div>
              </div>
            </div>
          </div>

          {/* What to look for */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              What to look for when reviewing your budget
            </h2>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <p className="text-[#354024] text-xl font-semibold mb-8">When you review your budget, ask yourself:</p>
              <div className="space-y-5">
                <div className="bg-[#E5D7C4] p-6 rounded-xl">
                  <p className="text-[#1C1C1C] text-lg">Where did I overspend</p>
                </div>
                <div className="bg-[#E5D7C4] p-6 rounded-xl">
                  <p className="text-[#1C1C1C] text-lg">Where did I underspend</p>
                </div>
                <div className="bg-[#E5D7C4] p-6 rounded-xl">
                  <p className="text-[#1C1C1C] text-lg">Did my goals change</p>
                </div>
                <div className="bg-[#E5D7C4] p-6 rounded-xl">
                  <p className="text-[#1C1C1C] text-lg">Does this still feel realistic</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#354024] to-[#889063] text-white p-10 rounded-2xl">
              <p className="text-2xl font-semibold">
                You are looking for patterns, not mistakes.
              </p>
            </div>
          </div>

          {/* Small changes */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 border-2 border-[#CFBB99]">
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Make small changes instead of big resets
            </h2>

            <p className="text-[#1C1C1C] text-lg mb-8">
              If something is not working, you do not need to throw out your entire budget.
            </p>

            <div className="bg-white rounded-2xl p-8 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-6">Try:</p>
              <div className="space-y-5">
                <div className="flex items-center gap-5 p-5 bg-[#889063]/10 border-l-4 border-[#889063] rounded-r-xl">
                  <RefreshCw className="w-7 h-7 text-[#889063] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Increasing or decreasing one category</span>
                </div>
                <div className="flex items-center gap-5 p-5 bg-[#889063]/10 border-l-4 border-[#889063] rounded-r-xl">
                  <ArrowRight className="w-7 h-7 text-[#889063] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Moving money between categories</span>
                </div>
                <div className="flex items-center gap-5 p-5 bg-[#889063]/10 border-l-4 border-[#889063] rounded-r-xl">
                  <TrendingUp className="w-7 h-7 text-[#889063] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Adjusting savings slightly</span>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/30 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <p className="text-[#354024] font-semibold text-lg">
                Small tweaks are easier to stick with than big overhauls.
              </p>
            </div>
          </div>

          {/* Real-life scenario 2 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <h2 className="text-3xl font-bold text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Real-life scenario: adjusting instead of quitting
            </h2>
            
            <div className="bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] p-8 rounded-r-2xl mb-8">
              <p className="text-[#354024] font-semibold text-lg mb-3">The Problem:</p>
              <p className="text-[#1C1C1C] text-lg">You notice your spending category keeps running out.</p>
            </div>

            <div className="bg-[#889063]/10 border-l-4 border-[#889063] p-8 rounded-r-2xl mb-8">
              <p className="text-[#354024] font-semibold text-lg mb-6">Instead of giving up, you:</p>
              <div className="space-y-4 ml-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                  <p className="text-[#1C1C1C] text-lg">Increase that category a little</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                  <p className="text-[#1C1C1C] text-lg">Reduce another category slightly</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#354024] to-[#889063] text-white p-8 rounded-2xl">
              <p className="text-2xl font-semibold">
                That is a successful budget adjustment.
              </p>
            </div>
          </div>

          {/* When to change completely */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              When to change your budget completely
            </h2>

            <p className="text-[#1C1C1C] text-lg mb-8">
              Sometimes bigger changes are needed.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-8">This might happen if:</p>
              <div className="space-y-5">
                <div className="flex items-start gap-5 p-5 bg-[#E5D7C4] rounded-xl">
                  <AlertCircle className="w-7 h-7 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Your income changes significantly</span>
                </div>
                <div className="flex items-start gap-5 p-5 bg-[#E5D7C4] rounded-xl">
                  <AlertCircle className="w-7 h-7 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Your expenses shift long term</span>
                </div>
                <div className="flex items-start gap-5 p-5 bg-[#E5D7C4] rounded-xl">
                  <AlertCircle className="w-7 h-7 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Your priorities change</span>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <p className="text-[#354024] font-semibold text-lg">
                In these cases, starting fresh with a new budget can be helpful.
              </p>
            </div>
          </div>

          {/* Common mistake */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Common mistake: waiting too long to adjust
            </h2>

            <div className="bg-[#FFCFD0]/30 border-2 border-[#FFCFD0] rounded-2xl p-10 mb-8">
              <div className="flex items-start gap-5 mb-6">
                <AlertCircle className="w-10 h-10 text-[#FFCFD0] flex-shrink-0" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 207, 208, 0.6))' }} />
                <div>
                  <p className="text-[#1C1C1C] text-lg mb-4">
                    Some people wait until they feel overwhelmed before changing anything.
                  </p>
                  <p className="text-[#354024] font-semibold text-lg">
                    By then, budgeting feels stressful.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white p-10 rounded-3xl shadow-xl">
              <p className="text-3xl font-bold">
                Small, regular adjustments keep things manageable.
              </p>
            </div>
          </div>

          {/* Quick recap */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Quick recap
            </h2>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10">
              <ul className="space-y-5 text-[#1C1C1C] text-lg">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Budgets should change over time</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Check ins make budgeting easier</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Small adjustments are powerful</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Flexibility leads to consistency</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mini Quiz */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Quick Check
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">Test your understanding (30 seconds).</p>
            
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 1</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What does it mean if you adjust your budget?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) You failed</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) You are doing budgeting wrong</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      selectedAnswers[1] === "C" 
                        ? "border-2 border-[#889063] bg-[#889063]/20 shadow-md" 
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "C", true)}
                  >
                    <p className={selectedAnswers[1] === "C" ? "text-[#354024] font-semibold text-lg" : "text-[#1C1C1C] text-lg"}>
                      C) Your life changed
                    </p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-D']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "D", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">D) You should stop budgeting</p>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 2</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">How often should you review your budget?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Never</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) Only once</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      selectedAnswers[2] === "C" 
                        ? "border-2 border-[#889063] bg-[#889063]/20 shadow-md" 
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "C", true)}
                  >
                    <p className={selectedAnswers[2] === "C" ? "text-[#354024] font-semibold text-lg" : "text-[#1C1C1C] text-lg"}>
                      C) Regularly in a way that works for you
                    </p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-D']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "D", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">D) Every day forever</p>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 3</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What is usually better than starting over?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Ignoring problems</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) Quitting budgeting</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      selectedAnswers[3] === "C" 
                        ? "border-2 border-[#889063] bg-[#889063]/20 shadow-md" 
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "C", true)}
                  >
                    <p className={selectedAnswers[3] === "C" ? "text-[#354024] font-semibold text-lg" : "text-[#1C1C1C] text-lg"}>
                      C) Making small adjustments
                    </p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-D']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "D", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">D) Waiting until next year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Step */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Action Step (Do This Now)
            </h2>
            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-3xl p-10 shadow-xl border-4 border-[#FFCFD0]">
              <p className="text-2xl mb-8 font-semibold">
                Schedule a short budget check in.
              </p>
              <p className="mb-6 text-lg">Choose:</p>
              <ul className="space-y-4 ml-4 mb-8 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  A day of the week or month
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  Five to ten minutes
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  One thing you want to review
                </li>
              </ul>
              <p className="text-lg italic">
                Put it somewhere you will remember.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/budgeting-basics/lesson-9"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/budgeting-basics/lesson-11"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Budgeting Tools and Templates →
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