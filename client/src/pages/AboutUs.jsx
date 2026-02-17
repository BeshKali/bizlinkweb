import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, RefreshCw, Users, Target, Rocket, Award } from "lucide-react";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-white dark:bg-bizDark overflow-x-hidden pt-4">
      {/* 1. HERO SECTION WITH ZOOM ANIMATION */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-about-us.jpg"
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${
              isVisible ? "scale-110" : "scale-100"
            }`}
            alt="About Bizlink"
          />
          <div className="absolute inset-0 bg-bizBlue/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 drop-shadow-2xl">
            About <span className="text-bizYellow">Us</span>
          </h1>
          <div className="w-24 h-2 bg-bizYellow mx-auto mb-6 rounded-full" />
          <p className="text-white text-xl md:text-2xl font-bold italic drop-shadow-lg leading-tight">
            "We Link you to your audience."
          </p>
        </div>
      </section>

      {/* 2. STATS BAR (DYNAMISM) */}
      <section className="bg-bizYellow py-10 md:py-16 -mt-10 relative z-20 shadow-2xl border-y-4 border-bizBlue">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem val="11+" label="Years Experience" />
          <StatItem val="500+" label="Brands Trusted" />
          <StatItem val="100K+" label="Monthly Readers" />
          <StatItem val="100%" label="Kenyan Owned" />
        </div>
      </section>

      {/* 3. GAMIFIED CONTENT CARDS */}
      <section className="py-24 bg-white dark:bg-bizDark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-bizBlue dark:text-bizYellow uppercase tracking-tighter leading-none">
              The Bizlink <span className="text-bizRed">Journey</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Our Legacy */}
            <GamifiedCard
              icon={<Trophy className="w-10 h-10 text-bizYellow" />}
              title="Our Legacy"
              desc="Since establishment, Bizlink began with the launch of Bizlink Ads Magazine. For over a decade, we've built a reputation as a trusted source of business information, reaching thousands through print and digital platforms."
              progress="90%"
              delay="100"
            />

            {/* Our Evolution */}
            <GamifiedCard
              icon={<RefreshCw className="w-10 h-10 text-bizYellow" />}
              title="Our Evolution"
              desc="From our roots in print, we've grown into a full-service digital agency offering variety of services such as experiential marketing and outdoor visibility solutions. We deliver cohesive strategies across all channels."
              progress="75%"
              delay="300"
            />

            {/* Our Approach */}
            <GamifiedCard
              icon={<Users className="w-10 h-10 text-bizYellow" />}
              title="Our Approach"
              desc="We're your strategic partner, not just a service provider. By blending print credibility with digital reach, we create marketing solutions that drive real business growth and build lasting brand authority."
              progress="100%"
              delay="500"
            />
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION OVERLAY SECTION */}
      <section className="py-20 bg-bizBlue relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <Award size={500} className="text-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 transform hover:-rotate-1 transition-transform">
                <Target className="text-bizYellow w-16 h-16 mb-6" />
                <h3 className="text-white text-3xl font-black uppercase mb-4">Our Mission</h3>
                <p className="text-white/80 text-lg font-medium leading-relaxed">
                    To empower Kenyan businesses by providing innovative, data-driven marketing 
                    strategies that bridge the gap between brands and their target audiences.
                </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 transform hover:rotate-1 transition-transform">
                <Rocket className="text-bizYellow w-16 h-16 mb-6" />
                <h3 className="text-white text-3xl font-black uppercase mb-4">Our Vision</h3>
                <p className="text-white/80 text-lg font-medium leading-relaxed">
                    To be the leading marketing catalyst in East Africa, recognized for 
                    seamlessly blending native advertising with cutting-edge digital solutions.
                </p>
            </div>
        </div>
      </section>

      {/* 5. MODERN THANK YOU BANNER */}
      <section className="py-24 bg-white dark:bg-bizDark text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-bizBlue dark:text-bizYellow uppercase mb-6 leading-tight">
            Thank You for Trusting <br /> Bizlink Ads Digital
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-bold mb-10 italic">
            "We are proud to empower Kenyan brands and businesses. Your success is our mission."
          </p>
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-bizRed rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
            <Link
              to="/contact-us-2"
              className="relative px-12 py-5 bg-bizRed text-white rounded-full font-black text-xl md:text-2xl shadow-xl hover:bg-red-700 hover:scale-105 transition-all block active:scale-95"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- HELPER COMPONENTS ---

function StatItem({ val, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-bizBlue font-black text-4xl md:text-6xl leading-none mb-1">
        {val}
      </span>
      <span className="text-bizDark font-black uppercase tracking-widest text-xs md:text-sm">
        {label}
      </span>
    </div>
  );
}

function GamifiedCard({ icon, title, desc, progress, delay }) {
  const [fill, setFill] = useState("0%");

  useEffect(() => {
    const timer = setTimeout(() => setFill(progress), 1000);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div 
      className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-xl border-2 border-transparent hover:border-bizRed transition-all duration-300 group hover:-translate-y-4"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-20 h-20 bg-bizBlue rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg group-hover:shadow-bizRed/20">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-bizBlue dark:text-bizYellow uppercase mb-4 tracking-tighter">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 font-bold leading-relaxed mb-8 text-sm md:text-base">
        {desc}
      </p>
      
      {/* XP Bar Logic */}
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-black uppercase text-bizBlue dark:text-bizYellow tracking-widest">
            <span>Progressive Impact</span>
            <span>{progress}</span>
        </div>
        <div className="w-full h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-bizBlue dark:bg-bizYellow transition-all duration-1000 ease-out rounded-full"
            style={{ width: fill }}
          />
        </div>
      </div>
    </div>
  );
}