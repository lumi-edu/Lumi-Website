import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, TrendingUp, User, Users, Repeat, Award, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function SavingLesson4Page() {
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
            Saving on Any Income
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Saving Strategies • Lesson 4
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Intro Statement */}
          <div className="text-center">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Saving is not about how much you make
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-4">
              A lot of people believe saving only works if you earn a lot of money.
            </p>
            <p className="text-[#1C1C1C] text-xl mb-6">
              That belief stops people from even trying.
            </p>
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#354024] to-[#889063] text-white p-8 rounded-lg shadow-md">
              <p className="text-2xl font-semibold">
                Saving is not about the size of your income. It is about how you work with what you have.
              </p>
            </div>
          </div>

          {/* Why it feels impossible */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Why saving can feel impossible sometimes
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">Saving feels hard when:</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 p-4 bg-[#CFBB99]/30 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-[#354024] flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg">Income is limited</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#CFBB99]/30 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-[#354024] flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg">Income changes often</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#CFBB99]/30 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-[#354024] flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg">Expenses already feel tight</span>
              </div>
            </div>
            <div className="bg-[#889063]/10 border-l-4 border-[#889063] p-6 rounded-r-lg">
              <p className="text-[#1C1C1C] text-xl">
                None of this means saving is unrealistic. It just means your approach needs to be flexible.
              </p>
            </div>
          </div>

          {/* Person A vs Person B Comparison */}
          <div>
            <h3 className="text-3xl text-[#1C1C1C] mb-6 text-center" style={{ letterSpacing: '-0.89px' }}>
              Real-life scenario: different incomes, same habit
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Person A */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="bg-[#CFBB99] p-4 flex items-center gap-3">
                  <User className="w-6 h-6 text-[#354024]" />
                  <h4 className="font-bold text-[#354024] text-lg">Person A</h4>
                </div>
                <div className="p-6">
                  <p className="text-[#1C1C1C] text-lg mb-4">
                    Saves $100 once and stops.
                  </p>
                  <div className="h-2 bg-[#354024]/10 rounded-full mb-4">
                    <div className="h-2 bg-[#354024] rounded-full" style={{width: '20%'}}></div>
                  </div>
                  <p className="text-[#1C1C1C] text-lg italic opacity-70">
                    One-time effort, no habit formed
                  </p>
                </div>
              </div>

              {/* Person B */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border-2 border-[#889063]">
                <div className="bg-[#889063] p-4 flex items-center gap-3">
                  <User className="w-6 h-6 text-white" />
                  <h4 className="font-bold text-white text-lg">Person B</h4>
                </div>
                <div className="p-6">
                  <p className="text-[#1C1C1C] text-lg mb-4">
                    Saves $5 every week.
                  </p>
                  <div className="h-2 bg-[#354024]/10 rounded-full mb-4">
                    <div className="h-2 bg-[#889063] rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <p className="text-[#1C1C1C] text-lg italic opacity-70">
                    After a few months: habit + steady progress
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#354024] text-white p-6 rounded-lg text-center">
              <p className="text-2xl font-semibold">
                Consistency matters more than the amount.
              </p>
            </div>
          </div>

          {/* Saving with smaller income */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Saving with a smaller income
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">If income is tight, focus on:</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#889063] text-white p-6 rounded-lg text-center">
                <p className="text-lg font-semibold">Very small amounts</p>
              </div>
              <div className="bg-[#CFBB99] text-[#354024] p-6 rounded-lg text-center">
                <p className="text-lg font-semibold">Clear priorities</p>
              </div>
              <div className="bg-[#354024] text-white p-6 rounded-lg text-center">
                <p className="text-lg font-semibold">Consistency</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl text-[#354024] mb-4" style={{ letterSpacing: '-0.89px' }}>Examples:</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-[#E5D7C4] rounded-lg">
                  <span className="text-[#1C1C1C] text-lg">Weekly saving</span>
                  <span className="font-bold text-[#354024] text-lg">$5 a week</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#E5D7C4] rounded-lg">
                  <span className="text-[#1C1C1C] text-lg">Monthly saving</span>
                  <span className="font-bold text-[#354024] text-lg">$10 a month</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#E5D7C4] rounded-lg">
                  <span className="text-[#1C1C1C] text-lg">Round-up strategy</span>
                  <span className="font-bold text-[#354024] text-lg">Save the difference</span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[#CFBB99] p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl font-semibold text-center">
                Saving something builds momentum. Saving nothing builds nothing.
              </p>
            </div>
          </div>

          {/* Saving with changing income */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Saving with changing income
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">
              If income changes from week to week, saving does not need to look the same every time.
            </p>
            
            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-8 mb-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Repeat className="w-8 h-8" />
                <h3 className="text-2xl font-bold">A flexible approach:</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-lg">Save more during higher income weeks</p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1 opacity-50" />
                  <p className="text-lg">Save less or pause during lower income weeks</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/30">
                <p className="text-lg italic">
                  This keeps saving realistic instead of stressful.
                </p>
              </div>
            </div>

            {/* Flexible scenario */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl text-[#354024] mb-4" style={{ letterSpacing: '-0.89px' }}>
                Real-life scenario: flexible saving
              </h3>
              <p className="text-[#1C1C1C] text-lg mb-4">
                One week you earn more than expected.
              </p>
              <p className="text-[#1C1C1C] text-lg mb-6">
                Instead of increasing spending right away, you:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#889063]/10 p-5 rounded-lg border-l-4 border-[#889063]">
                  <p className="text-[#1C1C1C] text-lg font-semibold">Put a portion into savings</p>
                </div>
                <div className="bg-[#CFBB99]/30 p-5 rounded-lg border-l-4 border-[#CFBB99]">
                  <p className="text-[#1C1C1C] text-lg font-semibold">Keep the rest flexible</p>
                </div>
              </div>
              <p className="text-[#1C1C1C] text-xl">
                That extra savings helps cover slower weeks later.
              </p>
            </div>
          </div>

          {/* Priority order */}
          <div className="bg-[#354024] text-white rounded-lg p-8 shadow-md">
            <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.89px' }}>
              Focus on saving what is left after essentials
            </h2>
            <p className="mb-6 text-xl">
              When income is limited, the priority order matters.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="font-bold text-lg mb-1">First cover:</p>
                <ul className="space-y-1 ml-4 text-lg">
                  <li>• Essentials</li>
                  <li>• Required expenses</li>
                </ul>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="font-bold text-lg mb-1">Then save what fits comfortably.</p>
              </div>
            </div>

            <p className="text-xl italic">
              Saving should support your life, not make it harder.
            </p>
          </div>

          {/* Avoid comparison */}
          <div className="border-2 border-[#CFBB99] rounded-lg p-8 bg-white">
            <div className="flex items-start gap-4">
              <Users className="w-12 h-12 text-[#889063] flex-shrink-0" />
              <div>
                <h2 className="text-4xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Avoid comparing your savings to others
                </h2>
                <p className="text-[#1C1C1C] text-xl mb-4">
                  Comparing your savings to someone else's can make progress feel invisible.
                </p>
                <p className="text-[#1C1C1C] text-xl mb-6">
                  Everyone's situation is different.
                </p>
                <div className="bg-[#CFBB99]/30 p-6 rounded-lg">
                  <p className="text-[#1C1C1C] text-xl font-semibold">
                    The only comparison that matters is whether you are saving more intentionally than before.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resource Callout - Savings Strategy Selector */}
          <Link to="/savings-strategy-selector" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-gradient-to-br from-[#FFCFD0] to-[#FFCFD0]/70 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all border-2 border-[#FFCFD0]/50 cursor-pointer">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                    <Award className="w-9 h-9 text-[#FFCFD0]" />
                  </div>
                </div>
                <div>
                  <div className="inline-block bg-white text-[#354024] px-3 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
                    Interactive Resource
                  </div>
                  <h3 className="text-3xl text-[#354024] mb-4 font-semibold" style={{ letterSpacing: '-0.89px' }}>
                    Not sure which saving method fits your life?
                  </h3>
                  <p className="text-[#1C1C1C] text-xl mb-4">
                    Try our Savings Strategy Selector to find a personalized approach based on your income, goals, and habits.
                  </p>
                  <div className="flex items-center gap-2 text-[#354024] font-semibold text-lg">
                    <span>Explore the tool</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Common mistakes */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Common saving mistakes on any income
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">These are very common:</p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-3 border-l-4 border-[#FFCFD0]">
                <div className="w-8 h-8 rounded-full bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold flex-shrink-0 text-xl">×</div>
                <p className="text-[#1C1C1C] text-lg">Waiting for income to increase</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-3 border-l-4 border-[#FFCFD0]">
                <div className="w-8 h-8 rounded-full bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold flex-shrink-0 text-xl">×</div>
                <p className="text-[#1C1C1C] text-lg">Feeling embarrassed about small savings</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-3 border-l-4 border-[#FFCFD0]">
                <div className="w-8 h-8 rounded-full bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold flex-shrink-0 text-xl">×</div>
                <p className="text-[#1C1C1C] text-lg">Giving up after skipping a month</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-3 border-l-4 border-[#FFCFD0]">
                <div className="w-8 h-8 rounded-full bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold flex-shrink-0 text-xl">×</div>
                <p className="text-[#1C1C1C] text-lg">Thinking saving has to look the same every time</p>
              </div>
            </div>

            <div className="bg-[#889063] text-white p-6 rounded-lg text-center">
              <p className="text-xl font-semibold">
                Saving is allowed to change. That is normal.
              </p>
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-[#889063] text-white rounded-lg p-8">
            <h2 className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Saving works at any income level</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Small amounts matter</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Flexibility is key with changing income</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Consistency builds confidence</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Check Quiz */}
      <section className="px-6 py-12 md:px-12 bg-[#889063]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
            <h3 className="text-2xl text-[#1C1C1C] mb-4">
              1. What matters most when saving?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Income size', correct: false },
                { label: 'B', text: 'Perfect timing', correct: false },
                { label: 'C', text: 'Consistency', correct: true },
                { label: 'D', text: 'Comparison', correct: false }
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
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/30 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="text-[#354024]">{option.label})</span> {option.text}
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
            <h3 className="text-2xl text-[#1C1C1C] mb-4">
              2. How should you save with changing income?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Save the same amount every time', correct: false },
                { label: 'B', text: 'Only save during high income months', correct: false },
                { label: 'C', text: 'Adjust savings based on income', correct: true },
                { label: 'D', text: 'Stop saving completely', correct: false }
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
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/30 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="text-[#354024]">{option.label})</span> {option.text}
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
            <h3 className="text-2xl text-[#1C1C1C] mb-4">
              3. What should you do if you cannot save one month?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Quit saving', correct: false },
                { label: 'B', text: 'Feel guilty', correct: false },
                { label: 'C', text: 'Continue when you can', correct: true },
                { label: 'D', text: 'Spend more', correct: false }
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
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/30 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="text-[#354024]">{option.label})</span> {option.text}
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
          <div className="bg-[#889063] text-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl mb-4" style={{ letterSpacing: '-0.89px' }}>Action step</h2>
            <p className="text-xl mb-6">
              Choose a minimum saving amount that feels realistic right now.
            </p>
            <p className="text-xl mb-3">Write down:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>The amount</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>When you will try to save it</span>
              </li>
            </ul>
            <p className="text-xl italic">
              Even if it feels small, it counts.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/saving-strategies/lesson-3"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/saving-strategies/lesson-5"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Paying Yourself First →
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