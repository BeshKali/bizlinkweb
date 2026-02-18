import React, { useRef } from "react";
import { 
  Building2, MapPin, Target, Map, 
  Wrench, BarChart3, Palette, Zap, 
  ChevronRight, LocateFixed, Layers,
  Monitor, Truck, Globe, Navigation
} from "lucide-react";
import { Link } from "react-router-dom";

export default function OutdoorVisibility() {
  const infrastructureRef = useRef(null);

  const scrollToInfrastructure = () => {
    infrastructureRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-white dark:bg-[#0a0f1a] min-h-screen font-sans overflow-x-hidden transition-colors duration-500">
      
      {/* --- 1. HERO PROTOCOL NODE --- */}
      <section className="relative min-h-screen flex items-center bg-bizYellow overflow-hidden">
        {/* Tech Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-bizYellow via-bizYellow/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10 pt-20 pb-12">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-bizBlue">
            <div className="inline-flex items-center gap-3 bg-white/30 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bizRed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-bizRed"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">System Node: Outdoor Grid</span>
            </div>

            <h1 className="text-6xl md:text-[100px] font-black mb-8 uppercase tracking-tighter leading-[0.85] italic">
              Outdoor <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #1E3A8A' }}>Visibility</span>
            </h1>

            <p className="text-xl md:text-2xl font-bold max-w-xl mb-12 leading-tight text-bizBlue/70">
              Engineering city-scale brand dominance through precision outdoor infrastructure and high-traffic corridor optimization.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/contact-us-2" className="group bg-bizBlue text-white px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-bizRed transition-all shadow-2xl flex items-center gap-3">
                Initialize Campaign <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              {/* NEW DYNAMIC BUTTON */}
              <button 
                onClick={scrollToInfrastructure}
                className="group bg-white border-2 border-bizBlue text-bizBlue px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-bizBlue hover:text-white transition-all flex items-center gap-3"
              >
                Explore Network <Navigation className="group-hover:rotate-45 transition-transform" size={18}/>
              </button>
            </div>
          </div>
          
          {/* Right HUD Image */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative overflow-hidden rounded-[3.5rem] border-[12px] border-white/40 bg-[#05080f] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] w-full aspect-[4/5]">
              <img
                src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-outdoor-marketing"
                alt="Outdoor Grid"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
              />
              {/* Technical Overlay Graphics */}
              <div className="absolute inset-0 bg-gradient-to-t from-bizBlue/80 via-transparent to-transparent" />
              <div className="absolute top-10 right-10 flex flex-col gap-2">
                 <div className="h-1 w-12 bg-bizYellow animate-pulse" />
                 <div className="h-1 w-8 bg-bizRed" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. STATS BRIDGE (Blue Core) --- */}
      <section className="bg-bizBlue py-16 relative z-20 shadow-2xl">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatBlock val="47" label="Counties Covered" />
            <StatBlock val="24/7" label="Operational Grid" />
            <StatBlock val="100%" label="Premium Sites" />
            <StatBlock val="FAST" label="Deployment Speed" />
         </div>
      </section>

      {/* --- 3. DYNAMIC SHOWCASE SECTION (Strategic Grid) --- */}
      <section ref={infrastructureRef} className="py-32 px-6 bg-white dark:bg-[#0a0f1a] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-bizRed uppercase tracking-[0.5em] mb-4">Infrastructure Matrix</h2>
              <h3 className="text-5xl md:text-8xl font-black text-bizBlue dark:text-white uppercase leading-none tracking-tighter italic">
                The Visibility <br /> <span className="text-bizYellow">Architecture</span>
              </h3>
            </div>
            <p className="text-xl text-gray-500 font-bold max-w-sm border-l-4 border-bizBlue pl-6">
              A multi-tier approach to physical brand dominance across Kenya's urban hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfrastructureCard 
              icon={<Building2 />} 
              title="Strategic Billboards" 
              desc="High-impact 10x12 and 12x12 units positioned at primary transit bottlenecks for 100% unavoidable reach."
              tags={["Static", "Backlit", "High-Reach"]}
            />
            <InfrastructureCard 
              icon={<Monitor />} 
              title="Digital LED Grid" 
              desc="High-luminance digital displays with real-time content deployment for dynamic brand messaging."
              tags={["DOOH", "Full Motion", "Programmatic"]}
            />
            <InfrastructureCard 
              icon={<Truck />} 
              title="Transit Networks" 
              desc="City-wide mobile coverage using public transit and corporate fleet wraps to follow the audience's journey."
              tags={["Mobile", "Wraps", "Commuter"]}
            />
            <InfrastructureCard 
              icon={<Globe />} 
              title="Street Furniture" 
              desc="Pedestrian-level engagement through bus shelters, directional signage, and modern kiosk installations."
              tags={["Urban", "Pedestrian", "Closer-Look"]}
            />
          </div>
        </div>
      </section>

      {/* --- 4. DEPLOYMENT PROTOCOL (Deep Tech) --- */}
      <section className="py-32 bg-bizBlue relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 text-[20rem] font-black text-white/5 select-none leading-none -translate-y-20">OUT</div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
              Deployment <span className="text-bizYellow">Protocol</span>
            </h2>
            <div className="h-2 w-32 bg-bizRed mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <ProcessModule step="01" icon={<MapPin />} title="Placement" desc="Geo-optimized location selection based on traffic density data." />
            <ProcessModule step="02" icon={<Palette />} title="Design" desc="Visibility testing to ensure maximum impact from 200m+." />
            <ProcessModule step="03" icon={<BarChart3 />} title="Analytics" desc="Performance tracking and reach optimization metrics." />
            <ProcessModule step="04" icon={<Zap />} title="Deployment" desc="Rapid physical installation by our certified engineering team." />
          </div>
        </div>
      </section>

      {/* --- 5. COMMAND CTA --- */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-[#0a0f1a]">
        <div className="max-w-6xl mx-auto bg-bizYellow p-12 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden group border-b-[20px] border-bizBlue">
          <div className="absolute bottom-0 right-0 p-10 opacity-10 text-bizBlue group-hover:rotate-12 transition-transform pointer-events-none">
             <Layers size={300} />
          </div>
          
          <div className="relative z-10 text-center text-bizBlue">
            <h2 className="text-5xl md:text-[80px] font-black uppercase mb-8 leading-[0.85] tracking-tighter italic">
              Ready to Initialize <br /> City Dominance?
            </h2>
            <p className="text-bizBlue/70 font-bold text-2xl mb-12 max-w-2xl mx-auto leading-tight">
              Command Kenya’s outdoor landscape with engineered visibility.
            </p>
            <div className="flex justify-center">
                <Link to="/contact-us-2" className="bg-bizBlue text-white px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-bizRed hover:scale-105 transition-all shadow-xl">
                    Request Strategic Site Map
                </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- SUB COMPONENTS --- */

function StatBlock({ val, label }) {
  return (
    <div className="text-center md:text-left border-l-4 border-bizYellow pl-6">
       <div className="text-4xl md:text-6xl font-black text-bizYellow italic mb-1">{val}</div>
       <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">{label}</div>
    </div>
  )
}

function InfrastructureCard({ icon, title, desc, tags }) {
  return (
    <div className="group bg-bizBlue p-12 rounded-[3rem] border border-transparent hover:border-bizRed transition-all duration-500 hover:shadow-2xl text-white">
      <div className="bg-bizYellow text-bizBlue w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { size: 32 })}
      </div>
      <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter italic">{title}</h3>
      <p className="text-white/60 font-bold leading-relaxed mb-8">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span key={i} className="text-[10px] font-black uppercase border border-white/20 px-3 py-1 rounded-full">{t}</span>
        ))}
      </div>
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