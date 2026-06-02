import React, { useState, useEffect } from 'react';
import { Menu, X, Award, Shield, Phone, Compass, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentLang: 'en' | 'hn';
  setCurrentLang: (lang: 'en' | 'hn') => void;
}

export default function Navbar({ currentLang, setCurrentLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { nameEn: 'Home', nameHn: 'मुख्य पृष्ठ', href: '#home' },
    { nameEn: 'About Academy', nameHn: 'अकादमी के बारे में', href: '#about' },
    { nameEn: 'Courses & Training', nameHn: 'कोर्सेज व ट्रेनिंग', href: '#services' },
    { nameEn: 'Eligibility Checker', nameHn: 'योग्यता जांचें', href: '#eligibility' },
    { nameEn: 'Toppers & Gallery', nameHn: 'चयनित व गैलरी', href: '#gallery' },
    { nameEn: 'Contact Us', nameHn: 'संपर्क करें', href: '#contact' },
  ];

  const handleScrollToSegment = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Alert Segment */}
      <div className="bg-gradient-to-r from-saffron-500 via-patriotic-white to-military-500 text-military-900 border-b border-bronze-400 py-1 text-center font-display text-xs font-semibold px-4 flex items-center justify-between shadow-md relative z-50">
        <div className="flex items-center gap-2 mx-auto animate-pulse">
          <Award className="w-4 h-4 text-saffron-600 fill-saffron-600" />
          <span>
            {currentLang === 'en' 
              ? "★ NEW ADMISSIONS OPEN (2026-2027) FOR BOYS & GIRLS - JOIN THE ELITE ★" 
              : "★ प्रवेश प्रारंभ 2026-2027 (छात्र व छात्राओं हेतु) - जीत की तैयारी शुरू ★"
            }
          </span>
        </div>
        <div className="hidden md:flex items-center gap-1 text-[11px] font-mono pr-2">
          <Phone className="w-3 h-3 text-military-700" />
          <span>+91 8233809848</span>
        </div>
      </div>

      {/* Primary Header */}
      <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'top-0 bg-military-900/95 backdrop-blur-md shadow-lg border-b border-bronze-500/20 py-2' 
          : 'top-8 md:top-8 bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Branding Shield Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleScrollToSegment(e, '#home')}
              className="flex items-center gap-3 group"
              id="academy-logo-brand"
            >
              <div className="relative flex items-center justify-center w-11 h-11 bg-gradient-to-b from-saffron-500 via-[#fafbfc] to-military-500 text-military-900 rounded-full border border-bronze-400 shadow-lg group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6 text-military-900" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-bronze-300 transition-colors animate-spin-slow opacity-60"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg text-white leading-tight tracking-wider uppercase group-hover:text-bronze-300 transition-colors">
                  {currentLang === 'en' ? 'KJ DEFENCE' : 'कुचामन जीत'}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-bronze-300 uppercase -mt-0.5">
                  {currentLang === 'en' ? 'ACADEMY MALPURA' : 'डिफेंस एकेडमी मालपुरा'}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScrollToSegment(e, link.href)}
                    className="font-display text-xs uppercase px-3 py-2 text-gray-300 rounded-lg hover:text-white hover:bg-military-800/60 border border-transparent hover:border-bronze-500/10 transition-all font-semibold tracking-wider"
                  >
                    {currentLang === 'en' ? link.nameEn : link.nameHn}
                  </a>
                ))}
              </div>

              {/* Language Selection Toggle */}
              <div className="flex items-center bg-military-800 border border-bronze-500/20 rounded-full p-1 shadow-inner">
                <button
                  onClick={() => setCurrentLang('en')}
                  className={`px-3 py-1 text-[11px] font-display font-semibold uppercase rounded-full transition-all ${
                    currentLang === 'en' 
                      ? 'bg-saffron-500 text-white shadow-md' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setCurrentLang('hn')}
                  className={`px-3 py-1 text-[11px] font-display font-semibold uppercase rounded-full transition-all ${
                    currentLang === 'hn' 
                      ? 'bg-military-500 text-white shadow-md' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  हिन्दी
                </button>
              </div>

              {/* Admission Online CTA */}
              <a
                href="#contact"
                onClick={(e) => handleScrollToSegment(e, '#contact')}
                className="bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-display text-xs font-bold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 border border-saffron-500 border-b-2 border-b-saffron-700 uppercase"
                id="cta-navbar-apply"
              >
                <Users className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? 'Admission Form' : 'प्रवेश फॉर्म'}</span>
              </a>
            </div>

            {/* Mobile Header Right side */}
            <div className="flex items-center gap-3 lg:hidden">
              
              {/* Short Language Select Toggle for Mobile */}
              <div className="flex items-center bg-military-800/85 border border-bronze-500/30 rounded-full p-0.5">
                <button
                  onClick={() => setCurrentLang('en')}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                    currentLang === 'en' ? 'bg-saffron-500 text-white' : 'text-gray-400'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setCurrentLang('hn')}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                    currentLang === 'hn' ? 'bg-military-500 text-white' : 'text-gray-400'
                  }`}
                >
                  हि
                </button>
              </div>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-300 hover:text-white hover:bg-military-800 rounded-lg border border-military-700 focus:outline-none"
                aria-label="Toggle Menu"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-military-900 border-b border-bronze-500/20"
            >
              <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScrollToSegment(e, link.href)}
                    className="font-display text-sm tracking-wide py-2.5 px-3 rounded-lg text-gray-300 hover:text-white hover:bg-military-800/80 hover:border hover:border-bronze-500/10 block font-semibold"
                  >
                    {currentLang === 'en' ? link.nameEn : link.nameHn}
                  </a>
                ))}
                
                <div className="pt-4 border-t border-military-800 mt-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollToSegment(e, '#contact')}
                    className="w-full bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white py-3 rounded-xl shadow-md flex items-center justify-center gap-2 font-display text-center font-bold text-xs uppercase"
                  >
                    <Shield className="w-4 h-4" />
                    <span>{currentLang === 'en' ? 'APPLY FOR ENROLLMENT' : 'प्रवेश के लिए आवेदन करें'}</span>
                  </a>
                  
                  {/* Immediate Emergency Line */}
                  <div className="mt-4 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-saffron-500" />
                    <span>{currentLang === 'en' ? 'Admission Helpline:' : 'प्रवेश हेल्पलाइन:'} <strong>8233809848</strong></span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
