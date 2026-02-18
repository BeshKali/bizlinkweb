import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { 
  MapPin, Phone, Mail, Send, CheckCircle, 
  Instagram, Facebook, Linkedin, Twitter, 
  Loader2, MessageSquare, ExternalLink, AlertCircle,
  Globe, ShieldCheck, Zap, ChevronRight
} from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");
    
    // EmailJS logic remains the same
    const SERVICE_ID = "service_xxxxxxx"; 
    const TEMPLATE_ID = "template_xxxxxxx";
    const PUBLIC_KEY = "your_public_key_here";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
      }, () => {
          setStatus("error");
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-white dark:bg-[#0a0f1a] min-h-screen font-sans overflow-x-hidden transition-colors duration-500">
      
      {/* --- 1. COMMAND CENTER HERO --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-contact-us-2.jpg" 
            className={`w-full h-full object-cover grayscale transition-transform duration-[15000ms] ${isLoaded ? 'scale-110' : 'scale-100'}`}
            alt="Contact Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bizBlue/90 via-bizBlue/40 to-white dark:from-[#0a0f1a] dark:via-[#0a0f1a]/80 dark:to-[#0a0f1a]" />
          {/* Tech Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23fff' fill-opacity='1'/%3E%3C/svg%3E")` }} />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="inline-flex items-center gap-2 bg-bizRed text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-6 animate-pulse">
            Connection Protocol Active
          </div>
          <h1 className="text-6xl md:text-[100px] font-black leading-none uppercase tracking-tighter mb-4 italic">
            <span className="text-white">Initialize</span> <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #FFD700' }}>Contact</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-bold uppercase tracking-widest max-w-xl mx-auto">
             Secure channels open for strategic partnership inquiries.
          </p>
        </div>
        
        {/* Animated Scan Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-bizYellow/20 animate-scan z-20" />
      </section>

      {/* --- 2. INTEGRATED CONTACT MODULE --- */}
      <section className="py-24 relative z-30 -mt-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: HQ ACCESS POINTS (4 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-bizBlue dark:bg-[#0d1424] p-10 rounded-[3rem] text-white border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-8">
                Main <span className="text-bizYellow">Hub</span>
              </h2>
              
              <div className="space-y-4">
                <AccessPoint 
                  icon={<MapPin />}
                  label="Coordinates"
                  value="Ahadi House, Nakuru, Kenya"
                  link="https://maps.app.goo.gl/p8auFqgcJPPn7CRT9"
                />
                <AccessPoint 
                  icon={<Phone />}
                  label="Voice Link"
                  value="+254 780 985 052"
                  link="tel:+254780985052"
                />
                <AccessPoint 
                  icon={<Mail />}
                  label="Digital Packet"
                  value="bizlinkadsdigital@gmail.com"
                  link="mailto:bizlinkadsdigital@gmail.com"
                />
              </div>

              {/* Network Connectivity */}
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6 text-center">External Networks</p>
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                   <SocialIcon icon={<Instagram />} href="https://www.instagram.com/bizlinkadsdigital/" />
                   <div className="w-px h-6 bg-white/10" />
                   <SocialIcon icon={<Facebook />} href="https://www.facebook.com/BizLinkAdsDigital" />
                   <div className="w-px h-6 bg-white/10" />
                   <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/bizlink-ads-digital-38063a363/" />
                   <div className="w-px h-6 bg-white/10" />
                   <SocialIcon icon={<Twitter />} href="https://x.com/BizlinkD14934" />
                </div>
              </div>
            </div>

            {/* Quick Support Card */}
            <div className="bg-bizYellow p-8 rounded-[2.5rem] flex items-center justify-between group cursor-pointer overflow-hidden relative shadow-xl">
               <div className="relative z-10">
                  <h4 className="text-bizBlue font-black uppercase tracking-tighter text-2xl leading-none">Immediate <br /> Assistance</h4>
                  <p className="text-bizBlue/60 font-bold text-xs mt-2 uppercase">WhatsApp Support Hub</p>
               </div>
               <div className="relative z-10 w-12 h-12 bg-bizBlue text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ChevronRight />
               </div>
               <Zap className="absolute -right-4 -bottom-4 text-bizBlue/5 w-32 h-32" />
            </div>
          </div>

          {/* RIGHT: MESSAGE MODULE (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#0a0f1a] p-8 md:p-16 rounded-[3rem] border-2 border-slate-100 dark:border-white/5 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-5 text-bizBlue dark:text-white pointer-events-none">
                  <MessageSquare size={120} />
               </div>

               <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 bg-bizRed/10 text-bizRed rounded-xl flex items-center justify-center">
                      <Send size={24} />
                   </div>
                   <h3 className="text-3xl font-black text-bizBlue dark:text-white uppercase tracking-tighter italic">Message <span className="text-bizRed">Protocol</span></h3>
                </div>

                {status === "success" ? (
                  <div className="text-center py-20 bg-green-50 dark:bg-green-900/10 rounded-[2rem] border-2 border-dashed border-green-200">
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-6 animate-bounce" />
                    <h4 className="text-2xl font-black text-bizBlue dark:text-white mb-2">Transmission Successful</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-bold">A specialist will respond shortly.</p>
                    <button onClick={() => setStatus("idle")} className="mt-8 px-8 py-3 bg-bizBlue text-white rounded-xl font-black text-xs uppercase tracking-widest">Send New Message</button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <InputGroup label="Full Name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
                      <InputGroup label="Access Email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@company.com" />
                    </div>
                    <InputGroup label="Subject Identifier" name="subject" type="text" value={formData.subject} onChange={handleInputChange} placeholder="Campaign Inquiry" />
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Detailed Message</label>
                        <textarea 
                          name="message" required rows="5" placeholder="Outline your requirements..." value={formData.message} onChange={handleInputChange}
                          className="w-full p-6 bg-slate-50 dark:bg-white/5 border-2 border-transparent focus:border-bizYellow dark:focus:border-bizYellow rounded-[2rem] outline-none transition-all font-bold text-bizBlue dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600"
                        />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={status === "loading"}
                      className="w-full py-6 bg-bizBlue dark:bg-bizYellow text-white dark:text-bizBlue rounded-2xl font-black text-xl flex items-center justify-center gap-4 shadow-xl hover:bg-bizRed hover:text-white transition-all hover:translate-y-[-4px] active:translate-y-0 disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <><Zap size={20} /> INITIALIZE TRANSMISSION</>
                      )}
                    </button>
                  </form>
                )}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. GLOBAL STATUS FOOTER --- */}
      <footer className="py-12 bg-slate-50 dark:bg-black/40 border-t border-slate-100 dark:border-white/5">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
               <Globe className="text-bizRed animate-spin-slow" size={20} />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Regional Visibility: Active</span>
            </div>
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-bizYellow" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Secure Protocol</span>
               </div>
               <p className="text-xs font-black text-bizBlue dark:text-white uppercase tracking-tighter">Bizlink Ads Digital © 2025</p>
            </div>
         </div>
      </footer>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function AccessPoint({ icon, label, value, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all group">
      <div className="w-10 h-10 bg-bizYellow text-bizBlue rounded-lg flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{label}</p>
        <p className="text-sm font-bold text-white group-hover:text-bizYellow transition-colors">{value}</p>
      </div>
    </a>
  );
}

function InputGroup({ label, name, type, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">{label}</label>
      <input 
        type={type} name={name} required placeholder={placeholder} value={value} onChange={onChange}
        className="w-full p-5 bg-slate-50 dark:bg-white/5 border-2 border-transparent focus:border-bizYellow dark:focus:border-bizYellow rounded-2xl outline-none transition-all font-bold text-bizBlue dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600"
      />
    </div>
  );
}

function SocialIcon({ icon, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-white/40 hover:text-bizYellow hover:scale-125 transition-all">
      {React.cloneElement(icon, { size: 20 })}
    </a>
  );
}