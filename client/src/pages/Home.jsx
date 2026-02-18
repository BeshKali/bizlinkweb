import React from "react";
import { MessageCircle, Target, Users, Lightbulb, ArrowRight, ChevronRight } from "lucide-react";

export default function Home() {
  const openWhatsApp = () => {
    const phoneNumber = '254780985052';
    const message = 'Hello, I\'d like to get in touch with BizLink Ads Digital';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const logoNumbers = Array.from({ length: 51 }, (_, i) => i + 1);

  return (
    <main className="bg-white dark:bg-bizDark text-bizBlue dark:text-bizWhite min-h-screen font-sans overflow-x-hidden transition-colors duration-300">
      
      {/* --- HERO SECTION (DOMINANT YELLOW THEME) --- */}
      <section className="relative min-h-[90vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-bizYellow">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/landing1.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-10 grayscale" 
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl">
          {/* Badge accent */}
          <div className="inline-flex items-center gap-2 bg-bizRed text-white px-4 py-1 rounded mb-6 text-xs font-black uppercase tracking-widest animate-pulse">
            <Target size={14} /> Industrial Strength Marketing
          </div>
          
          <h1 className="text-5xl md:text-9xl font-black text-bizBlue mb-6 uppercase tracking-tighter leading-[0.85]">
            Elevate Your <br />
            <span className="text-white drop-shadow-md">Brand Presence</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-bizBlue font-bold max-w-3xl mx-auto mb-10 leading-tight">
            Comprehensive marketing solutions that drive growth across Kenya's most vital industrial sectors.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 px-10 py-5 bg-bizBlue text-white rounded-full font-black uppercase text-lg shadow-2xl hover:bg-bizRed transition-all transform hover:scale-105 group"
            >
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
              WhatsApp Experts
            </button>
          </div>
        </div>
      </section>

      {/* --- BRANDS CAROUSEL (THICK YELLOW BORDERS) --- */}
      <section className="py-20 bg-white dark:bg-bizDark border-y-[12px] border-bizYellow overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-bizBlue dark:text-bizYellow uppercase tracking-tighter">
            Trusted by the Giants
          </h2>
          <div className="h-2 w-32 bg-bizRed mx-auto mt-4" />
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-10 py-6 items-center">
            {logoNumbers.map((num) => (
              <LogoItem key={`logo-9-${num}`} num={num} />
            ))}
            {logoNumbers.map((num) => (
              <LogoItem key={`logo-9-dup-${num}`} num={num} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-bizDark to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-bizDark to-transparent z-10"></div>
        </div>
      </section>

      {/* --- SERVICES SECTION (CLEAN THEME) --- */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-bizBlue dark:text-bizYellow uppercase leading-none mb-4">
                Strategic <br /> Solutions
              </h2>
              <div className="h-3 w-40 bg-bizRed" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-bold max-w-md text-xl">
              Precision-engineered marketing tools designed for maximum market dominance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <ServiceCard 
              title="Print Media & Digital Marketing"
              desc="The fusion of traditional Bizlink Magazine reach with cutting-edge SEO and web architecture."
              link="/services/print-marketing"
            />
            <ServiceCard 
              title="Experiential Public Relations"
              desc="High-impact event publicity and media relations that position you at the center of the conversation."
              link="/services/pr-marketing"
            />
            <ServiceCard 
              title="Outdoor Visibility Solutions"
              desc="Command attention with heavy-duty billboard presence in the nation's high-traffic corridors."
              link="/outdoor-marketing"
            />
            <ServiceCard 
              title="Brand Identity Enhancement"
              desc="Tough, memorable branding solutions for fleets, apparel, and corporate collateral."
              link="/branding"
            />
          </div>
        </div>
      </section>

      {/* --- ABOUT US SECTION (HIGH CONTRAST BLUE) --- */}
      <section className="py-32 bg-bizBlue text-white relative overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-0 left-0 text-[20rem] font-black text-white/5 select-none leading-none -translate-x-20 -translate-y-20">
          BIZ
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-bizYellow text-center uppercase tracking-tighter mb-20">
            Why We <br /> Lead
          </h2>
          <div className="grid gap-10">
            <AboutItem 
              icon={<Target size={32} className="text-bizBlue" />} 
              title="Purpose-Driven" 
              desc="Every campaign is engineered to hit specific business KPIs and production growth targets." 
            />
            <AboutItem 
              icon={<Users size={32} className="text-bizBlue" />} 
              title="People-Focused" 
              desc="We bridge the gap between complex industrial services and the human decision-makers behind them." 
            />
            <AboutItem 
              icon={<Lightbulb size={32} className="text-bizBlue" />} 
              title="Creatively Bold" 
              desc="Breaking the mold of boring corporate marketing with high-energy, high-impact creative direction." 
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER BANNER --- */}
      <section className="py-20 bg-bizYellow text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-bizBlue uppercase tracking-tighter mb-4">
            Dominating the Market Together
          </h2>
          <p className="text-bizRed font-black uppercase tracking-[0.2em] text-sm md:text-lg">
            Fueling Kenya's Industrial & Commercial Revolution
          </p>
        </div>
      </section>
    </main>
  );
}

function LogoItem({ num }) {
  return (
    <div className="inline-flex items-center justify-center bg-white h-28 w-48 md:h-36 md:w-64 p-8 rounded-3xl shadow-xl border-2 border-transparent hover:border-bizYellow transition-all group shrink-0">
      <img 
        src={`https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/companies/company${num}.png`} 
        alt="" 
        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
        loading="lazy"
      />
    </div>
  );
}

function ServiceCard({ title, desc, link }) {
  return (
    <a href={link} className="group block h-full">
      <div className="bg-white dark:bg-gray-800 p-12 rounded-[40px] shadow-2xl border-2 border-transparent hover:border-bizYellow transition-all transform hover:-translate-y-3 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-3xl font-black text-bizBlue dark:text-white uppercase mb-6 leading-tight group-hover:text-bizRed transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-bold text-lg mb-10 leading-relaxed">
            {desc}
          </p>
        </div>
        <span className="flex items-center gap-2 text-bizBlue dark:text-bizYellow font-black uppercase text-sm border-b-8 border-bizYellow w-fit pb-1 group-hover:border-bizRed transition-all">
          Explore Solutions <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </span>
      </div>
    </a>
  );
}

function AboutItem({ icon, title, desc }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-white/5 p-10 rounded-[35px] backdrop-blur-md border-2 border-white/10 hover:border-bizYellow transition-all group">
      <div className="w-20 h-20 bg-bizYellow rounded-2xl flex items-center justify-center shrink-0 rotate-6 group-hover:rotate-0 transition-all duration-500">
        {icon}
      </div>
      <div className="text-center md:text-left">
        <h4 className="text-3xl font-black text-bizYellow uppercase mb-3">{title}</h4>
        <p className="text-white/80 font-bold text-xl leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}