import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, Store, TrendingUp, TrendingDown, Building2, Globe } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function InvestingLesson6Page() {
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
            What Is the Stock Market
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Investing 101 • Lesson 6
          </p>
        </div>
      </section>

      {/* Main Content - Marketplace Theme */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Intro - Marketplace visual */}
          <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-2xl p-10 shadow-xl">
            <div className="flex items-start gap-6 mb-6">
              <Store className="w-16 h-16 flex-shrink-0" />
              <div>
                <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                  The stock market is where ownership is bought and sold
                </h2>
                <p className="text-xl mb-4" style={{ letterSpacing: '-0.89px' }}>
                  The stock market is a system that allows people to buy and sell ownership in companies.
                </p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur border border-white/30 rounded-lg p-8 mb-6">
              <p className="text-lg mb-4" style={{ letterSpacing: '-0.89px' }}>
                When companies want to raise money to grow, they sell shares to the public. Investors buy those shares, which gives them partial ownership.
              </p>
              <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                This creates a marketplace where ownership is constantly traded.
              </p>
            </div>
            <div className="bg-white text-[#1C1C1C] p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Think of it as a giant store where pieces of companies are available to purchase.</strong>
              </p>
            </div>
          </div>

          {/* Why companies sell stock - Card grid */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Why companies sell stock
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>Companies sell shares to:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#889063]">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Raise money for expansion</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#CFBB99]">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Fund new projects</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#354024]">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Pay off debt</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#FFCFD0]">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Increase visibility</p>
              </div>
            </div>
            <div className="bg-[#FFCFD0]/30 rounded-xl p-8">
              <p className="text-[#1C1C1C] mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>This process is called going public.</strong>
              </p>
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                Once shares are available, investors can trade them freely.
              </p>
            </div>
          </div>

          {/* What investors are buying - Ownership boxes */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              What investors are really buying
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>When you buy stock, you are buying:</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-[#889063]/10 p-6 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>A claim on company profits</span>
              </div>
              <div className="flex items-center gap-4 bg-[#889063]/10 p-6 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Ownership in the company</span>
              </div>
              <div className="flex items-center gap-4 bg-[#889063]/10 p-6 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>The chance to benefit from growth</span>
              </div>
            </div>
            <div className="bg-[#354024] text-white p-8 rounded-lg mb-6">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                You are not lending money like a bond. You are becoming a part owner.
              </p>
            </div>
            <div className="bg-[#E5D7C4] p-8 rounded-lg">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                Your success depends on how the company performs and how investors value it.
              </p>
            </div>
          </div>

          {/* How prices determined - Central concept */}
          <div className="bg-[#FFCFD0]/30 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              How stock prices are determined
            </h2>
            <div className="bg-white rounded-lg p-10 mb-8">
              <p className="text-[#1C1C1C] text-2xl text-center mb-8" style={{ letterSpacing: '-0.89px' }}>
                <strong>Prices move based on supply and demand.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#889063]/20 border-2 border-[#889063] p-8 rounded-lg">
                  <p className="text-[#1C1C1C] mb-3 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>High Demand →</strong></p>
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>If many investors want a stock, the price rises.</p>
                </div>
                <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] p-8 rounded-lg">
                  <p className="text-[#1C1C1C] mb-3 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>High Supply →</strong></p>
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>If investors sell more than buy, the price falls.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Prices reflect expectations about future performance, not just current value.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Market psychology plays a big role.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Stock exchanges - Platform cards */}
          <div>
            <div className="flex items-start gap-4 mb-8">
              <Building2 className="w-12 h-12 text-[#889063] flex-shrink-0" />
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Stock exchanges
              </h2>
            </div>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>
              Stocks are traded on organized platforms called exchanges.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#354024] to-[#354024]/90 text-white rounded-xl p-8">
                <p className="text-lg mb-3 opacity-80" style={{ letterSpacing: '-0.89px' }}>Example:</p>
                <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>New York Stock Exchange (NYSE)</strong></p>
              </div>
              <div className="bg-gradient-to-br from-[#889063] to-[#889063]/90 text-white rounded-xl p-8">
                <p className="text-lg mb-3 opacity-80" style={{ letterSpacing: '-0.89px' }}>Example:</p>
                <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}><strong>Nasdaq</strong></p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-10 shadow-md">
              <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>These exchanges provide:</strong></p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#E5D7C4] p-6 rounded-lg text-center">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Regulation</p>
                </div>
                <div className="bg-[#E5D7C4] p-6 rounded-lg text-center">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Transparency</p>
                </div>
                <div className="bg-[#E5D7C4] p-6 rounded-lg text-center">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Fair trading systems</p>
                </div>
              </div>
              <div className="mt-6 bg-[#889063] text-white p-6 rounded-lg text-center">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>They connect buyers and sellers efficiently.</p>
              </div>
            </div>
          </div>

          {/* What causes price changes - Globe concept */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <div className="flex items-start gap-4 mb-8">
              <Globe className="w-12 h-12 text-[#889063] flex-shrink-0" />
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                What causes prices to rise or fall
              </h2>
            </div>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>Stock prices change because of:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#889063]"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Company earnings</span>
              </div>
              <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#889063]"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Economic news</span>
              </div>
              <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#889063]"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Investor confidence</span>
              </div>
              <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#889063]"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Industry changes</span>
              </div>
              <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#889063]"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Interest rates</span>
              </div>
              <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#889063]"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Global events</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FFCFD0]/30 p-6 rounded-lg">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Prices react to information and expectations.
                </p>
              </div>
              <div className="bg-[#FFCFD0]/30 p-6 rounded-lg">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  The market is constantly adjusting based on new data.
                </p>
              </div>
            </div>
          </div>

          {/* Bull vs Bear - Icon comparison */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Bull vs bear markets
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-12 h-12" />
                  <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}><strong>Bull market</strong></h3>
                </div>
                <div className="space-y-3 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <p>Prices rising</p>
                  <p>Optimism</p>
                  <p>Strong growth</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#FFCFD0] to-[#FFCFD0]/80 text-[#1C1C1C] rounded-xl p-10 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingDown className="w-12 h-12" />
                  <h3 className="text-4xl" style={{ letterSpacing: '-0.89px' }}><strong>Bear market</strong></h3>
                </div>
                <div className="space-y-3 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <p>Prices falling</p>
                  <p>Pessimism</p>
                  <p>Uncertainty</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-[#1C1C1C] mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>
                Both are normal parts of market cycles.
              </p>
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <strong>Long-term investors expect both and stay consistent.</strong>
              </p>
            </div>
          </div>

          {/* Market indexes - Tracking cards */}
          <div className="bg-[#354024] text-white rounded-xl p-10 shadow-xl">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Market indexes
            </h2>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Indexes track groups of stocks to measure overall market performance.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-8">
                <p className="text-lg mb-3 opacity-80" style={{ letterSpacing: '-0.89px' }}>Example:</p>
                <p className="text-2xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>S&P 500</strong></p>
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>(500 large companies)</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-8">
                <p className="text-lg mb-3 opacity-80" style={{ letterSpacing: '-0.89px' }}>Example:</p>
                <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}><strong>Dow Jones Industrial Average</strong></p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur p-8 rounded-lg mb-4">
              <p className="mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>
                Indexes help investors see trends and benchmark performance.
              </p>
              <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                They also serve as the basis for index funds and ETFs.
              </p>
            </div>
          </div>

          {/* Why it matters - Summary box */}
          <div className="bg-gradient-to-r from-[#889063] to-[#889063]/80 text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Why the stock market matters
            </h2>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>The stock market:</p>
            <div className="space-y-4 mb-8">
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Helps companies grow</p>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Creates wealth opportunities</p>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Reflects economic health</p>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Allows investors to participate in business success</p>
              </div>
            </div>
            <div className="bg-white text-[#1C1C1C] p-8 rounded-lg text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>It is one of the most powerful tools for long-term wealth building.</strong>
              </p>
            </div>
          </div>

          {/* Vocabulary - Compact grid */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Key vocabulary
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Stock market</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Marketplace for buying and selling company ownership</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Exchange</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Platform where stocks trade</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Share</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Unit of ownership</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Index</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Group of stocks tracking market performance</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Bull market</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Rising market</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Bear market</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Falling market</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>IPO</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Initial public offering</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Supply and demand</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Forces controlling price</p>
              </div>
            </div>
          </div>

          {/* Quick recap - Checklist style */}
          <div className="bg-[#FFCFD0]/30 rounded-xl p-10">
            <h2 className="text-3xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white p-6 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Stock market allows ownership trading</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-6 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Companies sell shares to raise money</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-6 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Investors buy ownership and growth potential</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-6 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Prices change based on supply, demand, and news</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-6 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Exchanges regulate trading</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-6 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Bull and bear markets are normal</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-6 rounded-lg md:col-span-2">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Indexes track market performance</span>
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
              1. What are you buying when you purchase stock?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'A loan', correct: false },
                { label: 'B', text: 'Ownership in a company', correct: true },
                { label: 'C', text: 'A savings account', correct: false },
                { label: 'D', text: 'Interest payments', correct: false }
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
              2. What mainly determines stock prices?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Government', correct: false },
                { label: 'B', text: 'Supply and demand', correct: true },
                { label: 'C', text: 'Banks', correct: false },
                { label: 'D', text: 'Fixed rates', correct: false }
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
              3. What does the S&P 500 represent?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'One company', correct: false },
                { label: 'B', text: '500 major companies tracking the market', correct: true },
                { label: 'C', text: 'Bonds only', correct: false },
                { label: 'D', text: 'Savings accounts', correct: false }
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
              Choose one major stock exchange (like NYSE or Nasdaq) and explore what types of companies are listed there.
            </p>
            <p className="text-lg mb-4">
              Research how many companies are on the exchange and what industries they represent.
            </p>
            <p className="text-lg">
              This will help you understand the scope and diversity of the stock market.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/investing-101/lesson-5"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/investing-101/lesson-7"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Long Term vs Short Term →
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