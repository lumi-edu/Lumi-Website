import { Link } from './RouterLink';
import { ArrowLeft, FileText, Clipboard, Upload, User, DollarSign, CheckSquare, Send, ArrowDown, Shield, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function TaxEssentialsLesson6Page() {
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
              <Clipboard size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 6</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>How to File Your Taxes (Step by Step)</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~15 to 18 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-4 font-bold" style={{ color: '#E5D7C4' }}>Filing taxes is submitting your official yearly report to the IRS</h2>
          <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">When you file your taxes, you are telling the government:</p>
          <div className="grid md:grid-cols-3 gap-3 mb-6">
            <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">How much you earned</p>
            </div>
            <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">How much tax you already paid</p>
            </div>
            <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Whether you deserve a refund or owe more</p>
            </div>
          </div>
          <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-center text-lg">
              Think of it as closing the tax year and settling everything.
            </p>
          </div>
          <p style={{ color: '#E5D7C4' }} className="text-center text-lg">
            Most young people file online using tax software because it is easier and guided.
          </p>
        </div>

        {/* Step-by-Step Journey */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Your Tax Filing Journey</h2>

          {/* Step 1 */}
          <div className="relative mb-8">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: '#889063', color: '#1C1C1C' }}>
                  1
                </div>
                <div className="w-1 h-full mt-2" style={{ backgroundColor: '#889063', minHeight: '100px' }}></div>
              </div>
              <div className="flex-1 pb-8">
                <div className="p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <FileText size={32} style={{ color: '#354024' }} />
                    <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Gather your tax documents</h3>
                  </div>
                  <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
                    Before filing, you need forms that show your income.
                  </p>
                  <p style={{ color: '#1C1C1C' }} className="mb-4 font-bold text-lg">The most common ones for teens and young adults:</p>

                  {/* W-2 */}
                  <div className="mb-4 p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                    <h4 className="font-bold mb-3 text-xl" style={{ color: '#E5D7C4' }}>W-2</h4>
                    <p style={{ color: '#E5D7C4' }} className="text-lg">
                      Given by employers if you worked a job. Shows total earnings and taxes withheld.
                    </p>
                  </div>

                  {/* 1099 */}
                  <div className="mb-6 p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                    <h4 className="font-bold mb-3 text-xl" style={{ color: '#E5D7C4' }}>1099</h4>
                    <p style={{ color: '#E5D7C4' }} className="mb-3 text-lg">
                      Given if you earned money without an employer withholding taxes. Includes:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="p-3 rounded" style={{ backgroundColor: '#889063' }}>
                        <p style={{ color: '#1C1C1C' }}>Freelance work</p>
                      </div>
                      <div className="p-3 rounded" style={{ backgroundColor: '#889063' }}>
                        <p style={{ color: '#1C1C1C' }}>Side hustles</p>
                      </div>
                      <div className="p-3 rounded" style={{ backgroundColor: '#889063' }}>
                        <p style={{ color: '#1C1C1C' }}>Tutoring</p>
                      </div>
                      <div className="p-3 rounded" style={{ backgroundColor: '#889063' }}>
                        <p style={{ color: '#1C1C1C' }}>Babysitting income reported formally</p>
                      </div>
                      <div className="p-3 rounded md:col-span-2" style={{ backgroundColor: '#889063' }}>
                        <p style={{ color: '#1C1C1C' }}>Contract work</p>
                      </div>
                    </div>
                  </div>

                  {/* Other Documents */}
                  <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#889063' }}>
                    <h4 className="font-bold mb-3 text-lg" style={{ color: '#1C1C1C' }}>Other possible documents</h4>
                    <ul className="space-y-2" style={{ color: '#1C1C1C' }}>
                      <li>• Bank interest statements</li>
                      <li>• Scholarship or financial aid tax forms (sometimes)</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-lg text-center border-2" style={{ backgroundColor: '#E5D7C4', borderColor: '#FFCFD0' }}>
                    <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                      You cannot file without reporting every taxable income source.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-8">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: '#CFBB99', color: '#1C1C1C' }}>
                  2
                </div>
                <div className="w-1 h-full mt-2" style={{ backgroundColor: '#CFBB99', minHeight: '100px' }}></div>
              </div>
              <div className="flex-1 pb-8">
                <div className="p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Upload size={32} style={{ color: '#1C1C1C' }} />
                    <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Choose how you will file</h3>
                  </div>
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">Most beginners use tax software like:</p>
                  
                  <div className="grid md:grid-cols-3 gap-3 mb-6">
                    <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">TurboTax</p>
                    </div>
                    <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">H&R Block</p>
                    </div>
                    <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Cash App Taxes</p>
                    </div>
                  </div>

                  <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
                    These platforms walk you step by step and automatically calculate everything.
                  </p>
                  <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
                    You answer questions and upload your forms.
                  </p>

                  <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
                    <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                      This is the easiest and safest method for new filers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative mb-8">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: '#354024', color: '#E5D7C4' }}>
                  3
                </div>
                <div className="w-1 h-full mt-2" style={{ backgroundColor: '#354024', minHeight: '100px' }}></div>
              </div>
              <div className="flex-1 pb-8">
                <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <User size={32} style={{ color: '#889063' }} />
                    <h3 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Enter personal information</h3>
                  </div>
                  <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">You will enter:</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                      <p style={{ color: '#1C1C1C' }}>Name</p>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                      <p style={{ color: '#1C1C1C' }}>Address</p>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                      <p style={{ color: '#1C1C1C' }}>Social Security number</p>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                      <p style={{ color: '#1C1C1C' }}>Filing status (usually Single)</p>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                      <p style={{ color: '#1C1C1C' }}>Whether someone claims you as a dependent</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-lg text-center border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
                    <AlertCircle size={24} style={{ color: '#1C1C1C' }} className="mx-auto mb-2" />
                    <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                      Be accurate because mistakes delay refunds or cause IRS problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative mb-8">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: '#889063', color: '#1C1C1C' }}>
                  4
                </div>
                <div className="w-1 h-full mt-2" style={{ backgroundColor: '#889063', minHeight: '100px' }}></div>
              </div>
              <div className="flex-1 pb-8">
                <div className="p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign size={32} style={{ color: '#354024' }} />
                    <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Enter income information</h3>
                  </div>
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                    The software will ask you to input your W-2 and 1099 details.
                  </p>
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">It uses these to calculate:</p>
                  
                  <div className="grid md:grid-cols-3 gap-3 mb-6">
                    <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Total income</p>
                    </div>
                    <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">Taxes already paid</p>
                    </div>
                    <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">What you owe or get back</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                      Every dollar earned must be reported.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative mb-8">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: '#CFBB99', color: '#1C1C1C' }}>
                  5
                </div>
                <div className="w-1 h-full mt-2" style={{ backgroundColor: '#CFBB99', minHeight: '100px' }}></div>
              </div>
              <div className="flex-1 pb-8">
                <div className="p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckSquare size={32} style={{ color: '#1C1C1C' }} />
                    <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Apply deductions and credits</h3>
                  </div>
                  <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
                    Most young people use the standard deduction automatically provided.
                  </p>
                  
                  <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#354024' }}>
                    <p style={{ color: '#E5D7C4' }} className="mb-3 text-lg">
                      The software will also check if you qualify for beginner credits.
                    </p>
                    <p style={{ color: '#E5D7C4' }} className="text-lg">
                      Credits reduce the taxes you owe or increase refunds.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#E5D7C4' }}>
                    <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                      You usually do not manually calculate this. The software handles it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="relative mb-8">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: '#354024', color: '#E5D7C4' }}>
                  6
                </div>
                <div className="w-1 h-full mt-2" style={{ backgroundColor: '#354024', minHeight: '100px' }}></div>
              </div>
              <div className="flex-1 pb-8">
                <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Send size={32} style={{ color: '#889063' }} />
                    <h3 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Review and submit</h3>
                  </div>
                  <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">Before submitting:</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#889063' }}>
                      <CheckSquare size={24} style={{ color: '#1C1C1C' }} className="flex-shrink-0" />
                      <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Double check numbers</p>
                    </div>
                    <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#889063' }}>
                      <CheckSquare size={24} style={{ color: '#1C1C1C' }} className="flex-shrink-0" />
                      <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Confirm personal info</p>
                    </div>
                    <div className="p-5 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#889063' }}>
                      <CheckSquare size={24} style={{ color: '#1C1C1C' }} className="flex-shrink-0" />
                      <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Make sure all income is entered</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
                    <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                      Once submitted electronically, the IRS processes your return.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="relative mb-8">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: '#889063', color: '#1C1C1C' }}>
                  7
                </div>
              </div>
              <div className="flex-1">
                <div className="p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign size={32} style={{ color: '#354024' }} />
                    <h3 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Refund or payment</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">
                        If you overpaid taxes, the IRS sends your refund (usually by direct deposit).
                      </p>
                    </div>
                    <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">
                        If you owe taxes, the software guides you on payment.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">
                      Filing finalizes your tax responsibility for the year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Filing Correctly Matters */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <div className="flex items-center gap-4 mb-6">
            <Shield size={40} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Why filing correctly matters</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">Filing taxes:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckSquare size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Keeps you legally compliant</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckSquare size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Prevents penalties</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckSquare size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Gets refunds you deserve</p>
            </div>
            <div className="p-5 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <CheckSquare size={24} style={{ color: '#1C1C1C' }} className="mb-2" />
              <p style={{ color: '#1C1C1C' }} className="font-bold text-lg">Builds responsible financial habits</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center border-2" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Ignoring taxes creates long term financial trouble.
            </p>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>W-2:</strong> Job income form</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>1099:</strong> Independent income form</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Tax software:</strong> Filing platform</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Standard deduction:</strong> Automatic income reduction</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Refund:</strong> Money returned</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Tax return:</strong> Filed report</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <FileText size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Gather income forms</span>
            </li>
            <li className="flex items-start gap-3">
              <Upload size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Use tax software</span>
            </li>
            <li className="flex items-start gap-3">
              <User size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Enter personal details</span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Report all income</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckSquare size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Apply deductions</span>
            </li>
            <li className="flex items-start gap-3">
              <Send size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Submit to IRS</span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Receive refund or pay balance</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What form do you receive from a job employer?</strong>
            </p>
            <div className="space-y-3">
              {['A) 1099', 'B) W-2', 'C) W-4', 'D) Invoice'].map((option) => {
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
              <strong>2. What happens if income is missing from your tax return?</strong>
            </p>
            <div className="space-y-3">
              {['A) Nothing', 'B) IRS penalties and corrections', 'C) Bigger refund', 'D) Cancel taxes'].map((option) => {
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
              <strong>3. What is the easiest way for beginners to file taxes?</strong>
            </p>
            <div className="space-y-3">
              {['A) Paper forms', 'B) Tax software', 'C) Ignoring filing', 'D) Bank filing'].map((option) => {
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
                  ? 'Perfect! You understand the step-by-step tax filing process.'
                  : 'Review the filing steps above to better understand the tax filing process.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/tax-essentials/lesson-5"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← What a Tax Return Really Is
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/tax-essentials/lesson-7"
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