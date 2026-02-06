import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, Gamepad2 } from 'lucide-react';
import { useState } from 'react';
import InvestmentMatchGame from './InvestmentMatchGame';
import Footer from './Footer';
import lumiLogo from "../assets/lumilogo.png";

export default function InvestingLesson3Page() {
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

      {/* Back Button */}
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
            Types of Investments
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Investing 101 • Lesson 3
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Intro - Centered callout */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Not all investments work the same way
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-10" style={{ letterSpacing: '-0.89px' }}>
              When people say "investing," they are actually talking about many different types of assets.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="bg-[#FFCFD0] p-6 rounded-lg">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Different risk levels</p>
              </div>
              <div className="bg-[#889063] text-white p-6 rounded-lg">
                <p className="text-white text-lg" style={{ letterSpacing: '-0.89px' }}>Different earning methods</p>
              </div>
              <div className="bg-[#FFCFD0] p-6 rounded-lg">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Different purposes</p>
              </div>
            </div>
            <div className="bg-[#889063] text-white p-8 rounded-xl">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Understanding these categories helps you choose wisely instead of guessing.
              </p>
            </div>
          </div>

          {/* Numbered divider */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#354024] text-white flex items-center justify-center text-2xl flex-shrink-0">1</div>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#354024] to-transparent"></div>
          </div>

          {/* 1. Stocks */}
          <div className="grid md:grid-cols-[350px_1fr] gap-8">
            <div className="bg-[#354024] text-white rounded-xl p-8">
              <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                Stocks (Equities)
              </h2>
              <p className="text-white/90 text-lg" style={{ letterSpacing: '-0.89px' }}>
                Stocks represent ownership in a company.
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                When you buy a stock, you own a share of that company's value. If the company grows and becomes more profitable, the stock price usually increases.
              </p>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>How stocks make money:</strong></p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#FFCFD0] p-6 rounded-lg">
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Price appreciation (value increases)</p>
                  </div>
                  <div className="bg-[#CFBB99] p-6 rounded-lg">
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Dividends (company profits paid to shareholders)</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#E5D7C4] rounded-lg p-8">
                <p className="text-[#1C1C1C] text-lg mb-6" style={{ letterSpacing: '-0.89px' }}>
                  Stocks are considered higher risk because prices move based on performance, news, and investor expectations.
                </p>
                <div className="bg-white p-6 rounded">
                  <p className="text-[#1C1C1C] text-lg mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Key terms:</strong></p>
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Shareholder • Equity • Dividend yield</p>
                </div>
              </div>
              <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Stocks historically provide the highest long term returns compared to other investments.</p>
              </div>
            </div>
          </div>

          {/* Numbered divider */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#FFCFD0] text-[#354024] flex items-center justify-center text-2xl flex-shrink-0">2</div>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#FFCFD0] to-transparent"></div>
          </div>

          {/* 2. Bonds */}
          <div className="grid md:grid-cols-[1fr_350px] gap-8">
            <div className="space-y-8">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                Bonds are loans you give to companies or governments.
              </p>
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                Instead of owning something, you are lending money in exchange for interest payments.
              </p>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>How bonds make money:</strong></p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-[#FFCFD0] p-6 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-[#354024] flex-shrink-0" />
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Fixed interest (called a coupon)</p>
                  </div>
                  <div className="flex items-center gap-3 bg-[#CFBB99] p-6 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Return of principal at maturity</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#E5D7C4] rounded-lg p-8">
                <p className="text-[#1C1C1C] text-lg mb-6" style={{ letterSpacing: '-0.89px' }}>
                  Bonds are lower risk because payments are predictable, but returns are smaller.
                </p>
                <div className="bg-white p-6 rounded">
                  <p className="text-[#1C1C1C] text-lg mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Key terms:</strong></p>
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Maturity date • Coupon rate • Principal</p>
                </div>
              </div>
            </div>
            <div className="bg-[#CFBB99] text-[#1C1C1C] rounded-xl p-8 flex items-center justify-center">
              <div>
                <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                  Bonds (Fixed Income)
                </h2>
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  Used for stability and income.
                </p>
              </div>
            </div>
          </div>

          {/* Numbered divider */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#889063] text-white flex items-center justify-center text-2xl flex-shrink-0">3</div>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#889063] to-transparent"></div>
          </div>

          {/* 3. Mutual Funds */}
          <div className="bg-gradient-to-br from-white to-[#E5D7C4] rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              3. Mutual Funds
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-lg" style={{ letterSpacing: '-0.89px' }}>
              A mutual fund pools money from many investors and invests it across a large group of stocks or bonds.
            </p>
            <p className="text-[#1C1C1C] mb-10 text-lg" style={{ letterSpacing: '-0.89px' }}>
              Instead of picking one company, you invest in many at once.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8">
                  <p className="text-[#1C1C1C] mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Benefits:</strong></p>
                  <ul className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li>✓ Diversification</li>
                    <li>✓ Professionally managed</li>
                    <li>✓ Lower individual risk</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-8">
                  <p className="text-[#1C1C1C] mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Downsides:</strong></p>
                  <ul className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li>✗ Management fees</li>
                    <li>✗ Less control</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Key terms:</strong> Portfolio • Fund manager • Expense ratio</p>
            </div>
          </div>

          {/* Numbered divider */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#FFCFD0] text-[#354024] flex items-center justify-center text-2xl flex-shrink-0">4</div>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#FFCFD0] to-transparent"></div>
          </div>

          {/* 4. ETFs */}
          <div className="bg-[#889063] text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              4. ETFs (Exchange Traded Funds)
            </h2>
            <div className="grid md:grid-cols-[1fr_350px] gap-10">
              <div className="space-y-6">
                <p className="text-white/90 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  ETFs are similar to mutual funds but trade like stocks.
                </p>
                <p className="text-white/90 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  They track an index or sector and allow you to invest in many companies at once.
                </p>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-8">
                  <p className="mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Benefits:</strong></p>
                  <ul className="space-y-3 text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li>• Diversification</li>
                    <li>• Lower fees than mutual funds</li>
                    <li>• Easy to buy and sell</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
                  <p className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Key terms:</strong> Index • S&P 500 • Sector ETF</p>
                </div>
              </div>
              <div className="bg-[#FFCFD0] rounded-lg p-8 flex items-center justify-center">
                <p className="text-xl text-[#354024] text-center" style={{ letterSpacing: '-0.89px' }}>
                  One of the most beginner friendly investing tools.
                </p>
              </div>
            </div>
          </div>

          {/* Numbered divider */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#CFBB99] text-[#354024] flex items-center justify-center text-2xl flex-shrink-0">5</div>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#CFBB99] to-transparent"></div>
          </div>

          {/* 5. Index Funds */}
          <div className="bg-white rounded-xl p-10 shadow-lg border-l-8 border-[#FFCFD0]">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              5. Index Funds
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-lg" style={{ letterSpacing: '-0.89px' }}>
              Index funds are mutual funds or ETFs that automatically follow a market index instead of being actively managed.
            </p>
            <p className="text-[#1C1C1C] mb-8 text-lg" style={{ letterSpacing: '-0.89px' }}>
              They aim to match market performance rather than beat it.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-[#FFCFD0] p-6 rounded text-center">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Very low fees</p>
              </div>
              <div className="bg-[#CFBB99] p-6 rounded text-center">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Broad diversification</p>
              </div>
              <div className="bg-[#FFCFD0] p-6 rounded text-center">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Long term reliability</p>
              </div>
            </div>
            <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Index investing is considered one of the safest long term strategies.
              </p>
            </div>
          </div>

          {/* Numbered divider */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#354024] text-white flex items-center justify-center text-2xl flex-shrink-0">6</div>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#354024] to-transparent"></div>
          </div>

          {/* 6. Cash and Cash Equivalents */}
          <div className="bg-[#E5D7C4] rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              6. Cash and Cash Equivalents
            </h2>
            <div className="grid md:grid-cols-[1fr_350px] gap-8">
              <div className="space-y-6">
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Includes:</strong></p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-[#1C1C1C] text-lg text-center" style={{ letterSpacing: '-0.89px' }}>Savings accounts</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-[#1C1C1C] text-lg text-center" style={{ letterSpacing: '-0.89px' }}>Money market accounts</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-[#1C1C1C] text-lg text-center" style={{ letterSpacing: '-0.89px' }}>Certificates of deposit</p>
                  </div>
                </div>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Very low risk, very low return.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 flex items-center justify-center">
                <p className="text-[#1C1C1C] text-center text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Purpose:</strong> Short term security, not long term growth.
                </p>
              </div>
            </div>
          </div>

          {/* Numbered divider */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#FFCFD0] text-[#354024] flex items-center justify-center text-2xl flex-shrink-0">7</div>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#FFCFD0] to-transparent"></div>
          </div>

          {/* 7. Real Assets */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              7. Real Assets (Brief Intro)
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#889063] to-[#889063]/50 text-white p-8 rounded-lg">
                <p className="text-xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Real estate</strong></p>
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Physical property investments</p>
              </div>
              <div className="bg-gradient-to-br from-[#CFBB99] to-[#CFBB99]/50 p-8 rounded-lg">
                <p className="text-[#1C1C1C] text-xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Commodities</strong></p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Gold, oil, etc.</p>
              </div>
            </div>
            <div className="mt-8 bg-[#E5D7C4] p-8 rounded-lg">
              <p className="text-[#1C1C1C] text-lg mb-4" style={{ letterSpacing: '-0.89px' }}>
                These are physical investments and often used to diversify portfolios.
              </p>
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <strong>Higher barrier to entry, more complexity.</strong>
              </p>
            </div>
          </div>

          {/* Diversification section - Full width */}
          <div className="bg-gradient-to-br from-[#354024] to-[#354024]/80 text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Why diversification across types matters
            </h2>
            <p className="text-white/90 mb-10 text-center max-w-3xl mx-auto text-xl" style={{ letterSpacing: '-0.89px' }}>
              Diversification means spreading money across different investment categories to reduce overall risk.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-8 text-center">
                <CheckCircle2 className="w-10 h-10 mx-auto mb-4" />
                <p className="text-xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Stocks</strong></p>
                <p className="text-lg text-white/80" style={{ letterSpacing: '-0.89px' }}>Grow faster but fluctuate</p>
              </div>
              <div className="bg-[#FFCFD0]/20 backdrop-blur border border-white/20 rounded-lg p-8 text-center">
                <CheckCircle2 className="w-10 h-10 mx-auto mb-4" />
                <p className="text-xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Bonds</strong></p>
                <p className="text-lg text-white/80" style={{ letterSpacing: '-0.89px' }}>Provide stability</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-8 text-center">
                <CheckCircle2 className="w-10 h-10 mx-auto mb-4" />
                <p className="text-xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Funds</strong></p>
                <p className="text-lg text-white/80" style={{ letterSpacing: '-0.89px' }}>Spread risk</p>
              </div>
            </div>
            <div className="mt-10 bg-white/20 backdrop-blur p-8 rounded-lg text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                This balance protects investors from major losses.
              </p>
            </div>
          </div>

          {/* Risk comparison - Visual scale */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Risk comparison (from highest to lowest)
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-full bg-[#354024] h-14 rounded-lg flex items-center justify-center">
                  <p className="text-white text-lg" style={{ letterSpacing: '-0.89px' }}>Individual Stocks</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-5/6 bg-[#889063] h-14 rounded-lg flex items-center justify-center">
                  <p className="text-white text-lg" style={{ letterSpacing: '-0.89px' }}>Sector ETFs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4/6 bg-[#CFBB99] h-14 rounded-lg flex items-center justify-center">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Broad ETFs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3/6 bg-[#E5D7C4] h-14 rounded-lg flex items-center justify-center border-2 border-[#354024]/20">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Mutual Funds</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2/6 bg-[#FFCFD0] h-14 rounded-lg flex items-center justify-center">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Bonds</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1/6 bg-[#889063]/30 h-14 rounded-lg flex items-center justify-center border-2 border-[#889063]">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Cash</p>
                </div>
              </div>
            </div>
            <p className="text-[#1C1C1C] text-center text-lg" style={{ letterSpacing: '-0.89px' }}>
              Higher risk usually means higher long term potential return.
            </p>
          </div>

          {/* Resource Callout */}
          <div className="bg-gradient-to-br from-[#FFCFD0] to-[#FFCFD0]/80 rounded-xl p-8 border-2 border-[#354024]/10 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#354024] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl text-white">💡</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>
                  Check out our resource
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-80 mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Want to explore stocks, bonds, ETFs, and other investment types in detail? Our Investment Type Explorer breaks down 17 different investment options with risk levels, how you make money, and what each is best for.
                </p>
                <Link 
                  to="/investment-type-explorer"
                  className="inline-block bg-[#354024] text-white px-6 py-3 rounded-lg text-lg hover:opacity-90 transition-opacity"
                  style={{ letterSpacing: '-0.89px' }}
                >
                  Explore Investment Types →
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Resource - Investment Match Game */}
          <div id="investment-game" className="bg-[#FFCFD0]/30 rounded-xl p-10">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Gamepad2 className="w-12 h-12 text-[#889063]" />
              </div>
              <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                What Would You Invest In?
              </h3>
              <p className="text-xl text-[#1C1C1C] opacity-80" style={{ letterSpacing: '-0.89px' }}>
                Test your knowledge with real-world investment scenarios
              </p>
            </div>
            <div className="flex justify-center">
              <InvestmentMatchGame />
            </div>
          </div>

          {/* Vocabulary - Grid cards */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Key vocabulary
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#FFCFD0]/30 p-8 rounded-lg">
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Equity</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Ownership investment</p>
              </div>
              <div className="bg-[#CFBB99]/30 p-8 rounded-lg">
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Fixed income</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Investments that pay interest</p>
              </div>
              <div className="bg-[#FFCFD0]/30 p-8 rounded-lg">
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Diversification</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Spreading risk</p>
              </div>
              <div className="bg-[#CFBB99]/30 p-8 rounded-lg">
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Portfolio</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Collection of investments</p>
              </div>
              <div className="bg-[#FFCFD0]/30 p-8 rounded-lg">
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Index</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Market benchmark</p>
              </div>
              <div className="bg-[#CFBB99]/30 p-8 rounded-lg">
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Expense ratio</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Fund fee</p>
              </div>
              <div className="bg-[#FFCFD0]/30 p-8 rounded-lg md:col-span-2">
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Volatility</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Price movement</p>
              </div>
            </div>
          </div>

          {/* Recap - Horizontal scroll style */}
          <div className="bg-[#889063] text-white rounded-xl p-10">
            <h2 className="text-3xl mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="flex flex-wrap gap-6">
              <div className="flex-1 min-w-[280px] bg-white/10 backdrop-blur border border-white/20 p-8 rounded-lg">
                <CheckCircle2 className="w-8 h-8 mb-4" />
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Stocks = ownership and high growth potential</p>
              </div>
              <div className="flex-1 min-w-[280px] bg-white/10 backdrop-blur border border-white/20 p-8 rounded-lg">
                <CheckCircle2 className="w-8 h-8 mb-4" />
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Bonds = loans and stable income</p>
              </div>
              <div className="flex-1 min-w-[280px] bg-white/10 backdrop-blur border border-white/20 p-8 rounded-lg">
                <CheckCircle2 className="w-8 h-8 mb-4" />
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Mutual funds and ETFs = diversified collections</p>
              </div>
              <div className="flex-1 min-w-[280px] bg-white/10 backdrop-blur border border-white/20 p-8 rounded-lg">
                <CheckCircle2 className="w-8 h-8 mb-4" />
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Index funds = low cost market tracking</p>
              </div>
              <div className="flex-1 min-w-[280px] bg-white/10 backdrop-blur border border-white/20 p-8 rounded-lg">
                <CheckCircle2 className="w-8 h-8 mb-4" />
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Diversification reduces risk</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Check Quiz */}
      <section className="px-6 py-12 md:px-12 bg-[#CFBB99]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#1C1C1C] mb-10" style={{ letterSpacing: '-0.89px' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="bg-white rounded-lg p-10 shadow-sm mb-6">
            <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              1. What does owning a stock represent?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Lending money to a company', correct: false },
                { label: 'B', text: 'Ownership in a company', correct: true },
                { label: 'C', text: 'A fixed interest payment', correct: false },
                { label: 'D', text: 'A savings account', correct: false }
              ].map((option) => {
                const isSelected = selectedAnswers[1] === option.label;
                const isIncorrect = incorrectAnswers[`1-${option.label}`];
                
                return (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerClick(1, option.label, option.correct)}
                    disabled={selectedAnswers[1] !== undefined}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all text-lg ${
                      isSelected
                        ? 'border-[#889063] bg-[#889063]/10'
                        : isIncorrect
                        ? 'border-red-400 bg-red-50 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    <span className="font-semibold text-[#1C1C1C]">{option.label})</span> {option.text}
                    {isSelected && (
                      <CheckCircle2 className="inline-block ml-2 w-6 h-6 text-[#889063]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-lg p-10 shadow-sm mb-6">
            <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              2. Which investment type typically has the lowest risk?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Individual stocks', correct: false },
                { label: 'B', text: 'Bonds', correct: true },
                { label: 'C', text: 'Sector ETFs', correct: false },
                { label: 'D', text: 'Real estate', correct: false }
              ].map((option) => {
                const isSelected = selectedAnswers[2] === option.label;
                const isIncorrect = incorrectAnswers[`2-${option.label}`];
                
                return (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerClick(2, option.label, option.correct)}
                    disabled={selectedAnswers[2] !== undefined}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all text-lg ${
                      isSelected
                        ? 'border-[#889063] bg-[#889063]/10'
                        : isIncorrect
                        ? 'border-red-400 bg-red-50 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    <span className="font-semibold text-[#1C1C1C]">{option.label})</span> {option.text}
                    {isSelected && (
                      <CheckCircle2 className="inline-block ml-2 w-6 h-6 text-[#889063]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-lg p-10 shadow-sm">
            <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              3. What is the main benefit of diversification?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Guaranteed profits', correct: false },
                { label: 'B', text: 'Reducing overall risk', correct: true },
                { label: 'C', text: 'Avoiding all losses', correct: false },
                { label: 'D', text: 'Getting rich quickly', correct: false }
              ].map((option) => {
                const isSelected = selectedAnswers[3] === option.label;
                const isIncorrect = incorrectAnswers[`3-${option.label}`];
                
                return (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerClick(3, option.label, option.correct)}
                    disabled={selectedAnswers[3] !== undefined}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all text-lg ${
                      isSelected
                        ? 'border-[#889063] bg-[#889063]/10'
                        : isIncorrect
                        ? 'border-red-400 bg-red-50 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    <span className="font-semibold text-[#1C1C1C]">{option.label})</span> {option.text}
                    {isSelected && (
                      <CheckCircle2 className="inline-block ml-2 w-6 h-6 text-[#889063]" />
                    )}
                  </button>
                );
              })}
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
              Choose one investment type from this lesson that interests you most.
            </p>
            <p className="text-lg mb-4">
              Research a real-world example of that investment type.
            </p>
            <p className="text-lg">
              Understanding specific examples will help these concepts become more concrete.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/investing-101/lesson-2"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/investing-101/lesson-4"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                The Stock Market →
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