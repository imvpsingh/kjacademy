import React from 'react';
import { Send, Phone, MapPin, Mail, Award, Star, ArrowUp, Instagram } from 'lucide-react';

interface FooterProps {
  currentLang: 'en' | 'hn';
}

export default function Footer({ currentLang }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSegment = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-military-950 text-white z-20 border-t border-bronze-500/20 overflow-hidden">
      
      {/* Soft Tricolored glow highlights behind Footer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[20%] w-[180px] h-[180px] rounded-full bg-saffron-500/10 blur-[80px]"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[180px] h-[180px] rounded-full bg-military-500/10 blur-[80px]"></div>
      </div>

      {/* Primary Footer Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Telegram High-Impact CTA Widget */}
        <div className="bg-gradient-to-r from-military-900 via-[#14281b] to-military-900 border border-bronze-400/30 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-12 relative overflow-hidden">
          {/* Subtle diagonal background tricolor stripe */}
          <div className="absolute top-0 right-0 h-1 w-full bg-gradient-to-r from-saffron-500 via-white to-military-500"></div>
          
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-12 h-12 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 animate-pulse">
              <Send className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded bg-blue-650/40 border border-blue-500/30 text-[10px] font-display font-extrabold uppercase text-blue-400 tracking-widest inline-block mb-1">
                {currentLang === 'en' ? '★ ONLINE TELEGRAM CHANNEL ★' : '★ टेलीग्राम ग्रुप आमंत्रण ★'}
              </span>
              <h4 className="font-display font-black text-sm text-white uppercase tracking-wider">
                {currentLang === 'en' ? 'Get Daily Agniveer Mock Questions & Regimental Bulletins' : 'प्रतिदिन जीके टेस्ट व फिजिकल नियमों के लिए चैनल ज्वाइन करें'}
              </h4>
              <p className="text-xs text-gray-400 mt-1 max-w-xl">
                {currentLang === 'en'
                  ? 'Join 5,000+ defense aspirants in Rajasthan for study materials, physical schedules and direct vacancy briefs.'
                  : '5,000+ से अधिक अन्य छात्रों के साथ जुड़ें जहां हर दिन लिखित परीक्षा टिप्स, फिजिकल निर्देश और परीक्षा अपडेट भेजे जाते हैं।'}
              </p>
            </div>
          </div>

          <a
            href="https://t.me/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-750 text-white font-display text-xs font-bold uppercase tracking-widest transition-transform transform active:scale-95 flex items-center gap-2.5 shadow-md flex-shrink-0 cursor-pointer"
            id="btn-telegram-footer-cta"
          >
            <span>JOIN COMMAND TELEGRAM</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Regular Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12 border-b border-bronze-500/10 pb-12">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-b from-saffron-550 via-[#fafbfc] to-military-550 rounded-full border border-bronze-400/40 flex items-center justify-center text-military-900 shadow">
                <Award className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-display font-black text-base text-white uppercase leading-none">
                  {currentLang === 'en' ? 'KJ DEFENCE ACADEMY' : 'कुचामन जीत एकेडमी'}
                </h3>
                <span className="text-[10px] font-bold text-bronze-300 uppercase tracking-widest">
                  MALPURA (TONK) • RAJASTHAN
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              {currentLang === 'en' 
                ? 'Rajasthan\'s premier patriotic residence for Army and Agniveer physical/written test training. Formulated with elite military discipline under Director Ramdev Choudhary.'
                : 'राजस्थान की अग्रणी सैन्य परीक्षण एवं मानसिक संवर्धन अकादमी। मालपुरा टोंक में स्थित उत्कृष्ट कैंपस जहाँ अनुशासन, चरित्र व शौर्य की शिक्षा प्रदान कर आपको वर्दी के योग्य बनाया जाता है।'}
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <div className="py-2.5 px-4 bg-military-900 rounded-xl border border-bronze-500/10 inline-flex items-center gap-2 self-start">
                <Phone className="w-4 h-4 text-saffron-500" />
                <span className="text-xs text-gray-200 uppercase font-mono font-bold"> Helpline Calls: +91 8233809848</span>
              </div>
              
              <a 
                href="https://www.instagram.com/ramdev_sir_fouji_factory/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-gradient-to-r from-pink-500/15 via-[#e1306c]/10 to-[#f97c1f]/10 hover:from-pink-500/20 hover:to-rose-500/20 rounded-xl border border-pink-500/30 hover:border-pink-500/85 inline-flex items-center gap-2 text-stone-200 hover:text-white transition-all transform active:scale-98 self-start cursor-pointer group"
              >
                <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs uppercase font-mono font-bold">
                  {currentLang === 'en' ? 'Join 100K Instagram Family 📸' : '100K इंस्टाग्राम परिवार से जुड़ें 📸'}
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-black text-xs text-bronze-300 uppercase tracking-widest border-l-2 border-[#FF9933] pl-2">
              • {currentLang === 'en' ? 'COMMAND SECTIONS' : 'अकादमी कमान धारा'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-350">
              <li><a href="#home" onClick={() => handleScrollToSegment('#home')} className="hover:text-white transition-colors">{currentLang === 'en' ? 'Home Portal' : 'मुख्य पृष्ठ'}</a></li>
              <li><a href="#about" onClick={() => handleScrollToSegment('#about')} className="hover:text-white transition-colors">{currentLang === 'en' ? 'About our Director' : 'निदेशक जी का संदेश'}</a></li>
              <li><a href="#services" onClick={() => handleScrollToSegment('#services')} className="hover:text-white transition-colors">{currentLang === 'en' ? 'Courses & Training Grounds' : 'कोर्सेज व शारीरिक तैयारी'}</a></li>
              <li><a href="#eligibility" onClick={() => handleScrollToSegment('#eligibility')} className="hover:text-white transition-colors">{currentLang === 'en' ? 'Agniveer Eligibility checker' : 'पात्रता मानक कैलकुलेटर'}</a></li>
              <li><a href="#gallery" onClick={() => handleScrollToSegment('#gallery')} className="hover:text-white transition-colors">{currentLang === 'en' ? 'Student Selections & Photo Albums' : 'चयनित सूची व गैलरी'}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4 font-sans text-xs text-gray-350">
            <h4 className="font-display font-black text-xs text-bronze-300 uppercase tracking-widest border-l-2 border-[#138808] pl-2">
              • {currentLang === 'en' ? 'HQ COORDINATES' : 'सैनिक मुख्यालय'}
            </h4>
            
            <div className="space-y-3 font-normal leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-saffron-500 mt-0.5 flex-shrink-0" />
                <span>Bypass Road, Near Government Ground, Malpura, Tonk District, Rajasthan (Pin code: 304502)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-military-500 flex-shrink-0" />
                <span>contact@kjdefenceacademy.com</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-saffron-550 flex-shrink-0" />
                <span>Helpline: +91 8233809848, +91 9929944648</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-patriotic-white">
              <Star className="w-4 h-4 text-saffron-500 fill-saffron-500" />
              <Star className="w-4 h-4 text-[#fafbfc] fill-current" />
              <Star className="w-4 h-4 text-military-500 fill-military-500" />
              <span className="text-[10px] uppercase font-display font-extrabold tracking-widest">
                {currentLang === 'en' ? 'MADE FOR THE INDIAN BRAVE' : 'राष्ट्र रक्षा सर्वोपरि'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright declaration & salute text */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 border-t border-bronze-500/10 pt-6">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} KJ Defence Academy Malpura (Kuchaman Jeet Academy). All Rights Reserved.</p>
            <p className="text-[10px] text-gray-600 font-sans italic">
              {currentLang === 'en' 
                ? 'Coaching disciplines align strictly with Agniveer and regimental directives.' 
                : 'सभी कोचिंग तथा शारीरिक प्रशिक्षण कार्यक्रम पूर्णतः सुरक्षित एवं राजपत्रित मानकों के अनुरूप संचालित किए जाते हैं।'}
            </p>
          </div>

          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a 
              href="https://vipasika.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-bronze-500/70 hover:text-saffron-500 transition-colors uppercase tracking-wider"
            >
              Developed by <span className="font-bold text-bronze-400">Vipasika</span>
            </a>

            <span className="font-display font-black tracking-widest text-[#FF9933] uppercase">JAI HIND 🫡</span>
            
            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-lg bg-military-900 hover:bg-military-850 hover:text-white border border-bronze-500/20 shadow duration-300 transition-all cursor-pointer"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4 text-bronze-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}