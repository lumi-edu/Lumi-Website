import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, XCircle, AlertTriangle, Target } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function InvestingLesson9Page() {
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
            Common Beginner Investing Mistakes
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Investing 101 • Lesson 9
          </p>
        </div>
      </section>

      {/* Main Content - Warning/Mistake Cards Layout */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Intro - Alert box */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <div className="flex items-start gap-4 mb-8">
              <AlertTriangle className="w-12 h-12 text-[#FFCFD0] flex-shrink-0" />
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Mistakes are common when starting out
              </h2>
            </div>
            <p className="text-[#1C1C1C] text-xl mb-6" style={{ letterSpacing: '-0.89px' }}>
              Investing can feel exciting, but beginners often jump in without fully understanding how markets work.
            </p>
            <div className="bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] p-8 rounded mb-6">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <strong>Most investing losses early on happen because of behavior, not intelligence.</strong>
              </p>
            </div>
            <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Recognizing these mistakes early helps protect your money and build stronger habits.</strong>
              </p>
            </div>
          </div>

          {/* Mistake 1 - Pink warning card */}
          <div className="bg-gradient-to-br from-[#FFCFD0] to-[#FFCFD0]/80 text-[#1C1C1C] rounded-xl p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white text-[#FFCFD0] border-4 border-[#FFCFD0] flex items-center justify-center text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>1</strong>
              </div>
              <h2 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                Mistake 1: Trying to get rich quickly
              </h2>
            </div>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              A lot of beginners think investing is a fast way to make large amounts of money.
            </p>
            <div className="bg-white/60 backdrop-blur border border-[#1C1C1C]/20 rounded-lg p-8 mb-8">
              <p className="text-xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>This leads to:</strong></p>
              <div className="space-y-3 text-lg" style={{ letterSpacing: '-0.89px' }}>
                <p className="flex items-center gap-2">
                  <XCircle className="w-6 h-6" /> Risky decisions
                </p>
                <p className="flex items-center gap-2">
                  <XCircle className="w-6 h-6" /> Chasing trends
                </p>
                <p className="flex items-center gap-2">
                  <XCircle className="w-6 h-6" /> Buying based on hype
                </p>
              </div>
            </div>
            <div className="bg-[#354024] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Investing is meant to build wealth slowly over time. Quick profit thinking often leads to quick losses.</strong>
              </p>
            </div>
          </div>

          {/* Mistake 2 - Light tan warning card */}
          <div className="bg-white rounded-xl p-10 shadow-lg border-l-8 border-[#CFBB99]">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#CFBB99] text-[#1C1C1C] flex items-center justify-center text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>2</strong>
              </div>
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Mistake 2: Investing without understanding
              </h2>
            </div>
            <p className="text-[#1C1C1C] text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Buying investments just because others recommend them is risky.
            </p>
            <div className="bg-[#CFBB99]/30 rounded-lg p-8 mb-8">
              <p className="text-[#1C1C1C] text-xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Beginners sometimes:</strong></p>
              <div className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#CFBB99]"></span>
                  Invest in companies they know nothing about
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#CFBB99]"></span>
                  Follow social media trends
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#CFBB99]"></span>
                  Ignore research
                </p>
              </div>
            </div>
            <div className="bg-[#354024] text-white p-8 rounded-lg">
              <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                <strong>Understanding what you own is critical. Investing blindly increases risk.</strong>
              </p>
            </div>
          </div>

          {/* Mistake 3 - Sage green emotional card */}
          <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white text-[#889063] flex items-center justify-center text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>3</strong>
              </div>
              <h2 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                Mistake 3: Emotional buying and selling
              </h2>
            </div>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Fear and excitement drive many poor investing decisions.
            </p>
            <div className="bg-white/20 backdrop-blur border border-white/30 rounded-lg p-8 mb-8">
              <p className="text-xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Common emotional reactions:</strong></p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] p-6 rounded text-center">
                  <p className="text-white text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Selling during market drops</strong></p>
                </div>
                <div className="bg-[#889063]/40 border-2 border-white p-6 rounded text-center">
                  <p className="text-white text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Buying during hype spikes</strong></p>
                </div>
                <div className="bg-[#CFBB99]/30 border-2 border-[#CFBB99] p-6 rounded text-center">
                  <p className="text-white text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Panicking from short term losses</strong></p>
                </div>
              </div>
            </div>
            <div className="bg-[#354024] text-white p-8 rounded-lg">
              <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                <strong>Markets fluctuate constantly. Emotional reactions interrupt long term growth.</strong>
              </p>
            </div>
          </div>

          {/* Mistake 4 - Pink diversification card */}
          <div className="bg-white rounded-xl p-10 shadow-lg border-l-8 border-[#FFCFD0]">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#FFCFD0] text-[#1C1C1C] flex items-center justify-center text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>4</strong>
              </div>
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Mistake 4: Lack of diversification
              </h2>
            </div>
            <p className="text-[#1C1C1C] text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Putting all money into one stock or one company increases risk.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] p-8 rounded-lg">
                <p className="text-[#1C1C1C] text-xl mb-3 flex items-center gap-2" style={{ letterSpacing: '-0.89px' }}>
                  <XCircle className="w-6 h-6 text-[#FFCFD0]" />
                  <strong>Risk: All in one stock</strong>
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  If that investment drops significantly, your entire portfolio suffers.
                </p>
              </div>
              <div className="bg-[#889063]/10 border-2 border-[#889063] p-8 rounded-lg">
                <p className="text-[#1C1C1C] text-xl mb-3 flex items-center gap-2" style={{ letterSpacing: '-0.89px' }}>
                  <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                  <strong>Smart: Diversified</strong>
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Diversification spreads risk and protects against major losses.
                </p>
              </div>
            </div>
          </div>

          {/* Mistake 5 - Dark olive timing card */}
          <div className="bg-gradient-to-br from-[#354024] to-[#354024]/90 text-white rounded-xl p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white text-[#354024] flex items-center justify-center text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>5</strong>
              </div>
              <h2 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                Mistake 5: Trying to time the market
              </h2>
            </div>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>Many beginners attempt to predict:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg text-center">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}><strong>When to buy</strong></p>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg text-center">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}><strong>When to sell</strong></p>
              </div>
              <div className="bg-white/20 backdrop-blur border border-white/30 p-6 rounded-lg text-center">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Market highs and lows</strong></p>
              </div>
            </div>
            <div className="bg-white/30 backdrop-blur p-6 rounded-lg mb-6">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Market timing is extremely difficult even for professionals.</strong>
              </p>
            </div>
            <div className="bg-white text-[#1C1C1C] p-8 rounded-lg space-y-3">
              <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                <strong>Missing the best growth days can significantly reduce returns.</strong>
              </p>
              <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                <strong>Consistent investing usually outperforms timing attempts.</strong>
              </p>
            </div>
          </div>

          {/* Mistake 6 - Tan strategy card */}
          <div className="bg-white rounded-xl p-10 shadow-lg border-l-8 border-[#889063]">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#889063] text-white flex items-center justify-center text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>6</strong>
              </div>
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Mistake 6: Ignoring long term strategy
              </h2>
            </div>
            <p className="text-[#1C1C1C] text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Jumping between investments frequently without a plan leads to instability.
            </p>
            <div className="bg-[#CFBB99]/30 rounded-lg p-8 mb-8">
              <p className="text-[#1C1C1C] text-xl mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Investing should align with:</strong></p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-2 border-[#889063] p-6 rounded-lg text-center">
                  <Target className="w-10 h-10 text-[#889063] mx-auto mb-3" />
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Goals</strong></p>
                </div>
                <div className="bg-white border-2 border-[#889063] p-6 rounded-lg text-center">
                  <Clock className="w-10 h-10 text-[#889063] mx-auto mb-3" />
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Time horizon</strong></p>
                </div>
                <div className="bg-white border-2 border-[#889063] p-6 rounded-lg text-center">
                  <BarChart3 className="w-10 h-10 text-[#889063] mx-auto mb-3" />
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Risk tolerance</strong></p>
                </div>
              </div>
            </div>
            <div className="bg-[#354024] text-white p-8 rounded-lg">
              <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                <strong>A clear strategy keeps decisions logical instead of random.</strong>
              </p>
            </div>
          </div>

          {/* Mistake 7 - Pink fear card */}
          <div className="bg-gradient-to-br from-[#FFCFD0] to-[#FFCFD0]/80 text-[#1C1C1C] rounded-xl p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white text-[#FFCFD0] border-4 border-[#FFCFD0] flex items-center justify-center text-3xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>7</strong>
              </div>
              <h2 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                Mistake 7: Letting fear stop investing entirely
              </h2>
            </div>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Some beginners avoid investing because markets seem risky.
            </p>
            <div className="bg-white/60 backdrop-blur border border-[#1C1C1C]/20 rounded-lg p-8 mb-8">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Not investing can also be risky long term because money loses value to inflation.
              </p>
            </div>
            <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Investing is about managed risk, not avoiding it completely.</strong>
              </p>
            </div>
          </div>

          {/* Vocabulary - Horizontal definition list */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Key vocabulary
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Diversification</strong></p>
                <p className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Spreading investments to reduce risk</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Market timing</strong></p>
                <p className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Attempting to predict price movements</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Emotional investing</strong></p>
                <p className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Making decisions based on feelings</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Long term strategy</strong></p>
                <p className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Consistent plan for growth</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Portfolio risk</strong></p>
                <p className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Exposure to potential loss</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Inflation risk</strong></p>
                <p className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Loss of purchasing power</p>
              </div>
            </div>
          </div>

          {/* Quick recap - Numbered list */}
          <div className="bg-[#FFCFD0]/30 rounded-xl p-10">
            <h2 className="text-3xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}><strong>1</strong></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Beginners often chase fast profits</span>
              </div>
              <div className="bg-white p-6 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}><strong>2</strong></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Investing without knowledge increases risk</span>
              </div>
              <div className="bg-white p-6 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}><strong>3</strong></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Emotional decisions hurt returns</span>
              </div>
              <div className="bg-white p-6 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}><strong>4</strong></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Diversification protects portfolios</span>
              </div>
              <div className="bg-white p-6 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}><strong>5</strong></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Timing markets rarely works</span>
              </div>
              <div className="bg-white p-6 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}><strong>6</strong></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Strategy matters more than guessing</span>
              </div>
              <div className="bg-white p-6 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl flex-shrink-0" style={{ letterSpacing: '-0.89px' }}><strong>7</strong></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Avoiding investing also has risks</span>
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
              1. What is one major beginner investing mistake?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Diversifying', correct: false },
                { label: 'B', text: 'Trying to get rich fast', correct: true },
                { label: 'C', text: 'Long term investing', correct: false },
                { label: 'D', text: 'Reinvesting dividends', correct: false }
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
              2. Why is investing in only one stock risky?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Higher returns', correct: false },
                { label: 'B', text: 'Diversification', correct: false },
                { label: 'C', text: 'Lack of risk protection', correct: true },
                { label: 'D', text: 'Guaranteed safety', correct: false }
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
              3. What usually works better than timing the market?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Guessing', correct: false },
                { label: 'B', text: 'Consistent long term investing', correct: true },
                { label: 'C', text: 'Emotional trading', correct: false },
                { label: 'D', text: 'Selling often', correct: false }
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
              Reflect on your current approach to investing.
            </p>
            <p className="text-lg mb-4">
              Identify which of these mistakes you are most at risk of making.
            </p>
            <p className="text-lg">
              Write down one specific action you will take to avoid that mistake (for example: set a rule to research before buying, commit to long term focus, or diversify next investment).
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/investing-101/lesson-8"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/investing-101/lesson-10"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Building Wealth Slowly and Safely →
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