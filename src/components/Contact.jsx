import React from 'react';
import { Mail, Linkedin, Calendar } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container" data-aos="fade-up">
        <h2>Let’s Connect</h2>
        <p>
          Open to freelance projects, new opportunities, or simply connecting — feel free to reach out!
        </p>
        <div className="contact-links">
          <a href="mailto:jailynmruffin@gmail.com" className="contact-button">
            <Mail size={18} className="icon" />
            <span>Email Me</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jailynruffin"
            target="_blank"
            rel="noreferrer"
            className="contact-button secondary"
          >
            <Linkedin size={18} className="icon" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://calendly.com/jailynmruffin"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            <Calendar size={18} className="icon" />
            <span>Calendly</span>
          </a>
        </div>
      </div>
    </section>
  );
}
