import React from "react";
import { MessageCircle, Target, Users, Lightbulb, ArrowRight } from "lucide-react";

export default function Home() {
  const openWhatsApp = () => {
    const phoneNumber = '254780985052';
    const message = 'Hello, I\'d like to get in touch with BizLink Ads Digital';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Generate array of company logo numbers (1 to 51)
  const logoNumbers = Array.from({ length: 51 }, (_, i) => i + 1);

  return (
    <main className="bg-white dark:bg-bizDark text-bizDark dark:text-bizWhite min-h-screen font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-bizBlue">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/landing1.jpg" 
            alt="Marketing background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bizDark/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Elevate Your Brand with <span className="text-bizYellow">Bizlink Ads</span>
          </h1>
          <p className="text-xl md:text-2xl text-bizWhite/90 mb-10 font-medium">
            Comprehensive marketing solutions across all native and digital channels that drive results.
          </p>
          <button 
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-bizDark border-2 border-[#25D366] rounded-full font-bold text-lg shadow-xl hover:bg-[#25D366] hover:text-white transition-all transform hover:scale-105"
          >
            <MessageCircle size={24} />
            WhatsApp Us
          </button>
        </div>
      </section>

      {/* Brands Carousel Section - REPLACED PLACEHOLDER */}
      <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-bizBlue mb-2">Brands That Trust Us</h2>
          <p className="text-gray-500 font-medium">Partnering with Kenya's leading industry names</p>
        </div>

        {/* Animation Container */}
        <div className="relative flex overflow-x-hidden group">
          {/* Main Loop (Repeated twice for seamless transition) */}
          <div className="flex animate-marquee whitespace-nowrap gap-8 py-4 px-4 items-center">
            {logoNumbers.map((num) => (
              <LogoItem key={`logo-9-${num}`} num={num} />
            ))}
            {/* Duplicate logos for the infinite effect */}
            {logoNumbers.map((num) => (
              <LogoItem key={`logo-9-${num}`} num={num} />
            ))}
          </div>

          {/* Gradient Overlays for a professional "fade" edge */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#f8faff] dark:bg-bizDark/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-bizBlue mb-4">Our Services</h2>
            <div className="w-20 h-1.5 bg-bizBlue mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Print Media & Digital Marketing"
              desc="From Bizlink Ads Magazine advertising to web development, social media, SEO, and printing services."
              link="/services/print-marketing"
            />
            <ServiceCard 
              title="Experiential Public Relations"
              desc="Strategic public relations, event publicity, roadshows, and media outreach to build your brand reputation."
              link="/services/pr-marketing"
            />
            <ServiceCard 
              title="Outdoor Visibility Solutions"
              desc="Strategic billboards, signage, and outdoor marketing solutions."
              link="/outdoor-marketing"
            />
            <ServiceCard 
              title="Brand Identity Enhancement"
              desc="Complete corporate identity solutions including logos, vehicle branding, and apparel."
              link="/branding"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-bizBlue to-[#1a1f71] text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-bizYellow text-center mb-12">About Us</h2>
          <div className="space-y-6">
            <AboutItem icon={<Target className="text-bizBlue" />} title="Purpose-Driven" desc="We help you hit your business goals with targeted, results-oriented marketing strategies." />
            <AboutItem icon={<Users className="text-bizBlue" />} title="People-Focused" desc="Our team is passionate about building real connections between brands and audiences." />
            <AboutItem icon={<Lightbulb className="text-bizBlue" />} title="Creatively Bold" desc="We bring fresh ideas and creative energy to every project." />
          </div>
        </div>
      </section>

      {/* Footer / Thank You Banner */}
      <section className="py-12 bg-bizBlue text-center text-white">
        <h2 className="text-2xl md:text-3xl font-black mb-2">Thank You for Trusting Bizlink Ads Digital</h2>
        <p className="text-bizYellow font-medium">We are proud to empower Kenyan brands and businesses.</p>
      </section>
    </main>
  );
}

// Sub-component for individual logos
function LogoItem({ num }) {
  return (
    <div className="inline-flex items-center justify-center bg-white h-24 w-40 md:h-32 md:w-56 p-4 md:p-6 rounded-xl shadow-sm border border-gray-50 flex-shrink-0 transition-all hover:shadow-md hover:scale-105">
      <img 
        src={`https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/companies/company${num}.png`} 
        alt={`Brand partner ${num}`} 
        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        loading="lazy"
      />
    </div>
  );
}

// Service Card Component
function ServiceCard({ title, desc, link }) {
  return (
    <a href={link} className="group block">
      <div className="bg-white dark:bg-bizDark p-8 rounded-2xl shadow-lg border-l-4 border-transparent group-hover:border-bizRed transition-all transform group-hover:-translate-y-2">
        <h3 className="text-2xl font-extrabold text-bizBlue mb-4 group-hover:text-bizRed transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {desc}
        </p>
        <span className="flex items-center gap-2 text-bizBlue font-bold group-hover:gap-4 transition-all">
          Learn More <ArrowRight size={18} />
        </span>
      </div>
    </a>
  );
}

// About Item Component
function AboutItem({ icon, title, desc }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-6 rounded-2xl shadow-md transform hover:scale-[1.01] transition-transform">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-bizBlue rounded-full flex items-center justify-center shrink-0">
        <div className="bg-white p-2 rounded-full">{icon}</div>
      </div>
      <div className="text-center md:text-left">
        <h4 className="text-xl font-black text-bizBlue mb-1">{title}</h4>
        <p className="text-gray-600 font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}