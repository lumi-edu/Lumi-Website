import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function InvestingLesson4Page() {
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
            The Power of Compound Growth
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Investing 101 • Lesson 4
          </p>
        </div>
      </section>

      {/* Main Content - Cascading Flow Design */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Intro - Big impact callout */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#889063] via-[#889063] to-[#889063]/80 text-white rounded-2xl p-10 shadow-xl">
            <div className="relative z-10">
              <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
                Compound growth is the reason investing works so well
              </h2>
              <p className="text-2xl mb-8 text-white/95" style={{ letterSpacing: '-0.89px' }}>
                If you take nothing else from Investing 101, take this:
              </p>
              <div className="bg-white/20 backdrop-blur border border-white/30 rounded-lg p-8">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  Compound growth is what turns small, consistent investing into real wealth over time.
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Mindset shift */}
          <div className="bg-white rounded-xl p-10 shadow-md border-l-8 border-[#FFCFD0]">
            <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>
              People think investing success comes from picking the perfect stock. In reality, the biggest driver of long-term results is time plus compounding.
            </p>
          </div>

          {/* Simple definition - Card with icon */}
          <div className="bg-[#CFBB99]/40 rounded-xl p-10">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-[#354024]" />
              </div>
              <div>
                <h2 className="text-4xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Simple definition: what is compounding
                </h2>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Compounding means you earn growth on:</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Your original money</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>The growth your money already earned</p>
              </div>
            </div>
            <p className="text-[#1C1C1C] mb-6 text-lg" style={{ letterSpacing: '-0.89px' }}>
              So instead of only earning on your starting amount, you earn on a bigger and bigger base as time passes.
            </p>
            <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>That is why it feels slow at first, then speeds up.</p>
            </div>
          </div>

          {/* Compounding types - Side by side comparison */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Compounding with interest vs compounding with investments
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white to-[#FFCFD0]/20 rounded-xl p-8 shadow-md">
                <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Compounding interest</h3>
                <p className="text-[#1C1C1C] text-lg mb-6" style={{ letterSpacing: '-0.89px' }}>
                  This is easiest to understand in a savings account or bond interest.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <div className="w-3 h-3 rounded-full bg-[#FFCFD0]"></div>
                    <span>You earn interest</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <div className="w-3 h-3 rounded-full bg-[#FFCFD0]"></div>
                    <span>Interest is added to your balance</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <div className="w-3 h-3 rounded-full bg-[#FFCFD0]"></div>
                    <span>You earn interest on the new balance</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-[#889063]/20 rounded-xl p-8 shadow-md">
                <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Compounding returns</h3>
                <p className="text-[#1C1C1C] text-lg mb-6" style={{ letterSpacing: '-0.89px' }}>
                  This is how investing usually compounds.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <div className="w-3 h-3 rounded-full bg-[#889063]"></div>
                    <span>Your investment grows in value</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <div className="w-3 h-3 rounded-full bg-[#889063]"></div>
                    <span>Future growth happens on the higher value</span>
                  </div>
                </div>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  If you reinvest dividends, compounding gets even stronger because your dividends buy more shares, and those shares also grow.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-[#354024] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>Key phrase to remember: Compounding is growth building on itself.</p>
            </div>
          </div>

          {/* Time matters - Flowing visual */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Why time matters more than the amount you start with
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-lg" style={{ letterSpacing: '-0.89px' }}>
              A lot of people wait because they think they need a lot of money to invest.
            </p>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>
              <strong>But compounding rewards time more than it rewards big starting amounts.</strong>
            </p>
            <div className="bg-[#E5D7C4] rounded-lg p-8 mb-8">
              <p className="text-[#1C1C1C] text-xl mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Two important ideas:</strong></p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-[#FFCFD0] p-6 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#354024] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Starting earlier gives your money more years to grow</span>
                </div>
                <div className="flex items-start gap-3 bg-[#CFBB99] p-6 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Money invested longer goes through more compounding cycles</span>
                </div>
              </div>
            </div>
            <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                That is why investing is often described as a long game.
              </p>
            </div>
          </div>

          {/* Snowball effect - Progressive sizing visual */}
          <div className="bg-gradient-to-b from-[#FFCFD0]/20 to-[#FFCFD0]/40 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              The "snowball" effect
            </h2>
            <p className="text-[#1C1C1C] mb-10 text-center text-xl" style={{ letterSpacing: '-0.89px' }}>
              Compounding is like a snowball rolling downhill.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#FFCFD0] flex-shrink-0"></div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>At the top, the snowball is small. Growth looks slow.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-[#FFCFD0] flex-shrink-0"></div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>As it rolls, it picks up more snow. The snowball becomes bigger, faster, and harder to stop.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-40 h-40 rounded-full bg-[#FFCFD0] flex-shrink-0"></div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>In investing, the "snow" is your returns.</strong></p>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-[#354024] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>Early on, it feels like nothing is happening. Later, growth becomes noticeable.</p>
            </div>
          </div>

          {/* Real example - Timeline flow */}
          <div className="bg-white rounded-xl p-10 shadow-md">
            <h2 className="text-3xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Real example (conceptual, not perfect math)
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-lg" style={{ letterSpacing: '-0.89px' }}>
              Imagine you invest consistently over time.
            </p>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#CFBB99]"></div>
              <div className="space-y-8 relative">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#889063] flex-shrink-0 z-10"></div>
                  <div className="flex-1 bg-[#E5D7C4] p-6 rounded-lg">
                    <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>In the first year, growth might look small.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFCFD0] flex-shrink-0 z-10"></div>
                  <div className="flex-1">
                    <p className="text-[#1C1C1C] mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>After several years:</strong></p>
                    <div className="space-y-3">
                      <div className="bg-[#E5D7C4] p-5 rounded text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <p className="text-[#1C1C1C]">You have put in more money</p>
                      </div>
                      <div className="bg-[#E5D7C4] p-5 rounded text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <p className="text-[#1C1C1C]">Your past returns have grown</p>
                      </div>
                      <div className="bg-[#E5D7C4] p-5 rounded text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <p className="text-[#1C1C1C]">Your dividends might be reinvested</p>
                      </div>
                      <div className="bg-[#E5D7C4] p-5 rounded text-lg" style={{ letterSpacing: '-0.89px' }}>
                        <p className="text-[#1C1C1C]">Your base is larger</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#889063] flex-shrink-0 z-10"></div>
                  <div className="flex-1 bg-[#889063] text-white p-6 rounded-lg">
                    <p className="text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Now growth has more to build on.</strong></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-[#CFBB99] p-8 rounded-lg">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                This is why people who stay consistent often see results later, not immediately.
              </p>
            </div>
          </div>

          {/* Three ingredients - Icon cards */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Compounding needs three ingredients
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md text-center border-t-4 border-[#FFCFD0]">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#FFCFD0] rounded-full flex items-center justify-center text-[#354024] text-3xl">1</div>
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Time</h3>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  The longer money stays invested, the stronger compounding becomes.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md text-center border-t-4 border-[#889063]">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#889063] rounded-full flex items-center justify-center text-white text-3xl">2</div>
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Rate of return</h3>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Higher returns compound faster, but usually come with higher risk.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md text-center border-t-4 border-[#FFCFD0]">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#354024] rounded-full flex items-center justify-center text-white text-3xl">3</div>
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Consistency</h3>
                <p className="text-[#1C1C1C] text-lg mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Regular investing adds fuel to the compounding engine.
                </p>
                <p className="text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Even small contributions matter because they have their own compounding timeline.
                </p>
              </div>
            </div>
          </div>

          {/* Average return - Wavy visual concept */}
          <div className="bg-gradient-to-br from-[#CFBB99]/30 to-[#CFBB99]/10 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Average return and why investing is not linear
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-lg" style={{ letterSpacing: '-0.89px' }}>
              Investing does not grow in a straight line.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
                <p className="text-[#1C1C1C] text-center text-lg" style={{ letterSpacing: '-0.89px' }}>Some years are good</p>
              </div>
              <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
                <p className="text-[#1C1C1C] text-center text-lg" style={{ letterSpacing: '-0.89px' }}>Some years are bad</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg mb-8">
              <p className="text-[#1C1C1C] text-xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                <strong>But the long-term average matters.</strong>
              </p>
              <p className="text-[#1C1C1C] text-lg mb-4" style={{ letterSpacing: '-0.89px' }}>This is why you hear phrases like:</p>
              <div className="space-y-3">
                <p className="text-[#1C1C1C] text-lg italic" style={{ letterSpacing: '-0.89px' }}>"Markets go up and down, but historically trend upward long term."</p>
                <p className="text-[#1C1C1C] text-lg italic" style={{ letterSpacing: '-0.89px' }}>"Volatility is the price you pay for growth."</p>
              </div>
            </div>
            <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                The key is that compounding works best when you do not interrupt it.
              </p>
            </div>
          </div>

          {/* Biggest killer - Warning box */}
          <div className="bg-red-50 border-4 border-red-300 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              The biggest compounding killer: pulling money out too early
            </h2>
            <p className="text-[#1C1C1C] mb-6 text-lg" style={{ letterSpacing: '-0.89px' }}>
              Compounding needs time uninterrupted.
            </p>
            <p className="text-[#1C1C1C] mb-8 text-lg" style={{ letterSpacing: '-0.89px' }}>
              When people panic and sell during a market drop, they often lock in losses and miss the recovery.
            </p>
            <div className="bg-white p-8 rounded-lg mb-6">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                This is one of the most common ways long-term returns get damaged.
              </p>
            </div>
            <div className="bg-[#354024] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Long-term investing is not about avoiding drops. It is about surviving them.
              </p>
            </div>
          </div>

          {/* Inflation - Split design */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-8">
            <div className="bg-white rounded-xl p-10 shadow-md">
              <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                Inflation and why compounding helps beat it
              </h2>
              <div className="space-y-6 mb-8">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Inflation means prices rise over time.
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  If your money sits still, its purchasing power usually declines.
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <strong>That is why investing matters.</strong>
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Investing is one of the main ways people grow money faster than inflation over decades.
                </p>
              </div>
              <div className="bg-[#E5D7C4] p-8 rounded-lg">
                <p className="text-[#1C1C1C] text-lg mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Key vocabulary:</strong></p>
                <div className="space-y-3 text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  <p><strong>Inflation:</strong> Rising prices over time</p>
                  <p><strong>Purchasing power:</strong> What your money can buy</p>
                  <p><strong>Real return:</strong> Return after inflation</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FFCFD0] rounded-xl p-8 flex items-center justify-center">
              <p className="text-[#1C1C1C] text-center text-xl" style={{ letterSpacing: '-0.89px' }}>
                Even a "safe" place for money can be risky long term if it does not keep up with inflation.
              </p>
            </div>
          </div>

          {/* Simple vs Compound - Comparison bars */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-10 text-center" style={{ letterSpacing: '-0.89px' }}>
              The difference between simple growth and compound growth
            </h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Simple growth is like:</h3>
                <div className="space-y-3">
                  <div className="h-10 bg-[#CFBB99] rounded" style={{width: '30%'}}></div>
                  <div className="h-10 bg-[#CFBB99] rounded" style={{width: '30%'}}></div>
                  <div className="h-10 bg-[#CFBB99] rounded" style={{width: '30%'}}></div>
                  <div className="h-10 bg-[#CFBB99] rounded" style={{width: '30%'}}></div>
                </div>
                <p className="text-[#1C1C1C] text-lg mt-4" style={{ letterSpacing: '-0.89px' }}>You earn a fixed amount on the same base each time.</p>
              </div>
              <div>
                <h3 className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Compound growth is like:</h3>
                <div className="space-y-3">
                  <div className="h-10 bg-[#889063] rounded" style={{width: '30%'}}></div>
                  <div className="h-10 bg-[#889063] rounded" style={{width: '45%'}}></div>
                  <div className="h-10 bg-[#889063] rounded" style={{width: '65%'}}></div>
                  <div className="h-10 bg-[#889063] rounded" style={{width: '90%'}}></div>
                </div>
                <p className="text-[#1C1C1C] text-lg mt-4" style={{ letterSpacing: '-0.89px' }}>Your base grows, so your future growth grows too.</p>
              </div>
            </div>
            <div className="mt-10 bg-[#889063] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                This is why compounding is so powerful. It makes growth accelerate.
              </p>
            </div>
          </div>

          {/* Resource Callout */}
          <div className="bg-gradient-to-br from-[#FFCFD0] to-[#FFCFD0]/80 rounded-xl p-8 border-2 border-[#354024]/10 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#354024] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl text-white">📈</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>
                  Check out our resource
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-80 mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Want to see compound growth in action? Our Compound Growth Visual lets you adjust investment amounts, time periods, and return rates to visualize how small, consistent investments can grow exponentially over time.
                </p>
                <Link 
                  to="/compound-growth-visual"
                  className="inline-block bg-[#354024] text-white px-6 py-3 rounded-lg text-lg hover:opacity-90 transition-opacity"
                  style={{ letterSpacing: '-0.89px' }}
                >
                  Visualize Compound Growth →
                </Link>
              </div>
            </div>
          </div>

          {/* Dividends loop - Circular flow */}
          <div className="bg-gradient-to-br from-[#354024] to-[#354024]/80 text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Dividends and reinvestment make compounding stronger
            </h2>
            <p className="mb-8 text-lg" style={{ letterSpacing: '-0.89px' }}>
              If you own dividend-paying stocks or funds and reinvest dividends:
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-lg text-center">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>You buy more shares automatically</p>
              </div>
              <div className="bg-[#FFCFD0]/20 backdrop-blur border border-white/20 p-6 rounded-lg text-center">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>More shares earn more dividends</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-lg text-center">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Those dividends buy more shares again</p>
              </div>
              <div className="bg-[#FFCFD0]/20 backdrop-blur border border-white/20 p-6 rounded-lg text-center">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>This creates a compounding loop</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Reinvestment is one of the easiest ways to benefit from compounding without needing to think about it constantly.
              </p>
            </div>
          </div>

          {/* Vocabulary - Stacked cards */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Key vocabulary (important for understanding compounding)
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-8 shadow-sm flex gap-6">
                <div className="text-xl text-[#1C1C1C] w-48 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Compound growth</div>
                <div className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Growth on original money plus past growth</div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm flex gap-6">
                <div className="text-xl text-[#1C1C1C] w-48 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Principal</div>
                <div className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Starting amount invested</div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm flex gap-6">
                <div className="text-xl text-[#1C1C1C] w-48 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Return</div>
                <div className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Profit from investing</div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm flex gap-6">
                <div className="text-xl text-[#1C1C1C] w-48 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Rate of return</div>
                <div className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Percentage your investment grows</div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm flex gap-6">
                <div className="text-xl text-[#1C1C1C] w-48 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Reinvest</div>
                <div className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Use earnings to buy more investments</div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm flex gap-6">
                <div className="text-xl text-[#1C1C1C] w-48 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Inflation</div>
                <div className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Price increases over time</div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm flex gap-6">
                <div className="text-xl text-[#1C1C1C] w-48 flex-shrink-0" style={{ letterSpacing: '-0.89px' }}>Time horizon</div>
                <div className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>How long you plan to invest</div>
              </div>
            </div>
          </div>

          {/* Recap - Boxed highlights */}
          <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10">
            <h2 className="text-3xl mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
                <CheckCircle2 className="w-8 h-8 mb-4" />
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Compounding is growth building on itself</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
                <CheckCircle2 className="w-8 h-8 mb-4" />
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Time matters more than starting amount</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
                <CheckCircle2 className="w-8 h-8 mb-4" />
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Growth accelerates over time like a snowball</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
                <CheckCircle2 className="w-8 h-8 mb-4" />
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Pulling money out early kills compounding</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
                <CheckCircle2 className="w-8 h-8 mb-4" />
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Reinvesting dividends strengthens compounding</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
                <CheckCircle2 className="w-8 h-8 mb-4" />
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Compounding helps beat inflation long term</p>
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
              1. What is compound growth?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Earning a fixed amount each year', correct: false },
                { label: 'B', text: 'Growth building on both original money and past growth', correct: true },
                { label: 'C', text: 'Only earning on your starting amount', correct: false },
                { label: 'D', text: 'Avoiding risk completely', correct: false }
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
              2. What matters more for compounding?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Starting with a large amount of money', correct: false },
                { label: 'B', text: 'Time in the market', correct: true },
                { label: 'C', text: 'Checking your portfolio daily', correct: false },
                { label: 'D', text: 'Selling during market drops', correct: false }
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
              3. What is the biggest threat to compounding?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Market volatility', correct: false },
                { label: 'B', text: 'Pulling money out too early', correct: true },
                { label: 'C', text: 'Reinvesting dividends', correct: false },
                { label: 'D', text: 'Staying invested long term', correct: false }
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
              Think about your current relationship with time and money.
            </p>
            <p className="text-lg mb-4">
              Are you waiting for the "perfect" amount to start investing, or can you start small and let time work for you?
            </p>
            <p className="text-lg">
              Remember: every month you wait is a month of potential compounding you miss.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/investing-101/lesson-3"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/investing-101/lesson-5"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Risk and Return →
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