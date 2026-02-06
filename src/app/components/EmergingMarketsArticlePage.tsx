import { Link } from './RouterLink';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import lumiLogo from '../assets/lumilogo.png';
import Footer from './Footer';

export default function EmergingMarketsArticlePage() {
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
              Global Markets
            </span>
            <h1 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
              Global Markets React to Emerging Market Turmoil and U.S Tech Sell-Off
            </h1>
            <div className="flex items-center gap-6 text-lg text-[#1C1C1C] opacity-60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>January 8, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>12 min read</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-8">
              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                In recent days, global financial markets have experienced increased unpredictability as a result of a series of destabilizing events across both emerging and developed economies. In Indonesia, one of Southeast Asia's largest financial markets, an equity market decline peaked during the resignation of top financial regulators, raising concerns about market regulation, investor protection, and long-term stability. The sell-off erased tens of billions of dollars in market value in a matter of days and prompted a closer and more critical look at risk governance in emerging markets.
              </p>

              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                Simultaneously, U.S. equity markets faced pressure after several major technology firms reported earnings that fell short of investor expectations. The technology sector, which has played a central role in market gains over the past decade, experienced extensive declines as investors reassessed expectations for future growth and sustainability. These developments contributed to widespread declines across global equity indexes and reinforced caution in financial markets.
              </p>

              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                Although these events originated in different regions and had different underlying causes, they highlight a defining feature of finance: the high degree of connection between global markets. Events in one market or sector can rapidly influence investor behavior worldwide, increasing uncertainty between asset classes (categories of investment based on financial characteristics).
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">A Sudden Market Reaction</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Financial markets responded quickly as investors evaluated how regulation instability in Indonesia and weakening growth in U.S. technology companies could affect future performance. Equity prices declined as investors reconsidered the balance between risk and expected returns, reflecting concerns about economic strength and the reliability of institutions.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                The speed of the reaction shows how quickly market views can shift when people's confidence is disrupted. Even when economic conditions have not clearly worsened, uncertainty can still lead to large market movements. Investors often respond by pulling back, shifting capital, or delaying investments, increasing short-term instability.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                In emerging markets, confidence plays a particularly important role. Foreign investment is often shaped by how stable and transparent a country's regulatory environment appears. When confidence in that stability weakens, investors may pull capital out more quickly. These outflows can deepen market declines and place added strain on financial systems, especially in newer economies.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Technology Sector Pressure and Market Leadership</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                The decline in U.S. technology stocks had an exceptionally large impact on broader markets because of the sector's significant weight in major equity indexes. For years, large technology firms have been viewed as market leaders, supported by global demand and strong balance sheets. When recent earnings reports failed to fully meet expectations, that long standing confidence shifted.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Technology companies are often priced based on anticipated future growth rather than current profits alone. As a result, even relatively small changes in growth can lead to sharp price movements. As expectations were revised, selling pressure increased.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                This highlights how reliance on a narrow group of leading sectors can make markets more sensitive to negative developments. When dominant sectors weaken, the impact isn't usually isolated. Instead, declines tend to spread across indexes and over investor confidence is influenced.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Broader Economic Implications</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Prolonged market instability can influence economic decision-making beyond financial markets. When uncertainty rises, businesses may delay expansion, scale back investment, or postpone hiring. In developing economies, instability can reduce foreign investment or complicate efforts to manage economic policy.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Households are not immune to these effects either. Market downturns can reduce the value of retirement savings and education funds, and they may also alter long-term financial planning. Even those who don't actively participate in markets can feel the effects indirectly through pension plans, mutual funds, or changes in employment conditions. In this way, disruptions in financial markets often extend into everyday economic life.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">The Role of Investor Sentiment</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Investor behavior is shaped not only by economic data but also by expectations and psychology. Periods of uncertainty tend to encourage more cautious behavior as investors prioritize preserving capital over growth. When confidence begins to fade, negative views can reinforce itself. Falling prices can start further caution, which then puts additional pressure on markets.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                This dynamic helps explain why markets can decline sharply even without clear evidence of an economic downturn. Prices often reflect collective expectations about the future rather than present conditions.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Looking Ahead</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Going forward, investors will closely watch regulation in Indonesia, upcoming earning reports from U.S. technology firms, and other indicators of global economic health. Market view is likely to remain sensitive to signals that help determine whether recent disruptions are temporary or point to more structural challenges.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                As global markets remain closely connected, developments in one region can continue to influence financial conditions elsewhere. Understanding how confidence, expectations, and uncertainty interact will remain essential for interpreting market movements in a complex financial environment.
              </p>

              <div className="bg-[#889063] text-white rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Global markets are highly interconnected—events in one region can rapidly affect markets worldwide.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Regulatory instability in emerging markets can trigger significant capital outflows and market declines.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Technology sector performance heavily influences broader market indexes due to its large market capitalization.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Investor sentiment and confidence play crucial roles in market movements, sometimes independent of economic fundamentals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Market volatility affects everyday people through retirement accounts, pensions, and employment conditions.</span>
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