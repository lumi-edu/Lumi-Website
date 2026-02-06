import { Link } from './RouterLink';
import { ArrowLeft, CheckCircle2, Eye, Search, TrendingDown, Calendar, Smartphone, Receipt, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

export default function BudgetingLesson4Page() {
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
            Tracking Your Spending
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-70">
            Module: Budgeting Basics • Lesson 4
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Introduction with timeline style */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#889063]/30"></div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-[#354024] rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
                Why tracking your spending changes everything
              </h2>
              <p className="text-[#1C1C1C] text-lg mb-4">
                A lot of people say,
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#354024]/10 mb-4">
                <p className="text-2xl text-[#354024] italic">
                  "I don't know where my money goes."
                </p>
              </div>
              <p className="text-[#1C1C1C] text-lg mb-4">
                Tracking your spending is how you find out.
              </p>
              <div className="bg-[#889063]/20 p-6 rounded-xl border-l-4 border-[#889063]">
                <p className="text-[#1C1C1C] text-lg">
                  You don't need spreadsheets, complicated apps, or perfection. You just need to start paying attention. Once you do, budgeting becomes way easier.
                </p>
              </div>
            </div>
          </div>

          {/* What tracking means */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#889063]/30"></div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-[#889063] rounded-full flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
                What tracking spending actually means
              </h2>
              <p className="text-[#1C1C1C] text-lg mb-4">
                Tracking your spending just means noticing what you spend money on and how often.
              </p>
              <div className="bg-[#FFCFD0]/30 p-8 rounded-2xl mb-6 border-2 border-[#FFCFD0]">
                <p className="text-2xl text-[#354024] font-semibold text-center">
                  That's it.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#354024]/10 mb-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#CFBB99]/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">✗</span>
                    </div>
                    <p className="text-[#1C1C1C] text-lg">You're not judging yourself</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#CFBB99]/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">✗</span>
                    </div>
                    <p className="text-[#1C1C1C] text-lg">You're not cutting anything out yet</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#889063] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-[#1C1C1C] text-lg font-semibold">You're just observing</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#354024] text-white p-6 rounded-xl">
                <p className="text-lg">
                  Think of it like checking your phone's screen time report. You can't change habits until you see them.
                </p>
              </div>
            </div>
          </div>

          {/* Real-life scenario 1 */}
          <div className="bg-gradient-to-br from-[#CFBB99]/20 to-[#889063]/10 p-10 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#FFCFD0] rounded-full p-4">
                <AlertCircle className="w-8 h-8 text-[#354024]" />
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Real-life scenario: "I barely buy anything"
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#354024]/10 mb-6">
              <p className="text-[#1C1C1C] text-lg mb-4">
                You feel like you don't spend much.
              </p>
              <p className="text-[#1C1C1C] text-lg mb-6">
                Then you track for one week and realize:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#CFBB99]/30 p-5 rounded-xl">
                  <Receipt className="w-6 h-6 text-[#889063]" />
                  <span className="text-[#1C1C1C] text-lg">A few snacks here</span>
                </div>
                <div className="flex items-center gap-4 bg-[#CFBB99]/30 p-5 rounded-xl">
                  <Receipt className="w-6 h-6 text-[#889063]" />
                  <span className="text-[#1C1C1C] text-lg">Coffee a couple times</span>
                </div>
                <div className="flex items-center gap-4 bg-[#CFBB99]/30 p-5 rounded-xl">
                  <Receipt className="w-6 h-6 text-[#889063]" />
                  <span className="text-[#1C1C1C] text-lg">One online purchase you forgot about</span>
                </div>
              </div>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-6">
              None of these were huge on their own, but together they added up fast.
            </p>
            <div className="bg-[#889063]/30 p-6 rounded-xl border-l-4 border-[#889063]">
              <p className="text-[#354024] text-lg font-semibold">
                Tracking doesn't mean those purchases were bad. It just makes them visible.
              </p>
            </div>
          </div>

          {/* Needs vs wants (without guilt) */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#889063]/30"></div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-[#889063] rounded-full flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
                Needs vs wants (without guilt)
              </h2>
              <p className="text-[#1C1C1C] text-lg mb-6">
                When tracking, it helps to group spending into two categories:
              </p>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#354024]/10">
                  <h3 className="text-2xl font-semibold text-[#464A39] mb-3">Needs</h3>
                  <p className="text-[#1C1C1C] mb-4">
                    Things you have to pay for.
                  </p>
                  <ul className="space-y-2 text-[#464A39] ml-4">
                    <li>• Transportation</li>
                    <li>• Food</li>
                    <li>• School or work essentials</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#354024]/10">
                  <h3 className="text-2xl font-semibold text-[#464A39] mb-3">Wants</h3>
                  <p className="text-[#1C1C1C] mb-4">
                    Things that are optional.
                  </p>
                  <ul className="space-y-2 text-[#464A39] ml-4">
                    <li>• Eating out</li>
                    <li>• Entertainment</li>
                    <li>• Shopping</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#354024] text-white p-6 rounded-xl mt-6">
                <p className="text-lg">
                  This isn't about cutting out wants. It's about knowing how much space they take up.
                </p>
              </div>
            </div>
          </div>

          {/* Real-life scenario 2 */}
          <div className="bg-gradient-to-br from-[#CFBB99]/20 to-[#889063]/10 p-10 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#FFCFD0] rounded-full p-4">
                <AlertCircle className="w-8 h-8 text-[#354024]" />
              </div>
              <h2 className="text-4xl text-[#354024]" style={{ letterSpacing: '-0.1px' }}>
                Real-life scenario: small purchases add up
              </h2>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-4">Let's say you spend:</p>
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#889063] font-bold text-xl">$6</span>
                  <span className="text-[#1C1C1C]">on coffee</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#889063] font-bold text-xl">$8</span>
                  <span className="text-[#1C1C1C]">on snacks</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#889063] font-bold text-xl">$12</span>
                  <span className="text-[#1C1C1C]">on a random online item</span>
                </div>
                <div className="border-t border-[#354024]/20 pt-3 mt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#1C1C1C] font-semibold">Total:</span>
                    <span className="text-[#354024] font-bold text-2xl">$26</span>
                    <span className="text-[#1C1C1C]">in one day</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#889063]/30 p-6 rounded-xl border-l-4 border-[#889063]">
              <p className="text-[#464A39] mb-2">
                Again, not "bad."
              </p>
              <p className="text-[#464A39]">
                But if that happens a few times a week, it's helpful to know that before building a budget.
              </p>
            </div>
          </div>

          {/* How long should you track? */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#889063]/30"></div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-[#889063] rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024] mb-4" style={{ letterSpacing: '-0.1px' }}>
                How long should you track?
              </h2>
              <p className="text-[#1C1C1C] text-lg mb-6">
                You don't need to track forever.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#354024]/10 mb-6">
                <p className="text-[#1C1C1C] font-semibold mb-4">A good starting point:</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#889063] font-bold text-xl">7 days</span>
                    <span className="text-[#1C1C1C]">if you're new</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#889063] font-bold text-xl">2 weeks</span>
                    <span className="text-[#1C1C1C]">if your spending changes a lot</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#354024] text-white p-6 rounded-xl">
                <p className="text-lg">
                  The goal is to spot patterns, not track every penny for life.
                </p>
              </div>
            </div>
          </div>

          {/* Simple ways to track spending */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#889063]/30"></div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-[#889063] rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024] mb-4" style={{ letterSpacing: '-0.1px' }}>
                Simple ways to track spending
              </h2>
              <p className="text-[#1C1C1C] text-lg mb-6">
                Pick one method, not all of them.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#354024]/10 mb-6">
                <ul className="space-y-3 text-[#1C1C1C]">
                  <li>• Notes app on your phone</li>
                  <li>• Bank app transaction history</li>
                  <li>• Simple spreadsheet</li>
                  <li>• Budgeting app (optional)</li>
                </ul>
              </div>
              <div className="bg-[#889063]/30 p-6 rounded-xl border-l-4 border-[#889063]">
                <p className="text-[#354024] font-semibold">
                  The best method is the one you'll actually use.
                </p>
              </div>

              {/* Spending Tracker Callout */}
              <div className="bg-[#354024] p-8 md:p-10 rounded-2xl mt-6 shadow-lg border-4 border-[#889063]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="inline-block bg-[#FFCFD0] text-[#354024] text-xs font-bold px-3 py-1 rounded-full mb-3">
                      FREE RESOURCE
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      Try lumi's Spending Tracker
                    </h3>
                    <p className="text-white text-base md:text-lg leading-relaxed">
                      Use our simple weekly tracker template to monitor your spending habits and identify patterns. Easy to use and designed for beginners.
                    </p>
                  </div>
                  <a 
                    href="https://drive.google.com/file/d/1zLzs4yyj_tjhGpLjuMivoGu58yiFpJ_x/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFCFD0] text-[#354024] font-bold text-lg px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg whitespace-nowrap flex-shrink-0"
                  >
                    Get Tracker →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Common mistakes when tracking */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#889063]/30"></div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-[#889063] rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024] mb-4" style={{ letterSpacing: '-0.1px' }}>
                Common mistakes when tracking
              </h2>
              <p className="text-[#1C1C1C] text-lg mb-4">
                Try to avoid these:
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#354024]/10 mb-6">
                <ul className="space-y-3 text-[#1C1C1C]">
                  <li>❌ Forgetting small purchases</li>
                  <li>❌ Giving up after one "messy" day</li>
                  <li>❌ Thinking tracking means you have to stop spending</li>
                  <li>❌ Waiting for a "perfect" system</li>
                </ul>
              </div>
              <div className="bg-[#354024] text-white p-6 rounded-xl">
                <p className="text-lg">
                  Tracking is about awareness, not perfection.
                </p>
              </div>
            </div>
          </div>

          {/* What you're really looking for */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#889063]/30"></div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-[#889063] rounded-full flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024] mb-4" style={{ letterSpacing: '-0.1px' }}>
                What you're really looking for
              </h2>
              <p className="text-[#1C1C1C] text-lg mb-6">
                When you track spending, you're trying to answer questions like:
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                <ul className="space-y-3 text-[#464A39]">
                  <li>• Where does most of my money go?</li>
                  <li>• Which expenses surprise me?</li>
                  <li>• What do I spend on without thinking about it?</li>
                </ul>
              </div>
              <div className="bg-[#C2CBB2] p-6 rounded-lg">
                <p className="text-[#464A39]">
                  These answers make budgeting realistic instead of frustrating.
                </p>
              </div>
            </div>
          </div>

          {/* Quick recap */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#889063]/30"></div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-[#889063] rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl text-[#354024] mb-4" style={{ letterSpacing: '-0.1px' }}>
                Quick recap
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#354024]/10">
                <ul className="space-y-3 text-[#1C1C1C]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                    <span>Tracking shows where your money actually goes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                    <span>Small purchases matter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                    <span>You don't need a perfect system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                    <span>Awareness comes before change</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mini Quiz */}
          <div>
            <h2 className="text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.1px' }}>
              Quick Check
            </h2>
            
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#354024]/10">
                <h3 className="text-xl font-semibold text-[#354024] mb-4">Question 1</h3>
                <p className="text-[#1C1C1C] mb-4">What's the main purpose of tracking spending?</p>
                <div className="space-y-3">
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      incorrectAnswers['1-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-white border border-[#354024]/20 hover:bg-[#E5D7C4]"
                    }`}
                    onClick={() => handleAnswerClick(1, "A", false)}
                  >
                    <p className="text-[#1C1C1C]">A) To stop spending money</p>
                  </div>
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      incorrectAnswers['1-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-white border border-[#354024]/20 hover:bg-[#E5D7C4]"
                    }`}
                    onClick={() => handleAnswerClick(1, "B", false)}
                  >
                    <p className="text-[#1C1C1C]">B) To judge your choices</p>
                  </div>
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedAnswers[1] === "C" 
                        ? "border-2 border-[#889063] bg-[#CFBB99]/30" 
                        : "bg-white border border-[#354024]/20 hover:bg-[#E5D7C4]"
                    }`}
                    onClick={() => handleAnswerClick(1, "C", true)}
                  >
                    <p className={selectedAnswers[1] === "C" ? "text-[#354024] font-semibold" : "text-[#1C1C1C]"}>
                      C) To understand where your money goes {selectedAnswers[1] === "C" && "✅"}
                    </p>
                  </div>
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      incorrectAnswers['1-D']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-white border border-[#354024]/20 hover:bg-[#E5D7C4]"
                    }`}
                    onClick={() => handleAnswerClick(1, "D", false)}
                  >
                    <p className="text-[#1C1C1C]">D) To build credit</p>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#354024]/10">
                <h3 className="text-xl font-semibold text-[#354024] mb-4">Question 2</h3>
                <p className="text-[#1C1C1C] mb-4">How long should you track at first?</p>
                <div className="space-y-3">
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      incorrectAnswers['2-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-white border border-[#354024]/20 hover:bg-[#E5D7C4]"
                    }`}
                    onClick={() => handleAnswerClick(2, "A", false)}
                  >
                    <p className="text-[#1C1C1C]">A) One day</p>
                  </div>
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      incorrectAnswers['2-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-white border border-[#354024]/20 hover:bg-[#E5D7C4]"
                    }`}
                    onClick={() => handleAnswerClick(2, "B", false)}
                  >
                    <p className="text-[#1C1C1C]">B) One year</p>
                  </div>
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedAnswers[2] === "C" 
                        ? "border-2 border-[#889063] bg-[#CFBB99]/30" 
                        : "bg-white border border-[#354024]/20 hover:bg-[#E5D7C4]"
                    }`}
                    onClick={() => handleAnswerClick(2, "C", true)}
                  >
                    <p className={selectedAnswers[2] === "C" ? "text-[#354024] font-semibold" : "text-[#1C1C1C]"}>
                      C) About one to two weeks {selectedAnswers[2] === "C" && "✅"}
                    </p>
                  </div>
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      incorrectAnswers['2-D']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-white border border-[#354024]/20 hover:bg-[#E5D7C4]"
                    }`}
                    onClick={() => handleAnswerClick(2, "D", false)}
                  >
                    <p className="text-[#1C1C1C]">D) Forever</p>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#354024]/10">
                <h3 className="text-xl font-semibold text-[#354024] mb-4">Question 3</h3>
                <p className="text-[#1C1C1C] mb-4">Which tracking method is best?</p>
                <div className="space-y-3">
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      incorrectAnswers['3-A']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-white border border-[#354024]/20 hover:bg-[#E5D7C4]"
                    }`}
                    onClick={() => handleAnswerClick(3, "A", false)}
                  >
                    <p className="text-[#1C1C1C]">A) The most complicated one</p>
                  </div>
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      incorrectAnswers['3-B']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-white border border-[#354024]/20 hover:bg-[#E5D7C4]"
                    }`}
                    onClick={() => handleAnswerClick(3, "B", false)}
                  >
                    <p className="text-[#1C1C1C]">B) A spreadsheet only</p>
                  </div>
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedAnswers[3] === "C" 
                        ? "border-2 border-[#889063] bg-[#CFBB99]/30" 
                        : "bg-white border border-[#354024]/20 hover:bg-[#E5D7C4]"
                    }`}
                    onClick={() => handleAnswerClick(3, "C", true)}
                  >
                    <p className={selectedAnswers[3] === "C" ? "text-[#354024] font-semibold" : "text-[#1C1C1C]"}>
                      C) The one you'll actually use {selectedAnswers[3] === "C" && "✅"}
                    </p>
                  </div>
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      incorrectAnswers['3-D']
                        ? "border-2 border-red-500 bg-red-50"
                        : "bg-white border border-[#354024]/20 hover:bg-[#E5D7C4]"
                    }`}
                    onClick={() => handleAnswerClick(3, "D", false)}
                  >
                    <p className="text-[#1C1C1C]">D) An expensive app</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Step */}
          <div className="bg-[#354024] text-white p-10 rounded-2xl shadow-md">
            <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.1px' }}>
              Action Step (Do This Now)
            </h2>
            <p className="text-lg mb-4">
              Write down the following:
            </p>
            <div className="bg-white/10 rounded-xl p-6 mb-4">
              <ul className="space-y-2 text-lg ml-4">
                <li>• What you spend</li>
                <li>• About how much</li>
                <li>• What category it fits into (need or want)</li>
              </ul>
            </div>
            <p className="text-lg italic opacity-90">
              That's it. No changes yet.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t-2 border-[#354024]/20">
            <Link 
              to="/budgeting-basics/lesson-3"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-2 text-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#1C1C1C] text-lg mb-2 opacity-70">Next Lesson</p>
              <Link 
                to="/budgeting-basics/lesson-5"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-[#FFCFD0] px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-semibold text-lg"
              >
                Choosing a Budgeting Method →
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