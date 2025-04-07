import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000,
        once: true,
     });

  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 data-aos="fade-up">Hi, I’m Jailyn</h1>
        <h3 className="subtitle" data-aos="fade-up" data-aos-delay="100">
           Frontend Developer | Skilled in React | UI/UX, and full-stack project development
        </h3>
        <h2 data-aos="fade-up" data-aos-delay="200">
          I build beautiful, responsive web experiences with React.
        </h2>
        <p data-aos="fade-up" data-aos-delay="300">
          Currently a Computer Science senior passionate about turning designs into seamless, intuitive interfaces.
          I focus on clean code, smooth animations, and a sprinkle of personality in everything I build.
        </p>

        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
          <a href="#projects" className="cta-button">See My Work →</a>
          <a href="#contact" className="cta-button secondary">Let’s Connect</a>
        </div>
      </div>
    </section>
  );
}
