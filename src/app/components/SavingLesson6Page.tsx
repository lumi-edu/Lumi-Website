import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, Wallet, PiggyBank, Building2, TrendingUp, Target, AlertCircle, Layers } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function SavingLesson6Page() {
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
            Where to Put Your Savings
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Saving Strategies • Lesson 6
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Opening Statement */}
          <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="w-12 h-12" />
              <h2 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                Where your savings live actually matters
              </h2>
            </div>
            <p className="text-xl mb-6">
              Saving money is not just about how much you save. It is also about where you keep it.
            </p>
            <div className="bg-white/20 rounded-lg p-6 border border-white/30">
              <p className="mb-4 text-xl font-semibold">The right place for your savings makes it:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Easier to protect</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Easier to manage</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Easier to avoid spending accidentally</span>
                </div>
              </div>
            </div>
            <p className="text-xl font-semibold mt-6">
              The goal is to make saving simple and spending intentional.
            </p>
          </div>

          {/* Main Rule - Three Boxes */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              The main rule for saving accounts
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">Your savings should be:</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#889063]">
                <div className="w-12 h-12 rounded-full bg-[#889063]/20 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-[#889063]" />
                </div>
                <p className="text-[#1C1C1C] text-lg font-semibold">Separate from everyday spending</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#CFBB99]">
                <div className="w-12 h-12 rounded-full bg-[#CFBB99]/40 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#354024]" />
                </div>
                <p className="text-[#1C1C1C] text-lg font-semibold">Easy to access when needed</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#354024]">
                <div className="w-12 h-12 rounded-full bg-[#354024]/10 flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-[#354024]" />
                </div>
                <p className="text-[#1C1C1C] text-lg font-semibold">Hard enough to reach that you do not use it casually</p>
              </div>
            </div>

            <div className="bg-[#CFBB99]/40 p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl">
                If your savings sit in the same place as spending money, it becomes tempting to dip into them without thinking.
              </p>
            </div>
          </div>

          {/* Checking vs Savings - Side by Side */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6 text-center" style={{ letterSpacing: '-0.89px' }}>
              Savings accounts vs checking accounts
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Checking Account */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="bg-[#354024] text-white p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Wallet className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Checking accounts</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#1C1C1C] font-semibold mb-4 text-xl">Checking accounts are best for:</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 p-3 bg-[#E5D7C4] rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                      <span className="text-[#1C1C1C] text-lg">Everyday spending</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#E5D7C4] rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                      <span className="text-[#1C1C1C] text-lg">Bills and purchases</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#E5D7C4] rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                      <span className="text-[#1C1C1C] text-lg">Frequent use</span>
                    </div>
                  </div>
                  <div className="bg-[#FFCFD0]/50 border-l-4 border-[#FFCFD0] p-4 rounded-r-lg">
                    <p className="text-[#1C1C1C] text-lg">
                      They are not ideal for savings because the money feels too available.
                    </p>
                  </div>
                </div>
              </div>

              {/* Savings Account */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-[#889063]">
                <div className="bg-[#889063] text-white p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <PiggyBank className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Savings accounts</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#1C1C1C] font-semibold mb-4 text-xl">Savings accounts are better for:</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 p-3 bg-[#889063]/10 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-[#889063] mt-2 flex-shrink-0"></div>
                      <span className="text-[#1C1C1C] text-lg">Emergency funds</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#889063]/10 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-[#889063] mt-2 flex-shrink-0"></div>
                      <span className="text-[#1C1C1C] text-lg">Short term and long term goals</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#889063]/10 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-[#889063] mt-2 flex-shrink-0"></div>
                      <span className="text-[#1C1C1C] text-lg">Money you do not want to touch often</span>
                    </div>
                  </div>
                  <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-4 rounded-r-lg">
                    <p className="text-[#1C1C1C] text-lg font-semibold">
                      Keeping savings separate helps protect it from impulse spending.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario - Visual Comparison */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Real-life scenario: separation makes a difference
            </h3>
            
            <div className="space-y-6">
              {/* Before - All in One */}
              <div className="border-2 border-[#FFCFD0] rounded-lg p-6 bg-[#FFCFD0]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold">×</div>
                  <p className="font-bold text-[#1C1C1C] text-xl">All in one account</p>
                </div>
                <div className="bg-white rounded-lg p-6 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#1C1C1C] text-lg">Total balance</span>
                    <span className="font-bold text-[#1C1C1C] text-lg">$800</span>
                  </div>
                  <div className="text-lg text-[#1C1C1C] opacity-70">
                    Spending money? Savings? Hard to tell.
                  </div>
                </div>
                <p className="text-[#1C1C1C] text-lg">
                  If all your money is in one account, it is hard to tell what is meant to be spent and what is meant to be saved.
                </p>
              </div>

              {/* After - Separated */}
              <div className="border-2 border-[#889063] rounded-lg p-6 bg-[#889063]/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-bold text-[#1C1C1C] text-xl">Separated accounts</p>
                </div>
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Wallet className="w-5 h-5 text-[#354024]" />
                      <span className="text-lg text-[#1C1C1C] opacity-70">Checking</span>
                    </div>
                    <p className="font-bold text-[#1C1C1C] text-lg">$600</p>
                    <p className="text-lg text-[#1C1C1C] opacity-70">For spending</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <PiggyBank className="w-5 h-5 text-[#889063]" />
                      <span className="text-lg text-[#1C1C1C] opacity-70">Savings</span>
                    </div>
                    <p className="font-bold text-[#1C1C1C] text-lg">$200</p>
                    <p className="text-lg text-[#1C1C1C] opacity-70">For goals</p>
                  </div>
                </div>
                <p className="text-[#1C1C1C] text-lg">
                  When savings live in a different place, you pause before using them. That pause helps you make more intentional choices.
                </p>
              </div>
            </div>
          </div>

          {/* High Yield Savings */}
          <div className="bg-gradient-to-r from-[#CFBB99] to-[#E5D7C4] rounded-lg p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-[#889063]" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  What is a high yield savings account
                </h2>
                <p className="text-[#1C1C1C] mb-6">
                  A high yield savings account is a type of savings account that earns more interest than a traditional one.
                </p>
                
                <div className="bg-white rounded-lg p-6 mb-6">
                  <p className="text-[#1C1C1C] font-semibold mb-4">That means:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1C1C1C]">Your money grows a little on its own</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1C1C1C]">You earn extra money just for saving</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1C1C1C]">It is still safe and accessible</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#1C1C1C]">
                  You do not need a lot of money to open one. Many allow small balances.
                </p>
              </div>
            </div>
          </div>

          {/* Multiple Accounts */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              When to use multiple savings accounts
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">You might choose more than one savings account if:</p>
            
            <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#889063]/10 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-[#889063] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-[#1C1C1C] text-lg">You want to separate emergency savings from goal savings</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#CFBB99]/40 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-[#CFBB99] text-[#354024] flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-[#1C1C1C] text-lg">You like seeing progress toward different goals</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#354024]/10 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-[#354024] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="text-[#1C1C1C] text-lg">You find it easier to stay organized this way</p>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/20 border-2 border-[#889063] p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl">
                This is optional. <span className="font-bold">One account is enough to start.</span>
              </p>
            </div>
          </div>

          {/* Goal-Based Scenario */}
          <div className="border-l-4 border-[#CFBB99] bg-white rounded-r-lg p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <Target className="w-10 h-10 text-[#889063] flex-shrink-0" />
              <div>
                <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Real-life scenario: goal based saving
                </h3>
                <p className="text-[#1C1C1C] text-xl mb-6">
                  You keep emergency savings in one account and goal savings in another.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#E5D7C4] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-[#889063]"></div>
                      <p className="font-bold text-[#1C1C1C] text-lg">Emergency Fund</p>
                    </div>
                    <p className="text-2xl font-bold text-[#1C1C1C] mb-1">$500</p>
                    <p className="text-lg text-[#1C1C1C] opacity-70">For unexpected expenses</p>
                  </div>
                  <div className="bg-[#E5D7C4] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-[#CFBB99]"></div>
                      <p className="font-bold text-[#1C1C1C] text-lg">Vacation Fund</p>
                    </div>
                    <p className="text-2xl font-bold text-[#1C1C1C] mb-1">$200</p>
                    <p className="text-lg text-[#1C1C1C] opacity-70">For upcoming trip</p>
                  </div>
                </div>

                <p className="text-[#1C1C1C] text-xl">
                  When you check your balances, you know exactly what each amount is for. That clarity makes saving feel more purposeful.
                </p>
              </div>
            </div>
          </div>

          {/* Avoid Too Accessible */}
          <div className="bg-[#354024] text-white rounded-lg p-8">
            <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.89px' }}>
              Avoid keeping savings too accessible
            </h2>
            <p className="text-xl mb-6">
              Savings should be accessible, but not effortless to spend.
            </p>
            
            <p className="mb-4 text-xl">Avoid:</p>
            <div className="space-y-3 mb-6">
              <div className="bg-white/10 p-4 rounded-lg flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#354024] text-xs font-bold">×</span>
                </div>
                <span className="text-lg">Keeping savings in cash</span>
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#354024] text-xs font-bold">×</span>
                </div>
                <span className="text-lg">Linking savings directly to spending apps</span>
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#354024] text-xs font-bold">×</span>
                </div>
                <span className="text-lg">Treating savings like a second checking account</span>
              </div>
            </div>

            <div className="bg-[#889063] p-5 rounded-lg">
              <p className="text-xl font-semibold">
                A small barrier helps protect your progress.
              </p>
            </div>
          </div>

          {/* Common Mistakes */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Common mistakes with savings locations
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">These are very common:</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold flex-shrink-0">×</div>
                  <p className="text-[#1C1C1C] text-lg">Keeping all money in one account</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold flex-shrink-0">×</div>
                  <p className="text-[#1C1C1C] text-lg">Choosing accounts based only on convenience</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold flex-shrink-0">×</div>
                  <p className="text-[#1C1C1C] text-lg">Moving savings back and forth often</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold flex-shrink-0">×</div>
                  <p className="text-[#1C1C1C] text-lg">Overcomplicating accounts too early</p>
                </div>
              </div>
            </div>

            <div className="bg-[#CFBB99] p-6 rounded-lg text-center">
              <p className="text-[#1C1C1C] text-2xl font-semibold">
                Simple setups work best.
              </p>
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 text-[#1C1C1C] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span>Where you keep savings matters</span>
              </div>
              <div className="flex items-start gap-3 text-[#1C1C1C] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span>Separate savings from spending</span>
              </div>
              <div className="flex items-start gap-3 text-[#1C1C1C] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span>Savings accounts protect your money</span>
              </div>
              <div className="flex items-start gap-3 text-[#1C1C1C] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span>Simple systems are effective</span>
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
              1. Why should savings be separate from spending money?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'To make saving harder', correct: false },
                { label: 'B', text: 'To hide money', correct: false },
                { label: 'C', text: 'To reduce impulse spending', correct: true },
                { label: 'D', text: 'To increase fees', correct: false }
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
              2. What is a benefit of a savings account?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'It encourages spending', correct: false },
                { label: 'B', text: 'It earns interest', correct: true },
                { label: 'C', text: 'It replaces budgeting', correct: false },
                { label: 'D', text: 'It limits access completely', correct: false }
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
              3. Do you need multiple savings accounts to start?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Yes', correct: false },
                { label: 'B', text: 'No, one is enough', correct: true },
                { label: 'C', text: 'Only if income is high', correct: false },
                { label: 'D', text: 'Only for emergencies', correct: false }
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
          <div className="bg-[#889063] text-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl mb-4" style={{ letterSpacing: '-0.89px' }}>Action step</h2>
            <p className="text-xl mb-6">
              Decide where your savings will live.
            </p>
            <p className="text-xl font-semibold mb-3">Write down:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Which account you will use</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>What the savings in that account are for</span>
              </li>
            </ul>
            <div className="bg-white/20 p-4 rounded-lg">
              <p className="text-lg italic">
                If needed, plan to open a savings account that fits your goals.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/saving-strategies/lesson-5"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/saving-strategies/lesson-7"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Staying Motivated While Saving →
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