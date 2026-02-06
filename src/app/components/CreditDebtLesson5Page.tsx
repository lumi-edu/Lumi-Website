import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, AlertTriangle, X, TrendingDown } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function CreditDebtLesson5Page() {
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
            The Minimum Payment Trap
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Credit and Debt • Lesson 5
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Opening - Trap Visual */}
          <div className="bg-white border-4 border-[#FFCFD0] rounded-2xl p-10 text-center shadow-2xl">
            <div className="flex justify-center mb-8">
              <AlertTriangle className="w-24 h-24 text-[#FFCFD0]" />
            </div>
            <h2 className="text-5xl md:text-6xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Minimum payments are designed to keep you in debt
            </h2>
            <div className="bg-[#FFCFD0]/10 backdrop-blur rounded-xl p-10 mb-8 max-w-3xl mx-auto border-2 border-[#FFCFD0]">
              <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                Credit card companies make paying off debt seem easy by offering very small minimum payments.
              </p>
              <p className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                <strong>But those small payments extend debt for years and cost you thousands more.</strong>
              </p>
            </div>
            <div className="bg-[#354024] text-white rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Minimum payments are a trap.</strong>
              </p>
            </div>
          </div>

          {/* What is the Minimum Payment */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              What is the minimum payment
            </h2>
            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              The minimum payment is the smallest amount you are allowed to pay each month on your credit card balance.
            </p>

            <div className="bg-[#CFBB99]/30 rounded-lg p-8 mb-8">
              <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>It is usually calculated as:</strong></p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-6">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>A small percentage of your balance (1-3%)</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Or a fixed dollar amount (like $25-$35)</p>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 mb-6">
              <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                On a $1,000 balance, the minimum might only be $25 to $30.
              </p>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>So it seems affordable, but that is the problem.</strong>
              </p>
            </div>
          </div>

          {/* Why Minimum Payments Keep You in Debt */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Why minimum payments keep you in debt
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-[#FFCFD0]/30 to-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="w-12 h-12 text-[#FFCFD0]" />
                  <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Most goes to interest</h3>
                </div>
                <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                  When you only pay the minimum, most of it covers interest charges, not your actual balance.
                </p>
                <div className="bg-white rounded-lg p-8">
                  <p className="text-[#1C1C1C] text-lg mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Example:</strong></p>
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                    $30 minimum payment might be $20 interest + $10 toward principal
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FFCFD0]/30 to-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <TrendingDown className="w-12 h-12 text-[#FFCFD0]" />
                  <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Balance barely moves</h3>
                </div>
                <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                  Since only a tiny portion reduces your balance, it takes years to pay off.
                </p>
                <div className="bg-white rounded-lg p-8">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                    A $2,000 balance at 18% APR can take over 10 years to pay off with minimums
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-xl p-10 text-center">
              <p className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                <strong>You stay in debt longer and pay much more in total.</strong>
              </p>
              <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>
                This is exactly how credit card companies make their profit.
              </p>
            </div>
          </div>

          {/* Real Example - Dramatic Comparison */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Real example: the cost of minimum payments
            </h2>

            <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 mb-8 text-center">
              <p className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                <strong>You owe $3,000 at 20% APR</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <X className="w-16 h-16 text-[#FFCFD0]" />
                </div>
                <h3 className="text-3xl text-[#1C1C1C] mb-6 text-center" style={{ letterSpacing: '-0.89px' }}>Paying minimums only</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Time to pay off:</strong></p>
                    <p className="text-3xl text-[#1C1C1C] mt-2" style={{ letterSpacing: '-0.89px' }}>15+ years</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Total interest paid:</strong></p>
                    <p className="text-3xl text-[#FFCFD0] mt-2" style={{ letterSpacing: '-0.89px' }}><strong>$4,800+</strong></p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Total paid:</strong></p>
                    <p className="text-3xl text-[#1C1C1C] mt-2" style={{ letterSpacing: '-0.89px' }}>$7,800+</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#889063]/10 border-4 border-[#889063] rounded-xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-16 h-16 text-[#889063]" />
                </div>
                <h3 className="text-3xl text-[#1C1C1C] mb-6 text-center" style={{ letterSpacing: '-0.89px' }}>Paying $150/month</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Time to pay off:</strong></p>
                    <p className="text-3xl text-[#1C1C1C] mt-2" style={{ letterSpacing: '-0.89px' }}>2 years</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Total interest paid:</strong></p>
                    <p className="text-3xl text-[#889063] mt-2" style={{ letterSpacing: '-0.89px' }}><strong>$650</strong></p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Total paid:</strong></p>
                    <p className="text-3xl text-[#1C1C1C] mt-2" style={{ letterSpacing: '-0.89px' }}>$3,650</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mt-8 text-center">
              <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Paying more than the minimum saves over $4,000 and 13 years.</strong>
              </p>
            </div>
          </div>

          {/* Why Companies Want You to Pay Minimums */}
          <div className="bg-[#CFBB99]/40 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Why credit card companies want you to pay minimums
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#FFCFD0]">
                <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Longer debt = more interest = more profit</strong>
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#FFCFD0]">
                <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Customers stay in debt for years instead of months</strong>
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#FFCFD0]">
                <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  <strong>People think they are managing debt, but they are stuck</strong>
                </p>
              </div>
            </div>

            <div className="bg-[#889063] text-white rounded-lg p-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>The system is built to keep borrowers paying forever.</strong>
              </p>
            </div>
          </div>

          {/* What to Do Instead */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              What to do instead
            </h2>

            <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10 mb-8">
              <h3 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>Pay more than the minimum</h3>
              <p className="text-2xl mb-8 opacity-90" style={{ letterSpacing: '-0.89px' }}>
                Even small increases make a huge difference.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
                  <p className="text-xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Minimum: $30</strong></p>
                  <p className="text-lg opacity-90" style={{ letterSpacing: '-0.89px' }}>→ 15 years of debt</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
                  <p className="text-xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Pay $60 instead</strong></p>
                  <p className="text-lg opacity-90" style={{ letterSpacing: '-0.89px' }}>→ 4 years of debt</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
                  <p className="text-xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Pay $100 instead</strong></p>
                  <p className="text-lg opacity-90" style={{ letterSpacing: '-0.89px' }}>→ 2.5 years of debt</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-10 shadow-lg">
                <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Smart payment strategies</h3>
                <div className="space-y-4">
                  {[
                    'Pay double or triple the minimum if possible',
                    'Focus on paying off high-interest cards first',
                    'Set a fixed payment amount, not a minimum',
                    'Automate extra payments each month',
                    'Avoid new charges while paying down debt'
                  ].map((strategy, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-[#889063]/10 rounded-lg p-4">
                      <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{strategy}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-xl p-10">
                <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>What to avoid</h3>
                <div className="space-y-4">
                  {[
                    'Paying only the minimum',
                    'Skipping payments',
                    'Making late payments',
                    'Continuing to use the card while in debt',
                    'Ignoring the total balance'
                  ].map((avoid, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                      <X className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{avoid}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* The Debt Snowball vs Avalanche */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Debt payoff methods: snowball vs avalanche
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8">
                <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Debt snowball</h3>
                <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                  Pay off smallest balances first
                </p>
                <div className="bg-white rounded-lg p-6 mb-6">
                  <p className="text-lg text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Why it works:</strong></p>
                  <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li>• Quick wins build motivation</li>
                    <li>• Psychological momentum</li>
                    <li>• Fewer accounts to manage</li>
                  </ul>
                </div>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Best for people who need to feel progress fast
                </p>
              </div>

              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8">
                <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Debt avalanche</h3>
                <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                  Pay off highest interest rates first
                </p>
                <div className="bg-white rounded-lg p-6 mb-6">
                  <p className="text-lg text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Why it works:</strong></p>
                  <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li>• Saves the most money</li>
                    <li>• Reduces total interest faster</li>
                    <li>• Mathematically optimal</li>
                  </ul>
                </div>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Best for people focused on saving money
                </p>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mt-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Both methods work. Choose the one that keeps you motivated.</strong>
              </p>
            </div>
          </div>

          {/* Key Vocabulary */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: 'Minimum payment', def: 'Smallest required monthly payment' },
                { term: 'Principal', def: 'Original amount borrowed' },
                { term: 'Interest allocation', def: 'How payment is split between interest and principal' },
                { term: 'Debt snowball', def: 'Paying smallest debts first' },
                { term: 'Debt avalanche', def: 'Paying highest interest debts first' },
                { term: 'Payment strategy', def: 'Plan for reducing debt efficiently' }
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
                'Minimum payments keep you in debt for years',
                'Most of minimum payment goes to interest',
                'Paying more saves thousands of dollars',
                'Credit card companies profit from minimums',
                'Debt snowball and avalanche both work',
                'Choose a strategy and stick with it'
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. Why do minimum payments keep you in debt longer?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) They reduce your credit score', correct: false },
                  { text: 'B) Most of the payment goes to interest, not principal', correct: true },
                  { text: 'C) They increase your balance', correct: false },
                  { text: 'D) They eliminate rewards', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. Which debt payoff method saves the most money?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Paying minimums', correct: false },
                  { text: 'B) Debt avalanche (highest interest first)', correct: true },
                  { text: 'C) Ignoring debt', correct: false },
                  { text: 'D) Paying randomly', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. What happens when you pay more than the minimum?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Debt takes longer to pay off', correct: false },
                  { text: 'B) You pay off debt faster and save money on interest', correct: true },
                  { text: 'C) Interest increases', correct: false },
                  { text: 'D) Credit score decreases', correct: false }
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
              to="/credit-debt/lesson-4"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/credit-debt/lesson-6"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Credit Score Basics →
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