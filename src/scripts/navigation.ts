const header = document.querySelector<HTMLElement>(".site-header");
const nav = document.querySelector<HTMLElement>(".site-nav");
const indicator = nav?.querySelector<HTMLElement>(".nav-indicator") ?? null;

const navLinks = Array.from(
  document.querySelectorAll<HTMLAnchorElement>('.site-nav a[href^="#"]'),
);

const sections = navLinks
  .map((link) => {
    const target = link.getAttribute("href");
    return target ? document.querySelector<HTMLElement>(target) : null;
  })
  .filter((section): section is HTMLElement => section !== null);

const hero = document.querySelector<HTMLElement>("#top");

let currentLink: HTMLAnchorElement | null = null;

const placeIndicator = () => {
  if (!indicator) return;

  if (!currentLink) {
    indicator.style.opacity = "0";
    return;
  }

  // A 1px-wide bar scaled to the link width keeps the slide on the compositor.
  indicator.style.transform = `translateX(${currentLink.offsetLeft}px) scaleX(${currentLink.offsetWidth})`;
  indicator.style.opacity = "1";
};

const setCurrentSection = (sectionId: string | null) => {
  currentLink = null;

  navLinks.forEach((link) => {
    const isCurrent = sectionId !== null && link.getAttribute("href") === `#${sectionId}`;

    if (isCurrent) {
      link.setAttribute("aria-current", "location");
      currentLink = link;
    } else {
      link.removeAttribute("aria-current");
    }
  });

  placeIndicator();
};

if (indicator) {
  nav?.classList.add("has-indicator");
  // Place the bar without a transition on first paint, then let it slide.
  placeIndicator();
  requestAnimationFrame(() => indicator.classList.add("is-ready"));
  window.addEventListener("resize", placeIndicator, { passive: true });
  document.fonts?.ready.then(placeIndicator);
}

// The current section is the last one whose top has passed the reading line.
// Measuring on scroll avoids observer edge cases with sections of very different heights.
const readingLine = () => window.innerHeight * 0.35;

const updateCurrentSection = () => {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  let current: HTMLElement | null = null;

  if (atBottom && sections.length > 0) {
    current = sections[sections.length - 1];
  } else {
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= readingLine()) current = section;
    }
  }

  if (current && hero && hero.getBoundingClientRect().bottom > readingLine()) current = null;

  const nextId = current?.id ?? null;
  const currentId = currentLink?.getAttribute("href")?.slice(1) ?? null;
  if (nextId !== currentId) setCurrentSection(nextId);
};

let frame = 0;
const scheduleUpdate = () => {
  if (frame) return;
  frame = requestAnimationFrame(() => {
    frame = 0;
    updateCurrentSection();
  });
};

if (sections.length > 0) {
  updateCurrentSection();
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate, { passive: true });
}

if (header) {
  const updateHeader = () => header.toggleAttribute("data-scrolled", window.scrollY > 8);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}
