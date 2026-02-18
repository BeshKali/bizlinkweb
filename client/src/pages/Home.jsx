import React from "react";
import { 
  MessageCircle, 
  Target, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  BarChart3,
  Globe
} from "lucide-react";

export default function Home() {
  const openWhatsApp = () => {
    const phoneNumber = '254780985052';
    const message = "Hello, I'd like to get in touch with BizLink Ads Digital";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const logoNumbers = Array.from({ length: 51 }, (_, i) => i + 1);

  return (
    <main className="bg-white dark:bg-[#0a0f1a] text-bizBlue dark:text-gray-100 min-h-screen font-sans overflow-x-hidden transition-colors duration-500">
      
      {/* --- MODERN TECH HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 1. Background Image with Mask */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/landing1.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10 grayscale"
          />
          {/* 2. Tech Overlays: Gradient & Grid */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#0a0f1a]/80 dark:to-[#0a0f1a]" />
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 60L48 60L48 48L54 48ZM0 48L0 60L6 60L6 48L0 48ZM54 0L54 12L48 12L48 0L54 0ZM0 0L0 12L6 12L6 0L0 0Z' fill='%23003366' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
          </div>
        </div>

        {/* 3. Floating "Tech" Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-bizBlue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-bizRed/10 rounded-full blur-[120px] animate-pulse" />

        <div className="relative z-10 text-center px-6 max-w-7xl">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-bizBlue/20 dark:border-white/10 px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bizRed opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-bizRed"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-bizBlue dark:text-bizYellow">
              Next-Gen Digital Systems
            </span>
          </div>

          <h1 className="text-6xl md:text-[120px] font-black leading-[0.85] mb-8 tracking-tighter uppercase italic">
            <span className="text-bizBlue dark:text-white">Precision</span> <br />
            <span className="text-transparent border-b-4 border-bizYellow" style={{ WebkitTextStroke: '2px #003366' }}>Marketing</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Data-driven strategies for Kenya's leading industrial and commercial enterprises. 
            We bridge the gap between technology and market dominance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={openWhatsApp} 
              className="group relative px-10 py-5 bg-bizBlue dark:bg-bizYellow text-white dark:text-bizBlue rounded-xl font-black uppercase text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-3">
                <MessageCircle size={24} /> Partner With Us
              </span>
            </button>
            
            <div className="flex items-center gap-4 text-bizBlue dark:text-white font-bold group cursor-pointer">
              <span className="w-12 h-12 rounded-full border-2 border-bizRed flex items-center justify-center group-hover:bg-bizRed group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </span>
              VIEW PORTFOLIO
            </div>
          </div>

          {/* Mini Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-bizBlue/10 dark:border-white/10 pt-10">
            <StatItem label="Campaigns Live" value="1.2k+" />
            <StatItem label="Market Reach" value="15M+" />
            <StatItem label="ROI Average" value="310%" />
            <StatItem label="Tech Stack" value="24/7" />
          </div>
        </div>
      </section>

      {/* --- LOGO CAROUSEL --- */}
      <section className="py-37 bg-gray-50 dark:bg-[#0d1424] relative">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-sm font-black text-bizRed uppercase tracking-[0.4em] mb-4">The Network</h2>
          <h3 className="text-4xl md:text-5xl font-black dark:text-white uppercase italic">Institutional Trust</h3>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-8 py-4">
            {logoNumbers.map((num) => ( <LogoItem key={`l1-${num}`} num={num} /> ))}
            {logoNumbers.map((num) => ( <LogoItem key={`l2-${num}`} num={num} /> ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#0d1424] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#0d1424] to-transparent z-10" />
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-32 bg-white dark:bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-6xl font-black text-bizBlue dark:text-white uppercase leading-[0.9] mb-8">
                Digital <br /><span className="text-bizYellow">Infrastructure</span>
              </h2>
              <div className="h-2 w-48 bg-bizRed rounded-full" />
            </div>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-sm">
              We don't just "post content." We build automated marketing engines that generate 
              measurable industrial growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard 
              icon={<Globe size={32} />}
              title="Full-Stack Digital" 
              desc="SEO, SEM, and high-performance web architecture tailored for industrial conversion." 
              link="#" 
            />
            <ServiceCard 
              icon={<BarChart3 size={32} />}
              title="Media Strategy" 
              desc="High-impact PR and experiential marketing that puts your brand in the boardroom." 
              link="#" 
            />
            <ServiceCard 
              icon={<Zap size={32} />}
              title="Outdoor Domination" 
              desc="Strategic billboard placements in Kenya's primary economic and transit hubs." 
              link="#" 
            />
            <ServiceCard 
              icon={<ShieldCheck size={32} />}
              title="Identity Engineering" 
              desc="Corporate branding and fleet identity designed to withstand the test of time." 
              link="#" 
            />
          </div>
        </div>
      </section>

      {/* --- ABOUT / WHY US --- */}
      <section className="py-32 bg-bizBlue dark:bg-[#05080f] text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-bizYellow/5 skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">
                The Core <br /> <span className="text-bizYellow">Protocol</span>
              </h2>
              <div className="space-y-6">
                <AboutItem icon={<Target />} title="Data Centric" desc="Decisions driven by analytics, not intuition." />
                <AboutItem icon={<Users />} title="Market Authority" desc="Positioning you as the undisputed industry leader." />
                <AboutItem icon={<Lightbulb />} title="Rapid Innovation" desc="Deploying the latest AI and AdTech tools." />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-bizYellow/20 rounded-3xl blur-2xl group-hover:bg-bizRed/20 transition-all" />
              <img 
                src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/landing1.jpg" 
                className="relative rounded-2xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="py-24 bg-bizYellow relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-bizBlue uppercase tracking-tighter mb-8">
            Ready to scale?
          </h2>
          <button onClick={openWhatsApp} className="px-12 py-6 bg-bizBlue text-white rounded-full font-black uppercase text-xl hover:bg-bizRed transition-all shadow-xl">
            Initialize Growth Sequence
          </button>
        </div>
        <div className="absolute top-0 left-0 text-[20rem] font-black text-black/5 leading-none -translate-x-20">BIZ</div>
      </section>
    </main>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-3xl font-black text-bizBlue dark:text-bizYellow mb-1">{value}</div>
      <div className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  );
}

function LogoItem({ num }) {
  return (
    <div className="inline-flex items-center justify-center bg-white dark:bg-white/5 backdrop-blur-sm h-36 w-44 p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-bizYellow transition-all group shrink-0 shadow-sm">
      <img 
        src={`https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/companies/company${num}.png`} 
        alt="Partner" 
        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
      />
    </div>
  );
}

function ServiceCard({ title, desc, link, icon }) {
  return (
    <a href={link} className="group block">
      <div className="bg-gray-50 dark:bg-white/5 p-10 rounded-3xl border border-transparent hover:border-bizYellow/50 transition-all hover:translate-y-[-8px] relative overflow-hidden">
        <div className="mb-6 text-bizRed group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-3xl font-black text-bizBlue dark:text-white uppercase mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 font-medium text-lg mb-8 leading-relaxed">
          {desc}
        </p>
        <div className="flex items-center gap-2 text-bizBlue dark:text-bizYellow font-black uppercase text-sm">
          EXPLORE <ChevronRight size={18} />
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-5 text-bizBlue dark:text-white">
           <Zap size={100} />
        </div>
      </div>
    </a>
  );
}

function AboutItem({ icon, title, desc }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="w-14 h-14 bg-bizYellow text-bizBlue rounded-xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-all">
        {icon}
      </div>
      <div>
        <h4 className="text-2xl font-black text-bizYellow uppercase mb-1">{title}</h4>
        <p className="text-white/70 font-medium text-lg leading-tight">{desc}</p>
      </div>
    </div>
  );
}