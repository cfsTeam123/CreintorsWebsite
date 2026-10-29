/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../Creintors/useReveal";
import { Icon } from "../../lib/icons";
import VariableProximity from "../custom/VariableProximity";
import {
	CRI_VISION_MISSION,
	CRI_STANDARDS,
	CRIENVIRO_THEME,
} from "../../lib/content/crienviro";

const PRIMARY = CRIENVIRO_THEME.primary;
const SECONDARY = CRIENVIRO_THEME.secondary;

const FROM_VARIATION = "'wght' 400, 'opsz' 9";
const TO_VARIATION = "'wght' 1000, 'opsz' 40";

export default function ComplianceSection() {
	const ref = useReveal<HTMLDivElement>();
	return (
		<section className="relative overflow-hidden py-24 md:py-28">
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-24 h-[26rem] w-[26rem] rounded-full blur-[160px]"
				style={{ background: `${PRIMARY}1c` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-32 bottom-24 h-[24rem] w-[24rem] rounded-full blur-[140px]"
				style={{ background: `${SECONDARY}33` }}
			/>

			<div
				ref={ref}
				className="container-x relative">
				<div className="mb-14 #max-w-4xl">
					<div className="tk-fade eyebrow">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						{CRI_VISION_MISSION.eyebrow}
					</div>
					<h2 className="tk-fade section-title">
						<span className="text-white">What drives </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(90deg, ${PRIMARY}, #ffffff)`,
							}}>
							every plant we deliver.
						</span>
					</h2>
					<p className="tk-fade mt-6 text-white/65">
						{CRI_VISION_MISSION.subcopy}
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2">
					<VisionCard />
					<MissionCard />
				</div>

				<div className="tk-fade mt-16 grid gap-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 md:grid-cols-[1.1fr_2fr] md:p-10">
					<div className="relative">
						<div
							className="font-mono text-xs uppercase tracking-[0.32em]"
							style={{ color: SECONDARY }}>
							Standards we work to
						</div>
						<h4 className="mt-3 font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
							Compliance, traceability,
							<br />
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(90deg, ${PRIMARY}, #ffffff)`,
								}}>
								and certification.
							</span>
						</h4>
						<Link
							to="/contact"
							className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.04]"
							style={{ background: PRIMARY }}>
							Plan a Treatment Plant →
						</Link>
					</div>
					<ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
						{CRI_STANDARDS.map((s) => (
							<li
								key={s}
								className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-500 hover:-translate-y-0.5 hover:border-[rgba(62,180,137,0.5)]">
								<span
									aria-hidden
									className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full"
								/>
								<div className="relative flex items-center gap-3">
									<span
										className="h-1.5 w-1.5 rounded-full"
										style={{ background: PRIMARY }}
									/>
									<span className="text-sm font-medium text-white/85">{s}</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

function VisionCard() {
	return (
		<article
			className="tk-fade group relative overflow-hidden rounded-3xl border p-10 md:p-12"
			style={{
				borderColor: `${PRIMARY}40`,
				background: `linear-gradient(135deg, ${PRIMARY}1f 0%, transparent 60%)`,
			}}>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-80"
				style={{ background: `${PRIMARY}55` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-40"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
					backgroundSize: "32px 32px",
					maskImage:
						"radial-gradient(ellipse at top right, black 30%, transparent 70%)",
				}}
			/>
			<div className="relative z-10">
				<div className="mb-7 flex items-center gap-3">
					<span
						className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-[0_10px_30px_-10px_rgba(62,180,137,0.65)]"
						style={{
							background: `linear-gradient(135deg, ${PRIMARY}, #8be4bc)`,
						}}>
						<Icon.Eye className="h-5 w-5" />
					</span>
					<div className="flex flex-col gap-1">
						<div
							className="text-[10px] font-bold uppercase tracking-[0.32em]"
							style={{ color: PRIMARY }}>
							Our Vision
						</div>
						<div
							className="text-[10px] uppercase tracking-[0.28em]"
							style={{ color: SECONDARY }}>
							Crienviro · 2026
						</div>
					</div>
				</div>
				<VisionHeadline />
				<div className="mt-8 flex items-center gap-3">
					<div className="flex items-center gap-1.5">
						{[0, 1, 2, 3].map((i) => (
							<span
								key={i}
								className="block h-3 w-1 rounded-full"
								style={{
									background: PRIMARY,
									opacity: 0.4 + i * 0.2,
									transform: `scaleY(${0.5 + i * 0.18})`,
									transformOrigin: "bottom",
								}}
							/>
						))}
					</div>
					<span
						className="font-mono text-[10px] uppercase tracking-[0.32em]"
						style={{ color: SECONDARY }}>
						Direction set
					</span>
				</div>
			</div>
		</article>
	);
}

function MissionCard() {
	return (
		<article
			className="tk-fade group relative overflow-hidden rounded-3xl border p-10 md:p-12"
			style={{
				borderColor: `${SECONDARY}66`,
				background: `linear-gradient(135deg, ${SECONDARY}26 0%, transparent 60%)`,
			}}>
			<div
				aria-hidden
				className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-80"
				style={{ background: `${SECONDARY}66` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-40"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
					backgroundSize: "32px 32px",
					maskImage:
						"radial-gradient(ellipse at bottom left, black 30%, transparent 70%)",
				}}
			/>
			<div className="relative z-10">
				<div className="mb-7 flex items-center gap-3">
					<span
						className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-[0_10px_30px_-10px_rgba(62,180,137,0.45)]"
						style={{
							background: `linear-gradient(135deg, ${SECONDARY}, ${PRIMARY})`,
						}}>
						<Icon.Target className="h-5 w-5" />
					</span>
					<div className="flex flex-col gap-1">
						<div
							className="text-[10px] font-bold uppercase tracking-[0.32em]"
							style={{ color: PRIMARY }}>
							Our Mission
						</div>
						<div
							className="text-[10px] uppercase tracking-[0.28em]"
							style={{ color: SECONDARY }}>
							Innovation · Compliance · Trust
						</div>
					</div>
				</div>
				<MissionHeadline />
				<div className="mt-8 flex items-center gap-3">
					<div className="flex items-center gap-1.5">
						{["Innovation", "Compliance", "Trust"].map((p) => (
							<span
								key={p}
								className="rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white/85"
								style={{
									borderColor: `${PRIMARY}55`,
									background: "rgba(255,255,255,0.03)",
								}}>
								{p}
							</span>
						))}
					</div>
				</div>
			</div>
		</article>
	);
}

function VisionHeadline() {
	const containerRef = useRef<HTMLHeadingElement | null>(null);
	return (
		<h3
			ref={containerRef}
			className="font-display text-2xl font-semibold leading-tight text-white md:text-[2rem]">
			<VariableProximity
				label="To be a "
				fromFontVariationSettings={FROM_VARIATION}
				toFontVariationSettings={TO_VARIATION}
				containerRef={containerRef}
				radius={120}
				falloff="gaussian"
			/>
			<span
				className="bg-clip-text text-transparent"
				style={{
					backgroundImage: `linear-gradient(90deg, ${PRIMARY}, #ffffff)`,
				}}>
				<VariableProximity
					label="trusted partner"
					fromFontVariationSettings={FROM_VARIATION}
					toFontVariationSettings={TO_VARIATION}
					containerRef={containerRef}
					radius={100}
					falloff="linear"
				/>
			</span>
			<VariableProximity
				label=" in water and environmental engineering delivering treatment, recycling and discharge systems that meet the highest standards of "
				fromFontVariationSettings={FROM_VARIATION}
				toFontVariationSettings={TO_VARIATION}
				containerRef={containerRef}
				radius={120}
				falloff="gaussian"
			/>
			<span
				className="bg-clip-text text-transparent"
				style={{
					backgroundImage: `linear-gradient(90deg, ${PRIMARY}, #ffffff)`,
				}}>
				<VariableProximity
					label="compliance and sustainability"
					fromFontVariationSettings={FROM_VARIATION}
					toFontVariationSettings={TO_VARIATION}
					containerRef={containerRef}
					radius={100}
					falloff="linear"
				/>
			</span>
			<VariableProximity
				label="."
				fromFontVariationSettings={FROM_VARIATION}
				toFontVariationSettings={TO_VARIATION}
				containerRef={containerRef}
				radius={120}
				falloff="gaussian"
			/>
		</h3>
	);
}

function MissionHeadline() {
	const containerRef = useRef<HTMLHeadingElement | null>(null);
	return (
		<h3
			ref={containerRef}
			className="font-display text-2xl font-semibold leading-tight text-white md:text-[2rem]">
			<VariableProximity
				label="Through a culture of "
				fromFontVariationSettings={FROM_VARIATION}
				toFontVariationSettings={TO_VARIATION}
				containerRef={containerRef}
				radius={120}
				falloff="gaussian"
			/>
			<span
				className="bg-clip-text text-transparent"
				style={{
					backgroundImage: `linear-gradient(90deg, ${PRIMARY}, #ffffff)`,
				}}>
				<VariableProximity
					label="innovation and disciplined execution"
					fromFontVariationSettings={FROM_VARIATION}
					toFontVariationSettings={TO_VARIATION}
					containerRef={containerRef}
					radius={100}
					falloff="linear"
				/>
			</span>
			<VariableProximity
				label=", build environmental infrastructure that helps industries, cities and institutions operate cleanly earning "
				fromFontVariationSettings={FROM_VARIATION}
				toFontVariationSettings={TO_VARIATION}
				containerRef={containerRef}
				radius={120}
				falloff="gaussian"
			/>
			<span
				className="bg-clip-text text-transparent"
				style={{
					backgroundImage: `linear-gradient(90deg, ${PRIMARY}, #ffffff)`,
				}}>
				<VariableProximity
					label="the trust of every regulator and downstream community"
					fromFontVariationSettings={FROM_VARIATION}
					toFontVariationSettings={TO_VARIATION}
					containerRef={containerRef}
					radius={100}
					falloff="linear"
				/>
			</span>
			<VariableProximity
				label="."
				fromFontVariationSettings={FROM_VARIATION}
				toFontVariationSettings={TO_VARIATION}
				containerRef={containerRef}
				radius={120}
				falloff="gaussian"
			/>
		</h3>
	);
}
