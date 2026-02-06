import { Link } from './RouterLink';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Valuation Dispersion: Why Some Stocks Are Priced Vastly Different Than Others",
      excerpt: "At any given moment, financial markets assign vastly different valuations to companies, even within the same industry. Some firms trade at extremely high multiples, while others with similar revenues or business models trade at much lower ones. The degree to which these valuation differences exist across the market is known as valuation dispersion.",
      date: "February 1, 2026",
      readTime: "8 min read",
      category: "Market Analysis",
      image: "#889063",
      link: "/blog/valuation-dispersion-article"
    },
    {
      id: 2,
      title: "Companies Increase Share Buybacks as Capital Spending Slows",
      excerpt: "Over the past several quarters, a noticeable shift has taken place in how many large U.S. companies are using their cash. Instead of directing funds toward new projects or expansion, firms across industries such as technology, consumer goods, and manufacturing have increased share buyback activity.",
      date: "January 31, 2026",
      readTime: "9 min read",
      category: "Corporate Finance",
      image: "#354024",
      link: "/blog/share-buybacks-article"
    },
    {
      id: 3,
      title: "Credit Spreads: How Markets Evaluate Risk Beneath the Surface",
      excerpt: "Market performance is often judged by visible measures such as price charts and daily headlines. Beneath these indicators, investors rely on less visible signals to assess risk. One of the most informative of these signals is the credit spread.",
      date: "January 30, 2026",
      readTime: "11 min read",
      category: "Credit Markets",
      image: "#FFCFD0",
      link: "/blog/credit-spreads-article"
    },
    {
      id: 4,
      title: "Liquidity Illusion and Liquidity Mismatch: The Hidden Risks Beneath Financial Stability",
      excerpt: "Liquidity is often treated as a given in modern finance. Investors assume they can sell assets when needed, businesses assume funding will remain available, and individuals assume their wealth will be accessible in emergencies. However, two closely related but frequently overlooked concepts challenge these assumptions: liquidity illusion and liquidity mismatch.",
      date: "January 28, 2026",
      readTime: "12 min read",
      category: "Risk Management",
      image: "#354024",
      link: "/blog/liquidity-article"
    },
    {
      id: 5,
      title: "U.S. Market Volatility Linked to Trade Policy: How Geopolitics Is Shaking Investor Confidence",
      excerpt: "In recent weeks, U.S. financial markets have experienced heightened volatility, defined as rapid and unpredictable price changes, following renewed trade tensions between the United States and several European countries. At the center of this market disruption are tariff threats connected to a geopolitical dispute involving Greenland.",
      date: "January 27, 2026",
      readTime: "15 min read",
      category: "Geopolitics",
      image: "#FFCFD0",
      link: "/blog/trade-policy-article"
    },
    {
      id: 6,
      title: "Global Markets React to Emerging Market Turmoil and U.S Tech Sell-Off",
      excerpt: "In recent days, global financial markets have experienced increased unpredictability as a result of a series of destabilizing events across both emerging and developed economies. In Indonesia, one of Southeast Asia's largest financial markets, an equity market decline peaked during the resignation of top financial regulators, raising concerns about market regulation, investor protection, and long-term stability.",
      date: "January 8, 2026",
      readTime: "12 min read",
      category: "Global Markets",
      image: "#889063",
      link: "/blog/emerging-markets-article"
    }
  ];

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

      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.1px' }}>
            Welcome to lumi's blog!
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80 max-w-3xl mx-auto">
            Explore articles about financial world events happening right now, insights from others' experience, and ultimately increase your financial knowledge!
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#354024] text-white rounded-lg overflow-hidden p-8 md:p-12">
            <span className="inline-block bg-[#FFCFD0] text-[#1C1C1C] px-3 py-1 rounded text-sm mb-4">
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl text-[#FFCFD0] mb-4" style={{ letterSpacing: '-0.1px' }}>
              Valuation Dispersion: Why Some Stocks Are Priced Vastly Different Than Others
            </h2>
            <p className="text-lg text-white opacity-90 mb-6">
              At any given moment, financial markets assign vastly different valuations to companies, even within the same industry. Some firms trade at extremely high multiples, while others with similar revenues or business models trade at much lower ones.
            </p>
            <div className="flex items-center gap-6 text-sm text-white opacity-80 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>February 1, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
            <Link 
              to="/blog/valuation-dispersion-article"
              onClick={scrollToTop}
              className="bg-[#FFCFD0] text-[#1C1C1C] px-6 py-3 rounded hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Read Article
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 py-12 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.1px' }}>Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: post.image }}>
                  <div className="w-20 h-20 bg-white/20 rounded-full"></div>
                </div>
                <div className="p-6">
                  <span className="inline-block text-sm text-[#1C1C1C] bg-[#CFBB99] px-3 py-1 rounded mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl text-[#354024] mb-3">
                    {post.title}
                  </h3>
                  <p className="text-lg text-[#1C1C1C] opacity-70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[#1C1C1C] opacity-60 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  {post.link ? (
                    <Link 
                      to={post.link}
                      onClick={scrollToTop}
                      className="text-[#354024] font-semibold hover:opacity-70 transition-opacity inline-flex items-center gap-2"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button className="text-[#354024] font-semibold hover:opacity-70 transition-opacity inline-flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}