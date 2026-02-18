import React from "react";
import { 
  HardHat, Building2, Construction as ConstructionIcon, TrendingUp, 
  ShieldCheck, ChevronRight, Calendar, ArrowRight, Hammer
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Construction() {
  const articles = [
    {
      title: "Why Integrated Media Matters for Construction Brands",
      slug: "why-integrated-media-matters-for-construction-brands-in-kenya",
      date: "October 23, 2025",
      desc: "For Kenyan construction companies, visibility isn’t just about won contracts — it’s about building trust.",
      icon: <HardHat className="text-bizBlue dark:text-bizYellow" />
    },
    {
      title: "Navigating Slowdown & Opportunity in the Sector",
      slug: "navigating-slowdown-opportunity-in-kenyas-construction-sector",
      date: "October 23, 2025",
      desc: "Analyzing the 2024 industrial contraction and identifying growth areas for the next fiscal year.",
      icon: <TrendingUp className="text-bizBlue dark:text-bizYellow" />
    }
  ];

  return (
    <div className="pt-0 transition-colors duration-300 bg-white dark:bg-bizDark min-h-screen text-bizBlue">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] md:h-[75vh] flex items-center bg-bizYellow overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-construction.jpg" alt="" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-bizRed text-white px-4 py-1 rounded mb-6 text-xs font-black uppercase tracking-widest">
              <ConstructionIcon size={14} /> Building the Future
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Construction <br /> <span className="text-white drop-shadow-md">Updates</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-xl mb-8 leading-tight">Strategic marketing solutions designed for the Kenyan infrastructure sector.</p>
            <Link to="/contact-us-2" className="bg-bizBlue text-white px-10 py-4 rounded-full font-black uppercase hover:bg-bizRed transition-all shadow-xl inline-flex items-center gap-2 group">
              Start Building <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="hidden lg:block relative">
             <div className="relative z-10 overflow-hidden rounded-2xl border-[10px] border-white shadow-2xl">
                <img src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-construction.jpg" alt="Construction" className="w-full h-[500px] object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="py-24 px-6 bg-white dark:bg-bizDark transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-bizBlue dark:text-bizYellow uppercase leading-none mb-12">Sector Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {articles.map((post, idx) => (
              <article key={idx} className="group bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border-2 border-transparent hover:border-bizYellow transition-all hover:shadow-2xl">
                <div className="w-14 h-14 bg-bizYellow rounded-xl flex items-center justify-center mb-6 shadow-md">{post.icon}</div>
                <div className="text-bizRed font-black text-xs uppercase mb-3 tracking-widest">{post.date}</div>
                <h3 className="text-2xl font-black text-bizBlue dark:text-white uppercase mb-4 leading-tight group-hover:text-bizRed transition-colors">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-8 leading-relaxed">{post.desc}</p>
                {/* <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-black text-bizBlue dark:text-bizYellow uppercase text-sm border-b-4 border-bizYellow hover:border-bizRed transition-all pb-1 w-fit">
                    Read Report <ArrowRight size={16} />
                </Link> */}
                  <Link to={'#'} className="inline-flex items-center gap-2 font-black text-bizBlue dark:text-bizYellow uppercase text-sm border-b-4 border-bizYellow hover:border-bizRed transition-all pb-1">
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