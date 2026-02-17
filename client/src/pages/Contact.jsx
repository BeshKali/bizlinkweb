import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { 
  MapPin, Phone, Mail, Send, CheckCircle, 
  Instagram, Facebook, Linkedin, Twitter, 
  Loader2, MessageSquare, ExternalLink, AlertCircle
} from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    const SERVICE_ID = "service_xxxxxxx"; 
    const TEMPLATE_ID = "template_xxxxxxx";
    const PUBLIC_KEY = "your_public_key_here";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
      }, (error) => {
          console.log(error.text);
          setStatus("error");
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-white dark:bg-bizDark min-h-screen font-sans overflow-x-hidden pt-4">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://bizlinkads.co.ke/wp-content/themes/wordpressbizlinkchild/assets/images/landing/hero-contact-us-2.jpg" 
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ${isLoaded ? 'scale-110' : 'scale-100'}`}
            alt="Contact Hero" 
          />
          <div className="absolute inset-0 bg-bizBlue/50 backdrop-blur-[1px]" />
        </div>
        <div className={`relative z-10 text-center px-6 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-2xl mb-4">
            Contact <span className="text-bizYellow">Us</span>
          </h1>
          <p className="text-bizYellow text-xl md:text-2xl font-bold italic tracking-wide">
            Let's Start Your Marketing Journey
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT GRID */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* LEFT COLUMN: INFO */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-bizBlue dark:text-bizYellow uppercase tracking-tighter mb-6">
                Get in <span className="text-bizRed">Touch</span>
              </h2>
              <div className="w-20 h-2 bg-bizYellow rounded-full mb-10" />
            </div>

            <div className="grid gap-4">
              <ContactMethod 
                icon={<MapPin className="text-bizBlue" />}
                title="Office Location"
                desc="Ahadi House, Nakuru, Kenya"
                link="https://maps.app.goo.gl/p8auFqgcJPPn7CRT9"
              />
              <ContactMethod 
                icon={<Phone className="text-[#1DB954]" />}
                title="Phone Number"
                desc="+254 780 985 052"
                link="tel:+254780985052"
              />
              <ContactMethod 
                icon={<Mail className="text-[#FF9900]" />}
                title="Email Address"
                desc="bizlinkadsdigital@gmail.com"
                link="mailto:bizlinkadsdigital@gmail.com"
              />
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-bizBlue dark:text-bizYellow font-black uppercase text-sm tracking-widest mb-6">Follow Our Socials</h4>
              <div className="flex flex-wrap gap-4">
                <SocialBtn icon={<Instagram />} color="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" href="https://www.instagram.com/bizlinkadsdigital/" />
                <SocialBtn icon={<Facebook />} color="bg-[#1877F2]" href="https://www.facebook.com/BizLinkAdsDigital" />
                <SocialBtn icon={<Linkedin />} color="bg-[#0072b1]" href="https://www.linkedin.com/in/bizlink-ads-digital-38063a363/" />
                <SocialBtn icon={<Twitter />} color="bg-black" href="https://x.com/BizlinkD14934" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: EMAILJS FORM */}
          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-bizYellow p-1 rounded-[2.5rem] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white dark:bg-gray-800 rounded-[2.3rem] p-8 md:p-12 -rotate-1 hover:rotate-0 transition-transform duration-500 border-2 border-bizYellow/20">
                <h3 className="text-3xl font-black text-bizBlue dark:text-bizYellow mb-8 uppercase tracking-tighter flex items-center gap-3">
                  <MessageSquare size={32} /> Send a Message
                </h3>

                {status === "success" ? (
                  <div className="text-center py-12 animate-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={48} />
                    </div>
                    <h4 className="text-2xl font-black text-bizBlue mb-2">Message Sent!</h4>
                    <p className="text-gray-500 font-bold">Thank you. We'll be in touch soon.</p>
                    <button onClick={() => setStatus("idle")} className="mt-8 text-bizRed font-black uppercase underline">Send another</button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                    {status === "error" && (
                      <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 font-bold border border-red-200">
                        <AlertCircle size={20} /> Something went wrong. Please try again.
                      </div>
                    )}
                    <div className="grid md:grid-cols-2 gap-5">
                      <input 
                        type="text" name="name" required placeholder="Full Name" value={formData.name} onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 rounded-xl focus:border-bizBlue outline-none transition-all font-bold text-bizBlue dark:text-bizYellow"
                      />
                      <input 
                        type="email" name="email" required placeholder="Email Address" value={formData.email} onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 rounded-xl focus:border-bizBlue outline-none transition-all font-bold text-bizBlue dark:text-bizYellow"
                      />
                    </div>
                    <input 
                      type="text" name="subject" required placeholder="Subject" value={formData.subject} onChange={handleInputChange}
                      className="w-full p-4 bg-gray-50 dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 rounded-xl focus:border-bizBlue outline-none transition-all font-bold text-bizBlue dark:text-bizYellow"
                    />
                    <textarea 
                      name="message" required rows="4" placeholder="Your Message" value={formData.message} onChange={handleInputChange}
                      className="w-full p-4 bg-gray-50 dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 rounded-xl focus:border-bizBlue outline-none transition-all font-bold text-bizBlue dark:text-bizYellow"
                    />
                    
                    <button 
                      type="submit" 
                      disabled={status === "loading"}
                      className="w-full py-5 bg-bizBlue text-white rounded-xl font-black text-xl flex items-center justify-center gap-3 shadow-xl hover:bg-bizRed transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <><Send size={24} /> SEND MESSAGE</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-bizBlue py-16 text-center border-t-8 border-bizYellow">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-white text-3xl md:text-4xl font-black uppercase mb-4 italic tracking-widest leading-tight">Empowering Kenyan Brands Since Day One.</h2>
          <p className="text-bizYellow font-black text-lg uppercase tracking-tighter">Bizlink Ads Digital</p>
        </div>
      </section>
    </main>
  );
}

// --- SUB-COMPONENTS ---
function ContactMethod({ icon, title, desc, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border-2 border-gray-50 dark:border-gray-700 hover:border-bizYellow transition-all group">
      <div className="w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { size: 32 })}
      </div>
      <div className="flex-1 overflow-hidden">
        <h4 className="text-gray-400 font-black uppercase text-[10px] tracking-widest mb-1">{title}</h4>
        <p className="text-bizBlue dark:text-bizYellow font-black text-lg truncate md:whitespace-normal">{desc}</p>
      </div>
      <ExternalLink size={18} className="text-gray-300" />
    </a>
  );
}

function SocialBtn({ icon, color, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${color} text-white p-4 rounded-xl shadow-lg hover:scale-125 hover:-translate-y-2 transition-all duration-300`}>
      {React.cloneElement(icon, { size: 24 })}
    </a>
  );
}