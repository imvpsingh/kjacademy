import React, { useState, useEffect } from 'react';
import { Menu, X, Award, Shield, Users } from 'lucide-react';
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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-saffron-500 via-patriotic-white to-military-500 text-military-900 border-b border-bronze-400 py-1 text-center font-display text-xs font-semibold px-4 flex items-center justify-between shadow-md relative z-[100]">
        <div className="flex items-center gap-2 mx-auto animate-pulse">
          <Award className="w-4 h-4 text-saffron-600 fill-saffron-600" />
          <span>{currentLang === 'en' ? "★ NEW ADMISSIONS OPEN (2026-2027) ★" : "★ प्रवेश प्रारंभ 2026-2027 ★"}</span>
        </div>
      </div>

      <nav className={`fixed left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'top-0 bg-military-900/95 backdrop-blur-md shadow-lg border-b border-bronze-500/20 py-2' : 'top-8 md:top-8 bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" onClick={(e) => handleScrollToSegment(e, '#home')} className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-11 h-11 bg-gradient-to-b from-saffron-500 to-military-500 text-military-900 rounded-full border border-bronze-400">
                <Shield className="w-6 h-6 text-military-900" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg text-white uppercase">{currentLang === 'en' ? 'KJ DEFENCE' : 'कुचामन जीत'}</span>
                <span className="text-[10px] font-bold text-bronze-300 uppercase">{currentLang === 'en' ? 'ACADEMY MALPURA' : 'डिफेंस एकेडमी'}</span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleScrollToSegment(e, link.href)} className="text-xs uppercase text-gray-300 hover:text-white font-semibold">{currentLang === 'en' ? link.nameEn : link.nameHn}</a>
              ))}
              <div className="flex bg-military-800 rounded-full p-1 border border-bronze-500/20">
                <button onClick={() => setCurrentLang('en')} className={`px-3 py-1 text-[10px] rounded-full ${currentLang === 'en' ? 'bg-saffron-500 text-white' : 'text-gray-400'}`}>EN</button>
                <button onClick={() => setCurrentLang('hn')} className={`px-3 py-1 text-[10px] rounded-full ${currentLang === 'hn' ? 'bg-military-500 text-white' : 'text-gray-400'}`}>HI</button>
              
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

            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex bg-military-800 rounded-full p-0.5 border border-bronze-500/20">
                <button onClick={() => setCurrentLang('en')} className={`px-2 py-0.5 text-[10px] rounded-full ${currentLang === 'en' ? 'bg-saffron-500 text-white' : 'text-gray-400'}`}>EN</button>
                <button onClick={() => setCurrentLang('hn')} className={`px-2 py-0.5 text-[10px] rounded-full ${currentLang === 'hn' ? 'bg-military-500 text-white' : 'text-gray-400'}`}>HI</button>
              </div>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white border border-military-700 rounded-lg z-[101]" aria-label="Menu">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="lg:hidden bg-military-900 border-b border-bronze-500/20 w-full absolute top-full left-0 pointer-events-auto">
              <div className="px-4 py-6 space-y-2 flex flex-col">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={(e) => handleScrollToSegment(e, link.href)} className="text-sm py-4 px-4 text-gray-200 block font-semibold border-b border-military-800">
                    {currentLang === 'en' ? link.nameEn : link.nameHn}
                  </a>
                ))}
              </div>
                
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}