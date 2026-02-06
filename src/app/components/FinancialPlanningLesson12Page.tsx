import { Link } from './RouterLink';
import { ArrowLeft, Target, Calendar, TrendingUp, CheckCircle, AlertTriangle, RefreshCw, Map, Compass, Star, Award, Heart, Home } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function FinancialPlanningLesson12Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const correctAnswers = {
    1: 'B',
    2: 'C',
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
              <Map size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 12</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Building a Long-Term Financial Plan</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~25 to 30 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Compass size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Your financial plan is your roadmap to success</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            A long-term financial plan brings together everything you've learned: budgeting, saving, investing, debt management, taxes, and goal setting. It's a living document that guides your decisions and adapts as your life changes.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg text-center">
              This plan doesn't need to be complicated—it just needs to be clear, realistic, and flexible.
            </p>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              This lesson teaches you how to create a comprehensive financial plan that grows with you.
            </p>
          </div>
        </div>

        {/* What Is a Financial Plan */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Map size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>What is a long-term financial plan?</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            A financial plan is a written strategy that outlines:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Your current financial situation</p>
                <p style={{ color: '#E5D7C4' }}>Income, expenses, assets, debts, and net worth</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Your financial goals</p>
                <p style={{ color: '#E5D7C4' }}>Short-term, medium-term, and long-term objectives with timelines</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Your action steps</p>
                <p style={{ color: '#E5D7C4' }}>Specific strategies to reach each goal</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Your review schedule</p>
                <p style={{ color: '#E5D7C4' }}>When and how you'll check progress and make adjustments</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              Think of it as a GPS for your financial journey—it shows where you are, where you're going, and how to get there.
            </p>
          </div>
        </div>

        {/* The 7 Components */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>The 7 components of a complete financial plan</h2>
          
          <div className="space-y-6">
            {/* Component 1 */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">1</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Financial snapshot</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Document your current situation:
              </p>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• Monthly income (after taxes)</li>
                  <li>• Monthly expenses (fixed and variable)</li>
                  <li>• Total savings and investments</li>
                  <li>• Total debts (credit cards, loans, etc.)</li>
                  <li>• Net worth (assets minus debts)</li>
                </ul>
              </div>
            </div>

            {/* Component 2 */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">2</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Emergency fund plan</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Build your financial safety net:
              </p>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• Target amount: 3-6 months of expenses</li>
                  <li>• Current emergency fund balance</li>
                  <li>• Monthly contribution amount</li>
                  <li>• Timeline to reach full emergency fund</li>
                </ul>
              </div>
            </div>

            {/* Component 3 */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">3</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Debt payoff strategy</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Eliminate debt systematically:
              </p>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• List all debts with balances and interest rates</li>
                  <li>• Choose payoff method (avalanche or snowball)</li>
                  <li>• Monthly payment amounts for each debt</li>
                  <li>• Projected debt-free date</li>
                </ul>
              </div>
            </div>

            {/* Component 4 */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">4</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Savings and investment plan</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Grow wealth over time:
              </p>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• Short-term savings goals (1-3 years)</li>
                  <li>• Medium-term savings goals (3-10 years)</li>
                  <li>• Retirement savings target and timeline</li>
                  <li>• Investment strategy and asset allocation</li>
                  <li>• Monthly contribution to each account</li>
                </ul>
              </div>
            </div>

            {/* Component 5 */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">5</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Major life goals</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Plan for big milestones:
              </p>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• Homeownership plan and down payment goal</li>
                  <li>• Education funding (for yourself or children)</li>
                  <li>• Career development and skill investment</li>
                  <li>• Major purchases (car, travel, etc.)</li>
                  <li>• Life events (wedding, starting a family)</li>
                </ul>
              </div>
            </div>

            {/* Component 6 */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">6</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Risk management and insurance</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Protect your financial health:
              </p>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• Health insurance coverage</li>
                  <li>• Auto insurance (if you drive)</li>
                  <li>• Renters or homeowners insurance</li>
                  <li>• Life insurance (especially if others depend on you)</li>
                  <li>• Disability insurance for income protection</li>
                </ul>
              </div>
            </div>

            {/* Component 7 */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">7</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Review and adjustment schedule</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Keep your plan current:
              </p>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• Monthly budget review</li>
                  <li>• Quarterly goal progress check</li>
                  <li>• Annual comprehensive plan review</li>
                  <li>• Major life event plan adjustments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Creating Your Plan */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Target size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>How to create your financial plan</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Follow these steps to build your personalized plan:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">1</span>
                </div>
                <div>
                  <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Gather your financial information</p>
                  <p style={{ color: '#1C1C1C' }}>Collect bank statements, pay stubs, debt balances, investment accounts, and bills</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">2</span>
                </div>
                <div>
                  <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Calculate your net worth</p>
                  <p style={{ color: '#1C1C1C' }}>Total assets (what you own) minus total liabilities (what you owe)</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">3</span>
                </div>
                <div>
                  <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Define your values and priorities</p>
                  <p style={{ color: '#1C1C1C' }}>What matters most to you? Financial security? Travel? Family? Career growth?</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">4</span>
                </div>
                <div>
                  <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Set SMART goals</p>
                  <p style={{ color: '#1C1C1C' }}>Specific, Measurable, Achievable, Relevant, Time-bound goals for each priority</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">5</span>
                </div>
                <div>
                  <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Create action steps</p>
                  <p style={{ color: '#1C1C1C' }}>Break each goal into monthly or weekly tasks you can actually complete</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">6</span>
                </div>
                <div>
                  <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Write it down</p>
                  <p style={{ color: '#1C1C1C' }}>Use a document, spreadsheet, or app to record your entire plan</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">7</span>
                </div>
                <div>
                  <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Start immediately</p>
                  <p style={{ color: '#1C1C1C' }}>Take the first action step today—don't wait for the "perfect" time</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Your first plan doesn't have to be perfect. You'll refine it as you learn and grow.
            </p>
          </div>
        </div>

        {/* Reviewing and Adjusting */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <RefreshCw size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Reviewing and adjusting your plan</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Your financial plan should evolve with your life. Review and adjust regularly.
          </p>

          <div className="space-y-6">
            <div>
              <h3 style={{ color: '#1C1C1C' }} className="font-bold text-xl mb-4">Monthly review (15-30 minutes):</h3>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <ul style={{ color: '#E5D7C4' }} className="space-y-2">
                  <li>• Check if you stayed within budget</li>
                  <li>• Review account balances and net worth</li>
                  <li>• Confirm automatic savings and payments</li>
                  <li>• Adjust next month's budget if needed</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 style={{ color: '#1C1C1C' }} className="font-bold text-xl mb-4">Quarterly review (1-2 hours):</h3>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <ul style={{ color: '#E5D7C4' }} className="space-y-2">
                  <li>• Measure progress toward each goal</li>
                  <li>• Review investment performance</li>
                  <li>• Check debt payoff progress</li>
                  <li>• Celebrate wins and identify challenges</li>
                  <li>• Make small adjustments to stay on track</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 style={{ color: '#1C1C1C' }} className="font-bold text-xl mb-4">Annual review (3-4 hours):</h3>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <ul style={{ color: '#E5D7C4' }} className="space-y-2">
                  <li>• Full financial snapshot update</li>
                  <li>• Evaluate all goals and timelines</li>
                  <li>• Update net worth calculation</li>
                  <li>• Review insurance coverage needs</li>
                  <li>• Set new goals for the coming year</li>
                  <li>• Adjust investment allocations if needed</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 style={{ color: '#1C1C1C' }} className="font-bold text-xl mb-4">Major life event review:</h3>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="mb-3">Update your plan immediately when these happen:</p>
                <ul style={{ color: '#E5D7C4' }} className="space-y-2">
                  <li>• Job change (new income or benefits)</li>
                  <li>• Moving to a new city or home</li>
                  <li>• Getting married or divorced</li>
                  <li>• Having children</li>
                  <li>• Major health changes</li>
                  <li>• Receiving inheritance or windfall</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Staying Committed */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Star size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Staying committed to your financial plan</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            The best plan in the world only works if you follow it. Here's how to stay motivated:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Track small wins</p>
              <p style={{ color: '#1C1C1C' }}>Celebrate each milestone: every $500 saved, every debt payment, every smart decision</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Visualize your goals</p>
              <p style={{ color: '#1C1C1C' }}>Use charts, vision boards, or photos to remind yourself why you're working hard</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Find an accountability partner</p>
              <p style={{ color: '#1C1C1C' }}>Share goals with a friend, family member, or mentor who will check in on your progress</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Automate as much as possible</p>
              <p style={{ color: '#1C1C1C' }}>Set up automatic transfers and payments so good habits happen without thinking</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Be kind to yourself</p>
              <p style={{ color: '#1C1C1C' }}>You'll have setbacks. What matters is getting back on track, not perfection</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Keep learning</p>
              <p style={{ color: '#1C1C1C' }}>Read books, listen to podcasts, take courses—financial education is a lifelong journey</p>
            </div>
          </div>
        </div>

        {/* Common Obstacles */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Common obstacles and how to overcome them</h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Obstacle: "I don't make enough money to save"</p>
              <p style={{ color: '#E5D7C4' }}>Solution: Start tiny—even $5/week builds the habit. Focus on increasing income over time.</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Obstacle: "Planning feels overwhelming"</p>
              <p style={{ color: '#E5D7C4' }}>Solution: Start with one goal. Once that's on track, add another. Build gradually.</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Obstacle: "Life keeps getting in the way"</p>
              <p style={{ color: '#E5D7C4' }}>Solution: Expect the unexpected. Build flexibility into your plan and keep an emergency fund.</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Obstacle: "I keep giving up after a few weeks"</p>
              <p style={{ color: '#E5D7C4' }}>Solution: Make it visible. Put your goals somewhere you'll see them daily.</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Obstacle: "My family doesn't support my goals"</p>
              <p style={{ color: '#E5D7C4' }}>Solution: Communicate why it matters to you. Find supportive communities online or in person.</p>
            </div>
          </div>
        </div>

        {/* Module Complete */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Award size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>You've completed the Financial Planning module!</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            You now have all the tools you need to plan your financial future:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }}>✓ Setting SMART financial goals</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }}>✓ Creating realistic budgets</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }}>✓ Building emergency funds</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }}>✓ Planning for big expenses</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }}>✓ Understanding retirement and insurance</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }}>✓ Making smart financial decisions</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl mb-4">
              Remember: Financial planning is not about perfection—it's about progress.
            </p>
            <p style={{ color: '#1C1C1C' }} className="text-lg">
              Review your plan regularly, adjust as life changes, and stay committed to your financial goals.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/financial-planning/lesson-11"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Financial Planning Tools and Apps
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Module Complete</p>
            <Link
              to="/financial-planning"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Back to Financial Planning →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}