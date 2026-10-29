/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { motion, type Variants } from "motion/react";
import SectionWrapper from "../SectionWrapper";
import imgIndustryToInstitute from "../../assets/common/precisio.jpg";
import imgInstituteToIndustry from "../../assets/industries/manufacturing.jpg";
import threeILogo from "../../assets/3iEco/3i-logo.png";

const BRAND = "#1ac8ff";
const VIOLET = "#46367f";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 26 },
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

const cardReveal: Variants = {
	hidden: { opacity: 0, y: 26, scale: 0.97 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 1.1, ease: EASE },
	},
};

const intro: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.14, delayChildren: 0.05 },
	},
};

/** The 3i logo's own colours for its i (src/assets/logos/i3.jpg). */
const LOGO_I_BLUE = "#00A0E3";
const LOGO_I_DOT = "#5B5B5B";

/**
 * A lowercase i drawn as the 3i logo draws it: a plain blue stem and a round
 * grey dot — drawn rather than typeset so the two can take different colours.
 * Its box sits on the text baseline and its stem stands the text's x-height
 * (0.47em), so it lines up with the letters beside it in Cambria or in the
 * Georgia fallback alike.
 */
function LogoI() {
	return (
		<svg
			viewBox="0 0 22 70"
			aria-hidden
			className="inline-block h-[0.7em] w-auto align-baseline">
			<rect
				x="5"
				y="23"
				width="12"
				height="47"
				fill={LOGO_I_BLUE}
			/>
			<circle
				cx="11"
				cy="8.5"
				r="8.5"
				fill={LOGO_I_DOT}
			/>
		</svg>
	);
}

export default function CoreIdeaSection() {
	return (
		<SectionWrapper className="section-tint relative overflow-hidden py-10">
			<div className="container-x relative">
				<motion.div
					className="mb-16 max-w-3xl"
					variants={intro}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-80px" }}>
					<motion.div
						variants={fadeUp}
						className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: BRAND }}
						/>{" "}
						The 3i Ecosystem
					</motion.div>
					<motion.h2
						variants={slideLeft}
						className="section-title bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(95deg, #0b1220 0%, #0b1220 40%, ${BRAND} 75%, ${VIOLET} 100%)`,
						}}>
						A simple but powerful belief.
					</motion.h2>
					<motion.p
						variants={fadeUp}
						className="mt-6 text-lg leading-relaxed text-slate-600">
						Learning becomes meaningful when education and real-world
						application stay closely connected. The 3i Ecosystem brings
						classrooms and industry into one continuous experience, in simple terms Industry Inside Institute, Institute Inside Industry.
					</motion.p>
				</motion.div>

				<motion.div
					variants={cardReveal}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="relative overflow-hidden rounded-3xl border p-10 text-center md:p-16"
					style={{
						borderColor: "#C7DCEC",
						background: "linear-gradient(180deg, #ffffff 0%, #F1F7FB 100%)",
						boxShadow:
							"0 30px 80px -28px rgba(15,23,42,0.15), 0 0 0 1px rgba(255,255,255,0.9) inset",
					}}>
					<motion.span
						aria-hidden
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
						className="pointer-events-none absolute inset-x-12 top-0 h-px origin-center"
						style={{
							background: `linear-gradient(90deg, transparent, ${BRAND}, ${VIOLET}, transparent)`,
							boxShadow: `0 0 14px ${BRAND}66`,
						}}
					/>
					<span
						aria-hidden
						className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
						style={{
							background: `radial-gradient(circle, ${BRAND}66, transparent 70%)`,
						}}
					/>
					<span
						aria-hidden
						className="pointer-events-none absolute -left-32 -bottom-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
						style={{
							background: `radial-gradient(circle, ${VIOLET}66, transparent 70%)`,
						}}
					/>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
						className="font-mono text-xs uppercase tracking-[0.4em]"
						style={{ color: BRAND }}>
						{/* "Building an ecosystem" in place of "At its core" (19 Sep). */}
						Building an ecosystem
					</motion.div>
					<motion.h3
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={{
							hidden: {},
							visible: {
								transition: { staggerChildren: 0.2, delayChildren: 0.35 },
							},
						}}
						className="relative mx-auto mt-5 flex items-center justify-center gap-[0.45em] font-display font-semibold leading-tight text-slate-900 md:whitespace-nowrap"
						style={{ fontSize: "clamp(1.5rem, 3.3vw, 3rem)" }}>
						{/* One line, led by the 3i mark (supplied as 3i.png): the three i's
						    that follow spell the name out, set small the way the logo
						    sets its own — a blue stem and a grey dot (19 Sep change list).
						    Below `md` the words may wrap beside the mark rather than
						    shrink past reading size. */}
						<motion.img
							variants={fadeUp}
							src={threeILogo}
							alt=""
							aria-hidden
							className="h-[1.25em] w-auto shrink-0 self-center"
						/>
						<span className="text-left md:text-center">
							{["institutionalizing", "integrated", "innovations"].map((word) => (
								<motion.span
									key={word}
									variants={fadeUp}
									className="mr-[0.25em] inline-block last:mr-0">
									<span className="sr-only">{word}</span>
									<span aria-hidden>
										<LogoI />
										{word.slice(1)}
									</span>
								</motion.span>
							))}
						</span>
					</motion.h3>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={{
						hidden: {},
						visible: {
							transition: { staggerChildren: 0.2, delayChildren: 0.1 },
						},
					}}
					className="mt-10 grid gap-6 lg:grid-cols-2">
					<DirectionCard
						accent={BRAND}
						eyebrow="Industry → Institute"
						title="Practical thinking, planted early."
						body="When industry comes into institutes, students are exposed to real challenges, real constraints and real outcomes, not just textbook concepts."
						image={imgIndustryToInstitute}
						from="left"
					/>
					<DirectionCard
						accent={VIOLET}
						eyebrow="Institute → Industry"
						title="Learning, lived inside the work."
						body="When institutes step into industry, students work around live projects, observe real teams, and understand how decisions actually get made."
						image={imgInstituteToIndustry}
						from="right"
					/>
				</motion.div>
			</div>
		</SectionWrapper>
	);
}

function DirectionCard({
	accent,
	eyebrow,
	title,
	body,
	image,
	from,
}: {
	accent: string;
	eyebrow: string;
	title: string;
	body: string;
	image: string;
	from: "left" | "right";
}) {
	const slideIn: Variants = {
		hidden: {
			opacity: 0,
			x: from === "left" ? -110 : 110,
			y: 30,
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: { duration: 1.1, ease: EASE },
		},
	};

	return (
		<motion.div
			variants={slideIn}
			className="group relative isolate min-h-[24rem] overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1 md:min-h-[28rem]"
			style={{
				borderColor: `${accent}33`,
				boxShadow: `0 24px 60px -28px ${accent}55, 0 0 0 1px rgba(255,255,255,0.85) inset`,
			}}>
			<motion.img
				src={image}
				alt={title}
				initial={{ scale: 1.18 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 1.8, ease: EASE }}
				className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			/>

			<div
				aria-hidden
				className="absolute inset-0 -z-10"
				style={{
					background: `
						linear-gradient(180deg, rgba(8,10,16,0.15) 0%, rgba(8,10,16,0.55) 55%, rgba(8,10,16,0.90) 100%),
						radial-gradient(60% 90% at 0% 100%, ${accent}33, transparent 70%)
					`,
				}}
			/>

			<span
				aria-hidden
				className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
					boxShadow: `0 0 12px ${accent}66`,
				}}
			/>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={{
					hidden: {},
					visible: {
						transition: { staggerChildren: 0.1, delayChildren: 0.45 },
					},
				}}
				className="relative flex h-full min-h-[24rem] flex-col justify-end p-7 md:min-h-[28rem] md:p-9">
				<motion.div
					variants={fadeUp}
					className="flex items-center gap-2">
					<span
						className="h-2 w-2 rounded-full"
						style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
					/>
					<div
						className="font-mono text-[11px] uppercase tracking-[0.32em]"
						style={{ color: accent }}>
						{eyebrow}
					</div>
				</motion.div>
				<motion.h4
					variants={fadeUp}
					className="mt-3 font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
					{title}
				</motion.h4>
				<motion.p
					variants={fadeUp}
					className="mt-4 text-white/80 md:text-lg">
					{body}
				</motion.p>
			</motion.div>
		</motion.div>
	);
}
