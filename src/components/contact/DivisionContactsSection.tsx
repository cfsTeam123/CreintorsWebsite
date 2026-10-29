/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef } from "react";
import { motion } from "motion/react";
import SectionWrapper from "../SectionWrapper";
import { DIVISIONS, GROUP_PHONES, getContactPerson } from "../../lib/divisions";
import { PRIMARY, SECONDARY } from "../../lib/theme";

import groupLogo from "../../assets/logos/logo.png";
import teknosolLogo from "../../assets/logos/tecnoLogo.png";
import cautomateLogo from "../../assets/logos/automateLogo.png";
import crienviroLogo from "../../assets/logos/envLogo.png";

const GROUP_ACCENT = "#46367F";

/** Short company codes + brand logos, keyed by division slug. */
const ABBR: Record<string, string> = {
	teknosol: "CTPL",
	cautomate: "CASPL",
	crienviro: "CESPL",
};
const LOGOS: Record<string, string> = {
	teknosol: teknosolLogo,
	cautomate: cautomateLogo,
	crienviro: crienviroLogo,
};

type CompanyContact = {
	abbr: string;
	name: string;
	legalName: string;
	kind: string;
	phones: string[];
	accent: string;
	logo: string;
};

const COMPANIES: CompanyContact[] = [
	{
		abbr: "Group",
		name: "Creintors Group of Companies",
		legalName: "Creintors Group of Companies",
		kind: "Group",
		phones: GROUP_PHONES,
		accent: GROUP_ACCENT,
		logo: groupLogo,
	},
	...DIVISIONS.map((d) => ({
		abbr: ABBR[d.slug] ?? d.name,
		name: d.name,
		legalName: d.legalName,
		kind: "Company",
		phones: d.phones,
		accent: d.accent,
		logo: LOGOS[d.slug] ?? groupLogo,
	})),
];

export default function DivisionContactsSection() {
	return (
		<SectionWrapper
			className="relative py-10"
			stagger={false}>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 overflow-hidden">
				<div
					className="absolute -top-32 right-0 h-[26rem] w-[26rem] rounded-full opacity-25 blur-[130px]"
					style={{ background: `${PRIMARY}33` }}
				/>
			</div>

			<div className="container-x relative">
				<div className="mb-12 max-w-4xl">
					<div className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						Direct Lines
					</div>
					<h2 className="section-title">
						<span className="text-slate-900">One number per company </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							no transfers, no waiting
						</span>
						<span style={{ color: SECONDARY }}>.</span>
					</h2>
					<p className="mt-4 text-slate-600">
						Every Creintors company runs its own direct line. Call the group head
						office for general enquiries, or reach a company straight away for
						project, sales and service support.
					</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
					{COMPANIES.map((c, i) => (
						<ContactCard
							key={c.abbr}
							company={c}
							index={i}
						/>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}

function ContactCard({
	company: c,
	index,
}: {
	company: CompanyContact;
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
		const rx = (0.5 - py) * 8;
		const ry = (px - 0.5) * 10;
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
		<motion.div
			ref={cardRef}
			onPointerMove={handleMove}
			onPointerLeave={handleLeave}
			initial={{ opacity: 0, y: 24, scale: 0.96 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
				delay: index * 0.09,
			}}
			className="group relative h-full"
			style={
				{
					perspective: "1200px",
					"--mx": "50%",
					"--my": "50%",
				} as React.CSSProperties
			}>
			{/* Ambient glow behind the card on hover */}
			<div
				aria-hidden
				className="pointer-events-none absolute -inset-1 rounded-[1.75rem] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"
				style={{
					background: `radial-gradient(closest-side, ${c.accent}55, transparent 70%)`,
				}}
			/>

			<div
				ref={innerRef}
				className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-7 backdrop-blur-xl transition-[transform,border-color] duration-500 ease-out will-change-transform group-hover:border-slate-300"
				style={{
					transformStyle: "preserve-3d",
					boxShadow: `0 28px 70px -38px ${c.accent}66, 0 0 0 1px rgba(255,255,255,0.85) inset`,
				}}>
				{/* Mouse spotlight */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `radial-gradient(260px at var(--mx) var(--my), ${c.accent}1f, transparent 60%)`,
					}}
				/>
				{/* Top neon line */}
				<span
					aria-hidden
					className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-60 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)`,
						boxShadow: `0 0 12px ${c.accent}88`,
					}}
				/>
				{/* Hover glow blob */}
				<span
					aria-hidden
					className="pointer-events-none absolute -bottom-14 -right-14 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
					style={{ background: c.accent }}
				/>

				{/* Logo panel — themed gradient backdrop, logo parallaxes on tilt */}
				<div
					className="relative -mx-7 -mt-7 mb-6 flex h-32 items-center justify-center overflow-hidden"
					style={{
						transformStyle: "preserve-3d",
						background: `linear-gradient(135deg, ${c.accent}14, ${c.accent}03 60%, transparent)`,
					}}>
					<div
						aria-hidden
						className="absolute inset-0 opacity-40"
						style={{
							backgroundImage:
								"linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
							backgroundSize: "26px 26px",
							maskImage:
								"radial-gradient(ellipse at center, black 35%, transparent 78%)",
						}}
					/>
					<img
						src={c.logo}
						alt={c.name}
						draggable={false}
						className="relative max-h-28	 w-auto max-w-[72%] select-none object-contain transition-transform duration-500 group-hover:scale-110"
						style={{
							transform: "translateZ(45px)",
							filter: "drop-shadow(0 14px 18px rgba(15,23,42,0.18))",
						}}
					/>
				</div>

				<div
					className="relative flex flex-1 flex-col"
					style={{ transformStyle: "preserve-3d" }}>
					<h3 className="mt-2 font-display text-lg font-semibold leading-snug text-slate-900">
						{c.legalName}
					</h3>

					<div
						className="mt-4 h-px w-12 transition-all duration-500 group-hover:w-20"
						style={{
							background: `linear-gradient(90deg, ${c.accent}, transparent)`,
						}}
					/>

					{/* Each direct line carries the name and designation of the person
					    who answers it, where one is on record (review feedback). */}
					<div className="mt-5 space-y-4">
						{c.phones.map((p) => {
							const person = getContactPerson(p);
							return (
								<div key={p}>
									<a
										href={`tel:${p.replace(/\s+/g, "")}`}
										translate="no"
										className="flex w-fit items-center gap-2 font-display text-base font-semibold text-slate-700 transition-all duration-300 hover:gap-3 hover:text-slate-900">
										<span
											className="grid h-7 w-7 shrink-0 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-105"
											style={{
												background: `${c.accent}14`,
												color: c.accent,
											}}>
											<svg
												viewBox="0 0 16 16"
												fill="none"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="h-3.5 w-3.5"
												aria-hidden>
												<path d="M3 3.5a1.5 1.5 0 0 1 1.5-1.5h1.2c.4 0 .76.27.87.66l.7 2.4a.9.9 0 0 1-.27.93l-1.07.9a9.5 9.5 0 0 0 4.18 4.18l.9-1.07a.9.9 0 0 1 .93-.27l2.4.7c.39.11.66.46.66.87v1.2a1.5 1.5 0 0 1-1.5 1.5h-.5C7.06 14 2 8.94 2 4v-.5Z" />
											</svg>
										</span>
										{p}
									</a>
									{person && (
										<div
											className="mt-1.5 pl-9"
											translate="no">
											<div className="text-sm font-semibold leading-tight text-slate-900">
												{person.name}
											</div>
											<div
												className="mt-0.5 text-[12px] font-medium leading-snug"
												style={{ color: c.accent }}>
												{person.role}
											</div>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</motion.div>
	);
}
