import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function InvestingLesson1Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [incorrectAnswers, setIncorrectAnswers] = useState<{[key: string]: boolean}>({});

  const handleAnswerClick = (questionNum: number, answer: string, isCorrect: boolean) => {
    if (isCorrect) {
      setSelectedAnswers(prev => ({...prev, [questionNum]: answer}));
      // Clear any incorrect answers for this question
      const keys = Object.keys(incorrectAnswers).filter(key => !key.startsWith(`${questionNum}-`));
      const newIncorrect: {[key: string]: boolean} = {};
      keys.forEach(key => newIncorrect[key] = true);
      setIncorrectAnswers(newIncorrect);
    } else {
      // Mark this answer as incorrect
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
            What Investing Really Means
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Investing 101 • Lesson 1
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Intro - Two Column Grid */}
          <div className="bg-white rounded-2xl p-10 shadow-lg">
            <h2 className="text-5xl text-[#1C1C1C] mb-10 text-center" style={{ letterSpacing: '-0.89px' }}>
              Investing is not just saving in a different place
            </h2>
            <p className="text-xl text-[#1C1C1C] mb-10 text-center max-w-3xl mx-auto" style={{ letterSpacing: '-0.89px' }}>
              Saving and investing both involve setting money aside, but they serve different purposes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Saving Card */}
              <div className="bg-[#CFBB99] rounded-xl p-8 border-l-8 border-[#889063]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#889063] flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Saving</h3>
                </div>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Protecting money and keeping it safe for short term needs
                </p>
              </div>

              {/* Investing Card */}
              <div className="bg-[#889063] rounded-xl p-8 border-l-8 border-[#FFCFD0]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFCFD0] flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-[#354024]" />
                  </div>
                  <h3 className="text-2xl text-white" style={{ letterSpacing: '-0.89px' }}>Investing</h3>
                </div>
                <p className="text-lg text-white" style={{ letterSpacing: '-0.89px' }}>
                  Putting money to work so it can grow over time
                </p>
              </div>
            </div>

            <div className="bg-[#E5D7C4] rounded-xl p-8 mb-8">
              <p className="text-xl text-[#1C1C1C] text-center" style={{ letterSpacing: '-0.89px' }}>
                When you invest, your money is used to help businesses, governments, or markets operate. In return, you get the opportunity to earn a profit.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#354024] to-[#889063] text-white p-10 rounded-2xl text-center shadow-xl">
              <p className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                So instead of money sitting still, investing gives it a job.
              </p>
            </div>
          </div>

          {/* The main goal - Grid with feature box */}
          <div className="bg-white rounded-lg p-10 shadow-sm">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              The main goal of investing: growth
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#E5D7C4] p-6 rounded-lg">
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>The purpose of investing is long term wealth building.</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Investing allows you to:</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Grow money faster than a savings account</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Build financial security for the future</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Benefit from economic growth</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Create passive income over time</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#CFBB99] p-8 rounded-lg">
              <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Most savings accounts earn very little interest. Investing gives your money the chance to increase in value much more significantly.
              </p>
            </div>
          </div>

          {/* What happens when you invest - Three columns */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              What actually happens when you invest
            </h2>
            <p className="text-lg text-[#1C1C1C] mb-8 text-center max-w-2xl mx-auto" style={{ letterSpacing: '-0.89px' }}>
              When you invest, you are usually buying something that has the potential to increase in value.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-[#889063]">
                <h3 className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Stock</h3>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Buying a stock means you own a piece of a company</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-[#FFCFD0]">
                <h3 className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Bond</h3>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Buying a bond means you are lending money and earning interest</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-[#889063]">
                <h3 className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Fund</h3>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Buying a fund means you own a collection of investments</p>
              </div>
            </div>
            <div className="bg-[#CFBB99] p-8 rounded-lg text-center">
              <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Investing is about ownership and participation in growth.
              </p>
            </div>
          </div>

          {/* Risk vs reward - Side by side */}
          <div className="grid md:grid-cols-[1fr_300px] gap-8">
            <div>
              <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                Risk vs reward
              </h2>
              <p className="text-lg text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                Investing always involves some level of risk.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#FFCFD0]">
                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <strong>Risk means:</strong> The value of what you invest in can go up or down.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#889063]">
                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <strong>Why would people still invest?</strong> Because higher risk often comes with higher potential reward.
                  </p>
                </div>
              </div>
              <div className="bg-[#CFBB99] rounded-lg p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Example:</h3>
                <p className="text-lg text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Keeping $1,000 in a savings account might earn a few dollars.
                </p>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Investing that same $1,000 in the market has the potential to grow much more over time.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-[#889063] text-white p-8 rounded-lg">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  The key idea is that investing rewards patience.
                </p>
              </div>
            </div>
          </div>

          {/* Investing vs Gambling - Horizontal comparison */}
          <div className="bg-white rounded-lg p-10 shadow-sm">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Investing is not gambling
            </h2>
            <p className="text-lg text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              A lot of people confuse investing with gambling because both involve uncertainty.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>The difference:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span>Gambling relies on chance and short term outcomes</span>
                  </div>
                  <div className="flex items-start gap-3 text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span>Investing relies on long term growth and informed decisions</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Successful investing is based on:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#FFCFD0] p-4 rounded text-center text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Research</div>
                  <div className="bg-[#CFBB99] p-4 rounded text-center text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Time</div>
                  <div className="bg-[#CFBB99] p-4 rounded text-center text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Diversification</div>
                  <div className="bg-[#FFCFD0] p-4 rounded text-center text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Consistency</div>
                </div>
              </div>
            </div>
            <div className="bg-[#E5D7C4] p-8 rounded-lg text-center">
              <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                It is about strategy, not luck.
              </p>
            </div>
          </div>

          {/* Time factor - Vertical flow */}
          <div className="bg-[#CFBB99] rounded-lg p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Why time is the most important factor
            </h2>
            <p className="text-lg text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Investing works best when money stays invested for a long period.
            </p>
            <div className="bg-white rounded-lg p-8 mb-6">
              <p className="text-lg text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Over time:</strong></p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-lg text-[#1C1C1C] bg-[#FFCFD0] p-4 rounded" style={{ letterSpacing: '-0.89px' }}>
                  <CheckCircle2 className="w-6 h-6 text-[#354024] flex-shrink-0" />
                  <span>Markets generally grow</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-[#1C1C1C] bg-[#E5D7C4] p-4 rounded" style={{ letterSpacing: '-0.89px' }}>
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                  <span>Investments recover from short term drops</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-[#1C1C1C] bg-[#FFCFD0] p-4 rounded" style={{ letterSpacing: '-0.89px' }}>
                  <CheckCircle2 className="w-6 h-6 text-[#354024] flex-shrink-0" />
                  <span>Compound growth happens</span>
                </div>
              </div>
            </div>
            <p className="text-lg text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              The earlier money is invested, the longer it has to grow.
            </p>
            <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Time is what turns small investments into larger wealth.
              </p>
            </div>
          </div>

          {/* Key vocabulary - Card grid */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Key vocabulary
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-[#FFCFD0]">
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Investment</h3>
                <p className="text-lg text-[#1C1C1C] opacity-80" style={{ letterSpacing: '-0.89px' }}>An asset purchased with the expectation it will grow in value</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-[#889063]">
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Return</h3>
                <p className="text-lg text-[#1C1C1C] opacity-80" style={{ letterSpacing: '-0.89px' }}>The profit earned from an investment</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-[#FFCFD0]">
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Risk</h3>
                <p className="text-lg text-[#1C1C1C] opacity-80" style={{ letterSpacing: '-0.89px' }}>The possibility of losing value</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-[#889063]">
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Asset</h3>
                <p className="text-lg text-[#1C1C1C] opacity-80" style={{ letterSpacing: '-0.89px' }}>Something that has financial value</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-[#FFCFD0]">
                <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Growth</h3>
                <p className="text-lg text-[#1C1C1C] opacity-80" style={{ letterSpacing: '-0.89px' }}>Increase in value over time</p>
              </div>
            </div>
          </div>

          {/* Quick recap - Numbered list in colored boxes */}
          <div className="bg-white rounded-lg p-10 shadow-sm">
            <h2 className="text-3xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-[#E5D7C4] p-6 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl">1</div>
                <span className="text-lg text-[#1C1C1C] mt-1" style={{ letterSpacing: '-0.89px' }}>Investing grows money long term</span>
              </div>
              <div className="flex items-start gap-4 bg-[#E5D7C4] p-6 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl">2</div>
                <span className="text-lg text-[#1C1C1C] mt-1" style={{ letterSpacing: '-0.89px' }}>It involves ownership and participation</span>
              </div>
              <div className="flex items-start gap-4 bg-[#E5D7C4] p-6 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl">3</div>
                <span className="text-lg text-[#1C1C1C] mt-1" style={{ letterSpacing: '-0.89px' }}>It carries risk but offers higher rewards</span>
              </div>
              <div className="flex items-start gap-4 bg-[#E5D7C4] p-6 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl">4</div>
                <span className="text-lg text-[#1C1C1C] mt-1" style={{ letterSpacing: '-0.89px' }}>It is strategic, not gambling</span>
              </div>
              <div className="flex items-start gap-4 bg-[#E5D7C4] p-6 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center text-xl">5</div>
                <span className="text-lg text-[#1C1C1C] mt-1" style={{ letterSpacing: '-0.89px' }}>Time is the biggest advantage</span>
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
              1. What is the main purpose of investing?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Spending money', correct: false },
                { label: 'B', text: 'Growing money over time', correct: true },
                { label: 'C', text: 'Keeping money unused', correct: false },
                { label: 'D', text: 'Avoiding banks', correct: false }
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
              2. How is investing different from saving?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Investing protects money only', correct: false },
                { label: 'B', text: 'Saving grows money faster', correct: false },
                { label: 'C', text: 'Investing focuses on long term growth', correct: true },
                { label: 'D', text: 'They are the same', correct: false }
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
              3. What does risk mean in investing?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Guaranteed loss', correct: false },
                { label: 'B', text: 'Value can change', correct: true },
                { label: 'C', text: 'No growth', correct: false },
                { label: 'D', text: 'Immediate profit', correct: false }
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
              Think about one reason investing could make your life better in the future.
            </p>
            <p className="text-lg mb-4">
              Write it down.
            </p>
            <p className="text-lg">
              This will help guide your understanding as you continue learning about investing.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/investing-101"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Back to Module
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/investing-101/lesson-2"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                How Investing Actually Works →
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