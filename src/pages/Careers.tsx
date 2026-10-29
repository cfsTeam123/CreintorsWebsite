/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
	ArrowRight,
	BookOpen,
	Briefcase,
	Compass,
	GraduationCap,
	HeartPulse,
	Layers,
	Lightbulb,
	MapPin,
	Rocket,
	Shield,
	Sparkles,
	UserPlus,
	Wrench,
	Zap,
} from "lucide-react";
import { gsap } from "../lib/gsap";
import { PRIMARY, SECONDARY } from "../lib/theme";

import heroImage from "../assets/gallery/job_opening.jpg";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import IgnoranceLine from "../components/IgnoranceLine";

/* ────────────────────────────────────────── DATA */

const HERO_BADGES = ["Engineering", "Automation", "Environment", "Test Rigs"];

type Value = {
	icon: typeof Sparkles;
	title: string;
	body: string;
};

const VALUES: Value[] = [
	{
		icon: Lightbulb,
		title: "Curiosity first",
		body: "We hire people who ask better questions than answers. Curiosity is how we keep engineering interesting and customer outcomes ambitious.",
	},
	{
		icon: Wrench,
		title: "Builders, not bystanders",
		body: "We design, fabricate, instrument and commission with our own hands. Ownership of the outcome is non-negotiable.",
	},

	{
		icon: Sparkles,
		title: "Better-zone mindset",
		body: "Comfort zone → better zone. Improving the way we engineer, ship and support is everyone's job, at every level.",
	},
];

type WorkPanel = {
	tag: string;
	title: string;
	body: string;
	bullets: string[];
};

const WORK_LIFE: WorkPanel[] = [
	{
		tag: "Hands-on",
		title: "Shop-floor first, slide-deck second",
		body: "Most of our engineers spend significant time on the test rig, the panel build or the plant, not just in CAD or code. The closer you are to where the work lands, the better you design.",
		bullets: [
			"In-house fabrication & assembly",
			"On-site commissioning and support",
			"Cross-discipline collaboration",
		],
	},
	{
		tag: "Growth",
		title: "Learn from senior engineers, then teach the next",
		body: "Our 3i culture of Inspire, Innovate and Implement means juniors get mentored by people who've shipped real products. Once you've climbed a ladder, you help the next person up.",
		bullets: [
			"Mentorship from CMD & senior leadership",
			"Internal upskilling programs",
			"Conference & industry-expo exposure",
		],
	},
	{
		tag: "Impact",
		title: "Your name on real systems, in real plants",
		body: "From valve test rigs at OEMs to ASRS at large manufacturers to water plants serving municipal customers. What you build leaves the shop and runs for years.",
		bullets: [
			"Pan-India OEM clients",
			"Mission-critical industries",
			"Long-horizon AMC & support",
		],
	},
];

type Perk = {
	icon: typeof Sparkles;
	title: string;
	body: string;
};

const PERKS: Perk[] = [
	{
		icon: HeartPulse,
		title: "Health & wellbeing",
		body: "Medical coverage and on-campus wellness initiatives so you can focus on the work that matters.",
	},
	{
		icon: GraduationCap,
		title: "Learning budget",
		body: "Annual support for certifications, courses and conferences across automation, environment and quality.",
	},
	{
		icon: Compass,
		title: "Career path",
		body: "Defined IC and management tracks with clear levels, built so engineers don't have to choose between staying technical and growing.",
	},
	{
		icon: Layers,
		title: "Cross-company mobility",
		body: "Move between CTPL, CESPL, CASPL or the 3i ecosystem. Many of our best engineers grew by switching companies.",
	},
	{
		icon: Rocket,
		title: "Real ownership",
		body: "Ship a real product, sign-off on a real plant, present to a real customer. We don't gate-keep the interesting work.",
	},
	{
		icon: Zap,
		title: "Modern tooling",
		body: "Up-to-date CAD/CAE, PLC/SCADA stacks, IoT cloud platforms and ERP integrations, with no working around outdated tooling.",
	},
];

type Role = {
	title: string;
	division: string;
	location: string;
	type: string;
	summary: string;
};

const OPEN_ROLES: Role[] = [
	{
		title: "Design Engineer, Test Rigs",
		division: "CTPL",
		location: "Belgaum, Karnataka",
		type: "Full-time",
		summary:
			"Own the mechanical design of high-pressure valve test rigs from CAD to fabrication & commissioning. 2–5 years experience preferred.",
	},
	{
		title: "Automation Engineer, PLC and SCADA",
		division: "CASPL",
		location: "Belgaum, Karnataka",
		type: "Full-time",
		summary:
			"Develop PLC logic and SCADA dashboards for ASRS, AGV/AMR and intralogistics systems. Allen-Bradley / Siemens / Mitsubishi exposure welcome.",
	},
	{
		title: "Process Engineer, Water and Effluent",
		division: "CESPL",
		location: "Belgaum, Karnataka",
		type: "Full-time",
		summary:
			"Size and design WTP / STP trains for industrial and municipal clients. Strong process-chemistry foundation expected.",
	},
	{
		title: "Quality Engineer, IMS and ISO",
		division: "Group · Quality",
		location: "Belgaum, Karnataka",
		type: "Full-time",
		summary:
			"Drive ISO 9001 / 14001 / 45001 / 27001 audits, IMS compliance and supplier-quality programs across the group.",
	},
	{
		title: "Engineering Internship",
		division: "Open across companies",
		location: "Belgaum / remote",
		type: "6 months",
		summary:
			"Final-year students from mechanical, electrical, instrumentation or environmental backgrounds. Real projects, real outcomes.",
	},
];

const STATS = [
	{ value: "20+", label: "Years of engineering" },
	{ value: "3", label: "Operating companies" },
	{ value: "4", label: "ISO standards" },
	{ value: "1", label: "Better-zone mindset" },
];

/* ────────────────────────────────────────── HERO */

function CareersHero() {
	const heroRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const el = heroRef.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".cr-fade",
				{ opacity: 0, y: 36 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					stagger: 0.08,
					delay: 0.25,
				},
			);
			gsap.fromTo(
				".cr-bar",
				{ scaleX: 0 },
				{
					scaleX: 1,
					duration: 1.4,
					ease: "expo.out",
					delay: 0.45,
					transformOrigin: "left",
				},
			);
			gsap.fromTo(
				".cr-orb",
				{ scale: 0.5, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 1.8, ease: "elastic.out(1,0.6)" },
			);
		}, el);
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={heroRef}
			className="relative isolate flex min-h-[40vh] items-end overflow-hidden pb-14 pt-28 md:min-h-[40vh] md:pb-16 md:pt-32"
			style={{ backgroundColor: "#070c17" }}>
			<img
				aria-hidden
				src={heroImage}
				alt=""
				className="pointer-events-none absolute inset-0 -z-40 h-full w-full object-cover opacity-70"
				style={{ filter: "saturate(0.85) contrast(1.08)" }}
			/>

			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-30"
				style={{
					background: `
						linear-gradient(180deg, rgba(7,12,23,0.22) 0%, rgba(7,12,23,0.45) 55%, rgba(7,12,23,0.92) 100%),
						radial-gradient(60% 80% at 80% 20%, ${PRIMARY}26, transparent 60%),
						radial-gradient(60% 80% at 0% 100%, ${SECONDARY}33, transparent 60%)
					`,
				}}
			/>

			<div
				aria-hidden
				className="cr-orb pointer-events-none absolute -right-40 top-12 -z-10 h-[460px] w-[460px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${PRIMARY}55, transparent 70%)`,
				}}
			/>
			<div
				aria-hidden
				className="cr-orb pointer-events-none absolute -left-32 bottom-0 -z-10 h-[380px] w-[380px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${SECONDARY}55, transparent 70%)`,
				}}
			/>

			<div className="container-x relative">
				<div className="cr-fade flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/55">
					<span>Careers at Creintors</span>
					<span
						className="ml-2 hidden h-px w-12 md:block"
						style={{
							background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
						}}
					/>
					<span className="hidden font-mono text-[10px] tracking-[0.4em] text-white/35 md:inline">
						BUILD · LEARN · TRANSFORM
					</span>
				</div>

				<h1 className="cr-fade mt-6 max-w-9xl page-title">
					<span className="text-white">Careers </span>
				</h1>

				<p className="cr-fade mt-6 max-w-3xl text-lg text-white/70 md:text-xl">
					Engineering, automation and environmental impact at industrial scale.
					Join a group where what you design leaves the shop, runs in real
					plants, and gets your name on it.
				</p>

				<div
					className="cr-bar mt-10 h-px w-full origin-left"
					style={{
						background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
					}}
				/>

				<div className="cr-fade mt-8 flex flex-wrap items-center gap-3">
					<span
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur"
						style={{
							borderColor: "rgba(255,255,255,0.18)",
							background: "rgba(255,255,255,0.06)",
						}}>
						We're hiring
					</span>
					{HERO_BADGES.map((b) => (
						<span
							key={b}
							className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
							style={{
								borderColor: `${PRIMARY}55`,
								background: `${PRIMARY}14`,
							}}>
							{b}
						</span>
					))}
				</div>

				<div className="cr-fade mt-10 flex flex-wrap gap-3">
					<a
						href="#open-roles"
						className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
						style={{
							background: `linear-gradient(120deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
							boxShadow: `0 18px 44px -15px ${PRIMARY}aa`,
						}}>
						<span
							aria-hidden
							className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
						/>
						<span className="relative">View open roles</span>
						<ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
					</a>
					<Link
						to="/contact"
						className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/15">
						Send your resume
					</Link>
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── STATS BAR */

function StatsStrip() {
	return (
		<section className="relative -mt-10 pb-10">
			<div className="container-x relative">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/85 backdrop-blur-xl"
					style={{
						boxShadow:
							"0 30px 80px -28px rgba(15,23,42,0.25), 0 0 0 1px rgba(255,255,255,0.85) inset",
					}}>
					<span
						aria-hidden
						className="pointer-events-none absolute inset-x-10 top-0 h-px"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
						}}
					/>
					<div className="grid grid-cols-2 divide-y divide-slate-200/70 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
						{STATS.map((s, i) => (
							<motion.div
								key={s.label}
								initial={{ opacity: 0, y: 14 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									ease: [0.22, 1, 0.36, 1],
									delay: 0.1 + i * 0.06,
								}}
								className="px-6 py-7 text-center">
								<div
									className="bg-clip-text font-display text-4xl font-bold leading-none tracking-tight text-transparent md:text-5xl"
									style={{
										backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
									}}>
									{s.value}
								</div>
								<div className="mt-3 font-mono text-[10px] uppercase tracking-[0.32em] text-slate-500">
									{s.label}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── VALUES */

function ValuesSection() {
	return (
		<section className="relative overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-12 h-[24rem] w-[24rem] rounded-full blur-[140px]"
				style={{ background: `${PRIMARY}1c` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-32 bottom-12 h-[22rem] w-[22rem] rounded-full blur-[140px]"
				style={{ background: `${SECONDARY}1c` }}
			/>

			<div className="container-x relative">
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
					className="mb-12 max-w-3xl">
					<div className="eyebrow text-slate-600">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						How we work
					</div>
					<h2 className="section-title">
						<span className="text-slate-900">The traits we </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							hire for.
						</span>
					</h2>
					<p className="mt-6 text-slate-600">
						We're not looking for credentials. We're looking for builders
						who want to leave engineering better than they found it.
					</p>
				</motion.div>

				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{VALUES.map((v, i) => {
						const Icon = v.icon;
						return (
							<motion.div
								key={v.title}
								initial={{ opacity: 0, y: 28, scale: 0.96 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{
									duration: 0.7,
									ease: [0.22, 1, 0.36, 1],
									delay: i * 0.08,
								}}
								className="group relative h-full overflow-hidden rounded-3xl border bg-white p-6 transition-shadow duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-28px_rgba(0,160,227,0.28),0_0_0_1px_rgba(0,160,227,0.18)_inset]"
								style={{
									borderColor: "rgba(15,23,42,0.08)",
									boxShadow:
										"0 18px 50px -28px rgba(15,23,42,0.22), 0 0 0 1px rgba(255,255,255,0.85) inset",
								}}>
								<span
									aria-hidden
									className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
									style={{
										background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}aa, transparent)`,
										boxShadow: `0 0 12px ${PRIMARY}55`,
									}}
								/>
								<span
									aria-hidden
									className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
									style={{ background: PRIMARY }}
								/>

								<div
									className="grid h-12 w-12 place-items-center rounded-xl border transition-transform duration-500 group-hover:scale-110"
									style={{
										background: `${PRIMARY}1a`,
										borderColor: `${PRIMARY}55`,
										color: PRIMARY,
										boxShadow: `0 8px 24px -8px ${PRIMARY}88`,
									}}>
									<Icon className="h-6 w-6" />
								</div>

								<h3 className="mt-5 font-display text-lg font-semibold leading-tight text-slate-900">
									{v.title}
								</h3>
								<div
									className="mt-3 h-px w-10 transition-all duration-500 group-hover:w-16"
									style={{
										background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
									}}
								/>
								<p className="mt-4 text-sm leading-relaxed text-slate-600">
									{v.body}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── WORK LIFE */

function WorkLifeSection() {
	return (
		<section className="relative overflow-hidden py-10">
			<div className="container-x relative">
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
					className="mb-12 max-w-3xl">
					<div className="eyebrow text-slate-600">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						Work life
					</div>
					<h2 className="section-title">
						<span className="text-slate-900">What a day </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							here looks like.
						</span>
					</h2>
				</motion.div>

				<div className="grid gap-6 md:grid-cols-3">
					{WORK_LIFE.map((p, i) => (
						<motion.div
							key={p.title}
							initial={{ opacity: 0, y: 32 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.8,
								ease: [0.22, 1, 0.36, 1],
								delay: i * 0.1,
							}}
							className="group relative overflow-hidden rounded-3xl border bg-white p-7 transition-all duration-500 hover:-translate-y-1"
							style={{
								borderColor: "rgba(15,23,42,0.08)",
								boxShadow:
									"0 22px 60px -32px rgba(15,23,42,0.22), 0 0 0 1px rgba(255,255,255,0.85) inset",
							}}>
							<span
								aria-hidden
								className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
								style={{
									background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}aa, transparent)`,
									boxShadow: `0 0 12px ${PRIMARY}55`,
								}}
							/>

							<div
								className="inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]"
								style={{
									borderColor: `${PRIMARY}55`,
									background: `${PRIMARY}10`,
									color: PRIMARY,
								}}>
								{p.tag}
							</div>

							<h3 className="mt-5 font-display text-xl font-semibold leading-snug text-slate-900">
								{p.title}
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-slate-600">
								{p.body}
							</p>

							<ul className="mt-5 space-y-2">
								{p.bullets.map((b) => (
									<li
										key={b}
										className="flex items-start gap-2 text-sm text-slate-700">
										<span
											aria-hidden
											className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
											style={{
												background: PRIMARY,
												boxShadow: `0 0 8px ${PRIMARY}66`,
											}}
										/>
										<span>{b}</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── PERKS */

function PerksSection() {
	return (
		<section className="relative overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `
						radial-gradient(80% 60% at 0% 0%, ${PRIMARY}0e, transparent 60%),
						radial-gradient(80% 60% at 100% 100%, ${SECONDARY}10, transparent 65%)
					`,
				}}
			/>

			<div className="container-x relative">
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
					className="mb-12 max-w-3xl">
					<div className="eyebrow text-slate-600">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						Why people stay
					</div>
					<h2 className="section-title">
						<span className="text-slate-900">Built around </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							a serious career.
						</span>
					</h2>
				</motion.div>

				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{PERKS.map((p, i) => {
						const Icon = p.icon;
						return (
							<motion.div
								key={p.title}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{
									duration: 0.65,
									ease: [0.22, 1, 0.36, 1],
									delay: i * 0.06,
								}}
								className="group relative rounded-2xl border bg-white p-6 transition-all duration-500 hover:-translate-y-1"
								style={{
									borderColor: "rgba(15,23,42,0.08)",
									boxShadow:
										"0 14px 36px -22px rgba(15,23,42,0.18), 0 0 0 1px rgba(255,255,255,0.85) inset",
								}}>
								<div className="flex items-start gap-4">
									<div
										className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-transform duration-500 group-hover:scale-110"
										style={{
											background: `${PRIMARY}1a`,
											borderColor: `${PRIMARY}55`,
											color: PRIMARY,
										}}>
										<Icon className="h-5 w-5" />
									</div>
									<div>
										<h3 className="font-display text-base font-semibold leading-snug text-slate-900">
											{p.title}
										</h3>
										<p className="mt-2 text-[13px] leading-relaxed text-slate-600">
											{p.body}
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

/* ────────────────────────────────────────── OPEN ROLES */

function OpenRolesSection() {
	return (
		<section
			id="open-roles"
			className="relative overflow-hidden py-10">
			<div className="container-x relative">
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
					className="mb-12 flex max-w-5xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<div className="max-w-2xl">
						<div className="eyebrow text-slate-600">
							<span
								className="h-px w-8"
								style={{ background: PRIMARY }}
							/>{" "}
							Open roles
						</div>
						<h2 className="section-title">
							<span className="text-slate-900">Find your </span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								next role.
							</span>
						</h2>
						<p className="mt-6 text-slate-600">
							A snapshot of what we're hiring for right now across the Creintors
							group. Don't see your fit? Send us your resume. We are always
							meeting talented engineers.
						</p>
					</div>
					<a
						href={`mailto:info@creintors.com?subject=${encodeURIComponent(
							"Job Application: Creintors Careers",
						)}`}
						className="inline-flex items-center gap-2 self-start rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50">
						<UserPlus className="h-4 w-4" />
						Apply / Send resume
					</a>
				</motion.div>

				<div className="grid gap-4">
					{OPEN_ROLES.map((r, i) => (
						<motion.div
							key={r.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.6,
								ease: [0.22, 1, 0.36, 1],
								delay: i * 0.05,
							}}
							className="group relative overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-500 hover:-translate-y-0.5"
							style={{
								borderColor: "rgba(15,23,42,0.08)",
								boxShadow:
									"0 14px 36px -22px rgba(15,23,42,0.16), 0 0 0 1px rgba(255,255,255,0.85) inset",
							}}>
							<span
								aria-hidden
								className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-50 opacity-0 transition-all duration-500 group-hover:scale-y-100 group-hover:opacity-100"
								style={{
									background: `linear-gradient(180deg, ${PRIMARY}, ${SECONDARY})`,
								}}
							/>

							<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
								<div className="min-w-0">
									<div className="flex flex-wrap items-center gap-2">
										<span
											className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em]"
											style={{
												borderColor: `${PRIMARY}55`,
												background: `${PRIMARY}10`,
												color: PRIMARY,
											}}>
											<Briefcase className="h-3 w-3" /> {r.division}
										</span>
										<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
											<MapPin className="h-3 w-3" /> {r.location}
										</span>
										<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
											<BookOpen className="h-3 w-3" /> {r.type}
										</span>
									</div>
									<h3 className="mt-3 font-display text-lg font-semibold leading-tight text-slate-900 md:text-xl">
										{r.title}
									</h3>
									<p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
										{r.summary}
									</p>
								</div>
								<a
									href={`mailto:info@creintors.com?subject=${encodeURIComponent(
										`Application: ${r.title} (${r.division})`,
									)}`}
									className="inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:translate-x-0.5"
									style={{
										color: PRIMARY,
										borderColor: `${PRIMARY}55`,
										background: `${PRIMARY}10`,
									}}>
									Apply
									<ArrowRight className="h-4 w-4" />
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── CTA */

function ClosingCta() {
	return (
		<section className="relative py-10">
			<div className="container-x">
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="relative overflow-hidden rounded-[2rem] border p-10 text-center md:p-16"
					style={{
						borderColor: "#C7DCEC",
						backgroundColor: "#F1F7FB",
						backgroundImage: `linear-gradient(135deg, ${PRIMARY}14 0%, #F1F7FB 50%, ${SECONDARY}18 100%)`,
						boxShadow:
							"0 30px 80px -28px rgba(15,23,42,0.2), 0 0 0 1px rgba(255,255,255,0.85) inset",
					}}>
					<div
						aria-hidden
						className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
						style={{ background: PRIMARY }}
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
						style={{ background: SECONDARY }}
					/>

					<div className="relative">
						<p
							className="font-mono text-xs uppercase tracking-[0.4em]"
							style={{ color: PRIMARY }}>
							Let's build together
						</p>
						<h2 className="section-title-sm mx-auto mt-5 max-w-3xl">
							<span>Engineers who </span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								build the future, shape ours.
							</span>
						</h2>
						<p className="mx-auto mt-6 max-w-2xl text-slate-600 md:text-lg">
							If you'd thrive in a place where engineering is hands-on,
							ownership is real, and the work leaves the building, we'd love to
							meet you.
						</p>

						<div className="mt-10 flex flex-wrap justify-center gap-3">
							<Link
								to="/contact"
								className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
								style={{
									background: `linear-gradient(120deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
									boxShadow: `0 18px 44px -15px ${PRIMARY}aa`,
								}}>
								<span
									aria-hidden
									className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
								/>
								<span className="relative">Send your resume</span>
								<ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
							</Link>
							<a
								href="mailto:contact@creintors.com"
								translate="no"
								className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50">
								Email careers
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── PAGE */

export default function Careers() {
	useSeo({
		...PAGE_SEO.careers,
	});

	return (
		<main className="relative isolate">
			<CareersHero />
			<IgnoranceLine />
			<StatsStrip />
			<ValuesSection />
			<WorkLifeSection />
			<PerksSection />
			<OpenRolesSection />
			<ClosingCta />
		</main>
	);
}
