import { Link } from './RouterLink';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import lumiLogo from "../assets/lumilogo.png";
import Footer from './Footer';

export default function TradePolicyArticlePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              Geopolitics
            </span>
            <h1 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
              U.S. Market Volatility Linked to Trade Policy: How Geopolitics Is Shaking Investor Confidence
            </h1>
            <div className="flex items-center gap-6 text-lg text-[#1C1C1C] opacity-60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>January 27, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>15 min read</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-8">
              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                In recent weeks, U.S. financial markets have experienced heightened volatility, defined as rapid and unpredictable price changes, following renewed trade tensions between the United States and several European countries. At the center of this market disruption are tariff threats connected to a geopolitical dispute involving Greenland. Although the issue may seem distant from Wall Street, it has produced immediate and tangible effects on global markets. The resulting sell-off marked one of the worst trading days for the S&P 500 in months, highlighting how closely intertwined geopolitics and financial markets have become.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Understanding the S&P 500</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                The S&P 500, short for Standard and Poor's 500, is a stock market index that tracks the performance of 500 of the largest publicly traded companies in the United States. It is designed to represent the overall health and direction of the U.S. stock market and, more broadly, the U.S. economy.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                In financial terms, the S&P 500 is a market-capitalization-weighted index. This means that companies with a higher total market value, calculated by multiplying stock price by the number of shares outstanding, have a greater impact on the index's movements. As a result, large companies such as Apple, Microsoft, Amazon, and Google influence the S&P 500 more significantly than smaller firms.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                In the real world, movements in the S&P 500 affect everyday people even if they do not actively trade stocks. Retirement accounts such as 401(k)s, pensions, mutual funds, and index funds are often tied to the S&P 500. When the index rises or falls, the value of these savings changes as well. Because the index includes companies from a wide range of sectors, including technology, healthcare, finance, and consumer goods, it is widely used as a benchmark for the overall performance of the U.S. corporate sector and economy.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                When the S&P 500 experiences a sharp decline, it often signals widespread investor concern about economic conditions. In contrast, strong gains usually reflect confidence in future growth and economic stability.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">A Sudden Market Reaction</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                U.S. stock markets fell sharply after reports surfaced that the United States was considering new tariffs on multiple European nations. Tariffs are taxes imposed on imported goods and are often used as political or economic tools to pressure other countries. However, they also raise costs for businesses that rely on international trade. Investors reacted quickly, pricing in the potential economic consequences of escalating trade barriers. The S&P 500 dropped significantly in a single session, while the Nasdaq experienced even steeper losses.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Understanding the Nasdaq</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                The Nasdaq is a major U.S. stock market and stock index best known for its heavy concentration of technology and growth-oriented companies. While the term Nasdaq refers both to the stock exchange itself and to indexes such as the Nasdaq Composite and the Nasdaq-100, it is most commonly associated with tracking technology-driven firms including Apple, Microsoft, NVIDIA, Amazon, Meta, and Tesla.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                From a financial perspective, Nasdaq indexes are also market-capitalization-weighted, meaning larger companies exert greater influence over index movements. Compared to the S&P 500, the Nasdaq includes a higher proportion of companies focused on innovation, software, semiconductors, biotechnology, and internet-based services. Because these firms often reinvest profits to support future growth rather than prioritize stability, Nasdaq stocks tend to be more volatile and experience larger price swings in response to economic news, interest rate changes, or trade policy developments.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                In practical terms, the Nasdaq serves as a key indicator of how the technology and growth sectors are performing. When the Nasdaq rises, it often reflects optimism about innovation, future earnings, and economic expansion. When it falls sharply, it can signal investor concern about rising costs, higher interest rates, or global disruptions that threaten long-term growth. Many retirement accounts, exchange-traded funds, and index funds are tied to Nasdaq performance, meaning its fluctuations directly affect personal savings and investment portfolios.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Why Technology Stocks Were Hit Hardest</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Technology stocks were among the hardest hit during the sell-off. Many large U.S. technology firms depend heavily on global supply chains, meaning their products are designed, manufactured, and assembled across multiple countries. Tariffs can disrupt these supply chains by increasing production costs or limiting access to foreign markets. For example, a tariff on imported components can raise the cost of producing smartphones, computers, or semiconductors.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                From a financial standpoint, higher costs reduce profit margins, which represent the portion of revenue a company retains after covering expenses. When investors expect profit margins to shrink, they often reassess a company's valuation, or perceived worth, which can lead to falling stock prices. As a result, even the threat of new tariffs can trigger sell-offs as investors revise expectations about future earnings.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Why Trade Policy Moves Markets So Strongly</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Trade policy has long influenced economic conditions, but in today's globalized system its impact on markets is amplified. Companies now operate across borders, sourcing materials from one country, manufacturing in another, and selling products worldwide. When tariffs are introduced or even suggested, they inject uncertainty into this interconnected system.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Markets are especially sensitive to uncertainty, which refers to situations where future outcomes are difficult to predict. In finance, uncertainty makes it harder for investors to estimate future cash flows, meaning the money a company is expected to generate over time. Because stock prices are largely based on expectations about future performance, increased uncertainty often leads to declines in equity markets.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                The Greenland-related dispute demonstrates how geopolitical issues that may appear unrelated to economics can quickly influence market behavior. Even if tariffs are never fully implemented, the possibility of trade restrictions can shape investor behavior, corporate planning, and market pricing almost immediately.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">The Shift to Safe-Haven Assets</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                As equity markets declined, investors shifted capital into safe-haven assets such as gold. Safe-haven assets are investments that tend to retain or increase value during periods of economic or political stress. Gold has historically played this role because it is not tied to any single government or currency.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                From a real-world perspective, this shift reflects fear and caution. When investors lose confidence in stocks, which are considered risk assets due to their price volatility, they seek stability rather than high returns. Government bonds and certain currencies are also commonly viewed as safe havens because they are perceived to carry lower risk during times of market turmoil.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                The rise in gold prices during this period suggests that investors were not only reacting to short-term news but were also protecting themselves against broader risks such as prolonged trade conflict or slower global economic growth.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Investor Confidence and Market Psychology</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                One of the most significant effects of trade-driven volatility is its impact on investor confidence, which describes how optimistic or pessimistic investors feel about future market conditions. Financial markets are shaped not only by concrete data such as earnings reports or inflation figures, but also by expectations and psychology.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                When geopolitical risks increase, confidence can deteriorate rapidly. This decline can become self-reinforcing, as falling markets may cause consumers and businesses to feel less secure, leading to reduced spending and investment. Companies may delay hiring, expansion, or capital investment decisions until uncertainty subsides.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                In real-world terms, this cautious behavior can slow economic growth. When businesses invest less and consumers spend less, overall economic activity declines, which can reinforce the market's initial concerns.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Broader Economic Implications</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Prolonged trade tensions extend beyond financial markets and affect everyday life. Tariffs often lead to higher prices for imported goods, costs that businesses may pass on to consumers. This contributes to inflation, which is a general rise in prices that reduces purchasing power.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Trade uncertainty also complicates decision-making for central banks, such as the Federal Reserve, which are responsible for managing monetary policy. If markets remain volatile and economic growth weakens, central banks may feel pressure to adjust interest rates to stabilize the economy. These decisions influence borrowing costs for mortgages, student loans, and businesses, directly linking global trade disputes to household finances.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">A Reflection of a Larger Trend</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                This market reaction is not an isolated incident but part of a broader trend in which geopolitics increasingly shapes financial outcomes. Trade wars, sanctions, and diplomatic disputes have repeatedly triggered market swings in recent years. Because information spreads rapidly and markets are highly interconnected, even regional political conflicts can produce global financial consequences.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                For investors, this environment has made risk management more complex. Traditional financial analysis must now be paired with an understanding of political and international developments. Awareness of geopolitical risk has become essential for navigating modern financial markets.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Looking Ahead</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Although markets may stabilize in the short term, uncertainty surrounding trade policy remains a significant risk. Future developments, including negotiations, retaliatory actions, or policy reversals, could either restore investor confidence or trigger further volatility.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Ultimately, this episode serves as a reminder that financial markets do not operate in isolation. Political decisions and international relationships can influence markets just as powerfully as economic data. As global connections deepen, volatility driven by geopolitics is likely to remain a defining feature of the financial landscape, shaping economic realities both on Wall Street and in everyday life.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-[#354024] rounded-lg p-8 text-center mb-8">
              <h3 className="text-2xl text-[#E5D7C4] mb-4 font-bold">Want to understand how markets work?</h3>
              <p className="text-lg text-[#E5D7C4] mb-6 opacity-90">
                Explore our comprehensive lessons on investing, market dynamics, and economic fundamentals.
              </p>
              <Link
                to="/learn"
                onClick={scrollToTop}
                className="inline-block bg-[#889063] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                Start Learning
              </Link>
            </div>

            {/* Back to Blog */}
            <div className="text-center">
              <Link
                to="/blog"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity text-lg font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to All Articles
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}