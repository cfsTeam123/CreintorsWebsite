/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReveal } from "../Creintors/useReveal";
import {
	CAU_CASE_STUDIES,
	CAUTOMATE_THEME,
	type CauCaseStudy,
} from "../../lib/content/cautomate";

const PRIMARY = CAUTOMATE_THEME.primary;
const SECONDARY = CAUTOMATE_THEME.secondary;
const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

/**
 * Industry-specific case studies.
 *
 * The senior-team review asked for case studies grouped by industry and
 * presented in separate categories, so that the range of sectors Creintors
 * works across is obvious to a prospective customer. The industry rail selects
 * a category; each study reads challenge → systems deployed → outcome.
 */
export default function CaseStudiesSection() {
	const ref = useReveal<HTMLDivElement>();
	const [active, setActive] = useState<string>(CAU_CASE_STUDIES[0]?.id ?? "");

	const study = useMemo<CauCaseStudy | undefined>(
		() =>
			CAU_CASE_STUDIES.find((c) => c.id === active) ?? CAU_CASE_STUDIES[0],
		[active],
	);

	if (!study) return null;

	return (
		<section className="relative overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-24 h-[24rem] w-[24rem] rounded-full blur-[150px]"
				style={{ background: `${PRIMARY}1c` }}
			/>

			<div
				ref={ref}
				className="container-x relative">
				<div className="mb-10 max-w-3xl">
					<div className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						Industry-Specific Case Studies
					</div>
					<h2 className="section-title">
						<span className="text-slate-900">Built for the way </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							each industry works
						</span>
					</h2>
					<p className="mt-5 text-[1.05rem] leading-relaxed text-slate-600">
						Every sector brings a different storage and tooling problem. Pick an
						industry to see the challenge it presents, the Creintors systems
						that answer it, and what those systems deliver.
					</p>
				</div>

				{/* Industry rail — the separate categories the review asked for. */}
				<div
					className="mb-10 flex flex-wrap gap-3"
					role="tablist"
					aria-label="Select an industry">
					{CAU_CASE_STUDIES.map((c) => {
						const isActive = c.id === study.id;
						return (
							<button
								key={c.id}
								type="button"
								role="tab"
								aria-selected={isActive}
								onClick={() => setActive(c.id)}
								className="relative rounded-full px-5 py-2.5 text-[0.95rem] font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2"
								style={{
									color: isActive ? "#ffffff" : "#334155",
									background:
										isActive ?
											`linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`
										:	"rgba(255,255,255,0.75)",
									boxShadow:
										isActive ?
											`0 16px 34px -16px ${PRIMARY}99`
										:	`inset 0 0 0 1px ${PRIMARY}26`,
								}}>
								{c.industry}
							</button>
						);
					})}
				</div>

				<AnimatePresence mode="wait">
					<motion.article
						key={study.id}
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -12 }}
						transition={{ duration: 0.45, ease: EASE }}
						className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_28px_70px_-34px_rgba(15,23,42,0.28)] lg:grid-cols-[0.95fr_1.05fr]">
						<div className="relative min-h-[15rem] lg:min-h-full">
							<img
								src={study.image}
								alt={`${study.industry}: Creintors automation applications`}
								className="absolute inset-0 h-full w-full object-cover"
								loading="lazy"
							/>
							<div
								aria-hidden
								className="absolute inset-0"
								style={{
									background: `linear-gradient(160deg, ${PRIMARY}55 0%, transparent 55%)`,
								}}
							/>
							<span
								className="absolute left-5 top-5 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur"
								style={{ background: `${PRIMARY}cc` }}>
								{study.industry}
							</span>
						</div>

						<div className="flex flex-col gap-6 p-7 md:p-10">
							<div>
								<div
									className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em]"
									style={{ color: SECONDARY }}>
									The challenge
								</div>
								<p className="mt-2.5 text-[1.05rem] leading-relaxed text-slate-700">
									{study.challenge}
								</p>
							</div>

							<div>
								<div
									className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em]"
									style={{ color: SECONDARY }}>
									Systems deployed
								</div>
								<ul className="mt-3 flex flex-wrap gap-2">
									{study.systems.map((s) => (
										<li
											key={s}
											className="rounded-full border px-3.5 py-1.5 text-[13px] font-semibold text-slate-700"
											style={{
												borderColor: `${PRIMARY}33`,
												background: `${PRIMARY}0a`,
											}}>
											{s}
										</li>
									))}
								</ul>
							</div>

							<div>
								<div
									className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em]"
									style={{ color: SECONDARY }}>
									What it delivers
								</div>
								<ul className="mt-3 space-y-2.5">
									{study.outcomes.map((o) => (
										<li
											key={o}
											className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-700">
											<span
												aria-hidden
												className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
												style={{
													background: PRIMARY,
													boxShadow: `0 0 8px ${PRIMARY}66`,
												}}
											/>
											{o}
										</li>
									))}
								</ul>
							</div>
						</div>
					</motion.article>
				</AnimatePresence>

				<motion.div
					className="mt-6 text-[13px] text-slate-500"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={VIEWPORT}
					transition={{ duration: 0.6, ease: EASE }}>
					Applications shown are drawn from the Creintors product
					documentation. Named customer projects are added as they are
					confirmed with the project team.
				</motion.div>
			</div>
		</section>
	);
}
