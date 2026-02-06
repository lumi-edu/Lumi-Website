import { Link } from './RouterLink';
import { ArrowLeft, FileText, User, Briefcase, Users, DollarSign, Edit3, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function TaxEssentialsLesson3Page() {
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
            to="/learn/tax-essentials" 
            className="inline-flex items-center gap-2 mb-8 text-lg hover:opacity-70 transition-opacity"
            style={{ color: '#354024' }}
          >
            <ArrowLeft size={22} />
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
              <p style={{ color: '#354024' }} className="text-base mb-1">Lesson 3</p>
              <h1 className="text-4xl font-medium" style={{ color: '#1C1C1C' }}>The W-4 Form Explained</h1>
            </div>
          </div>
          <p style={{ color: '#354024' }} className="opacity-70 text-lg">Time: ~15 to 18 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <h2 className="text-3xl mb-5 font-medium" style={{ color: '#E5D7C4' }}>What the W-4 actually is</h2>
          <p style={{ color: '#E5D7C4' }} className="mb-5 text-lg">
            The W-4 is the form you fill out at a job so your employer knows how much federal income tax to withhold from your paycheck.
          </p>
          <p style={{ color: '#E5D7C4' }} className="mb-5 text-lg">
            Withholding is basically your employer prepaying your taxes throughout the year.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg">
                If you fill out the W-4 in a way that withholds too much, you might get a refund later.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg">
                If you fill it out in a way that withholds too little, you might owe money when you file your tax return.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#E5D7C4' }}>
            <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">
              So the W-4 is not about whether you pay taxes. It is about how accurately your taxes get withheld during the year.
            </p>
          </div>
        </div>

        {/* The Big Idea */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <h2 className="text-3xl mb-5 font-medium" style={{ color: '#1C1C1C' }}>The big idea: what the W-4 is trying to estimate</h2>
          <p style={{ color: '#1C1C1C' }} className="mb-5 text-lg">
            The W-4 is trying to estimate how much tax you will owe for the year based on:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Your income from this job</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Whether you have more than one job</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Whether you have dependents</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Whether you expect deductions or credits</p>
            </div>
            <div className="p-5 rounded md:col-span-2" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Whether you want extra withholding</p>
            </div>
          </div>
          <div className="mt-5 p-6 rounded-lg text-center" style={{ backgroundColor: '#E5D7C4' }}>
            <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">
              It is basically a withholding settings form.
            </p>
          </div>
        </div>

        {/* When You Fill Out a W-4 */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-5 font-medium" style={{ color: '#1C1C1C' }}>When you fill out a W-4</h2>
          <p style={{ color: '#1C1C1C' }} className="mb-5 text-lg">You usually fill out a W-4:</p>
          <div className="space-y-3 mb-5">
            <div className="p-5 rounded flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <p style={{ color: '#E5D7C4' }} className="text-lg">When you start a new job</p>
            </div>
            <div className="p-5 rounded flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <p style={{ color: '#E5D7C4' }} className="text-lg">If your income changes a lot</p>
            </div>
            <div className="p-5 rounded flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <p style={{ color: '#E5D7C4' }} className="text-lg">If you get a second job</p>
            </div>
            <div className="p-5 rounded flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <p style={{ color: '#E5D7C4' }} className="text-lg">If your family situation changes</p>
            </div>
            <div className="p-5 rounded flex items-start gap-3" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <p style={{ color: '#E5D7C4' }} className="text-lg">If you owed money or got a huge refund last year and want to adjust</p>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">
            You can update your W-4 at any time through your employer.
          </p>
        </div>

        {/* Scenario Boxes */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-medium" style={{ color: '#1C1C1C' }}>What most teens and young adults need to know</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Simple Situation */}
            <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#889063', borderColor: '#354024' }}>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle size={32} style={{ color: '#354024' }} />
                <h3 className="text-2xl font-medium" style={{ color: '#1C1C1C' }}>Simple Situation</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-3 font-medium text-lg">If you are:</p>
              <ul className="space-y-2 mb-4 text-lg" style={{ color: '#1C1C1C' }}>
                <li>• Single</li>
                <li>• Working one job</li>
                <li>• No dependents</li>
                <li>• Not married</li>
                <li>• No complicated tax situation</li>
              </ul>
              <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="font-medium text-lg">Your W-4 is usually very simple.</p>
              </div>
            </div>

            {/* Complex Situation */}
            <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#FFCFD0' }}>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle size={32} style={{ color: '#FFCFD0' }} />
                <h3 className="text-2xl font-medium" style={{ color: '#E5D7C4' }}>Pay Attention If</h3>
              </div>
              <p style={{ color: '#E5D7C4' }} className="mb-3 font-medium text-lg">But if you have:</p>
              <ul className="space-y-2 mb-4 text-lg" style={{ color: '#E5D7C4' }}>
                <li>• Two jobs</li>
                <li>• A side hustle</li>
                <li>• Parents who claim you as a dependent</li>
                <li>• Multiple income sources</li>
              </ul>
              <div className="p-5 rounded" style={{ backgroundColor: '#FFCFD0' }}>
                <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">You need to pay attention, because withholding can get confusing fast.</p>
              </div>
            </div>
          </div>
        </div>

        {/* W-4 Sections Walkthrough */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-medium" style={{ color: '#1C1C1C' }}>Walkthrough of the W-4 sections</h2>

          {/* Step 1 */}
          <div className="mb-8 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
            <div className="flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-medium" style={{ backgroundColor: '#354024', color: '#E5D7C4' }}>
                1
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <User size={32} style={{ color: '#354024' }} />
                  <h3 className="text-2xl font-medium" style={{ color: '#1C1C1C' }}>Personal information (easy but important)</h3>
                </div>
                <p style={{ color: '#1C1C1C' }} className="mb-5 text-lg">You enter:</p>
                <div className="grid md:grid-cols-2 gap-3 mb-5">
                  <div className="p-4 rounded" style={{ backgroundColor: '#E5D7C4' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Name</p>
                  </div>
                  <div className="p-4 rounded" style={{ backgroundColor: '#E5D7C4' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Address</p>
                  </div>
                  <div className="p-4 rounded" style={{ backgroundColor: '#E5D7C4' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Social Security number</p>
                  </div>
                  <div className="p-4 rounded" style={{ backgroundColor: '#E5D7C4' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Filing status: Single, Married filing jointly, or Head of household</p>
                  </div>
                </div>

                {/* Filing Status Explanation */}
                <div className="p-6 rounded-lg mb-5" style={{ backgroundColor: '#354024' }}>
                  <h4 className="font-medium mb-4 text-xl" style={{ color: '#E5D7C4' }}>What is filing status and why it matters</h4>
                  <p style={{ color: '#E5D7C4' }} className="mb-3 text-lg">
                    Filing status affects how much tax is withheld.
                  </p>
                  <p style={{ color: '#E5D7C4' }} className="mb-3 text-lg">
                    If you choose Married filing jointly, withholding may be lower because the tax brackets differ.
                  </p>
                  <p style={{ color: '#E5D7C4' }} className="mb-3 text-lg">
                    If you choose Single, withholding is usually higher per paycheck compared to Married filing jointly.
                  </p>
                  <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">Most teens and young adults choose Single.</p>
                  </div>
                </div>

                {/* Head of Household */}
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#E5D7C4' }}>
                  <h4 className="font-medium mb-4 text-xl" style={{ color: '#1C1C1C' }}>Head of household</h4>
                  <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
                    Head of household is not just living on your own.
                  </p>
                  <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">It usually means you:</p>
                  <ul className="space-y-1 mb-3 text-lg" style={{ color: '#1C1C1C' }}>
                    <li>• Pay more than half the cost of keeping up a home</li>
                    <li>• Have a qualifying dependent living with you</li>
                  </ul>
                  <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
                    Most young people do not qualify.
                  </p>
                  <div className="p-4 rounded" style={{ backgroundColor: '#354024' }}>
                    <p style={{ color: '#E5D7C4' }} className="font-medium text-lg">If you are unsure, do not guess. Picking incorrectly can mess up withholding.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-8 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#FFCFD0' }}>
            <div className="flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-medium" style={{ backgroundColor: '#FFCFD0', color: '#1C1C1C' }}>
                2
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={32} style={{ color: '#FFCFD0' }} />
                  <h3 className="text-2xl font-medium" style={{ color: '#E5D7C4' }}>Multiple jobs or spouse works (this is where people mess up)</h3>
                </div>
                <p style={{ color: '#E5D7C4' }} className="mb-5 text-lg">This section matters if you have:</p>
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                  <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Two jobs at once</p>
                  </div>
                  <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">A spouse with income</p>
                  </div>
                  <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Multiple jobs in the household</p>
                  </div>
                </div>

                {/* Why It Matters */}
                <div className="p-6 rounded-lg mb-5" style={{ backgroundColor: '#FFCFD0' }}>
                  <h4 className="font-medium mb-4 text-xl" style={{ color: '#1C1C1C' }}>Why multiple jobs affects withholding</h4>
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                    Each employer withholds taxes as if that job is your only job.
                  </p>
                  <div className="p-5 rounded mb-4" style={{ backgroundColor: '#354024' }}>
                    <p style={{ color: '#E5D7C4' }} className="mb-2 font-medium text-lg">So if you have two jobs:</p>
                    <p style={{ color: '#E5D7C4' }} className="text-lg">Each job thinks you are lower income than you actually are total.</p>
                    <p style={{ color: '#E5D7C4' }} className="text-lg">That often means too little tax is withheld overall.</p>
                  </div>
                  <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
                    <p style={{ color: '#FFCFD0' }} className="font-medium text-lg">Result: You owe money at tax time.</p>
                  </div>
                </div>

                {/* What Form Asks */}
                <div className="p-6 rounded-lg mb-5" style={{ backgroundColor: '#889063' }}>
                  <h4 className="font-medium mb-4 text-xl" style={{ color: '#1C1C1C' }}>What the form asks you to do</h4>
                  <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">It gives you options like:</p>
                  <ul className="space-y-2 text-lg" style={{ color: '#1C1C1C' }}>
                    <li>• Use an online estimator tool</li>
                    <li>• Use a worksheet to adjust withholding</li>
                    <li>• Check a box if there are two jobs total and they pay similar amounts</li>
                  </ul>
                </div>

                {/* How to Handle */}
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#E5D7C4' }}>
                  <h4 className="font-medium mb-4 text-xl" style={{ color: '#1C1C1C' }}>How to handle this if you are a student or young worker</h4>
                  <div className="space-y-3">
                    <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
                      <p style={{ color: '#E5D7C4' }} className="mb-2 font-medium text-lg">If you have two part-time jobs:</p>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Expect that you may need extra withholding</p>
                      <p style={{ color: '#E5D7C4' }} className="text-lg">Or you may owe at tax time if withholding is too low</p>
                    </div>
                    <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                      <p style={{ color: '#1C1C1C' }} className="mb-2 font-medium text-lg">If you only have one job:</p>
                      <p style={{ color: '#1C1C1C' }} className="text-lg">You can usually skip this section.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-8 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
            <div className="flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-medium" style={{ backgroundColor: '#354024', color: '#E5D7C4' }}>
                3
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Users size={32} style={{ color: '#354024' }} />
                  <h3 className="text-2xl font-medium" style={{ color: '#1C1C1C' }}>Claim dependents (usually skip for teens)</h3>
                </div>
                <p style={{ color: '#1C1C1C' }} className="mb-5 text-lg">
                  This part is for people who can claim dependents on their tax return, like children.
                </p>
                <p style={{ color: '#1C1C1C' }} className="mb-5 text-lg">
                  Most teens and young adults do not claim dependents.
                </p>
                <div className="p-6 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-medium text-lg">
                    Do not claim dependents unless you actually qualify, because it reduces withholding and could cause you to owe later.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-8 p-8 rounded-lg border-4" style={{ backgroundColor: '#CFBB99', borderColor: '#354024' }}>
            <div className="flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-medium" style={{ backgroundColor: '#354024', color: '#E5D7C4' }}>
                4
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign size={32} style={{ color: '#354024' }} />
                  <h3 className="text-2xl font-medium" style={{ color: '#1C1C1C' }}>Other adjustments (this is the power section)</h3>
                </div>
                <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">This section has three common parts.</p>

                {/* 4(a) */}
                <div className="p-6 rounded-lg mb-5" style={{ backgroundColor: '#354024' }}>
                  <h4 className="font-medium mb-4 text-xl" style={{ color: '#E5D7C4' }}>4(a) Other income not from jobs</h4>
                  <p style={{ color: '#E5D7C4' }} className="mb-3 text-lg">This includes income like:</p>
                  <ul className="space-y-1 mb-4 text-lg" style={{ color: '#E5D7C4' }}>
                    <li>• Interest from savings</li>
                    <li>• Dividends from investments</li>
                    <li>• Some forms of side income</li>
                  </ul>
                  <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">
                    This is for people who want extra withholding because they have other taxable income.
                  </p>
                  <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">
                      If you have a small amount of interest income, you usually do not need to do anything here.
                    </p>
                    <p style={{ color: '#1C1C1C' }} className="mt-2 text-lg">
                      If you have significant side income, this is where you might adjust withholding.
                    </p>
                  </div>
                </div>

                {/* 4(b) */}
                <div className="p-6 rounded-lg mb-5" style={{ backgroundColor: '#889063' }}>
                  <h4 className="font-medium mb-4 text-xl" style={{ color: '#1C1C1C' }}>4(b) Deductions</h4>
                  <p style={{ color: '#1C1C1C' }} className="mb-3 text-lg">
                    Deductions reduce taxable income.
                  </p>
                  <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                    Most young people use the standard deduction, which means they do not itemize deductions.
                  </p>
                  <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
                    <p style={{ color: '#E5D7C4' }} className="text-lg">
                      If you do not know what itemizing is, skip this part.
                    </p>
                    <p style={{ color: '#E5D7C4' }} className="mt-2 font-medium text-lg">
                      If you are in a simple situation, you almost always leave this blank.
                    </p>
                  </div>
                </div>

                {/* 4(c) */}
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
                  <h4 className="font-medium mb-4 text-xl" style={{ color: '#889063' }}>4(c) Extra withholding</h4>
                  <p style={{ color: '#E5D7C4' }} className="mb-3 font-medium text-lg">
                    This is the most practical tool for young people.
                  </p>
                  <p style={{ color: '#E5D7C4' }} className="mb-5 text-lg">
                    If you are worried about owing taxes later, you can ask your employer to withhold an extra fixed amount from every paycheck.
                  </p>
                  <div className="p-5 rounded mb-5" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="mb-2 font-medium text-lg">Example:</p>
                    <p style={{ color: '#1C1C1C' }} className="text-lg">Extra $10 or $20 per paycheck.</p>
                  </div>
                  <p style={{ color: '#E5D7C4' }} className="mb-3 text-lg">This can help if you:</p>
                  <ul className="space-y-2 mb-5 text-lg" style={{ color: '#E5D7C4' }}>
                    <li>• Have two jobs</li>
                    <li>• Have side income</li>
                    <li>• Want to avoid owing taxes</li>
                  </ul>
                  <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                    <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">
                      This is one of the easiest ways to prevent surprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-8 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-medium" style={{ backgroundColor: '#354024', color: '#E5D7C4' }}>
                5
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Edit3 size={32} style={{ color: '#354024' }} />
                  <h3 className="text-2xl font-medium" style={{ color: '#1C1C1C' }}>Sign and date</h3>
                </div>
                <div className="p-6 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="font-medium text-lg">
                    No signature means the form is not valid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hard Parts Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-medium" style={{ color: '#1C1C1C' }}>The hardest parts and how to navigate them</h2>

          <div className="space-y-6">
            {/* Hard Part 1 */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle size={28} style={{ color: '#889063' }} className="flex-shrink-0" />
                <h3 className="text-xl font-medium" style={{ color: '#889063' }}>Hard part 1: Filing status confusion</h3>
              </div>
              <div className="space-y-3">
                <p style={{ color: '#E5D7C4' }} className="text-lg">If you are not married, choose Single.</p>
                <p style={{ color: '#E5D7C4' }} className="text-lg">If you are married, you can choose Married filing jointly, but know that withholding changes.</p>
                <p style={{ color: '#E5D7C4' }} className="text-lg">Head of household is special and not common for teens and young adults.</p>
                <div className="p-5 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">When in doubt, Single is the safest simple option.</p>
                </div>
              </div>
            </div>

            {/* Hard Part 2 */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle size={28} style={{ color: '#354024' }} className="flex-shrink-0" />
                <h3 className="text-xl font-medium" style={{ color: '#1C1C1C' }}>Hard part 2: Multiple jobs section</h3>
              </div>
              <div className="space-y-3">
                <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="mb-2 font-medium text-lg">If you have multiple jobs and do nothing:</p>
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Withholding is often too low.</p>
                </div>
                <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
                  <p style={{ color: '#1C1C1C' }} className="mb-2 font-medium text-lg">Practical way to handle it:</p>
                  <p style={{ color: '#1C1C1C' }} className="text-lg">Use the IRS withholding estimator online and adjust through extra withholding.</p>
                </div>
                <div className="p-5 rounded" style={{ backgroundColor: '#CFBB99' }}>
                  <p style={{ color: '#1C1C1C' }} className="mb-2 font-medium text-lg">If you cannot use the estimator:</p>
                  <p style={{ color: '#1C1C1C' }} className="text-lg">A simple safe approach is adding a small extra withholding amount.</p>
                  <p style={{ color: '#1C1C1C' }} className="text-lg">This is not perfect, but it reduces the chance of owing.</p>
                </div>
              </div>
            </div>

            {/* Hard Part 3 */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle size={28} style={{ color: '#354024' }} className="flex-shrink-0" />
                <h3 className="text-xl font-medium" style={{ color: '#1C1C1C' }}>Hard part 3: Being claimed as a dependent by parents</h3>
              </div>
              <div className="space-y-3">
                <p style={{ color: '#1C1C1C' }} className="text-lg">Many teens and college students are claimed as dependents.</p>
                <p style={{ color: '#1C1C1C' }} className="text-lg">This does not stop you from working or filing taxes.</p>
                <p style={{ color: '#1C1C1C' }} className="mb-2 text-lg">But it can affect:</p>
                <ul className="space-y-1 mb-3 text-lg" style={{ color: '#1C1C1C' }}>
                  <li>• Some credits</li>
                  <li>• How your tax return is filed</li>
                  <li>• Whether you receive certain benefits</li>
                </ul>
                <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="text-lg">
                    Your W-4 does not directly ask if your parents claim you, but your tax filing later will.
                  </p>
                  <p style={{ color: '#E5D7C4' }} className="mt-2 text-lg">
                    If your situation is dependent status, your W-4 can still be filled out normally for withholding.
                  </p>
                </div>
              </div>
            </div>

            {/* Hard Part 4 */}
            <div className="p-6 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#FFCFD0' }}>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle size={28} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
                <h3 className="text-xl font-medium" style={{ color: '#FFCFD0' }}>Hard part 4: Side hustle income</h3>
              </div>
              <p style={{ color: '#E5D7C4' }} className="mb-4 text-lg">If you earn money from:</p>
              <div className="grid md:grid-cols-2 gap-3 mb-5">
                <div className="p-4 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-lg">Babysitting</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-lg">Tutoring</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-lg">Selling things online</p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-lg">Content creation</p>
                </div>
                <div className="p-4 rounded md:col-span-2" style={{ backgroundColor: '#889063' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-lg">Freelance work</p>
                </div>
              </div>
              <p style={{ color: '#E5D7C4' }} className="mb-5 text-lg">
                That income might not have taxes withheld.
              </p>
              <p style={{ color: '#E5D7C4' }} className="mb-5 text-lg">
                That is where people get surprised at tax time.
              </p>
              <div className="p-6 rounded mb-5" style={{ backgroundColor: '#FFCFD0' }}>
                <p style={{ color: '#1C1C1C' }} className="mb-2 font-medium text-lg">Two options:</p>
                <p style={{ color: '#1C1C1C' }} className="text-lg">• Set aside money from side income</p>
                <p style={{ color: '#1C1C1C' }} className="text-lg">• Use extra withholding on your job paycheck</p>
              </div>
              <p style={{ color: '#E5D7C4' }} className="text-base">
                Later lessons will cover 1099 income and self-employment taxes in more depth.
              </p>
            </div>
          </div>
        </div>

        {/* How to Find Information */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-start gap-3 mb-5">
            <HelpCircle size={36} style={{ color: '#354024' }} className="flex-shrink-0" />
            <h2 className="text-3xl font-medium" style={{ color: '#1C1C1C' }}>How to find the information you need to fill it out</h2>
          </div>
          <p style={{ color: '#1C1C1C' }} className="mb-5 text-lg">When you are filling out a W-4, you may need:</p>
          <div className="space-y-3 mb-6">
            <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Your Social Security number</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Your job details from onboarding</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">A rough estimate of whether you will have another job</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="text-lg">Whether you expect any major other income</p>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="mb-5 text-lg">
            If you have multiple jobs, the estimator is helpful because it asks questions that match your real situation and tells you what to adjust.
          </p>
          <p style={{ color: '#1C1C1C' }} className="mb-5 text-lg">
            If you are unsure about something on the form, do not guess wildly. Use the simplest accurate option and adjust later.
          </p>
          <div className="p-6 rounded text-center" style={{ backgroundColor: '#E5D7C4' }}>
            <p style={{ color: '#1C1C1C' }} className="font-medium text-lg">
              The W-4 is not permanent. You can update it.
            </p>
          </div>
        </div>

        {/* What a Good W-4 Looks Like */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <h2 className="text-3xl mb-6 font-medium" style={{ color: '#E5D7C4' }}>What a good W-4 looks like for a typical teen or young adult</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Simple Scenario */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <h3 className="font-medium mb-3 text-xl" style={{ color: '#1C1C1C' }}>If you are:</h3>
              <ul className="space-y-2 mb-4 text-lg" style={{ color: '#1C1C1C' }}>
                <li>• Single</li>
                <li>• One job</li>
                <li>• No dependents</li>
                <li>• No major extra income</li>
              </ul>
              <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
                <p style={{ color: '#E5D7C4' }} className="mb-2 font-medium text-lg">Most of the time you:</p>
                <p style={{ color: '#E5D7C4' }} className="text-lg">Fill Step 1</p>
                <p style={{ color: '#E5D7C4' }} className="text-lg">Skip Steps 2 to 4</p>
                <p style={{ color: '#E5D7C4' }} className="text-lg">Sign Step 5</p>
                <p style={{ color: '#889063' }} className="mt-3 font-medium text-lg">That is it.</p>
              </div>
            </div>

            {/* Complex Scenario */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
              <h3 className="font-medium mb-3 text-xl" style={{ color: '#1C1C1C' }}>If you have two jobs or side income:</h3>
              <div className="space-y-3">
                <div className="p-5 rounded" style={{ backgroundColor: '#354024' }}>
                  <p style={{ color: '#E5D7C4' }} className="text-lg">Consider using Step 4(c) extra withholding</p>
                </div>
                <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
                  <p style={{ color: '#1C1C1C' }} className="text-lg">Or use the estimator and update your W-4 accordingly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <h2 className="text-3xl mb-6 font-medium" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Withholding:</strong> Taxes taken out of paychecks ahead of time</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Filing status:</strong> Category that affects taxes and withholding</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Dependent:</strong> Person you can claim on your tax return</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Standard deduction:</strong> Basic deduction most people use automatically</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Itemizing:</strong> Listing specific deductions instead of standard deduction</p>
            </div>
            <div className="p-5 rounded" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }} className="text-lg"><strong>Extra withholding:</strong> Additional taxes taken out per paycheck to avoid owing</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-medium" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-4 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <FileText size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>W-4 sets how much federal tax gets withheld</span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>It affects whether you get a refund or owe later</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Most people only need Step 1 and Step 5</span>
            </li>
            <li className="flex items-start gap-3">
              <Briefcase size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Multiple jobs and side income are the big complication</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Extra withholding is a simple fix for many situations</span>
            </li>
            <li className="flex items-start gap-3">
              <Edit3 size={22} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>You can update your W-4 anytime</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-medium" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
            <p className="mb-5 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What is the main purpose of the W-4?</strong>
            </p>
            <div className="space-y-3">
              {['A) To file your tax return', 'B) To choose your bank account for direct deposit', 'C) To tell your employer how much federal tax to withhold', 'D) To apply for a credit card'].map((option) => {
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
              <strong>2. Why do people with two jobs often owe money at tax time?</strong>
            </p>
            <div className="space-y-3">
              {['A) They are taxed twice', 'B) Each job withholds as if it is the only job, so total withholding can be too low', 'C) The IRS ignores their income', 'D) They do not have to pay taxes'].map((option) => {
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
              <strong>3. What is one simple way to reduce the chance of owing taxes later?</strong>
            </p>
            <div className="space-y-3">
              {['A) Never file taxes', 'B) Ask for extra withholding in Step 4(c)', 'C) Spend more money', 'D) Close your bank account'].map((option) => {
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
                  ? 'Perfect! You understand how to fill out a W-4 form.'
                  : 'Review the W-4 walkthrough above to better understand withholding.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/tax-essentials/lesson-2"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Understanding Your Paycheck
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/tax-essentials/lesson-4"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Tax Forms for Teens →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}