import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  index?: number;
};

export default function StatsCounter({
  value,
  suffix = "+",
  label,
  duration = 2,
  index = 0,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (started || !ref.current) return;
    const el = ref.current;
    let timeoutId: number | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          timeoutId = window.setTimeout(() => setStarted(true), index * 140);
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId !== null) window.clearTimeout(timeoutId);
    };
  }, [started, index]);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const ms = duration * 1000;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);

  return (
    <div ref={ref} className="reveal group relative h-full">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-[2rem] opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
        style={{
          background:
            "radial-gradient(closest-side, rgba(23,158,224,0.32), rgba(70,54,127,0.2) 55%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="stats-glow-rotate pointer-events-none absolute -inset-2 rounded-[1.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-60"
      />
      <div
        className="relative h-full overflow-hidden rounded-2xl border px-7 py-9 transition-[transform,box-shadow] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_60px_-28px_rgba(15,23,42,0.32)]"
        style={{
          borderColor: "rgba(15,23,42,0.10)",
          background: "#ffffff",
          boxShadow:
            "0 20px 50px -30px rgba(15,23,42,0.28), 0 0 0 1px rgba(255,255,255,0.9) inset",
        }}
      >
        <span
          aria-hidden
          className={`stats-shimmer pointer-events-none absolute inset-0 ${started ? "is-on" : ""}`}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-80"
          style={{
            background:
              "linear-gradient(90deg, transparent, #179EE0, #46367F, transparent)",
          }}
        />
        <div className="relative flex items-baseline gap-1 font-display text-6xl font-bold leading-none tracking-tight md:text-7xl">
          <span className="text-gradient-brand tabular-nums">{n}</span>
          <span className="text-gradient-brand">{suffix}</span>
        </div>
        <div
          className="mt-5 h-px w-12 transition-all duration-500 group-hover:w-24"
          style={{
            background: "linear-gradient(90deg, #179EE0, transparent)",
          }}
        />
        <p className="relative mt-3 text-xs font-semibold uppercase tracking-[0.32em] text-slate-600">
          {label}
        </p>
      </div>
    </div>
  );
}
