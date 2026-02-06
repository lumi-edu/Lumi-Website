import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, AlertTriangle, Shield, Activity } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function InvestingLesson5Page() {
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
            Risk and Why It Exists
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Investing 101 • Lesson 5
          </p>
        </div>
      </section>

      {/* Main Content - Card-based Risk Scale Design */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Intro - Alert style callout */}
          <div className="bg-white rounded-xl p-10 shadow-lg border-l-8 border-[#FFCFD0]">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-10 h-10 text-[#889063] flex-shrink-0" />
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Risk is built into investing
              </h2>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-4" style={{ letterSpacing: '-0.89px' }}>
              Risk is one of the most important concepts in investing because every investment involves uncertainty.
            </p>
            <div className="bg-[#E5D7C4] p-8 rounded-lg mb-6">
              <p className="text-[#1C1C1C] mb-3 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Risk simply means:</strong></p>
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                There is a possibility that the value of your investment can decrease.
              </p>
            </div>
            <p className="text-[#1C1C1C] mb-6 text-lg" style={{ letterSpacing: '-0.89px' }}>
              Without risk, investing would not offer growth. Higher potential returns exist because investors are rewarded for taking uncertainty.
            </p>
            <div className="bg-[#354024] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Risk is not something to avoid completely. It is something to understand and manage.
              </p>
            </div>
          </div>

          {/* Why risk exists - Grid with icons */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Why risk exists in the market
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>Investment values change because:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-[#889063] mt-2 flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Company performance changes</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-[#889063] mt-2 flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Economic conditions shift</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-[#889063] mt-2 flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Interest rates rise or fall</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-[#889063] mt-2 flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Global events affect markets</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-3 md:col-span-2">
                <div className="w-3 h-3 rounded-full bg-[#889063] mt-2 flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Investor emotions drive buying and selling</span>
              </div>
            </div>
            <div className="bg-[#FFCFD0]/30 p-8 rounded-lg">
              <p className="text-[#1C1C1C] mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>
                Markets are influenced by real world events and expectations about the future. Because the future is uncertain, prices fluctuate.
              </p>
              <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Risk is the trade-off for opportunity.</strong>
              </p>
            </div>
          </div>

          {/* Types of risk - Stacked cards with colors */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Types of investing risk
            </h2>
            <div className="space-y-4">
              <div className="bg-[#FFCFD0]/20 border-l-4 border-[#FFCFD0] rounded-lg p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Market risk</h3>
                <p className="text-[#1C1C1C] mb-3 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  The overall market can go up or down based on economic conditions.
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Even strong companies can drop when the entire market falls.
                </p>
              </div>
              
              <div className="bg-[#CFBB99]/20 border-l-4 border-[#CFBB99] rounded-lg p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Company risk</h3>
                <p className="text-[#1C1C1C] mb-3 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  A specific company might perform poorly, lose profits, or fail entirely.
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Owning one company is riskier than owning many.
                </p>
              </div>
              
              <div className="bg-[#889063]/20 border-l-4 border-[#889063] rounded-lg p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Inflation risk</h3>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  If investments do not grow faster than inflation, your money loses purchasing power over time.
                </p>
              </div>
              
              <div className="bg-[#E5D7C4] border-l-4 border-[#354024] rounded-lg p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Interest rate risk</h3>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Rising interest rates often reduce bond prices and can impact stock values.
                </p>
              </div>
            </div>
          </div>

          {/* Volatility - Wave visual concept */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <div className="flex items-start gap-4 mb-8">
              <Activity className="w-12 h-12 text-[#889063] flex-shrink-0" />
              <div>
                <h2 className="text-4xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Volatility and why prices move
                </h2>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Volatility refers to how much investment prices fluctuate.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-lg p-8">
                <p className="text-[#1C1C1C] mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>High volatility means:</strong></p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Large price swings in short periods.</p>
              </div>
              <div className="bg-[#889063]/20 border-2 border-[#889063] rounded-lg p-8">
                <p className="text-[#1C1C1C] mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Low volatility means:</strong></p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Smaller and steadier movements.</p>
              </div>
            </div>

            <div className="bg-[#E5D7C4] p-8 rounded-lg mb-6">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                Volatility is normal. It is not permanent loss. Prices move daily, but long term trends matter most.
              </p>
            </div>

            <div className="bg-[#889063] text-white p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                Short term volatility is part of long term growth.
              </p>
            </div>
          </div>

          {/* Risk vs Reward - Scale visualization */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Risk vs reward relationship
            </h2>
            <p className="text-[#1C1C1C] text-center mb-10 text-xl" style={{ letterSpacing: '-0.89px' }}>
              Higher potential return usually comes with higher risk.
            </p>
            
            <div className="bg-white rounded-xl p-10 shadow-md mb-8">
              <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Example:</strong></p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-32 flex-shrink-0 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Stocks</div>
                  <div className="flex-1">
                    <div className="h-12 bg-[#354024] rounded flex items-center justify-end pr-4 text-white text-lg" style={{width: '90%', letterSpacing: '-0.89px'}}>
                      Higher risk
                    </div>
                  </div>
                  <div className="w-40 flex-shrink-0 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Fluctuate more but grow more long term</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-32 flex-shrink-0 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Bonds</div>
                  <div className="flex-1">
                    <div className="h-12 bg-[#889063] rounded flex items-center justify-end pr-4 text-white text-lg" style={{width: '50%', letterSpacing: '-0.89px'}}>
                      Medium risk
                    </div>
                  </div>
                  <div className="w-40 flex-shrink-0 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Stable but grow slower</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-32 flex-shrink-0 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Cash</div>
                  <div className="flex-1">
                    <div className="h-12 bg-[#CFBB99] rounded flex items-center justify-end pr-4 text-[#1C1C1C] text-lg" style={{width: '20%', letterSpacing: '-0.89px'}}>
                      Lower risk
                    </div>
                  </div>
                  <div className="w-40 flex-shrink-0 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Safest but barely grows</div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFCFD0]/30 p-8 rounded-lg text-center">
              <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Investors choose risk levels based on their goals and timeline.</strong>
              </p>
            </div>
          </div>

          {/* Diversification - Shield concept */}
          <div className="bg-gradient-to-br from-[#354024] to-[#354024]/80 text-white rounded-xl p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-8">
              <Shield className="w-12 h-12 flex-shrink-0" />
              <h2 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                Diversification reduces risk
              </h2>
            </div>
            <p className="text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Diversification means spreading money across different investments.
            </p>
            <p className="mb-8 text-lg" style={{ letterSpacing: '-0.89px' }}>
              Instead of relying on one company or one type of asset, you spread risk.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur border border-white/20 p-8 rounded-lg">
                <p className="mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Examples:</strong></p>
                <ul className="space-y-3 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li>• Investing in multiple companies</li>
                  <li>• Investing across industries</li>
                  <li>• Investing in ETFs or funds</li>
                  <li>• Mixing stocks and bonds</li>
                </ul>
              </div>
              <div className="bg-[#FFCFD0]/20 backdrop-blur border border-white/20 p-8 rounded-lg flex items-center">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Diversification protects your portfolio from major losses.</strong>
                </p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur p-8 rounded-lg text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>You are not avoiding risk. You are managing it.</strong>
              </p>
            </div>
          </div>

          {/* Risk tolerance - Personal assessment */}
          <div className="bg-white rounded-xl p-10 shadow-md">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Risk tolerance
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Risk tolerance is how comfortable you are with investment ups and downs.
            </p>
            
            <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Factors that affect it:</strong></p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#889063]/10 p-6 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Time horizon</span>
              </div>
              <div className="bg-[#889063]/10 p-6 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Financial goals</span>
              </div>
              <div className="bg-[#889063]/10 p-6 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Emotional comfort</span>
              </div>
              <div className="bg-[#889063]/10 p-6 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>Ability to handle losses</span>
              </div>
            </div>

            <div className="bg-[#E5D7C4] p-8 rounded-lg">
              <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                Longer time horizons usually allow for higher risk because markets recover over time.
              </p>
            </div>
          </div>

          {/* Real-life perspective - Two-column */}
          <div className="bg-[#FFCFD0]/30 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Real-life perspective on risk
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-8 rounded-lg">
                <p className="text-[#1C1C1C] mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  People often fear market drops, but drops are temporary unless you sell.
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Risk becomes real loss only when investments are sold at a lower price.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <p className="text-[#1C1C1C] mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Investing rewards patience and long term thinking.
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Short term fear often leads to long term mistakes.
                </p>
              </div>
            </div>
          </div>

          {/* Vocabulary - Definition cards */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Key vocabulary
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Risk</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Possibility of losing value</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Market risk</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Risk from overall market changes</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Volatility</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Price fluctuation</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Diversification</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Spreading investments</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Risk tolerance</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Comfort with uncertainty</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Inflation risk</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Loss of purchasing power</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>Interest rate risk</p>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>Market changes due to rates</p>
              </div>
            </div>
          </div>

          {/* Quick recap - Bullet points with icons */}
          <div className="bg-[#889063] text-white rounded-xl p-10 shadow-lg">
            <h2 className="text-3xl mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}>Risk is part of investing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}>Markets fluctuate because of uncertainty</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}>Volatility is normal</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}>Higher returns usually mean higher risk</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}>Diversification lowers risk</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg" style={{ letterSpacing: '-0.89px' }}>Patience helps manage risk</span>
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
              1. What does volatility mean in investing?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Guaranteed loss', correct: false },
                { label: 'B', text: 'Price fluctuations', correct: true },
                { label: 'C', text: 'Stable returns', correct: false },
                { label: 'D', text: 'No growth', correct: false }
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
              2. How does diversification help investors?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'Increases risk', correct: false },
                { label: 'B', text: 'Eliminates growth', correct: false },
                { label: 'C', text: 'Reduces overall risk', correct: true },
                { label: 'D', text: 'Guarantees profit', correct: false }
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
              3. When does investment risk turn into real loss?
            </h3>
            <div className="space-y-4">
              {[
                { label: 'A', text: 'When prices drop temporarily', correct: false },
                { label: 'B', text: 'When investments are sold at a lower price', correct: true },
                { label: 'C', text: 'When markets rise', correct: false },
                { label: 'D', text: 'When dividends are paid', correct: false }
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
              Think about your own risk tolerance.
            </p>
            <p className="text-lg mb-4">
              What level of risk feels comfortable for you based on your goals and timeline?
            </p>
            <p className="text-lg">
              Understanding your risk tolerance helps guide your investment choices.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/investing-101/lesson-4"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/investing-101/lesson-6"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                What Is the Stock Market →
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