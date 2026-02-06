import { Link } from './RouterLink';
import { MessageCircle, GraduationCap, Briefcase, Users } from 'lucide-react';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function CustomerStoriesPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stories = [
    {
      role: 'High School Student',
      icon: GraduationCap,
      quote: "Before lumi, I never really tracked my money because it felt confusing and stressful. The budgeting lessons broke everything down in a way that actually made sense. I used the templates and finally felt like I had a plan instead of just guessing."
    },
    {
      role: 'College Freshman',
      icon: GraduationCap,
      quote: "I started using lumi when I got my first part-time job and realized I had no idea how paychecks or taxes worked. The lessons explained everything in a really straightforward way. I understand where my money goes now and how to save without feeling overwhelmed."
    },
    {
      role: 'Student with a Part-Time Job',
      icon: Briefcase,
      quote: "What I liked about lumi is that it doesn't just tell you what to do, it shows you how. After going through the saving and planning lessons, I set up automatic savings and actually stuck with it. It felt realistic and doable."
    }
  ];

  const benefits = [
    'Lessons feel clear and easy to follow',
    'Real-life examples that match actual student situations',
    'Tools and templates that help you take action',
    'Content that builds confidence, not stress'
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
            Student Voices
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
            Real stories from students and educators who have used lumi to build real financial skills.
          </p>
        </div>
      </div>

      {/* What People Are Saying */}
      <section className="px-6 py-16 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#354024] mb-12 text-center" style={{ letterSpacing: '-0.89px' }}>
            What People Are Saying
          </h2>

          {/* Teacher Perspective */}
          <div className="mb-16">
            <h3 className="text-3xl text-[#889063] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Teacher Perspective
            </h3>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-2 border-[#354024]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#889063] flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-xl text-[#354024] font-semibold" style={{ letterSpacing: '-0.89px' }}>
                    High School Economics Teacher
                  </p>
                </div>
              </div>
              <blockquote className="text-xl text-[#1C1C1C] leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                "I'm careful about what financial resources I recommend to students, and lumi is one I feel good about sharing. The lessons are clear, practical, and actually relevant to what students are experiencing right now. I like that the content focuses on understanding and action, not just definitions. It's a strong supplement to classroom learning."
              </blockquote>
            </div>
          </div>

          {/* Student Stories */}
          <div>
            <h3 className="text-3xl text-[#889063] mb-8" style={{ letterSpacing: '-0.89px' }}>
              Student Stories
            </h3>
            <div className="grid gap-8">
              {stories.map((story, index) => {
                const Icon = story.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-2 border-[#889063]"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-[#FFCFD0] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="text-xl text-[#354024] font-semibold" style={{ letterSpacing: '-0.89px' }}>
                          {story.role}
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-xl text-[#1C1C1C] leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                      "{story.quote}"
                    </blockquote>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Use Lumi */}
      <section className="px-6 py-16 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#354024] mb-12 text-center" style={{ letterSpacing: '-0.89px' }}>
            Why Students Use lumi
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#E5D7C4] rounded-xl p-6 border-2 border-[#889063]"
              >
                <p className="text-xl text-[#1C1C1C] leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 md:px-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#354024] to-[#889063] rounded-2xl p-10 md:p-16 text-center shadow-xl">
          <MessageCircle className="w-16 h-16 text-[#FFCFD0] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white mb-6" style={{ letterSpacing: '-0.89px' }}>
            Want to Share Your Story?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto" style={{ letterSpacing: '-0.89px' }}>
            We're always looking to hear from students and educators using lumi.
          </p>
          <p className="text-xl text-white opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto" style={{ letterSpacing: '-0.89px' }}>
            If you've used our lessons or tools and want to share your experience, reach out through our Contact page or send us a message on social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" onClick={scrollToTop}>
              <button className="bg-[#FFCFD0] text-[#354024] px-8 py-4 text-xl rounded-xl font-semibold hover:opacity-90 transition-opacity" style={{ letterSpacing: '-0.89px' }}>
                Contact Us
              </button>
            </Link>
            <Link to="/get-involved" onClick={scrollToTop}>
              <button className="bg-white text-[#354024] px-8 py-4 text-xl rounded-xl font-semibold hover:opacity-90 transition-opacity border-2 border-white" style={{ letterSpacing: '-0.89px' }}>
                Get Involved
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}