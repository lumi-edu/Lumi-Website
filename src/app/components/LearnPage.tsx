import { Link } from './RouterLink';
import lumiLogo from '../assets/lumilogo.png';
import Footer from './Footer';
import { Coins, FileText, TrendingUp, CreditCard, Target, BookOpen } from 'lucide-react';

export default function LearnPage() {
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
      <section className="px-6 py-16 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
            Start Your Financial Journey
          </h1>
          <p className="text-2xl text-[#1C1C1C] opacity-80">
            Build the financial skills you need to succeed, one lesson at a time.
          </p>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="px-6 py-12 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#1C1C1C] mb-12" style={{ letterSpacing: '-0.1px' }}>Learning Modules</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Module 1 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <Coins className="w-12 h-12 text-[#354024]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1C1C1C] mb-3">
                Budgeting Basics
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-6">
                Learn how to create and maintain a budget that works for your lifestyle and goals.
              </p>
              <Link to="/budgeting-basics">
                <button className="bg-[#354024] text-[#FFCFD0] px-6 py-2 text-lg rounded hover:opacity-90 transition-opacity">
                  Start Module
                </button>
              </Link>
            </div>

            {/* Module 2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <FileText className="w-12 h-12 text-[#354024]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1C1C1C] mb-3">
                Saving Strategies
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-6">
                Discover effective techniques to build your savings and create an emergency fund.
              </p>
              <Link to="/saving-strategies">
                <button className="bg-[#354024] text-[#FFCFD0] px-6 py-2 text-lg rounded hover:opacity-90 transition-opacity">
                  Start Module
                </button>
              </Link>
            </div>

            {/* Module 3 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <TrendingUp className="w-12 h-12 text-[#354024]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1C1C1C] mb-3">
                Investing 101
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-6">
                Understand the fundamentals of investing and how to grow your wealth over time.
              </p>
              <Link to="/investing-101">
                <button className="bg-[#354024] text-[#FFCFD0] px-6 py-2 text-lg rounded hover:opacity-90 transition-opacity">
                  Start Module
                </button>
              </Link>
            </div>

            {/* Module 4 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <CreditCard className="w-12 h-12 text-[#354024]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1C1C1C] mb-3">
                Credit & Debt
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-6">
                Master credit management and develop strategies to handle debt responsibly.
              </p>
              <Link to="/credit-debt">
                <button className="bg-[#354024] text-[#FFCFD0] px-6 py-2 text-lg rounded hover:opacity-90 transition-opacity">
                  Start Module
                </button>
              </Link>
            </div>

            {/* Module 5 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <Target className="w-12 h-12 text-[#354024]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1C1C1C] mb-3">
                Tax Essentials
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-6">
                Navigate tax basics and learn how to maximize your returns and deductions.
              </p>
              <Link to="/tax-essentials">
                <button className="bg-[#354024] text-[#FFCFD0] px-6 py-2 text-lg rounded hover:opacity-90 transition-opacity">
                  Start Module
                </button>
              </Link>
            </div>

            {/* Module 6 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <BookOpen className="w-12 h-12 text-[#354024]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1C1C1C] mb-3">
                Financial Planning
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-6">
                Create a comprehensive financial plan for your short and long-term goals.
              </p>
              <Link to="/financial-planning">
                <button className="bg-[#354024] text-[#FFCFD0] px-6 py-2 text-lg rounded hover:opacity-90 transition-opacity">
                  Start Module
                </button>
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