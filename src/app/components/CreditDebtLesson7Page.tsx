import { Link } from './RouterLink';
import { ArrowLeft, Scale, TrendingUp, CreditCard, Clock, Layers, AlertCircle, CheckCircle2, BarChart3, Calendar, History, Users } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function CreditDebtLesson7Page() {
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
            Factors That Affect Your Credit Score
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Credit and Debt • Lesson 7
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Opening - Scale/Balance Visual with Circular Design */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#354024] via-[#889063] to-[#CFBB99]"></div>
            <div className="relative text-white p-16 text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-xl rounded-full p-10">
                  <Scale className="w-28 h-28" />
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl mb-10" style={{ letterSpacing: '-0.89px' }}>
                Your credit score is built from specific behaviors
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-2xl mb-8 opacity-95" style={{ letterSpacing: '-0.89px' }}>
                  Credit scores are not random. They are calculated using patterns from your borrowing and repayment history.
                </p>
                <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-8">
                  <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>Understanding these factors helps you control your credit instead of damaging it.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Five Factors Overview */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              The five factors (ranked by importance)
            </h2>
            
            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Credit scoring models like FICO weigh these factors differently. Here is how much each one matters:
            </p>

            <div className="space-y-6">
              <div className="bg-[#889063]/10 border-l-4 border-[#889063] rounded-lg p-8">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                  <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>1. Payment History</h3>
                  <div className="text-3xl text-[#889063]" style={{ letterSpacing: '-0.89px' }}><strong>35%</strong></div>
                </div>
                <div className="w-full bg-[#CFBB99]/30 rounded-full h-4">
                  <div className="bg-[#889063] h-4 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>

              <div className="bg-[#889063]/10 border-l-4 border-[#889063] rounded-lg p-8">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                  <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>2. Amounts Owed</h3>
                  <div className="text-3xl text-[#889063]" style={{ letterSpacing: '-0.89px' }}><strong>30%</strong></div>
                </div>
                <div className="w-full bg-[#CFBB99]/30 rounded-full h-4">
                  <div className="bg-[#889063] h-4 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>

              <div className="bg-[#889063]/10 border-l-4 border-[#889063] rounded-lg p-8">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                  <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>3. Length of Credit History</h3>
                  <div className="text-3xl text-[#889063]" style={{ letterSpacing: '-0.89px' }}><strong>15%</strong></div>
                </div>
                <div className="w-full bg-[#CFBB99]/30 rounded-full h-4">
                  <div className="bg-[#889063] h-4 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>

              <div className="bg-[#889063]/10 border-l-4 border-[#889063] rounded-lg p-8">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                  <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>4. Credit Mix</h3>
                  <div className="text-3xl text-[#889063]" style={{ letterSpacing: '-0.89px' }}><strong>10%</strong></div>
                </div>
                <div className="w-full bg-[#CFBB99]/30 rounded-full h-4">
                  <div className="bg-[#889063] h-4 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>

              <div className="bg-[#889063]/10 border-l-4 border-[#889063] rounded-lg p-8">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                  <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>5. New Credit</h3>
                  <div className="text-3xl text-[#889063]" style={{ letterSpacing: '-0.89px' }}><strong>10%</strong></div>
                </div>
                <div className="w-full bg-[#CFBB99]/30 rounded-full h-4">
                  <div className="bg-[#889063] h-4 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mt-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Payment history and amounts owed make up 65% of your score.</strong>
              </p>
            </div>
          </div>

          {/* Factor 1: Payment History */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              1. Payment history (35%)
            </h2>

            <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10 mb-8">
              <div className="flex items-center gap-4 mb-8">
                <TrendingUp className="w-16 h-16" />
                <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>Most important factor</h3>
              </div>
              <p className="text-2xl mb-8" style={{ letterSpacing: '-0.89px' }}>
                This measures whether you pay your bills on time, every time.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-8">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Lenders want to know: Can we trust you to pay us back?</strong>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-10 shadow-lg">
                <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>What builds payment history</h3>
                <div className="space-y-4">
                  {[
                    'Paying credit cards on time',
                    'Paying loans on time',
                    'No missed payments',
                    'No late payments',
                    'Consistent payment patterns'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-[#889063]/10 rounded-lg p-4">
                      <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-xl p-10">
                <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>What damages payment history</h3>
                <div className="space-y-4">
                  {[
                    'Late payments (30+ days)',
                    'Missed payments',
                    'Accounts sent to collections',
                    'Bankruptcies',
                    'Foreclosures or repossessions'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                      <AlertCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-lg">
              <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>How long negative marks stay</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#FFCFD0]/10 border-2 border-[#FFCFD0] rounded-lg p-6">
                  <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Late payments</strong></p>
                  <p className="text-3xl text-[#FFCFD0]" style={{ letterSpacing: '-0.89px' }}><strong>7 years</strong></p>
                </div>
                <div className="bg-[#FFCFD0]/10 border-2 border-[#FFCFD0] rounded-lg p-6">
                  <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Collections</strong></p>
                  <p className="text-3xl text-[#FFCFD0]" style={{ letterSpacing: '-0.89px' }}><strong>7 years</strong></p>
                </div>
                <div className="bg-[#FFCFD0]/10 border-2 border-[#FFCFD0] rounded-lg p-6">
                  <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Bankruptcy</strong></p>
                  <p className="text-3xl text-[#FFCFD0]" style={{ letterSpacing: '-0.89px' }}><strong>10 years</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Factor 2: Amounts Owed */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              2. Amounts owed (30%)
            </h2>

            <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10 mb-8">
              <div className="flex items-center gap-4 mb-8">
                <CreditCard className="w-16 h-16" />
                <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>Second most important</h3>
              </div>
              <p className="text-2xl mb-8" style={{ letterSpacing: '-0.89px' }}>
                This measures how much of your available credit you are using.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-8">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Key metric: Credit utilization ratio</strong>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-lg mb-8">
              <h3 className="text-3xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>What is credit utilization</h3>
              
              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 mb-8">
                <p className="text-2xl text-[#1C1C1C] mb-6 text-center" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Credit utilization = (Total balances ÷ Total credit limits) × 100</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#CFBB99]/30 rounded-lg p-8">
                  <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Example:</strong></p>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Credit limit: $5,000</p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Current balance: $1,000</p>
                    </div>
                    <div className="bg-[#889063] text-white rounded-lg p-6">
                      <p className="text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Utilization: 20%</strong></p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Best practices:</strong></h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                      <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Keep utilization under 30%</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                      <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Under 10% is even better</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                      <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Pay balances in full monthly</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-lg p-8 text-center">
                <p className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  <strong>High utilization (above 30%) signals financial stress to lenders.</strong>
                </p>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-xl p-10 text-center">
              <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Lower balances = better credit score</strong>
              </p>
            </div>
          </div>

          {/* Factor 3: Length of Credit History */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              3. Length of credit history (15%)
            </h2>

            <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10 mb-8">
              <div className="flex items-center gap-4 mb-8">
                <History className="w-16 h-16" />
                <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>Time matters</h3>
              </div>
              <p className="text-2xl mb-8" style={{ letterSpacing: '-0.89px' }}>
                This measures how long you have been using credit.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-8">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Longer credit history = more reliable data = better score</strong>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-10 shadow-lg">
                <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>What is considered</h3>
                <div className="space-y-4">
                  <div className="bg-[#889063]/10 rounded-lg p-6">
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Age of oldest account</p>
                  </div>
                  <div className="bg-[#889063]/10 rounded-lg p-6">
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Average age of all accounts</p>
                  </div>
                  <div className="bg-[#889063]/10 rounded-lg p-6">
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>How long specific accounts have been open</p>
                  </div>
                  <div className="bg-[#889063]/10 rounded-lg p-6">
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>How long since you used certain accounts</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#CFBB99]/40 rounded-xl p-10">
                <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>How to build this factor</h3>
                <div className="space-y-4">
                  {[
                    'Start building credit early',
                    'Keep old accounts open',
                    'Avoid closing your oldest cards',
                    'Use accounts occasionally to keep them active',
                    'Be patient - time is key'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                      <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-lg">
              <p className="text-xl text-[#1C1C1C] text-center" style={{ letterSpacing: '-0.89px' }}>
                This is why starting to build credit as a teen is valuable. The earlier you start, the longer your history grows.
              </p>
            </div>
          </div>

          {/* Factor 4: Credit Mix */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              4. Credit mix (10%)
            </h2>

            <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10 mb-8">
              <div className="flex items-center gap-4 mb-8">
                <Layers className="w-16 h-16" />
                <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>Variety of accounts</h3>
              </div>
              <p className="text-2xl mb-8" style={{ letterSpacing: '-0.89px' }}>
                This measures the different types of credit you have managed.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-8">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Managing different credit types shows you can handle diverse financial responsibilities.</strong>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-lg mb-8">
              <h3 className="text-3xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Types of credit accounts</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Revolving credit</strong></h4>
                  <p className="text-lg text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                    Reusable credit with variable balances
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Credit cards</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Retail store cards</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Lines of credit</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Installment credit</strong></h4>
                  <p className="text-lg text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                    Fixed loans with set payment schedules
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Auto loans</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Student loans</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Mortgages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#CFBB99]/40 rounded-xl p-10">
              <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Important note</h3>
              <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                Credit mix is only 10% of your score. Do not open unnecessary accounts just to diversify.
              </p>
              <div className="bg-white rounded-lg p-8">
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Only open accounts you need and can manage responsibly.</strong> Over time, your mix will naturally improve as you take out loans for real needs like cars or education.
                </p>
              </div>
            </div>
          </div>

          {/* Factor 5: New Credit */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              5. New credit (10%)
            </h2>

            <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10 mb-8">
              <div className="flex items-center gap-4 mb-8">
                <Users className="w-16 h-16" />
                <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>Recent activity</h3>
              </div>
              <p className="text-2xl mb-8" style={{ letterSpacing: '-0.89px' }}>
                This measures how often you apply for and open new credit accounts.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-8">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Opening too many accounts too quickly signals risk to lenders.</strong>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-10 shadow-lg">
                <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>What is tracked</h3>
                <div className="space-y-4">
                  <div className="bg-[#889063]/10 rounded-lg p-6">
                    <p className="text-[#1C1C1C] text-lg mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Hard inquiries</strong></p>
                    <p className="text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>When you apply for credit</p>
                  </div>
                  <div className="bg-[#889063]/10 rounded-lg p-6">
                    <p className="text-[#1C1C1C] text-lg mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Recently opened accounts</strong></p>
                    <p className="text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>New credit lines or loans</p>
                  </div>
                  <div className="bg-[#889063]/10 rounded-lg p-6">
                    <p className="text-[#1C1C1C] text-lg mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Time since inquiries</strong></p>
                    <p className="text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>How recent your applications were</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-xl p-10">
                <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>What to avoid</h3>
                <div className="space-y-4">
                  {[
                    'Applying for multiple cards at once',
                    'Opening accounts you do not need',
                    'Chasing signup bonuses excessively',
                    'Applying for credit frequently',
                    'Opening new accounts when planning a major loan'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                      <AlertCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-0.5" />
                      <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-lg">
              <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Hard inquiries vs soft inquiries</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#FFCFD0]/10 border-2 border-[#FFCFD0] rounded-lg p-8">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Hard inquiry</strong></h4>
                  <p className="text-lg text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                    When you apply for credit
                  </p>
                  <div className="bg-white rounded-lg p-6 mb-6">
                    <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      <strong>Can lower your score slightly (typically 5-10 points)</strong>
                    </p>
                  </div>
                  <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    Stays on report for 2 years
                  </p>
                </div>

                <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Soft inquiry</strong></h4>
                  <p className="text-lg text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                    Checking your own credit
                  </p>
                  <div className="bg-white rounded-lg p-6 mb-6">
                    <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      <strong>Does not affect your score</strong>
                    </p>
                  </div>
                  <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    You can check anytime safely
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Putting It All Together */}
          <div className="bg-[#CFBB99]/40 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Putting it all together
            </h2>

            <div className="bg-white rounded-lg p-10 mb-8 shadow-lg">
              <h3 className="text-3xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>Focus on what matters most</h3>
              
              <div className="space-y-6">
                <div className="bg-[#889063] text-white rounded-lg p-8">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-2xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>1. Pay on time, every time</strong></p>
                      <p className="text-lg opacity-90" style={{ letterSpacing: '-0.89px' }}>35% of your score</p>
                    </div>
                    <div className="text-4xl" style={{ letterSpacing: '-0.89px' }}>✓</div>
                  </div>
                </div>

                <div className="bg-[#889063] text-white rounded-lg p-8">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-2xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>2. Keep balances low</strong></p>
                      <p className="text-lg opacity-90" style={{ letterSpacing: '-0.89px' }}>30% of your score</p>
                    </div>
                    <div className="text-4xl" style={{ letterSpacing: '-0.89px' }}>✓</div>
                  </div>
                </div>

                <div className="bg-[#889063]/60 text-white rounded-lg p-8">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-2xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>3. Build history over time</strong></p>
                      <p className="text-lg opacity-90" style={{ letterSpacing: '-0.89px' }}>15% of your score</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#889063]/40 text-[#1C1C1C] rounded-lg p-8">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-2xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>4. Manage credit mix responsibly</strong></p>
                      <p className="text-lg opacity-70" style={{ letterSpacing: '-0.89px' }}>10% of your score</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#889063]/40 text-[#1C1C1C] rounded-lg p-8">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-2xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>5. Apply for new credit sparingly</strong></p>
                      <p className="text-lg opacity-70" style={{ letterSpacing: '-0.89px' }}>10% of your score</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 text-center">
              <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Master payment history and utilization, and you will have a strong credit score.</strong>
              </p>
            </div>
          </div>

          {/* Key Vocabulary */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: 'Payment history', def: 'Record of whether you pay bills on time' },
                { term: 'Credit utilization', def: 'Percentage of available credit you are using' },
                { term: 'Credit history length', def: 'How long you have had credit accounts' },
                { term: 'Credit mix', def: 'Variety of credit account types you manage' },
                { term: 'New credit', def: 'Recent credit applications and accounts' },
                { term: 'Hard inquiry', def: 'Credit check when applying for credit' },
                { term: 'Soft inquiry', def: 'Credit check that does not affect score' },
                { term: 'Revolving credit', def: 'Reusable credit like credit cards' },
                { term: 'Installment credit', def: 'Fixed loans with set payment schedules' },
                { term: 'FICO score', def: 'Most common credit scoring model' }
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
                'Payment history is 35% of your score',
                'Amounts owed (utilization) is 30%',
                'Keep utilization below 30%',
                'Length of credit history matters',
                'Credit mix and new credit are each 10%',
                'Focus on paying on time and keeping balances low'
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. Which factor has the biggest impact on your credit score?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Credit mix', correct: false },
                  { text: 'B) Payment history', correct: true },
                  { text: 'C) New credit', correct: false },
                  { text: 'D) Credit history length', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. What is the ideal credit utilization percentage?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) 50%', correct: false },
                  { text: 'B) Below 30%', correct: true },
                  { text: 'C) 75%', correct: false },
                  { text: 'D) 100%', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. Which type of credit inquiry affects your credit score?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Soft inquiry', correct: false },
                  { text: 'B) Hard inquiry', correct: true },
                  { text: 'C) Both equally', correct: false },
                  { text: 'D) Neither', correct: false }
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
              to="/credit-debt/lesson-6"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/credit-debt/lesson-8"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                How to Build Credit Safely →
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