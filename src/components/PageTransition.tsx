import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "../lib/gsap";

export default function PageTransition({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const wrap = wrapRef.current;
    const overlay = overlayRef.current;
    if (!wrap || !overlay) return;

    // Scroll-to-top is owned by <ScrollToTop /> in App.tsx don't double-fire
    // here, that races with our useLayoutEffect.

    const tl = gsap.timeline();
    tl.fromTo(
      overlay,
      { scaleY: 1, transformOrigin: "top" },
      { scaleY: 0, duration: 0.8, ease: "expo.inOut" },
    );
    tl.fromTo(
      wrap,
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: "power3.out" },
      "-=0.5",
    );

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[80] origin-top bg-gradient-to-b from-surface-1 via-surface-2 to-surface-1"
        style={{ transform: "scaleY(0)" }}
      />
      <div ref={wrapRef}>{children}</div>
    </>
  );
}
