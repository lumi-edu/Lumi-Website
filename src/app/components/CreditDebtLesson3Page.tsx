import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function CreditDebtLesson3Page() {
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
            What Debt Means and How It Grows
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Credit and Debt • Lesson 3
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Opening Statement - Full Width Hero */}
          <div className="bg-gradient-to-r from-[#354024] to-[#354024]/80 text-white rounded-2xl p-12 text-center">
            <h2 className="text-5xl md:text-6xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Debt is borrowed money that still belongs to someone else
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl mb-8 opacity-90" style={{ letterSpacing: '-0.89px' }}>
                Debt is created when you use credit and do not immediately pay it back.
              </p>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
                <p className="text-2xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                  You borrow money → you owe that money → plus extra cost
                </p>
                <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>
                  That extra cost is interest.
                </p>
              </div>
              <div className="bg-[#889063] rounded-lg p-8">
                <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Debt is not just a number. It is an obligation that grows if left unpaid.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Why Debt Grows - Visual Progression */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Debt grows because borrowing has a price
            </h2>
            <div className="bg-white rounded-xl p-10 shadow-lg mb-8">
              <p className="text-2xl text-[#1C1C1C] text-center mb-10" style={{ letterSpacing: '-0.89px' }}>
                When lenders give you money, they charge interest as the cost of using it.
              </p>
              <div className="bg-[#CFBB99]/30 rounded-lg p-8 text-center mb-8">
                <p className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Interest means: You pay more than what you originally borrowed.</strong>
                </p>
              </div>

              <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>So debt grows when:</strong></p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-lg p-6">
                  <TrendingUp className="w-10 h-10 text-[#FFCFD0] mb-4" />
                  <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Interest is added</strong></p>
                </div>
                <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-lg p-6">
                  <TrendingUp className="w-10 h-10 text-[#FFCFD0] mb-4" />
                  <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Payments are delayed</strong></p>
                </div>
                <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-lg p-6">
                  <TrendingUp className="w-10 h-10 text-[#FFCFD0] mb-4" />
                  <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Only minimum payments are made</strong></p>
                </div>
                <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-lg p-6">
                  <TrendingUp className="w-10 h-10 text-[#FFCFD0] mb-4" />
                  <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Balances stay unpaid over time</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-xl p-8 text-center">
              <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Debt expands quietly and continuously.</strong>
              </p>
            </div>
          </div>

          {/* Compounding Danger - Visual Warning */}
          <div className="bg-gradient-to-br from-[#FFCFD0]/30 to-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="w-14 h-14 text-[#FFCFD0]" />
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                The danger of compounding debt
              </h2>
            </div>

            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Just like investments compound positively, debt compounds negatively.
            </p>

            <div className="bg-white rounded-lg p-8 mb-8">
              <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}>
                Interest is added to your balance, and future interest is charged on the new higher balance.
              </p>
              <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>So growth happens on:</strong>
              </p>
              <div className="space-y-4">
                <div className="bg-[#FFCFD0]/20 rounded-lg p-6 border-l-4 border-[#FFCFD0]">
                  <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Original balance</strong></p>
                </div>
                <div className="bg-[#FFCFD0]/30 rounded-lg p-6 border-l-4 border-[#FFCFD0]">
                  <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Past interest</strong></p>
                </div>
                <div className="bg-[#FFCFD0]/40 rounded-lg p-6 border-l-4 border-[#FFCFD0]">
                  <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Fees</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 text-center">
              <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Debt snowballs if it is not controlled early.</strong>
              </p>
            </div>
          </div>

          {/* Types of Debt - Side by Side Major Categories */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-10 text-center" style={{ letterSpacing: '-0.89px' }}>
              Types of debt
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Revolving Debt */}
              <div className="bg-gradient-to-br from-[#FFCFD0]/50 to-[#FFCFD0]/30 border-4 border-[#FFCFD0] text-[#1C1C1C] rounded-2xl p-10">
                <h3 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>Revolving debt</h3>
                <p className="text-xl mb-8 opacity-90" style={{ letterSpacing: '-0.89px' }}>
                  This comes from credit cards.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="bg-white/70 backdrop-blur rounded-lg p-6">
                    <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Balance changes monthly</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur rounded-lg p-6">
                    <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Interest compounds daily</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur rounded-lg p-6">
                    <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>No fixed payoff date</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur rounded-lg p-6">
                    <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Easy to stay in debt for years</p>
                  </div>
                </div>

                <div className="bg-[#354024] text-white rounded-lg p-8">
                  <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>Revolving debt is the most dangerous because it has no structure forcing you out.</strong>
                  </p>
                </div>
              </div>

              {/* Installment Debt */}
              <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-2xl p-10">
                <h3 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>Installment debt</h3>
                <p className="text-xl mb-8 opacity-90" style={{ letterSpacing: '-0.89px' }}>
                  Loans with fixed payments.
                </p>

                <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
                  <p className="text-xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Examples:</strong></p>
                  <ul className="space-y-2 text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li>• Auto loans</li>
                    <li>• Student loans</li>
                    <li>• Personal loans</li>
                  </ul>
                </div>

                <div className="bg-white/20 backdrop-blur rounded-lg p-8">
                  <p className="mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}>
                    This debt still grows with interest, but payments are structured to eventually eliminate it.
                  </p>
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>More predictable, but still costly if the rate is high.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Good vs Bad Debt - Realistic Table Layout */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-6 text-center" style={{ letterSpacing: '-0.89px' }}>
              Good debt vs bad debt (realistic explanation)
            </h2>
            <p className="text-xl text-[#1C1C1C] text-center mb-10" style={{ letterSpacing: '-0.89px' }}>
              People often hear these terms, but let us break them down simply.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#889063]/10 border-4 border-[#889063] rounded-xl p-10">
                <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>"Good" debt</h3>
                <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  Debt used for things that can improve your future financially.
                </p>
                
                <div className="bg-white rounded-lg p-8 mb-8">
                  <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Examples:</strong></p>
                  <ul className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                      <span>Education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                      <span>Business investment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                      <span>Buying assets that increase income</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#889063] text-white rounded-lg p-6">
                  <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                    Still risky, still costs interest, but may lead to long-term benefit.
                  </p>
                </div>
              </div>

              <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-xl p-10">
                <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>"Bad" debt</h3>
                <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  Debt used for things that lose value or do not generate income.
                </p>
                
                <div className="bg-white rounded-lg p-8 mb-8">
                  <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Examples:</strong></p>
                  <ul className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFCFD0] text-2xl flex-shrink-0">✕</span>
                      <span>Impulse purchases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFCFD0] text-2xl flex-shrink-0">✕</span>
                      <span>Luxury items you cannot afford</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFCFD0] text-2xl flex-shrink-0">✕</span>
                      <span>Buying things just to keep up with others</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#FFCFD0]/50 border-2 border-[#FFCFD0] rounded-lg p-6">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <strong>Bad debt drains future income and adds financial stress.</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-xl p-10 text-center">
              <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Important truth: Any debt can become bad if it becomes unmanageable.</strong>
              </p>
            </div>
          </div>

          {/* Why Debt Traps People - Stacked Warning Boxes */}
          <div className="bg-[#CFBB99]/40 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Why debt traps people
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>Debt traps happen because:</p>

            <div className="space-y-4">
              {[
                'Interest keeps increasing balances',
                'Minimum payments slow progress',
                'Spending continues while owing money',
                'Emotional purchases add more debt',
                'People underestimate long-term cost'
              ].map((reason, idx) => (
                <div key={idx} className="bg-white border-l-4 border-[#FFCFD0] rounded-lg p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFCFD0] text-[#1C1C1C] flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                    <strong>{idx + 1}</strong>
                  </div>
                  <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>{reason}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mt-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Debt feels small monthly but huge long-term.</strong>
              </p>
            </div>
          </div>

          {/* Real World Example - Step by Step Visual */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Real world example</h2>
            
            <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 mb-8">
              <p className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                <strong>You buy something for $500 on a credit card.</strong>
              </p>
            </div>

            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>If you do not pay it off quickly:</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-[#FFCFD0]/20 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-[#FFCFD0] text-[#1C1C1C] flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                  <strong>1</strong>
                </div>
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>Interest gets added</p>
              </div>
              <div className="flex items-center gap-4 bg-[#FFCFD0]/30 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-[#FFCFD0] text-[#1C1C1C] flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                  <strong>2</strong>
                </div>
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>Your balance increases</p>
              </div>
              <div className="flex items-center gap-4 bg-[#FFCFD0]/40 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-[#FFCFD0] text-[#1C1C1C] flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                  <strong>3</strong>
                </div>
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>You owe more than $500</p>
              </div>
              <div className="flex items-center gap-4 bg-[#FFCFD0]/50 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-[#FFCFD0] text-[#1C1C1C] flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                  <strong>4</strong>
                </div>
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>Payments mostly go toward interest</p>
              </div>
              <div className="flex items-center gap-4 bg-[#FFCFD0]/60 border-2 border-[#FFCFD0] rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-[#FFCFD0] text-[#1C1C1C] flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                  <strong>5</strong>
                </div>
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Debt lasts longer than expected</strong></p>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>What started as one purchase becomes months or years of repayment.</strong>
              </p>
            </div>
          </div>

          {/* Debt Reduces Future Freedom */}
          <div className="bg-gradient-to-br from-[#354024] to-[#354024]/80 text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Debt reduces future freedom
            </h2>
            <p className="text-xl mb-8 opacity-90" style={{ letterSpacing: '-0.89px' }}>Debt affects:</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                'Ability to save',
                'Ability to invest',
                'Ability to qualify for loans',
                'Financial stress',
                'Monthly cash flow'
              ].map((impact, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-6 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#889063]"></div>
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>{impact}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#889063] rounded-lg p-8 text-center">
              <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Debt takes money from your future before you even earn it.</strong>
              </p>
            </div>
          </div>

          {/* Warning Signs - Checklist Style */}
          <div className="bg-[#CFBB99]/30 border-4 border-[#CFBB99] rounded-xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="w-14 h-14 text-[#CFBB99]" />
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Warning signs debt is becoming dangerous
              </h2>
            </div>

            <div className="space-y-4">
              {[
                'You only pay minimum payments',
                'Balances never go down',
                'Interest keeps being added',
                'You borrow to pay other debt',
                'You feel stressed about payments',
                'Debt grows faster than income'
              ].map((sign, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-[#CFBB99] flex items-start gap-4">
                  <AlertTriangle className="w-7 h-7 text-[#CFBB99] flex-shrink-0 mt-0.5" />
                  <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>{sign}</strong></p>
                </div>
              ))}
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mt-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Debt becomes harmful when it controls your money instead of you controlling it.</strong>
              </p>
            </div>
          </div>

          {/* Key Vocabulary */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { term: 'Debt', def: 'Money owed from borrowing' },
                { term: 'Interest', def: 'Cost added to borrowed money' },
                { term: 'Revolving debt', def: 'Credit card balances that roll monthly' },
                { term: 'Installment debt', def: 'Loans with fixed payments' },
                { term: 'Compounding debt', def: 'Interest growing on past interest' },
                { term: 'Asset', def: 'Something that holds value or generates income' },
                { term: 'Liability', def: 'Something that costs money' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 border-l-4 border-[#CFBB99]">
                  <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>{item.term}</strong></h3>
                  <p className="text-[#1C1C1C] opacity-70 text-lg" style={{ letterSpacing: '-0.89px' }}>{item.def}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-[#889063] text-white rounded-xl p-10">
            <h2 className="text-3xl mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Debt is borrowed money plus cost',
                'Interest causes balances to grow',
                'Credit card debt compounds quickly',
                'Loans are structured but still costly',
                'Debt can trap people long-term',
                'Uncontrolled debt limits financial freedom'
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. Why does debt grow over time?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Rewards', correct: false },
                  { text: 'B) Interest and unpaid balances', correct: true },
                  { text: 'C) Credit limits', correct: false },
                  { text: 'D) Saving', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. Which type of debt is most likely to grow quickly?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Installment loans', correct: false },
                  { text: 'B) Revolving credit card debt', correct: true },
                  { text: 'C) Cash', correct: false },
                  { text: 'D) Savings', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. What is a major danger of paying only minimum payments?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Faster payoff', correct: false },
                  { text: 'B) Balance stays high and interest increases', correct: true },
                  { text: 'C) Lower interest', correct: false },
                  { text: 'D) Eliminates debt', correct: false }
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
              to="/credit-debt/lesson-2"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/credit-debt/lesson-4"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Interest Rates Explained Simply →
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