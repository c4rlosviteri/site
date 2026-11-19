// Night (default) and paper themes. Both are the same tokens with different values,
// so the switch is one attribute on <html>. The new theme opens in a circle from the button.
const root = document.documentElement;
const toggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const isPaper = () => root.dataset.theme === "paper";

const sync = () => {
  toggle?.setAttribute("aria-pressed", String(isPaper()));
  themeColor?.setAttribute("content", isPaper() ? "#f4f1ea" : "#0e0c09");
};

const apply = (paper: boolean) => {
  if (paper) root.dataset.theme = "paper";
  else delete root.dataset.theme;

  try {
    localStorage.setItem("theme", paper ? "paper" : "night");
  } catch {
    // Storage can be unavailable; the theme still applies for this visit.
  }

  sync();
};

sync();

toggle?.addEventListener("click", () => {
  const next = !isPaper();
  const startTransition = (document as Document & {
    startViewTransition?: (callback: () => void) => { ready: Promise<void> };
  }).startViewTransition?.bind(document);

  if (!startTransition || reducedMotion.matches) {
    apply(next);
    return;
  }

  const rect = toggle.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  root.dataset.themeSwitching = "";
  const transition = startTransition(() => apply(next));

  transition.ready
    .then(() => {
      const animation = root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 700, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
      );
      return animation.finished;
    })
    .catch(() => undefined)
    .finally(() => delete root.dataset.themeSwitching);
});

export {};
