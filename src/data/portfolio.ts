import type { SupportingWork, Capability, Project } from "./types";
import kwMap from "../assets/projects/kw-map.webp";
import kwTour from "../assets/projects/kw-tour.webp";
import zoom from "../assets/projects/zoom.png";
import khov from "../assets/projects/khov.png";
import cedarsSinai from "../assets/projects/cedars-sinai.png";
import eatright from "../assets/projects/eatright.png";
import honda from "../assets/projects/honda.png";
import oneworld from "../assets/projects/oneworld.png";
import twilio from "../assets/projects/twilio.png";
import setf from "../assets/projects/setf.png";
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
    id: "twilio",
    name: "Twilio",
    headline: "A design system for the new Twilio Console.",
    description:
      "Worked on the design system behind the new Twilio Console and improved performance. Brought AI agents into the development process through skills and harness configuration.",
    focus: ["Design system", "Performance", "AI agents in development"],
    href: "https://www.twilio.com/",
    linkLabel: "Visit website",
    image: twilio,
    imageAlt: "Twilio homepage introducing its platform for conversations, with a product video.",
  },
  {
    id: "khov",
    name: "K. Hovnanian Homes",
    headline: "Hundreds of data calls, optimized for home customization.",
    description:
      "A complex, data-heavy site where buyers customize their home. Improved architecture and performance across multiple parts of it, optimizing hundreds of data calls. Also worked on the design system, personalization, and purchase flows.",
    focus: ["Complex data", "Architecture", "Performance"],
    href: "https://www.khov.com/",
    linkLabel: "Visit website",
    image: khov,
    imageAlt: "K. Hovnanian Homes homepage with a family in a kitchen and a new-home search.",
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
    id: "setf",
    name: "Southeast Toyota Finance",
    headline: "Frontend and backend-for-frontend for the SETF app.",
    description:
      "Worked on the app’s frontend and backend-for-frontend layer.",
    focus: ["Frontend", "Backend-for-frontend"],
    href: "https://www.setf.com/",
    linkLabel: "Visit website",
    image: setf,
    imageAlt: "Southeast Toyota Finance homepage with an account log-in form and financing offers.",
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
    id: "honda",
    name: "Honda",
    headline: "The Honda site and vehicle configurator.",
    description:
      "Worked on Honda’s website and vehicle configurator.",
    focus: ["Brand website", "Configurator"],
    href: "https://www.honda.com",
    linkLabel: "Visit website",
    image: honda,
    imageAlt: "Honda homepage with a featured SUV on a trail and links to its vehicle divisions.",
  },
  {
    id: "oneworld",
    name: "oneworld",
    headline: "CMS and site pages for an airline alliance.",
    description:
      "Worked on the CMS and site pages for oneworld.com.",
    focus: ["CMS", "Site pages"],
    href: "https://www.oneworld.com/",
    linkLabel: "Visit website",
    image: oneworld,
    imageAlt: "oneworld homepage with navigation for booking, member airlines, and benefits.",
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
    summary: "React, TypeScript, Next.js, and React Native. Experience sharing code and design systems across web, iOS, and Android.",
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
