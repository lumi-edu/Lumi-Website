import { Link } from './RouterLink';
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle, Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function BudgetingLesson9Page() {
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
            Common Budgeting Mistakes (and How to Avoid Them)
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-70">
            Module: Budgeting Basics • Lesson 9
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Everyone makes budgeting mistakes at first
            </h2>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <p className="text-[#1C1C1C] text-lg mb-4">If you have ever tried budgeting and thought,</p>
              <p className="text-[#354024] text-2xl italic mb-4 font-semibold">"This is not working for me,"</p>
              <p className="text-[#1C1C1C] text-lg">you are not alone.</p>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              Most budgeting problems are not about discipline or effort. They usually come from a few common mistakes that almost everyone makes when starting out.
            </p>

            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white p-10 rounded-3xl shadow-xl">
              <p className="text-2xl font-semibold">
                The good news is that once you know what they are, they are easy to fix.
              </p>
            </div>
          </div>

          {/* Mistake 1 */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-[#FFCFD0]">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FFCFD0] flex items-center justify-center shadow-lg">
                <span className="text-[#354024] font-bold text-2xl">1</span>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl text-[#354024] mb-2" style={{ letterSpacing: '-0.1px' }}>
                  Mistake 1: Being too strict
                </h2>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">A very common first budget looks like this:</p>

            <div className="bg-[#FFCFD0]/20 rounded-2xl p-8 mb-8 border-l-4 border-[#FFCFD0]">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[#FFCFD0] font-bold text-2xl" style={{ textShadow: '0 0 10px rgba(255, 207, 208, 0.8)' }}>×</span>
                  <span className="text-[#1C1C1C] text-lg">No eating out</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#FFCFD0] font-bold text-2xl" style={{ textShadow: '0 0 10px rgba(255, 207, 208, 0.8)' }}>×</span>
                  <span className="text-[#1C1C1C] text-lg">No fun spending</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#FFCFD0] font-bold text-2xl" style={{ textShadow: '0 0 10px rgba(255, 207, 208, 0.8)' }}>×</span>
                  <span className="text-[#1C1C1C] text-lg">No flexibility</span>
                </div>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">This usually works for about a week.</p>

            <p className="text-[#1C1C1C] text-lg mb-8">
              When a budget feels too restrictive, it becomes hard to stick to. Budgeting should support your life, not make it miserable.
            </p>

            <div className="bg-[#354024] rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-[#FFCFD0] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-3 text-xl">How to avoid it</p>
                  <p className="text-white text-lg">
                    Always leave room for things you enjoy. Even a small amount makes a big difference in consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mistake 2 */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 shadow-lg border-2 border-[#CFBB99]">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#354024] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl text-[#354024] mb-2" style={{ letterSpacing: '-0.1px' }}>
                  Mistake 2: Forgetting small expenses
                </h2>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              It is easy to remember big expenses and forget the small ones.
            </p>

            <div className="bg-white rounded-2xl p-8 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-6">Things like:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#E5D7C4] p-4 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[#354024]"></div>
                  <span className="text-[#1C1C1C] text-lg">Snacks</span>
                </div>
                <div className="flex items-center gap-3 bg-[#E5D7C4] p-4 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[#354024]"></div>
                  <span className="text-[#1C1C1C] text-lg">Coffee</span>
                </div>
                <div className="flex items-center gap-3 bg-[#E5D7C4] p-4 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[#354024]"></div>
                  <span className="text-[#1C1C1C] text-lg">App subscriptions</span>
                </div>
                <div className="flex items-center gap-3 bg-[#E5D7C4] p-4 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[#354024]"></div>
                  <span className="text-[#1C1C1C] text-lg">Random online purchases</span>
                </div>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              Individually, they seem small. Together, they add up quickly.
            </p>

            <div className="bg-[#354024] rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-[#FFCFD0] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-3 text-xl">How to avoid it</p>
                  <p className="text-white text-lg">
                    Use your spending tracking from earlier lessons to spot patterns and include them in your budget.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mistake 3 */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-[#FFCFD0]">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FFCFD0] flex items-center justify-center shadow-lg">
                <span className="text-[#354024] font-bold text-2xl">3</span>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl text-[#354024] mb-2" style={{ letterSpacing: '-0.1px' }}>
                  Mistake 3: Expecting your budget to be perfect
                </h2>
              </div>
            </div>

            <div className="bg-[#FFCFD0]/20 rounded-2xl p-8 mb-8 border-l-4 border-[#FFCFD0]">
              <p className="text-[#354024] text-lg mb-3">A lot of people think:</p>
              <p className="text-[#1C1C1C] text-2xl italic font-semibold">"If I mess up once, the budget failed."</p>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              That mindset makes budgeting stressful.
            </p>

            <p className="text-[#1C1C1C] text-lg mb-8">
              A budget is a tool, not a rulebook. It is meant to change and improve over time.
            </p>

            <div className="bg-[#354024] rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-[#FFCFD0] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-3 text-xl">How to avoid it</p>
                  <p className="text-white text-lg">
                    Treat your first few budgets like drafts. Adjust instead of quitting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real-life scenario */}
          <div className="bg-gradient-to-br from-[#889063] to-[#CFBB99] rounded-3xl p-10 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <AlertCircle className="w-10 h-10 text-[#354024]" />
              <h2 className="text-3xl font-bold text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Real-life scenario: an unexpected week
              </h2>
            </div>
            
            <p className="text-[#1C1C1C] text-lg mb-8">You planned carefully, but then:</p>

            <div className="space-y-4 mb-8">
              <div className="bg-white p-6 rounded-xl flex items-start gap-4 shadow-sm">
                <AlertTriangle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                <span className="text-[#1C1C1C] text-lg">You went out more than expected</span>
              </div>
              <div className="bg-white p-6 rounded-xl flex items-start gap-4 shadow-sm">
                <AlertTriangle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                <span className="text-[#1C1C1C] text-lg">Something unexpected came up</span>
              </div>
              <div className="bg-white p-6 rounded-xl flex items-start gap-4 shadow-sm">
                <AlertTriangle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                <span className="text-[#1C1C1C] text-lg">You spent more in one category</span>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              This does not mean budgeting does not work. It means life happened.
            </p>

            <div className="bg-[#354024] text-white p-10 rounded-2xl">
              <p className="text-2xl font-semibold">
                The goal is not perfection. The goal is awareness and adjustment.
              </p>
            </div>
          </div>

          {/* Mistake 4 */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 shadow-lg border-2 border-[#CFBB99]">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#354024] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl text-[#354024] mb-2" style={{ letterSpacing: '-0.1px' }}>
                  Mistake 4: Not adjusting when life changes
                </h2>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8">
              <div className="space-y-3">
                <p className="text-[#1C1C1C] text-lg">Income changes. Expenses change. Priorities change.</p>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              Keeping the same budget when your situation changes can make things feel impossible.
            </p>

            <div className="bg-[#354024] rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-[#FFCFD0] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-3 text-xl">How to avoid it</p>
                  <p className="text-white text-lg">
                    Check in with your budget regularly. Small updates keep it realistic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mistake 5 */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-[#FFCFD0]">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FFCFD0] flex items-center justify-center shadow-lg">
                <span className="text-[#354024] font-bold text-2xl">5</span>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl text-[#354024] mb-2" style={{ letterSpacing: '-0.1px' }}>
                  Mistake 5: Giving up too quickly
                </h2>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              Budgeting is a skill. Like any skill, it takes practice.
            </p>

            <p className="text-[#1C1C1C] text-lg mb-8">
              If the first attempt feels uncomfortable, that does not mean you are doing it wrong.
            </p>

            <div className="bg-[#354024] rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-[#FFCFD0] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-3 text-xl">How to avoid it</p>
                  <p className="text-white text-lg">
                    Give your budget a few weeks. Look for progress, not perfection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What mistakes mean */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              What budgeting mistakes actually mean
            </h2>
            
            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-3xl p-10 shadow-xl">
              <p className="text-2xl mb-8 font-semibold">Making mistakes usually means:</p>
              <div className="space-y-5">
                <div className="flex items-start gap-5">
                  <TrendingUp className="w-8 h-8 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-xl">You are learning</span>
                </div>
                <div className="flex items-start gap-5">
                  <TrendingUp className="w-8 h-8 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-xl">You are paying attention</span>
                </div>
                <div className="flex items-start gap-5">
                  <TrendingUp className="w-8 h-8 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-xl">You are trying something new</span>
                </div>
              </div>
              <p className="text-3xl font-bold mt-8">That is progress.</p>
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
                  <span>Being too strict makes budgets hard to follow</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Small expenses matter</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Budgets are meant to change</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Mistakes are part of the process</span>
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
                <p className="text-[#1C1C1C] text-lg mb-6">What is the biggest reason budgets fail?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) People are bad with money</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) Budgets are too flexible</p>
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
                      C) Budgets are too strict or unrealistic {selectedAnswers[1] === "C" && "✅"}
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
                    <p className="text-[#1C1C1C] text-lg">D) Saving is impossible</p>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 2</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">If you overspend one week, what should you do?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Quit budgeting</p>
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
                      C) Adjust and keep going {selectedAnswers[2] === "C" && "✅"}
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
                    <p className="text-[#1C1C1C] text-lg">D) Start over next year</p>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 3</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What does it mean if your budget needs changes?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) You failed</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) The budget is useless</p>
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
                      C) Your life changed {selectedAnswers[3] === "C" && "✅"}
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
                    <p className="text-[#1C1C1C] text-lg">D) You should stop budgeting</p>
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
                Think about your current or past budget.
              </p>
              <p className="mb-6 text-lg">Write down:</p>
              <ul className="space-y-4 ml-4 mb-8 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  One thing that felt hard
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  One small change you could make to improve it
                </li>
              </ul>
              <p className="text-lg italic">
                Keep it simple.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/budgeting-basics/lesson-8"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/budgeting-basics/lesson-10"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Adjusting Your Budget Over Time →
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