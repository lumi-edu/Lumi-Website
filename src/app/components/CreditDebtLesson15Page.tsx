import { Link } from './RouterLink';
import { ArrowLeft, Heart, Brain, Shield, Target, TrendingUp, Clock, Smile } from 'lucide-react';
import { useState } from 'react';

export default function CreditDebtLesson15Page() {
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

  const allAnswered = Object.keys(correctAnswers).length === Object.keys(selectedAnswers).length;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f1f0e2' }}>
      {/* Header */}
      <header className="border-b-8" style={{ borderColor: '#464A39' }}>
        <nav className="py-4 px-8" style={{ backgroundColor: '#C2CBB2' }}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="text-2xl tracking-wide" style={{ color: '#464A39' }}>
              lumi
            </Link>
            <div className="flex gap-8">
              <Link to="/learn" className="hover:opacity-70 transition-opacity" style={{ color: '#464A39' }}>
                Learn
              </Link>
              <Link to="/resources" className="hover:opacity-70 transition-opacity" style={{ color: '#464A39' }}>
                Resources
              </Link>
              <Link to="/blog" className="hover:opacity-70 transition-opacity" style={{ color: '#464A39' }}>
                Blog
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-8 py-12">
        {/* Back Navigation */}
        <Link 
          to="/learn/credit-debt" 
          className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity"
          style={{ color: '#464A39' }}
        >
          <ArrowLeft size={20} />
          Back to Credit and Debt
        </Link>

        {/* Lesson Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1BB3D1' }}>
              <Heart size={24} style={{ color: '#f1f0e2' }} />
            </div>
            <div>
              <p style={{ color: '#464A39' }} className="text-sm mb-1">Lesson 15</p>
              <h1 className="text-3xl" style={{ color: '#464A39' }}>Building a Healthy Relationship with Credit</h1>
            </div>
          </div>
          <p style={{ color: '#464A39' }} className="opacity-70">Time: ~12–15 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#1BB3D1', borderColor: '#464A39' }}>
          <h2 className="text-2xl mb-4" style={{ color: '#464A39' }}>Credit is a long term tool, not short term money</h2>
          <p style={{ color: '#464A39' }} className="mb-4">
            The most financially successful people do not see credit as extra spending power. They see it as a responsibility and a reputation builder.
          </p>
          <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#464A39' }}>
            <p style={{ color: '#f1f0e2' }} className="font-bold text-lg">
              Credit should never control your lifestyle. It should quietly support your financial stability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 rounded" style={{ backgroundColor: '#C2CBB2' }}>
              <p style={{ color: '#464A39' }}>You borrow only when necessary</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#C2CBB2' }}>
              <p style={{ color: '#464A39' }}>You repay quickly</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#C2CBB2' }}>
              <p style={{ color: '#464A39' }}>You stay aware and in control</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#C2CBB2' }}>
              <p style={{ color: '#464A39' }}>You avoid emotional dependence</p>
            </div>
          </div>
          <div className="mt-4 p-5 rounded-lg" style={{ backgroundColor: '#f1f0e2' }}>
            <p style={{ color: '#464A39' }} className="font-bold text-center">
              Credit should feel boring and predictable, not exciting.
            </p>
          </div>
        </div>

        {/* Core Principles Section */}
        <div className="mb-12">
          <h2 className="text-2xl mb-8 text-center" style={{ color: '#464A39' }}>Foundations of Healthy Credit</h2>

          {/* Principle 1 */}
          <div className="mb-8 p-8 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
            <div className="flex items-center gap-3 mb-4">
              <Brain size={32} style={{ color: '#464A39' }} />
              <h3 className="text-2xl" style={{ color: '#464A39' }}>Credit reflects behavior, not income</h3>
            </div>
            <p style={{ color: '#464A39' }} className="mb-4">
              You do not need a high salary to build strong credit.
            </p>
            <p style={{ color: '#464A39' }} className="mb-4 font-bold">
              You need consistency, discipline, and awareness.
            </p>
            <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#464A39' }}>
              <p style={{ color: '#f1f0e2' }} className="mb-2">Lenders are not asking how much you earn. They are asking:</p>
              <p style={{ color: '#1BB3D1' }} className="text-lg font-bold">
                Can you manage what you borrow responsibly?
              </p>
            </div>
            <p style={{ color: '#464A39' }} className="font-bold">
              Your habits speak louder than your income.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="mb-8 p-8 rounded-lg" style={{ backgroundColor: '#464A39' }}>
            <div className="flex items-center gap-3 mb-4">
              <Target size={32} style={{ color: '#1BB3D1' }} />
              <h3 className="text-2xl" style={{ color: '#f1f0e2' }}>Separate wants from borrowing</h3>
            </div>
            <p style={{ color: '#f1f0e2' }} className="mb-4">
              Healthy credit users pause before using debt.
            </p>
            <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#C2CBB2' }}>
              <p style={{ color: '#464A39' }} className="mb-3 font-bold">Ask:</p>
              <div className="space-y-2">
                <div className="p-3 rounded" style={{ backgroundColor: '#f1f0e2' }}>
                  <p style={{ color: '#464A39' }}>Do I actually need this</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#f1f0e2' }}>
                  <p style={{ color: '#464A39' }}>Can I pay this off immediately</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#f1f0e2' }}>
                  <p style={{ color: '#464A39' }}>Is this worth paying extra interest</p>
                </div>
              </div>
            </div>
            <p style={{ color: '#f1f0e2' }} className="mb-2">
              Borrowing for impulse or lifestyle upgrades damages both finances and mindset.
            </p>
            <p style={{ color: '#1BB3D1' }} className="font-bold">
              Credit should support real needs, not temporary wants.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="mb-8 p-8 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
            <div className="flex items-center gap-3 mb-4">
              <Shield size={32} style={{ color: '#464A39' }} />
              <h3 className="text-2xl" style={{ color: '#464A39' }}>Control spending, not the credit limit</h3>
            </div>
            <p style={{ color: '#464A39' }} className="mb-4">
              Many people increase spending as their credit limit rises.
            </p>
            <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#1BB3D1' }}>
              <p style={{ color: '#464A39' }} className="mb-2 font-bold">Healthy users do the opposite:</p>
              <p style={{ color: '#464A39' }}>
                They keep spending steady even when limits grow.
              </p>
            </div>
            <p style={{ color: '#464A39' }} className="mb-2">
              Higher limits are meant to lower utilization, not increase purchases.
            </p>
            <p style={{ color: '#464A39' }} className="font-bold">
              Financial discipline means your lifestyle is based on income, not borrowing power.
            </p>
          </div>

          {/* Principle 4 */}
          <div className="mb-8 p-8 rounded-lg" style={{ backgroundColor: '#464A39' }}>
            <div className="flex items-center gap-3 mb-4">
              <Clock size={32} style={{ color: '#1BB3D1' }} />
              <h3 className="text-2xl" style={{ color: '#f1f0e2' }}>Pay fast, not slowly</h3>
            </div>
            <p style={{ color: '#f1f0e2' }} className="mb-4">
              A healthy credit mindset prioritizes quick repayment.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
                <p style={{ color: '#464A39' }} className="mb-3 font-bold">Slow repayment:</p>
                <ul className="space-y-2" style={{ color: '#464A39' }}>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5">•</span>
                    <span>Builds interest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5">•</span>
                    <span>Increases stress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5">•</span>
                    <span>Prolongs debt</span>
                  </li>
                </ul>
              </div>
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#1BB3D1' }}>
                <p style={{ color: '#464A39' }} className="mb-3 font-bold">Fast repayment:</p>
                <ul className="space-y-2" style={{ color: '#464A39' }}>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5">•</span>
                    <span>Saves money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5">•</span>
                    <span>Builds strong credit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5">•</span>
                    <span>Keeps debt manageable</span>
                  </li>
                </ul>
              </div>
            </div>
            <p style={{ color: '#f1f0e2' }} className="font-bold">
              Healthy credit users treat balances as urgent, not long term.
            </p>
          </div>

          {/* Principle 5 */}
          <div className="mb-8 p-8 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
            <div className="flex items-center gap-3 mb-4">
              <Smile size={32} style={{ color: '#464A39' }} />
              <h3 className="text-2xl" style={{ color: '#464A39' }}>Emotional awareness matters</h3>
            </div>
            <p style={{ color: '#464A39' }} className="mb-4">
              Credit often becomes dangerous when tied to emotions.
            </p>
            <div className="mb-4">
              <p style={{ color: '#464A39' }} className="mb-3 font-bold">People overspend when:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                  <p style={{ color: '#f1f0e2' }}>Feeling stressed</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                  <p style={{ color: '#f1f0e2' }}>Trying to impress others</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                  <p style={{ color: '#f1f0e2' }}>Chasing comfort</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                  <p style={{ color: '#f1f0e2' }}>Avoiding financial reality</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg mb-2" style={{ backgroundColor: '#1BB3D1' }}>
              <p style={{ color: '#464A39' }} className="font-bold">A healthy relationship means:</p>
              <p style={{ color: '#464A39' }}>
                You never use credit to fix emotions.
              </p>
            </div>
            <p style={{ color: '#464A39' }} className="font-bold">
              Money decisions should be logical, not emotional.
            </p>
          </div>
        </div>

        {/* Credit Goals Comparison */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#464A39', borderColor: '#1BB3D1' }}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={32} style={{ color: '#1BB3D1' }} />
            <h2 className="text-2xl" style={{ color: '#f1f0e2' }}>Credit should create opportunity, not pressure</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1BB3D1' }}>
              <p style={{ color: '#464A39' }} className="mb-4 font-bold text-lg">Responsible credit allows:</p>
              <div className="space-y-2">
                <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                  <p style={{ color: '#f1f0e2' }}>Easier approvals</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                  <p style={{ color: '#f1f0e2' }}>Better rates</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                  <p style={{ color: '#f1f0e2' }}>Financial flexibility</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
              <p style={{ color: '#464A39' }} className="mb-4 font-bold text-lg">Unhealthy credit creates:</p>
              <div className="space-y-2">
                <div className="p-3 rounded" style={{ backgroundColor: '#f1f0e2' }}>
                  <p style={{ color: '#464A39' }}>Stress</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#f1f0e2' }}>
                  <p style={{ color: '#464A39' }}>Debt cycles</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#f1f0e2' }}>
                  <p style={{ color: '#464A39' }}>Loss of control</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#f1f0e2' }}>
                  <p style={{ color: '#464A39' }}>Future limitations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#f1f0e2' }}>
            <p style={{ color: '#464A39' }} className="text-lg font-bold">
              The goal is freedom and trust, not dependency.
            </p>
          </div>
        </div>

        {/* Long-term Mindset */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#1BB3D1' }}>
          <h2 className="text-2xl mb-6" style={{ color: '#464A39' }}>Long term credit mindset</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-5 rounded" style={{ backgroundColor: '#464A39' }}>
              <p style={{ color: '#f1f0e2' }} className="text-center">Spend intentionally</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#464A39' }}>
              <p style={{ color: '#f1f0e2' }} className="text-center">Repay fully</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#464A39' }}>
              <p style={{ color: '#f1f0e2' }} className="text-center">Stay organized</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#464A39' }}>
              <p style={{ color: '#f1f0e2' }} className="text-center">Avoid unnecessary debt</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#464A39' }}>
              <p style={{ color: '#f1f0e2' }} className="text-center">Monitor accounts</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#464A39' }}>
              <p style={{ color: '#f1f0e2' }} className="text-center">Protect their financial reputation</p>
            </div>
          </div>
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
            <p style={{ color: '#464A39' }} className="text-lg font-bold text-center">
              Credit is safest when used rarely, lightly, and responsibly.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
          <h2 className="text-2xl mb-6" style={{ color: '#464A39' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Credit mindset:</strong> Attitude toward borrowing</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Financial discipline:</strong> Controlled spending habits</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Debt dependency:</strong> Relying on borrowed money</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Utilization control:</strong> Keeping balances low</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Emotional spending:</strong> Spending driven by feelings</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#464A39' }}>
          <h2 className="text-2xl mb-6" style={{ color: '#f1f0e2' }}>Quick recap</h2>
          <ul className="space-y-3" style={{ color: '#f1f0e2' }}>
            <li className="flex items-start gap-3">
              <Shield size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Credit is a responsibility</span>
            </li>
            <li className="flex items-start gap-3">
              <Brain size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Habits matter more than income</span>
            </li>
            <li className="flex items-start gap-3">
              <Target size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Avoid borrowing for wants</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Repay balances quickly</span>
            </li>
            <li className="flex items-start gap-3">
              <Smile size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Separate emotions from spending</span>
            </li>
            <li className="flex items-start gap-3">
              <Heart size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Credit should build freedom</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6" style={{ color: '#464A39' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
            <p className="mb-4" style={{ color: '#464A39' }}>
              <strong>1. What does a healthy credit mindset focus on?</strong>
            </p>
            <div className="space-y-3">
              {['A) Spending more', 'B) Responsible borrowing and repayment', 'C) Ignoring debt', 'D) High balances'].map((option) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswers[1] === letter;
                const isCorrect = correctAnswers[1] === letter;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(1, letter)}
                    className="w-full text-left p-4 rounded border-2 transition-all"
                    style={{
                      backgroundColor: showCorrect ? '#464A39' : showIncorrect ? '#464A39' : isSelected ? '#1BB3D1' : '#f1f0e2',
                      borderColor: showCorrect ? '#464A39' : showIncorrect ? '#464A39' : isSelected ? '#1BB3D1' : '#C2CBB2',
                      color: (showCorrect || showIncorrect || isSelected) ? '#f1f0e2' : '#464A39',
                      opacity: showIncorrect ? 0.5 : 1
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
            <p className="mb-4" style={{ color: '#464A39' }}>
              <strong>2. Why should credit never be used for emotional spending?</strong>
            </p>
            <div className="space-y-3">
              {['A) Rewards', 'B) Leads to debt and poor decisions', 'C) Builds score', 'D) Eliminates interest'].map((option) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswers[2] === letter;
                const isCorrect = correctAnswers[2] === letter;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(2, letter)}
                    className="w-full text-left p-4 rounded border-2 transition-all"
                    style={{
                      backgroundColor: showCorrect ? '#464A39' : showIncorrect ? '#464A39' : isSelected ? '#1BB3D1' : '#f1f0e2',
                      borderColor: showCorrect ? '#464A39' : showIncorrect ? '#464A39' : isSelected ? '#1BB3D1' : '#C2CBB2',
                      color: (showCorrect || showIncorrect || isSelected) ? '#f1f0e2' : '#464A39',
                      opacity: showIncorrect ? 0.5 : 1
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
            <p className="mb-4" style={{ color: '#464A39' }}>
              <strong>3. What is the long term goal of using credit responsibly?</strong>
            </p>
            <div className="space-y-3">
              {['A) More debt', 'B) Financial trust and freedom', 'C) Higher payments', 'D) Borrowing constantly'].map((option) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswers[3] === letter;
                const isCorrect = correctAnswers[3] === letter;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(3, letter)}
                    className="w-full text-left p-4 rounded border-2 transition-all"
                    style={{
                      backgroundColor: showCorrect ? '#464A39' : showIncorrect ? '#464A39' : isSelected ? '#1BB3D1' : '#f1f0e2',
                      borderColor: showCorrect ? '#464A39' : showIncorrect ? '#464A39' : isSelected ? '#1BB3D1' : '#C2CBB2',
                      color: (showCorrect || showIncorrect || isSelected) ? '#f1f0e2' : '#464A39',
                      opacity: showIncorrect ? 0.5 : 1
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
              className="w-full py-4 rounded-lg transition-opacity disabled:opacity-50"
              style={{
                backgroundColor: '#464A39',
                color: '#f1f0e2'
              }}
            >
              {allAnswered ? 'Submit Answers' : 'Please answer all questions'}
            </button>
          )}

          {/* Results */}
          {showResults && (
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#464A39' }}>
              <p className="text-xl mb-2" style={{ color: '#f1f0e2' }}>
                Your score: {Object.keys(correctAnswers).filter(q => selectedAnswers[parseInt(q)] === correctAnswers[parseInt(q)]).length} / {Object.keys(correctAnswers).length}
              </p>
              <p style={{ color: '#f1f0e2' }} className="opacity-90">
                {Object.keys(correctAnswers).filter(q => selectedAnswers[parseInt(q)] === correctAnswers[parseInt(q)]).length === Object.keys(correctAnswers).length
                  ? 'Perfect! You understand how to build a healthy relationship with credit.'
                  : 'Review the principles above to strengthen your credit mindset.'}
              </p>
            </div>
          )}
        </div>

        {/* Completion Message */}
        <div className="mb-12 p-8 rounded-lg text-center border-4" style={{ backgroundColor: '#1BB3D1', borderColor: '#464A39' }}>
          <Heart size={48} style={{ color: '#464A39' }} className="mx-auto mb-4" />
          <h2 className="text-2xl mb-4" style={{ color: '#464A39' }}>Congratulations on completing Credit and Debt!</h2>
          <p style={{ color: '#464A39' }} className="text-lg mb-4">
            You now have the knowledge to use credit responsibly and build a strong financial foundation.
          </p>
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#464A39' }}>
            <p style={{ color: '#f1f0e2' }}>
              Remember: Credit is a tool that works best when you stay in control, pay quickly, and use it intentionally.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#C2CBB2' }}>
          <Link
            to="/learn/credit-debt/lesson-14"
            className="px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
            style={{ backgroundColor: '#C2CBB2', color: '#464A39' }}
          >
            Previous Lesson
          </Link>
          <Link
            to="/learn/credit-debt"
            className="px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
            style={{ backgroundColor: '#464A39', color: '#f1f0e2' }}
          >
            Back to Module
          </Link>
        </div>
      </main>
    </div>
  );
}