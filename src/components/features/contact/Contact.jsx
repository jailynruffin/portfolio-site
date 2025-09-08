// src/components/features/contact/Contact.jsx
import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/jailynruffin/",
  calendly: "https://calendly.com/jailynmruffin",
};
const EMAIL = "jailynmruffin@gmail.com";

/* --------------------------- Stronger FAQ --------------------------- */
const FAQ_ITEMS = [
  {
    q: "Where do you create the most impact on a team?",
    a: "Shipping polished UI that users love, while keeping the delivery pipeline predictable. I remove friction between design and engineering, wire up clean APIs, add sensible tests, and keep scope moving without surprises. I’m comfortable owning a vertical slice end-to-end and being the person others unblock.",
  },
  {
    q: "What kinds of problems do you solve best?",
    a: "Design system engineering, high quality React/TypeScript UIs, accessible components, fast interactions, and reliable back ends (Node/Express, REST, PostgreSQL/Firebase). I’m strong at turning ambiguous goals into a pragmatic plan and making incremental progress visible.",
  },
  {
    q: "How do you work with designers and product?",
    a: "Tight feedback loops. I turn Figma files into real components with tokens, a11y, and motion. I surface edge cases early, propose micro interactions, and keep product in the loop with demos and check ins so what we ship matches intent.",
  },
  {
    q: "What’s your approach to code quality and velocity?",
    a: "Small, safe increments. Clear PRs, strong TypeScript types, component boundaries, and a few high value tests. CI/CD keeps releases safe; performance and accessibility budgets keep quality high without slowing delivery.",
  },
  {
    q: "Greenfield or legacy: where do you shine?",
    a: "Both. For greenfield I bootstrap quickly with a clear architecture and delivery rhythm. For legacy I reduce risk first (tests/CI), then decompose to unlock speed, often with a gradual migration plan that avoids big bang rewrites.",
  },
  {
    q: "Do you lead initiatives or mentor others?",
    a: "Yes. I’m comfortable scoping work, defining component APIs, setting standards, and mentoring junior devs through PRs and pairing. The goal is a codebase that more people can contribute to confidently.",
  },
  {
    q: "What’s your typical process after we connect?",
    a: "Intro call → short plan with approach/timeline → quick start. I prefer shipping the first useful slice fast (design system starter, API endpoint, or a single feature) so we establish momentum and confidence early.",
  },
  {
    q: "How do you handle performance and a11y?",
    a: "I treat them as first class citizens: semantic HTML, keyboard/reader support, motion preferences, and performance budgets. I spot regressions early and keep a running checklist so quality doesn't degrade.",
  },
  {
    q: "What tools and stack do you prefer?",
    a: "React, TypeScript, Node/Express, PostgreSQL/Firebase, Vercel/Railway, GitHub Actions, Jest/Testing Library, Storybook (when a DS is in play), Figma for handoff. I fit into your stack if it’s different.",
  },
  {
    q: "Security, privacy, and compliance, what do you keep in mind?",
    a: "Least privilege access, safe secrets, input validation, auth flows that don’t leak data, and auditing where appropriate. I keep things simple and review high-risk areas early.",
  },
  {
    q: "What’s your availability and response time?",
    a: "Central time. I reply within one business day, usually faster. I can align around critical meetings and get a small engagement started in 1–2 weeks depending on scope.",
  },
  {
    q: "Ownership & IP?",
    a: "For paid work, the client owns the code and deliverables. I’m happy to work in your repos, follow your governance, and document decisions so the team can run without me.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes. I’m used to NDAs and can provide one if needed.",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1300);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--contact-mounted", "1");
    return () =>
      document.documentElement.style.removeProperty("--contact-mounted");
  }, []);

  return (
    <section className={`${styles.section} full-bleed`} aria-labelledby="contact-title">
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h2 id="contact-title" className={styles.title}>Let’s Connect</h2>
          <p className={styles.subtitle}>
            Open to full-time roles, focused engagements, or quick chats about building excellent UI and reliable APIs.
          </p>
        </header>

        <div className={styles.ctas} role="group" aria-label="Contact actions">
          <button type="button" className={`${styles.btn} ${styles.primary}`} onClick={copyEmail}>
            <CopyIcon />
            Copy email
          </button>

          <a className={`${styles.btn} ${styles.ghost}`} href={LINKS.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon />
            LinkedIn
          </a>

          <a className={`${styles.btn} ${styles.ghost}`} href={LINKS.calendly} target="_blank" rel="noreferrer">
            <CalendarIcon />
            Calendly
          </a>
        </div>

        <p className={styles.note}>
          Prefer async? Email works best. Calendly is perfect for fast 15-minute project or role chats.
        </p>

        <FAQ items={FAQ_ITEMS} />

        <div className={`${styles.toast} ${copied ? styles.toastShow : ""}`} role="status" aria-live="polite">
          Email copied ✔
        </div>
      </div>

    </section>
  );
}

/* ----------------------------- FAQ UI ----------------------------- */
function FAQ({ items }) {
  return (
    <section className={styles.faq} aria-labelledby="faq-title">
      <h3 id="faq-title" className={styles.faqTitle}>FAQ</h3>
      <ul className={styles.faqList}>
        {items.map((item, i) => (
          <FAQItem key={i} id={`faq-${i}`} q={item.q} a={item.a} />
        ))}
      </ul>
    </section>
  );
}

function FAQItem({ id, q, a }) {
  const [open, setOpen] = useState(false);
  const panelId = `${id}-panel`;

  return (
    <li className={`${styles.faqItem} ${open ? styles.faqItemOpen : ""}`}>
      <button
        type="button"
        className={styles.faqBtn}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.faqQ}>{q}</span>
        <span className={styles.faqIcon} aria-hidden="true">
          <PlusMinusIcon open={open} />
        </span>
      </button>
      <div id={panelId} role="region" className={styles.faqPanel}>
        <p className={styles.faqA}>{a}</p>
      </div>
    </li>
  );
}

/* ----------------------------- Icons ------------------------------ */
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.94 7.5H3.56V20h3.38V7.5Zm.26-4.01a2.01 2.01 0 1 0-4.02 0a2.01 2.01 0 0 0 4.02 0ZM20.44 20H17.1v-6.45c0-1.54-.55-2.6-1.93-2.6c-1.06 0-1.69.71-1.97 1.39c-.1.24-.13.58-.13.92V20H9.69s.04-10.79 0-11.9h3.38v1.69c.45-.69 1.25-1.68 3.03-1.68c2.21 0 3.87 1.44 3.87 4.54V20Z"/>
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M7 2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v3H3V6a2 2 0 0 1 2-2h2V2Zm14 9v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7h18Zm-4 3h-4v4h4v-4Z"/>
    </svg>
  );
}
function CopyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10V1Zm3 4H10a2 2 0 0 0-2 2v16h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 18H10V7h9v16Z"/>
    </svg>
  );
}
function PlusMinusIcon({ open }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <g fill="currentColor" stroke="currentColor" strokeWidth="0">
        <rect x="4" y="11" width="16" height="2" rx="1" />
        <rect
          x="11"
          y="4"
          width="2"
          height="16"
          rx="1"
          style={{ opacity: open ? 0 : 1, transition: "opacity 160ms ease" }}
        />
      </g>
    </svg>
  );
}
