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
      "Built a React + Tailwind design system from scratch that became the default foundation for new projects. Architected Next.js apps with auth, middleware, and caching layers serving 100k+ users.",
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
      "Design system adopted by 80% of new projects, cutting onboarding time by ~30%",
      "Legacy refactors improved Lighthouse scores by up to 40%",
      "Unified CMS integrations across 3 enterprise platforms",
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
      "Refactored token architecture with Style Dictionary and built a Figma-to-GitHub automation pipeline that eliminated manual hand-offs between design and engineering.",
    stack: ["Vue", "Style Dictionary", "Figma API", "TypeScript"],
    outcomes: [
      "Design token delivery reduced from days to minutes via automated sync",
      "Reusable Cedar components accelerated delivery across retail platforms",
      "Single-source tokens ensured consistency across web, iOS, and Android",
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
      "Owned frontend architecture and team growth. Modernized build tooling, launched an internal design system, and established delivery standards across client projects.",
    stack: ["React", "Next.js", "Sitecore", "Optimizely", "TypeScript"],
    outcomes: [
      "Build times reduced by 70% through Nx and modernized tooling",
      "Team scaled from 3 to 8 engineers with standardized workflows",
      "Internal design system eliminated UI duplication across projects",
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
      "Created a React + Tailwind design system adopted by 80% of new projects, cutting onboarding time by ~30%.",
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
    description:
      "Full-service digital marketing and advertising agency.",
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
      "Grew the frontend team from 3 to 8 engineers while standardizing delivery workflows.",
      "Reduced build times by 70% through modernized tooling and Nx migration.",
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

export const about: AboutContent = {
  narrative: [
    "I work across product UI, frontend architecture, and design systems. I started in design, so I care about the visual layer, but I also care about module boundaries, bundle cost, documentation quality, and whether a team can ship confidently without fighting its own stack.",
    "Teams usually bring me in when a frontend platform needs clearer standards, when accessibility debt is slowing releases, or when a design system needs to become a practical delivery tool instead of a side project.",
    "Based in Ecuador, working remotely with US and global teams. Bilingual Spanish/English.",
  ],
  sasNote:
    "I also founded Motion Deck, which keeps me close to product decisions, delivery tradeoffs, and the realities of maintaining software after launch.",
};
