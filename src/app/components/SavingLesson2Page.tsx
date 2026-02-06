import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, Target, Calendar, AlertCircle, Shield } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function SavingLesson2Page() {
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
            Types of Savings Goals
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Saving Strategies • Lesson 2
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Intro */}
          <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-8 shadow-md">
            <h2 className="text-4xl mb-4" style={{ letterSpacing: '-0.89px' }}>
              Saving is easier when you know what you are saving for
            </h2>
            <p className="text-xl mb-4">
              Saving money without a reason can feel boring or pointless.
            </p>
            <p className="text-xl">
              When you have a clear goal, saving feels different. It stops feeling like something you are giving up and starts feeling like something you are working toward.
            </p>
          </div>

          {/* What a savings goal is */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              What a savings goal actually is
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">
              A savings goal is simply something you want your money to do for you in the future.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#889063]">
                <p className="text-[#1C1C1C] text-lg">Something you want to buy</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#CFBB99]">
                <p className="text-[#1C1C1C] text-lg">Something you want to prepare for</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#354024]">
                <p className="text-[#1C1C1C] text-lg">Something you want to protect yourself from</p>
              </div>
            </div>
            <div className="bg-[#889063]/20 p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl">
                You do not need a perfect goal. You just need one that matters to you.
              </p>
            </div>
          </div>

          {/* Three Types of Goals Grid */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Three Types of Savings Goals
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Short Term */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#889063] text-white flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-[#354024] mb-3">
                  Short Term
                </h3>
                <p className="text-[#1C1C1C] text-lg mb-4">
                  Things you want to save for in the near future, usually within a few weeks or months.
                </p>
                <div className="space-y-2">
                  <p className="text-lg text-[#1C1C1C] opacity-70">Examples:</p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                      <span>A trip or event</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                      <span>A planned purchase</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0 mt-0.5" />
                      <span>Extra money for upcoming expenses</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-[#354024]/10">
                  <p className="text-[#1C1C1C] text-lg italic">
                    These goals work well because progress is visible quickly.
                  </p>
                </div>
              </div>

              {/* Long Term */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#CFBB99] text-[#354024] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-[#354024] mb-3">
                  Long Term
                </h3>
                <p className="text-[#1C1C1C] text-lg mb-4">
                  Goals that take more time and patience to achieve.
                </p>
                <div className="space-y-2">
                  <p className="text-lg text-[#1C1C1C] opacity-70">Examples:</p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#CFBB99] flex-shrink-0 mt-0.5" />
                      <span>Education related expenses</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#CFBB99] flex-shrink-0 mt-0.5" />
                      <span>A car</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#CFBB99] flex-shrink-0 mt-0.5" />
                      <span>Moving out or future independence</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-[#354024]/10">
                  <p className="text-[#1C1C1C] text-lg italic">
                    Breaking them into smaller milestones makes them manageable.
                  </p>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#354024] text-white flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-[#354024] mb-3">
                  Emergency
                </h3>
                <p className="text-[#1C1C1C] text-lg mb-4">
                  Money for things you cannot predict. This is about safety, not enjoyment.
                </p>
                <div className="space-y-2">
                  <p className="text-lg text-[#1C1C1C] opacity-70">Examples:</p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#354024] flex-shrink-0 mt-0.5" />
                      <span>Unexpected repairs</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#354024] flex-shrink-0 mt-0.5" />
                      <span>Medical or transportation costs</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#1C1C1C] text-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#354024] flex-shrink-0 mt-0.5" />
                      <span>Sudden expenses you did not plan for</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-[#354024]/10">
                  <p className="text-[#1C1C1C] text-lg italic">
                    Not for something fun or planned, but essential for peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scenarios Side by Side */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Scenario 1 */}
            <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-6">
              <h3 className="text-2xl text-[#354024] mb-4" style={{ letterSpacing: '-0.89px' }}>
                Real-life scenario: saving feels easier with a timeline
              </h3>
              <p className="text-[#1C1C1C] text-lg mb-4">
                If you tell yourself to save money with no end in sight, it feels vague.
              </p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-[#354024] text-lg">
                  "I want $300 in three months"
                </p>
              </div>
              <p className="text-[#1C1C1C] text-lg">
                Saving suddenly feels more concrete and doable. A timeline gives your saving direction.
              </p>
            </div>

            {/* Scenario 2 */}
            <div className="bg-[#CFBB99]/30 border-2 border-[#CFBB99] rounded-lg p-6">
              <h3 className="text-2xl text-[#354024] mb-4" style={{ letterSpacing: '-0.89px' }}>
                Real-life scenario: planned vs unplanned saving
              </h3>
              <p className="text-[#1C1C1C] text-lg mb-2">
                Saving for a trip feels exciting.
              </p>
              <p className="text-[#1C1C1C] text-lg mb-4">
                Saving for emergencies feels boring.
              </p>
              <p className="text-[#1C1C1C] text-lg mb-4">
                But when an unexpected expense happens, emergency savings can turn a stressful situation into a manageable one.
              </p>
              <p className="text-[#354024] text-lg">
                Both types of goals matter.
              </p>
            </div>
          </div>

          {/* Choosing a goal */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Choosing which goal to start with
            </h2>
            <p className="text-[#1C1C1C] text-2xl mb-8 text-center">
              You do not need to save for everything at once.
            </p>
            
            <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-2xl p-8 mb-8 shadow-lg">
              <p className="text-xl mb-6 text-center opacity-90">A good place to start is:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <p className="text-2xl font-semibold">One emergency goal</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <p className="text-2xl font-semibold">One short-term goal that motivates you</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg opacity-75">or choose</p>
              </div>
            </div>
            
            <div className="bg-[#FFCFD0] border-l-4 border-[#354024] p-6 rounded-r-lg">
              <p className="text-[#1C1C1C] text-xl italic">
                Trying to do too much at once often leads to burnout.
              </p>
            </div>
          </div>

          {/* Common Mistakes */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Common goal-setting mistakes
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">These are easy to make.</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                <p className="text-[#1C1C1C] text-lg">Choosing too many goals</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                <p className="text-[#1C1C1C] text-lg">Picking goals that do not actually matter to you</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                <p className="text-[#1C1C1C] text-lg">Not setting a timeline</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                <p className="text-[#1C1C1C] text-lg">Feeling guilty for changing goals</p>
              </div>
            </div>
            <div className="bg-[#889063]/20 p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl">
                Goals are allowed to change. That does not mean you failed.
              </p>
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-[#354024] text-white rounded-lg p-8">
            <h2 className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Saving works best with a clear goal</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Short term, long term, and emergency goals all matter</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg">You only need one goal to start</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Goals can change over time</span>
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
              1. Why do savings goals help?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'They make saving harder', correct: false },
                { label: 'B', text: 'They remove spending', correct: false },
                { label: 'C', text: 'They give saving purpose', correct: true },
                { label: 'D', text: 'They guarantee success', correct: false }
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
                        ? 'border-red-400 bg-red-50 opacity-50'
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
              2. What is emergency savings for?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Planned purchases', correct: false },
                { label: 'B', text: 'Fun spending', correct: false },
                { label: 'C', text: 'Unexpected expenses', correct: true },
                { label: 'D', text: 'Long term investing', correct: false }
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
                        ? 'border-red-400 bg-red-50 opacity-50'
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
              3. How many savings goals should you start with?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'As many as possible', correct: false },
                { label: 'B', text: 'One that feels manageable', correct: true },
                { label: 'C', text: 'None until income increases', correct: false },
                { label: 'D', text: 'Only long term goals', correct: false }
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
                        ? 'border-red-400 bg-red-50 opacity-50'
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
      <section className="px-6 py-12 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#889063] text-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl mb-4" style={{ letterSpacing: '-0.89px' }}>Action step</h2>
            <p className="text-xl mb-4">
              Think about one thing you want to save for.
            </p>
            <p className="text-xl">
              Write down:
            </p>
            <ul className="space-y-2 mt-4 ml-6">
              <li className="flex items-start gap-3 text-white text-lg">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>What the goal is</span>
              </li>
              <li className="flex items-start gap-3 text-white text-lg">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>About how much you want to save</span>
              </li>
              <li className="flex items-start gap-3 text-white text-lg">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>Roughly when you want to reach it</span>
              </li>
            </ul>
            <p className="text-white text-xl italic mt-4">
              Keep it realistic.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/saving-strategies/lesson-1"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/saving-strategies/lesson-3"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Building an Emergency Fund →
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