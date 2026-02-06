import { Link } from './RouterLink';
import { ArrowLeft, Calculator, DollarSign, Minus, Building2, MapPin, Users, Heart, AlertCircle, CheckCircle2, Clock, BarChart3, TrendingDown, FileText, ArrowDown, ArrowRight, Wallet, CreditCard, Receipt } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function TaxEssentialsLesson2Page() {
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
            to="/tax-essentials" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Tax Essentials
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
            Understanding Your Paycheck
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Tax Essentials • Lesson 2
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Opening - The Big Reveal */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-8">
                <div className="bg-[#889063] rounded-full p-10">
                  <Calculator className="w-24 h-24 text-white" />
                </div>
              </div>
              <h2 className="text-5xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                Your paycheck is not the same as your salary
              </h2>
              <p className="text-2xl text-[#1C1C1C] mb-8 max-w-3xl mx-auto" style={{ letterSpacing: '-0.89px' }}>
                When you get a job, you are told an hourly wage or yearly salary. That number is your gross pay.
              </p>
            </div>

            <div className="bg-[#E5D7C4] rounded-2xl p-10 mb-8">
              <p className="text-2xl text-[#1C1C1C] mb-6 text-center" style={{ letterSpacing: '-0.89px' }}>
                <strong>Gross pay is the total amount you earn before anything is taken out.</strong>
              </p>
              <div className="bg-white rounded-xl p-8 mb-6">
                <p className="text-xl text-[#1C1C1C] text-center" style={{ letterSpacing: '-0.89px' }}>
                  Your actual paycheck is smaller because taxes and required deductions are removed.
                </p>
              </div>
              <p className="text-2xl text-[#1C1C1C] text-center" style={{ letterSpacing: '-0.89px' }}>
                What you take home is called <strong>net pay</strong>.
              </p>
            </div>

            <div className="bg-[#354024] text-white rounded-2xl p-10 text-center">
              <p className="text-3xl mb-4" style={{ letterSpacing: '-0.89px' }}>
                <strong>Gross pay - deductions = net pay</strong>
              </p>
              <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>
                This is the most important formula to understand about your paycheck
              </p>
            </div>
          </div>

          {/* Why Money Is Taken Out */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Why money is taken out of your paycheck</h2>
            <p className="text-2xl text-[#1C1C1C] mb-10" style={{ letterSpacing: '-0.89px' }}>
              Employers are required to withhold taxes from your earnings and send them to the government on your behalf.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#889063] rounded-xl p-8 text-white">
                <CheckCircle2 className="w-12 h-12 mb-4" />
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  This prevents you from having to pay a large amount all at once later.
                </p>
              </div>
              <div className="bg-[#CFBB99] rounded-xl p-8">
                <CheckCircle2 className="w-12 h-12 mb-4 text-[#354024]" />
                <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  The government collects taxes gradually through paycheck withholding.
                </p>
              </div>
            </div>

            <div className="bg-[#E5D7C4] rounded-xl p-8 text-center">
              <p className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                <strong>Withholding is automatic and required by law</strong>
              </p>
            </div>
          </div>

          {/* The Deduction Flow - Unique Visual Style */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-12 text-center" style={{ letterSpacing: '-0.89px' }}>
              The major deductions you will see
            </h2>

            <div className="space-y-8">
              {/* Starting Point: Gross Pay */}
              <div className="bg-gradient-to-r from-[#889063] to-[#CFBB99] rounded-2xl p-12 text-center shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-full p-8">
                    <DollarSign className="w-20 h-20 text-[#889063]" />
                  </div>
                </div>
                <p className="text-xl text-white mb-3" style={{ letterSpacing: '-0.89px' }}>You Start With:</p>
                <p className="text-6xl text-white mb-4" style={{ letterSpacing: '-0.89px' }}><strong>GROSS PAY</strong></p>
                <p className="text-2xl text-white" style={{ letterSpacing: '-0.89px' }}>Your full salary before deductions</p>
              </div>

              {/* Arrow Connector */}
              <div className="flex justify-center">
                <ArrowDown className="w-12 h-12 text-[#354024]" />
              </div>

              {/* Deduction 1: Federal Income Tax */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-[#889063]">
                <div className="p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-[#889063] rounded-2xl p-6 flex-shrink-0">
                      <Minus className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Building2 className="w-10 h-10 text-[#889063]" />
                        <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Federal income tax</strong></h3>
                      </div>
                      <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                        This goes to the national government based on your earnings.
                      </p>
                      
                      <div className="bg-[#E5D7C4] rounded-xl p-8 mb-6">
                        <p className="text-lg text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>The amount withheld depends on:</strong></p>
                        <div className="space-y-3">
                          {[
                            'Your income level (higher income = higher tax)',
                            'How you filled out your W-4 form',
                            'Your filing status (single, married, etc.)'
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                              <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                              <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#889063] text-white rounded-xl p-6 text-center">
                        <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                          <strong>This is one of the largest deductions on your paycheck</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              <div className="flex justify-center">
                <ArrowDown className="w-12 h-12 text-[#354024]" />
              </div>

              {/* Deduction 2: State Income Tax */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-[#CFBB99]">
                <div className="p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-[#CFBB99] rounded-2xl p-6 flex-shrink-0">
                      <Minus className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-10 h-10 text-[#889063]" />
                        <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>State income tax</strong></h3>
                      </div>
                      <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                        This goes to your state government.
                      </p>
                      
                      <div className="bg-[#E5D7C4] rounded-xl p-8 mb-6">
                        <p className="text-lg text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                          Not every state has the same tax rate. Some take more, some take none.
                        </p>
                        
                        <div className="bg-white rounded-lg p-6 mb-4">
                          <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                            <strong>States with NO income tax include:</strong>
                          </p>
                          <p className="text-lg text-[#1C1C1C] mt-3" style={{ letterSpacing: '-0.89px' }}>
                            Texas, Florida, Nevada, Washington, Tennessee, Wyoming, South Dakota, Alaska, New Hampshire
                          </p>
                        </div>

                        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                          But this deduction exists in most states with rates ranging from 2% to 13%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              <div className="flex justify-center">
                <ArrowDown className="w-12 h-12 text-[#354024]" />
              </div>

              {/* Deduction 3: Social Security Tax */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-[#889063]">
                <div className="p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-[#889063] rounded-2xl p-6 flex-shrink-0">
                      <Minus className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-10 h-10 text-[#889063]" />
                        <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Social Security tax</strong></h3>
                      </div>
                      <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                        This funds retirement and disability benefits for workers in the U.S.
                      </p>
                      
                      <div className="bg-[#E5D7C4] rounded-xl p-8 mb-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-[#354024] text-white rounded-xl p-8 text-center">
                            <p className="text-4xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>6.2%</strong></p>
                            <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>You pay this percentage of your earnings</p>
                          </div>
                          <div className="bg-white rounded-xl p-8 text-center border-2 border-[#889063]">
                            <p className="text-4xl text-[#889063] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>6.2%</strong></p>
                            <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Your employer pays this separately</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#889063] text-white rounded-xl p-6 text-center">
                        <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                          <strong>This tax is required for almost all workers</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              <div className="flex justify-center">
                <ArrowDown className="w-12 h-12 text-[#354024]" />
              </div>

              {/* Deduction 4: Medicare Tax */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-[#CFBB99]">
                <div className="p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-[#CFBB99] rounded-2xl p-6 flex-shrink-0">
                      <Minus className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Heart className="w-10 h-10 text-[#889063]" />
                        <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Medicare tax</strong></h3>
                      </div>
                      <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                        This funds healthcare for older adults and certain individuals.
                      </p>
                      
                      <div className="bg-[#E5D7C4] rounded-xl p-8 mb-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-[#354024] text-white rounded-xl p-8 text-center">
                            <p className="text-4xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>1.45%</strong></p>
                            <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>You pay this percentage of your earnings</p>
                          </div>
                          <div className="bg-white rounded-xl p-8 text-center border-2 border-[#889063]">
                            <p className="text-4xl text-[#889063] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>1.45%</strong></p>
                            <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Your employer matches this amount</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#CFBB99] rounded-xl p-6 text-center">
                        <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                          <strong>Social Security + Medicare = FICA taxes (7.65% total from your pay)</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              <div className="flex justify-center">
                <ArrowDown className="w-12 h-12 text-[#354024]" />
              </div>

              {/* End Result: Net Pay */}
              <div className="bg-gradient-to-r from-[#354024] to-[#889063] rounded-2xl p-12 text-center shadow-2xl">
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-full p-8">
                    <Wallet className="w-20 h-20 text-[#354024]" />
                  </div>
                </div>
                <p className="text-xl text-white mb-3" style={{ letterSpacing: '-0.89px' }}>What You Actually Take Home:</p>
                <p className="text-6xl text-white mb-4" style={{ letterSpacing: '-0.89px' }}><strong>NET PAY</strong></p>
                <p className="text-2xl text-white" style={{ letterSpacing: '-0.89px' }}>Your salary after all deductions</p>
              </div>
            </div>
          </div>

          {/* What Withholding Really Means */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>What withholding really means</h2>
            <p className="text-2xl text-[#1C1C1C] mb-10" style={{ letterSpacing: '-0.89px' }}>
              Withholding is money taken out early to cover taxes you owe later.
            </p>

            <div className="bg-[#E5D7C4] rounded-2xl p-10 mb-8">
              <p className="text-2xl text-[#1C1C1C] text-center mb-8" style={{ letterSpacing: '-0.89px' }}>
                <strong>Think of it as prepaying your taxes</strong>
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#889063] text-white rounded-xl p-8">
                  <CheckCircle2 className="w-12 h-12 mb-4" />
                  <p className="text-xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>If too much is withheld:</strong></p>
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                    You get a refund when you file your tax return
                  </p>
                </div>
                <div className="bg-[#FFCFD0] rounded-xl p-8 border-2 border-[#FFCFD0]">
                  <AlertCircle className="w-12 h-12 mb-4 text-[#1C1C1C]" />
                  <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>If too little is withheld:</strong></p>
                  <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    You owe money at tax time (and may face penalties)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-xl p-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Withholding happens automatically every pay period</strong>
              </p>
            </div>
          </div>

          {/* Real Example Calculation */}
          <div className="bg-gradient-to-br from-[#889063] to-[#CFBB99] rounded-2xl p-10 shadow-lg">
            <h2 className="text-4xl text-white mb-10 text-center" style={{ letterSpacing: '-0.89px' }}>
              Real paycheck example
            </h2>

            <div className="bg-white rounded-xl p-10">
              <p className="text-2xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
                <strong>You earn $2,000 this pay period (gross pay)</strong>
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { label: 'Federal income tax (approx. 12%)', amount: '-$240' },
                  { label: 'State income tax (varies by state)', amount: '-$80' },
                  { label: 'Social Security tax (6.2%)', amount: '-$124' },
                  { label: 'Medicare tax (1.45%)', amount: '-$29' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-[#E5D7C4] rounded-lg p-6">
                    <span className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item.label}</span>
                    <span className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>{item.amount}</strong></span>
                  </div>
                ))}
              </div>

              <div className="border-t-4 border-[#889063] pt-6">
                <div className="flex justify-between items-center bg-[#354024] text-white rounded-xl p-8">
                  <span className="text-2xl" style={{ letterSpacing: '-0.89px' }}><strong>Your net pay (take-home):</strong></span>
                  <span className="text-4xl" style={{ letterSpacing: '-0.89px' }}><strong>$1,527</strong></span>
                </div>
              </div>

              <p className="text-lg text-[#1C1C1C] mt-8 text-center opacity-70" style={{ letterSpacing: '-0.89px' }}>
                You earned $2,000, but took home $1,527 after deductions (about 76% of gross pay)
              </p>
            </div>
          </div>

          {/* What You Can Control */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>What you can control</h2>
            
            <div className="space-y-6">
              <div className="bg-[#E5D7C4] rounded-xl p-8 flex items-start gap-6">
                <div className="bg-[#889063] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Your W-4 form</strong></h3>
                  <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    When you start a job, you fill out a W-4 form. This tells your employer how much federal tax to withhold. You can adjust this if you are having too much or too little withheld.
                  </p>
                </div>
              </div>

              <div className="bg-[#E5D7C4] rounded-xl p-8 flex items-start gap-6">
                <div className="bg-[#889063] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Additional withholding</strong></h3>
                  <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    You can request extra money to be withheld if you want a larger refund or have other income sources.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What You Cannot Control */}
          <div className="bg-[#FFCFD0]/30 border-2 border-[#FFCFD0] rounded-xl p-10">
            <div className="flex items-start gap-6 mb-8">
              <AlertCircle className="w-12 h-12 text-[#1C1C1C] flex-shrink-0" />
              <div>
                <h2 className="text-4xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>What you cannot control</h2>
                <p className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Some deductions are required and cannot be changed
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                'Social Security tax (6.2%) - This is mandatory for all workers',
                'Medicare tax (1.45%) - This is mandatory for all workers',
                'State and local taxes - These are set by your state/city government'
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-[#FFCFD0]">
                  <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Vocabulary */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: 'Gross pay', def: 'Total earnings before any deductions' },
                { term: 'Net pay', def: 'Take-home pay after all deductions' },
                { term: 'Withholding', def: 'Money taken from your paycheck for taxes' },
                { term: 'W-4 form', def: 'Form that determines federal tax withholding' },
                { term: 'FICA', def: 'Social Security and Medicare taxes (7.65% total)' },
                { term: 'Deduction', def: 'Money removed from your gross pay' }
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
                'Your paycheck is smaller than your salary due to deductions',
                'Gross pay is what you earn before deductions',
                'Net pay is what you take home after deductions',
                'Federal income tax is usually the largest deduction',
                'State income tax varies by state (some have none)',
                'FICA taxes (Social Security + Medicare) total 7.65%',
                'Withholding is required and happens automatically',
                'You can adjust federal withholding with your W-4 form'
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. What is gross pay?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Money you take home after taxes', correct: false },
                  { text: 'B) Total earnings before any deductions', correct: true },
                  { text: 'C) Only your federal tax withholding', correct: false },
                  { text: 'D) Money withheld for Social Security', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. What percentage do you pay for FICA taxes (Social Security + Medicare)?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) 12%', correct: false },
                  { text: 'B) 7.65%', correct: true },
                  { text: 'C) 15%', correct: false },
                  { text: 'D) 5%', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. What happens if too little tax is withheld from your paycheck?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) You automatically get a refund', correct: false },
                  { text: 'B) You owe money at tax time', correct: true },
                  { text: 'C) Nothing, it does not matter', correct: false },
                  { text: 'D) Your employer pays the difference', correct: false }
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
            <div className="text-left">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
              <Link 
                to="/tax-essentials/lesson-1"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                ← What Taxes Really Are
              </Link>
            </div>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/tax-essentials/lesson-3"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Filing Your Tax Return →
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