import { Link } from './RouterLink';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import heroTitle from 'figma:asset/53923c95d7ada26d1c087283760beb15c309363e.png';
import Footer from './Footer';
import { Users, Target, GraduationCap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#E5D7C4]">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="px-6 pb-6 md:px-12 md:pb-16 mt-12 md:-mt-10">
        <div className="max-w-7xl mx-auto">
          <div>
            <img src={heroTitle} alt="illuminate Your Future" className="w-full mb-3 md:mb-1 -ml-3 md:-ml-6" style={{ mixBlendMode: 'darken' }} />
            <p className="text-xl md:text-3xl text-[#1C1C1C] mb-6 md:mb-8 opacity-80">
              Start your financial literacy journey and education today
            </p>
            <Link to="/learn">
              <button className="bg-[#354024] text-[#FFCFD0] px-10 py-5 text-xl md:text-2xl rounded hover:opacity-90 transition-opacity w-full md:w-auto">
                Start Learning
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#354024] px-6 py-12 md:py-20 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl md:text-6xl text-[#FFCFD0] mb-4 md:mb-6" style={{ letterSpacing: '-0.1px' }}>
            Lighting the Path to Financial Confidence
          </h2>
          <p className="text-lg md:text-xl text-[#FFCFD0] opacity-90">
            lumi equips teams with real-world money skills like budgeting, saving, investing, and credit so they can build 
            secure, independent futures.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-12 md:py-20 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Feature 1 */}
          <div>
            <div className="mb-4 md:mb-6">
              <Users className="w-12 h-12 md:w-16 md:h-16 text-[#354024]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl mb-3 text-[#1C1C1C]">
              Teen-Focused Curriculum
            </h3>
            <p className="text-base md:text-lg text-[#1C1C1C] opacity-70">
              Our teen-focused curriculum breaks down real financial skills in a way that's practical, relatable, and actually useful in everyday life.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="mb-4 md:mb-6">
              <Target className="w-12 h-12 md:w-16 md:h-16 text-[#354024]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl md:text-2xl text-[#1C1C1C] mb-3">
              Practical, Real-World Skills
            </h3>
            <p className="text-base md:text-lg text-[#1C1C1C] opacity-70">
              We focus on the money skills teens actually use, from budgeting and saving to taxes, credit, and planning for real life.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="mb-4 md:mb-6">
              <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-[#354024]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl md:text-2xl text-[#1C1C1C] mb-3">
              Accessible Education
            </h3>
            <p className="text-base md:text-lg text-[#1C1C1C] opacity-70">
              Financial education that's easy to understand, approachable, and built for learners at every starting point.
            </p>
          </div>
        </div>
      </section>

      {/* Bridge Section */}
      <section className="bg-[#354024] px-6 py-16 md:py-24 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-6xl text-[#FFCFD0] mb-8 md:mb-10">
            Learn Through Interactive Resources
          </h2>
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-end">
            <p className="text-base md:text-xl text-[#FFCFD0] opacity-90 leading-relaxed">
              lumi offers different resources such as guides, calculators, templates, and so much more. We want our lessons to be impactful and memorable, and set you up with what you need to be financially literate. Explore these today and immerse yourself in the knowledge needed to navigate financial decisions.
            </p>
            <div>
              <Link to="/resources">
                <button className="bg-[#FFCFD0] text-[#354024] px-10 py-5 text-lg md:text-xl rounded hover:opacity-90 transition-opacity w-full font-medium">
                  Explore Our Resources
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="bg-[#E5D7C4] px-6 py-16 md:py-24 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-6xl text-[#1C1C1C] mb-8 md:mb-10">
            Empowering the Next Generation
          </h2>
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-end">
            <p className="text-base md:text-xl text-[#1C1C1C] opacity-80 leading-relaxed">
              Real money questions, real-life situations, and clear answers, written for teens navigating financial independence for the first time. Our blog breaks down real money topics teens and young adults face, from first paychecks to long-term planning, in a way that's practical, honest, and easy to understand.
            </p>
            <div>
              <Link to="/blog">
                <button className="bg-[#354024] text-[#FFCFD0] px-10 py-5 text-lg md:text-xl rounded hover:opacity-90 transition-opacity w-full font-medium">
                  Explore Our Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}