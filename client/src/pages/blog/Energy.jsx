import React from "react";
import { 
  Zap, Sun, BatteryCharging, Wind, 
  ChevronRight, Calendar, ArrowRight, Power, Leaf
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Energy() {
  const articles = [
    {
      title: "Industrial Implications of Kenya’s Clean-Energy Transition",
      slug: "industrial-implications-of-kenyas-clean-energy-transition",
      date: "October 24, 2025",
      desc: "Kenya’s energy landscape is moving from fossil-fuel reliance to a dominant renewable energy mix.",
      icon: <Leaf className="text-bizBlue dark:text-bizYellow" />
    },
    {
      title: "The Role of Off-Grid & Distributed Energy in Kenya",
      slug: "the-role-of-off-grid-distributed-energy-in-kenya",
      date: "October 24, 2025",
      desc: "How distributed energy addresses access challenges in rural and remote regional industrial hubs.",
      icon: <BatteryCharging className="text-bizBlue dark:text-bizYellow" />
    },
    {
      title: "Harnessing Kenya’s Renewable Momentum",
      slug: "harnessing-kenyas-renewable-momentum-why-it-matters-for-businesses",
      date: "October 24, 2025",
      desc: "Over 84% of Kenya’s electricity comes from renewable sources. Why this matters for your brand.",
      icon: <Wind className="text-bizBlue dark:text-bizYellow" />
    }
  ];

  return (
    <div className="pt-0 transition-colors duration-300 bg-white dark:bg-bizDark min-h-screen text-bizBlue">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] md:h-[75vh] flex items-center bg-bizYellow overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-energy.jpg" alt="" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-bizRed text-white px-4 py-1 rounded mb-6 text-xs font-black uppercase tracking-widest animate-pulse">
              <Zap size={14} /> Powering Innovation
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Energy <br /> <span className="text-white drop-shadow-md">Market</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-xl mb-8 leading-tight">Innovative marketing strategies and industry insights for the renewable sector.</p>
            <Link to="/contact-us-2" className="bg-bizBlue text-white px-10 py-4 rounded-full font-black uppercase hover:bg-bizRed transition-all shadow-xl inline-flex items-center gap-2 group">
              Renewable Trends <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="hidden lg:block relative">
             <div className="relative z-10 overflow-hidden rounded-[40px] border-8 border-white shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                <img src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-energy.jpg" alt="Energy" className="w-full h-[500px] object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="py-24 px-6 bg-white dark:bg-bizDark transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-bizBlue dark:text-bizYellow uppercase leading-none mb-12">Sector Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((post, idx) => (
              <article key={idx} className="group bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border-2 border-transparent hover:border-bizYellow transition-all hover:shadow-2xl flex flex-col justify-between">
                <div>
                    <div className="w-14 h-14 bg-bizYellow rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">{post.icon}</div>
                    <div className="text-bizRed font-black text-xs uppercase mb-3 tracking-widest">{post.date}</div>
                    <h3 className="text-2xl font-black text-bizBlue dark:text-white uppercase mb-4 leading-tight group-hover:text-bizRed transition-colors">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-8 leading-relaxed line-clamp-3">{post.desc}</p>
                </div>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-black text-bizBlue dark:text-bizYellow uppercase text-sm border-b-4 border-bizYellow hover:border-bizRed transition-all pb-1 w-fit">
                    Read Report <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}