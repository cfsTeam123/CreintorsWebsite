/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { motion, type Variants } from "motion/react";
import SectionWrapper from "../SectionWrapper";
import { FLOW } from "../../lib/content/education";
import imgLearn from "../../assets/3iEco/bb.jpg";
import imgExperience from "../../assets/3iEco/experience.webp";
import imgTransform from "../../assets/3iEco/dd.png";

const BRAND = "#1ac8ff";
const VIOLET = "#46367f";

const EASE = [0.22, 1, 0.36, 1] as const;

const FLOW_IMAGES: Record<string, string> = {
	"01": imgLearn,
	"02": imgExperience,
	"03": imgTransform,
};

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

const intro: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.14, delayChildren: 0.05 },
	},
};

const grid: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.22, delayChildren: 0.1 },
	},
};

function cardVariant(index: number): Variants {
	const dirX =
		index === 0 ? -110
		: index === 2 ? 110
		: 0;
	const dirY = index === 1 ? 80 : 30;
	return {
		hidden: {
			opacity: 0,
			x: dirX,
			y: dirY,
			scale: 0.96,
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			scale: 1,
			transition: { duration: 1.1, ease: EASE },
		},
	};
}

const innerStagger: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.1, delayChildren: 0.45 },
	},
};

export default function FlowSection() {
	return (
		<SectionWrapper className="section-tint relative py-10">
			<div className="container-x relative">
				<motion.div
					className="mb-14 max-w-3xl"
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
						{/* In place of "Transformation Flow" (19 Sep change list). */}
						Nurturing Possibilities
					</motion.div>
					<motion.h2
						variants={slideLeft}
						className="section-title bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(95deg, #0b1220 0%, #0b1220 45%, ${BRAND} 80%, ${VIOLET} 100%)`,
						}}>
						From curiosity to capability.
					</motion.h2>
				</motion.div>

				<div className="edu-flow relative">
					<motion.div
						aria-hidden
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
						className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-full origin-left opacity-50 md:block"
						style={{
							background: `linear-gradient(90deg, ${BRAND}, ${VIOLET}, #138708)`,
						}}
					/>
					<motion.div
						variants={grid}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="grid gap-8 md:grid-cols-3 md:gap-10">
						{FLOW.map((f, i) => (
							<motion.div
								key={f.step}
								variants={cardVariant(i)}
								className="group relative overflow-hidden rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-1"
								style={{
									borderColor: `${f.accent}33`,
									boxShadow: `0 30px 80px -32px ${f.accent}66, 0 0 0 1px rgba(255,255,255,0.85) inset`,
								}}>
								<div className="relative h-56 overflow-hidden">
									<motion.img
										src={FLOW_IMAGES[f.step]}
										alt={f.title}
										initial={{ scale: 1.18 }}
										whileInView={{ scale: 1 }}
										viewport={{ once: true, margin: "-100px" }}
										transition={{ duration: 1.8, ease: EASE }}
										className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
							
								</div>

								<motion.div
									variants={innerStagger}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, margin: "-100px" }}
									className="relative p-7 md:p-8">
									<motion.h3
										variants={fadeUp}
										className="font-display text-3xl font-semibold leading-tight text-slate-900">
										{f.title}
									</motion.h3>
									<motion.p
										variants={fadeUp}
										className="mt-2 text-xs uppercase tracking-[0.32em]"
										style={{ color: f.accent }}>
										{f.detail}
									</motion.p>
									<motion.div
										variants={{
											hidden: { scaleX: 0 },
											visible: {
												scaleX: 1,
												transition: { duration: 0.8, ease: EASE },
											},
										}}
										className="mt-4 h-px w-16 origin-left"
										style={{
											background: `linear-gradient(90deg, ${f.accent}, transparent)`,
										}}
									/>
									<motion.p
										variants={fadeUp}
										className="mt-5 leading-relaxed text-slate-600">
										{f.body}
									</motion.p>
								</motion.div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</SectionWrapper>
	);
}
