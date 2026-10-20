import type { SupportingWork, Capability, Project } from "./types";
import kwMap from "../assets/projects/kw-map.webp";
import kwTour from "../assets/projects/kw-tour.webp";
import zoom from "../assets/projects/zoom.png";
import khov from "../assets/projects/khov.png";
import cedarsSinai from "../assets/projects/cedars-sinai.png";
import lpga from "../assets/projects/lpga.png";
import apple from "../assets/projects/apple.png";
import eatright from "../assets/projects/eatright.png";

export const projects: Project[] = [
  {
    id: "keller-williams",
    name: "Keller Williams",
    headline: "Finding home starts with exploring.",
    description:
      "I helped bring home search to life with interactive maps, custom polygon searches, property galleries, and immersive 3D tours. More ways to explore a place before stepping through the door.",
    focus: ["Maps & polygons", "Property galleries", "3D tours"],
    href: "https://apps.apple.com/us/app/kw-real-estate/id652512924",
    linkLabel: "View app",
    image: kwMap,
    imageAlt: "Keller Williams app showing a map of homes for sale and a property preview in Austin.",
    secondaryImage: kwTour,
    secondaryImageAlt: "Keller Williams property details with a photo gallery and virtual tour.",
  },
  {
    id: "zoom",
    name: "Zoom",
    headline: "One system. A connected web experience.",
    description:
      "I worked on the design system behind Zoom’s website and its CMS integration, connecting reusable components with the content that powers the site. A consistent experience for visitors, with room for the brand to keep evolving.",
    focus: ["Design system", "CMS integration"],
    href: "https://www.zoom.com/",
    linkLabel: "Visit website",
    image: zoom,
    imageAlt: "Zoom website with its blue homepage and a gallery of collaboration products.",
  },
  {
    id: "khov",
    name: "K. Hovnanian Homes",
    headline: "A homebuying journey that feels personal.",
    description:
      "I worked on the design system, personalization, and purchase experience for K. Hovnanian Homes. Bringing a shared visual language to the moments that help buyers explore their options and make a home their own.",
    focus: ["Design system", "Personalization", "Purchase experience"],
    href: "https://www.khov.com/",
    linkLabel: "Visit website",
    image: khov,
    imageAlt: "K. Hovnanian Homes homepage with a family in a kitchen and a new-home search.",
  },
  {
    id: "cedars-sinai",
    name: "Cedars-Sinai",
    headline: "Less searching. More finding the right care.",
    description:
      "I worked on a full website refactor spanning search, provider directories, and the health articles blog. Reworking the frontend behind the journeys people use to find a doctor, explore care, and get answers.",
    focus: ["Frontend refactor", "Search & directories", "Editorial content"],
    href: "https://www.cedars-sinai.org/home.html",
    linkLabel: "Visit website",
    image: cedarsSinai,
    imageAlt: "Cedars-Sinai homepage with navigation for finding doctors, care, and medical services.",
  },
  {
    id: "lpga",
    name: "LPGA",
    headline: "One shared foundation. Every screen.",
    description:
      "I helped build LPGA’s web and React Native apps for iOS and Android, with a design system and shared code connecting both projects. Bringing the tour to fans across platforms with a consistent look and feel.",
    focus: ["Web & React Native", "iOS & Android", "Shared code"],
    href: "https://www.lpga.com/",
    linkLabel: "Visit website",
    image: lpga,
    imageAlt: "LPGA website showing tournament coverage, player scores, and the latest tour stories.",
  },
  {
    id: "apple",
    name: "Apple",
    headline: "The details that make a launch feel alive.",
    description:
      "I contributed to the iPhone Duo, MacBook Neo, and iPadOS product pages, working on animations across several of these experiences. Turning product storytelling into motion, with attention to timing, transitions, and the details between frames.",
    focus: ["Product pages", "Web animation", "Visual storytelling"],
    href: "https://www.apple.com/",
    linkLabel: "Visit website",
    image: apple,
    imageAlt: "Official Apple product image of an unfolded iPhone Duo held in two hands.",
  },
  {
    id: "eatright",
    name: "Academy of Nutrition and Dietetics",
    headline: "Good information should be within everyone’s reach.",
    description:
      "I worked on accessibility and performance for eatright.org, including full keyboard navigation and WCAG AAA compliance. Making food and nutrition information easier to reach, navigate, and use.",
    focus: ["Accessibility", "Keyboard navigation", "WCAG AAA", "Performance"],
    href: "https://www.eatright.org/",
    linkLabel: "Visit website",
    image: eatright,
    imageAlt: "eatright.org homepage with food and nutrition resources from the Academy of Nutrition and Dietetics.",
  },
];

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
