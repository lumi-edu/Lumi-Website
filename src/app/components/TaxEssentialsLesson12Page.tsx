import { Link } from './RouterLink';
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, XCircle, Phone, Mail, Lock, FileText, DollarSign, Scale, AlertCircle, Award } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function TaxEssentialsLesson12Page() {
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
              <Shield size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 12</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Tax Safety and Responsibility</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~12 to 15 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Taxes are a legal responsibility</h2>
          
          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Filing taxes is not optional. When you earn income, you are legally required to report it and pay what you owe.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <CheckCircle size={32} style={{ color: '#1C1C1C' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                Filing correctly protects your future and keeps you out of legal trouble.
              </p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
              <Scale size={32} style={{ color: '#354024' }} className="mx-auto mb-3" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                Understanding tax safety helps you avoid scams and make smart decisions.
              </p>
            </div>
          </div>
        </div>

        {/* IRS Scams Section */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Recognizing IRS scams</h2>
          
          <div className="p-8 rounded-lg mb-6 border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
              <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Common tax scams</h3>
            </div>

            <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg font-bold">
              Criminals pretend to be the IRS to steal money or personal information.
            </p>

            <div className="space-y-4">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={24} style={{ color: '#FFCFD0' }} />
                  <p style={{ color: '#E5D7C4' }} className="font-bold text-xl">Threatening phone calls</p>
                </div>
                <p style={{ color: '#E5D7C4' }} className="text-lg">
                  Scammer claims you owe money immediately and threatens arrest or legal action if you don't pay right away.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={24} style={{ color: '#FFCFD0' }} />
                  <p style={{ color: '#E5D7C4' }} className="font-bold text-xl">Fake emails</p>
                </div>
                <p style={{ color: '#E5D7C4' }} className="text-lg">
                  Email asking you to verify personal information or click suspicious links claiming to be from the IRS.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign size={24} style={{ color: '#FFCFD0' }} />
                  <p style={{ color: '#E5D7C4' }} className="font-bold text-xl">Refund fraud</p>
                </div>
                <p style={{ color: '#E5D7C4' }} className="text-lg">
                  Someone files a fake return using your Social Security number to steal your refund.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
            <h3 className="text-2xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>How the real IRS contacts you</h3>
            
            <div className="space-y-4">
              <div className="p-5 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#354024' }}>
                <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
                <p style={{ color: '#E5D7C4' }} className="text-lg">The IRS sends official letters through regular mail</p>
              </div>
              <div className="p-5 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#354024' }}>
                <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
                <p style={{ color: '#E5D7C4' }} className="text-lg">They never demand immediate payment over the phone</p>
              </div>
              <div className="p-5 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#354024' }}>
                <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
                <p style={{ color: '#E5D7C4' }} className="text-lg">They will not ask for credit card or bank information by email</p>
              </div>
              <div className="p-5 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#354024' }}>
                <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
                <p style={{ color: '#E5D7C4' }} className="text-lg">They never threaten to call the police or deport you</p>
              </div>
            </div>
          </div>
        </div>

        {/* What to Do If Contacted */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>What to do if someone claims to be the IRS</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <XCircle size={28} style={{ color: '#1C1C1C' }} />
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Don't</p>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Give personal information</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Send money immediately</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Click suspicious links</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Call the number they provide</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle size={28} style={{ color: '#354024' }} />
                <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">Do</p>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Hang up the phone</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Delete suspicious emails</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Contact IRS directly at IRS.gov</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }}>Report the scam to authorities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filing Honestly */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-3 mb-6">
            <Scale size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Why filing honestly matters</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            The IRS expects accurate reporting. Being dishonest on your taxes can have serious consequences.
          </p>

          <div className="p-6 rounded-lg mb-6 border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
            <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-xl">Consequences of tax fraud:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <XCircle size={24} style={{ color: '#FFCFD0' }} className="mb-2" />
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Large fines</p>
                <p style={{ color: '#E5D7C4' }}>Thousands of dollars in penalties</p>
              </div>
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <XCircle size={24} style={{ color: '#FFCFD0' }} className="mb-2" />
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Criminal charges</p>
                <p style={{ color: '#E5D7C4' }}>Potential jail time for fraud</p>
              </div>
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <XCircle size={24} style={{ color: '#FFCFD0' }} className="mb-2" />
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Damaged credit</p>
                <p style={{ color: '#E5D7C4' }}>Unpaid taxes hurt your score</p>
              </div>
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                <XCircle size={24} style={{ color: '#FFCFD0' }} className="mb-2" />
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-1">Future problems</p>
                <p style={{ color: '#E5D7C4' }}>Harder to get loans or jobs</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-2xl">
              Honest filing protects your financial future.
            </p>
          </div>
        </div>

        {/* Common Mistakes vs Fraud */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Mistakes vs intentional fraud</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Honest Mistakes */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={32} style={{ color: '#1C1C1C' }} />
                <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Honest mistakes</h3>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Accidentally entering wrong numbers</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Forgetting a small income source</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Math errors on forms</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Missing a document</p>
                </div>
              </div>
              <div className="mt-6 p-4 rounded text-center" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">
                  Can be fixed with amended returns
                </p>
              </div>
            </div>

            {/* Intentional Fraud */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
              <div className="flex items-center gap-3 mb-6">
                <XCircle size={32} style={{ color: '#1C1C1C' }} />
                <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Intentional fraud</h3>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <AlertCircle size={20} style={{ color: '#FFCFD0' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Purposely hiding income</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <AlertCircle size={20} style={{ color: '#FFCFD0' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Making up deductions</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <AlertCircle size={20} style={{ color: '#FFCFD0' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Using fake documents</p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <AlertCircle size={20} style={{ color: '#FFCFD0' }} className="mb-2" />
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Claiming false dependents</p>
                </div>
              </div>
              <div className="mt-6 p-4 rounded text-center border-2" style={{ backgroundColor: '#354024', borderColor: '#1C1C1C' }}>
                <p style={{ color: '#FFCFD0' }} className="font-bold">
                  Results in penalties and legal action
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Taxes Matter for Your Future */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield size={36} style={{ color: '#354024' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Why taxes matter for your future</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Filing taxes correctly is part of responsible adulthood and opens doors to opportunities.
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-center gap-4">
                <FileText size={28} style={{ color: '#889063' }} className="flex-shrink-0" />
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Proof of income</p>
                  <p style={{ color: '#E5D7C4' }}>Tax returns prove your earnings when applying for loans, apartments, or credit cards</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-center gap-4">
                <DollarSign size={28} style={{ color: '#889063' }} className="flex-shrink-0" />
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Financial aid eligibility</p>
                  <p style={{ color: '#E5D7C4' }}>Many college financial aid programs require tax information from you and your parents</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-center gap-4">
                <Lock size={28} style={{ color: '#889063' }} className="flex-shrink-0" />
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Building financial credibility</p>
                  <p style={{ color: '#E5D7C4' }}>A clean tax history shows you are financially responsible</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-center gap-4">
                <CheckCircle size={28} style={{ color: '#889063' }} className="flex-shrink-0" />
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Government benefits access</p>
                  <p style={{ color: '#E5D7C4' }}>Some benefits and programs require proof of tax filing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Taking Responsibility */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold text-center" style={{ color: '#E5D7C4' }}>Taking tax responsibility seriously</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-2xl">1</span>
              </div>
              <p style={{ color: '#1C1C1C' }} className="text-center font-bold mb-2 text-lg">File on time</p>
              <p style={{ color: '#1C1C1C' }} className="text-center">Meet deadlines every year</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-2xl">2</span>
              </div>
              <p style={{ color: '#1C1C1C' }} className="text-center font-bold mb-2 text-lg">Report all income</p>
              <p style={{ color: '#1C1C1C' }} className="text-center">Never hide earnings</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#354024' }}>
                <span style={{ color: '#889063' }} className="font-bold text-2xl">3</span>
              </div>
              <p style={{ color: '#1C1C1C' }} className="text-center font-bold mb-2 text-lg">Stay organized</p>
              <p style={{ color: '#1C1C1C' }} className="text-center">Keep accurate records</p>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-2xl">
              Responsible tax filing is a sign of financial maturity.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Tax fraud:</strong> Intentionally lying on taxes</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>IRS scam:</strong> Fake contact pretending to be IRS</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Amended return:</strong> Correcting a filing mistake</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Penalty:</strong> Fine for tax violations</p>
            </div>
            <div className="p-4 rounded md:col-span-2 text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Tax responsibility:</strong> Legal duty to file honestly</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <Shield size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Recognize IRS scams and report them</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Never give personal information to suspicious contacts</span>
            </li>
            <li className="flex items-start gap-3">
              <Scale size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>File honestly to avoid serious consequences</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Mistakes can be fixed, fraud cannot</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Responsible tax filing protects your future</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. How does the real IRS contact you?</strong>
            </p>
            <div className="space-y-3">
              {['A) By threatening phone calls', 'B) Through official letters in the mail', 'C) Via email asking for passwords', 'D) Through text messages'].map((option) => {
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
              <strong>2. What is the difference between a mistake and fraud?</strong>
            </p>
            <div className="space-y-3">
              {['A) No difference', 'B) Both result in jail time', 'C) Mistakes are accidents, fraud is intentional', 'D) Fraud is less serious'].map((option) => {
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
              <strong>3. Why does tax filing matter for your future?</strong>
            </p>
            <div className="space-y-3">
              {['A) It doesn\'t matter', 'B) Proves income and builds credibility', 'C) Only matters for adults', 'D) Just to avoid trouble'].map((option) => {
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
                  ? 'Perfect! You understand tax safety and responsibility.'
                  : 'Review the sections above to better understand tax safety.'}
              </p>
            </div>
          )}
        </div>

        {/* Module Complete */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Award size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>You've completed the Tax Essentials module!</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            You now have all the knowledge you need to build a strong tax foundation:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }}>✓ Understanding how taxes work</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }}>✓ Filing taxes correctly</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }}>✓ Maximizing deductions and credits</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }}>✓ Staying organized year-round</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }}>✓ Avoiding costly mistakes</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }}>✓ Planning for tax season</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl mb-4">
              Remember: Tax planning is a year-round responsibility, not just an April task.
            </p>
            <p style={{ color: '#1C1C1C' }} className="text-lg">
              Stay organized, keep records, and file on time to avoid stress and penalties.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/tax-essentials/lesson-11"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Staying Organized for Taxes
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Course Complete</p>
            <Link
              to="/tax-essentials"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Back to Tax Essentials →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}