import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  /** max tilt in degrees */
  max?: number;
};

export default function TiltCard({
  children,
  className = "",
  glareColor = "rgba(26,200,255,0.35)",
  max = 12,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    const inner = innerRef.current;
    const glare = glareRef.current;
    if (!el || !inner || !glare) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * (max * 2);
    const rotX = -(y - 0.5) * (max * 2);

    inner.style.transform = `perspective(1100px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
    glare.style.background = `radial-gradient(420px circle at ${x * 100}% ${y * 100}%, ${glareColor}, transparent 55%)`;
    glare.style.opacity = "1";
  };

  const handleLeave = () => {
    const inner = innerRef.current;
    const glare = glareRef.current;
    if (inner) inner.style.transform = "perspective(1100px) rotateX(0) rotateY(0) scale3d(1,1,1)";
    if (glare) glare.style.opacity = "0";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group [transform-style:preserve-3d] ${className}`}
    >
      <div
        ref={innerRef}
        style={{ transition: "transform 400ms cubic-bezier(.2,.8,.2,1)" }}
        className="relative h-full w-full will-change-transform [transform-style:preserve-3d]"
      >
        {children}
        <div
          ref={glareRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          style={{ mixBlendMode: "screen" }}
        />
      </div>
    </div>
  );
}
