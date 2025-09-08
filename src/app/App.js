import React, { useEffect, useState, useMemo } from "react";
import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/animations.css";
import "../styles/utilities.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/layout/Navbar";

// Views
import Hero from "../components/features/hero/Hero";
import About from "../components/features/about/About";
import Skills from "../components/features/skills/Skills";
import Projects from "../components/features/projects/Projects";
import Contact from "../components/features/contact/Contact";
import Footer from "../components/layout/Footer";
import LoadingScreen from "../components/features/loading/LoadingScreen";

const TABS = ["home", "work", "skills", "about", "contact"];

function App() {
  // Initialize from hash (/#work -> "work"), default "home"
  const initialTab = useMemo(() => {
    const hash = (window.location.hash || "").replace("#", "").toLowerCase();
    return TABS.includes(hash) ? hash : "home";
  }, []);

  const [activeTab, setActiveTab] = useState(initialTab);

  // ✅ AOS: init once
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  // ✅ AOS: refresh when tab changes so new view animates in
  useEffect(() => {
    AOS.refreshHard();
  }, [activeTab]);

  // Keep URL hash in sync & support back/forward buttons
  useEffect(() => {
    const onHashChange = () => {
      const hash = (window.location.hash || "").replace("#", "").toLowerCase();
      if (TABS.includes(hash)) setActiveTab(hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleTabChange = (next) => {
    if (next === activeTab) return;
    window.location.hash = next; // updates hash and triggers onHashChange
    window.scrollTo({ top: 0, behavior: "auto" }); // 'auto' is standard
  };

  // Render exactly one view
  const renderView = () => {
    switch (activeTab) {
      case "home":
        return <Hero />;
      case "work":
        return <Projects />; // “Work” = your Projects view
      case "skills":
        return <Skills />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div>
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="container">
        {/* subtle fade on tab switch */}
        <div key={activeTab} className="view-fade">
          {renderView()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
