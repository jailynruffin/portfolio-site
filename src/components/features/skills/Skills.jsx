import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills">
      <h2 data-aos="fade-up">Technical Skills</h2>

      <div className="skill-section" data-aos="fade-up" data-aos-delay="100">
        <h3 className="glistening-title">Front-End</h3>
        <ul className="inline-skill-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>Tailwind CSS</li>
          <li>Responsive Design</li>
        </ul>
      </div>

      <div className="skill-section" data-aos="fade-up" data-aos-delay="200">
        <h3 className="glistening-title">Back-End</h3>
        <ul className="inline-skill-list">
          <li>Node.js</li>
          <li>Express</li>
          <li>Firebase (Auth, Firestore)</li>
          <li>REST APIs</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
      </div>

      <div className="skill-section" data-aos="fade-up" data-aos-delay="300">
        <h3 className="glistening-title">Tools & Workflows</h3>
        <ul className="inline-skill-list">
          <li>Git & GitHub</li>
          <li>npm</li>
          <li>Vercel</li>
          <li>Figma</li>
          <li>Agile Development</li>
          <li>Debugging & Version Control</li>
        </ul>
      </div>
    </section>
  );
}

