import { Link } from './RouterLink';
import Footer from './Footer';
import SavingsChallengeTracker from './SavingsChallengeTracker';

export default function SavingsChallengePage() {
  // Note: We removed useLocation since we're not using React Router
  // const location = useLocation();
  // const fromResources = location.state?.fromResources || false;
  const fromResources = false; // Default to false

  return (
    <div className="min-h-screen bg-[#f1f0e2]">
      {/* Header */}
      <div className="sticky top-0 z-50 border-t-[16px] border-[#464A39]">
        <header className="bg-[#C2CBB2] px-6 py-6 md:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl font-semibold text-[#464A39]">
              <Link to="/" className="hover:opacity-70 transition-opacity">lumi</Link>
              <span>&gt;</span>
              {fromResources ? (
                <>
                  <Link to="/resources" className="hover:opacity-70 transition-opacity">resources</Link>
                  <span>&gt;</span>
                  <span>30 day saving challenge</span>
                </>
              ) : (
                <>
                  <Link to="/learn" className="hover:opacity-70 transition-opacity">learn</Link>
                  <span>&gt;</span>
                  <span>30-Day Savings Challenge</span>
                </>
              )}
            </div>
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