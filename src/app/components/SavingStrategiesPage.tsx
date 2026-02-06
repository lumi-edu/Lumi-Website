import { Link } from './RouterLink';
import { ArrowRight, Award, Target, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function SavingStrategiesPage() {
  const lessons = [
    {
      number: '1',
      title: 'Why Saving Matters More Than You Think',
      description: 'Understand what saving actually does for you, why it reduces stress and increases flexibility, and why even small savings make a difference.'
    },
    {
      number: '2',
      title: 'Types of Savings Goals',
      description: 'Learn the difference between emergency savings and planned savings, short-term vs long-term goals, and how to prioritize them.'
    },
    {
      number: '3',
      title: 'Building an Emergency Fund',
      description: 'Discover what an emergency fund is, common emergencies people forget to plan for, and where to keep your emergency savings.'
    },
    {
      number: '4',
      title: 'Saving on Any Income',
      description: 'Learn how to save with limited or irregular income, adjust savings month to month, and why consistency matters more than amount.'
    },
    {
      number: '5',
      title: 'Paying Yourself First',
      description: 'Master the habit of saving first, automate your savings, and set realistic transfers that remove decision fatigue.'
    },
    {
      number: '6',
      title: 'Where to Put Your Savings',
      description: 'Explore checking vs savings accounts, high-yield options, and when to use multiple savings buckets for different goals.'
    },
    {
      number: '7',
      title: 'Staying Motivated While Saving',
      description: 'Use milestones and progress tracking, celebrate small wins, and avoid burnout while maintaining your savings momentum.'
    },
    {
      number: '8',
      title: 'What to Do When You Have to Use Savings',
      description: 'Learn when it is okay to use emergency savings, how to rebuild after using them, and turn setbacks into learning moments.'
    },
    {
      number: '9',
      title: 'Common Saving Mistakes',
      description: 'Recognize mistakes like saving too much too fast, not having clear goals, and giving up after a missed month.'
    },
    {
      number: '10',
      title: 'Creating a Sustainable Saving Plan',
      description: 'Combine saving with budgeting, adjust over time, plan for future goals, and build a saving routine that lasts.'
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
            Saving Strategies
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Learn how to build emergency funds, stay motivated, and develop consistent saving habits
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
              {/* Savings Strategy Selector */}
              <Link
                to="/savings-strategy-selector"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white rounded-lg p-8 shadow-sm border border-[#1C1C1C]/10 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#FFCFD0' }}
                  >
                    <Award className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-[#1C1C1C] opacity-60 uppercase tracking-wide">
                    Interactive Tool
                  </span>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-3">
                  Savings Strategy Selector
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-70">
                  Answer a few questions to find the saving method that fits your income, goals, and habits.
                </p>
                <div className="mt-6">
                  <span className="text-[#1C1C1C] hover:opacity-70 transition-opacity">
                    Access Resource →
                  </span>
                </div>
              </Link>

              {/* 30-Day Savings Challenge */}
              <Link
                to="/savings-challenge"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white rounded-lg p-8 shadow-sm border border-[#1C1C1C]/10 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#FFCFD0' }}
                  >
                    <Target className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-[#1C1C1C] opacity-60 uppercase tracking-wide">
                    Challenges
                  </span>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-3">
                  30-Day Savings Challenge
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-70">
                  Build a saving habit with daily challenges. Track your progress, build streaks, and choose your difficulty level.
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
          <h2 className="text-3xl md:text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.1px' }}>Lessons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <Link 
                key={lesson.number}
                to={`/saving-strategies/lesson-${lesson.number}`}
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
              Ready to build your savings?
            </h2>
            <p className="text-lg text-white mb-8 opacity-90">
              This module will help you understand why saving matters, build emergency funds, and develop habits that last.
            </p>
            <div className="bg-[#889063]/20 backdrop-blur border border-[#889063]/30 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-white text-lg">
                Start with Lesson 1 to discover why saving matters more than you think and how small steps lead to big results.
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
              <h3 className="text-xl text-[#354024] mb-3">Saving Fundamentals</h3>
              <p className="text-lg text-[#1C1C1C] opacity-80">
                Understand why saving matters, different types of savings goals, and how to save on any income level.
              </p>
            </div>
            <div className="bg-[#CFBB99]/30 rounded-lg p-6">
              <h3 className="text-xl text-[#354024] mb-3">Emergency Funds</h3>
              <p className="text-lg text-[#1C1C1C] opacity-80">
                Learn how to build an emergency fund, where to keep it, and what to do when you need to use it.
              </p>
            </div>
            <div className="bg-[#CFBB99]/30 rounded-lg p-6">
              <h3 className="text-xl text-[#354024] mb-3">Smart Strategies</h3>
              <p className="text-lg text-[#1C1C1C] opacity-80">
                Master the pay yourself first method, automate your savings, and choose the right accounts for your goals.
              </p>
            </div>
            <div className="bg-[#CFBB99]/30 rounded-lg p-6">
              <h3 className="text-xl text-[#354024] mb-3">Long-Term Success</h3>
              <p className="text-lg text-[#1C1C1C] opacity-80">
                Stay motivated, avoid common mistakes, and create a sustainable saving plan that grows with you.
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