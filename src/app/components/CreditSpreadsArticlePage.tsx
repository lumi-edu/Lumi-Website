import { Link } from './RouterLink';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import lumiLogo from '../assets/lumilogo.png';
import Footer from './Footer';

export default function CreditSpreadsArticlePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* Article Content */}
      <main className="px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/blog"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <span className="inline-block text-sm text-[#1C1C1C] bg-[#CFBB99] px-3 py-1 rounded mb-4">
              Credit Markets
            </span>
            <h1 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
              Credit Spreads: How Markets Evaluate Risk Beneath the Surface
            </h1>
            <div className="flex items-center gap-6 text-lg text-[#1C1C1C] opacity-60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>January 30, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>11 min read</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-8">
              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                Market performance is often judged by visible measures such as price charts and daily headlines. Beneath these indicators, investors rely on less visible signals to assess risk. One of the most informative of these signals is the credit spread.
              </p>

              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                Credit spread reflects how investors compare the safety of lending to corporations versus governments. They're a key tool for understanding market conditions beyond equity prices as they influence investment decisions and overall financial stability.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Understanding Credit Spreads</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                A credit spread refers to the difference in yield between a corporate bond and a government bond with a similar maturity. Government bonds are typically viewed as low-risk due to government backing, while corporate bonds have the possibility that the issuing company may struggle to repay its debt.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                The size of the spread represents the extra return investors demand for taking on corporate risk. Narrow spreads suggest confidence in corporate financial health and economic stability. Wider spreads show growing concern about risk or future economic conditions.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Credit spreads vary across different levels of corporate credit quality. Financially stronger companies tend to borrow at smaller spreads, while firms with higher leverage or weaker balance sheets face larger ones. Changes in these spreads offer insight into how investor risk perceptions shift over time.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Why Credit Spreads Matter More Than Headlines</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Unlike stock prices, which can be influenced by short-term trading or sentiment, credit spreads reflect longer-term judgments about financial stability. Bond investors focus on a borrower's ability to meet obligations over time, making credit markets especially sensitive to changes in economic outlook.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Historically, credit spreads have often widened before recessions or periods of financial stress become evident in equity markets. When investors demand greater compensation for lending, it signals rising concern about corporate earnings, balance sheets, or broader economic conditions.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">What Influences Credit Spreads</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Several factors contribute to movements in credit spreads, including expectations about growth, corporate profitability, and leverage. When investors anticipate slower growth or heightened uncertainty, corporate debt may appear riskier, leading to higher required yields.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Importantly, spreads can widen even when companies remain profitable. Because markets are forward-looking, credit spreads often reflect concerns about future conditions rather than current performance. This makes them a powerful indicator of sentiment and perceived risk.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Effects on Businesses and the Broader Economy</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                When credit spreads widen, borrowing becomes more expensive for businesses. Higher financing costs can discourage investment, delay expansion, and limit hiring. Over time, these effects can slow economic growth and reinforce cautious behavior across markets.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Consumers can also feel the impact indirectly. Tighter credit conditions may affect loan availability, employment prospects, and overall economic confidence. Since business investment and hiring decisions influence broader economic activity, shifts in credit spreads can have wide-ranging effects beyond financial markets.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Credit Spreads and Financial Stability</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Credit spreads are closely monitored as indicators of systemic risk. Sharp or sudden widening can signal stress within the financial system, especially if companies face difficulty refinancing existing debt. During periods of disruption, rising spreads can accelerate downturns by limiting access to financing.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                In contrast, narrowing spreads typically reflect improving confidence, more favorable financing conditions, and a more optimistic economic outlook. Policymakers and analysts track these trends closely when assessing financial stability.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Why It Matters</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Understanding credit spreads helps explain why markets sometimes react strongly even in the absence of major headlines. They reveal how investors are pricing risk below the surface and offer a more nuanced view of financial conditions than stock prices alone.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                For individuals, awareness of credit spreads reinforces the importance of understanding economic cycles and financial risk. Even without direct exposure to bond markets, changes in credit conditions can influence employment, investment, and long-term financial outcomes.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Looking Ahead</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                As financial systems become increasingly interconnected, credit spreads are likely to remain a key indicator of economic health. Shifts in corporate behavior, global growth expectations, and investor sentiment will continue to shape how risk is priced across markets.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                While credit spreads cannot predict the future with certainty, they provide valuable insight into how markets interpret stability and uncertainty. Recognizing their role offers a deeper understanding of financial dynamics and highlights how risk is assessed beyond visible market movements.
              </p>

              <div className="bg-[#889063] text-white rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Credit spreads measure the difference in yield between corporate and government bonds, reflecting perceived risk.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Narrow spreads indicate confidence in economic stability, while wider spreads signal growing concern about risk.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Credit spreads often widen before recessions, making them valuable early warning indicators.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Wider spreads increase borrowing costs for businesses, which can slow investment, hiring, and economic growth.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Understanding credit spreads provides insight into market conditions beyond visible headlines and stock prices.</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}