import { Link } from './RouterLink';
import { ArrowLeft, FolderOpen, FileText, AlertCircle, CheckCircle, XCircle, Calendar, Download, Shield, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function TaxEssentialsLesson11Page() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const correctAnswers = {
    1: 'B',
    2: 'C',
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
              <FolderOpen size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 11</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Staying Organized for Taxes</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~12 to 15 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Taxes become stressful when records are messy</h2>
          
          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Most people do not struggle with taxes because they are complicated.
          </p>

          <div className="p-6 rounded-lg mb-6 border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-3 font-bold text-lg">They struggle because they:</p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <XCircle size={20} style={{ color: '#FFCFD0' }} className="mb-2" />
                <p style={{ color: '#E5D7C4' }}>Lose documents</p>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <XCircle size={20} style={{ color: '#FFCFD0' }} className="mb-2" />
                <p style={{ color: '#E5D7C4' }}>Forget income</p>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                <XCircle size={20} style={{ color: '#FFCFD0' }} className="mb-2" />
                <p style={{ color: '#E5D7C4' }}>Wait until the last minute</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={32} style={{ color: '#1C1C1C' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                Being organized makes tax filing simple and prevents mistakes.
              </p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
              <Shield size={32} style={{ color: '#354024' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                The IRS expects accurate reporting, which requires keeping track of your money throughout the year.
              </p>
            </div>
          </div>
        </div>

        {/* Organized vs Disorganized Comparison */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>The difference organization makes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Disorganized Side */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <div className="flex items-center gap-3 mb-6">
                <XCircle size={32} style={{ color: '#1C1C1C' }} />
                <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Disorganized</h3>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <AlertCircle size={20} style={{ color: '#FFCFD0' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Lost tax forms</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <AlertCircle size={20} style={{ color: '#FFCFD0' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Forgotten income sources</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <AlertCircle size={20} style={{ color: '#FFCFD0' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Last-minute panic</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <AlertCircle size={20} style={{ color: '#FFCFD0' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Filing errors and penalties</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <AlertCircle size={20} style={{ color: '#FFCFD0' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">High stress levels</p>
                </div>
              </div>
            </div>

            {/* Organized Side */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={32} style={{ color: '#1C1C1C' }} />
                <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Organized</h3>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <CheckCircle size={20} style={{ color: '#889063' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">All documents saved</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <CheckCircle size={20} style={{ color: '#889063' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Complete income tracking</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <CheckCircle size={20} style={{ color: '#889063' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Easy and quick filing</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <CheckCircle size={20} style={{ color: '#889063' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Accurate reporting</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <CheckCircle size={20} style={{ color: '#889063' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You Should Always Keep */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <div className="flex items-center gap-3 mb-6">
            <FileText size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>What you should always keep</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">Save copies of:</p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#354024' }}>
              <FileText size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1 text-lg">W-2 forms from jobs</p>
                <p style={{ color: '#E5D7C4' }}>Shows wages and withholdings from employers</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#354024' }}>
              <FileText size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1 text-lg">1099 forms from side work</p>
                <p style={{ color: '#E5D7C4' }}>Documents freelance and independent income</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#354024' }}>
              <FileText size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1 text-lg">Pay stubs</p>
                <p style={{ color: '#E5D7C4' }}>Proof of income throughout the year</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#354024' }}>
              <FileText size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1 text-lg">Bank statements showing income</p>
                <p style={{ color: '#E5D7C4' }}>Records of deposits and payments received</p>
              </div>
            </div>
            <div className="p-6 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#354024' }}>
              <FileText size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1 text-lg">Any tax related letters</p>
                <p style={{ color: '#E5D7C4' }}>IRS correspondence and notices</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#E5D7C4' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
              These documents prove what you earned and what taxes were already paid.
            </p>
            <div className="p-4 rounded text-center border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
                Never throw away tax forms.
              </p>
            </div>
          </div>
        </div>

        {/* Side Hustle Tracking */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Why side hustles require extra tracking</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-xl font-bold">
            If you earn independent income, you must track it yourself.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">Keep records of:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
                <Calendar size={20} style={{ color: '#889063' }} className="flex-shrink-0" />
                <p style={{ color: '#E5D7C4' }} className="text-lg">Dates you were paid</p>
              </div>
              <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
                <FileText size={20} style={{ color: '#889063' }} className="flex-shrink-0" />
                <p style={{ color: '#E5D7C4' }} className="text-lg">Amount earned</p>
              </div>
              <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
                <FileText size={20} style={{ color: '#889063' }} className="flex-shrink-0" />
                <p style={{ color: '#E5D7C4' }} className="text-lg">Who paid you</p>
              </div>
              <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
                <FileText size={20} style={{ color: '#889063' }} className="flex-shrink-0" />
                <p style={{ color: '#E5D7C4' }} className="text-lg">Type of work</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
              Even if payments are small or cash based, they still count.
            </p>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              Without records, it becomes very hard to report accurately.
            </p>
          </div>
        </div>

        {/* Organization Methods */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>How to stay organized easily</h2>

          <div className="p-8 rounded-lg mb-6" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="mb-6 text-2xl font-bold text-center">Simple habits:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Digital Methods */}
              <div className="space-y-4">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <FolderOpen size={24} style={{ color: '#1C1C1C' }} />
                    <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Digital organization</p>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }}>Create a tax folder on your computer</p>
                    </div>
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }}>Screenshot digital payments</p>
                    </div>
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }}>Log side income in a notes app or spreadsheet</p>
                    </div>
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }}>Save emails showing payments</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Methods */}
              <div className="space-y-4">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <FileText size={24} style={{ color: '#354024' }} />
                    <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Physical organization</p>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }}>Keep a physical folder at home</p>
                    </div>
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }}>File all tax forms immediately</p>
                    </div>
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }}>Label everything clearly</p>
                    </div>
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }}>Keep in a safe, accessible place</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <Lightbulb size={32} style={{ color: '#1C1C1C' }} className="mx-auto mb-3" />
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Organization saves time and prevents IRS issues later.
            </p>
          </div>
        </div>

        {/* Sample Tracking System */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h3 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Sample side income tracking log</h3>
          
          <div className="overflow-x-auto">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <div className="grid grid-cols-4 gap-3 mb-3 pb-3 border-b-2" style={{ borderColor: '#354024' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Date</p>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Client/Source</p>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Work Type</p>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Amount</p>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-4 gap-3 p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Jan 15</p>
                  <p style={{ color: '#E5D7C4' }}>Smith Family</p>
                  <p style={{ color: '#E5D7C4' }}>Babysitting</p>
                  <p style={{ color: '#889063' }} className="font-bold">$80</p>
                </div>
                <div className="grid grid-cols-4 gap-3 p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Jan 20</p>
                  <p style={{ color: '#E5D7C4' }}>Online Store</p>
                  <p style={{ color: '#E5D7C4' }}>Product Sale</p>
                  <p style={{ color: '#889063' }} className="font-bold">$125</p>
                </div>
                <div className="grid grid-cols-4 gap-3 p-3 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Jan 28</p>
                  <p style={{ color: '#E5D7C4' }}>Jones Family</p>
                  <p style={{ color: '#E5D7C4' }}>Tutoring</p>
                  <p style={{ color: '#889063' }} className="font-bold">$60</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t-2" style={{ borderColor: '#354024' }}>
                <div className="flex justify-between items-center">
                  <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Total January Income:</p>
                  <p style={{ color: '#1C1C1C' }} className="font-bold text-2xl">$265</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Why this matters for refunds and accuracy</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">Good records help you:</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#1C1C1C' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-1 text-lg">File faster</p>
              <p style={{ color: '#1C1C1C' }}>All info ready when needed</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#1C1C1C' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-1 text-lg">Avoid forgetting income</p>
              <p style={{ color: '#1C1C1C' }}>Complete documentation</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#1C1C1C' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-1 text-lg">Prevent penalties</p>
              <p style={{ color: '#1C1C1C' }}>Accurate reporting</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#1C1C1C' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-1 text-lg">Claim accurate information</p>
              <p style={{ color: '#1C1C1C' }}>All deductions and credits</p>
            </div>
            <div className="p-6 rounded-lg md:col-span-2" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={28} style={{ color: '#1C1C1C' }} className="mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-1 text-lg">Protect yourself if audited</p>
              <p style={{ color: '#1C1C1C' }}>Proof ready for IRS review</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-2xl">
              Taxes reward preparation.
            </p>
          </div>
        </div>

        {/* Quick Action Checklist */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
          <h2 className="text-3xl mb-6 text-center font-bold" style={{ color: '#1C1C1C' }}>Your organization action plan</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#1C1C1C' }} className="font-bold text-2xl">1</span>
              </div>
              <p style={{ color: '#E5D7C4' }} className="text-center font-bold mb-2 text-lg">Set up folders</p>
              <p style={{ color: '#E5D7C4' }} className="text-center">Digital and physical</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#1C1C1C' }} className="font-bold text-2xl">2</span>
              </div>
              <p style={{ color: '#E5D7C4' }} className="text-center font-bold mb-2 text-lg">Save everything</p>
              <p style={{ color: '#E5D7C4' }} className="text-center">Tax forms and records</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#889063' }}>
                <span style={{ color: '#1C1C1C' }} className="font-bold text-2xl">3</span>
              </div>
              <p style={{ color: '#E5D7C4' }} className="text-center font-bold mb-2 text-lg">Track side income</p>
              <p style={{ color: '#E5D7C4' }} className="text-center">Log all payments</p>
            </div>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Tax records:</strong> Documents proving income</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>1099:</strong> Independent income form</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>W-2:</strong> Employer income form</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Audit:</strong> IRS review</p>
            </div>
            <div className="p-4 rounded md:col-span-2 text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Documentation:</strong> Proof of earnings</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <FileText size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Save all tax forms</span>
            </li>
            <li className="flex items-start gap-3">
              <Calendar size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Track side income yourself</span>
            </li>
            <li className="flex items-start gap-3">
              <Download size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Keep digital and physical copies</span>
            </li>
            <li className="flex items-start gap-3">
              <FolderOpen size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Organization prevents mistakes</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Records protect you legally</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. Why should you save tax documents?</strong>
            </p>
            <div className="space-y-3">
              {['A) Decoration', 'B) Proof of income and taxes paid', 'C) Optional', 'D) For banks only'].map((option) => {
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
              <strong>2. Who is responsible for tracking side hustle income?</strong>
            </p>
            <div className="space-y-3">
              {['A) IRS', 'B) Employer', 'C) You', 'D) Bank'].map((option) => {
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
              <strong>3. What is one way to stay organized?</strong>
            </p>
            <div className="space-y-3">
              {['A) Delete records', 'B) Keep a tax folder', 'C) Ignore income', 'D) Wait until April'].map((option) => {
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
                  ? 'Perfect! You understand how to stay organized for taxes.'
                  : 'Review the sections above to better understand tax organization.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/tax-essentials/lesson-10"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Taxes on Side Hustles and Self Employment
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/tax-essentials/lesson-12"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Understanding Tax Brackets →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}