import { Link } from './RouterLink';
import { ArrowRight, Calculator, FileSpreadsheet, ClipboardList, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function BudgetingBasicsPage() {
  const lessons = [
    {
      number: '1',
      title: 'What Is a Budget (and Why It Actually Matters)',
      description: 'Learn what a budget really is, why it gives you control instead of limits, and how it applies to real-life situations.'
    },
    {
      number: '2',
      title: 'Setting Financial Goals Before You Budget',
      description: 'Discover why goals come first and how to set short-term and long-term goals that make saving purposeful.'
    },
    {
      number: '3',
      title: 'Understanding Your Income',
      description: 'Explore realistic income sources for teens, from allowances to part-time jobs, and learn how to work with irregular earnings.'
    },
    {
      number: '4',
      title: 'Tracking Your Spending',
      description: 'Start building awareness by learning the difference between fixed and variable expenses and simple tracking methods.'
    },
    {
      number: '5',
      title: 'Choosing a Budgeting Method',
      description: 'Compare popular budgeting methods like the 50/30/20 rule, zero-based budgeting, and envelope method to find what works for you.'
    },
    {
      number: '6',
      title: 'Building Your First Budget (Step-by-Step)',
      description: 'Put everything together to create your first realistic budget, adjust categories, and make it work for your life.'
    },
    {
      number: '7',
      title: 'Budgeting With Irregular Income',
      description: 'Master budgeting strategies for seasonal jobs, side gigs, and income that changes from month to month.'
    },
    {
      number: '8',
      title: 'Saving While Budgeting',
      description: 'Learn how to make saving realistic and automatic, build emergency funds, and use sinking funds for planned expenses.'
    },
    {
      number: '9',
      title: 'Common Budgeting Mistakes Teens Make',
      description: 'Avoid common pitfalls like overestimating income, forgetting small expenses, and giving up too quickly.'
    },
    {
      number: '10',
      title: 'Adjusting Your Budget Over Time',
      description: 'Understand why budgets need to change, how to do monthly reviews, and adapt to life changes with flexibility.'
    },
    {
      number: '11',
      title: 'Budgeting Tools & Templates',
      description: 'Get access to practical budgeting tools including spreadsheets, apps, paper methods, and downloadable templates.'
    },
    {
      number: '12',
      title: 'Sticking to Your Budget (Habits & Mindset)',
      description: 'Build lasting habits where consistency beats perfection, develop accountability, and track your progress over time.'
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
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.1px' }}>
            Budgeting Basics
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Learn how to track spending, set financial goals, and create a realistic budget that works
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
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Spending Tracker */}
              <a
                href="https://drive.google.com/file/d/1zLzs4yyj_tjhGpLjuMivoGu58yiFpJ_x/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-8 shadow-sm border border-[#1C1C1C]/10 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#FFCFD0' }}
                  >
                    <ClipboardList className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-[#1C1C1C] opacity-60 uppercase tracking-wide">
                    Templates
                  </span>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-3">
                  Spending Tracker
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-70">
                  Track your daily expenses and identify spending patterns to help you stay within your budget.
                </p>
                <div className="mt-6">
                  <span className="text-[#1C1C1C] hover:opacity-70 transition-opacity">
                    Access Resource →
                  </span>
                </div>
              </a>

              {/* Budget Calculator */}
              <Link
                to="/budget-calculator"
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
                    Calculators
                  </span>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-3">
                  50/30/20 Budget Calculator
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-70">
                  Calculate the ideal breakdown of your income into needs, wants, and savings using the popular 50/30/20 rule.
                </p>
                <div className="mt-6">
                  <span className="text-[#1C1C1C] hover:opacity-70 transition-opacity">
                    Access Resource →
                  </span>
                </div>
              </Link>

              {/* Budget Template */}
              <a
                href="https://drive.google.com/file/d/19K3gAjgdsSsouRz89OGfi6cvKwWgJVeV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-8 shadow-sm border border-[#1C1C1C]/10 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#FFCFD0' }}
                  >
                    <FileSpreadsheet className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-[#1C1C1C] opacity-60 uppercase tracking-wide">
                    Templates
                  </span>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-3">
                  Monthly Budget Template
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-70">
                  A comprehensive budget template to help you organize your income and expenses in one place.
                </p>
                <div className="mt-6">
                  <span className="text-[#1C1C1C] hover:opacity-70 transition-opacity">
                    Access Resource →
                  </span>
                </div>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="px-6 py-12 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.1px' }}>Lessons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <Link 
                key={lesson.number}
                to={`/budgeting-basics/lesson-${lesson.number}`}
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
                <div className="flex items-center gap-2 text-[#354024] font-semibold text-sm group-hover:opacity-70 transition-opacity">
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
            <h2 className="text-3xl md:text-4xl text-[#FFCFD0] mb-4" style={{ letterSpacing: '-0.1px' }}>
              Ready to take control of your money?
            </h2>
            <p className="text-lg text-white mb-8 opacity-90">
              This module will teach you how to create a budget that gives you control, not limits, and helps you reach your financial goals.
            </p>
            <div className="bg-[#889063]/20 backdrop-blur border border-[#889063]/30 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-white text-lg">
                Start with Lesson 1 to understand what budgeting really means and why it matters for your financial future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module Overview */}
      <section className="px-6 py-12 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.1px' }}>What you'll learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#CFBB99]/30 rounded-lg p-6">
              <h3 className="text-xl text-[#354024] mb-3">Budgeting Fundamentals</h3>
              <p className="text-lg text-[#1C1C1C] opacity-80">
                Understand what budgets are, set meaningful financial goals, and learn to track your income and expenses.
              </p>
            </div>
            <div className="bg-[#CFBB99]/30 rounded-lg p-6">
              <h3 className="text-xl text-[#354024] mb-3">Building Your Budget</h3>
              <p className="text-lg text-[#1C1C1C] opacity-80">
                Choose a budgeting method that fits your lifestyle and create your first realistic budget step by step.
              </p>
            </div>
            <div className="bg-[#CFBB99]/30 rounded-lg p-6">
              <h3 className="text-xl text-[#354024] mb-3">Practical Strategies</h3>
              <p className="text-lg text-[#1C1C1C] opacity-80">
                Learn to budget with irregular income, integrate saving into your plan, and access helpful tools and templates.
              </p>
            </div>
            <div className="bg-[#CFBB99]/30 rounded-lg p-6">
              <h3 className="text-xl text-[#354024] mb-3">Long-Term Success</h3>
              <p className="text-lg text-[#1C1C1C] opacity-80">
                Avoid common mistakes, adjust your budget over time, and build habits that make budgeting stick.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Modules */}
      <section className="px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.1px' }}>Explore other modules</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/saving-strategies" onClick={() => window.scrollTo(0, 0)} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-lg text-[#1C1C1C] mb-2 group-hover:text-[#354024] transition-colors">
                Saving Strategies
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-4">
                Build emergency funds and develop consistent saving habits
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
            
            <Link to="/credit-debt" onClick={() => window.scrollTo(0, 0)} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-lg text-[#1C1C1C] mb-2 group-hover:text-[#354024] transition-colors">
                Credit and Debt
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-4">
                Understand credit and learn to manage debt responsibly
              </p>
              <div className="flex items-center gap-2 text-[#354024] font-semibold text-sm">
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