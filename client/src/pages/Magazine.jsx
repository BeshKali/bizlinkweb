import React, { useState, useEffect } from "react";
import { 
  Users, Calendar, Gift, ExternalLink, 
  X, MapPin, Newspaper, Rocket, Phone, 
  ArrowRight
} from "lucide-react";

export default function MagazinePage() {
  // --- State Management ---
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isAdModalOpen, setIsAdModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  // Prevent body scroll when modals are open
  useEffect(() => {
    if (isPreviewModalOpen || isAdModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isPreviewModalOpen, isAdModalOpen]);

  const magazineIssues = [
    { title: "AUG-SEPT 2025 ISSUE", id: "163m65mJm43Le0SqC2P1W0WhbDwYNbAHA", latest: true, date: "Aug-Sept 2025" },
    { title: "May 2025 Issue", id: "1l_xD5RFAG4SNSxaIdSMijmMJ45owJbjW", latest: false, date: "May 2025" },
    { title: "March 2025 Issue", id: "1wLu0HajuXLvNfAG_uiqLfUl_JjKjOOBO", latest: false, date: "March 2025" },
    { title: "November 2024 Issue", id: "1-i3GkFFiK7ub7-Zx3u3e6-1h1QBYO5FJ", latest: false, date: "Nov 2024" },
  ];

  const adRates = [
    { name: "Double Spread", size: "42.0 cm x 29.7 cm", price: "150,000", note: "Ideal for storytelling" },
    { name: "Back Cover Page", size: "21 x 29.7 cm", price: "120,000", note: "Premium placement" },
    { name: "Inside Front Cover", size: "21 x 29.7 cm", price: "100,000", note: "Limited availability" },
    { name: "Inside Back Cover", size: "21 x 29.7 cm", price: "100,000", note: "Most visible position" },
    { name: "Full Page", size: "21 x 29.7 cm", price: "80,000", note: "Full impact" },
    { name: "Half Page", size: "21 x 14.85 cm", price: "40,000", note: "Horizontal" },
    { name: "Sponsored Article", size: "600 words", price: "25,000", note: "Includes image + bio" },
    { name: "Quarter Page", size: "10.5 x 14.85 cm", price: "20,000", note: "Brief promotions" },
    { name: "An Eighth Page", size: "10.5 x 7.5 cm", price: "10,000", note: "Contact info" },
  ];

  const handleWhatsAppBooking = () => {
    if (!selectedPkg) return;
    const phoneNumber = '254780985052';
    const message = `🚀 *AD SPACE BOOKING*\n*Package:* ${selectedPkg.name}\n*Price:* Kshs. ${selectedPkg.price}\n*Size:* ${selectedPkg.size}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-bizDark overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] md:h-[85vh] flex flex-col justify-end items-center pb-12 md:pb-20 text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/magazine/hero-magazine.jpg" 
            className="w-full h-full object-cover" 
            alt="Hero" 
          />
          <div className="absolute inset-0 bg-bizBlue/30" />
        </div>
        <div className="relative z-10 w-full px-6 max-w-4xl">
          
          <button 
            onClick={() => setIsPreviewModalOpen(true)}
            className="bg-bizRed text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-lg md:text-2xl shadow-2xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95"
          >
            Read Our Latest Issue
          </button>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="bg-bizYellow py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 lg:gap-12">
          <StatItem icon={<Users size={32} />} val="100K+" label="Readers" />
          <StatItem icon={<Calendar size={32} />} val="11+" label="Years" />
          <StatItem icon={<Gift size={32} />} val="FREE" label="Distribution" className="sm:col-span-2 md:col-span-1" />
        </div>
      </section>

      {/* 3. MAGAZINE OVERVIEW */}
      <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-black text-bizBlue mb-6 leading-tight uppercase">
              Why Choose <span className="text-bizYellow bg-bizBlue px-2">Bizlink Ads</span> Magazine?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 font-medium">
              We connect brands to decision-makers through high-quality print design and strategic nationwide distribution.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <OverviewFeature icon={<MapPin size={24}/>} title="Wide Distribution" desc="Across Kenya's key business hubs." />
              <OverviewFeature icon={<Gift size={24}/>} title="Free Access" desc="Maximum reach with zero barriers." />
              <OverviewFeature icon={<Newspaper size={24}/>} title="Rich Content" desc="Engaging stories & directories." />
              <OverviewFeature icon={<Rocket size={24}/>} title="High ROI" desc="Affordable slots for every scale." />
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center px-4 md:px-0">
            <div className="relative max-w-sm md:max-w-md w-full">
              <div className="absolute -inset-4 bg-bizYellow rounded-3xl -rotate-3 z-0"></div>
              <img 
                src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/magazine/magsep.jpg" 
                className="relative z-10 rounded-2xl shadow-2xl w-full rotate-3" 
                alt="Magazine" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. ADVERTISING OPPORTUNITIES */}
      <section id="advertise" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-6xl font-black text-bizBlue uppercase tracking-tighter">Advertising Rates</h2>
            <p className="text-lg text-gray-500 font-bold mt-2 italic underline decoration-bizYellow decoration-4 underline-offset-8">Scale your visibility effectively</p>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto rounded-3xl border border-gray-100 shadow-xl">
            <table className="w-full text-left">
              <thead className="bg-bizBlue text-white">
                <tr>
                  <th className="p-5">Advertisement Option</th>
                  <th className="p-5">Size (WxH)</th>
                  <th className="p-5">Rates (KES)</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-bold">
                {adRates.map((pkg, idx) => (
                  <tr key={idx} className="hover:bg-bizYellow/5 transition-colors">
                    <td className="p-5 text-bizBlue">{pkg.name}</td>
                    <td className="p-5 text-gray-400 text-sm font-medium">{pkg.size}</td>
                    <td className="p-5 text-bizRed text-lg">Kshs. {pkg.price}</td>
                    <td className="p-5">
                      <button 
                        onClick={() => { setSelectedPkg(pkg); setIsAdModalOpen(true); }} 
                        className="bg-bizBlue text-white px-5 py-2 rounded-lg text-sm hover:bg-bizRed transition-all"
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {adRates.map((pkg, idx) => (
              <div key={idx} className="bg-gray-50 p-5 rounded-2xl border-l-4 border-bizBlue flex justify-between items-center shadow-sm">
                <div>
                  <h4 className="font-black text-bizBlue text-sm">{pkg.name}</h4>
                  <p className="text-bizRed font-black">KES {pkg.price}</p>
                </div>
                <button 
                  onClick={() => { setSelectedPkg(pkg); setIsAdModalOpen(true); }} 
                  className="bg-bizBlue text-white px-4 py-2 rounded-xl text-xs font-bold uppercase"
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PREVIOUS ISSUES ARCHIVE */}
      <section className="py-16 md:py-24 bg-bizBlue">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-bizYellow uppercase">Issue Archive</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {magazineIssues.map((issue, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform border border-white/20">
                <div className="h-48 bg-bizDark flex items-center justify-center p-6 text-center relative">
                  {issue.latest && <span className="absolute top-3 left-3 bg-bizRed text-white text-[10px] font-black px-2 py-1 rounded shadow-lg">NEW</span>}
                  <h3 className="text-white font-black leading-tight uppercase text-lg">{issue.title}</h3>
                </div>
                <div className="p-5">
                  <a 
                    href={`https://drive.google.com/file/d/${issue.id}/view`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-bizBlue font-bold text-sm hover:text-bizRed transition-colors"
                  >
                    View Digital Copy <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MODAL: AD BOOKING */}
      {isAdModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-bizDark/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 md:p-8 relative max-h-[90vh] flex flex-col shadow-2xl border-t-8 border-bizYellow">
            <button onClick={() => setIsAdModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-bizRed transition-colors"><X size={28} /></button>
            <h3 className="text-2xl font-black text-bizBlue mb-4 uppercase tracking-tighter">Reserve Your Space</h3>
            <div className="flex-1 overflow-y-auto space-y-3 mb-6 pr-2 custom-scrollbar">
              {adRates.map((pkg, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedPkg(pkg)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${selectedPkg?.name === pkg.name ? 'border-bizYellow bg-bizYellow/5 ring-1 ring-bizYellow' : 'border-gray-100 hover:border-bizBlue/20'}`}
                >
                  <div className="flex justify-between font-black text-sm">
                    <span className="text-bizBlue uppercase">{pkg.name}</span>
                    <span className="text-bizRed">KES {pkg.price}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 font-medium">{pkg.size} — {pkg.note}</p>
                </button>
              ))}
            </div>
            <button 
              onClick={handleWhatsAppBooking} 
              className={`w-full py-4 rounded-xl font-black flex items-center justify-center gap-2 transition-all shadow-lg ${selectedPkg ? 'bg-[#25D366] text-white hover:scale-[1.02]' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
            >
              <Phone size={20} fill="currentColor" /> BOOK ON WHATSAPP
            </button>
          </div>
        </div>
      )}

      {/* 7. MODAL: PREVIEW READER */}
      {isPreviewModalOpen && (
        <div className="fixed inset-0 z-[200] bg-bizDark flex flex-col animate-in fade-in duration-300">
          <div className="bg-bizYellow p-4 flex justify-between items-center px-6 shrink-0 border-b-4 border-bizBlue">
             <h2 className="text-bizBlue font-black text-sm md:text-lg uppercase tracking-widest">Digital Issue Reader</h2>
             <button onClick={() => setIsPreviewModalOpen(false)} className="bg-bizRed text-white p-2 rounded-full hover:rotate-90 transition-transform"><X size={20}/></button>
          </div>
          <div className="flex-1 overflow-x-auto flex items-center gap-6 p-6 snap-x snap-mandatory bg-gray-100">
            {magazineIssues.map((issue, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] h-full bg-white rounded-2xl border-4 border-bizBlue flex flex-col overflow-hidden shrink-0 snap-center shadow-2xl">
                <div className="bg-bizBlue p-3 text-white text-center font-black text-xs uppercase tracking-widest">{issue.date}</div>
                <iframe 
                  src={`https://drive.google.com/file/d/${issue.id}/preview`} 
                  className="w-full flex-1 border-none" 
                  title={issue.title} 
                />
              </div>
            ))}
          </div>
          <div className="p-4 text-center text-white/50 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <ArrowRight size={12}/> Swipe for more issues <ArrowRight size={12}/>
          </div>
        </div>
      )}

    </div>
  );
}

// --- HELPER COMPONENTS ---

function StatItem({ icon, val, label, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center p-6 bg-white/10 rounded-3xl border border-white/20 shadow-inner group transition-all hover:bg-white/20 ${className}`}>
      <div className="mb-3 bg-bizBlue text-bizYellow p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg">{icon}</div>
      <span className="text-4xl md:text-5xl font-black text-bizBlue leading-none">{val}</span>
      <span className="text-bizBlue font-bold uppercase tracking-widest text-xs mt-2">{label}</span>
    </div>
  );
}

function OverviewFeature({ icon, title, desc }) {
  return (
    <div className="flex gap-4 group">
      <div className="shrink-0 bg-bizYellow/30 p-2 rounded-xl h-fit text-bizBlue group-hover:bg-bizBlue group-hover:text-bizYellow transition-colors">{icon}</div>
      <div>
        <h4 className="font-black text-bizBlue text-sm uppercase leading-none mb-1">{title}</h4>
        <p className="text-gray-500 text-xs font-bold leading-tight">{desc}</p>
      </div>
    </div>
  );
}