import { Link } from './RouterLink';
import { ArrowLeft, CheckCircle2, Target, Lightbulb, TrendingUp, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function BudgetingLesson2Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [incorrectAnswers, setIncorrectAnswers] = useState<{[key: string]: boolean}>({});

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswerClick = (questionNum: number, answer: string, isCorrect: boolean) => {
    if (isCorrect) {
      setSelectedAnswers(prev => ({...prev, [questionNum]: answer}));
      // Clear any incorrect answers for this question
      const keys = Object.keys(incorrectAnswers).filter(key => !key.startsWith(`${questionNum}-`));
      const newIncorrect: {[key: string]: boolean} = {};
      keys.forEach(key => newIncorrect[key] = true);
      setIncorrectAnswers(newIncorrect);
    } else {
      // Mark this answer as incorrect
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
            Setting Financial Goals Before You Budget
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-70">
            Module: Budgeting Basics • Lesson 2
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* What You'll Learn */}
          <div>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-[#354024]" />
                <h2 className="text-3xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>What You'll Learn</h2>
              </div>
              <p className="text-[#1C1C1C] text-lg mb-6">
                By the end of this lesson, you'll be able to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[#1C1C1C] text-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span>Understand what a financial goal is</span>
                </li>
                <li className="flex items-start gap-3 text-[#1C1C1C] text-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span>Tell the difference between short-term and long-term goals</span>
                </li>
                <li className="flex items-start gap-3 text-[#1C1C1C] text-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span>Set realistic goals that actually motivate you</span>
                </li>
                <li className="flex items-start gap-3 text-[#1C1C1C] text-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span>Learn why goals should come before building a budget</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Goals Come Before Budgets */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Why Goals Come Before Budgets
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-6">
              A common mistake people make is starting a budget with numbers first.
            </p>
            <p className="text-[#1C1C1C] text-lg mb-6">
              But budgeting without goals is like:
            </p>
            <div className="bg-[#889063] text-white p-8 rounded-2xl mb-8 italic text-lg">
              Planning a road trip without knowing where you're going.
            </div>
            <p className="text-[#1C1C1C] text-lg mb-8">
              Goals give your budget direction.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-4">Without goals:</h3>
                <ul className="space-y-3 text-[#1C1C1C] text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFCFD0] text-2xl">•</span>
                    <span>Saving feels pointless</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFCFD0] text-2xl">•</span>
                    <span>Spending decisions feel random</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFCFD0] text-2xl">•</span>
                    <span>Budgets are easier to abandon</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#354024] text-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold mb-4">With goals:</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Every dollar has a purpose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Motivation is clearer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Progress feels rewarding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What Is a Financial Goal */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              What Is a Financial Goal?
            </h2>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10 mb-8">
              <p className="text-xl text-[#1C1C1C]">
                A financial goal is <strong className="text-[#354024]">something you want to achieve using your money</strong>.
              </p>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-6">
              It can be:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#CFBB99]/40 p-6 rounded-xl">
                <p className="text-[#1C1C1C] text-lg">Something you want to buy</p>
              </div>
              <div className="bg-[#CFBB99]/40 p-6 rounded-xl">
                <p className="text-[#1C1C1C] text-lg">Something you want to save for</p>
              </div>
              <div className="bg-[#CFBB99]/40 p-6 rounded-xl">
                <p className="text-[#1C1C1C] text-lg">Something you want to avoid (like debt or stress)</p>
              </div>
            </div>
            <div className="bg-[#354024] text-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 flex-shrink-0 mt-1 text-[#FFCFD0]" />
                <p className="text-xl font-semibold">
                  Goals don't have to be big. They just have to <strong>matter to you</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Real-World Scenario #1 */}
          <div className="bg-[#CFBB99]/30 p-10 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-[#354024]" />
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Real-World Scenario #1: "I Want to Save, But for What?"
              </h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8 border border-[#354024]/10">
              <h3 className="text-2xl font-semibold text-[#354024] mb-4">Scenario:</h3>
              <p className="text-[#1C1C1C] text-lg mb-6">
                You tell yourself you should "save more," but every month the money disappears.
              </p>
              <h3 className="text-2xl font-semibold text-[#354024] mb-4">Why?</h3>
              <p className="text-[#1C1C1C] text-lg">
                Because saving without a goal feels abstract.
              </p>
            </div>
            
            <p className="text-[#1C1C1C] text-lg mb-6">
              Now imagine this instead:
            </p>
            <div className="bg-[#889063] text-white p-8 rounded-2xl mb-6 text-lg">
              <p>
                You want <strong>$300 by summer for a trip</strong>
              </p>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-4 font-semibold">
              Suddenly:
            </p>
            <div className="bg-white rounded-xl p-8 mb-6 border border-[#354024]/10">
              <ul className="space-y-3 text-[#1C1C1C] text-lg">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span>Saving $25 a week feels doable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span>You're less likely to spend that money impulsively</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#354024] text-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 flex-shrink-0 mt-1 text-[#FFCFD0]" />
                <p className="text-xl font-semibold">
                  A goal turns saving from an idea into a plan.
                </p>
              </div>
            </div>
          </div>

          {/* Types of Financial Goals */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Types of Financial Goals
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#FFCFD0] rounded-full p-3">
                    <TrendingUp className="w-6 h-6 text-[#354024]" />
                  </div>
                  <h3 className="text-3xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>Short-Term Goals</h3>
                </div>
                <p className="text-[#1C1C1C] text-lg mb-6">
                  Goals you want to reach soon (weeks to months).
                </p>
                <p className="text-[#1C1C1C] text-lg mb-4 font-semibold">Examples:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-[#CFBB99]/40 p-4 rounded-xl">
                    <p className="text-[#1C1C1C]">Saving for new shoes</p>
                  </div>
                  <div className="bg-[#CFBB99]/40 p-4 rounded-xl">
                    <p className="text-[#1C1C1C]">Building a small emergency fund</p>
                  </div>
                  <div className="bg-[#CFBB99]/40 p-4 rounded-xl">
                    <p className="text-[#1C1C1C]">Paying for a school event</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#889063] rounded-full p-3">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>Long-Term Goals</h3>
                </div>
                <p className="text-[#1C1C1C] text-lg mb-6">
                  Goals that take longer (months to years).
                </p>
                <p className="text-[#1C1C1C] text-lg mb-4 font-semibold">Examples:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-[#CFBB99]/40 p-4 rounded-xl">
                    <p className="text-[#1C1C1C]">Saving for college</p>
                  </div>
                  <div className="bg-[#CFBB99]/40 p-4 rounded-xl">
                    <p className="text-[#1C1C1C]">Buying a car</p>
                  </div>
                  <div className="bg-[#CFBB99]/40 p-4 rounded-xl">
                    <p className="text-[#1C1C1C]">Avoiding student debt</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#CFBB99]/40 p-8 rounded-2xl border-l-4 border-[#889063] mt-8">
              <p className="text-[#1C1C1C] text-lg font-semibold">
                Both types matter, and most people have multiple goals at once.
              </p>
            </div>
          </div>

          {/* Real-World Scenario #2 */}
          <div className="bg-[#CFBB99]/30 p-10 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-[#354024]" />
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Real-World Scenario #2: Competing Goals
              </h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8 border border-[#354024]/10">
              <h3 className="text-2xl font-semibold text-[#354024] mb-4">Scenario:</h3>
              <p className="text-[#1C1C1C] text-lg mb-4">
                You earn $500 a month and want to:
              </p>
              <ul className="space-y-3 text-[#1C1C1C] text-lg ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#889063]">•</span>
                  <span>Go out with friends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#889063]">•</span>
                  <span>Save for a car</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#889063]">•</span>
                  <span>Build savings for college</span>
                </li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-4">Without clear goals:</h3>
                <p className="text-[#1C1C1C] text-lg">
                  Money goes wherever feels good in the moment
                </p>
              </div>
              <div className="bg-[#354024] text-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold mb-4">With clear goals:</h3>
                <p className="text-lg">
                  You decide how much goes to each priority
                </p>
              </div>
            </div>

            <div className="bg-[#354024] text-white p-8 rounded-2xl shadow-md mb-6">
              <p className="text-xl font-semibold">
                Spending becomes <strong>intentional</strong> instead of <strong>impulsive</strong>.
              </p>
            </div>

            <div className="bg-[#CFBB99]/40 p-8 rounded-2xl border-l-4 border-[#889063]">
              <p className="text-[#1C1C1C] text-lg font-semibold">
                A budget works best when it reflects what you actually care about.
              </p>
            </div>
          </div>

          {/* How to Set a Realistic Financial Goal */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              How to Set a Realistic Financial Goal
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              A good goal answers three questions:
            </p>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10 mb-8">
              <ol className="space-y-6 text-[#1C1C1C] text-lg">
                <li className="flex items-start gap-4">
                  <span className="bg-[#889063] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-[#354024] mb-2">What do I want?</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-[#889063] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-[#354024] mb-2">How much will it cost?</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-[#889063] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-[#354024] mb-2">When do I want it?</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <p className="text-[#1C1C1C] text-lg mb-6 font-semibold">Example:</p>
            <div className="bg-[#354024] text-white p-8 rounded-2xl mb-6 shadow-md">
              <p className="text-xl">
                I want to save <strong className="text-[#FFCFD0]">$600</strong> for college expenses in <strong className="text-[#FFCFD0]">6 months</strong>.
              </p>
            </div>
            <div className="bg-[#CFBB99]/40 p-8 rounded-2xl border-l-4 border-[#889063]">
              <p className="text-[#1C1C1C] text-lg font-semibold">
                That clarity makes budgeting possible.
              </p>
            </div>
          </div>

          {/* Common Goal-Setting Mistakes */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Common Goal-Setting Mistakes
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-8">
              Avoid these traps:
            </p>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10 mb-8">
              <ul className="space-y-5 text-[#1C1C1C] text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCFD0] text-2xl flex-shrink-0">✗</span>
                  <span>Setting goals that are too vague ("save more")</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCFD0] text-2xl flex-shrink-0">✗</span>
                  <span>Setting too many goals at once</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCFD0] text-2xl flex-shrink-0">✗</span>
                  <span>Choosing goals that don't actually matter to you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCFD0] text-2xl flex-shrink-0">✗</span>
                  <span>Forgetting to adjust goals over time</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#CFBB99]/40 p-8 rounded-2xl border-l-4 border-[#889063]">
              <p className="text-[#1C1C1C] text-lg font-semibold">
                Goals should motivate, not overwhelm.
              </p>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-[#354024] text-white p-10 rounded-2xl shadow-md">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.1px' }}>
              Key Takeaways
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
                <span className="text-xl">Goals give your budget purpose</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
                <span className="text-xl">Short-term and long-term goals both matter</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
                <span className="text-xl">Clear goals make saving and budgeting easier</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
                <span className="text-xl">Your budget should reflect your priorities</span>
              </div>
            </div>
          </div>

          {/* Mini Quiz */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Quick Check
            </h2>
            
            <div className="space-y-8">
              {/* Question 1 */}
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">
                  1. Why should goals come before budgeting?
                </h3>
                <div className="space-y-4">
                  {[
                    { letter: 'A', text: 'So budgets are stricter', correct: false },
                    { letter: 'B', text: 'So every dollar has a purpose', correct: true },
                    { letter: 'C', text: 'So spending is eliminated', correct: false },
                    { letter: 'D', text: 'So income increases', correct: false }
                  ].map((option) => {
                    const isSelected = selectedAnswers[1] === option.letter;
                    const isIncorrect = incorrectAnswers[`1-${option.letter}`];
                    
                    return (
                      <button
                        key={option.letter}
                        onClick={() => handleAnswerClick(1, option.letter, option.correct)}
                        disabled={selectedAnswers[1] !== undefined}
                        className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                          isSelected
                            ? 'border-[#889063] bg-[#CFBB99]/30'
                            : isIncorrect
                            ? 'border-red-400 bg-red-50'
                            : 'border-[#354024]/10 hover:border-[#889063] hover:bg-[#E5D7C4]'
                        } ${selectedAnswers[1] !== undefined ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-[#354024] text-lg">{option.letter})</span>
                          <span className="text-[#1C1C1C] text-lg">{option.text}</span>
                          {isSelected && (
                            <CheckCircle2 className="w-6 h-6 text-[#889063] ml-auto" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {selectedAnswers[1] && (
                  <div className="mt-6 p-6 bg-[#CFBB99]/40 rounded-xl border-l-4 border-[#889063]">
                    <p className="text-[#1C1C1C] text-lg">
                      <strong className="text-[#354024]">Correct!</strong> Goals give every dollar a purpose, making your budget more meaningful and easier to follow.
                    </p>
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">
                  2. Which is an example of a short-term goal?
                </h3>
                <div className="space-y-4">
                  {[
                    { letter: 'A', text: 'Saving for retirement', correct: false },
                    { letter: 'B', text: 'Buying a house', correct: false },
                    { letter: 'C', text: 'Saving for a school event', correct: true },
                    { letter: 'D', text: 'Building wealth for 20 years', correct: false }
                  ].map((option) => {
                    const isSelected = selectedAnswers[2] === option.letter;
                    const isIncorrect = incorrectAnswers[`2-${option.letter}`];
                    
                    return (
                      <button
                        key={option.letter}
                        onClick={() => handleAnswerClick(2, option.letter, option.correct)}
                        disabled={selectedAnswers[2] !== undefined}
                        className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                          isSelected
                            ? 'border-[#889063] bg-[#CFBB99]/30'
                            : isIncorrect
                            ? 'border-red-400 bg-red-50'
                            : 'border-[#354024]/10 hover:border-[#889063] hover:bg-[#E5D7C4]'
                        } ${selectedAnswers[2] !== undefined ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-[#354024] text-lg">{option.letter})</span>
                          <span className="text-[#1C1C1C] text-lg">{option.text}</span>
                          {isSelected && (
                            <CheckCircle2 className="w-6 h-6 text-[#889063] ml-auto" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {selectedAnswers[2] && (
                  <div className="mt-6 p-6 bg-[#CFBB99]/40 rounded-xl border-l-4 border-[#889063]">
                    <p className="text-[#1C1C1C] text-lg">
                      <strong className="text-[#354024]">Correct!</strong> Saving for a school event is a short-term goal because it can typically be achieved in weeks to months.
                    </p>
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">
                  3. What should you do if a goal feels too big?
                </h3>
                <div className="space-y-4">
                  {[
                    { letter: 'A', text: 'Give up completely', correct: false },
                    { letter: 'B', text: 'Ignore the goal', correct: false },
                    { letter: 'C', text: 'Break it into smaller pieces', correct: true },
                    { letter: 'D', text: 'Wait for more income', correct: false }
                  ].map((option) => {
                    const isSelected = selectedAnswers[3] === option.letter;
                    const isIncorrect = incorrectAnswers[`3-${option.letter}`];
                    
                    return (
                      <button
                        key={option.letter}
                        onClick={() => handleAnswerClick(3, option.letter, option.correct)}
                        disabled={selectedAnswers[3] !== undefined}
                        className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                          isSelected
                            ? 'border-[#889063] bg-[#CFBB99]/30'
                            : isIncorrect
                            ? 'border-red-400 bg-red-50'
                            : 'border-[#354024]/10 hover:border-[#889063] hover:bg-[#E5D7C4]'
                        } ${selectedAnswers[3] !== undefined ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-[#354024] text-lg">{option.letter})</span>
                          <span className="text-[#1C1C1C] text-lg">{option.text}</span>
                          {isSelected && (
                            <CheckCircle2 className="w-6 h-6 text-[#889063] ml-auto" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {selectedAnswers[3] && (
                  <div className="mt-6 p-6 bg-[#CFBB99]/40 rounded-xl border-l-4 border-[#889063]">
                    <p className="text-[#1C1C1C] text-lg">
                      <strong className="text-[#354024]">Correct!</strong> Breaking a big goal into smaller, manageable pieces makes it less overwhelming and easier to achieve.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/budgeting-basics/lesson-1"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-2 text-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#1C1C1C] text-lg mb-2 opacity-70">Next Lesson</p>
              <Link 
                to="/budgeting-basics/lesson-3"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-[#FFCFD0] px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-semibold text-lg"
              >
                Needs vs. Wants →
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