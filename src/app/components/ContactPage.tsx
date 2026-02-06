import { Link } from './RouterLink';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';
import { Mail, MessageSquare, Users, Building } from 'lucide-react';

export default function ContactPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactReasons = [
    {
      icon: Users,
      title: 'Bring lumi to Your School',
      description: 'Interested in implementing lumi financial literacy programs at your educational institution? We would love to partner with you.',
      color: '#889063'
    },
    {
      icon: Building,
      title: 'Partnership Opportunities',
      description: 'Looking to collaborate with lumi on content, events, or community initiatives? Reach out to explore possibilities.',
      color: '#354024'
    },
    {
      icon: MessageSquare,
      title: 'General Inquiries',
      description: 'Have questions, feedback, or suggestions? We are always listening and looking to improve the lumi experience.',
      color: '#FFCFD0'
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
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
            We would love to hear from you. Whether you want to bring lumi to your school, explore partnerships, or share feedback, get in touch.
          </p>
        </div>
      </div>

      {/* Contact Reasons */}
      <section className="px-6 py-16 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#354024] mb-12 text-center" style={{ letterSpacing: '-0.89px' }}>
            How Can We Help?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactReasons.map((reason) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-white rounded-2xl p-8 border-2 border-[#354024]"
                >
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: reason.color }}
                    >
                      <IconComponent className="w-8 h-8" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-xl text-[#354024] mb-3 font-semibold" style={{ letterSpacing: '-0.89px' }}>
                    {reason.title}
                  </h3>
                  <p className="text-lg text-[#1C1C1C] opacity-80 leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-10 md:p-12 border-2 border-[#354024] text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-[#FFCFD0] flex items-center justify-center">
                <Mail className="w-10 h-10 text-[#354024]" strokeWidth={2} />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl text-[#354024] mb-6" style={{ letterSpacing: '-0.89px' }}>
              Get in Touch
            </h2>
            
            <p className="text-xl text-[#1C1C1C] opacity-80 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
              For all inquiries, partnerships, and collaboration opportunities, please reach out to us at:
            </p>

            <a 
              href="mailto:lumifinance.contact@gmail.com"
              className="inline-block text-2xl md:text-3xl text-[#354024] font-semibold hover:opacity-70 transition-opacity"
              style={{ letterSpacing: '-0.89px' }}
            >
              lumifinance.contact@gmail.com
            </a>

            <div className="mt-10 pt-10 border-t-2 border-[#889063]">
              <p className="text-lg text-[#1C1C1C] opacity-70 leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                We typically respond within 2-3 business days. For urgent matters related to school partnerships or time-sensitive collaborations, please indicate "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect on Social */}
      <section className="px-6 py-16 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-[#354024] mb-8" style={{ letterSpacing: '-0.89px' }}>
            Connect on Social Media
          </h2>
          <p className="text-xl text-[#1C1C1C] opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
            For quicker updates, tips, and community announcements, follow us on social media or join our community as an Illuminator.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              onClick={scrollToTop}
              className="inline-block bg-[#354024] text-white px-10 py-4 rounded-xl text-xl font-semibold hover:opacity-90 transition-opacity border-2 border-[#354024]"
              style={{ letterSpacing: '-0.89px' }}
            >
              Get Involved
            </Link>
            <a
              href="https://www.instagram.com/lumi_finance/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FFCFD0] text-[#1C1C1C] px-10 py-4 rounded-xl text-xl font-semibold hover:opacity-90 transition-opacity border-2 border-[#354024]"
              style={{ letterSpacing: '-0.89px' }}
            >
              Follow on Instagram
            </a>
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
            to="/get-involved"
            onClick={scrollToTop}
            className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity"
            style={{ letterSpacing: '-0.89px' }}
          >
            Get Involved →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}