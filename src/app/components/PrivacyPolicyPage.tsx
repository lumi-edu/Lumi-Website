import { Link } from './RouterLink';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';

export default function PrivacyPolicyPage() {
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
      <div className="bg-[#354024] text-white px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-[#FFCFD0] mb-4" style={{ letterSpacing: '-0.1px' }}>Legal</h1>
          <p className="text-xl text-[#FFCFD0] opacity-90">Privacy Policy, Terms of Use, and Important Notices</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Disclaimer */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl text-[#354024] mb-4">Disclaimer</h2>
            <div className="space-y-4 text-[#1C1C1C]">
              <p className="text-lg opacity-80">
                lumi is a financial literacy education platform designed for learning purposes only. All content, lessons, calculators, and tools provided are for educational and informational purposes. They do not constitute professional financial, legal, or tax advice.
              </p>
              <p className="text-lg opacity-80">
                Before making any significant financial decisions, we recommend consulting with a licensed financial advisor, accountant, or other professional who can provide advice tailored to your specific circumstances.
              </p>
              <p className="text-lg opacity-80">
                lumi does not collect, store, or retain any personally identifiable information (PII), financial data, or sensitive personal information from users.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl text-[#354024] mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-[#1C1C1C]">
              <p className="text-lg opacity-80">
                At lumi, we are committed to protecting your privacy. This platform does not require registration, account creation, or login.
              </p>
              <p className="text-lg opacity-80">
                We do not collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-lg opacity-80">
                <li>Names, email addresses, or contact information</li>
                <li>Financial data or account details</li>
                <li>Social security numbers or government-issued IDs</li>
              </ul>
            </div>
          </div>

          {/* Terms of Use */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl text-[#354024] mb-4">Terms of Use</h2>
            <div className="space-y-4 text-[#1C1C1C]">
              <p className="text-lg opacity-80">
                By accessing and using lumi, you agree to the following terms:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-lg opacity-80">
                <li>All content is for educational purposes only</li>
                <li>You will not use lumi for illegal or harmful activities</li>
                <li>You understand that lumi does not provide personalized financial advice</li>
                <li>You will not attempt to scrape, copy, or redistribute lumi content without permission</li>
              </ul>
              <p className="text-lg opacity-80">
                lumi reserves the right to update these terms at any time. Continued use of the platform constitutes acceptance of any changes.
              </p>
            </div>
          </div>

          {/* Age Notice */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl text-[#354024] mb-4">Age Notice</h2>
            <div className="space-y-4 text-[#1C1C1C]">
              <p className="text-lg opacity-80">
                lumi is designed for users of all ages. Since we do not collect any personal information, we do not have age restrictions or verification requirements. However, users under 18 should use this platform with parental or guardian guidance.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}