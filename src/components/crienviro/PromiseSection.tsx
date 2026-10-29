/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../Creintors/useReveal";
import {
	CRIENVIRO_THEME,
	CRI_PARTNERS,
	type CriPartner,
} from "../../lib/content/crienviro";

const PRIMARY = CRIENVIRO_THEME.primary;
const SECONDARY = CRIENVIRO_THEME.secondary;

export default function PromiseSection() {
	const ref = useReveal<HTMLDivElement>();
	return (
		<section className="relative overflow-hidden pb-32">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 overflow-hidden">
				<div
					className="cri-pulse absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}55, transparent 70%)`,
					}}
				/>
				<div
					className="cri-pulse absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full opacity-20 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}55, transparent 70%)`,
						animationDelay: "2.4s",
					}}
				/>
			</div>

			<div
				ref={ref}
				className="container-x relative">
				<div className="tk-fade mb-14 max-w-3xl">
					<div className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						Our Proud Associates
					</div>
					<h3 className="section-title">
						<span className="text-white">Engineering teams who </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(90deg, ${PRIMARY}, #ffffff)`,
							}}>
							trust us.
						</span>
					</h3>
					<p className="mt-6 text-white/65">
						Trusted by municipal bodies, industrial estates and institutions
						that depend on compliant, sustainable treatment.
					</p>
				</div>

				<div
					className="tk-fade relative overflow-hidden rounded-3xl p-[1.5px]"
					style={{
						background: `linear-gradient(135deg, ${PRIMARY}99, ${PRIMARY}22, ${PRIMARY}99)`,
						backgroundSize: "200% 100%",
						animation: "criBorderPan 10s linear infinite",
					}}>
					<div
						className="relative h-full overflow-hidden rounded-[calc(1.5rem-1.5px)] p-6 md:p-8"
						style={{
							background:
								"linear-gradient(180deg, rgba(8,10,16,0.92), rgba(8,10,16,0.96))",
						}}>
						<div
							aria-hidden
							className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-50 blur-3xl"
							style={{ background: `${PRIMARY}55` }}
						/>
						<div
							aria-hidden
							className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full opacity-30 blur-3xl"
							style={{ background: `${PRIMARY}44` }}
						/>
						<div
							aria-hidden
							className="pointer-events-none absolute inset-0 opacity-[0.05]"
							style={{
								backgroundImage:
									"linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
								backgroundSize: "28px 28px",
								maskImage:
									"radial-gradient(ellipse at top, black 30%, transparent 80%)",
							}}
						/>

						<div className="relative grid items-center gap-6 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-8">
							<div className="relative">
								<div className="mb-3 flex items-center gap-3">
									<span
										className="h-2 w-2 rounded-full"
										style={{
											background: PRIMARY,
											boxShadow: `0 0 12px ${PRIMARY}`,
										}}
									/>
									<span
										className="font-display text-xl font-semibold"
										style={{ color: PRIMARY }}>
										Crienviro
									</span>
								</div>
								<p className="text-sm leading-relaxed text-white/65">
									Water treatment, effluent and environmental engineering
									partners across municipalities and industry.
								</p>
								<div
									className="mt-4 h-px w-16"
									style={{
										background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
									}}
								/>
								<span className="mt-3 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 md:inline-block">
									03 / Company
								</span>
							</div>

							<div
								className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
								style={{ perspective: "1200px" }}>
								{CRI_PARTNERS.map((p, i) => (
									<ClientLogo
										key={p.name}
										partner={p}
										accent={PRIMARY}
										index={i}
									/>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="tk-fade mt-16 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:grid-cols-3 md:p-8">
					<div className="md:col-span-1">
						<div
							className="font-mono text-[10px] uppercase tracking-[0.32em]"
							style={{ color: SECONDARY }}>
							Explore the group
						</div>
						<h3 className="mt-2 font-display text-xl font-semibold text-white">
							Need test rigs or automation?
						</h3>
					</div>
					<Link
						to="/teknosol"
						className="group flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4 transition hover:border-brand-400/40 hover:bg-brand-400/5">
						<div>
							<div className="font-display text-lg text-white">Teknosol</div>
							<div className="text-xs text-white/50">
								Valve test rigs · SPMs
							</div>
						</div>
						<span className="text-brand-400 transition group-hover:translate-x-1">
							→
						</span>
					</Link>
					<Link
						to="/cautomate"
						className="group flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4 transition hover:border-accent-violet/40 hover:bg-accent-violet/5">
						<div>
							<div className="font-display text-lg text-white">C-Automate</div>
							<div className="text-xs text-white/50">
								Automation, ASRS, robotics
							</div>
						</div>
						<span className="text-accent-violet transition group-hover:translate-x-1">
							→
						</span>
					</Link>
				</div>

				<div className="tk-fade mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-10 text-center md:p-16">
					<p
						className="font-mono text-xs uppercase tracking-[0.32em]"
						style={{ color: SECONDARY }}>
						Let's engineer cleaner water, together
					</p>
					<h3 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">
						<span className="text-white">Treat smarter. </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
							}}>
							Discharge cleaner.
						</span>
					</h3>
					<Link
						to="/contact"
						className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.04]"
						style={{ background: PRIMARY }}>
						Contact our team →
					</Link>
				</div>
			</div>

			<style>{`
				@keyframes criPulse {
					0%, 100% { opacity: 0.18; transform: scale(1); }
					50%      { opacity: 0.32; transform: scale(1.06); }
				}
				.cri-pulse { animation: criPulse 6.5s ease-in-out infinite; }
				@keyframes criBorderPan {
					0%   { background-position: 0% 0%; }
					100% { background-position: 200% 0%; }
				}
			`}</style>
		</section>
	);
}

function ClientLogo({
	partner,
	accent,
	index,
}: {
	partner: CriPartner;
	accent: string;
	index: number;
}) {
	const cardRef = useRef<HTMLDivElement | null>(null);
	const innerRef = useRef<HTMLDivElement | null>(null);
	const rafRef = useRef<number | null>(null);

	const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
		const card = cardRef.current;
		const inner = innerRef.current;
		if (!card || !inner) return;
		const rect = card.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width;
		const py = (e.clientY - rect.top) / rect.height;
		const rx = (0.5 - py) * 14;
		const ry = (px - 0.5) * 16;
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
		<div
			ref={cardRef}
			onPointerMove={handleMove}
			onPointerLeave={handleLeave}
			className="group relative h-28"
			style={
				{
					transformStyle: "preserve-3d",
					transitionDelay: `${index * 60}ms`,
					"--mx": "50%",
					"--my": "50%",
				} as React.CSSProperties
			}>
			<div
				aria-hidden
				className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-80"
				style={{
					background: `radial-gradient(closest-side, ${accent}99, transparent 70%)`,
				}}
			/>
			<div
				ref={innerRef}
				className="relative h-full overflow-hidden rounded-2xl border bg-white transition-[transform,border-color,box-shadow] duration-500 ease-out will-change-transform"
				style={{
					transformStyle: "preserve-3d",
					borderColor: `${accent}33`,
					boxShadow: `0 6px 18px -10px ${accent}55`,
				}}
				onMouseEnter={(e) => {
					(e.currentTarget as HTMLDivElement).style.borderColor = accent;
					(e.currentTarget as HTMLDivElement).style.boxShadow =
						`0 22px 60px -10px ${accent}aa, 0 0 0 1px ${accent}cc inset, 0 0 30px ${accent}55`;
				}}
				onMouseLeave={(e) => {
					(e.currentTarget as HTMLDivElement).style.borderColor = `${accent}33`;
					(e.currentTarget as HTMLDivElement).style.boxShadow =
						`0 6px 18px -10px ${accent}55`;
				}}>
				<img
					src={partner.logo}
					alt={partner.name}
					className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-20 opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `radial-gradient(220px at var(--mx) var(--my), ${accent}55, transparent 60%)`,
					}}
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-60"
					style={{
						background: `radial-gradient(320px at var(--mx) var(--my), ${accent}33, transparent 55%)`,
					}}
				/>
				<div
					aria-hidden
					className="absolute inset-x-0 top-0 h-[2px] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
						boxShadow: `0 0 12px ${accent}`,
					}}
				/>
				<div
					aria-hidden
					className="absolute inset-x-0 bottom-0 h-[2px] opacity-40 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
						boxShadow: `0 0 12px ${accent}`,
					}}
				/>
			</div>
		</div>
	);
}
