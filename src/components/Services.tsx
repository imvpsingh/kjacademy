import React from 'react';
import { motion } from 'motion/react';
import { Shield, BookOpen, Dumbbell, Coffee, Home, Award, Sparkles, AlertCircle } from 'lucide-react';

interface ServicesProps {
  currentLang: 'en' | 'hn';
}

export default function Services({ currentLang }: ServicesProps) {
  
  const servicesData = [
    {
      id: 'agniveer',
      icon: <Shield className="w-8 h-8 text-saffron-500" />,
      titleEn: 'Army & Agniveer Specialists',
      titleHn: 'सेना एवं अग्निविर विशेष बैच',
      descEn: 'Comprehensive tactical and physical preparation for Agneepath entries (GD, Clerk, Tradesman, Technical) tailored to newly introduced exam structures.',
      descHn: 'भारतीय थल सेना व अग्निवीर (GD, क्लर्क, टेक्निकल, ट्रेड्समैन) के लिए शुरू से अंत तक शारीरिक एवं रणनीतिक उत्कृष्ट तैयारी व्यवस्था।',
      bulletsEn: ['Special targeted test-series', 'Simulated online CBT exams', 'Physical test compliance drills'],
      bulletsHn: ['विशेष टारगेट टेस्ट-सीरीज', 'ऑनलाइन कंप्यूटर आधारित परीक्षा (CBT) अभ्यास', 'फिजिकल टेस्ट अनुरूप कठोर ड्रिल'],
      badgeEn: 'Regular & Agniveer',
      badgeHn: 'रेगुलर व अग्निवीर'
    },
    {
      id: 'physical',
      icon: <Dumbbell className="w-8 h-8 text-bronze-400" />,
      titleEn: 'Elite Physical Training',
      titleHn: 'शानदार फिजिकल ट्रेनिंग',
      descEn: 'Rigorous daily morning & evening training schedule under senior instructors on customized running tracks. Special sprint & endurance-building plans.',
      descHn: 'निदेशक रामदेव चौधरी जी व सैन्य कोचों की देखरेख में सुबह-शाम 1600 मीटर दौड़ की समयबद्ध तैयारी, हाई जम्प, लॉन्ग जम्प एवं पुल-अप्स मार्गदर्शन।',
      bulletsEn: ['1600m timed track pacing', 'Obstacle courses & stamina building', 'Daily progress assessment logs'],
      bulletsHn: ['1600 मीटर समयबद्ध ट्रैक रनिंग', 'विभिन्न बाधा दौड़ एवं पुल-अप्स अभ्यास', 'दैनिक शारीरक विकास ट्रैकिंग'],
      badgeEn: 'Specialist Instructors',
      badgeHn: 'विशेषज्ञ सैन्य कोच'
    },
    {
      id: 'study',
      icon: <BookOpen className="w-8 h-8 text-military-500" />,
      titleEn: 'Smart Digital Classrooms',
      titleHn: 'डिजिटल स्टडी व लिखित परीक्षा',
      descEn: 'Highly researched custom study material & daily classes conducted by master educators. Consistent weekly simulation tests with diagnostic feedback.',
      descHn: 'अनुभवी अध्यापकों द्वारा नवीनतम सिलेबस के अनुसार स्मार्ट क्लासरूम में अध्यापन। परीक्षा के डर को दूर करने के लिए प्रति रविवार विशेष मॉक टेस्ट एवं टेस्ट-सीरीज।',
      bulletsEn: ['Expert subject teachers', 'Bilingual notes & custom booklets', 'Personal doubt solving sections'],
      bulletsHn: ['विषय विशेषज्ञ शिक्षक', 'द्विभाषी विशेष नोट्स व हस्तलिखित किताबें', 'दैनिक व्यक्तिगत डाउट कक्षाएं'],
      badgeEn: '90%+ Exam Success',
      badgeHn: '90%+ लिखित परीक्षा सफलता'
    },
    {
      id: 'food',
      icon: <Coffee className="w-8 h-8 text-saffron-500" />,
      titleEn: 'Supervised Nutritious Diet',
      titleHn: 'पौष्टिक एवं संतुलित आहार',
      descEn: 'Strict dietary control designed to build maximum stamina. Fresh dairy milk, rich proteins, sprouts, seasonal fruits, and high-standard hygienic preparation.',
      descHn: 'फिजिकल स्टेमिना को शिखर पर ले जाने हेतु संतुलित व पौष्टिक भोजन। अंकुरित अनाज, केला, दलिया, देशी भैंस का शुद्ध दूध व स्वच्छ रसोई व्यवस्था।',
      bulletsEn: ['In-house high hygiene mess', 'Daily dairy milk & rich protein', 'Clean filter drinking water'],
      bulletsHn: ['हाइजीनिक भोजन कक्ष व स्वादिष्ट व्यंजन', 'नियमित ताजा दूध, चना-मूंग अंकुरित', 'आरओ (RO) युक्त शीतल शुद्ध जल'],
      badgeEn: 'Healthy Stamina Base',
      badgeHn: 'पूर्णतः घर जैसा पौष्टिक भोजन'
    },
    {
      id: 'accomodation',
      icon: <Home className="w-8 h-8 text-bronze-400" />,
      titleEn: 'Premium Secure Hostels',
      titleHn: 'सर्व-सुविधायुक्त हॉस्टल निवास',
      descEn: 'Modern, fully secure residential hostel infrastructure. Separate dedicated wings for boys and girls with total security, CCTV surveillance, and strict study hours.',
      descHn: 'अनुशासित छात्रावास सुविधा। छात्र तथा छात्राओं के लिए अलग-अलग हॉस्टल्स, सुरक्षा प्रहरियों की तैनाती व 24 घंटे सुरक्षा निगरानी।',
      bulletsEn: ['Dedicated girls wing with lady wardens', 'Strict mandatory self-study hours', '24/7 CCTV & guard security'],
      bulletsHn: ['छात्राओं के लिए अलग विंग व फीमेल वार्डन', 'अनिवार्य रात्रि सेल्फ-स्टडी अवर्स', '24/7 सीसीटीवी कैमरा व गार्ड्स सुरक्षा'],
      badgeEn: 'Girls & Boys Separate',
      badgeHn: 'छात्र-छात्राओं के लिए अलग हॉस्टल्स'
    },
    {
      id: 'airforce',
      icon: <Award className="w-8 h-8 text-military-500" />,
      titleEn: 'Air Force & Navy Wing',
      titleHn: 'वायु सेना व नौसेना ट्रेनिंग',
      descEn: 'Elite coaching focused on non-commissioned exams (IAF Agniveer Vayu, Navy MR/SSR) complete with Phase-X physical stamina drills and medical test reviews.',
      descHn: 'एयरफोर्स(Vayu) एवं नेवी (MR/SSR) हेतु विशेष रूप से लिखित परीक्षा व द्वितीय चरण (Phase-2) की शारीरिक परीक्षा की पूर्ण तैयारी।',
      bulletsEn: ['Phase II physical testing prep', 'Basic medical pre-check assistance', 'English speaking & attitude training'],
      bulletsHn: ['फेज-2 ग्रुप डिस्कशन व फिजिकल कोचिंग', 'मेडिकल प्री-चेकअप सुविधाएं', 'विशेष अंग्रेजी व इंटरव्यू गाइडेंस'],
      badgeEn: 'Comprehensive Training',
      badgeHn: 'पूर्ण डिफेंस चयन गाइड'
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-military-950 border-b border-bronze-500/10 z-20">
      
      {/* Visual Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-military-900/40 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-display font-extrabold uppercase tracking-widest text-[#FF9933] bg-military-900/90 border border-bronze-500/20 px-3.5 py-1.5 rounded-full shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-bronze-400" />
            <span>{currentLang === 'en' ? 'OUR DRILLS & CAPABILITIES' : 'प्रशिक्षण एवं सुविधाएं'}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mt-3">
            {currentLang === 'en' ? 'ACADEMY CORNERSTONE SERVICES' : 'अकादमी के प्रमुख ट्रेनिंग सेगमेंट्स'}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-saffron-500 via-white to-military-500 mx-auto mt-4 rounded-full"></div>
          
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            {currentLang === 'en' 
              ? 'At KJ Defence Academy, every service is optimized with military rigor. We provide robust options designed to transform raw potential into national defense uniforms.'
              : 'कुचामन जीत एकेडमी में हर एक सुविधा एक लक्ष्य को रखकर बनाई गई है - आपकी निश्चित सफलता। हम छात्र और छात्राओं के उत्कृष्ट कल के लिए प्रतिबद्ध हैं।'}
          </p>
        </div>

        {/* Highlighting Boys & Girls Separate Wing Alert Bar */}
        <div className="max-w-4xl mx-auto mb-12 p-3.5 rounded-xl bg-military-900 border border-saffron-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-saffron-500 flex-shrink-0" />
            <p className="text-xs text-gray-200">
              {currentLang === 'en' 
                ? '⭐ Separate professional hostels & state-approved safe zones for girls with dedicated security.'
                : '⭐ छात्राओं के लिए सुरक्षित परिवेश, पृथक महिला हॉस्टल, सीसीटीवी तथा समर्पित सुरक्षा प्रहरी उपलब्ध हैं।'}
            </p>
          </div>
          <span className="px-3.5 py-1 rounded bg-[#FF9933] text-white font-display text-[10px] font-extrabold uppercase tracking-widest">
            {currentLang === 'en' ? 'SAFETY GUARANTEED' : 'पूर्ण सुरक्षा वारंटी'}
          </span>
        </div>

        {/* Services Grid using Premium Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl hover:border-bronze-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Back lighting glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/5 to-military-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                {/* Icon & Badge Container */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-military-900 border-2 border-bronze-500/20 rounded-xl flex items-center justify-center group-hover:border-bronze-400 group-hover:bg-military-850 transition-all shadow-inner">
                    {service.icon}
                  </div>
                  <span className="text-[9px] font-display font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-military-900 border border-bronze-500/20 text-[#dfb56c]">
                    {currentLang === 'en' ? service.badgeEn : service.badgeHn}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display font-black text-lg text-white uppercase tracking-wide mb-2.5 group-hover:text-bronze-300 transition-colors">
                  {currentLang === 'en' ? service.titleEn : service.titleHn}
                </h3>
                
                <p className="text-xs text-gray-300 leading-relaxed mb-5 font-normal">
                  {currentLang === 'en' ? service.descEn : service.descHn}
                </p>

                {/* Bullets List */}
                <ul className="space-y-2 border-t border-bronze-500/10 pt-4 mb-6">
                  {(currentLang === 'en' ? service.bulletsEn : service.bulletsHn).map((bullet, index) => (
                    <li key={index} className="flex items-center gap-2.5 text-[11px] text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron-500"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action indicator */}
              <div className="flex items-center justify-between text-[11px] font-display font-bold uppercase tracking-wider text-bronze-400 group-hover:text-white transition-colors">
                <span>{currentLang === 'en' ? 'Admission Active' : 'प्रवेश चालू है'}</span>
                <span className="text-saffron-500 group-hover:translate-x-1.5 transition-transform duration-300">★</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
