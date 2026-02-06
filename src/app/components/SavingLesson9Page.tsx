import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, AlertTriangle, TrendingUp, DollarSign, Target, Unlock, RotateCcw, Users, Info, Flag } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function SavingLesson9Page() {
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
              <span>7–9 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              <span>Beginner</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
            Common Saving Mistakes
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Saving Strategies • Lesson 9
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Opening */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#889063]/20 flex items-center justify-center">
                  <Info className="w-10 h-10 text-[#889063]" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Everyone makes saving mistakes at first
                </h2>
                <p className="text-[#1C1C1C] text-xl mb-4">
                  Saving money is a skill, and like any skill, mistakes are part of learning.
                </p>
                <p className="text-[#1C1C1C] text-xl mb-6">
                  Most people do not struggle because saving is impossible. They struggle because of habits or assumptions that quietly get in the way.
                </p>
                <div className="bg-[#889063] text-white p-6 rounded-lg">
                  <p className="text-xl font-semibold">
                    Recognizing common mistakes helps you avoid them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mistake 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#FFCFD0]/60 border-l-8 border-[#FFCFD0] p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#354024] text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Waiting for "more money" to start
                </h3>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-[#FFCFD0]/30 rounded-lg p-6 mb-6 border-2 border-[#FFCFD0]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-[#354024] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] text-lg mb-4">
                      A lot of people tell themselves they will start saving when they earn more.
                    </p>
                    <p className="text-[#1C1C1C] font-semibold text-lg">
                      The problem is that income usually increases faster than saving habits do. If saving is not built into your routine now, it will not automatically happen later.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#889063]/20 border-2 border-[#889063] rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                  <p className="text-[#1C1C1C] font-bold text-xl">
                    Starting small is more powerful than waiting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mistake 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#FFCFD0]/60 border-l-8 border-[#FFCFD0] p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#354024] text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Saving whatever is left
                </h3>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-[#FFCFD0]/30 rounded-lg p-6 mb-6 border-2 border-[#FFCFD0]">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-[#354024] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] text-lg mb-4">
                      Saving leftovers rarely works because spending always expands.
                    </p>
                    <p className="text-[#1C1C1C] font-semibold text-lg">
                      When saving is treated as optional, it gets pushed aside by other expenses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#889063]/20 border-2 border-[#889063] rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                  <p className="text-[#1C1C1C] font-bold text-xl">
                    Planning savings first creates consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mistake 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#FFCFD0]/60 border-l-8 border-[#FFCFD0] p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#354024] text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Setting unrealistic saving goals
                </h3>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-[#FFCFD0]/30 rounded-lg p-6 mb-6 border-2 border-[#FFCFD0]">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#354024] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] text-lg mb-4">
                      Trying to save too much too quickly can lead to frustration.
                    </p>
                    <p className="text-[#1C1C1C] font-semibold text-lg">
                      When saving feels stressful, it becomes hard to maintain.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#889063]/20 border-2 border-[#889063] rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                  <p className="text-[#1C1C1C] font-bold text-xl">
                    Smaller goals that fit your real life build stronger long term habits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Burnout Scenario */}
          <div className="bg-gradient-to-r from-[#354024] to-[#889063] text-white rounded-lg p-8">
            <h3 className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>
              Real-life scenario: saving burnout
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white/10 p-5 rounded-lg flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#354024]">×</span>
                </div>
                <p className="text-xl">You set a goal to save 50% of your income right away</p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#354024]">×</span>
                </div>
                <p className="text-xl">You feel stressed and deprived within a week</p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#354024]">×</span>
                </div>
                <p className="text-xl">You give up completely</p>
              </div>
            </div>

            <div className="bg-white/20 p-6 rounded-lg border border-white/30">
              <p className="text-xl font-semibold">
                Better approach: Start with 5-10% and build from there as it becomes comfortable.
              </p>
            </div>
          </div>

          {/* Mistake 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#FFCFD0]/60 border-l-8 border-[#FFCFD0] p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#354024] text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Not having a clear reason to save
                </h3>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-[#FFCFD0]/30 rounded-lg p-6 mb-6 border-2 border-[#FFCFD0]">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#354024] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] text-lg mb-4">
                      Vague goals like "save for the future" are easy to ignore.
                    </p>
                    <p className="text-[#1C1C1C] font-semibold text-lg">
                      Without a specific reason, motivation fades quickly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#889063]/20 border-2 border-[#889063] rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                  <p className="text-[#1C1C1C] font-bold text-xl">
                    Clear goals give saving a purpose that keeps you going.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mistake 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#FFCFD0]/60 border-l-8 border-[#FFCFD0] p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#354024] text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">5</span>
                </div>
                <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Keeping savings too accessible
                </h3>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-[#FFCFD0]/30 rounded-lg p-6 mb-6 border-2 border-[#FFCFD0]">
                <div className="flex items-start gap-3">
                  <Unlock className="w-6 h-6 text-[#354024] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] text-lg mb-4">
                      When savings are in the same account as spending money, they are too easy to use impulsively.
                    </p>
                    <p className="text-[#1C1C1C] font-semibold text-lg">
                      Temptation increases when there is no separation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#889063]/20 border-2 border-[#889063] rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                  <p className="text-[#1C1C1C] font-bold text-xl">
                    Separating savings into a different account protects them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mistake 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#FFCFD0]/60 border-l-8 border-[#FFCFD0] p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#354024] text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">6</span>
                </div>
                <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Quitting after one slip up
                </h3>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-[#FFCFD0]/30 rounded-lg p-6 mb-6 border-2 border-[#FFCFD0]">
                <div className="flex items-start gap-3">
                  <RotateCcw className="w-6 h-6 text-[#354024] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] text-lg mb-4">
                      Missing one week or using savings once does not mean failure.
                    </p>
                    <p className="text-[#1C1C1C] font-semibold text-lg">
                      One setback is temporary. Quitting is permanent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#889063]/20 border-2 border-[#889063] rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                  <p className="text-[#1C1C1C] font-bold text-xl">
                    Getting back on track quickly is what builds long term success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mistake 7 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#FFCFD0]/60 border-l-8 border-[#FFCFD0] p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#354024] text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">7</span>
                </div>
                <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Comparing your progress to others
                </h3>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-[#FFCFD0]/30 rounded-lg p-6 mb-6 border-2 border-[#FFCFD0]">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#354024] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1C1C1C] text-lg mb-4">
                      Everyone has different financial situations. Comparing yourself to someone else often leads to frustration.
                    </p>
                    <p className="text-[#1C1C1C] font-semibold text-lg">
                      Your only comparison should be your own progress.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#889063]/20 border-2 border-[#889063] rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#889063]" />
                  <p className="text-[#1C1C1C] font-bold text-xl">
                    Focus on your own growth, not someone else's numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Avoid These Mistakes */}
          <div className="bg-gradient-to-r from-[#CFBB99] to-[#E5D7C4] rounded-lg p-8">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              How to avoid these mistakes
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  1
                </div>
                <p className="text-[#1C1C1C] text-xl">Start small and build the habit first</p>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  2
                </div>
                <p className="text-[#1C1C1C] text-xl">Save before you spend, not after</p>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  3
                </div>
                <p className="text-[#1C1C1C] text-xl">Set realistic goals that match your current situation</p>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  4
                </div>
                <p className="text-[#1C1C1C] text-xl">Keep savings separate from everyday spending</p>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  5
                </div>
                <p className="text-[#1C1C1C] text-xl">Stay consistent even after setbacks</p>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#889063] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  6
                </div>
                <p className="text-[#1C1C1C] text-xl">Focus on your own progress, not others</p>
              </div>
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-8">
            <h2 className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Common mistakes slow saving progress</span>
              </div>
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Awareness helps you avoid them</span>
              </div>
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Small consistent actions matter more than perfection</span>
              </div>
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Getting back on track is always possible</span>
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
              1. What is wrong with waiting for more money to start saving?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'It always works eventually', correct: false },
                { label: 'B', text: 'Habits do not build if you wait', correct: true },
                { label: 'C', text: 'You never need to save', correct: false },
                { label: 'D', text: 'Saving is automatic', correct: false }
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
              2. Why is saving leftover money a common mistake?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'It guarantees success', correct: false },
                { label: 'B', text: 'Spending always expands', correct: true },
                { label: 'C', text: 'It requires no effort', correct: false },
                { label: 'D', text: 'Leftovers are always enough', correct: false }
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
              3. What should you do after a saving setback?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Quit entirely', correct: false },
                { label: 'B', text: 'Wait months', correct: false },
                { label: 'C', text: 'Get back on track quickly', correct: true },
                { label: 'D', text: 'Ignore it', correct: false }
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
                  Identify one saving mistake you might be making and write down how you will adjust.
                </p>
                <p className="text-[#1C1C1C] text-xl">
                  Even recognizing the issue is a powerful first step toward change.
                </p>
              </div>
            </div>
            
            {/* Example Reflection */}
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <p className="text-[#1C1C1C] font-semibold mb-4 text-xl">Example reflection:</p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg mb-2">Mistake I might be making:</p>
                  <p className="text-[#1C1C1C] opacity-50 text-lg">_____________________</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg mb-2">How I will adjust:</p>
                  <p className="text-[#1C1C1C] opacity-50 text-lg">_____________________</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/saving-strategies/lesson-8"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next up</p>
              <Link 
                to="/saving-strategies/lesson-10"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Next Lesson
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