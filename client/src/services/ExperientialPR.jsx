import React from "react";
// Fixed imports: Bullhorn -> Megaphone, Road -> Route
import { 
  CalendarCheck, Megaphone, Newspaper, Users, 
  Route, Search, PenTool, Radio, 
  BarChart3, ChevronRight, Star, Handshake 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ExperientialPR() {
  return (
    <div className="pt-0 transition-colors duration-300 bg-white dark:bg-bizDark min-h-screen">
      
      {/* --- HERO SECTION (DOMINANT YELLOW) --- */}
      <section className="relative min-h-[60vh] md:h-[90vh] flex items-center bg-bizYellow overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img 
              src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-pr-marketing.jpg" 
              alt=" "
              className="w-full h-full object-cover grayscale"
            />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-bizRed text-white px-4 py-1 rounded mb-6 text-xs font-black uppercase tracking-widest animate-bounce">
              <Star size={14} /> Memorable Experiences
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-bizBlue mb-6 uppercase tracking-tighter leading-[0.9]">
              Experiential <br /> 
              <span className="text-white drop-shadow-md text-6xl md:text-8xl">Public Relations</span>
            </h1>
            <p className="text-xl md:text-2xl text-bizBlue font-bold max-w-xl mb-8 leading-tight">
              We don't just tell your story—we create immersive environments where your customers live it.
            </p>
            <Link to="/contact-us-2" className="inline-flex items-center gap-3 bg-bizBlue text-white px-10 py-4 rounded-full font-black uppercase hover:bg-bizRed transition-all shadow-xl group">
              Start Your Activation <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="hidden lg:block relative">
             <div className="absolute inset-0 bg-bizBlue -rotate-3 rounded-[40px]" />
             <div className="relative z-10 overflow-hidden rounded-[40px] border-8 border-white shadow-2xl transition-transform hover:rotate-2 duration-500">
                <img 
                  src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-pr-marketing.jpg" 
                  alt="PR Brand Activation"
                  className="w-full h-[500px] object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 px-6 bg-white dark:bg-bizDark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-bizBlue dark:text-bizYellow uppercase leading-none mb-6">
              PR & Activation <br /> Expertise
            </h2>
            <div className="h-2 w-32 bg-bizRed mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PRServiceCard 
              icon={<CalendarCheck size={44} />}
              title="Brand Activations"
              desc="Corporate events, product launches, and interactive experiences that engage audiences deeply."
            />
            <PRServiceCard 
              icon={<Radio size={44} />}
              title="Media Relations"
              desc="Securing positive coverage through high-value relationships with major media outlets."
            />
            <PRServiceCard 
              icon={<Newspaper size={44} />}
              title="Press Writing"
              desc="Professional press releases designed to capture journalist attention and drive headlines."
            />
            <PRServiceCard 
              icon={<Users size={44} />}
              title="Reputation Mgmt"
              desc="Protecting and enhancing your brand's image through strategic crisis communication."
            />
            <PRServiceCard 
              icon={<Route size={44} />} // Changed from Road to Route
              title="Brand Roadshows"
              desc="Interactive brand experiences on the move, bringing your products directly to diverse audiences."
            />
            <PRServiceCard 
              icon={<Megaphone size={44} />} // Changed from Bullhorn to Megaphone
              title="Publicity Campaigns"
              desc="Shareable moments and buzz-worthy experiences that generate organic social engagement."
            />
          </div>
        </div>
      </section>

      {/* --- WHY US (STRONG BLUE) --- */}
      <section className="py-24 px-6 bg-bizBlue">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
            <div className="lg:col-span-1">
                <h3 className="text-4xl md:text-5xl font-black text-bizYellow uppercase leading-none mb-6">Why <br /> Choose Us?</h3>
                <div className="h-1 w-20 bg-bizRed mb-6" />
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <WhyCard icon={<Star />} title="Compelling Storytelling" desc="Narratives that resonate with both media and audiences." />
                <WhyCard icon={<Handshake />} title="Strong Media Ties" desc="Direct access to journalists for premium placement." />
                <WhyCard icon={<CalendarCheck />} title="Experiential Impact" desc="Memorable activations that spark real conversations." />
                <WhyCard icon={<BarChart3 />} title="Measured ROI" desc="Detailed reporting on reach, sentiment, and impact." />
            </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-bizBlue dark:text-bizYellow uppercase mb-4">Our PR Process</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <ProcessStep step="01" icon={<Search />} title="Research" desc="Analyzing the media landscape and target audience." />
            <ProcessStep step="02" icon={<PenTool />} title="Creation" desc="Crafting compelling releases and interactive content." />
            <ProcessStep step="03" icon={<Radio />} title="Outreach" desc="Securing coverage through targeted media relations." />
            <ProcessStep step="04" icon={<BarChart3 />} title="Analysis" desc="Measuring campaign success and reach impact." />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto bg-bizBlue p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute -bottom-10 -left-10 text-bizBlue/10 group-hover:scale-110 transition-transform">
             <Megaphone size={300} /> {/* Changed from Bullhorn to Megaphone */}
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-bizYellow uppercase mb-6 leading-tight max-w-3xl mx-auto">
                Ready to create <br /> shared moments?
            </h2>
            <Link to="/contact-us-2" className="bg-bizGray text-white px-12 py-5 rounded-full font-black uppercase text-lg hover:bg-bizRed transition-all shadow-xl">
                Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function PRServiceCard({ icon, title, desc }) {
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

function WhyCard({ icon, title, desc }) {
    return (
        <div className="bg-bizYellow p-8 rounded-2xl border-l-8 border-bizRed shadow-lg hover:-translate-x-2 transition-transform">
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