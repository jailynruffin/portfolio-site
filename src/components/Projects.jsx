import React from 'react';
import { useState } from 'react';
import MotivateMeDemo from '../assets/MotivateMeDemo.mp4';

import './Projects.css';

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const projects = [
    {
      title: "MotivateMe",
      description: "A mobile app for journaling and tracking biometrics. Built using React Native, Firebase, and Expo. Created as a senior capstone project for a real-world client.",
      github: null,
      demo: "modal", 
    },
    {
      title: "The Quote App",
      description: "A web app where users can share, save, and comment on inspirational quotes. Built with React + Firestore.",
      github: "https://github.com/jailynruffin/quote-app-frontend",
      demo: null,
    },
    {
      title: "Palette Generator",
      description: "A pastel-themed color palette generator built with React with the ability to create palettes using color harmony modes.",
      github: "https://github.com/jailynruffin/palette-gen",
      demo: null, 
    },
    {
      title: "Portfolio Website",
      description: "This very site! Built with React, AOS animations, and custom styling — clean, personal, and modern.",
      github: "https://github.com/jailynruffin/portfolio-site",
      demo: "self",
    },
  ];

  return (
    <section className="projects">
      <h2 data-aos="fade-up">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              ) : (
                <span className="link-disabled" title="Private repo – available on request">Private Repo 🔒</span>
              )}
              {project.demo === "self" ? (
                <span className="link-disabled secondary" title="You’re already here!">You’re on it! ✨</span>
                ) : project.demo === "modal" ? (
                  <button className="demo-btn" onClick={() => setShowModal(true)}>Live Demo</button>
                ) : project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer" className="secondary">Live Demo</a>
                ) : (
                <span className="link-disabled secondary" title="Demo coming soon">Demo Coming Soon!</span>
                )}
            </div>
          </div>
        ))}
      </div>
      {showModal && (
      <div className="video-modal" onClick={() => setShowModal(false)}>
        <div className="video-wrapper" onClick={e => e.stopPropagation()}>
          <video controls autoPlay>
            <source src={MotivateMeDemo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
        </div>
      </div>
    )}
    </section>
  );
}
