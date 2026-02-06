import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, Zap, Turtle, Activity, Heart } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function InvestingLesson7Page() {
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
            Long Term vs Short Term Investing
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Investing 101 • Lesson 7
          </p>
        </div>
      </section>

      {/* Main Content - Side-by-Side Comparison Layout */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Intro - Different time goals */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Investing can be done with different time goals
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6" style={{ letterSpacing: '-0.89px' }}>
              Not everyone invests for the same reason.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#E5D7C4] p-8 rounded-lg">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Some investors focus on short term gains, trying to make quick profits from price changes.
                </p>
              </div>
              <div className="bg-[#889063]/20 p-8 rounded-lg">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Others invest with a long term mindset, allowing their money to grow slowly over years.
                </p>
              </div>
            </div>
            <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Understanding this difference is critical because strategy, risk, and outcomes change depending on time horizon.</strong>
              </p>
            </div>
          </div>

          {/* Short term investing - Fast-paced card */}
          <div className="bg-gradient-to-br from-[#FFCFD0] to-[#FFCFD0]/80 text-[#1C1C1C] rounded-xl p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-8">
              <Zap className="w-12 h-12 flex-shrink-0" />
              <h2 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                What short term investing looks like
              </h2>
            </div>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>Short term investing usually involves:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/60 backdrop-blur border border-[#1C1C1C]/20 p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Buying and selling frequently</strong></p>
              </div>
              <div className="bg-white/60 backdrop-blur border border-[#1C1C1C]/20 p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Trying to profit from price swings</strong></p>
              </div>
              <div className="bg-white/60 backdrop-blur border border-[#1C1C1C]/20 p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Timing the market</strong></p>
              </div>
              <div className="bg-white/60 backdrop-blur border border-[#1C1C1C]/20 p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Reacting to news quickly</strong></p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur p-6 rounded-lg mb-6">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                This is often called <strong>trading</strong> rather than investing.
              </p>
            </div>
            <div className="bg-[#354024] text-white p-6 rounded-lg">
              <p className="text-lg mb-3" style={{ letterSpacing: '-0.89px' }}>
                <strong>Short term strategies rely heavily on predictions and market movement, which makes them very risky.</strong>
              </p>
              <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                Prices fluctuate daily, and predicting short term movement consistently is extremely difficult.
              </p>
            </div>
          </div>

          {/* Why short term is risky - Warning grid */}
          <div className="bg-white rounded-xl p-10 shadow-lg border-l-8 border-[#FFCFD0]">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Why short term investing is risky
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>Short term investing increases risk because:</p>
            <div className="space-y-4 mb-8">
              <div className="bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] p-6 rounded">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Markets are unpredictable day to day</strong></p>
              </div>
              <div className="bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] p-6 rounded">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Emotional decisions happen quickly</strong></p>
              </div>
              <div className="bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] p-6 rounded">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Losses can occur fast</strong></p>
              </div>
              <div className="bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] p-6 rounded">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Timing mistakes are common</strong></p>
              </div>
            </div>
            <div className="bg-[#354024] text-white p-8 rounded-lg mb-6">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Many people lose money trying to buy and sell at the "perfect" time.
              </p>
            </div>
            <div className="bg-[#E5D7C4] p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                Short term investing is influenced more by volatility than long term growth.
              </p>
            </div>
          </div>

          {/* Long term investing - Steady growth card */}
          <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-8">
              <Turtle className="w-12 h-12 flex-shrink-0" />
              <h2 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                What long term investing looks like
              </h2>
            </div>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>Long term investing focuses on:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Holding investments for years</strong></p>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Letting compound growth work</strong></p>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Ignoring daily price changes</strong></p>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Consistency and patience</strong></p>
              </div>
            </div>
            <div className="bg-white/30 backdrop-blur p-6 rounded-lg mb-6">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                This strategy is based on historical market growth over long periods.
              </p>
            </div>
            <div className="bg-white text-[#1C1C1C] p-8 rounded-lg">
              <p className="mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Investors benefit from:</strong></p>
              <div className="grid grid-cols-2 gap-3 text-lg" style={{ letterSpacing: '-0.89px' }}>
                <p>• Market recoveries</p>
                <p>• Business growth</p>
                <p>• Reinvested dividends</p>
                <p>• Reduced impact of volatility</p>
              </div>
            </div>
          </div>

          {/* Key philosophy - Callout box */}
          <div className="bg-[#354024] text-white rounded-xl p-10 text-center shadow-xl">
            <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
              <strong>Long term investing prioritizes time in the market, not timing the market.</strong>
            </p>
          </div>

          {/* Real-life perspective - Wave vs Tide */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Real-life perspective
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-10 h-10 text-[#FFCFD0]" />
                  <h3 className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Short term</strong></h3>
                </div>
                <p className="text-[#1C1C1C] text-xl italic text-center" style={{ letterSpacing: '-0.89px' }}>
                  Like chasing waves
                </p>
              </div>
              
              <div className="bg-[#889063]/20 border-2 border-[#889063] rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Turtle className="w-10 h-10 text-[#889063]" />
                  <h3 className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Long term</strong></h3>
                </div>
                <p className="text-[#1C1C1C] text-xl italic text-center" style={{ letterSpacing: '-0.89px' }}>
                  Like riding the tide
                </p>
              </div>
            </div>
            <div className="bg-[#CFBB99]/30 p-8 rounded-lg mb-6">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                Markets naturally rise and fall, but historically trend upward over long periods.
              </p>
            </div>
            <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
              <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                <strong>Long term investors accept short term fluctuations because they trust long term growth.</strong>
              </p>
            </div>
          </div>

          {/* Emotional vs Disciplined - Dual comparison */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Emotional investing vs disciplined investing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-xl p-10">
                <h3 className="text-3xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Short term investors</h3>
                <p className="text-[#1C1C1C] text-center text-xl" style={{ letterSpacing: '-0.89px' }}>
                  Often react emotionally to market drops
                </p>
              </div>
              
              <div className="bg-[#889063]/20 border-2 border-[#889063] rounded-xl p-10">
                <h3 className="text-3xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Long term investors</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white p-5 rounded">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Stay calm</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-5 rounded">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Hold through downturns</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-5 rounded">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                    <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Continue investing consistently</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-[#354024] text-white p-8 rounded-lg text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Discipline is one of the biggest factors in successful investing.</strong>
              </p>
            </div>
          </div>

          {/* Why long term wins - Benefits list */}
          <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10 shadow-xl">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Why long term investing usually wins
            </h2>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>Long term investing works better because:</p>
            <div className="space-y-4 mb-8">
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Compound growth multiplies returns</strong></span>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Markets recover over time</strong></span>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Less emotional decision-making</strong></span>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Lower transaction costs</strong></span>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Stability increases with time</strong></span>
              </div>
            </div>
            <div className="bg-white text-[#1C1C1C] p-8 rounded-lg text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Time reduces the impact of temporary losses.</strong>
              </p>
            </div>
          </div>

          {/* Vocabulary - Clean definition cards */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Key vocabulary
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4">
                <div className="text-xl text-[#1C1C1C] w-56 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Time horizon</div>
                <div className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Length of time investments are held</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4">
                <div className="text-xl text-[#1C1C1C] w-56 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Trading</div>
                <div className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Frequent buying and selling</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4">
                <div className="text-xl text-[#1C1C1C] w-56 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Long term investing</div>
                <div className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Holding assets for years</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4">
                <div className="text-xl text-[#1C1C1C] w-56 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Short term investing</div>
                <div className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Seeking quick gains</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4">
                <div className="text-xl text-[#1C1C1C] w-56 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Market timing</div>
                <div className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Trying to predict price movements</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4">
                <div className="text-xl text-[#1C1C1C] w-56 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Volatility</div>
                <div className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Price swings</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4">
                <div className="text-xl text-[#1C1C1C] w-56 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Discipline</div>
                <div className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Staying consistent despite fluctuations</div>
              </div>
            </div>
          </div>

          {/* Quick recap - Compact checklist */}
          <div className="bg-[#FFCFD0]/30 rounded-xl p-10">
            <h2 className="text-3xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Investing strategies depend on time</span>
              </div>
              <div className="bg-white p-6 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Short term investing is riskier and unpredictable</span>
              </div>
              <div className="bg-white p-6 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Long term investing benefits from compounding</span>
              </div>
              <div className="bg-white p-6 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Emotional reactions hurt short term investors</span>
              </div>
              <div className="bg-white p-6 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Discipline and patience support long term growth</span>
              </div>
              <div className="bg-white p-6 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Time in the market matters more than timing</span>
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
              1. What is a key feature of short term investing?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Holding for years', correct: false },
                { label: 'B', text: 'Frequent buying and selling', correct: true },
                { label: 'C', text: 'Guaranteed growth', correct: false },
                { label: 'D', text: 'Compound returns', correct: false }
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
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
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
              2. Why do long term investors stay invested during downturns?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Markets never drop', correct: false },
                { label: 'B', text: 'They expect long term recovery', correct: true },
                { label: 'C', text: 'They sell immediately', correct: false },
                { label: 'D', text: 'They avoid stocks', correct: false }
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
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
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
              3. What is more important for long term investing success?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Perfect timing', correct: false },
                { label: 'B', text: 'Daily trading', correct: false },
                { label: 'C', text: 'Time in the market', correct: true },
                { label: 'D', text: 'Predicting prices', correct: false }
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
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
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
              Think about your own financial goals. Are they short term (1–2 years) or long term (10+ years)?
            </p>
            <p className="text-lg mb-4">
              Write down what kind of investor you want to be and why your goals match that strategy.
            </p>
            <p className="text-lg">
              This helps you stay disciplined and avoid emotional reactions.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/investing-101/lesson-6"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/investing-101/lesson-8"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                How People Start Investing →
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