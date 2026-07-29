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
    title: "React design system for multiple teams",
    clientLabel: "Multi-product platform",
    sector: "Design systems",
    role: "Lead frontend engineer",
    timeframe: "2019–2022 · Internal platform",
    evidenceLabel:
      "Reconstructed view. The original client code is confidential.",
    constraint:
      "Several teams needed to work independently, but UI and accessibility patterns were becoming inconsistent.",
    decision:
      "I shipped tokens, accessible components, documentation, and release automation as one versioned system.",
    summary:
      "I built a React component library, design tokens, and Storybook documentation to reduce repeated UI work. Accessibility rules were included in the component APIs.",
    stack: ["React", "TypeScript", "Storybook", "Style Dictionary", "Next.js"],
    outcomes: [
      "Adopted by 40% of new projects in its first year",
      "Reduced developer onboarding from days to hours",
      "Improved Lighthouse scores by up to 40% on migrated products",
    ],
  },
  {
    slug: "figma-pipeline",
    title: "Figma-to-code token pipeline",
    clientLabel: "Cross-platform workflow",
    sector: "Automation",
    role: "Design systems engineer",
    timeframe: "2024–Present · Client project",
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
      "Shipped token updates with zero regressions after rollout",
    ],
  },
  {
    slug: "frontend-platform",
    title: "Frontend platform for a growing team",
    clientLabel: "Frontend team platform",
    sector: "Frontend platform",
    role: "Lead engineer",
    timeframe: "2019–2022 · Team platform",
    evidenceLabel:
      "Reconstructed dependency map. The original architecture is confidential.",
    constraint:
      "The team was losing time with duplicated tooling, slow builds, and different project setups.",
    decision:
      "I moved shared packages and build tooling into a monorepo while keeping each application independently deployable.",
    summary:
      "I moved shared components, tooling, and build configuration into a monorepo. This reduced build time and gave every project the same setup.",
    stack: ["Nx", "React", "Next.js", "TypeScript", "CI/CD"],
    outcomes: [
      "Reduced build times by 70% across active projects",
      "Supported team growth from 3 to 8 engineers",
      "Eliminated repeated UI work through shared foundations",
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
    "Built the admin, booking, payment, and notification flows",
    "Maintain the product and handle production support",
  ],
  href: "https://motiondeck.fit",
};

export const capabilities: Capability[] = [
  {
    title: "Product engineering",
    summary:
      "I build product features across the UI, APIs, and data layer.",
    items: [
      "React, Next.js, Vue, and TypeScript",
      "API integrations, serverless data, auth, and payments",
      "State management, loading, errors, and async flows",
      "Feature work from planning to production",
    ],
  },
  {
    title: "Design systems",
    summary:
      "I build shared components, tokens, documentation, and tools for designers and developers.",
    items: [
      "Component API and token architecture",
      "Storybook documentation and contribution rules",
      "Figma-to-code automation",
      "Web, iOS, and Android release workflows",
    ],
  },
  {
    title: "Accessibility and performance",
    summary:
      "I include accessibility and performance requirements in the implementation and CI.",
    items: [
      "WCAG 2.2 AA reviews and fixes",
      "Keyboard, screen reader, and reduced-motion support",
      "Core Web Vitals and bundle optimization",
      "Automated tests, CI checks, and monitoring",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Product stack",
    items: ["React", "Next.js", "Vue", "TypeScript", "Convex", "GraphQL", "REST"],
  },
  {
    title: "Systems",
    items: [
      "Storybook",
      "Style Dictionary",
      "Design Tokens",
      "Figma API",
      "WCAG",
    ],
  },
  {
    title: "Delivery",
    items: ["Nx", "Vite", "CI/CD", "Core Web Vitals", "Monorepos"],
  },
];

export const about: AboutContent = {
  narrative: [
    "I started as a frontend developer, working close to design. Over time I moved into design systems, frontend architecture, APIs, and data.",
    "I am most useful when a problem needs both design and engineering: a shared component library, accessibility fixes, slow builds, or a feature with frontend and backend work.",
    "I work remotely from Ecuador with teams in the Americas and other regions. I speak English and Spanish.",
  ],
  sasNote:
    "Building Motion Deck gives me direct experience with product decisions, user feedback, support, and production issues.",
};
