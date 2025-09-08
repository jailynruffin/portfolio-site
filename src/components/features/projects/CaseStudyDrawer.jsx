// src/components/features/projects/CaseStudyDrawer.jsx
import React, { useEffect, useRef } from "react";
import styles from "./Projects.module.css";

export default function CaseStudyDrawer({ open, project, onClose }) {
  const backdropRef = useRef(null);
  const closeBtnRef = useRef(null);

  // lock scroll + focus hint
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <>
      <div ref={backdropRef} className={styles.drawerBackdrop} onClick={onClose} />
      <aside
        className={styles.drawer}
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cs-title"
      >
        <div className={styles.drawerHeader}>
          <h3 id="cs-title" style={{margin: 0}}>{project.title}</h3>
          <button ref={closeBtnRef} className={styles.close} aria-label="Close" onClick={onClose}>×</button>
        </div>
        <div className={styles.drawerBody}>
          <p style={{color: "var(--text-600)", marginTop: 0}}>{project.role}</p>

          <h4>Problem</h4>
          <p>{project.blurb[0]}</p>

          <h4>Approach</h4>
          <p>{project.blurb[1]}</p>

          <h4>Result</h4>
          <p>{project.blurb[2]}</p>

          {project.impact?.length ? (
            <>
              <h4>Impact</h4>
              <div style={{display: "flex", gap: 8, flexWrap: "wrap"}}>
                {project.impact.map((m,i) => <span key={i} className={styles.pill}>{m}</span>)}
              </div>
            </>
          ) : null}

          {project.tech?.length ? (
            <>
              <h4>Tech</h4>
              <div style={{display: "flex", gap: 6, flexWrap: "wrap", color: "var(--text-600)"}}>
                {project.tech.map((t,i) => <span key={i} className={styles.chip}>{t}</span>)}
              </div>
            </>
          ) : null}
        </div>
      </aside>
    </>
  );
}
