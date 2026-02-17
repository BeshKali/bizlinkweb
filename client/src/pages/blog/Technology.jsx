import React from "react";
import { 
  Cpu, Cloud, ShieldCheck, Smartphone, 
  ChevronRight, Calendar, ArrowRight, 
  Zap, Brain, Code
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Technology() {
  const articles = [
    {
      title: "E-Commerce & Mobile First in Kenya",
      slug: "e-commerce-social-commerce-mobile-first-in-kenya",
      date: "November 3, 2025",
      desc: "Kenya continues to embrace the mobile-driven digital retail economy, shifting from traditional platforms to social commerce.",
      icon: <Smartphone className="text-bizBlue dark:text-bizYellow" />
    },
    {
      title: "Cloud & Cybersecurity: The New Tech Backbone",
      slug: "cloud-cybersecurity-the-new-tech-backbone-in-kenya",
      date: "November 3, 2025",
      desc: "Cloud computing and advanced analytics are moving from experimental add-ons to core business components in Kenya.",
      icon: <Cloud className="text-bizBlue dark:text-bizYellow" />
    },
    {
      title: "Kenya’s AI Push: Strategy & Growth",
      slug: "kenyas-ai-push-strategy-talent-growth",
      date: "November 3, 2025",
      desc: "Inside the National AI Strategy (2025-2030) and how it positions Kenya as a regional leader in artificial intelligence.",
      icon: <Brain className="text-bizBlue dark:text-bizYellow" />
    }
  ];

  return (
    <div className="pt-0 transition-colors duration-300 bg-white dark:bg-bizDark min-h-screen text-bizBlue">
      
      {/* --- HERO SECTION (DOMINANT YELLOW) --- */}
      <section className="relative min-h-[90vh] md:h-[70vh] flex items-center bg-bizYellow overflow-hidden">
        {/* Grayscale background image overlay for texture */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img 
              src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-technology.jpg" 
              alt=""
              className="w-full h-full object-cover grayscale"
            />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-bizRed text-white px-4 py-1 rounded mb-6 text-xs font-black uppercase tracking-widest animate-pulse">
              <Zap size={14} /> Future Frontiers
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter leading-[0.85]">
              Technology <br /> 
              <span className="text-white drop-shadow-md">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-xl mb-8 leading-tight">
              Innovate your tech business and lead the digital economy with cutting-edge marketing strategies.
            </p>
            <div className="flex gap-4">
                <Link to="/contact-us-2" className="bg-bizBlue text-white px-10 py-4 rounded-full font-black uppercase hover:bg-bizRed transition-all shadow-xl flex items-center gap-2 group">
                  Contact Experts <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </div>
          
          {/* Tech Visual Cutout */}
          <div className="hidden lg:block relative">
             <div className="absolute inset-0 bg-bizBlue rotate-3 rounded-[40px] opacity-10" />
             <div className="relative z-10 overflow-hidden rounded-[40px] border-8 border-white shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                <img 
                  src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-technology.jpg" 
                  alt="Tech Innovation"
                  className="w-full h-[500px] object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* --- BLOG GRID SECTION (CLEAN THEME) --- */}
      <section className="py-24 px-6 bg-white dark:bg-bizDark transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-bizBlue dark:text-bizYellow uppercase leading-none mb-4">
                Digital <br /> Reports
              </h2>
              <div className="h-2 w-32 bg-bizRed" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-bold max-w-md text-lg">
              Stay updated with the latest AI breakthroughs, cybersecurity trends, and software innovations in Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((post, idx) => (
              <article key={idx} className="group bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border-2 border-transparent hover:border-bizYellow transition-all hover:shadow-2xl flex flex-col justify-between">
                <div>
                    <div className="w-14 h-14 bg-bizYellow rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:rotate-6 transition-transform">
                        {post.icon}
                    </div>
                    <div className="flex items-center gap-2 text-bizRed font-black text-xs uppercase mb-3 tracking-widest">
                        <Calendar size={14} /> {post.date}
                    </div>
                    <h3 className="text-2xl font-black text-bizBlue dark:text-white uppercase mb-4 leading-tight group-hover:text-bizRed transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-8 leading-relaxed line-clamp-3">
                        {post.desc}
                    </p>
                </div>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-black text-bizBlue dark:text-bizYellow uppercase text-sm border-b-4 border-bizYellow hover:border-bizRed transition-all pb-1 w-fit">
                    View Briefing <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}