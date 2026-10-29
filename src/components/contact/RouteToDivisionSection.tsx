/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import { DIVISIONS, type Division } from "../../lib/divisions";
import { PRIMARY, SECONDARY } from "../../lib/theme";

export default function RouteToDivisionSection() {
	return (
		<SectionWrapper
			className="relative py-10"
			stagger={false}>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 overflow-hidden">
				<div
					className="absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-30 blur-[140px]"
					style={{ background: `${PRIMARY}33` }}
				/>
			</div>

			<div className="container-x relative">
				<div className="mb-12 max-w-3xl">
					<div className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						Route Direct
					</div>
					<h2 className="section-title">
						<span className="text-slate-900">Skip the queue </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							go to the right team
						</span>
						<span style={{ color: SECONDARY }}>.</span>
					</h2>
					<p className="mt-4 text-slate-600">
						If you already know which company you need, jump straight in.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					{DIVISIONS.map((d, i) => (
						<DivisionCard
							key={d.slug}
							division={d}
							index={i}
						/>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}

function DivisionCard({
	division: d,
	index,
}: {
	division: Division;
	index: number;
}) {
	const cardRef = useRef<HTMLAnchorElement | null>(null);
	const innerRef = useRef<HTMLDivElement | null>(null);
	const rafRef = useRef<number | null>(null);

	const handleMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
		const card = cardRef.current;
		const inner = innerRef.current;
		if (!card || !inner) return;
		const rect = card.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width;
		const py = (e.clientY - rect.top) / rect.height;
		const rx = (0.5 - py) * 9;
		const ry = (px - 0.5) * 11;
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		rafRef.current = requestAnimationFrame(() => {
			inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
			card.style.setProperty("--mx", `${px * 100}%`);
			card.style.setProperty("--my", `${py * 100}%`);
		});
	};

	const handleLeave = () => {
		const card = cardRef.current;
		const inner = innerRef.current;
		if (!card || !inner) return;
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		inner.style.transform = "rotateX(0deg) rotateY(0deg)";
		card.style.setProperty("--mx", "50%");
		card.style.setProperty("--my", "50%");
	};

	return (
		<Link
			ref={cardRef}
			to={`/${d.slug}`}
			onPointerMove={handleMove}
			onPointerLeave={handleLeave}
			className="group relative block"
			style={
				{
					perspective: "1200px",
					"--mx": "50%",
					"--my": "50%",
				} as React.CSSProperties
			}>
			<div
				aria-hidden
				className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50"
				style={{
					background: `radial-gradient(closest-side, ${d.accent}66, transparent 70%)`,
				}}
			/>
			<div
				ref={innerRef}
				className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-8 backdrop-blur-xl transition-[transform,border-color] duration-500 ease-out will-change-transform"
				style={{
					transformStyle: "preserve-3d",
					boxShadow: `0 30px 80px -40px ${d.accent}55, 0 0 0 1px rgba(255,255,255,0.85) inset`,
				}}>
				{/* Mouse spotlight */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `radial-gradient(280px at var(--mx) var(--my), ${d.accent}1f, transparent 60%)`,
					}}
				/>
				{/* Top neon line */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `linear-gradient(90deg, transparent, ${d.accent}, transparent)`,
						boxShadow: `0 0 12px ${d.accent}88`,
					}}
				/>
				{/* Hover glow blob */}
				<span
					aria-hidden
					className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
					style={{ background: d.accent }}
				/>

				<div className="relative">
					<div className="flex items-center gap-3">
						<span
							className="grid h-10 w-10 place-items-center rounded-xl font-display text-base font-bold text-white transition-transform duration-500 group-hover:scale-110"
							style={{
								background: d.accent,
								boxShadow: `0 8px 24px -6px ${d.accent}aa`,
							}}>
							0{index + 1}
						</span>
						<span className="font-mono text-[10px] uppercase tracking-[0.32em] text-slate-500">
							{d.legalName}
						</span>
					</div>

					<h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-slate-900">
						{d.name}
					</h3>
					<p
						className="mt-1 text-xs uppercase tracking-[0.18em]"
						style={{ color: d.accent }}>
						{d.shortTagline}
					</p>
					<div
						className="mt-4 h-px w-16 transition-all duration-500 group-hover:w-24"
						style={{
							background: `linear-gradient(90deg, ${d.accent}, transparent)`,
						}}
					/>
					<p className="mt-5 text-sm leading-relaxed text-slate-600">
						{d.tagline}
					</p>

					<div className="mt-7 flex flex-wrap gap-1.5">
						{d.focus.map((f) => (
							<span
								key={f}
								className="rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-700"
								style={{
									borderColor: `${d.accent}55`,
									background: `${d.accent}10`,
								}}>
								{f}
							</span>
						))}
					</div>

					{d.phones.length > 0 && (
						<div className="mt-6 space-y-1">
							{d.phones.map((p) => (
								<span
									key={p}
									role="button"
									tabIndex={0}
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										window.location.href = `tel:${p.replace(/\s+/g, "")}`;
									}}
									className="flex w-fit items-center gap-2 font-display text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900">
									<svg
										viewBox="0 0 16 16"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-3.5 w-3.5 shrink-0"
										style={{ color: d.accent }}
										aria-hidden>
										<path d="M3 3.5a1.5 1.5 0 0 1 1.5-1.5h1.2c.4 0 .76.27.87.66l.7 2.4a.9.9 0 0 1-.27.93l-1.07.9a9.5 9.5 0 0 0 4.18 4.18l.9-1.07a.9.9 0 0 1 .93-.27l2.4.7c.39.11.66.46.66.87v1.2a1.5 1.5 0 0 1-1.5 1.5h-.5C7.06 14 2 8.94 2 4v-.5Z" />
									</svg>
									{p}
								</span>
							))}
						</div>
					)}

					<div className="mt-7 flex items-center justify-between text-sm">
						<span className="font-mono text-slate-500">Est. {d.founded}</span>
						<span
							className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-3"
							style={{ color: d.accent }}>
							Reach {d.name}
							<span aria-hidden>→</span>
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
