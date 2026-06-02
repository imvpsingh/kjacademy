import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, HelpCircle, Award, CheckCircle2, AlertTriangle, Sparkles, Heart } from 'lucide-react';

interface InteractiveWidgetProps {
  currentLang: 'en' | 'hn';
}

interface EligibilityCriteria {
  postNameEn: string;
  postNameHn: string;
  minAge: number;
  maxAge: number;
  minHeightBoys: number; // in cm
  minHeightGirls: number; // in cm
  qualificationEn: string;
  qualificationHn: string;
  qualCode: '10th' | '12th' | '12thSc';
}

export default function InteractiveWidget({ currentLang }: InteractiveWidgetProps) {
  // Salute Counter State
  const [saluteCount, setSaluteCount] = useState<number>(1947);
  const [saluted, setSaluted] = useState<boolean>(false);
  
  // Eligibility Calculator Inputs
  const [candidateGender, setCandidateGender] = useState<'boys' | 'girls'>('boys');
  const [candidateAge, setCandidateAge] = useState<number>(18);
  const [candidateHeight, setCandidateHeight] = useState<number>(170); // cm
  const [candidateQual, setCandidateQual] = useState<'10th' | '12th' | '12thSc'>('10th');
  const [calcSubmitted, setCalcSubmitted] = useState<boolean>(false);
  const [eligiblePosts, setEligiblePosts] = useState<EligibilityCriteria[]>([]);
  const [ineligiblePosts, setIneligiblePosts] = useState<EligibilityCriteria[]>([]);

  // Quote Index State
  const [currentQuoteIdx, setCurrentQuoteIdx] = useState<number>(0);

  // Initialize salute count from local storage
  useEffect(() => {
    const savedCount = localStorage.getItem('kj_salutes_count');
    if (savedCount) {
      setSaluteCount(parseInt(savedCount, 10));
    } else {
      const initialSeed = 8243 + Math.floor(Math.random() * 50);
      setSaluteCount(initialSeed);
      localStorage.setItem('kj_salutes_count', initialSeed.toString());
    }
  }, []);

  const handleSalutePress = () => {
    if (saluted) return;
    setSaluted(true);
    const newCount = saluteCount + 1;
    setSaluteCount(newCount);
    localStorage.setItem('kj_salutes_count', newCount.toString());
  };

  const militaryQuotes = [
    {
      authorEn: "Field Marshal Sam Manekshaw",
      authorHn: "फील्ड मार्शल सैम मानेकशॉ",
      quoteEn: "If a man says he is not afraid of dying, he is either lying or he is a Gurkha.",
      quoteHn: "यदि कोई मनुष्य कहता है कि वह मरने से नहीं डरता, तो वह या तो झूठ बोल रहा है या फिर वह गोरखा है।",
      titleEn: "Legendary Army Chief",
      titleHn: "महान थल सेना अध्यक्ष"
    },
    {
      authorEn: "Captain Vikram Batra (Param Vir Chakra)",
      authorHn: "कैप्टन विक्रम बत्रा (परमवीर चक्र)",
      quoteEn: "Either I will come back after hoisting the Tricolor, or I will come back wrapped in it, but I will be back for sure.",
      quoteHn: "या तो मैं तिरंगा फहराकर वापस आऊंगा, या फिर उसमें लिपटकर वापस आऊंगा, लेकिन मैं वापस जरूर आऊंगा।",
      titleEn: "Kargil Martyr & Hero",
      titleHn: "कारगिल शहीद व नायक"
    },
    {
      authorEn: "Major Shaitan Singh (Param Vir Chakra)",
      authorHn: "मेजर शैतान सिंह (परमवीर चक्र)",
      quoteEn: "A soldier fights not because he hates what is in front of him, but because he loves what is behind him.",
      quoteHn: "एक सैनिक इसलिए नहीं लड़ता कि उसे सामने वाले से नफरत है, बल्कि इसलिए लड़ता है क्योंकि उसे जो पीछे छोड़ आया है, उससे अथाह प्रेम है।",
      titleEn: "Hero of Rezang La",
      titleHn: "रेजांग ला के अमर शहीद"
    }
  ];

  const eligibilityDatabase: EligibilityCriteria[] = [
    {
      postNameEn: 'Agniveer GD (General Duty)',
      postNameHn: 'अग्निवीर जीडी (सामान्य ड्यूटी)',
      minAge: 17.5,
      maxAge: 21,
      minHeightBoys: 170,
      minHeightGirls: 162,
      qualificationEn: '10th Class Metric Passed with 45% aggregate score',
      qualificationHn: '10वीं कक्षा न्यूनतम 45% अंकों के साथ उत्तीर्ण',
      qualCode: '10th'
    },
    {
      postNameEn: 'Agniveer Clerk / SKT',
      postNameHn: 'अग्निवीर स्टोर कीपर / क्लर्क',
      minAge: 17.5,
      maxAge: 21,
      minHeightBoys: 162,
      minHeightGirls: 162,
      qualificationEn: '12th Class Intermediate Passed in Arts/Science/Commerce with 60%',
      qualificationHn: '12वीं कक्षा (कला/विज्ञान/वाणिज्य) न्यूनतम 60% अंकों के साथ उत्तीर्ण',
      qualCode: '12th'
    },
    {
      postNameEn: 'Agniveer Technical Wing',
      postNameHn: 'अग्निवीर टेक्निकल शाखा',
      minAge: 17.5,
      maxAge: 21,
      minHeightBoys: 170,
      minHeightGirls: 162,
      qualificationEn: '12th Class Passed in Science with Physics, Chemistry, Maths & English',
      qualificationHn: '12वीं कक्षा केवल भौतिकी, रसायन व गणित (PCM) के साथ उत्तीर्ण',
      qualCode: '12thSc'
    },
    {
      postNameEn: 'Air Force Agniveer Vayu (Science)',
      postNameHn: 'वायु सेना अग्निवीर (विज्ञान शाखा)',
      minAge: 17.5,
      maxAge: 21,
      minHeightBoys: 152.5,
      minHeightGirls: 152.5,
      qualificationEn: '12th Intermediate with Physics, Mathematics and English with 50%',
      qualificationHn: '12वीं कक्षा गणित एवं भौतिकी के साथ न्यूनतम 50% अंकों के साथ उत्तीर्ण',
      qualCode: '12thSc'
    },
    {
      postNameEn: 'Air Force Agniveer Vayu (Non-Science)',
      postNameHn: 'वायु सेना अग्निवीर (गैर-विज्ञान शाखा/Y Group)',
      minAge: 17.5,
      maxAge: 21,
      minHeightBoys: 152.5,
      minHeightGirls: 152.5,
      qualificationEn: '12th Intermediate in any stream with minimum 50% marks',
      qualificationHn: '12वीं कक्षा किसी भी संकाय में न्यूनतम 50% अंकों के साथ उत्तीर्ण',
      qualCode: '12th'
    }
  ];

  const handleRunCalculator = (e: React.FormEvent) => {
    e.preventDefault();
    const passed: EligibilityCriteria[] = [];
    const failed: EligibilityCriteria[] = [];

    eligibilityDatabase.forEach((criteria) => {
      // Age check
      const isAgeOk = candidateAge >= criteria.minAge && candidateAge <= criteria.maxAge;
      
      // Height check
      const requiredHeight = candidateGender === 'boys' ? criteria.minHeightBoys : criteria.minHeightGirls;
      const isHeightOk = candidateHeight >= requiredHeight;
      
      // Qualification priority: 
      // 12thSc qualifies for everything (10th, 12th, 12thSc).
      // 12th qualifies for 10th and 12th.
      // 10th qualifies only for 10th.
      let isQualOk = false;
      if (candidateQual === '12thSc') {
        isQualOk = true; // matches 10th, 12th, 12thSc
      } else if (candidateQual === '12th') {
        isQualOk = criteria.qualCode !== '12thSc'; // matches 10th and 12th
      } else if (candidateQual === '10th') {
        isQualOk = criteria.qualCode === '10th'; // matches only 10th
      }

      if (isAgeOk && isHeightOk && isQualOk) {
        passed.push(criteria);
      } else {
        failed.push(criteria);
      }
    });

    setEligiblePosts(passed);
    setIneligiblePosts(failed);
    setCalcSubmitted(true);
  };

  return (
    <section id="eligibility" className="relative py-20 bg-military-900 border-b border-bronze-500/10 z-20">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-saffron-500/5 via-transparent to-military-500/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-display font-extrabold uppercase tracking-widest text-[#FF9933] bg-military-850/80 border border-bronze-500/20 px-3.5 py-1.5 rounded-full shadow-md">
            <Target className="w-3.5 h-3.5 text-saffron-500" />
            <span>{currentLang === 'en' ? 'INTERACTIVE PORTAL' : 'योग्यता जांच एवं देश भक्ति'}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mt-3">
            {currentLang === 'en' ? 'ELIGIBILITY CALC & MOTIVATORY HUB' : 'सैन्य योग्यता कैलकुलेटर'}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-saffron-500 via-white to-military-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            {currentLang === 'en' 
              ? 'Calculate your recruitment compatibility across elite armed divisions instantly and explore inspiring letters from legendary warriors.'
              : 'क्या आप भारतीय सेना में शामिल होने के योग्य हैं? अपनी उम्र, लंबाई और शिक्षा भरें तथा तुरंत जांचें कि आप किन श्रेणियों के लिए फॉर्म भर सकते हैं।'}
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column A: Interactive Eligibility Calculator */}
          <div className="lg:col-span-7 bg-military-850/80 border border-bronze-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-saffron-500 text-white rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-black text-base uppercase text-white tracking-wide">
                  {currentLang === 'en' ? 'Defence Standards Calculator' : 'आर्मी भर्ती मानक कैलकुलेटर'}
                </h3>
                <p className="text-[11px] text-gray-400">
                  {currentLang === 'en' ? 'Compliance checking as per newly enforced Agniveer norms' : 'नवीनतम राजपत्रित अग्निवीर भर्ती दिशानिर्देशों पर आधारित'}
                </p>
              </div>
            </div>

            <form onSubmit={handleRunCalculator} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Gender Toggle */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wide mb-2">
                    {currentLang === 'en' ? 'Candidate Gender' : 'अभ्यर्थी का लिंग'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => { setCandidateGender('boys'); setCalcSubmitted(false); }}
                      className={`py-3 px-4 rounded-xl border font-display text-xs font-bold uppercase transition-all ${
                        candidateGender === 'boys' 
                          ? 'bg-military-500 border-military-400 text-white shadow-md' 
                          : 'bg-military-900 border-military-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      {currentLang === 'en' ? '👦 Boys' : '👦 छात्र'}
                    </button>
                    <button
                      type="button"
                      onClick={() => { setCandidateGender('girls'); setCalcSubmitted(false); }}
                      className={`py-3 px-4 rounded-xl border font-display text-xs font-bold uppercase transition-all ${
                        candidateGender === 'girls' 
                          ? 'bg-saffron-500 border-saffron-400 text-white shadow-md' 
                          : 'bg-military-900 border-military-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      {currentLang === 'en' ? '👧 Girls' : '👧 छात्रा'}
                    </button>
                  </div>
                </div>

                {/* Age Input */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wide mb-2">
                    {currentLang === 'en' ? `Age (Years): ${candidateAge}` : `उम्र (वर्ष): ${candidateAge}`}
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="16"
                      max="24"
                      step="0.5"
                      value={candidateAge}
                      onChange={(e) => { setCandidateAge(parseFloat(e.target.value)); setCalcSubmitted(false); }}
                      className="w-full accent-saffron-500 bg-military-900 h-2 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="w-12 text-center bg-military-900 border border-military-800 py-1 rounded text-xs font-mono font-bold text-[#FF9933]">
                      {candidateAge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Height Input */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wide mb-2">
                    {currentLang === 'en' ? `Height: ${candidateHeight} cm` : `लंबाई: ${candidateHeight} सेमी (cm)`}
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="145"
                      max="195"
                      value={candidateHeight}
                      onChange={(e) => { setCandidateHeight(parseInt(e.target.value, 10)); setCalcSubmitted(false); }}
                      className="w-full accent-military-500 bg-military-900 h-2 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="w-14 text-center bg-military-900 border border-military-800 py-1 rounded text-xs font-mono font-bold text-military-400">
                      {candidateHeight}
                    </span>
                  </div>
                </div>

                {/* Qualification Selector */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wide mb-2">
                    {currentLang === 'en' ? 'Education Level' : 'शैक्षणिक योग्यता'}
                  </label>
                  <select
                    value={candidateQual}
                    onChange={(e) => { setCandidateQual(e.target.value as any); setCalcSubmitted(false); }}
                    className="w-full bg-military-900 border border-military-800 py-3 px-4 rounded-xl text-xs text-stone-200 focus:outline-none focus:border-bronze-500 transition-colors"
                  >
                    <option value="10th">{currentLang === 'en' ? '10th Class (Metric) Passed' : '10वीं (मैट्रिक/High School) पास'}</option>
                    <option value="12th">{currentLang === 'en' ? '12th Intermediate (Arts / Commerce)' : '12वीं (कला / वाणिज्य संकाय)'}</option>
                    <option value="12thSc">{currentLang === 'en' ? '12th Intermediate (Science with Math/PCM)' : '12वीं (विज्ञान / गणित विषय के साथ)'}</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-saffron-550 via-[#C5A059] to-military-550 text-white font-display text-xs font-black tracking-widest uppercase shadow-md hover:shadow-lg transition-transform transform active:scale-98 cursor-pointer"
                id="btn-evaluate-eligibility"
              >
                {currentLang === 'en' ? 'EVALUATE ELIGIBILITY' : 'भर्ती पात्रता की जांच करें'}
              </button>

            </form>

            {/* Results Animation Window */}
            <AnimatePresence>
              {calcSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 pt-6 border-t border-bronze-500/10 space-y-4"
                >
                  <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
                    {currentLang === 'en' ? 'Evaluation Summary' : 'जांच रिपोर्ट का परिणाम'}
                  </h4>

                  {eligiblePosts.length > 0 ? (
                    <div className="space-y-2.5">
                      <div className="px-3.5 py-2.5 rounded-lg bg-military-500/10 border border-military-500/30 text-military-400 text-xs flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>
                          {currentLang === 'en'
                            ? `Congratulation! Eligible for ${eligiblePosts.length} prestigious sector(s).`
                            : `बधाई हो! आप नीचे दी गई ${eligiblePosts.length} श्रेणियों के लिए पूर्णतः पात्र हैं।`}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {eligiblePosts.map((post, index) => (
                          <div key={index} className="p-3.5 rounded-xl bg-military-900 border border-military-800 flex flex-col justify-between">
                            <span className="font-display font-bold text-xs text-white">
                              {currentLang === 'en' ? post.postNameEn : post.postNameHn}
                            </span>
                            <span className="text-[10px] text-bronze-400 mt-1 leading-normal font-sans">
                              {currentLang === 'en' ? post.qualificationEn : post.qualificationHn}
                            </span>
                            <div className="mt-2.5 flex justify-between items-center text-[9px] text-[#138808] font-bold">
                              <span>✓ AGE / HEIGHT ELIGIBLE</span>
                              <span className="bg-[#138808]/15 px-2 py-0.5 rounded uppercase">Fit</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-saffron-500/5 border border-saffron-500/20 text-saffron-500 text-xs space-y-2">
                      <div className="flex items-center gap-2 font-bold uppercase tracking-wide">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        <span>{currentLang === 'en' ? 'Standards Under Review' : 'सुधार की आवश्यकता है'}</span>
                      </div>
                      <p className="text-[11px] text-gray-300 leading-normal">
                        {currentLang === 'en'
                          ? "We could not find direct match. Usually, Army recruitment age limit is strictly 17.5 to 21 years with height requirements (from 152.5cm up to 170cm based on wing and gender). Please consult Director Ramdev Choudhary at 8233809848 for custom relaxations & guidance."
                          : "अग्निवीर के नियमों के अनुसार उम्र सीमा 17.5 से 21 वर्ष है। आपकी चुनी हुई उम्र/लंबाई मानकों के निकट है परंतु पूर्ण सीमा में नहीं है। कृपया विशेष छूट नियमों व उचित मार्गदर्शन के लिए अकादमी निदेशक रामदेव चौधरी (8233809848) से सीधे संपर्क कर जानकारी प्राप्त करें।"}
                      </p>
                    </div>
                  )}

                  {/* Suggestive Callout of Academy */}
                  <div className="p-3 bg-military-900 rounded-xl border border-bronze-500/10 text-[11px] text-gray-400 flex items-start gap-2 leading-relaxed">
                    <span className="text-saffron-500">★</span>
                    <span>
                      {currentLang === 'en'
                        ? "Did you know? Under-height or overweight candidates can be safely optimized using high-performance sports training in our academy."
                        : "क्या आप जानते हैं? कम लम्बाई (विशेषतः बालिकाओं की) व शारीरिक रूप से कमजोर युवाओं को अकादमी के विशेष साइंटिफिक अभ्यासों द्वारा परीक्षा योग्य बनाया जाता है।"}
                    </span>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Column B: Salute & National Pride Window */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Motivation Quote Box */}
            <div className="bg-gradient-to-br from-military-850 to-military-900 border border-bronze-500/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-2 right-4 text-9xl text-bronze-500/5 font-display font-black pointer-events-none">"</div>
              
              <div className="flex items-center justify-between mb-4 border-b border-bronze-500/10 pb-3">
                <span className="text-[10px] font-mono tracking-widest text-[#FF9933] font-bold uppercase">
                  {currentLang === 'en' ? 'WARRIOR\'S WISDOM' : 'वीर अमर वाणी'}
                </span>
                <span className="text-xs bg-military-900 text-bronze-400 px-2 py-0.5 rounded font-mono font-bold">
                  {currentQuoteIdx + 1} / {militaryQuotes.length}
                </span>
              </div>

              <div className="min-h-[110px] flex flex-col justify-center">
                <p className="text-sm text-stone-200 leading-relaxed italic font-medium">
                  "{currentLang === 'en' ? militaryQuotes[currentQuoteIdx].quoteEn : militaryQuotes[currentQuoteIdx].quoteHn}"
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-xs text-white">
                    {currentLang === 'en' ? militaryQuotes[currentQuoteIdx].authorEn : militaryQuotes[currentQuoteIdx].authorHn}
                  </h4>
                  <p className="text-[10px] text-gray-400">
                    {currentLang === 'en' ? militaryQuotes[currentQuoteIdx].titleEn : militaryQuotes[currentQuoteIdx].titleHn}
                  </p>
                </div>

                <button
                  onClick={() => setCurrentQuoteIdx((prev) => (prev + 1) % militaryQuotes.length)}
                  className="bg-military-800 hover:bg-military-750 text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-bronze-500/15 text-white transform active:scale-95 transition-all uppercase cursor-pointer"
                >
                  {currentLang === 'en' ? 'Next' : 'अगला विचार'}
                </button>
              </div>
            </div>

            {/* Interactive Tribute block (Martyrs Salute counter) */}
            <div className="bg-gradient-to-br from-[#101c13] to-military-950 border border-bronze-500/20 rounded-2xl p-6 text-center space-y-4 shadow-xl relative">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron-500 via-white to-military-500"></div>
              
              <div className="mx-auto w-12 h-12 rounded-full bg-military-900 border border-bronze-500/15 flex items-center justify-center text-rose-500 shadow-inner">
                <Heart className={`w-6 h-6 ${saluted ? 'fill-rose-500 animate-ping' : ''}`} />
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
                  {currentLang === 'en' ? 'TRIBUTE TO THE BRAVEHEARTS' : 'अमर शहीदों को श्रद्धांजलि'}
                </h3>
                <p className="text-[11px] text-gray-400 max-w-xs mx-auto leading-normal">
                  {currentLang === 'en' 
                    ? 'Press the National Pride button to pay a solemn virtual salute to our martyrs.'
                    : 'विजयी सेनानियों और सरहद पर डटे वीर अमर शहीदों के सम्मान में एक वर्चुअल सलामी दर्ज करें।'}
                </p>
              </div>

              {/* Salute Counter Display */}
              <div className="py-2.5 px-4 bg-military-900/60 rounded-xl max-w-[200px] mx-auto border border-bronze-500/15">
                <span className="text-[9px] font-mono tracking-widest uppercase text-bronze-400 block font-bold">TOTAL SALUTES</span>
                <span className="text-2xl font-display font-black text-white tracking-widest font-mono">
                  {saluteCount.toLocaleString()}
                </span>
              </div>

              {/* Interactive Button */}
              <button
                onClick={handleSalutePress}
                disabled={saluted}
                className={`w-full py-4.5 rounded-xl font-display text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-md ${
                  saluted 
                    ? 'bg-military-800 text-military-400 border border-military-700 pointer-events-none' 
                    : 'bg-gradient-to-r from-saffron-500 to-saffron-700 text-white hover:from-saffron-600 hover:to-saffron-800 border-b-4 border-[#9e3dd0]/0 border-b-saffron-800 transform active:translate-y-1 cursor-pointer'
                }`}
                id="btn-tribute-salute"
              >
                <span>🫡</span>
                <span>
                  {saluted 
                    ? (currentLang === 'en' ? 'SALUTE RECORDED ✓' : 'सलामी दर्ज की गई ✓') 
                    : (currentLang === 'en' ? 'TAP TO PAY JAI HIND SALUTE' : 'जय हिन्द सलामी दें 🫡')
                  }
                </span>
              </button>

              <p className="text-[10px] text-gray-500 italic">
                {currentLang === 'en' ? '“Our flag does not fly because the wind moves it, it flies with the last breath of each soldier who died protecting it.”' : '“तिरंगा हवाओं से नहीं, बल्कि वर्दी धारकों की अंतिम सांसों की पवित्रता तथा बलिदान से लहराता है।”'}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
