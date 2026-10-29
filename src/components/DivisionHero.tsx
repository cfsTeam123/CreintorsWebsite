/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsap";
import groupC from "../assets/logos/logoc.png";
import { HERO_SCRIM, SECONDARY, tint } from "../lib/theme";

export type DivisionStat = { value: number; suffix: string; label: string };

/**
 * One figure in the hero band.
 *
 * These are the Track Record numbers that used to sit in their own "Impact"
 * section further down each division page. They count up once, on mount: the
 * band is above the fold, so there is nothing to wait for.
 */
function HeroStat({
	value,
	suffix,
	label,
	index,
	accent,
}: DivisionStat & { index: number; accent: string }) {
	const [n, setN] = useState(0);

	useEffect(() => {
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			setN(value);
			return;
		}

		let raf = 0;
		let start: number | null = null;
		const delay = 500 + index * 140;
		const duration = 1600;

		const tick = (now: number) => {
			start ??= now;
			const elapsed = now - start - delay;
			if (elapsed < 0) {
				raf = requestAnimationFrame(tick);
				return;
			}
			const p = Math.min(1, elapsed / duration);
			setN(Math.floor((1 - Math.pow(1 - p, 3)) * value));
			if (p < 1) raf = requestAnimationFrame(tick);
			else setN(value);
		};

		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [value, index]);

	return (
		<div className="group relative flex flex-col items-center justify-center px-1.5 py-5 text-center sm:px-3 md:px-6 md:py-6">
			{index > 0 && (
				<span
					aria-hidden
					className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 md:block"
					style={{
						background:
							"linear-gradient(180deg, transparent, rgba(255,255,255,0.22), transparent)",
					}}
				/>
			)}

			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-60"
				style={{
					background: `linear-gradient(90deg, transparent, ${tint(accent, 0.55)}99, transparent)`,
				}}
			/>

			<div
				className="flex items-baseline bg-clip-text font-display text-4xl font-bold leading-none tracking-tight text-transparent md:text-5xl"
				style={{
					backgroundImage: `linear-gradient(160deg, #ffffff 0%, #ffffff 42%, ${tint(accent, 0.62)} 100%)`,
				}}>
				<span className="tabular-nums">{n}</span>
				<span>{suffix}</span>
			</div>
			{/* Tighter tracking on phones: three two-word labels ("Awards of
			    Recognition") share a 320px row there. */}
			<div className="mt-3 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/70 sm:tracking-[0.28em] md:text-[11px]">
				{label}
			</div>
		</div>
	);
}

type Props = {
	/**
	 * The division's own film, played full-bleed behind the headline. Optional:
	 * a division that has given its film a home further down the page passes a
	 * still instead.
	 */
	video?: string;
	/**
	 * A photograph behind the headline in place of the film, for a division that
	 * has given its film a home further down the page.
	 */
	image?: string;
	/** Division accent, used for the colour blooms and the stat hairlines. */
	accent: string;
	/** The lead line above "Think Us" — e.g. "Think Automation,". */
	leadLine: string;
	/** Track Record figures for the band under the headline. */
	stats: DivisionStat[];
	/** Company name for screen readers, e.g. "Creintors Cautomate". */
	name: string;
	/**
	 * The C mark. Defaults to the group's blue C; the divisions that have their
	 * own coloured C pass it. The hero sets a light halo behind the mark so the
	 * darker division Cs — Cautomate's navy, Crienviro's grey — still separate
	 * from the scrim.
	 */
	logo?: string;
};

/**
 * The hero every division page shares: the Creintors C beside a
 * "Think <something>, Think Us" lockup, over the company's own film, with that
 * company's Track Record figures banded underneath.
 *
 * It was written for Teknosol and then asked for on Cautomate and Crienviro
 * too. Rather than keep three copies in step by hand, the three heroes are now
 * this one component with the film, accent, lead line and figures passed in —
 * so "same as the Teknosol page" is structural rather than a thing to remember.
 */
export default function DivisionHero({
	video,
	image,
	accent,
	leadLine,
	stats,
	name,
	logo = groupC,
}: Props) {
	const heroRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".hero-fade",
				{ opacity: 0, y: 28 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					stagger: 0.1,
					delay: 0.35,
				},
			);
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={heroRef}
			className="relative isolate flex h-[100svh] max-h-[100svh] items-center justify-center overflow-hidden pb-16 pt-24 md:pb-20 md:pt-28"
			style={{ backgroundColor: "#0b1220" }}>
			{/* The company's own film — or a photograph — full-bleed, the way the
			    group hero plays the group montage. */}
			<div className="absolute inset-0 -z-20">
				{image ?
					<img
						src={image}
						alt=""
						aria-hidden
						className="absolute inset-0 h-full w-full object-cover"
						style={{ filter: "saturate(1.08) contrast(1.06)" }}
					/>
				: video ?
					<video
						src={video}
						aria-hidden
						autoPlay
						muted
						loop
						playsInline
						preload="auto"
						className="absolute inset-0 h-full w-full object-cover"
						style={{ filter: "saturate(1.08) contrast(1.06)" }}
					/>
				:	null}
			</div>

			{/* A dark scrim, not the group hero's white wash — see HERO_SCRIM. These
			    three heroes hold photographs, and a photograph washed out pale enough
			    to carry dark type stops looking like one. */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{ background: HERO_SCRIM }}
			/>

			{/* Brand colour blooms, in this division's accent — lightened and screened
			    rather than multiplied, now that the ground under them is dark. */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div
					className="absolute left-1/2 top-1/3 h-[55vmin] w-[55vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px] mix-blend-screen"
					style={{
						background: `radial-gradient(circle, ${tint(accent, 0.5)}33 0%, transparent 70%)`,
					}}
				/>
				<div
					className="absolute left-[15%] top-[25%] h-[24vmin] w-[24vmin] rounded-full opacity-30 blur-[100px] mix-blend-screen"
					style={{
						background: `radial-gradient(circle, ${tint(SECONDARY, 0.5)}2e 0%, transparent 70%)`,
					}}
				/>
				<div
					className="absolute right-[12%] top-[60%] h-[22vmin] w-[22vmin] rounded-full opacity-30 blur-[90px] mix-blend-screen"
					style={{
						background: `radial-gradient(circle, ${tint(accent, 0.5)}33 0%, transparent 70%)`,
					}}
				/>
			</div>

			<div className="container-x relative z-10 mt-10 md:mt-12">
				<div className="flex max-w-7xl flex-col items-center gap-6 text-center md:gap-8">
					<div className="hero-fade relative self-start">
						<div
							aria-hidden
							className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[55vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 animate-logoGlow rounded-full blur-3xl"
							style={{
								background: `radial-gradient(ellipse, rgba(6,12,24,0.38) 0%, ${tint(accent, 0.5)}24 48%, transparent 74%)`,
							}}
						/>

						<h1
							className="relative flex animate-logoIn items-end justify-center gap-3 sm:gap-4 md:gap-2"
							aria-label={`${name}. ${leadLine} Think Us`}>
							<span className="sr-only">{name}</span>
							<img
								src={logo}
								alt="Creintors"
								className="relative block h-auto w-[min(34vw,24vh,220px)] max-w-full shrink-0 select-none object-contain"
								/*
								 * Depth only — no rim. The mark used to carry three tight
								 * white shadows tracing its silhouette, which read as a
								 * cut-out halo against the photograph. Separation now comes
								 * from the scrim and the dark bloom behind the lockup, which
								 * darken the ground under the mark rather than outlining it.
								 */
								style={{
									filter: "drop-shadow(0 16px 30px rgba(2,6,20,0.60))",
								}}
								draggable={false}
							/>
							{/*
							 * The lead line can run half again as wide as the group hero's
							 * "Think Innovation," so it steps up to full size a breakpoint
							 * later and never wraps away from "Think Us".
							 */}
							<span className="flex flex-col items-start text-left leading-tight">
								<span
									className="whitespace-nowrap text-xl font-normal tracking-normal text-white/85 sm:text-2xl md:text-[40px] lg:text-[53px]"
									style={{
										textShadow:
											"0 2px 14px rgba(2,6,20,0.72), 0 0 40px rgba(2,6,20,0.50)",
									}}>
									{leadLine}
								</span>
								<span
									className="text-5xl font-semibold tracking-normal text-white sm:text-6xl md:text-7xl lg:text-8xl"
									style={{
										textShadow:
											"0 3px 18px rgba(2,6,20,0.75), 0 0 44px rgba(2,6,20,0.55)",
									}}>
									Think Us
								</span>
							</span>
						</h1>
					</div>

					{/* The Track Record figures, moved up out of the old Impact band. */}
					<div className="hero-fade w-full max-w-5xl">
						<div
							className={`relative mx-auto grid overflow-hidden rounded-2xl border backdrop-blur-md ${
								// Three figures sit in one row, as on the home hero, rather
								// than leaving a gap in the four-across grid.
								stats.length === 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4"
							}`}
							style={{
								borderColor: "rgba(255,255,255,0.16)",
								background: "rgba(9,15,28,0.44)",
								boxShadow:
									"0 30px 80px -34px rgba(2,6,20,0.65), inset 0 1px 0 rgba(255,255,255,0.16)",
							}}>
							{stats.map((s, i) => (
								<HeroStat
									key={s.label}
									value={s.value}
									suffix={s.suffix}
									label={s.label}
									index={i}
									accent={accent}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
