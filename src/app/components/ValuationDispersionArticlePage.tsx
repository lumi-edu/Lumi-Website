import { Link } from './RouterLink';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function ValuationDispersionArticlePage() {
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
              Market Analysis
            </span>
            <h1 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
              Valuation Dispersion: Why Some Stocks Are Priced Vastly Different Than Others
            </h1>
            <div className="flex items-center gap-6 text-lg text-[#1C1C1C] opacity-60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>February 1, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>8 min read</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-8">
              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                At any given moment, financial markets assign vastly different valuations to companies, even within the same industry. Some firms trade at extremely high multiples, while others with similar revenues or business models trade at much lower ones. The degree to which these valuation differences exist across the market is known as valuation dispersion.
              </p>

              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                Valuation dispersion helps explain why market performance can feel uneven and why indexes may hide significant differences beneath the surface. It is a concept frequently used by professional investors to assess how selectively markets are pricing companies.
              </p>

              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                Valuation dispersion offers a way to understand market dynamics that goes beyond headlines or index performance. It explains why market gains may feel concentrated and why experiences differ so widely across companies and sectors.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">What Valuation Dispersion Measures</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Valuation dispersion refers to the spread between how expensive the highly valued companies are compared to the least valued ones. These valuations are often measured using metrics such as price to earnings ratios or price to sales ratios.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                When valuation dispersion is high, the market is very different between companies. Certain firms command large premiums, while others are priced moderately or even discounted. When dispersion is low, valuations across companies cluster closer together.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Rather than focusing on whether the market is "up" or "down," valuation dispersion looks at how uneven pricing is.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Why Valuation Dispersion Changes Over Time</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Valuation dispersion is influenced by how markets assess future growth and durability of business models. Periods when investors strongly favor specific characteristics, like scale or recurring revenue, tend to produce wider dispersion.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                At other times, when markets treat companies more uniformly, dispersion narrows. This often occurs when broad economic forces dominate company specific factors, causing valuations to move more as one.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Importantly, valuation dispersion can change even if overall market levels remain stable. It reflects how selectively investors are pricing risk and opportunity, not just the direction of prices.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">How Valuation Dispersion Affects Market Behavior</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                High valuation dispersion often leads to uneven market performance. A small number of companies may fuel index gains, while many others stay behind. This can make markets appear strong on the surface while hiding weakness elsewhere.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                For active investors, high dispersion creates opportunities and risks. Correctly identifying which companies deserve valuation premiums becomes more important, as pricing differences have a larger impact on returns.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                By contrast, low dispersion tends to favor broader market exposure, as individual stock selection plays a smaller role in performance.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Implications Beyond Stock Picking</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Valuation dispersion also affects capital flows and corporate strategy. Companies trading at higher valuations often find it easier to raise capital and pursue acquisitions. Firms trading at lower valuations may face constraints, even if their underlying operations remain stable.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Over time, these differences can reinforce themselves. Valuation premiums can support expansion, while discounts can limit flexibility, shaping competitive outcomes across industries.
              </p>

              <h2 className="text-3xl text-[#354024] mt-12 mb-6 font-bold">Looking Ahead</h2>
              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                As markets continue to differentiate between business models, profit profiles, and growth expectations, valuation dispersion is likely to remain an important feature of market behavior. Monitoring how wide or narrow these valuation gaps become can provide insight into how selectively markets are dispersing capital.
              </p>

              <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                Recognizing valuation dispersion helps explain why market outcomes are rarely uniform and why understanding relative value is important to modern investing.
              </p>

              <div className="bg-[#889063] text-white rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Valuation dispersion measures the spread in how markets price different companies, revealing uneven pricing across the market.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>High dispersion occurs when certain firms command large premiums while others are priced at discounts, even within the same industry.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Valuation dispersion reflects how selectively investors price risk and opportunity based on business characteristics like scale and recurring revenue.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>High dispersion can make markets appear strong on the surface while hiding significant weakness in less favored companies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFCFD0] font-bold">•</span>
                    <span>Companies with higher valuations find it easier to raise capital and pursue growth, which can reinforce competitive advantages over time.</span>
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
