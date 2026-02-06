import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, Lightbulb, Target, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function BudgetingLesson1Page() {
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
            What Is a Budget (and Why It Actually Matters)
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-70">
            Module: Budgeting Basics • Lesson 1
          </p>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-[#354024]" />
              <h2 className="text-3xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>What You'll Learn</h2>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-6">By the end of this lesson, you'll be able to:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#1C1C1C] text-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                <span>Understand what a budget really is</span>
              </li>
              <li className="flex items-start gap-3 text-[#1C1C1C] text-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                <span>Explain why budgeting is helpful (especially for teens)</span>
              </li>
              <li className="flex items-start gap-3 text-[#1C1C1C] text-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                <span>Recognize how budgeting applies to real-life situations</span>
              </li>
              <li className="flex items-start gap-3 text-[#1C1C1C] text-lg">
                <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                <span>Check your understanding with a quick quiz</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* What Is a Budget */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Let's Start With a Common Misunderstanding
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-6">
              Most people hear the word <strong>budget</strong> and think:
            </p>
            <div className="bg-[#354024] text-[#FFCFD0] p-8 rounded-2xl mb-6 italic text-lg">
              "That means I can't spend money."
            </div>
            <p className="text-[#1C1C1C] text-lg mb-6">
              In reality, budgeting is the opposite.
            </p>
            <div className="bg-[#354024] text-white p-8 rounded-2xl mb-8 shadow-md">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 flex-shrink-0 mt-1 text-[#FFCFD0]" />
                <p className="text-xl font-semibold">
                  A budget is what lets you <strong>decide where your money goes</strong> instead of wondering where it went.
                </p>
              </div>
            </div>

            <div className="bg-[#CFBB99]/40 p-8 rounded-2xl border-l-4 border-[#889063]">
              <p className="text-[#1C1C1C] text-lg">
                Even if you don't earn much yet, learning to budget early builds habits that make money less stressful later.
              </p>
            </div>
          </div>

          {/* Why Budgeting Matters */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Why Budgeting Matters
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-6">
              Budgeting helps you:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#354024]/10">
                <CheckCircle2 className="w-6 h-6 text-[#889063] mb-3" />
                <p className="text-[#1C1C1C]">Avoid running out of money unexpectedly</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#354024]/10">
                <CheckCircle2 className="w-6 h-6 text-[#889063] mb-3" />
                <p className="text-[#1C1C1C]">Save for goals (college, a car, trips, emergencies)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#354024]/10">
                <CheckCircle2 className="w-6 h-6 text-[#889063] mb-3" />
                <p className="text-[#1C1C1C]">Feel more confident about money decisions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#354024]/10">
                <CheckCircle2 className="w-6 h-6 text-[#889063] mb-3" />
                <p className="text-[#1C1C1C]">Build skills most adults wish they learned earlier</p>
              </div>
            </div>
          </div>

          {/* Scenario 1 */}
          <div className="bg-[#CFBB99]/30 p-10 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-[#354024]" />
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Real-World Scenario #1: The First Paycheck
              </h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8 border border-[#354024]/10">
              <h3 className="text-2xl font-semibold text-[#354024] mb-4">Scenario:</h3>
              <p className="text-[#1C1C1C] text-lg mb-4">
                You earn $400 a month from a part-time job.
              </p>
              <p className="text-[#1C1C1C] text-lg">
                At first, that feels like a lot.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 p-8 rounded-xl border-2 border-[#FFCFD0]/50">
                <h4 className="font-semibold text-[#1C1C1C] text-xl mb-4">Without a budget:</h4>
                <ul className="space-y-3 text-[#1C1C1C]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFCFD0]">•</span>
                    <span>Small purchases add up quickly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFCFD0]">•</span>
                    <span>You're surprised when your balance drops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFCFD0]">•</span>
                    <span>Saving feels impossible</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#354024] text-white p-8 rounded-xl shadow-md">
                <h4 className="font-semibold text-xl mb-4">With a budget:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>You plan for transportation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>You set aside money for savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>You still leave room for fun</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-2xl font-semibold text-[#354024] mt-8">
              Same income, very different outcome.
            </p>
          </div>

          {/* Budgeting ≠ Restriction */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Budgeting ≠ Restriction
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-4">
              A budget doesn't mean "no spending."
            </p>
            <p className="text-[#1C1C1C] text-lg mb-8">
              It means <strong className="text-[#354024]">intentional spending</strong>.
            </p>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
              <h3 className="text-2xl font-semibold text-[#354024] mb-6">Example:</h3>
              <p className="text-[#1C1C1C] text-lg mb-4">You want:</p>
              <ul className="space-y-3 text-[#1C1C1C] text-lg ml-6 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#889063]">•</span>
                  <span>Coffee a few times a week</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#889063]">•</span>
                  <span>To save for a concert next month</span>
                </li>
              </ul>
              <p className="text-[#1C1C1C] text-lg mb-4">A budget helps you decide:</p>
              <div className="bg-[#CFBB99]/40 p-6 rounded-xl border-l-4 border-[#889063]">
                <p className="text-[#1C1C1C] text-lg italic">
                  "How much coffee can I enjoy and still reach my goal?"
                </p>
              </div>
              <p className="text-[#354024] mt-6 font-bold text-xl">
                That's control, not restriction.
              </p>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="bg-[#CFBB99]/30 p-10 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-[#354024]" />
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Real-World Scenario #2: Saving vs Spending
              </h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#354024]/10">
              <h3 className="text-2xl font-semibold text-[#354024] mb-4">Scenario:</h3>
              <p className="text-[#1C1C1C] text-lg mb-8">
                You want a new pair of shoes that costs $120.
              </p>
              <div className="mb-8">
                <h4 className="font-semibold text-[#1C1C1C] text-xl mb-4">If you spend everything as it comes in:</h4>
                <ul className="space-y-3 text-[#1C1C1C] ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFCFD0]">•</span>
                    <span>The purchase feels stressful</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFCFD0]">•</span>
                    <span>You might dip into savings (or give up)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#354024] text-white p-6 rounded-xl mb-6 shadow-md">
                <h4 className="font-semibold text-xl mb-4">With a budget:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>You plan to save $30 a week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>In a month, you buy the shoes without stress</span>
                  </li>
                </ul>
              </div>
              <p className="text-[#354024] font-bold text-xl">
                Budgeting turns big expenses into manageable steps.
              </p>
            </div>
          </div>

          {/* What a Budget Is Not */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              What a Budget Is Not
            </h2>
            <p className="text-[#1C1C1C] text-lg mb-6">A budget is <strong>not</strong>:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#354024]/10">
                <p className="text-[#1C1C1C]">A one-time thing</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#354024]/10">
                <p className="text-[#1C1C1C]">A fixed rule that never changes</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#354024]/10">
                <p className="text-[#1C1C1C]">Only for adults or "rich people"</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#354024]/10">
                <p className="text-[#1C1C1C]">About being perfect</p>
              </div>
            </div>
            <div className="bg-[#CFBB99]/40 p-8 rounded-2xl border-l-4 border-[#889063]">
              <p className="text-[#1C1C1C] text-lg font-semibold">
                Budgets should change as your life changes.
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
                <span className="text-xl">A budget is a plan, not a restriction</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
                <span className="text-xl">Budgeting gives you control over your money</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
                <span className="text-xl">Starting early makes money decisions easier later</span>
              </div>
            </div>
          </div>

          {/* Action Step */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-[#354024]" />
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Action Step (Do This Now)
              </h2>
            </div>
            <div className="bg-[#FFCFD0] border-2 border-[#FFCFD0] p-8 rounded-2xl">
              <p className="text-[#1C1C1C] text-lg">
                Write down one or two things you usually spend money on and notice how quickly small expenses add up.
              </p>
            </div>
          </div>

          {/* Quick Check */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-8" style={{ letterSpacing: '-0.1px' }}>
              Quick Check
            </h2>
            <div className="space-y-8">
              
              {/* Question 1 */}
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">
                  1. What is the main purpose of a budget?
                </h3>
                <div className="space-y-4">
                  {[
                    { letter: 'A', text: 'To limit your spending', correct: false },
                    { letter: 'B', text: 'To track every purchase perfectly', correct: false },
                    { letter: 'C', text: 'To give your money a clear plan', correct: true },
                    { letter: 'D', text: 'To increase your income', correct: false }
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
                      <strong className="text-[#354024]">Correct!</strong> A budget gives your money a clear plan, helping you make intentional decisions about spending and saving.
                    </p>
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">
                  2. Which statement best describes a budget?
                </h3>
                <div className="space-y-4">
                  {[
                    { letter: 'A', text: 'A record of past spending', correct: false },
                    { letter: 'B', text: 'A plan for future income and expenses', correct: true },
                    { letter: 'C', text: 'A way to eliminate all spending', correct: false },
                    { letter: 'D', text: 'A tool only adults need', correct: false }
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
                      <strong className="text-[#354024]">Correct!</strong> A budget is forward-looking—it helps you plan how to use your income and manage your expenses before they happen.
                    </p>
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10">
                <h3 className="text-2xl font-semibold text-[#354024] mb-6">
                  3. Why do many people feel like their money disappears without a budget?
                </h3>
                <div className="space-y-4">
                  {[
                    { letter: 'A', text: 'They do not earn enough', correct: false },
                    { letter: 'B', text: 'Their income is taxed', correct: false },
                    { letter: 'C', text: 'They spend without intention or structure', correct: true },
                    { letter: 'D', text: 'Banks take their money', correct: false }
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
                      <strong className="text-[#354024]">Correct!</strong> Without a budget, spending happens without intention or structure, making it easy to lose track of where your money goes.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center pt-12 border-t-2 border-[#354024]/20">
            <div className="text-right">
              <p className="text-[#1C1C1C] text-lg mb-2 opacity-70">Next Lesson</p>
              <Link 
                to="/budgeting-basics/lesson-2"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-[#FFCFD0] px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-semibold text-lg"
              >
                Setting Financial Goals Before You Budget →
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