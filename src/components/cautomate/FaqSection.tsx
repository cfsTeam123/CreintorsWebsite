/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useReveal } from "../Creintors/useReveal";
import Faq from "../Faq";
import { DIVISIONS } from "../../lib/divisions";
import { CAU_FAQ, CAUTOMATE_THEME } from "../../lib/content/cautomate";

const D = DIVISIONS.find((d) => d.slug === "cautomate")!;
const PRIMARY = CAUTOMATE_THEME.primary;
const PURPLE = "#46367f";
const SECONDARY = CAUTOMATE_THEME.secondary;

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
							Need more than automation?
						</h3>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={VIEWPORT}
						transition={{ duration: 0.7, ease: EASE, delay: 0.32 }}>
						<Link
							to="/teknosol"
							className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-[rgba(0,160,227,0.55)] hover:shadow-[0_18px_40px_-20px_rgba(0,160,227,0.45)]">
							<div>
								<div className="font-display text-lg text-slate-900">
									Teknosol
								</div>
								<div className="text-xs text-slate-500">
									Valve test rigs, leak detection
								</div>
							</div>
							<span className="text-[#00A0E3] transition group-hover:translate-x-1">
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
