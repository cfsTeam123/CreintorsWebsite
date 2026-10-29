type Props = {
  items: string[];
  className?: string;
};

export default function Marquee({ items, className = "" }: Props) {
  const repeated = [...items, ...items];
  return (
    <div
      className={`relative overflow-hidden border-y border-slate-200 bg-white/60 py-5 backdrop-blur-sm ${className}`}
    >
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {repeated.map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-12 text-sm font-medium uppercase tracking-[0.32em] text-slate-600"
          >
            <span>{it}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"
      />
    </div>
  );
}
