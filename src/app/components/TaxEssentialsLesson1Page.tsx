import { Link } from './RouterLink';
import { ArrowLeft, Building2, ShoppingCart, Wallet, MapPin, Users, GraduationCap, Car, Heart, Shield, DollarSign, Home, CheckCircle2, Clock, BarChart3, ArrowRight, Landmark, PiggyBank, Receipt, Scale } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function TaxEssentialsLesson1Page() {
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
            What Taxes Really Are
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Tax Essentials • Lesson 1
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Opening - Central Definition */}
          <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-3xl p-16 text-center shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-xl rounded-full p-10">
                <Landmark className="w-28 h-28" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Taxes are money you are required to pay to the government
            </h2>
            <p className="text-2xl mb-8 opacity-95 max-w-3xl mx-auto" style={{ letterSpacing: '-0.89px' }}>
              Taxes are payments collected by governments to fund public services and operations.
            </p>
            <p className="text-2xl mb-8 opacity-95 max-w-3xl mx-auto" style={{ letterSpacing: '-0.89px' }}>
              When you earn money, buy goods, or own certain assets, a portion of your money goes to federal, state, or local governments.
            </p>
            <div className="bg-white text-[#1C1C1C] rounded-2xl p-10 max-w-3xl mx-auto border-4 border-[#FFCFD0]">
              <p className="text-3xl mb-4" style={{ letterSpacing: '-0.89px' }}>
                <strong>Taxes are not optional. They are a legal requirement tied to income and spending.</strong>
              </p>
              <p className="text-xl text-[#FFCFD0]" style={{ letterSpacing: '-0.89px' }}>
                <strong>WARNING: Failing to pay required taxes can result in penalties, fines, or legal consequences.</strong>
              </p>
            </div>
          </div>

          {/* Why Taxes Exist */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Why taxes exist</h2>
            <p className="text-2xl text-[#1C1C1C] mb-10" style={{ letterSpacing: '-0.89px' }}>
              Taxes pay for services that benefit society as a whole. Even if you do not directly use everything funded by taxes, they support systems that allow the country to function.
            </p>

            <div className="bg-[#E5D7C4] rounded-2xl p-10 mb-8">
              <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                <strong>Tax money helps pay for:</strong>
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, label: 'Schools and education' },
                  { icon: Car, label: 'Roads and highways' },
                  { icon: Heart, label: 'Hospitals and healthcare programs' },
                  { icon: Shield, label: 'Emergency services (police, fire, rescue)' },
                  { icon: Users, label: 'Public transportation' },
                  { icon: Building2, label: 'National defense' },
                  { icon: Home, label: 'Public libraries and parks' },
                  { icon: MapPin, label: 'Government programs and infrastructure' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-sm">
                    <div className="bg-[#889063] rounded-full p-4 flex-shrink-0">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-xl p-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Taxes are how governments operate and provide public resources.</strong>
              </p>
            </div>
          </div>

          {/* Main Types of Taxes - Visual Comparison Cards */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-12 text-center" style={{ letterSpacing: '-0.89px' }}>
              The main types of taxes you will encounter
            </h2>

            <div className="grid gap-8">
              {/* Income Tax */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-[#889063] text-white p-8 flex items-center gap-6">
                  <div className="bg-white rounded-2xl p-6">
                    <Wallet className="w-16 h-16 text-[#889063]" />
                  </div>
                  <div>
                    <h3 className="text-4xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Income tax</strong></h3>
                    <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>Taken from money you earn</p>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    This is taken from money you earn from jobs or other sources.
                  </p>
                  
                  <div className="bg-[#E5D7C4] rounded-xl p-8 mb-8">
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Income tax is split into:</strong></p>
                    <div className="space-y-6">
                      <div className="bg-white rounded-lg p-6">
                        <h4 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Federal income tax</strong></h4>
                        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Goes to the US government. This funds military, Social Security, and national programs.</p>
                      </div>
                      <div className="bg-white rounded-lg p-6">
                        <h4 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>State income tax</strong></h4>
                        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Goes to your state government. Not all states charge income tax.</p>
                      </div>
                      <div className="bg-white rounded-lg p-6">
                        <h4 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Local income tax</strong></h4>
                        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Some cities or counties also tax income. This is less common.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-xl p-8">
                    <p className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Example:</strong></p>
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      If you earn $1,000 at a job, federal and state taxes might take $150 before you get your paycheck. You would receive about $850.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sales Tax */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-[#CFBB99] text-[#1C1C1C] p-8 flex items-center gap-6">
                  <div className="bg-white rounded-2xl p-6">
                    <ShoppingCart className="w-16 h-16 text-[#889063]" />
                  </div>
                  <div>
                    <h3 className="text-4xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Sales tax</strong></h3>
                    <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>Added when you buy things</p>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    This is a percentage added to purchases when you buy goods or services.
                  </p>
                  
                  <div className="bg-[#E5D7C4] rounded-xl p-8 mb-8">
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>How sales tax works:</strong></p>
                    <div className="space-y-4">
                      {[
                        'Sales tax is collected at the time of purchase',
                        'The store adds the tax to your total',
                        'The rate depends on your state and city',
                        'Common rates range from 5% to 10%',
                        'Essential items like groceries may be tax-exempt in some states'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                          <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                          <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#CFBB99]/20 border-2 border-[#CFBB99] rounded-xl p-8">
                    <p className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Example:</strong></p>
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                      You buy a shirt for $20. If sales tax is 8%, the store adds $1.60. Your total is $21.60.
                    </p>
                    <div className="bg-white rounded-lg p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Item price:</span>
                        <span className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>$20.00</strong></span>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Sales tax (8%):</span>
                        <span className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>$1.60</strong></span>
                      </div>
                      <div className="border-t-2 border-[#889063] pt-3 flex justify-between items-center">
                        <span className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Total paid:</strong></span>
                        <span className="text-3xl text-[#889063]" style={{ letterSpacing: '-0.89px' }}><strong>$21.60</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Tax */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-[#889063] text-white p-8 flex items-center gap-6">
                  <div className="bg-white rounded-2xl p-6">
                    <Home className="w-16 h-16 text-[#889063]" />
                  </div>
                  <div>
                    <h3 className="text-4xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Property tax</strong></h3>
                    <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>Paid by property owners</p>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    This is paid by people who own homes or land.
                  </p>
                  
                  <div className="bg-[#E5D7C4] rounded-xl p-8 mb-8">
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Property tax details:</strong></p>
                    <div className="space-y-4">
                      {[
                        'Based on the value of the property',
                        'Collected by local governments (cities and counties)',
                        'Funds schools, fire departments, and local infrastructure',
                        'Homeowners pay this yearly or through monthly mortgage payments',
                        'Renters do not pay property tax directly (landlords pay it)'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                          <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                          <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-xl p-8">
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      <strong>As a teen, you likely will not pay property tax yet.</strong> But if you rent or own property in the future, this will be part of your housing costs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payroll Taxes */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-[#CFBB99] text-[#1C1C1C] p-8 flex items-center gap-6">
                  <div className="bg-white rounded-2xl p-6">
                    <Receipt className="w-16 h-16 text-[#889063]" />
                  </div>
                  <div>
                    <h3 className="text-4xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Payroll taxes</strong></h3>
                    <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>Social Security and Medicare</p>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                    These are automatically taken from your paycheck to fund Social Security and Medicare.
                  </p>
                  
                  <div className="bg-[#E5D7C4] rounded-xl p-8 mb-8">
                    <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>What payroll taxes fund:</strong></p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-6">
                        <h4 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Social Security</strong></h4>
                        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                          Provides retirement income and disability benefits. You contribute now and receive benefits later in life.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-6">
                        <h4 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Medicare</strong></h4>
                        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                          Health insurance for people over 65 and those with certain disabilities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#CFBB99]/20 border-2 border-[#CFBB99] rounded-xl p-8">
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      <strong>Everyone who earns wages pays into Social Security and Medicare.</strong> These taxes appear on every paycheck as FICA (Federal Insurance Contributions Act) deductions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who Pays Taxes */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Who is required to pay taxes?</h2>
            
            <div className="space-y-6">
              {[
                { 
                  title: 'Anyone who earns income',
                  desc: 'This includes jobs, freelance work, side hustles, tips, and investment earnings.'
                },
                { 
                  title: 'Anyone who buys taxable goods',
                  desc: 'When you purchase items, sales tax applies in most places.'
                },
                { 
                  title: 'Property owners',
                  desc: 'People who own homes or land pay property taxes to local governments.'
                },
                { 
                  title: 'Businesses',
                  desc: 'Companies pay taxes on profits and other business activities.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#E5D7C4] rounded-xl p-8 flex items-start gap-6">
                  <div className="bg-[#889063] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>{item.title}</strong></h3>
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Federal vs State vs Local */}
          <div className="bg-gradient-to-br from-[#889063] to-[#CFBB99] rounded-2xl p-10 shadow-lg">
            <h2 className="text-4xl text-white mb-10 text-center" style={{ letterSpacing: '-0.89px' }}>
              Federal vs state vs local taxes
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#889063] rounded-full p-6">
                    <Scale className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-4 text-center" style={{ letterSpacing: '-0.89px' }}><strong>Federal</strong></h3>
                <p className="text-lg text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Goes to the US government
                </p>
                <div className="space-y-2">
                  {[
                    'National defense',
                    'Social Security',
                    'Medicare',
                    'Federal programs'
                  ].map((item, idx) => (
                    <p key={idx} className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>• {item}</p>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#889063] rounded-full p-6">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-4 text-center" style={{ letterSpacing: '-0.89px' }}><strong>State</strong></h3>
                <p className="text-lg text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Goes to your state
                </p>
                <div className="space-y-2">
                  {[
                    'State highways',
                    'State universities',
                    'State police',
                    'State parks'
                  ].map((item, idx) => (
                    <p key={idx} className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>• {item}</p>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#889063] rounded-full p-6">
                    <Building2 className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-4 text-center" style={{ letterSpacing: '-0.89px' }}><strong>Local</strong></h3>
                <p className="text-lg text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Goes to city or county
                </p>
                <div className="space-y-2">
                  {[
                    'Local schools',
                    'Fire departments',
                    'Public libraries',
                    'City services'
                  ].map((item, idx) => (
                    <p key={idx} className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>• {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Vocabulary */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: 'Federal tax', def: 'Tax paid to the US government' },
                { term: 'State tax', def: 'Tax paid to your state government' },
                { term: 'Sales tax', def: 'Tax added to purchases at the time of sale' },
                { term: 'Property tax', def: 'Tax paid by homeowners based on property value' },
                { term: 'Payroll tax', def: 'Tax taken from paychecks for Social Security and Medicare' },
                { term: 'FICA', def: 'Federal Insurance Contributions Act - Social Security and Medicare taxes' }
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
                'Taxes are required payments to fund government services',
                'Income tax is taken from money you earn',
                'Sales tax is added when you buy things',
                'Property tax is paid by homeowners',
                'Payroll taxes fund Social Security and Medicare',
                'Federal, state, and local governments all collect taxes',
                'Taxes pay for schools, roads, healthcare, and public services',
                'Everyone who earns income must pay taxes'
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. What are taxes?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Optional donations to the government', correct: false },
                  { text: 'B) Required payments to fund government services', correct: true },
                  { text: 'C) Fees you only pay if you own a business', correct: false },
                  { text: 'D) Money you get back at the end of the year', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. What is sales tax?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Tax taken from your paycheck', correct: false },
                  { text: 'B) A percentage added to purchases when you buy things', correct: true },
                  { text: 'C) Tax paid only by business owners', correct: false },
                  { text: 'D) Tax on property you own', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. What do payroll taxes fund?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Only national defense', correct: false },
                  { text: 'B) Social Security and Medicare', correct: true },
                  { text: 'C) Local schools only', correct: false },
                  { text: 'D) State highways', correct: false }
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
              to="/tax-essentials"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Back to Module
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/tax-essentials/lesson-2"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Understanding Your Paycheck →
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