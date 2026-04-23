function initReveal() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target as HTMLElement;
        const delay = parseInt(el.dataset.delay ?? "0", 10) || 0;

        const trigger = () => el.classList.add("is-revealed");

        if (delay > 0) {
          setTimeout(trigger, delay);
        } else {
          trigger();
        }

        observer.unobserve(el);
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -48px 0px",
    }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    observer.observe(el);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initReveal();
  });
} else {
  initReveal();
}
