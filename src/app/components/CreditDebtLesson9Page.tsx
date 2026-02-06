import { Link } from './RouterLink';
import { ArrowLeft, AlertTriangle, XCircle, CreditCard, DollarSign, FileText, Trash2, TrendingDown, Clock, BarChart3, CheckCircle2, X, Ban, ShieldAlert, Calendar, Zap } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function CreditDebtLesson9Page() {
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
            Common Credit Mistakes to Avoid
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Credit and Debt • Lesson 9
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Opening - Split Warning Design */}
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-[#FFCFD0] p-12 flex flex-col justify-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white rounded-full p-8">
                  <AlertTriangle className="w-20 h-20 text-[#FFCFD0]" />
                </div>
              </div>
              <h2 className="text-4xl text-[#1C1C1C] text-center" style={{ letterSpacing: '-0.89px' }}>
                <strong>Most credit problems come from habits</strong>
              </h2>
            </div>
            <div className="bg-[#354024] text-white p-12 flex flex-col justify-center">
              <p className="text-2xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                Many people assume credit issues only happen when someone does not make enough money.
              </p>
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>In reality, credit problems usually come from repeated behaviors that slowly damage trust with lenders.</strong>
              </p>
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-white border-4 border-[#FFCFD0] rounded-2xl p-10 text-center">
            <p className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
              <strong>These mistakes often feel small in the moment, but their impact adds up over time.</strong>
            </p>
          </div>

          {/* Seven Mistakes - Two Column Comparison Layout */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-12 text-center" style={{ letterSpacing: '-0.89px' }}>
              Seven credit mistakes to avoid
            </h2>

            {/* Mistake 1: Missing or Late Payments */}
            <div className="mb-10">
              <div className="bg-[#FFCFD0] text-[#1C1C1C] rounded-t-2xl p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-4">
                  <X className="w-10 h-10 text-[#FFCFD0]" />
                </div>
                <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Mistake 1: Missing or late payments</strong>
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] border-t-0 rounded-bl-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Mistake:</strong></h4>
                  <div className="space-y-4">
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Forgetting to pay a credit card bill, or paying after the due date.
                    </p>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Why people do it:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Lost track of the due date</li>
                        <li>• Did not have enough money</li>
                        <li>• Forgot to set up autopay</li>
                        <li>• Thought one late payment would not matter</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-4 border-[#FFCFD0] border-t-0 border-l-0 rounded-br-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Damage:</strong></h4>
                  <div className="space-y-4">
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Immediate:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Late fee ($25-$40)</li>
                        <li>• Higher interest rate triggered</li>
                        <li>• Credit score drops</li>
                      </ul>
                    </div>
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Long-term:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Stays on report for 7 years</li>
                        <li>• Harder to get approved for loans</li>
                        <li>• Higher rates on future credit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#889063] text-white rounded-b-2xl p-6">
                <p className="text-xl text-center" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Prevention: Set up automatic minimum payments as a safety net.</strong>
                </p>
              </div>
            </div>

            {/* Mistake 2: Maxing Out Credit Cards */}
            <div className="mb-10">
              <div className="bg-[#FFCFD0] text-[#1C1C1C] rounded-t-2xl p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-4">
                  <X className="w-10 h-10 text-[#FFCFD0]" />
                </div>
                <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Mistake 2: Maxing out credit cards</strong>
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] border-t-0 rounded-bl-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Mistake:</strong></h4>
                  <div className="space-y-4">
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Using 100% of your available credit limit, or getting very close to it.
                    </p>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Why people do it:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Large unexpected expense</li>
                        <li>• Treating credit like extra income</li>
                        <li>• Do not understand utilization ratio</li>
                        <li>• Planning to pay it off later</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-4 border-[#FFCFD0] border-t-0 border-l-0 rounded-br-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Damage:</strong></h4>
                  <div className="space-y-4">
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Immediate:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Credit score drops significantly</li>
                        <li>• High utilization signals risk</li>
                        <li>• Over-limit fees possible</li>
                      </ul>
                    </div>
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Long-term:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Debt becomes harder to pay off</li>
                        <li>• Interest accumulates quickly</li>
                        <li>• Creates debt cycle</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#889063] text-white rounded-b-2xl p-6">
                <p className="text-xl text-center" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Prevention: Keep utilization below 30%, ideally below 10%.</strong>
                </p>
              </div>
            </div>

            {/* Mistake 3: Only Paying the Minimum */}
            <div className="mb-10">
              <div className="bg-[#FFCFD0] text-[#1C1C1C] rounded-t-2xl p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-4">
                  <X className="w-10 h-10 text-[#FFCFD0]" />
                </div>
                <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Mistake 3: Only paying the minimum</strong>
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] border-t-0 rounded-bl-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Mistake:</strong></h4>
                  <div className="space-y-4">
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Consistently making only the minimum required payment each month.
                    </p>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Why people do it:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Minimum feels affordable</li>
                        <li>• Do not see the long-term cost</li>
                        <li>• Cash flow is tight</li>
                        <li>• Think it is the right way to build credit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-4 border-[#FFCFD0] border-t-0 border-l-0 rounded-br-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Damage:</strong></h4>
                  <div className="space-y-4">
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>The real cost:</strong></p>
                      <div className="bg-white rounded-lg p-4 mb-3">
                        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                          <strong>$1,000 balance at 20% APR:</strong>
                        </p>
                        <p className="text-[#1C1C1C] mt-2" style={{ letterSpacing: '-0.89px' }}>
                          Pay minimum only = 5+ years + $600 in interest
                        </p>
                        <p className="text-[#889063] mt-2" style={{ letterSpacing: '-0.89px' }}>
                          <strong>Pay in full = 0 interest</strong>
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Long-term:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• High utilization continues</li>
                        <li>• Debt grows instead of shrinking</li>
                        <li>• Wastes money on interest</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#889063] text-white rounded-b-2xl p-6">
                <p className="text-xl text-center" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Prevention: Always pay your full statement balance to avoid interest.</strong>
                </p>
              </div>
            </div>

            {/* Mistake 4: Closing Old Credit Cards */}
            <div className="mb-10">
              <div className="bg-[#FFCFD0] text-[#1C1C1C] rounded-t-2xl p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-4">
                  <X className="w-10 h-10 text-[#FFCFD0]" />
                </div>
                <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Mistake 4: Closing old credit cards</strong>
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] border-t-0 rounded-bl-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Mistake:</strong></h4>
                  <div className="space-y-4">
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Canceling credit cards you have had for years, especially your oldest card.
                    </p>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Why people do it:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Do not use the card anymore</li>
                        <li>• Want to simplify finances</li>
                        <li>• Think unused cards hurt credit</li>
                        <li>• Avoiding annual fees</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-4 border-[#FFCFD0] border-t-0 border-l-0 rounded-br-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Damage:</strong></h4>
                  <div className="space-y-4">
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Immediate:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Reduces total available credit</li>
                        <li>• Increases utilization ratio</li>
                        <li>• Credit score drops</li>
                      </ul>
                    </div>
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Long-term:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Shortens credit history length</li>
                        <li>• Removes positive payment history</li>
                        <li>• Harder to rebuild</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#889063] text-white rounded-b-2xl p-6">
                <p className="text-xl text-center" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Prevention: Keep old cards open, even if you rarely use them.</strong>
                </p>
              </div>
            </div>

            {/* Mistake 5: Applying for Too Much Credit at Once */}
            <div className="mb-10">
              <div className="bg-[#FFCFD0] text-[#1C1C1C] rounded-t-2xl p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-4">
                  <X className="w-10 h-10 text-[#FFCFD0]" />
                </div>
                <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Mistake 5: Applying for too much credit at once</strong>
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] border-t-0 rounded-bl-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Mistake:</strong></h4>
                  <div className="space-y-4">
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Opening multiple credit cards or applying for several loans within a short time period.
                    </p>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Why people do it:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Chasing signup bonuses</li>
                        <li>• Shopping for best rates</li>
                        <li>• Need more available credit</li>
                        <li>• Do not know about hard inquiries</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-4 border-[#FFCFD0] border-t-0 border-l-0 rounded-br-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Damage:</strong></h4>
                  <div className="space-y-4">
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Immediate:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Multiple hard inquiries</li>
                        <li>• Each inquiry lowers score 5-10 points</li>
                        <li>• Looks risky to lenders</li>
                      </ul>
                    </div>
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Long-term:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Lowers average account age</li>
                        <li>• Signals financial desperation</li>
                        <li>• Future applications denied</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#889063] text-white rounded-b-2xl p-6">
                <p className="text-xl text-center" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Prevention: Space out credit applications by at least 6 months.</strong>
                </p>
              </div>
            </div>

            {/* Mistake 6: Ignoring Your Credit Report */}
            <div className="mb-10">
              <div className="bg-[#FFCFD0] text-[#1C1C1C] rounded-t-2xl p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-4">
                  <X className="w-10 h-10 text-[#FFCFD0]" />
                </div>
                <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Mistake 6: Ignoring your credit report</strong>
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] border-t-0 rounded-bl-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Mistake:</strong></h4>
                  <div className="space-y-4">
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Never checking your credit report or monitoring your credit score.
                    </p>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Why people do it:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Assume everything is fine</li>
                        <li>• Do not know it is free</li>
                        <li>• Afraid of what they might find</li>
                        <li>• Think checking hurts score</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-4 border-[#FFCFD0] border-t-0 border-l-0 rounded-br-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Damage:</strong></h4>
                  <div className="space-y-4">
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Hidden problems:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Miss errors on report</li>
                        <li>• Identity theft goes undetected</li>
                        <li>• Cannot track progress</li>
                      </ul>
                    </div>
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Long-term:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Errors damage score for years</li>
                        <li>• Fraud compounds</li>
                        <li>• Harder to fix later</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#889063] text-white rounded-b-2xl p-6">
                <p className="text-xl text-center" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Prevention: Check your credit report at least once per year (it is free!).</strong>
                </p>
              </div>
            </div>

            {/* Mistake 7: Co-signing Loans Without Understanding the Risk */}
            <div className="mb-10">
              <div className="bg-[#FFCFD0] text-[#1C1C1C] rounded-t-2xl p-6 flex items-center gap-4">
                <div className="bg-white rounded-full p-4">
                  <X className="w-10 h-10 text-[#FFCFD0]" />
                </div>
                <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Mistake 7: Co-signing loans without understanding the risk</strong>
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] border-t-0 rounded-bl-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Mistake:</strong></h4>
                  <div className="space-y-4">
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Agreeing to co-sign on someone else's loan or credit card without fully understanding you are equally responsible.
                    </p>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Why people do it:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Helping family or friends</li>
                        <li>• Think it is just a formality</li>
                        <li>• Trust the person will pay</li>
                        <li>• Do not realize full responsibility</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-4 border-[#FFCFD0] border-t-0 border-l-0 rounded-br-2xl p-10">
                  <h4 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>The Damage:</strong></h4>
                  <div className="space-y-4">
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>If they miss payments:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• You are legally responsible</li>
                        <li>• Your credit score drops</li>
                        <li>• Creditors can sue you</li>
                      </ul>
                    </div>
                    <div className="bg-[#FFCFD0]/10 rounded-lg p-6">
                      <p className="text-xl text-[#FFCFD0] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Long-term:</strong></p>
                      <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <li>• Debt shows on your report</li>
                        <li>• Increases your utilization</li>
                        <li>• Damaged relationships and credit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#889063] text-white rounded-b-2xl p-6">
                <p className="text-xl text-center" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Prevention: Only co-sign if you can afford to pay the full debt yourself.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Summary Comparison Table */}
          <div className="bg-white rounded-2xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Quick reference: All seven mistakes
            </h2>
            
            <div className="space-y-3">
              {[
                { num: 1, mistake: 'Missing or late payments', prevention: 'Set up autopay' },
                { num: 2, mistake: 'Maxing out credit cards', prevention: 'Keep utilization below 30%' },
                { num: 3, mistake: 'Only paying minimums', prevention: 'Pay full balance monthly' },
                { num: 4, mistake: 'Closing old cards', prevention: 'Keep old accounts open' },
                { num: 5, mistake: 'Too many applications', prevention: 'Space out by 6+ months' },
                { num: 6, mistake: 'Ignoring credit report', prevention: 'Check annually' },
                { num: 7, mistake: 'Co-signing without caution', prevention: 'Only if you can afford it' }
              ].map((item, idx) => (
                <div key={idx} className="grid md:grid-cols-3 gap-4 items-center bg-[#E5D7C4] rounded-lg p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FFCFD0] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>{item.num}</strong></span>
                    </div>
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>{item.mistake}</strong></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ban className="w-6 h-6 text-[#FFCFD0] flex-shrink-0" />
                    <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>Avoid this</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item.prevention}</p>
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
                { term: 'Late payment', def: 'Payment made after the due date' },
                { term: 'Credit utilization', def: 'Percentage of available credit being used' },
                { term: 'Minimum payment', def: 'Smallest amount you can pay to avoid late fees' },
                { term: 'Hard inquiry', def: 'Credit check that affects your score' },
                { term: 'Co-signing', def: 'Agreeing to be equally responsible for someone else\'s debt' },
                { term: 'Credit monitoring', def: 'Regularly checking your credit reports and score' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 border-l-4 border-[#FFCFD0]">
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
                'Never miss or delay payments',
                'Keep credit card balances low',
                'Pay more than the minimum',
                'Keep old credit cards open',
                'Limit new credit applications',
                'Check your credit report regularly',
                'Be extremely careful with co-signing'
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. What is the biggest credit mistake you can make?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Having multiple credit cards', correct: false },
                  { text: 'B) Missing or making late payments', correct: true },
                  { text: 'C) Checking your credit score', correct: false },
                  { text: 'D) Keeping old cards open', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. Why should you avoid only paying the minimum?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) It helps build credit faster', correct: false },
                  { text: 'B) It is required by law', correct: false },
                  { text: 'C) You waste money on interest and stay in debt longer', correct: true },
                  { text: 'D) It lowers your credit score immediately', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. When should you co-sign a loan for someone?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Whenever a friend asks', correct: false },
                  { text: 'B) Only if you can afford to pay the full debt yourself', correct: true },
                  { text: 'C) Never', correct: false },
                  { text: 'D) Whenever family asks', correct: false }
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
              to="/credit-debt/lesson-8"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/credit-debt/lesson-10"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Loans and Borrowing →
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