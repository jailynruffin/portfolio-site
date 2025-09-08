import React from "react";
import styles from "./Projects.module.css";

export default function StatsBadge({ repo, meta }) {
  if (!repo || !meta || !meta[repo]) return null;
  const { stars, lastCommitISO } = meta[repo];
  const last = new Date(lastCommitISO);
  const pretty = last.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

  return (
    <div className={styles.stats} aria-label="Repository stats">
      <span title="GitHub stars">★ {stars}</span>
      <span aria-hidden>•</span>
      <span title="Last commit">{pretty}</span>
    </div>
  );
}
