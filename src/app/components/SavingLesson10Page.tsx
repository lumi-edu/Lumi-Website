import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, Target, DollarSign, Calendar, Zap, Lock, RefreshCw, Settings, TrendingUp, Award, BookOpen, Flag } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function SavingLesson10Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [incorrectAnswers, setIncorrectAnswers] = useState<{[key: string]: boolean}>({});

  const handleAnswerClick = (questionNum: number, answer: string, isCorrect: boolean) => {
    if (isCorrect) {
      setSelectedAnswers(prev => ({...prev, [questionNum]: answer}));
      const keys = Object.keys(incorrectAnswers).filter(key => !key.startsWith(`${questionNum}-`));
      const newIncorrect: {[key: string]: boolean} = {};
      keys.forEach(key => newIncorrect[key] = true);
      setIncorrectAnswers(newIncorrect);
    } else {
      setIncorrectAnswers(prev => ({...prev, [`${questionNum}-${answer}`]: true}));
    }
  };

  return (
    <div className="min-h-screen bg-[#E5D7C4]">
      {/* Header */}
      <div className="sticky top-0 z-50 border-t-[16px] border-[#354024]">
        <header className="bg-[#889063] px-6 py-6 md:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <img src={lumiLogo} alt="lumi" className="h-6 md:h-8 md:-ml-7" style={{ mixBlendMode: 'multiply' }} />
            <nav className="flex gap-4 md:gap-8">
              <Link to="/" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                home
              </Link>
              <Link to="/learn" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                learn
              </Link>
              <Link to="/resources" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                resources
              </Link>
              <Link to="/blog" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
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
            to="/saving-strategies"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Saving Strategies
          </Link>
        </div>
      </div>

      {/* Lesson Header */}
      <section className="px-6 pb-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 flex items-center gap-4 text-lg text-[#1C1C1C] opacity-70">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>6–8 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              <span>Beginner</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
            Creating a Sustainable Saving Plan
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Saving Strategies • Lesson 10 (Final Lesson)
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Opening Statement */}
          <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Settings className="w-16 h-16" />
              <h2 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>
                Saving works best when it becomes a system
              </h2>
            </div>
          </div>

          {/* What You Know */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>By now you know:</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">Why saving matters</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">The types of savings goals</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">How emergency funds work</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">How to save on different incomes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">How to automate saving</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">Where savings should go</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">How to stay motivated</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">How to recover from setbacks</span>
              </div>
            </div>
            
            <div className="mt-8 bg-[#889063]/20 rounded-lg p-6 border-2 border-[#889063]">
              <p className="text-[#1C1C1C] text-xl font-semibold">
                Now it is time to put everything together into a saving plan you can actually stick to.
              </p>
            </div>
          </div>

          {/* Key Principles */}
          <div className="bg-gradient-to-r from-[#354024] to-[#889063] text-white rounded-lg p-8">
            <p className="text-3xl font-bold text-center" style={{ letterSpacing: '-0.89px' }}>
              A sustainable saving plan is simple, realistic, and flexible.
            </p>
          </div>

          {/* Step 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-[#889063] p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white text-[#889063] flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold">1</span>
                </div>
                <h3 className="text-3xl text-white" style={{ letterSpacing: '-0.89px' }}>
                  Choose one focus
                </h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[#1C1C1C] mb-6 text-xl">Start with one priority:</p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-[#E5D7C4] p-6 rounded-lg text-center border-2 border-[#354024]">
                  <p className="text-[#1C1C1C] font-bold text-2xl">Emergency savings</p>
                </div>
                <div className="text-center text-[#1C1C1C] font-semibold text-xl">or</div>
                <div className="bg-[#E5D7C4] p-6 rounded-lg text-center border-2 border-[#354024]">
                  <p className="text-[#1C1C1C] font-bold text-2xl">A short term goal</p>
                </div>
              </div>

              <div className="bg-[#CFBB99] rounded-lg p-6">
                <p className="text-[#1C1C1C] mb-4 text-lg">
                  Trying to save for too many things at once can make progress feel slow and discouraging.
                </p>
                <p className="text-[#1C1C1C] font-bold text-xl">
                  One clear goal builds momentum faster.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-[#354024] p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white text-[#354024] flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold">2</span>
                </div>
                <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                  Set a realistic amount
                </h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[#1C1C1C] mb-6 text-xl">Your saving amount should:</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 bg-[#E5D7C4] p-5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#889063]"></div>
                  <p className="text-[#1C1C1C] font-semibold text-lg">Fit comfortably into your budget</p>
                </div>
                <div className="flex items-center gap-4 bg-[#E5D7C4] p-5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#889063]"></div>
                  <p className="text-[#1C1C1C] font-semibold text-lg">Feel sustainable, not stressful</p>
                </div>
                <div className="flex items-center gap-4 bg-[#E5D7C4] p-5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#889063]"></div>
                  <p className="text-[#1C1C1C] font-semibold text-lg">Be something you can maintain</p>
                </div>
              </div>

              <div className="bg-[#CFBB99] rounded-lg p-6">
                <p className="text-[#1C1C1C] font-bold text-xl mb-3">Examples:</p>
                <div className="space-y-2">
                  <p className="text-[#1C1C1C] text-lg">• $10 per week</p>
                  <p className="text-[#1C1C1C] text-lg">• $50 per paycheck</p>
                  <p className="text-[#1C1C1C] text-lg">• 5% of income</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-[#889063] p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white text-[#889063] flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold">3</span>
                </div>
                <h3 className="text-3xl text-white" style={{ letterSpacing: '-0.89px' }}>
                  Automate it
                </h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[#1C1C1C] mb-6 text-xl">Set up automatic transfers so saving happens without thinking:</p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-[#E5D7C4] p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-[#889063]" />
                    <p className="text-[#1C1C1C] font-bold text-xl">Direct deposit split</p>
                  </div>
                  <p className="text-[#1C1C1C] text-lg">Send a portion of each paycheck directly to savings</p>
                </div>
                <div className="bg-[#E5D7C4] p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-[#889063]" />
                    <p className="text-[#1C1C1C] font-bold text-xl">Scheduled transfers</p>
                  </div>
                  <p className="text-[#1C1C1C] text-lg">Move money on a set schedule (weekly, biweekly, monthly)</p>
                </div>
              </div>

              <div className="bg-[#889063] text-white rounded-lg p-6">
                <p className="text-xl font-semibold">
                  Automation removes the decision, which makes consistency easier.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-[#354024] p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white text-[#354024] flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold">4</span>
                </div>
                <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}>
                  Keep it separated
                </h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[#1C1C1C] mb-6 text-xl">Keep savings in a separate account from everyday spending:</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#E5D7C4] p-6 rounded-lg">
                  <Lock className="w-8 h-8 text-[#889063] mb-3" />
                  <p className="text-[#1C1C1C] font-bold mb-2 text-lg">Reduces temptation</p>
                  <p className="text-[#1C1C1C] text-lg">Out of sight, less likely to spend</p>
                </div>
                <div className="bg-[#E5D7C4] p-6 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-[#889063] mb-3" />
                  <p className="text-[#1C1C1C] font-bold mb-2 text-lg">Shows progress</p>
                  <p className="text-[#1C1C1C] text-lg">Watching the balance grow motivates you</p>
                </div>
              </div>

              <div className="bg-[#CFBB99] rounded-lg p-6">
                <p className="text-[#1C1C1C] font-bold text-xl">
                  Separation creates intentionality around spending and saving.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-[#889063] p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white text-[#889063] flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold">5</span>
                </div>
                <h3 className="text-3xl text-white" style={{ letterSpacing: '-0.89px' }}>
                  Track progress regularly
                </h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[#1C1C1C] mb-6 text-xl">Check your savings balance regularly to stay motivated:</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 bg-[#E5D7C4] p-5 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] font-semibold mb-1 text-lg">Weekly check ins</p>
                    <p className="text-[#1C1C1C] text-lg">See small progress add up</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#E5D7C4] p-5 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] font-semibold mb-1 text-lg">Celebrate milestones</p>
                    <p className="text-[#1C1C1C] text-lg">$100 saved, $500 saved, etc.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#E5D7C4] p-5 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] font-semibold mb-1 text-lg">Adjust when needed</p>
                    <p className="text-[#1C1C1C] text-lg">Life changes, your plan can too</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#889063] text-white rounded-lg p-6">
                <p className="text-xl font-semibold">
                  Seeing progress reinforces the habit.
                </p>
              </div>
            </div>
          </div>

          {/* Example Plan */}
          <div className="bg-gradient-to-r from-[#CFBB99] to-[#E5D7C4] rounded-lg p-8">
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Example sustainable saving plan
            </h2>
            
            <div className="bg-white rounded-lg p-8 space-y-6">
              <div className="border-l-4 border-[#889063] pl-6">
                <p className="text-[#1C1C1C] font-bold mb-2 text-xl">Goal:</p>
                <p className="text-[#1C1C1C] text-lg">Build a $500 emergency fund</p>
              </div>
              <div className="border-l-4 border-[#889063] pl-6">
                <p className="text-[#1C1C1C] font-bold mb-2 text-xl">Amount:</p>
                <p className="text-[#1C1C1C] text-lg">$25 per week</p>
              </div>
              <div className="border-l-4 border-[#889063] pl-6">
                <p className="text-[#1C1C1C] font-bold mb-2 text-xl">Method:</p>
                <p className="text-[#1C1C1C] text-lg">Automatic transfer every Friday</p>
              </div>
              <div className="border-l-4 border-[#889063] pl-6">
                <p className="text-[#1C1C1C] font-bold mb-2 text-xl">Account:</p>
                <p className="text-[#1C1C1C] text-lg">Separate high yield savings account</p>
              </div>
              <div className="border-l-4 border-[#889063] pl-6">
                <p className="text-[#1C1C1C] font-bold mb-2 text-xl">Timeline:</p>
                <p className="text-[#1C1C1C] text-lg">20 weeks (about 5 months)</p>
              </div>
              <div className="border-l-4 border-[#889063] pl-6">
                <p className="text-[#1C1C1C] font-bold mb-2 text-xl">Tracking:</p>
                <p className="text-[#1C1C1C] text-lg">Check balance every Monday morning</p>
              </div>
            </div>

            <div className="mt-6 bg-[#354024] text-white p-6 rounded-lg text-center">
              <p className="text-2xl font-semibold">
                Simple, realistic, and sustainable.
              </p>
            </div>
          </div>

          {/* Common Adjustments */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              When to adjust your plan
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">
              A good saving plan is flexible. Adjust when:
            </p>
            
            <div className="space-y-4">
              <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-start gap-4">
                <RefreshCw className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#1C1C1C] font-bold mb-2 text-lg">Your income changes</p>
                  <p className="text-[#1C1C1C] text-lg">Increase or decrease your amount accordingly</p>
                </div>
              </div>
              <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-start gap-4">
                <RefreshCw className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#1C1C1C] font-bold mb-2 text-lg">You hit a milestone</p>
                  <p className="text-[#1C1C1C] text-lg">Set a new goal or redirect savings</p>
                </div>
              </div>
              <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-start gap-4">
                <RefreshCw className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#1C1C1C] font-bold mb-2 text-lg">Life circumstances shift</p>
                  <p className="text-[#1C1C1C] text-lg">Adjust to fit your current reality</p>
                </div>
              </div>
              <div className="bg-[#E5D7C4] p-6 rounded-lg flex items-start gap-4">
                <RefreshCw className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#1C1C1C] font-bold mb-2 text-lg">It feels too difficult</p>
                  <p className="text-[#1C1C1C] text-lg">Lower the amount to maintain consistency</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-[#E5D7C4] p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">Choose one focus to start</span>
              </div>
              <div className="flex items-start gap-3 bg-[#E5D7C4] p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">Set a realistic saving amount</span>
              </div>
              <div className="flex items-start gap-3 bg-[#E5D7C4] p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">Automate transfers</span>
              </div>
              <div className="flex items-start gap-3 bg-[#E5D7C4] p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">Keep savings separate</span>
              </div>
              <div className="flex items-start gap-3 bg-[#E5D7C4] p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">Track progress regularly</span>
              </div>
              <div className="flex items-start gap-3 bg-[#E5D7C4] p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                <span className="text-[#1C1C1C] text-lg">Adjust when life changes</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Check Quiz */}
      <section className="px-6 py-12 md:px-12 bg-[#CFBB99]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
            <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-4">
              1. What is the first step in creating a sustainable saving plan?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Save as much as possible', correct: false },
                { label: 'B', text: 'Choose one focus', correct: true },
                { label: 'C', text: 'Open multiple accounts', correct: false },
                { label: 'D', text: 'Wait for more income', correct: false }
              ].map((option) => {
                const isSelected = selectedAnswers[1] === option.label;
                const isIncorrect = incorrectAnswers[`1-${option.label}`];
                
                return (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerClick(1, option.label, option.correct)}
                    disabled={selectedAnswers[1] !== undefined}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all text-lg ${
                      isSelected
                        ? 'border-[#889063] bg-[#889063]/10'
                        : isIncorrect
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/50 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="font-semibold text-[#1C1C1C]">{option.label})</span> {option.text}
                    {isSelected && (
                      <CheckCircle2 className="inline-block ml-2 w-5 h-5 text-[#889063]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
            <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-4">
              2. Why should savings be automated?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'It removes the decision', correct: true },
                { label: 'B', text: 'It is harder to track', correct: false },
                { label: 'C', text: 'It costs more money', correct: false },
                { label: 'D', text: 'It is required by law', correct: false }
              ].map((option) => {
                const isSelected = selectedAnswers[2] === option.label;
                const isIncorrect = incorrectAnswers[`2-${option.label}`];
                
                return (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerClick(2, option.label, option.correct)}
                    disabled={selectedAnswers[2] !== undefined}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all text-lg ${
                      isSelected
                        ? 'border-[#889063] bg-[#889063]/10'
                        : isIncorrect
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/50 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="font-semibold text-[#1C1C1C]">{option.label})</span> {option.text}
                    {isSelected && (
                      <CheckCircle2 className="inline-block ml-2 w-5 h-5 text-[#889063]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-4">
              3. When should you adjust your saving plan?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Never', correct: false },
                { label: 'B', text: 'When life circumstances change', correct: true },
                { label: 'C', text: 'Every day', correct: false },
                { label: 'D', text: 'Only once a year', correct: false }
              ].map((option) => {
                const isSelected = selectedAnswers[3] === option.label;
                const isIncorrect = incorrectAnswers[`3-${option.label}`];
                
                return (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerClick(3, option.label, option.correct)}
                    disabled={selectedAnswers[3] !== undefined}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all text-lg ${
                      isSelected
                        ? 'border-[#889063] bg-[#889063]/10'
                        : isIncorrect
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/50 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="font-semibold text-[#1C1C1C]">{option.label})</span> {option.text}
                    {isSelected && (
                      <CheckCircle2 className="inline-block ml-2 w-5 h-5 text-[#889063]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Action Step */}
      <section className="px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-[#889063]">
            <div className="flex items-start gap-4 mb-6">
              <Flag className="w-12 h-12 text-[#889063] flex-shrink-0" />
              <div>
                <h2 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>Action step</h2>
                <p className="text-[#1C1C1C] text-xl mb-6">
                  Write down your sustainable saving plan using the five steps from this lesson.
                </p>
                <p className="text-[#1C1C1C] text-xl">
                  Start with something small that feels achievable.
                </p>
              </div>
            </div>
            
            {/* Planning Template */}
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <p className="text-[#1C1C1C] font-semibold mb-4 text-xl">My saving plan:</p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg mb-2">1. My focus:</p>
                  <p className="text-[#1C1C1C] opacity-50 text-lg">_____________________</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg mb-2">2. My amount:</p>
                  <p className="text-[#1C1C1C] opacity-50 text-lg">_____________________</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg mb-2">3. My automation method:</p>
                  <p className="text-[#1C1C1C] opacity-50 text-lg">_____________________</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg mb-2">4. My separate account:</p>
                  <p className="text-[#1C1C1C] opacity-50 text-lg">_____________________</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg mb-2">5. How I will track:</p>
                  <p className="text-[#1C1C1C] opacity-50 text-lg">_____________________</p>
                </div>
              </div>
            </div>
          </div>

          {/* Congratulations Section */}
          <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-10 mt-12">
            <div className="text-center mb-8">
              <Award className="w-20 h-20 mx-auto mb-6" />
              <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                Congratulations!
              </h2>
              <p className="text-2xl mb-4">
                You have completed the Saving Strategies module.
              </p>
              <p className="text-xl">
                You now have the tools to build a saving plan that works for your life.
              </p>
            </div>
            
            <div className="space-y-4 bg-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-xl">Understanding why saving matters</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-xl">Setting realistic goals</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-xl">Building strong habits</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-xl">Staying consistent through challenges</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/saving-strategies/lesson-9"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Module Complete!</p>
              <Link 
                to="/saving-strategies"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Back to Saving Strategies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}