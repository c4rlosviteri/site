export type CTA = {
  label: string;
  href: string;
  kind: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export type Engagement = {
  slug: string;
  title: string;
  clientLabel: string;
  sector: string;
  role: string;
  timeframe: string;
  evidenceLabel: string;
  constraint: string;
  decision: string;
  summary: string;
  stack: string[];
  outcomes: string[];
};

export type SupportingWork = {
  title: string;
  summary: string;
  role: string;
  timeframe?: string;
  stack: string[];
  outcomes: string[];
  href?: string;
};

export type Capability = {
  title: string;
  summary: string;
  items: string[];
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type AboutContent = {
  narrative: string[];
  sasNote?: string;
};

export type SiteContent = {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  email: string;
  siteUrl: string;
  linkedin?: string;
  resumeUrl?: string;
  socialImage: string;
  location?: string;
  timezone?: string;
  availability?: string;
};
