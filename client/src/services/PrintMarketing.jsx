import React, { useState, useEffect, useRef } from "react";
import { 
  Building2, Printer, Shirt, Megaphone, 
  Expand, FileText, Search, PenTool, 
  Truck, BarChart3, ChevronRight, 
  Layers, Cpu, Globe, Zap, ShieldCheck,
  Target, Sparkles, Code, Share2, MousePointer2
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../assets/hero-print-marketing.jpg"; 

export default function PrintMediaDigital() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const digitalSectionRef = useRef(null);

  const scrollToDigital = () => {
    digitalSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { icon: <Building2 />, title: "Outdoor Advertising", desc: "High-impact billboards and displays strategically placed in Kenya's primary economic transit corridors." },
    { icon: <Printer />, title: "Business Materials", desc: "Premium stationery, brochures, and corporate profiles that command respect in the boardroom." },
    { icon: <Shirt />, title: "Branded Merchandise", desc: "Heavy-duty apparel and corporate items that turn stakeholders into brand ambassadors." },
    { icon: <Megaphone />, title: "Promo Campaigns", desc: "Targeted print strategies engineered to convert physical reach into digital engagement." },
    { icon: <Expand />, title: "Large Format", desc: "Precision vehicle wraps and banners that turn your fleet into a high-visibility mobile network." },
    { icon: <FileText />, title: "Corp. Stationery", desc: "Flawless technical prints, letterheads, and security-printed forms for consistent branding." }
  ];

  const digitalServices = [
    { icon: <Code />, title: "Web Development", desc: "Custom architecture including responsive design, e-commerce, and high-performance maintenance." },
    { icon: <Share2 />, title: "Social Strategy", desc: "Strategic management covering content creation, community engagement, and paid ad cycles." },
    { icon: <Search />, title: "SEO Engineering", desc: "Technical optimization, keyword research, and local search dominance to outpace competitors." },
    { icon: <Sparkles />, title: "Content Synthesis", desc: "Engaging blog strategy, email marketing, and high-conversion video content production." }
  ];

  return (
    <main className="bg-white dark:bg-[#0a0f1a] min-h-screen font-sans overflow-x-hidden transition-colors duration-500">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center bg-bizBlue overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-bizBlue via-bizBlue/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10 pt-20 pb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bizYellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-bizYellow"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">System Node: Print-Digital Sync</span>
            </div>

            <h1 className="text-6xl md:text-[100px] font-black text-white mb-8 uppercase tracking-tighter leading-[0.85] italic">
              Print <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #FFD700' }}>Dynamics</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 font-bold max-w-xl mb-12 leading-tight">
              Engineering the fusion of high-end physical media with data-driven digital architecture for Kenya's leading industrial brands.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/contact-us-2" className="group bg-bizYellow text-bizBlue px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white transition-all shadow-2xl flex items-center gap-3">
                Initialize Project <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              {/* NEW DYNAMIC BUTTON */}
              <button 
                onClick={scrollToDigital}
                className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-bizRed transition-all flex items-center gap-3"
              >
                Digital Solutions <MousePointer2 className="group-hover:scale-110 transition-transform" size={18}/>
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="absolute -top-6 -left-6 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl animate-bounce duration-[4000ms]">
                <div className="bg-bizYellow p-3 rounded-xl text-bizBlue shadow-lg">
                    <ShieldCheck size={28} />
                </div>
            </div>
            <div className="relative overflow-hidden rounded-[3.5rem] border-[12px] border-white/5 bg-[#05080f] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] group w-full aspect-[4/5]">
                <img src={Hero} alt="Print Display" onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-contain transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bizBlue/90 via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. STATS BRIDGE --- */}
      <section className="bg-bizYellow py-16 relative z-20 shadow-2xl">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatBlock val="100%" label="Swiss-Grade Quality" />
            <StatBlock val="24/7" label="Production Cycles" />
            <StatBlock val="47" label="Counties Covered" />
            <StatBlock val="FAST" label="Deployment Speed" />
         </div>
      </section>

      {/* --- 3. PRINT INFRASTRUCTURE --- */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-[#0d1424]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-bizRed uppercase tracking-[0.5em] mb-4">Service Protocol 01</h2>
              <h3 className="text-3xl md:text-7xl font-black text-bizBlue dark:text-white uppercase leading-none tracking-tighter italic">
                Physical <br /> <span className="text-bizYellow">Infrastructure</span>
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceModule key={i} icon={s.icon} title={s.title} desc={s.desc} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. DIGITAL MARKETING SHOWCASE (DYNAMIC SECTION) --- */}
      <section ref={digitalSectionRef} className="py-32 px-6 bg-white dark:bg-[#0a0f1a] relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black text-bizRed uppercase tracking-[0.5em] mb-4">Service Protocol 02</h2>
            <h3 className="text-5xl md:text-8xl font-black text-bizBlue dark:text-white uppercase tracking-tighter italic">
              Digital <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #184BFF' }}>Intelligence</span>
            </h3>
            <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto font-bold">
              Comprehensive digital ecosystems designed to convert online visibility into measurable industrial growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalServices.map((s, i) => (
              <div key={i} className="group relative bg-bizBlue p-1 rounded-[2.5rem] overflow-hidden transition-transform hover:-translate-y-2">
                 <div className="bg-white dark:bg-[#111827] p-12 rounded-[2.3rem] h-full">
                    <div className="flex justify-between items-start mb-8">
                       <div className="bg-bizBlue p-4 rounded-2xl text-bizYellow group-hover:bg-bizRed group-hover:text-white transition-colors">
                          {React.cloneElement(s.icon, { size: 32 })}
                       </div>
                       <span className="text-bizBlue/10 dark:text-white/10 font-black text-6xl italic">0{i+1}</span>
                    </div>
                    <h4 className="text-3xl font-black text-bizBlue dark:text-white uppercase mb-4 italic">{s.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-bold mb-8 leading-relaxed">{s.desc}</p>
                    <Link to="/contact-us-2" className="inline-flex items-center gap-2 text-bizRed font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
                       Learn System <ChevronRight size={14}/>
                    </Link>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. WHY CHOOSE DIGITAL (PROCESS FORMAT) --- */}
      <section className="py-32 bg-bizBlue text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <h3 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              Why Choose Our <br /> <span className="text-bizYellow">Digital Arsenal?</span>
            </h3>
            <p className="text-white/60 font-bold text-xl border-l-4 border-bizRed pl-8">
              Data-driven strategies, compelling content, and full-funnel execution that grows your brand and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <ProcessModule step="01" icon={<BarChart3 />} title="Data Strategy" desc="Analytics and research guide every campaign decision and optimization cycle." />
            <ProcessModule step="02" icon={<Target />} title="Full-Funnel" desc="From awareness to conversion, we manage the entire customer journey." />
            <ProcessModule step="03" icon={<PenTool />} title="Creative" desc="High-performing visual assets across design, video, and interactive formats." />
            <ProcessModule step="04" icon={<FileText />} title="Reporting" desc="Clear KPIs and real-time reporting so you always track performance and ROI." />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 px-6 bg-white dark:bg-[#0a0f1a]">
        <div className="max-w-6xl mx-auto bg-bizYellow p-12 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden group border-b-[20px] border-bizBlue">
          <div className="absolute bottom-0 right-0 p-10 opacity-10 text-bizBlue group-hover:rotate-12 transition-transform pointer-events-none">
             <Layers size={300} />
          </div>
          <div className="relative z-10 text-center text-bizBlue">
            <h2 className="text-5xl md:text-[80px] font-black uppercase mb-8 leading-[0.85] tracking-tighter italic">Ready to Initialize <br /> Market Dominance?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact-us-2" className="bg-bizBlue text-white px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-bizRed transition-all shadow-xl">
                    Request Strategic Quote
                </Link>
                <Link to="/magazine" className="bg-white text-bizBlue border-2 border-bizBlue px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-bizBlue hover:text-white transition-all">
                    Browse Portfolio
                </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- SUB-COMPONENTS (Retained for Consistency) ---

function StatBlock({ val, label }) {
  return (
    <div className="text-center md:text-left border-l-4 border-bizBlue pl-6">
       <div className="text-4xl md:text-6xl font-black text-bizBlue italic mb-1">{val}</div>
       <div className="text-[10px] font-black uppercase tracking-[0.3em] text-bizBlue/60">{label}</div>
    </div>
  )
}

function ServiceModule({ icon, title, desc, idx }) {
  return (
    <div className="group bg-white dark:bg-white/5 p-12 rounded-[3rem] border border-transparent hover:border-bizYellow transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 text-6xl font-black text-bizBlue/5 dark:text-white/5 italic select-none">
        0{idx + 1}
      </div>
      <div className="text-bizRed dark:text-bizYellow mb-8 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { size: 48 })}
      </div>
      <h3 className="text-3xl font-black text-bizBlue dark:text-white uppercase mb-4 tracking-tighter italic">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{desc}</p>
    </div>
  );
}

function ProcessModule({ step, icon, title, desc }) {
  return (
    <div className="text-center group">
      <div className="w-24 h-24 mx-auto bg-white text-bizBlue rounded-[2rem] flex items-center justify-center mb-8 relative rotate-3 group-hover:rotate-0 transition-transform shadow-2xl">
        {React.cloneElement(icon, { size: 32 })}
        <span className="absolute -top-3 -right-3 bg-bizRed text-white text-[10px] font-black w-10 h-10 rounded-full flex items-center justify-center border-4 border-bizBlue">
          {step}
        </span>
      </div>
      <h4 className="text-2xl font-black text-bizYellow uppercase mb-3 italic tracking-tighter">{title}</h4>
      <p className="text-white/60 font-bold leading-snug">{desc}</p>
    </div>
  );
}