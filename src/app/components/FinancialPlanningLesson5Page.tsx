import { Link } from './RouterLink';
import { ArrowLeft, Shield, PiggyBank, Zap, Layers, TrendingUp, DollarSign, CheckCircle, Target, Coins, Repeat, Calendar, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function FinancialPlanningLesson5Page() {
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
              <PiggyBank size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 5</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Saving Strategies and Preparing for Major Expenses</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~18 to 22 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Layers size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Saving is the foundation of every financial plan</h2>
          </div>

          <div className="space-y-6">
            <p style={{ color: '#E5D7C4' }} className="text-lg">
              You cannot reach goals, handle emergencies, or build financial security without saving.
            </p>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg text-center">
                Saving is not just putting money aside randomly. It is a structured strategy that prepares you for both expected and unexpected expenses.
              </p>
            </div>

            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
                Financial planning only works when saving is intentional.
              </p>
            </div>
          </div>
        </div>

        {/* Three Types of Savings */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Three types of savings</h2>
          
          <div className="space-y-6">
            {/* Emergency Savings */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <Shield size={32} style={{ color: '#889063' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Emergency savings</h3>
                  <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">For unexpected crises</p>
                </div>
              </div>

              <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Purpose:</p>
              <div className="p-5 rounded-lg mb-4" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }}>Covers unexpected expenses like car repairs, medical bills, or job loss</p>
              </div>

              <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Goal amount:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Starter: $500-$1,000</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Full: 3-6 months expenses</p>
                </div>
              </div>
            </div>

            {/* Goal-Based Savings */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#CFBB99', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
                  <Target size={32} style={{ color: '#CFBB99' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#354024' }}>Goal-based savings</h3>
                  <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">For specific future purchases</p>
                </div>
              </div>

              <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Examples:</p>
              <div className="space-y-3">
                <div className="p-4 rounded flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Car purchase</p>
                  <p style={{ color: '#CFBB99' }} className="font-bold">$5,000</p>
                </div>
                <div className="p-4 rounded flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>College tuition</p>
                  <p style={{ color: '#CFBB99' }} className="font-bold">$10,000</p>
                </div>
                <div className="p-4 rounded flex items-center justify-between" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Study abroad trip</p>
                  <p style={{ color: '#CFBB99' }} className="font-bold">$3,000</p>
                </div>
              </div>
            </div>

            {/* Long-Term Wealth Building */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#354024', borderColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFBB99' }}>
                  <TrendingUp size={32} style={{ color: '#354024' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#E5D7C4' }}>Long-term wealth building</h3>
                  <p style={{ color: '#E5D7C4' }} className="opacity-80 text-lg">For retirement and financial independence</p>
                </div>
              </div>

              <p style={{ color: '#E5D7C4' }} className="mb-4 font-bold text-lg">Includes:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Retirement accounts</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Investment accounts</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Home down payment</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Business startup fund</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              A complete savings strategy addresses all three types.
            </p>
          </div>
        </div>

        {/* Pay Yourself First */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Coins size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>The pay yourself first method</h2>
          </div>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="text-lg text-center font-bold">
              This strategy treats savings as your first expense, not what's left over at the end of the month.
            </p>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 font-bold text-lg">How it works:</p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#354024' }} className="font-bold text-xl">1</span>
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Get paid</p>
                <p style={{ color: '#E5D7C4' }}>Receive your income</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#354024' }} className="font-bold text-xl">2</span>
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Immediately transfer to savings</p>
                <p style={{ color: '#E5D7C4' }}>Move money before spending anything</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#354024' }} className="font-bold text-xl">3</span>
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Live on what remains</p>
                <p style={{ color: '#E5D7C4' }}>Budget and spend from what's left</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              This ensures savings happen every time, not just when convenient.
            </p>
          </div>
        </div>

        {/* Automation */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Repeat size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Automate your savings</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Automation removes temptation and ensures consistency.
          </p>

          <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Ways to automate:</p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Direct deposit split</p>
              <p style={{ color: '#1C1C1C' }}>Send a percentage of your paycheck directly to savings</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Automatic transfers</p>
              <p style={{ color: '#1C1C1C' }}>Schedule recurring transfers from checking to savings</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Round-up apps</p>
              <p style={{ color: '#1C1C1C' }}>Apps that round purchases to the nearest dollar and save the difference</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Employer retirement plans</p>
              <p style={{ color: '#1C1C1C' }}>401(k) contributions taken from paycheck before you see it</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">
              What you don't see, you won't spend.
            </p>
          </div>
        </div>

        {/* Saving for Major Expenses */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Calendar size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Preparing for major expenses</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Major expenses require planning months or years in advance.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4">Planning steps:</p>
            
            <div className="space-y-4">
              <div className="p-5 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold">1</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Identify the expense</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">What do you need to save for?</p>
                </div>
              </div>

              <div className="p-5 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold">2</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Calculate total cost</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Research and estimate the full amount needed</p>
                </div>
              </div>

              <div className="p-5 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold">3</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Set a timeline</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">When do you need the money by?</p>
                </div>
              </div>

              <div className="p-5 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold">4</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Calculate monthly savings</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Divide total cost by months until deadline</p>
                </div>
              </div>

              <div className="p-5 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold">5</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Open a separate account</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Keep goal money separate from daily spending</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Breaking big expenses into monthly savings makes them achievable.
            </p>
          </div>
        </div>

        {/* Major Expense Example */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold text-center" style={{ color: '#1C1C1C' }}>Example: Saving for a car</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-center justify-between mb-4">
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Total cost:</p>
                <p style={{ color: '#354024' }} className="font-bold text-2xl">$6,000</p>
              </div>
              <div className="flex items-center justify-between">
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Timeline:</p>
                <p style={{ color: '#354024' }} className="font-bold text-2xl">24 months</p>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-center mb-3">Monthly savings needed:</p>
              <p style={{ color: '#889063' }} className="font-bold text-4xl text-center">$250/month</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4 text-center">Breakdown:</p>
              <div className="space-y-3">
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Month 6</p>
                  <p style={{ color: '#889063' }} className="font-bold">$1,500 saved</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Month 12</p>
                  <p style={{ color: '#889063' }} className="font-bold">$3,000 saved</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Month 18</p>
                  <p style={{ color: '#889063' }} className="font-bold">$4,500 saved</p>
                </div>
                <div className="flex justify-between p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Month 24</p>
                  <p style={{ color: '#889063' }} className="font-bold">$6,000 saved ✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Saving Obstacles */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Common saving obstacles</h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Impulse spending</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Solution: Wait 24 hours before non-essential purchases</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Lifestyle inflation</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Solution: Keep saving rate the same even when income increases</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">No emergency fund</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Solution: Build starter fund before focusing on other goals</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Saving without purpose</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Solution: Assign every dollar in savings to a specific goal</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Comparing to others</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Solution: Focus on your own progress, not others' spending</p>
            </div>
          </div>
        </div>

        {/* Saving Tips */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Zap size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Quick tips to boost savings</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Save windfalls</p>
              <p style={{ color: '#E5D7C4' }}>Tax refunds, bonuses, gifts go to savings</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Cut one subscription</p>
              <p style={{ color: '#E5D7C4' }}>Redirect $10-15/month to savings</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Pack lunch</p>
              <p style={{ color: '#E5D7C4' }}>Save $100+ per month</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Sell unused items</p>
              <p style={{ color: '#E5D7C4' }}>Turn clutter into cash</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Start small</p>
              <p style={{ color: '#E5D7C4' }}>Even $25/month builds momentum</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Challenge yourself</p>
              <p style={{ color: '#E5D7C4' }}>No-spend days or weeks</p>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Small changes create big results over time.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Emergency fund:</strong> Savings for unexpected expenses</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Pay yourself first:</strong> Save before spending</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Automation:</strong> Automatic savings transfers</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Goal-based savings:</strong> Money for specific purchases</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Windfall:</strong> Unexpected money received</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Lifestyle inflation:</strong> Spending more as income rises</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <Shield size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Three types: emergency, goal-based, long-term</span>
            </li>
            <li className="flex items-start gap-3">
              <Coins size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Pay yourself first every time</span>
            </li>
            <li className="flex items-start gap-3">
              <Repeat size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Automate savings for consistency</span>
            </li>
            <li className="flex items-start gap-3">
              <Calendar size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Plan major expenses in advance</span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Divide big goals into monthly amounts</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Small changes add up over time</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What does "pay yourself first" mean?</strong>
            </p>
            <div className="space-y-3">
              {['A) Spend on wants before needs', 'B) Save money before spending on anything else', 'C) Pay bills last', 'D) Only save leftover money'].map((option) => {
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
              <strong>2. What is a starter emergency fund amount?</strong>
            </p>
            <div className="space-y-3">
              {['A) $50', 'B) $500-$1,000', 'C) $10,000', 'D) No specific amount needed'].map((option) => {
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
              <strong>3. Why automate savings?</strong>
            </p>
            <div className="space-y-3">
              {['A) To spend more money', 'B) To ensure consistency and remove temptation', 'C) It\'s not important', 'D) To track expenses only'].map((option) => {
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
                  ? 'Perfect! You understand saving strategies and preparation for major expenses.'
                  : 'Review the sections above to better understand saving principles.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/financial-planning/lesson-4"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Building a Budget
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/financial-planning/lesson-6"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Understanding Income Sources →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
