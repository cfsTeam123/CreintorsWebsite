/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { motion } from "motion/react";
import { useReveal } from "../Creintors/useReveal";
import { CRI_ABOUT_INTRO, CRIENVIRO_THEME } from "../../lib/content/crienviro";
import heroImage from "../../assets/logos/rnvro.png";
import wtpImage from "../../assets/crienviro/wtp.png";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

export default function AboutSection() {
	const ref = useReveal<HTMLDivElement>();

	return (
		<section className="relative overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full blur-[140px]"
				style={{ background: `${CRIENVIRO_THEME.primary}22` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-40 bottom-32 h-[28rem] w-[28rem] rounded-full blur-[160px]"
				style={{ background: `${CRIENVIRO_THEME.primary}1a` }}
			/>

			<div
				ref={ref}
				className="container-x relative">
				{/* Eyebrow + headline */}
				<motion.div
					className="mb-14 max-w-7xl"
					initial={{ opacity: 0, y: 32 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={VIEWPORT}
					transition={{ duration: 0.8, ease: EASE }}>
					<div className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: CRIENVIRO_THEME.primary }}
						/>{" "}
						{CRI_ABOUT_INTRO.eyebrow}
					</div>
					{/* "Why Crienviro?" per the 17 Sep change list; the line that used to
					    headline the section now answers it. */}
					<h2 className="section-title">
						<span className="text-slate-900">Why </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${CRIENVIRO_THEME.primary}, ${CRIENVIRO_THEME.secondary})`,
							}}>
							Crienviro?
						</span>
						<span className="mt-2 block font-display text-xl font-semibold tracking-tight text-slate-500 md:text-2xl">
							{CRI_ABOUT_INTRO.title}.
						</span>
					</h2>
				</motion.div>

				{/* Image + copy split */}
				<div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
					{/* Image side */}
					<motion.div
						className="relative"
						initial={{ opacity: 0, scale: 0.7, y: 40 }}
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						viewport={VIEWPORT}
						transition={{ duration: 1.05, ease: EASE }}>
						<div className="relative aspect-[4/3] overflow-hidden ">
							<img
								src={heroImage}
								alt="Crienviro water treatment plant"
								className="absolute inset-0 h-full w-full object-contain transition-transform duration-[1200ms] ease-out hover:scale-[1]"
							/>
						</div>
					</motion.div>

					{/* Content side */}
					<motion.div
						className="space-y-6"
						initial={{ opacity: 0, x: 28 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={VIEWPORT}
						transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}>
						<motion.p
							className="text-lg leading-relaxed text-slate-700"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={VIEWPORT}
							transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}>
							{CRI_ABOUT_INTRO.body}
						</motion.p>

						<motion.div
							className="flex flex-wrap gap-2"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={VIEWPORT}
							transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}>
							{[
								"Sustainable engineering",
								"Statutory compliance",
								"Turnkey delivery",
								"Long-term O&M",
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
