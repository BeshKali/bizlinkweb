import React, { useState, useEffect } from "react";
import { 
  Users, Calendar, Gift, ExternalLink, 
  X, MapPin, Newspaper, Rocket, Phone, 
  BookOpen, MousePointer2, ChevronRight,
  Zap, CheckCircle, Target, Sparkles, Layout
} from "lucide-react";

export default function MagazinePage() {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const magazineIssues = [
    { title: "AUG-SEPT 2025 ISSUE", id: "163m65mJm43Le0SqC2P1W0WhbDwYNbAHA", date: "Aug-Sept 2025" },
    { title: "May 2025 Issue", id: "1l_xD5RFAG4SNSxaIdSMijmMJ45owJbjW", date: "May 2025" },
  ];

  const adSpaceRates = [
    { 
      name: "Double Spread", size: "42.0 cm x 29.7 cm", price: "150,000", 
      benefit: "Maximum Authority", desc: "Covers two full pages. Ideal for high-impact visual storytelling." 
    },
    { 
      name: "Back Cover Page", size: "21 x 29.7 cm", price: "120,000", 
      benefit: "Premium Visibility", desc: "The most viewed position. Visible even when the magazine is closed." 
    },
    { 
      name: "Inside Front Cover", size: "21 x 29.7 cm", price: "100,000", 
      benefit: "First Impression", desc: "The first page readers see upon opening. High engagement." 
    },
    { 
      name: "Full Page", size: "21 x 29.7 cm", price: "80,000", 
      benefit: "Standard Excellence", desc: "A complete A4 page dedicated entirely to your brand message." 
    },
    { 
      name: "Half Page", size: "21 x 14.85 cm", price: "40,000", 
      benefit: "Strategic Value", desc: "The perfect balance of professional presence and cost-effective reach." 
    },
  ];

  const handleWhatsAppBooking = (pkg) => {
    const phoneNumber = '254780985052';
    const message = `🚀 *MAGAZINE AD BOOKING*\n*Tier:* ${pkg.name}\n*Rate:* Kshs. ${pkg.price}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1a] font-sans overflow-x-hidden">
      
      {/* --- 1. IMPACT HERO (Deep Blue Background) --- */}
      <section className="relative min-h-screen flex items-center bg-bizBlue overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-0 right-0 text-[25rem] font-black text-white/5 leading-none select-none translate-x-20">BIZ</div>
        
        <div className="absolute inset-0 z-0">
          <img src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/magazine/hero-magazine.jpg" 
               className="w-full h-full object-cover opacity-10 grayscale" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-bizBlue via-bizBlue/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-3 bg-bizYellow text-bizBlue px-4 py-2 rounded-lg mb-8 font-black uppercase tracking-widest text-xs">
              <Sparkles size={14} /> Established 2014
            </div>
            <h1 className="text-6xl md:text-[110px] font-black leading-[0.8] uppercase tracking-tighter mb-8 italic">
              Strategic <br /><span className="text-bizYellow">Print</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-medium max-w-lg mb-12">
              The trusted voice of Kenyan industry. Reaching decision-makers across 47 counties through precision native advertising.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsPreviewModalOpen(true)} className="bg-bizYellow text-bizBlue px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-white transition-all flex items-center gap-4">
                <BookOpen size={24} /> ACCESS COPIES
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
             <div className="absolute -inset-10 bg-bizYellow/20 blur-[100px] rounded-full" />
             <img src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/magazine/magsep.jpg" 
                  className="relative z-10 rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] w-full border-8 border-white/10" alt="Latest" />
          </div>
        </div>
      </section>

      {/* --- 2. ASYMMETRIC STATS (Yellow Block) --- */}
      <section className="relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-bizYellow py-12 px-10 rounded-b-[4rem] md:rounded-[4rem] -mt-10 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatItem icon={<Users />} val="100K+" label="Monthly Readers" />
            <StatItem icon={<Calendar />} val="11+" label="Years of Lead" />
            <StatItem icon={<MapPin />} val="47" label="Counties Covered" />
            <StatItem icon={<Layers />} val="FREE" label="Distribution" />
          </div>
        </div>
      </section>

      {/* --- 3. THE "WHY" SECTION (Split Color Background) --- */}
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-sm font-black text-bizRed uppercase tracking-[0.5em] mb-4">Market Presence</h2>
              <h3 className="text-5xl md:text-7xl font-black text-bizBlue uppercase tracking-tighter leading-[0.9] mb-10">
                The Trusted <br /><span className="text-bizYellow bg-bizBlue px-4 italic">Industry Voice</span>
              </h3>
              <p className="text-xl text-gray-500 font-bold leading-relaxed mb-12">
                Since establishment, Bizlink Ads Magazine has been the trusted voice of business in Kenya, delivering high-quality content that engages decision-makers.
              </p>
              <div className="grid gap-6">
                <FeatureItem title="Wide Distribution" desc="distributed across Kenya, reaching thousands of business readers." />
                <FeatureItem title="Business-Focused" desc="Stories, classifieds, and news that keep an attentive audience engaged." />
              </div>
            </div>
            
            <div className="grid gap-8 mt-12">
              <div className="bg-bizBlue p-10 rounded-[3rem] text-white shadow-2xl rotate-2">
                <Gift className="text-bizYellow mb-6" size={48} />
                <h4 className="text-3xl font-black uppercase mb-4">Free for Readers</h4>
                <p className="text-white/70 font-bold">Making it accessible to a wide audience and maximizing your ad's exposure to engaged business readers.</p>
              </div>
              <div className="bg-bizRed p-10 rounded-[3rem] text-white shadow-2xl -rotate-1">
                <Zap className="text-white mb-6" size={48} />
                <h4 className="text-3xl font-black uppercase mb-4">Easy Ad Booking</h4>
                <p className="text-white/90 font-bold">Simple, fast, and affordable ad booking for businesses of all sizes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. ADVERTISING RATES (Asymmetric Grid) --- */}
      <section className="py-32 bg-bizBlue text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
              Rate <span className="text-bizYellow italic">Cards</span>
            </h2>
            <div className="h-2 w-48 bg-bizYellow" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
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
                    <div className="text-[10px] font-black uppercase opacity-40">Click to Initialize Booking</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 sticky top-10">
              <div className="bg-bizYellow p-12 rounded-[3.5rem] text-bizBlue shadow-2xl border-b-[12px] border-bizBlue/20">
                 <Layout className="mb-6" size={50} />
                 <h4 className="text-4xl font-black uppercase leading-tight mb-6">PR & <br />Content</h4>
                 <div className="space-y-6">
                    <div className="pb-6 border-b border-bizBlue/10">
                       <p className="font-black uppercase text-xs opacity-60">Service // 06</p>
                       <p className="text-xl font-black uppercase mt-1">Sponsored Article</p>
                       <p className="text-sm font-bold mt-2">600 Words + Photos. Professional PR Focus.</p>
                       <button onClick={() => handleWhatsAppBooking({name: 'Sponsored Article', price: '25,000'})} className="mt-6 w-full py-4 bg-bizBlue text-white rounded-xl font-black uppercase text-xs">KES 25,000</button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. ISSUE ARCHIVE (Alternating colors) --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter text-bizBlue mb-16">Digital <span className="text-bizRed">Archive</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {magazineIssues.map((issue, idx) => (
              <div key={idx} className="bg-white p-4 rounded-3xl shadow-xl hover:-translate-y-4 transition-transform group">
                <div className="aspect-[3/4] bg-bizBlue rounded-2xl flex items-center justify-center text-white font-black text-6xl italic group-hover:bg-bizYellow group-hover:text-bizBlue transition-colors duration-500">
                  {issue.date.split('-')[0].substring(0,3)}
                </div>
                <div className="pt-6 px-4">
                  <h3 className="font-black text-bizBlue uppercase text-lg">{issue.title}</h3>
                  <a href={`https://drive.google.com/file/d/${issue.id}/view`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-bizRed font-black uppercase text-[10px] mt-2 tracking-widest">Open Edition <ChevronRight size={12}/></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      {isPreviewModalOpen && (
        <div className="fixed inset-0 z-[300] bg-bizBlue/95 flex flex-col p-6">
          <div className="flex justify-between items-center mb-6">
             <h2 className="text-white font-black uppercase tracking-widest">Bizlink Digital Reader</h2>
             <button onClick={() => setIsPreviewModalOpen(false)} className="bg-white text-bizBlue p-4 rounded-full"><X size={24}/></button>
          </div>
          <iframe src={`https://drive.google.com/file/d/${magazineIssues[0].id}/preview`} className="w-full h-full rounded-2xl bg-white" title="Reader" />
        </div>
      )}
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatItem({ icon, val, label }) {
  return (
    <div className="flex flex-col items-center text-bizBlue group">
      <div className="mb-3 bg-bizBlue text-white p-3 rounded-xl group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <div className="text-4xl font-black uppercase italic leading-none">{val}</div>
      <div className="text-[10px] font-black uppercase tracking-widest mt-2 opacity-60">{label}</div>
    </div>
  );
}

function FeatureItem({ title, desc }) {
  return (
    <div className="flex gap-4 group">
      <div className="shrink-0 w-8 h-8 bg-bizBlue text-bizYellow flex items-center justify-center rounded-full font-black text-xs">✓</div>
      <div>
        <h4 className="font-black text-bizBlue uppercase text-lg">{title}</h4>
        <p className="text-gray-500 font-bold text-sm leading-snug mt-1">{desc}</p>
      </div>
    </div>
  );
}