import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, TrendingUp, Eye, Award, Flag, Heart, Star, Zap, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function SavingLesson7Page() {
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
            Staying Motivated While Saving
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Saving Strategies • Lesson 7
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Opening - Reality Check */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Saving can feel slow and boring sometimes
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-4">
              Saving money is not always exciting.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 bg-[#E5D7C4] rounded-lg">
                <div className="w-2 h-2 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg">Progress can feel slow</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#E5D7C4] rounded-lg">
                <div className="w-2 h-2 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg">It takes time to see results</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#E5D7C4] rounded-lg">
                <div className="w-2 h-2 rounded-full bg-[#354024] mt-2 flex-shrink-0"></div>
                <span className="text-[#1C1C1C] text-lg">Spending feels more fun in the moment</span>
              </div>
            </div>
            <div className="bg-[#CFBB99]/40 p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl font-semibold">
                That is normal. Staying motivated requires the right strategies.
              </p>
            </div>
          </div>

          {/* Why motivation drops */}
          <div className="border-2 border-[#889063] rounded-lg overflow-hidden">
            <div className="bg-[#889063] p-6">
              <h2 className="text-4xl text-white" style={{ letterSpacing: '-0.89px' }}>
                Why motivation drops when saving
              </h2>
            </div>
            <div className="p-8 bg-white">
              <p className="text-[#1C1C1C] text-xl mb-6">Motivation fades because:</p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#CFBB99]/40 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#354024]" />
                  </div>
                  <div>
                    <p className="text-[#1C1C1C] font-semibold mb-1 text-lg">Results take time</p>
                    <p className="text-[#1C1C1C] text-lg opacity-70">Growth happens slowly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#CFBB99]/40 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#354024]" />
                  </div>
                  <div>
                    <p className="text-[#1C1C1C] font-semibold mb-1 text-lg">Spending feels more rewarding in the moment</p>
                    <p className="text-[#1C1C1C] text-lg opacity-70">Instant gratification is tempting</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#CFBB99]/40 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-[#354024]" />
                  </div>
                  <div>
                    <p className="text-[#1C1C1C] font-semibold mb-1 text-lg">Saving does not always feel urgent</p>
                    <p className="text-[#1C1C1C] text-lg opacity-70">Easy to delay or postpone</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#354024] text-white p-6 rounded-lg">
                <p className="text-xl">
                  Saving is a long game, which means mindset and small wins matter a lot.
                </p>
              </div>
            </div>
          </div>

          {/* Losing Excitement Scenario */}
          <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-8">
            <h3 className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>
              Real-life scenario: losing excitement
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#889063] flex items-center justify-center font-bold flex-shrink-0">1</div>
                <p className="text-xl">You start strong and save consistently.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <p className="text-xl">Then after a few weeks, it feels like nothing is happening and you want to stop.</p>
              </div>
            </div>

            <div className="bg-white/20 p-6 rounded-lg border border-white/30">
              <p className="text-xl">
                The problem is not saving. The problem is expecting fast results from something designed to grow slowly.
              </p>
            </div>
          </div>

          {/* Progress not Perfection */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-12 h-12 text-[#889063]" />
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Focus on progress, not perfection
              </h2>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
              <p className="text-[#1C1C1C] text-xl mb-6">
                You do not need to save perfectly every time.
              </p>
              
              <p className="text-[#1C1C1C] font-semibold mb-4 text-xl">What matters most is:</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-[#889063]/20 rounded-lg border-l-4 border-[#889063]">
                  <CheckCircle2 className="w-5 h-5 text-[#889063] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Showing up consistently</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#CFBB99]/40 rounded-lg border-l-4 border-[#CFBB99]">
                  <CheckCircle2 className="w-5 h-5 text-[#354024] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Saving when you can</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#354024]/10 rounded-lg border-l-4 border-[#354024]">
                  <CheckCircle2 className="w-5 h-5 text-[#354024] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Getting back on track quickly</span>
                </div>
              </div>
            </div>

            <div className="bg-[#889063] text-white p-6 rounded-lg text-center">
              <p className="text-2xl font-semibold">
                Progress over time is what builds real results.
              </p>
            </div>
          </div>

          {/* Milestone Progress Bar */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Flag className="w-12 h-12 text-[#889063]" />
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Break goals into smaller milestones
              </h2>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
              <p className="text-[#1C1C1C] text-xl mb-6">
                Large savings goals can feel overwhelming.
              </p>
              
              <p className="text-[#1C1C1C] mb-4 text-xl">Instead of focusing on the full amount, break it down:</p>
              
              {/* Visual Progress Roadmap */}
              <div className="space-y-4 mb-6">
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#889063] flex items-center justify-center flex-shrink-0">
                      <Flag className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 bg-[#889063] p-4 rounded-lg">
                      <p className="text-white font-bold text-xl">First $50</p>
                      <div className="h-2 bg-white/30 rounded-full mt-2">
                        <div className="h-2 bg-white rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#CFBB99] flex items-center justify-center flex-shrink-0">
                      <Flag className="w-8 h-8 text-[#354024]" />
                    </div>
                    <div className="flex-1 bg-[#CFBB99] p-4 rounded-lg">
                      <p className="text-[#354024] font-bold text-xl">Then $100</p>
                      <div className="h-2 bg-[#354024]/20 rounded-full mt-2">
                        <div className="h-2 bg-[#354024] rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#354024] flex items-center justify-center flex-shrink-0">
                      <Flag className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 bg-[#354024] p-4 rounded-lg">
                      <p className="text-white font-bold text-xl">Then $200</p>
                      <div className="h-2 bg-white/20 rounded-full mt-2">
                        <div className="h-2 bg-white rounded-full" style={{width: '30%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#CFBB99]/40 p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl font-semibold">
                Reaching small milestones gives you visible progress and keeps motivation high.
              </p>
            </div>
          </div>

          {/* Milestone Motivation Scenario */}
          <div className="bg-[#889063]/20 border-2 border-[#889063] rounded-lg p-8">
            <h3 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Real-life scenario: milestone motivation
            </h3>
            <p className="text-[#1C1C1C] text-xl mb-6">
              You are saving for a larger goal.
            </p>
            <p className="text-[#1C1C1C] text-xl mb-6">
              When you see smaller checkpoints being hit, it feels rewarding and encourages you to keep going.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-[#1C1C1C] text-xl font-semibold">
                Small wins keep saving from feeling endless.
              </p>
            </div>
          </div>

          {/* Make Savings Visible */}
          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-[#889063]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#889063] flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                Make your savings visible
              </h2>
            </div>
            
            <p className="text-[#1C1C1C] text-xl mb-6">
              Out of sight can make goals feel distant.
            </p>
            
            <div className="bg-[#E5D7C4] rounded-lg p-6 mb-6">
              <p className="text-[#1C1C1C] font-semibold mb-4 text-xl">Helpful strategies:</p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-[#889063] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Track your savings progress</span>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-[#889063] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Use visual trackers</span>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center gap-3">
                  <Eye className="w-6 h-6 text-[#889063] flex-shrink-0" />
                  <span className="text-[#1C1C1C] text-lg">Check your balance regularly</span>
                </div>
              </div>
            </div>

            <div className="bg-[#889063] text-white p-6 rounded-lg">
              <p className="text-xl font-semibold">
                Seeing progress reminds you that your effort is working.
              </p>
            </div>
          </div>

          {/* Celebrate Small Wins */}
          <div className="bg-gradient-to-r from-[#CFBB99] to-[#E5D7C4] rounded-lg p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                  <Award className="w-12 h-12 text-[#889063]" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Celebrate small wins
                </h2>
                <p className="text-[#1C1C1C] text-xl mb-6">
                  Saving even a small amount consistently is a success.
                </p>
                
                <div className="bg-white rounded-lg p-6 mb-6">
                  <p className="text-[#1C1C1C] font-semibold mb-4 text-xl">Recognize progress like:</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-[#889063]" />
                      <span className="text-[#1C1C1C] text-lg">Reaching a milestone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-[#889063]" />
                      <span className="text-[#1C1C1C] text-lg">Sticking to your plan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-[#889063]" />
                      <span className="text-[#1C1C1C] text-lg">Choosing saving over impulse spending</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#1C1C1C] text-xl font-semibold">
                  Celebrating progress builds confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Avoid Comparison */}
          <div className="border-2 border-[#354024] rounded-lg p-8 bg-white">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Avoid comparing your savings to others
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-4">
              Comparing slows motivation.
            </p>
            <p className="text-[#1C1C1C] text-xl mb-6">
              Everyone's financial situation is different. The only progress that matters is your own.
            </p>
            <div className="bg-[#354024] text-white p-6 rounded-lg text-center">
              <p className="text-2xl font-semibold">
                Saving is personal, not competitive.
              </p>
            </div>
          </div>

          {/* Common Mistakes */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Common motivation mistakes
            </h2>
            <p className="text-[#1C1C1C] text-xl mb-6">These are very common:</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#354024] font-bold text-lg">×</span>
                  </div>
                  <p className="text-[#1C1C1C] text-lg">Expecting fast results</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#354024] font-bold text-lg">×</span>
                  </div>
                  <p className="text-[#1C1C1C] text-lg">Getting discouraged by slow growth</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#354024] font-bold text-lg">×</span>
                  </div>
                  <p className="text-[#1C1C1C] text-lg">Quitting after one setback</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#354024] font-bold text-lg">×</span>
                  </div>
                  <p className="text-[#1C1C1C] text-lg">Comparing progress</p>
                </div>
              </div>
            </div>

            <div className="bg-[#889063] text-white p-6 rounded-lg text-center">
              <p className="text-2xl font-semibold">
                Saving works when you stay consistent, even when it feels slow.
              </p>
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-gradient-to-br from-[#354024] to-[#889063] text-white rounded-lg p-8">
            <h2 className="text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Saving can feel slow but still matters</span>
              </div>
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Small milestones help motivation</span>
              </div>
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Visible progress keeps you going</span>
              </div>
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Consistency is more important than perfection</span>
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
              1. Why does saving sometimes feel discouraging?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'It grows too fast', correct: false },
                { label: 'B', text: 'It takes time to see progress', correct: true },
                { label: 'C', text: 'It is impossible', correct: false },
                { label: 'D', text: 'It replaces spending', correct: false }
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
              2. What helps keep saving motivation high?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Ignoring progress', correct: false },
                { label: 'B', text: 'Waiting to celebrate', correct: false },
                { label: 'C', text: 'Breaking goals into milestones', correct: true },
                { label: 'D', text: 'Comparing to others', correct: false }
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
              3. What should you focus on while saving?
            </h3>
            <div className="space-y-3">
              {[
                { label: 'A', text: 'Perfection', correct: false },
                { label: 'B', text: 'Other people', correct: false },
                { label: 'C', text: 'Progress', correct: true },
                { label: 'D', text: 'Speed', correct: false }
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
                  Choose a savings goal and break it into three small milestones.
                </p>
                <p className="text-[#1C1C1C] text-xl">
                  Write them down so you can track progress step by step.
                </p>
              </div>
            </div>
            
            {/* Example Milestone Tracker */}
            <div className="bg-[#E5D7C4] rounded-lg p-6">
              <p className="text-[#1C1C1C] font-semibold mb-4 text-xl">Example:</p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                  <span className="text-[#1C1C1C] text-lg">Milestone 1:</span>
                  <span className="text-[#1C1C1C] opacity-50 text-lg">$ _____</span>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                  <span className="text-[#1C1C1C] text-lg">Milestone 2:</span>
                  <span className="text-[#1C1C1C] opacity-50 text-lg">$ _____</span>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                  <span className="text-[#1C1C1C] text-lg">Milestone 3:</span>
                  <span className="text-[#1C1C1C] opacity-50 text-lg">$ _____</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/saving-strategies/lesson-6"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/saving-strategies/lesson-8"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                What to Do When You Use Your Savings →
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