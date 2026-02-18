import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Trophy, RefreshCw, Users, Target, Rocket, Award, 
  Fingerprint, Activity, Cpu, Globe, ChevronRight, ShieldCheck 
} from "lucide-react";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-white dark:bg-[#0a0f1a] text-bizBlue dark:text-gray-100 transition-colors duration-500 overflow-x-hidden">
      
      {/* --- 1. EDITORIAL TECH HERO --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-about-us.jpg"
            className={`w-full h-full object-cover grayscale transition-transform duration-[20000ms] ease-out ${
              isVisible ? "scale-110" : "scale-100"
            }`}
            alt="About Bizlink"
          />
          {/* Layered Overlays */}
          <div className="absolute inset-0 bg-bizBlue/80 dark:bg-[#0a0f1a]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#0a0f1a]" />
          
          {/* Tech Grid Overlay */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl">
          <div className="inline-flex items-center gap-2 bg-bizYellow text-bizBlue px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 animate-fade-in">
            Institutional Profile
          </div>
          
          <h1 className="text-6xl md:text-[120px] font-black leading-[0.85] uppercase tracking-tighter mb-8 italic">
            <span className="text-white">The Agency</span> <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #FFD700' }}>Blueprint</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto font-medium leading-tight mb-12">
            "Linking brands to industrial-scale audiences through a decade of digital and print precision."
          </p>

          <div className="flex justify-center gap-1">
            <div className="w-12 h-1 bg-bizYellow" />
            <div className="w-4 h-1 bg-bizRed" />
            <div className="w-2 h-1 bg-white/30" />
          </div>
        </div>

        {/* Vertical Side Label */}
        <div className="absolute left-10 bottom-20 hidden lg:block overflow-hidden">
            <span className="text-[10px] font-black uppercase tracking-[1em] text-white/20 origin-left -rotate-90 block whitespace-nowrap">
                ESTABLISHED 2014 • NAIROBI KENYA
            </span>
        </div>
      </section>

      {/* --- 2. DATA STRIP (METRICS) --- */}
      <section className="relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-bizYellow dark:bg-bizYellow p-1 rounded-[2rem] shadow-2xl">
            <div className="bg-bizBlue dark:bg-[#0d1424] rounded-[1.8rem] grid grid-cols-2 md:grid-cols-4 gap-4 p-10 md:p-16 border border-white/10">
              <StatItem val="11+" label="Years of Authority" />
              <StatItem val="500+" label="Brands Accelerated" />
              <StatItem val="100K+" label="Active Readership" />
              <StatItem val="100%" label="Native Ecosystem" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE STRATEGIC PILLARS (Modern Cards) --- */}
      <section className="py-32 bg-white dark:bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black text-bizBlue dark:text-white uppercase leading-none tracking-tighter mb-6">
                Engineered for <br /><span className="text-bizRed">Growth.</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-bold text-xl">The architecture behind our market dominance.</p>
            </div>
            <div className="hidden md:block text-right">
                <div className="text-xs font-black text-bizBlue/20 dark:text-white/10 uppercase tracking-[0.5em] mb-2">Internal Protocol</div>
                <div className="h-1 w-32 bg-bizYellow ml-auto" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <ArchitectureCard
              icon={<Fingerprint size={32} />}
              title="Identity & Legacy"
              desc="Since 2014, Bizlink has evolved from a flagship print magazine into a multi-channel digital powerhouse, maintaining a reputation as Kenya's most trusted business information node."
              tag="01 // ORIGIN"
            />
            <ArchitectureCard
              icon={<Cpu size={32} />}
              title="Digital Evolution"
              desc="We've transitioned traditional marketing into high-performance digital ecosystems, merging experiential public relations with cutting-edge outdoor visibility solutions."
              tag="02 // INNOVATION"
            />
            <ArchitectureCard
              icon={<Globe size={32} />}
              title="The Link Protocol"
              desc="Our approach is purely strategic. We act as your primary growth partner, blending print credibility with digital agility to build unshakeable brand authority."
              tag="03 // STRATEGY"
            />
          </div>
        </div>
      </section>

      {/* --- 4. MISSION & VISION CORE (HUD Design) --- */}
      <section className="py-32 bg-bizBlue dark:bg-[#05080f] relative overflow-hidden">
        {/* Animated Background Circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bizYellow/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Mission Card */}
            <div className="group bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] border border-white/10 hover:border-bizYellow transition-all duration-500">
               <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-bizYellow rounded-2xl flex items-center justify-center text-bizBlue group-hover:rotate-12 transition-transform shadow-xl">
                    <Target size={32} />
                  </div>
                  <span className="text-[10px] font-black text-white/30 tracking-[0.4em] uppercase">Module // 04</span>
               </div>
               <h3 className="text-white text-4xl font-black uppercase mb-6 italic tracking-tighter">Our Mission</h3>
               <p className="text-white/70 text-xl font-medium leading-relaxed">
                  To empower the commercial backbone of Kenya by deploying innovative, 
                  data-driven marketing systems that close the gap between premium brands 
                  and high-value audiences.
               </p>
            </div>

            {/* Vision Card */}
            <div className="group bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] border border-white/10 hover:border-bizRed transition-all duration-500 lg:translate-y-12">
               <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-bizRed rounded-2xl flex items-center justify-center text-white group-hover:-rotate-12 transition-transform shadow-xl">
                    <Rocket size={32} />
                  </div>
                  <span className="text-[10px] font-black text-white/30 tracking-[0.4em] uppercase">Module // 05</span>
               </div>
               <h3 className="text-white text-4xl font-black uppercase mb-6 italic tracking-tighter">Our Vision</h3>
               <p className="text-white/70 text-xl font-medium leading-relaxed">
                  To serve as the definitive marketing catalyst in East Africa, recognized 
                  for the seamless integration of institutional print media and 
                  future-facing digital advertising tech.
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- 5. THE CORPORATE CALL --- */}
      <section className="py-40 bg-white dark:bg-[#0a0f1a] text-center relative overflow-hidden">
        {/* Subtle Tech Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 60L48 60L48 48L54 48ZM0 48L0 60L6 60L6 48L0 48ZM54 0L54 12L48 12L48 0L54 0ZM0 0L0 12L6 12L6 0L0 0Z' fill='%23003366' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex justify-center mb-8">
             <ShieldCheck size={64} className="text-bizRed animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-bizBlue dark:text-white uppercase mb-8 tracking-tighter leading-none">
            Ready to <span className="text-bizYellow italic">Initialize?</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-bold mb-12 max-w-2xl mx-auto">
            Experience the fusion of institutional credibility and digital dominance. 
            The next chapter of your brand history starts here.
          </p>
          
          <Link
            to="/contact-us-2"
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-bizBlue dark:bg-bizYellow text-white dark:text-bizBlue rounded-2xl font-black text-xl uppercase tracking-widest transition-all hover:scale-105 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-bizRed translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Execute Partnership</span>
            <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function StatItem({ val, label }) {
  return (
    <div className="flex flex-col items-center md:items-start group">
      <span className="text-white dark:text-bizYellow font-black text-4xl md:text-6xl leading-none mb-2 font-mono">
        {val}
      </span>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-bizRed rounded-full" />
        <span className="text-white/60 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
          {label}
        </span>
      </div>
    </div>
  );
}

function ArchitectureCard({ icon, title, desc, tag }) {
  return (
    <div className="group relative bg-slate-50 dark:bg-white/5 p-10 rounded-[2.5rem] border border-transparent hover:border-bizBlue/20 transition-all duration-500 hover:shadow-2xl">
      <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-bizBlue/20 dark:text-white/10 tracking-[0.4em]">
        {tag}
      </div>
      <div className="w-16 h-16 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center text-bizBlue dark:text-bizYellow mb-10 shadow-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-3xl font-black text-bizBlue dark:text-white uppercase mb-6 tracking-tighter">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed text-base">
        {desc}
      </p>
      <div className="mt-8 pt-8 border-t border-bizBlue/5 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-bizRed font-black text-xs uppercase tracking-widest flex items-center gap-2">
            Internal Audit Verified <Activity size={12}/>
        </span>
      </div>
    </div>
  );
}