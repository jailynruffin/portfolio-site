import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';


export default function Hero() {
  const starContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const container = starContainerRef.current;
    if (!container) return;

    for (let i = 0; i < 60; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 10 + 10;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${5 + Math.random() * 10}s`;
      star.style.backgroundColor = "hotpink"; // debug color
      container.appendChild(star);
    }
  }, []);


  return (
    <section className="hero">
      <div className="star-background" ref={starContainerRef}></div> 
      <div className="hero-content">
        <h1 data-aos="fade-up">Hi, I’m Jailyn</h1>
        <h3 className="subtitle" data-aos="fade-up" data-aos-delay="100">
           Frontend Developer · React · UI/UX · Full-Stack 
        </h3>
        <h2 data-aos="fade-up" data-aos-delay="200">
        I craft modern, intuitive interfaces that feel as good as they look.
        </h2>

        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
          <a href="#projects" className="cta-button">See My Work →</a>
          <a href="#contact" className="cta-button secondary">Let’s Connect</a>
        </div>
      </div>
    </section>
  );
}
