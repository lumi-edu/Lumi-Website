import { Link } from './RouterLink';
import { ArrowLeft, TrendingDown, Lock, Shield, Calendar, Brain, AlertCircle, Home, GraduationCap, Heart, Briefcase, TrendingUp, XCircle, CheckCircle2, DollarSign, Clock, BarChart3, Target, Zap, AlertTriangle, MinusCircle } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function CreditDebtLesson11Page() {
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
            How Debt Impacts Your Future
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Credit and Debt • Lesson 11
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Opening - Timeline Visual */}
          <div className="relative">
            {/* Central Statement */}
            <div className="bg-gradient-to-r from-[#354024] to-[#889063] text-white rounded-3xl p-16 text-center shadow-2xl mb-8">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-xl rounded-full p-10">
                  <TrendingDown className="w-28 h-28" />
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl mb-8" style={{ letterSpacing: '-0.89px' }}>
                Debt is not just about what you owe now
              </h2>
              <p className="text-2xl mb-8 opacity-95" style={{ letterSpacing: '-0.89px' }}>
                Debt affects your future long after the purchase is made.
              </p>
              <div className="bg-white text-[#1C1C1C] rounded-2xl p-10 max-w-3xl mx-auto">
                <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Every dollar borrowed today is money taken from future income.</strong>
                </p>
              </div>
            </div>

            {/* What Debt Reduces - Icon Grid */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: Zap, label: 'Financial flexibility' },
                { icon: Target, label: 'Ability to save' },
                { icon: TrendingUp, label: 'Ability to invest' },
                { icon: Shield, label: 'Financial security' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 text-center shadow-lg border-2 border-[#FFCFD0]">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#FFCFD0] rounded-full p-6">
                      <item.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <strong>{item.label}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section: How Debt Affects Different Life Stages */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-12 text-center" style={{ letterSpacing: '-0.89px' }}>
              How debt affects different life stages
            </h2>

            {/* Timeline with connecting line */}
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#889063] hidden md:block"></div>

              <div className="space-y-8">
                {/* Stage 1: Early 20s */}
                <div className="relative">
                  <div className="md:ml-20">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-[#889063]">
                      <div className="bg-[#889063] text-white p-6 flex items-center gap-4">
                        <div className="bg-white rounded-full p-4">
                          <GraduationCap className="w-12 h-12 text-[#889063]" />
                        </div>
                        <div>
                          <p className="text-xl opacity-80" style={{ letterSpacing: '-0.89px' }}>Stage 1</p>
                          <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>Early 20s</strong></h3>
                        </div>
                      </div>
                      <div className="p-10">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>With debt:</strong></h4>
                            <div className="space-y-4">
                              {[
                                'Monthly payments reduce take-home pay',
                                'Cannot save for emergencies',
                                'Living paycheck to paycheck',
                                'Delayed financial independence',
                                'Cannot take career risks or opportunities'
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <MinusCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Without debt:</strong></h4>
                            <div className="space-y-4">
                              {[
                                'Full paycheck goes to savings or investing',
                                'Can build emergency fund quickly',
                                'Financial breathing room',
                                'Freedom to make career moves',
                                'Compound interest works for you, not against you'
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-[#889063] rounded-full border-4 border-[#E5D7C4] hidden md:block"></div>
                </div>

                {/* Stage 2: Late 20s to Early 30s */}
                <div className="relative">
                  <div className="md:ml-20">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-[#CFBB99]">
                      <div className="bg-[#CFBB99] text-[#1C1C1C] p-6 flex items-center gap-4">
                        <div className="bg-white rounded-full p-4">
                          <Briefcase className="w-12 h-12 text-[#889063]" />
                        </div>
                        <div>
                          <p className="text-xl opacity-80" style={{ letterSpacing: '-0.89px' }}>Stage 2</p>
                          <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>Late 20s to early 30s</strong></h3>
                        </div>
                      </div>
                      <div className="p-10">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>With debt:</strong></h4>
                            <div className="space-y-4">
                              {[
                                'Harder to qualify for a mortgage',
                                'Higher interest rates on loans',
                                'Cannot save for a house down payment',
                                'Delayed major purchases',
                                'Credit score holds you back'
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <MinusCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Without debt:</strong></h4>
                            <div className="space-y-4">
                              {[
                                'Strong credit score opens doors',
                                'Qualify for better mortgage rates',
                                'Can afford 20% down payment',
                                'Investment accounts growing',
                                'Financial options and flexibility'
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-[#CFBB99] rounded-full border-4 border-[#E5D7C4] hidden md:block"></div>
                </div>

                {/* Stage 3: 30s and 40s */}
                <div className="relative">
                  <div className="md:ml-20">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-[#889063]">
                      <div className="bg-[#889063] text-white p-6 flex items-center gap-4">
                        <div className="bg-white rounded-full p-4">
                          <Heart className="w-12 h-12 text-[#889063]" />
                        </div>
                        <div>
                          <p className="text-xl opacity-80" style={{ letterSpacing: '-0.89px' }}>Stage 3</p>
                          <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>30s and 40s</strong></h3>
                        </div>
                      </div>
                      <div className="p-10">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>With debt:</strong></h4>
                            <div className="space-y-4">
                              {[
                                'Still paying for past purchases',
                                'Cannot afford to help family',
                                'Retirement savings delayed or minimal',
                                'Stress affects relationships',
                                'Limited ability to handle emergencies'
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <MinusCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Without debt:</strong></h4>
                            <div className="space-y-4">
                              {[
                                'Maxing out retirement accounts',
                                'Building college funds for kids',
                                'Investments growing substantially',
                                'Can help aging parents if needed',
                                'Peace of mind and stability'
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-[#889063] rounded-full border-4 border-[#E5D7C4] hidden md:block"></div>
                </div>

                {/* Stage 4: 50s and beyond */}
                <div className="relative">
                  <div className="md:ml-20">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-[#354024]">
                      <div className="bg-[#354024] text-white p-6 flex items-center gap-4">
                        <div className="bg-white rounded-full p-4">
                          <Home className="w-12 h-12 text-[#354024]" />
                        </div>
                        <div>
                          <p className="text-xl opacity-80" style={{ letterSpacing: '-0.89px' }}>Stage 4</p>
                          <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>50s and beyond</strong></h3>
                        </div>
                      </div>
                      <div className="p-10">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>With debt:</strong></h4>
                            <div className="space-y-4">
                              {[
                                'Cannot afford to retire',
                                'Working longer than planned',
                                'Social Security eaten up by payments',
                                'Limited healthcare options',
                                'Financial burden on family'
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <MinusCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Without debt:</strong></h4>
                            <div className="space-y-4">
                              {[
                                'Can retire comfortably on schedule',
                                'Multiple income streams from investments',
                                'Paid-off home',
                                'Can travel and enjoy retirement',
                                'Leave legacy for family'
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-[#354024] rounded-full border-4 border-[#E5D7C4] hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>

          {/* The Opportunity Cost of Debt */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              The opportunity cost of debt
            </h2>
            <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Opportunity cost is what you give up when you make one choice instead of another.
            </p>

            <div className="bg-[#E5D7C4] rounded-2xl p-10 mb-8">
              <p className="text-2xl text-[#1C1C1C] text-center mb-4" style={{ letterSpacing: '-0.89px' }}>
                <strong>When you pay debt, you cannot use that same money to build wealth.</strong>
              </p>
            </div>

            {/* Real Example */}
            <div className="border-4 border-[#FFCFD0] rounded-2xl p-10 bg-[#FFCFD0]/10">
              <h3 className="text-3xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
                <strong>Real example: $300/month for 10 years</strong>
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Option 1: Debt Payments */}
                <div className="bg-white rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#FFCFD0] rounded-full p-4">
                      <MinusCircle className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Option 1: Paying off debt</strong></h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}>Monthly payment:</p>
                      <p className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>$300</strong></p>
                    </div>
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}>Total paid over 10 years:</p>
                      <p className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>$36,000</strong></p>
                    </div>
                    <div className="bg-[#FFCFD0]/20 rounded-lg p-6 border-2 border-[#FFCFD0]">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}>Final result:</p>
                      <p className="text-3xl text-[#FFCFD0]" style={{ letterSpacing: '-0.89px' }}><strong>$0</strong></p>
                      <p className="text-lg text-[#1C1C1C] mt-3" style={{ letterSpacing: '-0.89px' }}>
                        Debt is gone, but you have nothing to show for it
                      </p>
                    </div>
                  </div>
                </div>

                {/* Option 2: Investing */}
                <div className="bg-white rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#889063] rounded-full p-4">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Option 2: Investing instead</strong></h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}>Monthly investment:</p>
                      <p className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>$300</strong></p>
                    </div>
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}>Total invested over 10 years:</p>
                      <p className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>$36,000</strong></p>
                    </div>
                    <div className="bg-[#889063]/10 rounded-lg p-6 border-2 border-[#889063]">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}>Final result at 8% return:</p>
                      <p className="text-3xl text-[#889063]" style={{ letterSpacing: '-0.89px' }}><strong>$55,000+</strong></p>
                      <p className="text-lg text-[#1C1C1C] mt-3" style={{ letterSpacing: '-0.89px' }}>
                        You have built real wealth that keeps growing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#354024] text-white rounded-xl p-8 mt-8 text-center">
                <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Opportunity cost: $55,000 in wealth you did not build</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Psychological Impact */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FFCFD0]/20 border-4 border-[#FFCFD0] rounded-2xl p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#FFCFD0] rounded-full p-6">
                  <AlertTriangle className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Mental burden of debt</strong></h3>
              </div>
              <div className="space-y-4">
                {[
                  'Constant stress and anxiety',
                  'Feeling trapped or stuck',
                  'Shame or embarrassment',
                  'Relationship strain',
                  'Difficulty sleeping',
                  'Reduced quality of life',
                  'Delayed life goals'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#889063]/10 border-4 border-[#889063] rounded-2xl p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#889063] rounded-full p-6">
                  <Shield className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Freedom without debt</strong></h3>
              </div>
              <div className="space-y-4">
                {[
                  'Peace of mind',
                  'Confidence in financial decisions',
                  'More career options',
                  'Better relationships',
                  'Ability to be generous',
                  'Control over your time',
                  'Freedom to pursue goals'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Breaking the Cycle */}
          <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Breaking the debt cycle
            </h2>

            <div className="space-y-6">
              {[
                { 
                  title: 'Stop adding new debt',
                  desc: 'Put the shovel down. You cannot climb out of a hole while still digging.'
                },
                { 
                  title: 'Build a small emergency fund first',
                  desc: 'Save $500-$1,000 to avoid new debt when surprises happen.'
                },
                { 
                  title: 'List all debts smallest to largest',
                  desc: 'Seeing everything in one place makes it less overwhelming and gives you a plan.'
                },
                { 
                  title: 'Pay minimums on everything except the smallest',
                  desc: 'Attack the smallest debt with everything extra you can find.'
                },
                { 
                  title: 'Celebrate small wins',
                  desc: 'Each paid-off debt builds momentum and confidence.'
                },
                { 
                  title: 'Roll payments forward',
                  desc: 'When one debt is gone, add that payment to the next debt.'
                },
                { 
                  title: 'Change your relationship with money',
                  desc: 'Debt is not a tool for building wealth. It is an obstacle to overcome.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/20 backdrop-blur rounded-lg p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl text-[#889063]" style={{ letterSpacing: '-0.89px' }}><strong>{idx + 1}</strong></span>
                    </div>
                    <div>
                      <h3 className="text-2xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>{item.title}</strong></h3>
                      <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>{item.desc}</p>
                    </div>
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
                { term: 'Opportunity cost', def: 'What you give up when choosing one option over another' },
                { term: 'Compound interest', def: 'Interest that builds on itself over time' },
                { term: 'Financial flexibility', def: 'Ability to respond to changes or opportunities' },
                { term: 'Debt cycle', def: 'Pattern of borrowing that is difficult to escape' }
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
                'Debt affects your future for years after the purchase',
                'Every dollar in debt payments is a dollar you cannot invest',
                'Debt limits financial flexibility at every life stage',
                'Opportunity cost of debt is massive over time',
                'Debt creates mental and emotional burden',
                'Breaking the cycle requires stopping new debt first',
                'Small wins build momentum toward freedom',
                'Life without debt offers real choices and peace'
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. What is opportunity cost?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) The interest you pay on debt', correct: false },
                  { text: 'B) What you give up when choosing one option over another', correct: true },
                  { text: 'C) The cost of applying for credit', correct: false },
                  { text: 'D) Fees charged by lenders', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. How does debt affect your future?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) It only affects you while you are paying it', correct: false },
                  { text: 'B) It limits financial flexibility for years and prevents wealth building', correct: true },
                  { text: 'C) It has no long-term impact', correct: false },
                  { text: 'D) It helps you build credit faster', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. What is the first step to breaking the debt cycle?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Pay off the largest debt first', correct: false },
                  { text: 'B) Stop adding new debt', correct: true },
                  { text: 'C) Close all credit cards', correct: false },
                  { text: 'D) Invest while paying debt', correct: false }
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
              to="/credit-debt/lesson-10"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/credit-debt/lesson-12"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Becoming Debt-Free →
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
