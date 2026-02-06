import { Link } from './RouterLink';
import { ArrowLeft, MapPin, TrendingUp, Target, Shield, Compass, Lightbulb, CheckCircle, XCircle, Clock, Zap } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function FinancialPlanningLesson1Page() {
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
              <Compass size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 1</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Setting Financial Goals</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~15 to 18 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <MapPin size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Financial planning is building a roadmap for your money and your life</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-8 text-lg">
            A financial plan is a structured strategy that helps you manage your money in a way that supports your goals, protects your future, and gives you control.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-xl">It answers:</p>
            
            <div className="space-y-3">
              <div className="p-5 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold">1</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Where your money is coming from</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Understanding all income sources</p>
                </div>
              </div>

              <div className="p-5 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold">2</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Where it is going</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Tracking expenses and spending</p>
                </div>
              </div>

              <div className="p-5 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold">3</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">What you are working toward</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Defining your financial goals</p>
                </div>
              </div>

              <div className="p-5 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold">4</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">How you will prepare for future expenses</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Planning ahead for what's coming</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              Financial planning is not just for adults with careers. It starts the moment you earn money.
            </p>
          </div>
        </div>

        {/* Time Advantage Section */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Clock size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Why starting early gives you a massive advantage</h2>
          </div>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#889063' }} className="font-bold text-xl text-center">
              Time is the most powerful tool in finance.
            </p>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 font-bold text-lg">Starting early allows:</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <Zap size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">More time to save</p>
              <p style={{ color: '#E5D7C4' }} className="opacity-80">Small amounts add up over years</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <TrendingUp size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">More time for investments to grow</p>
              <p style={{ color: '#E5D7C4' }} className="opacity-80">Compound growth works in your favor</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <Shield size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Fewer financial mistakes</p>
              <p style={{ color: '#E5D7C4' }} className="opacity-80">Learn and adjust early on</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Better long term stability</p>
              <p style={{ color: '#E5D7C4' }} className="opacity-80">Foundation for future success</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                Even small financial decisions now shape your future opportunities.
              </p>
            </div>
            <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                Planning early builds financial confidence and prevents stress later.
              </p>
            </div>
          </div>
        </div>

        {/* Short Term vs Long Term */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Short term vs long term financial planning</h2>
          
          <div className="p-6 rounded-lg mb-8 text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="text-lg font-bold">
              Financial planning works in layers.
            </p>
          </div>

          <div className="space-y-6">
            {/* Short Term Layer */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
                  <Target size={32} style={{ color: '#354024' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#354024' }}>Short term</h3>
                  <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Goals you want within months or a few years</p>
                </div>
              </div>

              <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Examples:</p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Saving for purchases</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Emergency fund</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">School expenses</p>
                </div>
              </div>
            </div>

            {/* Long Term Layer */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#354024', borderColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFBB99' }}>
                  <MapPin size={32} style={{ color: '#354024' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#E5D7C4' }}>Long term</h3>
                  <p style={{ color: '#E5D7C4' }} className="opacity-80 text-lg">Goals years into the future</p>
                </div>
              </div>

              <p style={{ color: '#E5D7C4' }} className="mb-4 font-bold text-lg">Examples:</p>
              <div className="grid md:grid-cols-4 gap-3">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#354024' }} className="font-bold">College</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#354024' }} className="font-bold">Career stability</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#354024' }} className="font-bold">Buying a home</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#354024' }} className="font-bold">Financial independence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              Your plan connects what you do today to where you want to be later.
            </p>
          </div>
        </div>

        {/* Direction and Purpose - Comparison */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Financial planning creates direction and purpose</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Without a Plan */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <div className="flex items-center gap-3 mb-6">
                <XCircle size={32} style={{ color: '#1C1C1C' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Without a plan:</h3>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Money gets spent randomly</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-70">No clear direction for your dollars</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Goals stay vague</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-70">No specific targets to aim for</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Saving feels optional</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-70">Easy to skip or forget</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Debt becomes easy to fall into</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-70">No guardrails to prevent overspending</p>
                </div>
              </div>
            </div>

            {/* With a Plan */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={32} style={{ color: '#1C1C1C' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>With a plan:</h3>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Every dollar has a purpose</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Intentional allocation</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Priorities are clear</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Know what matters most</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Decisions become intentional</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Every choice aligns with goals</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Progress becomes measurable</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Track how far you've come</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Financial planning turns income into strategy.
            </p>
          </div>
        </div>

        {/* Discipline Over Income */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Discipline is more important than income</h2>
          </div>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg text-center">
              Financial success is not about how much money you make. It is about how well you manage it.
            </p>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 font-bold text-lg">Planning requires:</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#CFBB99' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Consistency</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm opacity-80">Regular, reliable actions</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#CFBB99' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Self control</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm opacity-80">Resisting impulse spending</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#CFBB99' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Awareness</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm opacity-80">Knowing where money goes</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#CFBB99' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Long term thinking</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm opacity-80">Looking beyond today</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                A plan only works if you follow it.
              </p>
            </div>
            <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                Habits build financial futures.
              </p>
            </div>
          </div>
        </div>

        {/* Mindset Section */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>The mindset behind financial planning</h2>
          </div>

          <div className="p-6 rounded-lg mb-6 text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl mb-2">Think of financial planning as:</p>
            <p style={{ color: '#1C1C1C' }} className="text-lg">
              A guide that helps you control money instead of money controlling you.
            </p>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 font-bold text-lg">It is about:</p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <Compass size={24} style={{ color: '#889063' }} className="flex-shrink-0 mt-1" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Preparing before problems happen</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Being proactive, not reactive</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <Target size={24} style={{ color: '#889063' }} className="flex-shrink-0 mt-1" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Making intentional decisions</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Choosing with purpose and awareness</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <MapPin size={24} style={{ color: '#889063' }} className="flex-shrink-0 mt-1" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Thinking ahead</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Planning for what comes next</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <Shield size={24} style={{ color: '#889063' }} className="flex-shrink-0 mt-1" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Creating stability</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Building a foundation for security</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-2xl">
              Financial planning equals financial power.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Financial plan:</strong> Strategy for managing money</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Short term goals:</strong> Near future objectives</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Long term goals:</strong> Future financial targets</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Discipline:</strong> Consistent money control</p>
            </div>
            <div className="p-4 rounded md:col-span-2 text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Financial stability:</strong> Secure financial position</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <MapPin size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Financial planning is a roadmap</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Starts as soon as you earn money</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Early planning gives advantages</span>
            </li>
            <li className="flex items-start gap-3">
              <Target size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Links short and long term goals</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Creates intentional money use</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Discipline makes the plan work</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What is the main purpose of financial planning?</strong>
            </p>
            <div className="space-y-3">
              {['A) Spend money', 'B) Create a roadmap for money and goals', 'C) Avoid jobs', 'D) Eliminate income'].map((option) => {
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
              <strong>2. Why does starting early matter?</strong>
            </p>
            <div className="space-y-3">
              {['A) It doesn\'t matter', 'B) More time to save and grow', 'C) Only for adults', 'D) Less important'].map((option) => {
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
              <strong>3. What matters more than income?</strong>
            </p>
            <div className="space-y-3">
              {['A) Luck', 'B) Discipline and management', 'C) Spending more', 'D) Ignoring goals'].map((option) => {
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
                  ? 'Perfect! You understand financial planning foundations.'
                  : 'Review the sections above to better understand financial planning basics.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous</p>
            <Link
              to="/financial-planning"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Back to Module
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/financial-planning/lesson-2"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Creating a Personal Budget →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
