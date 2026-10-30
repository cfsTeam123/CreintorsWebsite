/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { gsap } from "../lib/gsap";
import { PRIMARY, SECONDARY } from "../lib/theme";
import approachHero from "../assets/gallery/it1.png";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import IgnoranceLine from "../components/IgnoranceLine";

/* ────────────────────────────────────────── DATA */

const MANIFESTO = [
	"Achieving simple design is tough. It needs a team of self-motivated people who can Create, Invent and Innovate the ingredients that make us “Creintors”.",
	"Our strong engineering resource, system approach and obsessive team work power the motivation to perform and the commitment to deliver innovative solutions under one roof, with real value addition for our customers.",
	"Experience & Knowledge, Automatic Approach and Innovative Solutions: the three pillars that hold up every product we ship.",
];

const STEPS = [
	{
		num: "01",	
		title: "Listen",
		body: "Walk the customer's floor, understand the constraint, mirror the language back.",
	},
	{
		num: "02",
		title: "Design",
		body: "Concept, simulate and validate. Fail on paper, not in the customer's plant.",
	},
	{
		num: "03",
		title: "Build",
		body: "Fabricate, automate and integrate under one roof at Belgaum.",
	},
	{
		num: "04",
		title: "Commission",
		body: "Install, calibrate, train the operators and stay on call after handover.",
	},
];

const STATS = [
	{ value: 20, suffix: "+", label: "Years of practice" },
	{ value: 3, suffix: "", label: "Pillars, one system" },
	{ value: 4, suffix: "", label: "Steps, every project" },
];

/* ────────────────────────────────────────── HOOKS */

function useCountUp(end: number, durationMs: number, trigger: boolean) {
	const [value, setValue] = useState(0);
	useEffect(() => {
		if (!trigger) return;
		const start = performance.now();
		let raf = 0;
		const loop = (now: number) => {
			const t = Math.min(1, (now - start) / durationMs);
			const eased = 1 - Math.pow(1 - t, 3);
			setValue(Math.floor(eased * end));
			if (t < 1) raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, [end, durationMs, trigger]);
	return value;
}

/* ────────────────────────────────────────── HERO */

function ApproachHero() {
	const heroRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const el = heroRef.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".tk-fade",
				{ opacity: 0, y: 36 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					stagger: 0.08,
					delay: 0.3,
				},
			);
			gsap.fromTo(
				".tk-bar",
				{ scaleX: 0 },
				{
					scaleX: 1,
					duration: 1.4,
					ease: "expo.out",
					delay: 0.4,
					transformOrigin: "left",
				},
			);
			gsap.fromTo(
				".tk-orb",
				{ scale: 0.6, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 1.6, ease: "elastic.out(1,0.6)" },
			);
		}, el);
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={heroRef}
			className="relative isolate flex min-h-[60vh] items-end overflow-hidden pb-16 pt-28 md:min-h-[70vh] md:pb-20 md:pt-32"
			style={{ backgroundColor: "#070c17" }}>
			<img
				aria-hidden
				src={approachHero}
				alt=""
				className="pointer-events-none absolute inset-0 -z-40 h-full w-full object-cover object-center md:object-[0%_50%] opacity-75"
				style={{ filter: "saturate(0.9) contrast(1.1)" }}
			/>

			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-30"
				style={{
					background: `
						linear-gradient(180deg, rgba(7,12,23,0.22) 0%, rgba(7,12,23,0.40) 55%, rgba(7,12,23,0.80) 100%),
						radial-gradient(50% 70% at 18% 70%, ${PRIMARY}33, transparent 60%),
						radial-gradient(60% 80% at 90% 10%, ${SECONDARY}33, transparent 60%)
					`,
				}}
			/>

			<div
				aria-hidden
				className="tk-orb pointer-events-none absolute -right-40 top-10 -z-10 h-[480px] w-[480px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${PRIMARY}55, transparent 70%)`,
				}}
			/>
			<div
				aria-hidden
				className="tk-orb pointer-events-none absolute -left-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${SECONDARY}55, transparent 70%)`,
				}}
			/>

			<div className="container-x relative">
				<div className="tk-fade flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/55">
					<span>Quick Fail - Do And Demonstrate</span>
					<span
						className="ml-2 hidden h-px w-12 md:block"
						style={{
							background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
						}}
					/>
					{/* <span className="hidden font-mono text-[10px] tracking-[0.4em] text-white/35 md:inline">
						LISTEN · DESIGN · BUILD · COMMISSION
					</span> */}
				</div>

				<h1 className="tk-fade mt-6 max-w-5xl page-title">
					<span className="text-white">Our </span>
					<span
						className="bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
						}}>
						{" "}
						Approach
					</span>
				</h1>

				<p className="tk-fade mt-6 max-w-3xl text-lg text-white/70 md:text-xl">
					Fastest team integration involving all stakeholders to express, experiment and establish the most optimal solution.
				</p>

				<div
					className="tk-bar mt-10 h-px w-full origin-left"
					style={{
						background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
					}}
				/>

				<div className="tk-fade mt-8 flex flex-wrap items-center gap-3">
					<span
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur"
						style={{
							borderColor: "rgba(255,255,255,0.18)",
							background: "rgba(255,255,255,0.06)",
						}}>
						Since 2012
					</span>
					<span
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
						style={{
							borderColor: `${PRIMARY}55`,
							background: `${PRIMARY}14`,
						}}>
						Create · Invent · Innovate
					</span>
					<span
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
						style={{
							borderColor: `${SECONDARY}55`,
							background: `${SECONDARY}14`,
						}}>
						Pain → Glory
					</span>
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── MANIFESTO */

function StatCard({
	value,
	suffix,
	label,
	trigger,
	delay,
}: {
	value: number;
	suffix: string;
	label: string;
	trigger: boolean;
	delay: number;
}) {
	const n = useCountUp(value, 1400, trigger);
	return (
		<motion.div
			initial={{ opacity: 0, y: 18 }}
			animate={trigger ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
			className="group relative overflow-hidden rounded-2xl border bg-white/95 px-4 py-5 text-center transition-all duration-500 hover:-translate-y-0.5"
			style={{ borderColor: "rgba(15,23,42,0.08)" }}>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-80 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
				}}
			/>
			<div
				className="bg-clip-text font-display text-4xl font-bold leading-none tracking-tight text-transparent"
				style={{
					backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
				}}>
				{n}
				{suffix}
			</div>
			<div className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
				{label}
			</div>
		</motion.div>
	);
}

function ManifestoSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="manifesto"
			ref={ref}
			className="section-tint relative isolate flex items-center overflow-hidden py-10 md:h-[80vh]">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10">
				<div
					className="absolute -top-32 left-[8%] h-[28rem] w-[28rem] rounded-full opacity-40 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}26, transparent 70%)`,
					}}
				/>
				<div
					className="absolute -bottom-40 right-[6%] h-[26rem] w-[26rem] rounded-full opacity-35 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}26, transparent 70%)`,
					}}
				/>
			</div>

			<div className="container-x relative w-full">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
						className="md:col-span-5">
						<div className="eyebrow">
							<span
								className="h-px w-8"
								style={{ background: PRIMARY }}
							/>
							We at Creintors
						</div>
						<h2 className="section-title mt-2 max-w-md">
							<span className="text-slate-900">Since 2012, </span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								“Creintors”.
							</span>
						</h2>
						<p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 md:text-base">
							The portmanteau of Creators and Inventors and a deliberate choice
							about the kind of company we wanted to build.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 28 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{
							duration: 1,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.15,
						}}
						className="md:col-span-7">
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.85,
								ease: [0.22, 1, 0.36, 1],
								delay: 0.3,
							}}
							className="space-y-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
							{MANIFESTO.map((p, i) => (
								<p key={i}>{p}</p>
							))}
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 14 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.7,
								ease: [0.22, 1, 0.36, 1],
								delay: 0.7,
							}}
							className="relative left-1/2 right-1/2 mt-10 -mx-[68vw] w-screen overflow-hidden"
							style={{
								maskImage:
									"linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
								WebkitMaskImage:
									"linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
							}}>
							<motion.div
								className="flex w-max items-center gap-10 whitespace-nowrap pr-10"
								animate={{ x: ["0%", "-50%"] }}
								transition={{
									duration: 22,
									ease: "linear",
									repeat: Infinity,
								}}>
								{Array.from({ length: 2 }).flatMap((_, dupIdx) =>
									["Create", "Invent", "Innovate"].map((word, i) => (
										<div
											key={`${dupIdx}-${word}`}
											className="flex shrink-0 items-center gap-10">
											<span
												className="bg-clip-text font-display text-6xl font-bold leading-none tracking-tight text-transparent md:text-8xl"
												style={{
													backgroundImage: `linear-gradient(120deg, ${
														i % 2 === 0 ? PRIMARY : SECONDARY
													}, #0f172a)`,
												}}>
												{word}
											</span>
											<span
												aria-hidden
												className="inline-block h-2.5 w-2.5 shrink-0 rotate-45"
												style={{
													background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
													boxShadow: `0 0 14px ${PRIMARY}88`,
												}}
											/>
										</div>
									)),
								)}
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── DEFINE · DELIVER · TRANSFORM */

/**
 * "We Define. We Deliver. We Transform." — the client's text, in two halves:
 * what we do for the requirement (left) and where we want the customer to get
 * to (right).
 */
function DefineDeliverSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="define-deliver-transform"
			ref={ref}
			className="relative isolate flex items-center overflow-hidden bg-white py-10 md:min-h-[80vh]">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10">
				<div
					className="absolute -top-32 right-[10%] h-[26rem] w-[26rem] rounded-full opacity-35 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}26, transparent 70%)`,
					}}
				/>
				<div
					className="absolute -bottom-40 left-[6%] h-[24rem] w-[24rem] rounded-full opacity-30 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}26, transparent 70%)`,
					}}
				/>
			</div>

			<div className="container-x relative w-full">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
					{/* LEFT — the requirement, and what we do with it */}
					<motion.div
						initial={{ opacity: 0, x: -28 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
						className="md:pr-12 lg:pr-16">
						<h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-slate-900">
							<span className="block">We Define.</span>
							<span className="block">We Deliver.</span>
							<span
								className="block bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								We Transform.
							</span>
						</h2>

						<div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
							<p className="text-lg font-medium text-slate-900 md:text-xl">
								A customer expresses a requirement. We look beyond it to
								understand the underlying need, define the right solution, and
								deliver it with purpose.
							</p>
							<p>
								At Creintors, our role is not merely to provide what is asked
								for, but to bring clarity to what is needed. We combine
								experience, engineering insight and innovative thinking to
								develop solutions that address the real challenge and create
								lasting value.
							</p>
							<p className="font-semibold text-slate-900">
								But delivering a solution is only the beginning.
							</p>
						</div>
					</motion.div>

					{/* RIGHT — where we want the customer to get to */}
					<motion.div
						initial={{ opacity: 0, x: 28 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{
							duration: 1,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.15,
						}}
						className="relative border-t border-slate-900/10 pt-10 md:flex md:flex-col md:justify-center md:border-l md:border-t-0 md:pl-12 md:pt-0 lg:pl-16">
						<span
							aria-hidden
							className="pointer-events-none absolute left-0 top-0 hidden h-24 w-px md:block"
							style={{
								background: `linear-gradient(180deg, ${PRIMARY}, transparent)`,
							}}
						/>
						<div className="space-y-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
							<p className="text-lg font-medium text-slate-900 md:text-xl">
								Our true aspiration is to enable our customers to leapfrog from
								where they are today to where they can be tomorrow.
							</p>
							<p>
								To help them move beyond existing limitations, embrace new
								possibilities, and take their next leap in transformation.
							</p>
						</div>

						<p className="mt-8 font-display text-[clamp(1.5rem,2.6vw,2.125rem)] font-semibold leading-snug tracking-tight text-slate-900">
							Because we don’t just want our customers to stay afloat.{" "}
							
						</p>
						<p className="mt-1 font-display text-[clamp(1.5rem,2.6vw,2.125rem)] font-semibold leading-snug tracking-tight text-slate-900">
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								We want to give them<br></br>
								 the wings to fly.
							</span>
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── METHODOLOGY (4-step rail) */

function MethodologySection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section
			id="how-we-deliver"
			ref={ref}
			className="section-tint relative isolate flex items-center overflow-hidden py-10 md:max-h-[95vh] md:min-h-[95vh]">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10">
				<div
					className="absolute left-[5%] top-12 h-[24rem] w-[24rem] rounded-full opacity-40 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}22, transparent 70%)`,
					}}
				/>
				<div
					className="absolute bottom-12 right-[8%] h-[26rem] w-[26rem] rounded-full opacity-35 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}26, transparent 70%)`,
					}}
				/>
			</div>

			<div className="container-x relative w-full">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
					<div className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>
						How we deliver
					</div>
					<h2 className="section-title mt-2 max-w-3xl">
						<span className="text-slate-900">Four steps, </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							every project.
						</span>
					</h2>
					<p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
						The same operating rhythm whether it is a hydro-test rig for an OEM
						in Tokyo, an AGV fleet for a Mumbai factory or a WTP for a Karnataka
						township.
					</p>
				</motion.div>

				<div className="relative mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4 md:gap-6">
					{/* connector line on md+ */}
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-4 top-[34px] hidden h-px md:block"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}88 12%, ${SECONDARY}88 88%, transparent)`,
							boxShadow: `0 0 12px ${PRIMARY}66`,
						}}
					/>

					{STEPS.map((s, i) => {
						const accent = i % 2 === 0 ? PRIMARY : SECONDARY;
						return (
							<motion.div
								key={s.title}
								initial={{ opacity: 0, y: 30 }}
								animate={
									inView ? { opacity: 1, y: 0 } : {}
								}
								transition={{
									duration: 0.8,
									ease: [0.22, 1, 0.36, 1],
									delay: 0.15 + i * 0.1,
								}}
								className="group relative">
								<div className="flex md:flex-col">
									{/* Numbered node */}
									<span
										className="relative z-10 grid h-[68px] w-[68px] shrink-0 place-items-center rounded-full font-display text-lg font-bold text-white"
										style={{
											background: `linear-gradient(135deg, ${accent}, ${SECONDARY})`,
											boxShadow: `0 0 0 6px rgba(255,255,255,0.95), 0 16px 30px -10px ${accent}99`,
										}}>
										<span>{s.num}</span>
									</span>

									<div className="ml-5 flex-1 md:ml-0 md:mt-5">
										<h3 className="font-display text-lg font-semibold leading-tight text-slate-900 md:text-xl">
											{s.title}
										</h3>
										<div
											className="mt-2 h-px w-10 transition-all duration-500 group-hover:w-20"
											style={{
												background: `linear-gradient(90deg, ${accent}, transparent)`,
											}}
										/>
										<p className="mt-3 text-sm leading-relaxed text-slate-600">
											{s.body}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── CTA */

function ClosingSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			ref={ref}
			className="section-tint relative isolate flex items-center overflow-hidden py-10 md:h-[80vh]">
			<div
				aria-hidden
				className="pointer-events-none absolute -right-40 top-10 -z-10 h-[480px] w-[480px] rounded-full opacity-40 blur-[140px]"
				style={{
					background: `radial-gradient(circle, ${PRIMARY}44, transparent 70%)`,
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full opacity-40 blur-[140px]"
				style={{
					background: `radial-gradient(circle, ${SECONDARY}44, transparent 70%)`,
				}}
			/>

			<div className="container-x relative w-full">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
					className="relative mx-auto max-w-5xl text-center">
					<blockquote className="font-display text-[clamp(1rem,5.5vw,2.0rem)] font-semibold leading-[1.4] tracking-tight text-slate-900">
						The final solution may look simple. Getting there is not.
							<br></br>We fail fast, learn faster and refine relentlessly — turning every iteration into a step towards a solution that is simpler, smarter and built to work.
						<div
						className="mx-auto mt-10 h-px w-40"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
							boxShadow: `0 0 14px ${PRIMARY}66`,
						}}
					/>
							Quick Fail is not a setback. It is how we engineer better.
							<br></br>That is our approach. 
					</blockquote>
					<div
						className="mx-auto mt-10 h-px w-40"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
							boxShadow: `0 0 14px ${PRIMARY}66`,
						}}
					/>
					<p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.42em] text-slate-500">
						The Creintors playbook
					</p>

					<motion.div
						initial={{ opacity: 0, y: 14 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{
							duration: 0.7,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.4,
						}}
						className="mt-12 flex flex-wrap items-center justify-center gap-3">
						<a
							href="/about/team"
							className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
							style={{
								background: `linear-gradient(120deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
								boxShadow: `0 18px 40px -12px ${PRIMARY}99, inset 0 0 0 1px rgba(255,255,255,0.22)`,
							}}>
							<span
								aria-hidden
								className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
							/>
							<span className="relative">Meet the team</span>
							<span
								aria-hidden
								className="relative transition-transform duration-300 group-hover/cta:translate-x-1">
								→
							</span>
						</a>
						<a
							href="/contact"
							className="inline-flex items-center gap-2 rounded-full border bg-white/90 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900"
							style={{ borderColor: "rgba(15,23,42,0.12)" }}>
							Click to Innovate
							<span aria-hidden>→</span>
						</a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── PAGE */

export default function Approach() {
	useSeo({
		...PAGE_SEO.approach,
	});

	return (
		<main className="relative isolate">
			<ApproachHero />
			<IgnoranceLine />
			<ManifestoSection />
			<DefineDeliverSection />
			<ClosingSection />
		</main>
	);
}
