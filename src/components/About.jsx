import React from 'react';
import './About.css';
import profileImg from '../assets/Profile.png';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-left" data-aos="fade-right">
        <img src={profileImg} alt="Jailyn Ruffin headshot" className="about-photo" />
        </div>

        <div className="about-right" data-aos="fade-left">
          <h2>About Me</h2>
          <p>
            I'm a Computer Science senior with a passion for front-end development, modern design systems, and building
            projects that feel just as good as they look. I care deeply about clean code, intuitive user experiences, and always learning new things.
          </p>

          <div className="highlights">
            <div className="highlight-card">
              <h4>✨ Detail-Oriented</h4>
              <p>I focus on clean code and pixel-perfect layouts, always polishing the small things that make a big impact.</p>
            </div>
            <div className="highlight-card">
              <h4>🧠 Growth Mindset</h4>
              <p>From school to self-taught tools, I'm always expanding my skillset with real-world projects and modern stacks.</p>
            </div>
            <div className="highlight-card">
              <h4>💻 Full-Stack Ready</h4>
              <p>I love front-end work but also enjoy working with APIs, auth, and building fully functional app experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
