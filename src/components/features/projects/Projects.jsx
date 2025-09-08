// src/components/features/projects/Projects.jsx
import React, { useMemo, useRef, useState, useEffect } from "react";
import styles from "./Projects.module.css";
import { projects, PROJECT_TAGS } from "./projects.data";

export default function Projects() {
  // --- filters (tabs) ---
  const FILTERS = useMemo(() => ["all", ...PROJECT_TAGS], []);
  const [active, setActive] = useState("all");
  const visible = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => (p.categories || []).includes(active)),
    [active]
  );

  const [modalProject, setModalProject] = useState(null);

  return (
    <section className={`${styles.section} full-bleed bg-grid`} aria-labelledby="work-title">
      <div className={styles.header}>
        <h2 id="work-title" className={styles.title}>Selected Work</h2>
        <p className={styles.subtitle}>
          Real apps, shipped to users | Case studies in UI, APIs, and delivery.
        </p>

        {/* filter chips */}
        <div className={styles.filters} role="tablist" aria-label="Work filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              tabIndex={active === f ? 0 : -1}
              className={`${styles.filterChip} ${active === f ? styles.filterChipActive : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* grid */}
      <div className={styles.grid}>
        {visible.map((p) => (
          <article key={p.id} className={styles.card}>
            <PreviewPane
              p={p}
              onOpen={() => p.preview && setModalProject(p)}
            />
            <div className={styles.body}>
              {p.role && <div className={styles.role}>{p.role}</div>}
              <h3 className={styles.cardTitle}>{p.title}</h3>

              {p.bullets?.length ? (
                <ul className={styles.bullets}>
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}

              {!!p.badges?.length && (
                <div className={styles.badges}>
                  {p.badges.map((b, i) => (
                    <span key={i} className={styles.badge}>{b}</span>
                  ))}
                </div>
              )}

              {!!p.tags?.length && (
                <div className={styles.tags}>
                  {p.tags.map((t, i) => (
                    <span key={i} className={styles.tag}>{t}</span>
                  ))}
                </div>
              )}

              {!!p.links?.length && (
                <div className={styles.links}>
                  {p.links.map((l, i) => (
                    <a
                      key={i}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.linkBtn}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {modalProject && (
        <VideoModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
}


function PreviewPane({ p, onOpen }) {
  const vRef = React.useRef(null);
  const hovering = React.useRef(false);   // guard flag
  const playTimer = React.useRef(null);

  const onEnter = () => {
    hovering.current = true;


    clearTimeout(playTimer.current);
    playTimer.current = setTimeout(() => {
      if (!hovering.current) return;
      const v = vRef.current;
      if (!v) return;

      v.currentTime = 0;
      v.muted = true;


      const playPromise = v.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    }, 80);
  };

  const onLeave = () => {
    hovering.current = false;
    clearTimeout(playTimer.current);
    const v = vRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return !p.preview ? (
    <div className={`${styles.preview} ${styles.placeholder}`}>
      <span className={styles.dashedChip}>Demo coming soon</span>
    </div>
  ) : (
    <button
      type="button"
      className={`${styles.preview} ${styles.hasMedia}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onOpen}
      aria-label={`Open ${p.title} demo`}
    >
      <video
        ref={vRef}
        src={p.preview.src}
        muted
        loop
        playsInline
        preload="metadata"  
        className={styles.media}
      />
      <span className={styles.hint}>hover preview</span>
    </button>
  );
}



function VideoModal({ project, onClose }) {
  const vRef = useRef(null);

  useEffect(() => {
    vRef.current?.play();
    return () => vRef.current?.pause();
  }, []);

  return (
    <div className={styles.modalBackdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">×</button>
        <video
          ref={vRef}
          src={project.preview?.src}
          controls
          playsInline
          className={styles.modalVideo}
        />
      </div>
    </div>
  );
}
