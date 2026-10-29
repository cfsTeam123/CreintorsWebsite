/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef, useState } from "react";
import { useReveal } from "./Creintors/useReveal";

/**
 * The "Track Record" band, shared by every division page.
 *
 * This used to exist as three near-identical copies (Creintors Teknosol,
 * C Automate, Crienviro) that had already drifted apart: two sat on a dark
 * photograph, one on a light wash, and the numerals were readable on some and
 * not on others. It is now one component, so the section is guaranteed
 * identical everywhere and only its accent, heading and figures change.
 *
 * Background: a flat brand surface (`.section-stats`, defined once in
 * index.css) — no photograph behind the figures, which is what made the band
 * noisy and inconsistent from page to page.
 */

export type TrackRecordStat = {
	value: number;
	suffix: string;
	label: string;
};

type Props = {
	/** Division accent — used for the numerals, rule and hover edge. */
	accent: string;
	/** Muted brand tone for the "Metric 0N" line. */
	muted: string;
	/** Second accent, used only in the heading gradient. */
	accentAlt?: string;
	/** Heading, split so the second half can carry the gradient. */
	headingLead: string;
	headingAccent: string;
	stats: TrackRecordStat[];
	eyebrow?: string;
};

function Stat({
	value,
	suffix,
	label,
	index,
	accent,
	muted,
}: TrackRecordStat & { index: number; accent: string; muted: string }) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [n, setN] = useState(0);
	const [started, setStarted] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el || started) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setStarted(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.3, rootMargin: "0px 0px -10% 0px" },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [started]);

	useEffect(() => {
		if (!started) return;
		const duration = 1800;
		const t0 = performance.now();
		let raf = 0;
		const tick = (now: number) => {
			const p = Math.min(1, (now - t0) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.floor(eased * value));
			if (p < 1) raf = requestAnimationFrame(tick);
			else setN(value);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [started, value]);

	return (
		<div
			ref={ref}
			className="tk-fade group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28),0_0_0_1px_rgba(255,255,255,0.9)_inset] transition-all duration-500 hover:-translate-y-1"
			style={{ ["--tr-accent" as string]: accent }}>
			<span
				aria-hidden
				className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30"
				style={{ background: accent }}
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
				style={{
					background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
				}}
			/>
			<div className="relative flex h-full flex-col">
	
				{/* Solid brand ink on a solid light surface — the figures are the
				    highest-contrast thing in the band. */}
				<div
					className="mt-3 flex items-baseline gap-1 font-display text-5xl font-semibold leading-none md:text-6xl"
					style={{ color: accent }}>
					<span className="tabular-nums">{n}</span>
					<span>{suffix}</span>
				</div>
				<p className="mt-auto pt-4 text-[13px] font-semibold uppercase tracking-[0.28em] text-slate-600">
					{label}
				</p>
			</div>
		</div>
	);
}

export default function TrackRecordSection({
	accent,
	muted,
	accentAlt,
	headingLead,
	headingAccent,
	stats,
	eyebrow = "Track Record",
}: Props) {
	const ref = useReveal<HTMLDivElement>();

	return (
		<section className="section-stats relative isolate overflow-hidden py-24 md:py-28">
			<div
				ref={ref}
				className="container-x relative">
				<div className="mb-12">
					<div className="tk-fade eyebrow">
						<span
							className="h-px w-8"
							style={{ background: accent }}
						/>{" "}
						{eyebrow}
					</div>
					<h2 className="tk-fade section-title">
						<span className="text-slate-900">{headingLead} </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${accent} 0%, ${
									accentAlt ?? accent
								} 100%)`,
							}}>
							{headingAccent}
						</span>
					</h2>
				</div>

				<div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((s, i) => (
						<Stat
							key={s.label}
							index={i}
							accent={accent}
							muted={muted}
							{...s}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
