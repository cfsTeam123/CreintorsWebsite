/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import { PRIMARY, SECONDARY } from "../../lib/theme";
import { CAPABILITIES, CAPABILITY_BADGES } from "../../lib/content/landing";
import { Icon } from "../../lib/icons";
import noImage from "../../assets/no.png";
import precisionImg from "../../assets/common/precisio.jpg";
import automationImg from "../../assets/common/industry_automatio.jpg";
import environmentalImg from "../../assets/common/environmental_so.jpg";

// Index-aligned with CAPABILITIES (Precision Engineering, Industrial Automation, Environmental Solutions)
const CAPABILITY_IMAGES = [precisionImg, automationImg, environmentalImg];

type IconComp = React.ComponentType<{ className?: string }>;

export default function CapabilitiesSection() {
	return (
		<SectionWrapper className="relative py-24 md:py-28">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 overflow-hidden">
				<div
					className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full blur-[140px] opacity-25 capabilities-pulse"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}40, transparent 70%)`,
					}}
				/>
				<div
					className="absolute -bottom-40 right-1/4 h-[28rem] w-[28rem] rounded-full blur-[120px] opacity-20 capabilities-pulse"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}33, transparent 70%)`,
						animationDelay: "2.5s",
					}}
				/>
			</div>

			<div className="container-x relative">
				<div className="mb-14 flex flex-wrap items-end justify-between gap-6">
					<div className="max-w-3xl">
						<div className="eyebrow reveal">
							<span
								className="h-px w-8"
								style={{ background: PRIMARY }}
							/>{" "}
							Our Capabilities
						</div>
						<h2 className="section-title reveal">
							Core engineering{" "}
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								expertise.
							</span>
						</h2>
						<p className="reveal mt-6 text-slate-600">
							Three deep engineering pillars built across twelve years of
							delivery, designed to work as one integrated capability stack.
						</p>
					</div>

					<div className="reveal flex flex-wrap gap-2">
						{CAPABILITY_BADGES.map((b) => (
							<span
								key={b}
								className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
								style={{
									borderColor: `${PRIMARY}40`,
									background: `${PRIMARY}12`,
									color: PRIMARY,
								}}>
								<Icon.Chip className="h-3.5 w-3.5" />
								{b}
							</span>
						))}
					</div>
				</div>

				<div
					className="grid gap-6 md:grid-cols-3"
					style={{ perspective: "1600px" }}>
					{CAPABILITIES.map((c, i) => (
						<CapabilityCard
							key={c.title}
							index={i}
							icon={c.icon}
							title={c.title}
							desc={c.desc}
							points={c.points}
						/>
					))}
				</div>
			</div>

			<style>{`
				@keyframes capabilitiesPulse {
					0%, 100% { opacity: 0.18; transform: scale(1); }
					50% { opacity: 0.34; transform: scale(1.06); }
				}
				.capabilities-pulse { animation: capabilitiesPulse 6s ease-in-out infinite; }
			`}</style>
		</SectionWrapper>
	);
}

type CapabilityCardProps = {
	index: number;
	icon: IconComp;
	title: string;
	desc: string;
	points: string[];
};

function CapabilityCard({
	index,
	icon: CIcon,
	title,
	desc,
	points,
}: CapabilityCardProps) {
	const cardRef = useRef<HTMLDivElement | null>(null);
	const innerRef = useRef<HTMLDivElement | null>(null);
	const imgRef = useRef<HTMLImageElement | null>(null);
	const rafRef = useRef<number | null>(null);

	const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
		const card = cardRef.current;
		const inner = innerRef.current;
		const img = imgRef.current;
		if (!card || !inner) return;
		const rect = card.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width;
		const py = (e.clientY - rect.top) / rect.height;
		const rx = (0.5 - py) * 16;
		const ry = (px - 0.5) * 18;
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		rafRef.current = requestAnimationFrame(() => {
			inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.015)`;
			card.style.setProperty("--mx", `${px * 100}%`);
			card.style.setProperty("--my", `${py * 100}%`);
			card.style.setProperty("--rx", `${rx}`);
			card.style.setProperty("--ry", `${ry}`);
			if (img) {
				const ix = (px - 0.5) * -22;
				const iy = (py - 0.5) * -22;
				img.style.transform = `translate3d(${ix}px, ${iy}px, 0) scale(1.18)`;
			}
		});
	};

	const handleLeave = () => {
		const card = cardRef.current;
		const inner = innerRef.current;
		const img = imgRef.current;
		if (!card || !inner) return;
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
		card.style.setProperty("--mx", "50%");
		card.style.setProperty("--my", "50%");
		card.style.setProperty("--rx", "0");
		card.style.setProperty("--ry", "0");
		if (img) img.style.transform = "translate3d(0, 0, 0) scale(1.06)";
	};

	return (
		<div
			ref={cardRef}
			onPointerMove={handleMove}
			onPointerLeave={handleLeave}
			className="reveal group relative h-full min-h-[34rem] md:min-h-[36rem]"
			style={{
				transformStyle: "preserve-3d",
				transitionDelay: `${index * 90}ms`,
				// @ts-expect-error custom CSS vars
				"--mx": "50%",
				"--my": "50%",
				"--rx": "0",
				"--ry": "0",
			}}>
			{/* Outer halo glow that intensifies on hover */}
			<div
				aria-hidden
				className="pointer-events-none absolute -inset-2 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-70"
				style={{
					background: `radial-gradient(closest-side, ${PRIMARY}40, transparent 70%)`,
				}}
			/>

			<div
				ref={innerRef}
				className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/40 backdrop-blur-md transition-[transform,border-color,box-shadow] duration-500 ease-out will-change-transform group-hover:border-white/60"
				style={{
					transformStyle: "preserve-3d",
					boxShadow:
						"0 30px 80px -28px rgba(15,23,42,0.35), 0 0 0 1px rgba(255,255,255,0.4) inset",
				}}>
				{/* IMAGE LAYER (back) */}
				<div
					className="absolute inset-0 overflow-hidden"
					style={{ transformStyle: "preserve-3d", transform: "translateZ(0)" }}>
					<img
						ref={imgRef}
						src={CAPABILITY_IMAGES[index] ?? noImage}
						alt=""
						className="absolute inset-0 h-full w-full object-cover will-change-transform"
						style={{
							transform: "translate3d(0, 0, 0) scale(1.06)",
							transition:
								"transform 700ms cubic-bezier(0.22, 1, 0.36, 1), filter 700ms ease",
							filter: "saturate(1.08) contrast(1.05)",
						}}
					/>

					{/* Engineering grid sheen */}
					<div
						aria-hidden
						className="absolute inset-0 opacity-30 mix-blend-overlay"
						style={{
							backgroundImage:
								"linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
							backgroundSize: "32px 32px",
							maskImage:
								"radial-gradient(ellipse at 50% 30%, black 30%, transparent 80%)",
						}}
					/>

					{/* Bottom-up dark wash (deeper than before) */}
					<div
						aria-hidden
						className="absolute inset-0"
						style={{
							background:
								"linear-gradient(180deg, rgba(5,6,10,0.25) 0%, rgba(5,6,10,0.55) 35%, rgba(5,6,10,0.92) 70%, rgba(5,6,10,0.99) 100%)",
						}}
					/>

					{/* Primary tint from bottom */}
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100"
						style={{
							background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${PRIMARY}3a 0%, transparent 65%)`,
						}}
					/>

					{/* Secondary corner accent */}
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen"
						style={{
							background: `radial-gradient(ellipse at 0% 0%, ${SECONDARY}33 0%, transparent 55%)`,
						}}
					/>

					{/* Edge vignette */}
					<div
						aria-hidden
						className="absolute inset-0"
						style={{
							boxShadow: "inset 0 0 120px rgba(0,0,0,0.7)",
						}}
					/>
				</div>

				{/* Top + bottom hairlines */}
				<div
					aria-hidden
					className="absolute inset-x-0 top-0 h-px"
					style={{
						background: `linear-gradient(90deg, transparent, ${PRIMARY}cc, transparent)`,
						boxShadow: `0 0 14px ${PRIMARY}88`,
					}}
				/>
				<div
					aria-hidden
					className="absolute inset-x-0 bottom-0 h-px"
					style={{
						background: `linear-gradient(90deg, transparent, ${SECONDARY}cc, transparent)`,
						boxShadow: `0 0 14px ${SECONDARY}66`,
					}}
				/>

				{/* Cursor spotlight (mid layer) */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-20 opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `radial-gradient(460px at var(--mx) var(--my), ${PRIMARY}55, transparent 60%)`,
					}}
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-10 opacity-30 transition-opacity duration-500 group-hover:opacity-80"
					style={{
						background: `radial-gradient(680px at var(--mx) var(--my), rgba(255,255,255,0.1), transparent 55%)`,
					}}
				/>

				{/* Cursor-following border glow */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						borderRadius: "inherit",
						padding: "1.5px",
						background: `radial-gradient(circle at var(--mx) var(--my), ${PRIMARY}, transparent 55%)`,
						WebkitMask:
							"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
						WebkitMaskComposite: "xor",
						maskComposite: "exclude",
					}}
				/>

				{/* CONTENT LAYER (front) */}
				<div
					className="relative z-10 flex h-full flex-col p-8 md:p-10"
					style={{ transform: "translateZ(60px)" }}>
					<div className="flex items-start justify-between">
						<span
							className="grid h-[68px] w-[68px] place-items-center rounded-2xl text-white shadow-lg transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-110"
							style={{
								background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
								boxShadow: `0 22px 50px -12px ${PRIMARY}aa, 0 0 0 1px rgba(255,255,255,0.08) inset`,
								transform: "translateZ(80px)",
							}}>
							<CIcon className="h-7 w-7" />
						</span>
					</div>

					<div
						className="mt-auto"
						style={{ transform: "translateZ(60px)" }}>
						<div className="flex items-center gap-2">
							<span
								className="h-[3px] rounded-full transition-all duration-500 group-hover:w-14"
								style={{
									width: "1.5rem",
									background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
									boxShadow: `0 0 10px ${PRIMARY}99`,
								}}
							/>
							<span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55">
								Capability
							</span>
						</div>

						<h3
							className="mt-3 font-display text-2xl font-semibold leading-snug text-white md:text-[2rem]"
							style={{
								transform: "translateZ(80px)",
								textShadow: "0 4px 20px rgba(0,0,0,0.7)",
							}}>
							{title}
						</h3>
						<p
							className="mt-3 text-sm leading-relaxed text-white/80 md:text-[15px]"
							style={{
								transform: "translateZ(40px)",
								textShadow: "0 2px 10px rgba(0,0,0,0.7)",
							}}>
							{desc}
						</p>

						<div
							className="mt-7 flex flex-wrap gap-2"
							style={{ transform: "translateZ(70px)" }}>
							{points.map((p) => (
								<span
									key={p}
									className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/65"
									style={{
										borderColor: `${PRIMARY}88`,
										background: `rgba(5,6,10,0.6)`,
										boxShadow: `0 6px 18px -8px ${PRIMARY}88`,
									}}>
									<span
										className="h-1.5 w-1.5 rounded-full"
										style={{
											background: PRIMARY,
											boxShadow: `0 0 10px ${PRIMARY}`,
										}}
									/>
									{p}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* Corner crosshairs */}
				<span
					aria-hidden
					className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 transition-opacity duration-500 group-hover:opacity-100 opacity-50"
					style={{ borderColor: PRIMARY, transform: "translateZ(40px)" }}
				/>
				<span
					aria-hidden
					className="pointer-events-none absolute right-4 bottom-4 h-5 w-5 border-r-2 border-b-2 transition-opacity duration-500 group-hover:opacity-100 opacity-50"
					style={{ borderColor: SECONDARY, transform: "translateZ(40px)" }}
				/>
			</div>
		</div>
	);
}
