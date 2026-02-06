import { Link } from './RouterLink';
import { ArrowLeft, XCircle, CheckCircle, AlertTriangle, Shield } from 'lucide-react';
import { useState } from 'react';

export default function CreditDebtLesson14Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const correctAnswers = {
    1: 'C',
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
              <AlertTriangle size={24} style={{ color: '#f1f0e2' }} />
            </div>
            <div>
              <p style={{ color: '#464A39' }} className="text-sm mb-1">Lesson 14</p>
              <h1 className="text-3xl" style={{ color: '#464A39' }}>Credit Myths vs Reality</h1>
            </div>
          </div>
          <p style={{ color: '#464A39' }} className="opacity-70">Time: ~12–15 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#464A39', borderColor: '#1BB3D1' }}>
          <h2 className="text-2xl mb-4" style={{ color: '#f1f0e2' }}>Credit is surrounded by misinformation</h2>
          <p style={{ color: '#f1f0e2' }} className="mb-4">
            A lot of people misunderstand credit because of things they hear from friends, social media, or outdated advice.
          </p>
          <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#1BB3D1' }}>
            <p style={{ color: '#464A39' }} className="font-bold">
              These myths cause serious financial damage because they lead people to make poor decisions that hurt their credit scores and trap them in debt.
            </p>
          </div>
          <p style={{ color: '#f1f0e2' }} className="text-lg">
            Understanding the truth helps you use credit safely and responsibly.
          </p>
        </div>

        {/* Myths Section */}
        <div className="mb-12">
          <h2 className="text-2xl mb-8 text-center" style={{ color: '#464A39' }}>Common Credit Myths Debunked</h2>

          {/* Myth 1 */}
          <div className="mb-10">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#464A39', borderColor: '#464A39' }}>
                <div className="flex items-center gap-2 mb-4">
                  <XCircle size={28} style={{ color: '#f1f0e2' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#f1f0e2' }}>MYTH 1</h3>
                </div>
                <p className="text-lg" style={{ color: '#f1f0e2' }}>
                  Credit cards are free money
                </p>
              </div>
              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#1BB3D1', borderColor: '#464A39' }}>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle size={28} style={{ color: '#464A39' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#464A39' }}>REALITY</h3>
                </div>
                <p className="text-lg mb-3" style={{ color: '#464A39' }}>
                  Credit cards are borrowed money that must be repaid, often with interest.
                </p>
              </div>
            </div>
            <div className="mt-4 p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
              <p style={{ color: '#464A39' }} className="mb-2">
                Every purchase becomes debt if it is not paid off.
              </p>
              <p style={{ color: '#464A39' }} className="font-bold">
                Treating credit like income leads to overspending and long term financial stress.
              </p>
            </div>
          </div>

          {/* Myth 2 */}
          <div className="mb-10">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#464A39', borderColor: '#464A39' }}>
                <div className="flex items-center gap-2 mb-4">
                  <XCircle size={28} style={{ color: '#f1f0e2' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#f1f0e2' }}>MYTH 2</h3>
                </div>
                <p className="text-lg" style={{ color: '#f1f0e2' }}>
                  Carrying a balance helps your credit score
                </p>
              </div>
              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#1BB3D1', borderColor: '#464A39' }}>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle size={28} style={{ color: '#464A39' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#464A39' }}>REALITY</h3>
                </div>
                <p className="text-lg mb-3" style={{ color: '#464A39' }}>
                  You do not need to carry debt to build credit.
                </p>
              </div>
            </div>
            <div className="mt-4 p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
              <p style={{ color: '#464A39' }} className="mb-2">
                Interest is charged when balances are unpaid, and high balances hurt utilization, which lowers your score.
              </p>
              <p style={{ color: '#464A39' }} className="font-bold">
                Paying in full builds credit without costing you extra money.
              </p>
            </div>
          </div>

          {/* Myth 3 */}
          <div className="mb-10">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#464A39', borderColor: '#464A39' }}>
                <div className="flex items-center gap-2 mb-4">
                  <XCircle size={28} style={{ color: '#f1f0e2' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#f1f0e2' }}>MYTH 3</h3>
                </div>
                <p className="text-lg" style={{ color: '#f1f0e2' }}>
                  Minimum payments are safe
                </p>
              </div>
              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#1BB3D1', borderColor: '#464A39' }}>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle size={28} style={{ color: '#464A39' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#464A39' }}>REALITY</h3>
                </div>
                <p className="text-lg mb-3" style={{ color: '#464A39' }}>
                  Minimum payments only cover interest and a small portion of the balance.
                </p>
              </div>
            </div>
            <div className="mt-4 p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
              <p style={{ color: '#464A39' }} className="mb-2">
                They keep you in debt longer and dramatically increase the total amount you repay.
              </p>
              <p style={{ color: '#464A39' }} className="font-bold">
                Minimum payments protect lenders, not borrowers.
              </p>
            </div>
          </div>

          {/* Myth 4 */}
          <div className="mb-10">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#464A39', borderColor: '#464A39' }}>
                <div className="flex items-center gap-2 mb-4">
                  <XCircle size={28} style={{ color: '#f1f0e2' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#f1f0e2' }}>MYTH 4</h3>
                </div>
                <p className="text-lg" style={{ color: '#f1f0e2' }}>
                  Closing credit cards improves your score
                </p>
              </div>
              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#1BB3D1', borderColor: '#464A39' }}>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle size={28} style={{ color: '#464A39' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#464A39' }}>REALITY</h3>
                </div>
                <p className="text-lg" style={{ color: '#464A39' }}>
                  Closing cards can actually lower your credit score.
                </p>
              </div>
            </div>
            <div className="mt-4 p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
              <p style={{ color: '#464A39' }} className="mb-3 font-bold">Because it:</p>
              <div className="space-y-2 mb-4">
                <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                  <p style={{ color: '#f1f0e2' }}>Reduces total available credit</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                  <p style={{ color: '#f1f0e2' }}>Raises utilization</p>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                  <p style={{ color: '#f1f0e2' }}>Shortens credit history</p>
                </div>
              </div>
              <p style={{ color: '#464A39' }} className="font-bold">
                Keeping accounts open helps maintain a strong credit profile.
              </p>
            </div>
          </div>

          {/* Myth 5 */}
          <div className="mb-10">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#464A39', borderColor: '#464A39' }}>
                <div className="flex items-center gap-2 mb-4">
                  <XCircle size={28} style={{ color: '#f1f0e2' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#f1f0e2' }}>MYTH 5</h3>
                </div>
                <p className="text-lg" style={{ color: '#f1f0e2' }}>
                  Checking your credit hurts your score
                </p>
              </div>
              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#1BB3D1', borderColor: '#464A39' }}>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle size={28} style={{ color: '#464A39' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#464A39' }}>REALITY</h3>
                </div>
                <p className="text-lg mb-3" style={{ color: '#464A39' }}>
                  Checking your own credit is called a soft inquiry and does not affect your score.
                </p>
              </div>
            </div>
            <div className="mt-4 p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
              <p style={{ color: '#464A39' }} className="mb-2">
                Hard inquiries only happen when lenders check your credit after an application.
              </p>
              <p style={{ color: '#464A39' }} className="font-bold">
                Monitoring your credit is actually smart and protective.
              </p>
            </div>
          </div>

          {/* Myth 6 */}
          <div className="mb-10">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#464A39', borderColor: '#464A39' }}>
                <div className="flex items-center gap-2 mb-4">
                  <XCircle size={28} style={{ color: '#f1f0e2' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#f1f0e2' }}>MYTH 6</h3>
                </div>
                <p className="text-lg" style={{ color: '#f1f0e2' }}>
                  Debt is normal and unavoidable
                </p>
              </div>
              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#1BB3D1', borderColor: '#464A39' }}>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle size={28} style={{ color: '#464A39' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#464A39' }}>REALITY</h3>
                </div>
                <p className="text-lg mb-3" style={{ color: '#464A39' }}>
                  Debt is common, but it is not required for financial success.
                </p>
              </div>
            </div>
            <div className="mt-4 p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
              <p style={{ color: '#464A39' }} className="mb-2">
                Many people stay trapped because they believe debt is just part of life.
              </p>
              <p style={{ color: '#464A39' }} className="mb-3">
                Responsible credit use means avoiding unnecessary borrowing and paying balances quickly.
              </p>
              <div className="p-4 rounded border-2" style={{ backgroundColor: '#464A39', borderColor: '#1BB3D1' }}>
                <p style={{ color: '#f1f0e2' }} className="font-bold text-center">
                  Debt should be controlled, not accepted.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Believing Myths is Dangerous */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#464A39' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={32} style={{ color: '#1BB3D1' }} />
            <h2 className="text-2xl" style={{ color: '#f1f0e2' }}>Why believing myths is dangerous</h2>
          </div>
          <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#1BB3D1' }}>
            <p style={{ color: '#464A39' }} className="mb-3 font-bold">Credit myths lead to:</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-4 rounded" style={{ backgroundColor: '#464A39' }}>
                <p style={{ color: '#f1f0e2' }}>Paying unnecessary interest</p>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#464A39' }}>
                <p style={{ color: '#f1f0e2' }}>Damaging credit scores</p>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#464A39' }}>
                <p style={{ color: '#f1f0e2' }}>Long-term debt</p>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#464A39' }}>
                <p style={{ color: '#f1f0e2' }}>Financial stress</p>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-lg mb-4" style={{ backgroundColor: '#C2CBB2' }}>
            <p style={{ color: '#464A39' }} className="font-bold text-center">
              Understanding the truth prevents costly mistakes.
            </p>
          </div>
          <p style={{ color: '#f1f0e2' }} className="text-lg text-center">
            Credit works best when you understand how it really functions.
          </p>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
          <h2 className="text-2xl mb-6" style={{ color: '#464A39' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Myth:</strong> Common false belief</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Soft inquiry:</strong> Credit check that does not affect score</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Hard inquiry:</strong> Credit check from lender application</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Utilization:</strong> Percentage of credit used</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Debt trap:</strong> Long-term debt from poor habits</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#464A39' }}>
          <h2 className="text-2xl mb-6" style={{ color: '#f1f0e2' }}>Quick recap</h2>
          <ul className="space-y-3" style={{ color: '#f1f0e2' }}>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Credit is borrowed money, not income</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Carrying balances does not help credit</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Minimum payments increase long-term debt</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Closing cards can hurt scores</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Checking credit is safe</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Debt is avoidable with discipline</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6" style={{ color: '#464A39' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
            <p className="mb-4" style={{ color: '#464A39' }}>
              <strong>1. Does carrying a balance help your credit score?</strong>
            </p>
            <div className="space-y-3">
              {['A) Yes', 'B) Sometimes', 'C) No', 'D) Only for loans'].map((option) => {
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
              <strong>2. What happens when you close old credit cards?</strong>
            </p>
            <div className="space-y-3">
              {['A) Score increases', 'B) Utilization rises and history shortens', 'C) Debt disappears', 'D) No effect'].map((option) => {
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
              <strong>3. Does checking your own credit lower your score?</strong>
            </p>
            <div className="space-y-3">
              {['A) Yes', 'B) No', 'C) Only monthly', 'D) Only with loans'].map((option) => {
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
                  ? 'Perfect! You can now separate credit myths from reality.'
                  : 'Review the myths above to better understand credit truths.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#C2CBB2' }}>
          <Link
            to="/learn/credit-debt/lesson-13"
            className="px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
            style={{ backgroundColor: '#C2CBB2', color: '#464A39' }}
          >
            Previous Lesson
          </Link>
          <Link
            to="/learn/credit-debt/lesson-15"
            className="px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
            style={{ backgroundColor: '#464A39', color: '#f1f0e2' }}
          >
            Next Lesson
          </Link>
        </div>
      </main>
    </div>
  );
}