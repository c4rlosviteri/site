const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const element = entry.target as HTMLElement;
        const delay = Number.parseInt(element.dataset.delay ?? "0", 10) || 0;
        const variant = element.dataset.reveal;

        element.animate(
          [
            {
              opacity: 0,
              transform:
                variant === "fade-up" ? "translate3d(0, 24px, 0)" : "none",
              filter: "blur(4px)",
            },
            {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
              filter: "blur(0)",
            },
          ],
          {
            duration: variant === "fade-up" ? 680 : 520,
            delay,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "backwards",
          }
        );

        observer.unobserve(element);
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((element) => observer.observe(element));
}
