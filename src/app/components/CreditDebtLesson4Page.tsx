import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, TrendingUp, Calculator, DollarSign } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function CreditDebtLesson4Page() {
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
            <img src={lumiLogo} alt="lumi" className="h-8 -ml-7" style={{ mixBlendMode: 'multiply' }} />
            <nav className="flex gap-8">
              <Link to="/" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                home
              </Link>
              <Link to="/learn" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                learn
              </Link>
              <Link to="/resources" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                resources
              </Link>
              <Link to="/blog" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
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
            to="/credit-debt" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Credit and Debt
          </Link>
        </div>
      </div>

      {/* Lesson Header */}
      <section className="px-6 pb-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 flex items-center gap-4 text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>12-15 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              <span>Beginner</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
            Interest Rates Explained Simply
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Credit and Debt • Lesson 4
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Opening - Calculator Visual */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border-4 border-[#FFCFD0]">
            <div className="flex items-center gap-4 mb-8">
              <Calculator className="w-14 h-14 text-[#FFCFD0]" />
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Interest is the cost of borrowing money
              </h2>
            </div>
            
            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Whenever you borrow money using credit, the lender charges you extra for the privilege of using it.
            </p>

            <div className="bg-[#889063] text-white rounded-lg p-8 mb-8">
              <p className="text-2xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>That extra cost is called interest.</strong></p>
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Interest is how lenders make money and compensate for the risk of lending.
              </p>
            </div>

            <div className="bg-[#CFBB99]/30 rounded-lg p-8 mb-8">
              <p className="text-[#1C1C1C] text-xl mb-6" style={{ letterSpacing: '-0.89px' }}><strong>You always pay back:</strong></p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-6 flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-[#354024]" />
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>The original amount (principal)</p>
                </div>
                <div className="bg-white rounded-lg p-6 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-[#FFCFD0]" />
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Plus additional interest</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-[#354024] text-white rounded-lg p-8">
              <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Interest is what makes debt grow.</strong>
              </p>
            </div>
          </div>

          {/* APR Explanation - Featured Box */}
          <div>
            <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10 mb-8">
              <h2 className="text-5xl mb-8" style={{ letterSpacing: '-0.89px' }}>APR: the most important number</h2>
              <div className="bg-white/20 backdrop-blur rounded-lg p-8 mb-8">
                <p className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}><strong>APR stands for Annual Percentage Rate.</strong></p>
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  It represents how much interest you are charged yearly on borrowed money.
                </p>
              </div>
              <p className="text-xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                Even though APR is shown as a yearly rate, credit cards apply it daily.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-lg p-8">
                <TrendingUp className="w-10 h-10 text-[#FFCFD0] mb-4" />
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Higher APR means:</strong></h3>
                <ul className="text-[#1C1C1C] space-y-2 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li>• Faster debt growth</li>
                  <li>• More money paid over time</li>
                  <li>• Harder to pay off balances</li>
                </ul>
              </div>
              <div className="bg-[#354024] text-white rounded-lg p-8 flex items-center justify-center md:col-span-2">
                <p className="text-3xl text-center" style={{ letterSpacing: '-0.89px' }}>
                  <strong>APR is the price tag of debt.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* How Credit Card Interest Works - Step Visual */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              How credit card interest actually works
            </h2>
            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Credit cards use daily interest calculations.
            </p>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>Here is the basic idea in simple terms:</p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-[#CFBB99]/20 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                  <strong>1</strong>
                </div>
                <div>
                  <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Your APR is divided into a daily rate</strong></p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#CFBB99]/20 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                  <strong>2</strong>
                </div>
                <div>
                  <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Interest is charged on your balance every day</strong></p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#CFBB99]/20 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                  <strong>3</strong>
                </div>
                <div>
                  <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>That interest gets added to what you owe</strong></p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#CFBB99]/20 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                  <strong>4</strong>
                </div>
                <div>
                  <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>New interest is calculated on the higher balance</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFCFD0]/30 border-2 border-[#FFCFD0] text-[#1C1C1C] rounded-lg p-8 mt-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>So interest compounds daily.</strong>
              </p>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mt-4 text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                This is why credit card debt grows quickly even when balances seem small.
              </p>
            </div>
          </div>

          {/* Why Carrying a Balance is Expensive - Warning Design */}
          <div className="bg-gradient-to-br from-[#FFCFD0]/30 to-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Why carrying a balance is expensive
            </h2>
            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              When you do not pay your statement balance in full:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-lg p-6 border-l-4 border-[#FFCFD0]">
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Interest starts building daily</strong></p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-[#FFCFD0]">
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Your total owed increases</strong></p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-[#FFCFD0]">
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Future interest is charged on the new balance</strong></p>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mb-6 text-center">
              <p className="text-2xl mb-3" style={{ letterSpacing: '-0.89px' }}>
                <strong>So you are paying interest on interest.</strong>
              </p>
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Debt grows quietly in the background.
              </p>
            </div>

            <div className="text-center bg-[#FFCFD0]/50 border-2 border-[#FFCFD0] text-[#1C1C1C] rounded-lg p-6">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>The longer the balance stays, the larger it becomes.</strong>
              </p>
            </div>
          </div>

          {/* Example - Visual Breakdown */}
          <div className="bg-[#354024] text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>Example to understand interest growth</h2>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
              <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>You owe $500 on a card with a high APR.</strong></p>
            </div>

            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>If unpaid:</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Interest is added daily</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Your balance increases even if you do not spend more</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Payments go mostly toward interest first</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>It takes longer to eliminate the original balance</p>
              </div>
            </div>

            <div className="bg-[#889063] rounded-lg p-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Interest stretches debt over time and multiplies its cost.</strong>
              </p>
            </div>
          </div>

          {/* Real Cost Comparison */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Interest makes purchases more expensive than their price
            </h2>
            
            <div className="bg-white rounded-xl p-10 shadow-lg">
              <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                When you buy something with credit and carry the balance:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-8 bg-[#CFBB99]/20 rounded-lg">
                  <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Original Price</p>
                  <p className="text-5xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>$200</strong></p>
                </div>
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-[#FFCFD0]" />
                </div>
                <div className="text-center p-8 bg-[#FFCFD0]/30 border-2 border-[#FFCFD0] rounded-lg">
                  <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>With Interest Over Time</p>
                  <p className="text-5xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>$300+</strong></p>
                </div>
              </div>

              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-6 mb-4">
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>
                  You are paying extra for that item
                </p>
              </div>
              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-6 mb-4">
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>
                  The longer it takes to pay off, the more expensive it becomes
                </p>
              </div>
              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-6">
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>
                  A $200 purchase can turn into much more if interest builds for months
                </p>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mt-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Debt changes the real cost of things.</strong>
              </p>
            </div>
          </div>

          {/* Compound Interest Both Ways */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#889063]/10 border-4 border-[#889063] rounded-xl p-8">
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Investment Compounding</strong></h3>
              <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}>Money grows FOR you</p>
              <div className="flex items-center justify-center">
                <TrendingUp className="w-20 h-20 text-[#889063]" />
              </div>
            </div>

            <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-xl p-8">
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Debt Compounding</strong></h3>
              <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}>Debt grows AGAINST you</p>
              <div className="flex items-center justify-center">
                <TrendingUp className="w-20 h-20 text-[#FFCFD0] transform rotate-180" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Compound interest works both ways
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>
              You already learned compound growth in investing. Interest on debt uses the same concept, but negatively.
            </p>
            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Instead of money growing for you, it grows against you.
            </p>

            <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-lg p-8 mb-6">
              <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Compounding on debt means:</strong></p>
              <ul className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <li>• Interest adds to balance</li>
                <li>• Future interest grows faster</li>
                <li>• Debt snowballs</li>
              </ul>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>This is why debt becomes dangerous when left unpaid.</strong>
              </p>
            </div>
          </div>

          {/* Why Lenders Love High Interest */}
          <div className="bg-[#CFBB99]/40 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Why lenders love high interest
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg p-8 text-center">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Higher interest:</strong></p>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Earns lenders more profit</p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Keeps borrowers</strong></p>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>In debt longer</p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Increases</strong></p>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Total repayment</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 mb-6">
              <p className="text-[#1C1C1C] text-center text-xl" style={{ letterSpacing: '-0.89px' }}>
                Credit card companies benefit when balances are not paid in full.
              </p>
            </div>

            <div className="bg-[#889063] text-white rounded-lg p-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Understanding interest protects you from their trap.</strong>
              </p>
            </div>
          </div>

          {/* Key Vocabulary */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: 'Interest', def: 'Cost charged for borrowing' },
                { term: 'APR', def: 'Annual interest rate' },
                { term: 'Daily rate', def: 'APR divided per day' },
                { term: 'Principal', def: 'Original borrowed amount' },
                { term: 'Compound interest', def: 'Interest added onto interest' },
                { term: 'Balance', def: 'Total owed' },
                { term: 'Carrying a balance', def: 'Not paying full statement' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 border-l-4 border-[#889063]">
                  <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>{item.term}</strong></h3>
                  <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>{item.def}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-[#889063] text-white rounded-xl p-10">
            <h2 className="text-3xl mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Interest is the cost of borrowing',
                'APR determines how expensive debt is',
                'Credit cards charge interest daily',
                'Carrying balances causes compounding debt',
                'Interest increases the true cost of purchases'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-1" />
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>{point}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Quick Check Quiz */}
      <section className="px-6 py-12 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#1C1C1C] mb-10" style={{ letterSpacing: '-0.89px' }}>Quick Check</h2>
          
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="bg-[#E5D7C4] rounded-xl p-10">
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. What is APR?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Monthly fee', correct: false },
                  { text: 'B) Annual interest rate', correct: true },
                  { text: 'C) Credit score', correct: false },
                  { text: 'D) Loan balance', correct: false }
                ].map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(1, answer.text, answer.correct)}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all text-lg ${
                      selectedAnswers[1] === answer.text
                        ? 'border-[#889063] bg-[#889063]/10'
                        : incorrectAnswers[`1-${answer.text}`]
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40 bg-white'
                    }`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    <span className="text-[#1C1C1C]">{answer.text}</span>
                    {selectedAnswers[1] === answer.text && (
                      <CheckCircle2 className="inline-block ml-2 w-6 h-6 text-[#889063]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-[#E5D7C4] rounded-xl p-10">
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. Why does credit card debt grow quickly?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Fixed payments', correct: false },
                  { text: 'B) Daily compounding interest', correct: true },
                  { text: 'C) Rewards', correct: false },
                  { text: 'D) No fees', correct: false }
                ].map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(2, answer.text, answer.correct)}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all text-lg ${
                      selectedAnswers[2] === answer.text
                        ? 'border-[#889063] bg-[#889063]/10'
                        : incorrectAnswers[`2-${answer.text}`]
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40 bg-white'
                    }`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    <span className="text-[#1C1C1C]">{answer.text}</span>
                    {selectedAnswers[2] === answer.text && (
                      <CheckCircle2 className="inline-block ml-2 w-6 h-6 text-[#889063]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-[#E5D7C4] rounded-xl p-10">
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. What happens when you carry a balance?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) No cost', correct: false },
                  { text: 'B) Interest builds and increases what you owe', correct: true },
                  { text: 'C) Debt disappears', correct: false },
                  { text: 'D) Credit improves automatically', correct: false }
                ].map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(3, answer.text, answer.correct)}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all text-lg ${
                      selectedAnswers[3] === answer.text
                        ? 'border-[#889063] bg-[#889063]/10'
                        : incorrectAnswers[`3-${answer.text}`]
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40 bg-white'
                    }`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    <span className="text-[#1C1C1C]">{answer.text}</span>
                    {selectedAnswers[3] === answer.text && (
                      <CheckCircle2 className="inline-block ml-2 w-6 h-6 text-[#889063]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 md:px-12 bg-[#E5D7C4]">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <Link 
              to="/credit-debt/lesson-3"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/credit-debt/lesson-5"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                The Minimum Payment Trap →
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