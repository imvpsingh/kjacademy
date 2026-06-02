import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import AboutOwner from './components/AboutOwner';
import Services from './components/Services';
import InteractiveWidget from './components/InteractiveWidget';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ShieldCheck, Heart, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'en' | 'hn'>('hn'); // Defaulting to Hindi as majority local aspirants belong to Rajasthan
  const [showToast, setShowToast] = useState(true);

  return (
    <div className="bg-military-900 border-x border-[#14281b] min-h-screen relative text-white antialiased selection:bg-saffron-500 selection:text-white">
      
      {/* Decorative Elegant Indian Tricolor Sticky Ribbon at absolute page background margins */}
      <div className="fixed top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#FF9933] via-white to-[#138808] z-50 shadow opacity-50 block sm:block" />
      <div className="fixed top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-[#FF9933] via-white to-[#138808] z-50 shadow opacity-50 block sm:block" />

      {/* Floating Micro-Badge of Honor / Direct Call Access */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        
        {/* Call Helplines Button */}
        <a
          href="tel:+918233809848"
          className="flex items-center gap-2 bg-[#FF9933] hover:bg-saffron-600 text-white font-mono font-bold text-xs py-2.5 px-3.5 rounded-full shadow-lg border border-saffron-300 transform active:scale-95 transition-all"
          title="Direct Call Helpline"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
          <span>📞 Admissions: <strong>8233809848</strong></span>
        </a>

        {/* Small Patriot Salute Greeting floating card */}
        <div className="hidden md:flex items-center gap-2 bg-military-900/90 backdrop-blur-sm border border-bronze-400/20 py-1.5 px-3 rounded-xl shadow-lg">
          <ShieldCheck className="w-4 h-4 text-military-500" />
          <span className="text-[10px] font-display font-bold tracking-widest text-bronze-300 uppercase">
            {currentLang === 'en' ? '★ ENTRANCE ACTIVE ★' : '★ एडमिशन चालू है ★'}
          </span>
        </div>

      </div>

      {/* Structured bilingual Toast Alert on load */}
      <AnimatePresence>
        {showToast && (
          <div className="fixed bottom-6 left-6 z-40 max-w-sm w-full block">
            <motion.div
              initial={{ opacity: 0, shadow: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="bg-military-850 hover:bg-military-800 border-2 border-[#dfb56c]/30 rounded-xl p-4 shadow-2xl relative overflow-hidden"
            >
              {/* Back strip indicator of patriotism */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
              
              <div className="flex items-start gap-3 mt-1.5">
                <span className="text-xl">🏆</span>
                <div className="space-y-1">
                  <h4 className="font-display font-extrabold text-[11px] text-white uppercase tracking-wider">
                    {currentLang === 'en' ? 'Admission Helpline Malpura' : 'कुचामन जीत हेल्पलाइन मालपुरा'}
                  </h4>
                  <p className="text-[11.5px] text-gray-300 leading-normal">
                    {currentLang === 'en' 
                      ? 'Admissions for regular physical, hostel residency & Agniveer written coaching are fully open.'
                      : 'भौतिक प्रशिक्षण (दौड़), उत्कृष्ट हॉस्टल एवं लिखित परीक्षा बैच के रजिस्ट्रेशन चालू हैं।'}
                  </p>
                  <p className="text-[10px] font-mono text-bronze-400 font-bold">
                    📞 Admin Desk: +91 8233809848
                  </p>
                </div>
              </div>

              {/* Dismiss Button */}
              <button
                onClick={() => setShowToast(false)}
                className="absolute top-2.5 right-2.5 text-xs text-gray-500 hover:text-white font-black p-1 transition-colors block cursor-pointer"
                title="Dismiss"
              >
                ✕
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Assembly of Modular High-End Patriotic Layout */}
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />
      
      <Hero currentLang={currentLang} />
      
      <Stats currentLang={currentLang} />
      
      <AboutOwner currentLang={currentLang} />
      
      <Services currentLang={currentLang} />
      
      <InteractiveWidget currentLang={currentLang} />
      
      <Gallery currentLang={currentLang} />
      
      <ContactForm currentLang={currentLang} />
      
      <Footer currentLang={currentLang} />

    </div>
  );
}
