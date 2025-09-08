// src/components/features/projects/projects.data.js

import motivateMeMp4 from "../../../assets/MotivateMeDemo.mp4";


export const projects = [
  // ───────────────── Portfolio items ─────────────────

  {
    id: "motivateme",
    title: "MotivateMe",
    role: "Lead, full-stack",
    categories: ["mobile", "fullstack", "client"],
    bullets: [
      "Clinical journaling & biometrics pilot for UNTHSC.",
      "React Native + Spring Boot; auth, secure storage, audit logs.",
      "Deployed pilot with real-time entries and role-based access."
    ],
    badges: ["Deployed pilot", "0 prod incidents"],
    tags: ["React Native", "Spring Boot", "PostgreSQL", "Auth"],
    preview: { type: "video", src: motivateMeMp4, brand: "motivate" },
    links: [],
    date: "2025-06-21"
  },

  {
    id: "quote-app",
    title: "The Quote App",
    role: "Frontend + backend",
    categories: ["web", "fullstack", "open source"],
    bullets: [
      "Social quote threads with real-time updates.",
      "React + Firestore; auth, optimistic UI, moderation tools.",
      "Launched MVP and iterated on engagement features."
    ],
    badges: ["Realtime updates", "Auth/roles shipped"],
    tags: ["React", "Firestore", "Auth"],
    preview: null,
    links: [{ label: "GitHub", href: "https://github.com/jailynruffin/quote-app-frontend" }],
    date: "2025-01-15"
  },

  {
    id: "palette-gen",
    title: "Palette Generator",
    role: "Frontend",
    categories: ["web", "open source"],
    bullets: [
      "Color palette tool with harmony modes.",
      "Soft UI + fast interactions; keyboard accessible.",
      "Reusable color utilities and preview states."
    ],
    badges: ["Fast interactions"],
    tags: ["React"],
    preview: null,
    links: [{ label: "GitHub", href: "https://github.com/jailynruffin/palette-gen" }],
    date: "2025-07-05"
  },

  {
    id: "portfolio",
    title: "Portfolio Website",
    role: "Frontend",
    categories: ["web", "open source"],
    bullets: [
      "This site: responsive layout, custom design elements, soft animations.",
      "Built with React; deployed to Vercel."
    ],
    badges: [],
    tags: ["React", "AOS", "Vercel"],
    preview: null,
    links: [{ label: "GitHub", href: "https://github.com/jailynruffin/portfolio-site" }],
    date: "2025-01-01"
  },


  {
    id: "jaivo",
    title: "Jaivo (Freelancer Manager)",
    role: "Product engineer • full-stack",
    categories: ["web", "fullstack", "client"],
    bullets: [
      "Delivered a production-ready invoicing and client management platform with enterprise-grade security via Supabase RLS.",
      "Orchestrated polished, modern UX in React + TailwindCSS with interactive animations for a high-end SaaS feel.",
      "Designed and implemented relational models and CRUD pipelines in PostgreSQL for accurate financial tracking.",
      "Enabled scalable multi-client adoption with secure, multi-tenant data-access policies."
    ],
    badges: ["Multi-tenant", "Production-ready"],
    tags: ["React", "Supabase", "TailwindCSS", "PostgreSQL", "RLS", "Multi-tenant"],
    preview: null,
    links: [],
    date: "2024-12-01"
  },

  {
    id: "cloudtasker",
    title: "CloudTasker",
    role: "Full-stack engineer",
    categories: ["web", "fullstack", "cloud"],
    bullets: [
      "Built a task management web app with secure auth, task CRUD, and persistent PostgreSQL storage.",
      "Deployed Spring Boot services to AWS EC2 and integrated S3 for file storage to support scalable cloud performance.",
      "Developed a responsive React frontend wired to REST APIs, delivering real-time updates across devices.",
      "Automated testing and deployments via GitHub Actions CI/CD for rapid iteration and production reliability."
    ],
    badges: ["AWS", "CI/CD"],
    tags: ["AWS", "Spring Boot", "React", "PostgreSQL", "S3", "EC2", "CI/CD"],
    preview: null,
    links: [],
    date: "2024-10-10"
  },

  {
    id: "trndsttr",
    title: "TRNDSTTR",
    role: "Data engineer • analytics",
    categories: ["web", "data"],
    bullets: [
      "Built an interactive analytics dashboard to transform raw keyword data into real-time trend insights.",
      "Designed an ETL pipeline with Pandas and SQL for extraction, cleaning, aggregation, and visualization.",
      "Delivered custom Streamlit UI with time-series charts, filters, and KPI cards for stakeholder usability.",
      "Enabled data-driven decision-making via automated keyword tracking and reporting."
    ],
    badges: ["ETL", "KPI dashboard"],
    tags: ["Streamlit", "Python", "Pandas", "SQL", "ETL", "Analytics"],
    preview: null,
    links: [],
    date: "2024-08-15"
  },

  {
    id: "foundry-crm",
    title: "Palantir Foundry CRM Application",
    role: "Platform engineer • data modeling",
    categories: ["web", "data", "enterprise"],
    bullets: [
      "Engineered a CRM platform in Palantir Foundry by modeling Company and Person datasets with Ontology relationships.",
      "Developed directory and profile views with relational navigation, linking employees to companies in real time.",
      "Implemented CRM dashboards with metric cards and visualizations to surface key company insights.",
      "Improved organizational efficiency by centralizing data access into a scalable, relational framework."
    ],
    badges: ["Ontology", "Dashboards"],
    tags: ["Palantir Foundry", "Ontology", "Workshop", "CRM", "Dashboards"],
    preview: null,
    links: [],
    date: "2024-06-01"
  }
];


export const PROJECT_TAGS = Array.from(
  new Set(projects.flatMap((p) => p.categories || []))
).sort();
