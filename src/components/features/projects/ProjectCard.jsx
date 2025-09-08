import React, { useRef, useState } from "react";
import styles from "./Projects.module.css";


export default function ProjectCard({ project }) {
  const {
    title, role, bullets = [], badges = [], tags = [],
    preview, links = {}
  } = project;

  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);
  const isVideo = preview?.kind === "video" && preview?.src;

  const handleMouseEnter = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };
  const handleMouseLeave = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className={styles.card}>
      {/* PREVIEW */}
      <div
        className={styles.preview}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => isVideo && setOpen(true)}
        role={isVideo ? "button" : undefined}
        aria-label={isVideo ? "Open video preview" : undefined}
      >
        {isVideo ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={preview?.poster}
            src={preview?.src}
          />
        ) : preview?.src ? (
          <img src={preview.src} alt={preview.alt || `${title} preview`} />
        ) : null}

        <button
          type="button"
          className={styles.previewBtn}
          onClick={(e) => { e.stopPropagation(); if (isVideo) setOpen(true); }}
        >
          hover preview
        </button>
      </div>

      {/* BODY */}
      <div className={styles.body}>
        <p className={styles.kicker}>{role}</p>
        <h3 className={styles.title}>{title}</h3>

        {!!bullets.length && (
          <ul className={styles.bullets}>
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}

        {!!badges.length && (
          <div className={styles.badges}>
            {badges.map((b, i) => (
              <span className={styles.badge} key={i}>{b}</span>
            ))}
          </div>
        )}

        {!!tags.length && (
          <div className={styles.tags}>
            {tags.map((t, i) => (
              <span className={styles.chip} key={i}>{t}</span>
            ))}
          </div>
        )}

        <div className={styles.actions}>
          {links.case && (
            <a className={`${styles.btn} ${styles.btnPrimary}`} href={links.case} target="_blank" rel="noreferrer">Case study</a>
          )}
          {links.github && (
            <a className={`${styles.btn} ${styles.btnGhost}`} href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {links.live && (
            <a className={`${styles.btn} ${styles.btnGhost}`} href={links.live} target="_blank" rel="noreferrer">Live</a>
          )}
        </div>
      </div>

      {/* MODAL */}
      {open && isVideo && (
        <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>{title}</div>
              <button className={styles.modalClose} onClick={() => setOpen(false)} aria-label="Close">×</button>
            </div>
            <div className={styles.modalBody}>
              <video controls autoPlay playsInline>
                <source src={preview.src} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
