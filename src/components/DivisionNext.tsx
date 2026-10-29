/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import Reveal from "./Reveal";
import type { DivisionNextContent } from "../lib/content/next";

type Props = {
	content: DivisionNextContent;
	primary: string;
	secondary: string;
};

/**
 * "Our thoughts to be future ready — Working towards the NEXT": the closing
 * section of each company page (17 Sep change list), just ahead of the footer.
 *
 * The heading holds its column on wide screens while the five phases scroll
 * past beside it, so the question stays in view as the answer is read.
 */
export default function DivisionNext({ content, primary, secondary }: Props) {
	const { lead, steps, standing, closing } = content;

	return (
		<section className="relative overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full blur-[160px]"
				style={{ background: `${primary}1f` }}
			/>

			<div className="container-x relative">
				<div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
					<Reveal
						stagger={0.1}
						className="lg:sticky lg:top-24 lg:self-start">
						<Reveal
							from="up"
							className="eyebrow">
							<span
								className="h-px w-8"
								style={{ background: primary }}
							/>{" "}
							Our thoughts to be future ready
						</Reveal>
						<Reveal
							from="up"
							as="h2"
							className="section-title mt-4">
							<span className="text-slate-900">Working towards the </span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${primary}, ${secondary})`,
								}}>
								NEXT
							</span>
						</Reveal>
						<Reveal
							from="up"
							as="p"
							className="mt-5 font-display text-xl font-semibold tracking-tight text-slate-500 md:text-2xl">
							{lead}
						</Reveal>

						{standing && (
							<Reveal
								from="up"
								className="mt-8 rounded-2xl border bg-white/75 p-6 shadow-soft backdrop-blur-sm"
								style={{ borderColor: `${primary}33` }}>
								<div
									className="text-[11px] font-bold uppercase tracking-[0.28em]"
									style={{ color: primary }}>
									{standing.title}
								</div>
								<p className="mt-3 text-base leading-relaxed text-slate-700">
									{standing.body}
								</p>
							</Reveal>
						)}

						{closing && (
							<Reveal
								from="up"
								as="p"
								className="mt-8 font-display text-lg font-semibold text-slate-900 md:text-xl">
								{closing}
							</Reveal>
						)}
					</Reveal>

					<div className="relative">
						{/* The rail the phase markers sit on. */}
						<span
							aria-hidden
							className="absolute bottom-6 left-[1.375rem] top-6 w-px md:left-[1.625rem]"
							style={{
								background: `linear-gradient(180deg, ${primary}55, ${secondary}55)`,
							}}
						/>
						<Reveal
							as="ol"
							stagger={0.08}
							className="relative m-0 list-none space-y-4 p-0">
							{steps.map((step, i) => (
								<Reveal
									key={step.title}
									as="li"
									from="up"
									className="relative flex gap-4 md:gap-6">
									<span
										aria-hidden
										className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 bg-white font-display text-base font-bold md:h-[3.25rem] md:w-[3.25rem] md:text-lg"
										style={{ borderColor: primary, color: primary }}>
										{String(i + 1).padStart(2, "0")}
									</span>
									<div
										className="min-w-0 flex-1 rounded-2xl border bg-white/80 p-5 shadow-soft backdrop-blur-sm md:p-6"
										style={{ borderColor: "rgba(15,23,42,0.08)" }}>
										<div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
											Phase {i + 1}
											{step.shift && (
												<>
													<span className="mx-2 text-slate-300">·</span>
													<span style={{ color: primary }}>{step.shift}</span>
												</>
											)}
										</div>
										<h3 className="mt-2 font-display text-xl font-bold leading-snug text-slate-900 md:text-2xl">
											{step.title}
										</h3>
										<p className="mt-2 text-[15px] leading-relaxed text-slate-600 md:text-base">
											{step.thought}
										</p>
										{step.action && (
											<p
												className="mt-4 border-l-2 pl-4 text-[15px] leading-relaxed text-slate-700 md:text-base"
												style={{ borderColor: primary }}>
												<span
													className="mb-1 block text-[11px] font-bold uppercase tracking-[0.24em]"
													style={{ color: primary }}>
													Our actions
												</span>
												{step.action}
											</p>
										)}
									</div>
								</Reveal>
							))}
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}
