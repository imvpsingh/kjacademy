import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Award, Star, ArrowRight, Play, CheckCircle, Instagram } from 'lucide-react';

interface HeroProps {
  currentLang: 'en' | 'hn';
}

export default function Hero({ currentLang }: HeroProps) {
  const handleScrollToSegment = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const armyBranchesEn = ['Indian Army GD', 'Agniveer Special Force', 'Air Force / NAVY', 'Physical Training Specialist'];
  const armyBranchesHn = ['भारतीय सेना (GD)', 'अग्निवीर स्पेशल बैच', 'वायु सेना / नौसेना (Navy)', 'फिजिकल एवं लिखित परीक्षा'];

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-military-900 text-white"
    >
      {/* Cinematic Patriotic Light Effects */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-saffron-500/10 blur-[120px]"></div>
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-military-500/15 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-military-950/40 to-military-950 opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Power Titles & Hero Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="flex flex-wrap gap-3">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-military-800/80 border border-bronze-400/40 shadow-inner"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-saffron-500 animate-pulse"></span>
                <span className="text-[11px] font-display font-extrabold text-bronze-300 uppercase tracking-widest">
                  {currentLang === 'en' ? '★ LEADER IN DEFENCE TRAINING ★' : '★ राजस्थान की सर्वश्रेष्ठ डिफेंस एकेडमी ★'}
                </span>
              </motion.div>

              <motion.a
                href="https://www.instagram.com/ramdev_sir_fouji_factory/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-orange-500/10 border border-pink-500/30 hover:border-pink-500/80 shadow-lg transform active:scale-95 transition-all text-white cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-500" />
                <span className="text-[11px] font-display font-extrabold text-pink-400 hover:text-pink-300 uppercase tracking-widest flex items-center gap-1">
                  100K+ Instagram Family
                </span>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl uppercase tracking-tight leading-[1.05]">
                {currentLang === 'en' ? (
                  <>
                    DISCIPLINE IS THE <br />
                    <span className="text-saffron-500">WEAPON</span> OF <br />
                    <span className="text-patriotic-white border-b-2 border-bronze-400">VICTORY</span>
                  </>
                ) : (
                  <>
                    वीरता, अनुशासन <br />
                    और <span className="text-saffron-500">कुचामन जीत</span> का <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-military-400 border-b-2 border-bronze-400">अखंड संकल्प</span>
                  </>
                )}
              </h1>
              <h2 className="text-lg sm:text-xl font-bold font-display text-bronze-300 mt-3">
                {currentLang === 'en' ? 'KJ DEFENCE ACADEMY MALPURA (TONK)' : 'कुचामन जीत एकेडमी मालपुरा (टोंक)'}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal"
            >
              {currentLang === 'en' ? (
                "Step into the proving grounds where true patriots turn aspirations into action. From intensive physical conditioning and Agniveer specialized academic modules to strict military discipline, we forge champions."
              ) : (
                "मात्र एक ट्रेनिंग सेंटर नहीं, देश सेवा का महायज्ञ। फिजिकल ट्रेनिंग से लेकर लिखित परीक्षा के विशेषज्ञों द्वारा मार्गदर्शित क्लासरूम्स और हॉस्टल डिसीप्लिन तक। यहाँ भारतीय सेना, एयरफोर्स और नेवी का सैनिक बनने का आपका सपना हकीकत में बदलता है।"
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full max-w-md p-4 rounded-xl border border-bronze-500/20 bg-military-800/50 backdrop-blur-sm shadow-inner flex items-center gap-3.5"
            >
              <ShieldAlert className="w-10 h-10 text-saffron-500 flex-shrink-0" />
              <div>
                <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
                  {currentLang === 'en' ? 'Admission Open (Both Boys & Girls)' : 'प्रवेश सूचना ( छात्र एवं छात्राएं दोनों हेतु )'}
                </h4>
                <p className="text-[11px] text-gray-300 mt-0.5 leading-snug">
                  {currentLang === 'en' 
                    ? 'State-of-the-art residential campus with separate training and security.'
                    : 'सर्व-सुविधायुक्त अलग-अलग हॉस्टल कैंपस एवं छात्राओं के लिए सुरक्षित डिफेंस ग्राउंड।'}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-y-2.5 gap-x-6 w-full text-xs font-semibold"
            >
              {(currentLang === 'en' ? armyBranchesEn : armyBranchesHn).map((branch, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-200">
                  <CheckCircle className="w-4 h-4 text-military-500 fill-military-500/20" />
                  <span>{branch}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 w-full pt-2"
            >
              <button
                onClick={() => handleScrollToSegment('#contact')}
                className="flex-1 sm:flex-none justify-center bg-gradient-to-r from-saffron-500 via-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-display text-xs font-extrabold tracking-widest uppercase px-8 py-4 rounded-xl shadow-lg shadow-saffron-500/20 hover:shadow-saffron-500/30 transition-all transform hover:-translate-y-1 flex items-center gap-2.5 border-b-4 border-b-saffron-700 font-bold"
              >
                <span>{currentLang === 'en' ? 'ENROLL NOW' : 'प्रवेश के लिए आवेदन करें'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => handleScrollToSegment('#about')}
                className="flex-1 sm:flex-none justify-center bg-military-800/80 hover:bg-military-800 text-gray-100 hover:text-white font-display text-xs font-bold tracking-widest uppercase px-6 py-4 rounded-xl border border-bronze-500/30 hover:border-bronze-400 transition-all transform hover:-translate-y-1 flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-military-700 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 text-bronze-400 fill-bronze-400" />
                </div>
                <span>{currentLang === 'en' ? 'OUR VISION' : 'हमारा उद्देश्य देखें'}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Block: Owner Ramdev Choudhary Sir Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-saffron-500/20 to-military-500/20 rounded-2xl blur-xl opacity-85 group-hover:scale-105 duration-500 transition-all"></div>
              
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-bronze-400 via-military-800 to-military-900 border border-bronze-400/40 shadow-2xl">
                <div className="overflow-hidden rounded-xl relative aspect-[4/3] bg-military-950">
                  <img 
                    src="assets/owner1.png"
                    alt="Ramdev Choudhary Sir - Director, KJ Defence Academy" 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 flex">
                    <div className="flex-1 bg-[#FF9933]"></div>
                    <div className="flex-1 bg-[#FFFFFF]"></div>
                    <div className="flex-1 bg-[#138808]"></div>
                  </div>
                </div>

                <div className="p-4 bg-military-900/90 rounded-b-xl border-t border-bronze-500/10">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-bronze-400 fill-bronze-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wide">
                        {currentLang === 'en' ? 'OUR FOUNDER & DIRECTOR' : 'संस्थापक व निदेशक'}
                      </h4>
                      <p className="text-[11px] text-gray-300 mt-1 leading-normal italic">
                        {currentLang === 'en' 
                          ? 'Ramdev Choudhary Sir, committed to shaping the next generation of Indian warriors with discipline and valor.'
                          : 'रामदेव चौधरी सर, जो अनुशासन और वीरता के साथ भारतीय योद्धाओं की अगली पीढ़ी को तैयार करने के लिए समर्पित हैं।'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 -right-4 bg-gradient-to-r from-military-900 via-military-800 to-military-700 border-2 border-bronze-400 px-3.5 py-2.5 rounded-xl shadow-lg flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-saffron-500 flex items-center justify-center text-white font-bold text-xs shadow-inner">
                  80%
                </div>
                <div>
                  <div className="text-[10px] font-display font-extrabold uppercase tracking-wide text-bronze-300">
                    {currentLang === 'en' ? 'SELECTION RATE' : 'चयन रिकॉर्ड'}
                  </div>
                  <div className="text-[9px] text-gray-300">
                    {currentLang === 'en' ? 'Highest in Malpura Tonk' : 'मालपुरा टोंक में सर्वोत्तम'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}