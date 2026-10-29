/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { motion, type Variants } from "motion/react";
import SectionWrapper from "../SectionWrapper";
import { POLICY_THEME } from "../../lib/content/policies";

const PRIMARY = POLICY_THEME.primary;
const SECONDARY = POLICY_THEME.secondary;
const ACCENT = POLICY_THEME.accent;

const EASE = [0.22, 1, 0.36, 1] as const;

const COMMITMENTS: {
	letter: string;
	title: string;
	body: string;
	accent: string;
}[] = [
	{
		letter: "C",
		title: "Ethics",
		body: "Create high level of integrity that enhances and cements the customer's faith in Creintors",
		accent: PRIMARY,
	},
	{
		letter: "R",
		title: "Environmental",
		body: "Revere our mother earth such that we ensure a built-in-mechanism to protect the environment at every step",
		accent: SECONDARY,
	},
	{
		letter: "E",
		title: "Safety",
		body: "Emphasise the implementation of safety and quality norms governed by International Standards",
		accent: ACCENT,
	},
	{
		letter: "I",
		title: "Employee",
		body: "Involve all people in the organisation on projects from start to finish such that an aura of evangelism is ever present",
		accent: PRIMARY,
	},
	{
		letter: "N",
		title: "Quality Assurance",
		body: "Need to understand customer requirement and time schedule and ensure its implementation",
		accent: SECONDARY,
	},
	{
		letter: "T",
		title: "Human Resource Development",
		body: "Test the employees' and the organisation's mettle as a whole, time and again to inculcate values of strength and stability",
		accent: ACCENT,
	},
	{
		letter: "O",
		title: "Accountability and Measures",
		body: "Organise all queries of customers as our own, thereby considering creators as part of their solutions",
		accent: PRIMARY,
	},
	{
		letter: "R",
		title: "Social Responsibility",
		body: 'Resolve that every shareholder of the organisation understands that the society has given us a "stepping stone podium" and we have the responsibility to care for it',
		accent: SECONDARY,
	},
	{
		letter: "S",
		title: "Vendor Development",
		body: 'Sustained strategic partnership with our vendors as we believe that interdependence has higher value than independence; and that is why the slogan, "come...let\'s grow"',
		accent: ACCENT,
	},
];

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.9, ease: EASE },
	},
};

const slideLeft: Variants = {
	hidden: { opacity: 0, x: -32 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 1, ease: EASE },
	},
};

const slideRight: Variants = {
	hidden: { opacity: 0, x: 32 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 1, ease: EASE },
	},
};

const slideDown: Variants = {
	hidden: { opacity: 0, y: -50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.9, ease: EASE },
	},
};

const intro: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.14, delayChildren: 0.05 },
	},
};

const grid: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.08, delayChildren: 0.1 },
	},
};

function cardVariant(index: number): Variants {
	const cycle = index % 4;
	const base = { duration: 1, ease: EASE };
	if (cycle === 0) {
		return {
			hidden: { opacity: 0, y: 28, scale: 0.96 },
			visible: {
				opacity: 1,
				y: 0,
				scale: 1,
				transition: base,
			},
		};
	}
	if (cycle === 1) {
		return {
			hidden: { opacity: 0, x: -32, scale: 0.96 },
			visible: {
				opacity: 1,
				x: 0,
				scale: 1,
				transition: base,
			},
		};
	}
	if (cycle === 2) {
		return {
			hidden: { opacity: 0, y: -60, scale: 0.96 },
			visible: {
				opacity: 1,
				y: 0,
				scale: 1,
				transition: base,
			},
		};
	}
	return {
		hidden: { opacity: 0, x: 32, scale: 0.96 },
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: base,
		},
	};
}

export default function CommitmentsSection() {
	return (
		<SectionWrapper className="section-tint relative py-10">
			<div className="container-x relative">
				<motion.div
					className="mb-14 max-w-5xl"
					variants={intro}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-80px" }}>
					<motion.div
						variants={slideDown}
						className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: ACCENT }}
						/>{" "}
						Guiding policies of
					</motion.div>
					<motion.h2
						variants={slideLeft}
						className="section-title bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(95deg, #0b1220 0%, #0b1220 35%, ${PRIMARY} 70%, ${ACCENT} 100%)`,
						}}>
						Co-existence.
					</motion.h2>
					<motion.p
						variants={slideRight}
						className="mt-6 text-slate-600">
						At Creintors, our guiding principles shape who we are, how we think, and how we operate. Represented by the nine letters in our name, these principles guide our decisions, actions, and the way we work together with all stakeholders.
					</motion.p>
				</motion.div>

		

				<motion.div
					variants={grid}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{COMMITMENTS.map((c, i) => {
						return (
							<motion.div
								// "CREINTORS" has two Rs, so the letter alone is not a unique
								// key — React was logging a duplicate-key error on this page.
								key={c.title}
								variants={cardVariant(i)}
								className="group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-white to-slate-50 p-10 md:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
								style={{
									borderColor: `${c.accent}33`,
									boxShadow: `0 22px 60px -32px ${c.accent}66, 0 0 0 1px rgba(255,255,255,0.85) inset`,
								}}>
								<span
									aria-hidden
									className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
									style={{ background: c.accent }}
								/>
								<motion.span
									aria-hidden
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true, margin: "-100px" }}
									transition={{
										duration: 1,
										ease: EASE,
										delay: 0.3 + (i % 3) * 0.08,
									}}
									className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-center opacity-60 transition-opacity duration-500 group-hover:opacity-100"
									style={{
										background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)`,
										boxShadow: `0 0 12px ${c.accent}`,
									}}
								/>

								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, margin: "-100px" }}
									variants={{
										hidden: {},
										visible: {
											transition: {
												staggerChildren: 0.1,
												delayChildren: 0.35,
											},
										},
									}}
									className="relative">
									<motion.h3
										variants={fadeUp}
										className="font-display text-2xl md:text-3xl font-bold leading-tight text-slate-900">
										{c.title}
									</motion.h3>
									<motion.div
										variants={{
											hidden: { scaleX: 0 },
											visible: {
												scaleX: 1,
												transition: { duration: 0.7, ease: EASE },
											},
										}}
										className="mt-4 h-1 w-12 origin-left rounded-full transition-all duration-500 group-hover:w-20"
										style={{
											background: `linear-gradient(90deg, ${c.accent}, transparent)`,
										}}
									/>
									<motion.p
										variants={fadeUp}
									className="mt-5 text-base md:text-lg leading-relaxed text-slate-600">
										<span
											className="font-display text-5xl md:text-6xl font-bold leading-none"
											style={{ color: c.accent }}>
											{c.body[0]}
										</span>
										{c.body.slice(1)}
									</motion.p>
								</motion.div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</SectionWrapper>
	);
}
