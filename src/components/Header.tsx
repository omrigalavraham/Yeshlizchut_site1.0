import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo_yeshlizchut.jpeg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const openContactForm = () => {
    window.dispatchEvent(new Event('openContactForm'));
    scrollToSection('hero');
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50' : 'bg-white/80 backdrop-blur-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Left side - Logo/Brand Name */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label={isMobileMenuOpen ? "סגור תפריט ניווט" : "פתח תפריט ניווט"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="text-left flex items-center gap-2">
              <img src={logo} alt="יש לי זכות" className="h-12 w-auto object-contain" />
            </div>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden md:flex items-center gap-10 flex-1 justify-center" aria-label="ניווט ראשי">
            <button onClick={() => scrollToSection('contact')} aria-label="מעבר לסעיף צור קשר" className="text-slate-700 hover:text-blue-600 font-semibold text-base transition-all duration-200 relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300">
              צור קשר
            </button>
            <button onClick={() => scrollToSection('services')} aria-label="מעבר לסעיף השירותים שלנו" className="text-slate-700 hover:text-blue-600 font-semibold text-base transition-all duration-200 relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300">
              שירותים
            </button>
            <button onClick={() => scrollToSection('about')} aria-label="מעבר לסעיף אודות החברה" className="text-slate-700 hover:text-blue-600 font-semibold text-base transition-all duration-200 relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300">
              אודות
            </button>
          </nav>

          {/* Right side - CTA Button */}
          <button
            onClick={openContactForm}
            className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 whitespace-nowrap"
          >
            קבל החזר עכשיו
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('about')} className="block w-full text-right py-3 text-slate-700 hover:text-blue-600 font-medium transition-colors">
              אודות
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-right py-3 text-slate-700 hover:text-blue-600 font-medium transition-colors">
              שירותים
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-right py-3 text-slate-700 hover:text-blue-600 font-medium transition-colors">
              צור קשר
            </button>
            <button
              onClick={openContactForm}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg"
            >
              קבל החזר עכשיו
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
