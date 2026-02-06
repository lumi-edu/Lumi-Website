import { Link } from './RouterLink';
import { useState, useEffect } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import lumiLogo from '../assets/lumilogo.png';
import Footer from './Footer';

interface Investment {
  id: string;
  name: string;
  risk: 'low' | 'medium' | 'high' | 'varies';
  skillLevel: 'Beginner-friendly' | 'Intermediate' | 'Advanced';
  what: string;
  money: string;
  bestFor: string;
  keyNote?: string;
  importantNote?: string;
  whyItMatters?: string;
}

const INVESTMENTS: Investment[] = [
  {
    id: "stocks",
    name: "Stocks",
    risk: "high",
    skillLevel: "Intermediate",
    what: "A stock is a small ownership piece of a company.",
    money: "You can make money if the stock price rises (capital gains) and sometimes through dividends.",
    bestFor: "Long-term growth, learning how markets work, and building ownership in businesses.",
    keyNote: "Buying a stock is not guaranteed profit and short-term wins are not the goal for most people."
  },
  {
    id: "bonds",
    name: "Bonds",
    risk: "low",
    skillLevel: "Beginner-friendly",
    what: "A bond is basically a loan you give to a government or company.",
    money: "You earn interest payments, and you get the bond's value back at maturity (in simple cases).",
    bestFor: "More stability, income, and balancing risk when you also own stocks.",
    keyNote: "Bonds can still lose value short term, especially when interest rates change."
  },
  {
    id: "mutualfunds",
    name: "Mutual Funds",
    risk: "medium",
    skillLevel: "Beginner-friendly",
    what: "A mutual fund pools money from many investors to buy a collection of assets.",
    money: "You benefit from how the fund's holdings perform, minus fees.",
    bestFor: "Diversification without picking individual stocks yourself.",
    keyNote: "Not all mutual funds are low cost. Fees matter a lot over time."
  },
  {
    id: "indexfunds",
    name: "Index Funds",
    risk: "medium",
    skillLevel: "Beginner-friendly",
    what: "An index fund is a fund designed to match a market index (like the S&P 500).",
    money: "You earn returns based on the market index performance, usually with lower fees.",
    bestFor: "Beginner-friendly long-term investing with diversification and typically low fees.",
    keyNote: "Index funds can still drop a lot during market downturns. That is normal."
  },
  {
    id: "etfs",
    name: "ETFs (Exchange-Traded Funds)",
    risk: "medium",
    skillLevel: "Beginner-friendly",
    what: "An ETF is a fund that trades like a stock and can hold many assets.",
    money: "You earn returns based on the ETF's holdings. Some pay dividends too.",
    bestFor: "Diversified investing with flexibility and often low fees.",
    keyNote: "ETFs are not automatically safer. A niche ETF can be very risky."
  },
  {
    id: "hysa",
    name: "High-Yield Savings Account (HYSA)",
    risk: "low",
    skillLevel: "Beginner-friendly",
    what: "A savings account that typically pays higher interest than a regular savings account.",
    money: "You earn interest. Your balance does not swing like the stock market.",
    bestFor: "Emergency fund, short-term savings, and money you cannot afford to lose.",
    keyNote: "A HYSA is not investing. It is saving. That is fine for the right goal."
  },
  {
    id: "cds",
    name: "Certificates of Deposit (CDs)",
    risk: "low",
    skillLevel: "Beginner-friendly",
    what: "A certificate of deposit is a savings product where you lock your money for a fixed period in exchange for a higher interest rate than a regular savings account.",
    money: "Interest paid over the term of the CD.",
    bestFor: "Short-term goals where you do not need immediate access to your money.",
    keyNote: "Early withdrawals usually come with penalties."
  },
  {
    id: "moneymarket",
    name: "Money Market Funds",
    risk: "low",
    skillLevel: "Beginner-friendly",
    what: "A money market fund invests in very short-term, low-risk debt like government securities.",
    money: "Small interest returns.",
    bestFor: "Parking cash temporarily with slightly better returns than savings.",
    importantNote: "Not the same as a money market account at a bank."
  },
  {
    id: "reits",
    name: "Real Estate Investment Trusts (REITs)",
    risk: "medium",
    skillLevel: "Intermediate",
    what: "A REIT owns or finances income-producing real estate and allows investors to earn from property without buying real estate directly.",
    money: "Dividends and property value growth.",
    bestFor: "Income-focused investors and diversification beyond stocks."
  },
  {
    id: "targetdate",
    name: "Target-Date Funds",
    risk: "medium",
    skillLevel: "Beginner-friendly",
    what: "A fund that automatically becomes more conservative as you approach a target year, often used for retirement accounts.",
    money: "Market growth adjusted automatically over time.",
    bestFor: "Hands-off investors who want automatic asset allocation."
  },
  {
    id: "treasury",
    name: "Treasury Securities (T-Bills, T-Notes, T-Bonds)",
    risk: "low",
    skillLevel: "Beginner-friendly",
    what: "Debt issued by the U.S. government with varying maturity lengths.",
    money: "Interest payments or discounted purchase price.",
    bestFor: "Very low-risk investing and capital preservation."
  },
  {
    id: "dividendstocks",
    name: "Dividend Stocks",
    risk: "medium",
    skillLevel: "Intermediate",
    what: "Stocks from companies that regularly pay shareholders a portion of profits.",
    money: "Dividend income plus potential price growth.",
    bestFor: "Income generation and long-term investing."
  },
  {
    id: "roboadvisors",
    name: "Robo-Advisors",
    risk: "medium",
    skillLevel: "Beginner-friendly",
    what: "Automated investment platforms that build and manage a diversified portfolio based on your goals and risk tolerance.",
    money: "Market growth minus small management fees.",
    bestFor: "Beginners who want guidance without managing investments themselves."
  },
  {
    id: "iras",
    name: "Individual Retirement Accounts (Traditional & Roth IRA)",
    risk: "varies",
    skillLevel: "Beginner-friendly",
    what: "Tax-advantaged investment accounts designed for long-term retirement savings.",
    money: "Tax benefits combined with market growth.",
    bestFor: "Long-term wealth building and tax efficiency."
  },
  {
    id: "commodities",
    name: "Commodities",
    risk: "high",
    skillLevel: "Advanced",
    what: "Investments in physical goods like gold, oil, or agricultural products.",
    money: "Price changes based on supply and demand.",
    bestFor: "Hedging inflation and diversification."
  },
  {
    id: "options",
    name: "Options (Introductory Awareness)",
    risk: "high",
    skillLevel: "Advanced",
    what: "Contracts that give the right to buy or sell an asset at a set price.",
    money: "Strategic use of price movements.",
    bestFor: "Experienced investors who fully understand risk.",
    importantNote: "High risk and not beginner-friendly. Included for awareness, not recommendation."
  },
  {
    id: "privateequity",
    name: "Private Equity (Conceptual Only)",
    risk: "high",
    skillLevel: "Advanced",
    what: "Investing directly in private companies, usually through funds.",
    bestFor: "Investors with a very long time horizon.",
    whyItMatters: "Explains how large institutions and wealthy investors invest differently.",
    money: "Returns from private company growth and exits."
  }
];

export default function InvestmentTypeExplorerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'low' | 'medium' | 'high' | 'beginner'>('all');
  const [openCards, setOpenCards] = useState<Set<string>>(new Set());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const riskBadge = (risk: string) => {
    return risk === "low" ? "Low risk" : risk === "medium" ? "Medium risk" : risk === "high" ? "High risk" : "Varies";
  };

  const matchesFilter = (item: Investment) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "beginner") return item.skillLevel === "Beginner-friendly";
    return item.risk === activeFilter;
  };

  const matchesSearch = (item: Investment) => {
    if (!searchQuery) return true;
    const searchText = [
      item.name, item.what, item.money, item.bestFor, item.keyNote, item.importantNote, item.whyItMatters
    ].join(" ").toLowerCase();
    return searchText.includes(searchQuery.toLowerCase());
  };

  const filteredInvestments = INVESTMENTS.filter(item => matchesFilter(item) && matchesSearch(item));

  const toggleCard = (id: string) => {
    setOpenCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setOpenCards(new Set(filteredInvestments.map(item => item.id)));
  };

  const collapseAll = () => {
    setOpenCards(new Set());
  };

  const resetFilters = () => {
    setSearchQuery('');
    setActiveFilter('all');
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

      {/* Main Content */}
      <main className="px-6 py-12 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            to="/investing-101"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Investing 101
          </Link>

          {/* Header */}
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-8">
            <h1 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
              Investment Type Explorer
            </h1>
            <p className="text-xl text-[#1C1C1C] opacity-70 leading-relaxed">
              Explore common investment types and understand how they work, what they're best for, and what beginners often misunderstand.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1C1C1C] opacity-40" />
                <input
                  type="search"
                  placeholder="Search (e.g., ETF, index fund, bonds)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-[#354024]/20 rounded-lg text-lg focus:outline-none focus:border-[#354024] transition-colors"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {[
                { value: 'all', label: 'All' },
                { value: 'low', label: 'Low risk' },
                { value: 'medium', label: 'Medium risk' },
                { value: 'high', label: 'High risk' },
                { value: 'beginner', label: 'Beginner-friendly' }
              ].map(filter => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value as typeof activeFilter)}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                    activeFilter === filter.value
                      ? 'bg-[#FFCFD0] border-[#FFCFD0] text-[#1C1C1C]'
                      : 'bg-white border-[#354024]/20 text-[#1C1C1C] hover:bg-[#CFBB99]/20'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Count and Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <p className="text-lg text-[#1C1C1C] opacity-70">
              Showing {filteredInvestments.length} of {INVESTMENTS.length}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={expandAll}
                className="px-4 py-2 bg-white text-[#354024] border border-[#354024]/20 rounded-lg font-semibold text-sm hover:bg-[#CFBB99]/20 transition-colors"
              >
                Expand all
              </button>
              <button
                onClick={collapseAll}
                className="px-4 py-2 bg-white text-[#354024] border border-[#354024]/20 rounded-lg font-semibold text-sm hover:bg-[#CFBB99]/20 transition-colors"
              >
                Collapse all
              </button>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-white text-[#354024] border border-[#354024]/20 rounded-lg font-semibold text-sm hover:bg-[#CFBB99]/20 transition-colors"
              >
                Reset filters
              </button>
            </div>
          </div>

          {/* Investment Cards Grid */}
          {filteredInvestments.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center border-2 border-dashed border-[#354024]/20">
              <p className="text-xl text-[#1C1C1C] opacity-70">
                No matches. Try a different search or reset filters.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 auto-rows-auto items-start">
              {filteredInvestments.map(item => {
                const isOpen = openCards.has(item.id);
                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-lg border transition-all mb-0 ${
                      isOpen ? 'border-[#354024]/20 shadow-md' : 'border-[#354024]/10 shadow-sm'
                    }`}
                  >
                    {/* Card Header */}
                    <button
                      onClick={() => toggleCard(item.id)}
                      className="w-full p-6 text-left hover:bg-[#E5D7C4]/30 transition-colors rounded-t-lg"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>
                            {item.name}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-[#CFBB99]/30 text-[#1C1C1C] text-sm rounded-full border border-[#354024]/10">
                              {riskBadge(item.risk)}
                            </span>
                            <span className="px-3 py-1 bg-[#CFBB99]/30 text-[#1C1C1C] text-sm rounded-full border border-[#354024]/10">
                              {item.skillLevel}
                            </span>
                          </div>
                        </div>
                        <span className="text-sm text-[#1C1C1C] opacity-60 font-semibold">
                          {isOpen ? 'Close' : 'Open'}
                        </span>
                      </div>
                    </button>

                    {/* Card Content */}
                    {isOpen && (
                      <div className="px-6 pb-6 space-y-3">
                        {[
                          { label: 'What it is', value: item.what },
                          { label: 'How you make money', value: item.money },
                          { label: 'Best for', value: item.bestFor },
                          item.keyNote && { label: 'Key tradeoff', value: item.keyNote },
                          item.importantNote && { label: 'Important note', value: item.importantNote },
                          item.whyItMatters && { label: 'Why it matters', value: item.whyItMatters }
                        ].filter(Boolean).map((row: any) => (
                          <div
                            key={row.label}
                            className="bg-[#E5D7C4]/40 rounded-lg p-4 border border-[#354024]/10"
                          >
                            <div className="text-sm font-semibold text-[#354024] mb-1">
                              {row.label}
                            </div>
                            <div className="text-base text-[#1C1C1C]">
                              {row.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Footer Note */}
          <div className="mt-8 bg-[#CFBB99]/30 rounded-lg p-6 border border-[#354024]/10">
            <p className="text-sm text-[#1C1C1C] opacity-70">
              Note: This tool is for education, not personalized financial advice. It explains concepts so you can make smarter decisions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}