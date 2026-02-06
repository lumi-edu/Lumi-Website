import { Link } from './RouterLink';
import { ArrowLeft, Scale, TrendingDown, AlertTriangle, CreditCard, Target, Lock, CheckCircle, XCircle, Minus, Plus, DollarSign, Briefcase, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function FinancialPlanningLesson6Page() {
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
              <Scale size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 6</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Understanding Income Sources</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~18 to 22 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <DollarSign size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Income is the starting point of all financial planning</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Understanding where your money comes from and how to maximize it directly impacts your ability to save, invest, and reach goals.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg text-center">
              Financial plans only work when built on realistic income expectations.
            </p>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              The more you understand your income, the better you can plan.
            </p>
          </div>
        </div>

        {/* Types of Income */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Types of income</h2>
          
          <div className="space-y-6">
            {/* Earned Income */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <Briefcase size={32} style={{ color: '#889063' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Earned income</h3>
                  <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Money from working</p>
                </div>
              </div>

              <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Examples:</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Hourly wages</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Salary</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Tips</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Commissions</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Bonuses</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Freelance pay</p>
                </div>
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Key point:</p>
                <p style={{ color: '#1C1C1C' }}>Earned income requires active work and is taxed</p>
              </div>
            </div>

            {/* Passive Income */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#CFBB99', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
                  <TrendingUp size={32} style={{ color: '#CFBB99' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#354024' }}>Passive income</h3>
                  <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Money earned with minimal active work</p>
                </div>
              </div>

              <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Examples:</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Investment dividends</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Interest from savings</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Rental income</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Royalties</p>
                </div>
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Key point:</p>
                <p style={{ color: '#1C1C1C' }}>Passive income continues flowing even when not actively working</p>
              </div>
            </div>

            {/* Portfolio Income */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#354024', borderColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFBB99' }}>
                  <Target size={32} style={{ color: '#354024' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#E5D7C4' }}>Portfolio income</h3>
                  <p style={{ color: '#E5D7C4' }} className="opacity-80 text-lg">Money from investment gains</p>
                </div>
              </div>

              <p style={{ color: '#E5D7C4' }} className="mb-4 font-bold text-lg">Examples:</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Stock gains</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Bond interest</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Mutual fund profits</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Crypto gains</p>
                </div>
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Key point:</p>
                <p style={{ color: '#1C1C1C' }}>Portfolio income depends on market performance and investment decisions</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              Building multiple income streams creates financial security.
            </p>
          </div>
        </div>

        {/* Gross vs Net Income */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Gross income vs net income</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Gross Income */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-6">
                <Plus size={32} style={{ color: '#354024' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#354024' }}>Gross income</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">Total earnings before deductions</p>
              
              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-3">Example:</p>
                <p style={{ color: '#1C1C1C' }}>You work 20 hours/week at $15/hour</p>
                <p style={{ color: '#354024' }} className="font-bold text-2xl mt-3">$1,200/month gross</p>
              </div>

              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-sm">This is the number you see on job offers</p>
              </div>
            </div>

            {/* Net Income */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <Minus size={32} style={{ color: '#1C1C1C' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Net income (take-home pay)</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">What you actually receive after deductions</p>
              
              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-3">Deductions include:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <p style={{ color: '#E5D7C4' }}>Gross income</p>
                    <p style={{ color: '#889063' }} className="font-bold">$1,200</p>
                  </div>
                  <div className="flex justify-between">
                    <p style={{ color: '#E5D7C4' }}>- Federal taxes</p>
                    <p style={{ color: '#889063' }} className="font-bold">-$120</p>
                  </div>
                  <div className="flex justify-between">
                    <p style={{ color: '#E5D7C4' }}>- State taxes</p>
                    <p style={{ color: '#889063' }} className="font-bold">-$50</p>
                  </div>
                  <div className="flex justify-between">
                    <p style={{ color: '#E5D7C4' }}>- Social Security/Medicare</p>
                    <p style={{ color: '#889063' }} className="font-bold">-$90</p>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t-2" style={{ borderColor: '#889063' }}>
                    <p style={{ color: '#E5D7C4' }} className="font-bold">Net income</p>
                    <p style={{ color: '#889063' }} className="font-bold text-xl">$940</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="text-sm font-bold">Budget based on net income, not gross!</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Always budget using your net income to avoid overspending.
            </p>
          </div>
        </div>

        {/* Teen Income Sources */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Common income sources for teens</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Part-time jobs</p>
              <p style={{ color: '#1C1C1C' }}>Retail, food service, tutoring</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Gig work</p>
              <p style={{ color: '#1C1C1C' }}>Babysitting, dog walking, lawn care</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Freelancing</p>
              <p style={{ color: '#1C1C1C' }}>Graphic design, writing, coding</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Selling online</p>
              <p style={{ color: '#1C1C1C' }}>Handmade items, reselling products</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Allowance</p>
              <p style={{ color: '#1C1C1C' }}>Regular money from parents</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Gifts and holidays</p>
              <p style={{ color: '#1C1C1C' }}>Money received as presents</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Every income source matters when building a financial plan.
            </p>
          </div>
        </div>

        {/* Increasing Income */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Ways to increase income</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Growing your income gives you more resources to save, invest, and reach goals faster.
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">1</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Ask for more hours</p>
                <p style={{ color: '#1C1C1C' }}>If you have a part-time job, request additional shifts</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">2</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Learn new skills</p>
                <p style={{ color: '#1C1C1C' }}>Higher-skilled work pays more than basic jobs</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">3</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Start a side hustle</p>
                <p style={{ color: '#1C1C1C' }}>Add freelance or gig work on top of your main job</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">4</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Negotiate raises</p>
                <p style={{ color: '#1C1C1C' }}>As you gain experience, ask for higher pay</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">5</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Build passive income</p>
                <p style={{ color: '#1C1C1C' }}>Invest in assets that generate income over time</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">
              Your income potential grows as you develop skills and experience.
            </p>
          </div>
        </div>

        {/* Income Tracking */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Track all income sources</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Create a complete picture by listing every income source, no matter how small.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg mb-4">Monthly income tracking example:</p>
            
            <div className="space-y-3">
              <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Part-time job</p>
                <p style={{ color: '#354024' }} className="font-bold">$800</p>
              </div>
              <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Weekend tutoring</p>
                <p style={{ color: '#354024' }} className="font-bold">$120</p>
              </div>
              <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Allowance</p>
                <p style={{ color: '#354024' }} className="font-bold">$80</p>
              </div>
              <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Online sales</p>
                <p style={{ color: '#354024' }} className="font-bold">$50</p>
              </div>
              <div className="flex justify-between p-4 rounded border-t-2" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Total monthly income</p>
                <p style={{ color: '#354024' }} className="font-bold text-2xl">$1,050</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Knowing your total income helps you budget accurately.
            </p>
          </div>
        </div>

        {/* Income Pitfalls */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Common income mistakes</h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Budgeting based on gross income</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Always use net income for budgeting</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Relying on unstable income</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Build emergency fund if income fluctuates</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Not tracking irregular income</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Include all sources, even inconsistent ones</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Spending before it arrives</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Wait until money is actually in your account</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Lifestyle inflation</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Don't automatically spend more when you earn more</p>
            </div>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Earned income:</strong> Money from active work</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Passive income:</strong> Money with minimal effort</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Gross income:</strong> Total before deductions</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Net income:</strong> Take-home pay after taxes</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Portfolio income:</strong> Money from investments</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Side hustle:</strong> Additional income source</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <DollarSign size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Income is the foundation of financial planning</span>
            </li>
            <li className="flex items-start gap-3">
              <Briefcase size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Three types: earned, passive, portfolio</span>
            </li>
            <li className="flex items-start gap-3">
              <Minus size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Budget using net income, not gross</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Multiple income streams create security</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Track all income sources</span>
            </li>
            <li className="flex items-start gap-3">
              <Target size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Focus on increasing income over time</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What is the difference between gross and net income?</strong>
            </p>
            <div className="space-y-3">
              {['A) There is no difference', 'B) Gross is before taxes, net is after taxes', 'C) Net is always higher', 'D) Gross is take-home pay'].map((option) => {
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
              <strong>2. What is passive income?</strong>
            </p>
            <div className="space-y-3">
              {['A) Money from active work', 'B) Money earned with minimal active work', 'C) Only from jobs', 'D) Illegal income'].map((option) => {
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
              <strong>3. Which income should you use for budgeting?</strong>
            </p>
            <div className="space-y-3">
              {['A) Gross income', 'B) Net income', 'C) Expected future income', 'D) Income from last year'].map((option) => {
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
                  ? 'Perfect! You understand income sources and how to manage them.'
                  : 'Review the sections above to better understand income types and tracking.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/financial-planning/lesson-5"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Saving Strategies
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/financial-planning/lesson-7"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Managing Variable Income →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
