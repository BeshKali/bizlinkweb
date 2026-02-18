import React, { useState, useEffect } from "react";
import { 
  Calendar, MapPin, Users, Trophy, 
  ChevronRight, X, Phone, 
  CheckCircle, FileText, Download,
  Clock, ArrowRight, Zap, Target, BarChart3
} from "lucide-react";

export default function Events() {
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const [isBoothModalOpen, setIsBoothModalOpen] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  const eventStats = [
    { title: "Strategic Venue", value: "RV Sports Club, Nakuru", desc: "A premium 5-acre facility designed for high-traffic industrial showcases.", chips: ["VVIP Security", "Logistics Hub"] },
    { title: "Targeted Audience", value: "10,000+ Verified", desc: "Focusing on B2B decision makers and high-intent retail consumers.", chips: ["40% Corporate", "60% Retail"] },
    { title: "Brand Ecosystem", value: "70+ Market Leaders", desc: "A curated selection of Kenya's most aggressive and innovative brands.", chips: ["Tech", "Finance", "Agri"] },
    { title: "Media Impact", value: "2.5M Impressions", desc: "Integrated digital and traditional coverage across all major platforms.", chips: ["Live TV", "Social Viral"] }
  ];

  const boothPackages = [
    { name: "Platinum Tier", price: "250,000", features: ["10m x 5m Premium Zone", "Integrated Media Package", "8 Executive Passes", "Full Page Magazine Feature"] },
    { name: "Gold Tier", price: "150,000", features: ["10m x 5m Standard Zone", "5 Executive Passes", "Digital Promo Slot", "Half Page Magazine Ad"] },
    { name: "Silver Tier", price: "100,000", features: ["5m x 5m Zone", "3 Executive Passes", "Directory Listing", "Quarter Page Ad"] },
    { name: "Standard Tier", price: "50,000", features: ["3m x 3m Shell Scheme", "1 Staff Pass", "Event Directory Listing", "Classified Ad"] }
  ];

  const galleryImages = [
    "https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NakuruXpo2025/IMG-20250530-WA0011.jpg",
    "https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NakuruXpo2025/DSC_0583.jpg",
    "https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NakuruXpo2025/DSC_0869_1.jpg",
    "https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NakuruXpo2025/DSC_0707.jpg",
    "https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NakuruXpo2025/DSC_0719.jpg",
    "https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NakuruXpo2025/DSC_0698.jpg"
  ];

  useEffect(() => {
    const target = new Date("March 5, 2026 09:00:00").getTime();
    const tick = () => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60)
      });
    };
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % eventStats.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [eventStats.length]);

  const handleWhatsAppBooking = () => {
    const phoneNumber = '254780985052';
    const msg = selectedBooth 
      ? `Hi Bizlink, Inquiry for *${selectedBooth.name}* (Ksh ${selectedBooth.price}) - Nakuru City Expo 2026.`
      : "Hi Bizlink, inquiry for Nakuru City Trade Expo 2026.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0f1a] text-bizBlue dark:text-gray-100 transition-colors duration-500 overflow-x-hidden">
      
      {/* --- 1. HUD HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Mesh and Gradient */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NaivashaXpo2025/vashamobileposter.jpg" />
            <img src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-events.jpg" className="w-full h-full object-cover grayscale-[50%] dark:grayscale" alt="Expo" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-tr from-bizBlue via-transparent to-bizBlue/40 dark:from-[#0a0f1a] dark:to-[#0a0f1a]/80" />
          {/* Tech Grid */}
          <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        </div>

        {/* Decorative HUD Corners */}
        <div className="absolute top-40 left-10 w-20 h-20 border-t-2 border-l-2 border-bizYellow opacity-50 hidden lg:block" />
        <div className="absolute top-40 right-10 w-20 h-20 border-t-2 border-r-2 border-bizRed opacity-50 hidden lg:block" />

        <div className="relative z-10 text-center px-6 max-w-6xl">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-10">
            <span className="flex h-2 w-2 rounded-full bg-bizRed animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Live Event Briefing</span>
          </div>

          <h1 className="text-5xl md:text-[110px] font-black leading-[0.85] uppercase tracking-tighter mb-10 italic">
            <span className="text-white">Nakuru City</span> <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #FFD700' }}>Trade Expo</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
             <div className="flex items-center gap-4 text-white/80 font-bold uppercase tracking-widest text-sm">
                <MapPin className="text-bizYellow" /> Rift Valley Sports Club
             </div>
             <div className="w-2 h-2 bg-bizRed rounded-full hidden md:block" />
             <div className="flex items-center gap-4 text-white/80 font-bold uppercase tracking-widest text-sm">
                <Calendar className="text-bizYellow" /> March 5 — 7, 2026
             </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-bizYellow">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-bizYellow to-transparent" />
        </div>
      </section>

      {/* --- 2. THE MISSION CLOCK (Countdown) --- */}
      <section className="py-20 bg-bizBlue dark:bg-[#05080f] text-white border-y-4 border-bizYellow shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              The Countdown <br /> To <span className="text-bizYellow italic underline decoration-bizRed">Market Dominance</span>
            </h2>
            <p className="text-white/60 font-medium">System status: All exhibiting modules are currently being finalized. Secure your position before the clock hits zero.</p>
          </div>
          <div className="grid grid-cols-4 gap-4 p-8 bg-black/40 backdrop-blur-xl rounded-[2rem] border border-white/10">
            <CountdownBlock val={timeLeft.days} label="Days" />
            <CountdownBlock val={timeLeft.hours} label="Hours" />
            <CountdownBlock val={timeLeft.mins} label="Mins" />
            <CountdownBlock val={timeLeft.secs} label="Secs" />
          </div>
        </div>
      </section>

      {/* --- 3. LIVE FEED STATS --- */}
      <section className="py-32 bg-white dark:bg-[#0a0f1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeStatIndex * 100}%)` }}>
            {eventStats.map((stat, i) => (
              <div key={i} className="min-w-full px-4">
                <div className="bg-slate-50 dark:bg-white/5 p-12 md:p-20 rounded-[3rem] border border-bizBlue/10 dark:border-white/10 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1">
                    <div className="text-bizRed font-black uppercase tracking-[0.3em] mb-4 text-sm flex items-center gap-2">
                       <Target size={18}/> Metric Identifier {i + 1}
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black text-bizBlue dark:text-white uppercase tracking-tighter mb-6 leading-none">
                      {stat.value}
                    </h3>
                    <p className="text-xl text-gray-500 dark:text-gray-400 font-bold max-w-xl mb-10 leading-snug">
                      {stat.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {stat.chips.map(chip => (
                        <span key={chip} className="px-5 py-2 bg-bizYellow/20 dark:bg-bizYellow/10 text-bizBlue dark:text-bizYellow rounded-full font-black text-xs uppercase">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:block w-px h-64 bg-bizBlue/10 dark:bg-white/10" />
                  <div className="text-center md:text-left min-w-[200px]">
                     <h4 className="text-gray-400 font-black uppercase tracking-widest text-xs mb-2">Category</h4>
                     <p className="text-3xl font-black text-bizBlue dark:text-white uppercase italic">{stat.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-12">
            {eventStats.map((_, i) => (
              <button key={i} onClick={() => setActiveStatIndex(i)} className={`h-2 transition-all rounded-full ${activeStatIndex === i ? 'w-16 bg-bizRed' : 'w-4 bg-gray-200 dark:bg-white/10'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. EXHIBITION MODULES (Packages) --- */}
      <section className="py-32 bg-gray-50 dark:bg-[#0d1424]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-bizRed uppercase tracking-[0.5em] mb-4">Space Reservation</h2>
            <h3 className="text-5xl md:text-7xl font-black text-bizBlue dark:text-white uppercase tracking-tighter leading-none italic">Choose Your <span className="text-bizYellow">Tier</span></h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boothPackages.map((pkg, i) => (
              <div key={i} className="group relative bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-transparent hover:border-bizYellow transition-all duration-500 shadow-xl hover:-translate-y-4">
                <div className="absolute top-0 right-0 p-6 text-gray-100 dark:text-white/5 font-black text-6xl italic select-none">0{i+1}</div>
                <h3 className="text-2xl font-black text-bizBlue dark:text-white mb-2 uppercase italic">{pkg.name}</h3>
                <div className="text-bizRed dark:text-bizYellow font-black text-3xl mb-8">KES {pkg.price}</div>
                
                <div className="space-y-4 mb-10">
                  {pkg.features.map(f => (
                    <div key={f} className="flex items-start gap-3 text-xs font-bold text-gray-500 dark:text-gray-400">
                      <CheckCircle size={14} className="text-bizRed shrink-0 mt-0.5" /> {f}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => { setSelectedBooth(pkg); setIsBoothModalOpen(true); }}
                  className="w-full py-5 bg-bizBlue dark:bg-bizYellow text-white dark:text-bizBlue font-black rounded-2xl hover:bg-bizRed hover:text-white transition-all uppercase text-xs tracking-widest shadow-lg"
                > Initialize Booking </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. TECHNICAL DOCUMENTATION --- */}
      <section className="py-20 bg-white dark:bg-[#0a0f1a]">
        <div className="max-w-5xl mx-auto px-6">
           <div className="bg-bizBlue dark:bg-black/40 p-12 rounded-[3rem] border border-bizBlue/20 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-black text-white uppercase mb-2">Technical Briefing</h2>
                <p className="text-white/50 font-medium">Download the floor plans and exhibitor protocol.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <DocButton icon={<FileText/>} label="Expo Agreement" href="https://drive.google.com/file/d/1P4v90LBOYaIFsyLu4anU2t_ATu0jnYNF/view" />
                <DocButton icon={<Download/>} label="VVIP Invitation" href="https://drive.google.com/file/d/1b6xmFKFl4sG_uptMp2qTW0ghb98lKmxX/view" />
              </div>
           </div>
        </div>
      </section>

      {/* --- 6. SUCCESS PORTFOLIO (Gallery) --- */}
      <section className="py-32 bg-white dark:bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
             <h2 className="text-4xl md:text-5xl font-black text-bizBlue dark:text-white uppercase tracking-tighter">Event <span className="text-bizYellow">History</span></h2>
             <Trophy size={48} className="text-bizRed opacity-20" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-3xl overflow-hidden group border border-transparent hover:border-bizYellow transition-all cursor-crosshair">
                <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Gallery" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL: RESERVATION HUD --- */}
      {isBoothModalOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-bizBlue/90 dark:bg-black/95 backdrop-blur-xl">
          <div className="bg-white dark:bg-[#0d1424] w-full max-w-xl rounded-[3rem] p-10 shadow-2xl relative border-t-8 border-bizYellow overflow-hidden">
            <button onClick={() => setIsBoothModalOpen(false)} className="absolute top-8 right-8 text-gray-400 hover:text-bizRed transition-colors"><X size={32}/></button>
            <div className="mb-10">
               <h3 className="text-4xl font-black text-bizBlue dark:text-white uppercase italic tracking-tighter">Reserve Booth</h3>
               <p className="text-bizRed font-black uppercase text-xs tracking-widest mt-2">Nakuru City Edition 2026</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3 mb-10 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {boothPackages.map((pkg, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedBooth(pkg)}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${selectedBooth?.name === pkg.name ? 'border-bizYellow bg-bizYellow/5 ring-1 ring-bizYellow' : 'border-gray-100 dark:border-white/5 dark:bg-white/5 hover:border-bizBlue/20'}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-black text-bizBlue dark:text-white uppercase">{pkg.name}</span>
                    <span className="text-bizRed font-black">KES {pkg.price}</span>
                  </div>
                </button>
              ))}
            </div>

            <button 
              onClick={handleWhatsAppBooking} 
              className={`w-full py-6 rounded-2xl font-black text-lg flex items-center justify-center gap-4 transition-all ${selectedBooth ? 'bg-[#25D366] text-white hover:scale-[1.02]' : 'bg-gray-200 dark:bg-white/10 text-gray-400 dark:text-white/20 cursor-not-allowed'}`}
            >
              <Phone size={24} fill="currentColor" /> CONNECT TO AGENT
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

// --- SUB-COMPONENTS ---

function CountdownBlock({ val, label }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border-r border-white/5 last:border-r-0">
      <span className="text-4xl md:text-6xl font-black text-bizYellow leading-none font-mono">
        {val.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mt-3">
        {label}
      </span>
    </div>
  );
}

function DocButton({ icon, label, href }) {
  return (
    <a href={href} className="flex items-center gap-4 px-8 py-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all group">
      <div className="text-bizYellow group-hover:scale-125 transition-transform">{icon}</div>
      <span className="text-white font-black uppercase text-sm tracking-widest">{label}</span>
    </a>
  );
}