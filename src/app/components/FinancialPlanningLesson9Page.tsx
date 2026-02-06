import { Link } from './RouterLink';
import { ArrowLeft, Target, Calendar, TrendingUp, DollarSign, CheckCircle, AlertTriangle, Briefcase, GraduationCap, Car, Home } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function FinancialPlanningLesson9Page() {
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
              <Target size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 9</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Short-Term vs Long-Term Goals</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~18 to 22 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Target size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Financial goals exist on different timelines</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Not every goal can be reached this year. Understanding the difference between short-term and long-term goals helps you prioritize and plan effectively.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg text-center">
              Successful financial planning requires balancing goals across different time horizons.
            </p>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              This lesson teaches you how to categorize and pursue both types of goals.
            </p>
          </div>
        </div>

        {/* Defining Goal Types */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Three types of financial goals</h2>
          
          <div className="space-y-6">
            {/* Short-Term Goals */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <Calendar size={32} style={{ color: '#889063' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Short-term goals</h3>
                  <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Less than 1 year</p>
                </div>
              </div>

              <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Examples:</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Build $500 emergency fund</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Pay off credit card debt</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Save for holiday gifts</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Buy new phone</p>
                </div>
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Key characteristic:</p>
                <p style={{ color: '#1C1C1C' }}>You can see results quickly and stay motivated</p>
              </div>
            </div>

            {/* Medium-Term Goals */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#CFBB99', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
                  <Target size={32} style={{ color: '#CFBB99' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#354024' }}>Medium-term goals</h3>
                  <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">1 to 5 years</p>
                </div>
              </div>

              <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Examples:</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Save for a car</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Build full emergency fund</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Study abroad trip</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Save for college tuition</p>
                </div>
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Key characteristic:</p>
                <p style={{ color: '#1C1C1C' }}>Requires consistent saving over several years</p>
              </div>
            </div>

            {/* Long-Term Goals */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#354024', borderColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFBB99' }}>
                  <TrendingUp size={32} style={{ color: '#354024' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#E5D7C4' }}>Long-term goals</h3>
                  <p style={{ color: '#E5D7C4' }} className="opacity-80 text-lg">More than 5 years</p>
                </div>
              </div>

              <p style={{ color: '#E5D7C4' }} className="mb-4 font-bold text-lg">Examples:</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Retirement savings</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Buying a home</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Starting a business</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-bold">Financial independence</p>
                </div>
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Key characteristic:</p>
                <p style={{ color: '#1C1C1C' }}>Benefits from compound growth and time</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              A complete financial plan includes all three types of goals.
            </p>
          </div>
        </div>

        {/* Why Both Matter */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Why you need both short-term and long-term goals</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#889063' }} className="font-bold text-lg mb-3">Short-term goals provide:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#E5D7C4' }}>Quick wins that keep you motivated</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#E5D7C4' }}>Immediate financial stability</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#E5D7C4' }}>Practice building financial discipline</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#E5D7C4' }}>Protection from emergencies</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#354024' }} className="font-bold text-lg mb-3">Long-term goals provide:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <TrendingUp size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Direction and purpose for your money</p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Time for compound growth</p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Future security and independence</p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Life-changing opportunities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">
              Focusing only on one type leads to either short-sighted spending or delayed gratification burnout.
            </p>
          </div>
        </div>

        {/* Common Mistake */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>The trap of only short-term thinking</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Many people focus exclusively on immediate goals and ignore the future.
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Only saving for short-term wants</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">New clothes, weekend trips, latest gadgets</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Never investing for the future</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Missing out on years of compound growth</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Ignoring retirement planning</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Starting too late makes reaching goals much harder</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">No major purchase planning</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Going into debt for cars, homes, education</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">
              Result: You wake up at 30, 40, or 50 with nothing saved and limited options.
            </p>
          </div>
        </div>

        {/* Balancing Goals */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Target size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>How to balance different goal types</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Use a percentage-based approach to ensure all goal types receive attention.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4 text-center">Sample savings allocation:</p>
            
            <div className="space-y-4">
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <div className="flex justify-between items-center mb-2">
                  <p style={{ color: '#E5D7C4' }} className="font-bold">Short-term goals (emergency fund, upcoming expenses)</p>
                  <p style={{ color: '#889063' }} className="font-bold text-xl">40%</p>
                </div>
                <p style={{ color: '#E5D7C4' }} className="text-sm">Immediate needs and quick wins</p>
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <div className="flex justify-between items-center mb-2">
                  <p style={{ color: '#E5D7C4' }} className="font-bold">Medium-term goals (car, vacation, college)</p>
                  <p style={{ color: '#889063' }} className="font-bold text-xl">30%</p>
                </div>
                <p style={{ color: '#E5D7C4' }} className="text-sm">1-5 year major purchases</p>
              </div>

              <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <div className="flex justify-between items-center mb-2">
                  <p style={{ color: '#E5D7C4' }} className="font-bold">Long-term goals (retirement, home, financial freedom)</p>
                  <p style={{ color: '#889063' }} className="font-bold text-xl">30%</p>
                </div>
                <p style={{ color: '#E5D7C4' }} className="text-sm">5+ years future planning</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Adjust percentages based on your life stage and priorities, but always include all three.
            </p>
          </div>
        </div>

        {/* Goal Priority Framework */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Target size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Priority order for goal setting</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            If you can't fund all goals at once, follow this priority sequence:
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">1</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Starter emergency fund ($500-$1,000)</p>
                <p style={{ color: '#1C1C1C' }}>Prevents small emergencies from becoming debt</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">2</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">High-interest debt payoff</p>
                <p style={{ color: '#1C1C1C' }}>Credit cards, payday loans, high-rate debt</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">3</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Employer retirement match</p>
                <p style={{ color: '#1C1C1C' }}>Free money you shouldn't leave on the table</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">4</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Full emergency fund (3-6 months expenses)</p>
                <p style={{ color: '#1C1C1C' }}>Complete financial safety net</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">5</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Medium-term goal saving</p>
                <p style={{ color: '#1C1C1C' }}>Cars, education, vacations, major purchases</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">6</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Additional retirement and long-term investing</p>
                <p style={{ color: '#1C1C1C' }}>Building wealth beyond the basics</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              This order maximizes security while building toward future goals.
            </p>
          </div>
        </div>

        {/* Real Example Comparison */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <h2 className="text-3xl mb-6 font-bold text-center" style={{ color: '#1C1C1C' }}>Two people, different strategies</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Person A - Short-term only */}
            <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#354024' }}>
              <h3 style={{ color: '#354024' }} className="font-bold text-lg mb-4 text-center">Person A: Short-term only</h3>
              
              <div className="space-y-3 mb-4">
                <div className="p-3 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-sm">Age 20: Saves for clothes, concerts</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-sm">Age 25: Buys new phone, weekend trips</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-sm">Age 30: Enjoys present, no retirement</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-sm">Age 40: Panics about future</p>
                </div>
              </div>

              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-sm font-bold text-center">Result: $0 retirement at 40</p>
              </div>
            </div>

            {/* Person B - Balanced */}
            <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
              <h3 style={{ color: '#354024' }} className="font-bold text-lg mb-4 text-center">Person B: Balanced approach</h3>
              
              <div className="space-y-3 mb-4">
                <div className="p-3 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-sm">Age 20: Emergency fund + invest 10%</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-sm">Age 25: Car fund + retirement growing</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-sm">Age 30: Home down payment saved</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-sm">Age 40: On track for early retirement</p>
                </div>
              </div>

              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#889063' }} className="text-sm font-bold text-center">Result: $150,000+ at 40</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Short-term goal:</strong> Target within 1 year</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Medium-term goal:</strong> Target in 1-5 years</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Long-term goal:</strong> Target beyond 5 years</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Goal allocation:</strong> Dividing savings across goals</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Priority order:</strong> Sequence for funding goals</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Compound growth:</strong> Earnings on earnings over time</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <Calendar size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Three goal types: short (1 year), medium (1-5 years), long (5+ years)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Short-term goals provide motivation and stability</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Long-term goals benefit from compound growth</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Only focusing on short-term is dangerous</span>
            </li>
            <li className="flex items-start gap-3">
              <Target size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Balance all three types in your plan</span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Follow priority order when funding is limited</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What is a short-term financial goal?</strong>
            </p>
            <div className="space-y-3">
              {['A) A goal that takes 10 years', 'B) A goal you can reach in less than 1 year', 'C) Retirement planning', 'D) Buying a house'].map((option) => {
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
              <strong>2. Why are long-term goals important?</strong>
            </p>
            <div className="space-y-3">
              {['A) They are not important', 'B) They benefit from compound growth and build future security', 'C) Only short-term matters', 'D) They only matter to old people'].map((option) => {
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
              <strong>3. What should be your first priority in goal setting?</strong>
            </p>
            <div className="space-y-3">
              {['A) Buy a luxury car', 'B) Build a starter emergency fund', 'C) Invest everything in stocks', 'D) Spend on entertainment'].map((option) => {
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
                  ? 'Perfect! You understand how to balance short-term and long-term financial goals.'
                  : 'Review the sections above to better understand goal setting across different time horizons.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/financial-planning/lesson-8"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Dealing with Financial Setbacks
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/financial-planning/lesson-10"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Tracking Your Financial Progress →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
