import React from "react";
import { 
  Building2, Printer, Shirt, Megaphone, 
  Expand, FileText, Users, BookOpen, 
  Briefcase, Rocket, Search, PenTool, 
  Truck, BarChart3, ChevronRight 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PrintMediaDigital() {
  return (
    <div className="pt-0 transition-colors duration-300 bg-white dark:bg-bizDark min-h-screen">
      
      {/* --- HERO SECTION (DOMINANT YELLOW) --- */}
      <section className="relative min-h-[60vh] flex items-center bg-bizYellow overflow-hidden">
        {/* Background Image Layer - Subtle & Right-aligned */}
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
            <img 
              src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-print-marketing.jpg" 
              alt=""
              className="w-full h-full object-cover grayscale"
            />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div>
            <div className="inline-block bg-bizRed text-white px-4 py-1 rounded mb-4 text-xs font-black uppercase tracking-widest">
              Market Leaders
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-bizBlue mb-6 uppercase tracking-tighter leading-none">
              Print Media <br /> 
              <span className="text-white drop-shadow-sm">& Digital</span>
            </h1>
            <p className="text-xl md:text-2xl text-bizBlue font-bold max-w-xl mb-8 leading-tight">
              Professional printing solutions and digital strategies that make your brand impossible to ignore.
            </p>
            <Link to="/contact-us-2" className="inline-flex items-center gap-3 bg-bizBlue text-white px-10 py-4 rounded-full font-black uppercase hover:bg-bizRed transition-all shadow-xl">
              Get Started <ChevronRight size={20} />
            </Link>
          </div>
          
          <div className="hidden lg:block">
             <div className="relative p-4">
                <div className="absolute inset-0 bg-bizBlue rotate-3 rounded-2xl" />
                <img 
                  src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-print-marketing.jpg" 
                  alt="Print Marketing"
                  className="relative z-10 rounded-2xl shadow-2xl border-4 border-white"
                />
             </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID (BLUE & WHITE) --- */}
      <section className="py-24 px-6 bg-white dark:bg-bizDark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-bizBlue dark:text-bizYellow uppercase leading-none mb-4">
                Our Core <br /> Services
              </h2>
              <div className="h-2 w-32 bg-bizRed" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-bold max-w-md">
              From corporate stationery to massive outdoor displays, we cover every physical and digital touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard 
              icon={<Building2 size={44} />}
              title="Outdoor Advertising"
              desc="High-impact billboards and displays strategically placed to catch every eye in Kenya."
            />
            <ServiceCard 
              icon={<Printer size={44} />}
              title="Business Materials"
              desc="Premium business cards, brochures, and flyers that feel as professional as you are."
            />
            <ServiceCard 
              icon={<Shirt size={44} />}
              title="Branded Merchandise"
              desc="Custom apparel and items that turn your customers into brand ambassadors."
            />
            <ServiceCard 
              icon={<Megaphone size={44} />}
              title="Promo Campaigns"
              desc="Targeted print strategies designed to convert physical interest into digital action."
            />
            <ServiceCard 
              icon={<Expand size={44} />}
              title="Large Format"
              desc="Banners and vehicle wraps that turn your fleet into moving billboards."
            />
            <ServiceCard 
              icon={<FileText size={44} />}
              title="Corp. Stationery"
              desc="Flawless invoices, letterheads, and forms to keep your brand consistent."
            />
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION (YELLOW ACCENTS) --- */}
      <section className="py-24 bg-gray-50 dark:bg-bizDark/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-bizBlue dark:text-bizYellow uppercase mb-4">The Bizlink Way</h2>
            <p className="text-bizRed font-black uppercase tracking-widest text-sm">4 Steps to Success</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep step="01" icon={<Search />} title="Planning" desc="Strategy focused on your specific ROI." />
            <ProcessStep step="02" icon={<PenTool />} title="Design" desc="Creative production that speaks your language." />
            <ProcessStep step="03" icon={<Truck />} title="Delivery" desc="Professional logistics and site installation." />
            <ProcessStep step="04" icon={<BarChart3 />} title="Support" desc="Ongoing maintenance and performance tracking." />
          </div>
        </div>
      </section>

      {/* --- WHY US (DOMINANT YELLOW BOXES) --- */}
      <section className="py-24 px-6 bg-bizBlue">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
                <h3 className="text-4xl font-black text-bizYellow uppercase leading-none mb-6">Why <br /> Bizlink?</h3>
                <p className="text-white/70 font-bold mb-8">We don't just print; we build brand identities.</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                <WhyBox title="Top Tier Quality" desc="State-of-the-art machinery." />
                <WhyBox title="Fast Delivery" desc="Never miss a campaign deadline." />
                <WhyBox title="Expert Design" desc="In-house creative team." />
            </div>
        </div>
      </section>

      {/* --- FINAL CTA (YELLOW DOMINANT) --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto bg-bizBlue p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-bizYellow/10 group-hover:rotate-12 transition-transform">
             <Rocket size={200} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-bizYellow uppercase mb-6 leading-tight">Ready to lead <br /> your industry?</h2>
            <p className="text-bizYellow font-bold text-xl mb-10 max-w-2xl mx-auto">
              Get a custom print and digital strategy quote today and start seeing real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact-us-2" className="bg-bizGray text-white px-12 py-5 rounded-full font-black uppercase text-lg hover:bg-bizRed transition-all">
                    Contact Us
                </Link>
                <Link to="/magazine" className="bg-white text-bizBlue border-4 border-bizGray px-12 py-5 rounded-full font-black uppercase text-lg hover:bg-bizBlue hover:text-white transition-all">
                    View Portfolio
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function ServiceCard({ icon, title, desc }) {
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

function ProcessStep({ step, icon, title, desc }) {
  return (
    <div className="text-center group">
      <div className="w-24 h-24 mx-auto bg-bizYellow rounded-3xl flex items-center justify-center text-bizBlue mb-8 relative rotate-3 group-hover:rotate-12 transition-transform shadow-lg">
        {icon}
        <span className="absolute -top-3 -right-3 bg-bizRed text-white text-sm font-black w-10 h-10 rounded-full flex items-center justify-center border-4 border-white dark:border-bizDark">
          {step}
        </span>
      </div>
      <h4 className="text-xl font-black text-bizBlue dark:text-bizYellow uppercase mb-3">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">{desc}</p>
    </div>
  );
}

function WhyBox({ title, desc }) {
    return (
        <div className="bg-bizYellow p-8 rounded-2xl">
            <h4 className="font-black text-bizBlue uppercase text-lg mb-2">{title}</h4>
            <p className="text-bizBlue/80 font-bold text-sm">{desc}</p>
        </div>
    );
}