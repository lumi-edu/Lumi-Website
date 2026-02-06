import { Link } from './RouterLink';
import { ArrowLeft, DollarSign, TrendingUp, XCircle, CheckCircle, RefreshCw, AlertTriangle, CreditCard, Clock } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function TaxEssentialsLesson8Page() {
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
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
              <RefreshCw size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 8</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Tax Refunds Explained</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~12 to 15 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-4 font-bold" style={{ color: '#E5D7C4' }}>A refund is money you already paid getting returned</h2>
          <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">
            A tax refund is not free money or a bonus from the government.
          </p>
          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
              It is your own money being returned because too much tax was withheld from your paychecks during the year.
            </p>
            <p style={{ color: '#1C1C1C' }} className="text-lg">
              You basically overpaid your taxes, and the IRS sends the extra back after you file.
            </p>
          </div>
          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-2xl">
              Refund equals overpayment.
            </p>
          </div>
        </div>

        {/* Myth vs Reality Cards */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Myth vs Reality</h2>
          
          <div className="space-y-8">
            {/* Myth 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
                <div className="flex items-center gap-3 mb-4">
                  <XCircle size={32} style={{ color: '#1C1C1C' }} />
                  <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Myth</h3>
                </div>
                <p style={{ color: '#1C1C1C' }} className="text-xl">
                  Tax refunds are bonus money from the government
                </p>
              </div>
              
              <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle size={32} style={{ color: '#1C1C1C' }} />
                  <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Reality</h3>
                </div>
                <p style={{ color: '#1C1C1C' }} className="text-xl font-bold">
                  Refunds are YOUR OWN MONEY being returned because you overpaid
                </p>
              </div>
            </div>

            {/* Myth 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
                <div className="flex items-center gap-3 mb-4">
                  <XCircle size={32} style={{ color: '#1C1C1C' }} />
                  <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Myth</h3>
                </div>
                <p style={{ color: '#1C1C1C' }} className="text-xl">
                  A big refund means you are good with money
                </p>
              </div>
              
              <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle size={32} style={{ color: '#1C1C1C' }} />
                  <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Reality</h3>
                </div>
                <p style={{ color: '#1C1C1C' }} className="text-xl font-bold">
                  A big refund means you loaned money to the government interest-free all year
                </p>
              </div>
            </div>

            {/* Myth 3 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
                <div className="flex items-center gap-3 mb-4">
                  <XCircle size={32} style={{ color: '#1C1C1C' }} />
                  <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Myth</h3>
                </div>
                <p style={{ color: '#1C1C1C' }} className="text-xl">
                  Everyone gets a refund when they file taxes
                </p>
              </div>
              
              <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle size={32} style={{ color: '#1C1C1C' }} />
                  <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>Reality</h3>
                </div>
                <p style={{ color: '#1C1C1C' }} className="text-xl font-bold">
                  You only get a refund if too much tax was withheld. You might owe instead.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Refunds Happen */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Why refunds happen</h2>
          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">Refunds usually occur when:</p>
          
          <div className="space-y-4 mb-6">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Too much federal tax was withheld from paychecks</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Income was low enough that less tax was actually owed</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Credits reduced tax liability after filing</p>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#E5D7C4' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
              Your employer estimates how much tax to take out using your W-4, but it is not always perfect.
            </p>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              When withholding is higher than what you truly owed, you get the difference back.
            </p>
          </div>
        </div>

        {/* Refund vs Paycheck Reality */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Refund vs paycheck reality</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <h3 className="font-bold mb-3 text-xl" style={{ color: '#1C1C1C' }}>The appeal of refunds</h3>
              <p style={{ color: '#1C1C1C' }} className="text-lg">
                Some people like getting big refunds because it feels like a reward.
              </p>
            </div>

            <div className="p-6 rounded-lg border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <h3 className="font-bold mb-3 text-xl" style={{ color: '#1C1C1C' }}>But really it means:</h3>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                You loaned your money to the government all year without interest.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-xl">That is money you could have used earlier for:</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-lg">Saving</p>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-lg">Investing</p>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-lg">Spending</p>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-lg">Paying expenses</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Refunds are not bad, but they show your withholding was higher than necessary.
            </p>
          </div>
        </div>

        {/* How You Receive Your Refund */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-4 mb-6">
            <CreditCard size={40} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>How you receive your refund</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            When you file, you choose how the IRS sends your refund.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="mb-3 font-bold text-lg">Most common method:</p>
            <p style={{ color: '#889063' }} className="text-2xl font-bold">Direct deposit into your bank account.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <CheckCircle size={24} style={{ color: '#354024' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">It is faster and safer than paper checks.</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <Clock size={24} style={{ color: '#354024' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">You can track your refund status using IRS tools after filing.</p>
            </div>
          </div>
        </div>

        {/* What Affects Refund Size */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>What affects refund size</h2>
          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">Your refund depends on:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">How much was withheld from paychecks</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Your total income</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Credits and deductions applied</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Whether you had other income sources</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <TrendingUp size={32} style={{ color: '#1C1C1C' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">More withheld = bigger refund</p>
            </div>
            <div className="p-6 rounded-lg text-center border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <TrendingUp size={32} style={{ color: '#1C1C1C' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Less withheld = smaller refund or taxes owed</p>
            </div>
          </div>
        </div>

        {/* Side Income Warning */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle size={40} style={{ color: '#1C1C1C' }} className="flex-shrink-0" />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Important reminder for side income</h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="mb-3 text-lg">
                If you earned money that did not have taxes withheld, like freelancing or side work, you usually will not get a refund from that income.
              </p>
              <p style={{ color: '#FFCFD0' }} className="font-bold text-xl">
                You might actually owe.
              </p>
            </div>

            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#1C1C1C' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">
                Refunds mainly come from job withholding.
              </p>
            </div>
          </div>
        </div>

        {/* Why Understanding Refunds Matters */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Why understanding refunds matters</h2>
          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">Knowing what refunds really are helps you:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Avoid relying on them as income</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Adjust your W-4 properly</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Understand your tax situation</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Plan finances more accurately</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Refunds are returned overpayments, not extra earnings.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Refund:</strong> Returned overpaid taxes</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Withholding:</strong> Taxes taken from paychecks</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Tax liability:</strong> Amount you truly owe</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Direct deposit:</strong> Electronic refund payment</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <RefreshCw size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Refund is your money back</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Happens when taxes withheld are too high</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle size={20} style={{ color: '#FFCFD0' }} className="flex-shrink-0 mt-0.5" />
              <span>Not free money</span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Depends on income and credits</span>
            </li>
            <li className="flex items-start gap-3">
              <CreditCard size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Paid after filing</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What is a tax refund?</strong>
            </p>
            <div className="space-y-3">
              {['A) Bonus money', 'B) Returned overpaid taxes', 'C) Salary', 'D) Credit card reward'].map((option) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswers[1] === letter;
                const isCorrect = correctAnswers[1] === letter;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(1, letter)}
                    className="w-full text-left p-4 rounded border-2 transition-all text-lg"
                    style={{
                      backgroundColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#889063' : '#E5D7C4',
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
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>2. Why do refunds usually happen?</strong>
            </p>
            <div className="space-y-3">
              {['A) IRS gifts', 'B) Too much tax withheld', 'C) No income', 'D) Loans'].map((option) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswers[2] === letter;
                const isCorrect = correctAnswers[2] === letter;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(2, letter)}
                    className="w-full text-left p-4 rounded border-2 transition-all text-lg"
                    style={{
                      backgroundColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#889063' : '#E5D7C4',
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
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>3. How do most people receive refunds?</strong>
            </p>
            <div className="space-y-3">
              {['A) Cash', 'B) Direct deposit', 'C) Gift cards', 'D) Employer'].map((option) => {
                const letter = option.charAt(0);
                const isSelected = selectedAnswers[3] === letter;
                const isCorrect = correctAnswers[3] === letter;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(3, letter)}
                    className="w-full text-left p-4 rounded border-2 transition-all text-lg"
                    style={{
                      backgroundColor: showCorrect ? '#354024' : showIncorrect ? '#FFCFD0' : isSelected ? '#889063' : '#E5D7C4',
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
              className="w-full py-4 rounded-lg transition-opacity disabled:opacity-50 text-lg font-bold"
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
              <p className="text-2xl mb-2 font-bold" style={{ color: '#E5D7C4' }}>
                Your score: {Object.keys(correctAnswers).filter(q => selectedAnswers[parseInt(q)] === correctAnswers[parseInt(q)]).length} / {Object.keys(correctAnswers).length}
              </p>
              <p style={{ color: '#E5D7C4' }} className="text-lg">
                {Object.keys(correctAnswers).filter(q => selectedAnswers[parseInt(q)] === correctAnswers[parseInt(q)]).length === Object.keys(correctAnswers).length
                  ? 'Perfect! You understand what tax refunds really are and how they work.'
                  : 'Review the sections above to better understand tax refunds.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/tax-essentials/lesson-7"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Deductions and Credits Explained
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/tax-essentials/lesson-9"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Common Tax Mistakes to Avoid →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}