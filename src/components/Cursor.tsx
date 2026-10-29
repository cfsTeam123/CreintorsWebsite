import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

/**
 * Custom cursor a small dot tracking pointer + a slow-following ring.
 * Uses gsap.quickTo for buttery smoothing. Hidden under 1024px (CSS).
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xToDot = gsap.quickTo(dot, "x", { duration: 0.18, ease: "power3.out" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.18, ease: "power3.out" });
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };
    const grow = () => gsap.to(ring, { scale: 1.8, duration: 0.3, ease: "power2.out" });
    const shrink = () => gsap.to(ring, { scale: 1, duration: 0.3, ease: "power2.out" });

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll<HTMLElement>("a, button, [data-cursor='hover']").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      />
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      />
    </>
  );
}
