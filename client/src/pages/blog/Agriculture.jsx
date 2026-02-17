import React from "react";
import { 
  Tractor, Wheat, Sprout, CloudRain, 
  TrendingUp, Newspaper, ChevronRight, 
  Calendar, ArrowRight, Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Agriculture() {
  const articles = [
    {
      title: "Agricultural Mechanization Driving the Tools Market",
      slug: "agricultural-mechanization-driving-the-tools-and-equipment-market-in-kenya",
      date: "November 5, 2025",
      desc: "How the modernization of farming practices is creating new opportunities in the machinery sector.",
      icon: <Tractor className="text-bizBlue dark:text-bizYellow" />
    },
    {
      title: "Building Resilience Amidst Climate Change",
      slug: "how-the-kenyan-agricultural-sector-is-building-resilience-amidst-climate-change",
      date: "October 22, 2025",
      desc: "Strategies Kenyan farmers are using to protect crops against erratic weather patterns.",
      icon: <CloudRain className="text-bizBlue dark:text-bizYellow" />
    },
    {
      title: "Digital Access Unlocking Opportunities",
      slug: "digital-access-is-unlocking-market-opportunities-for-kenyan-agribusinesses",
      date: "October 22, 2025",
      desc: "How mobile technology is connecting agribusinesses to new regional markets.",
      icon: <TrendingUp className="text-bizBlue dark:text-bizYellow" />
    },
    {
      title: "2025 ASK Nakuru National Agricultural Show",
      slug: "the-2025-ask-nakuru-national-agricultural-show-a-must-attend-event-for-all",
      date: "June 28, 2025",
      desc: "A deep dive into the highlights and must-attend events of the upcoming national show.",
      icon: <Wheat className="text-bizBlue dark:text-bizYellow" />
    }
  ];

  return (
    <div className="pt-0 transition-colors duration-300 bg-white dark:bg-bizDark min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] md:h-[75vh] flex items-center bg-bizYellow overflow-hidden text-bizBlue">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-agriculture.jpg" alt="" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-bizRed text-white px-4 py-1 rounded mb-6 text-xs font-black uppercase tracking-widest">
              <Sprout size={14} /> Future of Farming
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter leading-[0.85]">
              Agri <br /> <span className="text-white drop-shadow-md">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-xl mb-8 leading-tight">Trusted industry analysis and modern agritech innovations.</p>
            <Link to="/contact-us-2" className="bg-bizBlue text-white px-10 py-4 rounded-full font-black uppercase hover:bg-bizRed transition-all shadow-xl inline-flex items-center gap-2 group">
              Contact Experts <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="hidden lg:block relative">
             <div className="relative z-10 overflow-hidden rounded-[40px] border-8 border-white shadow-2xl">
                <img src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-agriculture.jpg" alt="Agri" className="w-full h-[500px] object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="py-24 px-6 bg-white dark:bg-bizDark transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-bizBlue dark:text-bizYellow uppercase leading-none mb-12">Industry Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {articles.map((post, idx) => (
              <article key={idx} className="group bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border-2 border-transparent hover:border-bizYellow transition-all hover:shadow-2xl">
                <div className="w-16 h-16 bg-bizYellow rounded-2xl flex items-center justify-center mb-6 shadow-lg">{post.icon}</div>
                <div className="text-bizRed font-black text-xs uppercase mb-3 tracking-widest">{post.date}</div>
                <h3 className="text-2xl font-black text-bizBlue dark:text-white uppercase mb-4 leading-tight group-hover:text-bizRed transition-colors">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">{post.desc}</p>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-black text-bizBlue dark:text-bizYellow uppercase text-sm border-b-4 border-bizYellow hover:border-bizRed transition-all pb-1">
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