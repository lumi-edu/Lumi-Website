import { Link } from './RouterLink';
import Footer from './Footer';
import BudgetCalculator503020 from './BudgetCalculator503020';
import lumiLogo from '../assets/lumilogo.png';

export default function BudgetCalculatorPage() {
  // Note: We removed useLocation since we're not using React Router
  // const location = useLocation();
  // const fromResources = location.state?.fromResources || false;

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

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-lg text-[#354024] opacity-70">Resources</p>
          <h1 className="mt-2 text-5xl md:text-6xl text-[#1C1C1C]" style={{ letterSpacing: '-0.1px' }}>
            Budget Calculator
          </h1>
          <p className="mt-3 text-lg text-[#1C1C1C] opacity-80">
            Use this calculator to see how the 50/30/20 method applies to your income.
            You can switch between weekly and monthly to match how you get paid.
          </p>
        </div>

        <div className="mt-10">
          <BudgetCalculator503020 />
        </div>

        <div className="mt-10 rounded-3xl border border-[#354024]/20 bg-[#CFBB99]/30 p-6">
          <h2 className="text-xl text-[#354024]">Quick note</h2>
          <p className="mt-2 text-lg text-[#1C1C1C] opacity-80">
            The 50/30/20 method is a starting point, not a rule. If your essentials are higher,
            adjust the percentages to fit your real life.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}