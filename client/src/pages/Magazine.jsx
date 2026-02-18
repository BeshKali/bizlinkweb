import React, { useState, useEffect } from "react";
import { 
  Users, Calendar, Gift, ExternalLink, 
  X, MapPin, Newspaper, Rocket, Phone, 
  BookOpen, MousePointer2, ChevronRight,
  Zap, CheckCircle, Target, Sparkles, Layout,
  ArrowRight
} from "lucide-react";
import BTEXPO2026 from "../assets/BTEXPO ED ( Bizlink Ads Mag)-2 .pdf";

export default function MagazinePage() {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const magazineIssues = [
    { title: "AUG-SEPT 2025 ISSUE", id: "163m65mJm43Le0SqC2P1W0WhbDwYNbAHA", latest: true, date: "Aug-Sept 2025" },
    { title: "May 2025 Issue", id: "1l_xD5RFAG4SNSxaIdSMijmMJ45owJbjW", latest: false, date: "May 2025" },
    { title: "March 2025 Issue", id: "1wLu0HajuXLvNfAG_uiqLfUl_JjKjOOBO", latest: false, date: "March 2025" },
    { title: "November 2024 Issue", id: "1-i3GkFFiK7ub7-Zx3u3e6-1h1QBYO5FJ", latest: false, date: "Nov 2024" },
   ];

  const adSpaceRates = [
    { name: "Double Spread", size: "42.0 cm x 29.7 cm", price: "150,000", benefit: "Maximum Authority", desc: "Two full pages. Ideal for high-impact visual storytelling." },
    { name: "Back Cover Page", size: "21 x 29.7 cm", price: "120,000", benefit: "Premium Visibility", desc: "Most viewed position. Visible even when magazine is closed." },
    { name: "Inside Front Cover", size: "21 x 29.7 cm", price: "100,000", benefit: "First Impression", desc: "The first page readers see upon opening. High engagement." },
    { name: "Full Page", size: "21 x 29.7 cm", price: "80,000", benefit: "Standard Excellence", desc: "A complete A4 page dedicated entirely to your brand." },
    { name: "Half Page", size: "21 x 14.85 cm", price: "40,000", benefit: "Strategic Value", desc: "Balance of professional presence and cost-effective reach." },
  ];

  const handleWhatsAppBooking = (pkg) => {
    const phoneNumber = '254780985052';
    const message = `🚀 *MAGAZINE AD BOOKING*\n*Tier:* ${pkg.name}\n*Rate:* Kshs. ${pkg.price}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0f1a] font-sans overflow-x-hidden transition-colors duration-500">
      
      {/* --- 1. HERO SECTION (Deep Blue Impact) --- */}
      <section className="relative min-h-screen flex items-center bg-bizBlue overflow-hidden">
        {/* Tech Background Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/magazine/hero-magazine.jpg" 
            className="w-full h-full object-cover opacity-10 grayscale" 
            alt="Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bizBlue via-bizBlue/80 to-transparent" />
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 60L48 60L48 48L54 48ZM0 48L0 60L6 60L6 48L0 48ZM54 0L54 12L48 12L48 0L54 0ZM0 0L0 12L6 12L6 0L0 0Z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-bizYellow text-bizBlue px-4 py-2 rounded-lg mb-8 font-black uppercase tracking-widest text-xs">
              <Sparkles size={14} /> Leading Industry Publication
            </div>
            <h1 className="text-6xl md:text-[110px] font-black leading-[0.8] uppercase tracking-tighter mb-8 italic">
              Strategic <br /><span className="text-bizYellow">Print</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-medium max-w-lg mb-12 leading-tight">
              Bridging the gap between industrial heavyweights and digital-first decision makers across Kenya.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <button onClick={() => setIsPreviewModalOpen(true)} className="bg-bizYellow text-bizBlue px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-white transition-all flex items-center gap-4">
                <BookOpen size={24} /> OPEN ARCHIVE
              </button>
              <div className="flex items-center gap-2 text-white/60 font-black uppercase text-xs tracking-widest">
                 <MousePointer2 size={16} /> Scroll for Rates
              </div>
            </div>
          </div>

          {/* Floating Magazine Visual */}
          <div className="relative hidden lg:block group">
             <div className="absolute -inset-10 bg-bizYellow/20 blur-[100px] rounded-full animate-pulse" />
             <img 
               src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/magazine/magsep.jpg" 
               className="relative z-10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] w-full border-8 border-white/10 -rotate-3 group-hover:rotate-0 transition-transform duration-700" 
               alt="Magazine" 
             />
          </div>
        </div>
      </section>

      {/* --- 2. STATS BRIDGE (Solid Yellow) --- */}
      <section className="relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-bizYellow py-12 px-10 rounded-b-[4rem] md:rounded-[4rem] -mt-12 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatBlock icon={<Users />} val="100K+" label="Monthly Readers" />
            <StatBlock icon={<Calendar />} val="11+" label="Years Experience" />
            <StatBlock icon={<MapPin />} val="47" label="Counties Covered" />
            <StatBlock icon={<Gift />} val="FREE" label="Distribution" />
          </div>
        </div>
      </section>

      {/* --- 3. WHY BIZLINK (Split Color/White) --- */}
      <section className="py-32 bg-white dark:bg-[#0a0f1a] relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-white/5 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-sm font-black text-bizRed uppercase tracking-[0.5em] mb-4">Market Intelligence</h2>
              <h3 className="text-5xl md:text-7xl font-black text-bizBlue dark:text-white uppercase tracking-tighter leading-[0.9] mb-10">
                Why Choose <br /><span className="text-bizYellow bg-bizBlue px-4 italic">Bizlink Ads?</span>
              </h3>
              <p className="text-xl text-gray-500 dark:text-gray-400 font-bold leading-relaxed mb-12">
                Since establishment, Bizlink Ads Magazine has been the trusted voice of business in Kenya, delivering high-quality content that engages decision-makers.
              </p>
              <div className="grid gap-8">
                <FeatureRow title="Wide Distribution" desc="distributed across Kenya, reaching thousands of business readers for maximum exposure." />
                <FeatureRow title="Business-Focused Content" desc="Stories, classifieds, and news that keep an attentive audience engaged and coming back." />
              </div>
            </div>
            
            <div className="grid gap-8">
              <div className="bg-bizBlue p-10 rounded-[3rem] text-white shadow-2xl rotate-2 transition-transform hover:rotate-0">
                <Gift className="text-bizYellow mb-6" size={48} />
                <h4 className="text-3xl font-black uppercase mb-4">Free for Readers</h4>
                <p className="text-white/70 font-bold leading-relaxed">Accessible to a wide audience, maximizing your ad's exposure to engaged business readers at zero barrier.</p>
              </div>
              <div className="bg-bizRed p-10 rounded-[3rem] text-white shadow-2xl -rotate-1 transition-transform hover:rotate-0">
                <Zap className="text-white mb-6" size={48} />
                <h4 className="text-3xl font-black uppercase mb-4">Easy Ad Booking</h4>
                <p className="text-white/90 font-bold leading-relaxed">Simple, fast, and affordable ad booking for businesses of all sizes, ensuring your message lands effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. ADVERTISING RATES (Deep Blue High-Contrast) --- */}
      <section id="advertise" className="py-32 bg-bizBlue dark:bg-[#05080f] text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-6xl md:text-[80px] font-black uppercase tracking-tighter leading-none mb-4">
                Ad Space <span className="text-bizYellow italic">Rates</span>
              </h2>
              <div className="h-2 w-48 bg-bizYellow rounded-full" />
            </div>
            <p className="text-white/50 font-black uppercase text-xs tracking-widest max-w-xs">
              Official Inventory Tier 01: Standard A4 Print Space Measurements.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Rates Table */}
            <div className="lg:col-span-8 space-y-4">
              {adSpaceRates.map((pkg, i) => (
                <div key={i} onClick={() => handleWhatsAppBooking(pkg)}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white hover:text-bizBlue transition-all cursor-pointer flex flex-col md:flex-row justify-between items-center gap-6"
                >
                  <div className="flex-1">
                    <span className="text-[10px] font-black bg-bizRed text-white px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">{pkg.benefit}</span>
                    <h4 className="text-2xl font-black uppercase">{pkg.name}</h4>
                    <p className="text-sm font-bold opacity-60 mt-1">{pkg.size} — {pkg.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-bizYellow group-hover:text-bizBlue mb-2">KES {pkg.price}</div>
                    <div className="flex items-center gap-2 justify-end text-[10px] font-black uppercase opacity-40">
                       BOOK NOW <ArrowRight size={14}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Service (Sponsored Article) Side Card */}
            <div className="lg:col-span-4 sticky top-10">
              <div className="bg-bizYellow p-10 rounded-[3.5rem] text-bizBlue shadow-2xl border-b-[12px] border-bizBlue/20">
                 <Layout className="mb-6 text-bizBlue" size={48} />
                 <h4 className="text-4xl font-black uppercase leading-tight mb-2 text-bizBlue">Editorial <br /> PR Focus</h4>
                 <div className="h-1 w-20 bg-bizRed mb-8" />
                 
                 <div className="space-y-6">
                    <div>
                       <p className="font-black uppercase text-[10px] opacity-60 tracking-widest">Inventory Tier 02</p>
                       <p className="text-2xl font-black uppercase mt-1">Sponsored Article</p>
                       <p className="text-sm font-bold mt-2 leading-snug">600 Words + High-res images. Includes brand bio and professional PR positioning.</p>
                       <div className="text-3xl font-black text-bizRed mt-6 font-mono">KES 25,000</div>
                       <button 
                         onClick={() => handleWhatsAppBooking({name: 'Sponsored Article', price: '25,000'})}
                         className="mt-6 w-full py-5 bg-bizBlue text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-bizRed transition-all shadow-lg"
                       >
                         INITIALIZE BOOKING
                       </button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. DIGITAL ARCHIVE (Slate background) --- */}
      <section className="py-32 bg-slate-50 dark:bg-[#0d1424]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-bizBlue dark:text-white">Digital <span className="text-bizRed">Archive</span></h2>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">2024 - 2025 Editions</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {magazineIssues.map((issue, idx) => (
              <div key={idx} className="bg-white dark:bg-white/5 p-4 rounded-[2.5rem] shadow-xl hover:-translate-y-4 transition-all group">
                <div className="aspect-[3/4] bg-bizBlue rounded-3xl flex items-center justify-center text-white font-black text-6xl italic group-hover:bg-bizYellow group-hover:text-bizBlue transition-colors duration-500">
                  {issue.date.split('-')[0].substring(0,3).toUpperCase()}
                </div>
                <div className="pt-8 px-4 pb-4">
                  <h3 className="font-black text-bizBlue dark:text-white uppercase text-lg leading-tight mb-2">{issue.title}</h3>
                  <a href={`https://drive.google.com/file/d/${issue.id}/view`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-bizRed font-black uppercase text-[10px] tracking-widest hover:gap-4 transition-all">
                    Open Digital Reader <ChevronRight size={14}/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      {isPreviewModalOpen && (
        <div className="fixed inset-0 z-[300] bg-bizBlue/95 backdrop-blur-xl flex flex-col p-6 animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-6 max-w-7xl mx-auto w-full">
             <h2 className="text-white font-black uppercase tracking-widest text-sm">Official Digital Interface</h2>
             <button onClick={() => setIsPreviewModalOpen(false)} className="bg-white text-bizBlue p-4 rounded-full shadow-2xl hover:bg-bizYellow transition-colors"><X size={24}/></button>
          </div>
          <iframe src={BTEXPO2026} className="w-full max-w-7xl mx-auto flex-1 rounded-[2rem] bg-white shadow-2xl" title="Reader" />
        </div>
      )}
    </main>
  );
}

// --- HELPER COMPONENTS ---

function StatBlock({ icon, val, label }) {
  return (
    <div className="flex flex-col items-center text-bizBlue group">
      <div className="mb-4 bg-bizBlue text-white p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <div className="text-4xl md:text-5xl font-black uppercase italic leading-none">{val}</div>
      <div className="text-[10px] font-black uppercase tracking-[0.3em] mt-3 opacity-60">{label}</div>
    </div>
  );
}

function FeatureRow({ title, desc }) {
  return (
    <div className="flex gap-5 group">
      <div className="shrink-0 w-10 h-10 bg-bizBlue text-bizYellow flex items-center justify-center rounded-2xl font-black text-sm group-hover:bg-bizRed group-hover:text-white transition-colors shadow-lg">✓</div>
      <div>
        <h4 className="font-black text-bizBlue dark:text-white uppercase text-xl leading-none">{title}</h4>
        <p className="text-gray-500 dark:text-gray-400 font-bold text-sm leading-snug mt-2">{desc}</p>
      </div>
    </div>
  );
}