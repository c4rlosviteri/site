import type { SupportingWork, Capability, Project } from "./types";
import kwMap from "../assets/projects/kw-map.webp";
import kwTour from "../assets/projects/kw-tour.webp";
import zoom from "../assets/projects/zoom.png";
import khov from "../assets/projects/khov.png";
import cedarsSinai from "../assets/projects/cedars-sinai.png";
import lpga from "../assets/projects/lpga.png";
import apple from "../assets/projects/apple.png";
import eatright from "../assets/projects/eatright.png";
import motionDeck from "../assets/projects/motion-deck.png";

export const projects: Project[] = [
  {
    id: "eatright",
    name: "Academy of Nutrition and Dietetics",
    headline: "Frontend architecture led by accessibility and performance.",
    description:
      "Led frontend architecture for eatright.org, with performance, keyboard navigation, and accessibility central to the implementation. Mentored three engineers who went on to contribute across multiple projects.",
    focus: ["Architecture leadership", "Accessibility", "Performance"],
    href: "https://www.eatright.org/",
    linkLabel: "Visit website",
    image: eatright,
    imageAlt: "eatright.org homepage with food and nutrition resources from the Academy of Nutrition and Dietetics.",
  },
  {
    id: "lpga",
    name: "LPGA",
    headline: "Shared foundations for web, iOS, and Android.",
    description:
      "Contributed to a shared design system and reusable code across LPGA’s website and React Native apps for iOS and Android.",
    focus: ["Web & React Native", "iOS & Android", "Shared code"],
    href: "https://www.lpga.com/",
    linkLabel: "Visit website",
    image: lpga,
    imageAlt: "LPGA website showing tournament coverage, player scores, and the latest tour stories.",
  },
  {
    id: "keller-williams",
    name: "Keller Williams",
    headline: "Maps, spatial search, and property discovery.",
    description:
      "Built interactive maps, polygon-based searches, property galleries, and 3D tours for the KW app.",
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
    headline: "Connecting a design system to the CMS.",
    description:
      "Contributed to the website’s design system and CMS integration, connecting reusable components with content-driven pages.",
    focus: ["Design system", "CMS integration"],
    href: "https://www.zoom.com/",
    linkLabel: "Visit website",
    image: zoom,
    imageAlt: "Zoom website with its blue homepage and a gallery of collaboration products.",
  },
  {
    id: "khov",
    name: "K. Hovnanian Homes",
    headline: "A shared system across the homebuying journey.",
    description:
      "Contributed to the design system, personalization, and purchase flows, connecting reusable UI across the homebuying journey.",
    focus: ["Design system", "Personalization", "Purchase experience"],
    href: "https://www.khov.com/",
    linkLabel: "Visit website",
    image: khov,
    imageAlt: "K. Hovnanian Homes homepage with a family in a kitchen and a new-home search.",
  },
  {
    id: "cedars-sinai",
    name: "Cedars-Sinai",
    headline: "A frontend refactor across the patient journey.",
    description:
      "Contributed to a full website refactor covering search, provider directories, and the health articles blog.",
    focus: ["Frontend refactor", "Search & directories", "Editorial content"],
    href: "https://www.cedars-sinai.org/home.html",
    linkLabel: "Visit website",
    image: cedarsSinai,
    imageAlt: "Cedars-Sinai homepage with navigation for finding doctors, care, and medical services.",
  },
  {
    id: "apple",
    name: "Apple",
    headline: "Product storytelling, frame by frame.",
    description:
      "Contributed to the iPhone Duo, MacBook Neo, and iPadOS product pages, including animation work.",
    focus: ["Product pages", "Web animation", "Visual storytelling"],
    href: "https://www.apple.com/",
    linkLabel: "Visit website",
    image: apple,
    imageAlt: "Official Apple product image of an unfolded iPhone Duo held in two hands.",
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
  image: motionDeck,
  imageAlt: "Motion Deck homepage for yoga, pilates, barre, and indoor cycling studios, comparing WhatsApp booking messages with the Motion Deck client app.",
};

export const capabilities: Capability[] = [
  {
    title: "Design systems & architecture",
    summary: "Reusable component libraries, design-token pipelines, and CMS integration. Production work connecting shared UI foundations to customer-facing experiences, including Zoom and K. Hovnanian Homes.",
  },
  {
    title: "Web & native foundations",
    summary: "React, TypeScript, Next.js, and React Native. Experience sharing code and design systems across web, iOS, and Android, including LPGA’s web and mobile apps.",
  },
  {
    title: "Technical leadership",
    summary: "At Verndale, mentored three engineers and helped hire and onboard teammates as the distributed team grew from 3 to 8. Established technical documentation and asynchronous collaboration practices.",
  },
  {
    title: "Quality across the delivery cycle",
    summary: "Accessibility, keyboard interactions, frontend performance, and automated testing. Jest, Vitest, Cypress, React Testing Library, and CI/CD with GitHub Actions support how I build and ship.",
  },
];
