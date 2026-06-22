import { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { Menu, X } from 'lucide-react';

interface TopNavBarProps {
  activeView: ViewState;
  onViewChange: (view: ViewState, hash?: string) => void;
}

export default function TopNavBar({ activeView, onViewChange }: TopNavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: ViewState, sectionId?: string) => {
    setMobileMenuOpen(false);
    onViewChange(view, sectionId);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
      id="top-nav-bar"
    >
      <div className="flex justify-between items-center px-6 md:px-20 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-display font-bold text-xl md:text-2xl tracking-tighter text-[#e5e2e1] hover:opacity-80 transition-opacity cursor-pointer"
          id="logo-button"
        >
          VALENTIN
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <button
            onClick={() => handleNavClick('home')}
            className={`font-sans text-[13px] uppercase tracking-widest font-medium transition-all duration-300 pb-1 border-b-2 cursor-pointer ${
              activeView === 'home'
                ? 'text-[#c9c6c5] border-[#c9c6c5]'
                : 'text-[#a1a1aa] border-transparent hover:text-[#e5e2e1]'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => handleNavClick('home', 'about-section')}
            className={`font-sans text-[13px] uppercase tracking-widest font-medium transition-all duration-300 pb-1 border-b-2 cursor-pointer ${
              activeView === 'home' && window.location.hash === '#about'
                ? 'text-[#c9c6c5] border-[#c9c6c5]'
                : 'text-[#a1a1aa] border-transparent hover:text-[#e5e2e1]'
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('home', 'projects-section')}
            className={`font-sans text-[13px] uppercase tracking-widest font-medium transition-all duration-300 pb-1 border-b-2 cursor-pointer ${
              activeView !== 'home' && activeView !== 'contact'
                ? 'text-[#c9c6c5] border-[#c9c6c5]'
                : 'text-[#a1a1aa] border-transparent hover:text-[#e5e2e1]'
            }`}
          >
            Projects
          </button>
        </div>

        {/* Action Button */}
        <button
          onClick={() => handleNavClick('contact')}
          className={`hidden md:block px-8 py-3 font-sans text-xs font-semibold tracking-wider uppercase scale-95 hover:scale-100 active:scale-95 transition-all duration-300 rounded cursor-pointer ${
            activeView === 'contact'
              ? 'bg-[#c9c6c5] text-[#1c1b1b]'
              : 'bg-[#e5e2e1] text-[#131313] hover:bg-[#c9c6c5]'
          }`}
          id="nav-cta-button"
        >
          Let's Work Together
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#e5e2e1] hover:text-[#c9c6c5] transition-colors cursor-pointer"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-[#0a0a0a] z-40 flex flex-col px-6 py-12 gap-8 border-t border-white/5 animate-fade-in md:hidden">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-left font-display text-3xl font-light tracking-tight pb-3 border-b border-white/5 cursor-pointer ${
              activeView === 'home' ? 'text-[#c9c6c5]' : 'text-[#a1a1aa]'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => handleNavClick('home', 'about-section')}
            className="text-left font-display text-3xl font-light tracking-tight pb-3 border-b border-white/5 text-[#a1a1aa] cursor-pointer"
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('home', 'projects-section')}
            className={`text-left font-display text-3xl font-light tracking-tight pb-3 border-b border-white/5 cursor-pointer ${
              activeView !== 'home' && activeView !== 'contact' ? 'text-[#c9c6c5]' : 'text-[#a1a1aa]'
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`text-left font-display text-3xl font-light tracking-tight pb-3 border-b border-white/5 cursor-pointer ${
              activeView === 'contact' ? 'text-[#c9c6c5]' : 'text-[#a1a1aa]'
            }`}
          >
            Contact
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="w-full bg-[#e5e2e1] text-[#131313] text-center font-sans uppercase tracking-widest text-xs py-4 font-bold rounded cursor-pointer mt-auto"
          >
            Let's Work Together
          </button>
        </div>
      )}
    </nav>
  );
}
