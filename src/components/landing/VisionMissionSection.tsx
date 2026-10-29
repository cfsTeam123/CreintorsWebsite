/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import { PRIMARY, SECONDARY } from "../../lib/theme";
import { Icon } from "../../lib/icons";
import VariableProximity from "../custom/VariableProximity";
import bgImage from "../../assets/common/precisio.jpg";

export default function VisionMissionSection() {
	return (
		<SectionWrapper className="section-tint relative isolate flex h-screen min-h-[720px] flex-col overflow-hidden py-16 md:py-20">
			{/* Soft brand blooms */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div
					className="absolute -top-32 left-[8%] h-[34rem] w-[34rem] rounded-full blur-[140px] opacity-50"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}33 0%, transparent 70%)`,
					}}
				/>
				<div
					className="absolute -bottom-40 right-[6%] h-[32rem] w-[32rem] rounded-full blur-[140px] opacity-45"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}30 0%, transparent 70%)`,
					}}
				/>
			</div>

			<div className="container-x relative z-10 flex flex-1 min-h-0 flex-col">
				<div className="mb-16 max-w-6xl">
					<h2 className="reveal section-title">
						What drives{" "}
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							everything we build.
						</span>
					</h2>
					<p className="reveal mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
						Two principles that shape every product, project and partnership we
						take on from the very first sketch to long-term operation.
					</p>
				</div>

				<div className="grid flex-1 min-h-0 gap-8 md:grid-cols-2">
					<VisionCard />
					<MissionCard />
				</div>
			</div>
		</SectionWrapper>
	);
}

type CardProps = {
	label: string;
	accent: string;
	gradientTo: string;
	icon: React.ReactNode;
	footer: string;
	children: React.ReactNode;
};

function PillarCard({
	label,
	accent,
	gradientTo,
	icon,
	footer,
	children,
}: CardProps) {
	return (
		<div className="group reveal relative isolate h-full min-h-0">
			{/* Halo behind card on hover lives on the outer wrapper so overflow-hidden on the card doesn't clip it */}
			<span
				aria-hidden
				className="pointer-events-none absolute -inset-3 rounded-[2.25rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
				style={{
					background: `radial-gradient(closest-side, ${accent}99, transparent 70%)`,
				}}
			/>

			<div
				className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border p-10 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 md:p-12"
				style={{
					borderColor: `${accent}55`,
					boxShadow: `0 30px 80px -28px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.15) inset`,
				}}>
				{/* Background image */}
				<img
					aria-hidden
					src={bgImage}
					alt=""
					loading="lazy"
					decoding="async"
					className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
					style={{ filter: "saturate(0.95) contrast(1.05)" }}
				/>

				{/* Accent-tinted overlay so text reads clearly */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0"
					style={{
						background: `linear-gradient(160deg, ${accent}bf 0%, rgba(11,18,32,0.62) 55%, ${gradientTo}99 100%)`,
					}}
				/>

				{/* Subtle vignette */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0"
					style={{
						background:
							"radial-gradient(120% 80% at 50% 0%, transparent 0%, rgba(7,11,22,0.45) 100%)",
					}}
				/>

				{/* Top hairline */}
				<span
					aria-hidden
					className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-90 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `linear-gradient(90deg, transparent, #ffffff, transparent)`,
						boxShadow: `0 0 14px ${accent}aa`,
					}}
				/>

				{/* Corner crosshair */}
				<span
					aria-hidden
					className="pointer-events-none absolute right-5 top-5 h-4 w-4 border-r-2 border-t-2 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
					style={{ borderColor: "rgba(255,255,255,0.85)" }}
				/>

				<div className="relative z-10 flex h-full min-h-0 flex-col">
					<div className="mb-7 flex items-center gap-3">
						<span
							className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-[0_14px_30px_-8px_rgba(0,0,0,0.55)] ring-1 ring-white/25 transition-transform duration-500 group-hover:scale-105"
							style={{
								background: `linear-gradient(135deg, ${accent}, ${gradientTo})`,
							}}>
							{icon}
						</span>
						<h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-white/90">
							{label}
						</h3>
					</div>

					<div className="flex-1 min-h-0">{children}</div>

					<div
						className="mt-8 h-px w-full"
						style={{
							background: `linear-gradient(90deg, rgba(255,255,255,0.55), transparent)`,
						}}
					/>
				</div>
			</div>
		</div>
	);
}

function VisionCard() {
	const containerRef = useRef<HTMLParagraphElement | null>(null);
	return (
		<PillarCard
			label="Our Vision"
			accent={PRIMARY}
			gradientTo={SECONDARY}
			icon={<Icon.Eye className="h-5 w-5" />}
			footer="Sustainable innovation · Inspiring youth">
			<p
				ref={containerRef}
				className="font-display text-2xl font-semibold leading-tight text-white md:text-[2.1rem]"
				style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}>
				<VariableProximity
					label="To deliver "
					fromFontVariationSettings="'wght' 400, 'opsz' 9"
					toFontVariationSettings="'wght' 1000, 'opsz' 40"
					containerRef={containerRef}
					radius={120}
					falloff="gaussian"
				/>
				<span
					className="bg-clip-text text-transparent"
					style={{
						backgroundImage: `linear-gradient(90deg, #7cd8ff, #ffffff)`,
					}}>
					<VariableProximity
						label="sustainable innovations"
						fromFontVariationSettings="'wght' 400, 'opsz' 9"
						toFontVariationSettings="'wght' 1000, 'opsz' 40"
						containerRef={containerRef}
						radius={100}
						falloff="linear"
					/>
				</span>
				<VariableProximity
					label=" that build a better world and create an ecosystem that inspires the youth."
					fromFontVariationSettings="'wght' 400, 'opsz' 9"
					toFontVariationSettings="'wght' 1000, 'opsz' 40"
					containerRef={containerRef}
					radius={120}
					falloff="gaussian"
				/>
			</p>
		</PillarCard>
	);
}

function MissionCard() {
	const containerRef = useRef<HTMLParagraphElement | null>(null);
	return (
		<PillarCard
			label="Our Mission"
			accent={SECONDARY}
			gradientTo={PRIMARY}
			icon={<Icon.Target className="h-5 w-5" />}
			footer="Technical expertise · Holistic approach">
			<p
				ref={containerRef}
				className="font-display text-2xl font-semibold leading-tight text-white md:text-[2.1rem]"
				style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}>
				<VariableProximity
					label="To collaborate with all our stakeholders by relying on our "
					fromFontVariationSettings="'wght' 400, 'opsz' 9"
					toFontVariationSettings="'wght' 1000, 'opsz' 40"
					containerRef={containerRef}
					radius={120}
					falloff="gaussian"
				/>
				<span
					className="bg-clip-text text-transparent"
					style={{
						backgroundImage: `linear-gradient(90deg, #c2b3ff, #ffffff)`,
					}}>
					<VariableProximity
						label="technical expertise and unique holistic approach"
						fromFontVariationSettings="'wght' 400, 'opsz' 9"
						toFontVariationSettings="'wght' 1000, 'opsz' 40"
						containerRef={containerRef}
						radius={100}
						falloff="linear"
					/>
				</span>
				<VariableProximity
					label=", that delivers business excellence and motivates youth."
					fromFontVariationSettings="'wght' 400, 'opsz' 9"
					toFontVariationSettings="'wght' 1000, 'opsz' 40"
					containerRef={containerRef}
					radius={120}
					falloff="gaussian"
				/>
			</p>
		</PillarCard>
	);
}
