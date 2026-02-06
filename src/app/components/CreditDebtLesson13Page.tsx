import { Link } from './RouterLink';
import { ArrowLeft, Target, List, TrendingDown, DollarSign, Calendar, Brain, Trophy } from 'lucide-react';
import { useState } from 'react';

export default function CreditDebtLesson13Page() {
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
              <Target size={24} style={{ color: '#f1f0e2' }} />
            </div>
            <div>
              <p style={{ color: '#464A39' }} className="text-sm mb-1">Lesson 13</p>
              <h1 className="text-3xl" style={{ color: '#464A39' }}>Strategies for Getting Out of Debt</h1>
            </div>
          </div>
          <p style={{ color: '#464A39' }} className="opacity-70">Time: ~12–15 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#464A39' }}>
          <h2 className="text-2xl mb-4" style={{ color: '#f1f0e2' }}>Getting out of debt starts with a plan, not motivation</h2>
          <p style={{ color: '#f1f0e2' }} className="mb-4">
            Debt does not disappear on its own. Interest keeps balances growing unless you actively reduce them.
          </p>
          <p style={{ color: '#f1f0e2' }} className="mb-4 text-lg font-bold">
            The key to debt freedom is structure and consistency.
          </p>
          <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#1BB3D1' }}>
            <p style={{ color: '#464A39' }} className="mb-3 font-bold">You need:</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                <p style={{ color: '#f1f0e2' }}>A clear payoff strategy</p>
              </div>
              <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                <p style={{ color: '#f1f0e2' }}>Focused payments</p>
              </div>
              <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                <p style={{ color: '#f1f0e2' }}>Discipline</p>
              </div>
              <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                <p style={{ color: '#f1f0e2' }}>Patience</p>
              </div>
            </div>
          </div>
          <p style={{ color: '#f1f0e2' }} className="font-bold">
            Even small progress matters when it is consistent.
          </p>
        </div>

        {/* The Step-by-Step Process */}
        <div className="mb-12">
          <h2 className="text-2xl mb-8 text-center" style={{ color: '#464A39' }}>Your Debt Payoff Roadmap</h2>

          {/* Step 1 */}
          <div className="mb-8 relative pl-12">
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1BB3D1' }}>
              <span className="text-lg font-bold" style={{ color: '#464A39' }}>1</span>
            </div>
            <div className="p-6 rounded-lg border-l-4" style={{ backgroundColor: '#C2CBB2', borderColor: '#1BB3D1' }}>
              <h3 className="text-2xl mb-3" style={{ color: '#464A39' }}>Stop adding new debt</h3>
              <p style={{ color: '#464A39' }} className="mb-4">
                Before paying off debt, you must prevent balances from growing.
              </p>
              <div className="mb-4">
                <p style={{ color: '#464A39' }} className="mb-3 font-bold">This means:</p>
                <div className="space-y-2">
                  <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                    <p style={{ color: '#f1f0e2' }}>No new charges on credit cards</p>
                  </div>
                  <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                    <p style={{ color: '#f1f0e2' }}>Avoid unnecessary borrowing</p>
                  </div>
                  <div className="p-3 rounded" style={{ backgroundColor: '#464A39' }}>
                    <p style={{ color: '#f1f0e2' }}>Control spending</p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded border-2" style={{ backgroundColor: '#f1f0e2', borderColor: '#464A39' }}>
                <p style={{ color: '#464A39' }} className="font-bold text-center">
                  You cannot empty a bucket while water is still being poured in.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-8 relative pl-12">
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1BB3D1' }}>
              <span className="text-lg font-bold" style={{ color: '#464A39' }}>2</span>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#464A39' }}>
              <h3 className="text-2xl mb-3" style={{ color: '#f1f0e2' }}>List all debts clearly</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded border-2" style={{ backgroundColor: '#C2CBB2', borderColor: '#1BB3D1' }}>
                  <p style={{ color: '#464A39' }} className="font-bold mb-2">Write down:</p>
                  <ul className="space-y-2" style={{ color: '#464A39' }}>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#464A39' }}></div>
                      <span>Total balance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#464A39' }}></div>
                      <span>Interest rate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#464A39' }}></div>
                      <span>Minimum payment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#464A39' }}></div>
                      <span>Due date</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#1BB3D1' }}>
                  <p style={{ color: '#464A39' }} className="mb-3">
                    Seeing everything in one place helps you prioritize and stay organized.
                  </p>
                  <p style={{ color: '#464A39' }} className="font-bold">
                    Debt feels less overwhelming when it is mapped out.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Main Strategies - Special Section */}
          <div className="mb-8 relative pl-12">
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1BB3D1' }}>
              <span className="text-lg font-bold" style={{ color: '#464A39' }}>3</span>
            </div>
            <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#C2CBB2', borderColor: '#464A39' }}>
              <h3 className="text-2xl mb-6 text-center" style={{ color: '#464A39' }}>Two main payoff strategies</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Snowball Method */}
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#464A39' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingDown size={28} style={{ color: '#1BB3D1' }} />
                    <h4 className="text-xl font-bold" style={{ color: '#f1f0e2' }}>Snowball Method</h4>
                  </div>
                  <p style={{ color: '#f1f0e2' }} className="mb-4">
                    Focus on the smallest balance first while paying minimums on others.
                  </p>
                  <div className="p-5 rounded-lg mb-4" style={{ backgroundColor: '#1BB3D1' }}>
                    <p style={{ color: '#464A39' }} className="mb-2 font-bold">Why it works:</p>
                    <ul className="space-y-2" style={{ color: '#464A39' }}>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5">•</span>
                        <span>Quick wins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5">•</span>
                        <span>Motivation boost</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5">•</span>
                        <span>Builds momentum</span>
                      </li>
                    </ul>
                  </div>
                  <p style={{ color: '#f1f0e2' }} className="mb-3">
                    As each debt is cleared, payments roll into the next one.
                  </p>
                  <div className="p-3 rounded" style={{ backgroundColor: '#C2CBB2' }}>
                    <p style={{ color: '#464A39' }} className="font-bold text-center">Psychology driven strategy.</p>
                  </div>
                </div>

                {/* Avalanche Method */}
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#464A39' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign size={28} style={{ color: '#1BB3D1' }} />
                    <h4 className="text-xl font-bold" style={{ color: '#f1f0e2' }}>Avalanche Method</h4>
                  </div>
                  <p style={{ color: '#f1f0e2' }} className="mb-4">
                    Focus on the highest interest rate first.
                  </p>
                  <div className="p-5 rounded-lg mb-4" style={{ backgroundColor: '#1BB3D1' }}>
                    <p style={{ color: '#464A39' }} className="mb-2 font-bold">Why it works:</p>
                    <ul className="space-y-2" style={{ color: '#464A39' }}>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5">•</span>
                        <span>Saves the most money</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5">•</span>
                        <span>Reduces fastest-growing debt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5">•</span>
                        <span>Mathematically efficient</span>
                      </li>
                    </ul>
                  </div>
                  <p style={{ color: '#f1f0e2' }} className="mb-3">
                    Less emotional, more financially optimal.
                  </p>
                  <div className="p-3 rounded" style={{ backgroundColor: '#C2CBB2' }}>
                    <p style={{ color: '#464A39' }} className="font-bold text-center">Mathematically driven strategy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-8 relative pl-12">
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1BB3D1' }}>
              <span className="text-lg font-bold" style={{ color: '#464A39' }}>4</span>
            </div>
            <div className="p-6 rounded-lg border-l-4" style={{ backgroundColor: '#C2CBB2', borderColor: '#1BB3D1' }}>
              <h3 className="text-2xl mb-3" style={{ color: '#464A39' }}>Pay more than the minimum</h3>
              <p style={{ color: '#464A39' }} className="mb-4">
                Minimum payments barely reduce balances.
              </p>
              <div className="p-5 rounded-lg mb-4" style={{ backgroundColor: '#464A39' }}>
                <p style={{ color: '#f1f0e2' }} className="mb-2 font-bold">Paying extra:</p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="p-3 rounded text-center" style={{ backgroundColor: '#1BB3D1' }}>
                    <p style={{ color: '#464A39' }}>Reduces principal faster</p>
                  </div>
                  <div className="p-3 rounded text-center" style={{ backgroundColor: '#1BB3D1' }}>
                    <p style={{ color: '#464A39' }}>Lowers total interest</p>
                  </div>
                  <div className="p-3 rounded text-center" style={{ backgroundColor: '#1BB3D1' }}>
                    <p style={{ color: '#464A39' }}>Shortens payoff time</p>
                  </div>
                </div>
              </div>
              <p style={{ color: '#464A39' }} className="font-bold">
                The faster balances drop, the less interest accumulates.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-8 relative pl-12">
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1BB3D1' }}>
              <span className="text-lg font-bold" style={{ color: '#464A39' }}>5</span>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#464A39' }}>
              <h3 className="text-2xl mb-3" style={{ color: '#f1f0e2' }}>Make payments consistently</h3>
              <p style={{ color: '#f1f0e2' }} className="mb-4">
                Debt payoff requires routine.
              </p>
              <div className="p-5 rounded-lg mb-4" style={{ backgroundColor: '#C2CBB2' }}>
                <p style={{ color: '#464A39' }} className="font-bold">
                  Consistency matters more than large one-time payments.
                </p>
              </div>
              <p style={{ color: '#f1f0e2' }}>
                Regular payments reduce balances steadily and prevent interest from stacking.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="mb-8 relative pl-12">
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1BB3D1' }}>
              <span className="text-lg font-bold" style={{ color: '#464A39' }}>6</span>
            </div>
            <div className="p-6 rounded-lg border-l-4" style={{ backgroundColor: '#C2CBB2', borderColor: '#1BB3D1' }}>
              <h3 className="text-2xl mb-3" style={{ color: '#464A39' }}>Avoid emotional setbacks</h3>
              <p style={{ color: '#464A39' }} className="mb-4">
                Debt repayment can feel slow and frustrating.
              </p>
              <div className="mb-4">
                <p style={{ color: '#464A39' }} className="mb-3 font-bold">Common challenges:</p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="p-4 rounded" style={{ backgroundColor: '#464A39' }}>
                    <p style={{ color: '#f1f0e2' }} className="text-center">Wanting to spend again</p>
                  </div>
                  <div className="p-4 rounded" style={{ backgroundColor: '#464A39' }}>
                    <p style={{ color: '#f1f0e2' }} className="text-center">Losing motivation</p>
                  </div>
                  <div className="p-4 rounded" style={{ backgroundColor: '#464A39' }}>
                    <p style={{ color: '#f1f0e2' }} className="text-center">Feeling overwhelmed</p>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded border-2" style={{ backgroundColor: '#f1f0e2', borderColor: '#464A39' }}>
                <p style={{ color: '#464A39' }} className="mb-1 font-bold">Remember:</p>
                <p style={{ color: '#464A39' }}>
                  Debt freedom is long-term progress, not instant results.
                </p>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="mb-8 relative pl-12">
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1BB3D1' }}>
              <span className="text-lg font-bold" style={{ color: '#464A39' }}>7</span>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1BB3D1' }}>
              <h3 className="text-2xl mb-3" style={{ color: '#464A39' }}>Celebrate progress</h3>
              <p style={{ color: '#464A39' }} className="mb-4">
                Tracking reductions and small milestones helps maintain momentum.
              </p>
              <div className="p-5 rounded-lg mb-4" style={{ backgroundColor: '#464A39' }}>
                <p style={{ color: '#f1f0e2' }}>
                  Seeing balances shrink reinforces discipline and keeps you focused.
                </p>
              </div>
              <p style={{ color: '#464A39' }} className="font-bold">
                Debt payoff is a journey.
              </p>
            </div>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
          <h2 className="text-2xl mb-6" style={{ color: '#464A39' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Debt snowball:</strong> Paying smallest balance first</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Debt avalanche:</strong> Paying highest interest first</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Principal reduction:</strong> Lowering original balance</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Interest accumulation:</strong> Cost added over time</p>
            </div>
            <div className="p-4 rounded" style={{ backgroundColor: '#f1f0e2' }}>
              <p style={{ color: '#464A39' }}><strong>Debt-free:</strong> No outstanding balances</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#464A39' }}>
          <h2 className="text-2xl mb-6" style={{ color: '#f1f0e2' }}>Quick recap</h2>
          <ul className="space-y-3" style={{ color: '#f1f0e2' }}>
            <li className="flex items-start gap-3">
              <Target size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Stop new debt first</span>
            </li>
            <li className="flex items-start gap-3">
              <List size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>List balances and rates</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingDown size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Use snowball or avalanche strategy</span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Pay more than minimum</span>
            </li>
            <li className="flex items-start gap-3">
              <Calendar size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Stay consistent</span>
            </li>
            <li className="flex items-start gap-3">
              <Brain size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Avoid emotional spending</span>
            </li>
            <li className="flex items-start gap-3">
              <Trophy size={20} style={{ color: '#1BB3D1' }} className="flex-shrink-0 mt-0.5" />
              <span>Track progress</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6" style={{ color: '#464A39' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#C2CBB2' }}>
            <p className="mb-4" style={{ color: '#464A39' }}>
              <strong>1. What is the first step in getting out of debt?</strong>
            </p>
            <div className="space-y-3">
              {['A) Invest', 'B) Stop adding new debt', 'C) Ignore it', 'D) Increase limits'].map((option) => {
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
              <strong>2. Which method focuses on paying the smallest balance first?</strong>
            </p>
            <div className="space-y-3">
              {['A) Avalanche', 'B) Snowball', 'C) Minimum', 'D) Installment'].map((option) => {
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
              <strong>3. Why is paying more than the minimum important?</strong>
            </p>
            <div className="space-y-3">
              {['A) Increases debt', 'B) Reduces interest and balance faster', 'C) Lowers credit limit', 'D) No effect'].map((option) => {
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
                  ? 'Perfect! You understand the strategies for getting out of debt.'
                  : 'Review the steps above to strengthen your debt payoff plan.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <Link
            to="/credit-debt/lesson-12"
            onClick={scrollToTop}
            className="px-8 py-4 rounded-lg hover:opacity-80 transition-opacity text-lg font-medium"
            style={{ backgroundColor: '#889063', color: '#1C1C1C' }}
          >
            Previous Lesson
          </Link>
          <Link
            to="/credit-debt/lesson-14"
            onClick={scrollToTop}
            className="px-8 py-4 rounded-lg hover:opacity-80 transition-opacity text-lg font-medium"
            style={{ backgroundColor: '#354024', color: '#E5D7C4' }}
          >
            Next Lesson
          </Link>
        </div>
      </main>
    </div>
  );
}