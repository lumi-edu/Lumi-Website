import { Link } from './RouterLink';
import { ArrowLeft, CheckCircle2, AlertCircle, ListChecks, DollarSign, TrendingUp, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function BudgetingLesson6Page() {
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
            Building Your First Budget
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-70">
            Module: Budgeting Basics • Lesson 6
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Introduction */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              This is where everything comes together
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-6">
              Up until now, you have:
            </p>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <ul className="space-y-4 text-[#1C1C1C] text-lg">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Learned what a budget actually is</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Thought about goals</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Looked at income</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Tracked spending</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Chosen a budgeting method</span>
                </li>
              </ul>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-6">
              Now it is time to build your first real budget.
            </p>
            <div className="bg-[#354024] text-white p-8 rounded-2xl border-l-4 border-[#FFCFD0]">
              <p className="text-2xl font-semibold">
                This does not need to be perfect. It just needs to exist.
              </p>
            </div>
          </div>

          {/* Step 1 */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 border-2 border-[#CFBB99]">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#354024] text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
                  Start with the money you actually have
                </h2>
                
                <p className="text-[#1C1C1C] text-lg mb-6">
                  Before writing anything else down, ask yourself one question:
                </p>
                
                <div className="bg-white rounded-xl p-8 mb-6 shadow-sm">
                  <p className="text-2xl text-[#354024] font-semibold italic">
                    How much money do I realistically have coming in?
                  </p>
                </div>

                <p className="text-[#1C1C1C] text-lg mb-4">Use:</p>
                <ul className="space-y-3 text-[#1C1C1C] text-lg ml-6 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                    Your average or lower income
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                    The amount that actually hits your account
                  </li>
                </ul>

                <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-6 rounded-r-xl mb-6">
                  <p className="text-[#354024] font-semibold text-lg">
                    Do not plan around your biggest paycheck. That is one of the easiest ways to get frustrated.
                  </p>
                </div>

                <div className="bg-white border border-[#354024]/10 p-8 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-[#354024]" />
                    <h3 className="text-xl font-semibold text-[#354024]">Real-life example</h3>
                  </div>
                  <p className="text-[#1C1C1C] text-lg mb-4">
                    You usually earn between $300 and $400 in a month.
                  </p>
                  <p className="text-[#1C1C1C] text-lg mb-4">
                    Instead of using $400, you decide to build your budget using $320.
                  </p>
                  <p className="text-[#354024] italic text-lg">
                    That gives you breathing room.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#889063] text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
                  List your regular expenses first
                </h2>
                
                <p className="text-[#1C1C1C] text-lg mb-8">
                  Next, write down the things you usually have to spend money on.
                </p>
                
                <div className="bg-[#CFBB99]/30 rounded-2xl p-8 mb-8">
                  <p className="text-[#354024] font-semibold text-xl mb-6">These might include:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">Transportation</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">Food or snacks</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">Phone or subscriptions</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">School or work related costs</p>
                    </div>
                  </div>
                </div>

                <p className="text-[#1C1C1C] text-lg mb-6">
                  These do not have to be exact. Estimates are fine.
                </p>
                <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-6 rounded-r-xl">
                  <p className="text-[#354024] text-lg">
                    The goal is to understand what your money needs to cover before anything else.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 border-2 border-[#CFBB99]">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#354024] text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
                  Add savings on purpose
                </h2>
                
                <div className="bg-[#354024] text-white p-8 rounded-2xl mb-8 border-4 border-[#FFCFD0]">
                  <p className="text-xl font-semibold mb-3">
                    Saving should be part of your budget, not something you hope happens.
                  </p>
                  <p className="text-lg">
                    Even a small amount counts.
                  </p>
                </div>

                <p className="text-[#1C1C1C] text-lg mb-4">Examples:</p>
                <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-[#E5D7C4] p-4 rounded-xl">
                      <span className="text-[#354024] font-bold text-2xl min-w-[60px]">$20</span>
                      <span className="text-[#1C1C1C] text-lg">a month</span>
                    </div>
                    <div className="flex items-center gap-4 bg-[#E5D7C4] p-4 rounded-xl">
                      <span className="text-[#889063] font-bold text-2xl min-w-[60px]">$5</span>
                      <span className="text-[#1C1C1C] text-lg">a week</span>
                    </div>
                    <div className="flex items-center gap-4 bg-[#E5D7C4] p-4 rounded-xl">
                      <span className="text-[#354024] font-bold text-2xl min-w-[60px]">10%</span>
                      <span className="text-[#1C1C1C] text-lg">of income</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#1C1C1C] text-lg mb-8">
                  Saving early builds confidence and momentum.
                </p>

                <div className="bg-white border border-[#354024]/10 p-8 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-[#354024]" />
                    <h3 className="text-xl font-semibold text-[#354024]">Real-life example</h3>
                  </div>
                  <p className="text-[#1C1C1C] text-lg mb-4">You decide:</p>
                  <p className="text-[#1C1C1C] text-lg mb-4">$40 goes to saving</p>
                  <p className="text-[#1C1C1C] text-lg mb-4">The rest is split between expenses and spending</p>
                  <p className="text-[#354024] font-semibold text-lg">
                    That one choice already puts you ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#889063] text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
                  Plan for spending you enjoy
                </h2>
                
                <div className="bg-[#FFCFD0]/30 border-l-4 border-[#FFCFD0] p-8 rounded-r-2xl mb-8">
                  <p className="text-[#354024] text-2xl font-semibold">
                    This part matters.
                  </p>
                </div>

                <p className="text-[#1C1C1C] text-lg mb-8">
                  A budget that leaves no room for fun is hard to stick to.
                </p>

                <div className="bg-[#CFBB99]/30 rounded-2xl p-8 mb-8">
                  <p className="text-[#354024] font-semibold text-xl mb-6">Think about:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">Eating out</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">Entertainment</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">Shopping</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">Social plans</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#354024] text-white p-6 rounded-2xl">
                  <p className="text-lg">
                    Give yourself permission to spend here, just with intention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 border-2 border-[#CFBB99]">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#354024] text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
                  Check if the numbers actually work
                </h2>
                
                <p className="text-[#1C1C1C] text-lg mb-8">
                  Now add everything up.
                </p>

                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                  <p className="text-[#354024] font-semibold text-xl mb-6">Ask yourself:</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">Does this fit within my income</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">Am I trying to spend more than I earn</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">Does this feel realistic</p>
                    </div>
                  </div>
                </div>

                <p className="text-[#1C1C1C] text-lg mb-6">
                  If it does not work, adjust.
                </p>

                <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-6 rounded-r-xl mb-8">
                  <p className="text-[#354024] font-semibold text-lg">
                    Budgets are flexible. That is a good thing.
                  </p>
                </div>

                <div className="bg-white border border-[#354024]/10 p-8 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-[#354024]" />
                    <h3 className="text-xl font-semibold text-[#354024]">Real-life scenario: adjusting your budget</h3>
                  </div>
                  <p className="text-[#1C1C1C] text-lg mb-4">
                    You notice your plan leaves only $10 for unexpected expenses.
                  </p>
                  <p className="text-[#1C1C1C] text-lg mb-4">Instead of giving up, you:</p>
                  <div className="space-y-3 ml-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">Reduce spending in one category</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                      <p className="text-[#1C1C1C] text-lg">Increase flexibility in another</p>
                    </div>
                  </div>
                  <p className="text-[#354024] font-semibold text-lg">
                    This is budgeting in real life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#889063] text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                  6
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
                  Write it down somewhere simple
                </h2>
                
                <p className="text-[#1C1C1C] text-lg mb-8">
                  Your budget should live somewhere you will actually look at it.
                </p>

                <div className="bg-[#CFBB99]/30 rounded-2xl p-8 mb-8">
                  <p className="text-[#354024] font-semibold text-xl mb-6">Options:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                      <p className="text-[#1C1C1C] text-lg">Notes app</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                      <p className="text-[#1C1C1C] text-lg">Spreadsheet</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                      <p className="text-[#1C1C1C] text-lg">Budgeting app</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                      <p className="text-[#1C1C1C] text-lg">Paper</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#354024] text-white p-6 rounded-2xl">
                  <p className="text-lg font-semibold">
                    The format matters less than consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Common first-budget mistakes
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              Try not to stress if you make these mistakes. Almost everyone does.
            </p>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-7 h-7 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Being too strict</span>
                </div>
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-7 h-7 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Forgetting small expenses</span>
                </div>
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-7 h-7 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Expecting perfection</span>
                </div>
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-7 h-7 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Giving up after one off week</span>
                </div>
              </div>
            </div>
            <div className="bg-[#354024] text-white p-8 rounded-2xl border-4 border-[#FFCFD0]">
              <p className="text-2xl font-semibold">
                Your first budget is a starting point, not a final draft.
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
                  <span>Start with realistic income</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Cover necessities first</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Include saving on purpose</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Leave room for enjoyment</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Adjust when needed</span>
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
                <p className="text-[#1C1C1C] text-lg mb-6">What should you base your budget on?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Your biggest paycheck</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) Money you plan to earn</p>
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
                      C) Realistic take-home income {selectedAnswers[1] === "C" && "✅"}
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
                    <p className="text-[#1C1C1C] text-lg">D) A guess</p>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 2</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">Why should saving be part of your budget?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) It looks impressive</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) It happens automatically</p>
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
                      C) It gives money a purpose {selectedAnswers[2] === "C" && "✅"}
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
                    <p className="text-[#1C1C1C] text-lg">D) It replaces spending</p>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 3</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">If your budget does not work at first, what should you do?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Quit budgeting</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) Ignore it</p>
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
                      C) Adjust and try again {selectedAnswers[3] === "C" && "✅"}
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
                    <p className="text-[#1C1C1C] text-lg">D) Start over next year</p>
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
                Build a simple version of your budget today.
              </p>
              <p className="text-lg mb-6">Write down:</p>
              <ul className="space-y-4 ml-4 mb-8 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  Your income
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  A few main expense categories
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  One savings amount
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  One spending category you enjoy
                </li>
              </ul>
              <p className="italic text-lg">
                Do not aim for perfect. Aim for clear.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/budgeting-basics/lesson-5"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/budgeting-basics/lesson-7"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Budgeting With Irregular Income →
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