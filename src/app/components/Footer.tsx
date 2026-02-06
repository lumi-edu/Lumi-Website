import { Link } from './RouterLink';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import { Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#889063] text-[#1C1C1C] px-6 py-16 md:px-12 border-t border-[#354024]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-12">
          {/* Left side - Brand */}
          <div>
            <img src={lumiLogo} alt="lumi" className="h-8 mb-4 -ml-1" style={{ mixBlendMode: 'multiply' }} />
            <p className="text-lg text-[#1C1C1C] opacity-80 mb-6 max-w-md">
              Illuminating the path to financial confidence and wealth for the next generation.
            </p>
            {/* Social media links */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-[#1C1C1C] hover:opacity-70 transition-opacity" />
              </a>
              <a href="https://www.instagram.com/lumi_finance/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-[#1C1C1C] hover:opacity-70 transition-opacity" />
              </a>
            </div>
          </div>
          
          {/* Right side - Navigation columns */}
          <div className="grid grid-cols-2 gap-12">
            {/* Learn more column */}
            <div>
              <h4 className="text-lg mb-4">Learn more</h4>
              <div className="flex flex-col gap-3">
                <Link to="/get-involved" onClick={scrollToTop} className="text-base hover:opacity-70 transition-opacity">
                  Get Involved
                </Link>
                <Link to="/customer-stories" onClick={scrollToTop} className="text-base hover:opacity-70 transition-opacity">
                  Customer stories
                </Link>
              </div>
            </div>
            
            {/* Support column */}
            <div>
              <h4 className="text-lg mb-4">Support</h4>
              <div className="flex flex-col gap-3">
                <Link to="/contact" onClick={scrollToTop} className="text-base hover:opacity-70 transition-opacity">
                  Contact
                </Link>
                <Link to="/legal" onClick={scrollToTop} className="text-base hover:opacity-70 transition-opacity">
                  Legal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}