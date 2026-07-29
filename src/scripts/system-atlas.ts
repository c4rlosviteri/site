type AtlasPoint = {
  x: number;
  y: number;
  z: number;
  label: string;
  layer: 0 | 1 | 2;
};

type ProjectedPoint = AtlasPoint & {
  screenX: number;
  screenY: number;
  scale: number;
  depth: number;
};

const points: AtlasPoint[] = [
  { x: 0, y: 0, z: 0, label: "PRODUCT", layer: 0 },
  { x: -1.25, y: -0.2, z: 0.25, label: "UI", layer: 1 },
  { x: -0.45, y: 0.92, z: -0.35, label: "A11Y", layer: 1 },
  { x: 0.8, y: 0.72, z: 0.4, label: "TOKENS", layer: 1 },
  { x: 1.25, y: -0.28, z: -0.15, label: "STATE", layer: 1 },
  { x: 0.25, y: -1.02, z: 0.32, label: "MOTION", layer: 1 },
  { x: -1.45, y: 0.78, z: -0.82, label: "AUTH", layer: 2 },
  { x: -0.12, y: 1.45, z: 0.76, label: "API", layer: 2 },
  { x: 1.42, y: 0.92, z: -0.68, label: "DATA", layer: 2 },
  { x: 1.58, y: -0.68, z: 0.7, label: "CI/CD", layer: 2 },
  { x: 0.08, y: -1.55, z: -0.76, label: "OBSERVE", layer: 2 },
  { x: -1.5, y: -0.78, z: 0.65, label: "PERF", layer: 2 },
];

const edges: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 1],
  [1, 6],
  [2, 6],
  [2, 7],
  [3, 7],
  [3, 8],
  [4, 8],
  [4, 9],
  [5, 9],
  [5, 10],
  [1, 10],
  [1, 11],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 6],
];

const navigatorWithHints = navigator as Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

function initializeAtlas(root: HTMLElement) {
  const canvasElement =
    root.querySelector<HTMLCanvasElement>("[data-atlas-canvas]");
  const toggleElement =
    root.querySelector<HTMLButtonElement>("[data-atlas-toggle]");
  if (!canvasElement || !toggleElement) return;

  const drawingContext = canvasElement.getContext("2d", { alpha: true });
  if (!drawingContext) return;

  const canvas: HTMLCanvasElement = canvasElement;
  const toggle: HTMLButtonElement = toggleElement;
  const context: CanvasRenderingContext2D = drawingContext;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const saveData = navigatorWithHints.connection?.saveData === true;
  const lowMemory =
    typeof navigatorWithHints.deviceMemory === "number" &&
    navigatorWithHints.deviceMemory <= 4;
  const lowPower = coarsePointer || lowMemory;
  const maxDpr = lowPower ? 1.25 : 1.6;
  const frameInterval = 1000 / (lowPower ? 30 : 60);

  let width = 1;
  let height = 1;
  let rotationY = -0.42;
  let rotationX = -0.18;
  let targetY = rotationY;
  let targetX = rotationX;
  let lastFrame = 0;
  let animationFrame = 0;
  let isVisible = true;
  let userPaused = false;

  const canAnimate = !reducedMotion && !saveData;

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function rotate(point: AtlasPoint) {
    const cosY = Math.cos(rotationY);
    const sinY = Math.sin(rotationY);
    const cosX = Math.cos(rotationX);
    const sinX = Math.sin(rotationX);

    const x1 = point.x * cosY - point.z * sinY;
    const z1 = point.x * sinY + point.z * cosY;
    const y1 = point.y * cosX - z1 * sinX;
    const z2 = point.y * sinX + z1 * cosX;

    const distance = 4.5;
    const perspective = distance / (distance + z2);
    const sceneScale = Math.min(width, height) * 0.22;

    return {
      ...point,
      screenX: width / 2 + x1 * sceneScale * perspective,
      screenY: height / 2 + y1 * sceneScale * perspective,
      scale: perspective,
      depth: z2,
    } satisfies ProjectedPoint;
  }

  function drawOrbit(radius: number, color: string, tilt = 0) {
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(tilt);
    context.scale(1, 0.34);
    context.beginPath();
    context.arc(0, 0, Math.min(width, height) * radius, 0, Math.PI * 2);
    context.strokeStyle = color;
    context.lineWidth = 0.75;
    context.stroke();
    context.restore();
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    const softRed = "rgba(255, 78, 61, 0.14)";
    const softBlue = "rgba(137, 223, 236, 0.11)";
    drawOrbit(0.205, softRed, rotationY * 0.18);
    drawOrbit(0.34, softBlue, -rotationY * 0.12);

    const projected = points.map(rotate);

    for (const [startIndex, endIndex] of edges) {
      const start = projected[startIndex];
      const end = projected[endIndex];
      const averageDepth = (start.depth + end.depth) / 2;
      const alpha = Math.max(0.08, Math.min(0.38, 0.22 - averageDepth * 0.04));

      context.beginPath();
      context.moveTo(start.screenX, start.screenY);
      context.lineTo(end.screenX, end.screenY);
      context.strokeStyle =
        start.layer === 2 && end.layer === 2
          ? `rgba(137, 223, 236, ${alpha})`
          : `rgba(255, 255, 255, ${alpha})`;
      context.lineWidth = 0.65;
      context.stroke();
    }

    projected
      .sort((a, b) => b.depth - a.depth)
      .forEach((point) => {
        const radius =
          (point.layer === 0 ? 7.5 : point.layer === 1 ? 4.2 : 3.2) *
          point.scale;
        const isCore = point.layer === 0;
        const nodeColor = isCore
          ? "rgb(255, 78, 61)"
          : point.layer === 1
            ? "rgb(239, 243, 245)"
            : "rgb(137, 223, 236)";

        context.beginPath();
        context.arc(point.screenX, point.screenY, radius * 2.7, 0, Math.PI * 2);
        context.fillStyle = isCore
          ? "rgba(255, 78, 61, 0.11)"
          : "rgba(137, 223, 236, 0.045)";
        context.fill();

        context.beginPath();
        context.arc(point.screenX, point.screenY, radius, 0, Math.PI * 2);
        context.fillStyle = nodeColor;
        context.fill();

        if (width > 420 || point.layer < 2) {
          context.font = `${Math.max(8, 9.5 * point.scale)}px ui-monospace, SFMono-Regular, Menlo, monospace`;
          context.letterSpacing = "0.08em";
          context.textAlign = "center";
          context.fillStyle = isCore
            ? "rgba(255,255,255,0.92)"
            : "rgba(220,228,232,0.72)";
          context.fillText(
            point.label,
            point.screenX,
            point.screenY + radius + 15
          );
        }
      });

    root.classList.add("atlas-is-ready");
  }

  function shouldAnimate() {
    return (
      canAnimate &&
      !userPaused &&
      isVisible &&
      document.visibilityState === "visible"
    );
  }

  function schedule() {
    cancelAnimationFrame(animationFrame);
    if (shouldAnimate()) {
      animationFrame = requestAnimationFrame(animate);
    }
  }

  function animate(timestamp: number) {
    if (!shouldAnimate()) return;
    animationFrame = requestAnimationFrame(animate);

    if (timestamp - lastFrame < frameInterval) return;
    const delta = Math.min(40, timestamp - lastFrame || frameInterval);
    lastFrame = timestamp;

    rotationY += (targetY - rotationY) * 0.045;
    rotationX += (targetX - rotationX) * 0.045;
    targetY += delta * 0.000055;
    draw();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  const visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry?.isIntersecting ?? false;
      if (isVisible) {
        draw();
        schedule();
      } else {
        cancelAnimationFrame(animationFrame);
      }
    },
    { rootMargin: "120px" }
  );
  visibilityObserver.observe(root);

  root.addEventListener(
    "pointermove",
    (event) => {
      if (coarsePointer || !canAnimate) return;
      const bounds = root.getBoundingClientRect();
      const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
      targetY = -0.42 + relativeX * 0.9;
      targetX = -0.18 + relativeY * 0.48;
    },
    { passive: true }
  );

  root.addEventListener("pointerleave", () => {
    targetX = -0.18;
  });

  document.addEventListener("visibilitychange", schedule);

  if (canAnimate) {
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      userPaused = !userPaused;
      toggle.setAttribute("aria-pressed", String(userPaused));
      toggle.textContent = userPaused ? "Resume motion" : "Pause motion";
      if (userPaused) {
        cancelAnimationFrame(animationFrame);
      } else {
        lastFrame = 0;
        schedule();
      }
    });
  }

  resize();
  schedule();
}

function bootAtlases() {
  document
    .querySelectorAll<HTMLElement>("[data-system-atlas]")
    .forEach(initializeAtlas);
}

if ("requestIdleCallback" in window) {
  window.requestIdleCallback(bootAtlases, { timeout: 700 });
} else {
  globalThis.setTimeout(bootAtlases, 1);
}
