import { Link } from './RouterLink';
import Footer from './Footer';
import SavingsChallengeTracker from './SavingsChallengeTracker';
import lumiLogo from "../assets/lumilogo.png";

export default function SavingsChallengePage() {
  // Note: We removed useLocation since we're not using React Router
  // const location = useLocation();
  // const fromResources = location.state?.fromResources || false;
  const fromResources = false; // Default to false

  return (
    <div className="min-h-screen bg-[#E5D7C4]">
      {/* Header (match HomePage) */}
      <div className="sticky top-0 z-50 border-t-[16px] border-[#354024]">
        <header className="bg-[#889063] px-6 py-6 md:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <img src={lumiLogo} alt="lumi" className="h-6 md:h-8 md:-ml-7" style={{ mixBlendMode: 'multiply' }} />
            <nav className="flex gap-4 md:gap-8">
              <Link to="/learn" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                learn
              </Link>
              <Link to="/resources" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                resources
              </Link>
              <Link to="/blog" className="text-base md:text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                blog
              </Link>
            </nav>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#464A39] opacity-70">Resources</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#464A39]">
            30-Day Savings Challenge
          </h1>
          <p className="mt-3 text-[#464A39] opacity-80">
            Tap a day to complete it, build a streak, and save a little at a time.
            Your progress saves automatically on this device.
          </p>
        </div>

        <div className="mt-10">
          <SavingsChallengeTracker />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}