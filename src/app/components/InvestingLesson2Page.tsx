import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function InvestingLesson2Page() {
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
              <span>10 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              <span>Beginner</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
            How Investing Actually Works
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Investing 101 • Lesson 2
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Intro - Large feature box */}
          <div className="bg-gradient-to-br from-[#354024] to-[#354024]/80 text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Investing means ownership, not just depositing money
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <p className="text-white/90 text-lg" style={{ letterSpacing: '-0.89px' }}>
                When you invest, you are not storing money somewhere like a bank account.
              </p>
              <p className="text-white/90 text-lg" style={{ letterSpacing: '-0.89px' }}>
                You are using your money to buy assets that can grow in value. Those assets represent ownership or lending.
              </p>
            </div>
            <div className="mt-8 bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Your money is working in the economy instead of sitting still.
              </p>
            </div>
          </div>

          {/* Stock section - Wide card with icon area */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#889063] px-10 py-8">
              <h2 className="text-4xl text-white" style={{ letterSpacing: '-0.89px' }}>
                What happens when you buy a stock
              </h2>
            </div>
            <div className="p-10">
              <p className="text-[#1C1C1C] text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
                A stock represents partial ownership in a company.
              </p>
              <div className="bg-[#E5D7C4] rounded-lg p-8 mb-8">
                <p className="text-[#1C1C1C] text-lg mb-6" style={{ letterSpacing: '-0.89px' }}><strong>When you buy a share:</strong></p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>You own a small piece of that company</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Your value grows if the company grows</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>You may earn money through price increases</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>You may receive dividends (company profits shared)</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#CFBB99] p-8 rounded-lg">
                <p className="text-[#1C1C1C] text-center text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Stock prices move based on how investors think the company will perform in the future.
                </p>
              </div>
            </div>
          </div>

          {/* Bond section - Mirrored layout */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#CFBB99] px-10 py-8">
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                What happens when you buy a bond
              </h2>
            </div>
            <div className="p-10">
              <p className="text-[#1C1C1C] text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
                A bond is essentially a loan.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>You are lending money to a government or company</p>
                  </div>
                </div>
                <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>They pay you interest over time</p>
                  </div>
                </div>
                <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>You get your original money back later</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Bonds are generally lower risk than stocks because they provide fixed payments.
                </p>
              </div>
            </div>
          </div>

          {/* Growth section - Centered with radial layout */}
          <div className="text-center">
            <h2 className="text-4xl text-[#1C1C1C] mb-10" style={{ letterSpacing: '-0.89px' }}>
              How investments grow in value
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-10">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#FFCFD0] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#354024]" />
                </div>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Companies earn more profits</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#889063] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Businesses expand and succeed</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#FFCFD0] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#354024]" />
                </div>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Demand for shares increases</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#889063] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>The economy grows overall</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#889063] to-[#889063]/80 text-white p-10 rounded-xl max-w-3xl mx-auto">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                When demand rises, prices rise. That increase in price creates profit for investors.
              </p>
            </div>
          </div>

          {/* Capital gains - Split design */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-8">
            <div className="bg-white rounded-xl p-10 shadow-lg">
              <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                Capital gains
              </h2>
              <p className="text-[#1C1C1C] mb-8 text-lg" style={{ letterSpacing: '-0.89px' }}>
                <strong>Capital gain means:</strong> You sell an investment for more than you paid.
              </p>
              <div className="bg-[#E5D7C4] rounded-lg p-8 space-y-4">
                <h3 className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Example:</h3>
                <div className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <p>→ Buy a stock at $50</p>
                  <p>→ Sell it later at $80</p>
                  <p className="font-bold text-[#889063] text-xl">→ Your capital gain is $30</p>
                </div>
              </div>
            </div>
            <div className="bg-[#CFBB99] rounded-xl p-10 flex items-center justify-center">
              <p className="text-[#1C1C1C] text-center text-xl" style={{ letterSpacing: '-0.89px' }}>
                This is one of the main ways investors make money.
              </p>
            </div>
          </div>

          {/* Dividends - Compact box */}
          <div className="bg-gradient-to-br from-[#CFBB99] to-[#CFBB99]/70 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Dividends
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-lg">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Some companies share profits with investors.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  This payment is called a dividend.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  It is extra income you earn just for owning the stock.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-white/50 backdrop-blur p-8 rounded-lg">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                Not all companies pay dividends. Many reinvest profits to grow faster instead.
              </p>
            </div>
          </div>

          {/* Supply & Demand - Visual arrows */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Market supply and demand
            </h2>
            <p className="text-[#1C1C1C] mb-10 text-center text-xl" style={{ letterSpacing: '-0.89px' }}>
              Investment prices move constantly because of supply and demand.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8 text-center">
                <p className="text-[#1C1C1C] text-xl mb-3" style={{ letterSpacing: '-0.89px' }}>↑ Price Goes Up</p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>More buyers than sellers</p>
              </div>
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8 text-center">
                <p className="text-[#1C1C1C] text-xl mb-3" style={{ letterSpacing: '-0.89px' }}>↓ Price Goes Down</p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>More sellers than buyers</p>
              </div>
            </div>
            <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Prices reflect expectations about the future.
              </p>
            </div>
          </div>

          {/* Patience section - Timeline style */}
          <div className="bg-[#E5D7C4] rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Why investing requires patience
            </h2>
            <div className="space-y-8">
              <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>
                Markets go up and down daily.
              </p>
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                Short term changes are normal. Long term trends are what matter most.
              </p>
              <div className="bg-white rounded-lg p-8">
                <p className="text-[#1C1C1C] text-lg mb-6" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Investors who stay invested longer usually benefit more because:</strong>
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-[#CFBB99]/30 p-6 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0">1</div>
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Growth compounds</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#CFBB99]/30 p-6 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0">2</div>
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Temporary drops recover</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#CFBB99]/30 p-6 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0">3</div>
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Time reduces volatility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vocabulary - Compact table style */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Key vocabulary
            </h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-[200px_1fr] gap-6 border-b border-[#354024]/10 pb-4">
                <h3 className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Stock</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Ownership in a company</p>
              </div>
              <div className="grid md:grid-cols-[200px_1fr] gap-6 border-b border-[#354024]/10 pb-4">
                <h3 className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Bond</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Loan to a company or government</p>
              </div>
              <div className="grid md:grid-cols-[200px_1fr] gap-6 border-b border-[#354024]/10 pb-4">
                <h3 className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Dividend</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Profit paid to shareholders</p>
              </div>
              <div className="grid md:grid-cols-[200px_1fr] gap-6 border-b border-[#354024]/10 pb-4">
                <h3 className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Capital Gain</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Profit from selling an asset at a higher price</p>
              </div>
              <div className="grid md:grid-cols-[200px_1fr] gap-6 border-b border-[#354024]/10 pb-4">
                <h3 className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Market</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Where investments are bought and sold</p>
              </div>
              <div className="grid md:grid-cols-[200px_1fr] gap-6">
                <h3 className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Volatility</h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>How much prices fluctuate</p>
              </div>
            </div>
          </div>

          {/* Recap - Column layout */}
          <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10">
            <h2 className="text-3xl mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}>Investing buys ownership or lending assets</span>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}>Stocks grow through company success</span>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}>Bonds grow through interest payments</span>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}>Profit comes from price growth and dividends</span>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}>Supply and demand control price movement</span>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}>Patience is essential</span>
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
              1. What does buying a stock represent?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Depositing money', correct: false },
                { label: 'B', text: 'Lending money', correct: false },
                { label: 'C', text: 'Ownership in a company', correct: true },
                { label: 'D', text: 'Paying interest', correct: false }
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
              2. How do investors earn capital gains?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Receiving dividends', correct: false },
                { label: 'B', text: 'Selling investments at a higher price', correct: true },
                { label: 'C', text: 'Buying bonds', correct: false },
                { label: 'D', text: 'Avoiding risk', correct: false }
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
              3. Why is patience important in investing?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Markets never change', correct: false },
                { label: 'B', text: 'Growth happens over time', correct: true },
                { label: 'C', text: 'Prices only go down', correct: false },
                { label: 'D', text: 'Bonds replace stocks', correct: false }
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
              Think about the difference between stocks and bonds.
            </p>
            <p className="text-lg mb-4">
              Which type of investment appeals more to you and why?
            </p>
            <p className="text-lg">
              Understanding your comfort level with risk will help you make better investment decisions.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/investing-101/lesson-1"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/investing-101/lesson-3"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Types of Investments →
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