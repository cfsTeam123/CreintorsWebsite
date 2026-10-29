type Props = {
  items: string[];
  accent: string;
};

export default function CapabilityList({ items, accent }: Props) {
  return (
    <ul className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      {items.map((it, i) => (
        <li
          key={it}
          className="reveal group relative flex items-center gap-6 px-6 py-6 transition hover:bg-white/[0.04] md:px-10 md:py-7"
        >
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-white/40 w-10">
            0{i + 1}
          </span>
          <span className="flex-1 font-display text-xl font-medium text-white md:text-2xl">
            {it}
          </span>
          <span
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition group-hover:translate-x-1"
            style={{ color: accent }}
          >
            →
          </span>
        </li>
      ))}
    </ul>
  );
}
