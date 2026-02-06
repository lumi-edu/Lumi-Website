import { Link } from './RouterLink';
import { ArrowLeft, Briefcase, Laptop, AlertTriangle, DollarSign, Calculator, Clock, FileText, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function TaxEssentialsLesson10Page() {
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
              <Laptop size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 10</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Taxes on Side Hustles and Self Employment</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~15 to 18 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Side income is taxed differently than job income</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <Briefcase size={32} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-xl">Regular Job</p>
              <p style={{ color: '#1C1C1C' }} className="text-lg">
                When you work a regular job, your employer automatically withholds taxes from each paycheck.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <Laptop size={32} style={{ color: '#354024' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-xl">Side Hustle</p>
              <p style={{ color: '#1C1C1C' }} className="text-lg">
                But when you earn money independently, no one is withholding taxes for you.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-6 border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-3 font-bold text-lg">That means:</p>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-2xl text-center">
              You are fully responsible for paying taxes later.
            </p>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
            <AlertTriangle size={24} style={{ color: '#1C1C1C' }} className="mb-3" />
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              This surprises a lot of young people because the income feels like full profit at first.
            </p>
          </div>
        </div>

        {/* What Counts as Self Employment */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>What counts as self employment income</h2>
          
          <p style={{ color: '#1C1C1C' }} className="mb-6 text-xl">
            Any money earned outside a traditional employer can be considered taxable side income.
          </p>

          <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Examples:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#889063' }}>
              <DollarSign size={20} style={{ color: '#1C1C1C' }} />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Babysitting</p>
            </div>
            <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#889063' }}>
              <DollarSign size={20} style={{ color: '#1C1C1C' }} />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Tutoring</p>
            </div>
            <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#889063' }}>
              <DollarSign size={20} style={{ color: '#1C1C1C' }} />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Freelancing</p>
            </div>
            <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#889063' }}>
              <DollarSign size={20} style={{ color: '#1C1C1C' }} />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Selling products</p>
            </div>
            <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#889063' }}>
              <DollarSign size={20} style={{ color: '#1C1C1C' }} />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Reselling clothes or items</p>
            </div>
            <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#889063' }}>
              <DollarSign size={20} style={{ color: '#1C1C1C' }} />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Online businesses</p>
            </div>
            <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#889063' }}>
              <DollarSign size={20} style={{ color: '#1C1C1C' }} />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Social media income</p>
            </div>
            <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#889063' }}>
              <DollarSign size={20} style={{ color: '#1C1C1C' }} />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Contract work</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-xl">
              Even if it feels casual, it still counts as income.
            </p>
          </div>
        </div>

        {/* Why Side Income Causes Problems */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Why side income causes tax problems</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">Since taxes are not automatically taken out:</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">You might spend all the money</p>
              <p style={{ color: '#E5D7C4' }}>Nothing set aside for tax bills</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">You forget taxes are owed</p>
              <p style={{ color: '#E5D7C4' }}>Out of sight, out of mind</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">You owe a lump sum later</p>
              <p style={{ color: '#E5D7C4' }}>Surprise bill at tax time</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Penalties can happen if unpaid</p>
              <p style={{ color: '#E5D7C4' }}>Extra fees and interest charges</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#1C1C1C' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-xl">
              The IRS expects taxes on all income, even if you never received a form.
            </p>
          </div>
        </div>

        {/* Self Employment Tax Breakdown */}
        <div className="mb-12">
          <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
            <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>The extra tax self employed workers pay</h2>

            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={28} style={{ color: '#CFBB99' }} />
                  <p style={{ color: '#CFBB99' }} className="font-bold text-xl">With a Regular Job</p>
                </div>
                <p style={{ color: '#E5D7C4' }} className="mb-3 text-lg">
                  Your employer pays half of Social Security and Medicare taxes for you.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-4 rounded" style={{ backgroundColor: '#CFBB99' }}>
                    <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">You pay: 7.65%</p>
                  </div>
                  <div className="p-4 rounded" style={{ backgroundColor: '#CFBB99' }}>
                    <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Employer pays: 7.65%</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <AlertTriangle size={40} style={{ color: '#1C1C1C' }} className="mx-auto" />
              </div>

              <div className="p-6 rounded-lg border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Laptop size={28} style={{ color: '#1C1C1C' }} />
                  <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">When Self Employed</p>
                </div>
                <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
                  When you are self employed, you must pay both halves yourself.
                </p>
                <div className="p-4 rounded" style={{ backgroundColor: '#1C1C1C' }}>
                  <p style={{ color: '#FFCFD0' }} className="font-bold text-2xl text-center">You pay: 15.3%</p>
                </div>
                <p style={{ color: '#1C1C1C' }} className="text-base mt-3 text-center font-bold">
                  This is called self employment tax.
                </p>
              </div>
            </div>

            <div className="mt-6 p-6 rounded-lg text-center border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
                So side income is taxed more heavily than regular paycheck income.
              </p>
            </div>
          </div>
        </div>

        {/* Estimated Taxes Timeline */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Clock size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Estimated taxes</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            If you consistently earn side income, the IRS may require quarterly tax payments instead of waiting until April.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Q1</p>
              <p style={{ color: '#1C1C1C' }}>April 15</p>
            </div>
            <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Q2</p>
              <p style={{ color: '#1C1C1C' }}>June 15</p>
            </div>
            <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Q3</p>
              <p style={{ color: '#1C1C1C' }}>September 15</p>
            </div>
            <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">Q4</p>
              <p style={{ color: '#1C1C1C' }}>January 15</p>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="text-lg">
              This prevents large unpaid balances from building.
            </p>
          </div>

          <div className="p-6 rounded-lg border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
            <AlertTriangle size={24} style={{ color: '#1C1C1C' }} className="mb-3" />
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              Most beginners do not know this, which leads to unexpected tax bills.
            </p>
          </div>
        </div>

        {/* Smart Savings Habit */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Smart habit for side hustles</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-xl font-bold">
            Set aside part of every payment you receive.
          </p>

          <div className="p-8 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#889063' }} className="mb-4 font-bold text-center text-lg">A common safe rule:</p>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="text-4xl font-bold mb-2">20 to 30%</p>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">of side income saved for taxes</p>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="text-center font-bold text-lg">
              This prevents stress when filing later.
            </p>
          </div>

          {/* Example Calculation */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Example calculation:</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-lg">Side hustle payment received</p>
                <p style={{ color: '#889063' }} className="font-bold text-xl">$500</p>
              </div>
              <div className="flex items-center justify-between p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="text-lg">Set aside 25%</p>
                <p style={{ color: '#889063' }} className="font-bold text-xl">$125</p>
              </div>
              <div className="flex items-center justify-between p-4 rounded" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">You can spend</p>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">$375</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reporting Side Income */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <FileText size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Reporting side income</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Side income is reported when filing taxes even if:
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#CFBB99' }}>
              <CheckCircle size={24} style={{ color: '#354024' }} className="flex-shrink-0" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">You never received a 1099</p>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#CFBB99' }}>
              <CheckCircle size={24} style={{ color: '#354024' }} className="flex-shrink-0" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">It was paid in cash</p>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#CFBB99' }}>
              <CheckCircle size={24} style={{ color: '#354024' }} className="flex-shrink-0" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">It was informal</p>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl text-center">
              All earnings must be included.
            </p>
          </div>

          <div className="p-6 rounded-lg border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
            <AlertTriangle size={24} style={{ color: '#1C1C1C' }} className="mb-3" />
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              The IRS tracks digital payments especially closely.
            </p>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Why this matters for young earners</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Side hustles feel exciting and profitable, but ignoring taxes can lead to:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <AlertTriangle size={24} style={{ color: '#FFCFD0' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Owing money</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <AlertTriangle size={24} style={{ color: '#FFCFD0' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Penalties</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <AlertTriangle size={24} style={{ color: '#FFCFD0' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Legal trouble</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <AlertTriangle size={24} style={{ color: '#FFCFD0' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Financial stress</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#1C1C1C' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-xl">
              Understanding this early protects your future.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Self employment:</strong> Independent income</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>1099:</strong> Income reporting form</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Self employment tax:</strong> Paying both halves of payroll tax</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Estimated taxes:</strong> Quarterly payments</p>
            </div>
            <div className="p-4 rounded md:col-span-2 text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Tax liability:</strong> Amount owed</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <DollarSign size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Side income is taxable</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle size={20} style={{ color: '#FFCFD0' }} className="flex-shrink-0 mt-0.5" />
              <span>No taxes are withheld automatically</span>
            </li>
            <li className="flex items-start gap-3">
              <Calculator size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>You pay extra self employment tax</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>IRS may require quarterly payments</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Save money from each payment</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Report all earnings</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. Why is side hustle income risky for taxes?</strong>
            </p>
            <div className="space-y-3">
              {['A) No income', 'B) No taxes withheld automatically', 'C) IRS ignores it', 'D) It is free money'].map((option) => {
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
              <strong>2. What is self employment tax?</strong>
            </p>
            <div className="space-y-3">
              {['A) Bonus', 'B) Paying both employee and employer payroll taxes', 'C) Refund', 'D) Sales tax'].map((option) => {
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
              <strong>3. What is a smart habit for side income?</strong>
            </p>
            <div className="space-y-3">
              {['A) Spend everything', 'B) Save a portion for taxes', 'C) Ignore reporting', 'D) Avoid filing'].map((option) => {
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
                  ? 'Perfect! You understand how side hustle taxes work.'
                  : 'Review the sections above to better understand self-employment taxes.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/tax-essentials/lesson-9"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Common Tax Mistakes to Avoid
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/tax-essentials/lesson-11"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Tracking Income Throughout the Year →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}