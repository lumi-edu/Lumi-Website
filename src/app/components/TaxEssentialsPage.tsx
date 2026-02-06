import { Link } from './RouterLink';
import { ArrowRight, ChevronDown, ChevronUp, DollarSign } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function TaxEssentialsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const lessons = [
    {
      number: '1',
      title: 'What Taxes Really Are',
      description: 'Purpose of taxes, federal vs state vs local, sales tax vs income tax, government services funding, and who is required to pay taxes.'
    },
    {
      number: '2',
      title: 'Understanding Your Paycheck',
      description: 'Gross pay vs net pay, federal withholding, state withholding, Social Security tax, Medicare tax, and why paychecks are smaller than salary.'
    },
    {
      number: '3',
      title: 'W-4 Form Explained',
      description: 'What a W-4 is, why you fill it out at jobs, how withholding choices affect refunds or taxes owed, and common W-4 mistakes.'
    },
    {
      number: '4',
      title: 'Types of Income You Must Report',
      description: 'Job income (W-2), freelance or side income (1099), tips, interest income, and why all taxable income must be reported.'
    },
    {
      number: '5',
      title: 'What a Tax Return Is',
      description: 'Why you file a tax return, refund vs taxes owed, IRS basics, and filing deadlines.'
    },
    {
      number: '6',
      title: 'How to File Taxes',
      description: 'Collecting documents, using tax software, filing online, filing status basics, and submitting to IRS.'
    },
    {
      number: '7',
      title: 'Tax Deductions and Credits',
      description: 'What deductions are, what credits are, how they reduce taxes, and common credits for young people.'
    },
    {
      number: '8',
      title: 'Refunds Explained',
      description: 'Why refunds happen, overpaying taxes, direct deposit, and tracking refunds.'
    },
    {
      number: '9',
      title: 'Common Tax Mistakes',
      description: 'Forgetting income, filing late, incorrect forms, ignoring IRS letters, and claiming wrong status.'
    },
    {
      number: '10',
      title: 'Self Employment and Side Hustle Taxes',
      description: 'Paying taxes without employer withholding, estimated taxes, and why freelancers owe taxes later.'
    },
    {
      number: '11',
      title: 'Staying Organized for Taxes',
      description: 'Saving documents, tracking income, and keeping records for tax purposes.'
    },
    {
      number: '12',
      title: 'Tax Safety and Responsibility',
      description: 'IRS scams, filing honestly, legal consequences, and why taxes matter for adulthood.'
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
            Tax Essentials
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Understand how taxes work, what is taken from paychecks, and how to file correctly
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
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link
                to="/paycheck-tax-estimator"
                onClick={scrollToTop}
                state={{ fromModule: 'Tax Essentials' }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-[#354024]/10"
              >
                <div className="mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#FFCFD0]"
                  >
                    <DollarSign className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-[#354024] opacity-60 uppercase tracking-wide">
                    Interactive Tool
                  </span>
                </div>
                <h3 className="text-xl text-[#1C1C1C] mb-3">
                  Paycheck Tax Estimator
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-70 leading-relaxed">
                  Estimate your take-home pay with a clear breakdown of federal withholding, FICA, and state taxes.
                </p>
                <div className="mt-6">
                  <span className="text-[#1C1C1C] hover:opacity-70 transition-opacity">
                    Access Resource →
                  </span>
                </div>
              </Link>

              <Link
                to="/w4-helper"
                onClick={scrollToTop}
                state={{ fromModule: 'Tax Essentials' }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-[#354024]/10"
              >
                <div className="mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#FFCFD0]"
                  >
                    <DollarSign className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-[#354024] opacity-60 uppercase tracking-wide">
                    Interactive Tool
                  </span>
                </div>
                <h3 className="text-xl text-[#1C1C1C] mb-3">
                  W-4 Helper
                </h3>
                <p className="text-lg text-[#1C1C1C] opacity-70 leading-relaxed">
                  Answer a few questions and get a simple "what to put on your W-4" summary you can copy or print.
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
                to={`/tax-essentials/lesson-${lesson.number}`}
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
              Ready to understand taxes?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              This module will help you understand how taxes work, file correctly, and avoid costly mistakes.
            </p>
            <div className="bg-[#889063]/20 backdrop-blur border border-[#889063]/30 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-white text-lg">
                Start with Lesson 1 to learn what taxes really are and why understanding them is essential for your financial life.
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
              <h3 className="text-xl text-[#1C1C1C] mb-3">Tax Fundamentals</h3>
              <p className="text-[#1C1C1C] opacity-80 text-lg">
                Understand what taxes are, why they exist, different types of taxes, and how your paycheck is affected by withholding.
              </p>
            </div>
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Filing Basics</h3>
              <p className="text-[#1C1C1C] opacity-80 text-lg">
                Learn what a tax return is, how to file step by step, and understand deductions and credits that reduce your tax bill.
              </p>
            </div>
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Income Reporting</h3>
              <p className="text-[#1C1C1C] opacity-80 text-lg">
                Discover which types of income must be reported, how W-2 and 1099 forms work, and special considerations for side hustles.
              </p>
            </div>
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <h3 className="text-xl text-[#1C1C1C] mb-3">Avoiding Mistakes</h3>
              <p className="text-[#1C1C1C] opacity-80 text-lg">
                Learn common tax mistakes to avoid, how to stay organized, recognize IRS scams, and file responsibly to prevent legal trouble.
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