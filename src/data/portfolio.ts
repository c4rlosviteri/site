import type { SupportingWork, Capability } from "./types";

export const saas: SupportingWork = {
  title: "Motion Deck",
  summary:
    "I built and launched a management platform for gyms and fitness studios, taking scheduling, membership, payment, and notification flows from idea to production.",
  role: "Founder & Lead Engineer",
  stack: ["Next.js", "TypeScript", "Convex", "Polar", "Tailwind CSS"],
  outcomes: ["Launched v1.0 and onboarded more than 20 client studios."],
  href: "https://motiondeck.fit",
};

export const capabilities: Capability[] = [
  {
    title: "Frontend engineering",
    summary: "React, Vue, Next.js, React Native, TypeScript, JavaScript, and Redux. Reusable components and accessible, customer-focused interfaces.",
  },
  {
    title: "Product & growth",
    summary: "Product scoping, MVP delivery, client onboarding, and membership and payment experiences that support adoption and growth.",
  },
  {
    title: "Design systems & performance",
    summary: "Component libraries, design-token pipelines, accessible interactions, and rendering optimization. Storybook, Style Dictionary, and Tailwind CSS.",
  },
  {
    title: "APIs & backend",
    summary: "Node.js, Convex, Python, and REST APIs. Backend logic and integrations for web applications.",
  },
  {
    title: "Testing & delivery",
    summary: "Automated testing with Jest, Vitest, Cypress, and React Testing Library; CI/CD with GitHub Actions. AI-assisted development and reusable agent skills.",
  },
];
