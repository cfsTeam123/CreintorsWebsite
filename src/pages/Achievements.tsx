/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { gsap } from "../lib/gsap";
import { PRIMARY, SECONDARY } from "../lib/theme";
import { ACHIEVEMENTS } from "../lib/divisions";
import heroImage from "../assets/gallery/awards1.png";
import achievement33Image from "../assets/awards/achivement33.jpg";
import logiMat2024Image from "../assets/awards/logiMAT 2024.jpg";
import logiMat2025Image from "../assets/awards/LogiMAT 2025.jpg";
import newaward from "../assets/awards/newaward.png";
import newaward2 from "../assets/awards/newaward2.png";
import newaward3 from "../assets/awards/newaward3.png";
import newaward4 from "../assets/awards/newaward4.png";
import newaward5 from "../assets/awards/newaward5.png";
import newaward6 from "../assets/awards/newaward6.png";
import newaward7 from "../assets/awards/newaward7.png";
import newaward8 from "../assets/awards/newaward8.png";
import newaward9 from "../assets/awards/newaward9.png";
import newaward10 from "../assets/awards/newaward10.png";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import IgnoranceLine from "../components/IgnoranceLine";

/* ────────────────────────────────────────── DATA */

type Award = {
	year: string;
	title: string;
	body: string;
	issuer: string;
	image: string;
	accent: string;
	kicker: string;
};

const FEATURED_AWARDS: Award[] = [
	{
		year: "2025",
		kicker: "LogiMAT India",
		title: "LogiMAT 2025 Recognition",
		body: "Recognised at LogiMAT 2025 for continued innovation in intelligent intralogistics systems and shop-floor automation capabilities.",
		issuer: "LogiMAT India",
		image: logiMat2025Image,
		accent: SECONDARY,
	},
	{
		year: "2024",
		kicker: "LogiMAT India",
		title: "LogiMAT 2024 Recognition",
		body: "Recognised at LogiMAT 2024 for advancing intralogistics, automation and material-handling solutions designed for practical industrial deployment.",
		issuer: "LogiMAT India",
		image: logiMat2024Image,
		accent: PRIMARY,
	},
	{
		year: "2021",
		kicker: "Government of India",
		title: "Top 150 Start-Ups Recognition 2021",
		body: "Recognised among the Top 150 Start-Ups by the Government of India for innovation and contribution to the Make in India initiative, with opportunities to deploy innovative solutions across key government organisations.",
		issuer: "Government of India",
		image: newaward,
		accent: SECONDARY,
	},
	{
		year: "2021",
		kicker: "Startup Karnataka",
		title: "Startup Karnataka Recognition 2021",
		body: "Recognised by Karnataka Innovation and Technology Society (KITS), in association with NITI Aayog, Government of India, for contributions to innovation and participation in Karnataka’s startup ecosystem.",
		issuer: "  Karnataka Innovation and Technology Society (KITS).",
		image: newaward2,
		accent: PRIMARY,
	},
	{
		year: "2019",
		kicker: "Top Start-Up Awards By Godrej",
		title: "Top Start-Up in Manufacturing Sector 2019",
		body: "Recognised by Godrej as a Top Start-Up in the Manufacturing Sector in 2019 for innovation and contributions to industrial automation.",
		issuer: "Godrej",
		image: newaward4,
		accent: SECONDARY,
	},
	{
		year: "",
		kicker: "IVAMA",
		title: "Associate Membership",
		body: "Recognised as an Associate Member of IVAMA, strengthening industry association and engagement within the industrial vending and automation sector.",
		issuer: " The Voice of The Indian Valve Industry",
		image: newaward5,
		accent: SECONDARY,
	},
	{
		year: "2018",
		kicker: "Confederation of Indian Industry (CII)",
		title: "CII Industrial Innovation Awards 2018",
		body: "Shortlisted for final jury evaluation at the CII Industrial Innovation Awards 2018, recognising Creintors Automation Solutions Pvt. Ltd. among the entries considered for industrial innovation.",
		issuer: "Confederation of Indian Industry (CII) | 2018",
		image: newaward3,
		accent: SECONDARY,
	},
	
	{
		year: "2018",
		kicker: "Chamber of Indian Industry",
		title: "Top 25 Most Innovative Company",
		body: "Recognised by the Chamber of Indian Industry among the country's 25 most innovative companies of the year for sustained product innovation across testing, automation and environment.",
		issuer: "Chamber of Indian Industry",
		image: "/images/achievements/award3.png",
		accent: PRIMARY,
	},
	{
		year: "2018",
		kicker: "Confederation of Indian Industry (CII)",
		title: "Top 25 Innovative Companies 2018",
		body: "CTPL Recognised among the Top 25 Innovative Companies in 2018 for contributions to innovation and industrial technology.",
		issuer: "Confederation of Indian Industry (CII)",
		image: newaward7,
		accent: PRIMARY,
	},
	
	{
		year: "2016",
		kicker: "Confederation of Indian Industry (CII)",
		title: "Top 10 Promising Start-Ups – Industrial Innovation Awards 2016",
		body: "CTPL Recognised among the Top 10 Promising Start-Ups at the CII Industrial Innovation Awards 2016 for innovation and contributions to industrial development.",
		issuer: "Confederation of Indian Industry (CII)",
		image: newaward6,
		accent: SECONDARY,
	},
	{
		year: "2016",
		kicker: "CII Industrial Innovation Award",
		title: "India's Best Manufacturing Start‑Up",
		body: "Honoured at the CII Industrial Innovation Award as one of India's best manufacturing start-ups for indigenising automation hardware and process equipment for the MSME sector.",
		issuer: "CII Industrial Innovation Award",
		image: "/images/achievements/award4.png",
		accent: SECONDARY,
	},
		
	{
		year: "2014-15",
		kicker: "National Productivity Council of India",
		title: "Productivity & Innovation Award",
		body: "Awarded the Second Prize for measurable contribution to disciplined engineering practice and shop-floor productivity, an early national validation of the Creintors way of working.",
		issuer: "National Productivity Council",
		image: "/images/achievements/award1.png",
		accent: PRIMARY,
	},
	{
		year: "2013-14",
		kicker: "Dileep Damle Memorial Trust",
		title: "Outstanding Performance in Industry",
		body: "Conferred by the Dileep Damle Memorial Trust for outstanding contribution to engineering and industry the first major honour of the Creintors group's journey.",
		issuer: "Dileep Damle Memorial Trust",
		image: "/images/achievements/award2.png",
		accent: SECONDARY,
	},
	{
		year: "2012",
		kicker: "Visionary Leadership",
		title: "Level 2 Certification ",
		body: "Recognised for demonstrating Level 2 skills and committing to contribute to the Visionary Learning Community of India (VLCI) movement to strengthen Indian manufacturing and society.",
		issuer: "CSM/ VLFM Project, JICA",
		image: newaward10,
		accent: SECONDARY,
	},
	{
		year: "2012",
		kicker: "VLCI – Visionary Learning Community of India",
		title: "Level 3 Certification 2012",
		body: "Achieved Level 3 certification under the Visionary Learning Community of India (VLCI), reflecting the development of leadership capabilities and commitment to strengthening Indian manufacturing and society.",
		issuer: "VLCI initiative | 2012",
		image: newaward9,
		accent: SECONDARY,
	},

];

type Academia = {
	date: string;
	by: string;
	partner: string;
	title: string;
	body: string;
	image: string;
};

const ACADEMIA: Academia[] = [
	{
		date: "August 24, 2019",
		by: "CASPL",
		partner: "KLS's Gogte Institute of Technology",
		title: "Honor's Program in Robotics & Automation",
		body: "A joint program with the Department of Mechanical Engineering covering automation fundamentals, PLC and robot programming, and industrial applications, turning learners into builders.",
		image: "/images/achievements/Collage_GIT.jpg",
	},
	{
		date: "August 28, 2019",
		by: "CMD",
		partner: "CII and JICA, Government of Japan",
		title: "VLCI / VLFM Leadership Course",
		body: "Visionary Leaders for Manufacturing program delivered with the Confederation of Indian Industry and JICA Japan, shaping next-generation manufacturing leadership across India.",
		image: "/images/achievements/vlfm6.jpg",
	},
	{
		date: "September 4, 2019",
		by: "CASPL",
		partner: "Government Polytechnic College, Belgaum",
		title: "MOU for Skill, Internship & Placement",
		body: "A formal MOU with Government Polytechnic Belgaum to deepen the bridge between technical education and shop-floor reality through skilling, internship and placement pipelines.",
		image: "/images/achievements/DiplomaGPT.jpg",
	},
];

const ISO_TAGS = [
	{
		label: "ISO 9001",
		desc: "Quality Management",
		image: "/images/achievements/ctpl1.jpg",
	},
	{
		label: "ISO 14001",
		desc: "Environmental Management",
		image: "/images/achievements/cespl1.jpg",
	},
	{
		label: "ISO 27001",
		desc: "Information Security",
		image: "/images/achievements/caspl27001.jpg",
	},
	{
		label: "ISO 45001",
		desc: "Occupational Health & Safety",
		image: "/images/achievements/caspl1.jpg",
	},
];

const STATS = [
	//{ value: 20, suffix: "+", label: "Years of Engineering" },
	{ value: 11, suffix: "+", label: "National Awards" },
	{ value: 9, suffix: "+", label: "QUALITY Certifications" },
	{ value: 14, suffix: "+", label: "Dynamic Verticals" },
];

const GALLERY = [
	"/images/achievements/awards1.png",
	"/images/achievements/Training1.jpg",	
	"/images/achievements/Appreciation.jpg",
	"/images/achievements/vlci1.jpg",
	"/images/achievements/vlfm1.jpg",
	"/images/achievements/Training2.jpg",
	"/images/achievements/emp_Recog.jpg",
	"/images/achievements/GIT1.jpg",
	"/images/achievements/vlfm3.jpg",
	"/images/achievements/vlfm4.jpg",
	"/images/achievements/vlfm5.jpg",
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

function AchievementsHero() {
	const heroRef = useRef<HTMLDivElement | null>(null);
	const parallaxRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: parallaxRef,
		offset: ["start start", "end start"],
	});
	const heroY = useTransform(scrollYProgress, [0, 1], [0, 160]);
	const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);
	const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

	useEffect(() => {
		const el = heroRef.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".ach-fade",
				{ opacity: 0, y: 36 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					stagger: 0.09,
					delay: 0.25,
				},
			);
			gsap.fromTo(
				".ach-bar",
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
				".ach-orb",
				{ scale: 0.5, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 1.8, ease: "elastic.out(1,0.6)" },
			);
		}, el);
		return () => ctx.revert();
	}, []);

	return (
		<div ref={parallaxRef}>
			<section
				ref={heroRef}
				className="relative isolate flex min-h-[60vh] items-end overflow-hidden pb-14 pt-28 md:min-h-[60vh] md:pb-16 md:pt-32"
				style={{ backgroundColor: "#070c17" }}>
				<motion.img
					aria-hidden
					src={heroImage}
					alt=""
					className="pointer-events-none absolute inset-0 -z-40 h-full w-full object-cover opacity-75"
					style={{
						filter: "saturate(0.9) contrast(1.08)",
						y: heroY,
						opacity: heroOpacity,
						scale: heroScale,
					}}
				/>

				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 -z-30"
					style={{
						background: `
							linear-gradient(180deg, rgba(7,12,23,0.20) 0%, rgba(7,12,23,0.40) 55%, rgba(7,12,23,0.88) 100%),
							radial-gradient(60% 80% at 80% 20%, ${PRIMARY}26, transparent 60%),
							radial-gradient(60% 80% at 0% 100%, ${SECONDARY}33, transparent 60%)
						`,
					}}
				/>

				<div
					aria-hidden
					className="ach-orb pointer-events-none absolute -right-40 top-12 -z-10 h-[460px] w-[460px] rounded-full blur-3xl"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}55, transparent 70%)`,
					}}
				/>
				<div
					aria-hidden
					className="ach-orb pointer-events-none absolute -left-32 bottom-0 -z-10 h-[380px] w-[380px] rounded-full blur-3xl"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}55, transparent 70%)`,
					}}
				/>

				<div className="container-x relative">
					<div className="ach-fade flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/55">
						<span>Our Achievements</span>
						<span
							className="ml-2 hidden h-px w-12 md:block"
							style={{
								background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
							}}
						/>
						<span className="hidden font-mono text-[10px] tracking-[0.4em] text-white/35 md:inline">
							AWARDS · ISO · ACADEMIA
						</span>
					</div>

					<h1 className="ach-fade mt-6 max-w-9xl page-title">
						<span className="text-white">Our </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
							}}>
							Achievements
						</span>
					</h1>

					<p className="ach-fade mt-6 max-w-3xl text-lg text-white/70 md:text-xl">
						One and a half decades of conviction, recognised by national institutions,
						industry bodies and academia. These are the moments that mark the
						journey of <span className="font-semibold text-white">Cre</span>
						ators <span className="text-white/40">+</span>{" "}
						<span className="font-semibold text-white">Inventors</span>.
					</p>

					<div
						className="ach-bar mt-10 h-px w-full origin-left"
						style={{
							background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
						}}
					/>

					<div className="ach-fade mt-8 flex flex-wrap items-center gap-3">
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
							Awards & Recognitions
						</span>
						<span
							className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
							style={{
								borderColor: `${SECONDARY}55`,
								background: `${SECONDARY}14`,
							}}>
							IMS Certified
						</span>
					</div>
				</div>
			</section>
		</div>
	);
}

/* ────────────────────────────────────────── STATS BAND */

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
	const n = useCountUp(value, 1600, trigger);
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			animate={trigger ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
			className="group relative overflow-hidden rounded-3xl border bg-white/95 px-6 py-7 w-full text-center transition-all duration-500 hover:-translate-y-1.5"
			style={{
				borderColor: "rgba(15,23,42,0.08)",
				boxShadow:
					"0 24px 60px -28px rgba(15,23,42,0.22), 0 0 0 1px rgba(255,255,255,0.85) inset",
			}}>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-80 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
					boxShadow: `0 0 12px ${PRIMARY}66`,
				}}
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
				style={{ background: PRIMARY }}
			/>
			<div
				className="bg-clip-text font-display text-5xl font-bold leading-none tracking-tight text-transparent md:text-6xl"
				style={{
					backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
				}}>
				{n}
				{suffix}
			</div>
			<div className="mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
				{label}
			</div>
		</motion.div>
	);
}

function StatsBand() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			ref={ref}
			className="relative isolate overflow-hidden py-10"
			style={{
				background: `linear-gradient(180deg, #ffffff 0%, #f0f7fc 100%)`,
			}}>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10">
				<div
					className="absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full opacity-30 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}33, transparent 70%)`,
					}}
				/>
				<div
					className="absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full opacity-30 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}33, transparent 70%)`,
					}}
				/>
			</div>

			<div className="container-x">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="mx-auto mb-12 max-w-2xl text-center">
					<div className="eyebrow justify-center">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>
						By the numbers
					</div>
					<h2 className="section-title mt-3">10+ years of innovation and collective growth</h2>
				</motion.div>

				<div className="grid grid-cols-3 justify-items-center gap-4 md:grid-cols-3 md:gap-6">
					{STATS.map((s, i) => (
						<StatCard
							key={s.label}
							value={s.value}
							suffix={s.suffix}
							label={s.label}
							trigger={inView}
							delay={i * 0.1}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── FEATURED AWARDS (alternating spotlight) */

function FeaturedAward({ item, index }: { item: Award; index: number }) {
	const isReverse = index % 2 === 1;
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-120px" });

	const ease = [0.22, 1, 0.36, 1] as const;
	const fromX = isReverse ? 120 : -120;

	const fadeUp = {
		hidden: { opacity: 0, y: 22 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease },
		},
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={{
				hidden: {},
				visible: {
					transition: { staggerChildren: 0.08, delayChildren: 0.05 },
				},
			}}
			className={`group grid items-center gap-8 md:gap-14 ${
				isReverse ? "md:grid-cols-[0.95fr_1.05fr]" : "md:grid-cols-[1.05fr_0.95fr]"
			}`}>
			{/* Image side */}
			<motion.div
				variants={{
					hidden: { opacity: 0, x: fromX, rotate: isReverse ? 2 : -2 },
					visible: {
						opacity: 1,
						x: 0,
						rotate: 0,
						transition: { duration: 1.1, ease },
					},
				}}
				className={`relative mx-auto w-full max-w-[520px] ${isReverse ? "md:order-2" : ""}`}>
				<motion.div
					variants={{
						hidden: {
							clipPath: isReverse ? "inset(0 0% 0 100%)" : "inset(0 100% 0 0%)",
						},
						visible: {
							clipPath: "inset(0 0% 0 0%)",
							transition: { duration: 1.3, ease, delay: 0.15 },
						},
					}}
					className="relative aspect-[5/4] overflow-hidden rounded-2xl border bg-white/95 p-4 sm:p-5"
					style={{
						borderColor: "rgba(15,23,42,0.08)",
						boxShadow: `0 28px 60px -28px ${item.accent}55, 0 0 0 1px rgba(255,255,255,0.7) inset`,
					}}>
					{/* corner crosshairs */}
					<span
						aria-hidden
						className="pointer-events-none absolute right-5 top-5 z-10 h-4 w-4 border-r-2 border-t-2 transition-all duration-500 group-hover:scale-125"
						style={{ borderColor: item.accent }}
					/>
					<span
						aria-hidden
						className="pointer-events-none absolute bottom-5 left-5 z-10 h-4 w-4 border-b-2 border-l-2 transition-all duration-500 group-hover:scale-125"
						style={{ borderColor: item.accent }}
					/>

					{/* Ken Burns zoom-out on entry, hover scale layered via class */}
					<motion.img
						src={item.image}
						alt={item.title}
						initial={{ scale: 1.2 }}
						animate={inView ? { scale: 1 } : {}}
						transition={{ duration: 1.8, ease }}
						className="relative z-0 h-full w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
					/>

					{/* Color wash */}
					<div
						aria-hidden
						className="absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-20"
						style={{
							background: `linear-gradient(135deg, ${item.accent}33 0%, transparent 60%)`,
						}}
					/>

					{/* Shimmer sweep */}
					<motion.div
						aria-hidden
						initial={{ x: "-120%" }}
						animate={inView ? { x: "120%" } : {}}
						transition={{ duration: 1.8, ease, delay: 0.75 }}
						className="pointer-events-none absolute inset-0"
						style={{
							background:
								"linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
						}}
					/>

					{/* Year badge */}
					<motion.div
						initial={{ opacity: 0, y: 16, scale: 0.85 }}
						animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
						transition={{
							type: "spring",
							stiffness: 220,
							damping: 18,
							delay: 0.9,
						}}
						className="absolute bottom-4 right-4 rounded-xl border bg-white/95 px-3 py-2 backdrop-blur"
						style={{
							borderColor: `${item.accent}55`,
							boxShadow: `0 14px 28px -10px ${item.accent}66`,
						}}>
						<div
							className="bg-clip-text font-display text-xl font-bold leading-none tracking-tight text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${item.accent}, ${SECONDARY})`,
							}}>
							{item.year}
						</div>
					</motion.div>
				</motion.div>

				{/* Floating accent blob */}
				<motion.div
					aria-hidden
					initial={{ opacity: 0, scale: 0.6 }}
					animate={inView ? { opacity: 0.4, scale: 1 } : {}}
					transition={{ duration: 1.6, ease, delay: 0.3 }}
					className={`pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-3xl ${
						isReverse ? "-right-12 top-1/2" : "-left-12 top-1/2"
					}`}
					style={{
						background: `radial-gradient(circle, ${item.accent}66, transparent 70%)`,
					}}
				/>
			</motion.div>

			{/* Content side */}
			<motion.div
				variants={{
					hidden: { opacity: 0, x: -fromX * 0.5 },
					visible: {
						opacity: 1,
						x: 0,
						transition: {
							duration: 0.9,
							ease,
							staggerChildren: 0.09,
							delayChildren: 0.2,
						},
					},
				}}
				className={`relative ${isReverse ? "md:order-1" : ""}`}>
				<div className="flex items-center gap-3">
					<motion.div
						variants={fadeUp}
						className="flex flex-col">
						<span
							className="rounded-full border px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.3em]"
							style={{
								color: item.accent,
								borderColor: `${item.accent}55`,
								background: `${item.accent}10`,
							}}>
							Recognition
						</span>
						<span className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
							{item.kicker}
						</span>
					</motion.div>
				</div>

				<motion.h3
					variants={{
						hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
						visible: {
							opacity: 1,
							clipPath: "inset(0 0 0% 0)",
							transition: { duration: 0.95, ease },
						},
					}}
					className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
					{item.title}
				</motion.h3>

				<motion.div
					variants={{
						hidden: { scaleX: 0 },
						visible: { scaleX: 1, transition: { duration: 0.8, ease } },
					}}
					className="mt-4 h-px w-12 origin-left transition-all duration-500 group-hover:w-28"
					style={{
						background: `linear-gradient(90deg, ${item.accent}, transparent)`,
					}}
				/>

				<motion.p
					variants={fadeUp}
					className="mt-5 text-base leading-relaxed text-slate-600 md:text-[17px]">
					{item.body}
				</motion.p>

				<motion.div
					variants={fadeUp}
					className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
					<span
						className="h-1.5 w-1.5 rounded-full"
						style={{
							background: item.accent,
							boxShadow: `0 0 8px ${item.accent}`,
						}}
					/>
					Conferred by {item.issuer}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

function FeaturedAwardsSection() {
	return (
		<section
			id="awards"
			className="section-tint relative isolate overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10">
				<div
					className="absolute -right-32 top-32 h-[420px] w-[420px] rounded-full opacity-45 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}22, transparent 70%)`,
					}}
				/>
				<div
					className="absolute -left-32 bottom-32 h-[420px] w-[420px] rounded-full opacity-45 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}22, transparent 70%)`,
					}}
				/>
			</div>

			<div className="container-x">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={{
						hidden: {},
						visible: {
							transition: { staggerChildren: 0.12, delayChildren: 0.05 },
						},
					}}
					className="mx-auto max-w-3xl text-center">
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 14 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
							},
						}}
						className="eyebrow justify-center">
						<motion.span
							variants={{
								hidden: { scaleX: 0 },
								visible: {
									scaleX: 1,
									transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
								},
							}}
							className="h-px w-8 origin-left"
							style={{ background: PRIMARY }}
						/>
						Awards & Recognition
					</motion.div>
					<motion.h2
						variants={{
							hidden: { opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" },
							visible: {
								opacity: 1,
								y: 0,
								clipPath: "inset(0 0 0% 0)",
								transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
							},
						}}
						className="section-title mt-3">
						Honoured for{" "}
						<span className="text-gradient-brand">consistent innovation</span>
					</motion.h2>
					<motion.p
						variants={{
							hidden: { opacity: 0, y: 18 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
							},
						}}
						className="mt-5 text-lg leading-relaxed text-slate-600">
						From national productivity councils to industry chambers, our work
						has been recognised for elevating Indian manufacturing through
						precision, productivity and sustainable engineering.
					</motion.p>
				</motion.div>

				<div className="mt-20 flex flex-col gap-24 md:gap-28">
					{FEATURED_AWARDS.map((award, i) => (
						<FeaturedAward
							key={award.title}
							item={award}
							index={i}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── TIMELINE OF MILESTONES */

function MilestonesSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const [active, setActive] = useState(0);

	const item = ACHIEVEMENTS[active];

	return (
		<section
			ref={ref}
			className="relative isolate overflow-hidden py-10"
			style={{ backgroundColor: "#070c17" }}>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-30"
				style={{
					background: `
						radial-gradient(50% 70% at 20% 30%, ${PRIMARY}26, transparent 60%),
						radial-gradient(60% 80% at 90% 80%, ${SECONDARY}2e, transparent 60%)
					`,
				}}
			/>

			<div className="container-x relative">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="mx-auto max-w-3xl text-center">
					<div
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur"
						style={{
							borderColor: `${PRIMARY}55`,
							background: `${PRIMARY}10`,
						}}>
						<span
							className="h-1.5 w-1.5 rounded-full"
							style={{
								background: PRIMARY,
								boxShadow: `0 0 8px ${PRIMARY}`,
							}}
						/>
						Milestone Timeline
					</div>
					<h2 className="section-title-sm mt-6 text-white">
						A decade of{" "}
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
							}}>
							national recognition
						</span>
					</h2>
					<p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
						Click through the years to see how Creintors has been celebrated
						across India's productivity, innovation and manufacturing
						ecosystems.
					</p>
				</motion.div>

				{/* Year selector rail */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
					className="relative mt-14 overflow-x-auto pb-3">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}66 10%, ${SECONDARY}66 90%, transparent)`,
						}}
					/>
					<div className="flex min-w-max items-center justify-center gap-3 px-4">
						{ACHIEVEMENTS.map((m, i) => {
							const isActive = i === active;
							return (
								<button
									key={m.year + m.title}
									onClick={() => setActive(i)}
									onMouseEnter={() => setActive(i)}
									className="group relative flex flex-col items-center gap-3 px-2 py-2 transition-all duration-300">
									<span
										className="font-mono text-xs font-semibold uppercase tracking-[0.22em] transition-colors duration-300"
										style={{
											color: isActive ? "#ffffff" : "rgba(255,255,255,0.45)",
										}}>
										{m.year}
									</span>
									<span
										className="relative grid place-items-center rounded-full transition-all duration-500"
										style={{
											width: isActive ? 22 : 12,
											height: isActive ? 22 : 12,
											background:
												isActive ?
													`linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`
												:	"rgba(255,255,255,0.2)",
											boxShadow:
												isActive ?
													`0 0 0 4px rgba(255,255,255,0.95), 0 0 20px ${PRIMARY}88`
												:	"none",
										}}>
										{isActive && (
											<motion.span
												layoutId="milestoneActive"
												className="absolute inset-0 rounded-full"
												style={{
													background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
												}}
											/>
										)}
									</span>
								</button>
							);
						})}
					</div>
				</motion.div>

				{/* Active milestone detail */}
				<motion.div
					key={item.year + item.title}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border p-8 md:p-12"
					style={{
						borderColor: `${PRIMARY}33`,
						background:
							"linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
						boxShadow: `0 36px 100px -36px ${PRIMARY}77`,
					}}>
					<span
						aria-hidden
						className="pointer-events-none absolute inset-x-8 top-0 h-px"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
							boxShadow: `0 0 14px ${PRIMARY}66`,
						}}
					/>
					<span
						aria-hidden
						className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
						style={{ background: PRIMARY }}
					/>
					<span
						aria-hidden
						className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
						style={{ background: SECONDARY }}
					/>

					<div className="relative">
						<div
							className="bg-clip-text font-display text-7xl font-bold leading-none tracking-tight text-transparent md:text-[7rem]"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
							}}>
							{item.year}
						</div>
						<h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
							{item.title}
						</h3>
						<div
							className="mt-4 h-px w-16"
							style={{
								background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
							}}
						/>
						<p className="mt-6 max-w-3xl text-base leading-relaxed text-white md:text-[17px]">
							{item.detail}
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── ISO / IMS */

function ISOSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section
			ref={ref}
			className="section-tint relative isolate overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10">
				<div
					className="absolute left-[10%] top-12 h-[24rem] w-[24rem] rounded-full opacity-40 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}22, transparent 70%)`,
					}}
				/>
				<div
					className="absolute bottom-12 right-[10%] h-[26rem] w-[26rem] rounded-full opacity-35 blur-[120px]"
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
					className="grid items-end gap-8 md:grid-cols-[1.4fr_1fr]">
					<div>
						<div className="eyebrow">
							<span
								className="h-px w-8"
								style={{ background: PRIMARY }}
							/>
							Integrated Management System
						</div>
						<h2 className="section-title mt-3 max-w-3xl">
							Certified across{" "}
							<span className="text-gradient-brand">
								quality, safety, environment & security
							</span>
						</h2>
					</div>
					<p className="text-base leading-relaxed text-slate-600 md:text-[17px]">
						The Creintors Group operates under an Integrated Management System
						aligned with four international standards across all three companies
						a discipline that turns engineering quality into a daily habit.
					</p>
				</motion.div>

				<div className="mt-14 grid gap-6 md:grid-cols-4 md:gap-7">
					{ISO_TAGS.map((iso, i) => {
						const accent = i % 2 === 0 ? PRIMARY : SECONDARY;
						return (
							<motion.div
								key={iso.label}
								initial={{ opacity: 0, y: 30, scale: 0.95 }}
								animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
								transition={{
									duration: 0.85,
									ease: [0.22, 1, 0.36, 1],
									delay: i * 0.1,
								}}
								className="group relative overflow-hidden rounded-3xl border bg-white/95 transition-all duration-500 hover:-translate-y-2"
								style={{
									borderColor: "rgba(15,23,42,0.08)",
									boxShadow:
										"0 24px 60px -28px rgba(15,23,42,0.22), 0 0 0 1px rgba(255,255,255,0.85) inset",
								}}>
								<span
									aria-hidden
									className="pointer-events-none absolute inset-x-5 top-0 z-10 h-px opacity-80 transition-opacity duration-500 group-hover:opacity-100"
									style={{
										background: `linear-gradient(90deg, transparent, ${accent}, ${SECONDARY}, transparent)`,
										boxShadow: `0 0 14px ${accent}66`,
									}}
								/>
								<div className="relative h-44 w-full overflow-hidden bg-slate-100">
									<img
										src={iso.image}
										alt={iso.label}
										className="h-full w-full object-cover opacity-95 transition-transform duration-[1200ms] ease-out group-hover:scale-110"
									/>
									<div
										aria-hidden
										className="absolute inset-0 transition-opacity duration-500"
										style={{
											background: `linear-gradient(180deg, transparent 30%, rgba(7,12,23,0.6) 100%), linear-gradient(135deg, ${accent}22 0%, transparent 60%)`,
										}}
									/>
									<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
										<span
											className="rounded-full border px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur"
											style={{
												borderColor: "rgba(255,255,255,0.35)",
												background: "rgba(15,23,42,0.45)",
											}}>
											Certified
										</span>
										<span
											aria-hidden
											className="grid h-8 w-8 place-items-center rounded-full text-white"
											style={{
												background: `linear-gradient(135deg, ${accent}, ${SECONDARY})`,
												boxShadow: `0 8px 18px -6px ${accent}99`,
											}}>
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round">
												<polyline points="20 6 9 17 4 12" />
											</svg>
										</span>
									</div>
								</div>
								<div className="relative p-6">
									<div
										className="bg-clip-text font-display text-2xl font-bold tracking-tight text-transparent"
										style={{
											backgroundImage: `linear-gradient(120deg, ${accent}, ${SECONDARY})`,
										}}>
										{iso.label}
									</div>
									<div
										className="mt-2 h-px w-10 transition-all duration-500 group-hover:w-20"
										style={{
											background: `linear-gradient(90deg, ${accent}, transparent)`,
										}}
									/>
									<div className="mt-3 text-sm leading-relaxed text-slate-600">
										{iso.desc}
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

/* ────────────────────────────────────────── ACADEMIA CONNECT */

function AcademiaCard({ item, index }: { item: Academia; index: number }) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 26 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 0.9,
				ease: [0.22, 1, 0.36, 1],
				delay: index * 0.1,
			}}
			className="group relative flex flex-col overflow-hidden rounded-3xl border bg-white/95 transition-all duration-500 hover:-translate-y-2"
			style={{
				borderColor: "rgba(15,23,42,0.08)",
				boxShadow:
					"0 28px 70px -32px rgba(15,23,42,0.25), 0 0 0 1px rgba(255,255,255,0.85) inset",
			}}>
			<div className="relative h-60 w-full overflow-hidden">
				<img
					src={item.image}
					alt={item.title}
					className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
				/>
				<div
					aria-hidden
					className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-80"
				/>

				<motion.div
					aria-hidden
					initial={{ x: "-100%" }}
					whileInView={{ x: "100%" }}
					viewport={{ once: true }}
					transition={{
						duration: 1.6,
						ease: [0.22, 1, 0.36, 1],
						delay: 0.3 + index * 0.1,
					}}
					className="pointer-events-none absolute inset-0"
					style={{
						background:
							"linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
					}}
				/>

				<span
					className="absolute left-4 top-4 rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur"
					style={{
						borderColor: "rgba(255,255,255,0.35)",
						background: "rgba(15,23,42,0.4)",
					}}>
					{item.by}
				</span>

				<div className="absolute bottom-4 left-4 right-4">
					<div className="text-xs font-medium uppercase tracking-[0.22em] text-white/80">
						{item.date}
					</div>
					<h3 className="mt-2 font-display text-xl font-semibold leading-tight text-white">
						{item.title}
					</h3>
				</div>
			</div>

			<div className="relative flex flex-1 flex-col p-6">
				<span
					aria-hidden
					className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-80"
					style={{
						background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
					}}
				/>

				<div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
					<span
						className="h-1.5 w-1.5 rounded-full"
						style={{
							background: PRIMARY,
							boxShadow: `0 0 6px ${PRIMARY}`,
						}}
					/>
					{item.partner}
				</div>

				<p className="mt-4 text-sm leading-relaxed text-slate-600">
					{item.body}
				</p>

				<div className="mt-auto pt-5">
					<span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition-all duration-300 group-hover:gap-2.5 group-hover:text-slate-900">
						Learn more
						<span
							aria-hidden
							className="transition-transform duration-300 group-hover:translate-x-1"
							style={{ color: PRIMARY }}>
							→
						</span>
					</span>
				</div>
			</div>
		</motion.article>
	);
}

function AcademiaSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="academia"
			ref={ref}
			className="section-tint relative isolate overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute right-1/4 -top-20 -z-10 h-[420px] w-[420px] rounded-full opacity-40 blur-[120px]"
				style={{
					background: `radial-gradient(circle, ${SECONDARY}22, transparent 70%)`,
				}}
			/>

			<div className="container-x">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="grid items-end gap-8 md:grid-cols-[1.5fr_1fr]">
					<div>
						<div className="eyebrow">
							<span
								className="h-px w-8"
								style={{ background: SECONDARY }}
							/>
							Academia Connect
						</div>
						<h2 className="section-title mt-3">
							We come up with{" "}
							<span className="text-gradient-brand">new strengths</span> and new
							thoughts
						</h2>
					</div>
					<p className="text-base leading-relaxed text-slate-600 md:text-[17px]">
						Industry-academia partnerships are how we predict the future by
						helping create it. We collaborate with institutions across India to
						bridge engineering education with shop-floor reality.
					</p>
				</motion.div>

				<div className="mt-14 grid gap-7 md:grid-cols-3">
					{ACADEMIA.map((item, i) => (
						<AcademiaCard
							key={item.title}
							item={item}
							index={i}
						/>
					))}
				</div>

				{/* CTA card */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
					className="relative mt-20 overflow-hidden rounded-3xl border"
					style={{
						borderColor: "rgba(255,255,255,0.10)",
						background: `linear-gradient(135deg, ${SECONDARY} 0%, ${PRIMARY} 100%)`,
						boxShadow: `0 40px 100px -40px ${PRIMARY}88`,
					}}>
					<span
						aria-hidden
						className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
						style={{ background: "#ffffff" }}
					/>
					<span
						aria-hidden
						className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
						style={{ background: "#ffffff" }}
					/>

					<div className="relative grid items-center gap-8 p-9 md:grid-cols-[1.5fr_1fr] md:p-14">
						<div>
							<div className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
								Industry · Academia · Collaboration
							</div>
							<h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
								Discover how we're collaborating with academia to build the next
								generation of engineers.
							</h3>
							<p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
								Got an internship program, MOU or skill-development initiative
								in mind? Let's build it together.
							</p>
						</div>
						<div className="flex flex-col items-start gap-4 md:items-end">
							<div className="text-sm font-medium text-white/80">
								Industry Academia Cell
							</div>
							<div className="font-display text-2xl font-semibold text-white">
								+91 9740701846
							</div>
							<a
								href="mailto:industryacademia@creintors.com"
								translate="no"
								className="text-sm text-white/85 underline-offset-4 transition hover:text-white hover:underline">
								industryacademia@creintors.com
							</a>
							<Link
								to="/contact"
								className="group/cta relative mt-2 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:scale-[1.04]">
								<span
									aria-hidden
									className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(15,23,42,0.08)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
								/>
								<span className="relative">Get in touch</span>
								<span
									aria-hidden
									className="relative transition-transform duration-300 group-hover/cta:translate-x-1">
									→
								</span>
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── GALLERY MARQUEE */

function GallerySection() {
	const row1 = [...GALLERY, ...GALLERY];
	const row2 = [...GALLERY.slice().reverse(), ...GALLERY.slice().reverse()];

	return (
		<section
			className="relative isolate overflow-hidden py-10"
			style={{ backgroundColor: "#070c17" }}>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `
						radial-gradient(60% 80% at 80% 0%, ${PRIMARY}26, transparent 60%),
						radial-gradient(60% 80% at 0% 100%, ${SECONDARY}33, transparent 60%)
					`,
				}}
			/>

			<div className="container-x">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="mx-auto max-w-3xl text-center">
					<div
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur"
						style={{
							borderColor: `${PRIMARY}55`,
							background: `${PRIMARY}10`,
						}}>
						<span
							className="h-1.5 w-1.5 rounded-full"
							style={{
								background: PRIMARY,
								boxShadow: `0 0 8px ${PRIMARY}`,
							}}
						/>
						Moments
					</div>
					<h2 className="section-title-sm mt-6 text-white">
						The moments that{" "}
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
							}}>
							built the Momentum
						</span>
					</h2>
				</motion.div>
			</div>

			<div className="relative mt-14 space-y-5">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-40"
					style={{
						background: "linear-gradient(90deg, #070c17 0%, transparent 100%)",
					}}
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-40"
					style={{
						background: "linear-gradient(270deg, #070c17 0%, transparent 100%)",
					}}
				/>

				<div className="overflow-hidden">
					<div className="marquee-track flex gap-5">
						{row1.map((src, i) => (
							<div
								key={`r1-${i}`}
								className="group/g relative h-56 w-72 shrink-0 overflow-hidden rounded-2xl border md:h-64 md:w-96"
								style={{
									borderColor: "rgba(255,255,255,0.12)",
								}}>
								<img
									src={src}
									alt=""
									className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/g:scale-110"
								/>
								<div
									aria-hidden
									className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover/g:opacity-30"
								/>
								<span
									aria-hidden
									className="pointer-events-none absolute inset-x-4 top-0 h-px opacity-0 transition-opacity duration-500 group-hover/g:opacity-100"
									style={{
										background: `linear-gradient(90deg, transparent, ${PRIMARY}, transparent)`,
										boxShadow: `0 0 10px ${PRIMARY}99`,
									}}
								/>
							</div>
						))}
					</div>
				</div>

				<div className="overflow-hidden">
					<div
						className="marquee-track flex gap-5"
						style={{ animationDirection: "reverse", animationDuration: "55s" }}>
						{row2.map((src, i) => (
							<div
								key={`r2-${i}`}
								className="group/g relative h-48 w-64 shrink-0 overflow-hidden rounded-2xl border md:h-56 md:w-80"
								style={{
									borderColor: "rgba(255,255,255,0.12)",
								}}>
								<img
									src={src}
									alt=""
									className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/g:scale-110"
								/>
								<div
									aria-hidden
									className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover/g:opacity-30"
								/>
								<span
									aria-hidden
									className="pointer-events-none absolute inset-x-4 top-0 h-px opacity-0 transition-opacity duration-500 group-hover/g:opacity-100"
									style={{
										background: `linear-gradient(90deg, transparent, ${SECONDARY}, transparent)`,
										boxShadow: `0 0 10px ${SECONDARY}99`,
									}}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── CLOSING QUOTE */

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
					<blockquote className="font-display text-[clamp(1.9rem,5.2vw,3.8rem)] font-semibold leading-[1.1] tracking-tight text-slate-900">
						We promote quick failures because every fail-fast cycle is a
						compounding bet on the next breakthrough.
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
							delay: 0.35,
						}}
						className="mt-12 flex flex-wrap items-center justify-center gap-3">
						<Link
							to="/about/history"
							className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
							style={{
								background: `linear-gradient(120deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
								boxShadow: `0 18px 40px -12px ${PRIMARY}99, inset 0 0 0 1px rgba(255,255,255,0.22)`,
							}}>
							<span
								aria-hidden
								className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
							/>
							<span className="relative">See our journey</span>
							<span
								aria-hidden
								className="relative transition-transform duration-300 group-hover/cta:translate-x-1">
								→
							</span>
						</Link>
						<Link
							to="/contact"
							className="inline-flex items-center gap-2 rounded-full border bg-white/90 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900"
							style={{ borderColor: "rgba(15,23,42,0.12)" }}>
							Click to Innovate
							<span aria-hidden>→</span>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── PAGE */

export default function Achievements() {
	useSeo({
		...PAGE_SEO.achievements,
	});

	return (
		<main className="relative isolate">
			<AchievementsHero />
			<IgnoranceLine />
			<StatsBand />
			<FeaturedAwardsSection />

			<GallerySection />
			<ClosingSection />
		</main>
	);
}
