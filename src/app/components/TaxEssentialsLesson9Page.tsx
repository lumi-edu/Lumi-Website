import { Link } from './RouterLink';
import { ArrowLeft, AlertTriangle, XCircle, CheckCircle, FileText, Clock, Mail, DollarSign, Shield } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function TaxEssentialsLesson9Page() {
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
              <AlertTriangle size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 9</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Common Tax Mistakes to Avoid</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~12 to 15 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-4 font-bold" style={{ color: '#E5D7C4' }}>Most tax problems come from simple mistakes</h2>
          <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">
            Young people usually do not get into trouble with taxes because they are trying to cheat the system.
          </p>
          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">It happens because:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg">They do not know what counts as income</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg">They forget forms</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg">They misunderstand deadlines</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg">They ignore IRS notices</p>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-6 border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Taxes are strict, even for beginners. Mistakes can lead to penalties, delays, or money owed.
            </p>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Knowing what to avoid protects you financially and legally.
            </p>
          </div>
        </div>

        {/* Common Mistakes Section */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Six mistakes to avoid</h2>

          {/* Mistake 1 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4" style={{ backgroundColor: '#E5D7C4', color: '#1C1C1C', borderColor: '#FFCFD0' }}>
                1
              </div>
              <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Not reporting all income</h3>
            </div>
            
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#FFCFD0' }}>
              <div className="flex items-start gap-4 mb-6">
                <XCircle size={40} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
                <div className="flex-1">
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-xl font-bold">
                    If you earned money, it must be reported.
                  </p>
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">This includes:</p>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Side hustles</p>
                    </div>
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Freelance work</p>
                    </div>
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Tips</p>
                    </div>
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Online income</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#E5D7C4' }}>
                <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
                  Even if you did not receive a tax form, the income still counts.
                </p>
                <p style={{ color: '#FFCFD0' }} className="font-bold text-xl">
                  Unreported income is one of the biggest IRS triggers.
                </p>
              </div>
            </div>
          </div>

          {/* Mistake 2 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4" style={{ backgroundColor: '#E5D7C4', color: '#1C1C1C', borderColor: '#FFCFD0' }}>
                2
              </div>
              <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Filing late</h3>
            </div>
            
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#FFCFD0' }}>
              <div className="flex items-start gap-4 mb-6">
                <Clock size={40} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
                <div className="flex-1">
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-xl font-bold">
                    Tax returns are due every year around April.
                  </p>
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">Filing after the deadline can cause:</p>
                  <div className="space-y-3 mb-4">
                    <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
                      <AlertTriangle size={24} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
                      <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Late penalties</p>
                    </div>
                    <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
                      <AlertTriangle size={24} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
                      <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Interest charges</p>
                    </div>
                    <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#354024' }}>
                      <AlertTriangle size={24} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
                      <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">IRS notices</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                  Filing on time is required if you owe taxes or are above the income threshold.
                </p>
              </div>
            </div>
          </div>

          {/* Mistake 3 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4" style={{ backgroundColor: '#E5D7C4', color: '#1C1C1C', borderColor: '#FFCFD0' }}>
                3
              </div>
              <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Entering incorrect information</h3>
            </div>
            
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#FFCFD0' }}>
              <div className="flex items-start gap-4 mb-6">
                <FileText size={40} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
                <div className="flex-1">
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-xl font-bold">Common errors:</p>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Wrong Social Security number</p>
                    </div>
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Misspelled name</p>
                    </div>
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Wrong bank info</p>
                    </div>
                    <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Incorrect income numbers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#E5D7C4' }}>
                <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
                  These mistakes delay refunds and may cause rejection of your return.
                </p>
                <p style={{ color: '#FFCFD0' }} className="font-bold text-xl">
                  Always double check before submitting.
                </p>
              </div>
            </div>
          </div>

          {/* Mistake 4 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4" style={{ backgroundColor: '#E5D7C4', color: '#1C1C1C', borderColor: '#FFCFD0' }}>
                4
              </div>
              <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Ignoring IRS letters</h3>
            </div>
            
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#FFCFD0' }}>
              <div className="flex items-start gap-4 mb-6">
                <Mail size={40} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
                <div className="flex-1">
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-xl font-bold">
                    If the IRS sends you mail, it is serious.
                  </p>
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">Ignoring notices can lead to:</p>
                  <div className="space-y-3 mb-4">
                    <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Fines</p>
                    </div>
                    <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Collection actions</p>
                    </div>
                    <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Legal consequences</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
                  Always read and respond if required.
                </p>
              </div>
            </div>
          </div>

          {/* Mistake 5 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4" style={{ backgroundColor: '#E5D7C4', color: '#1C1C1C', borderColor: '#FFCFD0' }}>
                5
              </div>
              <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Thinking cash income is not taxable</h3>
            </div>
            
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#FFCFD0' }}>
              <div className="flex items-start gap-4 mb-6">
                <DollarSign size={40} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
                <div className="flex-1">
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-xl font-bold">
                    Money earned in cash still counts.
                  </p>
                  <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#354024' }}>
                    <p style={{ color: '#E5D7C4' }} className="mb-3 text-lg">
                      Babysitting, tutoring, selling services all must be reported even without formal paperwork.
                    </p>
                    <p style={{ color: '#FFCFD0' }} className="font-bold text-xl">
                      The IRS expects all income to be included.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mistake 6 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4" style={{ backgroundColor: '#E5D7C4', color: '#1C1C1C', borderColor: '#FFCFD0' }}>
                6
              </div>
              <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Filing the wrong status</h3>
            </div>
            
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#FFCFD0' }}>
              <div className="flex items-start gap-4 mb-6">
                <FileText size={40} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
                <div className="flex-1">
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-xl font-bold">
                    Choosing the wrong filing status can:
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Change how much tax you owe</p>
                    </div>
                    <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Reduce refunds</p>
                    </div>
                    <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Trigger IRS corrections</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#E5D7C4' }}>
                <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
                  Most young people file as Single and may be claimed as dependents.
                </p>
                <p style={{ color: '#FFCFD0' }} className="font-bold text-xl">
                  Do not guess.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why These Mistakes Matter */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-4 mb-6">
            <Shield size={40} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Why these mistakes matter</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">Tax mistakes can:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-lg border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <AlertTriangle size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Cost money</p>
            </div>
            <div className="p-5 rounded-lg border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <AlertTriangle size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Delay refunds</p>
            </div>
            <div className="p-5 rounded-lg border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <AlertTriangle size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Damage your financial record</p>
            </div>
            <div className="p-5 rounded-lg border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <AlertTriangle size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Lead to penalties</p>
            </div>
          </div>

          <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
              Taxes are legal responsibilities, not optional tasks.
            </p>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
              Understanding the rules early prevents future stress.
            </p>
          </div>
        </div>

        {/* Quick Reference Guide */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <h2 className="text-3xl mb-6 text-center font-bold" style={{ color: '#1C1C1C' }}>Quick mistake prevention guide</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Report everything</p>
              <p style={{ color: '#E5D7C4' }} className="text-base">All income counts, even cash</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">File on time</p>
              <p style={{ color: '#E5D7C4' }} className="text-base">Mark April deadline on calendar</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Double check info</p>
              <p style={{ color: '#E5D7C4' }} className="text-base">Review before submitting</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Read IRS mail</p>
              <p style={{ color: '#E5D7C4' }} className="text-base">Never ignore notices</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Know cash rules</p>
              <p style={{ color: '#E5D7C4' }} className="text-base">Cash income is taxable</p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={28} style={{ color: '#889063' }} className="mb-3" />
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Choose right status</p>
              <p style={{ color: '#E5D7C4' }} className="text-base">Usually Single for young adults</p>
            </div>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Taxable income:</strong> Income that must be reported</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>IRS notice:</strong> Official tax communication</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Filing status:</strong> Category that affects taxes</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Penalty:</strong> Financial punishment for errors</p>
            </div>
            <div className="p-4 rounded md:col-span-2 text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Late filing:</strong> Submitting after deadline</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Report every income source</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>File before the deadline</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Double check all entries</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={20} style={{ color: '#FFCFD0' }} className="flex-shrink-0 mt-0.5" />
              <span>Never ignore IRS letters</span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Cash income is taxable</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Filing status must be accurate</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. Which income must be reported?</strong>
            </p>
            <div className="space-y-3">
              {['A) Only job income', 'B) All earned income', 'C) Only online income', 'D) Only tips'].map((option) => {
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
              <strong>2. What happens if you file taxes late?</strong>
            </p>
            <div className="space-y-3">
              {['A) Nothing', 'B) Penalties and interest', 'C) Bigger refund', 'D) Cancel return'].map((option) => {
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
              <strong>3. Is cash income taxable?</strong>
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
                  ? 'Perfect! You know how to avoid common tax mistakes.'
                  : 'Review the mistakes above to better understand what to avoid.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/tax-essentials/lesson-8"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Tax Refunds Explained
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/tax-essentials/lesson-10"
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