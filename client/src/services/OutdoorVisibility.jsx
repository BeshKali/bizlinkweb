import React from "react";
// Fixed import: Screwdriver changed to Wrench
import { 
  Building2, MapPin, Target, Map, 
  Wrench, BarChart3, Palette, Zap, 
  ChevronRight, LocateFixed
} from "lucide-react";
import { Link } from "react-router-dom";

export default function OutdoorVisibility() {
  return (
    <div className="pt-0 transition-colors duration-300 bg-white dark:bg-bizDark min-h-screen">
      
      {/* --- HERO SECTION (DOMINANT YELLOW) --- */}
      <section className="relative min-h-[90vh] md:h-[75vh] flex items-center bg-bizYellow overflow-hidden text-bizBlue">
        {/* Grayscale background image overlay */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img 
              src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-outdoor-marketing" 
              alt=""
              className="w-full h-full object-cover grayscale"
            />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-bizRed text-white px-4 py-1 rounded mb-6 text-xs font-black uppercase tracking-widest animate-pulse">
              <LocateFixed size={14} /> Maximum Exposure
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-bizBlue mb-6 uppercase tracking-tighter leading-[0.9]">
              Outdoor <br /> 
              <span className="text-white drop-shadow-md text-6xl md:text-8xl">Visibility</span>
            </h1>
            <p className="text-xl md:text-2xl text-bizBlue font-bold max-w-xl mb-8 leading-tight">
              Dominate the landscape with strategic billboards and signage that make your brand impossible to ignore.
            </p>
            <Link to="/contact-us-2" className="inline-flex items-center gap-3 bg-bizBlue text-white px-10 py-4 rounded-full font-black uppercase hover:bg-bizRed transition-all shadow-xl group">
              Book Your Space <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Hero Image Cutout */}
          <div className="hidden lg:block relative">
             <div className="absolute inset-0 bg-bizBlue rotate-3 rounded-[40px]" />
             <div className="relative z-10 overflow-hidden rounded-[40px] border-8 border-white shadow-2xl transition-transform hover:-rotate-2 duration-500">
                <img 
                  src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-outdoor-marketing" 
                  alt="Outdoor Billboard Advertising"
                  className="w-full h-[500px] object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID (WHITE/CLEAN THEME) --- */}
      <section className="py-24 px-6 bg-white dark:bg-bizDark transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-bizBlue dark:text-bizYellow uppercase leading-none mb-6">
                Outdoor <br /> Solutions
              </h2>
              <div className="h-2 w-32 bg-bizRed" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-bold max-w-md text-lg">
              Maximizing your outdoor presence through strategic placement and eye-catching execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VisibilityCard 
              icon={<Building2 size={44} />}
              title="Strategic Billboards"
              desc="High-impact designs and premium site placements in high-traffic urban corridors across Kenya."
            />
            <VisibilityCard 
              icon={<MapPin size={44} />}
              title="Professional Signage"
              desc="Storefront signs, LED displays, and directional branding that enhances your physical business presence."
            />
            <VisibilityCard 
              icon={<Target size={44} />}
              title="Transit Marketing"
              desc="Vehicle wraps, transit advertising, and street furniture branding for mobile visibility."
            />
          </div>
        </div>
      </section>

      {/* --- WHY US (STRONG BLUE SECTION WITH YELLOW BOXES) --- */}
      <section className="py-24 px-6 bg-bizBlue transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
            <div className="lg:col-span-1">
                <h3 className="text-4xl md:text-5xl font-black text-bizYellow uppercase leading-none mb-6">Why <br /> Choose Us?</h3>
                <div className="h-1 w-20 bg-bizRed mb-6" />
                <p className="text-white/80 font-bold text-lg">We combine reach with creative dominance.</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <HighlightBox icon={<Target />} title="Proven Reach" desc="High-traffic formats engineered for maximum brand recall." />
                <HighlightBox icon={<Map />} title="Prime Locations" desc="Access to premium billboard sites and strategic urban touchpoints." />
                <HighlightBox icon={<Wrench />} title="End-to-End" desc="Permits, production, and installation handled by one expert team." />
                <HighlightBox icon={<BarChart3 />} title="Measurable ROI" desc="Reporting that quantifies visibility and audience engagement." />
            </div>
        </div>
      </section>

      {/* --- PROCESS (LIGHT THEME NEUTRAL) --- */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-bizBlue dark:text-bizYellow uppercase mb-4">Our Methodology</h2>
            <p className="text-bizRed font-black uppercase tracking-widest text-sm">A Data-Driven Outdoor Process</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 border-t-2 border-dashed border-bizYellow z-0" />
            <ProcessStep step="01" icon={<MapPin />} title="Placement" desc="Data-driven location selection for maximum audience reach." />
            <ProcessStep step="02" icon={<Palette />} title="Design" desc="Eye-catching creative that effectively communicates your message." />
            <ProcessStep step="03" icon={<BarChart3 />} title="Analytics" desc="Comprehensive reporting to measure your campaign's impact." />
            <ProcessStep step="04" icon={<Zap />} title="Delivery" desc="Fast production and professional installation on your timeline." />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA (DOMINANT YELLOW) --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto bg-bizBlue p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute -bottom-10 -right-10 text-bizYellow/10 group-hover:scale-110 transition-transform">
             <Target size={300} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-bizYellow uppercase mb-6 leading-tight max-w-3xl mx-auto">
                Ready to dominate <br /> the outdoors?
            </h2>
            <p className="text-bizYellow font-bold text-xl mb-10 max-w-xl mx-auto">
              Transform your brand's physical presence and drive real-world business growth today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact-us-2" className="bg-bizGray text-white px-12 py-5 rounded-full font-black uppercase text-lg hover:bg-bizRed transition-all shadow-xl">
                    Get Started
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function VisibilityCard({ icon, title, desc }) {
  return (
    <div className="group bg-white dark:bg-gray-800 p-10 rounded-3xl border-2 border-gray-100 dark:border-gray-700 hover:border-bizYellow transition-all hover:shadow-2xl">
      <div className="text-bizBlue dark:text-bizYellow mb-6 group-hover:text-bizRed transition-colors flex justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-bizBlue dark:text-white uppercase mb-4 leading-tight text-center">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed text-center">{desc}</p>
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