import { Link } from './RouterLink';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';
import { Instagram, Linkedin, Video, Users, Megaphone, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export default function GetInvolvedPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      description: 'Quick tips, mini lessons, and new post updates',
      url: 'https://www.instagram.com/lumi_finance/',
      color: '#FFCFD0'
    },
    {
      name: 'TikTok',
      icon: Video,
      description: 'Short videos that break down real money topics fast',
      url: '#',
      color: '#889063'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      description: 'Opportunities, partnerships, events, and program updates',
      url: '#',
      color: '#354024'
    }
  ];

  const opportunities = [
    {
      title: 'Ambassador and Leadership Opportunities',
      description: 'Lead lumi initiatives at your school and help spread financial literacy to your peers.',
      icon: Users
    },
    {
      title: 'Volunteer and Content Creation Roles',
      description: 'Contribute to lesson development, write blog posts, or create educational content for the community.',
      icon: Megaphone
    },
    {
      title: 'Workshops, Challenges, and Community Projects',
      description: 'Participate in interactive events, savings challenges, and collaborative learning experiences.',
      icon: Sparkles
    },
    {
      title: 'New Tools, Templates, and Curriculum Drops',
      description: 'Be the first to access new calculators, resources, and learning modules as they launch.',
      icon: BookOpen
    }
  ];

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

      {/* Hero Section */}
      <div className="bg-[#354024] text-white px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-[#FFCFD0] mb-6" style={{ letterSpacing: '-0.89px' }}>
            Become an Illuminator
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
            lumi is building a community of students who want to get ahead in finance and help others do the same. The easiest way to stay connected is through our socials, where we share new lessons, resources, announcements, and opportunities.
          </p>
        </div>
      </div>

      {/* Follow Us Section */}
      <section className="px-6 py-16 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#354024] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
            Follow Us
          </h2>
          <p className="text-xl text-[#1C1C1C] opacity-80 text-center mb-12 max-w-3xl mx-auto" style={{ letterSpacing: '-0.89px' }}>
            Connect with us on social media to stay updated with the latest lessons, tips, and opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {socialPlatforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border-2 border-[#354024] group"
                >
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: platform.color }}
                    >
                      <IconComponent className="w-8 h-8" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl text-[#1C1C1C] mb-3 group-hover:text-[#354024] transition-colors" style={{ letterSpacing: '-0.89px' }}>
                    {platform.name}
                  </h3>
                  <p className="text-lg text-[#1C1C1C] opacity-70 leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                    {platform.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#354024] font-semibold text-lg">
                    <span style={{ letterSpacing: '-0.89px' }}>Follow now</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stay in the Loop Section */}
      <section className="px-6 py-16 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#354024] mb-8 text-center" style={{ letterSpacing: '-0.89px' }}>
            Stay in the Loop
          </h2>
          <p className="text-xl text-[#1C1C1C] opacity-80 text-center mb-12 max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
            We post openings and ways to get involved through our socials first, including:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((opportunity) => {
              const IconComponent = opportunity.icon;
              return (
                <div
                  key={opportunity.title}
                  className="bg-[#E5D7C4] rounded-2xl p-8 border-2 border-[#889063]"
                >
                  <div className="mb-5">
                    <div className="w-14 h-14 rounded-full bg-[#354024] flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-xl text-[#354024] mb-3 font-semibold" style={{ letterSpacing: '-0.89px' }}>
                    {opportunity.title}
                  </h3>
                  <p className="text-lg text-[#1C1C1C] opacity-80 leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                    {opportunity.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-[#FFCFD0] rounded-2xl px-8 py-6 border-2 border-[#354024]">
              <p className="text-xl text-[#1C1C1C] font-semibold" style={{ letterSpacing: '-0.89px' }}>
                Follow us and keep notifications on so you do not miss anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="px-6 py-16 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#354024] text-white rounded-2xl p-10 md:p-14 text-center border-2 border-[#889063]">
            <h2 className="text-3xl md:text-4xl mb-6" style={{ letterSpacing: '-0.89px' }}>
              Want to bring lumi to your school?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
              If you want to collaborate or bring lumi to your school or organization, we would love to hear from you.
            </p>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="inline-block bg-[#FFCFD0] text-[#1C1C1C] px-10 py-4 rounded-xl text-xl font-semibold hover:opacity-90 transition-opacity border-2 border-[#1C1C1C]"
              style={{ letterSpacing: '-0.89px' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="px-6 py-16 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#354024] mb-12 text-center" style={{ letterSpacing: '-0.89px' }}>
            Why Join the Community?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-[#889063] flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-2xl text-[#354024] mb-4 font-semibold" style={{ letterSpacing: '-0.89px' }}>
                Connect with Peers
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-80 leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                Join a growing community of students passionate about financial literacy and building better money habits together.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-[#889063] flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-2xl text-[#354024] mb-4 font-semibold" style={{ letterSpacing: '-0.89px' }}>
                Early Access
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-80 leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                Be the first to know about new lessons, tools, and resources before they are officially released to the public.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-[#889063] flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-2xl text-[#354024] mb-4 font-semibold" style={{ letterSpacing: '-0.89px' }}>
                Make an Impact
              </h3>
              <p className="text-lg text-[#1C1C1C] opacity-80 leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                Help shape the future of financial education by contributing content, feedback, and sharing your unique perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="border-t-2 border-[#354024] bg-[#889063] px-6 py-8 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            onClick={scrollToTop}
            className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity"
            style={{ letterSpacing: '-0.89px' }}
          >
            ← Back to Home
          </Link>
          <Link
            to="/resources"
            onClick={scrollToTop}
            className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity"
            style={{ letterSpacing: '-0.89px' }}
          >
            Explore Resources →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
