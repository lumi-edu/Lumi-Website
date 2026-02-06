import { Link } from './RouterLink';
import { ArrowLeft, CheckCircle2, FileText, Table, Smartphone, Download, Sparkles, AlertCircle, Check, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function BudgetingLesson11Page() {
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
            Budgeting Tools and Templates
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-70">
            Module: Budgeting Basics • Lesson 11
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              You do not need fancy tools to budget well
            </h2>

            <p className="text-[#1C1C1C] text-lg mb-8">
              A lot of people think budgeting only works if you use the right app or the perfect spreadsheet.
            </p>

            <div className="bg-[#FFCFD0]/30 border-l-4 border-[#FFCFD0] p-8 rounded-r-2xl mb-8">
              <p className="text-[#354024] font-semibold text-lg">
                That is not true.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white p-10 rounded-3xl shadow-xl mb-8">
              <p className="text-3xl font-bold mb-4">
                The best budgeting tool is the one you actually open and use.
              </p>
              <p className="text-2xl">
                Simple almost always beats complicated.
              </p>
            </div>
          </div>

          {/* What tools are meant to do */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              What budgeting tools are meant to do
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Should Do */}
              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#889063] flex items-center justify-center">
                    <Check className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#354024]">Tools should:</h3>
                </div>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                    <span className="text-[#1C1C1C] text-lg">Help you organize your money</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                    <span className="text-[#1C1C1C] text-lg">Make patterns easier to see</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                    <span className="text-[#1C1C1C] text-lg">Save time and mental effort</span>
                  </div>
                </div>
              </div>

              {/* Should NOT Do */}
              <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#FFCFD0] flex items-center justify-center">
                    <X className="w-7 h-7 text-[#354024]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#354024]">They should NOT:</h3>
                </div>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <X className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                    <span className="text-[#1C1C1C] text-lg">Make budgeting stressful</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <X className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                    <span className="text-[#1C1C1C] text-lg">Feel confusing</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <X className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                    <span className="text-[#1C1C1C] text-lg">Require hours of setup</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <p className="text-[#354024] font-semibold text-lg">
                If a tool feels overwhelming, it is okay to choose something simpler.
              </p>
            </div>
          </div>

          {/* Option 1: Notes/Paper */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border-t-8 border-[#FFCFD0]">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-[#889063] rounded-2xl flex items-center justify-center shadow-lg">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                  Option 1: Notes app or paper
                </h2>
                <p className="text-[#1C1C1C] text-lg opacity-70">Simplest option</p>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              This is the simplest option and a great place to start.
            </p>

            <div className="bg-[#E5D7C4] rounded-2xl p-8 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-6">You can:</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                  <p className="text-[#1C1C1C] text-lg">Write down income</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                  <p className="text-[#1C1C1C] text-lg">List categories</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                  <p className="text-[#1C1C1C] text-lg">Track spending quickly</p>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/10 border-l-4 border-[#889063] p-8 rounded-r-2xl mb-8">
              <p className="text-[#354024] font-semibold text-lg mb-6">This works well if:</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#889063] rounded-full"></span>
                  <p className="text-[#1C1C1C] text-lg">You like flexibility</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#889063] rounded-full"></span>
                  <p className="text-[#1C1C1C] text-lg">You want zero setup</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#889063] rounded-full"></span>
                  <p className="text-[#1C1C1C] text-lg">You are just getting started</p>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-6 rounded-2xl">
              <p className="font-semibold text-xl">Simple tools still count.</p>
            </div>
          </div>

          {/* Option 2: Spreadsheets */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 shadow-lg border-t-8 border-[#354024]">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-[#354024] rounded-2xl flex items-center justify-center shadow-lg">
                <Table className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                  Option 2: Spreadsheets
                </h2>
                <p className="text-[#1C1C1C] text-lg opacity-70">Structured and flexible</p>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              Spreadsheets give you more structure while staying flexible.
            </p>

            <div className="bg-white rounded-2xl p-8 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-6">They work well if:</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#E5D7C4] p-5 rounded-xl">
                  <span className="w-2 h-2 bg-[#354024] rounded-full mt-2"></span>
                  <p className="text-[#1C1C1C] text-lg">You like seeing everything in one place</p>
                </div>
                <div className="flex items-start gap-4 bg-[#E5D7C4] p-5 rounded-xl">
                  <span className="w-2 h-2 bg-[#354024] rounded-full mt-2"></span>
                  <p className="text-[#1C1C1C] text-lg">You want to customize categories</p>
                </div>
                <div className="flex items-start gap-4 bg-[#E5D7C4] p-5 rounded-xl">
                  <span className="w-2 h-2 bg-[#354024] rounded-full mt-2"></span>
                  <p className="text-[#1C1C1C] text-lg">You want basic calculations done for you</p>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/30 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <p className="text-[#354024] font-semibold text-lg">
                You do not need advanced formulas. A few rows and columns are enough.
              </p>
            </div>
          </div>

          {/* Real-life scenario */}
          <div className="bg-gradient-to-br from-[#889063] to-[#CFBB99] rounded-3xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Real-life scenario: spreadsheet clarity
            </h2>
            
            <p className="text-[#1C1C1C] text-lg mb-8">You put your income at the top.</p>

            <div className="bg-white rounded-2xl p-8 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-6">Then you list:</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-5 bg-[#E5D7C4] rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-[#FFCFD0]"></div>
                  <span className="text-[#1C1C1C] text-lg">Expenses</span>
                </div>
                <div className="flex items-center gap-4 p-5 bg-[#E5D7C4] rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-[#FFCFD0]"></div>
                  <span className="text-[#1C1C1C] text-lg">Savings</span>
                </div>
                <div className="flex items-center gap-4 p-5 bg-[#E5D7C4] rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-[#FFCFD0]"></div>
                  <span className="text-[#1C1C1C] text-lg">Spending categories</span>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-8 rounded-2xl">
              <p className="text-2xl font-semibold">
                Seeing everything laid out makes decisions feel clearer and more intentional.
              </p>
            </div>
          </div>

          {/* Option 3: Apps */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border-t-8 border-[#CFBB99]">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-[#CFBB99] rounded-2xl flex items-center justify-center shadow-lg">
                <Smartphone className="w-12 h-12 text-[#354024]" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                  Option 3: Budgeting apps
                </h2>
                <p className="text-[#1C1C1C] text-lg opacity-70">Automated tracking</p>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              Budgeting apps can automate tracking and calculations.
            </p>

            <div className="bg-[#E5D7C4] rounded-2xl p-8 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-6">They often:</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                  <p className="text-[#1C1C1C] text-lg">Sync with bank accounts</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                  <p className="text-[#1C1C1C] text-lg">Categorize spending</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#354024] rounded-full"></span>
                  <p className="text-[#1C1C1C] text-lg">Show summaries</p>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/10 border-l-4 border-[#889063] p-8 rounded-r-2xl mb-8">
              <p className="text-[#1C1C1C] text-lg mb-6">
                These can be helpful, but they are not required.
              </p>
            </div>

            <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-8 rounded-r-2xl mb-8">
              <p className="text-[#354024] font-semibold text-lg mb-6">Apps work best if:</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#889063] rounded-full"></span>
                  <p className="text-[#1C1C1C] text-lg">You want automation</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#889063] rounded-full"></span>
                  <p className="text-[#1C1C1C] text-lg">You check them regularly</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#889063] rounded-full"></span>
                  <p className="text-[#1C1C1C] text-lg">You understand what the numbers mean</p>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-6 rounded-2xl">
              <p className="font-semibold text-xl">
                An app should support your budget, not replace your understanding.
              </p>
            </div>
          </div>

          {/* Templates */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#889063] flex items-center justify-center shadow-lg">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Templates make starting easier
              </h2>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              Templates give you a starting structure so you do not have to build everything from scratch.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-8">A good template:</p>
              <div className="space-y-5">
                <div className="flex items-start gap-5 p-6 bg-[#E5D7C4] rounded-xl">
                  <Sparkles className="w-7 h-7 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Includes common categories</span>
                </div>
                <div className="flex items-start gap-5 p-6 bg-[#E5D7C4] rounded-xl">
                  <Sparkles className="w-7 h-7 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Leaves room for adjustments</span>
                </div>
                <div className="flex items-start gap-5 p-6 bg-[#E5D7C4] rounded-xl">
                  <Sparkles className="w-7 h-7 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Does not lock you into one method</span>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <p className="text-[#354024] font-semibold text-lg">
                Templates are meant to be edited. Change them to fit your life.
              </p>
            </div>
          </div>

          {/* How to choose */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              How to choose the right tool for you
            </h2>

            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-3xl p-10 shadow-xl">
              <p className="text-2xl font-semibold mb-8">Ask yourself:</p>
              <div className="space-y-5">
                <div className="bg-white/20 p-6 rounded-2xl">
                  <p className="text-xl">Do I want simple or detailed</p>
                </div>
                <div className="bg-white/20 p-6 rounded-2xl">
                  <p className="text-xl">Do I like writing things out or seeing charts</p>
                </div>
                <div className="bg-white/20 p-6 rounded-2xl">
                  <p className="text-xl">Will I actually open this tool regularly</p>
                </div>
              </div>
              <p className="text-2xl font-bold mt-8">The right answer is personal.</p>
            </div>
          </div>

          {/* Common mistake */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Common mistake with tools
            </h2>

            <div className="bg-[#FFCFD0]/30 border-2 border-[#FFCFD0] rounded-2xl p-10 mb-8">
              <div className="flex items-start gap-5">
                <AlertCircle className="w-10 h-10 text-[#FFCFD0] flex-shrink-0" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 207, 208, 0.6))' }} />
                <div>
                  <p className="text-[#1C1C1C] text-lg mb-6">
                    A lot of people keep switching tools instead of sticking with one.
                  </p>
                  <p className="text-[#354024] font-semibold text-lg">
                    If budgeting feels hard, the problem is usually not the tool. It is the habit.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-10 rounded-2xl">
              <p className="text-2xl font-semibold">
                Choose one option and give it time before switching.
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
                  <span>Simple tools work</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>You do not need expensive apps</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Templates save time</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Consistency matters more than features</span>
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
                <p className="text-[#1C1C1C] text-lg mb-6">What makes a budgeting tool effective?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) It is popular online</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) It is expensive</p>
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
                      C) You actually use it
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
                    <p className="text-[#1C1C1C] text-lg">D) It looks impressive</p>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 2</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What is the main purpose of a template?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) To limit your choices</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) To replace decision making</p>
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
                      C) To give you a starting point
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
                    <p className="text-[#1C1C1C] text-lg">D) To make budgeting perfect</p>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 3</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What should you do if a tool feels overwhelming?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Force yourself to use it</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) Quit budgeting</p>
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
                      C) Try something simpler
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
                    <p className="text-[#1C1C1C] text-lg">D) Ignore your budget</p>
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
                Choose one budgeting tool to use for the next few weeks.
              </p>
              <div className="bg-white/20 p-8 rounded-2xl mb-8">
                <p className="mb-6 text-xl font-semibold">It could be:</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                    <span className="text-lg">Notes app</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                    <span className="text-lg">Spreadsheet</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                    <span className="text-lg">Budgeting app</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg italic">
                Write down why you chose it.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/budgeting-basics/lesson-10"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/budgeting-basics/lesson-12"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Sticking to Your Budget →
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