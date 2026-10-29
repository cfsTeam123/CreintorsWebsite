/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useId, useRef } from "react";
import { motion } from "motion/react";
import { useReveal } from "./Creintors/useReveal";
import { gsap } from "../lib/gsap";
import { rgbTriplet } from "../lib/theme";

/** The fields the card renders. Each division's capability list carries more
 *  (tag, image, highlights); this design uses only these three. */
export type CapabilityItem = { t: string; d: string; metric: string };

function CapabilityCard({
	c,
	i,
	primary,
	secondary,
	glowClass,
}: {
	c: CapabilityItem;
	i: number;
	primary: string;
	secondary: string;
	glowClass: string;
}) {
	const tiltRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = tiltRef.current;
		if (!el) return;
		const ease = "cubic-bezier(.03,.98,.52,.99)";
		const MAX = 6;

		const handleMove = (e: MouseEvent) => {
			const rect = el.getBoundingClientRect();
			const px = (e.clientX - rect.left) / rect.width;
			const py = (e.clientY - rect.top) / rect.height;
			const rotateY = (px - 0.5) * 2 * MAX;
			const rotateX = (0.5 - py) * 2 * MAX;

			el.style.setProperty("--cap-glow-x", `${px * 100}%`);
			el.style.setProperty("--cap-glow-y", `${py * 100}%`);
			el.style.setProperty("--cap-glow", "1");

			gsap.to(el, {
				rotateX,
				rotateY,
				translateY: -4,
				duration: 0.4,
				ease,
				transformPerspective: 1200,
				transformOrigin: "center",
			});
		};

		const handleLeave = () => {
			el.style.setProperty("--cap-glow", "0");
			gsap.to(el, {
				rotateX: 0,
				rotateY: 0,
				translateY: 0,
				duration: 0.7,
				ease,
			});
		};

		el.addEventListener("mousemove", handleMove);
		el.addEventListener("mouseleave", handleLeave);
		return () => {
			el.removeEventListener("mousemove", handleMove);
			el.removeEventListener("mouseleave", handleLeave);
		};
	}, []);

	return (
		<motion.div
			className="w-full"
			style={{ perspective: 1200 }}
			initial={{ opacity: 0, y: 24, scale: 0.96 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 0.85,
				ease: [0.22, 1, 0.36, 1],
				delay: i * 0.08,
			}}>
			<div
				ref={tiltRef}
				className={`${glowClass} group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.22),0_0_0_1px_rgba(255,255,255,0.9)_inset] transition-shadow duration-500 md:p-7`}
				style={
					{
						transformStyle: "preserve-3d",
						"--cap-glow-x": "50%",
						"--cap-glow-y": "50%",
						"--cap-glow": "0",
					} as React.CSSProperties
				}>
				{/* Top hairline */}
				<span
					aria-hidden
					className="pointer-events-none absolute inset-x-6 top-0 z-30 h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `linear-gradient(90deg, transparent, ${primary}, ${secondary}aa, transparent)`,
						boxShadow: `0 0 12px ${primary}55`,
					}}
				/>
				{/* Spotlight */}
				<div
					aria-hidden
					className="cap-spotlight pointer-events-none absolute inset-0 z-20"
				/>
				{/* Border glow */}
				<div
					aria-hidden
					className="cap-border-glow pointer-events-none absolute inset-0 z-30"
				/>
				{/* Ambient orb behind metric */}
				<div
					aria-hidden
					className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
					style={{
						background: `radial-gradient(circle, ${primary}55, transparent 70%)`,
					}}
				/>

				{/* Metric — the visual centerpiece */}
				<div
					className="relative z-10 flex flex-col items-start"
					style={{ transformStyle: "preserve-3d" }}>
					<motion.div
						className="bg-clip-text font-display text-[2rem] font-extrabold leading-[0.95] tracking-tight text-transparent md:text-[2.25rem]"
						style={{
							backgroundImage: `linear-gradient(120deg, ${primary}, ${secondary}, ${primary})`,
							backgroundSize: "200% 100%",
							transform: "translateZ(40px)",
						}}
						animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: "linear",
						}}>
						{c.metric}
					</motion.div>
					<span
						aria-hidden
						className="mt-3 h-[3px] w-12 origin-left rounded-full transition-all duration-700 group-hover:w-20"
						style={{
							background: `linear-gradient(90deg, ${primary}, ${secondary})`,
							boxShadow: `0 0 16px ${primary}66`,
						}}
					/>
				</div>

				{/* Title + description */}
				<div
					className="relative z-10 mt-5 flex flex-col gap-2"
					style={{ transformStyle: "preserve-3d" }}>
					<h3 className="font-display text-lg font-bold leading-[1.25] tracking-tight text-slate-900 md:text-xl">
						{c.t}
					</h3>
					<p className="text-[13px] leading-[1.65] text-slate-600">{c.d}</p>
				</div>
			</div>
		</motion.div>
	);
}

type Props = {
	items: readonly CapabilityItem[];
	/** Division accent. Drives the metric gradient, hairline and hover glow. */
	primary: string;
	secondary: string;
	eyebrow: string;
	/** Title reads `<titleLead><titleAccent>`, the second half in the gradient. */
	titleLead: string;
	titleAccent: string;
	intro: string;
};

/**
 * The capabilities grid, shared by all three division pages.
 *
 * This is the Teknosol card verbatim — 4-up, `p-6 md:p-7`, a fixed-size metric
 * over a rule, then title and copy. Cautomate and Crienviro had each grown
 * their own copy of it: bigger padding, a tag pill, a container-query metric
 * size and larger type, so the three pages no longer looked like one company.
 * They now render this, themed, and the design can only change in one place.
 */
export default function DivisionCapabilities({
	items,
	primary,
	secondary,
	eyebrow,
	titleLead,
	titleAccent,
	intro,
}: Props) {
	const ref = useReveal<HTMLDivElement>();
	// The hover glow is CSS (it reads the pointer position from custom
	// properties), so its colour cannot come from a style prop. Each instance
	// scopes its own rule under a unique class instead.
	const glowClass = `cap-glow-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
	const glow = rgbTriplet(primary);

	return (
		<section className="relative overflow-hidden py-16 md:py-20">
			{/* Ambient lighting */}
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-32 h-[26rem] w-[26rem] rounded-full blur-[160px]"
				style={{ background: `${primary}1c` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-32 bottom-12 h-[24rem] w-[24rem] rounded-full blur-[140px]"
				style={{ background: `${primary}14` }}
			/>

			<div
				ref={ref}
				className="container-x relative">
				<div className="mb-8 max-w-3xl">
					<div className="tk-fade eyebrow">
						<span
							className="h-px w-8"
							style={{ background: primary }}
						/>{" "}
						{eyebrow}
					</div>
					<h2 className="tk-fade section-title">
						<span className="text-slate-900">{titleLead} </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${primary}, ${secondary})`,
							}}>
							{titleAccent}
						</span>
					</h2>
					<p className="tk-fade mt-4 text-slate-600">{intro}</p>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{items.map((c, i) => (
						<CapabilityCard
							key={c.t}
							c={c}
							i={i}
							primary={primary}
							secondary={secondary}
							glowClass={glowClass}
						/>
					))}
				</div>
			</div>

			<style>{`
				.${glowClass}:hover {
					box-shadow:
						0 30px 80px -28px rgba(${glow}, 0.35),
						0 0 0 1px rgba(${glow}, 0.18) inset;
				}
				.${glowClass} .cap-spotlight {
					background: radial-gradient(
						circle at var(--cap-glow-x) var(--cap-glow-y),
						rgba(${glow}, calc(var(--cap-glow) * 0.18)),
						transparent 60%
					);
					opacity: var(--cap-glow);
					transition: opacity 0.25s ease;
					border-radius: inherit;
				}
				.${glowClass} .cap-border-glow {
					border-radius: inherit;
					padding: 1.5px;
					background: radial-gradient(
						circle at var(--cap-glow-x) var(--cap-glow-y),
						rgba(${glow}, calc(var(--cap-glow) * 0.85)),
						transparent 55%
					);
					-webkit-mask:
						linear-gradient(#000 0 0) content-box,
						linear-gradient(#000 0 0);
					-webkit-mask-composite: xor;
					mask-composite: exclude;
					opacity: var(--cap-glow);
					transition: opacity 0.25s ease;
				}
			`}</style>
		</section>
	);
}
