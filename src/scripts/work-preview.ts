// A larger project preview that trails the pointer over the work index.
// Enhancement only: thumbnails stay in the rows, and touch or coarse pointers never see this.
const cursor = document.querySelector<HTMLElement>("[data-work-cursor]");
const list = document.querySelector<HTMLElement>("[data-work-index]");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 901px)");
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

  const aim = (event: PointerEvent, link: HTMLElement) => {
    const { offsetWidth: width, offsetHeight: height } = cursor;
    // Keep the preview in the name column so it never covers the copy being read,
    // and below the pointer so the hovered name stays visible.
    const copy = link.querySelector<HTMLElement>(".work-row-copy");
    const minX = list.getBoundingClientRect().left;
    const maxX = Math.max(minX, (copy?.getBoundingClientRect().left ?? window.innerWidth) - width - 24);
    targetX = Math.min(Math.max(event.clientX - width * 0.35, minX), maxX);

    const below = event.clientY + 36;
    targetY = below + height < window.innerHeight - 16 ? below : event.clientY - height - 36;
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
