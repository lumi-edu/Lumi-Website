import { Link } from './RouterLink';
import { ArrowRight, ChevronDown, ChevronUp, Gauge, Calculator } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';
import CreditScoreSimulator from './CreditScoreSimulator';

export default function CreditDebtPage() {
  const lessons = [
    {
      number: '1',
      title: 'What Credit Really Is',
      description: 'Understand credit as borrowed money with an agreement to repay. Learn the difference between credit and cash and why credit exists in modern finance.'
    },
    {
      number: '2',
      title: 'How Credit Cards Work',
      description: 'Discover how credit cards function, interest rates, minimum payments, and the relationship between credit card companies and users.'
    },
    {
      number: '3',
      title: 'Understanding Your Credit Score',
      description: 'Learn what credit scores measure, how they are calculated, and why they matter for loans, apartments, and financial opportunities.'
    },
    {
      number: '4',
      title: 'Building Credit Responsibly',
      description: 'Recognize smart ways to build credit early including paying on time, keeping balances low, and avoiding unnecessary credit applications.'
    },
    {
      number: '5',
      title: 'What Is Debt',
      description: 'Understand different types of debt including student loans, car loans, and credit card debt, and how debt impacts financial health.'
    },
    {
      number: '6',
      title: 'Good Debt vs Bad Debt',
      description: 'Learn the difference between debt that builds value and debt that creates financial stress, and how to evaluate borrowing decisions.'
    },
    {
      number: '7',
      title: 'Interest and How It Adds Up',
      description: 'See how interest compounds on unpaid balances and why minimum payments keep you in debt longer than expected.'
    },
    {
      number: '8',
      title: 'Debt Repayment Strategies',
      description: 'Explore proven methods like the debt snowball and debt avalanche to pay off debt faster and reduce financial stress.'
    },
    {
      number: '9',
      title: 'Avoiding Debt Traps',
      description: 'Identify warning signs of dangerous debt cycles including payday loans, maxing out cards, and borrowing to pay debts.'
    },
    {
      number: '10',
      title: 'Loans and Borrowing',
      description: 'Understand how loans work including principal, interest, terms, and the difference between secured and unsecured loans.'
    },
    {
      number: '11',
      title: 'How Debt Impacts Your Future',
      description: 'Discover how debt affects different life stages and the opportunity cost of carrying debt versus building wealth.'
    },
    {
      number: '12',
      title: 'Smart Credit Habits',
      description: 'Master the nine essential credit habits that build financial trust while protecting you from interest and stress.'
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
            Credit and Debt
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Understand credit basics, build strong credit history, and manage debt responsibly
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
                to="/credit-score-simulator"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white rounded-lg p-8 shadow-sm border border-[#1C1C1C]/10 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#FFCFD0' }}
                  >
                    <Gauge className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-[#1C1C1C] opacity-60 uppercase tracking-wide">
                    Interactive Tool
                  </span>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-3">
                  Credit Score Factor Simulator
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-70">
                  Explore how different behaviors affect your credit score with interactive sliders and personalized guidance.
                </p>
                <div className="mt-6">
                  <span className="text-[#1C1C1C] hover:opacity-70 transition-opacity">
                    Access Resource →
                  </span>
                </div>
              </Link>

              <Link 
                to="/debt-decision-lab"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white rounded-lg p-8 shadow-sm border border-[#1C1C1C]/10 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#FFCFD0' }}
                  >
                    <Calculator className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-[#1C1C1C] opacity-60 uppercase tracking-wide">
                    Interactive Tool
                  </span>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-3">
                  Debt Decision Lab
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-70">
                  Compare debt payoff strategies and see how payments affect your timeline and total interest.
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
                to={`/credit-debt/lesson-${lesson.number}`}
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

      {/* Interactive Resource Section */}
      <section className="px-6 py-12 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
              Interactive Resource
            </h2>
            <p className="text-xl text-[#1C1C1C] opacity-80 max-w-3xl mx-auto" style={{ letterSpacing: '-0.89px' }}>
              Explore how different behaviors affect your credit score with our interactive simulator
            </p>
          </div>
          <CreditScoreSimulator />
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#354024] text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl mb-4" style={{ letterSpacing: '-0.89px' }}>
              Ready to master credit and conquer debt?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              This module will help you understand credit, build a strong credit score, and manage debt strategically.
            </p>
            <div className="bg-[#889063]/20 backdrop-blur border border-[#889063]/30 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-white text-lg">
                Start with Lesson 1 to learn what credit really is and why understanding it matters for your financial future.
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
              <h3 className="text-xl text-[#1C1C1C] mb-3">Credit Fundamentals</h3>
              <p className="text-[#1C1C1C] opacity-80 text-lg">
                Understand what credit is, how credit cards work, and what your credit score means for your financial opportunities.
              </p>
            </div>
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Building Credit</h3>
              <p className="text-[#1C1C1C] opacity-80 text-lg">
                Learn responsible strategies to build strong credit early and maintain a healthy credit history over time.
              </p>
            </div>
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Understanding Debt</h3>
              <p className="text-[#1C1C1C] opacity-80 text-lg">
                Discover different types of debt, the difference between good and bad debt, and how interest compounds over time.
              </p>
            </div>
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Managing Debt</h3>
              <p className="text-[#1C1C1C] opacity-80 text-lg">
                Explore debt repayment strategies, avoid debt traps, and learn to use credit as a tool instead of a burden.
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
            
            <Link to="/investing-101" onClick={() => window.scrollTo(0, 0)} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-lg text-[#1C1C1C] mb-2 group-hover:text-[#354024] transition-colors">
                Investing 101
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-4">
                Understand investing basics and build long-term wealth
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