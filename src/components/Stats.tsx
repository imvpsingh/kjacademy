import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Shield, Building2, Instagram } from 'lucide-react';

interface StatsProps {
  currentLang: 'en' | 'hn';
}

export default function Stats({ currentLang }: StatsProps) {
  const statsList = [
    {
      icon: <Award className="w-6 h-6 text-saffron-500" />,
      number: '500+',
      titleEn: 'Armed Selections',
      titleHn: 'कुल सरकारी चयन',
      descEn: 'Proud alumni serving the nation in Indian Armed Forces & Constabulary.',
      descHn: 'भारतीय थल सेना, वायु सेना, नौसेना व राजस्थान पुलिस में सेवाएं दे रहे नौजवान।'
    },
    {
      icon: <Users className="w-6 h-6 text-bronze-400" />,
      number: '1500+',
      titleEn: 'Trained Aspirants',
      titleHn: 'प्रशिक्षित छात्र व छात्राएं',
      descEn: 'Discipline and rigorous physical standards taught with military care.',
      descHn: 'कठोर शारीरिक मापदंडों और अनुशासन के साथ प्रशिक्षित हो चुके युवा।'
    },
    {
      icon: <Building2 className="w-6 h-6 text-military-500" />,
      number: '100%',
      titleEn: 'Residential Campus',
      titleHn: 'सर्व-सुविधायुक्त हॉस्टल्स',
      descEn: 'Separate hostels, mess with balanced protein diet, and clean drinking water.',
      descHn: 'छात्र-छात्राओं के लिए पृथक हॉस्टल, संतुलित पौष्टिक भोजन व्यवस्था।'
    },
    {
      icon: <Shield className="w-6 h-6 text-saffron-500" />,
      number: '100%',
      titleEn: 'Zero-Tolerance Safety',
      titleHn: 'सुरक्षित परिसर व अनुशासन',
      descEn: '24/7 CCTV vigilance and strict guard duties ensuring absolute discipline.',
      descHn: '24/7 सीसीटीवी सुरक्षा प्रहरी एवं कड़े सैन्य अनुशासन की व्यवस्था।'
    },
    {
      icon: <Instagram className="w-6 h-6 text-pink-500" />,
      number: '100K+',
      titleEn: 'Instagram Family',
      titleHn: 'इंस्टाग्राम परिवार',
      descEn: 'Rajasthan’s premier online community watching real physical coaching videos daily.',
      descHn: 'रोज़ाना की फिजिकल ड्रिल, मोटिवेशनल वीडियो व भर्ती अपडेट्स के लिए हमसे जुड़ें।',
      link: 'https://www.instagram.com/ramdev_sir_fouji_factory/'
    }
  ];

  return (
    <section className="relative bg-military-950 py-12 border-y border-bronze-500/10 z-20">
      <div className="absolute inset-x-0 bottom-0 top-0 opacity-15 bg-[linear-gradient(to_right,rgba(224,102,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,97,67,0.05)_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {statsList.map((stat, idx) => {
            const CardContent = (
              <>
                {/* Highlight ribbon representing Tiranga */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-saffron-500 via-white to-military-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-military-900 border border-bronze-500/10 flex items-center justify-center shadow-inner">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-bronze-300">
                      {stat.number}
                    </div>
                  </div>
                </div>

                <h4 className="font-display font-extrabold text-sm text-bronze-300 uppercase tracking-wide">
                  {currentLang === 'en' ? stat.titleEn : stat.titleHn}
                </h4>
                
                <p className="text-xs text-gray-400 mt-1.5 leading-normal">
                  {currentLang === 'en' ? stat.descEn : stat.descHn}
                </p>

                {stat.link && (
                  <div className="mt-3 pt-2 border-t border-bronze-500/10 flex items-center justify-between text-[10px] uppercase font-mono font-bold text-pink-400 group-hover:text-pink-300 transition-colors">
                    <span>★ Follow Live 📸</span>
                    <span>☞</span>
                  </div>
                )}
              </>
            );

            if (stat.link) {
              return (
                <motion.a
                  key={idx}
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-xl hover:bg-military-800/50 shadow-lg hover:shadow-xl transition-all relative group block cursor-pointer border border-[#e1306c]/30 hover:border-[#e1306c]/80"
                >
                  {CardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-xl hover:bg-military-800/50 shadow-lg hover:shadow-xl transition-all relative group"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
