import { Link } from './RouterLink';
import { ArrowLeft, Target, Calendar, TrendingUp, Award, Flag, CheckCircle, XCircle, Clock, Zap, MapPin, DollarSign } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function FinancialPlanningLesson2Page() {
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
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 2</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Creating a Personal Budget</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~15 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Target size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Financial goals give your money direction</h2>
          </div>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="text-lg mb-4">
              A financial goal is something you want to achieve using money within a specific timeframe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <div className="flex items-center gap-3 mb-3">
                <XCircle size={28} style={{ color: '#1C1C1C' }} />
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Without goals</p>
              </div>
              <p style={{ color: '#1C1C1C' }} className="text-center text-xl">
                Money gets spent randomly.
              </p>
            </div>
            <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle size={28} style={{ color: '#354024' }} />
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">With goals</p>
              </div>
              <p style={{ color: '#1C1C1C' }} className="text-center text-xl">
                Every dollar has purpose.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-xl">
              Goals turn vague wishes into clear targets.
            </p>
          </div>
        </div>

        {/* Types of Financial Goals */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Three types of financial goals</h2>
          
          <div className="space-y-6">
            {/* Short Term Goals */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
                  <Clock size={32} style={{ color: '#354024' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#354024' }}>Short term goals</h3>
                  <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Within 1 year</p>
                </div>
              </div>

              <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Examples:</p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Build emergency fund</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Save for concert tickets</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold">Buy new phone</p>
                </div>
              </div>
            </div>

            {/* Medium Term Goals */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <Calendar size={32} style={{ color: '#CFBB99' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#354024' }}>Medium term goals</h3>
                  <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">1 to 5 years</p>
                </div>
              </div>

              <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Examples:</p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Save for car</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">College expenses</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold">Study abroad trip</p>
                </div>
              </div>
            </div>

            {/* Long Term Goals */}
            <div className="p-8 rounded-lg border-l-8" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
                  <Flag size={32} style={{ color: '#354024' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#E5D7C4' }}>Long term goals</h3>
                  <p style={{ color: '#E5D7C4' }} className="opacity-80 text-lg">5+ years</p>
                </div>
              </div>

              <p style={{ color: '#E5D7C4' }} className="mb-4 font-bold text-lg">Examples:</p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#354024' }} className="font-bold">Buy a home</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#354024' }} className="font-bold">Start a business</p>
                </div>
                <div className="p-4 rounded text-center" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#354024' }} className="font-bold">Retirement savings</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              Your financial plan should include all three types of goals.
            </p>
          </div>
        </div>

        {/* SMART Goals Framework */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Award size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>SMART goals framework</h2>
          </div>

          <div className="p-6 rounded-lg mb-6 text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl mb-2">
              Effective goals are SMART
            </p>
            <p style={{ color: '#1C1C1C' }} className="text-lg">
              This framework makes goals clear and achievable.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">S</span>
                </div>
                <div>
                  <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-1">Specific</p>
                  <p style={{ color: '#1C1C1C' }}>Be clear and detailed about what you want</p>
                  <div className="mt-3 grid md:grid-cols-2 gap-3">
                    <div className="p-3 rounded" style={{ backgroundColor: '#FFCFD0' }}>
                      <p style={{ color: '#1C1C1C' }} className="text-sm"><strong>Vague:</strong> Save money</p>
                    </div>
                    <div className="p-3 rounded" style={{ backgroundColor: '#CFBB99' }}>
                      <p style={{ color: '#1C1C1C' }} className="text-sm"><strong>Specific:</strong> Save $500 for laptop</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">M</span>
                </div>
                <div>
                  <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-1">Measurable</p>
                  <p style={{ color: '#1C1C1C' }}>Use numbers so you can track progress</p>
                  <div className="mt-3 p-3 rounded" style={{ backgroundColor: '#354024' }}>
                    <p style={{ color: '#E5D7C4' }} className="text-sm">Example: Save $50 per month</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">A</span>
                </div>
                <div>
                  <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-1">Achievable</p>
                  <p style={{ color: '#1C1C1C' }}>Set realistic goals based on your income</p>
                  <div className="mt-3 p-3 rounded" style={{ backgroundColor: '#354024' }}>
                    <p style={{ color: '#E5D7C4' }} className="text-sm">Don't aim to save $10,000 in a month on minimum wage</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">R</span>
                </div>
                <div>
                  <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-1">Relevant</p>
                  <p style={{ color: '#1C1C1C' }}>Align goals with what truly matters to you</p>
                  <div className="mt-3 p-3 rounded" style={{ backgroundColor: '#354024' }}>
                    <p style={{ color: '#E5D7C4' }} className="text-sm">Choose goals that support your values and priorities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">T</span>
                </div>
                <div>
                  <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-1">Time-bound</p>
                  <p style={{ color: '#1C1C1C' }}>Set a clear deadline</p>
                  <div className="mt-3 p-3 rounded" style={{ backgroundColor: '#354024' }}>
                    <p style={{ color: '#E5D7C4' }} className="text-sm">Example: Save $500 by December 31st</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              SMART goals turn dreams into plans.
            </p>
          </div>
        </div>

        {/* Goal Example Comparison */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Vague vs SMART goal comparison</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vague Goal */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <div className="flex items-center gap-3 mb-6">
                <XCircle size={32} style={{ color: '#1C1C1C' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Vague goal</h3>
              </div>
              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-lg italic text-center">
                  "I want to save money for college."
                </p>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}><strong>Problem:</strong> No specific amount</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}><strong>Problem:</strong> No timeline</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}><strong>Problem:</strong> No action plan</p>
                </div>
              </div>
            </div>

            {/* SMART Goal */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={32} style={{ color: '#1C1C1C' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>SMART goal</h3>
              </div>
              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-lg italic text-center">
                  "I will save $5,000 for college by June 2027 by saving $100 per month from my part-time job."
                </p>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded" style={{ backgroundColor: '#CFBB99' }}>
                  <p style={{ color: '#1C1C1C' }}><strong>Specific:</strong> $5,000 for college</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#CFBB99' }}>
                  <p style={{ color: '#1C1C1C' }}><strong>Measurable:</strong> $100 per month</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#CFBB99' }}>
                  <p style={{ color: '#1C1C1C' }}><strong>Time-bound:</strong> By June 2027</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              The more specific your goal, the easier it is to achieve.
            </p>
          </div>
        </div>

        {/* Prioritizing Goals */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Prioritizing your goals</h2>
          </div>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg text-center">
              You can't do everything at once. Ranking goals helps you focus.
            </p>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 font-bold text-lg">Steps to prioritize:</p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">1</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">List all your goals</p>
                <p style={{ color: '#1C1C1C' }}>Write down everything you want to achieve</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">2</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Separate needs from wants</p>
                <p style={{ color: '#1C1C1C' }}>Needs come first, wants come second</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">3</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Consider urgency</p>
                <p style={{ color: '#1C1C1C' }}>Time-sensitive goals move to the top</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">4</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Balance short and long term</p>
                <p style={{ color: '#1C1C1C' }}>Work on both types simultaneously</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              Prioritization helps you allocate money where it matters most.
            </p>
          </div>
        </div>

        {/* Example Priority List */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <h2 className="text-3xl mb-6 font-bold text-center" style={{ color: '#1C1C1C' }}>Example goal priority list</h2>
          
          <div className="space-y-4">
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#354024' }} className="font-bold text-xl">1</span>
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Build $500 emergency fund (Need)</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Most urgent - protects against emergencies</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#354024' }} className="font-bold text-xl">2</span>
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Save $2,000 for community college (Need)</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm opacity-80">Time-sensitive - classes start next year</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-xl">3</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Save $800 for new laptop (Want)</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm opacity-80">Important but not urgent</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#CFBB99' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#CFBB99' }} className="font-bold text-xl">4</span>
              </div>
              <div>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Save for vacation (Want)</p>
                <p style={{ color: '#1C1C1C' }} className="text-sm opacity-80">Lower priority - focus on needs first</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking Progress */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Zap size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Tracking your progress</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Setting goals is only the first step. You need to monitor progress regularly.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Review monthly</p>
              <p style={{ color: '#E5D7C4' }} className="opacity-80">Check how much you've saved</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Adjust if needed</p>
              <p style={{ color: '#E5D7C4' }} className="opacity-80">Change amounts or timelines</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Celebrate milestones</p>
              <p style={{ color: '#E5D7C4' }} className="opacity-80">Acknowledge progress made</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Stay flexible</p>
              <p style={{ color: '#E5D7C4' }} className="opacity-80">Life changes, goals can too</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Tracking keeps you accountable and motivated.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Financial goal:</strong> Money target with a timeline</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>SMART:</strong> Specific, Measurable, Achievable, Relevant, Time-bound</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Short term:</strong> Goals within 1 year</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Long term:</strong> Goals 5+ years away</p>
            </div>
            <div className="p-4 rounded md:col-span-2 text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Prioritize:</strong> Rank goals by importance</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <Target size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Financial goals give money direction</span>
            </li>
            <li className="flex items-start gap-3">
              <Calendar size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Goals come in short, medium, and long term</span>
            </li>
            <li className="flex items-start gap-3">
              <Award size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>SMART goals are clear and achievable</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Prioritize needs over wants</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Track progress regularly</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Stay flexible and adjust as needed</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What makes a goal "SMART"?</strong>
            </p>
            <div className="space-y-3">
              {['A) Spending money quickly', 'B) Specific, Measurable, Achievable, Relevant, Time-bound', 'C) Saving without a plan', 'D) Having vague wishes'].map((option) => {
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
              <strong>2. Which is a short term financial goal?</strong>
            </p>
            <div className="space-y-3">
              {['A) Buying a house', 'B) Building a $500 emergency fund', 'C) Retirement savings', 'D) Starting a business'].map((option) => {
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
              <strong>3. Why prioritize financial goals?</strong>
            </p>
            <div className="space-y-3">
              {['A) To ignore some goals', 'B) To focus resources on what matters most', 'C) Goals don\'t need priorities', 'D) To spend more money'].map((option) => {
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
                  ? 'Perfect! You understand how to set and prioritize financial goals.'
                  : 'Review the sections above to better understand goal setting.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/financial-planning/lesson-1"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Setting Financial Goals
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/financial-planning/lesson-3"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Assessing Your Financial Life →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}