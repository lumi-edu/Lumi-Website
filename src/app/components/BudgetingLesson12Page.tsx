import { Link } from './RouterLink';
import { ArrowLeft, CheckCircle2, Repeat, Target, Calendar, TrendingUp, Zap, AlertCircle, Award, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function BudgetingLesson12Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [incorrectAnswers, setIncorrectAnswers] = useState<{[key: string]: boolean}>({});

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            to="/budgeting-basics" 
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Budgeting Basics
          </Link>
        </div>
      </div>

      {/* Lesson Header */}
      <section className="px-6 pb-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.1px' }}>
            Sticking to Your Budget (Even When It Is Hard)
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-70">
            Module: Budgeting Basics • Lesson 12
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              The hardest part of budgeting is not the math
            </h2>

            <p className="text-[#1C1C1C] text-lg mb-8">
              Most people can make a budget.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-8">The hard part is sticking to it when:</p>
              <div className="space-y-5">
                <div className="flex items-center gap-4 p-6 bg-[#E5D7C4] rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-[#354024]"></div>
                  <span className="text-[#1C1C1C] text-lg">You are tired</span>
                </div>
                <div className="flex items-center gap-4 p-6 bg-[#E5D7C4] rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-[#354024]"></div>
                  <span className="text-[#1C1C1C] text-lg">You are busy</span>
                </div>
                <div className="flex items-center gap-4 p-6 bg-[#E5D7C4] rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-[#354024]"></div>
                  <span className="text-[#1C1C1C] text-lg">Something unexpected comes up</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white p-10 rounded-3xl shadow-xl">
              <p className="text-3xl font-bold mb-4">
                This lesson is not about willpower.
              </p>
              <p className="text-2xl">
                It is about building habits that make budgeting feel natural instead of forced.
              </p>
            </div>
          </div>

          {/* Habits vs Motivation */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Why habits matter more than motivation
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Motivation */}
              <div className="bg-[#FFCFD0]/30 border-2 border-[#FFCFD0] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Zap className="w-10 h-10 text-[#FFCFD0]" />
                  <h3 className="text-2xl font-bold text-[#354024]">Motivation</h3>
                </div>
                <p className="text-[#1C1C1C] text-lg mb-6">Comes and goes.</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white rounded-full h-4">
                    <div className="bg-[#FFCFD0] h-4 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  <span className="text-sm text-[#354024] font-semibold">Temporary</span>
                </div>
              </div>

              {/* Habits */}
              <div className="bg-[#889063]/20 border-2 border-[#889063] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Repeat className="w-10 h-10 text-[#889063]" />
                  <h3 className="text-2xl font-bold text-[#354024]">Habits</h3>
                </div>
                <p className="text-[#1C1C1C] text-lg mb-6">Keep things going.</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white rounded-full h-4">
                    <div className="bg-[#889063] h-4 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="text-sm text-[#354024] font-semibold">Lasting</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10 mb-8">
              <p className="text-[#1C1C1C] text-lg mb-6">
                If budgeting only works when you feel inspired, it will not last very long.
              </p>
            </div>

            <div className="bg-[#354024] text-white p-10 rounded-2xl">
              <p className="text-2xl font-semibold">
                Small habits make budgeting automatic and less stressful.
              </p>
            </div>
          </div>

          {/* Start small */}
          <div className="bg-[#CFBB99]/30 rounded-3xl p-10 border-2 border-[#CFBB99]">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#354024] flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Start small on purpose
              </h2>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              A common mistake is trying to change everything at once.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Don't do this */}
              <div className="bg-[#FFCFD0]/30 border-l-4 border-[#FFCFD0] rounded-r-2xl p-8">
                <p className="text-[#354024] font-semibold text-xl mb-6">Instead of:</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#FFCFD0] text-2xl">×</span>
                    <span className="text-[#1C1C1C] text-lg">Tracking every purchase</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#FFCFD0] text-2xl">×</span>
                    <span className="text-[#1C1C1C] text-lg">Checking your budget constantly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#FFCFD0] text-2xl">×</span>
                    <span className="text-[#1C1C1C] text-lg">Being overly strict</span>
                  </div>
                </div>
              </div>

              {/* Do this */}
              <div className="bg-white rounded-2xl p-8">
                <p className="text-[#354024] font-semibold text-xl mb-6">Focus on one or two simple habits.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                    <span className="text-[#1C1C1C] text-lg">Checking budget once a week</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                    <span className="text-[#1C1C1C] text-lg">Writing down spending daily</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                    <span className="text-[#1C1C1C] text-lg">Reviewing before big purchases</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#354024] to-[#889063] text-white p-8 rounded-2xl">
              <p className="text-2xl font-semibold">
                Small actions done consistently matter more than big actions done once.
              </p>
            </div>
          </div>

          {/* Real-life scenario 1 */}
          <div className="bg-gradient-to-br from-[#889063] to-[#CFBB99] rounded-3xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Real-life scenario: missing a budget goal
            </h2>
            
            <p className="text-[#1C1C1C] text-lg mb-8">You planned to save money this month.</p>

            <div className="bg-white rounded-2xl p-8 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-6">Then:</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#E5D7C4] p-5 rounded-xl">
                  <AlertCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">You spent more than expected</span>
                </div>
                <div className="flex items-start gap-4 bg-[#E5D7C4] p-5 rounded-xl">
                  <AlertCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">Saving did not happen</span>
                </div>
                <div className="flex items-start gap-4 bg-[#E5D7C4] p-5 rounded-xl">
                  <AlertCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-1" />
                  <span className="text-[#1C1C1C] text-lg">You feel discouraged</span>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-8 rounded-2xl mb-6">
              <p className="text-2xl font-semibold mb-4">This does not mean budgeting failed.</p>
              <p className="text-xl">It means something needs adjusting.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-4 border-[#FFCFD0]">
              <p className="text-2xl font-semibold text-[#354024]">
                Missing a goal is information, not a reason to quit.
              </p>
            </div>
          </div>

          {/* Make it routine */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#889063] flex items-center justify-center shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Make budgeting part of your routine
              </h2>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              Budgeting works best when it fits into your life.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-8">Some easy ways to build it into your routine:</p>
              <div className="space-y-5">
                <div className="flex items-start gap-5 p-6 bg-[#E5D7C4] rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#889063] flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <div>
                    <p className="text-[#1C1C1C] text-lg">Check your budget at the same time each week</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-[#E5D7C4] rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#889063] flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <div>
                    <p className="text-[#1C1C1C] text-lg">Review spending while waiting in line or before bed</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-[#E5D7C4] rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#889063] flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <div>
                    <p className="text-[#1C1C1C] text-lg">Pair budgeting with something you already do</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#889063]/20 border-l-4 border-[#889063] p-8 rounded-r-2xl">
              <p className="text-[#354024] font-semibold text-lg">
                When budgeting becomes routine, it stops feeling like extra work.
              </p>
            </div>
          </div>

          {/* Progress over perfection */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#889063] flex items-center justify-center shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Progress matters more than perfection
              </h2>
            </div>

            <p className="text-[#1C1C1C] text-lg mb-8">
              No one follows a budget perfectly.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10 mb-8">
              <p className="text-[#354024] font-semibold text-xl mb-8">The goal is not to be flawless. The goal is to:</p>
              <div className="space-y-5">
                <div className="flex items-center gap-5 p-6 bg-[#E5D7C4] rounded-xl border-l-4 border-[#FFCFD0]">
                  <Award className="w-7 h-7 text-[#FFCFD0] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Be more aware than before</span>
                </div>
                <div className="flex items-center gap-5 p-6 bg-[#E5D7C4] rounded-xl border-l-4 border-[#FFCFD0]">
                  <Award className="w-7 h-7 text-[#FFCFD0] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Make fewer surprise decisions</span>
                </div>
                <div className="flex items-center gap-5 p-6 bg-[#E5D7C4] rounded-xl border-l-4 border-[#FFCFD0]">
                  <Award className="w-7 h-7 text-[#FFCFD0] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Feel more confident over time</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#889063] to-[#CFBB99] p-10 rounded-2xl">
              <p className="text-3xl font-bold text-[#354024]">
                Even small improvements are wins.
              </p>
            </div>
          </div>

          {/* When you feel stuck */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              What to do when you feel stuck
            </h2>

            <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-2xl p-10 mb-8">
              <p className="text-[#354024] text-lg mb-8">If budgeting starts to feel frustrating:</p>
              <div className="space-y-5">
                <div className="flex items-center gap-5 p-5 bg-white rounded-xl">
                  <ArrowRight className="w-6 h-6 text-[#889063] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Take a step back</span>
                </div>
                <div className="flex items-center gap-5 p-5 bg-white rounded-xl">
                  <ArrowRight className="w-6 h-6 text-[#889063] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Look at one category</span>
                </div>
                <div className="flex items-center gap-5 p-5 bg-white rounded-xl">
                  <ArrowRight className="w-6 h-6 text-[#889063] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Make one small change</span>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-10 rounded-2xl">
              <p className="text-2xl font-semibold">
                You do not need to fix everything at once.
              </p>
            </div>
          </div>

          {/* Real-life scenario 2 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#354024]/10">
            <h2 className="text-3xl font-bold text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Real-life scenario: budgeting burnout
            </h2>
            
            <div className="bg-[#FFCFD0]/30 border-l-4 border-[#FFCFD0] p-8 rounded-r-2xl mb-8">
              <p className="text-[#354024] font-semibold text-lg mb-3">The Problem:</p>
              <p className="text-[#1C1C1C] text-lg">You feel tired of tracking and planning.</p>
            </div>

            <div className="bg-[#889063]/10 border-l-4 border-[#889063] p-8 rounded-r-2xl mb-8">
              <p className="text-[#354024] font-semibold text-lg mb-6">Instead of quitting completely, you:</p>
              <div className="space-y-4 ml-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                  <p className="text-[#1C1C1C] text-lg">Simplify your budget</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                  <p className="text-[#1C1C1C] text-lg">Reduce categories</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                  <p className="text-[#1C1C1C] text-lg">Focus on just income and savings for a bit</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#354024] to-[#889063] text-white p-8 rounded-2xl">
              <p className="text-2xl font-semibold">
                This keeps the habit alive without overwhelming you.
              </p>
            </div>
          </div>

          {/* Quick recap */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Quick recap
            </h2>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#354024]/10">
              <ul className="space-y-5 text-[#1C1C1C] text-lg">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Habits matter more than motivation</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Small actions add up</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Missing a goal is part of learning</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#889063] flex-shrink-0 mt-1" />
                  <span>Consistency beats perfection</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mini Quiz */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Quick Check
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">Test your understanding (30 seconds).</p>
            
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 1</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What helps you stick to a budget long term?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Motivation alone</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) Perfect planning</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      selectedAnswers[1] === "C" 
                        ? "border-2 border-[#889063] bg-[#889063]/20 shadow-md" 
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "C", true)}
                  >
                    <p className={selectedAnswers[1] === "C" ? "text-[#354024] font-semibold text-lg" : "text-[#1C1C1C] text-lg"}>
                      C) Small consistent habits
                    </p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['1-D']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(1, "D", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">D) Never making mistakes</p>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 2</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What should you do if budgeting feels overwhelming?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Quit completely</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) Ignore it</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      selectedAnswers[2] === "C" 
                        ? "border-2 border-[#889063] bg-[#889063]/20 shadow-md" 
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "C", true)}
                  >
                    <p className={selectedAnswers[2] === "C" ? "text-[#354024] font-semibold text-lg" : "text-[#1C1C1C] text-lg"}>
                      C) Simplify and adjust
                    </p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['2-D']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(2, "D", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">D) Wait until next year</p>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">Question 3</h3>
                <p className="text-[#1C1C1C] text-lg mb-6">What does progress look like in budgeting?</p>
                <div className="space-y-4">
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "A", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">A) Never overspending</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "B", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">B) Following the budget perfectly</p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      selectedAnswers[3] === "C" 
                        ? "border-2 border-[#889063] bg-[#889063]/20 shadow-md" 
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "C", true)}
                  >
                    <p className={selectedAnswers[3] === "C" ? "text-[#354024] font-semibold text-lg" : "text-[#1C1C1C] text-lg"}>
                      C) Feeling more aware and confident
                    </p>
                  </div>
                  <div 
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      incorrectAnswers['3-D']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-[#E5D7C4] border-2 border-transparent hover:border-[#889063]"
                    }`}
                    onClick={() => handleAnswerClick(3, "D", false)}
                  >
                    <p className="text-[#1C1C1C] text-lg">D) Saving everything</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Step */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Action Step (Do This Now)
            </h2>
            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-3xl p-10 shadow-xl border-4 border-[#FFCFD0]">
              <p className="text-2xl mb-8 font-semibold">
                Choose one small habit you want to keep going.
              </p>
              <div className="bg-white/20 p-8 rounded-2xl mb-8">
                <p className="mb-6 text-xl font-semibold">Examples:</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                    <span className="text-lg">Weekly budget check</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                    <span className="text-lg">Daily spending note</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#FFCFD0] rounded-full"></span>
                    <span className="text-lg">Monthly review</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg italic">
                Write it down and commit to trying it for the next two weeks.
              </p>
            </div>
          </div>

          {/* Completion Message */}
          <div className="bg-gradient-to-br from-[#889063] to-[#CFBB99] rounded-3xl p-12 text-center shadow-xl border-4 border-[#FFCFD0]">
            <div className="flex justify-center mb-8">
              <Award className="w-24 h-24 text-[#354024]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
              Congratulations!
            </h2>
            <p className="text-2xl mb-6 text-[#354024] font-semibold">
              You have completed the Budgeting Basics module.
            </p>
            <p className="text-xl text-[#1C1C1C] mb-10">
              You now have the foundation to build a budget that works for your life.
            </p>
            <Link 
              to="/resources"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block bg-[#354024] text-white px-10 py-5 rounded-2xl hover:opacity-90 transition-opacity font-semibold text-xl shadow-lg"
            >
              Check Out Our Resources
            </Link>
          </div>

          {/* Module Complete */}
          <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
            <div className="flex items-center gap-3 mb-6">
              <Award size={36} style={{ color: '#889063' }} />
              <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>You've completed the Budgeting Basics module!</h2>
            </div>

            <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
              You now have all the knowledge you need to build a strong budgeting foundation:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Understanding income and expenses</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Creating realistic budgets</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Tracking spending effectively</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Adjusting budgets when needed</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Building healthy money habits</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }}>Staying consistent over time</p>
              </div>
            </div>

            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-xl mb-4">
                Remember: Budgeting is a skill that improves with practice.
              </p>
              <p style={{ color: '#1C1C1C' }} className="text-lg">
                Every smart financial decision starts with knowing where your money goes.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/budgeting-basics/lesson-11"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <Link 
                to="/budgeting-basics"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Back to Budgeting Basics →
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