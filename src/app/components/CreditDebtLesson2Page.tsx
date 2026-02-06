import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function CreditDebtLesson2Page() {
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
            How Credit Cards Actually Work
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Credit and Debt • Lesson 2
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Opening */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Credit cards are revolving credit with rules
            </h2>
            <div className="bg-white rounded-xl p-10 shadow-sm border-t-4 border-[#FFCFD0]">
              <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                A credit card gives you access to a revolving credit line.
              </p>
              <p className="text-[#1C1C1C] mb-6 text-lg" style={{ letterSpacing: '-0.89px' }}>That means:</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#CFBB99]/20 p-6 rounded-lg">
                  <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>You have a credit limit</strong></p>
                </div>
                <div className="bg-[#CFBB99]/20 p-6 rounded-lg">
                  <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>You can spend up to that limit</strong></p>
                </div>
                <div className="bg-[#CFBB99]/20 p-6 rounded-lg">
                  <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>You pay it back</strong></p>
                </div>
                <div className="bg-[#CFBB99]/20 p-6 rounded-lg">
                  <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>You can borrow again</strong></p>
                </div>
              </div>
              <div className="bg-[#889063] text-white rounded-lg p-8">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>A credit card is not extra income. It is a short-term loan that resets as you repay.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Key Parts - Horizontal Flow */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              The key parts of a credit card account
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#354024] to-[#354024]/90 text-white rounded-xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#889063] flex items-center justify-center text-2xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>1</strong>
                  </div>
                  <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}>Credit limit</h3>
                </div>
                <p className="text-xl mb-6 opacity-90" style={{ letterSpacing: '-0.89px' }}>
                  This is the maximum amount you can borrow at one time.
                </p>
                <p className="mb-6 opacity-90 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  If your limit is $1,000, you cannot owe more than $1,000 on that card unless you go over-limit and get fees or denied transactions.
                </p>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>Important: A higher limit is not permission to spend more. It is a boundary.</strong>
                  </p>
                </div>
              </div>

              <div className="bg-[#CFBB99] text-[#1C1C1C] rounded-xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#889063] text-white flex items-center justify-center text-2xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>2</strong>
                  </div>
                  <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}>Available credit</h3>
                </div>
                <p className="text-xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                  Available credit is how much room you have left.
                </p>
                <div className="bg-white rounded-lg p-8">
                  <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                    If your limit is $1,000 and you spent $200, your available credit is $800 until you pay it down.
                  </p>
                </div>
              </div>

              <div className="bg-white border-4 border-[#889063] rounded-xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#889063] text-white flex items-center justify-center text-2xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>3</strong>
                  </div>
                  <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Balance</h3>
                </div>
                <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Your balance is what you currently owe.
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  If you buy something for $50, your balance increases by $50. When you make a payment, your balance decreases.
                </p>
              </div>
            </div>
          </div>

          {/* Billing Cycle - Timeline Visual */}
          <div className="bg-[#354024] text-white rounded-xl p-10">
            <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.89px' }}>
              The monthly credit card cycle (this part matters a lot)
            </h2>
            <p className="text-xl mb-10 opacity-90" style={{ letterSpacing: '-0.89px' }}>
              Credit cards run on a monthly billing cycle. You spend throughout the cycle, then the card company creates a statement that summarizes what happened.
            </p>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Calendar className="w-10 h-10 text-[#889063]" />
                  <h3 className="text-2xl" style={{ letterSpacing: '-0.89px' }}><strong>There are three dates you must understand:</strong></h3>
                </div>

                {/* Timeline Visual */}
                <div className="space-y-8 mt-8">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-[#889063] text-white flex items-center justify-center text-2xl" style={{ letterSpacing: '-0.89px' }}>
                        <strong>1</strong>
                      </div>
                      <div className="w-1 h-full bg-[#889063] min-h-[100px]"></div>
                    </div>
                    <div className="flex-1 pb-6">
                      <h4 className="text-2xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Statement closing date</strong></h4>
                      <p className="mb-3 text-lg" style={{ letterSpacing: '-0.89px' }}>This is the day your billing cycle ends.</p>
                      <p className="mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>On this date, the card issuer totals your activity and creates your statement.</p>
                      <div className="bg-white/10 rounded-lg p-6">
                        <p className="text-lg mb-3" style={{ letterSpacing: '-0.89px' }}>Your statement includes:</p>
                        <ul className="text-lg space-y-2" style={{ letterSpacing: '-0.89px' }}>
                          <li>• Statement balance</li>
                          <li>• Minimum payment due</li>
                          <li>• Payment due date</li>
                          <li>• List of transactions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-[#889063] text-white flex items-center justify-center text-2xl" style={{ letterSpacing: '-0.89px' }}>
                        <strong>2</strong>
                      </div>
                      <div className="w-1 h-full bg-[#889063] min-h-[100px]"></div>
                    </div>
                    <div className="flex-1 pb-6">
                      <h4 className="text-2xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Statement balance</strong></h4>
                      <p className="mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>The statement balance is the total amount you owed at the end of the billing cycle.</p>
                      <div className="bg-[#889063] text-white rounded-lg p-6">
                        <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                          <strong>This number is important because if you pay this statement balance by the due date, you usually avoid interest on purchases.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-[#889063] text-white flex items-center justify-center text-2xl" style={{ letterSpacing: '-0.89px' }}>
                        <strong>3</strong>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Due date</strong></h4>
                      <p className="mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>This is the deadline to make at least the minimum payment.</p>
                      <p className="mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>If you miss the due date, you can get:</p>
                      <div className="grid md:grid-cols-3 gap-3 mb-6">
                        <div className="bg-[#FFCFD0]/20 border border-[#FFCFD0] rounded-lg p-5">
                          <p className="text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Late fees</strong></p>
                        </div>
                        <div className="bg-[#FFCFD0]/20 border border-[#FFCFD0] rounded-lg p-5">
                          <p className="text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Penalty APR (higher rate)</strong></p>
                        </div>
                        <div className="bg-[#FFCFD0]/20 border border-[#FFCFD0] rounded-lg p-5">
                          <p className="text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Credit score damage</strong></p>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-6">
                        <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                          <strong>Due dates are serious because payment history is the biggest part of your credit score.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current vs Statement Balance - Visual Comparison */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Current balance vs statement balance
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>
              This confuses a lot of people, so let us make it simple.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#889063] text-white rounded-xl p-8">
                <h3 className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>Statement balance</h3>
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  What you owed when the billing cycle closed.
                </p>
              </div>

              <div className="bg-[#CFBB99] text-[#1C1C1C] rounded-xl p-8">
                <h3 className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>Current balance</h3>
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  What you owe right now including purchases after the statement closed.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-10 border-l-4 border-[#889063]">
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Example:</strong></h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                    <strong>1</strong>
                  </div>
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Statement closes on the 20th with a statement balance of $300</p>
                </div>
                <div className="flex items-center gap-4">
                  <ArrowRight className="w-10 h-10 text-[#1C1C1C] flex-shrink-0" />
                  <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                    <strong>2</strong>
                  </div>
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>On the 22nd you spend $50 more</p>
                </div>
                <div className="flex items-center gap-4">
                  <ArrowRight className="w-10 h-10 text-[#1C1C1C] flex-shrink-0" />
                  <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>
                    <strong>3</strong>
                  </div>
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Current balance becomes $350</p>
                </div>
              </div>
              <div className="bg-[#889063] text-white rounded-lg p-8 mt-8">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>If you pay $300 by the due date, you usually avoid interest on the statement balance. The extra $50 will be on the next statement.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Minimum Payment Warning */}
          <div className="bg-gradient-to-br from-[#FFCFD0]/30 to-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Minimum payment and why it is risky
            </h2>
            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              The minimum payment is the smallest amount you are allowed to pay to stay in good standing.
            </p>
            
            <div className="bg-white rounded-lg p-8 mb-8">
              <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}>It might be something like:</p>
              <div className="flex gap-4">
                <div className="flex-1 bg-[#FFCFD0]/20 rounded-lg p-6 border-2 border-[#FFCFD0]">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>A flat amount (like $25)</p>
                </div>
                <div className="flex-1 bg-[#FFCFD0]/20 rounded-lg p-6 border-2 border-[#FFCFD0]">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Or a percentage of the balance (like 1 to 3 percent)</p>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mb-6">
              <p className="text-2xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Paying only the minimum:</strong></p>
              <ul className="space-y-3 text-xl" style={{ letterSpacing: '-0.89px' }}>
                <li className="flex items-start gap-2">
                  <span className="text-3xl">✕</span>
                  <span>Keeps you in debt longer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-3xl">✕</span>
                  <span>Makes you pay way more interest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-3xl">✕</span>
                  <span>Feels manageable in the short term but becomes expensive long term</span>
                </li>
              </ul>
            </div>

            <div className="text-center bg-[#354024] text-white rounded-lg p-8">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Minimum payment is designed to protect the card issuer, not you.</strong>
              </p>
            </div>
          </div>

          {/* APR and Interest */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              APR and how interest works
            </h2>
            
            <div className="bg-[#CFBB99]/30 rounded-lg p-8 mb-8">
              <p className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                <strong>APR means Annual Percentage Rate.</strong>
              </p>
              <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                This is the yearly interest rate charged on balances you carry.
              </p>
            </div>

            <div className="bg-[#889063] text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Key idea:</strong></h3>
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                If you do not pay the statement balance in full, interest is usually charged on the remaining balance.
              </p>
            </div>

            <p className="text-[#1C1C1C] mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}>
              Most credit cards calculate interest daily.
            </p>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>
              That daily interest is based on your APR.
            </p>

            <div className="bg-[#354024] text-white rounded-lg p-8">
              <p className="mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}>
                You do not need the exact formula to understand the concept, but here is the important part:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-7 h-7 flex-shrink-0" />
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>Higher APR means debt grows faster</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-7 h-7 flex-shrink-0" />
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>Carrying a balance makes everything more expensive</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-7 h-7 flex-shrink-0" />
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>Paying in full avoids most purchase interest</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grace Period */}
          <div className="bg-[#889063]/10 border-4 border-[#889063] rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Grace period</h2>
            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              A grace period is the time when you can avoid interest on purchases.
            </p>

            <div className="bg-white rounded-lg p-8 mb-8">
              <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}>
                Most credit cards give you a grace period if:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-0.5" />
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>You pay your statement balance in full by the due date</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-0.5" />
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Your account is in good standing</p>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mb-8">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                If you carry a balance month to month, you may lose the grace period, meaning purchases can start accruing interest immediately.
              </p>
            </div>

            <div className="text-center bg-[#889063] text-white rounded-lg p-8">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>So the best habit is simple: Pay the statement balance in full.</strong>
              </p>
            </div>
          </div>

          {/* Fees - Grid Layout */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Fees you should know</h2>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>
              Credit cards can come with fees. These are common:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Late payment fee</strong></h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  If you miss the due date, you may get charged a late fee.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Annual fee</strong></h3>
                <p className="text-[#1C1C1C] opacity-80 mb-3 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Some cards charge a yearly fee just to have the card.
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  This is not automatically bad, but it should provide real value in return like strong rewards.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Balance transfer fee</strong></h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  If you move debt from one card to another, there is often a fee.
                </p>
              </div>

              <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-xl p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Cash advance fee</strong></h3>
                <p className="text-[#1C1C1C] mb-6 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Cash advances are when you withdraw cash using your credit card.
                </p>
                <div className="bg-[#354024] text-white rounded-lg p-6 mb-4">
                  <p className="mb-3 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>These are usually very expensive because:</strong></p>
                  <ul className="space-y-2 text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li>• Fees apply immediately</li>
                    <li>• Interest starts immediately</li>
                    <li>• APR is often higher</li>
                  </ul>
                </div>
                <p className="text-[#1C1C1C] text-center text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Cash advances are one of the worst ways to use a credit card.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Credit Utilization */}
          <div className="bg-[#354024] text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>Credit utilization</h2>
            <p className="text-xl mb-8 opacity-90" style={{ letterSpacing: '-0.89px' }}>
              Credit utilization is how much of your credit limit you are using. It is usually measured as a percentage.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
              <h3 className="text-2xl mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Example:</strong></h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-4xl text-[#889063] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>$1,000</strong></p>
                  <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Limit</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl text-[#889063] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>$300</strong></p>
                  <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Balance</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl text-[#889063] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>30%</strong></p>
                  <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Utilization</p>
                </div>
              </div>
            </div>

            <div className="bg-[#889063] rounded-lg p-8 mb-8">
              <h3 className="text-2xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Why it matters:</strong></h3>
              <p className="text-xl mb-4" style={{ letterSpacing: '-0.89px' }}>
                Utilization is a major factor in credit scores.
              </p>
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Using too much of your limit makes you look riskier to lenders.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <p className="mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>A common guideline:</strong>
              </p>
              <p className="text-xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                Keep utilization low, often under 30%, and lower is even better.
              </p>
              <p className="text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>
                This does not mean you cannot use your card. It means do not keep high balances.
              </p>
            </div>
          </div>

          {/* Rewards Reality */}
          <div className="bg-[#CFBB99]/40 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Rewards are not free money
            </h2>
            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Many credit cards offer rewards like cashback or points.
            </p>

            <div className="bg-white rounded-lg p-8 mb-8">
              <p className="text-[#1C1C1C] mb-6 text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Rewards are only helpful if:</strong>
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-0.5" />
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>You pay your statement balance in full</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-0.5" />
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>You do not overspend to earn points</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-0.5" />
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>You do not pay interest</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFCFD0]/30 border-2 border-[#FFCFD0] rounded-lg p-8 mb-6">
              <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>If you are paying interest, rewards often get cancelled out or become pointless.</strong>
              </p>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8">
              <p className="mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}>
                Credit card companies love rewards because they encourage spending.
              </p>
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>So treat rewards as a bonus, not a reason to buy things.</strong>
              </p>
            </div>
          </div>

          {/* Smartest Way to Use a Card */}
          <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              The smartest way to use a credit card
            </h2>
            <p className="text-xl mb-8 opacity-90" style={{ letterSpacing: '-0.89px' }}>
              If you want the most responsible strategy, it is this:
            </p>

            <div className="space-y-4">
              {[
                'Use the card for planned purchases',
                'Keep the balance low',
                'Pay the statement balance in full every month',
                'Never miss a due date',
                'Avoid cash advances',
                'Review statements regularly'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-lg p-6">
                  <CheckCircle2 className="w-7 h-7 flex-shrink-0" />
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/20 backdrop-blur rounded-lg p-8 mt-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>This builds credit without paying unnecessary interest.</strong>
              </p>
            </div>
          </div>

          {/* Key Vocabulary */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { term: 'Credit limit', def: 'Max you can borrow' },
                { term: 'Statement balance', def: 'Balance at cycle close' },
                { term: 'Current balance', def: 'Balance right now' },
                { term: 'Due date', def: 'Payment deadline' },
                { term: 'Minimum payment', def: 'Smallest required payment' },
                { term: 'APR', def: 'Yearly interest rate' },
                { term: 'Grace period', def: 'Time you can avoid interest by paying in full' },
                { term: 'Utilization', def: 'Percent of credit used' },
                { term: 'Cash advance', def: 'Cash borrowed from a card, usually expensive' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 border-l-4 border-[#889063]">
                  <h3 className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>{item.term}</strong></h3>
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
                'Credit cards are revolving loans',
                'Billing cycles create a statement balance',
                'Paying statement balance in full avoids most interest',
                'Minimum payments keep you in debt longer',
                'APR determines how expensive debt is',
                'Utilization impacts credit scores',
                'Fees can add hidden costs'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-1" />
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>{item}</p>
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. What is the statement balance?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) The amount you owe right now including new purchases', correct: false },
                  { text: 'B) The amount you owed when the billing cycle closed', correct: true },
                  { text: 'C) The total credit limit', correct: false },
                  { text: 'D) The minimum payment due', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. Why is paying only the minimum payment risky?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) It lowers your credit limit', correct: false },
                  { text: 'B) It keeps you in debt longer and increases interest paid', correct: true },
                  { text: 'C) It cancels your card immediately', correct: false },
                  { text: 'D) It eliminates fees', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. When do you usually avoid interest on purchases?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) When you miss the due date', correct: false },
                  { text: 'B) When you pay the statement balance in full by the due date', correct: true },
                  { text: 'C) When you take a cash advance', correct: false },
                  { text: 'D) When you pay only the minimum', correct: false }
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
              to="/credit-debt/lesson-1"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/credit-debt/lesson-3"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Understanding Your Credit Score →
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