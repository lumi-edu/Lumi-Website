import { Link } from './RouterLink';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function ShareBuybacksArticlePage() {
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
              Corporate Finance
            </span>
            <h1 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
              Companies Increase Share Buybacks as Capital Spending Slows
            </h1>
            <div className="flex items-center gap-6 text-lg text-[#1C1C1C] opacity-60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>January 31, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>9 min read</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-8">
              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                Over the past several quarters, a noticeable shift has taken place in how many large U.S. companies are using their cash. Instead of directing funds toward new projects or expansion, firms across industries such as technology, consumer goods, and manufacturing have increased share buyback activity. Earnings calls and corporate filings suggest that returning money to shareholders has become a higher priority than capital spending.
              </p>

              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                Share buybacks reduce the number of shares available in the market. With fewer share counts, earnings are spread across a smaller base, which can make financial performance appear stronger even if overall growth slows. For companies with large cash reserves, buybacks have become an efficient way to distribute excess funds without committing to long-term projects.
              </p>

              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                At the same time, data on capital spending shows that spending on factories, equipment, and expansion has grown more slowly. While companies continue to invest selectively, the pace has eased compared to earlier periods. This shift reflects a change in how firms are balancing short-term financial outcomes against long-term growth.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Market Response and Corporate Decision-Making</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Announcements of large buyback programs have often been met with positive reactions in the stock market. Investors tend to reward companies that return cash, especially when alternative investment opportunities appear limited or less beneficial.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                The widening gap between shareholder payouts and business investment has prompted questions about what this means for the future. Buybacks can improve short-term financial metrics, but reduced spending on development and expansion may limit a company's ability to grow over time. The tension between these two outcomes has become a central idea in discussions of corporate strategy.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                What stands out is that market movement in this case is driven less by external events and more by internal decisions. Stock prices are reacting to how companies choose to use their resources instead of sudden changes in consumer demand or economic output.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Broader Economic Implications</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Corporate investment plays a major role in shaping economic growth. When firms invest less in equipment, technology, and expansion, productivity gains may slow down. Over time, this can affect job creation and wage growth, especially in industries that rely on continuous innovation.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                For workers, slower investment can mean fewer new facilities or delayed hiring. For the economy as a whole, prolonged underinvestment may limit long-term growth potential. Meanwhile, increased buybacks concentrate financial benefits among shareholders, which can influence how economic gains are distributed.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                These trends highlight the broader consequences of corporate financial decisions. Choices made at the company level can move outward, shaping employment patterns and overall economic performance.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Looking Ahead</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Upcoming earnings reports and corporate disclosures will shed more light on whether this pattern continues. Shifts in competition, tax policy, or technological demand could push companies to rethink how they allocate capital.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                As these decisions continue to influence both markets and the economy, paying attention to how companies use their resources will remain an important part of understanding market behavior.
              </p>

              <div className="bg-[#889063] text-white rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Many large U.S. companies are prioritizing share buybacks over capital spending on expansion and development.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Share buybacks reduce the number of shares in circulation, which can improve per-share earnings metrics even without actual growth.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Stock markets often react positively to buyback announcements, rewarding companies that return cash to shareholders.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Reduced capital spending may limit long-term productivity gains, job creation, and wage growth across the economy.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Corporate resource allocation decisions have significant effects on both market performance and broader economic outcomes.</span>
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