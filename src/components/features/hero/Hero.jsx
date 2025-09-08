import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import ApiConsoleWidget from "./ApiConsoleWidget";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let ticking = false;

    const update = () => {
      const el = heroRef.current;
      if (!el) return;

      // Negative as you scroll down
      const y = el.getBoundingClientRect().top;

      // Tune these multipliers to taste
      el.style.setProperty("--p1", `${y * -0.10}px`);
      el.style.setProperty("--p2", `${y * -0.06}px`); 
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} full-bleed`}
      aria-labelledby="home-title"
    >
      <div className={styles.grid}>
        {/* LEFT: copy */}
        <div className={styles.left}>
          <p className={styles.kicker}>Jailyn Ruffin — Full-stack Engineer</p>

          <h1 id="home-title" className={styles.title}>
            I design interfaces and build the APIs behind them.
          </h1>

          <p className={styles.sub}>
            Clean UX, clear APIs, and reliable releases. React + TypeScript on the
            front; Node/Postgres on the back.
          </p>

          <div className={styles.ctaRow}>
            <a href="#work" className={styles.ctaPrimary}>View Work</a>
            <a href="#contact" className={styles.ctaSecondary}>Contact</a>
          </div>

          <div className={styles.capRow}>
            <div className={styles.capCard}>
              <div className={styles.capTitle}>UI Engineering</div>
              <ul className={styles.capList}>
                <li>Design systems & accessibility</li>
                <li>Complex state & forms</li>
              </ul>
            </div>
            <div className={styles.capCard}>
              <div className={styles.capTitle}>API & Data</div>
              <ul className={styles.capList}>
                <li>REST, auth, background jobs</li>
                <li>Relational modeling (Postgres)</li>
              </ul>
            </div>
            <div className={styles.capCard}>
              <div className={styles.capTitle}>Quality & DX</div>
              <ul className={styles.capList}>
                <li>Testing & CI</li>
                <li>Performance budgets</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: console */}
        <div className={styles.right}>
          <ApiConsoleWidget />
        </div>
      </div>
    </section>
  );
}
