import type { ImageMetadata } from "astro";

export type CTA = {
  label: string;
  href: string;
  kind: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export type Project = {
  id: string;
  name: string;
  headline: string;
  description: string;
  focus: string[];
  href: string;
  linkLabel: string;
  image: ImageMetadata;
  imageAlt: string;
  secondaryImage?: ImageMetadata;
  secondaryImageAlt?: string;
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
