import React from 'react';
import './Skills.css';

export default function Skills() {
    const skills = [
        { name: "JavaScript", icon: "🧠" },
        { name: "TypeScript", icon: "📘" },
        { name: "React", icon: "⚛️" },
        { name: "React Native", icon: "📱" },
        { name: "HTML & CSS", icon: "🧩" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Firebase", icon: "🔒" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Node.js", icon: "🌱" },
        { name: "Express", icon: "🚂" },
        { name: "Git & GitHub", icon: "☁️" },
        { name: "Figma", icon: "🎨" },
        { name: "npm", icon: "📦" },
      ];

  return (
    <section className="skills">
      <h2 data-aos="fade-up">My Skills</h2>
      <div className="skills-grid" data-aos="fade-up" data-aos-delay="100">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
