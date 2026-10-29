/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import {
	POLICY_THEME,
	ZED_CERTIFICATES,
	ZED_SCHEME,
} from "../../lib/content/policies";
import imgQuality from "../../assets/teknosol/cap-pressure.png";
import imgEnvironment from "../../assets/crienviro/wtp.png";
import imgSecurity from "../../assets/teknosol/cap-automation.png";
import imgSafety from "../../assets/teknosol/cap-leak.png";
import imgZed from "../../assets/teknosol/cap-endurance.png";

const PRIMARY = POLICY_THEME.primary;
const SECONDARY = POLICY_THEME.secondary;
const ACCENT = POLICY_THEME.accent;

/*
 * The four ISO standards certified on src/assets/gallery/iso.png, plus the ZED
 * level awarded on the three MSME certificates in src/assets/certificates.
 * Environment and information security were held before but not listed here,
 * which left the page understating what the management system actually covers.
 */
const STANDARDS = [
	{
		code: "ISO 9001",
		name: "Quality Management",
		tagline: "Consistency that customers can stake plans on.",
		body: "Process discipline, calibrated quality controls and customer-focused delivery: every product leaves the floor with the same engineering rigour applied to it.",
		accent: PRIMARY,
		image: imgQuality,
	},
	{
		code: "ISO 14001",
		name: "Environmental Management",
		tagline: "Built to leave the smaller mark.",
		body: "Environmental aspects identified and controlled across design, manufacture and site work, with the same review discipline applied to them as to quality.",
		accent: ACCENT,
		image: imgEnvironment,
	},
	{
		code: "ISO 27001",
		name: "Information Security",
		tagline: "Your drawings stay yours.",
		body: "Controls over the customer drawings, process data and project records we hold as an OEM, covering how information is stored, shared and retired.",
		accent: SECONDARY,
		image: imgSecurity,
	},
	{
		code: "ISO 45001",
		name: "Occupational Health & Safety",
		tagline: "Safe people, safer products.",
		body: "Hazard identification, risk controls and worker-led safety practices baked into design, manufacturing and on-site operations.",
		accent: SECONDARY,
		image: imgSafety,
	},
	{
		code: "ZED Silver",
		name: "Zero Defect · Zero Effect",
		tagline: "Quality without compromise to the planet.",
		body: "Silver level under the Government of India's MSME Sustainable (ZED) Certification Scheme, held by all three Creintors companies: products engineered for zero defects, processes engineered for zero environmental impact.",
		accent: ACCENT,
		image: imgZed,
	},
];

export default function StandardsSection() {
	return (
		<SectionWrapper className="section-tint relative py-10">
			<div className="container-x relative">
				<div className="mb-14 max-w-3xl">
					<div className="eyebrow reveal-from-top">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						Standards we operate to
					</div>
					<h2
						className="section-title reveal-from-left bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(95deg, #0b1220 0%, #0b1220 40%, ${PRIMARY} 75%, ${SECONDARY} 100%)`,
						}}>
						Five frameworks. One discipline.
					</h2>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{STANDARDS.map((s, i) => (
						<StandardCard
							key={s.code}
							standard={s}
							index={i}
						/>
					))}
				</div>

				{/*
				 * The ZED claim above, evidenced. Certificate and Udyam numbers are
				 * transcribed from the three MSME certificates, so a customer can
				 * verify the award rather than take the badge on trust.
				 */}
				<div className="reveal-from-bottom mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white/85 backdrop-blur-xl">
					<div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-slate-200 px-6 py-5 md:px-8">
						<h3 className="font-display text-lg font-semibold text-slate-900 md:text-xl">
							ZED certification register
						</h3>
						<p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
							{ZED_SCHEME.level} · Assessed by {ZED_SCHEME.assessor}
						</p>
					</div>

					<div className="overflow-x-auto">
						<table className="w-full min-w-[36rem] border-collapse text-left text-sm">
							<thead>
								<tr className="border-b border-slate-200 text-[10px] uppercase tracking-[0.18em] text-slate-500">
									<th className="px-6 py-3 font-semibold md:px-8">Company</th>
									<th className="px-6 py-3 font-semibold">Udyam registration</th>
									<th className="px-6 py-3 font-semibold">Certificate no.</th>
									<th className="px-6 py-3 font-semibold md:px-8">Issued</th>
								</tr>
							</thead>
							<tbody>
								{ZED_CERTIFICATES.map((c) => (
									<tr
										key={c.certificateNo}
										className="border-b border-slate-100 last:border-0">
										<td className="px-6 py-4 font-semibold text-slate-900 md:px-8">
											{c.company}
										</td>
										<td
											className="whitespace-nowrap px-6 py-4 font-mono text-[13px] text-slate-600"
											translate="no">
											{c.udyam}
										</td>
										<td
											className="whitespace-nowrap px-6 py-4 font-mono text-[13px] text-slate-600"
											translate="no">
											{c.certificateNo}
										</td>
										<td className="whitespace-nowrap px-6 py-4 text-slate-600 md:px-8">
											{c.issued}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<p className="border-t border-slate-200 px-6 py-4 text-xs leading-relaxed text-slate-500 md:px-8">
						{ZED_SCHEME.scheme}. Registered under NIC-2008 code {ZED_SCHEME.nic}.
						Validity: {ZED_SCHEME.validity.toLowerCase()}.
					</p>
				</div>
			</div>
		</SectionWrapper>
	);
}

function StandardCard({
	standard,
	index,
}: {
	standard: (typeof STANDARDS)[number];
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
		const rx = (0.5 - py) * 10;
		const ry = (px - 0.5) * 12;
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

	const DIRECTIONS = [
		"reveal-from-left",
		"reveal-from-bottom",
		"reveal-from-right",
	];
	const dirClass = DIRECTIONS[index % DIRECTIONS.length];

	return (
		<div
			ref={cardRef}
			onPointerMove={handleMove}
			onPointerLeave={handleLeave}
			className={`${dirClass} group relative h-full`}
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
					background: `radial-gradient(closest-side, ${standard.accent}88, transparent 70%)`,
				}}
			/>
			<div
				ref={innerRef}
				className="relative h-full overflow-hidden rounded-3xl border bg-white transition-[transform,border-color] duration-500 ease-out will-change-transform"
				style={{
					borderColor: `${standard.accent}33`,
					transformStyle: "preserve-3d",
					boxShadow: `0 30px 80px -32px ${standard.accent}66, 0 0 0 1px rgba(255,255,255,0.9) inset`,
				}}>
				{/* Image header */}
				<div className="relative h-44 overflow-hidden">
					<img
						src={standard.image}
						alt={standard.name}
						className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
					<div
						aria-hidden
						className="absolute inset-0"
						style={{
							background:
								"linear-gradient(180deg, transparent 30%, rgba(8,10,16,0.95) 95%)",
						}}
					/>
					<div
						className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
						style={{
							background: standard.accent,
							color: "#ffffff",
							boxShadow: `0 6px 18px -4px ${standard.accent}aa`,
						}}>
						0{index + 1}
					</div>
					<div className="absolute bottom-5 left-6 right-6">
						<div
							className="font-mono text-[10px] uppercase tracking-[0.32em]"
							style={{ color: standard.accent }}>
							{standard.name}
						</div>
						<div className="mt-2 font-display text-3xl font-semibold leading-tight text-white">
							{standard.code}
						</div>
					</div>
				</div>

				{/* Spotlight effect */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `radial-gradient(280px at var(--mx) var(--my), ${standard.accent}33, transparent 60%)`,
					}}
				/>

				<div className="relative p-6 md:p-7">
					<p
						className="text-sm font-medium leading-snug"
						style={{ color: standard.accent }}>
						{standard.tagline}
					</p>
					<div
						className="mt-3 h-px w-12"
						style={{
							background: `linear-gradient(90deg, ${standard.accent}, transparent)`,
						}}
					/>
					<p className="mt-4 text-sm leading-relaxed text-slate-600">
						{standard.body}
					</p>
				</div>

				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-70"
					style={{
						background: `linear-gradient(90deg, transparent, ${standard.accent}, transparent)`,
						boxShadow: `0 0 12px ${standard.accent}`,
					}}
				/>
			</div>
		</div>
	);
}
