import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container" data-aos="fade-up">
        <h2>Let’s Connect</h2>
        <p>
          Whether you want to collaborate, ask questions, or just say hi — my inbox is always open.
        </p>
        <div className="contact-links">
          <a href="mailto:jailynmruffin@gmail.com" className="contact-button">
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/jailynruffin"
            target="_blank"
            rel="noreferrer"
            className="contact-button secondary"
          >
            LinkedIn
          </a>
          <a
            href="https://calendly.com/jailynmruffin"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            Calendly
          </a>
        </div>
      </div>
    </section>
  );
}
