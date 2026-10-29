type Step = { k: string; t: string; d: string };

type Props = {
  steps: Step[];
  accent: string;
};

export default function ProcessSteps({ steps, accent }: Props) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-0 right-0 top-[42px] hidden h-px md:block"
        style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.18), rgba(255,255,255,0.08))" }}
      />
      <div
        className="pointer-events-none absolute left-0 top-[42px] hidden h-px w-full md:block"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />

      <div className="grid gap-8 md:grid-cols-5 md:gap-4">
        {steps.map((s, i) => (
          <div key={s.k} className="ps-step relative">
            <div className="relative z-10 mx-auto grid h-[84px] w-[84px] place-items-center rounded-2xl border border-white/10 bg-ink-900 backdrop-blur-xl">
              <div
                className="grid h-12 w-12 place-items-center rounded-xl font-display text-lg font-bold text-ink-950"
                style={{ background: accent }}
              >
                0{i + 1}
              </div>
            </div>
            <div className="mt-5 text-center md:text-left">
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/40">
                Phase {s.k}
              </div>
              <h4 className="mt-1 font-display text-xl font-semibold text-white">{s.t}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
