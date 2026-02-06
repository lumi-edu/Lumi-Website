import { Link } from './RouterLink';
import { ArrowLeft, Camera, DollarSign, TrendingDown, PiggyBank, CreditCard, Scale, CheckCircle, AlertCircle, Search, BarChart3, Activity, Shield } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function FinancialPlanningLesson3Page() {
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
              <Camera size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 3</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Assessing Your Current Financial Life</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~15 to 18 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Search size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>You cannot plan your future without understanding your present</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-8 text-lg">
            Before building a financial plan, you need a clear picture of where you stand right now.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">This means knowing:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
                <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
                <p style={{ color: '#E5D7C4' }} className="font-bold">How much money you earn</p>
              </div>
              <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
                <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
                <p style={{ color: '#E5D7C4' }} className="font-bold">Where your money goes</p>
              </div>
              <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
                <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
                <p style={{ color: '#E5D7C4' }} className="font-bold">What you owe</p>
              </div>
              <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
                <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
                <p style={{ color: '#E5D7C4' }} className="font-bold">What you own</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Financial planning starts with an honest assessment.
            </p>
          </div>
        </div>

        {/* Income Assessment */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <DollarSign size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Step 1: Track your income</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Income is money coming in. Understanding your income helps you know what you have to work with.
          </p>

          <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Common income sources for teens:</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Part-time job</p>
              <p style={{ color: '#E5D7C4' }} className="opacity-80">Regular paychecks from work</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Freelance work</p>
              <p style={{ color: '#E5D7C4' }} className="opacity-80">Gigs like tutoring or design</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Allowance</p>
              <p style={{ color: '#E5D7C4' }} className="opacity-80">Regular money from parents</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Gifts or bonuses</p>
              <p style={{ color: '#E5D7C4' }} className="opacity-80">Occasional money received</p>
            </div>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-center text-lg">
              Add up all income sources to calculate your monthly total.
            </p>
          </div>
        </div>

        {/* Income Example */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <h3 className="text-2xl mb-6 font-bold text-center" style={{ color: '#1C1C1C' }}>Example monthly income calculation</h3>
          
          <div className="space-y-3 mb-6">
            <div className="p-5 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold">Part-time job (15 hrs/week at $12/hr)</p>
              <p style={{ color: '#889063' }} className="font-bold text-xl">$720</p>
            </div>
            <div className="p-5 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold">Freelance tutoring</p>
              <p style={{ color: '#889063' }} className="font-bold text-xl">$100</p>
            </div>
            <div className="p-5 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold">Weekly allowance ($20/week)</p>
              <p style={{ color: '#889063' }} className="font-bold text-xl">$80</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="text-sm mb-2">Total Monthly Income</p>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-3xl">$900</p>
          </div>
        </div>

        {/* Expense Tracking */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingDown size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Step 2: Track your expenses</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Expenses are money going out. Most people underestimate how much they spend.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4">Track everything for 30 days:</p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#889063' }} className="font-bold">Fixed expenses</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm mt-2">Same every month</p>
              </div>
              <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#889063' }} className="font-bold">Variable expenses</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm mt-2">Changes monthly</p>
              </div>
              <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#889063' }} className="font-bold">Irregular expenses</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm mt-2">Occasional costs</p>
              </div>
            </div>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-4 font-bold text-lg">Common teen expenses:</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2">Transportation</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm">Gas, bus fare, rideshares</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2">Food and drinks</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm">Restaurants, coffee, snacks</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2">Entertainment</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm">Movies, concerts, subscriptions</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2">Phone bill</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm">Monthly service costs</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2">Clothing</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm">Clothes, shoes, accessories</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2">Personal care</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm">Haircuts, toiletries, cosmetics</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              Small purchases add up fast. Track everything.
            </p>
          </div>
        </div>

        {/* Expense Example */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#354024' }}>
          <h3 className="text-2xl mb-6 font-bold text-center" style={{ color: '#1C1C1C' }}>Example monthly expenses</h3>
          
          <div className="space-y-3">
            <div className="p-4 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }}>Transportation (gas)</p>
              <p style={{ color: '#889063' }} className="font-bold">$120</p>
            </div>
            <div className="p-4 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }}>Food and drinks out</p>
              <p style={{ color: '#889063' }} className="font-bold">$180</p>
            </div>
            <div className="p-4 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }}>Phone bill</p>
              <p style={{ color: '#889063' }} className="font-bold">$50</p>
            </div>
            <div className="p-4 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }}>Entertainment/subscriptions</p>
              <p style={{ color: '#889063' }} className="font-bold">$80</p>
            </div>
            <div className="p-4 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }}>Clothing</p>
              <p style={{ color: '#889063' }} className="font-bold">$100</p>
            </div>
            <div className="p-4 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }}>Personal care</p>
              <p style={{ color: '#889063' }} className="font-bold">$40</p>
            </div>
            <div className="p-4 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }}>Miscellaneous</p>
              <p style={{ color: '#889063' }} className="font-bold">$80</p>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="text-sm mb-2">Total Monthly Expenses</p>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-3xl">$650</p>
          </div>
        </div>

        {/* Assets and Liabilities */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Step 3: Assess assets and liabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Assets */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <PiggyBank size={32} style={{ color: '#1C1C1C' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Assets</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">Things you own with value</p>
              
              <div className="space-y-3">
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Cash</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Money in wallet or under mattress</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Bank accounts</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Checking and savings balances</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Investments</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Stocks, bonds, crypto</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Valuable items</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Electronics, car, equipment</p>
                </div>
              </div>
            </div>

            {/* Liabilities */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <div className="flex items-center gap-3 mb-6">
                <CreditCard size={32} style={{ color: '#1C1C1C' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Liabilities</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">Money you owe</p>
              
              <div className="space-y-3">
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Credit card debt</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Outstanding balances</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Loans</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Student, car, personal loans</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Money borrowed</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">From family or friends</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Payment plans</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Buy now pay later schemes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Your net worth = Assets minus Liabilities
            </p>
          </div>
        </div>

        {/* Net Worth Example */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Scale size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Net worth calculation example</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4">Assets</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p style={{ color: '#1C1C1C' }}>Savings account</p>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">$1,200</p>
                </div>
                <div className="flex justify-between">
                  <p style={{ color: '#1C1C1C' }}>Checking account</p>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">$300</p>
                </div>
                <div className="flex justify-between">
                  <p style={{ color: '#1C1C1C' }}>Car value</p>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">$3,000</p>
                </div>
                <div className="pt-3 mt-3 border-t-2 flex justify-between" style={{ borderColor: '#354024' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Total Assets</p>
                  <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">$4,500</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4">Liabilities</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p style={{ color: '#1C1C1C' }}>Car loan</p>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">$2,000</p>
                </div>
                <div className="flex justify-between">
                  <p style={{ color: '#1C1C1C' }}>Borrowed from parents</p>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">$500</p>
                </div>
                <div className="flex justify-between">
                  <p style={{ color: '#1C1C1C' }}>Credit card balance</p>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">$150</p>
                </div>
                <div className="pt-3 mt-3 border-t-2 flex justify-between" style={{ borderColor: '#354024' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Total Liabilities</p>
                  <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">$2,650</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-2">Net Worth = $4,500 - $2,650</p>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-3xl">$1,850</p>
          </div>
        </div>

        {/* Cash Flow Analysis */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Activity size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Step 4: Analyze your cash flow</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Cash flow is income minus expenses. This tells you if you're living within your means.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="p-6 rounded-lg border-4 text-center" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <CheckCircle size={32} style={{ color: '#354024' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-2">Positive cash flow</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm mb-3">Income exceeds expenses</p>
              <p style={{ color: '#1C1C1C' }} className="text-xs italic">You have money left to save</p>
            </div>

            <div className="p-6 rounded-lg border-4 text-center" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
              <AlertCircle size={32} style={{ color: '#354024' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-2">Neutral cash flow</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm mb-3">Income equals expenses</p>
              <p style={{ color: '#1C1C1C' }} className="text-xs italic">You're breaking even</p>
            </div>

            <div className="p-6 rounded-lg border-4 text-center" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <AlertCircle size={32} style={{ color: '#1C1C1C' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-2">Negative cash flow</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm mb-3">Expenses exceed income</p>
              <p style={{ color: '#1C1C1C' }} className="text-xs italic">You're spending more than you earn</p>
            </div>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-center text-lg">
              Using our example: $900 income - $650 expenses = $250 positive cash flow per month
            </p>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Why this assessment matters</h2>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0 mt-1" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1 text-lg">Reveals spending patterns</p>
                <p style={{ color: '#E5D7C4' }} className="opacity-80">See where money actually goes</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0 mt-1" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1 text-lg">Identifies problem areas</p>
                <p style={{ color: '#E5D7C4' }} className="opacity-80">Spot overspending categories</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0 mt-1" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1 text-lg">Shows saving capacity</p>
                <p style={{ color: '#E5D7C4' }} className="opacity-80">Know how much you can realistically save</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0 mt-1" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1 text-lg">Creates baseline for planning</p>
                <p style={{ color: '#E5D7C4' }} className="opacity-80">Foundation for future financial decisions</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              You cannot improve what you do not measure.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Income:</strong> Money coming in</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Expenses:</strong> Money going out</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Assets:</strong> Things you own with value</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Liabilities:</strong> Money you owe</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Net worth:</strong> Assets minus liabilities</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Cash flow:</strong> Income minus expenses</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <DollarSign size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Track all income sources</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingDown size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Monitor expenses for 30 days</span>
            </li>
            <li className="flex items-start gap-3">
              <PiggyBank size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>List all assets and liabilities</span>
            </li>
            <li className="flex items-start gap-3">
              <Scale size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Calculate net worth</span>
            </li>
            <li className="flex items-start gap-3">
              <Activity size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Analyze cash flow</span>
            </li>
            <li className="flex items-start gap-3">
              <BarChart3 size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Use data to inform financial plan</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What is the first step in assessing your financial life?</strong>
            </p>
            <div className="space-y-3">
              {['A) Buying investments', 'B) Tracking income and expenses', 'C) Getting a credit card', 'D) Ignoring your finances'].map((option) => {
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
              <strong>2. What does net worth equal?</strong>
            </p>
            <div className="space-y-3">
              {['A) Income minus expenses', 'B) Assets minus liabilities', 'C) Total monthly income', 'D) Total expenses'].map((option) => {
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
              <strong>3. What is positive cash flow?</strong>
            </p>
            <div className="space-y-3">
              {['A) Spending more than you earn', 'B) Income exceeds expenses', 'C) Having no expenses', 'D) Borrowing money'].map((option) => {
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
                  ? 'Perfect! You understand how to assess your financial situation.'
                  : 'Review the sections above to better understand financial assessment.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/financial-planning/lesson-2"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Creating a Personal Budget
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/financial-planning/lesson-4"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Building an Emergency Fund →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
