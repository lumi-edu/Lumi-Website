import { Link } from './RouterLink';
import { ArrowRight, ChevronDown, ChevronUp, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function FinancialPlanningPage() {
  const lessons = [
    {
      number: '1',
      title: 'Setting Financial Goals',
      description: 'Short-term vs long-term goals, SMART goal framework, prioritizing goals, tracking progress, and adjusting plans as life changes.'
    },
    {
      number: '2',
      title: 'Creating a Personal Budget',
      description: 'Income tracking, expense categories, the 50/30/20 rule, budgeting methods, and building a realistic monthly budget.'
    },
    {
      number: '3',
      title: 'Building an Emergency Fund',
      description: 'Why emergency funds matter, how much to save, where to keep emergency money, and building savings gradually.'
    },
    {
      number: '4',
      title: 'Understanding Net Worth',
      description: 'Assets vs liabilities, calculating net worth, what net worth means, and tracking financial progress over time.'
    },
    {
      number: '5',
      title: 'Planning for Big Expenses',
      description: 'College costs, buying a car, moving out, weddings, and saving for major life purchases.'
    },
    {
      number: '6',
      title: 'Introduction to Retirement Planning',
      description: 'Why retirement planning starts early, compound interest benefits, 401(k) and IRA basics, and employer matching.'
    },
    {
      number: '7',
      title: 'Understanding Insurance Basics',
      description: 'Health insurance, auto insurance, renters insurance, life insurance, and how insurance protects your finances.'
    },
    {
      number: '8',
      title: 'Dealing with Financial Setbacks',
      description: 'Emergency handling, recovery strategies, maintaining positivity, learning from mistakes, and building resilience.'
    },
    {
      number: '9',
      title: 'Short-Term vs Long-Term Goals',
      description: 'Balancing immediate needs with future planning, timeline strategies, priority setting, and goal coordination.'
    },
    {
      number: '10',
      title: 'Making Big Financial Decisions',
      description: 'Evaluating major purchases, rent vs buy decisions, career changes, and avoiding emotional money choices.'
    },
    {
      number: '11',
      title: 'Financial Planning Tools and Apps',
      description: 'Budgeting apps, tracking tools, financial calculators, automation tools, and staying organized digitally.'
    },
    {
      number: '12',
      title: 'Building a Long-Term Financial Plan',
      description: 'Creating a comprehensive plan, reviewing and adjusting, life milestones, and staying committed to financial health.'
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
            Financial Planning
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Build a roadmap for your financial future with goal setting, budgeting, and long-term planning strategies
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
            <div className="grid md:grid-cols-1 gap-6 mb-8">
              <Link 
                to="/financial-plan-builder"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white rounded-lg p-6 shadow-sm border border-[#354024]/10 hover:shadow-md transition-shadow block"
              >
                <div className="mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#FFCFD0]"
                  >
                    <ClipboardCheck className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-[#354024] opacity-60 uppercase tracking-wide">
                    Interactive Tool
                  </span>
                </div>
                <h3 className="text-xl text-[#1C1C1C] mb-3">
                  Financial Plan Builder
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-70 leading-relaxed">
                  Build a simple plan you can actually follow with step-by-step guidance for goals, budget, savings, and actions. Your plan saves automatically and you can copy or print it.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#354024] font-semibold">
                  <span>Use this tool</span>
                  <ArrowRight className="w-4 h-4" />
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
                to={`/financial-planning/lesson-${lesson.number}`}
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

      {/* Module Overview */}
      <section className="px-6 py-12 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>What you'll learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Goal Setting & Budgeting</h3>
              <p className="text-lg text-[#1C1C1C] opacity-80">
                Set SMART financial goals, create realistic budgets, and track your progress toward financial success.
              </p>
            </div>
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Emergency & Big Expenses</h3>
              <p className="text-lg text-[#1C1C1C] opacity-80">
                Build emergency funds, plan for major purchases, and handle financial setbacks with confidence.
              </p>
            </div>
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Retirement & Insurance</h3>
              <p className="text-lg text-[#1C1C1C] opacity-80">
                Understand retirement planning basics, insurance essentials, and how to protect your financial future.
              </p>
            </div>
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Long-Term Planning</h3>
              <p className="text-lg text-[#1C1C1C] opacity-80">
                Make smart financial decisions, use planning tools effectively, and build a comprehensive financial plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Modules */}
      <section className="px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Explore other modules</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/saving-strategies" onClick={() => window.scrollTo(0, 0)} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-lg text-[#1C1C1C] mb-2 group-hover:text-[#354024] transition-colors">
                Saving Strategies
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-4">
                Build emergency funds and develop lasting saving habits
              </p>
              <div className="flex items-center gap-2 text-[#354024] font-semibold text-sm">
                <span>Start learning</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            
            <Link to="/budgeting-basics" onClick={() => window.scrollTo(0, 0)} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-lg text-[#1C1C1C] mb-2 group-hover:text-[#354024] transition-colors">
                Budgeting Basics
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-4">
                Track spending, set goals, and create a realistic plan
              </p>
              <div className="flex items-center gap-2 text-[#354024] font-semibold text-sm">
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
              <div className="flex items-center gap-2 text-[#354024] font-semibold text-sm">
                <span>Start learning</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}