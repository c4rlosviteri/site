import type {
  Engagement,
  SupportingWork,
  Capability,
  ExperienceItem,
  AboutContent,
} from "./types";

export const engagements: Engagement[] = [
  {
    slug: "huge-design-system",
    title: "Design System & Platform Engineering",
    clientLabel: "Huge",
    sector: "Design & Technology Agency",
    role: "Senior UI Engineer",
    timeframe: "2021 – Present",
    summary:
      "Built and evolved a shared design system that became the default foundation for new delivery work across the agency while modernizing large legacy applications.",
    stack: [
      "React",
      "Next.js",
      "Storybook",
      "Tailwind",
      "ContentStack",
      "TypeScript",
      "GraphQL",
    ],
    outcomes: [
      "20% of new projects adopted the design system, reducing onboarding time by roughly 30%",
      "Supported applications serving 100k+ active users with authentication, caching, and custom middleware",
      "Lifted Lighthouse performance scores by as much as 40% through focused legacy refactors",
      "Integrated ContentStack, Optimizely, and Adobe AEM via REST and GraphQL",
    ],
  },
  {
    slug: "rei-cedar",
    title: "Cedar Design System & Token Infrastructure",
    clientLabel: "REI",
    sector: "Outdoor Retail & E-Commerce",
    role: "Senior Web UI Engineer",
    timeframe: "2024 – Present",
    summary:
      "Expanded reusable Cedar components and automated the design-to-code workflow so design tokens and implementation stay aligned without manual hand-offs.",
    stack: ["Vue", "Style Dictionary", "Figma API", "TypeScript"],
    outcomes: [
      "Automated design-to-code workflow via Figma-to-GitHub sync, cutting manual hand-offs",
      "Refactored token management with Style Dictionary for cross-platform consistency",
      "Reusable Cedar components accelerating product delivery across REI platforms",
    ],
  },
  {
    slug: "verndale-lead",
    title: "Frontend Architecture & Team Leadership",
    clientLabel: "Verndale",
    sector: "Digital Experience Agency",
    role: "Lead Front End Engineer",
    timeframe: "2019 – 2022",
    summary:
      "Led frontend architecture across new builds and modernization work, while growing the team, standardizing delivery, and upgrading tooling for faster releases.",
    stack: ["React", "Next.js", "Sitecore", "Optimizely", "TypeScript"],
    outcomes: [
      "Build times reduced by 70% through modernized tooling and Nx migration",
      "Internal design system eliminated UI duplication and accelerated delivery cycles",
      "Hired, mentored, and onboarded engineers with standardized workflows and docs",
      "Spearheaded performance optimization and long-term support strategies",
    ],
  },
];

export const saas: SupportingWork = {
  title: "Motion Deck",
  summary:
    "A management platform for gyms, yoga studios, and fitness businesses covering scheduling, memberships, payments, and day-to-day operations in one system.",
  role: "Founder & Lead Developer",
  stack: ["Next.js", "TypeScript", "Convex", "Polar", "Tailwind"],
  outcomes: [
    "Launched v1.0 to production, onboarding 10+ studios",
    "Built the full product end to end, including admin tools, booking flows, payments, and automated notifications",
  ],
  href: "https://motiondeck.fit",
};

export const capabilities: Capability[] = [
  {
    title: "Frontend Architecture",
    summary:
      "Designing scalable, maintainable frontend systems that teams can actually ship with.",
    items: [
      "Application architecture and module boundaries",
      "State management patterns and data flow",
      "Migration strategy and incremental adoption",
      "Build and tooling pipeline optimization",
    ],
  },
  {
    title: "Design Systems & Accessibility",
    summary:
      "Building component systems that bridge design and engineering while meeting accessibility standards.",
    items: [
      "Design system architecture and token strategy",
      "WCAG 2.1 AA compliance auditing and remediation",
      "Figma-to-code workflow automation",
      "Component API design and documentation",
    ],
  },
  {
    title: "Performance & Delivery",
    summary:
      "Identifying and eliminating frontend bottlenecks to ship faster and more reliably.",
    items: [
      "Core Web Vitals optimization and Lighthouse auditing",
      "Bundle analysis and code splitting strategy",
      "CI/CD pipeline design for frontend teams",
      "CMS integration (ContentStack, Optimizely, AEM)",
    ],
  },
];

export const experienceHighlights: ExperienceItem[] = [
  {
    label: "Senior UI Engineer",
    timeframe: "2021 – Present",
    detail:
      "Building design systems at scale, modernizing legacy platforms, and bridging design-to-code workflows for product teams.",
  },
  {
    label: "Lead Front End Engineer",
    timeframe: "2019 – 2022",
    detail:
      "Owned frontend architecture, grew the engineering team from 3 to 8, and established delivery standards across client work.",
  },
  {
    label: "Frontend Engineer",
    timeframe: "2018 – 2019",
    detail:
      "Shipped cross-platform mobile apps and marketing sites. Built an internal tax automation tool from scratch.",
  },
];

export const about: AboutContent = {
  narrative: [
    "I work across product UI, frontend architecture, and design systems. I started in design, so I care about the visual layer, but I also care about module boundaries, bundle cost, documentation quality, and whether a team can ship confidently without fighting its own stack.",
    "Teams usually bring me in when a frontend platform needs clearer standards, when accessibility debt is slowing releases, or when a design system needs to become a practical delivery tool instead of a side project.",
    "Based in Ecuador, working remotely with US and global teams. Bilingual Spanish/English.",
  ],
  sasNote:
    "I also founded Motion Deck, which keeps me close to product decisions, delivery tradeoffs, and the realities of maintaining software after launch.",
};
