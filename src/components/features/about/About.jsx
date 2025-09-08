// src/components/features/about/About.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import profile from "../../../assets/IMG_1303.jpg";

const chips = [
  { label: "2 full-stack apps shipped" },
  { label: "0 production incidents" },
  { label: "CI/CD + performance budgets" },
];

const timeline = [
  {
    range: "2025 — Present",
    title: "Full-stack Engineer · Freelance / Contract",
    bullets: [
      "Design and ship React/TypeScript UI with a11y and design system rigor.",
      "Own Node/Express APIs with auth, background jobs, and PostgreSQL.",
      "Keep releases fast & safe with CI/CD, observability, and perf budgets."
    ],
    tags: ["React", "TypeScript", "Node", "PostgreSQL", "Auth", "CI/CD"],
  },
  {
    range: "2024 — 2025",
    title: "Frontend Engineer · Product & UI Engineering",
    bullets: [
      "Built reusable component libraries with tokens & theming.",
      "Led UX polish: motion, micro interactions, responsive layouts.",
      "Partnered tightly with design to deliver pixel accurate interfaces."
    ],
    tags: ["Design Systems", "a11y", "Motion", "Figma", "Testing Library"],
  },
  {
    range: "2023 — 2024",
    title: "Mobile & Platform · React Native + Spring Boot",
    bullets: [
      "Shipped secure journaling flows with audit trails and role based access.",
      "Realtime features delivered to pilot users with uptime targets.",
      "End-to-end ownership from requirements → deploy."
    ],
    tags: ["React Native", "Spring Boot", "Security", "Delivery"],
  },
  {
    range: "2021 — 2023",
    title: "Foundations · Self-directed & coursework",
    bullets: [
      "Deep focus on web fundamentals: JS, CSS, HTTP, performance.",
      "Projects to harden skills: APIs, auth, data modeling, testing.",
      "Documented learnings; iterated on craft and portfolio."
    ],
    tags: ["JavaScript", "CSS", "APIs", "Testing", "Perf"],
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const [ioReady, setIoReady] = useState(false);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    // Select all reveal targets inside this section
    const targets = root.querySelectorAll('[data-io="target"]');

    // If IntersectionObserver is missing, just show everything
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add(styles.revealed));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.revealed);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, root: null, rootMargin: "0px 0px -10% 0px" }
    );

    targets.forEach((el) => io.observe(el));

    // Only *after* the IO is wired up, mark container as JS-ready
    setIoReady(true);

    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} full-bleed`}
      aria-labelledby="about-title"
    >
      <div className={styles.headerWrap}>
        <h1 id="about-title" className={styles.title}>About Me</h1>
        <p className={styles.kicker}>
          Full-stack engineer focused on <strong>clarity, velocity, and reliability</strong>. I craft
          interfaces that feel effortless and APIs that are observable and safe. Known for pragmatic
          decision making, a11y first UI, production polish, and shipping on schedule.
        </p>
      </div>

      <div className={styles.topGrid}>
        {/* Profile card */}
        <aside className={styles.profileCard}>
          <div className={styles.avatar}>
            <img src={profile} alt="Jailyn Ruffin portrait" />
          </div>
          <div className={styles.profileBody}>
            <div className={styles.profileName}>Jailyn Ruffin - Full-Stack Engineer</div>
          </div>
        </aside>

        {/* Intro + badges */}
        <div className={styles.intro}>
          <p>
           I work across the stack, React and TypeScript on the front end, 
           Node and Postgres on the back. 
           I pay attention to accessibility and thoughtful design, 
           and I focus on keeping data flows straightforward, secure, 
           and easy to monitor so projects run smoothly without surprises.
          </p>

          <div className={styles.badges}>
            {chips.map((c, i) => (
              <span key={i} className={styles.badge}>{c.label}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Career timeline */}
      <div
        className={styles.timelineWrap}
        role="list"
        data-io-ready={ioReady ? "true" : "false"}
      >
        <div className={styles.timelineAxis} aria-hidden="true" />
        <div className={styles.axisPulse} aria-hidden="true" />

        {timeline.map((item, i) => (
          <article
            key={i}
            role="listitem"
            data-io="target"
            className={`${styles.tlItem} ${styles.willReveal} ${i % 2 ? styles.right : styles.left}`}
          >
            <div className={styles.range}>{item.range}</div>
            <div className={styles.card}>
              <h3 className={styles.role}>{item.title}</h3>
              <ul className={styles.bullets}>
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {item.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
