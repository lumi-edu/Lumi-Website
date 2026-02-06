import { Link } from '@/app/navigation';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';

export default function Footer() {
  return (
    <footer className="bg-[#889063]/40 text-[#1C1C1C] px-6 py-16 md:px-12 border-t border-[#354024]/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_auto] gap-12">
        {/* Left side - Brand */}
        <div>
          <img src={lumiLogo} alt="lumi" className="h-8 mb-4 -ml-1" style={{ mixBlendMode: 'multiply' }} />
          <p className="text-lg text-[#1C1C1C] opacity-80 mb-8 max-w-md">
            Illuminating the path to financial confidence and wealth for the next generation.
          </p>
        </div>
        
        {/* Right side - Navigation columns */}
        <div className="grid grid-cols-2 gap-12">
          {/* Learn more column */}
          <div>
            <h4 className="text-lg mb-4">Learn more</h4>
            <div className="flex flex-col gap-3">
              <a href="#get-involved" className="text-base hover:opacity-70 transition-opacity">
                Get Involved
              </a>
              <a href="#customer-stories" className="text-base hover:opacity-70 transition-opacity">
                Customer stories
              </a>
            </div>
          </div>
          
          {/* Support column */}
          <div>
            <h4 className="text-lg mb-4">Support</h4>
            <div className="flex flex-col gap-3">
              <a href="#contact" className="text-base hover:opacity-70 transition-opacity">
                Contact
              </a>
              <Link to="/legal" className="text-base hover:opacity-70 transition-opacity">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
