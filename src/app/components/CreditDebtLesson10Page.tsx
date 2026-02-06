import { Link } from './RouterLink';
import { ArrowLeft, DollarSign, TrendingUp, TrendingDown, Home, Car, GraduationCap, CreditCard, ShoppingBag, Smartphone, AlertCircle, CheckCircle2, XCircle, Scale, Clock, BarChart3, Calendar, Zap, Shield, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function CreditDebtLesson10Page() {
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
            Loans and Borrowing
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Credit and Debt • Lesson 10
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Opening - Balanced Scale Visual */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-16 text-center shadow-2xl">
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-br from-[#889063] to-[#CFBB99] rounded-full p-10">
                  <Scale className="w-28 h-28 text-white" />
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                A loan is borrowed money with a fixed repayment plan
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                  Unlike credit cards, loans are <strong>installment debt</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#889063] text-white rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                      <p className="text-xl text-left" style={{ letterSpacing: '-0.89px' }}>You borrow one set amount</p>
                    </div>
                  </div>
                  <div className="bg-[#889063] text-white rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                      <p className="text-xl text-left" style={{ letterSpacing: '-0.89px' }}>You repay it in scheduled payments</p>
                    </div>
                  </div>
                  <div className="bg-[#889063] text-white rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                      <p className="text-xl text-left" style={{ letterSpacing: '-0.89px' }}>Each payment includes principal and interest</p>
                    </div>
                  </div>
                  <div className="bg-[#889063] text-white rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                      <p className="text-xl text-left" style={{ letterSpacing: '-0.89px' }}>There is a defined end date</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Distinction */}
          <div className="bg-[#354024] text-white rounded-2xl p-10 text-center">
            <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
              <strong>Loans are structured and predictable, but still costly if interest is high.</strong>
            </p>
          </div>

          {/* How Loans Work */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              How loans work
            </h2>

            <div className="space-y-8">
              {/* Component 1 */}
              <div className="flex items-start gap-6">
                <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Principal</strong></h3>
                  <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                    The amount you borrow
                  </p>
                  <div className="bg-[#E5D7C4] rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Example: You borrow $10,000 to buy a car. That is your principal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Component 2 */}
              <div className="flex items-start gap-6">
                <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Interest</strong></h3>
                  <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                    The cost of borrowing, expressed as an annual percentage (APR)
                  </p>
                  <div className="bg-[#E5D7C4] rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Example: 5% APR means you pay 5% of the principal each year in interest.
                    </p>
                  </div>
                </div>
              </div>

              {/* Component 3 */}
              <div className="flex items-start gap-6">
                <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Loan term</strong></h3>
                  <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                    The length of time to repay the loan
                  </p>
                  <div className="bg-[#E5D7C4] rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Example: 60 months (5 years), 180 months (15 years), 360 months (30 years).
                    </p>
                  </div>
                </div>
              </div>

              {/* Component 4 */}
              <div className="flex items-start gap-6">
                <div className="bg-[#889063] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Monthly payment</strong></h3>
                  <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                    Fixed amount paid every month, covering both principal and interest
                  </p>
                  <div className="bg-[#E5D7C4] rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Example: $189/month on a $10,000 car loan at 5% for 5 years.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 mt-8">
              <p className="text-2xl text-[#1C1C1C] text-center" style={{ letterSpacing: '-0.89px' }}>
                <strong>Your payment stays the same every month, but the total cost depends on the interest rate and loan term.</strong>
              </p>
            </div>
          </div>

          {/* Common Types of Loans - Alternating Visual Style */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-12 text-center" style={{ letterSpacing: '-0.89px' }}>
              Common types of loans
            </h2>

            <div className="space-y-6">
              {/* Mortgage - Left aligned with icon */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="flex items-center gap-6 bg-[#889063] text-white p-8">
                  <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
                    <Home className="w-16 h-16" />
                  </div>
                  <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}><strong>Mortgage</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                    Loan used to buy a home
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Typical term:</strong></p>
                      <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>15-30 years</p>
                    </div>
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Interest rate:</strong></p>
                      <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>3-7%</p>
                    </div>
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Secured by:</strong></p>
                      <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>The house</p>
                    </div>
                  </div>
                  <div className="bg-[#889063]/10 border-l-4 border-[#889063] rounded-lg p-6 mt-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      <strong>Note:</strong> Mortgages usually require a down payment (often 10-20% of the home price).
                    </p>
                  </div>
                </div>
              </div>

              {/* Auto Loan - Right aligned style */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="flex items-center gap-6 bg-[#CFBB99] text-[#1C1C1C] p-8">
                  <div className="bg-white rounded-2xl p-6">
                    <Car className="w-16 h-16 text-[#889063]" />
                  </div>
                  <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}><strong>Auto loan</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                    Loan used to buy a car
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Typical term:</strong></p>
                      <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>3-7 years</p>
                    </div>
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Interest rate:</strong></p>
                      <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>4-10%</p>
                    </div>
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Secured by:</strong></p>
                      <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>The car</p>
                    </div>
                  </div>
                  <div className="bg-[#CFBB99]/40 border-l-4 border-[#CFBB99] rounded-lg p-6 mt-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      <strong>Note:</strong> Cars lose value quickly. Avoid long terms or you will owe more than the car is worth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Student Loan */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="flex items-center gap-6 bg-[#889063] text-white p-8">
                  <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
                    <GraduationCap className="w-16 h-16" />
                  </div>
                  <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}><strong>Student loan</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                    Loan used to pay for education
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Typical term:</strong></p>
                      <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>10-25 years</p>
                    </div>
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Interest rate:</strong></p>
                      <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>3-12%</p>
                    </div>
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Secured by:</strong></p>
                      <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Nothing (unsecured)</p>
                    </div>
                  </div>
                  <div className="bg-[#889063]/10 border-l-4 border-[#889063] rounded-lg p-6 mt-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      <strong>Note:</strong> Federal student loans often have better terms than private loans.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Loan */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="flex items-center gap-6 bg-[#CFBB99] text-[#1C1C1C] p-8">
                  <div className="bg-white rounded-2xl p-6">
                    <DollarSign className="w-16 h-16 text-[#889063]" />
                  </div>
                  <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}><strong>Personal loan</strong></h3>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                    General-purpose loan for various needs
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Typical term:</strong></p>
                      <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>1-7 years</p>
                    </div>
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Interest rate:</strong></p>
                      <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>6-36%</p>
                    </div>
                    <div className="bg-[#E5D7C4] rounded-lg p-6">
                      <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Secured by:</strong></p>
                      <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Nothing (unsecured)</p>
                    </div>
                  </div>
                  <div className="bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] rounded-lg p-6 mt-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      <strong>Warning:</strong> Rates vary widely. Only use for true needs, not wants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secured vs Unsecured - Split Comparison */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Secured vs unsecured loans
            </h2>
            
            <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
              {/* Secured */}
              <div className="bg-[#889063] text-white p-12">
                <div className="flex items-center gap-4 mb-8">
                  <Shield className="w-16 h-16" />
                  <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}><strong>Secured</strong></h3>
                </div>
                <p className="text-2xl mb-8" style={{ letterSpacing: '-0.89px' }}>
                  Backed by collateral (an asset the lender can take if you do not pay)
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white/20 backdrop-blur rounded-lg p-6">
                    <p className="text-xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Examples:</strong></p>
                    <ul className="space-y-2 text-lg" style={{ letterSpacing: '-0.89px' }}>
                      <li>• Mortgage (house)</li>
                      <li>• Auto loan (car)</li>
                      <li>• Secured credit card (deposit)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/30 backdrop-blur rounded-lg p-6 mb-6">
                  <p className="text-xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Advantages:</strong></p>
                  <ul className="space-y-2 text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li>• Lower interest rates</li>
                    <li>• Easier to qualify</li>
                    <li>• Can borrow more</li>
                  </ul>
                </div>

                <div className="bg-[#FFCFD0]/30 border-2 border-[#FFCFD0] rounded-lg p-6">
                  <p className="text-xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Risk:</strong></p>
                  <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                    If you default, the lender takes your collateral.
                  </p>
                </div>
              </div>

              {/* Unsecured */}
              <div className="bg-[#354024] text-white p-12">
                <div className="flex items-center gap-4 mb-8">
                  <AlertCircle className="w-16 h-16" />
                  <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}><strong>Unsecured</strong></h3>
                </div>
                <p className="text-2xl mb-8" style={{ letterSpacing: '-0.89px' }}>
                  Not backed by collateral (based on creditworthiness alone)
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <p className="text-xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Examples:</strong></p>
                    <ul className="space-y-2 text-lg" style={{ letterSpacing: '-0.89px' }}>
                      <li>• Personal loans</li>
                      <li>• Student loans</li>
                      <li>• Credit cards</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur rounded-lg p-6 mb-6">
                  <p className="text-xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Advantages:</strong></p>
                  <ul className="space-y-2 text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li>• No collateral required</li>
                    <li>• Nothing to lose directly</li>
                    <li>• Faster approval process</li>
                  </ul>
                </div>

                <div className="bg-[#FFCFD0]/30 border-2 border-[#FFCFD0] rounded-lg p-6">
                  <p className="text-xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Risk:</strong></p>
                  <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                    Higher interest rates. Harder to qualify. Damages credit if you default.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What Makes a Loan Expensive */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              What makes a loan expensive
            </h2>

            <div className="space-y-6">
              {/* Factor 1 */}
              <div className="border-4 border-[#FFCFD0] rounded-2xl p-8 bg-[#FFCFD0]/10">
                <div className="flex items-start gap-6">
                  <div className="bg-[#FFCFD0] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-3xl text-[#1C1C1C]">
                    <strong>1</strong>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>High interest rate</strong></h3>
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                      Higher APR = More money paid in interest over time
                    </p>
                    <div className="bg-white rounded-lg p-8">
                      <p className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Example: $20,000 car loan over 5 years</strong></p>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-[#889063]/10 rounded-lg">
                          <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>At 3% APR:</p>
                          <p className="text-xl text-[#889063]" style={{ letterSpacing: '-0.89px' }}><strong>$1,562 in interest</strong></p>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-[#FFCFD0]/20 rounded-lg border-2 border-[#FFCFD0]">
                          <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>At 10% APR:</p>
                          <p className="text-xl text-[#FFCFD0]" style={{ letterSpacing: '-0.89px' }}><strong>$5,497 in interest</strong></p>
                        </div>
                      </div>
                      <div className="bg-[#E5D7C4] rounded-lg p-6 mt-6">
                        <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                          <strong>Difference: $3,935 more</strong> just from a higher rate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Factor 2 */}
              <div className="border-4 border-[#FFCFD0] rounded-2xl p-8 bg-[#FFCFD0]/10">
                <div className="flex items-start gap-6">
                  <div className="bg-[#FFCFD0] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-3xl text-[#1C1C1C]">
                    <strong>2</strong>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Long loan term</strong></h3>
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                      Longer term = Lower monthly payment BUT more total interest paid
                    </p>
                    <div className="bg-white rounded-lg p-8">
                      <p className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Example: $20,000 car loan at 6% APR</strong></p>
                      <div className="space-y-4">
                        <div className="p-6 bg-[#889063]/10 rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>3-year term</strong></p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-[#1C1C1C] opacity-70 mb-1" style={{ letterSpacing: '-0.89px' }}>Monthly payment</p>
                              <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>$608</strong></p>
                            </div>
                            <div>
                              <p className="text-sm text-[#1C1C1C] opacity-70 mb-1" style={{ letterSpacing: '-0.89px' }}>Total interest</p>
                              <p className="text-xl text-[#889063]" style={{ letterSpacing: '-0.89px' }}><strong>$1,895</strong></p>
                            </div>
                          </div>
                        </div>
                        <div className="p-6 bg-[#FFCFD0]/20 rounded-lg border-2 border-[#FFCFD0]">
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>7-year term</strong></p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-[#1C1C1C] opacity-70 mb-1" style={{ letterSpacing: '-0.89px' }}>Monthly payment</p>
                              <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>$283</strong></p>
                            </div>
                            <div>
                              <p className="text-sm text-[#1C1C1C] opacity-70 mb-1" style={{ letterSpacing: '-0.89px' }}>Total interest</p>
                              <p className="text-xl text-[#FFCFD0]" style={{ letterSpacing: '-0.89px' }}><strong>$4,009</strong></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#E5D7C4] rounded-lg p-6 mt-6">
                        <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                          Lower payment looks affordable, but you pay <strong>$2,114 more</strong> in interest
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Factor 3 */}
              <div className="border-4 border-[#FFCFD0] rounded-2xl p-8 bg-[#FFCFD0]/10">
                <div className="flex items-start gap-6">
                  <div className="bg-[#FFCFD0] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-3xl text-[#1C1C1C]">
                    <strong>3</strong>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Additional fees</strong></h3>
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                      Origination fees, processing fees, late fees all add to the total cost
                    </p>
                    <div className="bg-white rounded-lg p-8">
                      <p className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Common fees to watch for:</strong></p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { fee: 'Origination fee', cost: '1-6% of loan amount' },
                          { fee: 'Processing fee', cost: '$25-$500' },
                          { fee: 'Late payment fee', cost: '$25-$50 per occurrence' },
                          { fee: 'Prepayment penalty', cost: 'Varies by lender' }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-[#E5D7C4] rounded-lg p-6">
                            <p className="text-lg text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>{item.fee}</strong></p>
                            <p className="text-xl text-[#FFCFD0]" style={{ letterSpacing: '-0.89px' }}>{item.cost}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Get a Good Loan */}
          <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              How to get a good loan
            </h2>

            <div className="space-y-6">
              {[
                { title: 'Improve your credit score first', desc: 'Better credit = Better rates. Wait if your score is low.' },
                { title: 'Shop around for rates', desc: 'Compare at least 3-5 lenders. Rates can vary significantly.' },
                { title: 'Choose the shortest term you can afford', desc: 'Higher monthly payment, but less interest overall.' },
                { title: 'Make a larger down payment', desc: 'Borrow less = Pay less interest. Aim for 20% down on homes, 10-20% on cars.' },
                { title: 'Read the fine print', desc: 'Check for hidden fees, prepayment penalties, variable rates.' },
                { title: 'Avoid predatory lenders', desc: 'Stay away from payday loans, title loans, and lenders with extremely high rates.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/20 backdrop-blur rounded-lg p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-[#889063]" />
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

          {/* When to Avoid Borrowing */}
          <div className="bg-white rounded-xl p-10 shadow-lg border-4 border-[#FFCFD0]">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              When to avoid borrowing
            </h2>

            <div className="space-y-6">
              {[
                { scenario: 'For things that lose value quickly', examples: 'Electronics, furniture, vacations, clothes' },
                { scenario: 'When you cannot afford the monthly payment', examples: 'Stretching your budget too thin creates stress and risk' },
                { scenario: 'When the interest rate is extremely high', examples: 'Payday loans (300-400% APR), title loans, rent-to-own' },
                { scenario: 'For wants instead of needs', examples: 'Borrowing for luxury items you do not need' },
                { scenario: 'When you have high-interest debt already', examples: 'Pay off credit cards before taking new loans' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FFCFD0]/20 rounded-lg p-8">
                  <div className="flex items-start gap-6">
                    <XCircle className="w-12 h-12 text-[#FFCFD0] flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>{item.scenario}</strong></h3>
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item.examples}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mt-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>If you cannot afford to buy it outright, think carefully about whether you can afford to borrow for it.</strong>
              </p>
            </div>
          </div>

          {/* Key Vocabulary */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: 'Principal', def: 'The original amount borrowed' },
                { term: 'Interest', def: 'Cost of borrowing money, expressed as APR' },
                { term: 'Loan term', def: 'Length of time to repay the loan' },
                { term: 'Installment debt', def: 'Debt with fixed payments over time' },
                { term: 'Secured loan', def: 'Loan backed by collateral' },
                { term: 'Unsecured loan', def: 'Loan based on creditworthiness alone' },
                { term: 'Collateral', def: 'Asset pledged to secure a loan' },
                { term: 'Origination fee', def: 'Fee charged to process a new loan' }
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
                'Loans are installment debt with fixed repayment schedules',
                'Principal is what you borrow, interest is what you pay to borrow it',
                'Secured loans have collateral, unsecured loans do not',
                'Higher interest rates and longer terms make loans more expensive',
                'Improve credit, shop around, and choose shorter terms',
                'Avoid borrowing for things that lose value quickly',
                'Read all terms and watch for hidden fees',
                'Only borrow what you can truly afford to repay'
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. What is the difference between secured and unsecured loans?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Secured loans have higher interest rates', correct: false },
                  { text: 'B) Secured loans are backed by collateral', correct: true },
                  { text: 'C) Unsecured loans require a down payment', correct: false },
                  { text: 'D) There is no difference', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. Why does a longer loan term cost more?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Monthly payments are higher', correct: false },
                  { text: 'B) You pay interest for more months', correct: true },
                  { text: 'C) The principal amount increases', correct: false },
                  { text: 'D) It does not cost more', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. When should you avoid taking a loan?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) For a car you need for work', correct: false },
                  { text: 'B) For things that lose value quickly', correct: true },
                  { text: 'C) For education', correct: false },
                  { text: 'D) For a home', correct: false }
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
              to="/credit-debt/lesson-9"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/credit-debt/lesson-11"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                How Debt Impacts Your Future →
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