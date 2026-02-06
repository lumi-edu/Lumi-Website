import { Link } from './RouterLink';
import { ArrowLeft, Building2, CreditCard, Calendar, TrendingDown, Clock, AlertTriangle, Shield, CheckCircle2, BarChart3, TrendingUp, DollarSign, Users, Zap, Award } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function CreditDebtLesson8Page() {
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
            How to Build Credit Safely
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Credit and Debt • Lesson 8
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Opening - Layered Card Design */}
          <div className="bg-[#CFBB99]/60 rounded-3xl p-3 shadow-xl">
            <div className="bg-[#889063]/60 rounded-2xl p-3">
              <div className="bg-white rounded-xl p-12 text-center">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#889063] opacity-20 rounded-3xl transform rotate-6"></div>
                    <div className="absolute inset-0 bg-[#889063] opacity-30 rounded-3xl transform -rotate-3"></div>
                    <div className="relative bg-[#354024] rounded-2xl p-8">
                      <Building2 className="w-24 h-24 text-white" />
                    </div>
                  </div>
                </div>
                <h2 className="text-5xl md:text-6xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                  Credit is built through behavior, not just owning a card
                </h2>
                <div className="bg-[#E5D7C4] rounded-2xl p-10 max-w-3xl mx-auto border-2 border-[#889063]">
                  <p className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                    Many people think you build credit just by having a credit card. That is not true.
                  </p>
                  <div className="bg-[#354024] text-white rounded-xl p-6">
                    <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                      <strong>You build credit by using it responsibly, paying on time, and keeping balances low.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Foundation */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              The foundation of credit building
            </h2>
            
            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Building credit is about proving reliability to lenders over time.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 text-center">
                <Shield className="w-16 h-16 text-[#889063] mx-auto mb-6" />
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Consistency</strong></h3>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Pay on time, every time
                </p>
              </div>

              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 text-center">
                <TrendingDown className="w-16 h-16 text-[#889063] mx-auto mb-6" />
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Low balances</strong></h3>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Keep utilization under 30%
                </p>
              </div>

              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 text-center">
                <Calendar className="w-16 h-16 text-[#889063] mx-auto mb-6" />
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Patience</strong></h3>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Credit history takes time
                </p>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mt-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Good credit is built slowly and deliberately, not quickly or carelessly.</strong>
              </p>
            </div>
          </div>

          {/* Seven Steps to Build Credit Safely */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Seven steps to build credit safely
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl p-10 shadow-lg">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-[#889063] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-3xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>1</strong>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                      Start with a beginner-friendly credit product
                    </h3>
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                      Choose a credit option designed for people starting their credit journey.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-[#CFBB99]/30 rounded-lg p-8">
                    <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Secured credit card</strong></h4>
                    <p className="text-lg text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                      Requires a deposit (usually $200-$500)
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                        Deposit becomes your credit limit. Low risk for lenders.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#CFBB99]/30 rounded-lg p-8">
                    <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Student credit card</strong></h4>
                    <p className="text-lg text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                      Designed for students with limited history
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                        Easier approval. Lower limits initially.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#CFBB99]/30 rounded-lg p-8">
                    <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Authorized user</strong></h4>
                    <p className="text-lg text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                      Added to someone else's card
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                        Piggyback on their payment history. No responsibility for payments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl p-10 shadow-lg">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-[#889063] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-3xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>2</strong>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                      Make small, manageable purchases
                    </h3>
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                      Use your credit card for things you would buy anyway.
                    </p>
                  </div>
                </div>

                <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 mb-6">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Good starting purchases:</strong></h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Groceries',
                      'Gas',
                      'Streaming subscriptions',
                      'Phone bill',
                      'Coffee or lunch'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-4">
                        <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                        <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-lg p-8">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Avoid:</strong></h4>
                  <div className="space-y-3">
                    {[
                      'Buying things you cannot afford',
                      'Maxing out your card',
                      'Using credit for impulse purchases',
                      'Treating credit like free money'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                        <AlertTriangle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-0.5" />
                        <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl p-10 shadow-lg">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-[#889063] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-3xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>3</strong>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                      Pay your balance in full every month
                    </h3>
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                      This is the single most important habit for building credit.
                    </p>
                  </div>
                </div>

                <div className="bg-[#889063] text-white rounded-lg p-10 mb-6">
                  <p className="text-3xl text-center mb-6" style={{ letterSpacing: '-0.89px' }}>
                    <strong>Pay in full = Build credit + No interest</strong>
                  </p>
                  <div className="bg-white/20 backdrop-blur rounded-lg p-6">
                    <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                      When you pay your full statement balance by the due date, you avoid interest charges while still building a positive payment history.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#CFBB99]/30 rounded-lg p-8">
                    <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Benefits of paying in full</strong></h4>
                    <div className="space-y-3">
                      {[
                        'No interest charges',
                        'Builds positive payment history',
                        'Keeps utilization low',
                        'Develops responsible habits',
                        'Saves money long-term'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                          <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                          <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-lg p-8">
                    <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Risks of carrying a balance</strong></h4>
                    <div className="space-y-3">
                      {[
                        'Accumulates interest (15-25% APR)',
                        'Increases total cost',
                        'Raises utilization ratio',
                        'Creates debt cycle',
                        'Can damage credit over time'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                          <AlertTriangle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-0.5" />
                          <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-xl p-10 shadow-lg">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-[#889063] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-3xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>4</strong>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                      Set up automatic payments
                    </h3>
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                      Never miss a payment by automating them.
                    </p>
                  </div>
                </div>

                <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 mb-6">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Autopay options:</strong></h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Full statement balance (Best)</strong></p>
                      <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                        Automatically pays entire balance. No interest. Builds credit perfectly.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Minimum payment (Backup)</strong></p>
                      <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                        Prevents late fees, but you will pay interest. Use as a safety net only.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#354024] text-white rounded-lg p-8 text-center">
                  <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>Late payments stay on your credit report for 7 years. Automation prevents this.</strong>
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-xl p-10 shadow-lg">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-[#889063] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-3xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>5</strong>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                      Keep your credit utilization low
                    </h3>
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                      Use less than 30% of your available credit.
                    </p>
                  </div>
                </div>

                <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 mb-8">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6 text-center" style={{ letterSpacing: '-0.89px' }}><strong>Utilization example:</strong></h4>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Credit limit: <strong>$1,000</strong></p>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Good: $200 balance</p>
                            <p className="text-lg text-[#889063]" style={{ letterSpacing: '-0.89px' }}><strong>20%</strong></p>
                          </div>
                          <div className="w-full bg-[#CFBB99]/30 rounded-full h-3">
                            <div className="bg-[#889063] h-3 rounded-full" style={{ width: '20%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Risky: $700 balance</p>
                            <p className="text-lg text-[#FFCFD0]" style={{ letterSpacing: '-0.89px' }}><strong>70%</strong></p>
                          </div>
                          <div className="w-full bg-[#CFBB99]/30 rounded-full h-3">
                            <div className="bg-[#FFCFD0] h-3 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#CFBB99]/40 rounded-lg p-8">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>How to keep utilization low:</strong></h4>
                  <div className="space-y-3">
                    {[
                      'Pay off purchases immediately',
                      'Make multiple payments per month',
                      'Keep spending well below your limit',
                      'Request a credit limit increase over time',
                      'Use your card sparingly but regularly'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                        <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                        <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-xl p-10 shadow-lg">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-[#889063] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-3xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>6</strong>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                      Avoid opening too many accounts at once
                    </h3>
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                      Multiple credit applications hurt your score.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-lg p-8 mb-6">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Why this matters:</strong></h4>
                  <div className="space-y-3">
                    {[
                      'Each application creates a hard inquiry',
                      'Hard inquiries lower your score temporarily',
                      'Multiple new accounts look risky to lenders',
                      'Lowers your average account age',
                      'Signals financial desperation'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                        <AlertTriangle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-0.5" />
                        <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8">
                  <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Smart approach:</strong></h4>
                  <p className="text-lg text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                    Start with one card. Use it responsibly for 6-12 months. Then consider a second card if needed.
                  </p>
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                      <strong>Quality over quantity.</strong> One well-managed card builds credit better than five poorly-managed cards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-white rounded-xl p-10 shadow-lg">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-[#889063] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-3xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>7</strong>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                      Monitor your credit regularly
                    </h3>
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                      Check your credit reports and score to track progress.
                    </p>
                  </div>
                </div>

                <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 mb-6">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Free ways to monitor credit:</strong></h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>AnnualCreditReport.com</strong></p>
                      <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                        Free credit reports from all three bureaus once per year
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Credit card apps</strong></p>
                      <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                        Many cards offer free score monitoring
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Credit Karma</strong></p>
                      <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                        Free credit scores and monitoring
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Bank apps</strong></p>
                      <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                        Some banks provide free score tracking
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#CFBB99]/40 rounded-lg p-8">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>What to look for:</strong></h4>
                  <div className="space-y-3">
                    {[
                      'Check for errors or fraudulent accounts',
                      'Track your score over time',
                      'See how your actions affect your score',
                      'Ensure all payments are reported correctly',
                      'Identify areas for improvement'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                        <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                        <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline: What to Expect */}
          <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Timeline: What to expect
            </h2>

            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur rounded-lg p-8">
                <div className="flex items-start gap-6">
                  <Calendar className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-2xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>First 3-6 months</strong></p>
                    <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>
                      Your credit file is established. Initial score appears. Focus on building good habits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-lg p-8">
                <div className="flex items-start gap-6">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-2xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>6-12 months</strong></p>
                    <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>
                      Score improves with consistent on-time payments. Credit history lengthens. Utilization patterns stabilize.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-lg p-8">
                <div className="flex items-start gap-6">
                  <Zap className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-2xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>1-2 years</strong></p>
                    <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>
                      Score reaches good range with responsible use. Qualify for better credit products. Credit history becomes more robust.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-lg p-8">
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-2xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>2+ years</strong></p>
                    <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>
                      Strong credit profile. Access to premium cards, better rates, higher limits. Long-term financial foundation built.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] rounded-lg p-8 mt-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Building excellent credit takes time. Stay patient and consistent.</strong>
              </p>
            </div>
          </div>

          {/* Common Mistakes to Avoid */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Common mistakes to avoid
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { mistake: 'Missing payments', impact: 'Biggest damage to credit score. Stays on report for 7 years.' },
                { mistake: 'Maxing out cards', impact: 'High utilization signals financial stress. Lowers score significantly.' },
                { mistake: 'Closing old accounts', impact: 'Reduces credit history length and available credit. Hurts score.' },
                { mistake: 'Only paying minimums', impact: 'Accumulates expensive interest. Keeps utilization high.' },
                { mistake: 'Applying for too much credit', impact: 'Multiple hard inquiries lower score. Looks desperate to lenders.' },
                { mistake: 'Ignoring your credit report', impact: 'Miss errors or fraud. Cannot track progress or issues.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-lg p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-[#FFCFD0] flex-shrink-0" />
                    <h3 className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>{item.mistake}</strong></h3>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      {item.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Vocabulary */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: 'Secured credit card', def: 'Credit card requiring a security deposit' },
                { term: 'Authorized user', def: 'Person added to someone else\'s credit card' },
                { term: 'Credit utilization', def: 'Percentage of available credit being used' },
                { term: 'Autopay', def: 'Automatic payment setup to avoid late fees' },
                { term: 'Hard inquiry', def: 'Credit check from applying for credit' },
                { term: 'Credit monitoring', def: 'Tracking credit reports and scores over time' },
                { term: 'Statement balance', def: 'Total amount owed on billing cycle' },
                { term: 'Credit limit', def: 'Maximum amount you can borrow on a card' }
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
                'Start with beginner-friendly credit products',
                'Make small, manageable purchases',
                'Always pay your balance in full',
                'Set up automatic payments',
                'Keep utilization below 30%',
                'Avoid opening too many accounts at once',
                'Monitor your credit regularly',
                'Be patient - good credit takes time'
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. What is the best way to build credit with a credit card?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Only pay the minimum each month', correct: false },
                  { text: 'B) Pay the full balance every month', correct: true },
                  { text: 'C) Max out the card to show you use it', correct: false },
                  { text: 'D) Never use the card', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. What is a good credit utilization target?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) 80%', correct: false },
                  { text: 'B) Below 30%', correct: true },
                  { text: 'C) 100%', correct: false },
                  { text: 'D) It does not matter', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. Why should you set up automatic payments?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) To spend more money', correct: false },
                  { text: 'B) To never miss a payment', correct: true },
                  { text: 'C) To increase your credit limit', correct: false },
                  { text: 'D) To close your account faster', correct: false }
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
              to="/credit-debt/lesson-7"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/credit-debt/lesson-9"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Common Credit Mistakes →
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