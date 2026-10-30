/**
 * @format
 */

import {
	type CSSProperties,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { motion, useMotionValue } from "motion/react";
import { gsap } from "../lib/gsap";
import { PRIMARY, SECONDARY } from "../lib/theme";
import { DIVISIONS, DIVISION_ACCENTS, type Division } from "../lib/divisions";
import heroImage from "../assets/team/fsafotter.jpeg";
import newPresentBanner from "../assets/common/new-present-banner.webp";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import IgnoranceLine from "../components/IgnoranceLine";

type Company = Division["slug"];

type TimelineEvent = { year: number; company: Company; text: string };

type TimelineYear = { year: number; events: TimelineEvent[] };

/** "Creintors C-Automate" -> "C-Automate": the card already sits under the group. */
const COMPANY_LABEL = Object.fromEntries(
	DIVISIONS.map((d) => [d.slug, d.name.replace(/^Creintors /, "")]),
) as Record<Company, string>;

/**
 * The client's timeline sheet ("Timeline (1).xlsx", 2 Oct), row for row and
 * in its order, each tagged with the company the sheet gives it (T / A / E).
 * It replaces the earlier road-map of three formations plus the awards list;
 * the awards still have their own page.
 *
 * Wording is the sheet's with spelling tidied and "Cautomate" written
 * "C-Automate" (19 Sep rule). Readings that needed a judgement call:
 * "Saabic Haaded" is SABIC Hadeed (a CTPL client — assets/clients/Teknosol/
 * sabic.svg); "Atani Kokothnur" is Kokatnur, Athani; IMS is the Insert
 * Management System and CFS is Creintors Flow Solutions, both from the
 * C-Automate catalogue. "Voil" is kept as written — nothing on file says what
 * it is.
 *
 * Water projects before 2017 are tagged Teknosol because the sheet tags them
 * so: Crienviro did not exist until then.
 */
const EVENTS: TimelineEvent[] = [
	{
		year: 2012,
		company: "teknosol",
		text: "The start: a decade of entrepreneurship brought home to Belgaum, to build an ecosystem",
	},
	{
		year: 2012,
		company: "teknosol",
		text: "Skids for motor mounting for ABB, from our manufacturing facility in Belgaum",
	},
	{
		year: 2013,
		company: "teknosol",
		text: "Hydraulic cylinders for SABIC Hadeed mills",
	},
	{
		year: 2013,
		company: "teknosol",
		text: "Clariflocculator installed at Kokatnur, Athani",
	},
	{
		year: 2014,
		company: "teknosol",
		text: "Batch-type electro-chlorinator and alum dosing, Hampi – Hospet",
	},
	{
		year: 2014,
		company: "teknosol",
		text: "Innovations in gearbox sleeves serving critical steel mill applications",
	},
	{ year: 2015, company: "teknosol", text: "Pressure sand filter, Londa" },
	{ year: 2015, company: "teknosol", text: "Sewage treatment plant, Bagalkot" },
	{
		year: 2015,
		company: "teknosol",
		text: "Rectangular dissolved air floatation (DAF) unit",
	},
	{
		year: 2015,
		company: "teknosol",
		text: "Innovation of the IMS (Insert Management System) and its first installation, awarded for Design Excellence",
	},
	{
		year: 2016,
		company: "teknosol",
		text: "Innovation award for seat stapling",
	},
	{ year: 2017, company: "cautomate", text: "Launch of C-Automate" },
	{ year: 2017, company: "crienviro", text: "Launch of Crienviro" },
	{
		year: 2017,
		company: "crienviro",
		text: "Effluent treatment plant, Belagavi slaughterhouse",
	},
	{ year: 2017, company: "crienviro", text: "Lamella clarifier" },
	{ year: 2017, company: "crienviro", text: "Gas-type chlorinator" },
	{ year: 2017, company: "teknosol", text: "Automated seat mould line" },
	{
		year: 2017,
		company: "cautomate",
		text: "Trolley ASRS, our first ASRS",
	},
	{ year: 2018, company: "teknosol", text: "Acquired RD Hydrothrust" },
	{
		year: 2018,
		company: "cautomate",
		text: "Solutions for the jewellery industry: Titan and Unidesign",
	},
	{
		year: 2019,
		company: "cautomate",
		text: "Vertical lift system with air-conditioning and humidity management",
	},
	{
		year: 2020,
		company: "cautomate",
		text: "Glass vial manufacturing systems for covid vaccine",
	},
	
	{ year: 2021, company: "cautomate", text: "Our first shuttle ASRS" },
	{
		year: 2022,
		company: "cautomate",
		text: "Semi-automatic ride-on vehicle (ROV)",
	},
	{
		year: 2022,
		company: "cautomate",
		text: "Creintors Flow Solutions (CFS) incubated",
	},
	
	{
		year: 2022,
		company: "cautomate",
		text: "Mini-bin ASRS for powder metallurgy",
	},
	{
		year: 2023,
		company: "cautomate",
		text: "Automated tower car parking solution, Belgaum",
	},
	{
		year: 2024,
		company: "cautomate",
		text: "1-ton AMR for bin movement",
	},
	{
		year: 2025,
		company: "crienviro",
		text: "Oily water separator: global supplier for SKF Marine",
	},
	{
		year: 2025,
		company: "cautomate",
		text: "Automatic high-precision surface grinding machine for zirconium tubes",
	},
	{
		year: 2025,
		company: "cautomate",
		text: "Complete plant automation for TVS Fasteners, Tanishq Jewellery and Raymonds",
	},
	{ year: 2026, company: "cautomate", text: "World's largest honing machine" },
	{
		year: 2026,
		company: "teknosol",
		text: "Indian Space Station docking platform",
	},
];

/** One card per year, so a busy year (2017 has seven rows) stays one stop on the rail. */
const TIMELINE: TimelineYear[] = [...new Set(EVENTS.map((e) => e.year))]
	.sort((a, b) => a - b)
	.map((year) => ({ year, events: EVENTS.filter((e) => e.year === year) }));

function TimelineCard({
	item,
	isLeft,
}: {
	item: TimelineYear;
	isLeft: boolean;
}) {
	// A year that belongs to one company wears its colour; a shared year the group's.
	const companies = new Set(item.events.map((e) => e.company));
	const accent =
		companies.size === 1 ? DIVISION_ACCENTS[item.events[0].company] : PRIMARY;

	return (
		<motion.div
			initial={{ opacity: 0, x: isLeft ? -90 : 90 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
			className="group relative w-full max-w-md overflow-hidden rounded-3xl border bg-white/95 p-6 transition-all duration-500 hover:-translate-y-1 md:p-7"
			style={{
				borderColor: "rgba(15,23,42,0.08)",
				boxShadow:
					"0 24px 60px -28px rgba(15,23,42,0.22), 0 0 0 1px rgba(255,255,255,0.85) inset",
			}}>
			{/* Top accent hairline */}
			<span
				aria-hidden
				className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-80 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
					boxShadow: `0 0 12px ${accent}66`,
				}}
			/>

			{/* Corner crosshair */}
			<span
				aria-hidden
				className="pointer-events-none absolute right-4 top-4 h-3.5 w-3.5 border-r-2 border-t-2 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
				style={{ borderColor: accent }}
			/>

			{/* Soft bloom */}
			<span
				aria-hidden
				className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
				style={{ background: accent }}
			/>

			<div className="relative">
				<h3
					className="bg-clip-text text-transparent font-display text-3xl font-bold leading-none tracking-tight md:text-4xl"
					style={{
						backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
					}}>
					{item.year}
				</h3>

				<div
					className="mt-4 h-px w-12 transition-all duration-500 group-hover:w-24"
					style={{
						background: `linear-gradient(90deg, ${accent}, transparent)`,
					}}
				/>

				<ul className="mt-5 space-y-4">
					{item.events.map((e) => {
						const color = DIVISION_ACCENTS[e.company];
						return (
							<li
								key={e.text}
								className="flex gap-3">
								<span
									aria-hidden
									className="mt-[0.4rem] h-2 w-2 shrink-0 rounded-full"
									style={{
										background: color,
										boxShadow: `0 0 0 3px ${color}1f`,
									}}
								/>
								<div>
									<p className="text-[15px] font-medium leading-snug text-slate-800">
										{e.text}
									</p>
									<span
										className="mt-1 inline-block font-mono text-[9px] font-bold uppercase tracking-[0.28em]"
										style={{ color }}>
										{COMPANY_LABEL[e.company]}
									</span>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</motion.div>
	);
}

function TimelineNode() {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 0.55,
				ease: [0.22, 1, 0.36, 1],
				delay: 0.25,
			}}
			className="relative grid h-7 w-7 place-items-center rounded-full"
			style={{
				background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
				boxShadow: `0 0 0 4px rgba(255,255,255,0.95), 0 0 18px ${PRIMARY}aa, 0 0 34px ${PRIMARY}55`,
			}}>
			<span
				className="h-2.5 w-2.5 rounded-full bg-white"
				aria-hidden
			/>
		</motion.div>
	);
}

export default function History() {
	useSeo({
		...PAGE_SEO.history,
	});

	const heroRef = useRef<HTMLDivElement | null>(null);
	const trackRef = useRef<HTMLDivElement | null>(null);
	const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
	const [pathD, setPathD] = useState("");
	const [svgH, setSvgH] = useState(0);
	// Track space left below the rail's last stretch, so the continuation dots
	// can start right where the rail ends instead of below the last card.
	const [railGap, setRailGap] = useState(0);

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

	useLayoutEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		const measure = () => {
			const trackRect = track.getBoundingClientRect();
			const ys: number[] = [];
			for (const row of rowRefs.current) {
				if (!row) continue;
				const r = row.getBoundingClientRect();
				ys.push(r.top - trackRect.top + r.height / 2);
			}
			if (ys.length < 2) return;

			const cx = 80;
			const leftX = 14;
			const rightX = 146;

			let d = `M ${cx} ${ys[0] - 40}`;
			d += ` L ${cx} ${ys[0]}`;
			for (let i = 1; i < ys.length; i++) {
				const prevY = ys[i - 1];
				const y = ys[i];
				const segH = y - prevY;
				const swingX = i % 2 === 1 ? rightX : leftX;
				d += ` C ${swingX} ${prevY + segH * 0.5}, ${swingX} ${
					y - segH * 0.5
				}, ${cx} ${y}`;
			}
			d += ` L ${cx} ${ys[ys.length - 1] + 40}`;

			setPathD(d);
			setSvgH(track.offsetHeight);
			setRailGap(Math.max(0, track.offsetHeight - (ys[ys.length - 1] + 40)));
		};

		measure();
		const ro = new ResizeObserver(measure);
		ro.observe(track);
		for (const row of rowRefs.current) {
			if (row) ro.observe(row);
		}
		window.addEventListener("load", measure);
		return () => {
			ro.disconnect();
			window.removeEventListener("load", measure);
		};
	}, []);

	// The lit part of the rail ends exactly at the middle of the screen. The
	// rail's length is not proportional to its height (it swings left and right),
	// so the scroll position is turned into a height on the rail and that height
	// into a length, using points sampled along the path.
	const pathLength = useMotionValue(0);
	const basePathRef = useRef<SVGPathElement | null>(null);
	const samples = useRef<{ ys: number[]; fractions: number[] }>({
		ys: [],
		fractions: [],
	});

	useLayoutEffect(() => {
		const track = trackRef.current;
		const base = basePathRef.current;
		if (!track || !base || !pathD) return;

		const steps = 600;
		const total = base.getTotalLength();
		const ys: number[] = [];
		const fractions: number[] = [];
		for (let i = 0; i <= steps; i++) {
			ys.push(base.getPointAtLength((total * i) / steps).y);
			fractions.push(i / steps);
		}
		samples.current = { ys, fractions };

		const update = () => {
			const { ys, fractions } = samples.current;
			if (ys.length === 0) return;
			const targetY = window.innerHeight / 2 - track.getBoundingClientRect().top;
			if (targetY <= ys[0]) return pathLength.set(0);
			if (targetY >= ys[ys.length - 1]) return pathLength.set(1);
			let lo = 0;
			let hi = ys.length - 1;
			while (hi - lo > 1) {
				const mid = (lo + hi) >> 1;
				if (ys[mid] <= targetY) lo = mid;
				else hi = mid;
			}
			const t = (targetY - ys[lo]) / (ys[hi] - ys[lo] || 1);
			pathLength.set(fractions[lo] + t * (fractions[hi] - fractions[lo]));
		};

		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, [pathD, pathLength]);

	const rangeLabel = useMemo(() => {
		const years = TIMELINE.map((t) => t.year);
		return `${Math.min(...years)} – ${Math.max(...years)}`;
	}, []);

	return (
		<main className="relative isolate">
			{/* HERO */}
			<section
				ref={heroRef}
				className="relative isolate flex min-h-[68vh] items-end overflow-hidden pb-16 pt-32 md:min-h-[72vh] md:pb-20"
				style={{ backgroundColor: "#070c17" }}>
				<img
					aria-hidden
					src={heroImage}
					alt=""
					className="pointer-events-none absolute inset-0 -z-40 h-full w-full object-cover opacity-75"
					style={{ filter: "saturate(0.9) contrast(1.05)" }}
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 -z-30"
					style={{
						background: `
							linear-gradient(180deg, rgba(7,12,23,0.22) 0%, rgba(7,12,23,0.40) 55%, rgba(7,12,23,0.80) 100%),
							radial-gradient(60% 80% at 80% 20%, ${PRIMARY}26, transparent 60%),
							radial-gradient(60% 80% at 0% 100%, ${SECONDARY}33, transparent 60%)
						`,
					}}
				/>
				<div
					aria-hidden
					className="tk-orb pointer-events-none absolute -right-40 top-12 -z-10 h-[460px] w-[460px] rounded-full blur-3xl"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}55, transparent 70%)`,
					}}
				/>
				<div
					aria-hidden
					className="tk-orb pointer-events-none absolute -left-32 bottom-0 -z-10 h-[380px] w-[380px] rounded-full blur-3xl"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}55, transparent 70%)`,
					}}
				/>

				<div className="container-x relative">
					<div className="tk-fade flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/55">
						<span>Our Journey</span>
					</div>

					<h1 className="tk-fade mt-6 max-w-5xl page-title">
						<span className="text-white">History of </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
							}}>
							Creintors
						</span>
					</h1>

					<p className="tk-fade mt-6 max-w-3xl text-lg text-white/70 md:text-xl">
						The story of <span className="font-semibold text-white">Cre</span>
						ators <span className="text-white/40">+</span>{" "}<span className="font-semibold text-white">In</span>ven
						<span className="font-semibold text-white">tors</span>. A
						journey of engineering, conviction and impact spanning over a decade.
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
						{/* <span
							className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
							style={{
								borderColor: `${PRIMARY}55`,
								background: `${PRIMARY}14`,
							}}>
							{rangeLabel}
						</span> */}
						<span
							className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
							style={{
								borderColor: `${SECONDARY}55`,
								background: `${SECONDARY}14`,
							}}>
							3 Companies
						</span>
					</div>
				</div>
			</section>
			<IgnoranceLine />

			{/* TIMELINE */}
			<section className="section-tint relative isolate overflow-hidden py-10">
				<div className="container-x">
					<div
						ref={trackRef}
						className="relative mx-auto max-w-6xl">
						{/* Center curved rail (desktop) */}
						<div
							aria-hidden
							className="pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 md:block"
							style={{ width: 220, height: svgH }}>
							<svg
								viewBox={`0 0 160 ${svgH || 1}`}
								className="h-full w-full overflow-visible"
								preserveAspectRatio="none"
								aria-hidden>
								<defs>
									<linearGradient
										id="historyGrad"
										x1="0"
										y1="0"
										x2="0"
										y2="1">
										<stop
											offset="0%"
											stopColor={PRIMARY}
										/>
										<stop
											offset="100%"
											stopColor={SECONDARY}
										/>
									</linearGradient>
									<filter
										id="historyGlow"
										x="-50%"
										y="-50%"
										width="200%"
										height="200%">
										<feGaussianBlur stdDeviation="4.5" />
									</filter>
								</defs>
								{/* Soft glow trail */}
								<motion.path
									d={pathD}
									stroke="url(#historyGrad)"
									strokeWidth="16"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									opacity="0.45"
									filter="url(#historyGlow)"
									style={{ pathLength }}
								/>
								{/* Base track */}
								<path
									ref={basePathRef}
									d={pathD}
									stroke="rgba(15,23,42,0.10)"
									strokeWidth="7"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								{/* Scroll-tied progress */}
								<motion.path
									d={pathD}
									stroke="url(#historyGrad)"
									strokeWidth="7"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									style={{ pathLength }}
								/>
							</svg>
						</div>

						{/* Desktop timeline */}
						<div className="relative hidden md:flex flex-col gap-16 py-12">
							{TIMELINE.map((item, i) => {
								const isLeft = i % 2 === 0;
								return (
									<div
										key={item.year}
										ref={(el) => {
											rowRefs.current[i] = el;
										}}
										className="relative grid grid-cols-2 items-center">
										{/* Card column */}
										<div
											className={
												isLeft ?
													"flex justify-end pr-28"
												:	"col-start-2 flex justify-start pl-28"
											}>
											<TimelineCard
												item={item}
												isLeft={isLeft}
											/>
										</div>

										{/* Horizontal connector (dot → card) */}
										<motion.span
											aria-hidden
											initial={{ scaleX: 0 }}
											whileInView={{ scaleX: 1 }}
											viewport={{ once: true, margin: "-80px" }}
											transition={{
												duration: 0.55,
												ease: [0.22, 1, 0.36, 1],
												delay: 0.45,
											}}
											className="pointer-events-none absolute top-1/2 h-[2px] -translate-y-1/2"
											style={{
												left: isLeft ? "calc(50% - 112px)" : "50%",
												width: 112,
												transformOrigin: isLeft ? "right" : "left",
												background:
													isLeft ?
														`linear-gradient(270deg, ${PRIMARY}, transparent)`
													:	`linear-gradient(90deg, ${PRIMARY}, transparent)`,
												boxShadow: `0 0 8px ${PRIMARY}88`,
											}}
										/>

										{/* Center node */}
										<div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
											<TimelineNode />
										</div>
									</div>
								);
							})}
						</div>

						{/* Mobile timeline */}
						<div className="md:hidden relative pl-6">
							<div
								aria-hidden
								className="absolute left-2 top-2 bottom-2 w-[2px] rounded-full"
								style={{
									background: `linear-gradient(180deg, ${PRIMARY}, ${SECONDARY})`,
								}}
							/>
							<div className="flex flex-col gap-8">
								{TIMELINE.map((item) => (
									<div
										key={`${item.year}-mob`}
										className="relative">
										<motion.span
											aria-hidden
											initial={{ scale: 0, opacity: 0 }}
											whileInView={{ scale: 1, opacity: 1 }}
											// Vertical only: the dot sits in the left 60px of a phone, so an
											// all-round inset kept it out of view and it never appeared.
											viewport={{ once: true, margin: "-60px 0px" }}
											transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
											className="absolute -left-[1.05rem] top-6 h-4 w-4 rounded-full"
											style={{
												background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
												boxShadow: `0 0 0 3px rgba(255,255,255,0.95), 0 0 14px ${PRIMARY}99`,
											}}
										/>
										<TimelineCard
											item={item}
											isLeft={false}
										/>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* "Some dots to show continuation, followed by" the motto banner
					    (26 Oct): the rail stops at 2026, the dots carry it on, and
					    "NEW PRESENT - Stay afloat" is where it leads. Centred under the
					    rail on desktop, under the left-hand rail on a phone. */}
					<div
						className="mx-auto mt-2 max-w-6xl md:mt-[calc(18px-var(--rail-gap))]"
						style={{ "--rail-gap": `${railGap}px` } as CSSProperties}>
						<div
							aria-hidden
							className="flex flex-col items-start gap-3 pl-[calc(0.5rem-3px)] md:items-center md:pl-0">
							{[7, 6, 5, 4, 3].map((size, i) => (
								<motion.span
									key={size}
									initial={{ opacity: 0, scale: 0 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true, margin: "-40px 0px" }}
									transition={{
										duration: 0.45,
										ease: [0.22, 1, 0.36, 1],
										delay: i * 0.18,
									}}
									className="block rounded-full"
									style={{
										width: size,
										height: size,
										background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
										boxShadow: `0 0 10px ${PRIMARY}66`,
									}}
								/>
							))}
						</div>
						<motion.img
							src={newPresentBanner}
							alt="New present: Stay afloat, to be the change you want to see..!"
							width={1094}
							height={162}
							loading="lazy"
							decoding="async"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px 0px" }}
							transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
							className="mx-auto mb-4 mt-8 block h-auto w-full max-w-[34rem]"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}