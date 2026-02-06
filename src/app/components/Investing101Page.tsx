import { Link } from './RouterLink';
import { ArrowRight, ChevronDown, ChevronUp, Layers, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function Investing101Page() {
  const lessons = [
    {
      number: '1',
      title: 'What Investing Really Means',
      description: 'Understand investing as a long-term growth tool, not gambling. Learn the difference between saving and investing and how investing builds wealth over time.'
    },
    {
      number: '2',
      title: 'How Investing Actually Works',
      description: 'Discover what happens when you invest money, how ownership in companies works, and how investments grow in value.'
    },
    {
      number: '3',
      title: 'Types of Investments',
      description: 'Recognize the main investing options including stocks, bonds, mutual funds, and ETFs, with basic risk level comparisons.'
    },
    {
      number: '4',
      title: 'The Power of Compound Growth',
      description: 'See how small early investments grow big over time and why starting early matters more than the amount you invest.'
    },
    {
      number: '5',
      title: 'Risk and Why It Exists',
      description: 'Understand investment risk instead of being scared by it. Learn why markets fluctuate and how diversification lowers risk.'
    },
    {
      number: '6',
      title: 'What Is the Stock Market',
      description: 'Get big-picture clarity on what the stock market is, why companies are traded, and how prices change.'
    },
    {
      number: '7',
      title: 'Long-Term vs Short-Term Investing',
      description: 'Learn why investing is a long game, the dangers of day trading mindset, and the benefits of patience and consistency.'
    },
    {
      number: '8',
      title: 'How People Start Investing',
      description: 'Understand realistic starting points including brokerage accounts, retirement accounts, and why you do not need a lot to start.'
    },
    {
      number: '9',
      title: 'Common Beginner Investing Mistakes',
      description: 'Learn what to avoid including trying to get rich fast, emotional buying and selling, and not diversifying.'
    },
    {
      number: '10',
      title: 'Building Wealth Slowly and Safely',
      description: 'Leave confident and informed about consistency over time, diversification, patience, and investing as a long-term habit.'
    }
  ];

  const [expanded, setExpanded] = useState(false);

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
      <section className="px-6 py-16 md:px-12 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
            Investing 101
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Understand investing basics, reduce fear, and build confidence about growing money long term
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="px-6 py-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Expandable Header */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-[#354024]/10 mb-4"
          >
            <h2 className="text-3xl md:text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>Resources</h2>
            {expanded ? (
              <ChevronUp className="w-8 h-8 text-[#354024]" />
            ) : (
              <ChevronDown className="w-8 h-8 text-[#354024]" />
            )}
          </button>

          {/* Expandable Content */}
          {expanded && (
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Link 
                to="/investment-type-explorer"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white rounded-lg p-8 shadow-sm border border-[#1C1C1C]/10 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#FFCFD0' }}
                  >
                    <Layers className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-[#1C1C1C] opacity-60 uppercase tracking-wide">
                    Interactive Tool
                  </span>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-3">
                  Investment Type Explorer
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-70">
                  Learn how different investments work and which ones match your goals and timeline.
                </p>
                <div className="mt-6">
                  <span className="text-[#1C1C1C] hover:opacity-70 transition-opacity">
                    Access Resource →
                  </span>
                </div>
              </Link>

              <Link 
                to="/compound-growth-visual"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white rounded-lg p-8 shadow-sm border border-[#1C1C1C]/10 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#FFCFD0' }}
                  >
                    <TrendingUp className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-[#1C1C1C] opacity-60 uppercase tracking-wide">
                    Interactive Tool
                  </span>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-3">
                  Compound Growth Visual
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-70">
                  See how time and consistency shape long-term growth.
                </p>
                <div className="mt-6">
                  <span className="text-[#1C1C1C] hover:opacity-70 transition-opacity">
                    Access Resource →
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="px-6 py-12 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <Link 
                key={lesson.number}
                to={`/investing-101/lesson-${lesson.number}`}
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#889063] block group"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {lesson.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-[#1C1C1C] mb-2 group-hover:text-[#354024] transition-colors">
                      {lesson.title}
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-[#1C1C1C] opacity-70 mb-4">
                  {lesson.description}
                </p>
                <div className="flex items-center gap-2 text-[#354024] font-semibold text-lg group-hover:opacity-70 transition-opacity">
                  <span>Start lesson</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#354024] text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl mb-4" style={{ letterSpacing: '-0.89px' }}>
              Ready to start investing with confidence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              This module will help you understand investing basics, reduce fear, and build a foundation for long-term wealth.
            </p>
            <div className="bg-[#889063]/20 backdrop-blur border border-[#889063]/30 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-white text-lg">
                Start with Lesson 1 to learn what investing really means and why it matters for your financial future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module Overview */}
      <section className="px-6 py-12 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>What you'll learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Investing Fundamentals</h3>
              <p className="text-[#1C1C1C] opacity-80 text-lg">
                Understand what investing really is, how it works, and the main types of investments available to you.
              </p>
            </div>
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Growth and Risk</h3>
              <p className="text-[#1C1C1C] opacity-80 text-lg">
                Learn about compound growth, investment risk, diversification, and why markets fluctuate.
              </p>
            </div>
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Long-Term Strategy</h3>
              <p className="text-[#1C1C1C] opacity-80 text-lg">
                Discover why patience matters, the benefits of starting early, and long-term vs short-term approaches.
              </p>
            </div>
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Getting Started</h3>
              <p className="text-[#1C1C1C] opacity-80 text-lg">
                Learn how people start investing, common mistakes to avoid, and how to build wealth safely over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Modules */}
      <section className="px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Explore other modules</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/budgeting-basics" onClick={() => window.scrollTo(0, 0)} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-lg text-[#1C1C1C] mb-2 group-hover:text-[#354024] transition-colors">
                Budgeting Basics
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-4">
                Track spending, set goals, and create a realistic plan
              </p>
              <div className="flex items-center gap-2 text-[#354024] font-semibold text-lg">
                <span>Start learning</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            
            <Link to="/saving-strategies" onClick={() => window.scrollTo(0, 0)} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-lg text-[#1C1C1C] mb-2 group-hover:text-[#354024] transition-colors">
                Saving Strategies
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-4">
                Build emergency funds and develop consistent saving habits
              </p>
              <div className="flex items-center gap-2 text-[#354024] font-semibold text-lg">
                <span>Start learning</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            
            <Link to="/credit-debt" onClick={() => window.scrollTo(0, 0)} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-lg text-[#1C1C1C] mb-2 group-hover:text-[#354024] transition-colors">
                Credit and Debt
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-4">
                Understand credit and learn to manage debt responsibly
              </p>
              <div className="flex items-center gap-2 text-[#354024] font-semibold text-lg">
                <span>Start learning</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}