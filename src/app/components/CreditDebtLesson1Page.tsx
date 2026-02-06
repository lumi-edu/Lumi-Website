import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function CreditDebtLesson1Page() {
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
            <img src={lumiLogo} alt="lumi" className="h-8 -ml-7" style={{ mixBlendMode: 'multiply' }} />
            <nav className="flex gap-8">
              <Link to="/" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                home
              </Link>
              <Link to="/learn" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                learn
              </Link>
              <Link to="/resources" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                resources
              </Link>
              <Link to="/blog" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
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
            to="/credit-debt" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Credit and Debt
          </Link>
        </div>
      </div>

      {/* Lesson Header */}
      <section className="px-6 pb-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 flex items-center gap-4 text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>12-15 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              <span>Beginner</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
            What Credit Really Is
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Credit and Debt • Lesson 1
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Opening Section - Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-10 border-l-4 border-[#FFCFD0]">
              <h2 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                Credit is borrowing with a promise attached
              </h2>
              <p className="text-[#1C1C1C] mb-6 text-lg" style={{ letterSpacing: '-0.89px' }}>
                Credit means you are using money that is not yours yet, with an agreement that you will pay it back later.
              </p>
              <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>
                So credit is not free money. It is a financial contract.
              </p>
            </div>

            <div className="bg-[#CFBB99]/30 rounded-xl p-10">
              <h3 className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>That agreement usually includes:</strong></h3>
              <ul className="space-y-4 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span>The amount you borrow</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span>When you must pay it back</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span>The cost of borrowing (interest and fees)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span>What happens if you do not pay on time</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Credit Exists */}
          <div className="bg-[#354024] text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>Why credit exists in the first place</h2>
            <p className="text-xl mb-8 opacity-90" style={{ letterSpacing: '-0.89px' }}>
              Credit exists because people and businesses often need money before they have it.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Buying a car</strong></p>
                <p className="text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Before you have thousands saved</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Paying for school</strong></p>
                <p className="text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Before you have full income</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Emergency expense</strong></p>
                <p className="text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Handling unexpected costs</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Building a business</strong></p>
                <p className="text-lg opacity-80" style={{ letterSpacing: '-0.89px' }}>Buying equipment</p>
              </div>
            </div>
            <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
              Credit makes large purchases possible now, while spreading the cost over time. The tradeoff is that borrowing usually costs extra.
            </p>
          </div>

          {/* Two Important Ideas - Side by Side Cards */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              The two most important ideas in credit
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-10 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#889063] text-white flex items-center justify-center text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                  <strong>1</strong>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Lenders take risk</strong></h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  If a bank lends someone money, there is a chance they do not get paid back.
                </p>
              </div>
              <div className="bg-white rounded-xl p-10 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#889063] text-white flex items-center justify-center text-3xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                  <strong>2</strong>
                </div>
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Lenders want profit</strong></h3>
                <p className="text-[#1C1C1C] opacity-80 mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  That is why interest exists. Interest is the cost of borrowing. It is how lenders earn money.
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Credit is basically: risk plus profit.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Who Gives Credit - Simple List Layout */}
          <div className="bg-[#CFBB99]/20 rounded-xl p-10">
            <h2 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>Who gives credit</h2>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>Lenders can include:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Banks</strong></p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Credit unions</strong></p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Credit card companies</strong></p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Online lenders</strong></p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Car loan companies</strong></p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Student loan providers</strong></p>
              </div>
            </div>
            <p className="text-[#1C1C1C] text-center text-xl" style={{ letterSpacing: '-0.89px' }}>
              <strong>The lender gives you access to money, but they always want repayment with terms.</strong>
            </p>
          </div>

          {/* Borrowing vs Earning - Highlighted Comparison */}
          <div className="bg-gradient-to-r from-[#889063] to-[#889063]/80 text-white rounded-xl p-10">
            <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.89px' }}>Borrowing vs earning</h2>
            <p className="text-xl mb-8 opacity-90" style={{ letterSpacing: '-0.89px' }}>
              This is a mindset that helps you avoid credit mistakes.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur rounded-lg p-8">
                <h3 className="text-2xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Earned money</strong></h3>
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>is yours permanently.</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-8">
                <h3 className="text-2xl mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Borrowed money</strong></h3>
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>must be returned.</p>
              </div>
            </div>
            <p className="text-xl mb-4" style={{ letterSpacing: '-0.89px' }}>
              When people get into trouble, it is usually because they treat borrowed money like income.
            </p>
            <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
              <strong>Credit is a tool, not extra money you gained.</strong>
            </p>
          </div>

          {/* What Debt Is */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>What debt is</h2>
            <div className="bg-white rounded-xl p-10 border-l-4 border-[#354024]">
              <p className="text-xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
                Debt is what you owe when you use credit.
              </p>
              <p className="text-[#1C1C1C] mb-8 text-lg" style={{ letterSpacing: '-0.89px' }}>
                If you borrow $500, you now have $500 of debt.
              </p>
              <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}>
                Debt is not automatically bad. It depends on:
              </p>
              <ul className="space-y-3 text-[#1C1C1C] mb-8 text-lg" style={{ letterSpacing: '-0.89px' }}>
                <li className="flex items-start gap-2">
                  <span className="text-[#889063] font-bold text-xl">•</span>
                  <span>What you used it for</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#889063] font-bold text-xl">•</span>
                  <span>The interest rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#889063] font-bold text-xl">•</span>
                  <span>How quickly you can pay it back</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#889063] font-bold text-xl">•</span>
                  <span>Whether it improves your future situation</span>
                </li>
              </ul>
              <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Debt becomes dangerous when it grows faster than your ability to repay.</strong>
              </p>
            </div>
          </div>

          {/* Main Types of Credit - Stacked Cards */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              The main types of credit and debt
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>
              There are two big categories you need to understand because they behave differently.
            </p>

            <div className="space-y-6">
              {/* Revolving Credit */}
              <div className="bg-[#FFCFD0]/30 rounded-xl p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#354024] text-white flex items-center justify-center text-2xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>1</strong>
                  </div>
                  <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Revolving credit</h3>
                </div>
                <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  This is credit you can use repeatedly up to a limit.
                </p>
                <p className="text-[#1C1C1C] mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Example: Credit cards</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/50 rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>You have a credit limit</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>You can borrow, repay, and borrow again</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-6">
                    <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Interest depends on your balance and APR</p>
                  </div>
                </div>
                <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Revolving credit is flexible but easy to misuse.</strong>
                </p>
              </div>

              {/* Installment Credit */}
              <div className="bg-[#354024] text-white rounded-xl p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#889063] text-white flex items-center justify-center text-2xl" style={{ letterSpacing: '-0.89px' }}>
                    <strong>2</strong>
                  </div>
                  <h3 className="text-3xl" style={{ letterSpacing: '-0.89px' }}>Installment credit</h3>
                </div>
                <p className="mb-6 opacity-90 text-xl" style={{ letterSpacing: '-0.89px' }}>
                  This is credit you borrow once and repay in fixed payments.
                </p>
                <p className="mb-6 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Examples:</strong></p>
                <div className="grid md:grid-cols-2 gap-3 mb-8">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                    <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Auto loans</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                    <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Student loans</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                    <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Personal loans</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                    <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>Mortgages</p>
                  </div>
                </div>
                <p className="mb-4 opacity-90 text-xl" style={{ letterSpacing: '-0.89px' }}>Installment loans have:</p>
                <ul className="space-y-2 mb-6 opacity-90 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li>• A set loan amount</li>
                  <li>• A set term (length)</li>
                  <li>• A monthly payment</li>
                  <li>• A schedule</li>
                </ul>
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Installment debt is structured and usually used for big purchases.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Credit Terms - Definition Grid */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Credit has "terms" and terms are everything
            </h2>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}>
              Whenever you borrow money, the lender sets terms.
            </p>
            <p className="text-[#1C1C1C] mb-8 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Key terms to know:</strong></p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#889063]">
                <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Principal</strong></h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  The original amount you borrow.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border-l-4 border-[#889063]">
                <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Interest</strong></h3>
                <p className="text-[#1C1C1C] opacity-80 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  The cost of borrowing money.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border-l-4 border-[#889063]">
                <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>APR</strong></h3>
                <p className="text-[#1C1C1C] opacity-80 mb-3 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  Annual Percentage Rate. The yearly interest rate, shown as a percentage.
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <strong>APR matters because it tells you how expensive the debt is.</strong>
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border-l-4 border-[#889063]">
                <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>Fees</strong></h3>
                <p className="text-[#1C1C1C] opacity-80 mb-3 text-lg" style={{ letterSpacing: '-0.89px' }}>Extra costs that may include:</p>
                <ul className="text-lg text-[#1C1C1C] space-y-1" style={{ letterSpacing: '-0.89px' }}>
                  <li>• Late payment fees</li>
                  <li>• Annual fees</li>
                  <li>• Origination fees (some loans)</li>
                  <li>• Balance transfer fees (credit cards)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 border-l-4 border-[#889063] md:col-span-2">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Minimum payment</strong></h3>
                <p className="text-[#1C1C1C] opacity-80 mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  The smallest amount you are allowed to pay on a credit card each month.
                </p>
                <p className="text-[#1C1C1C] mb-4 text-lg" style={{ letterSpacing: '-0.89px' }}>
                  This is important because minimum payments keep you in debt longer and cost more interest.
                </p>
                <p className="text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <strong>You will go deep on this later, but know now that minimum payment is not the smart payment.</strong>
                </p>
              </div>
            </div>

            <div className="bg-[#CFBB99]/30 rounded-lg p-8 mt-6">
              <p className="text-[#1C1C1C] text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Sometimes fees make debt much more expensive than people expect.</strong>
              </p>
            </div>
          </div>

          {/* Credit as Reputation */}
          <div className="bg-gradient-to-br from-[#354024] to-[#354024]/90 text-white rounded-xl p-10">
            <h2 className="text-4xl mb-6" style={{ letterSpacing: '-0.89px' }}>
              Credit is not only about borrowing, it is also about reputation
            </h2>
            <p className="text-xl mb-8 opacity-90" style={{ letterSpacing: '-0.89px' }}>
              When you use credit, your behavior is tracked.
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
              <p className="mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Lenders want to know:</strong></p>
              <ul className="space-y-2 text-lg" style={{ letterSpacing: '-0.89px' }}>
                <li>• Do you pay on time</li>
                <li>• Do you borrow too much</li>
                <li>• Do you manage credit responsibly</li>
              </ul>
            </div>

            <p className="mb-6 opacity-90 text-xl" style={{ letterSpacing: '-0.89px' }}>
              This information becomes your credit history, which affects your credit score.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
              <p className="mb-4 text-xl" style={{ letterSpacing: '-0.89px' }}><strong>Your credit score influences:</strong></p>
              <ul className="space-y-2 text-lg" style={{ letterSpacing: '-0.89px' }}>
                <li>• Whether you get approved for loans</li>
                <li>• The interest rates you get</li>
                <li>• Whether you can rent certain apartments</li>
                <li>• Sometimes insurance pricing and job screenings depending on the situation</li>
              </ul>
            </div>

            <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
              <strong>Credit is basically your financial trust score.</strong>
            </p>
          </div>

          {/* Good vs Bad Credit - Split Design */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Good credit is powerful</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-xl p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Good credit can lead to:</strong></h3>
                <ul className="space-y-4 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span>Lower interest rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span>Easier approval for housing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span>Better loan options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                    <span>More financial flexibility</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-xl p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Bad credit can lead to:</strong></h3>
                <ul className="space-y-4 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-0.5" />
                    <span>High interest rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-0.5" />
                    <span>More fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-0.5" />
                    <span>Loan denials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-0.5" />
                    <span>Needing a cosigner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-6 h-6 text-[#FFCFD0] flex-shrink-0 mt-0.5" />
                    <span>Spending years recovering financially</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#889063] text-white rounded-lg p-8 mt-6 text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Credit decisions now can shape costs later.</strong>
              </p>
            </div>
          </div>

          {/* Biggest Misconception */}
          <div className="bg-[#CFBB99]/30 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
              The biggest misconception about credit
            </h2>
            <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              <strong>The biggest misconception is that credit is extra money.</strong>
            </p>
            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Credit is borrowed money with consequences.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>If you use credit wisely:</strong></h3>
                <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li>• You build trust</li>
                  <li>• You gain flexibility</li>
                  <li>• You avoid unnecessary fees</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>If you use credit carelessly:</strong></h3>
                <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li>• Debt grows</li>
                  <li>• Interest piles up</li>
                  <li>• Stress increases</li>
                  <li>• Credit score falls</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 text-center">
              <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Same tool, totally different outcomes.</strong>
              </p>
            </div>
          </div>

          {/* Key Vocabulary */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Credit</strong></h3>
                <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>Borrowing money with an agreement to repay</p>
              </div>
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Debt</strong></h3>
                <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>Money you owe</p>
              </div>
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Lender</strong></h3>
                <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>Company that provides credit</p>
              </div>
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Borrower</strong></h3>
                <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>Person using credit</p>
              </div>
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Principal</strong></h3>
                <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>Amount borrowed</p>
              </div>
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Interest</strong></h3>
                <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>Cost of borrowing</p>
              </div>
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>APR</strong></h3>
                <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>Yearly interest rate</p>
              </div>
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Revolving credit</strong></h3>
                <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>Reusable credit line like a credit card</p>
              </div>
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Installment credit</strong></h3>
                <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>Fixed loan repaid over time</p>
              </div>
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#CFBB99]">
                <h3 className="text-xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>Credit history</strong></h3>
                <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>Record of how you manage credit</p>
              </div>
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-[#889063] text-white rounded-xl p-10">
            <h2 className="text-3xl mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-1" />
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>Credit is borrowing under a contract</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-1" />
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>Debt is what you owe from using credit</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-1" />
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>Lenders profit through interest and fees</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-1" />
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>Revolving credit and installment credit work differently</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-1" />
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>Credit behavior affects your financial reputation</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Check Quiz */}
      <section className="px-6 py-12 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#1C1C1C] mb-10" style={{ letterSpacing: '-0.89px' }}>Quick Check</h2>
          
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="bg-[#E5D7C4] rounded-xl p-10">
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. What is credit?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Free money from a bank', correct: false },
                  { text: 'B) Borrowing money with an agreement to repay', correct: true },
                  { text: 'C) A type of savings account', correct: false },
                  { text: 'D) Only for emergencies', correct: false }
                ].map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(1, answer.text, answer.correct)}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all text-lg ${
                      selectedAnswers[1] === answer.text
                        ? 'border-[#889063] bg-[#889063]/10'
                        : incorrectAnswers[`1-${answer.text}`]
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40 bg-white'
                    }`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    <span className="text-[#1C1C1C]">{answer.text}</span>
                    {selectedAnswers[1] === answer.text && (
                      <CheckCircle2 className="inline-block ml-2 w-6 h-6 text-[#889063]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-[#E5D7C4] rounded-xl p-10">
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. What is revolving credit?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) A one-time loan with fixed payments', correct: false },
                  { text: 'B) Credit you can reuse up to a limit', correct: true },
                  { text: 'C) A mortgage', correct: false },
                  { text: 'D) A scholarship', correct: false }
                ].map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(2, answer.text, answer.correct)}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all text-lg ${
                      selectedAnswers[2] === answer.text
                        ? 'border-[#889063] bg-[#889063]/10'
                        : incorrectAnswers[`2-${answer.text}`]
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40 bg-white'
                    }`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    <span className="text-[#1C1C1C]">{answer.text}</span>
                    {selectedAnswers[2] === answer.text && (
                      <CheckCircle2 className="inline-block ml-2 w-6 h-6 text-[#889063]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-[#E5D7C4] rounded-xl p-10">
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. Why do lenders charge interest?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) To punish borrowers', correct: false },
                  { text: 'B) To make borrowing harder', correct: false },
                  { text: 'C) To earn profit and compensate for risk', correct: true },
                  { text: 'D) Because credit is free', correct: false }
                ].map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(3, answer.text, answer.correct)}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all text-lg ${
                      selectedAnswers[3] === answer.text
                        ? 'border-[#889063] bg-[#889063]/10'
                        : incorrectAnswers[`3-${answer.text}`]
                        ? 'border-[#FFCFD0] bg-[#FFCFD0]/20 opacity-50'
                        : 'border-[#354024]/20 hover:border-[#354024]/40 bg-white'
                    }`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    <span className="text-[#1C1C1C]">{answer.text}</span>
                    {selectedAnswers[3] === answer.text && (
                      <CheckCircle2 className="inline-block ml-2 w-6 h-6 text-[#889063]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 md:px-12 bg-[#E5D7C4]">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end items-center">
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/credit-debt/lesson-2"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                How Credit Cards Work →
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