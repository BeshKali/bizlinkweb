import React from "react";
import { 
  Palette, FileText, CarFront, Building2, 
  Shirt, Monitor, Search, Lightbulb, 
  PenTool, Rocket, ChevronRight, Star,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";

export default function BrandIdentity() {
  return (
    <div className="pt-0 transition-colors duration-300 bg-white dark:bg-bizDark min-h-screen font-sans">
      
      {/* --- HERO SECTION (DOMINANT YELLOW) --- */}
      <section className="relative min-h-[90vh] md:h-[75vh] flex items-center bg-bizYellow overflow-hidden">
        {/* Subtle background image overlay */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img 
              src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-branding.jpg" 
              alt=" "
              className="w-full h-full object-cover grayscale"
            />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-bizRed text-white px-4 py-1 rounded mb-6 text-xs font-black uppercase tracking-widest animate-pulse">
              <ShieldCheck size={14} /> Authority & Recognition
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-bizBlue mb-6 uppercase tracking-tighter leading-[0.9]">
              Brand Identity <br /> 
              <span className="text-white drop-shadow-md text-6xl md:text-8xl">Enhancement</span>
            </h1>
            <p className="text-xl md:text-2xl text-bizBlue font-bold max-w-xl mb-8 leading-tight">
              Transform your business with identity systems that create lasting impressions and build unmatched recognition.
            </p>
            <Link to="/contact-us-2" className="inline-flex items-center gap-3 bg-bizBlue text-white px-10 py-4 rounded-full font-black uppercase hover:bg-bizRed transition-all shadow-xl group">
              Build Your Brand <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Visual Cutout */}
          <div className="hidden lg:block relative">
             <div className="absolute inset-0 bg-bizBlue -rotate-6 rounded-[40px] opacity-20" />
             <div className="relative z-10 overflow-hidden rounded-[40px] border-8 border-white shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                <img 
                  src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-branding.jpg" 
                  alt="Branding Design"
                  className="w-full h-[500px] object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID (WHITE THEME) --- */}
      <section className="py-24 px-6 bg-white dark:bg-bizDark transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-bizBlue dark:text-bizYellow uppercase leading-none mb-6">
              Branding <br /> Solutions
            </h2>
            <div className="h-2 w-32 bg-bizRed mx-auto mb-6" />
            <p className="text-gray-600 dark:text-gray-400 font-bold max-w-2xl mx-auto text-lg leading-relaxed">
              Establishing strong, memorable brands that resonate with your target audience across every physical and digital touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BrandingCard 
              icon={<Palette size={44} />}
              title="Logo & Identity"
              desc="Custom logo design and identity systems including guidelines and comprehensive style guides."
            />
            <BrandingCard 
              icon={<FileText size={44} />}
              title="Corporate Materials"
              desc="Business cards, letterheads, and presentation templates that maintain flawless brand consistency."
            />
            <BrandingCard 
              icon={<CarFront size={44} />}
              title="Vehicle Branding"
              desc="High-impact wraps and fleet branding that turn your company vehicles into moving billboards."
            />
            <BrandingCard 
              icon={<Building2 size={44} />}
              title="Office Environment"
              desc="Wall graphics, reception branding, and internal signage that reflect your core company culture."
            />
            <BrandingCard 
              icon={<Shirt size={44} />}
              title="Apparel Branding"
              desc="Professional work uniforms and promotional t-shirts that showcase your identity with pride."
            />
            <BrandingCard 
              icon={<Monitor size={44} />}
              title="Digital Brand Assets"
              desc="Social media kits, email signatures, and web-ready assets for a cohesive online presence."
            />
          </div>
        </div>
      </section>

      {/* --- WHY US (STRONG BLUE SECTION) --- */}
      <section className="py-24 px-6 bg-bizBlue">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
            <div className="lg:col-span-1">
                <h3 className="text-4xl md:text-5xl font-black text-bizYellow uppercase leading-none mb-6">The Brand <br /> Edge</h3>
                <div className="h-1 w-20 bg-bizRed mb-6" />
                <p className="text-white/80 font-bold text-lg">Identity is the soul of your business performance.</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <HighlightBox icon={<Star />} title="Visual Dominance" desc="Designs that command attention in crowded marketplaces." />
                <HighlightBox icon={<ShieldCheck />} title="Trust Building" desc="Consistent branding that fosters long-term customer loyalty." />
                <HighlightBox icon={<Lightbulb />} title="Strategic Creative" desc="More than just pretty pixels—we build for business ROI." />
                <HighlightBox icon={<Rocket />} title="Scalable Identity" desc="Branding systems built to grow with your enterprise." />
            </div>
        </div>
      </section>

      {/* --- PROCESS (CLEAN/LIGHT THEME) --- */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-bizBlue dark:text-bizYellow uppercase mb-4">The Branding Process</h2>
            <p className="text-bizRed font-black uppercase tracking-widest text-sm">4 Steps to Transformation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 border-t-2 border-dashed border-bizYellow z-0" />
            <ProcessStep step="01" icon={<Search />} title="Discovery" desc="Researching your audience and competitive landscape." />
            <ProcessStep step="02" icon={<Lightbulb />} title="Concept" desc="Developing creative routes and identity frameworks." />
            <ProcessStep step="03" icon={<PenTool />} title="Refinement" desc="Finalizing assets and comprehensive brand guidelines." />
            <ProcessStep step="04" icon={<Rocket />} title="Launch" desc="Rolling out your identity across all vital touchpoints." />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA (DOMINANT YELLOW) --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto bg-bizBlue p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute -bottom-10 -right-10 text-bizYellow/10 group-hover:scale-110 transition-transform">
             <Palette size={300} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-bizYellow uppercase mb-6 leading-tight max-w-3xl mx-auto">
                Ready to transform <br /> your identity?
            </h2>
            <p className="text-bizYellow font-bold text-xl mb-10 max-w-xl mx-auto">
              Discuss your project with our creative team and establish an identity that leads your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact-us-2" className="bg-bizGray text-white px-12 py-5 rounded-full font-black uppercase text-lg hover:bg-bizRed transition-all shadow-xl">
                    Get Started Today
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function BrandingCard({ icon, title, desc }) {
  return (
    <div className="group bg-white dark:bg-gray-800 p-10 rounded-3xl border-2 border-gray-100 dark:border-gray-700 hover:border-bizYellow transition-all hover:shadow-2xl">
      <div className="text-bizBlue dark:text-bizYellow mb-6 group-hover:text-bizRed transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-bizBlue dark:text-white uppercase mb-4 leading-tight">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{desc}</p>
    </div>
  );
}

function HighlightBox({ icon, title, desc }) {
    return (
        <div className="bg-bizYellow p-8 rounded-2xl border-l-8 border-bizRed shadow-lg hover:-translate-y-2 transition-transform">
            <div className="flex items-center gap-4 mb-3">
                <span className="text-bizBlue">{icon}</span>
                <h4 className="font-black text-bizBlue uppercase text-lg leading-tight">{title}</h4>
            </div>
            <p className="text-bizBlue/80 font-bold text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function ProcessStep({ step, icon, title, desc }) {
  return (
    <div className="text-center group relative z-10">
      <div className="w-24 h-24 mx-auto bg-bizYellow rounded-full flex items-center justify-center text-bizBlue mb-8 group-hover:bg-bizBlue group-hover:text-white transition-all shadow-xl border-4 border-white dark:border-bizDark">
        {icon}
        <span className="absolute -top-1 -right-1 bg-bizRed text-white text-xs font-black w-10 h-10 rounded-full flex items-center justify-center border-4 border-white dark:border-bizDark">
          {step}
        </span>
      </div>
      <h4 className="text-xl font-black text-bizBlue dark:text-bizYellow uppercase mb-3">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 font-bold leading-relaxed">{desc}</p>
    </div>
  );
}