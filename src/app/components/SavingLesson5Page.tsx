import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, ArrowRight, Zap, Settings, Calendar } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function SavingLesson5Page() {
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
            Paying Yourself First
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Saving Strategies • Lesson 5
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Intro with Zap Icon */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#889063] text-white flex items-center justify-center">
                  <Zap className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Saving gets easier when the decision is already made
                </h2>
                <p className="text-[#1C1C1C] text-xl mb-3">
                  One reason saving feels hard is because it often depends on willpower.
                </p>
                <p className="text-[#1C1C1C] text-xl mb-6">
                  You tell yourself you will save whatever is left at the end of the week or month. Then spending happens. Then something unexpected comes up. Then nothing is left.
                </p>
                <div className="bg-[#354024] text-white p-6 rounded-lg">
                  <p className="text-xl font-semibold">
                    Paying yourself first changes the order so saving happens automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What it means - Process Flow */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              What paying yourself first actually means
            </h2>
            
            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-8 mb-6 shadow-lg">
              <p className="mb-6 text-xl">Paying yourself first means:</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-white text-[#354024] flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-lg">You save money as soon as you get paid</p>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-white text-[#354024] flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-lg">Saving happens before spending</p>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-white text-[#354024] flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="text-lg">Saving is treated like a required expense</p>
                </div>
              </div>
            </div>

            <div className="bg-[#CFBB99] p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl">
                Instead of hoping you save later, you decide ahead of time.
              </p>
            </div>
          </div>

          {/* Why it works */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Why this strategy works so well
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">Paying yourself first works because it:</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#889063]/10 p-6 rounded-lg text-center border-2 border-[#889063]">
                <CheckCircle2 className="w-10 h-10 text-[#889063] mx-auto mb-3" />
                <p className="text-[#1C1C1C] text-lg font-semibold">Removes the need to make decisions every time</p>
              </div>
              <div className="bg-[#CFBB99]/30 p-6 rounded-lg text-center border-2 border-[#CFBB99]">
                <CheckCircle2 className="w-10 h-10 text-[#354024] mx-auto mb-3" />
                <p className="text-[#1C1C1C] text-lg font-semibold">Reduces the temptation to overspend</p>
              </div>
              <div className="bg-[#354024]/10 p-6 rounded-lg text-center border-2 border-[#354024]">
                <CheckCircle2 className="w-10 h-10 text-[#354024] mx-auto mb-3" />
                <p className="text-[#1C1C1C] text-lg font-semibold">Makes saving feel automatic instead of forced</p>
              </div>
            </div>

            <p className="text-[#1C1C1C] text-xl">
              Once the money is set aside, you naturally spend what remains more intentionally.
            </p>
          </div>

          {/* Process Flow Scenario */}
          <div className="bg-[#889063]/10 rounded-lg p-8 border-2 border-[#889063]">
            <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Real-life scenario: saving without thinking about it
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#889063] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1 bg-white p-4 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg">You get paid and immediately move $25 into savings.</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-[#889063]" />
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#889063] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1 bg-white p-4 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg">The rest of your money is what you use for everything else.</p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-[#889063]" />
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#889063] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1 bg-white p-4 rounded-lg">
                  <p className="text-[#1C1C1C] text-lg">You do not feel like you lost money because you never planned to spend it in the first place.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-[#889063]">
              <p className="text-[#1C1C1C] text-xl font-semibold text-center">
                Saving happened before spending had a chance to.
              </p>
            </div>
          </div>

          {/* How much */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              How much should you save first
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">
              There is no perfect number.
            </p>
            
            <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
              <p className="text-[#1C1C1C] text-xl mb-6">A good amount is one that:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-[#CFBB99]/30 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1C1C1C] text-lg">Feels realistic</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#CFBB99]/30 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1C1C1C] text-lg">Does not cause stress</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#CFBB99]/30 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1C1C1C] text-lg">You can repeat consistently</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-6 mb-6 shadow-lg">
              <p className="font-semibold mb-4 text-xl">Examples:</p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">$5</p>
                  <p className="text-lg">a week</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">$20</p>
                  <p className="text-lg">a month</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">Small %</p>
                  <p className="text-lg">of your income</p>
                </div>
              </div>
            </div>

            <div className="bg-[#CFBB99] p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl font-semibold">
                Saving something consistently is more powerful than saving a lot once.
              </p>
            </div>
          </div>

          {/* Automation Section */}
          <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg overflow-hidden shadow-lg">
            <div className="flex items-center gap-4 bg-white/10 p-6 border-b border-white/20">
              <Settings className="w-10 h-10" />
              <h2 className="text-4xl" style={{ letterSpacing: '-0.89px' }}>Automating the process</h2>
            </div>
            
            <div className="p-8">
              <p className="text-xl mb-6">
                Paying yourself first works best when it is automatic.
              </p>
              
              <p className="text-xl mb-4">If possible:</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                  <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Set up an automatic transfer</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                  <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Schedule it for the same day you get paid</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                  <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Move money to a separate savings account</span>
                </div>
              </div>

              <div className="bg-white/20 text-white p-6 rounded-lg border border-white/30">
                <p className="text-xl font-semibold">
                  Automation removes the need to rely on motivation.
                </p>
              </div>
            </div>
          </div>

          {/* Automation scenario */}
          <div className="border-l-4 border-[#889063] bg-white rounded-r-lg p-8 shadow-sm">
            <h3 className="text-3xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
              Real-life scenario: automation helps consistency
            </h3>
            <p className="text-[#1C1C1C] text-xl mb-4">
              Instead of deciding each time whether to save, the money moves automatically.
            </p>
            <p className="text-[#1C1C1C] text-xl mb-6">
              Some weeks you barely notice it. Over time, your savings grow without extra effort.
            </p>
            <div className="bg-[#889063]/10 p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl font-semibold">
                This is how saving becomes a habit instead of a chore.
              </p>
            </div>
          </div>

          {/* If income changes */}
          <div className="bg-[#CFBB99]/40 rounded-lg p-8">
            <div className="flex items-start gap-6">
              <Calendar className="w-12 h-12 text-[#354024] flex-shrink-0" />
              <div>
                <h2 className="text-4xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  What if income changes
                </h2>
                <p className="text-[#1C1C1C] text-xl mb-6">
                  If your income changes from week to week, paying yourself first can still work.
                </p>
                
                <p className="text-[#1C1C1C] text-xl mb-4">You can:</p>
                <div className="space-y-3 mb-6">
                  <div className="bg-white p-4 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1C1C1C] text-lg">Save a percentage instead of a fixed amount</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1C1C1C] text-lg">Save more during higher income weeks</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1C1C1C] text-lg">Pause or reduce saving during lower income weeks</span>
                  </div>
                </div>

                <p className="text-[#1C1C1C] text-xl font-semibold">
                  The strategy is flexible. It is not all or nothing.
                </p>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Common mistakes with paying yourself first
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">These are very common:</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-3 border-l-4 border-[#FFCFD0]">
                <div className="w-8 h-8 rounded-full bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold flex-shrink-0 text-xl">×</div>
                <p className="text-[#1C1C1C] text-lg">Choosing an amount that is too high</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-3 border-l-4 border-[#FFCFD0]">
                <div className="w-8 h-8 rounded-full bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold flex-shrink-0 text-xl">×</div>
                <p className="text-[#1C1C1C] text-lg">Forgetting to adjust when income changes</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-3 border-l-4 border-[#FFCFD0]">
                <div className="w-8 h-8 rounded-full bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold flex-shrink-0 text-xl">×</div>
                <p className="text-[#1C1C1C] text-lg">Feeling guilty if you skip once</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-3 border-l-4 border-[#FFCFD0]">
                <div className="w-8 h-8 rounded-full bg-[#FFCFD0] text-[#354024] flex items-center justify-center font-bold flex-shrink-0 text-xl">×</div>
                <p className="text-[#1C1C1C] text-lg">Turning off automation instead of adjusting it</p>
              </div>
            </div>

            <div className="bg-[#889063] text-white p-6 rounded-lg text-center">
              <p className="text-2xl font-semibold">
                The goal is consistency, not perfection.
              </p>
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-[#889063] text-white rounded-lg p-8">
            <h2 className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Paying yourself first means saving before spending</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Automation makes saving easier</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Small consistent amounts matter</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">The system should adjust with your income</span>
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
              1. What does paying yourself first mean?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Spending first', correct: false },
                { label: 'B', text: 'Saving whatever is left', correct: false },
                { label: 'C', text: 'Saving as soon as you get paid', correct: true },
                { label: 'D', text: 'Ignoring your budget', correct: false }
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
              2. Why does this strategy work well?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'It increases income', correct: false },
                { label: 'B', text: 'It removes decision fatigue', correct: true },
                { label: 'C', text: 'It stops spending', correct: false },
                { label: 'D', text: 'It guarantees success', correct: false }
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
              3. What should you do if income changes?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Quit saving', correct: false },
                { label: 'B', text: 'Save the same amount no matter what', correct: false },
                { label: 'C', text: 'Adjust your saving amount', correct: true },
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
              Decide on one small amount you could save first each time you get paid.
            </p>
            <p className="text-xl font-semibold mb-3">Write down:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>The amount</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>When you get paid</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Where the money will go</span>
              </li>
            </ul>
            <div className="bg-white/20 p-4 rounded-lg">
              <p className="text-lg italic">
                If possible, set it up automatically.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/saving-strategies/lesson-4"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/saving-strategies/lesson-6"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Where to Put Your Savings →
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