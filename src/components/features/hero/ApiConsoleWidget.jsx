import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ApiConsoleWidget.module.css";

const TABS = ["api", "db", "auth"];

export default function ApiConsoleWidget() {
  const [tab, setTab] = useState("api");
  const [phase, setPhase] = useState("typing"); 
  const [ms, setMs] = useState(0);
  const timerRef = useRef(null);

  const requestLine = useMemo(() => {
    if (tab === "api") return "GET /api/health";
    if (tab === "db") return "DESCRIBE entries;";
    return "Decode JWT";
  }, [tab]);

  const payload = useMemo(() => {
    if (tab === "api") {
      return { status: 200, timeMs: 128, data: { message: "Hello from /api/health", uptime: "12h 31m" } };
    }
    if (tab === "db") {
      return { schema: "public", tables: [
        { name: "users", columns: ["id uuid pk", "email text uniq", "created_at timestamptz"] },
        { name: "entries", columns: ["id uuid pk", "user_id uuid fk", "text text", "created_at timestamptz"] },
      ]};
    }
    return { alg: "HS256", payload: { sub: "user_123", role: "user", exp: 1735689600 } };
  }, [tab]);

  // typewriter + count-up badges + auto-rotate
  useEffect(() => {
    setPhase("typing"); setTyped(""); setMs(0);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    // type request line
    let i = 0;
    const typeInt = setInterval(() => {
      setTyped(requestLine.slice(0, i + 1));
      i++;
      if (i >= requestLine.length) {
        clearInterval(typeInt);
        // small pause, then show payload and count up ms
        setTimeout(() => {
          setPhase("showing");
          if (!reduce && tab === "api") {
            const target = payload.timeMs || 128;
            const t = setInterval(() => {
              setMs((v) => {
                if (v + 8 >= target) { clearInterval(t); return target; }
                return v + 8;
              });
            }, 24);
          }
        }, reduce ? 0 : 220);
      }
    }, reduce ? 0 : 28);

    // auto-rotate tabs
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTab((curr) => {
        const idx = TABS.indexOf(curr);
        return TABS[(idx + 1) % TABS.length];
      });
    }, 6000);

    return () => {
      clearInterval(typeInt);
      clearInterval(timerRef.current);
    };
  }, [requestLine, tab, payload]);

  return (
    <div className={styles.card} aria-label="Live console">
      <div className={styles.header}>
        <div className={styles.dots}><span/><span/><span/></div>
        <div className={styles.tabs}>
          {TABS.map((t) => (
            <button
              key={t}
              className={`${styles.tabBtn} ${tab === t ? styles.active : ""}`}
              onClick={() => setTab(t)}
              aria-selected={tab === t}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          className={styles.playBtn}
          title="Replay"
          onClick={() => setTab((prev) => prev)} /* retrigger effect */
        >
          ↺
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.requestLine}>
          <span className={styles.prompt}>$</span> {typed}
          <span className={styles.caret} aria-hidden="true" />
        </div>

        {phase === "showing" ? (
          <pre className={styles.code} data-lang="json">
            {JSON.stringify(payload, null, 2)}
          </pre>
        ) : (
          <div className={styles.skeleton} aria-hidden="true">
            <div className={styles.line} style={{ width: "80%" }} />
            <div className={styles.line} style={{ width: "62%" }} />
            <div className={styles.line} style={{ width: "72%" }} />
          </div>
        )}
      </div>

      <div className={styles.footer}>
        {tab === "api" && (
          <>
            <span className={styles.badgeOk}>200 OK</span>
            <span className={styles.badgeTime}>{ms || 0} ms</span>
          </>
        )}
        <button
          className={styles.copyBtn}
          onClick={() => navigator.clipboard?.writeText(requestLine)}
          title="Copy request"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
