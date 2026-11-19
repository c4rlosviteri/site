// A project preview that appears in the margin beside the work index and tracks the pointer.
// Enhancement only: thumbnails stay in the rows, and touch or coarse pointers never see this.
const cursor = document.querySelector<HTMLElement>("[data-work-cursor]");
const list = document.querySelector<HTMLElement>("[data-work-index]");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 961px)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (cursor && list) {
  const frames = Array.from(cursor.querySelectorAll<HTMLElement>("[data-preview-frame]"));
  const links = Array.from(list.querySelectorAll<HTMLAnchorElement>("[data-preview]"));

  let targetX = 0;
  let targetY = 0;
  let x = 0;
  let y = 0;
  let frame = 0;
  let active = false;

  const render = () => {
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const tick = () => {
    x += (targetX - x) * 0.14;
    y += (targetY - y) * 0.14;
    render();

    const settled = Math.abs(targetX - x) < 0.3 && Math.abs(targetY - y) < 0.3;
    frame = active || !settled ? requestAnimationFrame(tick) : 0;
  };

  const margin = list.closest("section")?.querySelector<HTMLElement>(".section-head-inner") ?? null;

  const aim = (event: PointerEvent, _link: HTMLElement) => {
    // The preview lives in the left margin, under the section title, and follows the pointer vertically.
    const height = cursor.offsetHeight;
    const marginRect = margin?.getBoundingClientRect();
    targetX = marginRect?.left ?? 16;

    const top = (marginRect?.bottom ?? 80) + 24;
    targetY = Math.min(Math.max(event.clientY - height / 2, top), window.innerHeight - height - 16);
  };

  const show = (id: string, event: PointerEvent, link: HTMLElement) => {
    if (!finePointer.matches) return;

    aim(event, link);
    if (!active || reducedMotion.matches) {
      x = targetX;
      y = targetY;
      render();
    }

    active = true;
    cursor.toggleAttribute("data-active", true);
    frames.forEach((item) => item.toggleAttribute("data-active", item.dataset.previewFrame === id));
    if (!frame && !reducedMotion.matches) frame = requestAnimationFrame(tick);
  };

  const hide = () => {
    active = false;
    cursor.removeAttribute("data-active");
    frames.forEach((item) => item.removeAttribute("data-active"));
  };

  links.forEach((link) => {
    const id = link.dataset.preview;
    if (!id) return;

    link.addEventListener("pointerenter", (event) => show(id, event, link));
    link.addEventListener("pointermove", (event) => {
      if (!active) return;
      aim(event, link);
      if (reducedMotion.matches) {
        x = targetX;
        y = targetY;
        render();
      }
    });
    link.addEventListener("pointerleave", hide);
  });

  window.addEventListener("scroll", () => active && hide(), { passive: true });
  finePointer.addEventListener("change", hide);
}

export {};
