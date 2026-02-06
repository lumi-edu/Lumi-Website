import { Link } from './RouterLink';
import { ArrowLeft } from 'lucide-react';
import CreditScoreSimulator from './CreditScoreSimulator';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function CreditScoreSimulatorPage() {
  // Note: We removed useLocation since we're not using React Router
  // const location = useLocation();
  // const fromResources = location.state?.fromResources || false;
  const fromResources = false; // Default to false

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
        <div className="max-w-7xl mx-auto">
          <Link 
            to={fromResources ? "/resources" : "/credit-debt"}
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            {fromResources ? "Back to Resources" : "Back to Credit and Debt"}
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <CreditScoreSimulator />
        </div>
      </section>

      {/* Educational Context */}
      <section className="px-6 py-12 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
            Understanding credit scores
          </h2>
          <div className="space-y-6 text-lg text-[#1C1C1C] opacity-80" style={{ letterSpacing: '-0.89px' }}>
            <p>
              Your credit score is a three-digit number that represents how trustworthy you are with borrowed money. 
              It typically ranges from 300 to 850, with higher scores indicating better credit health.
            </p>
            <p>
              This simulator helps you understand the five main factors that influence your credit score and how 
              different behaviors impact each factor. While this is an educational model and not your actual credit 
              score, it accurately reflects the principles used by major credit scoring models like FICO and VantageScore.
            </p>
            <div className="bg-[#FFCFD0]/30 rounded-xl p-6 border-2 border-[#FFCFD0]/50">
              <h3 className="text-xl text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>
                Important note
              </h3>
              <p className="text-[#1C1C1C] opacity-80">
                This tool is for educational purposes only. To see your actual credit score, you can check with 
                your bank, credit card company, or use free services like Credit Karma or AnnualCreditReport.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Lessons */}
      <section className="px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-[#1C1C1C] mb-6" style={{ letterSpacing: '-0.89px' }}>
            Learn more about credit
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/credit-debt/lesson-3"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#889063] block group"
            >
              <h3 className="text-xl text-[#1C1C1C] mb-3 group-hover:text-[#354024] transition-colors" style={{ letterSpacing: '-0.89px' }}>
                Understanding Your Credit Score
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-4" style={{ letterSpacing: '-0.89px' }}>
                Learn what credit scores measure, how they are calculated, and why they matter for loans, apartments, and financial opportunities.
              </p>
              <span className="text-[#354024] font-semibold">Start lesson →</span>
            </Link>
            <Link 
              to="/credit-debt/lesson-4"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#889063] block group"
            >
              <h3 className="text-xl text-[#1C1C1C] mb-3 group-hover:text-[#354024] transition-colors" style={{ letterSpacing: '-0.89px' }}>
                Building Credit Responsibly
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-70 mb-4" style={{ letterSpacing: '-0.89px' }}>
                Recognize smart ways to build credit early including paying on time, keeping balances low, and avoiding unnecessary credit applications.
              </p>
              <span className="text-[#354024] font-semibold">Start lesson →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}