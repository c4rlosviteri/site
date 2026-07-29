const navLinks = Array.from(
  document.querySelectorAll<HTMLAnchorElement>('.site-nav a[href^="#"]'),
);

const sections = navLinks
  .map((link) => {
    const target = link.getAttribute("href");
    return target ? document.querySelector<HTMLElement>(target) : null;
  })
  .filter((section): section is HTMLElement => section !== null);

const setCurrentSection = (sectionId: string) => {
  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${sectionId}`;

    if (isCurrent) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target.id) {
        setCurrentSection(visibleEntry.target.id);
      }
    },
    {
      rootMargin: "-28% 0px -58% 0px",
      threshold: [0, 0.1, 0.4],
    },
  );

  sections.forEach((section) => observer.observe(section));
}
