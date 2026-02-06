import { Link } from './RouterLink';
import { ArrowLeft, TrendingUp, TrendingDown, AlertTriangle, Calendar, DollarSign, Target, CheckCircle, Shield, PiggyBank, Calculator, Briefcase } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function FinancialPlanningLesson7Page() {
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
              <TrendingUp size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 7</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Managing Variable Income</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~18 to 22 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={36} style={{ color: '#889063' }} />
            <TrendingDown size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Not all income is consistent</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Many people earn different amounts each month. This is called variable income, and it requires a different financial planning approach.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg text-center">
              Budgeting with variable income is harder but absolutely possible with the right strategies.
            </p>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Financial stability is achievable even when income fluctuates.
            </p>
          </div>
        </div>

        {/* What is Variable Income */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Calendar size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>What is variable income?</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Variable income means your earnings change from month to month or week to week.
          </p>

          <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Common sources of variable income:</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="mb-2" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Freelance work</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Different projects pay different amounts</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="mb-2" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Commission-based jobs</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Sales, real estate, etc.</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="mb-2" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Gig economy work</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Rideshare, delivery, odd jobs</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="mb-2" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Seasonal work</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Tourism, retail, landscaping</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="mb-2" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Tips-based income</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Servers, bartenders, hairstylists</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="mb-2" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Hourly work with changing shifts</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Inconsistent hours each week</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              These income sources require special budgeting strategies.
            </p>
          </div>
        </div>

        {/* Income Example Comparison */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Income comparison</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fixed Income */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={32} style={{ color: '#354024' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#354024' }}>Fixed income</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="p-4 rounded flex justify-between" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }}>January</p>
                  <p style={{ color: '#354024' }} className="font-bold">$1,000</p>
                </div>
                <div className="p-4 rounded flex justify-between" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }}>February</p>
                  <p style={{ color: '#354024' }} className="font-bold">$1,000</p>
                </div>
                <div className="p-4 rounded flex justify-between" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }}>March</p>
                  <p style={{ color: '#354024' }} className="font-bold">$1,000</p>
                </div>
              </div>

              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-sm text-center">Predictable and easy to budget</p>
              </div>
            </div>

            {/* Variable Income */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp size={32} style={{ color: '#354024' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#354024' }}>Variable income</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="p-4 rounded flex justify-between" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>January</p>
                  <p style={{ color: '#CFBB99' }} className="font-bold">$1,400</p>
                </div>
                <div className="p-4 rounded flex justify-between" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>February</p>
                  <p style={{ color: '#CFBB99' }} className="font-bold">$750</p>
                </div>
                <div className="p-4 rounded flex justify-between" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>March</p>
                  <p style={{ color: '#CFBB99' }} className="font-bold">$1,100</p>
                </div>
              </div>

              <div className="p-4 rounded" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="text-sm text-center">Fluctuates and requires flexible planning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges of Variable Income */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Challenges of variable income</h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Hard to predict monthly expenses</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">You don't know how much you'll earn</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Risk of overspending in good months</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Spending too much when income is high</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Struggling to cover bills in lean months</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Not enough money when income drops</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Difficulty building consistent savings</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Saving becomes irregular</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Stress about financial stability</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Uncertainty creates anxiety</p>
            </div>
          </div>
        </div>

        {/* Strategy 1: Calculate Your Baseline */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Calculator size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Strategy 1: Calculate your baseline income</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Find the minimum amount you can count on earning each month.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4">How to calculate baseline:</p>
            
            <div className="space-y-4">
              <div className="p-5 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold">1</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Track income for 3-6 months</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Record every dollar earned</p>
                </div>
              </div>

              <div className="p-5 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold">2</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Find your lowest month</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">What was the least you earned?</p>
                </div>
              </div>

              <div className="p-5 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold">3</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Use that as your baseline</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Budget based on this minimum amount</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4 text-center">Example:</p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p style={{ color: '#1C1C1C' }}>January: $1,400</p>
              </div>
              <div className="flex justify-between">
                <p style={{ color: '#1C1C1C' }}>February: $750 (lowest)</p>
              </div>
              <div className="flex justify-between">
                <p style={{ color: '#1C1C1C' }}>March: $1,100</p>
              </div>
              <div className="flex justify-between">
                <p style={{ color: '#1C1C1C' }}>April: $950</p>
              </div>
              <div className="flex justify-between">
                <p style={{ color: '#1C1C1C' }}>May: $1,250</p>
              </div>
            </div>
            <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#889063' }} className="font-bold text-xl">Your baseline: $750/month</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              Budget all essential expenses within this baseline amount.
            </p>
          </div>
        </div>

        {/* Strategy 2: Income Smoothing */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Strategy 2: Income smoothing (leveling)</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Create artificial consistency by using a buffer account to even out fluctuations.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg mb-4">How income smoothing works:</p>
            
            <div className="space-y-4">
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2">Step 1: Open a buffer account</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm">Separate checking or savings for income</p>
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2">Step 2: Deposit ALL income here</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm">Every dollar goes to buffer account first</p>
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2">Step 3: Pay yourself a "salary"</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm">Transfer fixed amount to spending account monthly</p>
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2">Step 4: Leave excess in buffer</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm">Extra money stays to cover lean months</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              This creates predictable monthly income even when earnings vary.
            </p>
          </div>
        </div>

        {/* Income Smoothing Example */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold text-center" style={{ color: '#1C1C1C' }}>Income smoothing example</h2>
          
          <div className="space-y-4 mb-6">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex justify-between items-center mb-2">
                <p style={{ color: '#1C1C1C' }} className="font-bold">January income</p>
                <p style={{ color: '#354024' }} className="font-bold text-xl">$1,400</p>
              </div>
              <p style={{ color: '#1C1C1C' }} className="text-sm">→ Deposit to buffer account</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm">→ Transfer $750 to spending</p>
              <p style={{ color: '#354024' }} className="text-sm font-bold">→ $650 stays in buffer</p>
            </div>

            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex justify-between items-center mb-2">
                <p style={{ color: '#1C1C1C' }} className="font-bold">February income</p>
                <p style={{ color: '#354024' }} className="font-bold text-xl">$750</p>
              </div>
              <p style={{ color: '#1C1C1C' }} className="text-sm">→ Deposit to buffer account</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm">→ Transfer $750 to spending</p>
              <p style={{ color: '#354024' }} className="text-sm font-bold">→ Buffer unchanged ($650)</p>
            </div>

            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex justify-between items-center mb-2">
                <p style={{ color: '#1C1C1C' }} className="font-bold">March income</p>
                <p style={{ color: '#354024' }} className="font-bold text-xl">$600</p>
              </div>
              <p style={{ color: '#1C1C1C' }} className="text-sm">→ Deposit to buffer account</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm">→ Transfer $750 to spending</p>
              <p style={{ color: '#354024' }} className="text-sm font-bold">→ Buffer covers $150 gap (now $500)</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">
              You always have $750 to spend, regardless of what you actually earned that month.
            </p>
          </div>
        </div>

        {/* Strategy 3: Priority-Based Budgeting */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Target size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Strategy 3: Priority-based budgeting</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Rank expenses by importance and fund them in order as money comes in.
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg border-l-8" style={{ backgroundColor: '#889063', borderColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-lg">1</span>
                </div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Essential needs</p>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-2">Housing, utilities, food, transportation</p>
              <p style={{ color: '#354024' }} className="font-bold">Fund these FIRST</p>
            </div>

            <div className="p-6 rounded-lg border-l-8" style={{ backgroundColor: '#889063', borderColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-lg">2</span>
                </div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Minimum debt payments</p>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-2">Credit cards, loans, required payments</p>
              <p style={{ color: '#354024' }} className="font-bold">Fund these SECOND</p>
            </div>

            <div className="p-6 rounded-lg border-l-8" style={{ backgroundColor: '#889063', borderColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-lg">3</span>
                </div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Emergency savings</p>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-2">Even $25-50/month helps</p>
              <p style={{ color: '#354024' }} className="font-bold">Fund these THIRD</p>
            </div>

            <div className="p-6 rounded-lg border-l-8" style={{ backgroundColor: '#889063', borderColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-lg">4</span>
                </div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Wants and extras</p>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-2">Entertainment, dining out, subscriptions</p>
              <p style={{ color: '#354024' }} className="font-bold">Fund these LAST</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              If income is low, only fund priorities 1-2. Cut everything else.
            </p>
          </div>
        </div>

        {/* Strategy 4: Build a Larger Emergency Fund */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Strategy 4: Build a larger emergency fund</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Variable income requires more savings cushion than fixed income jobs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-3 text-lg">Fixed income goal</p>
              <p style={{ color: '#889063' }} className="font-bold text-3xl text-center">3-6 months</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm text-center mt-2">of expenses</p>
            </div>
            <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-3 text-lg">Variable income goal</p>
              <p style={{ color: '#354024' }} className="font-bold text-3xl text-center">6-12 months</p>
              <p style={{ color: '#1C1C1C' }} className="text-sm text-center mt-2">of expenses</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">
              Larger safety net protects you during lean months or slow seasons.
            </p>
          </div>
        </div>

        {/* Strategy 5: Track and Adjust */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Strategy 5: Track religiously and adjust frequently</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Variable income requires constant attention to your finances.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Track income weekly</p>
              <p style={{ color: '#1C1C1C' }}>Know exactly what's coming in</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Review budget mid-month</p>
              <p style={{ color: '#1C1C1C' }}>Adjust spending if needed</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Plan for slow periods</p>
              <p style={{ color: '#1C1C1C' }}>Know when income typically drops</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Save aggressively in good months</p>
              <p style={{ color: '#1C1C1C' }}>Build cushion when income is high</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">
              Flexibility and awareness are keys to managing variable income.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Variable income:</strong> Earnings that change monthly</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Baseline income:</strong> Minimum you can count on</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Income smoothing:</strong> Leveling fluctuations</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Buffer account:</strong> Holds excess income</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Priority budgeting:</strong> Funding by importance</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Gig economy:</strong> Freelance/contract work</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <TrendingUp size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Variable income requires different strategies</span>
            </li>
            <li className="flex items-start gap-3">
              <Calculator size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Calculate baseline income (lowest month)</span>
            </li>
            <li className="flex items-start gap-3">
              <PiggyBank size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Use income smoothing to create consistency</span>
            </li>
            <li className="flex items-start gap-3">
              <Target size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Fund expenses by priority</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Build 6-12 months emergency fund</span>
            </li>
            <li className="flex items-start gap-3">
              <Briefcase size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Track closely and adjust frequently</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What is baseline income?</strong>
            </p>
            <div className="space-y-3">
              {['A) Your highest month', 'B) Your lowest month of earnings', 'C) Your average income', 'D) Your desired income'].map((option) => {
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
              <strong>2. What is income smoothing?</strong>
            </p>
            <div className="space-y-3">
              {['A) Earning the same every month', 'B) Using a buffer account to create consistent monthly income', 'C) Working more hours', 'D) Ignoring fluctuations'].map((option) => {
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
              <strong>3. How large should an emergency fund be for variable income?</strong>
            </p>
            <div className="space-y-3">
              {['A) 1 month of expenses', 'B) 6-12 months of expenses', 'C) No emergency fund needed', 'D) $100 total'].map((option) => {
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
                  ? 'Perfect! You understand how to manage variable income effectively.'
                  : 'Review the sections above to better understand variable income strategies.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/financial-planning/lesson-6"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Understanding Income Sources
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/financial-planning/lesson-8"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Dealing with Financial Setbacks →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
