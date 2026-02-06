import { Link } from './RouterLink';
import { ArrowLeft, CheckCircle, Calendar, Eye, CreditCard, Shield, Clock, TrendingUp, CheckCircle2, Target, Repeat, Bell, FileText, Lock, Zap, BarChart3, Award, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function CreditDebtLesson12Page() {
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
            Smart Credit Habits
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Credit and Debt • Lesson 12
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Opening - Checkmark/Success Visual */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#889063] to-[#CFBB99] p-16 text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-full p-10 relative">
                  <CheckCircle className="w-28 h-28 text-[#889063]" />
                  <div className="absolute -top-2 -right-2 bg-[#889063] rounded-full p-3">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl text-white mb-8" style={{ letterSpacing: '-0.89px' }}>
                Credit is safest when it is predictable and controlled
              </h2>
              <p className="text-2xl text-white opacity-95 max-w-3xl mx-auto" style={{ letterSpacing: '-0.89px' }}>
                Credit itself is not harmful. Poor habits are what turn it into long-term debt and financial damage.
              </p>
            </div>
            
            <div className="p-12 bg-[#889063]/10">
              <div className="bg-white rounded-2xl p-10 max-w-3xl mx-auto border-4 border-[#889063]">
                <p className="text-2xl text-[#1C1C1C] mb-6 text-center" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Smart credit habits are built around one idea:</strong>
                </p>
                <p className="text-3xl text-[#1C1C1C] text-center" style={{ letterSpacing: '-0.89px' }}>
                  Use credit in a way that never surprises you and never controls your future income.
                </p>
              </div>
            </div>
          </div>

          {/* The Core Principle */}
          <div className="bg-[#354024] text-white rounded-2xl p-10 text-center">
            <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
              <strong>Responsible use builds financial trust while protecting you from interest and stress.</strong>
            </p>
          </div>

          {/* Nine Essential Habits - Checklist Style */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-block bg-[#889063] text-white px-8 py-4 rounded-full mb-4">
                <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}><strong>9 Essential Habits</strong></p>
              </div>
              <h2 className="text-5xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Your credit success checklist
              </h2>
            </div>

            <div className="grid gap-6">
              {/* Habit 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center gap-6 bg-[#889063] text-white p-6">
                  <div className="bg-white rounded-2xl p-5 flex-shrink-0">
                    <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="text-3xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>1</strong></span>
                    </div>
                  </div>
                  <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>Pay your full balance every month</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    Paying the full balance each month is the single strongest credit habit.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-[#889063] text-white rounded-xl p-6 flex items-center gap-3">
                      <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                      <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Avoids interest completely</p>
                    </div>
                    <div className="bg-[#889063] text-white rounded-xl p-6 flex items-center gap-3">
                      <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                      <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Keeps debt from accumulating</p>
                    </div>
                    <div className="bg-[#889063] text-white rounded-xl p-6 flex items-center gap-3">
                      <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                      <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Builds strong credit history</p>
                    </div>
                  </div>

                  <div className="bg-[#E5D7C4] rounded-xl p-8">
                    <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>How to make this a habit:</strong></p>
                    <ul className="space-y-3 text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      <li>• Set a calendar reminder for your statement date</li>
                      <li>• Review charges before the due date</li>
                      <li>• Pay the statement balance in full, not just the minimum</li>
                      <li>• If you cannot pay in full, you spent too much</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Habit 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center gap-6 bg-[#CFBB99] text-[#1C1C1C] p-6">
                  <div className="bg-white rounded-2xl p-5 flex-shrink-0">
                    <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="text-3xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>2</strong></span>
                    </div>
                  </div>
                  <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>Track every purchase immediately</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    Do not wait until the statement arrives. Know your balance at all times.
                  </p>
                  
                  <div className="bg-[#E5D7C4] rounded-xl p-8">
                    <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Tracking methods:</strong></p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Use your bank app</strong></p>
                        <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Check after every purchase to see the running total</p>
                      </div>
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Keep a manual log</strong></p>
                        <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Write down purchases in a notebook or spreadsheet</p>
                      </div>
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Set spending alerts</strong></p>
                        <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Enable notifications for every transaction</p>
                      </div>
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Review weekly</strong></p>
                        <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Check your account every Sunday to stay aware</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Habit 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center gap-6 bg-[#889063] text-white p-6">
                  <div className="bg-white rounded-2xl p-5 flex-shrink-0">
                    <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="text-3xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>3</strong></span>
                    </div>
                  </div>
                  <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>Keep utilization below 30%</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    Never use more than 30% of your credit limit. Aim for under 10% for the best score impact.
                  </p>
                  
                  <div className="bg-[#E5D7C4] rounded-xl p-8 mb-8">
                    <p className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Example:</strong></p>
                    <div className="space-y-6">
                      <div>
                        <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Credit limit: <strong>$1,000</strong></p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4">
                            <div className="w-2/3 bg-[#889063] h-8 rounded-lg"></div>
                            <p className="text-lg text-[#889063]" style={{ letterSpacing: '-0.89px' }}><strong>$100 balance = 10% (Excellent)</strong></p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-full bg-[#CFBB99] h-8 rounded-lg"></div>
                            <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>$300 balance = 30% (OK)</strong></p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-full bg-[#FFCFD0] h-8 rounded-lg"></div>
                            <p className="text-lg text-[#FFCFD0]" style={{ letterSpacing: '-0.89px' }}><strong>$900 balance = 90% (Bad)</strong></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-[#889063] rounded-xl p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      <strong>Strategy:</strong> If you are approaching 30%, make an early payment before the statement closes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Habit 4 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center gap-6 bg-[#CFBB99] text-[#1C1C1C] p-6">
                  <div className="bg-white rounded-2xl p-5 flex-shrink-0">
                    <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="text-3xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>4</strong></span>
                    </div>
                  </div>
                  <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>Set up autopay as a safety net</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    Automate at least the minimum payment to avoid late fees and credit damage.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#889063]/10 rounded-xl p-8 border-2 border-[#889063]">
                      <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Best option:</strong></p>
                      <p className="text-2xl text-[#889063] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Autopay full balance</strong></p>
                      <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                        Ensures you never carry a balance or pay interest
                      </p>
                    </div>
                    <div className="bg-[#E5D7C4] rounded-xl p-8">
                      <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Backup option:</strong></p>
                      <p className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Autopay minimum only</strong></p>
                      <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                        Protects your credit if you forget, but you still manually pay in full
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Habit 5 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center gap-6 bg-[#889063] text-white p-6">
                  <div className="bg-white rounded-2xl p-5 flex-shrink-0">
                    <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="text-3xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>5</strong></span>
                    </div>
                  </div>
                  <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>Review your statement every month</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    Even with tracking, review the full statement for errors, fraud, or unexpected charges.
                  </p>
                  
                  <div className="bg-[#E5D7C4] rounded-xl p-8">
                    <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>What to check:</strong></p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Every transaction is yours',
                        'No duplicate charges',
                        'Correct amounts',
                        'No unfamiliar merchants',
                        'Statement balance matches your records',
                        'Due date is noted'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                          <Eye className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                          <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Habit 6 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center gap-6 bg-[#CFBB99] text-[#1C1C1C] p-6">
                  <div className="bg-white rounded-2xl p-5 flex-shrink-0">
                    <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="text-3xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>6</strong></span>
                    </div>
                  </div>
                  <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>Treat credit like debit</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    Only charge what you already have cash to cover.
                  </p>
                  
                  <div className="bg-[#354024] text-white rounded-xl p-10 mb-8 text-center">
                    <p className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                      <strong>Rule: If you do not have the money in your checking account, do not charge it.</strong>
                    </p>
                    <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>
                      Credit is not extra money. It is a payment method.
                    </p>
                  </div>

                  <div className="bg-[#E5D7C4] rounded-xl p-8">
                    <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Mental shift:</strong></p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#FFCFD0] rounded-lg px-4 py-2 flex-shrink-0">
                          <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Wrong:</strong></p>
                        </div>
                        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>I will pay for this later</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-[#889063] text-white rounded-lg px-4 py-2 flex-shrink-0">
                          <p className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Right:</strong></p>
                        </div>
                        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>I am paying for this now using credit for convenience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Habit 7 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center gap-6 bg-[#889063] text-white p-6">
                  <div className="bg-white rounded-2xl p-5 flex-shrink-0">
                    <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="text-3xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>7</strong></span>
                    </div>
                  </div>
                  <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>Keep old accounts open</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    Your oldest credit card helps your credit age and total available credit.
                  </p>
                  
                  <div className="bg-[#E5D7C4] rounded-xl p-8">
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>How to keep old cards active:</strong></p>
                    <div className="space-y-4">
                      {[
                        'Use it for one small recurring charge (like a subscription)',
                        'Set up autopay for that charge',
                        'Store the card safely and do not carry it',
                        'Check it monthly to ensure the charge went through'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Repeat className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                          <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Habit 8 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center gap-6 bg-[#CFBB99] text-[#1C1C1C] p-6">
                  <div className="bg-white rounded-2xl p-5 flex-shrink-0">
                    <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="text-3xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>8</strong></span>
                    </div>
                  </div>
                  <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>Check your credit report annually</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    Review your credit report at least once per year for errors or fraud.
                  </p>
                  
                  <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-xl p-8 mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Shield className="w-12 h-12 text-[#889063]" />
                      <p className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Free credit reports</strong></p>
                    </div>
                    <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                      You can get one free report per year from each of the three bureaus:
                    </p>
                    <ul className="space-y-2 text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      <li>• Experian</li>
                      <li>• Equifax</li>
                      <li>• TransUnion</li>
                    </ul>
                  </div>

                  <div className="bg-[#E5D7C4] rounded-xl p-8">
                    <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>What to look for:</strong></p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Accounts you did not open',
                        'Incorrect balances',
                        'Wrong payment history',
                        'Identity theft signs'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                          <FileText className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                          <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Habit 9 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-[#889063]">
                <div className="flex items-center gap-6 bg-[#889063] text-white p-6">
                  <div className="bg-white rounded-2xl p-5 flex-shrink-0">
                    <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="text-3xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>9</strong></span>
                    </div>
                  </div>
                  <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>Never carry a balance to build credit</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    This is a myth. You do not need to pay interest to build credit.
                  </p>
                  
                  <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-xl p-8 mb-8">
                    <p className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The truth:</strong></p>
                    <div className="space-y-6">
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-xl text-[#FFCFD0] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Myth:</strong></p>
                        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                          Carrying a balance month to month helps your credit score
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-xl text-[#889063] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Reality:</strong></p>
                        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                          Your credit score improves from on-time payments, not from paying interest
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#354024] text-white rounded-xl p-8 text-center">
                    <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                      <strong>Paying in full every month builds credit just as well, without costing you anything.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Reference Summary */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Quick reference: All 9 habits
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { num: 1, habit: 'Pay full balance monthly' },
                { num: 2, habit: 'Track every purchase' },
                { num: 3, habit: 'Keep utilization under 30%' },
                { num: 4, habit: 'Set up autopay' },
                { num: 5, habit: 'Review statements monthly' },
                { num: 6, habit: 'Treat credit like debit' },
                { num: 7, habit: 'Keep old accounts open' },
                { num: 8, habit: 'Check credit report yearly' },
                { num: 9, habit: 'Never carry a balance to build credit' }
              ].map((item) => (
                <div key={item.num} className="bg-[#E5D7C4] rounded-xl p-6 flex items-center gap-4">
                  <div className="bg-[#889063] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>{item.num}</strong></span>
                  </div>
                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>{item.habit}</strong></p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Vocabulary */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: 'Statement balance', def: 'Total amount owed when your billing cycle ends' },
                { term: 'Autopay', def: 'Automatic payment setup to avoid missed payments' },
                { term: 'Credit utilization', def: 'Percentage of available credit being used' },
                { term: 'Credit report', def: 'Record of your credit history from the three bureaus' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 border-l-4 border-[#889063]">
                  <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>{item.term}</strong></h3>
                  <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>{item.def}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-[#354024] text-white rounded-xl p-10">
            <h2 className="text-3xl mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Pay your full balance every month to avoid interest',
                'Track every purchase immediately',
                'Keep credit utilization below 30%',
                'Set up autopay as a safety net',
                'Review your statement monthly for errors',
                'Only charge what you can pay cash for',
                'Keep old credit accounts open',
                'Check your credit report annually',
                'Never carry a balance just to build credit'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-1" />
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Module Complete */}
          <section className="px-6 py-12 md:px-12" style={{ backgroundColor: '#E5D7C4' }}>
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
                <div className="flex items-center gap-3 mb-6">
                  <Award size={36} style={{ color: '#889063' }} />
                  <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>You've completed the Credit and Debt module!</h2>
                </div>

                <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
                  You now have all the knowledge you need to build a strong credit foundation:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }}>✓ Understanding credit basics</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }}>✓ Building strong credit scores</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }}>✓ Managing debt responsibly</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }}>✓ Avoiding common mistakes</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }}>✓ Using credit wisely</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }}>✓ Protecting your financial future</p>
                  </div>
                </div>

                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold text-xl mb-4">
                    Remember: Good credit is built through consistent, responsible behavior.
                  </p>
                  <p style={{ color: '#1C1C1C' }} className="text-lg">
                    Pay on time, keep balances low, and use credit as a tool—not a crutch.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>

      {/* Quick Check Quiz */}
      <section className="px-6 py-12 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#1C1C1C] mb-10" style={{ letterSpacing: '-0.89px' }}>Quick Check</h2>
          
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="bg-[#E5D7C4] rounded-xl p-10">
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. What is the single strongest credit habit?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Checking your credit score daily', correct: false },
                  { text: 'B) Paying your full balance every month', correct: true },
                  { text: 'C) Having multiple credit cards', correct: false },
                  { text: 'D) Carrying a small balance to build credit', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. What should your credit utilization be?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) As high as possible', correct: false },
                  { text: 'B) Below 30%, ideally below 10%', correct: true },
                  { text: 'C) Exactly 50%', correct: false },
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. Is it true that you need to carry a balance to build credit?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Yes, always carry a small balance', correct: false },
                  { text: 'B) No, this is a myth. Pay in full to build credit without interest.', correct: true },
                  { text: 'C) Yes, but only for the first year', correct: false },
                  { text: 'D) Only if your credit score is below 700', correct: false }
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
              to="/credit-debt/lesson-11"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Module Complete!</p>
              <Link 
                to="/learn"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Back to All Modules
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