import { useEffect, useRef } from "react";

/**
 * Dark cyberpunk cursor: neon ring + core dot + magenta trail,
 * with crosshair ticks and a reactive state over interactive elements.
 */
export function CyberCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.documentElement.classList.add("cyber-cursor-active");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let tx = mx;
    let ty = my;
    let gx = mx;
    let gy = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        "a,button,[role='button'],input,textarea,select,summary",
      );
      ringRef.current?.setAttribute("data-active", interactive ? "true" : "false");
    };
    const onDown = () => ringRef.current?.setAttribute("data-press", "true");
    const onUp = () => ringRef.current?.setAttribute("data-press", "false");

    const loop = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      tx += (mx - tx) * 0.09;
      ty += (my - ty) * 0.09;
      gx += (mx - gx) * 0.05;
      gy += (my - gy) * 0.05;
      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      if (trailRef.current)
        trailRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      if (glowRef.current)
        glowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("cyber-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="cyber-cursor-layer">
      <div ref={glowRef} className="cyber-glow" />
      <div ref={trailRef} className="cyber-trail" />
      <div ref={ringRef} className="cyber-ring" data-active="false" data-press="false">
        <span className="cyber-tick cyber-tick-t" />
        <span className="cyber-tick cyber-tick-b" />
        <span className="cyber-tick cyber-tick-l" />
        <span className="cyber-tick cyber-tick-r" />
      </div>
      <div ref={dotRef} className="cyber-dot" />
    </div>
  );
}
