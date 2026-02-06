import { Link } from './RouterLink';
import { ArrowLeft, Smartphone, Calculator, TrendingUp, Bell, Lock, Shield, CheckCircle, AlertTriangle, Zap, DollarSign, PieChart, Target } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function FinancialPlanningLesson11Page() {
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
            to="/financial-planning" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Financial Planning
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-8 py-12">
        {/* Lesson Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#889063' }}>
              <Smartphone size={24} style={{ color: '#E5D7C4' }} />
            </div>
            <div>
              <p style={{ color: '#354024' }} className="text-sm mb-1">Lesson 11</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>Financial Planning Tools and Apps</h1>
            </div>
          </div>
          <p style={{ color: '#1C1C1C' }} className="opacity-70 text-lg">Time: ~20 to 25 minutes</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Smartphone size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>Technology makes managing money easier</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            The right financial tools and apps can automate tracking, simplify budgeting, remind you of bills, and help you reach your goals faster.
          </p>

          <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#889063' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-lg text-center">
              You don't need dozens of apps—just a few well-chosen tools that fit your needs and habits.
            </p>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              This lesson introduces the best types of financial tools and how to choose what works for you.
            </p>
          </div>
        </div>

        {/* Why Use Financial Tools */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Zap size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Why use financial tools and apps?</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Digital tools offer several advantages over manual tracking:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Automation</p>
                <p style={{ color: '#E5D7C4' }}>Automatically track spending, categorize transactions, and update balances</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Real-time insights</p>
                <p style={{ color: '#E5D7C4' }}>See where your money is going instantly, not weeks later</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Reminders and alerts</p>
                <p style={{ color: '#E5D7C4' }}>Get notified about bills, low balances, unusual spending, and goals</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Visual reports</p>
                <p style={{ color: '#E5D7C4' }}>Charts and graphs make it easy to understand your financial patterns</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <CheckCircle size={24} style={{ color: '#889063' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Goal tracking</p>
                <p style={{ color: '#E5D7C4' }}>Monitor progress toward savings, debt payoff, and other financial goals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Financial Tools */}
        <div className="mb-12">
          <h2 className="text-4xl mb-8 text-center font-bold" style={{ color: '#1C1C1C' }}>Types of financial tools</h2>
          
          <div className="space-y-6">
            {/* Budgeting Apps */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <PieChart size={32} style={{ color: '#354024' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>1. Budgeting apps</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Track income, expenses, and spending by category. Help you stick to your budget.
              </p>
              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-3">Popular examples:</p>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• YNAB (You Need A Budget) - Zero-based budgeting approach</li>
                  <li>• Mint - Free app with automatic categorization</li>
                  <li>• EveryDollar - Simple budgeting with optional bank sync</li>
                  <li>• PocketGuard - Shows "in your pocket" after bills and goals</li>
                </ul>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Best for: Creating and following monthly budgets</p>
              </div>
            </div>

            {/* Expense Trackers */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign size={32} style={{ color: '#354024' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>2. Expense tracking apps</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Record every purchase and see spending patterns over time.
              </p>
              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-3">Popular examples:</p>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• Expensify - Great for receipts and business expenses</li>
                  <li>• Wally - Manual entry with visual reports</li>
                  <li>• Spendee - Shared wallets and group expenses</li>
                  <li>• Goodbudget - Envelope budgeting system</li>
                </ul>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Best for: Understanding where money goes day-to-day</p>
              </div>
            </div>

            {/* Savings and Goal Apps */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <Target size={32} style={{ color: '#354024' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>3. Savings and goal apps</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Automate savings, round up purchases, and track progress toward specific goals.
              </p>
              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-3">Popular examples:</p>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• Qapital - Rule-based automatic savings</li>
                  <li>• Digit - Analyzes spending and saves small amounts automatically</li>
                  <li>• Chime - Round-ups and automatic savings transfers</li>
                  <li>• Acorns - Invests spare change from purchases</li>
                </ul>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Best for: Building savings without thinking about it</p>
              </div>
            </div>

            {/* Investment Trackers */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp size={32} style={{ color: '#354024' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>4. Investment tracking apps</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Monitor investment accounts, track portfolio performance, and analyze returns.
              </p>
              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-3">Popular examples:</p>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• Personal Capital - Complete financial dashboard with investment tools</li>
                  <li>• SigFig - Portfolio analysis and investment advice</li>
                  <li>• Sharesight - Track stocks, dividends, and capital gains</li>
                  <li>• Yahoo Finance - Free portfolio tracking and research</li>
                </ul>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Best for: Managing and monitoring investment portfolios</p>
              </div>
            </div>

            {/* Bill Reminders */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <Bell size={32} style={{ color: '#354024' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>5. Bill reminder and payment apps</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Track due dates, schedule payments, and avoid late fees.
              </p>
              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-3">Popular examples:</p>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• Prism - Track and pay all bills in one place</li>
                  <li>• BillTracker - Simple reminders for recurring bills</li>
                  <li>• Truebill (now Rocket Money) - Find subscriptions and negotiate bills</li>
                  <li>• Your bank's app - Most offer bill pay and reminders</li>
                </ul>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Best for: Never missing a payment deadline</p>
              </div>
            </div>

            {/* Financial Calculators */}
            <div className="p-8 rounded-lg border-4" style={{ backgroundColor: '#E5D7C4', borderColor: '#889063' }}>
              <div className="flex items-center gap-3 mb-4">
                <Calculator size={32} style={{ color: '#354024' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#1C1C1C' }}>6. Financial calculators</h3>
              </div>
              <p style={{ color: '#1C1C1C' }} className="mb-4 text-lg">
                Calculate loan payments, compound interest, retirement needs, and more.
              </p>
              <div className="p-6 rounded-lg mb-4" style={{ backgroundColor: '#889063' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold mb-3">Useful calculator types:</p>
                <ul style={{ color: '#1C1C1C' }} className="space-y-2">
                  <li>• Loan payment calculators (auto, student, mortgage)</li>
                  <li>• Compound interest and savings growth calculators</li>
                  <li>• Retirement savings calculators</li>
                  <li>• Debt payoff calculators (snowball/avalanche)</li>
                  <li>• Tax withholding and refund estimators</li>
                </ul>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#CFBB99' }}>
                <p style={{ color: '#1C1C1C' }} className="font-bold">Best for: Planning major financial decisions and goals</p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Choose */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#354024', borderColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle size={36} style={{ color: '#889063' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#E5D7C4' }}>How to choose the right tools</h2>
          </div>

          <p style={{ color: '#E5D7C4' }} className="mb-6 text-lg">
            Not every app is right for every person. Consider these factors:
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">1. What do you need help with?</p>
              <p style={{ color: '#1C1C1C' }}>Identify your biggest financial challenge: sticking to a budget? saving money? tracking investments?</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">2. How much effort do you want to put in?</p>
              <p style={{ color: '#1C1C1C' }}>Some apps are fully automated, others require manual entry. Choose what matches your habits.</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">3. What's your budget?</p>
              <p style={{ color: '#1C1C1C' }}>Many apps are free with basic features. Premium versions cost $5-15/month.</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">4. Do you need bank integration?</p>
              <p style={{ color: '#1C1C1C' }}>Automatic syncing is convenient but not everyone is comfortable linking accounts.</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#889063' }}>
              <p style={{ color: '#1C1C1C' }} className="font-bold mb-2 text-lg">5. What features matter most?</p>
              <p style={{ color: '#1C1C1C' }}>Reports? Goal tracking? Bill reminders? Pick apps that excel at what you need.</p>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#CFBB99' }}>
            <p style={{ color: '#1C1C1C' }} className="font-bold text-xl">
              Start with one or two tools. You can always add more as your needs evolve.
            </p>
          </div>
        </div>

        {/* Security Considerations */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Security and privacy considerations</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            When you connect financial apps to your bank accounts, security matters.
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <Lock size={24} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Use apps with strong encryption</p>
                <p style={{ color: '#E5D7C4' }}>Look for bank-level 256-bit encryption and read-only access to accounts</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <Lock size={24} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Enable two-factor authentication</p>
                <p style={{ color: '#E5D7C4' }}>Add an extra layer of security to prevent unauthorized access</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <Lock size={24} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Use strong, unique passwords</p>
                <p style={{ color: '#E5D7C4' }}>Never reuse passwords across financial apps</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <Lock size={24} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Read privacy policies</p>
                <p style={{ color: '#E5D7C4' }}>Understand how your data is used and whether it's sold to third parties</p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#354024' }}>
              <Lock size={24} style={{ color: '#FFCFD0' }} className="flex-shrink-0" />
              <div>
                <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Monitor account activity</p>
                <p style={{ color: '#E5D7C4' }}>Regularly check for suspicious transactions or unauthorized access</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#354024' }}>
            <p style={{ color: '#E5D7C4' }} className="font-bold text-lg">
              If you're uncomfortable linking bank accounts, choose manual-entry apps instead.
            </p>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#889063' }}>
          <div className="flex items-center gap-3 mb-6">
            <Zap size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Getting started with financial tools</h2>
          </div>

          <p style={{ color: '#1C1C1C' }} className="mb-6 text-lg">
            Follow this simple process to start using financial apps effectively:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold text-xl">1</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Identify your main goal</p>
                  <p style={{ color: '#E5D7C4' }}>Example: "I want to stop overspending" or "I need to save $3,000"</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold text-xl">2</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Research 2-3 apps for that goal</p>
                  <p style={{ color: '#E5D7C4' }}>Read reviews, watch tutorials, check features and pricing</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold text-xl">3</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Try free trials</p>
                  <p style={{ color: '#E5D7C4' }}>Most apps offer free versions or trial periods—test before committing</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold text-xl">4</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Set up notifications</p>
                  <p style={{ color: '#E5D7C4' }}>Enable alerts for bills, overspending, goals, and important updates</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#889063' }}>
                  <span style={{ color: '#354024' }} className="font-bold text-xl">5</span>
                </div>
                <div>
                  <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Check in regularly</p>
                  <p style={{ color: '#E5D7C4' }}>Review your app at least weekly to stay on track</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-12 p-8 rounded-lg border-4" style={{ backgroundColor: '#FFCFD0', borderColor: '#1C1C1C' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={36} style={{ color: '#1C1C1C' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Common mistakes to avoid</h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Downloading too many apps</p>
              <p style={{ color: '#E5D7C4' }}>More apps = more complexity. Stick to 1-3 tools that cover your main needs.</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Setting up and forgetting</p>
              <p style={{ color: '#E5D7C4' }}>Apps only help if you use them regularly. Build a habit of checking in.</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Ignoring security</p>
              <p style={{ color: '#E5D7C4' }}>Always enable two-factor authentication and use strong passwords.</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Paying for features you don't use</p>
              <p style={{ color: '#E5D7C4' }}>Start with free versions. Only upgrade if you need premium features.</p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#354024' }}>
              <p style={{ color: '#E5D7C4' }} className="font-bold mb-2 text-lg">Relying only on automation</p>
              <p style={{ color: '#E5D7C4' }}>Technology helps, but you still need to make conscious financial decisions.</p>
            </div>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Key vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Automation:</strong> Technology handling tasks without manual input</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Bank sync:</strong> Automatic connection between app and bank account</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Two-factor authentication:</strong> Extra security layer requiring two verifications</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Encryption:</strong> Security that protects data from unauthorized access</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Read-only access:</strong> App can view but not move your money</p>
            </div>
            <div className="p-4 rounded text-lg" style={{ backgroundColor: '#E5D7C4' }}>
              <p style={{ color: '#1C1C1C' }}><strong>Round-up:</strong> Rounding purchases to nearest dollar and saving difference</p>
            </div>
          </div>
        </div>

        {/* Quick Recap */}
        <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: '#354024' }}>
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#E5D7C4' }}>Quick recap</h2>
          <ul className="space-y-3 text-lg" style={{ color: '#E5D7C4' }}>
            <li className="flex items-start gap-3">
              <Smartphone size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Financial tools automate tracking, provide insights, and help you reach goals</span>
            </li>
            <li className="flex items-start gap-3">
              <PieChart size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Main tool types: budgeting, expense tracking, savings, investment, bill reminders, calculators</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Choose tools based on your specific needs and habits</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Prioritize security: encryption, two-factor auth, strong passwords</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Start with 1-3 tools and check in regularly to stay effective</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle size={20} style={{ color: '#889063' }} className="flex-shrink-0 mt-0.5" />
              <span>Avoid downloading too many apps or relying only on automation</span>
            </li>
          </ul>
        </div>

        {/* Quick Check Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 font-bold" style={{ color: '#1C1C1C' }}>Quick Check</h2>
          
          {/* Question 1 */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#CFBB99' }}>
            <p className="mb-4 text-lg" style={{ color: '#1C1C1C' }}>
              <strong>1. What is the main advantage of using financial apps?</strong>
            </p>
            <div className="space-y-3">
              {['A) They make you rich quickly', 'B) They automate tracking and provide real-time insights', 'C) They eliminate the need for budgets', 'D) They guarantee savings'].map((option) => {
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
              <strong>2. What is the most important security feature to enable on financial apps?</strong>
            </p>
            <div className="space-y-3">
              {['A) Push notifications', 'B) Dark mode', 'C) Two-factor authentication', 'D) Automatic updates'].map((option) => {
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
              <strong>3. How many financial apps should you start with?</strong>
            </p>
            <div className="space-y-3">
              {['A) As many as possible', 'B) 1-3 tools that cover your main needs', 'C) At least 10 different apps', 'D) None, apps are not helpful'].map((option) => {
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
                  ? 'Excellent! You understand how to use financial tools effectively and securely.'
                  : 'Review the sections above to learn more about choosing and using financial apps safely.'}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t-2" style={{ borderColor: '#889063' }}>
          <div className="text-left">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Previous Lesson</p>
            <Link
              to="/financial-planning/lesson-10"
              onClick={scrollToTop}
              className="inline-block bg-[#889063] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              ← Making Big Financial Decisions
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[#354024] text-sm mb-3 opacity-70">Next Lesson</p>
            <Link
              to="/financial-planning/lesson-12"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg"
            >
              Building a Long-Term Financial Plan →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
