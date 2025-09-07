import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/features/hero/Hero';
import About from '../components/features/about/About';
import Skills from '../components/features/skills/Skills';
import Projects from '../components/features/projects/Projects';
import Contact from '../components/features/contact/Contact';
import Footer from '../components/layout/Footer';
import LoadingScreen from "../components/features/loading/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen onFinish={() => setLoading(false)} />;

  return (
    <div>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer /></section>
    </div>
  );
}

export default App;
