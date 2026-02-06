import { Link } from './RouterLink';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, Award, FileText, TrendingUp, TrendingDown } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function CreditDebtLesson6Page() {
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
            Credit Score Basics
          </h1>
          <p className="text-xl text-[#1C1C1C] opacity-80">
            Module: Credit and Debt • Lesson 6
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Opening - Clean Card with Border */}
          <div className="border-4 border-[#354024] rounded-2xl bg-white p-12 text-center shadow-xl">
            <div className="flex justify-center mb-8">
              <div className="bg-[#889063] rounded-2xl p-8">
                <Award className="w-24 h-24 text-white" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Your credit score is your financial reputation
            </h2>
            <div className="bg-[#E5D7C4] border-2 border-[#889063] rounded-xl p-10 max-w-3xl mx-auto">
              <p className="text-2xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
                Credit scores are used by lenders, landlords, employers, and more to measure how trustworthy you are with money.
              </p>
              <p className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                <strong>A good credit score opens doors. A bad one closes them.</strong>
              </p>
            </div>
          </div>

          {/* What is a Credit Score */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              What is a credit score
            </h2>
            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              A credit score is a three-digit number that represents how responsibly you manage credit and debt.
            </p>

            <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 mb-8">
              <p className="text-2xl text-[#1C1C1C] text-center" style={{ letterSpacing: '-0.89px' }}>
                <strong>Credit scores typically range from 300 to 850.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#CFBB99]/30 rounded-lg p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Higher scores mean:</strong></h3>
                <ul className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li>• Lower risk to lenders</li>
                  <li>• Better loan terms</li>
                  <li>• Lower interest rates</li>
                  <li>• More financial opportunities</li>
                </ul>
              </div>

              <div className="bg-[#FFCFD0]/20 border-2 border-[#FFCFD0] rounded-lg p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Lower scores mean:</strong></h3>
                <ul className="space-y-3 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                  <li>• Higher risk to lenders</li>
                  <li>• Harder to get approved</li>
                  <li>• Higher interest rates</li>
                  <li>• Limited financial options</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Your credit score is calculated based on your credit behavior over time.</strong>
              </p>
            </div>
          </div>

          {/* Credit Score Ranges */}
          <div>
            <h2 className="text-5xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Credit score ranges
            </h2>

            <div className="space-y-4">
              <div className="bg-[#889063] text-white rounded-xl p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-3xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>800-850: Exceptional</strong></p>
                    <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>Best rates, highest approval odds</p>
                  </div>
                  <TrendingUp className="w-16 h-16" />
                </div>
              </div>

              <div className="bg-[#889063]/80 text-white rounded-xl p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-3xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>740-799: Very Good</strong></p>
                    <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>Excellent terms, strong approval</p>
                  </div>
                  <TrendingUp className="w-16 h-16" />
                </div>
              </div>

              <div className="bg-[#CFBB99] text-[#1C1C1C] rounded-xl p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-3xl mb-2" style={{ letterSpacing: '-0.89px' }}><strong>670-739: Good</strong></p>
                    <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>Decent rates, reliable approval</p>
                  </div>
                  <div className="w-16 h-16 flex items-center justify-center">
                    <div className="w-12 h-1 bg-[#1C1C1C]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFCFD0]/30 border-2 border-[#FFCFD0] rounded-xl p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-3xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>580-669: Fair</strong></p>
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Higher rates, limited options</p>
                  </div>
                  <TrendingDown className="w-16 h-16 text-[#FFCFD0]" />
                </div>
              </div>

              <div className="bg-[#FFCFD0]/50 border-4 border-[#FFCFD0] rounded-xl p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-3xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}><strong>300-579: Poor</strong></p>
                    <p className="text-xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Very high rates, difficult approvals</p>
                  </div>
                  <TrendingDown className="w-16 h-16 text-[#FFCFD0]" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-10 mt-8 shadow-lg">
              <p className="text-xl text-[#1C1C1C] text-center" style={{ letterSpacing: '-0.89px' }}>
                Most credit scoring models use FICO or VantageScore. Both use similar ranges, though exact calculations vary.
              </p>
            </div>
          </div>

          {/* Why Credit Scores Matter */}
          <div className="bg-[#CFBB99]/40 rounded-xl p-10">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Why credit scores matter
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Loans and Credit Cards</strong></h3>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Lenders check your credit score to decide whether to approve you and at what interest rate. Better scores unlock better terms.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Renting an Apartment</strong></h3>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Landlords review credit scores to assess whether you will pay rent on time. Low scores can result in denials or higher security deposits.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Employment</strong></h3>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Some employers check credit reports (not scores directly) to evaluate financial responsibility, especially for positions handling money.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Insurance Rates</strong></h3>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Auto and home insurance companies may use credit-based insurance scores to set premiums. Better credit can mean lower rates.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Utilities and Phone Plans</strong></h3>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Service providers check credit to determine if deposits are required. Good credit eliminates these upfront costs.
                </p>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 mt-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Credit scores affect nearly every major financial decision in your life.</strong>
              </p>
            </div>
          </div>

          {/* How Credit Scores Are Built */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              How credit scores are built
            </h2>

            <p className="text-xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Credit scores are calculated using data from your credit reports, which track your borrowing and repayment history.
            </p>

            <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-lg p-8 mb-8">
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>Three major credit bureaus collect this data:</strong></h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-6 text-center">
                  <p className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Experian</strong></p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <p className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>Equifax</strong></p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <p className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}><strong>TransUnion</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-[#CFBB99]/30 rounded-lg p-8 mb-8">
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}><strong>What your credit report includes:</strong></h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Personal information (name, address, SSN)</p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Credit accounts (cards, loans, payment history)</p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Public records (bankruptcies, liens)</p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-[#889063] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Credit inquiries (hard and soft pulls)</p>
                </div>
              </div>
            </div>

            <div className="bg-[#354024] text-white rounded-lg p-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>Your credit report is like a financial transcript.</strong>
              </p>
            </div>
          </div>

          {/* Credit Reports vs Credit Scores */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
              Credit reports vs credit scores
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="w-12 h-12 text-[#889063]" />
                  <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Credit Report</h3>
                </div>
                <div className="bg-white rounded-lg p-8 mb-6">
                  <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Detailed record of:</strong></p>
                  <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li>• All credit accounts</li>
                    <li>• Payment history</li>
                    <li>• Account balances</li>
                    <li>• Public records</li>
                    <li>• Credit inquiries</li>
                  </ul>
                </div>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Think of it as your full financial history document
                </p>
              </div>

              <div className="bg-[#889063]/10 border-2 border-[#889063] rounded-xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <Award className="w-12 h-12 text-[#889063]" />
                  <h3 className="text-3xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Credit Score</h3>
                </div>
                <div className="bg-white rounded-lg p-8 mb-6">
                  <p className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}><strong>Single number from:</strong></p>
                  <ul className="space-y-2 text-[#1C1C1C] text-lg" style={{ letterSpacing: '-0.89px' }}>
                    <li>• Payment patterns</li>
                    <li>• Credit utilization</li>
                    <li>• Account age</li>
                    <li>• Credit mix</li>
                    <li>• Recent inquiries</li>
                  </ul>
                </div>
                <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                  Think of it as your financial GPA
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-10 mt-8 shadow-lg">
              <p className="text-xl text-[#1C1C1C] text-center" style={{ letterSpacing: '-0.89px' }}>
                Your credit score is calculated FROM the information IN your credit reports.
              </p>
            </div>
          </div>

          {/* Starting Your Credit Journey */}
          <div className="bg-gradient-to-br from-[#889063] to-[#889063]/80 text-white rounded-xl p-10">
            <h2 className="text-4xl mb-8" style={{ letterSpacing: '-0.89px' }}>
              Starting your credit journey
            </h2>

            <div className="bg-white/20 backdrop-blur rounded-lg p-8 mb-8">
              <p className="text-2xl mb-6" style={{ letterSpacing: '-0.89px' }}>
                <strong>If you have never had credit before, you have no credit score yet.</strong>
              </p>
              <p className="text-xl opacity-90" style={{ letterSpacing: '-0.89px' }}>
                You need to establish credit history first.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>
                  <strong>Ways to start building credit:</strong>
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                  • Open a secured credit card
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                  • Become an authorized user on someone else's card
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                  • Apply for a student credit card or credit builder loan
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-lg" style={{ letterSpacing: '-0.89px' }}>
                  • Use services that report rent or utility payments to credit bureaus
                </p>
              </div>
            </div>

            <div className="bg-[#354024] rounded-lg p-8 mt-8 text-center">
              <p className="text-2xl" style={{ letterSpacing: '-0.89px' }}>
                <strong>The earlier you start building credit responsibly, the better.</strong>
              </p>
            </div>
          </div>

          {/* Key Vocabulary */}
          <div>
            <h2 className="text-4xl text-[#1C1C1C] mb-8" style={{ letterSpacing: '-0.89px' }}>Key vocabulary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: 'Credit score', def: 'Three-digit number representing creditworthiness' },
                { term: 'Credit report', def: 'Detailed record of credit history' },
                { term: 'Credit bureau', def: 'Agency that collects credit data' },
                { term: 'FICO score', def: 'Most widely used credit scoring model' },
                { term: 'VantageScore', def: 'Alternative credit scoring model' },
                { term: 'Creditworthiness', def: 'How likely you are to repay debt' },
                { term: 'Credit inquiry', def: 'Request to view your credit report' },
                { term: 'Secured credit card', def: 'Card requiring a security deposit to open' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 border-l-4 border-[#889063]">
                  <h3 className="text-2xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}><strong>{item.term}</strong></h3>
                  <p className="text-lg text-[#1C1C1C] opacity-70" style={{ letterSpacing: '-0.89px' }}>{item.def}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Recap */}
          <div className="bg-[#889063] text-white rounded-xl p-10">
            <h2 className="text-3xl mb-8" style={{ letterSpacing: '-0.89px' }}>Quick recap</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Credit scores range from 300 to 850',
                'Higher scores unlock better financial opportunities',
                'Credit scores affect loans, housing, and more',
                'Credit reports contain detailed credit history',
                'Three bureaus track your credit: Experian, Equifax, TransUnion',
                'Building credit early is important for your future'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-1" />
                  <p className="text-xl" style={{ letterSpacing: '-0.89px' }}>{point}</p>
                </div>
              ))}
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>1. What does a credit score measure?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) How much money you have', correct: false },
                  { text: 'B) How responsibly you manage credit and debt', correct: true },
                  { text: 'C) Your income level', correct: false },
                  { text: 'D) Your age', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>2. What is a good credit score range?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) 300-500', correct: false },
                  { text: 'B) 500-600', correct: false },
                  { text: 'C) 670-739', correct: true },
                  { text: 'D) 900-1000', correct: false }
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
              <h3 className="text-2xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>3. What are the three major credit bureaus?</h3>
              <div className="space-y-4">
                {[
                  { text: 'A) Visa, Mastercard, Amex', correct: false },
                  { text: 'B) Experian, Equifax, TransUnion', correct: true },
                  { text: 'C) Bank of America, Chase, Wells Fargo', correct: false },
                  { text: 'D) IRS, FBI, SEC', correct: false }
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
          <div className="flex justify-between items-center">
            <Link 
              to="/credit-debt/lesson-5"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#354024] hover:opacity-70 transition-opacity flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-6 h-6" />
              Previous Lesson
            </Link>
            <div className="text-right">
              <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
              <Link 
                to="/credit-debt/lesson-7"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
              >
                Factors That Affect Your Score →
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