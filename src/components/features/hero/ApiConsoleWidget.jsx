import React, { useEffect, useRef, useState } from "react";
import styles from "./ApiConsoleWidget.module.css";

const EXAMPLES = [
  {
    cmd: `POST /api/goals\n{ "title": "Ship v1", "owner": "team-ui" }`,
    out: `{ "id": "gl_9f3", "status": "created", "owner": "team-ui" }`,
  },
  {
    cmd: `GET /api/entries?limit=3`,
    out: `[{ "id":"en_101", "mood":"focused" }, { "id":"en_102", "mood":"calm" }]`,
  },
  {
    cmd: `PATCH /api/users/me\n{ "theme": "light" }`,
    out: `{ "ok": true }`,
  },
];

export default function ApiConsoleWidget() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [showOut, setShowOut] = useState(false);
  const loopRef = useRef(null);

  useEffect(() => {
    const { cmd } = EXAMPLES[index];

    // Reset per cycle
    setTyped("");
    setShowOut(false);

    // Type the command one char at a time
    let i = 0;
    const typeSpeed = 18; // ms per char
    const tick = () => {
      if (i <= cmd.length) {
        setTyped(cmd.slice(0, i));
        i += 1;
        loopRef.current = setTimeout(tick, typeSpeed);
      } else {
        // After typing, show output after a beat
        loopRef.current = setTimeout(() => {
          setShowOut(true);
          // Hold, then go to next example
          loopRef.current = setTimeout(() => {
            setIndex((n) => (n + 1) % EXAMPLES.length);
          }, 1400);
        }, 250);
      }
    };

    tick();
    return () => {
      if (loopRef.current) clearTimeout(loopRef.current);
    };
  }, [index]);

  const copyRequest = () => {
    const text = `${EXAMPLES[index].cmd}`;
    navigator.clipboard?.writeText(text).catch(() => {});
  };

  return (
    <div className={styles.console} aria-label="API console demo">
      <div className={styles.header}>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.title}>api.demo</div>
        <div className={styles.headerSpacer} />
      </div>

      <div className={styles.body}>
        <pre className={styles.code} aria-live="polite">
{typed}
{showOut ? `\n\n// response\n${EXAMPLES[index].out}` : ""}
        </pre>
      </div>

      <div className={styles.footer}>
        <span className={styles.badgeOk}>200 OK</span>
        <span className={styles.badgeTime}>128 ms</span>
        <button className={styles.copyBtn} onClick={copyRequest}>
          Copy request
        </button>
      </div>
    </div>
  );
}
