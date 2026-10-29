/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import SectionWrapper from "../SectionWrapper";
import Faq from "../Faq";
import { FAQ } from "../../lib/content/contact";
import { PRIMARY, SECONDARY } from "../../lib/theme";

export default function FaqSection() {
	return (
		<SectionWrapper
			className="relative py-24 md:py-28"
			stagger={false}>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 overflow-hidden">
				<div
					className="absolute -bottom-32 left-0 h-[24rem] w-[24rem] rounded-full opacity-40 blur-[140px]"
					style={{ background: `${SECONDARY}26` }}
				/>
				<div
					className="absolute -top-32 right-0 h-[22rem] w-[22rem] rounded-full opacity-40 blur-[140px]"
					style={{ background: `${PRIMARY}26` }}
				/>
			</div>

			<div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
				<div className="lg:sticky lg:top-32">
					<div className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						FAQ
					</div>
					<h2 className="section-title">
						<span className="text-slate-900">Before you </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							reach out
						</span>
						<span style={{ color: SECONDARY }}>.</span>
					</h2>
					<p className="mt-4 text-slate-600">
						A few quick answers anything else, drop it into the form above.
					</p>

					<div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 backdrop-blur shadow-[0_18px_40px_-22px_rgba(15,23,42,0.18)]">
						<span
							className="grid h-9 w-9 place-items-center rounded-lg"
							style={{
								background: `${PRIMARY}1f`,
								color: PRIMARY,
								boxShadow: `0 0 18px ${PRIMARY}45`,
							}}>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.6"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-5 w-5"
								aria-hidden>
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
							</svg>
						</span>
						<div>
							<div className="text-xs uppercase tracking-[0.32em] text-slate-500">
								Avg response
							</div>
							<div className="text-sm font-semibold text-slate-900">
								Within one business day
							</div>
						</div>
					</div>
				</div>
				<div className="[&_.reveal]:!opacity-100 [&_.reveal]:!translate-y-0">
					<Faq
						items={FAQ}
						accent={PRIMARY}
						mode="light"
					/>
				</div>
			</div>
		</SectionWrapper>
	);
}
