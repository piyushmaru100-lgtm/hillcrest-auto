import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 bg-white border-b ${
        isScrolled ? 'shadow-md border-slate-200 py-2.5' : 'border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with subtle automotive accent */}
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0 focus:outline-hidden"
            aria-label="Hillcrest Auto Repair Home"
          >
            {/* Automotive Emblem Accent */}
            <div className="flex flex-col justify-center items-center w-8 h-8 rounded bg-[#1E3A8A] text-white p-1 shadow-xs border border-[#1E3A8A]">
              <div className="w-full h-1 bg-[#B22234] rounded-xs mb-1" />
              <span className="font-heading text-sm leading-none tracking-wider font-bold">HAR</span>
            </div>

            <div className="flex flex-col">
              <span className="font-heading text-2xl sm:text-3xl tracking-wider text-[#1E3A8A] leading-none group-hover:text-[#B22234] transition-colors">
                HILLCREST
              </span>
              <span className="font-subheading text-[10px] tracking-[0.25em] font-bold text-[#2D3748] uppercase leading-none mt-0.5">
                AUTO REPAIR
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#2D3748]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="whitespace-nowrap shrink-0 hover:text-[#B22234] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B22234] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold font-subheading uppercase tracking-wider text-white bg-[#B22234] hover:bg-[#931B2A] active:scale-[0.98] rounded-md transition-all shadow-xs focus:ring-2 focus:ring-[#B22234] focus:ring-offset-2 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#2D3748] hover:bg-slate-100 hover:text-[#1E3A8A] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1E3A8A]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-3 text-base font-semibold text-[#2D3748] hover:text-[#B22234] hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 mt-2">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 font-bold text-sm tracking-wider uppercase text-white bg-[#B22234] hover:bg-[#931B2A] rounded-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call (619) 297-4059</span>
              </a>
              <p className="text-center text-xs text-slate-500 mt-2 font-medium">
                {BUSINESS_DATA.address.full}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
