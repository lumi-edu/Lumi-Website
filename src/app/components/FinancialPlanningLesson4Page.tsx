import { Link } from './RouterLink';
import { ArrowLeft, ArrowRight, Calculator, DollarSign, Repeat, Target, Sliders, CheckCircle, AlertTriangle, TrendingUp, PieChart, Shield } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function FinancialPlanningLesson4Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const correctAnswers = {
    1: 'B',
    2: 'B',
    3: 'B'
  };

  const handleAnswerSelect = (questionNum: number, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionNum]: answer }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allAnswered = Object.keys(correctAnswers).length === Object.keys(selectedAnswers).length;

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

      {/* Back Button */}
      <div className="px-6 py-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/financial-planning" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Financial Planning
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-8 py-12">
        {/* Lesson Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
              <Calculator size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 4</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Building a Budget That Aligns With Your Plan</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~15 to 18 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Target size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>A budget is how you turn goals into action</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            You already identified your financial goals and your current money situation.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="text-lg text-center">
              Now the budget becomes your tool to control where your money goes so it supports those goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg text-center border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <AlertTriangle size={28} style={{ color: '#1C1C1C' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-2">Without a budget</p>
              <p style={{ color: '#1C1C1C' }} className="opacity-80">Goals stay ideas.</p>
            </div>
            <div className="p-6 rounded-lg text-center border-4" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-2">With a budget</p>
              <p style={{ color: '#1C1C1C' }} className="opacity-80">Goals become reality.</p>
            </div>
          </div>
        </div>

        {/* What is a Budget */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Calculator size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>What is a budget?</h2>
          </div>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="text-lg text-center font-bold">
              A budget is a plan that tells every dollar where to go before you spend it.
            </p>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">A budget includes:</p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={24} style={{ color: '#354024' }} className="flex-shrink-0 mt-1" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-1 text-lg">Income</p>
                <p style={{ color: '#1C1C1C' }}>All money coming in</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={24} style={{ color: '#354024' }} className="flex-shrink-0 mt-1" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-1 text-lg">Fixed expenses</p>
                <p style={{ color: '#1C1C1C' }}>Regular bills that stay the same</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={24} style={{ color: '#354024' }} className="flex-shrink-0 mt-1" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-1 text-lg">Variable expenses</p>
                <p style={{ color: '#1C1C1C' }}>Costs that change month to month</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={24} style={{ color: '#354024' }} className="flex-shrink-0 mt-1" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-1 text-lg">Savings and goals</p>
                <p style={{ color: '#1C1C1C' }}>Money set aside for the future</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              A budget gives you permission to spend, not restrictions.
            </p>
          </div>
        </div>

        {/* The 50/30/20 Rule */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <PieChart size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>The 50/30/20 budgeting rule</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            One popular budgeting framework divides your after-tax income into three categories:
          </p>

          <div className="space-y-6">
            {/* 50% Needs */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold text-2xl">50%</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#E5D7C4' }}>Needs</h3>
              </div>
              <p style={{ color: '#E5D7C4' }} className="mb-4">Essential expenses you cannot avoid</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Housing/rent</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Utilities</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Groceries</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Transportation</p>
                </div>
              </div>
            </div>

            {/* 30% Wants */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-2xl">30%</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Wants</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4">Non-essential spending that improves life quality</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Dining out</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Entertainment</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Hobbies</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Shopping</p>
                </div>
              </div>
            </div>

            {/* 20% Savings */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#CFBB99' }} className="font-bold text-2xl">20%</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#354024' }}>Savings and debt repayment</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4">Money for your future and financial security</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Emergency fund</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Retirement savings</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Debt payments</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Goal savings</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              This is a guideline, not a rigid rule. Adjust percentages based on your situation.
            </p>
          </div>
        </div>

        {/* Budget Example */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold text-center" style={{ color: '#E5D7C4' }}>Example monthly budget: $900 income</h2>
          
          <div className="space-y-6">
            {/* Needs Section */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-center justify-between mb-4">
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Needs (50%) - $450</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Transportation (gas)</p>
                  <p style={{ color: '#889063' }} className="font-bold">$120</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Phone bill</p>
                  <p style={{ color: '#889063' }} className="font-bold">$50</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Groceries/lunches</p>
                  <p style={{ color: '#889063' }} className="font-bold">$150</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>School supplies</p>
                  <p style={{ color: '#889063' }} className="font-bold">$50</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Personal care</p>
                  <p style={{ color: '#889063' }} className="font-bold">$40</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Insurance</p>
                  <p style={{ color: '#889063' }} className="font-bold">$40</p>
                </div>
              </div>
            </div>

            {/* Wants Section */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <div className="flex items-center justify-between mb-4">
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Wants (30%) - $270</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Dining out</p>
                  <p style={{ color: '#CFBB99' }} className="font-bold">$100</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Entertainment/subscriptions</p>
                  <p style={{ color: '#CFBB99' }} className="font-bold">$80</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Clothing</p>
                  <p style={{ color: '#CFBB99' }} className="font-bold">$60</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Hobbies</p>
                  <p style={{ color: '#CFBB99' }} className="font-bold">$30</p>
                </div>
              </div>
            </div>

            {/* Savings Section */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-center justify-between mb-4">
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Savings (20%) - $180</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Emergency fund</p>
                  <p style={{ color: '#889063' }} className="font-bold">$100</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>College savings</p>
                  <p style={{ color: '#889063' }} className="font-bold">$50</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Car savings</p>
                  <p style={{ color: '#889063' }} className="font-bold">$30</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="text-lg mb-2">Total Budget</p>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-3xl">$900</p>
          </div>
        </div>

        {/* Budget Tips */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Sliders size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Tips for building your budget</h2>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#354024' }} className="font-bold text-xl">1</span>
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Start with your actual numbers</p>
                <p style={{ color: '#E5D7C4' }}>Use the income and expenses you tracked in Lesson 3</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#354024' }} className="font-bold text-xl">2</span>
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Pay yourself first</p>
                <p style={{ color: '#E5D7C4' }}>Set aside savings before spending on wants</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#354024' }} className="font-bold text-xl">3</span>
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Be realistic</p>
                <p style={{ color: '#E5D7C4' }}>Don't set yourself up to fail with unrealistic cuts</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#354024' }} className="font-bold text-xl">4</span>
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Build in flexibility</p>
                <p style={{ color: '#E5D7C4' }}>Include a miscellaneous category for unexpected costs</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#354024' }} className="font-bold text-xl">5</span>
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Review and adjust monthly</p>
                <p style={{ color: '#E5D7C4' }}>Your budget should evolve as your life changes</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              A budget is a living document, not set in stone.
            </p>
          </div>
        </div>

        {/* Common Budget Mistakes */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Common budgeting mistakes to avoid</h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Forgetting irregular expenses</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Annual subscriptions, gifts, car maintenance</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Being too restrictive</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Cutting out all fun leads to burnout</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Not tracking spending</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Creating a budget but not following it</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Ignoring small purchases</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">$5 here and there adds up quickly</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Giving up after one bad month</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Budgeting is a skill that improves with practice</p>
            </div>
          </div>
        </div>

        {/* Budget Tools */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Tools to help you budget</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Spreadsheets</p>
              <p style={{ color: '#1C1C1C' }}>Google Sheets or Excel templates</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Budgeting apps</p>
              <p style={{ color: '#1C1C1C' }}>Mint, YNAB, EveryDollar</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Pen and paper</p>
              <p style={{ color: '#1C1C1C' }}>Simple notebook tracking</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Bank app features</p>
              <p style={{ color: '#1C1C1C' }}>Built-in spending trackers</p>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              Use whichever tool you'll actually stick with.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Budget:</strong> Plan for your money</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Fixed expenses:</strong> Same costs each month</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Variable expenses:</strong> Costs that change</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Needs:</strong> Essential expenses</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Wants:</strong> Non-essential spending</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Pay yourself first:</strong> Save before spending</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <Calculator size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>A budget turns goals into action</span>
            </li>
            <li className="flex items-start gap-3">
              <PieChart size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>50/30/20 rule: needs, wants, savings</span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Pay yourself first</span>
            </li>
            <li className="flex items-start gap-3">
              <Sliders size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Be realistic and flexible</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Avoid common mistakes</span>
            </li>
            <li className="flex items-start gap-3">
              <Repeat size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Review and adjust monthly</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What does the 50/30/20 rule suggest for savings?</strong>
            </p>
            <div className="space-y-3">
              {['A) 50% of income', 'B) 20% of income', 'C) 30% of income', 'D) 10% of income'].map((option) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswers[1] === letter;
                const isCorrect = correctAnswers[1] === letter;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(1, letter)}
                    className="w-full text-left p-4 rounded border-2 transition-all text-lg"
                    style={{
                      backgroundColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#889063' : '#E5D7C4',
                      borderColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#354024' : '#889063',
                      color: showCorrect ? '#E5D7C4' : '#1C1C1C',
                      opacity: showIncorrect ? 0.7 : 1
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>2. What does "pay yourself first" mean?</strong>
            </p>
            <div className="space-y-3">
              {['A) Spend on wants first', 'B) Set aside savings before spending on wants', 'C) Pay bills last', 'D) Never save money'].map((option) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswers[2] === letter;
                const isCorrect = correctAnswers[2] === letter;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(2, letter)}
                    className="w-full text-left p-4 rounded border-2 transition-all text-lg"
                    style={{
                      backgroundColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#889063' : '#E5D7C4',
                      borderColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#354024' : '#889063',
                      color: showCorrect ? '#E5D7C4' : '#1C1C1C',
                      opacity: showIncorrect ? 0.7 : 1
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>3. How often should you review your budget?</strong>
            </p>
            <div className="space-y-3">
              {['A) Never', 'B) Monthly', 'C) Every 5 years', 'D) Only when you overspend'].map((option) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswers[3] === letter;
                const isCorrect = correctAnswers[3] === letter;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(3, letter)}
                    className="w-full text-left p-4 rounded border-2 transition-all text-lg"
                    style={{
                      backgroundColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#889063' : '#E5D7C4',
                      borderColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#354024' : '#889063',
                      color: showCorrect ? '#E5D7C4' : '#1C1C1C',
                      opacity: showIncorrect ? 0.7 : 1
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          {!showResults && (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="w-full py-4 rounded-lg transition-opacity disabled:opacity-50 text-lg font-bold"
              style={{
                backgroundColor: '#354024',
                color: '#E5D7C4'
              }}
            >
              {allAnswered ? 'Submit Answers' : 'Please answer all questions'}
            </button>
          )}

          {/* Results */}
          {showResults && (
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p className="text-2xl mb-2 font-bold" style={{ color: '#E5D7C4' }}>
                Your score: {Object.keys(correctAnswers).filter(q => selectedAnswers[parseInt(q)] === correctAnswers[parseInt(q)]).length} / {Object.keys(correctAnswers).length}
              </p>
              <p style={{ color: '#E5D7C4' }} className="text-lg">
                {Object.keys(correctAnswers).filter(q => selectedAnswers[parseInt(q)] === correctAnswers[parseInt(q)]).length === Object.keys(correctAnswers).length
                  ? 'Perfect! You understand how to build an effective budget.'
                  : 'Review the sections above to better understand budgeting principles.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/financial-planning/lesson-3"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Assessing Your Financial Life
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/financial-planning/lesson-5"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Managing Cash Flow →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
