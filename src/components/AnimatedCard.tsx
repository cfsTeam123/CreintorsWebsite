import type { ReactNode } from "react";
import TiltCard from "./TiltCard";

type Props = {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  innerClassName?: string;
  /**
   * Optional accent colour. When provided, the card carries a faint persistent
   * tinted border + a glowing accent ring on hover, themed to this colour.
   */
  borderColor?: string;
  /** Show the persistent themed top hairline. Defaults to true. */
  topLine?: boolean;
};

/**
 * AnimatedCard premium light-theme card with subtle 3D tilt and an
 * animated brand border that fades in on hover. Pass `borderColor` to theme
 * the hover border per card.
 */
export default function AnimatedCard({
  children,
  className = "",
  glareColor,
  innerClassName = "",
  borderColor,
  topLine = true,
}: Props) {
  const themed = !!borderColor;

  return (
    <TiltCard className={`reveal h-full ${className}`} glareColor={glareColor}>
      <div
        className={`group relative h-full overflow-hidden rounded-3xl border bg-white p-8 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.18)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.22)] ${innerClassName}`}
        style={{
          borderColor: themed ? `${borderColor}33` : undefined,
        }}
      >
        {/* Persistent themed top hairline */}
        {themed && topLine && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `linear-gradient(90deg, transparent, ${borderColor}, transparent)`,
              boxShadow: `0 0 12px ${borderColor}66`,
            }}
          />
        )}

        {/* Glowing themed border ring on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: themed
              ? `conic-gradient(from 120deg at 50% 50%, ${borderColor}cc, ${borderColor}33, ${borderColor}aa, ${borderColor}33, ${borderColor}cc)`
              : "conic-gradient(from 120deg at 50% 50%, rgba(23,158,224,0.55), rgba(70,54,127,0.45), rgba(23,158,224,0.55))",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1.5px",
          }}
        />

        {/* Persistent themed glow halo behind the card on hover */}
        {themed && (
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
            style={{
              background: `radial-gradient(closest-side, ${borderColor}55, transparent 70%)`,
            }}
          />
        )}

        {!themed && null}

        {children}
      </div>
    </TiltCard>
  );
}
