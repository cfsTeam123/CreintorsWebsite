/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useReveal } from "./useReveal";
import Faq from "../Faq";
import { DIVISIONS } from "../../lib/divisions";
import { FAQ, TEKNOSOL_THEME } from "../../lib/content/Creintors";

const D = DIVISIONS.find((d) => d.slug === "teknosol")!;
const PRIMARY = TEKNOSOL_THEME.primary;
const PURPLE = "#46367f";

const SECONDARY = TEKNOSOL_THEME.secondary;

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

export default function FaqSection() {
	const ref = useReveal<HTMLDivElement>();

	return (
		<section className="relative isolate overflow-hidden py-24 md:py-28">
			{/* Soft ambient accent lighting */}
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-24 -z-10 h-[24rem] w-[24rem] rounded-full blur-[160px]"
				style={{ background: `${PRIMARY}1f` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-32 bottom-24 -z-10 h-[22rem] w-[22rem] rounded-full blur-[140px]"
				style={{ background: `${PURPLE}2a` }}
			/>
			<div
				ref={ref}
				className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.6fr]">
				<motion.div
					initial={{ opacity: 0, x: -28 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={VIEWPORT}
					transition={{ duration: 0.9, ease: EASE }}>
					<motion.div
						className="eyebrow"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={VIEWPORT}
						transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}>
						<span
							className="h-px w-8"
							style={{ background: TEKNOSOL_THEME.primary }}
						/>{" "}
						FAQ
					</motion.div>
					<motion.h2
						className="section-title"
						initial={{ opacity: 0, y: 28 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={VIEWPORT}
						transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}>
						<span className="text-slate-900">Common </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(90deg, ${PRIMARY}, ${PURPLE})`,
							}}>
							questions
						</span>
						<span style={{ color: TEKNOSOL_THEME.secondary }}>.</span>
					</motion.h2>
					<motion.p
						className="mt-4 text-slate-600"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={VIEWPORT}
						transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}>
						Short answers from the engineering team. Need more detail? Talk to
						us directly we'll route you to the right specialist.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={VIEWPORT}
						transition={{ duration: 0.7, ease: EASE, delay: 0.42 }}>
						<Link
							to="/contact"
							className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_44px_-15px_rgba(0,160,227,0.55)] transition-transform duration-300 hover:scale-[1.04]"
							style={{ background: TEKNOSOL_THEME.primary }}>
							Talk to Engineering →
						</Link>
					</motion.div>
				</motion.div>
				<motion.div
					className="[&_.reveal]:!opacity-100 [&_.reveal]:!translate-y-0"
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={VIEWPORT}
					transition={{ duration: 0.95, ease: EASE, delay: 0.2 }}>
					<Faq
						items={FAQ}
						accent={D.accent}
						mode="light"
					/>
				</motion.div>
			</div>

			<div className="container-x relative">
				{/* Cross-sell cards */}
				<motion.div
					className="relative mt-16 grid items-center gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 backdrop-blur-md shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35),0_0_0_1px_rgba(255,255,255,0.85)_inset] md:grid-cols-3 md:p-8"
					initial={{ opacity: 0, y: 26, scale: 0.96 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={VIEWPORT}
					transition={{ duration: 0.9, ease: EASE }}>
					<span
						aria-hidden
						className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-80"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}aa, transparent)`,
							boxShadow: `0 0 12px ${PRIMARY}55`,
						}}
					/>
					<motion.div
						className="md:col-span-1"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={VIEWPORT}
						transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}>
						<div
							className="font-mono text-[10px] uppercase tracking-[0.32em]"
							style={{ color: SECONDARY }}>
							Explore the group
						</div>
						<h3 className="mt-2 font-display text-xl font-semibold text-slate-900">
							Need more than test rigs?
						</h3>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={VIEWPORT}
						transition={{ duration: 0.7, ease: EASE, delay: 0.32 }}>
						<Link
							to="/cautomate"
							className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent-violet/50 hover:shadow-[0_18px_40px_-20px_rgba(70,54,127,0.45)]">
							<div>
								<div className="font-display text-lg text-slate-900">
									C-Automate
								</div>
								<div className="text-xs text-slate-500">
									Automation, ASRS, robotics
								</div>
							</div>
							<span className="text-accent-violet transition group-hover:translate-x-1">
								→
							</span>
						</Link>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={VIEWPORT}
						transition={{ duration: 0.7, ease: EASE, delay: 0.44 }}>
						<Link
							to="/crienviro"
							className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent-lime/60 hover:shadow-[0_18px_40px_-20px_rgba(19,135,8,0.40)]">
							<div>
								<div className="font-display text-lg text-slate-900">
									Crienviro
								</div>
								<div className="text-xs text-slate-500">WTP · STP</div>
							</div>
							<span className="text-accent-lime transition group-hover:translate-x-1">
								→
							</span>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
