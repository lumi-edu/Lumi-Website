import { Link } from './RouterLink';
import { ArrowLeft, CheckCircle2, Lightbulb, Layers, PiggyBank, Calculator, Wallet, Target } from 'lucide-react';
import { useState, useEffect } from 'react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function BudgetingLesson5Page() {
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
            Choosing a Budgeting Method
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-70">
            Module: Budgeting Basics • Lesson 5
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Introduction with decorative accent */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#FFCFD0] rounded-full"></div>
            <div className="pl-8">
              <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
                There is no "perfect" budgeting method
              </h2>
              <p className="text-[#1C1C1C] text-lg mb-6">
                One of the biggest budgeting myths is that there is one correct way to budget.
              </p>
              <div className="bg-[#354024] text-white p-8 rounded-2xl mb-6">
                <p className="text-2xl font-semibold">
                  That is not true.
                </p>
              </div>
              <p className="text-[#1C1C1C] text-lg mb-4">
                The best budgeting method is simply the one you will actually use. If a system feels confusing, stressful, or impossible to keep up with, it is not the right one for you, even if it works great for someone else.
              </p>
              <p className="text-[#1C1C1C] text-lg">
                This lesson will walk through a few common budgeting methods and help you figure out which one fits your life best.
              </p>
            </div>
          </div>

          {/* Why budgeting methods exist */}
          <div className="bg-[#CFBB99]/40 p-10 rounded-3xl border border-[#354024]/10">
            <div className="flex items-center gap-4 mb-6">
              <Layers className="w-12 h-12 text-[#354024]" />
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Why budgeting methods exist in the first place
              </h2>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-6">
              After tracking your spending, you probably noticed patterns. Some money goes to necessities. Some goes to things you enjoy. Some disappears faster than you expected.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#354024]/10 mb-6">
              <p className="text-[#354024] font-semibold text-xl mb-4">
                A budgeting method helps you:
              </p>
              <ul className="space-y-3 text-[#1C1C1C] text-lg ml-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#889063] rounded-full"></span>
                  Organize your money on purpose
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#889063] rounded-full"></span>
                  Decide limits before you spend
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#889063] rounded-full"></span>
                  Make room for saving without guessing
                </li>
              </ul>
            </div>
            <div className="bg-[#FFCFD0]/30 border-l-4 border-[#FFCFD0] p-6 rounded-r-xl">
              <p className="text-[#354024] text-lg italic">
                Think of it as choosing a structure, not a set of rules.
              </p>
            </div>
          </div>

          {/* Method 1: 50/30/20 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold text-2xl shadow-lg">
                1
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                The 50/30/20 Budget
              </h2>
            </div>
            
            <p className="text-[#1C1C1C] text-lg mb-8">
              This is one of the most popular and beginner friendly methods.
            </p>
            
            <div className="bg-[#CFBB99]/40 p-8 rounded-2xl mb-8 border border-[#354024]/10">
              <p className="text-[#354024] font-semibold text-xl mb-6">Here is how it works:</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm">
                  <span className="text-[#354024] font-bold text-3xl min-w-[80px]">50%</span>
                  <span className="text-[#1C1C1C] text-lg">goes to needs</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm">
                  <span className="text-[#889063] font-bold text-3xl min-w-[80px]">30%</span>
                  <span className="text-[#1C1C1C] text-lg">goes to wants</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm">
                  <span className="text-[#FFCFD0] font-bold text-3xl min-w-[80px]" style={{ textShadow: '0 0 20px rgba(255, 207, 208, 0.5)' }}>20%</span>
                  <span className="text-[#1C1C1C] text-lg">goes to saving</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-2 border-green-500 bg-green-50 p-6 rounded-2xl">
                <p className="text-[#354024] font-semibold text-lg mb-4">This method works well if:</p>
                <ul className="space-y-3 text-[#1C1C1C]">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Your income is fairly steady
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    You want a simple structure
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    You do not want to track every detail
                  </li>
                </ul>
              </div>
              <div className="border-2 border-orange-500 bg-orange-50 p-6 rounded-2xl">
                <p className="text-[#354024] font-semibold text-lg mb-4">It may not work well if:</p>
                <ul className="space-y-3 text-[#1C1C1C]">
                  <li className="flex items-center gap-3">
                    <span className="text-orange-600 text-lg flex-shrink-0">⚠</span>
                    Your income changes a lot
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-600 text-lg flex-shrink-0">⚠</span>
                    Your needs take up more than half your income
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <div className="flex items-start gap-4 mb-4">
                <Lightbulb className="w-8 h-8 text-[#354024] flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-semibold text-[#354024]">Real-life example</h3>
              </div>
              <p className="text-[#1C1C1C] text-lg mb-4">You earn $400 in a month.</p>
              <p className="text-[#354024] font-semibold mb-4">Using this method:</p>
              <div className="space-y-3 ml-4 mb-6">
                <p className="text-[#1C1C1C] text-lg">$200 goes to needs</p>
                <p className="text-[#1C1C1C] text-lg">$120 goes to wants</p>
                <p className="text-[#1C1C1C] text-lg">$80 goes to saving</p>
              </div>
              <p className="text-[#354024] italic text-lg">
                You can adjust these numbers, but the idea is balance.
              </p>
            </div>

            {/* Calculator Callout */}
            <div className="bg-[#354024] p-10 rounded-3xl mt-8 shadow-xl border-4 border-[#FFCFD0]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-block bg-[#FFCFD0] text-[#354024] text-xs font-bold px-4 py-2 rounded-full mb-4">
                    INTERACTIVE TOOL
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Try lumi's 50/30/20 Calculator
                  </h3>
                  <p className="text-white text-lg leading-relaxed">
                    See how this method applies to your own income with our interactive calculator. Switch between weekly and monthly to match how you get paid.
                  </p>
                </div>
                <Link 
                  to="/budget-calculator"
                  className="bg-[#FFCFD0] text-[#354024] font-bold text-lg px-10 py-5 rounded-2xl hover:scale-105 transition-transform shadow-lg whitespace-nowrap flex-shrink-0"
                >
                  Try Calculator →
                </Link>
              </div>
            </div>
          </div>

          {/* Method 2: Zero-based */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold text-2xl shadow-lg">
                2
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Zero-Based Budgeting
              </h2>
            </div>
            
            <p className="text-[#1C1C1C] text-lg mb-8">
              This method gives every dollar a job.
            </p>
            
            <div className="bg-[#354024] text-white p-8 rounded-2xl mb-8">
              <p className="text-xl font-semibold mb-3">You plan your money so that:</p>
              <p className="text-3xl font-bold">Income minus expenses equals zero</p>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              This does not mean you spend everything. Saving counts as a job too.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-2 border-green-500 bg-green-50 p-6 rounded-2xl">
                <p className="text-[#354024] font-semibold text-lg mb-4">This method works well if:</p>
                <ul className="space-y-3 text-[#1C1C1C]">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    You like detail
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    You want full control
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    You enjoy planning things out
                  </li>
                </ul>
              </div>
              <div className="border-2 border-orange-500 bg-orange-50 p-6 rounded-2xl">
                <p className="text-[#354024] font-semibold text-lg mb-4">It may not work well if:</p>
                <ul className="space-y-3 text-[#1C1C1C]">
                  <li className="flex items-center gap-3">
                    <span className="text-orange-600 text-lg flex-shrink-0">⚠</span>
                    You prefer flexibility
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-600 text-lg flex-shrink-0">⚠</span>
                    Your income changes often
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#CFBB99]/40 border-l-4 border-[#CFBB99] p-8 rounded-r-2xl">
              <div className="flex items-start gap-4 mb-4">
                <Calculator className="w-8 h-8 text-[#354024] flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-semibold text-[#354024]">Real-life example</h3>
              </div>
              <p className="text-[#1C1C1C] text-lg mb-4">You earn $350 this month.</p>
              <p className="text-[#354024] font-semibold mb-4">You decide:</p>
              <div className="space-y-3 ml-4 mb-6">
                <p className="text-[#1C1C1C] text-lg">$150 for transportation and essentials</p>
                <p className="text-[#1C1C1C] text-lg">$100 for spending</p>
                <p className="text-[#1C1C1C] text-lg">$100 for saving</p>
              </div>
              <p className="text-[#354024] italic text-lg">
                Every dollar is accounted for before the month starts.
              </p>
            </div>
          </div>

          {/* Method 3: Pay yourself first */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold text-2xl shadow-lg">
                3
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Pay Yourself First
              </h2>
            </div>
            
            <p className="text-[#1C1C1C] text-lg mb-8">
              This method focuses on saving first instead of saving what is left over.
            </p>
            
            <div className="bg-[#CFBB99]/40 p-8 rounded-2xl mb-8 border border-[#354024]/10">
              <p className="text-[#354024] font-semibold text-xl mb-6">Here is the idea:</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#354024] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-[#1C1C1C] text-lg">You decide how much to save</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-[#1C1C1C] text-lg">You move that money aside first</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#CFBB99] text-[#354024] flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="text-[#1C1C1C] text-lg">You spend what remains</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-500 bg-green-50 p-6 rounded-2xl">
                <p className="text-[#354024] font-semibold text-lg mb-4">This method works well if:</p>
                <ul className="space-y-3 text-[#1C1C1C]">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Saving is your top priority
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    You want a simple system
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    You tend to overspend otherwise
                  </li>
                </ul>
              </div>
              <div className="border-2 border-orange-500 bg-orange-50 p-6 rounded-2xl">
                <p className="text-[#354024] font-semibold text-lg mb-4">It may not work well if:</p>
                <ul className="space-y-3 text-[#1C1C1C]">
                  <li className="flex items-center gap-3">
                    <span className="text-orange-600 text-lg flex-shrink-0">⚠</span>
                    Your income is very unpredictable
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Method 4: Envelope method */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold text-2xl shadow-lg">
                4
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                The Envelope Method, Digital Version
              </h2>
            </div>
            
            <p className="text-[#1C1C1C] text-lg mb-8">
              Traditionally, this meant using cash. Today, it usually means categories.
            </p>
            
            <div className="bg-[#CFBB99]/30 p-8 rounded-2xl mb-8 border border-[#354024]/10">
              <p className="text-[#354024] font-semibold text-xl mb-6">You decide spending limits for categories like:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-3">
                  <Wallet className="w-6 h-6 text-[#354024]" />
                  <span className="text-[#1C1C1C] text-lg">Food</span>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-3">
                  <PiggyBank className="w-6 h-6 text-[#889063]" />
                  <span className="text-[#1C1C1C] text-lg">Entertainment</span>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-3">
                  <Target className="w-6 h-6 text-[#FFCFD0]" />
                  <span className="text-[#1C1C1C] text-lg">Shopping</span>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-8 rounded-2xl mb-8">
              <p className="text-2xl font-semibold">
                Once the category runs out, you stop spending there.
              </p>
            </div>

            <div className="border-2 border-green-500 bg-green-50 p-6 rounded-2xl">
              <p className="text-[#354024] font-semibold text-lg mb-4">This method works well if:</p>
              <ul className="space-y-3 text-[#1C1C1C]">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  You overspend in specific areas
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  You like clear boundaries
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  You want strong awareness of spending
                </li>
              </ul>
            </div>
          </div>

          {/* How to choose */}
          <div className="bg-[#354024] text-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-4xl font-bold mb-8" style={{ letterSpacing: '-0.1px' }}>
              How to choose the right method
            </h2>
            <p className="text-xl mb-6">Ask yourself:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl">
                <p className="text-lg">• Do I want simplicity or detail</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl">
                <p className="text-lg">• Does my income stay the same or change often</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl">
                <p className="text-lg">• Do I need flexibility or structure</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl">
                <p className="text-lg">• What felt hardest when I tracked spending</p>
              </div>
            </div>
            <div className="bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] p-6 rounded-r-xl">
              <p className="text-2xl font-semibold">
                Your answers matter more than the method name.
              </p>
            </div>
          </div>

          {/* Common mistake */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Common mistake to avoid
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-6">
              A lot of people switch methods every week because they think something is wrong.
            </p>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-6">
              <p className="text-3xl font-bold text-[#354024] mb-6">
                Give a method time.
              </p>
              <p className="text-[#1C1C1C] text-lg">
                If it feels uncomfortable at first, that is normal. If it still feels impossible after a few weeks, then it is okay to adjust or switch.
              </p>
            </div>
            <div className="bg-[#889063]/30 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <p className="text-[#354024] text-2xl font-semibold">
                Budgeting is a skill, not a test.
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
                  <span>There is no perfect budgeting method</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Different methods work for different people</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>The best system is one you can stick with</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>You can always adjust as you go</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mini Quiz */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Quick Check
            </h2>
            
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 1</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What makes a budgeting method "good"?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${ 
                      incorrectAnswers['1-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) It works for everyone</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) It is popular online</p>
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
                      C) You can actually stick with it {selectedAnswers[1] === "C" && "✅"}
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
                    <p className="text-[#1C1C1C] text-lg">D) It requires no thinking</p>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 2</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">Which method focuses on saving first?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Zero-based budgeting</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      selectedAnswers[2] === "B" 
                        ? "border-2 border-[#889063] bg-[#889063]/20 shadow-md" 
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "B", true)}
                  >
                    <p className={selectedAnswers[2] === "B" ? "text-[#354024] font-semibold text-lg" : "text-[#1C1C1C] text-lg"}>
                      B) Pay yourself first {selectedAnswers[2] === "B" && "✅"}
                    </p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-C']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "C", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">C) Envelope method</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-D']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "D", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">D) 50/30/20</p>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 3</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">If your income changes a lot, what should you do?</p>
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
                    <p className="text-[#1C1C1C] text-lg">B) Use the most strict system possible</p>
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
                      C) Choose a flexible method {selectedAnswers[3] === "C" && "✅"}
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
                    <p className="text-[#1C1C1C] text-lg">D) Never save</p>
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
                Pick one budgeting method that sounds like it could work for you.
              </p>
              <p className="text-lg mb-8">
                You do not have to commit forever. Just choose one to try.
              </p>
              <div className="bg-white/10 backdrop-blur p-8 rounded-2xl border-2 border-[#FFCFD0]">
                <p className="font-semibold text-xl mb-4">Write down:</p>
                <ul className="space-y-3 ml-4 text-lg">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                    Which method you chose
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                    One reason it feels like a good fit
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/budgeting-basics/lesson-4"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/budgeting-basics/lesson-6"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Building Your First Budget Step by Step →
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