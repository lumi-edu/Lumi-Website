import { Link } from './RouterLink';
import { Calculator, FileSpreadsheet, ClipboardList, Target, Award, Layers, TrendingUp, Gauge, DollarSign, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';
import { ArrowRight } from 'lucide-react';

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('budgeting-basics');

  const budgetingBasicsResources = [
    {
      title: 'Spending Tracker',
      description: 'Track your daily expenses and identify spending patterns to help you stay within your budget.',
      category: 'Templates',
      icon: ClipboardList,
      link: 'https://drive.google.com/file/d/1zLzs4yyj_tjhGpLjuMivoGu58yiFpJ_x/view',
      color: '#FFCFD0',
      isExternal: true
    },
    {
      title: '50/30/20 Budget Calculator',
      description: 'Calculate the ideal breakdown of your income into needs, wants, and savings using the popular 50/30/20 rule.',
      category: 'Calculators',
      icon: Calculator,
      link: '/budget-calculator',
      color: '#FFCFD0',
      fromResources: true
    },
    {
      title: 'Monthly Budget Template',
      description: 'A comprehensive budget template to help you organize your income and expenses in one place.',
      category: 'Templates',
      icon: FileSpreadsheet,
      link: 'https://drive.google.com/file/d/19K3gAjgdsSsouRz89OGfi6cvKwWgJVeV/view?usp=sharing',
      color: '#FFCFD0',
      isExternal: true
    }
  ];

  const savingStrategiesResources = [
    {
      title: 'Savings Strategy Selector',
      description: 'Answer a few questions to find the saving method that fits your income, goals, and habits.',
      category: 'Interactive Tool',
      icon: Award,
      link: '/savings-strategy-selector',
      color: '#FFCFD0',
      fromResources: true
    },
    {
      title: '30-Day Savings Challenge',
      description: 'Build a saving habit with daily challenges. Track your progress, build streaks, and choose your difficulty level.',
      category: 'Challenges',
      icon: Target,
      link: '/savings-challenge',
      color: '#FFCFD0',
      fromResources: true
    }
  ];

  const investing101Resources = [
    {
      title: 'Investment Type Explorer',
      description: 'Learn how different investments work and which ones match your goals and timeline.',
      category: 'Interactive Tool',
      icon: Layers,
      link: '/investment-type-explorer',
      color: '#FFCFD0',
      fromResources: true
    },
    {
      title: 'Compound Growth Visual',
      description: 'See how time and consistency shape long-term growth.',
      category: 'Interactive Tool',
      icon: TrendingUp,
      link: '/compound-growth-visual',
      color: '#FFCFD0',
      fromResources: true
    }
  ];

  const creditDebtResources = [
    {
      title: 'Credit Score Factor Simulator',
      description: 'Explore how different behaviors affect your credit score with interactive sliders and personalized guidance.',
      category: 'Interactive Tool',
      icon: Gauge,
      link: '/credit-score-simulator',
      color: '#FFCFD0',
      fromResources: true
    },
    {
      title: 'Debt Decision Lab',
      description: 'Compare debt payoff strategies and see how payments affect your timeline and total interest.',
      category: 'Interactive Tool',
      icon: Calculator,
      link: '/debt-decision-lab',
      color: '#FFCFD0',
      fromResources: true
    }
  ];

  const taxEssentialsResources = [
    {
      title: 'Paycheck Tax Estimator',
      description: 'Estimate your take-home pay with a clear breakdown of federal withholding, FICA, and state taxes.',
      category: 'Interactive Tool',
      icon: DollarSign,
      link: '/paycheck-tax-estimator',
      color: '#FFCFD0',
      fromResources: true
    },
    {
      title: 'W-4 Helper',
      description: 'Answer a few questions and get a simple "what to put on your W-4" summary you can copy or print.',
      category: 'Interactive Tool',
      icon: DollarSign,
      link: '/w4-helper',
      color: '#FFCFD0',
      fromResources: true
    }
  ];

  const financialPlanningResources = [
    {
      title: 'Financial Plan Builder',
      description: 'Build a simple plan you can actually follow with step-by-step guidance for goals, budget, savings, and actions.',
      category: 'Interactive Tool',
      icon: ClipboardCheck,
      link: '/financial-plan-builder',
      color: '#FFCFD0',
      fromResources: true
    }
  ];

  const tabs = [
    { id: 'budgeting-basics', label: 'Budgeting Basics', resources: budgetingBasicsResources },
    { id: 'saving-strategies', label: 'Saving Strategies', resources: savingStrategiesResources },
    { id: 'investing-101', label: 'Investing 101', resources: investing101Resources },
    { id: 'credit-debt', label: 'Credit & Debt', resources: creditDebtResources },
    { id: 'tax-essentials', label: 'Tax Essentials', resources: taxEssentialsResources },
    { id: 'financial-planning', label: 'Financial Planning', resources: financialPlanningResources }
  ];

  const currentResources = tabs.find(tab => tab.id === activeTab)?.resources || [];

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
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-6">
            Resources
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Explore our collection of interactive tools, calculators, and templates designed to support your financial literacy journey.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-6 pb-20 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="mb-12 border-b border-[#1C1C1C]/20">
            <div className="flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-2 text-xl transition-all ${
                    activeTab === tab.id
                      ? 'text-[#1C1C1C] border-b-4 border-[#354024]'
                      : 'text-[#1C1C1C] opacity-50 hover:opacity-70'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentResources.map((resource, index) => {
              const Icon = resource.icon;
              const isExternal = resource.isExternal || false;
              const fromResources = resource.fromResources || false;
              
              const cardContent = (
                <>
                  <div className="mb-4">
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: resource.color }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm text-[#1C1C1C] opacity-60 uppercase tracking-wide">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-2xl text-[#1C1C1C] mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-lg text-[#1C1C1C] opacity-70">
                    {resource.description}
                  </p>
                  <div className="mt-6">
                    <span className="text-[#1C1C1C] hover:opacity-70 transition-opacity">
                      Access Resource →
                    </span>
                  </div>
                </>
              );

              return isExternal ? (
                <a
                  key={index}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-[#1C1C1C]/10"
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  key={index}
                  to={resource.link}
                  onClick={() => window.scrollTo(0, 0)}
                  state={fromResources ? { fromResources: true } : undefined}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-[#1C1C1C]/10"
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 bg-[#354024] rounded-lg p-12 text-center">
            <h2 className="text-4xl text-[#FFCFD0] mb-4">
              More Resources Coming Soon
            </h2>
            <p className="text-xl text-[#FFCFD0] opacity-90 max-w-2xl mx-auto">
              We're constantly developing new tools and resources to support your financial education. Check back regularly for updates, or explore our learning modules to discover more.
            </p>
            <Link to="/learn">
              <button className="mt-8 bg-[#FFCFD0] text-[#354024] px-8 py-4 text-lg rounded hover:opacity-90 transition-opacity">
                Browse Learning Modules
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}