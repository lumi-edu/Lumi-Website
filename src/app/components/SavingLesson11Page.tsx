import { Link } from './RouterLink';
import { Instagram, Linkedin, ArrowLeft, Clock, BarChart3, Target, TrendingUp, Award } from 'lucide-react';
import SavingsChallengeTracker from '@/app/components/SavingsChallengeTracker';

export default function SavingLesson11Page() {
  return (
    <div className="min-h-screen bg-[#f1f0e2]">
      {/* Header */}
      <div className="border-t-[16px] border-[#464A39]">
        <header className="bg-[#C2CBB2] px-6 py-6 md:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl font-semibold text-[#464A39]">
              <Link to="/" className="hover:opacity-70 transition-opacity">lumi</Link>
              <span>&gt;</span>
              <Link to="/learn" className="hover:opacity-70 transition-opacity">learn</Link>
              <span>&gt;</span>
              <Link to="/learn/saving-strategies" className="hover:opacity-70 transition-opacity">saving strategies</Link>
              <span>&gt;</span>
              <span>30-day challenge</span>
            </div>
            <nav className="flex gap-8">
              <Link to="/learn" className="text-[#464A39] hover:opacity-70 transition-opacity">
                learn
              </Link>
              <Link to="/blog" className="text-[#464A39] hover:opacity-70 transition-opacity">
                blog
              </Link>
              <a href="#contact" className="text-[#464A39] hover:opacity-70 transition-opacity">
                contact
              </a>
            </nav>
          </div>
        </header>
      </div>

      {/* Back Button */}
      <div className="px-6 py-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/learn/saving-strategies" 
            className="inline-flex items-center gap-2 text-[#464A39] hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Lesson Map
          </Link>
        </div>
      </div>

      {/* Lesson Header */}
      <section className="px-6 pb-8 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 flex items-center gap-4 text-sm text-[#464A39] opacity-70">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>30 days</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>All Levels</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#464A39] mb-4">
            30-Day Savings Challenge
          </h1>
          <p className="text-lg text-[#464A39] opacity-80">
            Module: Saving Strategies • Interactive Challenge
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#1BB3D1] to-[#1BB3D1]/80 text-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-16 h-16" />
              <h2 className="text-3xl font-bold">
                Build a saving habit one day at a time
              </h2>
            </div>
            <p className="text-lg text-white/90">
              This challenge helps you develop consistent saving habits through daily actions. Each day has a simple task designed to reinforce saving behaviors without overwhelming you.
            </p>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#464A39] mb-6">How the challenge works:</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1BB3D1] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-[#464A39] mb-1">Choose your difficulty level</h3>
                  <p className="text-[#464A39] opacity-80">
                    Start with Lite for gentle habit-building, Standard for balanced progress, or Boost for accelerated savings.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1BB3D1] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-[#464A39] mb-1">Complete daily challenges</h3>
                  <p className="text-[#464A39] opacity-80">
                    Each day presents a simple saving action. Tap the card to mark it complete when done.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1BB3D1] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-[#464A39] mb-1">Track your progress</h3>
                  <p className="text-[#464A39] opacity-80">
                    Watch your completion percentage grow, build streaks, and hit milestones at 7, 15, 21, and 30 days.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1BB3D1] text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-[#464A39] mb-1">Stay flexible</h3>
                  <p className="text-[#464A39] opacity-80">
                    Miss a day? Keep going. Change difficulty anytime. The goal is progress, not perfection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <TrendingUp className="w-10 h-10 text-[#1BB3D1] mb-4" />
              <h3 className="text-lg font-bold text-[#464A39] mb-2">Build momentum</h3>
              <p className="text-[#464A39] opacity-80">
                Small daily actions create lasting habits that compound over time.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Target className="w-10 h-10 text-[#1BB3D1] mb-4" />
              <h3 className="text-lg font-bold text-[#464A39] mb-2">Stay accountable</h3>
              <p className="text-[#464A39] opacity-80">
                Visual progress tracking keeps you motivated and on track.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Award className="w-10 h-10 text-[#1BB3D1] mb-4" />
              <h3 className="text-lg font-bold text-[#464A39] mb-2">See real results</h3>
              <p className="text-[#464A39] opacity-80">
                Even small saves add up to meaningful financial progress.
              </p>
            </div>
          </div>

          {/* The Challenge Tracker */}
          <div>
            <SavingsChallengeTracker />
          </div>

          {/* Tips for Success */}
          <div className="bg-[#C2CBB2]/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#464A39] mb-6">Tips for success:</h2>
            <ul className="space-y-3 text-[#464A39]">
              <li className="flex items-start gap-3">
                <span className="text-[#1BB3D1] font-bold">•</span>
                <span>Start with Lite if you are new to saving or working with a tight budget.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1BB3D1] font-bold">•</span>
                <span>Check the challenge daily, ideally at the same time each day.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1BB3D1] font-bold">•</span>
                <span>It is okay to skip the dollar amount and just do the action.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1BB3D1] font-bold">•</span>
                <span>If you miss multiple days, do not restart. Pick up where you left off.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1BB3D1] font-bold">•</span>
                <span>After 30 days, repeat the challenge or create your own custom version.</span>
              </li>
            </ul>
          </div>

          {/* Completion Message */}
          <div className="bg-gradient-to-r from-[#464A39] to-[#464A39]/90 text-white rounded-lg p-8 text-center">
            <Award className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Ready to start your saving journey?
            </h2>
            <p className="text-white/90 text-lg">
              Scroll up, choose your difficulty, and mark Day 1 complete. You have got this.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-[#464A39]/20">
            <Link
              to="/learn/saving-strategies/lesson-10"
              className="inline-flex items-center gap-2 text-[#464A39] hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous Lesson
            </Link>
            
            <Link
              to="/learn/saving-strategies"
              className="bg-[#464A39] text-[#f1f0e2] px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Back to Module
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f1f0e2] text-[#464A39] px-6 py-16 md:px-12 border-t border-[#464A39]/20 mt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_auto] gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">lumi</h3>
            <p className="text-[#464A39] opacity-80 mb-8 max-w-md">
              illuminating the path to financial confidence and wealth for the next generation.
            </p>
            <div className="flex gap-4">
              <a href="#instagram" className="text-[#464A39] hover:opacity-70 transition-opacity">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#linkedin" className="text-[#464A39] hover:opacity-70 transition-opacity">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-semibold mb-4">Learn more</h4>
              <div className="flex flex-col gap-3">
                <Link to="/blog" className="hover:opacity-70 transition-opacity">
                  Blog
                </Link>
                <a href="#get-involved" className="hover:opacity-70 transition-opacity">
                  Get Involved
                </a>
                <a href="#customer-stories" className="hover:opacity-70 transition-opacity">
                  Customer stories
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="flex flex-col gap-3">
                <a href="#contact" className="hover:opacity-70 transition-opacity">
                  Contact
                </a>
                <Link to="/legal" className="hover:opacity-70 transition-opacity">
                  Legal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}