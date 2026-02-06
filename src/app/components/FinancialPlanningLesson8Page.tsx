import { Link } from './RouterLink';
import { ArrowLeft, AlertTriangle, Heart, Shield, TrendingDown, DollarSign, Target, CheckCircle, RefreshCw, Zap, PiggyBank } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function FinancialPlanningLesson8Page() {
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
              <AlertTriangle size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 8</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Dealing with Financial Setbacks</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~15 to 18 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Everyone faces financial setbacks</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Job loss, medical emergencies, car repairs, unexpected bills—these are not rare events. They happen to almost everyone at some point.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg text-center">
              Financial setbacks are not failures. How you respond to them determines your financial future.
            </p>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              This lesson teaches you how to handle financial challenges and recover stronger.
            </p>
          </div>
        </div>

        {/* Common Financial Setbacks */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Common financial setbacks</h2>
          
          <div className="space-y-4">
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#889063' }}>
              <TrendingDown size={32} style={{ color: '#354024' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-1">Job loss or reduced hours</p>
                <p style={{ color: '#1C1C1C' }}>Income suddenly drops or disappears</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#889063' }}>
              <Heart size={32} style={{ color: '#354024' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-1">Medical emergencies</p>
                <p style={{ color: '#1C1C1C' }}>Unexpected hospital bills and expenses</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#889063' }}>
              <AlertTriangle size={32} style={{ color: '#354024' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-1">Car or home repairs</p>
                <p style={{ color: '#1C1C1C' }}>Large, immediate costs to fix necessities</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#889063' }}>
              <DollarSign size={32} style={{ color: '#354024' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-1">Unexpected bills or debts</p>
                <p style={{ color: '#1C1C1C' }}>Surprise expenses that weren't planned</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#889063' }}>
              <Target size={32} style={{ color: '#354024' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-1">Family financial crisis</p>
                <p style={{ color: '#1C1C1C' }}>Needing to support family members</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#889063' }}>
              <AlertTriangle size={32} style={{ color: '#354024' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-1">Natural disasters</p>
                <p style={{ color: '#1C1C1C' }}>Damage from storms, floods, fires</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              These are normal life events, not personal failures.
            </p>
          </div>
        </div>

        {/* Warning Signs */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Warning signs of financial trouble</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Recognizing problems early allows you to act before they get worse.
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Living paycheck to paycheck</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">No money left before next pay arrives</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Using credit cards for essentials</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Charging groceries or gas because cash is gone</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Only making minimum payments</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Can't afford to pay more on debt</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Overdrafting accounts</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Spending more than what's in the bank</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Avoiding bills</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Not opening mail or ignoring calls</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">No emergency savings</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Zero money set aside for unexpected costs</p>
            </div>
          </div>
        </div>

        {/* Immediate Response Steps */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Zap size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Immediate response: First 48 hours</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            When a financial setback happens, take these steps immediately.
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">1</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Stop and breathe</p>
                <p style={{ color: '#1C1C1C' }}>Don't make rushed decisions in panic</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">2</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Assess the situation</p>
                <p style={{ color: '#1C1C1C' }}>How much money do you need? When?</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">3</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Check available resources</p>
                <p style={{ color: '#1C1C1C' }}>Emergency fund, savings, insurance, support</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">4</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Cut non-essential spending immediately</p>
                <p style={{ color: '#1C1C1C' }}>Pause subscriptions, dining out, entertainment</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">5</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Contact creditors if needed</p>
                <p style={{ color: '#1C1C1C' }}>Ask for payment plans or extensions</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Fast, calm action minimizes damage.
            </p>
          </div>
        </div>

        {/* Creating a Crisis Budget */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <DollarSign size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Create a crisis budget</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            A crisis budget strips spending down to absolute essentials only.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg mb-4 text-center">The four walls (essentials to keep)</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <CheckCircle size={24} style={{ color: '#354024' }} className="mb-2" />
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">1. Food</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm">Groceries only, no restaurants</p>
              </div>
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <CheckCircle size={24} style={{ color: '#354024' }} className="mb-2" />
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">2. Shelter</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm">Rent or mortgage payment</p>
              </div>
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <CheckCircle size={24} style={{ color: '#354024' }} className="mb-2" />
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">3. Utilities</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm">Electric, water, heat</p>
              </div>
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <CheckCircle size={24} style={{ color: '#354024' }} className="mb-2" />
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">4. Transportation</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm">To get to work or essentials</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4">Everything else gets paused:</p>
            <div className="space-y-2 text-sm">
              <p style={{ color: '#1C1C1C' }}>• Streaming services</p>
              <p style={{ color: '#1C1C1C' }}>• Gym memberships</p>
              <p style={{ color: '#1C1C1C' }}>• Shopping</p>
              <p style={{ color: '#1C1C1C' }}>• Entertainment</p>
              <p style={{ color: '#1C1C1C' }}>• Non-essential subscriptions</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">
              A crisis budget is temporary—it protects you while you recover.
            </p>
          </div>
        </div>

        {/* Recovery Strategies */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <RefreshCw size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Recovery strategies</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Once the immediate crisis is handled, focus on rebuilding.
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-3 text-lg">Increase income</p>
              <div className="space-y-2">
                <p style={{ color: '#1C1C1C' }}>• Look for a new job or side work</p>
                <p style={{ color: '#1C1C1C' }}>• Ask for more hours</p>
                <p style={{ color: '#1C1C1C' }}>• Sell unused items</p>
                <p style={{ color: '#1C1C1C' }}>• Start freelancing or gig work</p>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-3 text-lg">Reduce expenses permanently</p>
              <div className="space-y-2">
                <p style={{ color: '#1C1C1C' }}>• Cancel unused subscriptions</p>
                <p style={{ color: '#1C1C1C' }}>• Negotiate bills (phone, insurance)</p>
                <p style={{ color: '#1C1C1C' }}>• Find cheaper alternatives</p>
                <p style={{ color: '#1C1C1C' }}>• Move to lower housing costs if possible</p>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-3 text-lg">Rebuild emergency fund</p>
              <div className="space-y-2">
                <p style={{ color: '#1C1C1C' }}>• Start with $500 goal</p>
                <p style={{ color: '#1C1C1C' }}>• Save any extra money</p>
                <p style={{ color: '#1C1C1C' }}>• Automate small weekly transfers</p>
                <p style={{ color: '#1C1C1C' }}>• Gradually build to 3-6 months expenses</p>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-3 text-lg">Seek help if needed</p>
              <div className="space-y-2">
                <p style={{ color: '#1C1C1C' }}>• Contact non-profit credit counseling</p>
                <p style={{ color: '#1C1C1C' }}>• Apply for assistance programs</p>
                <p style={{ color: '#1C1C1C' }}>• Talk to family about support</p>
                <p style={{ color: '#1C1C1C' }}>• Use community resources (food banks, etc.)</p>
              </div>
            </div>
          </div>
        </div>

        {/* What NOT to Do */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>What NOT to do during a setback</h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Don't ignore the problem</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Avoiding bills makes things worse</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Don't take out payday loans</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Extremely high interest traps you in debt</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Don't drain retirement accounts</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Penalties and taxes make this very expensive</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Don't panic-borrow from everyone</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Creates relationship problems and more debt</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Don't give up on your financial plan</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Setbacks are temporary—keep moving forward</p>
            </div>
          </div>
        </div>

        {/* Building Resilience */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Building financial resilience</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Resilience means you can bounce back from setbacks stronger than before.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <PiggyBank size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Emergency fund priority</p>
              <p style={{ color: '#1C1C1C' }}>Having 3-6 months expenses saved</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <Shield size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Insurance coverage</p>
              <p style={{ color: '#1C1C1C' }}>Health, auto, renters protection</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <Target size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Multiple income streams</p>
              <p style={{ color: '#1C1C1C' }}>Side work or passive income</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <DollarSign size={28} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Low or no debt</p>
              <p style={{ color: '#1C1C1C' }}>Less monthly obligations</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Resilience gives you options when things go wrong.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Financial setback:</strong> Unexpected money challenge</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Crisis budget:</strong> Emergency spending plan</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Four walls:</strong> Essential expenses only</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Financial resilience:</strong> Ability to recover</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Payday loan:</strong> High-interest short-term loan</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Recovery:</strong> Rebuilding after setback</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <AlertTriangle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Financial setbacks happen to everyone</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Act quickly but calmly</span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Create a crisis budget (four walls)</span>
            </li>
            <li className="flex items-start gap-3">
              <RefreshCw size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Focus on recovery strategies</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Avoid payday loans and panic decisions</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Build resilience through emergency funds</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What are the "four walls" in a crisis budget?</strong>
            </p>
            <div className="space-y-3">
              {['A) Entertainment, shopping, dining, travel', 'B) Food, shelter, utilities, transportation', 'C) Subscriptions and memberships', 'D) Credit card payments'].map((option) => {
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
              <strong>2. What should you do first during a financial setback?</strong>
            </p>
            <div className="space-y-3">
              {['A) Panic and borrow from everyone', 'B) Stop, breathe, and assess the situation', 'C) Ignore bills', 'D) Take out a payday loan'].map((option) => {
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
              <strong>3. What builds financial resilience?</strong>
            </p>
            <div className="space-y-3">
              {['A) Ignoring problems', 'B) Emergency fund, insurance, multiple income streams', 'C) Maximum debt', 'D) No savings'].map((option) => {
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
                  ? 'Perfect! You understand how to handle financial setbacks and build resilience.'
                  : 'Review the sections above to better understand dealing with financial challenges.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/financial-planning/lesson-7"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Managing Variable Income
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/financial-planning/lesson-9"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Short-Term vs Long-Term Goals →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
