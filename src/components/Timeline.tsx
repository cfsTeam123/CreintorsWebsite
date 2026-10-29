type Item = { year: string; title: string; detail: string };

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="relative mx-auto max-w-5xl py-10">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-brand-400 via-accent-violet to-accent-lime hidden md:block"
      />

      <div className="space-y-12 md:space-y-20">
        {items.map((it, i) => {
          const left = i % 2 === 0;
          return (
            <div
              key={it.year}
              className={`tl-row grid items-center gap-6 md:grid-cols-2 ${left ? "" : "md:[direction:rtl]"}`}
            >
              <div className={`relative md:[direction:ltr] ${left ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="glass relative inline-block w-full max-w-md rounded-2xl p-6">
                  <div className="font-mono text-xs tracking-[0.4em] text-brand-300">{it.year}</div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{it.detail}</p>
                </div>
              </div>
              <div className="relative hidden md:block md:[direction:ltr]">
                <span className="absolute left-1/2 top-1/2 -ml-[42px] -mt-3 hidden md:block">
                  <span className="block h-6 w-6 rounded-full border border-white/20 bg-ink-900 shadow-glow" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-brand-300 animate-pulseGlow" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
