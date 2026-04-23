import type {
  Engagement,
  SupportingWork,
  Capability,
  ExperienceItem,
  SkillCategory,
  AboutContent,
} from "./types";

export const engagements: Engagement[] = [
  {
    slug: "react-design-system",
    title: "React Design System",
    clientLabel: "",
    sector: "",
    role: "",
    timeframe: "",
    summary:
      "A component library and documentation platform built from scratch. Became the foundation for most new projects across the agency, with theming, accessibility patterns, and CI-driven releases.",
    stack: ["React", "TypeScript", "Tailwind", "Storybook", "Next.js"],
    outcomes: [
      "Adopted by 40% of new projects within the first year",
      "Cut developer onboarding time from days to hours",
      "Legacy refactors improved Lighthouse scores by up to 40%",
    ],
  },
  {
    slug: "figma-pipeline",
    title: "Figma-to-Code Pipeline",
    clientLabel: "",
    sector: "",
    role: "",
    timeframe: "",
    summary:
      "An automated workflow that syncs design tokens from Figma to GitHub via API integrations. Eliminates manual hand-offs and keeps design and engineering in continuous alignment.",
    stack: ["Style Dictionary", "Figma API", "TypeScript", "GitHub Actions"],
    outcomes: [
      "Token delivery reduced from days to minutes",
      "Single source of truth across web, iOS, and Android",
      "Zero regressions on design token updates after rollout",
    ],
  },
  {
    slug: "frontend-platform",
    title: "Frontend Team Platform",
    clientLabel: "",
    sector: "",
    role: "",
    timeframe: "",
    summary:
      "A unified build and delivery setup for a growing frontend team. Included a monorepo with shared tooling, an internal component library, and documentation that scaled with the team.",
    stack: ["Nx", "React", "Next.js", "TypeScript", "Webpack"],
    outcomes: [
      "Build times reduced by 70% across all projects",
      "Team scaled from 3 to 8 engineers without delivery slowdown",
      "Internal design system eliminated repeated UI work",
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
    company: "Huge",
    description:
      "Global design and technology agency building AI-driven digital experiences.",
    location: "Remote",
    role: "Senior UI Engineer",
    type: "Contractor",
    timeframe: "Oct 2021 – current",
    bullets: [
      "Created a React + Tailwind design system adopted by 40% of new projects, cutting onboarding time by ~30%.",
      "Built Next.js and React Native apps serving 100k+ active users with auth, middleware, and caching.",
      "Integrated enterprise CMS platforms via REST and GraphQL for international content delivery.",
    ],
  },
  {
    company: "REI",
    description:
      "U.S. outdoor retail cooperative with nationwide stores and e-commerce.",
    location: "Remote",
    role: "Senior Web UI Engineer",
    type: "Contractor",
    timeframe: "Jun 2024 – current",
    bullets: [
      "Refactored design tokens with Style Dictionary for cross-platform consistency.",
      "Automated Figma-to-GitHub sync, eliminating manual hand-offs from design to code.",
      "Built reusable Cedar components that accelerated delivery across REI platforms.",
    ],
  },
  {
    company: "AMP Agency",
    description: "Full-service digital marketing and advertising agency.",
    location: "Remote",
    role: "Senior Frontend Engineer",
    type: "Contractor",
    timeframe: "Oct 2022 – Apr 2024",
    bullets: [
      "Delivered high-traffic Vue.js and WordPress sites with custom Gutenberg blocks.",
      "Optimized rendering and API integration, improving load times on content-rich properties.",
    ],
  },
  {
    company: "Verndale",
    description:
      "Digital experience agency focused on design, strategy, and development.",
    location: "Remote",
    role: "Lead Front End Engineer",
    timeframe: "Apr 2019 – Oct 2022",
    bullets: [
      "Standardized the hiring process and authored onboarding documentation that cut ramp-up time for new engineers.",
      "Reduced build times by 70% through modernized tooling and TypeScript migration.",
      "Launched an internal design system that eliminated UI duplication across projects.",
    ],
  },
  {
    company: "Dreamcode",
    description:
      "Software development company specializing in staff augmentation and full-stack project delivery.",
    location: "Remote",
    role: "UI Engineer",
    timeframe: "Jul 2018 – Apr 2019",
    bullets: [
      "Developed a React Native real estate app with maps, filters, and geolocation.",
      "Built admin dashboards reusing logic across web and mobile platforms.",
    ],
  },
  {
    company: "Factu",
    description:
      "Ecuadorian platform for efficiently managing and downloading electronic invoices.",
    location: "Remote",
    role: "UI Engineer",
    timeframe: "Aug 2018 – Mar 2019",
    bullets: [
      "Built the MVP of a tax automation platform, replacing manual workflows for businesses.",
      "Automated tax calculations and payment scheduling, saving users hundreds of hours annually.",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue",
      "TypeScript",
      "React Native",
      "Astro",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    title: "Design Systems",
    items: [
      "Storybook",
      "Style Dictionary",
      "Design Tokens",
      "Figma API",
      "Component Architecture",
      "Accessibility (WCAG)",
    ],
  },
  {
    title: "CMS & APIs",
    items: [
      "ContentStack",
      "Optimizely",
      "Adobe AEM",
      "WordPress",
      "Sitecore",
      "GraphQL",
      "REST",
    ],
  },
  {
    title: "Build & Tooling",
    items: ["Nx", "Vite", "Webpack", "CI/CD", "Git", "Monorepos"],
  },
  {
    title: "Performance",
    items: [
      "Core Web Vitals",
      "Lighthouse",
      "Bundle Analysis",
      "Caching Strategies",
      "Code Splitting",
    ],
  },
  {
    title: "Mobile",
    items: [
      "React Native",
      "Responsive Design",
      "Cross-Platform",
      "Deep Linking",
      "Geolocation",
    ],
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
