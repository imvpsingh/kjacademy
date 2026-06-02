import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Lock, Eye, Trash2, Check, Download, Landmark, Compass, ShieldAlert } from 'lucide-react';
import { ContactInquiry } from '../types';

interface ContactFormProps {
  currentLang: 'en' | 'hn';
}

export default function ContactForm({ currentLang }: ContactFormProps) {
  // Local submissions pool
  const [submissions, setSubmissions] = useState<ContactInquiry[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminError, setAdminError] = useState('');
  
  // Registration Form state
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [courseSelected, setCourseSelected] = useState('Agniveer GD');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState<'boys' | 'girls'>('boys');
  const [weight, setWeight] = useState<number>(60);
  const [height, setHeight] = useState<number>(170);
  const [qualification, setQualification] = useState('12th Pass');
  
  // Form submission feedback state
  const [formSuccess, setFormSuccess] = useState(false);
  const [successId, setSuccessId] = useState('');

  // Load submissions on mount
  useEffect(() => {
    const saved = localStorage.getItem('kj_admissions_leads');
    if (saved) {
      setSubmissions(JSON.parse(saved));
    }
  }, []);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Core validations
    if (fullName.trim() === '' || phoneNumber.trim() === '' || fatherName.trim() === '') {
      alert(currentLang === 'en' ? 'Please fill out all mandatory fields!' : 'कृपया सभी आवश्यक फ़ील्ड भरें!');
      return;
    }

    const uniqueId = 'KJ-' + Math.floor(100000 + Math.random() * 900000);
    const newLead: ContactInquiry = {
      id: uniqueId,
      fullName,
      fatherName,
      phoneNumber,
      courseSelected,
      city,
      gender,
      weight,
      height,
      qualification,
      submittedAt: new Date().toLocaleDateString(currentLang === 'en' ? 'en-US' : 'hi-IN') + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'New'
    };

    const updated = [newLead, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('kj_admissions_leads', JSON.stringify(updated));

    // Reset user form state
    setSuccessId(uniqueId);
    setFormSuccess(true);
    setFullName('');
    setFatherName('');
    setPhoneNumber('');
    setCity('');
    
    // Auto timeout on success panel
    setTimeout(() => {
      setFormSuccess(false);
    }, 7000);
  };

  const unlockAdminPanel = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password is '1947' (patriotic hint given)
    if (adminPassword === '1947' || adminPassword === 'जीत' || adminPassword === '1234') {
      setAdminUnlocked(true);
      setAdminError('');
    } else {
      setAdminError(currentLang === 'en' ? 'Incorrect access code!' : 'गलत एक्सेस कोड!');
    }
  };

  const handleUpdateStatus = (id: string, nextStatus: 'New' | 'Reviewed' | 'Contacted') => {
    const updated = submissions.map((sub) => {
      if (sub.id === id) {
        return { ...sub, status: nextStatus };
      }
      return sub;
    });
    setSubmissions(updated);
    localStorage.setItem('kj_admissions_leads', JSON.stringify(updated));
  };

  const handleDeleteLead = (id: string) => {
    if (confirm(currentLang === 'en' ? 'Are you sure you want to delete this lead?' : 'क्या आप वास्तव में इस लीड को हटाना चाहते हैं?')) {
      const updated = submissions.filter((sub) => sub.id !== id);
      setSubmissions(updated);
      localStorage.setItem('kj_admissions_leads', JSON.stringify(updated));
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-military-900 border-b border-bronze-500/10 z-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-military-950 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-display font-extrabold uppercase tracking-widest text-[#FF9933] bg-military-850/80 border border-bronze-500/20 px-3.5 py-1.5 rounded-full shadow-inner">
            <Compass className="w-3.5 h-3.5 text-saffron-500" />
            <span>{currentLang === 'en' ? 'PROVING GROUND ENTRY' : 'शीघ्र प्रवेश फॉर्म 2026'}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mt-3">
            {currentLang === 'en' ? 'START YOUR TRIUMPH JOURNEY' : 'अपनी वर्दी का सपना पूरा करें'}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-saffron-500 via-white to-military-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            {currentLang === 'en' 
              ? 'Fill out the initial enrollment dossier. Our direct admissions desk under Director Ramdev Choudhary will review and contact you within 24 hours.'
              : 'नीचे दिए गए संक्षिप्त फॉर्म को भरकर अपना पंजीकरण दर्ज करें। हमारी प्रशासनिक टीम आपसे शीघ्र संपर्क कर ट्रायल एवं एडमिशन की जानकारी देगी।'}
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Dossier Details & Address Map info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Real Academy Info Cards */}
            <div className="bg-gradient-to-br from-military-850 to-military-900 border border-bronze-500/10 rounded-2xl p-6 shadow-xl space-y-6">
              <h3 className="font-display font-black text-sm uppercase text-white tracking-wider border-b border-bronze-500/15 pb-3">
                {currentLang === 'en' ? 'ACADEMY HEADQUARTERS' : 'अकादमी संपर्क मुख्यालय'}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-military-900 border border-bronze-500/10 flex items-center justify-center text-[#FF9933] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-white uppercase">{currentLang === 'en' ? 'Campus Location' : 'अकादमी का पता'}</h4>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed font-sans">
                      KJ Defence Academy (Kuchaman Jeet Academy),<br />
                      Near Malpura Ground, Bypass Road, Malpura<br />
                      District- Tonk, Rajasthan - 304502 (India)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-military-900 border border-bronze-500/10 flex items-center justify-center text-military-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-white uppercase">{currentLang === 'en' ? 'Helpline Calls' : 'हेल्पलाइन नंबर (निदेशक)'}</h4>
                    <p className="text-xs text-gray-300 mt-1 font-mono font-semibold">
                      Mobile & WhatsApp: +91 8233809848 <br />
                      Office Contact: +91 9929944648
                    </p>
                    <p className="text-[10px] text-gray-400 italic mt-0.5">
                      {currentLang === 'en' ? '(Directly talk with Ramdev Choudhary ji)' : '(निदेशक रामदेव चौधरी जी से सीधे संपर्क हेतु)'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-military-900 border border-bronze-500/10 flex items-center justify-center text-[#FF9933] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-white uppercase">{currentLang === 'en' ? 'Digital Dispatch' : 'डिजिटल संपर्क पत्र'}</h4>
                    <p className="text-xs text-gray-300 mt-1 font-sans">
                      admission@kjdefenceacademy.com <br />
                      ramdevchoudharymalpura@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Admissions Banner for both Boys and Girls */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-military-950 to-military-900 border border-saffron-500/20 text-center relative overflow-hidden flex flex-col items-center">
              <div className="absolute top-0 right-0 h-1.5 w-full bg-gradient-to-r from-saffron-500 via-white to-military-500"></div>
              <Landmark className="w-7 h-7 text-bronze-400 mb-2" />
              <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
                {currentLang === 'en' ? 'Admission open: Boys & Girls Wings' : 'छात्र-छात्राओं हेतु एडमिशन शुरू'}
              </h4>
              <p className="text-[11px] text-gray-400 mt-1.5 max-w-xs leading-relaxed">
                {currentLang === 'en' 
                  ? 'We maintain premium training standards tailored individually. Separate hostel wings are fully equipped' 
                  : 'अकादमी में छात्र व छात्राओं दोनों के अलग-अलग पूर्ण सुरक्षित हॉस्टल कैंपस में रहने, खाने व फिजिकल ट्रेंनिंग की संपूर्ण व्यवस्था उपलब्ध है।'}
              </p>
            </div>

            {/* Subtle Padlock button to load Admin Leads console locally */}
            <div className="flex justify-center pt-2">
              <button
                onClick={() => { setIsAdminOpen(!isAdminOpen); setAdminUnlocked(false); setAdminPassword(''); }}
                className="inline-flex items-center gap-2 text-[10px] uppercase font-mono font-semibold tracking-widest text-gray-400 hover:text-[#dfb56c] bg-military-900 px-3 py-1.5 rounded-full border border-military-800 transition-all cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>
                  {isAdminOpen 
                    ? (currentLang === 'en' ? 'Close Admissions Desk' : 'एडमिशन डेस्क बंद करें')
                    : (currentLang === 'en' ? 'Admissions Office Login' : 'प्रवेश प्रबंधन लॉगिन डेस्क')
                  }
                </span>
              </button>
            </div>

          </div>

          {/* Right Column: Entry Form OR Local Admin Desk panel (if unlocked) */}
          <div className="lg:col-span-7">
            
            <AnimatePresence mode="wait">
              {/* If Admin Console is Opened */}
              {isAdminOpen ? (
                <motion.div
                  key="admin-sec-panel"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-military-850 border border-[#dfb56c]/30 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-military-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-[#dfb56c]" />
                      <h3 className="font-display font-black text-sm uppercase text-[#dfb56c] tracking-widest">
                        {currentLang === 'en' ? 'Admissions Control Board' : 'छात्र प्रवेश प्रबंधन बोर्ड'}
                      </h3>
                    </div>
                    <span className="text-[9px] font-mono bg-military-900 border border-military-800 px-2 py-0.5 text-gray-400 rounded">
                      Local DB State
                    </span>
                  </div>

                  {/* Lock Screen */}
                  {!adminUnlocked ? (
                    <form onSubmit={unlockAdminPanel} className="space-y-4 max-w-sm mx-auto py-8 text-center">
                      <p className="text-xs text-gray-300">
                        {currentLang === 'en' 
                          ? 'Enter default security access code to review registered student leads. (Hint: 1947 or 1234)' 
                          : 'पंजीकृत छात्रों के डाटा को देखने के लिए प्रवेश कोड दर्ज करें। (संकेत: 1947 या 1234)'}
                      </p>
                      <div className="flex flex-col gap-2">
                        <input
                          type="password"
                          placeholder="🛡️ Access Code / पासवर्ड"
                          value={adminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                          className="bg-military-900 border border-military-800 py-3 px-4 rounded-xl text-center text-xs text-white focus:outline-none focus:border-bronze-400"
                        />
                        {adminError && <p className="text-[10px] text-saffron-500 font-semibold">{adminError}</p>}
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#dfb56c] hover:bg-bronze-400 py-3 rounded-xl font-display text-xs font-bold text-military-950 uppercase"
                      >
                        {currentLang === 'en' ? 'UNLOCK CORNER' : 'लॉगिन अनलॉक करें'}
                      </button>
                    </form>
                  ) : (
                    // Display Registered Leads list
                    <div className="space-y-4">
                      <div className="flex justify-between items-center bg-military-900 p-3 rounded-xl text-xs text-gray-300 border border-military-800">
                        <span>
                          {currentLang === 'en' 
                            ? `Leads Collected: ${submissions.length}` 
                            : `कुल पंजीकृत आवेदन: ${submissions.length}`}
                        </span>
                        <span>{currentLang === 'en' ? 'Showing Newest FIRST' : 'नया डेटा सूची से पूर्व'}</span>
                      </div>

                      {/* Dossier items lists */}
                      <div className="space-y-4 overflow-y-auto max-h-[420px] pr-2">
                        {submissions.length === 0 ? (
                          <div className="text-center py-12 text-gray-500 text-xs italic">
                            {currentLang === 'en' ? 'No inquiry leads collected yet. Submit the adjacent registration dossier!' : 'अभी तक कोई छात्र आवेदन प्राप्त नहीं हुआ है!'}
                          </div>
                        ) : (
                          submissions.map((lead) => (
                            <div key={lead.id} className="p-4 bg-military-900 rounded-xl border border-military-800 space-y-3 relative group">
                              
                              {/* Absolute ID badge & Close Button */}
                              <div className="flex justify-between items-start">
                                <div>
                                  <span className="text-[10px] font-mono text-[#FF9933] font-bold">{lead.id}</span>
                                  <h4 className="font-display font-extrabold text-sm text-white uppercase mt-0.5">{lead.fullName}</h4>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  {/* Status indicator pill */}
                                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${
                                    lead.status === 'New' ? 'bg-blue-600/30 border border-blue-500/20 text-blue-400' :
                                    lead.status === 'Reviewed' ? 'bg-amber-600/30 border border-amber-500/20 text-amber-400' :
                                    'bg-green-600/30 border border-green-500/20 text-green-400'
                                  }`}>
                                    {lead.status}
                                  </span>
                                  
                                  <button
                                    onClick={() => handleDeleteLead(lead.id)}
                                    className="p-1 rounded bg-red-650/15 text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                                    title="Delete Lead"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>

                              {/* Candidate physical dossier details */}
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-[11px] text-gray-300 bg-military-850 p-2.5 rounded-lg border border-military-800 font-mono">
                                <div>
                                  <span className="text-gray-500 block">FATHER:</span>
                                  <span className="text-gray-200 font-bold uppercase">{lead.fatherName}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500 block">MOBILE:</span>
                                  <span className="text-[#FF9933] font-bold">{lead.phoneNumber}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500 block">COURSE:</span>
                                  <span className="text-military-400 font-semibold">{lead.courseSelected}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500 block">CITY/TOWN:</span>
                                  <span className="text-gray-300">{lead.city || 'Malpura'}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500 block">GENDER:</span>
                                  <span className="text-gray-300 font-semibold uppercase">{lead.gender}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500 block">PHYSICALS:</span>
                                  <span className="text-gray-300">{lead.height}cm / {lead.weight}kg</span>
                                </div>
                              </div>

                              {/* Actions desk bar */}
                              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                                <span className="text-[10px] text-gray-400 font-sans">
                                  📅 {lead.submittedAt}
                                </span>
                                
                                <div className="flex gap-1">
                                  <button
                                    onClick={() => handleUpdateStatus(lead.id, 'Reviewed')}
                                    className="px-2 py-1 text-[9px] font-bold uppercase rounded bg-military-800 border border-military-700 text-gray-300 hover:text-white"
                                  >
                                    Mark Reviewed
                                  </button>
                                  <button
                                    onClick={() => handleUpdateStatus(lead.id, 'Contacted')}
                                    className="px-2 py-1 text-[9px] font-bold uppercase rounded bg-[#138808]/15 border border-[#138808]/30 text-green-400 hover:bg-[#138808]/30"
                                  >
                                    Mark Contacted
                                  </button>
                                </div>
                              </div>

                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}

                </motion.div>
              ) : (
                // Regular Admissions Client Form
                <motion.div
                  key="client-entry-form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-military-850 border border-bronze-500/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6"
                >
                  
                  {/* Status update alert panel if form succeeds */}
                  <AnimatePresence>
                    {formSuccess && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-4 rounded-xl bg-military-500/10 border-2 border-[#138808] text-[#138808] text-xs space-y-2 relative"
                      >
                        <div className="flex items-center gap-2 font-bold uppercase tracking-wider">
                          <Check className="w-4.5 h-4.5 bg-[#138808]/20 rounded-full p-0.5" />
                          <span>{currentLang === 'en' ? 'DOSSIER SUBMITTED SUCCESSFULLY!' : 'प्रवेश आवेदन सफलतापूर्वक सहेजा गया!'}</span>
                        </div>
                        <p className="text-[11px] text-gray-200 leading-relaxed font-sans">
                          {currentLang === 'en'
                            ? `Dossier code: ${successId}. We have registered your physical and academic parameters. Director Ramdev Choudhary or admissions desk officer will call you closely.`
                            : `आपका आवेदन कोड: ${successId} है। आपके फिजिकल पैरामीटर्स को सफलतापूर्वक सहेज लिया गया है। आपसे शीघ्र ही हमारी संपर्क विंग बात करेगी। जय हिन्द!`}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center gap-3 border-b border-bronze-500/15 pb-4">
                    <Send className="w-5 h-5 text-saffron-500" />
                    <div>
                      <h3 className="font-display font-black text-sm uppercase text-white tracking-widest">
                        {currentLang === 'en' ? 'ONLINE ENROLLMENT FORM' : 'ऑनलाइन त्वरित प्रवेश नामांकन'}
                      </h3>
                      <p className="text-[10px] text-gray-400 font-sans">
                        {currentLang === 'en' ? 'No cost registration form for prospective boys & girls candidates' : 'सभी छात्र व छात्राओं हेतु निःशुल्क शुरूआती पंजीकरण प्रपत्र'}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    
                    {/* Basic Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-1.5 font-display">
                          {currentLang === 'en' ? 'Candidate full Name' : 'अभ्यर्थी का पूरा नाम *'}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={currentLang === 'en' ? 'e.g. Ritesh Choudhary' : 'उदा. नवीन चौधरी'}
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-military-900 border border-military-800 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-saffron-500 font-sans font-medium"
                        />
                      </div>

                      {/* Father Name */}
                      <div>
                        <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-1.5 font-display">
                          {currentLang === 'en' ? 'Father\'s Name' : 'पिता जी का नाम *'}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={currentLang === 'en' ? 'e.g. Mr. Mohan Lal' : 'उदा. श्री मोहन लाल'}
                          value={fatherName}
                          onChange={(e) => setFatherName(e.target.value)}
                          className="w-full bg-military-900 border border-military-800 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-saffron-500 font-sans font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Mobile phone */}
                      <div>
                        <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-1.5 font-display">
                          {currentLang === 'en' ? 'Helpline Mobile Number' : 'मोबाइल नंबर (कॉलिंग व व्हाट्सएप) *'}
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          placeholder={currentLang === 'en' ? '10-Digit Mobile e.g. 8233809848' : '10-अंकों का नंबर उदा. 8233809848'}
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full bg-military-900 border border-military-800 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-saffron-500 font-mono"
                        />
                      </div>

                      {/* Category Selector */}
                      <div>
                        <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-1.5 font-display">
                          {currentLang === 'en' ? 'Course Targeted' : 'किस कोर्स की तैयारी हेतु *'}
                        </label>
                        <select
                          value={courseSelected}
                          onChange={(e) => setCourseSelected(e.target.value)}
                          className="w-full bg-military-900 border border-military-800 rounded-xl py-3 px-4 text-xs text-stone-200 focus:outline-none focus:border-saffron-500"
                        >
                          <option value="Agniveer GD">Agniveer GD (अग्निवीर सामान्य)</option>
                          <option value="Agniveer Clerk">Agniveer Clerk (क्लर्क व स्टोर कीपर)</option>
                          <option value="Agniveer Technical">Agniveer Technical (तकनीकी विंग)</option>
                          <option value="Air Force Agniveer Vayu">Air Force Agniveer Vayu (एयरफोर्स)</option>
                          <option value="Indian Navy SSR/MR">Indian Navy SSR/MR (नौसेना)</option>
                          <option value="Physical Training Special">Physical Training Special (फिजिकल ओनली)</option>
                          <option value="Rajasthan Police Const.">Rajasthan Police / Constable (पुलिस विभाग)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Gender Selector (explicit indicator) */}
                      <div>
                        <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-1.5 font-display">
                          {currentLang === 'en' ? 'Candidate Gender' : 'अभ्यर्थी का लिंग *'}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setGender('boys')}
                            className={`py-2.5 rounded-xl border text-xs font-display font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                              gender === 'boys' 
                                ? 'bg-military-500 border-military-400 text-white font-bold' 
                                : 'bg-military-900 border-military-800 text-gray-400 hover:text-white'
                            }`}
                          >
                            <span> Boys</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setGender('girls')}
                            className={`py-2.5 rounded-xl border text-xs font-display font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                              gender === 'girls' 
                                ? 'bg-saffron-500 border-saffron-400 text-white font-bold' 
                                : 'bg-military-900 border-military-800 text-gray-400 hover:text-white'
                            }`}
                          >
                            <span> Girls</span>
                          </button>
                        </div>
                      </div>

                      {/* City/Town Input */}
                      <div>
                        <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-1.5 font-display">
                          {currentLang === 'en' ? 'Home City / Town' : 'गृह तहसील/शहर/गांव'}
                        </label>
                        <input
                          type="text"
                          placeholder={currentLang === 'en' ? 'e.g. Malpura' : 'उदा. मालपुरा'}
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full bg-military-900 border border-military-800 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-saffron-500"
                        />
                      </div>
                    </div>

                    {/* Candidate Physical Specifications */}
                    <div className="grid grid-cols-3 gap-3 bg-military-900/60 p-3.5 rounded-xl border border-military-800/80">
                      <div>
                        <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                          {currentLang === 'en' ? 'Height (cm)' : 'लंबाई (सेमी)'}
                        </label>
                        <input
                          type="number"
                          min="135"
                          max="210"
                          value={height}
                          onChange={(e) => setHeight(parseInt(e.target.value, 10))}
                          className="w-full bg-military-900 text-white py-1.5 px-2.5 rounded text-xs font-mono font-bold text-center border border-military-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                          {currentLang === 'en' ? 'Weight (kg)' : 'वजन (किग्रा)'}
                        </label>
                        <input
                          type="number"
                          min="30"
                          max="110"
                          value={weight}
                          onChange={(e) => setWeight(parseInt(e.target.value, 10))}
                          className="w-full bg-military-900 text-white py-1.5 px-2.5 rounded text-xs font-mono font-bold text-center border border-military-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                          {currentLang === 'en' ? 'Education' : 'योग्यता'}
                        </label>
                        <select
                          value={qualification}
                          onChange={(e) => setQualification(e.target.value)}
                          className="w-full bg-military-900 text-white text-center py-1.5 px-1 rounded text-[10px] font-sans font-bold border border-military-800 cursor-pointer"
                        >
                          <option value="10th Class">10th Pass</option>
                          <option value="12th Pass">12th Pass</option>
                          <option value="Graduate">UG/Graduate</option>
                          <option value="Under metric">Under 10th</option>
                        </select>
                      </div>
                    </div>

                    {/* Terms consent */}
                    <p className="text-[10px] text-gray-400 leading-normal mb-2">
                      {currentLang === 'en' 
                        ? '★ By registering, you confirm that you meet the baseline medical conditions and are prepared to follow strict code of military discipline.' 
                        : '★ पंजीकरण करके, आप घोषणा करते हैं कि आप शारीरिक ट्रायल के लिए स्वस्थ हैं एवं अकादमी के कड़े अनुशासनात्मक नियमों का पालन करने की सहमति देते हैं।'}
                    </p>

                    {/* Action Dispatch Button */}
                    <button
                      type="submit"
                      className="w-full py-4.5 rounded-xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-saffron-700 hover:from-saffron-600 hover:to-saffron-800 text-white font-display text-xs font-extrabold tracking-widest uppercase shadow-md hover:shadow-lg transition-transform transform active:scale-98 cursor-pointer flex items-center justify-center gap-2 border-b-4 border-b-saffron-800"
                      id="btn-register-student-dossier"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{currentLang === 'en' ? 'SUBMIT DOSSIER TO DIRECT ALUMNUS' : 'अकादमी प्रवेश आवेदन जमा करें'}</span>
                    </button>

                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  );
}
