import { Link } from './RouterLink';
import { ArrowLeft, CheckCircle2, TrendingDown, TrendingUp, AlertTriangle, Shield, Zap, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import lumiLogo from '../assets/lumilogo.png';
import Footer from './Footer';

export default function BudgetingLesson7Page() {
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
      const newIncorrect: {[key: string]: boolean} = {}
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
            Adjusting Your Budget When Things Change
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-70">
            Module: Budgeting Basics • Lesson 7
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Introduction */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Why irregular income makes budgeting feel harder
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              When income changes from week to week, budgeting can feel impossible.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#FFCFD0]">
                <p className="text-[#1C1C1C] text-lg">One week you feel fine.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#FFCFD0]">
                <p className="text-[#1C1C1C] text-lg">The next week you are stressed.</p>
              </div>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-8">
              The problem usually is not budgeting itself. It is budgeting as if income is predictable when it is not.
            </p>
            <div className="bg-[#354024] text-white p-10 rounded-2xl border-4 border-[#FFCFD0]">
              <p className="text-2xl font-semibold">
                Once you adjust your approach, budgeting with changing income becomes much easier.
              </p>
            </div>
          </div>

          {/* What irregular income means */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              What irregular income actually means
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              Irregular income is any income that:
            </p>
            
            <div className="bg-[#E5D7C4] rounded-2xl p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <TrendingDown className="w-8 h-8 text-[#354024] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Changes from week to week</span>
                </div>
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-[#354024] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Is not guaranteed</span>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-[#354024] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Depends on hours, demand, or timing</span>
                </div>
              </div>
            </div>

            <p className="text-[#354024] font-semibold text-xl mb-6">This can include:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#889063]/20 p-5 rounded-xl border-l-4 border-[#889063]">
                <p className="text-[#1C1C1C] text-lg">Jobs with flexible schedules</p>
              </div>
              <div className="bg-[#889063]/20 p-5 rounded-xl border-l-4 border-[#889063]">
                <p className="text-[#1C1C1C] text-lg">Side work or freelance income</p>
              </div>
              <div className="bg-[#889063]/20 p-5 rounded-xl border-l-4 border-[#889063]">
                <p className="text-[#1C1C1C] text-lg">Tips or commissions</p>
              </div>
              <div className="bg-[#889063]/20 p-5 rounded-xl border-l-4 border-[#889063]">
                <p className="text-[#1C1C1C] text-lg">Seasonal work</p>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-8 rounded-2xl">
              <p className="text-lg">
                If this sounds like you, you are not doing anything wrong. You just need a different strategy.
              </p>
            </div>
          </div>

          {/* Real-life scenario */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 border-2 border-[#CFBB99]">
            <div className="flex items-center gap-4 mb-8">
              <Calendar className="w-10 h-10 text-[#354024]" />
              <h2 className="text-3xl font-bold text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Real-life scenario: planning for the unknown
              </h2>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-8">Imagine this month looks like:</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm">
                <span className="text-[#354024] font-semibold text-lg">Week 1:</span>
                <span className="text-[#354024] font-bold text-2xl">$180</span>
              </div>
              <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm">
                <span className="text-[#354024] font-semibold text-lg">Week 2:</span>
                <span className="text-[#889063] font-bold text-2xl">$90</span>
              </div>
              <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm">
                <span className="text-[#354024] font-semibold text-lg">Week 3:</span>
                <span className="text-[#354024] font-bold text-2xl">$140</span>
              </div>
              <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm">
                <span className="text-[#354024] font-semibold text-lg">Week 4:</span>
                <span className="text-[#889063] font-bold text-2xl">$110</span>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-6">
              If you plan your budget around the highest number, the low weeks will feel stressful.
            </p>
            <div className="bg-[#354024] text-white p-8 rounded-2xl">
              <p className="text-xl font-semibold">
                A smarter move is planning around what you can rely on.
              </p>
            </div>
          </div>

          {/* Rule number one */}
          <div>
            <div className="bg-[#354024] text-white p-10 rounded-3xl mb-8 border-4 border-[#FFCFD0]">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12 text-[#FFCFD0]" />
                <h2 className="text-4xl font-bold" style={{ letterSpacing: '-0.1px' }}>
                  Rule number one: budget conservatively
                </h2>
              </div>
              <p className="text-xl">
                When income changes, always budget using:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#FFCFD0]">
                <p className="text-[#354024] font-semibold text-2xl mb-2">Your lowest typical week</p>
                <p className="text-[#889063] font-semibold">or</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#FFCFD0]">
                <p className="text-[#354024] font-semibold text-2xl">Your monthly average rounded down</p>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              This means you are planning for what is realistic, not what is ideal.
            </p>

            <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <p className="text-[#354024] font-semibold text-lg">
                If extra money comes in, that is a bonus, not something you depend on.
              </p>
            </div>
          </div>

          {/* Real-life example */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <h3 className="text-3xl font-bold text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>Real-life example</h3>
            <p className="text-[#1C1C1C] text-lg mb-8">
              If you usually earn between $300 and $450 in a month, you might build your budget using $300.
            </p>
            <p className="text-[#354024] font-semibold text-xl mb-6">That way:</p>
            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-[#E5D7C4] p-6 rounded-xl">
                <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                <span className="text-[#1C1C1C] text-lg">Your essentials are covered</span>
              </div>
              <div className="flex items-start gap-4 bg-[#E5D7C4] p-6 rounded-xl">
                <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                <span className="text-[#1C1C1C] text-lg">You are not forced to panic when income dips</span>
              </div>
              <div className="flex items-start gap-4 bg-[#E5D7C4] p-6 rounded-xl">
                <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                <span className="text-[#1C1C1C] text-lg">Extra money becomes flexible</span>
              </div>
            </div>
          </div>

          {/* Prioritize essentials */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Prioritize essentials first
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              With irregular income, your budget should have clear priorities.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#354024]">
                <p className="text-[#354024] font-semibold mb-6 text-2xl">First cover:</p>
                <div className="space-y-3 ml-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                    <p className="text-[#1C1C1C] text-lg">Transportation</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                    <p className="text-[#1C1C1C] text-lg">Food</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                    <p className="text-[#1C1C1C] text-lg">Required expenses</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#889063]/20 rounded-2xl p-8 border-l-4 border-[#889063]">
                <p className="text-[#354024] font-semibold mb-6 text-2xl">Then think about:</p>
                <div className="space-y-3 ml-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#889063] rounded-full"></span>
                    <p className="text-[#1C1C1C] text-lg">Saving</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#889063] rounded-full"></span>
                    <p className="text-[#1C1C1C] text-lg">Optional spending</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-8 rounded-2xl mt-8">
              <p className="text-lg">
                This helps you stay stable even in lower income weeks.
              </p>
            </div>
          </div>

          {/* Use weekly thinking */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 border-2 border-[#CFBB99]">
            <div className="flex items-center gap-4 mb-8">
              <Zap className="w-10 h-10 text-[#354024]" />
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Use weekly thinking instead of monthly
              </h2>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-8">
              If monthly planning feels confusing, try weekly budgeting.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-6">Ask:</p>
              <div className="space-y-4">
                <div className="bg-[#E5D7C4] p-6 rounded-xl">
                  <p className="text-[#1C1C1C] text-lg">How much do I need this week</p>
                </div>
                <div className="bg-[#E5D7C4] p-6 rounded-xl">
                  <p className="text-[#1C1C1C] text-lg">How much did I earn this week</p>
                </div>
                <div className="bg-[#E5D7C4] p-6 rounded-xl">
                  <p className="text-[#1C1C1C] text-lg">What can I save or spend this week</p>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <p className="text-[#354024] font-semibold text-lg">
                This makes budgeting feel more manageable when income changes often.
              </p>
            </div>
          </div>

          {/* What to do with extra income */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              What to do with extra income
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              When you earn more than expected, it is tempting to spend it immediately.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-6">Before you do, consider:</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#FFCFD0] mt-2 flex-shrink-0"></div>
                  <span className="text-[#1C1C1C] text-lg">Adding to savings</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#FFCFD0] mt-2 flex-shrink-0"></div>
                  <span className="text-[#1C1C1C] text-lg">Covering future expenses</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#FFCFD0] mt-2 flex-shrink-0"></div>
                  <span className="text-[#1C1C1C] text-lg">Giving yourself flexibility for slower weeks</span>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-10 rounded-2xl border-4 border-[#FFCFD0]">
              <p className="text-2xl font-semibold">
                Extra income works best as a buffer, not a habit.
              </p>
            </div>
          </div>

          {/* Common mistakes */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Common mistakes with irregular income
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              These are very easy to make.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-6 bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] rounded-r-xl">
                  <span className="text-[#FFCFD0] text-2xl flex-shrink-0" style={{ textShadow: '0 0 10px rgba(255, 207, 208, 0.8)' }}>✗</span>
                  <span className="text-[#1C1C1C] text-lg">Spending extra income right away</span>
                </div>
                <div className="flex items-start gap-4 p-6 bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] rounded-r-xl">
                  <span className="text-[#FFCFD0] text-2xl flex-shrink-0" style={{ textShadow: '0 0 10px rgba(255, 207, 208, 0.8)' }}>✗</span>
                  <span className="text-[#1C1C1C] text-lg">Planning based on best weeks only</span>
                </div>
                <div className="flex items-start gap-4 p-6 bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] rounded-r-xl">
                  <span className="text-[#FFCFD0] text-2xl flex-shrink-0" style={{ textShadow: '0 0 10px rgba(255, 207, 208, 0.8)' }}>✗</span>
                  <span className="text-[#1C1C1C] text-lg">Forgetting that slow weeks happen</span>
                </div>
                <div className="flex items-start gap-4 p-6 bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] rounded-r-xl">
                  <span className="text-[#FFCFD0] text-2xl flex-shrink-0" style={{ textShadow: '0 0 10px rgba(255, 207, 208, 0.8)' }}>✗</span>
                  <span className="text-[#1C1C1C] text-lg">Giving up after one tough month</span>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-8 rounded-2xl">
              <p className="text-lg">
                Budgeting with irregular income takes practice. That is normal.
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
                  <span>Irregular income requires conservative planning</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Budget around reliable numbers</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Cover essentials first</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Use extra income as support, not expectation</span>
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
                <p className="text-[#1C1C1C] text-lg mb-6">What income should you base your budget on when income changes?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Your highest paycheck</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) A guess</p>
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
                      C) Your lowest or average income {selectedAnswers[1] === "C" && "✅"}
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
                    <p className="text-[#1C1C1C] text-lg">D) Someone else's income</p>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 2</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What is a good way to handle extra income?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Spend it immediately</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) Ignore it</p>
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
                      C) Use it as a buffer or savings {selectedAnswers[2] === "C" && "✅"}
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
                    <p className="text-[#1C1C1C] text-lg">D) Assume it will always happen</p>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 3</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">Why can weekly budgeting help with irregular income?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) It is more complicated</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) It avoids planning</p>
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
                      C) It matches how money comes in {selectedAnswers[3] === "C" && "✅"}
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
                    <p className="text-[#1C1C1C] text-lg">D) It stops spending</p>
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
            <div className="bg-[#354024] text-white rounded-3xl p-10 shadow-xl border-4 border-[#FFCFD0]">
              <p className="text-2xl mb-8 font-semibold">
                Think about the past few weeks.
              </p>
              <p className="text-lg mb-6">Write down:</p>
              <ul className="space-y-4 ml-4 mb-8 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  Your lowest typical weekly income
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  One essential expense you must cover each week
                </li>
              </ul>
              <p className="italic text-lg">
                Use that number as your starting point for budgeting.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/budgeting-basics/lesson-6"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/budgeting-basics/lesson-8"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Saving While Budgeting →
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