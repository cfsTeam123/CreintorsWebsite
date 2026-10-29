/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PRIMARY, SECONDARY } from "../lib/theme";
import IgnoranceLine from "./IgnoranceLine";
import cmdconnectimg from "../assets/hub/cmdconnectimg.jpeg";

/* ────────────────────────────────────────── TYPES */

export type PlaceholderFeature = {
	title: string;
	body: string;
};

export type PlaceholderPageProps = {
	/** Short eyebrow label, e.g. "CMD Connect". */
	eyebrow: string;
	/** Optional mono micro-label shown to the right of the eyebrow on md+. */
	kicker?: string;
	/** White (leading) part of the H1. */
	titleLead: string;
	/** Gradient (accent) part of the H1. */
	titleAccent: string;
	/** Intro paragraph under the title. */
	description: string;
	/** Optional pills under the divider. */
	tags?: string[];
	/** Optional "what to expect" cards rendered in the light section. */
	features?: PlaceholderFeature[];
};

/* ────────────────────────────────────────── HERO */

function PlaceholderHero({
	eyebrow,
	kicker,
	titleLead,
	titleAccent,
	description,
	tags,
}: Omit<PlaceholderPageProps, "features">) {
	return (
		<section
			className="relative isolate flex min-h-[60vh] items-end overflow-hidden pb-16 pt-32 md:min-h-[68vh] md:pb-20 md:pt-36"
			style={{ backgroundColor: "#070c17" }}>
		<div
			aria-hidden
			className="pointer-events-none absolute inset-0 -z-30"
			style={{
				backgroundImage: `
				linear-gradient(180deg, rgba(7,12,23,0.22) 0%, rgba(7,12,23,0.40) 55%, rgba(7,12,23,0.80) 100%),
				radial-gradient(50% 70% at 18% 70%, ${PRIMARY}33, transparent 60%),
				radial-gradient(60% 80% at 90% 10%, ${SECONDARY}33, transparent 60%),
				url("${cmdconnectimg}")
				`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
			/>

			<motion.div
				aria-hidden
				initial={{ scale: 0.6, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
				className="pointer-events-none absolute -right-40 top-10 -z-10 h-[480px] w-[480px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${PRIMARY}55, transparent 70%)`,
				}}
			/>
			<motion.div
				aria-hidden
				initial={{ scale: 0.6, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
				className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${SECONDARY}55, transparent 70%)`,
				}}
			/>

			<div className="container-x relative">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/55">
					<span>{eyebrow}</span>
					<span
						className="ml-2 hidden h-px w-12 md:block"
						style={{
							background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
						}}
					/>
					{kicker && (
						<span className="hidden font-mono text-[10px] tracking-[0.4em] text-white/35 md:inline">
							{kicker}
						</span>
					)}
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
					className="mt-6 max-w-5xl page-title">
					<span className="text-white">{titleLead} </span>
					<span
						className="bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
						}}>
						{titleAccent}
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
					className="mt-6 max-w-3xl text-lg text-white/70 md:text-xl">
					{description}
				</motion.p>

				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
					className="mt-10 h-px w-full origin-left"
					style={{
						background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
					}}
				/>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
					className="mt-8 flex flex-wrap items-center gap-3">
					<span
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
						style={{
							borderColor: `${PRIMARY}55`,
							background: `${PRIMARY}14`,
						}}>
						<span
							className="h-1.5 w-1.5 rounded-full"
							style={{
								background: PRIMARY,
								boxShadow: `0 0 8px ${PRIMARY}`,
							}}
						/>
						Coming soon
					</span>
					{tags?.map((t, idx) => (
						<span
							key={t}
							className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur"
							style={{
								borderColor:
									idx % 2 === 0 ? "rgba(255,255,255,0.18)" : `${SECONDARY}55`,
								background:
									idx % 2 === 0 ? "rgba(255,255,255,0.06)" : `${SECONDARY}14`,
							}}>
							{t}
						</span>
					))}
				</motion.div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── BODY */

function PlaceholderBody({
	eyebrow,
	features,
}: {
	eyebrow: string;
	features?: PlaceholderFeature[];
}) {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			ref={ref}
			className="section-tint relative isolate overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10">
				<div
					className="absolute -top-24 left-[8%] h-[26rem] w-[26rem] rounded-full opacity-40 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}22, transparent 70%)`,
					}}
				/>
				<div
					className="absolute -bottom-32 right-[6%] h-[26rem] w-[26rem] rounded-full opacity-35 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}26, transparent 70%)`,
					}}
				/>
			</div>

			<div className="container-x relative">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="max-w-3xl">
					<div className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>
						What to expect
					</div>
					<h2 className="section-title mt-2">
						<span className="text-slate-900">This space is being </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							crafted.
						</span>
					</h2>
					<p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
						{eyebrow} is on its way. We are putting it together with the same
						care that goes into everything we build at Creintors. Check back
						soon, or reach out and we'll keep you posted.
					</p>
				</motion.div>

				{features && features.length > 0 && (
					<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{features.map((f, i) => {
							const accent = i % 2 === 0 ? PRIMARY : SECONDARY;
							return (
								<motion.div
									key={f.title}
									initial={{ opacity: 0, y: 24 }}
									animate={inView ? { opacity: 1, y: 0 } : {}}
									transition={{
										duration: 0.7,
										ease: [0.22, 1, 0.36, 1],
										delay: 0.15 + i * 0.08,
									}}
									className="group relative overflow-hidden rounded-2xl border bg-white/95 p-6 transition-all duration-500 hover:-translate-y-1"
									style={{
										borderColor: "rgba(15,23,42,0.08)",
										boxShadow: "0 20px 50px -28px rgba(15,23,42,0.2)",
									}}>
									<span
										aria-hidden
										className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-80 transition-opacity duration-500 group-hover:opacity-100"
										style={{
											background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
											boxShadow: `0 0 10px ${accent}66`,
										}}
									/>
									<h3 className="font-display text-lg font-semibold leading-tight tracking-tight text-slate-900">
										{f.title}
									</h3>
									<div
										className="mt-2 h-px w-10 transition-all duration-500 group-hover:w-20"
										style={{
											background: `linear-gradient(90deg, ${accent}, transparent)`,
										}}
									/>
									<p className="mt-3 text-sm leading-relaxed text-slate-600">
										{f.body}
									</p>
								</motion.div>
							);
						})}
					</div>
				)}

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
					className="mt-14 flex flex-wrap items-center gap-3">
					<a
						href="/contact"
						className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
						style={{
							background: `linear-gradient(120deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
							boxShadow: `0 18px 40px -12px ${PRIMARY}99, inset 0 0 0 1px rgba(255,255,255,0.22)`,
						}}>
						<span
							aria-hidden
							className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
						/>
						<span className="relative">Get in touch</span>
						<span
							aria-hidden
							className="relative transition-transform duration-300 group-hover/cta:translate-x-1">
							→
						</span>
					</a>
					<a
						href="/"
						className="inline-flex items-center gap-2 rounded-full border bg-white/90 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900"
						style={{ borderColor: "rgba(15,23,42,0.12)" }}>
						Back to Home
						<span aria-hidden>→</span>
					</a>
				</motion.div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── PAGE */

export default function PlaceholderPage(props: PlaceholderPageProps) {
	const { features, ...heroProps } = props;
	return (
		<main className="relative isolate">
			<PlaceholderHero {...heroProps} />
			<IgnoranceLine />
			<PlaceholderBody
				eyebrow={props.eyebrow}
				features={features}
			/>
		</main>
	);
}
