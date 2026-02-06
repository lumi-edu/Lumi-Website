import { Link } from './RouterLink';
import { ArrowLeft, Scale, Brain, Heart, Calculator, AlertTriangle, CheckCircle, Home, Car, Briefcase, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function FinancialPlanningLesson10Page() {
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
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 10</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Making Big Financial Decisions</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~20 to 25 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Scale size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Some financial choices change your life</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Buying a car, choosing a college, accepting a job, renting vs buying a home—these decisions have long-term financial consequences that can last years or even decades.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg text-center">
              Big financial decisions deserve careful thought, not rushed emotional reactions.
            </p>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              This lesson teaches you how to evaluate major financial choices logically and confidently.
            </p>
          </div>
        </div>

        {/* What Makes a Decision "Big" */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <DollarSign size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>What makes a financial decision "big"?</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Three characteristics define major financial decisions:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <DollarSign size={24} style={{ color: '#354024' }} />
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">1. High cost</p>
                <p style={{ color: '#E5D7C4' }}>Involves significant money (thousands or tens of thousands of dollars)</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <Clock size={24} style={{ color: '#354024' }} />
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">2. Long-term impact</p>
                <p style={{ color: '#E5D7C4' }}>Affects your finances for months, years, or decades</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                <AlertTriangle size={24} style={{ color: '#354024' }} />
              </div>
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">3. Difficult to reverse</p>
                <p style={{ color: '#E5D7C4' }}>Can't easily undo the decision without major cost or consequence</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              If a decision has all three characteristics, it's a big financial choice that needs careful analysis.
            </p>
          </div>
        </div>

        {/* Common Big Decisions */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Common big financial decisions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-4">
                <Car size={32} style={{ color: '#354024' }} />
                <h3 className="text-xl font-bold" style={{ color: '#1C1C1C' }}>Buying a car</h3>
              </div>
              <p style={{ color: '#1C1C1C' }}>New vs used, financing terms, insurance costs, maintenance expenses</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-4">
                <Home size={32} style={{ color: '#354024' }} />
                <h3 className="text-xl font-bold" style={{ color: '#1C1C1C' }}>Renting vs buying</h3>
              </div>
              <p style={{ color: '#1C1C1C' }}>Down payment, mortgage, maintenance, flexibility, market conditions</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={32} style={{ color: '#354024' }} />
                <h3 className="text-xl font-bold" style={{ color: '#1C1C1C' }}>Job and career choices</h3>
              </div>
              <p style={{ color: '#1C1C1C' }}>Salary, benefits, location, growth potential, work-life balance</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp size={32} style={{ color: '#354024' }} />
                <h3 className="text-xl font-bold" style={{ color: '#1C1C1C' }}>College selection</h3>
              </div>
              <p style={{ color: '#1C1C1C' }}>Tuition costs, student loans, degree value, future earning potential</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-4">
                <Heart size={32} style={{ color: '#354024' }} />
                <h3 className="text-xl font-bold" style={{ color: '#1C1C1C' }}>Major relationships</h3>
              </div>
              <p style={{ color: '#1C1C1C' }}>Marriage, children, shared finances, combined goals</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={32} style={{ color: '#354024' }} />
                <h3 className="text-xl font-bold" style={{ color: '#1C1C1C' }}>Starting a business</h3>
              </div>
              <p style={{ color: '#1C1C1C' }}>Initial investment, risk level, time commitment, income stability</p>
            </div>
          </div>
        </div>

        {/* The Decision Framework */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Brain size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>The 5-step decision framework</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Use this process to evaluate any major financial choice:
          </p>

          <div className="space-y-6 mb-6">
            {/* Step 1 */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#1C1C1C' }}>Define the decision clearly</h3>
                </div>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-3">What exactly are you deciding? What are the options?</p>
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-sm italic">Example: "Should I buy a $15,000 used car with a loan, or keep using public transportation and save that money?"</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#1C1C1C' }}>Calculate the true cost</h3>
                </div>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-3">Include all costs: purchase price, financing, maintenance, insurance, opportunity cost</p>
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-sm italic">Example: "$15,000 car + $2,000 interest + $150/month insurance + $100/month gas = $22,200 over 5 years"</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#1C1C1C' }}>Consider the alternatives</h3>
                </div>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-3">What else could you do with that money? What are the trade-offs?</p>
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-sm italic">Example: "If I don't buy the car, I could invest $22,200 and it could grow to $35,000 in 10 years"</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#1C1C1C' }}>Think long-term</h3>
                </div>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-3">How will this affect you in 1 year? 5 years? 10 years?</p>
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-sm italic">Example: "Will I still need this car in 5 years? Will it help me earn more income?"</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#354024' }}>
                  <span style={{ color: '#889063' }} className="font-bold text-xl">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#1C1C1C' }}>Sleep on it</h3>
                </div>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-3">Wait at least 24-48 hours before making the final decision</p>
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-sm italic">Example: "I'll review my budget tonight and decide tomorrow after thinking it through"</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-xl">
              This framework prevents impulsive choices and leads to better long-term outcomes.
            </p>
          </div>
        </div>

        {/* Emotional vs Logical */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Emotional vs logical decision making</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Big financial mistakes happen when emotions override logic.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4">Emotional triggers to avoid:</h3>
              <div className="space-y-3">
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Fear of missing out (FOMO)</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm">"Everyone else has this, I need it too"</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Status seeking</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm">"This will impress people"</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Immediate gratification</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm">"I want this right now"</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Pressure from others</p>
                  <p style={{ color: '#E5D7C4' }} className="text-sm">"Family/friends expect this of me"</p>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4">Logical questions to ask:</h3>
              <div className="space-y-3">
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Can I truly afford this without debt?</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Will this help me reach my goals?</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>What am I sacrificing to buy this?</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Does this align with my values?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">
              When emotion and logic conflict, pause and wait before deciding.
            </p>
          </div>
        </div>

        {/* Rent vs Buy Case Study */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Home size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Case study: Rent vs buy decision</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            One of the biggest financial decisions you'll face is whether to rent or buy housing.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <h3 style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4">Reasons to rent:</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Flexibility to move for jobs or life changes</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>No maintenance or repair costs</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Lower upfront costs (no down payment)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Can invest money instead of tying it up</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Predictable monthly costs</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <h3 style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-4">Reasons to buy:</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Building equity and wealth over time</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Fixed mortgage payment (predictability)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Freedom to customize and renovate</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Potential property value appreciation</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: '#354024' }} className="flex-shrink-0 mt-0.5" />
                  <p style={{ color: '#1C1C1C' }}>Tax benefits in some situations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg mb-3 text-center">The right answer depends on:</p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-3 rounded text-center" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Your life stage</p>
              </div>
              <div className="p-3 rounded text-center" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Career stability</p>
              </div>
              <div className="p-3 rounded text-center" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Local market prices</p>
              </div>
              <div className="p-3 rounded text-center" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Available savings</p>
              </div>
              <div className="p-3 rounded text-center" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Long-term plans</p>
              </div>
              <div className="p-3 rounded text-center" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Personal priorities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Input */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Brain size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Who to consult for big decisions</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            You don't have to decide alone. Seek input from trusted sources.
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Financial advisor or counselor</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm">Professional guidance on complex choices</p>
              </div>
            </div>
            <div className="p-5 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Trusted family members</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm">People who know you and care about your wellbeing</p>
              </div>
            </div>
            <div className="p-5 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Mentors in your field</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm">Career and income-related decisions</p>
              </div>
            </div>
            <div className="p-5 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">People who have made similar choices</p>
                <p style={{ color: '#E5D7C4' }} className="text-sm">Learn from their experiences and mistakes</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              However, remember: the final decision is yours. Others can advise, but you live with the outcome.
            </p>
          </div>
        </div>

        {/* Red Flags */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Red flags: When to say no</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Some warning signs mean you should not proceed with a big financial decision:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">You can't afford it without going into debt</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">If you need a loan for something that doesn't increase your income, reconsider</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">You're being pressured to decide quickly</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">"Limited time offer" and "act now" are sales tactics, not real urgency</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">It conflicts with your core goals</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">If this derails your financial plan, it's not worth it</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">You don't fully understand the terms</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">Never sign contracts or agreements you haven't read and understood completely</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Your gut says "no"</p>
              <p style={{ color: '#E5D7C4' }} className="text-sm">If something feels wrong, trust that instinct and investigate further</p>
            </div>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Opportunity cost:</strong> What you give up to choose something</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>True cost:</strong> Total expense including hidden fees</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Equity:</strong> Ownership value you build over time</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Emotional trigger:</strong> Feeling that drives impulsive choices</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Red flag:</strong> Warning sign to avoid a decision</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Decision framework:</strong> System for evaluating choices</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <Scale size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Big decisions are high-cost, long-term, and hard to reverse</span>
            </li>
            <li className="flex items-start gap-3">
              <Brain size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Use the 5-step framework: define, calculate, consider alternatives, think long-term, sleep on it</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Avoid emotional triggers like FOMO and status seeking</span>
            </li>
            <li className="flex items-start gap-3">
              <Calculator size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Calculate true costs including all fees and opportunity costs</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Consult trusted advisors but make your own decision</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Watch for red flags and trust your instincts</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What makes a financial decision "big"?</strong>
            </p>
            <div className="space-y-3">
              {['A) It involves buying something new', 'B) High cost, long-term impact, and difficult to reverse', 'C) Your friends tell you so', 'D) It requires a credit card'].map((option) => {
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
              <strong>2. What should you do before making a major financial decision?</strong>
            </p>
            <div className="space-y-3">
              {['A) Buy immediately before you change your mind', 'B) Wait 24-48 hours and evaluate using a framework', 'C) Ask strangers on social media', 'D) Ignore the costs'].map((option) => {
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
              <strong>3. Which is a red flag that you should NOT proceed with a purchase?</strong>
            </p>
            <div className="space-y-3">
              {['A) You have researched it thoroughly', 'B) You need debt to afford it and it does not increase income', 'C) You have waited and thought about it', 'D) It fits your budget'].map((option) => {
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
                  ? 'Perfect! You understand how to make big financial decisions wisely and avoid common mistakes.'
                  : 'Review the sections above to better understand the decision-making framework for major financial choices.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/financial-planning/lesson-9"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Short-Term vs Long-Term Goals
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/financial-planning/lesson-11"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Financial Planning Tools and Apps →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
