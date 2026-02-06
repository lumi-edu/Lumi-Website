import { Link } from './RouterLink';
import { ArrowLeft, CheckCircle2, DollarSign, Wallet, PiggyBank, Shield, Target, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function BudgetingLesson8Page() {
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
            Saving While Budgeting
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-70">
            Module: Budgeting Basics • Lesson 8
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Saving sounds simple, but it is usually the hardest part
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-6">
              Most people know they should save money.
            </p>
            <p className="text-[#1C1C1C] text-lg mb-8">
              Actually doing it is another story.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-6">Saving feels hard when:</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                  <span className="text-[#1C1C1C] text-lg">Income is limited</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                  <span className="text-[#1C1C1C] text-lg">Money already feels tight</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                  <span className="text-[#1C1C1C] text-lg">Saving is treated as an afterthought</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white p-10 rounded-3xl shadow-xl">
              <p className="text-xl mb-3">The key is not saving a lot.</p>
              <p className="text-3xl font-bold">The key is saving on purpose.</p>
            </div>
          </div>

          {/* Why saving belongs in budget */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 border-2 border-[#CFBB99]">
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Why saving belongs inside your budget
            </h2>
            <div className="bg-[#889063]/30 border-l-4 border-[#889063] p-8 rounded-r-2xl mb-8">
              <p className="text-[#354024] text-lg font-semibold">
                If saving only happens when there is money left over, it usually does not happen at all.
              </p>
            </div>

            <p className="text-[#1C1C1C] text-lg font-semibold mb-6">
              When you include saving in your budget:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#FFCFD0]">
                <CheckCircle2 className="w-10 h-10 text-[#889063] mb-4" />
                <p className="text-[#354024] font-semibold text-lg">It becomes a priority</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#FFCFD0]">
                <CheckCircle2 className="w-10 h-10 text-[#889063] mb-4" />
                <p className="text-[#354024] font-semibold text-lg">It stops feeling optional</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#FFCFD0]">
                <CheckCircle2 className="w-10 h-10 text-[#889063] mb-4" />
                <p className="text-[#354024] font-semibold text-lg">Progress becomes predictable</p>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-8 rounded-2xl">
              <p className="text-lg italic">
                Even small savings count more than inconsistent big ones.
              </p>
            </div>

            {/* Budget Template Callout */}
            <div className="bg-gradient-to-br from-[#354024] to-[#889063] p-10 rounded-3xl mt-8 shadow-xl border-4 border-[#FFCFD0]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-block bg-[#FFCFD0] text-[#354024] text-xs font-bold px-3 py-1 rounded-full mb-3">
                    FREE TEMPLATE
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Try lumi's Budget Template
                  </h3>
                  <p className="text-white text-base md:text-lg leading-relaxed">
                    Use our beginner-friendly budget template to organize your money and include savings as a priority. Simple, clear, and designed to help you stay on track.
                  </p>
                </div>
                <a 
                  href="https://drive.google.com/file/d/19K3gAjgdsSsouRz89OGfi6cvKwWgJVeV/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#354024] font-bold text-lg px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg whitespace-nowrap flex-shrink-0"
                >
                  Get Template →
                </a>
              </div>
            </div>
          </div>

          {/* Real-life scenario */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <div className="flex items-center gap-4 mb-8">
              <Target className="w-10 h-10 text-[#FFCFD0]" />
              <h2 className="text-3xl font-bold text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Real-life scenario: waiting to save
              </h2>
            </div>
            
            <div className="bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] p-8 rounded-r-2xl mb-8">
              <p className="text-[#354024] text-lg mb-3">You tell yourself:</p>
              <p className="text-[#1C1C1C] italic text-xl font-semibold">"I will save whatever is left at the end of the month."</p>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              The problem is that something always comes up.
            </p>

            <div className="bg-[#354024] text-white p-8 rounded-2xl">
              <p className="text-lg font-semibold">
                A better approach is deciding ahead of time what saving looks like for you.
              </p>
            </div>
          </div>

          {/* How much to save */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              How much should you save
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              There is no perfect number.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-8">Good starting points could be:</p>
              <div className="space-y-5">
                <div className="flex items-center gap-6 bg-[#E5D7C4] p-6 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-[#889063] flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-[#354024] font-bold text-2xl">$5 a week</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-[#E5D7C4] p-6 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-[#889063] flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-[#354024] font-bold text-2xl">$20 a month</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-[#E5D7C4] p-6 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-[#889063] flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-[#354024] font-bold text-2xl">A small percentage of income</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-8 rounded-r-2xl mb-8">
              <p className="text-[#354024] font-semibold text-lg">
                What matters most is that the amount feels realistic.
              </p>
            </div>

            <p className="text-[#1C1C1C] text-lg">
              Saving a small amount consistently builds confidence faster than trying to save too much and giving up.
            </p>
          </div>

          {/* Paying yourself first */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 border-2 border-[#CFBB99]">
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Saving first makes things easier
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              One simple strategy is called <span className="font-semibold text-[#354024]">paying yourself first</span>.
            </p>

            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-2xl p-10 mb-8 shadow-lg">
              <p className="text-2xl mb-6 font-semibold">That just means:</p>
              <div className="space-y-4 ml-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#FFCFD0] mt-2 flex-shrink-0"></div>
                  <span className="text-lg">You move money into savings as soon as you get paid</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#FFCFD0] mt-2 flex-shrink-0"></div>
                  <span className="text-lg">You spend what is left</span>
                </div>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              This removes the decision from the moment when spending feels tempting.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>Real-life example</h3>
              <div className="space-y-5">
                <p className="text-[#1C1C1C] text-lg">You earn $320 this month.</p>
                <p className="text-[#354024] font-semibold text-lg">You decide:</p>
                <div className="bg-[#E5D7C4] p-6 rounded-xl border-l-4 border-[#FFCFD0]">
                  <p className="text-[#354024] font-semibold text-lg">$40 goes into savings right away</p>
                </div>
                <div className="bg-[#E5D7C4] p-6 rounded-xl border-l-4 border-[#889063]">
                  <p className="text-[#354024] font-semibold text-lg">The remaining $280 is for everything else</p>
                </div>
                <p className="text-[#354024] font-semibold italic text-lg mt-8">
                  You still get to spend money. You just protected your savings first.
                </p>
              </div>
            </div>
          </div>

          {/* Types of saving goals */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Different types of saving goals
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              Not all saving is for the same reason.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#354024]/10 hover:border-[#889063] transition-colors">
                <Shield className="w-12 h-12 text-[#889063] mb-6" />
                <h3 className="text-[#354024] font-bold text-xl mb-3">Emergency savings</h3>
                <p className="text-[#1C1C1C] text-base">Money set aside for unexpected expenses</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#354024]/10 hover:border-[#889063] transition-colors">
                <Wallet className="w-12 h-12 text-[#889063] mb-6" />
                <h3 className="text-[#354024] font-bold text-xl mb-3">Short term goals</h3>
                <p className="text-[#1C1C1C] text-base">Like trips or purchases</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#354024]/10 hover:border-[#889063] transition-colors">
                <PiggyBank className="w-12 h-12 text-[#889063] mb-6" />
                <h3 className="text-[#354024] font-bold text-xl mb-3">Long term goals</h3>
                <p className="text-[#1C1C1C] text-base">Like education or a car</p>
              </div>
            </div>

            <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <p className="text-[#354024] font-semibold text-lg">
                You do not need to save for everything at once. One goal is enough to start.
              </p>
            </div>
          </div>

          {/* Emergency savings */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Emergency savings explained simply
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              An emergency fund is money set aside for unexpected expenses.
            </p>

            <div className="bg-[#E5D7C4] rounded-2xl p-8 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-6">Examples:</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-[#FFCFD0] flex-shrink-0"></div>
                  <span className="text-[#1C1C1C] text-lg">A broken phone</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-[#FFCFD0] flex-shrink-0"></div>
                  <span className="text-[#1C1C1C] text-lg">Transportation issues</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-[#FFCFD0] flex-shrink-0"></div>
                  <span className="text-[#1C1C1C] text-lg">A surprise fee</span>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-8 rounded-2xl mb-8">
              <p className="text-lg">
                This is not money for fun or planned purchases. It is money that protects you from stress.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#354024] to-[#889063] text-white p-8 rounded-2xl">
              <p className="text-lg font-semibold">
                Even a small emergency fund helps more than none.
              </p>
            </div>
          </div>

          {/* Saving with irregular income */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Saving with irregular income
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              If your income changes, saving can feel risky.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-8">A good rule is:</p>
              <div className="space-y-5">
                <div className="flex items-start gap-5 p-6 bg-[#889063]/10 border-l-4 border-[#889063] rounded-r-xl">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#354024] font-semibold text-lg">Save during higher income weeks</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-[#CFBB99]/30 border-l-4 border-[#CFBB99] rounded-r-xl">
                  <TrendingUp className="w-7 h-7 text-[#354024] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#354024] font-semibold text-lg">Pause or reduce saving during lower income weeks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <p className="text-[#354024] font-semibold text-lg">
                Saving does not have to be the same every time. Flexibility matters.
              </p>
            </div>
          </div>

          {/* Common mistakes */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Common saving mistakes
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              These are easy to fall into.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <div className="space-y-5">
                <div className="flex items-start gap-5 p-6 bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] rounded-r-xl">
                  <span className="text-[#FFCFD0] text-2xl font-bold flex-shrink-0" style={{ textShadow: '0 0 10px rgba(255, 207, 208, 0.8)' }}>×</span>
                  <span className="text-[#1C1C1C] text-lg">Trying to save too much too fast</span>
                </div>
                <div className="flex items-start gap-5 p-6 bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] rounded-r-xl">
                  <span className="text-[#FFCFD0] text-2xl font-bold flex-shrink-0" style={{ textShadow: '0 0 10px rgba(255, 207, 208, 0.8)' }}>×</span>
                  <span className="text-[#1C1C1C] text-lg">Feeling guilty when you cannot save one month</span>
                </div>
                <div className="flex items-start gap-5 p-6 bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] rounded-r-xl">
                  <span className="text-[#FFCFD0] text-2xl font-bold flex-shrink-0" style={{ textShadow: '0 0 10px rgba(255, 207, 208, 0.8)' }}>×</span>
                  <span className="text-[#1C1C1C] text-lg">Treating savings as optional</span>
                </div>
                <div className="flex items-start gap-5 p-6 bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] rounded-r-xl">
                  <span className="text-[#FFCFD0] text-2xl font-bold flex-shrink-0" style={{ textShadow: '0 0 10px rgba(255, 207, 208, 0.8)' }}>×</span>
                  <span className="text-[#1C1C1C] text-lg">Giving up after one setback</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#354024] to-[#889063] text-white p-10 rounded-2xl shadow-lg">
              <p className="text-2xl font-semibold">
                Saving is a habit, not a test you pass or fail.
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
                  <span>Saving works best when it is planned</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Small amounts still matter</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Saving first makes it easier</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Flexibility is part of the process</span>
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
                <p className="text-[#1C1C1C] text-lg mb-6">Why is saving easier when it is part of your budget?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) It happens automatically</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      selectedAnswers[1] === "B" 
                        ? "border-2 border-[#889063] bg-[#889063]/20 shadow-md" 
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "B", true)}
                  >
                    <p className={selectedAnswers[1] === "B" ? "text-[#354024] font-semibold text-lg" : "text-[#1C1C1C] text-lg"}>
                      B) It becomes intentional {selectedAnswers[1] === "B" && "✅"}
                    </p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-C']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "C", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">C) It requires less effort</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-D']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "D", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">D) It removes spending</p>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 2</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What does paying yourself first mean?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Spending before saving</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) Saving only extra money</p>
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
                      C) Saving as soon as you get paid {selectedAnswers[2] === "C" && "✅"}
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
                    <p className="text-[#1C1C1C] text-lg">D) Ignoring your budget</p>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 3</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">Which is a good way to start saving?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Waiting until income increases</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      selectedAnswers[3] === "B" 
                        ? "border-2 border-[#889063] bg-[#889063]/20 shadow-md" 
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "B", true)}
                  >
                    <p className={selectedAnswers[3] === "B" ? "text-[#354024] font-semibold text-lg" : "text-[#1C1C1C] text-lg"}>
                      B) Saving a realistic small amount {selectedAnswers[3] === "B" && "✅"}
                    </p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-C']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "C", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">C) Saving everything left</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-D']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "D", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">D) Skipping saving if it feels hard</p>
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
                Choose one saving goal right now.
              </p>
              <p className="mb-6 text-lg">Then decide:</p>
              <ul className="space-y-4 ml-4 mb-8 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  How much you will try to save
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                  How often you will save it
                </li>
              </ul>
              <p className="text-lg italic">
                Keep it small and realistic.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/budgeting-basics/lesson-7"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/budgeting-basics/lesson-9"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Common Budgeting Mistakes →
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