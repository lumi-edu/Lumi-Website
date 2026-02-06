import { Link } from './RouterLink';
import { ArrowLeft, TrendingDown, Award, Calculator, FileText, Lightbulb, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function TaxEssentialsLesson7Page() {
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
              <Calculator size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 7</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Deductions and Credits Explained</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~15 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-4 font-bold" style={{ color: '#E5D7C4' }}>Deductions and credits both reduce your taxes, but in different ways</h2>
          <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">
            A lot of people hear these terms and think they mean the same thing. They do not.
          </p>
          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Both help lower what you owe, but they work differently.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <TrendingDown size={32} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
                Deductions reduce the income that gets taxed.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <Award size={32} style={{ color: '#1C1C1C' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
                Credits reduce the actual tax amount you owe.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Credits are more powerful because they directly subtract from your tax bill.
            </p>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Confusing these two terms can lead to tax filing mistakes.
            </p>
          </div>
        </div>

        {/* Split Section Header */}
        <div className="mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
              <TrendingDown size={40} style={{ color: '#354024' }} className="mx-auto mb-3" />
              <h2 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Deductions</h2>
              <p style={{ color: '#1C1C1C' }} className="mt-2 text-lg">Lower your taxable income</p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <Award size={40} style={{ color: '#1C1C1C' }} className="mx-auto mb-3" />
              <h2 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Credits</h2>
              <p style={{ color: '#1C1C1C' }} className="mt-2 text-lg">Lower your tax bill directly</p>
            </div>
          </div>
        </div>

        {/* What a Deduction Is */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingDown size={36} style={{ color: '#354024' }} />
            <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>What a deduction is</h3>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-8 text-xl">
            A deduction lowers your taxable income.
          </p>

          <div className="p-8 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#889063' }} className="mb-6 font-bold text-2xl">Here's how it works:</p>
            <div className="space-y-3">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="text-sm mb-1 opacity-70">Your total earnings</p>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-3xl">$10,000</p>
              </div>
              
              <div className="flex items-center justify-center py-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 rounded" style={{ backgroundColor: '#E5D7C4' }}></div>
                  <p style={{ color: '#E5D7C4' }} className="text-3xl font-bold">−</p>
                  <div className="w-12 h-1 rounded" style={{ backgroundColor: '#E5D7C4' }}></div>
                </div>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="text-sm mb-1 opacity-70">Standard deduction</p>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-3xl">$2,000</p>
              </div>

              <div className="flex items-center justify-center py-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 rounded" style={{ backgroundColor: '#E5D7C4' }}></div>
                  <p style={{ color: '#E5D7C4' }} className="text-3xl font-bold">=</p>
                  <div className="w-12 h-1 rounded" style={{ backgroundColor: '#E5D7C4' }}></div>
                </div>
              </div>

              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#E5D7C4' }}>
                <p style={{ color: '#1C1C1C' }} className="text-sm mb-1 opacity-70">What the government taxes</p>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-3xl">$8,000</p>
              </div>
            </div>
            
            <div className="mt-8 p-5 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
                The government taxes you as if you only made $8,000
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center border-2" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-2xl">
              Lower taxable income = lower taxes
            </p>
          </div>
        </div>

        {/* Standard Deduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFBB99' }}>
              <FileText size={24} style={{ color: '#354024' }} />
            </div>
            <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>The standard deduction (most important for young people)</h3>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Most teens and young adults automatically qualify for the standard deduction.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
              This is a set amount the government lets you subtract from your income before taxes are calculated.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <CheckCircle size={20} style={{ color: '#CFBB99' }} className="mb-2" />
                <p style={{ color: '#E5D7C4' }}>You do not have to list expenses or prove anything.</p>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <CheckCircle size={20} style={{ color: '#CFBB99' }} className="mb-2" />
                <p style={{ color: '#E5D7C4' }}>Almost all beginner tax filers use this.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#CFBB99' }} className="font-bold text-xl">
              This alone reduces how much of your income is taxed.
            </p>
          </div>
        </div>

        {/* Itemized Deductions */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <h3 className="text-3xl font-bold mb-6" style={{ color: '#1C1C1C' }}>Itemized deductions (rare for beginners)</h3>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Itemizing means listing specific deductible expenses instead of using the standard deduction.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
              Most young people do not itemize because they usually do not have enough qualifying expenses.
            </p>
          </div>

          <div className="p-6 rounded-lg mb-6 text-center border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Itemizing incorrectly can trigger IRS audits and penalties.
            </p>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#CFBB99' }} className="font-bold text-lg">For lumi learners, just know:</p>
            <p style={{ color: '#E5D7C4' }} className="mt-2 text-lg">Standard deduction is the normal option.</p>
          </div>
        </div>

        {/* What a Tax Credit Is */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Award size={36} style={{ color: '#1C1C1C' }} />
            <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>What a tax credit is</h3>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-8 text-xl">
            A credit directly reduces the taxes you owe.
          </p>

          <div className="p-8 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#889063' }} className="mb-6 font-bold text-2xl">Here's how it works:</p>
            <div className="space-y-3">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#FFCFD0' }}>
                <p style={{ color: '#1C1C1C' }} className="text-sm mb-1 opacity-70">Your tax bill before credits</p>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-3xl">$500</p>
              </div>
              
              <div className="flex items-center justify-center py-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 rounded" style={{ backgroundColor: '#E5D7C4' }}></div>
                  <p style={{ color: '#E5D7C4' }} className="text-3xl font-bold">−</p>
                  <div className="w-12 h-1 rounded" style={{ backgroundColor: '#E5D7C4' }}></div>
                </div>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="text-sm mb-1 opacity-70">Education tax credit</p>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-3xl">$300</p>
              </div>

              <div className="flex items-center justify-center py-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 rounded" style={{ backgroundColor: '#E5D7C4' }}></div>
                  <p style={{ color: '#E5D7C4' }} className="text-3xl font-bold">=</p>
                  <div className="w-12 h-1 rounded" style={{ backgroundColor: '#E5D7C4' }}></div>
                </div>
              </div>

              <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#E5D7C4' }}>
                <p style={{ color: '#1C1C1C' }} className="text-sm mb-1 opacity-70">Your final tax bill</p>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-3xl">$200</p>
              </div>
            </div>
            
            <div className="mt-8 p-5 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
                Credits are dollar-for-dollar reductions
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center border-2" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-2xl">
              Some credits even increase refunds
            </p>
          </div>
        </div>

        {/* Common Credits */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
              <Award size={24} style={{ color: '#1C1C1C' }} />
            </div>
            <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Common credits young people may encounter</h3>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Education related credits (college tuition)</p>
              <p style={{ color: '#1C1C1C' }} className="opacity-80">For students paying tuition and education expenses</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Earned income credit (low income workers)</p>
              <p style={{ color: '#1C1C1C' }} className="opacity-80">For workers earning below certain income thresholds</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Child related credits (usually for parents)</p>
              <p style={{ color: '#1C1C1C' }} className="opacity-80">For people with dependent children</p>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-6 text-center border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Missing out on eligible credits means leaving money on the table.
            </p>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">
              Tax software automatically checks eligibility when filing.
            </p>
          </div>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Quick comparison</h2>
          
          <div className="p-6 rounded-lg mb-6 text-center border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Not understanding the difference between these can cost you money at tax time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Deductions Column */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <TrendingDown size={32} style={{ color: '#354024' }} />
                <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Deductions</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold mb-1 text-lg">What they reduce</p>
                  <p style={{ color: '#E5D7C4' }}>Taxable income</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold mb-1 text-lg">How they work</p>
                  <p style={{ color: '#E5D7C4' }}>Lower the income amount that gets taxed</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold mb-1 text-lg">Most common type</p>
                  <p style={{ color: '#E5D7C4' }}>Standard deduction</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#CFBB99' }} className="font-bold mb-1 text-lg">Benefit level</p>
                  <p style={{ color: '#E5D7C4' }}>Indirect savings</p>
                </div>
              </div>
            </div>

            {/* Credits Column */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <Award size={32} style={{ color: '#1C1C1C' }} />
                <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Credits</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold mb-1 text-lg">What they reduce</p>
                  <p style={{ color: '#E5D7C4' }}>Tax owed</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold mb-1 text-lg">How they work</p>
                  <p style={{ color: '#E5D7C4' }}>Directly subtract from tax bill</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold mb-1 text-lg">Most common type</p>
                  <p style={{ color: '#E5D7C4' }}>Education and earned income credits</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#889063' }} className="font-bold mb-1 text-lg">Benefit level</p>
                  <p style={{ color: '#E5D7C4' }}>Direct dollar-for-dollar savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Why this matters</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Deductions reduce income taxed.</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Credits reduce tax owed.</p>
            </div>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">Knowing the difference helps you:</p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold">Understand refunds</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold">Avoid confusion</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold">Make smarter tax decisions later</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Credits save more money than deductions.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Deduction:</strong> Reduces taxable income</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Credit:</strong> Reduces taxes owed</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Standard deduction:</strong> Automatic deduction</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Itemized deduction:</strong> Listed expenses</p>
            </div>
            <div className="p-4 rounded md:col-span-2 text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Taxable income:</strong> Income after deductions</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <TrendingDown size={20} style={{ color: '#CFBB99' }} className="flex-shrink-0 mt-0.5" />
              <span>Deductions lower taxed income</span>
            </li>
            <li className="flex items-start gap-3">
              <Award size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Credits lower tax bill directly</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText size={20} style={{ color: '#CFBB99' }} className="flex-shrink-0 mt-0.5" />
              <span>Standard deduction is most common</span>
            </li>
            <li className="flex items-start gap-3">
              <Award size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Credits are more powerful</span>
            </li>
            <li className="flex items-start gap-3">
              <Calculator size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Tax software applies these automatically</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What does a deduction reduce?</strong>
            </p>
            <div className="space-y-3">
              {['A) Taxes owed', 'B) Taxable income', 'C) Salary', 'D) Refund'].map((option) => {
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
              <strong>2. What does a tax credit reduce?</strong>
            </p>
            <div className="space-y-3">
              {['A) Income', 'B) Taxes owed', 'C) Expenses', 'D) Wages'].map((option) => {
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
              <strong>3. Which is more powerful financially?</strong>
            </p>
            <div className="space-y-3">
              {['A) Deduction', 'B) Credit', 'C) Salary', 'D) Withholding'].map((option) => {
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
                  ? 'Perfect! You understand the difference between deductions and credits.'
                  : 'Review the sections above to better understand deductions and credits.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/tax-essentials/lesson-6"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← How to File Your Taxes (Step by Step)
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/tax-essentials/lesson-8"
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