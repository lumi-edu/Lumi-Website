import { Link } from './RouterLink';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function LiquidityArticlePage() {
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
              Risk Management
            </span>
            <h1 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
              Liquidity Illusion and Liquidity Mismatch: The Hidden Risks Beneath Financial Stability
            </h1>
            <div className="flex items-center gap-6 text-lg text-[#1C1C1C] opacity-60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>January 28, 2026</span>
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
                Liquidity is often treated as a given in modern finance. Investors assume they can sell assets when needed, businesses assume funding will remain available, and individuals assume their wealth will be accessible in emergencies. However, two closely related but frequently overlooked concepts challenge these assumptions: liquidity illusion and liquidity mismatch. While each poses risks on its own, their interaction can amplify financial stress and turn manageable situations into crises.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Understanding Liquidity Illusion</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Liquidity illusion refers to the false belief that an asset can always be sold quickly and at a fair price. In calm market conditions, this belief appears justified. Stocks trade smoothly, exchange traded funds are easy to buy and sell, and credit flows freely. This creates the impression that liquidity is permanent.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Liquidity describes how easily an asset can be converted into cash without significantly affecting its price. Assets such as large company stocks or government bonds are considered liquid under normal conditions because there are many buyers and sellers. The illusion arises because liquidity is often visible only when markets are stable. When uncertainty rises, buyers retreat, trading volumes shrink, and prices can fall sharply.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                In the real world, liquidity illusion explains why investors are often shocked during market downturns. Assets that appeared safe and flexible suddenly become difficult to sell without accepting large losses. This does not always mean the asset has lost its fundamental value. Instead, it reflects a temporary absence of buyers.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Understanding Liquidity Mismatch</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Liquidity mismatch occurs when the timing of financial needs does not align with how quickly assets can be converted into cash. It is a structural problem rather than a psychological one. Even valuable assets can create risk if they cannot be accessed when obligations come due.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Liquidity mismatch is common in institutions that fund long term investments with short term money. Banks provide a classic example. Depositors can withdraw funds at any time, while the bank's assets consist largely of long term loans. This system works as long as withdrawals remain predictable. When many depositors demand cash simultaneously, the mismatch becomes dangerous.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                For individuals, liquidity mismatch often appears in personal finance. A person may have most of their wealth tied up in retirement accounts, real estate, or private investments. On paper, they are financially secure. In practice, they may struggle to pay an unexpected expense because accessing those assets requires time, penalties, or forced sales.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">How the Two Concepts Interact</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Liquidity illusion and liquidity mismatch are closely connected and often reinforce each other. Liquidity illusion encourages people and institutions to underestimate liquidity mismatch. When assets appear easy to sell, it feels safe to rely on them to meet short term needs. This leads to portfolios, balance sheets, and financial plans that are more fragile than they seem.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                When stress enters the system, the illusion breaks. Assets become illiquid precisely when liquidity is most needed. At that point, liquidity mismatch becomes visible and painful. The inability to convert assets into cash forces individuals or institutions to sell at unfavorable prices, borrow at high costs, or default on obligations.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                This interaction is especially dangerous because it unfolds quickly. What begins as a temporary market disruption can escalate into a broader financial problem as forced selling drives prices lower, which further reduces liquidity. This feedback loop has played a role in past financial crises and continues to shape market behavior today.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Real World Examples</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                During market downturns, investors often assume they can exit positions easily. When prices begin to fall, many attempt to sell at once. Liquidity evaporates, bid prices drop, and assets trade well below recent values. Investors who needed cash discover that their perceived liquidity was an illusion.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                In personal finance, the same dynamic appears during job losses or medical emergencies. Individuals who relied on investments or property as backup liquidity may find themselves unable to access funds quickly. Selling a house, withdrawing from retirement accounts, or exiting private investments takes time and often comes with financial penalties. The mismatch between cash needs and asset accessibility becomes a source of stress.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                At a systemic level, liquidity illusion and mismatch can affect entire economies. When institutions rely on continuous access to short term funding, any disruption can force asset sales. These sales reduce prices, weaken balance sheets, and spread instability across markets.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Why It Matters</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Understanding the interaction between liquidity illusion and liquidity mismatch is essential for financial resilience. It explains why emergency funds are necessary even for wealthy individuals. It clarifies why diversification alone does not eliminate risk. It also shows why access to cash can matter more than total net worth during periods of uncertainty.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                For investors, this awareness encourages more balanced portfolios that consider both return and accessibility. For individuals, it highlights the importance of aligning assets with potential cash needs. For institutions, it underscores the need for careful funding structures and stress testing.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                In a broader sense, these concepts remind us that financial stability depends not only on value, but on timing. The ability to act at the right moment often determines whether a financial challenge remains manageable or becomes a crisis.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Looking Ahead</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                As markets become more complex and interconnected, liquidity risks are likely to grow more significant. New financial products, faster trading, and global capital flows can create the appearance of constant liquidity while masking deeper mismatches.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Recognizing liquidity illusion and liquidity mismatch does not eliminate risk, but it makes risk visible. In a financial world that often prioritizes growth and efficiency, understanding these hidden dynamics can provide a crucial margin of safety.
              </p>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Ultimately, true financial security is not just about how much wealth exists, but about whether that wealth is available when it is needed most.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-[#354024] rounded-lg p-8 text-center mb-8">
              <h3 className="text-2xl text-[#E5D7C4] mb-4 font-bold">Want to learn more about financial concepts?</h3>
              <p className="text-lg text-[#E5D7C4] mb-6 opacity-90">
                Explore our comprehensive lessons on investing, saving, and financial planning.
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