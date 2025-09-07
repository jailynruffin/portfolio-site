import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [active, setActive] = useState("hero");

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView();
  };

  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {links.map(({ id, label }) => (
          <li
            key={id}
            className={active === id ? 'active' : ''}
            onClick={() => handleClick(id)}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
