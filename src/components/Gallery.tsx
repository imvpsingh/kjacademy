import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

interface GalleryProps {
  currentLang: 'en' | 'hn';
}

interface WebImage {
  url: string;
  titleEn: string;
  titleHn: string;
  category: 'topper' | 'premise' | 'general';
  descEn: string;
  descHn: string;
}

export default function Gallery({ currentLang }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'topper' | 'premise'>('all');
  const [selectedImgIdx, setSelectedImgIdx] = useState<number | null>(null);

  const imagesDataset: WebImage[] = [
    {
      url: 'https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-6/472712025_1100946505164726_4991870421354907150_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8eplj-bM7vAQ7kNvwEkbMZf&_nc_oc=Adr8iNMMf8FxpFG7EgA-H6jCy_1DAJDc62gKM2AyPCx1OuMDFh6ownLLvNda4iVe6nY&_nc_zt=23&_nc_ht=scontent.fjai1-2.fna&_nc_gid=kqL-tVyepkDXmUtxQX2iFA&_nc_ss=7b289&oh=00_Af8h378iTgW31CsBcZnP2qG-eUYJ4FFK5VUXX2ZYT48fvQ&oe=6A2431FA',
      titleEn: 'Army Selection Celebrations',
      titleHn: 'सेना में शानदार चयन उत्सव',
      category: 'topper',
      descEn: 'Proud candidates after getting selected in the Indian Army, receiving direct blessings and garlands from Director Ramdev Choudhary.',
      descHn: 'भारतीय थल सेना में चयनित होने पर रामदेव चौधरी जी द्वारा माल्यार्पण एवं उज्जवल भविष्य की शुभकामनाएं।'
    },
    {
      url: 'https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-6/472718345_1100946415164735_8321049203477061111_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fhHQKumGSdgQ7kNvwGqWzbZ&_nc_oc=AdrbAh2gTz_9hKt2u2p94R2XH27C_p55r4ZdmqU3FihctEMzMzo1oo2tUuw8CwfHzYs&_nc_zt=23&_nc_ht=scontent.fjai1-2.fna&_nc_gid=GAgrysHw73LCxWJ1LjT4pw&_nc_ss=7b289&oh=00_Af821YkDrs91q9MrXz-jky5OZy1_MhkQDU5y18t4EwCDJQ&oe=6A243463',
      titleEn: 'Toppers Sweets Distribution',
      titleHn: 'चयनित वीरों का मुंह मीठा',
      category: 'topper',
      descEn: 'Relentless celebrations with families of successful aspirants. We celebrate every soldier as our champion.',
      descHn: 'सफल युवाओं के माता-पिता की उपस्थिति में खुशियां मनाते व मिठाई खिलाते निदेशक रामदेव चौधरी।'
    },
    {
      url: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHVBVq0gymOJiUg5kZbxj135gRcc0t-4sAudOxfylUklgLfzvMm1Fm8vbc9MiQFHGKLpUKq2ufz_G8HnRvF7txIYVpmr4BFdWlSBTa5UU0NEHUfaqStbYsZ3ZvzGGIQoEEmlCD4=s1360-w1360-h1020-rw',
      titleEn: 'Morning Assembly & Parade',
      titleHn: 'प्रातःकाल ग्राउंड ड्रिल व असेंबली',
      category: 'premise',
      descEn: 'Students undergoing disciplined line-up parade under high training protocols on the massive academy grounds.',
      descHn: 'विस्तृत खेल मैदान पर सेना भर्ती नियमों के अंतर्गत सुबह की कतारबद्ध असेंबली व परेड प्रशिक्षण।'
    },
    {
      url: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEzOYZdsk_LHEwJ46VAaX8T4U29BWgezE6YE9q9iBgvFNeC4NmI8NeNfs3f4qeCs4k0QlFGddBLO-eRLut2FDu_tqqsxFMa3llA7Skv44TR9zPdMC-yaKsxCX7JPkyiARdbmRRTuA=s1360-w1360-h1020-rw',
      titleEn: 'Vivekananda Coaching Classes',
      titleHn: 'विवेकानंद कोचिंग क्लासेस',
      category: 'premise',
      descEn: 'Dedicated high wall and obstacles set up professionally to maximize endurance and arm strength.',
      descHn: 'शारीरिक दक्षता व स्टेमिना वृद्धि हेतु ग्राउंड में तैयार की गई विशेष बाधाएं व हाई-जम्प संरचना।'
    },
    {
      url: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFxa23rErg025neiq___9Jj8DHscK7XC49RrA4tnBGdzN4gZxbNF4toO0RxNuEFwUJzEoPwEdagRolvKuteW115VvjSe0lhkiB9wzZAFlnUEfm7x1UkN0GIY-rC-CzI_cf4wmjR=s1360-w1360-h1020-rw',
      titleEn: '1600 Meters Outdoor Track',
      titleHn: '1600 मीटर दौड़ हेतु आदर्श ट्रैक',
      category: 'premise',
      descEn: 'Perfectly formatted loose soil track to assist in ankle-straining reduction and speed boost.',
      descHn: 'पैरों के घुटनों व टखनों की सुरक्षा के साथ रनिंग टाइमिंग सुधारने हेतु निर्मित विशेष मिट्टी ट्रैक।'
    },
    {
      url: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGmW-ZAbo23d9AsFFqcP4VZGWRgmb8RqSvJxqj8Ghh73axy_KFLgQ0d10NYSg50d_7dt1ujTfa08jBJ20eSspkZKvMO0rbMikxzddFWO6ZJRre4FR5AwOIFc8uHvhkV-5-p5q0=s1360-w1360-h1020-rw',
      titleEn: 'Air-Conditioned Library Facility',
      titleHn: 'शांत डिजिटल कल्प लाइब्रेरी भवन',
      category: 'premise',
      descEn: 'Classrooms and silent study lounge allowing aspirants to crack written screening without difficulty.',
      descHn: 'लिखित परीक्षा की कड़े अध्ययन के लिए उत्तम बैठक व्यवस्था, इंटरनेट युक्त डिजिटल लाइब्रेरी।'
    },
    {
      url: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGmtUs-bc0guGvbOX5JrBk28AHaiVdYys2YBoUdam0pjjFYqidjs6PEGs1axvSSd13Fq6tc8FT_eU2gKhKn4iKyA6D9BiWVNgqFZ6S1YEr-aE4Llaebegm35ooj53c61ZRV0RsJ0w=s1360-w1360-h1020-rw',
      titleEn: 'KJ Defence Ground Entry Gate',
      titleHn: 'कुचामन जीत एकेडमी मुख्य प्रवेश द्वार',
      category: 'premise',
      descEn: 'The pride of Malpura (Tonk) - entrance gate leading towards the elite residential training campus.',
      descHn: 'मालpura परिसर का गौरवशाली मुख्य प्रवेश द्वार जो विजय के प्रांगण की ओर ले जाता है।'
    }
  ];

  const filteredImages = imagesDataset.filter((img) => {
    if (activeFilter === 'all') return true;
    return img.category === activeFilter;
  });

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImgIdx === null) return;
    const prevIdx = (selectedImgIdx - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImgIdx(prevIdx);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImgIdx === null) return;
    const nextIdx = (selectedImgIdx + 1) % filteredImages.length;
    setSelectedImgIdx(nextIdx);
  };

  return (
    <section id="gallery" className="relative py-20 bg-military-950 border-b border-bronze-500/10 z-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-military-900/40 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-display font-extrabold uppercase tracking-widest text-[#FF9933] bg-military-900/90 border border-bronze-500/20 px-3.5 py-1.5 rounded-full shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-bronze-400" />
            <span>{currentLang === 'en' ? 'OUR PRIDE & ALBUMS' : 'शौर्य दीर्घा व गैलरी'}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mt-3">
            {currentLang === 'en' ? 'SELECTIONS & CAMPUS PREMISES' : 'सफलता एवं अकादमी की झलकियां'}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-saffron-500 via-white to-military-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            {currentLang === 'en' 
              ? 'Real glimpses of successful candidates celebrating their victory and the elite infrastructural facilities of our Malpura (Tonk) campus.'
              : 'सेना में चयनित होकर अपने माता-पिता का नाम रोशन करने वाले वीर चैंपियंस, एवं हमारी मालपुरा डिफेंस अकादमी की उत्कृष्ट भौगोलिक बुनियादी ढांचा प्रणालियाँ।'}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-xl font-display text-xs font-bold uppercase transition-all tracking-wider border cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 border-saffron-500 text-white shadow-lg'
                : 'bg-military-900 border-military-800 text-gray-400 hover:text-white'
            }`}
          >
            {currentLang === 'en' ? 'Show All Albums' : 'सभी तस्वीरें'}
          </button>
          
          <button
            onClick={() => setActiveFilter('topper')}
            className={`px-5 py-2.5 rounded-xl font-display text-xs font-bold uppercase transition-all tracking-wider border cursor-pointer ${
              activeFilter === 'topper'
                ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 border-saffron-500 text-white shadow-lg'
                : 'bg-military-900 border-military-800 text-gray-400 hover:text-white'
            }`}
          >
            {currentLang === 'en' ? '🏆 Selections & Toppers' : '🏆 चयनित जांबाज'}
          </button>

          <button
            onClick={() => setActiveFilter('premise')}
            className={`px-5 py-2.5 rounded-xl font-display text-xs font-bold uppercase transition-all tracking-wider border cursor-pointer ${
              activeFilter === 'premise'
                ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 border-saffron-500 text-white shadow-lg'
                : 'bg-military-900 border-military-800 text-gray-400 hover:text-white'
            }`}
          >
            {currentLang === 'en' ? '🏛️ Campus & Training Ground' : '🏛️ अकादमी परिसर व ग्राउंड'}
          </button>
        </div>

        {/* Image Grid with Motion Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, idx) => (
            <motion.div
              layout
              key={image.url}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImgIdx(idx)}
              className="group cursor-pointer relative bg-military-900 rounded-2xl p-2 border border-bronze-500/10 hover:border-bronze-400/40 shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              
              {/* Photo Box */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-military-950">
                <img 
                  src={image.url} 
                  alt={currentLang === 'en' ? image.titleEn : image.titleHn} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* On-hover Overlay Eye icon */}
                <div className="absolute inset-0 bg-military-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-saffron-500 text-white flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Corner Category Tag */}
                <span className="absolute top-3 left-3 bg-military-900/90 backdrop-blur-sm px-2.5 py-1 rounded text-[9px] font-display font-extrabold text-bronze-300 uppercase border border-bronze-500/20">
                  {image.category === 'topper' 
                    ? (currentLang === 'en' ? '🏆 SELECTED' : '🏆 चयनित') 
                    : (currentLang === 'en' ? '🏛️ CAMPUS' : '🏛️ परिसर')}
                </span>
              </div>

              {/* Text Descriptors */}
              <div className="p-3">
                <h4 className="font-display font-extrabold text-xs text-white uppercase group-hover:text-bronze-300 transition-colors">
                  {currentLang === 'en' ? image.titleEn : image.titleHn}
                </h4>
                <p className="text-[10px] text-gray-400 mt-1 lines-clamp-2">
                  {currentLang === 'en' ? image.descEn : image.descHn}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal with Controls */}
        <AnimatePresence>
          {selectedImgIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImgIdx(null)}
              className="fixed inset-0 bg-military-950/98 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImgIdx(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-military-800 hover:bg-military-750 text-white cursor-pointer border border-bronze-500/20"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-w-4xl w-full flex flex-col items-center justify-center relative">
                
                {/* Arrow Left */}
                <button
                  onClick={handlePrevImage}
                  className="absolute -left-4 sm:left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-military-900 border border-bronze-500/25 text-white hover:text-bronze-300 cursor-pointer shadow-lg z-10"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main Image in Viewport */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-2xl border-2 border-bronze-400 p-1.5 bg-military-900 shadow-2xl max-h-[70vh] flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={filteredImages[selectedImgIdx].url}
                    alt="Enlarged gallery capture"
                    className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Arrow Right */}
                <button
                  onClick={handleNextImage}
                  className="absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-military-900 border border-bronze-500/25 text-white hover:text-bronze-300 cursor-pointer shadow-lg z-10"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

              </div>

              {/* Caption details under expanded picture */}
              <div 
                onClick={(e) => e.stopPropagation()}
                className="max-w-xl text-center mt-6 p-4 rounded-xl bg-military-900 border border-bronze-500/20"
              >
                <span className="text-[10px] font-mono tracking-widest text-[#FF9933] uppercase font-bold">
                  {filteredImages[selectedImgIdx].category === 'topper' ? 'Topper Selection Record' : 'Academy Infrastructure'}
                </span>
                
                <h3 className="font-display font-extrabold text-sm uppercase text-white mt-1 border-b border-military-800 pb-2">
                  {currentLang === 'en' 
                    ? filteredImages[selectedImgIdx].titleEn 
                    : filteredImages[selectedImgIdx].titleHn}
                </h3>
                
                <p className="text-xs text-gray-300 mt-2.5 leading-relaxed">
                  {currentLang === 'en' 
                    ? filteredImages[selectedImgIdx].descEn 
                    : filteredImages[selectedImgIdx].descHn}
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
