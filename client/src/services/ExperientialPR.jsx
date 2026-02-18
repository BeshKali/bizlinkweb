import React, { useRef } from "react";
import { 
  CalendarCheck, Megaphone, Newspaper, Users, 
  Route, Search, PenTool, Radio, 
  BarChart3, ChevronRight, Star, Handshake,
  Sparkles, Mic2, Command, Globe, Zap, Layers
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../assets/hero-pr-marketing.jpg";

export default function ExperientialPR() {
  const activationRef = useRef(null);

  const scrollToActivation = () => {
    activationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-white dark:bg-[#0a0f1a] min-h-screen font-sans overflow-x-hidden transition-colors duration-500">
      
      {/* --- 1. HERO PROTOCOL (Yellow Dominance / Blue Tech) --- */}
      <section className="relative min-h-screen flex items-center bg-bizYellow overflow-hidden">
        {/* Technical HUD Overlays */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-bizYellow via-bizYellow/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10 pt-20 pb-12">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 bg-white/30 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bizRed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-bizRed"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-bizBlue">System Node: PR-Activation Sync</span>
            </div>

            <h1 className="text-6xl md:text-[100px] font-black text-bizBlue mb-8 uppercase tracking-tighter leading-[0.85] italic">
              Experiential <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #1E3A8A' }}>Impact</span>
            </h1>

            <p className="text-xl md:text-2xl text-bizBlue/70 font-bold max-w-xl mb-12 leading-tight">
              Engineering immersive brand narratives where stories aren't just told—they are lived through high-stakes physical activations.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/contact-us-2" className="group bg-bizBlue text-white px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-bizRed transition-all shadow-2xl flex items-center gap-3">
                Initialize Activation <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              {/* DYNAMIC SHOWCASE BUTTON */}
              <button 
                onClick={scrollToActivation}
                className="group bg-white/50 backdrop-blur-sm border border-bizBlue/20 text-bizBlue px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white transition-all flex items-center gap-3"
              >
                Explore Tactics <Mic2 className="group-hover:scale-110 transition-transform" size={18}/>
              </button>
            </div>
          </div>
          
          {/* Right Visual HUD */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="absolute -top-6 -right-6 z-20 bg-white/20 backdrop-blur-xl border border-white/30 p-4 rounded-2xl shadow-2xl">
                <div className="bg-bizRed p-3 rounded-xl text-white shadow-lg animate-pulse">
                    <Sparkles size={28} />
                </div>
            </div>

            <div className="relative overflow-hidden rounded-[3.5rem] border-[12px] border-white/30 bg-[#05080f] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group w-full aspect-[4/5]">
                <img
                  src={Hero}
                  alt="PR Activation"
                  className=" w-full h-full object-contain grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bizBlue/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. STATS BRIDGE --- */}
      <section className="bg-bizBlue py-16 relative z-20 shadow-2xl">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatBlock val="1M+" label="Audience Reach" />
            <StatBlock val="24/7" label="Media Monitoring" />
            <StatBlock val="HIGH" label="Sentiment Score" />
            <StatBlock val="LIVE" label="Activation Status" />
         </div>
      </section>

      {/* --- 3. DYNAMIC ACTIVATION MATRIX --- */}
      <section ref={activationRef} className="py-32 px-6 bg-slate-50 dark:bg-[#0d1424]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-bizRed uppercase tracking-[0.5em] mb-4">Tactical Protocol</h2>
              <h3 className="text-5xl md:text-7xl font-black text-bizBlue dark:text-white uppercase leading-none tracking-tighter italic">
                PR & Activation <br /> <span className="text-bizYellow">Matrix</span>
              </h3>
            </div>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-bold max-w-sm border-l-4 border-bizYellow pl-6">
              Strategic deployment of brand experiences across media and physical touchpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceModule icon={<CalendarCheck />} title="Brand Activations" desc="Product launches and interactive environments that engage audiences deeply." idx={0} />
            <ServiceModule icon={<Radio />} title="Media Relations" desc="Securing positive coverage through high-value relationships with major outlets." idx={1} />
            <ServiceModule icon={<Newspaper />} title="Press Synthesis" desc="Professional press releases engineered to capture headlines and drive viral reach." idx={2} />
            <ServiceModule icon={<Users />} title="Reputation Command" desc="Enhancing brand image through strategic crisis communication and digital management." idx={3} />
            <ServiceModule icon={<Route />} title="Brand Roadshows" desc="Interactive mobile experiences bringing products directly to diverse Kenyan audiences." idx={4} />
            <ServiceModule icon={<Megaphone />} title="Publicity Cycles" desc="Shareable moments and experience-led buzz that generate organic engagement." idx={5} />
          </div>
        </div>
      </section>

      {/* --- 4. THE PROCESS PROTOCOL --- */}
      <section className="py-32 bg-bizBlue relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 text-[20rem] font-black text-white/5 select-none leading-none -translate-y-20">PR</div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">Activation <span className="text-bizYellow">Protocol</span></h2>
            <div className="h-2 w-32 bg-bizRed mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <ProcessModule step="01" icon={<Search />} title="Intelligence" desc="Analyzing media landscapes and target audience sentiment." />
            <ProcessModule step="02" icon={<PenTool />} title="Creation" desc="Crafting compelling narratives and interactive environments." />
            <ProcessModule step="03" icon={<Radio />} title="Outreach" desc="Securing coverage through tactical media distribution." />
            <ProcessModule step="04" icon={<BarChart3 />} title="Analytics" desc="Measuring campaign success, sentiment, and reach impact." />
          </div>
        </div>
      </section>

      {/* --- 5. THE COMMAND CTA --- */}
      <section className="py-32 px-6 bg-white dark:bg-[#0a0f1a]">
        <div className="max-w-6xl mx-auto bg-bizYellow p-12 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden group border-b-[20px] border-bizBlue text-bizBlue">
          <div className="absolute bottom-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform pointer-events-none">
             <Layers size={300} />
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-5xl md:text-[80px] font-black uppercase mb-8 leading-[0.85] tracking-tighter italic">Ready to Initialize <br /> Shared Moments?</h2>
            <p className="font-bold text-2xl mb-12 max-w-2xl mx-auto leading-tight opacity-70">
              Transform your brand from a message into an experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact-us-2" className="bg-bizBlue text-white px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-bizRed transition-all shadow-xl">
                    Begin PR Strategy
                </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- SHARED SUB-COMPONENTS ---

function StatBlock({ val, label }) {
  return (
    <div className="text-center md:text-left border-l-4 border-bizYellow pl-6">
       <div className="text-4xl md:text-6xl font-black text-bizYellow italic mb-1">{val}</div>
       <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">{label}</div>
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