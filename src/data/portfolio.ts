import type { SupportingWork, Capability } from "./types";

export const saas: SupportingWork = {
  title: "Motion Deck",
  summary:
    "A management platform for gyms and fitness studios. I built scheduling, membership, payment, and notification flows, and launched its first version.",
  role: "Founder & Lead Engineer",
  stack: ["Next.js", "TypeScript", "Convex", "Polar", "Tailwind CSS"],
  outcomes: ["Launched v1.0 and onboarded more than 20 client studios."],
  href: "https://motiondeck.fit",
};

export const capabilities: Capability[] = [
  {
    title: "Frontend engineering",
    summary: "React, TypeScript, Next.js, and React Native. Reusable interfaces, application structure, and API integrations.",
  },
  {
    title: "Design systems & performance",
    summary: "Component libraries, design-token pipelines, accessible interactions, and rendering optimization. Storybook, Style Dictionary, and Tailwind CSS.",
  },
  {
    title: "Testing & delivery",
    summary: "Jest, Vitest, Cypress, and GitHub Actions. Coding agents and reusable skills support implementation and review.",
  },
];
