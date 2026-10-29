/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import { PRIMARY, SECONDARY } from "../../lib/theme";
import { IMPACT_STATS } from "../../lib/content/landing";

type StatItem = (typeof IMPACT_STATS)[number];

export default function StatsSection() {
	return (
		/* White surface — no background photograph behind the figures. The band
		   carries its own base rather than the shared `.section-stats` blue, which
		   the other stats bands still use. */
		<SectionWrapper className="relative isolate overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `radial-gradient(70% 55% at 50% 0%, ${PRIMARY}14, transparent 70%),
						linear-gradient(180deg, #ffffff 0%, #f7fbff 100%)`,
				}}
			/>

			{/* Brand blooms */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div
					className="stats-bloom absolute -top-32 left-[10%] h-[34rem] w-[34rem] rounded-full blur-[140px] opacity-25"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}66 0%, transparent 70%)`,
					}}
				/>
				<div
					className="stats-bloom absolute -bottom-40 right-[8%] h-[30rem] w-[30rem] rounded-full blur-[140px] opacity-20"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}66 0%, transparent 70%)`,
						animationDelay: "1.6s",
					}}
				/>
				<div
					className="stats-bloom absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-[110px] opacity-15"
					style={{
						background: `radial-gradient(circle, #7cd8ff77 0%, transparent 70%)`,
						animationDelay: "0.8s",
					}}
				/>
			</div>

			{/* Top + bottom hairlines */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-px"
				style={{
					background: `linear-gradient(90deg, transparent, ${PRIMARY}66, ${SECONDARY}66, transparent)`,
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
				style={{
					background: `linear-gradient(90deg, transparent, ${SECONDARY}55, ${PRIMARY}55, transparent)`,
				}}
			/>

			<div className="container-x relative z-10">
				<div className="mb-14 flex flex-wrap items-end justify-between gap-6">
					<div className="max-w-4xl">
						<div
							className="reveal mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em]"
							style={{ color: "#475569" }}>
							<span
								className="h-px w-8"
								style={{ background: PRIMARY }}
							/>
							{/* The client's heading for these figures (19 Sep). */}
							Numbers That Speak
						</div>
						{/* A full sentence rather than a two-word headline, so it takes
						    the smaller of the two heading sizes. */}
						<h2
							className="reveal section-title-sm"
							style={{ color: "#0f172a" }}>
							The trust we’ve earned through innovation,{" "}
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								drives us to take on bigger challenges.
							</span>
						</h2>
					</div>
				</div>

				<div className="grid auto-rows-fr gap-6 md:grid-cols-3">
					{IMPACT_STATS.map((s, i) => (
						<Stat
							key={s.label}
							{...s}
							index={i}
						/>
					))}
				</div>
			</div>

			<style>{`
				@keyframes statsPulse {
					0%, 100% { opacity: 0.32; transform: scale(1); }
					50% { opacity: 0.55; transform: scale(1.06); }
				}
				.stats-bloom { animation: statsPulse 7s ease-in-out infinite; }

				@keyframes statsSheen {
					0% { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
					18% { opacity: 1; }
					82% { opacity: 1; }
					100% { transform: translateX(220%) skewX(-12deg); opacity: 0; }
				}
				.stat-sheen { animation: statsSheen 2.2s cubic-bezier(0.22,1,0.36,1) 0.2s 1 both; }

				@keyframes statsGlowRotate { to { transform: rotate(360deg); } }
				.stat-rotate-glow { animation: statsGlowRotate 10s linear infinite; filter: blur(18px); }

				@media (prefers-reduced-motion: reduce) {
					.stats-bloom, .stat-sheen, .stat-rotate-glow { animation: none; }
				}
			`}</style>
		</SectionWrapper>
	);
}

type StatProps = StatItem & { index: number; caption?: string };

function Stat({ value, suffix = "+", label, caption, index }: StatProps) {
	const [n, setN] = useState(0);
	const cardRef = useRef<HTMLDivElement | null>(null);
	const [start, setStart] = useState(false);

	// Wait until the card scrolls into view before kicking off the count-up.
	// Otherwise the animation finishes before the user can see it.
	useEffect(() => {
		const el = cardRef.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setStart(true);
						obs.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	useEffect(() => {
		if (!start) return;
		const startDelay = index * 160;
		let raf = 0;
		const startId = window.setTimeout(() => {
			const duration = 1800;
			const t0 = performance.now();
			const tick = (now: number) => {
				const p = Math.min(1, (now - t0) / duration);
				const eased = 1 - Math.pow(1 - p, 3);
				setN(Math.floor(eased * value));
				if (p < 1) raf = requestAnimationFrame(tick);
				else setN(value);
			};
			raf = requestAnimationFrame(tick);
		}, startDelay);
		return () => {
			window.clearTimeout(startId);
			cancelAnimationFrame(raf);
		};
	}, [start, value, index]);

	return (
		<div
			ref={cardRef}
			className="group reveal relative isolate">
			{/* Hover halo */}
			<span
				aria-hidden
				className="pointer-events-none absolute -inset-3 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
				style={{
					background: `radial-gradient(closest-side, ${PRIMARY}55, ${SECONDARY}33 55%, transparent 75%)`,
				}}
			/>
			{/* Conic glow ring on hover */}
			<span
				aria-hidden
				className="stat-rotate-glow pointer-events-none absolute -inset-1 rounded-[1.75rem] opacity-0 transition-opacity duration-500 group-hover:opacity-70"
				style={{
					background: `conic-gradient(from 0deg, ${PRIMARY}99, transparent 25%, ${SECONDARY}99 50%, transparent 75%, ${PRIMARY}99)`,
				}}
			/>

			<div
				className="relative h-full overflow-hidden rounded-3xl border p-7 transition-[transform,border-color,box-shadow] duration-500 ease-out group-hover:-translate-y-1.5"
				style={{
					borderColor: "rgba(15,23,42,0.12)",
					background: "#ffffff",
					boxShadow:
						"0 24px 55px -26px rgba(15,23,42,0.30), 0 0 0 1px rgba(255,255,255,0.9) inset",
				}}>
				{/* Sheen sweep on mount */}
				<span
					aria-hidden
					className="stat-sheen pointer-events-none absolute inset-0"
					style={{
						background:
							"linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)",
					}}
				/>

				{/* Top hairline */}
				<span
					aria-hidden
					className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-80"
					style={{
						background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
						boxShadow: `0 0 12px ${PRIMARY}66`,
					}}
				/>

				{/* Soft inner bloom */}
				<span
					aria-hidden
					className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-35 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
					style={{ background: PRIMARY }}
				/>

				{/* Corner crosshair */}
				<span
					aria-hidden
					className="pointer-events-none absolute right-4 top-4 h-3.5 w-3.5 border-r-2 border-t-2 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
					style={{ borderColor: "rgba(15,23,42,0.35)" }}
				/>

				<div className="relative">
					<div className="mt-3 flex items-baseline gap-1 font-display text-6xl font-bold leading-none tracking-tight md:text-7xl">
						<span
							className="bg-clip-text text-transparent tabular-nums"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
							}}>
							{n}
						</span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							{suffix}
						</span>
					</div>

					<div
						className="mt-5 h-px w-12 transition-all duration-500 group-hover:w-28"
						style={{
							background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
							boxShadow: `0 0 10px ${PRIMARY}66`,
						}}
					/>

					<p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-700">
						{label}
					</p>
					<p className="mt-2 text-xs text-slate-500">{caption}</p>
				</div>
			</div>
		</div>
	);
}
