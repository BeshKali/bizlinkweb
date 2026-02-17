import React, { useState, useEffect } from "react";
import { 
  Calendar, MapPin, Users, Trophy, 
  ChevronRight, ChevronLeft, X, Phone, 
  CheckCircle, FileText, Download, Star,
  Clock, ArrowRight
} from "lucide-react";

export default function Events() {
  // --- State Management ---
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const [isBoothModalOpen, setIsBoothModalOpen] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  // --- Data Arrays ---
  const eventStats = [
    { title: "Location", value: "Rift Valley Sports Club, Nakuru City", desc: "Central location with easy access and modern facilities.", chips: ["Central", "Accessible", "Ample Parking"] },
    { title: "Dates", value: "Nov 5-7, 2026", desc: "Three energizing days of showcases and guided networking.", chips: ["Thu", "Fri", "Sat"] },
    { title: "Attendees", value: "4,000+ Visitors", desc: "Entrepreneurs, shoppers, and business enthusiasts.", chips: ["Shoppers", "Entrepreneurs", "Teams"] },
    { title: "Exhibitors", value: "70+ Bold Brands", desc: "From finance and tech to retail and services.", chips: ["Promos", "New Launches", "Specials"] }
  ];

  const boothPackages = [
    { name: "Platinum", price: "250,000", color: "#E5E4E2", border: "#C0C0C0", features: ["Prime Location", "10m x 5m Tent", "8 Networking Passes", "Full Page Magazine Ad"] },
    { name: "Gold", price: "150,000", color: "#FFD700", border: "#FFA500", features: ["High Traffic Area", "10m x 5m Tent", "5 Networking Passes", "Half Page Magazine Ad"] },
    { name: "Silver", price: "100,000", color: "#C0C0C0", border: "#A9A9A9", features: ["Standard Visibility", "5m x 5m Tent", "3 Networking Passes", "Quarter Page Magazine Ad"] },
    { name: "Standard", price: "50,000", color: "#F5F5DC", border: "#DEB887", features: ["Standard Location", "3m x 3m Tent", "1 Networking Pass", "Classified Ad"] }
  ];

  const galleryImages = [
    "https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NakuruXpo2025/IMG-20250530-WA0011.jpg",
    "https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NakuruXpo2025/DSC_0583.jpg",
    "https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NakuruXpo2025/DSC_0869_1.jpg",
    "https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NakuruXpo2025/DSC_0707.jpg",
    "https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NakuruXpo2025/DSC_0719.jpg",
    "https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NakuruXpo2025/DSC_0698.jpg"
  ];

  // --- Logic: Countdown Timer ---
// --- Logic: Countdown Timer (Naivasha Expo) ---
useEffect(() => {
    const target = new Date("March 5, 2026 09:00:00").getTime();
  
    const tick = () => {
      const now = Date.now();
      const diff = target - now;
  
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
  
      setTimeLeft({ days, hours, mins, secs });
    };
  
    tick(); // run instantly on mount
    const interval = setInterval(tick, 1000);
  
    return () => clearInterval(interval);
  }, []);
  
  // --- Logic: Auto-Play Carousel ---
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % eventStats.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [eventStats.length]);

  const handleWhatsAppBooking = () => {
    const phoneNumber = '254780985052';
    const msg = selectedBooth 
      ? `Hi Bizlink, I'm interested in the *${selectedBooth.name} Booth Package* (Kshs ${selectedBooth.price}) for the Naivasha Expo 2025.`
      : "Hi Bizlink, I'd like to inquire about exhibiting at the Nakuru City Expo 2026.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-white font-sans text-bizDark overflow-x-hidden pt-4">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <picture className="absolute inset-0 z-0">
          <source media="(max-width: 768px)" srcSet="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/NaivashaXpo2025/vashamobileposter.jpg" />
          <img src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-events.jpg" className="w-full h-full object-cover" alt="Expo Hero" />
        </picture>
        <div className="absolute inset-0 bg-bizBlue/20 lg:bg-bizBlue/10" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="bg-bizYellow text-bizBlue inline-block px-6 py-2 rounded-full font-black mb-6 animate-bounce shadow-xl uppercase tracking-widest text-xs md:text-sm">Upcoming Event</div>
          <h1 className="text-white text-4xl md:text-7xl font-black uppercase drop-shadow-2xl leading-tight">
            Bizlink Trade Expo <br/> <span className="text-bizYellow underline decoration-bizRed underline-offset-8">Nakuru City 2026</span>
          </h1>
        </div>
      </section>

      {/* 2. EVENT TITLE & COUNTDOWN */}
      <section className="py-12 md:py-16 bg-gray-50 border-y-4 border-bizYellow">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-black text-bizBlue uppercase mb-4 leading-tight">BizLink Trade Expo (BTEXPO) <br/> Nakuru City Edition 2026</h2>
          <p className="text-lg md:text-xl text-gray-600 font-bold mb-10 italic">Rift Valley Sports Club | March 5-7, 2026</p>

          <div className="grid grid-cols-4 gap-2 md:gap-6 max-w-2xl mx-auto bg-white p-4 md:p-8 rounded-3xl shadow-2xl border-2 border-bizBlue">
            <CountdownBlock val={timeLeft.days} label="Days" />
            <CountdownBlock val={timeLeft.hours} label="Hrs" />
            <CountdownBlock val={timeLeft.mins} label="Min" />
            <CountdownBlock val={timeLeft.secs} label="Sec" />
          </div>
        </div>
      </section>

      {/* 3. EVENT STATS CAROUSEL */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeStatIndex * 100}%)` }}>
            {eventStats.map((stat, i) => (
              <div key={i} className="min-w-full flex justify-center px-2">
                <div className="bg-bizBlue text-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl max-w-2xl w-full text-center border-b-8 border-bizYellow">
                  <h4 className="text-bizYellow font-black uppercase tracking-widest text-sm md:text-lg mb-2">{stat.title}</h4>
                  <h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight">{stat.value}</h3>
                  <p className="text-white/80 text-base md:text-lg mb-8 font-medium">{stat.desc}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {stat.chips.map(chip => <span key={chip} className="bg-white/10 px-3 py-1 rounded-full text-xs md:text-sm font-bold">{chip}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {eventStats.map((_, i) => (
              <button key={i} onClick={() => setActiveStatIndex(i)} className={`h-2 transition-all rounded-full ${activeStatIndex === i ? 'w-10 bg-bizBlue' : 'w-3 bg-gray-200'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOCUMENTS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-black text-bizBlue uppercase mb-2">Event Documents</h2>
              <p className="text-gray-500 font-medium">Download floor plans and terms before booking.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <DocButton label="BTEXPO Agreement" href="https://drive.google.com/file/d/1P4v90LBOYaIFsyLu4anU2t_ATu0jnYNF/view" />
              <DocButton label="Invitation" href="https://drive.google.com/file/d/1b6xmFKFl4sG_uptMp2qTW0ghb98lKmxX/view" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXHIBITOR PACKAGES */}
      <section className="py-20 md:py-24 bg-bizBlue relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Choose Your <span className="text-bizYellow">Package</span></h2>
            <div className="w-24 h-2 bg-bizYellow mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boothPackages.map((pkg, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 flex flex-col shadow-2xl transition-all hover:-translate-y-2 border-t-8 border-transparent hover:border-bizYellow">
                <h3 className="text-2xl font-black text-bizBlue mb-1 uppercase tracking-tighter">{pkg.name}</h3>
                <div className="text-bizRed font-black text-2xl mb-6">KES {pkg.price}</div>
                <div className="flex-1 space-y-3 mb-8">
                  {pkg.features.map(f => (
                    <div key={f} className="flex items-start gap-2 text-xs font-bold text-gray-600">
                      <CheckCircle size={14} className="text-bizBlue shrink-0 mt-0.5" /> {f}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => { setSelectedBooth(pkg); setIsBoothModalOpen(true); }}
                  className="w-full py-4 bg-bizYellow text-bizBlue font-black rounded-xl hover:bg-bizDark hover:text-white transition-all uppercase text-sm shadow-md"
                >Book Space</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PAST SUCCESS & GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-2 text-bizBlue font-black uppercase text-sm mb-2"><Trophy size={18} className="text-bizYellow"/> Success Portfolio</div>
            <h2 className="text-4xl md:text-5xl font-black text-bizBlue uppercase tracking-tighter">Past <span className="text-bizYellow">Highlights</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <PastEventCard
                title="Nakuru Trade Expo"
                date="May 29–31, 2025"
                loc="RV Sports Club"
                attendees="10,000+"
            />

            <PastEventCard
                title="Eldoret Business Expo"
                date="Sept 4–6, 2025"
                loc="TAC Grounds"
                attendees="10,000+"
            />

            {/* LATEST UPDATE CARD */}
            <UpdateCard
                title="Nakuru City Expo 2026 Is Up Next!"
                desc="Booth bookings are now open. Limited prime spaces remaining. Secure your spot today."
                date="Updated: Feb 2026"
                cta="Book a Booth"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            </div>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="h-32 md:h-48 rounded-xl overflow-hidden shadow-md group border-2 border-transparent hover:border-bizYellow transition-all">
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Gallery" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL: BOOTH BOOKING --- */}
      {isBoothModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-bizDark/90 backdrop-blur-md">
          <div className="bg-white w-full max-w-lg rounded-[2rem] p-6 md:p-10 shadow-2xl relative border-t-8 border-bizYellow overflow-y-auto max-h-[95vh]">
            <button onClick={() => setIsBoothModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-bizRed"><X size={32}/></button>
            <h3 className="text-3xl font-black text-bizBlue mb-2 uppercase italic tracking-tighter">Reserve Your Booth</h3>
            <p className="text-gray-500 mb-8 font-bold">Select a package to book on WhatsApp.</p>
            
            <div className="space-y-3 mb-8">
              {boothPackages.map((pkg, i) => (
                <button key={i} onClick={() => setSelectedBooth(pkg)}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${selectedBooth?.name === pkg.name ? 'border-bizYellow bg-bizYellow/5 ring-2 ring-bizYellow' : 'border-gray-100'}`}
                >
                  <div className="flex justify-between font-black text-sm uppercase">
                    <span className="text-bizBlue">{pkg.name} Package</span>
                    <span className="text-bizRed">KES {pkg.price}</span>
                  </div>
                </button>
              ))}
            </div>

            <button onClick={handleWhatsAppBooking} 
              className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all ${selectedBooth ? 'bg-[#25D366] text-white' : 'bg-gray-200 text-gray-400'}`}
            >
              <Phone size={20} fill="currentColor" /> CHAT WITH SALES TEAM
            </button>
          </div>
        </div>
      )}

    </main>
  );
}

// --- HELPER COMPONENTS ---
function CountdownBlock({ val, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-6xl font-black text-bizBlue leading-none">{val.toString().padStart(2, '0')}</span>
      <span className="text-[10px] md:text-xs font-black text-bizRed uppercase tracking-widest mt-2">{label}</span>
    </div>
  );
}

function DocButton({ label, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl hover:border-bizBlue hover:bg-white transition-all group shrink-0">
      <FileText size={20} className="text-bizBlue"/>
      <span className="font-black text-bizBlue uppercase text-xs md:text-sm">{label}</span>
      <Download size={16} className="text-bizRed" />
    </a>
  );
}

function PastEventCard({ title, date, loc, attendees }) {
  return (
    <div className="bg-white p-6 rounded-3xl border-2 border-gray-100 shadow-lg hover:border-bizBlue transition-all group">
      <h3 className="text-xl md:text-2xl font-black text-bizBlue mb-4 uppercase leading-none group-hover:text-bizRed">{title}</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-500 font-bold text-xs"><Calendar size={14} className="text-bizBlue"/> {date}</div>
        <div className="flex items-center gap-2 text-gray-500 font-bold text-xs"><MapPin size={14} className="text-bizBlue"/> {loc}</div>
        <div className="flex items-center gap-2 text-gray-500 font-bold text-xs"><Users size={14} className="text-bizBlue"/> {attendees} visitors</div>
      </div>
    </div>
  );
}

function UpdateCard({ title, desc, date, cta, onClick }) {
    return (
      <div className="relative bg-bizYellow text-bizBlue p-8 rounded-3xl shadow-2xl overflow-hidden group">
        {/* Accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-bizRed/20 rounded-full blur-2xl" />
  
        <span className="inline-block mb-3 bg-bizBlue text-bizYellow px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
          Latest Update
        </span>
  
        <h3 className="text-2xl font-black uppercase leading-tight mb-3">
          {title}
        </h3>
  
        <p className="text-sm font-bold mb-6">{desc}</p>
  
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-widest text-bizBlue/80">
            {date}
          </span>
  
          <button
            onClick={onClick}
            className="bg-bizBlue text-bizYellow px-5 py-2 rounded-xl font-black uppercase hover:bg-bizDark transition-all shadow-md"
          >
            {cta}
          </button>
        </div>
      </div>
    );
  }
  

function StatBlock({ icon, val, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 bg-bizBlue text-bizYellow p-4 rounded-2xl shadow-lg">{icon}</div>
      <span className="text-4xl font-black text-bizBlue leading-none mb-1">{val}</span>
      <span className="text-bizBlue font-bold uppercase tracking-widest text-xs">{label}</span>
    </div>
  );
}