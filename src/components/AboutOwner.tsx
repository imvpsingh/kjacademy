import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldAlert, Award, ChevronRight, Check } from 'lucide-react';

interface AboutOwnerProps {
  currentLang: 'en' | 'hn';
}

export default function AboutOwner({ currentLang }: AboutOwnerProps) {
  const highlightsEn = [
    'Personally supervised physical regimen (5:00 AM daily drills)',
    'Separate secure infrastructure for high-level student performance',
    'Elite curriculum catering directly to newly enforced Agniveer norms',
    'Durable focus on character molding and proud national values'
  ];

  const highlightsHn = [
    'स्वयं के निर्देशन में प्रतिदिन सुबह 5:00 बजे से कठोर फिजिकल ड्रिल',
    'उच्च-स्तरीय तैयारी के लिए आवश्यक सुरक्षित एवं सर्व-सुविधायुक्त ग्राउंड',
    'अग्निवीर के नए परीक्षा पैटर्न्स के अनुकूल विशेष लिखित परीक्षा नोट्स',
    'योग्यता व चरित्र निर्माण के साथ-साथ उत्कृष्ट देश-भक्ति के संस्कारों का समावेश'
  ];

  return (
    <section id="about" className="relative py-20 bg-military-900 border-b border-bronze-500/10 overflow-hidden z-20">
      
      {/* Background Patriotic Glow */}
      <div className="absolute inset-x-0 top-[20%] h-[60%] opacity-20 pointer-events-none">
        <div className="absolute left-[8%] w-[350px] h-[350px] bg-saffron-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute right-[8%] w-[350px] h-[350px] bg-military-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 text-[11px] font-display font-extrabold uppercase tracking-widest text-[#FF9933] bg-military-800/80 border border-bronze-500/20 px-3 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{currentLang === 'en' ? 'GENESIS OF SUCCESS' : 'जीत की नींव'}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mt-3">
            {currentLang === 'en' ? 'MEET OUR DIRECTOR' : 'मिलिए अकादमी के निदेशक से'}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-saffron-500 via-white to-military-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-sm text-gray-300 mt-4">
            {currentLang === 'en' 
              ? 'The relentless spirit driving Kuchaman Jeet Academy (KJ Defence Malpura) toward supreme training parameters.'
              : 'कुचामन जीत एकेडमी मालपुरा को भारतीय सेना की भर्ती हेतु सिरमौर बनाने वाले संकल्पवान मार्गदर्शक।'}
          </p>
        </div>

        {/* Owner Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Framed Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="relative max-w-sm w-full"
            >
              {/* Luxury Frame Glowing Backdrops */}
              <div className="absolute inset-0 bg-gradient-to-b from-saffron-500 via-bronze-400 to-military-500 opacity-25 rounded-2xl blur-lg transition duration-500 group-hover:opacity-40"></div>
              
              {/* The Actual Picture Frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-bronze-400 via-military-800 to-military-900 border border-bronze-500/30 shadow-2xl overflow-hidden group">
                
                {/* Director Portrait */}
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-military-950 relative">
                  <img 
                    src="assets/owner.png" 
                    alt="Ramdev Choudhary - Director of KJ Defence Academy" 
                    className="w-full h-full object-cover object-top scale-102 group-hover:scale-106 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    id="img-director-ramdev"
                  />
                  
                  {/* Subtle dark gradient overlay inside portrait */}
                  <div className="absolute inset-0 bg-gradient-to-t from-military-950/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-military-900/90 backdrop-blur-sm border border-bronze-500/20 p-3 rounded-lg">
                    <p className="text-[10px] font-mono tracking-widest text-[#FF9933] uppercase font-bold">Founder & Director</p>
                    <p className="font-display font-extrabold text-base text-white">Ramdev Choudhary</p>
                    <p className="text-[10px] text-gray-300">रामदेव चौधरी (शारीरिक एवं सामरिक विशेषज्ञ)</p>
                  </div>
                </div>

                {/* Stars Badge on Image corner */}
                <div className="absolute top-4 left-4 bg-saffron-500/90 text-white p-2 rounded-lg text-center flex flex-col items-center shadow-lg border border-saffron-300">
                  <div className="flex gap-0.5 mb-0.5">
                    <Star className="w-2.5 h-2.5 fill-current text-white" />
                    <Star className="w-2.5 h-2.5 fill-current text-white" />
                    <Star className="w-2.5 h-2.5 fill-current text-white" />
                  </div>
                  <span className="text-[8px] font-display font-black tracking-widest uppercase">ELITE MENTOR</span>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio details, vision, and pledge */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="border-l-4 border-[#FF9933] pl-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-bronze-400">DIRECTOR'S STATEMENT</span>
              <h3 className="font-display font-black text-2xl text-white uppercase mt-1">
                {currentLang === 'en' ? '"Our Mission is Eternal: Nation First"' : '"हमारा संकल्प अखंड: राष्ट्र सर्वोपरि"'}
              </h3>
            </div>

            {/* Inspiring Personal Message */}
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                {currentLang === 'en' ? (
                  "Welcome to Kuchaman Jeet Academy, Malpura. We believe that wearing the uniform is not just a profession, but a sacred covenant of sacrifice and honor with Mother India. In the heart of Rajasthan's youth lies persistent physical strength, which when paired with correct discipline and meticulous mentorship, creates indomitable defenders of our borders."
                ) : (
                  "कुचामन जीत डिफेंस एकेडमी, मालपुरा (टोंक) में आपका स्वागत है। हमारा दृढ़ विश्वास है कि सेना की वर्दी केवल एक रोज़गार नहीं, बल्कि भारत माता की सेवा और सम्मान का पावन संकल्प है। राजस्थान के हमारे युवाओं की रगों में असीम साहस और शारीरिक दृढ़ता है, जिसे यदि सही अनुशासन और विशेषज्ञ मार्गदर्शन मिले, तो वे देश की सीमाओं के अजय रक्षक बनते हैं।"
                )}
              </p>
              
              <blockquote className="border-y border-bronze-500/10 py-3 my-4 bg-military-850/50 rounded-lg px-4 italic text-bronze-300 relative font-display text-xs sm:text-sm">
                <span className="absolute top-1 left-2 font-black text-3xl opacity-20 text-[#FF9933]">“</span>
                {currentLang === 'en' 
                  ? "At KJ Defence, we mold both boys and girls separately with high psychological fortitude, unyielding stamina, and elite concepts. Under our watch, failures are sculpted into selections."
                  : "कुचामन जीत में, हम छात्र व छात्राओं दोनों को पृथक रूप से उच्च मनोवैज्ञानिक बल, दृढ़ स्टेमिना और उत्कृष्ट लिखित परीक्षा ज्ञान के साथ ढालते हैं। हमारे ग्राउंड पर दौड़ने वाले हर युवा के भीतर हमने विजय और स्वाभिमान का बीज बोया है।"
                }
                <span className="absolute bottom-1 right-2 font-black text-3xl opacity-20 text-military-500">”</span>
              </blockquote>
            </div>

            {/* Highlights checklist */}
            <div className="space-y-3">
              <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
                {currentLang === 'en' ? 'Why Train Under Ramdev Choudhary?' : 'रामदेव चौधरी के नेतृत्व में ही क्यों तैयारी करें?'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {(currentLang === 'en' ? highlightsEn : highlightsHn).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-military-800 border border-bronze-500/20 flex items-center justify-center text-saffron-500 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key credentials bar */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-military-850 border border-bronze-500/10 px-4 py-3 rounded-xl flex items-center gap-3">
                <Award className="w-5 h-5 text-saffron-500" />
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">ADMISSION ADVICE</div>
                  <div className="text-xs font-bold text-white uppercase">📲 +91 8233809848</div>
                </div>
              </div>
              
              <div className="bg-military-850 border border-bronze-500/10 px-4 py-3 rounded-xl flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-military-400" />
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">CAMPUS AREA</div>
                  <div className="text-xs font-bold text-white uppercase">{currentLang === 'en' ? 'MALPURA (TONK)' : 'मालपुरा (टोंक) कैंपस'}</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
