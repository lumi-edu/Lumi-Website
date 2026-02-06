import { Link } from './RouterLink';
import Footer from './Footer';
import { Calculator, TrendingDown, Target, Zap, CheckCircle2, AlertCircle } from 'lucide-react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import DebtDecisionLab from './DebtDecisionLab';

export default function DebtDecisionLabPage() {
  return (
    <div className="min-h-screen bg-[#E5D7C4]">
      {/* Header */}
      <div className="sticky top-0 z-50 border-t-[16px] border-[#354024]">
        <header className="bg-[#889063] px-6 py-6 md:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <img src={lumiLogo} alt="lumi" className="h-8 -ml-7" style={{ mixBlendMode: 'multiply' }} />
            <nav className="flex gap-8">
              <Link to="/" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                home
              </Link>
              <Link to="/learn" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                learn
              </Link>
              <Link to="/resources" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                resources
              </Link>
              <Link to="/blog" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                blog
              </Link>
            </nav>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#889063] to-[#CFBB99] rounded-3xl p-12 md:p-16 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFCFD0] rounded-2xl mb-6 shadow-lg">
                <Calculator className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-6 font-bold" style={{ letterSpacing: '-0.89px' }}>
                Debt Decision Lab
              </h1>
              <p className="text-2xl text-[#1C1C1C] opacity-90 leading-relaxed">
                Compare payoff strategies and see exactly how your payments impact your debt-free timeline
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="px-6 pb-16 md:px-12">
        <DebtDecisionLab />
      </section>

      {/* How it Works */}
      <section className="px-6 py-16 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4 font-bold" style={{ letterSpacing: '-0.89px' }}>
              How to use this tool
            </h2>
            <p className="text-xl text-[#1C1C1C] opacity-70 max-w-2xl mx-auto">
              Follow these simple steps to explore different debt payoff scenarios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#E5D7C4] rounded-2xl p-8 border-4 border-[#889063]">
              <div className="w-14 h-14 bg-[#889063] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl text-[#1C1C1C] mb-4 font-bold" style={{ letterSpacing: '-0.89px' }}>
                Pick a scenario
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-80 leading-relaxed">
                Choose from credit card, student loan, auto loan, or personal loan. Each preset fills in typical values.
              </p>
            </div>

            <div className="bg-[#E5D7C4] rounded-2xl p-8 border-4 border-[#889063]">
              <div className="w-14 h-14 bg-[#889063] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl text-[#1C1C1C] mb-4 font-bold" style={{ letterSpacing: '-0.89px' }}>
                Adjust the sliders
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-80 leading-relaxed">
                Customize your balance, APR, and monthly payment. Watch the results update in real time.
              </p>
            </div>

            <div className="bg-[#E5D7C4] rounded-2xl p-8 border-4 border-[#889063]">
              <div className="w-14 h-14 bg-[#889063] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl text-[#1C1C1C] mb-4 font-bold" style={{ letterSpacing: '-0.89px' }}>
                Compare strategies
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-80 leading-relaxed">
                Toggle between minimum, fixed, avalanche, and snowball methods to find what works best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Context */}
      <section className="px-6 py-16 md:px-12 bg-[#354024]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-[#CFBB99] mb-4 font-bold" style={{ letterSpacing: '-0.89px' }}>
              Understanding debt payoff strategies
            </h2>
            <p className="text-xl text-[#CFBB99] opacity-90 max-w-2xl mx-auto">
              Each approach has different benefits depending on your situation and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#889063] rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#FFCFD0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2 font-bold" style={{ letterSpacing: '-0.89px' }}>
                    Minimum payments
                  </h3>
                  <p className="text-sm text-white opacity-70 uppercase tracking-wide mb-3">
                    Easy but expensive
                  </p>
                </div>
              </div>
              <p className="text-lg text-white opacity-90 leading-relaxed">
                Minimum payments are the smallest amount your lender requires each month. While they keep your account in good standing, they typically maximize the amount of interest you will pay over time. On credit cards, minimums are usually calculated as a percentage of your balance, which means they decrease as you pay down debt, extending your payoff timeline significantly.
              </p>
            </div>

            <div className="bg-[#889063] rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#CFBB99] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#354024]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2 font-bold" style={{ letterSpacing: '-0.89px' }}>
                    Fixed payment strategy
                  </h3>
                  <p className="text-sm text-white opacity-70 uppercase tracking-wide mb-3">
                    Consistent and powerful
                  </p>
                </div>
              </div>
              <p className="text-lg text-white opacity-90 leading-relaxed">
                With a fixed payment approach, you commit to paying the same amount every month regardless of what the minimum payment is. Even increasing your payment by just $20 or $50 per month can dramatically reduce both the time it takes to pay off debt and the total interest you will pay. This strategy works best when you have stable income and can commit to a consistent payment amount.
              </p>
            </div>

            <div className="bg-[#889063] rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#CFBB99] rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-[#354024]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2 font-bold" style={{ letterSpacing: '-0.89px' }}>
                    Debt avalanche method
                  </h3>
                  <p className="text-sm text-white opacity-70 uppercase tracking-wide mb-3">
                    Mathematically optimal
                  </p>
                </div>
              </div>
              <p className="text-lg text-white opacity-90 leading-relaxed">
                The avalanche method is mathematically the most efficient debt payoff strategy. You make minimum payments on all debts, then put any extra money toward the debt with the highest interest rate first. Once that is paid off, you move to the next highest rate. This approach minimizes the total interest you will pay, but it can feel slow emotionally if your highest-rate debt also has a large balance.
              </p>
            </div>

            <div className="bg-[#889063] rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#CFBB99] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#354024]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2 font-bold" style={{ letterSpacing: '-0.89px' }}>
                    Debt snowball method
                  </h3>
                  <p className="text-sm text-white opacity-70 uppercase tracking-wide mb-3">
                    Momentum focused
                  </p>
                </div>
              </div>
              <p className="text-lg text-white opacity-90 leading-relaxed">
                The snowball method prioritizes psychological wins over mathematical efficiency. You make minimum payments on all debts, then put extra money toward the smallest balance first, regardless of interest rate. As you pay off each small debt, you gain momentum and motivation to tackle the next one. While this may cost more in total interest than the avalanche method, many people find it easier to stick with because of the quick wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="px-6 py-16 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4 font-bold" style={{ letterSpacing: '-0.89px' }}>
              Key insights about debt payoff
            </h2>
            <p className="text-xl text-[#1C1C1C] opacity-70 max-w-2xl mx-auto">
              Important principles to remember as you develop your payoff strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#FFCFD0]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FFCFD0] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl text-[#1C1C1C] mb-3 font-bold" style={{ letterSpacing: '-0.89px' }}>
                    Interest compounds quickly
                  </h3>
                  <p className="text-lg text-[#1C1C1C] opacity-80 leading-relaxed">
                    High APR means interest stacks up fast, especially on credit card balances. The longer you carry a balance, the more interest you pay on interest.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#889063]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#889063] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingDown className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl text-[#1C1C1C] mb-3 font-bold" style={{ letterSpacing: '-0.89px' }}>
                    Small increases matter
                  </h3>
                  <p className="text-lg text-[#1C1C1C] opacity-80 leading-relaxed">
                    Even adding $25 to $50 more per month can cut years off your payoff timeline and save hundreds or thousands in interest.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#889063]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#889063] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl text-[#1C1C1C] mb-3 font-bold" style={{ letterSpacing: '-0.89px' }}>
                    Avoid new charges
                  </h3>
                  <p className="text-lg text-[#1C1C1C] opacity-80 leading-relaxed">
                    While paying down debt, avoid adding new charges to the same accounts. New purchases reset your progress and extend your timeline.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#CFBB99]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#CFBB99] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-5 h-5 text-[#354024]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl text-[#1C1C1C] mb-3 font-bold" style={{ letterSpacing: '-0.89px' }}>
                    Consistency wins
                  </h3>
                  <p className="text-lg text-[#1C1C1C] opacity-80 leading-relaxed">
                    Whether you choose avalanche or snowball, the most important factor is sticking with your plan consistently over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#CFBB99] to-[#E5D7C4] rounded-3xl p-12 md:p-16 shadow-xl">
            <h2 className="text-4xl md:text-5xl text-[#1C1C1C] mb-12 text-center font-bold" style={{ letterSpacing: '-0.89px' }}>
              Why debt payoff planning matters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#354024] mb-3" style={{ letterSpacing: '-0.89px' }}>
                  80%
                </div>
                <p className="text-xl text-[#1C1C1C] opacity-80">
                  of Americans carry some form of debt
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#354024] mb-3" style={{ letterSpacing: '-0.89px' }}>
                  $1,000+
                </div>
                <p className="text-xl text-[#1C1C1C] opacity-80">
                  saved in interest with strategic planning
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#354024] mb-3" style={{ letterSpacing: '-0.89px' }}>
                  2-3x
                </div>
                <p className="text-xl text-[#1C1C1C] opacity-80">
                  faster payoff with consistent extra payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 md:px-12 bg-[#E5D7C4]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#354024] text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold" style={{ letterSpacing: '-0.89px' }}>
              Ready to take control of your debt?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Explore our Credit and Debt module for comprehensive lessons on building credit, understanding debt, and developing smart repayment strategies.
            </p>
            <Link
              to="/credit-debt"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-3 bg-[#FFCFD0] text-[#354024] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#CFBB99] transition-all shadow-lg hover:shadow-xl hover:scale-105"
              style={{ letterSpacing: '-0.89px' }}
            >
              Explore Credit and Debt module
              <CheckCircle2 className="w-6 h-6" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
