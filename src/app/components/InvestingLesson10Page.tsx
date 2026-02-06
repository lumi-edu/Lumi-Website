import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, TrendingUp, Shield, Repeat, Heart, Award } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function InvestingLesson10Page() {
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
            Building Wealth Slowly and Safely
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Investing 101 • Lesson 10 (Final Lesson)
          </p>
        </div>
      </section>

      {/* Main Content - Success Principles Layout */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Intro - Success banner */}
          <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-2xl p-10 shadow-xl">
            <div className="flex items-start gap-6 mb-8">
              <Award className="w-16 h-16 flex-shrink-0" />
              <h2 className="text-5xl" style={{ letterSpacing: '-0.89px' }}>
                Real investing success is slow and consistent
              </h2>
            </div>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              One of the biggest misconceptions about investing is that wealth comes from big risky moves or lucky timing.
            </p>
            <div className="bg-white/20 backdrop-blur border border-white/30 rounded-lg p-8 mb-8">
              <p className="mb-4 text-2xl" style={{ letterSpacing: '-0.89px' }}><strong>In reality, most successful investors build wealth through:</strong></p>
              <div className="grid md:grid-cols-2 gap-4">
                <p className="flex items-center gap-2 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <CheckCircle2 className="w-6 h-6" /> Consistency
                </p>
                <p className="flex items-center gap-2 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <CheckCircle2 className="w-6 h-6" /> Diversification
                </p>
                <p className="flex items-center gap-2 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <CheckCircle2 className="w-6 h-6" /> Patience
                </p>
                <p className="flex items-center gap-2 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <CheckCircle2 className="w-6 h-6" /> Long term commitment
                </p>
              </div>
            </div>
            <div className="bg-white text-[#1C1C1C] p-8 rounded-lg text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Investing is not about fast wins. It is about steady progress over time.</strong>
              </p>
            </div>
          </div>

          {/* Why slow works - Icon feature cards */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Why slow investing works
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#889063] flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Compound growth</h3>
                </div>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Compound growth multiplies returns</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#889063] flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Market trends</h3>
                </div>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Markets trend upward long term</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#FFCFD0] flex items-center justify-center">
                    <Shield className="w-7 h-7 text-[#1C1C1C]" />
                  </div>
                  <h3 className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Protection</h3>
                </div>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Diversification reduces losses</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#CFBB99] flex items-center justify-center">
                    <Repeat className="w-7 h-7 text-[#1C1C1C]" />
                  </div>
                  <h3 className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Momentum</h3>
                </div>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Consistency builds momentum</p>
              </div>
            </div>
            
            <div className="bg-[#CFBB99]/30 rounded-xl p-10">
              <p className="text-[#1C1C1C] text-xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                Small investments made regularly can grow significantly when left untouched for years.
              </p>
              <div className="bg-white p-8 rounded-lg">
                <p className="text-[#1C1C1C] text-2xl text-center" style={{ letterSpacing: '-0.89px' }}>
                  <strong>The key is staying invested.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Diversification - Protection shield layout */}
          <div className="bg-gradient-to-br from-[#354024] to-[#354024]/90 text-white rounded-xl p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-8">
              <Shield className="w-14 h-14 flex-shrink-0" />
              <h2 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                The role of diversification in safe growth
              </h2>
            </div>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Diversification protects your portfolio from major damage.
            </p>
            <div className="bg-white/20 backdrop-blur border border-white/30 rounded-lg p-8 mb-8">
              <p className="mb-6 text-lg" style={{ letterSpacing: '-0.89px' }}>Instead of relying on one company, spreading investments across:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded">
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Industries</strong></p>
                </div>
                <div className="bg-white/10 p-6 rounded">
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Sectors</strong></p>
                </div>
                <div className="bg-white/10 p-6 rounded">
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Funds</strong></p>
                </div>
                <div className="bg-white/10 p-6 rounded">
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Asset types</strong></p>
                </div>
              </div>
              <p className="mt-6 italic text-lg" style={{ letterSpacing: '-0.89px' }}>helps balance risk and reward.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/30 backdrop-blur p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <strong>When one investment drops, others can offset losses.</strong>
                </p>
              </div>
              <div className="bg-white/30 backdrop-blur p-6 rounded-lg">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <strong>This keeps growth steady over time.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Market drops - Recovery perspective */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Staying invested during market drops
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Market declines are normal and expected.
            </p>
            
            <div className="bg-gradient-to-r from-[#FFCFD0]/20 to-[#889063]/20 p-10 rounded-lg mb-8">
              <p className="text-[#1C1C1C] text-xl mb-6 text-center" style={{ letterSpacing: '-0.89px' }}><strong>Long term investors understand:</strong></p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border-2 border-[#889063] p-6 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg flex items-center gap-2" style={{ letterSpacing: '-0.89px' }}>
                    <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                    <strong>Drops are temporary</strong>
                  </p>
                </div>
                <div className="bg-white border-2 border-[#889063] p-6 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg flex items-center gap-2" style={{ letterSpacing: '-0.89px' }}>
                    <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                    <strong>Markets recover historically</strong>
                  </p>
                </div>
                <div className="bg-white border-2 border-[#889063] p-6 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg flex items-center gap-2" style={{ letterSpacing: '-0.89px' }}>
                    <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                    <strong>Selling locks in losses</strong>
                  </p>
                </div>
                <div className="bg-white border-2 border-[#889063] p-6 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg flex items-center gap-2" style={{ letterSpacing: '-0.89px' }}>
                    <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                    <strong>Patience allows recovery</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#889063] text-white p-8 rounded-lg mb-6">
              <p className="text-2xl text-center" style={{ letterSpacing: '-0.89px' }}>
                <strong>The biggest gains often come after market downturns.</strong>
              </p>
            </div>
            
            <div className="bg-[#354024] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Staying invested protects your future growth.</strong>
              </p>
            </div>
          </div>

          {/* Consistent investing - Habit building */}
          <div className="bg-gradient-to-br from-[#FFCFD0] to-[#FFCFD0]/80 text-[#1C1C1C] rounded-xl p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-8">
              <Repeat className="w-14 h-14 flex-shrink-0" />
              <h2 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                Consistent investing builds habits
              </h2>
            </div>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>Regular investing creates:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/60 backdrop-blur border border-[#1C1C1C]/20 p-8 rounded-lg text-center">
                <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}><strong>Discipline</strong></p>
              </div>
              <div className="bg-white/60 backdrop-blur border border-[#1C1C1C]/20 p-8 rounded-lg text-center">
                <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}><strong>Confidence</strong></p>
              </div>
              <div className="bg-white/60 backdrop-blur border border-[#1C1C1C]/20 p-8 rounded-lg text-center">
                <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}><strong>Financial growth over time</strong></p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur p-8 rounded-lg mb-6">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Even small recurring investments add up and benefit from compounding.
              </p>
            </div>
            <div className="bg-[#354024] text-white p-8 rounded-lg text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Consistency is more powerful than large one time investing.</strong>
              </p>
            </div>
          </div>

          {/* Wealth building mindset - Core principles */}
          <div className="bg-white rounded-xl p-10 shadow-lg border-4 border-[#889063]">
            <div className="flex items-start gap-4 mb-8">
              <Heart className="w-14 h-14 text-[#FFCFD0] flex-shrink-0" />
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Wealth building mindset
              </h2>
            </div>
            <p className="text-[#1C1C1C] text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>Investing safely requires:</p>
            <div className="space-y-4 mb-8">
              <div className="bg-[#E5D7C4] border-l-4 border-[#889063] p-8 rounded">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Thinking long term</strong></p>
              </div>
              <div className="bg-[#E5D7C4] border-l-4 border-[#889063] p-8 rounded">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Avoiding emotional reactions</strong></p>
              </div>
              <div className="bg-[#E5D7C4] border-l-4 border-[#FFCFD0] p-8 rounded">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Trusting steady growth</strong></p>
              </div>
              <div className="bg-[#E5D7C4] border-l-4 border-[#CFBB99] p-8 rounded">
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Staying patient</strong></p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#354024] to-[#354024]/90 text-white p-10 rounded-lg">
              <p className="text-3xl text-center mb-4" style={{ letterSpacing: '-0.89px' }}>
                <strong>Wealth is built gradually, not instantly.</strong>
              </p>
              <p className="text-2xl text-center" style={{ letterSpacing: '-0.89px' }}>
                Investing rewards those who stay committed.
              </p>
            </div>
          </div>

          {/* Vocabulary - Clean grid */}
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
                <p className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Compound growth</strong></p>
                <p className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Growth on past returns</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Market cycle</strong></p>
                <p className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Periods of rise and fall</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Long term investing</strong></p>
                <p className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Holding assets for years</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Portfolio stability</strong></p>
                <p className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Balanced investment structure</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Volatility</strong></p>
                <p className="text-[#1C1C1C] text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Short term market movement</p>
              </div>
            </div>
          </div>

          {/* Quick recap - Success summary */}
          <div className="bg-gradient-to-br from-[#CFBB99]/40 to-[#CFBB99]/20 rounded-xl p-10">
            <h2 className="text-3xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#889063] flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Investing success is slow and steady</strong></span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#889063] flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Compound growth builds wealth</strong></span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#889063] flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Diversification reduces risk</strong></span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#889063] flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Market drops are temporary</strong></span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#889063] flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Consistency matters most</strong></span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#889063] flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}><strong>Patience is the core investing skill</strong></span>
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
              1. What is the safest way to build wealth through investing?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Quick trades', correct: false },
                { label: 'B', text: 'Consistent long term investing', correct: true },
                { label: 'C', text: 'One stock only', correct: false },
                { label: 'D', text: 'Timing the market', correct: false }
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
              2. Why is diversification important?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Increases risk', correct: false },
                { label: 'B', text: 'Reduces portfolio losses', correct: true },
                { label: 'C', text: 'Guarantees profit', correct: false },
                { label: 'D', text: 'Eliminates growth', correct: false }
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
              3. What should long term investors do during market drops?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Sell everything', correct: false },
                { label: 'B', text: 'Panic', correct: false },
                { label: 'C', text: 'Stay invested', correct: true },
                { label: 'D', text: 'Stop investing forever', correct: false }
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

      {/* Module Complete */}
      <section className="px-6 py-12 md:px-12" style={{ backgroundColor: '#E5D7C4' }}>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
            <div className="flex items-center gap-3 mb-6">
              <Award size={36} style={{ color: '#889063' }} />
              <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>You've completed the Investing 101 module!</h2>
            </div>

            <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
              You now have all the knowledge you need to build a strong investing foundation:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>✓ Understanding investment basics</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>✓ Stocks, bonds, and mutual funds</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>✓ Risk and diversification strategies</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>✓ Starting your investment journey</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>✓ Long-term wealth building</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>✓ Avoiding common mistakes</p>
              </div>
            </div>

            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-xl mb-4">
                Remember: Investing is a long-term game that rewards patience and consistency.
              </p>
              <p style={{ color: '#1C1C1C' }} className="text-lg">
                Start small, stay invested, and let time work in your favor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <Link 
              to="/investing-101/lesson-9"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}