import { useState } from "react";

type Item = { q: string; a: string };

export default function Faq({
  items,
  accent = "#1ac8ff",
  mode = "dark",
}: {
  items: Item[];
  accent?: string;
  mode?: "dark" | "light";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const isLight = mode === "light";
  const containerCls = isLight
    ? "overflow-hidden rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-sm shadow-[0_18px_40px_-30px_rgba(15,23,42,0.25)]"
    : "overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]";
  const itemBorderCls = isLight
    ? "reveal border-b border-slate-200 last:border-b-0"
    : "reveal border-b border-white/10 last:border-b-0";
  const buttonHoverCls = isLight
    ? "flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition hover:bg-slate-50 md:px-8 md:py-7"
    : "flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition hover:bg-white/[0.03] md:px-8 md:py-7";
  const questionTextCls = isLight
    ? "font-display text-lg font-medium text-slate-900 md:text-xl"
    : "font-display text-lg font-medium text-white md:text-xl";
  const plusBorderCls = isLight
    ? "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-300 transition"
    : "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 transition";
  // No left inset any more — the Q-number that used to sit there is gone.
  const answerTextCls = isLight
    ? "px-6 pb-7 pr-12 text-[15px] leading-relaxed text-slate-600 md:px-8"
    : "px-6 pb-7 pr-12 text-[15px] leading-relaxed text-white/65 md:px-8";

  return (
    <div className={containerCls}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className={itemBorderCls}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className={buttonHoverCls}
            >
              <span className="flex items-center gap-4">
                <span className={questionTextCls}>{it.q}</span>
              </span>
              <span
                className={plusBorderCls}
                style={{
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  color: accent,
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? 320 : 0,
                opacity: isOpen ? 1 : 0,
                transition: "max-height 400ms cubic-bezier(.2,.8,.2,1), opacity 300ms ease",
              }}
              className="overflow-hidden"
            >
              <p className={answerTextCls}>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
