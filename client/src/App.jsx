import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Components ---
import Navbar from "./components/Navbar";

// --- Pages ---
import Home from "./pages/Home";
import Magazine from "./pages/Magazine";
import Services from "./pages/Services";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

// service pages
import PrintMarketing from "./services/PrintMarketing";
import OutdoorVisibility from "./services/OutdoorVisibility";
import ExperientialPR from "./services/ExperientialPR";
import BrandIdentity from "./services/BrandIdentity";

// --- Blog Pages ---
import Agriculture from "./pages/blog/Agriculture";
import Construction from "./pages/blog/Construction";
import Energy from "./pages/blog/Energy";
import Finance from "./pages/blog/Finance";
import Healthcare from "./pages/blog/Healthcare";
import Manufacturing from "./pages/blog/Manufacturing";
import RealEstate from "./pages/blog/RealEstate";
import Retail from "./pages/blog/Retail";
import Technology from "./pages/blog/Technology";
import Trade from "./pages/blog/Trade";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main className="pt-20">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us-2" element={<Contact />} />

          {/* Service sub routes */}
          <Route path="/services/print-marketing" element={<PrintMarketing />} />
          <Route path="/services/pr-marketing" element={<ExperientialPR />} />
          <Route path="/outdoor-marketing" element={<OutdoorVisibility />} />
          <Route path="/branding" element={<BrandIdentity />} />

            {/* Blog / Industries Pages */}
            <Route path="/blog/agriculture" element={<Agriculture />} />
            <Route path="/blog/construction" element={<Construction />} />
            <Route path="/blog/energy" element={<Energy />} />
            <Route path="/blog/finance" element={<Finance />} />
            <Route path="/blog/healthcare" element={<Healthcare />} />
            <Route path="/blog/manufacturing" element={<Manufacturing />} />
            <Route path="/blog/real-estate" element={<RealEstate />} />
            <Route path="/blog/retail" element={<Retail />} />
            <Route path="/blog/technology" element={<Technology />} />
            <Route path="/blog/trade" element={<Trade />} />

            {/* Catch-all for 404 */}
            <Route
              path="*"
              element={
                <div className="text-center mt-40">
                  <h1 className="text-5xl font-black">404</h1>
                  <p className="text-xl mt-4">Page not found.</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
