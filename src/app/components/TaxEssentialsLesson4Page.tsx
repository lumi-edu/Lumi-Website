import { Link } from './RouterLink';
import { ArrowLeft, FileText, DollarSign, CheckCircle, AlertTriangle, Calculator, Users, TrendingUp, Home, Heart, Briefcase, User, Eye, PiggyBank } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function TaxEssentialsLesson4Page() {
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
              <p style={{ color: '#354024' }} className="text-base mb-1">Lesson 4</p>
              <h1 className="text-4xl font-medium" style={{ color: '#1C1C1C' }}>Types of Income You Must Report</h1>
            </div>
          </div>
          <p style={{ color: '#354024' }} className="opacity-70 text-lg">Time: ~12 to 15 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-5 font-medium" style={{ color: '#E5D7C4' }}>The government taxes income, not just paychecks</h2>
          <p style={{ color: '#E5D7C4' }} className="mb-5 text-lg">
            Any money you earn can be taxable, even if it does not come from a regular job.
          </p>
          <div className="p-6 rounded-lg mb-5" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
              A lot of young people think taxes only apply to people with full time jobs. That is not true.
            </p>
            <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">
              If you earn income, there is a strong chance it must be reported to the IRS.
            </p>
          </div>
          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-medium text-xl">
              Income is taxable whether it is formal, informal, or from side work.
            </p>
          </div>
        </div>

        {/* Income Types Section */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-medium" style={{ color: '#1C1C1C' }}>The most common income types for teens and young adults</h2>

          {/* Job Income (W-2) */}
          <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                <Briefcase size={32} style={{ color: '#889063' }} />
              </div>
              <h3 className="text-3xl font-medium" style={{ color: '#1C1C1C' }}>Job income (W-2)</h3>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">
                  If you work for an employer, they send you a W-2 at the end of the year.
                </p>
                <p style={{ color: '#E5D7C4' }} className="font-medium mb-4 text-lg">This form shows:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-5 rounded" style={{ backgroundColor: '#CFBB99' }}>
                    <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">Total money earned</p>
                  </div>
                  <div className="p-5 rounded" style={{ backgroundColor: '#CFBB99' }}>
                    <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">Taxes already withheld</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-medium text-xl">
                  This is the most straightforward income type.
                </p>
              </div>
            </div>
          </div>

          {/* Independent Income (1099) */}
          <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                <User size={32} style={{ color: '#CFBB99' }} />
              </div>
              <h3 className="text-3xl font-medium" style={{ color: '#1C1C1C' }}>Independent income (1099)</h3>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="mb-5 font-medium text-lg">
                  If you earn money without an employer withholding taxes, it is considered self employment income.
                </p>
                <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">Examples:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Babysitting</p>
                  </div>
                  <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Tutoring</p>
                  </div>
                  <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Freelancing</p>
                  </div>
                  <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Selling products or services</p>
                  </div>
                  <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Online businesses</p>
                  </div>
                  <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Social media income</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#E5D7C4' }}>
                <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                  Companies may send you a 1099 form if they paid you.
                </p>
                <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-medium text-xl">
                    Even if you do not receive a form, you still must report the income.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
                <DollarSign size={32} style={{ color: '#354024' }} />
              </div>
              <h3 className="text-3xl font-medium" style={{ color: '#E5D7C4' }}>Tips</h3>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
                  Money earned as tips from service jobs is taxable.
                </p>
                <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">
                  Many young workers forget this.
                </p>
              </div>

              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-medium text-xl">
                  Tips are considered income and must be reported.
                </p>
              </div>
            </div>
          </div>

          {/* Bank Interest */}
          <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#354024' }}>
                <PiggyBank size={32} style={{ color: '#889063' }} />
              </div>
              <h3 className="text-3xl font-medium" style={{ color: '#1C1C1C' }}>Bank interest</h3>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">
                  Money earned from savings accounts also counts as taxable income.
                </p>
                <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">
                  Banks usually send forms if interest exceeds a certain amount.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">
                  Even small earnings are technically income.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Reporting Matters */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-4 mb-6">
            <Eye size={42} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-medium" style={{ color: '#E5D7C4' }}>Why reporting all income matters</h2>
          </div>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-medium text-xl mb-4">
              The IRS receives copies of forms sent to you.
            </p>
            <p style={{ color: '#1C1C1C' }} className="text-lg">If you leave income off your tax return:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
              <AlertTriangle size={36} style={{ color: '#354024' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">The IRS notices</p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
              <AlertTriangle size={36} style={{ color: '#354024' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">You can get penalties</p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
              <AlertTriangle size={36} style={{ color: '#354024' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">You may owe extra taxes later</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-medium text-xl">
              Unreported income is one of the most common tax mistakes.
            </p>
          </div>
        </div>

        {/* Side Hustle Warning */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#FFCFD0' }}>
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle size={52} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
            <h2 className="text-3xl font-medium" style={{ color: '#1C1C1C' }}>Side hustle warning for young people</h2>
          </div>

          <div className="space-y-4 mb-6">
            <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">If you earn money outside a job:</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#FFCFD0' }}>
                <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">Taxes are not automatically withheld</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#FFCFD0' }}>
                <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">You may owe later</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#FFCFD0' }}>
                <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">You must still report it</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
              Many teens get surprised because they think cash income does not count.
            </p>
            <div className="p-5 rounded text-center" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#FFCFD0' }} className="font-medium text-2xl">
                All income counts.
              </p>
            </div>
          </div>
        </div>

        {/* Income Types Summary Visual */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <h2 className="text-3xl mb-6 text-center font-medium" style={{ color: '#1C1C1C' }}>Income reporting at a glance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={32} style={{ color: '#889063' }} />
                <h3 className="font-medium text-xl" style={{ color: '#E5D7C4' }}>W-2 Income</h3>
              </div>
              <p style={{ color: '#E5D7C4' }} className="text-lg">From employers</p>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Taxes already withheld</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-4">
                <User size={32} style={{ color: '#889063' }} />
                <h3 className="font-medium text-xl" style={{ color: '#E5D7C4' }}>1099 Income</h3>
              </div>
              <p style={{ color: '#E5D7C4' }} className="text-lg">From self employment</p>
              <p style={{ color: '#E5D7C4' }} className="text-lg">No taxes withheld</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign size={32} style={{ color: '#889063' }} />
                <h3 className="font-medium text-xl" style={{ color: '#E5D7C4' }}>Tips</h3>
              </div>
              <p style={{ color: '#E5D7C4' }} className="text-lg">From service jobs</p>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Must be tracked and reported</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-4">
                <PiggyBank size={32} style={{ color: '#889063' }} />
                <h3 className="font-medium text-xl" style={{ color: '#E5D7C4' }}>Interest</h3>
              </div>
              <p style={{ color: '#E5D7C4' }} className="text-lg">From bank accounts</p>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Forms sent if over threshold</p>
            </div>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <h2 className="text-3xl mb-6 font-medium" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Taxable income:</strong> Money subject to taxes</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>W-2:</strong> Employer income form</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>1099:</strong> Independent income form</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Tips:</strong> Taxable service income</p>
            </div>
            <div className="p-5 rounded md:col-span-2" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Interest income:</strong> Money earned from banks</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-medium" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-4 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <TrendingUp size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>All earned money can be taxable</span>
            </li>
            <li className="flex items-start gap-3">
              <Briefcase size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Job income comes from W-2</span>
            </li>
            <li className="flex items-start gap-3">
              <User size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Side income comes from 1099</span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Tips are taxable</span>
            </li>
            <li className="flex items-start gap-3">
              <PiggyBank size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Bank interest counts</span>
            </li>
            <li className="flex items-start gap-3">
              <Eye size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>IRS tracks reported income</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-medium" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
            <p className="mb-5 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. Which form shows income from an employer?</strong>
            </p>
            <div className="space-y-3">
              {['A) 1099', 'B) W-2', 'C) W-4', 'D) Receipt'].map((option) => {
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
              <strong>2. Does side hustle income have to be reported?</strong>
            </p>
            <div className="space-y-3">
              {['A) No', 'B) Yes', 'C) Only cash', 'D) Only online'].map((option) => {
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
              <strong>3. Are tips considered taxable income?</strong>
            </p>
            <div className="space-y-3">
              {['A) No', 'B) Yes', 'C) Only large amounts', 'D) Optional'].map((option) => {
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
                  ? 'Perfect! You understand the different types of income that must be reported.'
                  : 'Review the income types above to better understand what must be reported to the IRS.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/tax-essentials/lesson-3"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← The W-4 Form Explained
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/tax-essentials/lesson-5"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              What a Tax Return Really Is →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}