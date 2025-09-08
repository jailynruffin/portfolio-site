import React, { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";

const CORE_STACK = [
  { name: "React",           level: "expert"   },
  { name: "TypeScript",      level: "expert"   },
  { name: "Node.js",         level: "advanced" },
  { name: "PostgreSQL",      level: "advanced" },
  { name: "React Native",    level: "advanced" },
  { name: "Firebase / Auth", level: "advanced" },
];

const LEVEL_LABEL = { expert: "Expert", advanced: "Advanced" };

const GROUPS = {
  // Front-end & UI
  "Front-end": [
    "React", "TypeScript", "JavaScript (ESNext)", "HTML5", "CSS3",
    "Next.js (basic)", "Vite", "Webpack (familiar)", "Babel (familiar)",
    "Tailwind CSS", "CSS Modules", "Sass / SCSS", "Styled-Components",
    "Framer Motion", "AOS", "Radix UI (familiar)", "Headless UI (familiar)",
    "React Router", "PWA / Service Workers (basic)", "Web Accessibility (WCAG)",
    "i18n (basic)", "Responsive UI", "Design Systems / Component APIs",
    "Charts (Recharts/Chart.js)", "D3 (basic)", "Three.js (basic)",
    "Performance profiling", "Code-splitting / lazy loading",
  ],

  // State/data on the client
  "State & Data (Web)": [
    "React Query / TanStack Query", "SWR", "Redux Toolkit (familiar)", "Zustand (familiar)",
    "Formik / React Hook Form", "Zod / Yup", "Immer (familiar)",
  ],

  // Back-end & APIs
  "Back-end & APIs": [
    "Node.js", "Express", "Fastify (familiar)", "NestJS (basic)",
    "REST APIs", "GraphQL (Apollo) (basic)", "tRPC (basic)",
    "WebSockets / Socket.IO", "OAuth2 / OIDC", "Passport.js",
    "Auth (JWT / Session)", "Input validation (Zod/Yup)",
    "Rate limiting / throttling", "CORS", "Security (OWASP) basics",
    "Stripe (payments) (basic)", "SendGrid/Twilio (basic)",
  ],

  // Data layer
  "Data Layer": [
    "PostgreSQL", "MySQL (familiar)", "SQLite (familiar)", "MongoDB", "Mongoose",
    "Prisma ORM", "TypeORM (basic)", "Supabase (basic)", "Redis (cache/queues)",
    "Elasticsearch (basic)", "Firestore / Realtime DB",
    "Data modeling", "Migrations / seeds",
  ],

  // Cloud & infra & delivery
  "Cloud / Infra / Delivery": [
    "Vercel", "Netlify (familiar)", "Railway", "Render (familiar)",
    "AWS (S3, Lambda, CloudFront) (basic)", "GCP (Cloud Run/Firestore) (basic)",
    "Docker", "Docker Compose", "Kubernetes (basic)", "Nginx (basic)",
    "CI/CD (GitHub Actions)", "GitLab CI (familiar)",
    "Monorepos (pnpm workspaces)", "Turborepo (familiar)",
  ],

  // Observability & ops
  "Observability & Ops": [
    "Logging (Winston/Pino)", "Sentry", "OpenTelemetry (basic)",
    "Metrics / Health checks", "Alerting (basic)",
  ],

  // Testing & quality
  "Testing & Quality": [
    "Jest", "React Testing Library", "Playwright (basic)", "Cypress (basic)",
    "ESLint", "Prettier", "Husky / lint-staged", "Commitlint (familiar)",
    "CI/CD (quality gates)", "Performance budgets", "Lighthouse",
  ],

  // Mobile
  "Mobile": [
    "React Native", "Expo", "Native modules (basic)",
    "App store deploy (basic)", "Push notifications (basic)",
  ],

  // Tooling & collaboration
  "Tooling & Collaboration": [
    "Git & GitHub", "npm / pnpm", "Storybook (basic)", "Figma",
    "Design tokens (basic)", "Notion", "Linear / Jira", "Conventional Commits",
    "Semantic Versioning", "Feature flags / A/B (basic)", "Analytics (GA4) (basic)",
  ],

  "Other Languages / Platforms": [
    "Java (Spring Boot) (familiar)", "Python (basic)", "Go (basic)",
    "Shell scripting (basic)",
  ],
};

export default function Skills() {
  const barsRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Trigger the bar animation when the stack enters viewport
  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className={`${styles.section} full-bleed`} aria-labelledby="skills-title">
      <div className={styles.header}>
        <h2 id="skills-title" className={styles.title}>Technical Skills</h2>
        <p className={styles.subtitle}>
          A pragmatic full-stack focus: clean UI, reliable APIs, and delivery.
        </p>
      </div>

      {/* Core stack with animated bands */}
      <div ref={barsRef} className={`${styles.core} ${inView ? styles.inView : ""}`}>
        <h3 className={styles.groupTitle}>Core Stack</h3>
        <div className={styles.bars}>
          {CORE_STACK.map((s) => (
            <div key={s.name} className={styles.barRow}>
              <span className={styles.barLabel}>{s.name}</span>
              <div className={styles.track} aria-hidden="true">
                <span className={`${styles.fill} ${styles[s.level]}`} />
              </div>
              <span className={`${styles.levelTag} ${styles[`tag_${s.level}`]}`}>
                {LEVEL_LABEL[s.level]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skill groups */}
      <div className={styles.cards}>
        {Object.entries(GROUPS).map(([title, items]) => (
          <div key={title} className={styles.card}>
            <h4 className={styles.cardTitle}>{title}</h4>
            <div className={styles.chips}>
              {items.map((t) => (
                <span className={styles.chip} key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
