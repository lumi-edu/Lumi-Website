import { Link } from './RouterLink';
import { ArrowLeft, Clock, TrendingUp, CheckCircle2, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function InvestingLesson8Page() {
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
            <img src={lumiLogo} alt="lumi" className="h-6 md:h-8 md:-ml-7" style={{ mixBlendMode: 'multiply' }} />
            <nav className="flex gap-4 md:gap-8">
              <Link to="/" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                home
              </Link>
              <Link to="/learn" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                learn
              </Link>
              <Link to="/resources" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                resources
              </Link>
              <Link to="/blog" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                blog
              </Link>
            </nav>
          </div>
        </header>
      </div>

      {/* Back Navigation */}
      <div className="px-6 py-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/investing-101" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Investing 101
          </Link>
        </div>
      </div>

      {/* Lesson Header */}
      <section className="px-6 pb-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 flex items-center gap-4 text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>12–15 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              <span>Beginner</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
            How People Start Investing
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Investing 101 • Lesson 8
          </p>
        </div>
      </section>

      {/* Main Content - Journey Format */}
      <section className="px-6 py-16 md:px-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Step 1 - Right Aligned */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 mb-20 items-center">
            <div className="flex justify-center md:justify-end">
              <div className="w-40 h-40 rounded-full bg-[#889063] flex items-center justify-center">
                <span className="text-7xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>1</strong></span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-10 shadow-sm border-l-8 border-[#889063]">
              <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                You do not invest directly through the stock market
              </h2>
              <p className="text-[#1C1C1C] mb-6 leading-relaxed text-lg" style={{ letterSpacing: '-0.89px' }}>
                To invest, you need an account that connects you to the market. This account is called a <strong>brokerage account</strong>.
              </p>
              <p className="text-[#1C1C1C] mb-6 leading-relaxed text-lg" style={{ letterSpacing: '-0.89px' }}>
                A brokerage acts like a middle layer between you and the investments you want to buy.
              </p>
              <div className="bg-[#FFCFD0]/30 rounded-lg p-8 mt-6">
                <p className="text-[#1C1C1C] mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>It allows you to:</strong></p>
                <ul className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-[#889063] mt-1">•</span>
                    <span>Buy and sell stocks and ETFs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#889063] mt-1">•</span>
                    <span>Hold investments securely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#889063] mt-1">•</span>
                    <span>Track performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#889063] mt-1">•</span>
                    <span>Manage your portfolio</span>
                  </li>
                </ul>
              </div>
              <p className="text-[#1C1C1C] mt-6 text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Without a brokerage, you cannot access the market.</strong>
              </p>
            </div>
          </div>

          {/* Step 2 - Left Aligned */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 mb-20 items-center">
            <div className="bg-white rounded-lg p-10 shadow-sm border-r-8 border-[#354024]">
              <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                What a brokerage account is
              </h2>
              <p className="text-[#1C1C1C] mb-6 leading-relaxed text-lg" style={{ letterSpacing: '-0.89px' }}>
                A brokerage account is a financial account used specifically for investing.
              </p>
              <p className="text-[#1C1C1C] mb-6 leading-relaxed text-lg" style={{ letterSpacing: '-0.89px' }}>
                You deposit money into the account and use that money to purchase investments.
              </p>
              <div className="bg-[#E5D7C4] rounded-lg p-8 mt-6">
                <p className="text-[#1C1C1C] mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>It works differently from a bank because:</strong></p>
                <ul className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-[#354024] mt-1">→</span>
                    <span>There is no guaranteed return</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#354024] mt-1">→</span>
                    <span>Your balance fluctuates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#354024] mt-1">→</span>
                    <span>Growth depends on market performance</span>
                  </li>
                </ul>
              </div>
              <p className="text-[#1C1C1C] italic mt-6 text-lg" style={{ letterSpacing: '-0.89px' }}>
                Think of it as your investing home base.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="w-40 h-40 rounded-full bg-[#354024] flex items-center justify-center">
                <span className="text-7xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>2</strong></span>
              </div>
            </div>
          </div>

          {/* Step 3 - Right Aligned */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 mb-20 items-center">
            <div className="flex justify-center md:justify-end">
              <div className="w-40 h-40 rounded-full bg-[#CFBB99] flex items-center justify-center">
                <span className="text-7xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>3</strong></span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-10 shadow-sm border-l-8 border-[#CFBB99]">
              <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                Types of brokerage accounts
              </h2>
              
              <div className="space-y-6">
                <div className="bg-[#889063]/10 rounded-lg p-8">
                  <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                    Individual brokerage account
                  </h3>
                  <p className="text-[#1C1C1C] mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>
                    This is the most basic and flexible type.
                  </p>
                  <div className="space-y-3">
                    <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>You can:</strong></p>
                    <ul className="space-y-2 text-[#1C1C1C] ml-6 text-lg" style={{ letterSpacing: '-0.89px' }}>
                      <li>• Invest whenever you want</li>
                      <li>• Withdraw money anytime</li>
                      <li>• Choose any investments</li>
                    </ul>
                  </div>
                  <p className="text-[#1C1C1C] mt-4 text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <strong>It is used for general investing.</strong>
                  </p>
                </div>

                <div className="bg-[#354024]/10 rounded-lg p-8">
                  <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                    Retirement accounts (basic intro)
                  </h3>
                  <p className="text-[#1C1C1C] mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>
                    Some brokerage accounts are designed for long term retirement investing.
                  </p>
                  <div className="flex gap-4 mb-6">
                    <div className="bg-white px-6 py-3 rounded text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>IRA</div>
                    <div className="bg-white px-6 py-3 rounded text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>401(k)</div>
                  </div>
                  <p className="text-[#1C1C1C] mb-3 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>These accounts:</strong></p>
                  <ul className="space-y-2 text-[#1C1C1C] ml-6 text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li>• Offer tax benefits</li>
                    <li>• Encourage long term growth</li>
                    <li>• Restrict withdrawals early</li>
                  </ul>
                  <p className="text-[#1C1C1C] mt-4 text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <strong>They are used to build wealth for later life.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 - Left Aligned */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 mb-20 items-center">
            <div className="bg-white rounded-lg p-10 shadow-sm border-r-8 border-[#889063]">
              <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                How you actually buy investments
              </h2>
              <p className="text-[#1C1C1C] mb-8 leading-relaxed text-xl" style={{ letterSpacing: '-0.89px' }}>
                Once your brokerage account has money:
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#889063] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>1</strong>
                  </div>
                  <p className="text-[#1C1C1C] pt-2 text-lg" style={{ letterSpacing: '-0.89px' }}>Choose an investment (stock, ETF, etc.)</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#889063] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>2</strong>
                  </div>
                  <p className="text-[#1C1C1C] pt-2 text-lg" style={{ letterSpacing: '-0.89px' }}>Place a buy order</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#889063] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>3</strong>
                  </div>
                  <p className="text-[#1C1C1C] pt-2 text-lg" style={{ letterSpacing: '-0.89px' }}>The brokerage purchases it for you</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#889063] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>4</strong>
                  </div>
                  <p className="text-[#1C1C1C] pt-2 text-lg" style={{ letterSpacing: '-0.89px' }}>You now own the asset</p>
                </div>
              </div>
              <p className="text-[#1C1C1C] mt-8 italic text-lg" style={{ letterSpacing: '-0.89px' }}>
                Ownership is digital and tracked in your account.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="w-40 h-40 rounded-full bg-[#889063] flex items-center justify-center">
                <span className="text-7xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>4</strong></span>
              </div>
            </div>
          </div>

          {/* Step 5 - Right Aligned */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 mb-20 items-center">
            <div className="flex justify-center md:justify-end">
              <div className="w-40 h-40 rounded-full bg-[#FFCFD0] flex items-center justify-center">
                <span className="text-7xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>5</strong></span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-10 shadow-sm border-l-8 border-[#FFCFD0]">
              <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                You do not need a lot to start
              </h2>
              <p className="text-[#1C1C1C] mb-6 leading-relaxed text-lg" style={{ letterSpacing: '-0.89px' }}>
                One of the biggest myths about investing is that you need thousands of dollars.
              </p>
              <div className="bg-[#FFCFD0]/30 rounded-lg p-8">
                <p className="text-[#1C1C1C] mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Many brokerages allow:</strong></p>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Fractional shares</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>No minimum deposits</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Small investments</span>
                  </div>
                </div>
              </div>
              <p className="text-[#1C1C1C] mt-6 leading-relaxed text-lg" style={{ letterSpacing: '-0.89px' }}>
                This makes investing accessible even with limited starting money.
              </p>
              <p className="text-[#1C1C1C] mt-4 text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Starting small is normal.</strong>
              </p>
            </div>
          </div>

          {/* Step 6 - Left Aligned */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 mb-20 items-center">
            <div className="bg-white rounded-lg p-10 shadow-sm border-r-8 border-[#CFBB99]">
              <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                Automatic investing
              </h2>
              <p className="text-[#1C1C1C] mb-6 leading-relaxed text-lg" style={{ letterSpacing: '-0.89px' }}>
                Some brokerages allow automatic contributions.
              </p>
              <div className="bg-[#E5D7C4] rounded-lg p-8">
                <p className="text-[#1C1C1C] mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>This means:</strong></p>
                <ul className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-6 h-6 text-[#889063] mt-0.5 flex-shrink-0" />
                    <span>Money moves into investments regularly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-6 h-6 text-[#889063] mt-0.5 flex-shrink-0" />
                    <span>You stay consistent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-6 h-6 text-[#889063] mt-0.5 flex-shrink-0" />
                    <span>You benefit from compounding</span>
                  </li>
                </ul>
              </div>
              <p className="text-[#1C1C1C] mt-6 leading-relaxed text-lg" style={{ letterSpacing: '-0.89px' }}>
                Automation reduces emotional decision making and helps beginners stay disciplined.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="w-40 h-40 rounded-full bg-[#CFBB99] flex items-center justify-center">
                <span className="text-7xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>6</strong></span>
              </div>
            </div>
          </div>

          {/* Step 7 - Right Aligned */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 mb-20 items-center">
            <div className="flex justify-center md:justify-end">
              <div className="w-40 h-40 rounded-full bg-[#889063] flex items-center justify-center">
                <span className="text-7xl text-white" style={{ letterSpacing: '-0.89px' }}><strong>7</strong></span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-10 shadow-sm border-l-8 border-[#889063]">
              <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                What beginners usually invest in first
              </h2>
              <div className="flex gap-4 mb-8">
                <div className="bg-[#889063] text-white px-8 py-4 rounded-lg text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>ETFs</strong>
                </div>
                <div className="bg-[#889063] text-white px-8 py-4 rounded-lg text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Index funds</strong>
                </div>
              </div>
              <div className="bg-[#CFBB99]/30 rounded-lg p-8">
                <p className="text-[#1C1C1C] mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>These are safer starting points because they:</strong>
                </p>
                <ul className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-[#889063] mt-1">✓</span>
                    <span>Spread risk across many companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#889063] mt-1">✓</span>
                    <span>Require less research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#889063] mt-1">✓</span>
                    <span>Provide broad market exposure</span>
                  </li>
                </ul>
              </div>
              <p className="text-[#1C1C1C] mt-6 leading-relaxed text-lg" style={{ letterSpacing: '-0.89px' }}>
                This lowers the risk of losing money from one company failing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Key Vocabulary */}
      <section className="px-6 py-12 md:px-12 bg-[#354024]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-white mb-10 text-center" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-8">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <span className="text-xl"><strong>Brokerage account:</strong></span> Investment account for buying assets
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <span className="text-xl"><strong>Portfolio:</strong></span> Collection of investments
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <span className="text-xl"><strong>Fractional shares:</strong></span> Buying part of a stock
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <span className="text-xl"><strong>IRA:</strong></span> Retirement investment account
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <span className="text-xl"><strong>401(k):</strong></span> Employer retirement account
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <span className="text-xl"><strong>Index fund:</strong></span> Fund tracking a market index
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <span className="text-xl"><strong>ETF:</strong></span> Diversified fund traded like a stock
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Recap */}
      <section className="px-6 py-12 md:px-12 bg-[#CFBB99]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#1C1C1C] mb-10" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-6 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>You need a brokerage to invest</p>
            </div>
            <div className="flex items-start gap-3 bg-white p-6 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Brokerage accounts hold investments</p>
            </div>
            <div className="flex items-start gap-3 bg-white p-6 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Retirement accounts offer tax advantages</p>
            </div>
            <div className="flex items-start gap-3 bg-white p-6 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Buying investments is done through orders</p>
            </div>
            <div className="flex items-start gap-3 bg-white p-6 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>You can start small with fractional shares</p>
            </div>
            <div className="flex items-start gap-3 bg-white p-6 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Automation helps beginners stay consistent</p>
            </div>
            <div className="flex items-start gap-3 bg-white p-6 rounded-lg md:col-span-2">
              <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>ETFs and index funds are common starting points</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Check Quiz */}
      <section className="px-6 py-16 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Quick Check</h2>
            <p className="text-xl text-[#1C1C1C] opacity-80">
              Test your understanding of the key concepts
            </p>
          </div>

          <div className="space-y-12">
            {/* Question 1 */}
            <div className="bg-white rounded-lg p-10 shadow-sm border border-[#354024]/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#889063] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>1</strong>
                </div>
                <p className="text-2xl text-[#1C1C1C] pt-1" style={{ letterSpacing: '-0.89px' }}>
                  <strong>What is the purpose of a brokerage account?</strong>
                </p>
              </div>
              <div className="space-y-4 ml-16">
                {[
                  { label: 'A', text: 'Store cash', correct: false },
                  { label: 'B', text: 'Buy and hold investments', correct: true },
                  { label: 'C', text: 'Pay bills', correct: false },
                  { label: 'D', text: 'Earn fixed interest', correct: false }
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerClick(1, option.label, option.correct)}
                    disabled={selectedAnswers[1] === option.label}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all text-lg ${
                      selectedAnswers[1] === option.label
                        ? 'border-[#889063] bg-[#889063]/10'
                        : incorrectAnswers[`1-${option.label}`]
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40 bg-white'
                    }`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    <span className="font-semibold text-[#1C1C1C]">{option.label})</span>{' '}
                    <span className="text-[#1C1C1C]">{option.text}</span>
                    {selectedAnswers[1] === option.label && (
                      <CheckCircle2 className="inline-block ml-2 w-6 h-6 text-[#889063]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-lg p-10 shadow-sm border border-[#354024]/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#889063] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>2</strong>
                </div>
                <p className="text-2xl text-[#1C1C1C] pt-1" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Why are ETFs popular for beginners?</strong>
                </p>
              </div>
              <div className="space-y-4 ml-16">
                {[
                  { label: 'A', text: 'No risk', correct: false },
                  { label: 'B', text: 'Guaranteed profit', correct: false },
                  { label: 'C', text: 'Diversification across many companies', correct: true },
                  { label: 'D', text: 'Faster trading', correct: false }
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerClick(2, option.label, option.correct)}
                    disabled={selectedAnswers[2] === option.label}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all text-lg ${
                      selectedAnswers[2] === option.label
                        ? 'border-[#889063] bg-[#889063]/10'
                        : incorrectAnswers[`2-${option.label}`]
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40 bg-white'
                    }`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    <span className="font-semibold text-[#1C1C1C]">{option.label})</span>{' '}
                    <span className="text-[#1C1C1C]">{option.text}</span>
                    {selectedAnswers[2] === option.label && (
                      <CheckCircle2 className="inline-block ml-2 w-6 h-6 text-[#889063]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white rounded-lg p-10 shadow-sm border border-[#354024]/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#889063] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>3</strong>
                </div>
                <p className="text-2xl text-[#1C1C1C] pt-1" style={{ letterSpacing: '-0.89px' }}>
                  <strong>What are fractional shares?</strong>
                </p>
              </div>
              <div className="space-y-4 ml-16">
                {[
                  { label: 'A', text: 'Selling investments', correct: false },
                  { label: 'B', text: 'Buying part of a stock', correct: true },
                  { label: 'C', text: 'Borrowing money', correct: false },
                  { label: 'D', text: 'Interest payments', correct: false }
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerClick(3, option.label, option.correct)}
                    disabled={selectedAnswers[3] === option.label}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all text-lg ${
                      selectedAnswers[3] === option.label
                        ? 'border-[#889063] bg-[#889063]/10'
                        : incorrectAnswers[`3-${option.label}`]
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40 bg-white'
                    }`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    <span className="font-semibold text-[#1C1C1C]">{option.label})</span>{' '}
                    <span className="text-[#1C1C1C]">{option.text}</span>
                    {selectedAnswers[3] === option.label && (
                      <CheckCircle2 className="inline-block ml-2 w-6 h-6 text-[#889063]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Step & Navigation */}
      <section className="px-6 py-12 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#889063] text-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl mb-4" style={{ letterSpacing: '-0.1px' }}>Action step</h2>
            <p className="text-lg mb-4">
              Research at least two brokerage platforms and compare their features.
            </p>
            <p className="text-lg mb-4">
              Look at account types, minimum deposits, fees, and available investments.
            </p>
            <p className="text-lg">
              This gives you a practical view of what is available when you are ready to start.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/investing-101/lesson-7"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/investing-101/lesson-9"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Common Beginner Mistakes →
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