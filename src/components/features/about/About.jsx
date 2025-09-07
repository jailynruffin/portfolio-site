import React from 'react';
import './About.css';
import profileImg from '../assets/image.png';
import { Sparkles, Brain, Laptop2 } from 'lucide-react';


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
          I'm a front end and full stack developer who loves turning ideas into polished 
          digital experiences. Whether I'm styling a UI, integrating an API, or refining performance, 
          I care about building things that feel smooth, thoughtful, and well crafted.
          </p>

          <div className="highlights">
  <div className="highlight-card">
    <div className="icon-title">
      <Sparkles size={20} color="hotpink" />
      <h4>Detail Oriented</h4>
    </div>
    <p>I care about the polish! Spacing, layout, and 
      the finishing touches that elevate an interface
       from usable to delightful.</p>
  </div>

        <div className="highlight-card">
          <div className="icon-title">
            <Brain size={20} color="hotpink" />
            <h4>Growth Minded</h4>
          </div>
          <p>I’m always building, and always learning.
             Through projects, self taught tools, and whatever 
             it takes to keep improving.</p>
        </div>

        <div className="highlight-card">
          <div className="icon-title">
            <Laptop2 size={20} color="hotpink" />
            <h4>Full Stack</h4>
          </div>
          <p>I love front end work, but I’m just as comfortable wiring up APIs, 
            auth flows, and building fully functional product experiences.</p>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
}
