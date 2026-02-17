import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronLeft, Moon, Sun, ChevronDown } from "lucide-react";
import logo from "../assets/bizlink-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // 'services' or 'industries'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();

  // Handle Dark Mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveSubMenu(null);
  }, [location]);

  const industries = [
    { slug: "agriculture", name: "Agriculture" },
    { slug: "construction", name: "Construction" },
    { slug: "energy", name: "Energy" },
    { slug: "finance", name: "Finance" },
    { slug: "healthcare", name: "Healthcare" },
    { slug: "manufacturing", name: "Manufacturing" },
    { slug: "real-estate", name: "Real Estate" },
    { slug: "retail", name: "Retail" },
    { slug: "technology", name: "Technology" },
    { slug: "trade", name: "Trade" },
  ];

  const services = [
    { path: "/services/print-marketing", name: "Print Media & Digital Marketing" },
    { path: "/services/pr-marketing", name: "Experiential Public Relations" },
    { path: "/services/outdoor-marketing", name: "Outdoor Visibility Solutions" },
    { path: "/services/branding", name: "Brand Identity Enhancement" },
  ];

  // Helper to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-bizDark border-b-4 border-bizYellow shadow-lg fixed w-full top-0 z-[100] transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-10 md:h-12 w-auto object-contain" alt="Bizlink Ads" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 font-black text-bizBlue dark:text-bizYellow uppercase text-sm tracking-tight">
          <Link to="/" className={`hover:text-bizRed transition-colors ${isActive('/') ? 'text-bizRed' : ''}`}>Home</Link>
          <Link to="/magazine" className={`hover:text-bizRed transition-colors ${isActive('/magazine') ? 'text-bizRed' : ''}`}>Magazine</Link>

          {/* Services Dropdown */}
          <div className="relative group py-4">
            <button className={`flex items-center gap-1 hover:text-bizRed transition-colors ${location.pathname.includes('/services') ? 'text-bizRed' : ''}`}>
              SERVICES <ChevronDown size={14} />
            </button>
            <div className="absolute hidden group-hover:block top-full left-0 bg-white dark:bg-bizDark shadow-2xl rounded-xl w-72 border-t-4 border-bizYellow overflow-hidden animate-in fade-in slide-in-from-top-2">
              {services.map((s) => (
                <Link 
                  key={s.path} 
                  to={s.path} 
                  className={`block px-6 py-3 border-b border-gray-50 dark:border-gray-800 last:border-0 transition-all font-bold 
                    ${isActive(s.path) ? 'bg-bizYellow text-bizBlue' : 'text-bizBlue dark:text-bizYellow hover:bg-bizYellow/10'}`}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries Dropdown */}
          <div className="relative group py-4">
            <button className={`flex items-center gap-1 hover:text-bizRed transition-colors ${location.pathname.includes('/blog/') ? 'text-bizRed' : ''}`}>
              INDUSTRIES <ChevronDown size={14} />
            </button>
            <div className="absolute hidden group-hover:block top-full left-[-150px] bg-white dark:bg-bizDark shadow-2xl rounded-xl w-[500px] border-t-4 border-bizYellow p-4 animate-in fade-in slide-in-from-top-2">
              <div className="max-h-[450px] overflow-y-auto grid grid-cols-2 gap-x-2 custom-scrollbar">
                {industries.map(i => (
                  <Link 
                    key={i.slug} 
                    to={`/blog/${i.slug}`} 
                    className={`block px-4 py-2 text-xs rounded-lg transition-colors font-bold 
                      ${isActive(`/blog/${i.slug}`) ? 'bg-bizYellow text-bizBlue' : 'hover:bg-bizYellow/20 hover:text-bizRed text-bizBlue dark:text-bizYellow'}`}
                  >
                    {i.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/events" className={`hover:text-bizRed transition-colors ${isActive('/events') ? 'text-bizRed' : ''}`}>Events</Link>
          <Link to="/about-us" className={`hover:text-bizRed transition-colors ${isActive('/about-us') ? 'text-bizRed' : ''}`}>About Us</Link>
          <Link to="/contact-us-2" className="bg-bizRed text-white px-6 py-2 rounded-full hover:bg-bizBlue transition-all shadow-md">Contact</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 bg-gray-100 dark:bg-gray-800 text-bizBlue dark:text-bizYellow rounded-full hover:bg-bizYellow transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 bg-bizBlue text-white rounded-lg"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {isOpen && <div className="fixed inset-0 bg-bizDark/60 backdrop-blur-sm z-[200]" onClick={() => { setIsOpen(false); setActiveSubMenu(null); }} />}

      <MobilePanel 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        activeSubMenu={activeSubMenu} 
        setActiveSubMenu={setActiveSubMenu} 
        services={services} 
        industries={industries} 
        isActive={isActive} 
      />
    </header>
  );
}

// ----------------- MOBILE PANEL COMPONENT -----------------
function MobilePanel({ isOpen, setIsOpen, activeSubMenu, setActiveSubMenu, services, industries, isActive }) {
  return (
    <>
      {/* Main Panel */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-xs bg-white dark:bg-bizDark z-[201] shadow-2xl transition-transform duration-300 transform lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-bizYellow p-6 flex justify-between items-center border-b-4 border-bizBlue">
          <h2 className="text-bizBlue font-black uppercase text-xl tracking-widest">Main Menu</h2>
          <button onClick={() => setIsOpen(false)} className="bg-bizBlue text-white p-1 rounded-full"><X size={24}/></button>
        </div>

        <nav className="p-4 space-y-1 flex flex-col h-[calc(100%-100px)] overflow-y-auto">
          <MobileLink to="/" label="Home" active={isActive('/')} />
          <MobileLink to="/magazine" label="Magazine" active={isActive('/magazine')} />

          <button onClick={() => setActiveSubMenu('services')} className="flex justify-between items-center w-full p-4 text-bizBlue dark:text-bizYellow font-black uppercase border-b border-gray-100 dark:border-gray-800">
            Services <ChevronRight size={20} className="text-bizRed" />
          </button>

          <button onClick={() => setActiveSubMenu('industries')} className="flex justify-between items-center w-full p-4 text-bizBlue dark:text-bizYellow font-black uppercase border-b border-gray-100 dark:border-gray-800">
            Industries <ChevronRight size={20} className="text-bizRed" />
          </button>

          <MobileLink to="/events" label="Events" active={isActive('/events')} />
          <MobileLink to="/about-us" label="About Us" active={isActive('/about-us')} />
          <MobileLink to="/contact-us-2" label="Contact" active={isActive('/contact-us-2')} />
        </nav>
      </div>

      {/* Services Sub-Panel */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-xs bg-white dark:bg-bizDark z-[202] shadow-2xl transition-transform duration-300 transform ${activeSubMenu === 'services' ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-bizBlue p-6 flex items-center gap-4 border-b-4 border-bizYellow">
          <button onClick={() => setActiveSubMenu(null)} className="text-white"><ChevronLeft size={28}/></button>
          <h2 className="text-bizYellow font-black uppercase text-xl">Our Services</h2>
        </div>
        <div className="p-4 space-y-1">
          {services.map(s => (
            <Link 
              key={s.path} 
              to={s.path} 
              className={`block p-4 font-bold border-b border-gray-50 dark:border-gray-800 ${isActive(s.path) ? 'text-bizRed' : 'text-bizBlue dark:text-bizYellow'}`}
            >
              {s.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Industries Sub-Panel */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-xs bg-white dark:bg-bizDark z-[203] shadow-2xl transition-transform duration-300 transform ${activeSubMenu === 'industries' ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-bizBlue p-6 flex items-center gap-4 border-b-4 border-bizYellow">
          <button onClick={() => setActiveSubMenu(null)} className="text-white"><ChevronLeft size={28}/></button>
          <h2 className="text-bizYellow font-black uppercase text-xl">Industries</h2>
        </div>
        <div className="p-4 h-[calc(100%-100px)] overflow-y-auto custom-scrollbar">
          {industries.map(i => (
            <Link 
              key={i.slug} 
              to={`/blog/${i.slug}`} 
              className={`block p-3 text-sm font-bold border-b border-gray-50 dark:border-gray-800 capitalize ${isActive(`/blog/${i.slug}`) ? 'text-bizRed' : 'text-bizBlue dark:text-bizYellow'}`}
            >
              {i.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

// Helper Component
function MobileLink({ to, label, active }) {
  return (
    <Link 
      to={to} 
      className={`block p-4 font-black uppercase border-b border-gray-100 dark:border-gray-800 transition-colors ${active ? 'text-bizRed bg-bizYellow/5' : 'text-bizBlue dark:text-bizYellow hover:bg-bizYellow/10'}`}
    >
      {label}
    </Link>
  );
}

export default Navbar;
