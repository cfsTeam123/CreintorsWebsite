/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { motion } from "motion/react";
import { useReveal } from "./useReveal";
import {
	ABOUT_INTRO,
	TEKNOSOL_THEME,
} from "../../lib/content/Creintors";
import rigImage from "../../assets/logos/techno.png";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

export default function AboutSection() {
	const ref = useReveal<HTMLDivElement>();

	return (
		<section className="relative overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full blur-[140px]"
				style={{ background: `${TEKNOSOL_THEME.primary}22` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-40 bottom-32 h-[28rem] w-[28rem] rounded-full blur-[160px]"
				style={{ background: `${TEKNOSOL_THEME.primary}1a` }}
			/>

			<div
				ref={ref}
				className="container-x relative">
				{/* Eyebrow + headline */}
				<motion.div
					className="mb-8 max-w-7xl md:mb-10"
					initial={{ opacity: 0, y: 32 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={VIEWPORT}
					transition={{ duration: 0.8, ease: EASE }}>
					<div className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: TEKNOSOL_THEME.primary }}
						/>{" "}
						{ABOUT_INTRO.eyebrow}
					</div>
					{/* "Why Teknosol?" per the 17 Sep change list; the line that used to
					    headline the section now answers it. */}
					<h2 className="section-title">
						<span className="text-slate-900">Why </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${TEKNOSOL_THEME.primary}, ${TEKNOSOL_THEME.secondary})`,
							}}>
							Teknosol?
						</span>
						<span className="mt-2 block font-display text-xl font-semibold tracking-tight text-slate-500 md:text-2xl">
							{ABOUT_INTRO.title}.
						</span>
					</h2>
				</motion.div>

				{/* Image + copy split */}
				<div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
					{/* Image side */}
					<motion.div
						className="relative"
						initial={{ opacity: 0, scale: 0.7, y: 40 }}
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						viewport={VIEWPORT}
						transition={{ duration: 1.05, ease: EASE }}>
						{/*
						 * The artwork is 330x365. It used to sit in a 4:3 box that
						 * stretched it well past its own resolution — which is what
						 * left the soft edges and the empty column beside it. Capped
						 * at its natural width it stays sharp and gives the space
						 * back to the copy.
						 */}
						<img
							src={rigImage}
							alt="Creintors Teknosol"
							className="mx-auto block h-auto w-full max-w-[330px] object-contain"
						/>
					</motion.div>

					{/* Content side */}
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: 28 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={VIEWPORT}
						transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}>
						<motion.p
							className="max-w-[58ch] text-lg leading-relaxed text-slate-700 lg:text-xl"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={VIEWPORT}
							transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}>
							{ABOUT_INTRO.body}
						</motion.p>

						<motion.div
							className="flex flex-wrap gap-2"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={VIEWPORT}
							transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}>
							{[
								"In-house design",
								"Automation & data",
								"FAT / SAT",
								"Calibration",
							].map((chip) => (
								<span
									key={chip}
									className="rounded-full border px-3 py-1.5 text-xs font-medium tracking-wide text-slate-700"
									style={{
										borderColor: "rgba(15,23,42,0.14)",
										background: "rgba(255,255,255,0.7)",
									}}>
									{chip}
								</span>
							))}
						</motion.div>

					</motion.div>
				</div>
			</div>
		</section>
	);
}
