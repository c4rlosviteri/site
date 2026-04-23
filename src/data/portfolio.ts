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
      "Reusable components accelerating product delivery across retail platforms",
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
    company: "Huge",
    description:
      "Global design and technology agency building AI-driven digital experiences.",
    location: "Remote",
    role: "Senior UI Engineer",
    type: "Contractor",
    timeframe: "Oct 2021 – current",
    bullets: [
      "Created a modern design system based on React, Storybook, and Tailwind, which became the foundation for 80% of new projects and improved developer onboarding time by ~30%.",
      "Built and maintained complex applications with authentication, custom middlewares, caching strategies, and mobile apps using React Native and Next.js, serving more than 100k active users.",
      "Integrated multiple enterprise-level CMS platforms (ContentStack, Optimizely, Adobe AEM) with REST and GraphQL APIs, ensuring scalable and flexible content delivery for international clients.",
      "Refactored legacy projects to adopt modern stacks and best practices, reducing technical debt and improving performance scores by up to 40% in Lighthouse audits.",
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
      "Refactored token management with Style Dictionary, enabling platform-specific tokens from a single source and ensuring consistency across all platforms.",
      "Automated design-to-code workflow by building a Figma-to-GitHub sync script with API integrations, reducing manual hand-offs and speeding up token updates.",
      "Built and maintained reusable Cedar Design System components, accelerating product delivery and ensuring UI consistency across REI platforms.",
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
      "Delivered and maintained multiple Vue.js and WordPress projects, ensuring stability and scalability for high-traffic client sites.",
      "Designed and implemented custom Gutenberg Blocks, enhancing editorial workflows and extending WordPress site functionality.",
      "Integrated REST APIs and optimized rendering performance, improving load times and user experience on content-rich websites.",
      "Partnered with designers to translate UI/UX requirements into modular Vue.js components, streamlining collaboration and reusability.",
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
      "Directed front-end architecture and execution for new builds and legacy modernization, ensuring alignment with client goals.",
      "Hired, mentored, and onboarded engineers, while establishing standardized workflows and documentation that improved team efficiency.",
      "Reduced build times by 70% through modernized build tooling, significantly boosting developer productivity.",
      "Launched an internal design system to unify UI patterns, eliminating duplication and accelerating development cycles.",
      "Spearheaded performance optimization and long-term support strategies, improving scalability and product lifecycle management.",
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
      "Developed and maintained a React Native real estate app with advanced search, map views, and location-based features.",
      "Enhanced user experience by integrating maps, filters, geolocation, and deep linking into the mobile app.",
      "Built admin dashboards, reusing UI patterns and business logic across web and mobile platforms to maximize efficiency.",
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
      "Built the MVP of a tax automation platform, replacing manual workflows with an automated system for businesses and individuals.",
      "Implemented backend logic and UI for automatic tax calculations, scheduling, and payment processing.",
      "Eliminated repetitive compliance tasks by automating workflows, saving users hundreds of hours annually.",
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
