import React, { useRef } from "react";
import { 
  Palette, FileText, CarFront, Building2, 
  Shirt, Monitor, Search, Lightbulb, 
  PenTool, Rocket, ChevronRight, Star,
  ShieldCheck, Layers, Zap, Sparkles, Brush
} from "lucide-react";
import { Link } from "react-router-dom";

export default function BrandIdentity() {
  const identityRef = useRef(null);

  const scrollToIdentity = () => {
    identityRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-white dark:bg-[#0a0f1a] min-h-screen font-sans overflow-x-hidden transition-colors duration-500">
      
      {/* --- 1. HERO PROTOCOL (Dominant Yellow / High-Tech Blue) --- */}
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
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-bizBlue">System Node: Identity Core</span>
            </div>

            <h1 className="text-6xl md:text-[100px] font-black text-bizBlue mb-8 uppercase tracking-tighter leading-[0.85] italic">
              Brand <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #1E3A8A' }}>Enhancement</span>
            </h1>

            <p className="text-xl md:text-2xl text-bizBlue/70 font-bold max-w-xl mb-12 leading-tight">
              Engineering identity systems that transform corporate DNA into visual dominance and unmatched market recognition.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/contact-us-2" className="group bg-bizBlue text-white px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-bizRed transition-all shadow-2xl flex items-center gap-3">
                Build Identity <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              {/* DYNAMIC SHOWCASE BUTTON */}
              <button 
                onClick={scrollToIdentity}
                className="group bg-white/50 backdrop-blur-sm border border-bizBlue/20 text-bizBlue px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white transition-all flex items-center gap-3"
              >
                Explore Systems <Brush className="group-hover:rotate-12 transition-transform" size={18}/>
              </button>
            </div>
          </div>
          
          {/* Right Visual HUD */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="absolute -top-6 -right-6 z-20 bg-white/20 backdrop-blur-xl border border-white/30 p-4 rounded-2xl shadow-2xl">
                <div className="bg-bizBlue p-3 rounded-xl text-bizYellow shadow-lg">
                    <ShieldCheck size={28} />
                </div>
            </div>

            <div className="relative overflow-hidden rounded-[3.5rem] border-[12px] border-white/30 bg-[#05080f] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group w-full aspect-[4/5]">
                <img
                  src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-branding.jpg"
                  alt="Identity Enhancement"
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bizBlue/80 via-transparent to-transparent opacity-60" />
                
                {/* Technical HUD Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full animate-spin-slow pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. STATS BRIDGE --- */}
      <section className="bg-bizBlue py-16 relative z-20 shadow-2xl">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatBlock val="100%" label="Swiss-Grade Fidelity" />
            <StatBlock val="4K" label="Resolution Standard" />
            <StatBlock val="MULTI" label="Platform Ready" />
            <StatBlock val="FAST" label="System Deployment" />
         </div>
      </section>

      {/* --- 3. IDENTITY MATRIX (DYNAMIC CONTENT) --- */}
      <section ref={identityRef} className="py-32 px-6 bg-slate-50 dark:bg-[#0d1424]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-bizRed uppercase tracking-[0.5em] mb-4">Strategic Framework</h2>
              <h3 className="text-5xl md:text-7xl font-black text-bizBlue dark:text-white uppercase leading-none tracking-tighter italic">
                The Branding <br /> <span className="text-bizYellow">Matrix</span>
              </h3>
            </div>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-bold max-w-sm border-l-4 border-bizYellow pl-6">
              Establishing resilient brand identities that resonate across every physical and digital touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceModule icon={<Palette />} title="Logo & Identity" desc="Custom identity systems including guidelines, typography, and comprehensive style guides." idx={0} />
            <ServiceModule icon={<FileText />} title="Corp. Materials" desc="Stationery, letterheads, and presentation decks that maintain flawless brand consistency." idx={1} />
            <ServiceModule icon={<CarFront />} title="Vehicle Branding" desc="High-impact fleet wraps that turn company logistics into high-visibility mobile assets." idx={2} />
            <ServiceModule icon={<Building2 />} title="Office Interiors" desc="Architectural graphics, reception branding, and internal signage for cultural alignment." idx={3} />
            <ServiceModule icon={<Shirt />} title="Apparel Systems" desc="Professional uniforms and branded merchandise that stakeholders wear with pride." idx={4} />
            <ServiceModule icon={<Monitor />} title="Digital Assets" desc="Social media kits, email signatures, and web-ready assets for a cohesive online presence." idx={5} />
          </div>
        </div>
      </section>

      {/* --- 4. BRAND EDGE (Deep Blue / Yellow Accents) --- */}
      <section className="py-32 bg-bizBlue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 text-[20rem] font-black text-white/5 select-none leading-none -translate-y-20">ID</div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                <h3 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
                    The Identity <br /> <span className="text-bizYellow">Advantage</span>
                </h3>
                <p className="text-white/60 font-bold text-xl border-l-4 border-bizRed pl-8">
                    Identity is the soul of your business performance. We build systems designed for scalability and visual dominance.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <WhyCard icon={<Star />} title="Visual Dominance" desc="Designs that command attention and stand out in crowded commercial marketplaces." />
                <WhyCard icon={<ShieldCheck />} title="Trust Engineering" desc="Consistent branding that fosters long-term customer loyalty and corporate authority." />
                <WhyCard icon={<Lightbulb />} title="Strategic Creative" desc="More than just visuals—we build systems designed for measurable business ROI." />
                <WhyCard icon={<Rocket />} title="Scalable Identity" desc="Branding frameworks built to grow as your enterprise expands across regions." />
            </div>
        </div>
      </section>

      {/* --- 5. BRANDING PROTOCOL (Process) --- */}
      <section className="py-32 bg-white dark:bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-bizBlue dark:text-white uppercase italic tracking-tighter mb-4">Branding <span className="text-bizYellow">Protocol</span></h2>
            <div className="h-2 w-32 bg-bizRed mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <ProcessModule step="01" icon={<Search />} title="Discovery" desc="Researching your audience, competitors, and core DNA." />
            <ProcessModule step="02" icon={<Lightbulb />} title="Synthesis" desc="Developing creative frameworks and identity routes." />
            <ProcessModule step="03" icon={<PenTool />} title="Refinement" desc="Polishing assets and finalizing comprehensive guidelines." />
            <ProcessModule step="04" icon={<Rocket />} title="Deployment" desc="Rolling out the system across all vital touchpoints." />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-bizYellow p-12 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden group border-b-[20px] border-bizBlue text-bizBlue">
          <div className="absolute bottom-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform pointer-events-none text-bizBlue">
             <Layers size={300} />
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-5xl md:text-[80px] font-black uppercase mb-8 leading-[0.85] tracking-tighter italic">Initialize Brand <br /> Transformation?</h2>
            <p className="font-bold text-2xl mb-12 max-w-2xl mx-auto leading-tight opacity-70">
              Establish an identity that leads your industry and builds unmatched authority.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact-us-2" className="bg-bizBlue text-white px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-bizRed transition-all shadow-xl">
                    Request Creative Audit
                </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- SUB-COMPONENTS ---

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

function WhyCard({ icon, title, desc }) {
    return (
        <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:border-bizYellow transition-all group">
            <div className="flex items-center gap-6 mb-6">
                <div className="text-bizYellow group-hover:scale-110 transition-transform">{React.cloneElement(icon, { size: 32 })}</div>
                <h4 className="font-black text-white uppercase text-2xl tracking-tighter italic">{title}</h4>
            </div>
            <p className="text-white/50 font-bold leading-relaxed">{desc}</p>
        </div>
    );
}

function ProcessModule({ step, icon, title, desc }) {
  return (
    <div className="text-center group">
      <div className="w-24 h-24 mx-auto bg-bizYellow text-bizBlue rounded-[2rem] flex items-center justify-center mb-8 relative rotate-3 group-hover:rotate-0 transition-transform shadow-2xl">
        {React.cloneElement(icon, { size: 32 })}
        <span className="absolute -top-3 -right-3 bg-bizRed text-white text-[10px] font-black w-10 h-10 rounded-full flex items-center justify-center border-4 border-white">
          {step}
        </span>
      </div>
      <h4 className="text-2xl font-black text-bizBlue dark:text-bizYellow uppercase mb-3 italic tracking-tighter">{title}</h4>
      <p className="text-gray-500 font-bold leading-snug">{desc}</p>
    </div>
  );
}