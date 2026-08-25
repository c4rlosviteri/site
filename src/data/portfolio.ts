import type {
  Engagement,
  SupportingWork,
  Capability,
  SkillCategory,
  AboutContent,
} from "./types";

export const engagements: Engagement[] = [
  {
    slug: "react-design-system",
    title: "Scalable Cedar Design System refactor",
    clientLabel: "REI Cedar Project",
    sector: "Design systems",
    role: "Senior Web UI Engineer — Contractor",
    timeframe: "2024–Present · REI",
    evidenceLabel:
      "Reconstructed view. The production implementation is confidential.",
    constraint:
      "Cedar needed a token architecture that could scale across web, iOS, and Android without duplicated values or platform drift.",
    decision:
      "I refactored the design system and Style Dictionary pipeline around reusable semantic tokens and clearer platform boundaries.",
    summary:
      "I refactored the Cedar Design System into a scalable architecture that improves token reuse, reduces duplication, and supports consistent delivery across platforms.",
    stack: [
      "React",
      "TypeScript",
      "Storybook",
      "Style Dictionary",
      "Figma API",
      "GitHub Actions",
    ],
    outcomes: [
      "Improved token reuse across web, iOS, and Android",
      "Reduced duplication through a scalable token architecture",
      "Reduced unnecessary rerenders across REI experiences",
    ],
  },
  {
    slug: "figma-pipeline",
    title: "Figma-to-code token pipeline",
    clientLabel: "REI Cedar Project",
    sector: "Automation",
    role: "Senior Web UI Engineer — Contractor",
    timeframe: "2024–Present · REI",
    evidenceLabel:
      "Reconstructed workflow. The production code is confidential.",
    constraint:
      "Token changes were shared manually and often became different across web, iOS, and Android.",
    decision:
      "I converted each token change into validated platform packages released through CI.",
    summary:
      "I built a pipeline that converts Figma tokens into versioned packages for web, iOS, and Android. Validation and CI made each change reviewable and repeatable.",
    stack: ["Figma API", "TypeScript", "Style Dictionary", "GitHub Actions"],
    outcomes: [
      "Reduced token delivery from days to minutes",
      "Kept web, iOS, and Android tokens in sync",
      "Made token changes reviewable through validation and CI",
    ],
  },
  {
    slug: "frontend-platform",
    title: "Frontend platform for a growing team",
    clientLabel: "Verndale",
    sector: "Frontend platform",
    role: "Lead Front End Engineer",
    timeframe: "2019–2022 · Verndale",
    evidenceLabel:
      "Reconstructed dependency map. The original architecture is confidential.",
    constraint:
      "The team was losing time with duplicated tooling, slow builds, and different project setups.",
    decision:
      "I moved shared packages and build tooling into a monorepo while keeping each application independently deployable.",
    summary:
      "I directed frontend architecture for new builds and legacy modernization, unifying shared components, tooling, documentation, and delivery workflows.",
    stack: ["Nx", "React", "Next.js", "TypeScript", "Git", "CI/CD"],
    outcomes: [
      "Supported team growth from 3 to 8 engineers",
      "Eliminated repeated UI work through shared foundations",
      "Established documentation and async-friendly workflows",
    ],
  },
];

export const saas: SupportingWork = {
  title: "Motion Deck",
  summary:
    "I built Motion Deck, a management platform for gyms and studios. I work on the product UI, backend, data model, authentication, payments, notifications, and production support.",
  role: "Founder & full-stack engineer",
  timeframe: "Founder and engineer · Live product",
  stack: ["Next.js", "TypeScript", "Convex", "Polar", "Resend"],
  outcomes: [
    "Launched v1.0 and onboarded more than 10 studios",
    "Built scheduling, membership, payment, and notification flows",
    "Established spec-driven development with T3 Code and coding agents",
  ],
  href: "https://motiondeck.fit",
};

export const capabilities: Capability[] = [
  {
    title: "Frontend & full-stack engineering",
    summary:
      "I build production web and mobile products across the UI, APIs, and data layer.",
    items: [
      "React, Next.js, Vue, Nuxt, React Native, and Expo",
      "TypeScript, JavaScript, Node.js, Convex, REST APIs, and SQL",
      "Authentication, payments, data modeling, and async flows",
      "Linux, Git, CI/CD, and end-to-end product delivery",
    ],
  },
  {
    title: "Design systems & performance",
    summary:
      "I build scalable component systems and improve the rendering paths that power them.",
    items: [
      "Component API and token architecture",
      "Storybook, Style Dictionary, Figma API, and Tailwind",
      "WCAG 2.1 AA and accessible interaction patterns",
      "Core Web Vitals, bundle analysis, and render optimization",
    ],
  },
  {
    title: "AI-assisted engineering",
    summary:
      "I design repeatable AI-assisted workflows that improve implementation, review, and debugging.",
    items: [
      "OpenAI Codex, Claude, and Cursor",
      "Reusable skills for project-specific workflows",
      "Model Context Protocol integrations",
      "Spec-driven development with T3 Code",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Full-stack",
    items: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Convex",
      "REST APIs",
      "SQL",
      "Linux",
      "Git",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue", "Nuxt", "React Native", "Expo"],
  },
  {
    title: "Design systems",
    items: [
      "Storybook",
      "Style Dictionary",
      "Figma API",
      "Tailwind",
      "WCAG 2.1 AA",
      "Token Architecture",
    ],
  },
  {
    title: "Platform & testing",
    items: [
      "Nx Monorepo",
      "Vite",
      "Webpack",
      "GitHub Actions",
      "Jest",
      "Vitest",
      "Cypress",
      "CI/CD",
    ],
  },
  {
    title: "Performance",
    items: [
      "Core Web Vitals",
      "Lighthouse",
      "Bundle Analysis",
      "Render Optimization",
      "Code Splitting",
    ],
  },
  {
    title: "AI-assisted",
    items: [
      "OpenAI Codex",
      "Claude",
      "Cursor",
      "T3 Code",
      "MCP",
      "Spec-Driven Development",
    ],
  },
];

export const about: AboutContent = {
  narrative: [
    "For 9+ years, I have grown from frontend implementation into design systems, architecture, APIs, data, and end-to-end product delivery.",
    "On the REI Cedar Project, I focus on scalable design-system architecture, efficient token reuse, cross-platform automation, and frontend performance—including reducing unnecessary rerenders.",
    "I also create reusable AI skills and MCP integrations for project workflows, and I use spec-driven development with T3 Code for my personal products.",
    "I work remotely from Ecuador with teams in the Americas and other regions. I speak English and Spanish.",
  ],
  sasNote:
    "Building Motion Deck gives me direct experience with product decisions, user feedback, production support, and AI-assisted delivery from specification to release.",
};
