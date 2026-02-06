import { Link } from './RouterLink';
import { ArrowLeft, FileText, DollarSign, TrendingUp, TrendingDown, Calendar, CheckCircle, XCircle, AlertCircle, Shield } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function TaxEssentialsLesson5Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const correctAnswers = {
    1: 'B',
    2: 'B',
    3: 'B'
  };

  const handleAnswerSelect = (questionNum: number, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionNum]: answer }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allAnswered = Object.keys(correctAnswers).length === Object.keys(selectedAnswers).length;

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
            to="/tax-essentials" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Tax Essentials
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-8 py-12">
        {/* Lesson Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
              <FileText size={28} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-base mb-1">Lesson 5</p>
              <h1 className="text-4xl font-medium" style={{ color: '#1C1C1C' }}>What a Tax Return Really Is</h1>
            </div>
          </div>
          <p style={{ color: '#354024' }} className="opacity-70 text-lg">Time: ~12 to 15 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-5 font-medium" style={{ color: '#E5D7C4' }}>A tax return is how you report your income to the government</h2>
          <p style={{ color: '#E5D7C4' }} className="mb-5 text-lg">A tax return is a form you submit to the IRS that summarizes:</p>
          <div className="grid md:grid-cols-3 gap-3 mb-6">
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">How much money you earned</p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">How much tax was already withheld</p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">Whether you paid enough or too little</p>
            </div>
          </div>
          <div className="p-6 rounded-lg mb-5" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-medium text-center text-xl">
              It is basically your yearly financial report card for taxes.
            </p>
          </div>
          <p style={{ color: '#E5D7C4' }} className="text-lg">
            Even if taxes are taken out of your paycheck, you still file a tax return to officially settle what you owe.
          </p>
        </div>

        {/* Why Filing is Required */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <h2 className="text-3xl mb-5 font-medium" style={{ color: '#1C1C1C' }}>Why filing a tax return is required</h2>
          <p style={{ color: '#1C1C1C' }} className="mb-5 text-lg">The government needs to:</p>
          <div className="space-y-3 mb-6">
            <div className="p-6 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="flex-shrink-0" />
              <p style={{ color: '#E5D7C4' }} className="text-lg">Confirm your income</p>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="flex-shrink-0" />
              <p style={{ color: '#E5D7C4' }} className="text-lg">Calculate your correct tax amount</p>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="flex-shrink-0" />
              <p style={{ color: '#E5D7C4' }} className="text-lg">Determine if you overpaid or underpaid</p>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="mb-5 text-lg">
            Without filing, the IRS has no final record from you.
          </p>
          <div className="p-6 rounded-lg mb-5" style={{ backgroundColor: '#E5D7C4' }}>
            <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">
              If you earned income above the filing threshold, you are legally required to file.
            </p>
          </div>
          <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">
            Filing protects you and keeps you compliant.
          </p>
        </div>

        {/* Dual Path: Refund vs Taxes Owed */}
        <div className="mb-12">
          <h2 className="text-4xl mb-6 text-center font-medium" style={{ color: '#1C1C1C' }}>Refund vs taxes owed</h2>
          <p style={{ color: '#1C1C1C' }} className="mb-8 text-center text-xl">
            When you file, one of two things happens.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Refund Path */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <TrendingUp size={42} style={{ color: '#889063' }} />
                </div>
              </div>
              <h3 className="text-3xl font-medium text-center mb-6" style={{ color: '#1C1C1C' }}>Refund</h3>
              
              <div className="space-y-4 mb-6">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-medium mb-2 text-lg">What it means:</p>
                  <p style={{ color: '#E5D7C4' }} className="text-lg">
                    You paid more in taxes during the year than required.
                  </p>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-medium mb-2 text-lg">What happens:</p>
                  <p style={{ color: '#E5D7C4' }} className="text-lg">
                    The IRS sends the extra money back.
                  </p>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-medium mb-2 text-lg">Why it happens:</p>
                  <p style={{ color: '#E5D7C4' }} className="text-lg">
                    Refunds happen because withholding estimated your taxes too high.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
                <DollarSign size={36} style={{ color: '#354024' }} className="mx-auto mb-2" />
                <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">
                  You get money back
                </p>
              </div>
            </div>

            {/* Taxes Owed Path */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                  <TrendingDown size={42} style={{ color: '#CFBB99' }} />
                </div>
              </div>
              <h3 className="text-3xl font-medium text-center mb-6" style={{ color: '#1C1C1C' }}>Taxes owed</h3>
              
              <div className="space-y-4 mb-6">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-medium mb-2 text-lg">What it means:</p>
                  <p style={{ color: '#E5D7C4' }} className="text-lg">
                    You did not have enough withheld.
                  </p>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-medium mb-2 text-lg">What happens:</p>
                  <p style={{ color: '#E5D7C4' }} className="text-lg">
                    You must pay the remaining balance.
                  </p>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-medium mb-2 text-lg">This often happens if:</p>
                  <div className="space-y-1 mt-2 text-lg">
                    <p style={{ color: '#E5D7C4' }}>• You worked multiple jobs</p>
                    <p style={{ color: '#E5D7C4' }}>• You had side income</p>
                    <p style={{ color: '#E5D7C4' }}>• You claimed incorrect withholding</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#E5D7C4' }}>
                <DollarSign size={36} style={{ color: '#354024' }} className="mx-auto mb-2" />
                <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">
                  You must pay
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="text-xl font-medium">
              The tax return finalizes what you owe.
            </p>
          </div>
        </div>

        {/* Filing Is Not Optional */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#FFCFD0' }}>
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle size={44} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
            <div>
              <h2 className="text-3xl mb-5 font-medium" style={{ color: '#1C1C1C' }}>Filing is not optional if you earned enough</h2>
              <p style={{ color: '#1C1C1C' }} className="mb-5 text-lg">
                Teens and young adults often think taxes only apply later in life.
              </p>
              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#FFCFD0' }}>
                <p style={{ color: '#1C1C1C' }} className="font-medium text-xl">
                  If you worked and earned income above the limit, you must file.
                </p>
              </div>
            </div>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-4 font-medium text-lg">Not filing can lead to:</p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#FFCFD0' }}>
              <XCircle size={36} style={{ color: '#1C1C1C' }} className="mx-auto mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">Penalties</p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#FFCFD0' }}>
              <XCircle size={36} style={{ color: '#1C1C1C' }} className="mx-auto mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">IRS notices</p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#FFCFD0' }}>
              <XCircle size={36} style={{ color: '#1C1C1C' }} className="mx-auto mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">Legal trouble later</p>
            </div>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-medium text-center text-lg">
              Even part time workers may need to file.
            </p>
          </div>
        </div>

        {/* Important Deadlines */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <div className="flex items-center gap-4 mb-6">
            <Calendar size={44} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-medium" style={{ color: '#1C1C1C' }}>Important deadlines</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="mb-3 text-lg">
                Tax returns are due every year around April.
              </p>
              <p style={{ color: '#E5D7C4' }} className="text-lg">
                This deadline covers income from the previous year.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="mb-3 text-lg">
                Filing late can cause penalties or interest.
              </p>
              <p style={{ color: '#E5D7C4' }} className="text-lg">
                On time filing keeps everything clean and stress free.
              </p>
            </div>
          </div>
        </div>

        {/* Why This Matters Early */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-4 mb-6">
            <Shield size={44} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-medium" style={{ color: '#E5D7C4' }}>Why this matters early</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-5 text-lg">Understanding tax returns helps you:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">Get refunds you deserve</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">Avoid owing large amounts</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">Stay legally safe</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#354024' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">Build financial responsibility</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-medium text-xl">
              Taxes are part of adulthood, and learning them early gives you a major advantage.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <h2 className="text-3xl mb-6 font-medium" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Tax return:</strong> Yearly income report filed with IRS</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Refund:</strong> Money returned from overpaid taxes</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Taxes owed:</strong> Remaining balance due</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>IRS:</strong> Federal tax authority</p>
            </div>
            <div className="p-5 rounded md:col-span-2" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Filing deadline:</strong> Annual due date</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-medium" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-4 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <FileText size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Tax returns report yearly income</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Filing is required if income exceeds limits</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Refund means overpaid</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingDown size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Owing means underpaid</span>
            </li>
            <li className="flex items-start gap-3">
              <Calendar size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Deadlines matter</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Filing protects you legally</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-medium" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
            <p className="mb-5 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What is a tax return used for?</strong>
            </p>
            <div className="space-y-3">
              {['A) Savings', 'B) Reporting income and taxes paid', 'C) Credit', 'D) Loans'].map((option) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswers[1] === letter;
                const isCorrect = correctAnswers[1] === letter;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(1, letter)}
                    className="w-full text-left p-5 rounded border-2 transition-all text-lg"
                    style={{
                      backgroundColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#CFBB99' : '#E5D7C4',
                      borderColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#354024' : '#889063',
                      color: showCorrect ? '#E5D7C4' : '#1C1C1C',
                      opacity: showIncorrect ? 0.7 : 1
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
            <p className="mb-5 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>2. What does a refund mean?</strong>
            </p>
            <div className="space-y-3">
              {['A) You owe money', 'B) You overpaid taxes', 'C) No taxes', 'D) Penalty'].map((option) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswers[2] === letter;
                const isCorrect = correctAnswers[2] === letter;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(2, letter)}
                    className="w-full text-left p-5 rounded border-2 transition-all text-lg"
                    style={{
                      backgroundColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#CFBB99' : '#E5D7C4',
                      borderColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#354024' : '#889063',
                      color: showCorrect ? '#E5D7C4' : '#1C1C1C',
                      opacity: showIncorrect ? 0.7 : 1
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
            <p className="mb-5 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>3. What happens if you do not file when required?</strong>
            </p>
            <div className="space-y-3">
              {['A) Nothing', 'B) Penalties and legal issues', 'C) Refund automatically', 'D) Extra income'].map((option) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswers[3] === letter;
                const isCorrect = correctAnswers[3] === letter;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(3, letter)}
                    className="w-full text-left p-5 rounded border-2 transition-all text-lg"
                    style={{
                      backgroundColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#CFBB99' : '#E5D7C4',
                      borderColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#354024' : '#889063',
                      color: showCorrect ? '#E5D7C4' : '#1C1C1C',
                      opacity: showIncorrect ? 0.7 : 1
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          {!showResults && (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="w-full py-5 rounded-lg transition-opacity disabled:opacity-50 text-lg font-medium"
              style={{
                backgroundColor: '#354024',
                color: '#E5D7C4'
              }}
            >
              {allAnswered ? 'Submit Answers' : 'Please answer all questions'}
            </button>
          )}

          {/* Results */}
          {showResults && (
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p className="text-2xl mb-2 font-medium" style={{ color: '#E5D7C4' }}>
                Your score: {Object.keys(correctAnswers).filter(q => selectedAnswers[parseInt(q)] === correctAnswers[parseInt(q)]).length} / {Object.keys(correctAnswers).length}
              </p>
              <p style={{ color: '#E5D7C4' }} className="opacity-90 text-lg">
                {Object.keys(correctAnswers).filter(q => selectedAnswers[parseInt(q)] === correctAnswers[parseInt(q)]).length === Object.keys(correctAnswers).length
                  ? 'Perfect! You understand what a tax return is and how it works.'
                  : 'Review the sections above to better understand tax returns.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/tax-essentials/lesson-4"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Types of Income You Must Report
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/tax-essentials/lesson-6"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Filing Status and Dependents →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}