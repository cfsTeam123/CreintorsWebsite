/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
	Award,
	Briefcase,
	Cog,
	FlaskConical,
	GraduationCap,
	Leaf,
	MapPin,
	Medal,
	School,
	ScrollText,
	Thermometer,
} from "lucide-react";
import { gsap } from "../lib/gsap";
import { PRIMARY, SECONDARY } from "../lib/theme";
import cmdHeroImage from "../assets/team/cmd.png";
//import portrait from "../assets/team/NeeleshChougule.png";
import portrait from "../assets/team/CMDNileshChougule.png";
import standeePhoto from "../assets/team/neelesh-standee.jpeg";
import vlfm1 from "../assets/team/vlfm6.jpg";
import vlfm3 from "../assets/team/vlfm3.jpg";
import vlfm4 from "../assets/team/vlfm4.jpg";
import vlfm5 from "../assets/team/vlfm5.jpg";
import vlfm6 from "../assets/team/vlfm1.jpg";
import vlci1 from "../assets/team/vlci1.jpg";
import cardimg1 from "../assets/team/cardimg1.png";
import cardimg2 from "../assets/team/cardimg2.png";
import cardimg3 from "../assets/team/cardimgs3.png";
import cardimg4 from "../assets/team/cardimg4.png";
import cardimg5 from "../assets/team/cardimg5.png";
import cardimg6 from "../assets/team/cardimg6.png";

//nilesh sir awards
import Certificate1 from "../assets/awards/Nilesh sir awards/Certificate1.png";
import Certificate2 from "../assets/awards/Nilesh sir awards/Certificate2.png";
import Certificate3 from "../assets/awards/Nilesh sir awards/Certificate3.png";
import Certificate4 from "../assets/awards/Nilesh sir awards/Certificate4.png";
import Certificate5 from "../assets/awards/Nilesh sir awards/Certificate5.png";
import Certificate6 from "../assets/awards/Nilesh sir awards/Certificate6.png";
import Certificate7 from "../assets/awards/Nilesh sir awards/Certificate7.png";
import Certificate8 from "../assets/awards/Nilesh sir awards/Certificate8.png";
import Certificate9 from "../assets/awards/Nilesh sir awards/Certificate9.png";
import Certificate10 from "../assets/awards/Nilesh sir awards/Certificate10.png";
import Certificate12 from "../assets/awards/Nilesh sir awards/Certificate12.png";

import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import IgnoranceLine from "../components/IgnoranceLine";

/* ────────────────────────────────────────── DATA */

const QUALIFICATIONS = ["Diploma (Mechanical)", "B.E (Mechanical)", " MTech (Thermal Science)", "MBA(Finance)", " MTech(Environmental)", " Ph.D. (Finance) pursuing..."];

/**
 * The honours list from the 5 Oct change list (page 14), under "Beyond
 * Achievement, Towards Impact". It replaced the five dated award chips.
 */
const HONOURS = [
	"Best boy at Diploma College",
	"Best boy at Engineering College",
	"Letter of Recognition from ABB for plant execution at SABIC Hadeed",
	"VLFM",
	"VLCI",
	"IIM Bangalore",
	"Board of Studies - VTU, Bharatesh, GIT, KLE, Jain College of Engineering",
];
const GALLERY = [
	Certificate1,
	Certificate2,
	Certificate3,
	Certificate4,
	Certificate5,
	Certificate6,
	Certificate7,
	Certificate8,
	Certificate9,
	Certificate10,
	Certificate12,
];
//guro images cards
type Leader = {
  id: number;
  name: string;
  image: string;
};

const leaders: Leader[] = [
	    {
    id: 1,
    name: "Late Mr. Bhimrao Chougule",
    image: cardimg6,
  },{
    id: 2,
    name: "Late Mr. Suresh Hundre",
    image: cardimg3,
  },
 {
    id: 3,
    name: "Late Mr. Patel",
    image: cardimg2,
  },

  {
    id: 4,
    name: "Prof. Shoji Shiba",
    image:cardimg4,
  },

  {
    id: 5,
    name: "Mr. Furuhashi Takeyuki",
    image: cardimg1,
  },
  {
    id: 6,
    name: "Mr. Saideep Rathnam",
    image: cardimg5,
  },
];

/**
 * The "Almamaters" list from the 5 Oct change list (page 15), in its order.
 * It replaced the five dated chapters of the Life-time Journey section.
 */
const ALMA_MATERS = [
	{ stage: "Schooling", place: "St. Mary's School, Belagavi", icon: School },
	{ stage: "Diploma", place: "Govt. Polytechnic, Belagavi", icon: ScrollText },
	{
		stage: "Mechanical Engineering",
		place: "KLE College of Engineering and Technology, Belagavi (Engg)",
		icon: Cog,
	},
	{
		stage: "M.Tech in Thermal Science",
		place: "Vishweswaraiah College of Engineering, Bengaluru",
		icon: Thermometer,
	},
	{
		stage: "MBA in Finance",
		place: "Symbiosis, Pune",
		icon: Briefcase,
	},
	{
		stage: "M.Tech in Environmental Engg",
		place: "Angadi College, Belagavi",
		icon: Leaf,
	},
	{
		stage: "Pursuing Ph.D.",
		place: "VTU, Belagavi",
		icon: GraduationCap,
	},
	{
		stage: "Research Center",
		place: "Jain College of Engineering, Belagavi",
		icon: FlaskConical,
	},
	{ stage: "VLFM Graduation", place: "", icon: Award },
	{ stage: "VLCI Graduation", place: "", icon: Medal },
];

const ETHOS = [
	{
		num: "01",
		title: "Discipline",
		body: "A starting line we do not negotiate on: every plant, every product and every promise.",
		accent: PRIMARY,
	},
	{
		num: "02",
		title: "Innovation",
		body: "Engineering ideas that translate vision into reality, every day on the shop floor.",
		accent: SECONDARY,
	},
	{
		num: "03",
		title: "Service",
		body: "Sharing what we learn with industry, with academia, with the next generation.",
		accent: PRIMARY,
	},
];

const VLFM_IMAGES = [vlfm1, vlfm3, vlfm4, vlfm5, vlfm6];
const VLCI_IMAGES = [vlci1];

/* ────────────────────────────────────────── HERO */

function CmdHero() {
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
			gsap.fromTo(
				".tk-portrait",
				{ opacity: 0, scale: 0.92, rotate: -2 },
				{
					opacity: 1,
					scale: 1,
					rotate: 0,
					duration: 1.6,
					ease: "expo.out",
					delay: 0.2,
				},
			);
		}, el);
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={heroRef}
			className="relative isolate flex min-h-[60vh] items-end overflow-hidden pb-16 pt-32 md:min-h-[70vh] md:pb-24 md:pt-36"
			style={{ backgroundColor: "#070c17" }}>
			<img
				aria-hidden
				src={cmdHeroImage}
				alt=""
				className="tk-portrait pointer-events-none absolute inset-0 -z-40 h-full w-full object-cover object-[60%_30%] opacity-75 md:object-[50%_30%]"
				style={{ filter: "saturate(0.9) contrast(1.1)" }}
			/>

			{/* Subtle dark overlay over the image */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-[35] bg-[rgba(7,12,23,0.35)]"
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
					<span>Inspire</span>
					<span
						className="ml-2 hidden h-px w-12 md:block"
						style={{
							background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
						}}
					/>
					<span className="hidden font-mono text-[10px] tracking-[0.4em] text-white/35 md:inline">
						Core Belief
					</span>
				</div>

				<h1 className="tk-fade mt-6 max-w-5xl page-title">
					<span className="text-white">Our</span>
					<span
						className="bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
						}}>
						{" "}
						CMD
					</span>
				</h1>

				{/* His words, so they are set as a quotation and signed (18 Sep change
				    list): in quotes, with his title and name below at the right. The
				    marks hang outside the measure so the three lines stay aligned. */}
				<figure className="tk-fade m-0 mt-6 w-fit max-w-3xl">
					<blockquote className="relative m-0 text-lg leading-relaxed text-white/70 md:text-xl">
						<p className="m-0">
							<span
								aria-hidden
								className="absolute -ml-[0.5em] font-display text-white/85">
								“
							</span>
							We stand on the foundation of Humanity,
							<br />
							Worshipping our Work with belief that,
							<br />
							We are the creator of our own Destiny.
							<span
								aria-hidden
								className="font-display text-white/85">
								”
							</span>
						</p>
					</blockquote>
					<figcaption className="mt-5 flex flex-col items-end text-right leading-snug">
						<span className="text-sm text-white/60 md:text-[15px]">
							Founder, Chairman and Managing Director,
						</span>
						<span className="mt-1 font-display text-lg font-semibold text-white md:text-xl">
							Mr. Neelesh Chougule
						</span>
					</figcaption>
				</figure>

				<div
					className="tk-bar mt-10 h-px w-full origin-left"
					style={{
						background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
					}}
				/>

				<div className="tk-fade mt-8 flex flex-wrap items-center gap-3">
					{/* <span
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur"
						style={{
							borderColor: "rgba(255,255,255,0.18)",
							background: "rgba(255,255,255,0.06)",
						}}>
						Since 2012
					</span> */}
					{QUALIFICATIONS.map((q, idx) => (
						<span
							key={q}
							className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
							style={{
								borderColor: idx % 2 === 0 ? `${PRIMARY}55` : `${SECONDARY}55`,
								background: idx % 2 === 0 ? `${PRIMARY}14` : `${SECONDARY}14`,
							}}>
							{q}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── BIO — floating cards */

/* Floating message cards (FoundersMessage-style, themed for Creintors) */

type CardSide = "left" | "right";

type MessageCard = {
	tag: string;
	/** The card's heading. Vision carries its two quotes instead. */
	title?: string;
	/** Who a quoted heading is credited to. */
	by?: string;
	body?: string;
	/** One quote per audience (Vision). */
	quotes?: { text: string; for: string }[];
	/** Which side of the portrait the card stands on, from lg. */
	side: CardSide;
	accent: string;
};

/**
 * The story cards, in the order and wording of the 5 Oct change list (pages
 * 13-14): Origin, Passion, Spark, Purpose, Vision, Transformation,
 * Recognition, Wings of Fire. They alternate either side of the portrait,
 * Origin on the left, Passion on the right, and so on.
 */
const MESSAGE_CARDS: MessageCard[] = [
	{
		tag: "Origin",
		title: "Born to a humble beginning",
		body: "A first-generation entrepreneur from Belgaum, Karnataka. His father, Bhimrao M. Chougule, and his alma mater, St. Mary's High School, laid the foundation of discipline and the principle of sharing.",
		side: "left",
		accent: PRIMARY,
	},
	{
		tag: "Passion",
		title: "Discipline · Sportsman spirit · Enthusiasm",
		body: "A starting line we do not negotiate on—for every plant, every product and every promise. The principle of sharing, carried from school to shop floor.",
		side: "right",
		accent: SECONDARY,
	},
	{
		tag: "Spark",
		title: "“We pay for our ignorance.”",
		by: "Late Shri Suresh Hundre",
		body: "A powerful realisation that ignited his entrepreneurial spark during his final-year project. Early industrial exposure and the mentorship of Late Shri Shankar Sutar of Belgaum Auto-Works and Late Shri Suresh Hundre, Chairman of the Polyhydron Group of Industries, Belagavi, transformed curiosity into conviction and laid the foundation for a journey driven by passion, perseverance, and purposeful innovation.",
		side: "left",
		accent: PRIMARY,
	},
	{
		tag: "Purpose",
		title:
			"“Defeat ignorance through knowledge sharing. Deliver innovation to those who need it most.”",
		body: "This belief became his purpose—to challenge ignorance, explore possibilities, and bring like-minded minds together to build organizations that make a difference. Along the way, visionary gurus nurtured his conviction, shared his purpose, and joined him in turning this noble cause into a journey of meaningful innovation and lasting impact.",
		side: "right",
		accent: SECONDARY,
	},
	{
		tag: "Vision",
		quotes: [
			{
				text: "We stand on the foundation of humanity, worshipping our work with the faith that, we are the creators of our own Destiny.",
				for: "For our team",
			},
			{
				text: "To deliver sustainable innovations that build a better world and create an ecosystem that inspires the youth.",
				for: "For the world",
			},
		],
		side: "left",
		accent: PRIMARY,
	},
	{
		tag: "Transformation",
		title:
			"Transformation is born from the urge to contribute and the pursuit of man-making.",
		body: "Through the 3I ecosystem, he fosters a meaningful societal connect—recognising the needs of the hour, building proactive solutions, and nurturing people to drive lasting societal transformation.",
		side: "right",
		accent: SECONDARY,
	},
	{
		tag: "Recognition",
		title: "Bringing Many Along",
		body: "Awards and academic associations have amplified our reach, opening doors to diverse, like-minded minds who share our vision. Beyond recognition, they create opportunities to bring more people along on our mission to build the society we aspire to see.",
		side: "left",
		accent: PRIMARY,
	},
	{
		tag: "Wings of Fire",
		title: "Aspiration · Curiosity · Learning",
		body: "Driven by aspiration, fuelled by curiosity, and committed to continuous learning, we turn the needs of the hour into purposeful action—bringing individual aspirations together to create a collective impact on society.",
		side: "right",
		accent: SECONDARY,
	},
];

function MessageCardView({
	card,
	index,
	trigger,
}: {
	card: MessageCard;
	index: number;
	trigger: boolean;
}) {
	const fromX = card.side === "left" ? -60 : 60;

	return (
		<motion.article
			initial={{ opacity: 0, x: fromX, scale: 0.94 }}
			animate={trigger ? { opacity: 1, x: 0, scale: 1 } : {}}
			transition={{
				type: "spring",
				damping: 22,
				stiffness: 220,
				delay: 0.25 + index * 0.08,
			}}
			whileHover={{
				y: -6,
				scale: 1.015,
				transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
			}}
			className="group relative overflow-hidden rounded-2xl border bg-white/85 p-4 backdrop-blur-md transition-all duration-500 hover:bg-white lg:p-5"
			style={{
				borderColor: "rgba(15,23,42,0.08)",
				boxShadow:
					"0 20px 50px -24px rgba(15,23,42,0.18), inset 0 0 0 1px rgba(255,255,255,0.7)",
			}}>
			{/* Accent hairline */}
			<span
				aria-hidden
				className="pointer-events-none absolute inset-x-5 top-0 h-px opacity-80 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
					boxShadow: `0 0 10px ${card.accent}66`,
				}}
			/>
			{/* Soft corner glow on hover */}
			<span
				aria-hidden
				className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
				style={{ background: card.accent }}
			/>

			{/* Header: tag */}
			<div className="flex items-center gap-3">
				<span
					className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em]"
					style={{ color: card.accent }}>
					{card.tag}
				</span>
				<span
					className="ml-auto h-px w-6 transition-all duration-500 group-hover:w-10"
					style={{
						background: `linear-gradient(90deg, ${card.accent}, transparent)`,
					}}
				/>
			</div>

			{/* Title */}
			{card.title && (
				<h4 className="mt-3 font-display text-[14px] font-semibold leading-snug tracking-tight text-slate-900 transition-colors duration-300 lg:text-[15px]">
					{card.title}
				</h4>
			)}
			{card.by && (
				<p className="mt-1 text-xs italic text-slate-500">— {card.by}</p>
			)}

			{/* Body */}
			{card.body && (
				<p className="mt-2 text-[12.5px] leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700 lg:text-[13px]">
					{card.body}
				</p>
			)}

			{/* Quotes, one per audience */}
			{card.quotes?.map((q) => (
				<figure
					key={q.for}
					className="m-0 mt-3 border-l-2 pl-3"
					style={{ borderColor: `${card.accent}88` }}>
					<blockquote className="m-0 font-display text-[13px] italic leading-relaxed text-slate-700 lg:text-sm">
						“{q.text}”
					</blockquote>
					<figcaption
						className="mt-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.28em]"
						style={{ color: card.accent }}>
						{q.for}
					</figcaption>
				</figure>
			))}
		</motion.article>
	);
}

function BioSection() {

	const row1 = [...GALLERY, ...GALLERY];
	const row2 = [...GALLERY.slice().reverse(), ...GALLERY.slice().reverse()];
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	// Subtle scroll-driven parallax for the central portrait
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const portraitY = useTransform(scrollYProgress, [0, 1], [40, -40]);

	return (
		<section
			id="bio"
			ref={ref}
			className="section-tint relative isolate overflow-hidden py-10">
			{/* Animated background blobs */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10">
				<div
					className="bio-blob absolute top-0 left-1/4 h-96 w-96 rounded-full opacity-40 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}33, transparent 70%)`,
					}}
				/>
				<div
					className="bio-blob bio-blob-2 absolute bottom-0 right-1/4 h-80 w-80 rounded-full opacity-35 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}33, transparent 70%)`,
					}}
				/>
				<div
					className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[100px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}22, transparent 70%)`,
					}}
				/>
			</div>
			{/* Faint dot grid */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
				style={{
					backgroundImage:
						"radial-gradient(circle at 25% 50%, rgba(15,23,42,0.6) 1px, transparent 1px)",
					backgroundSize: "44px 44px",
				}}
			/>

			<div className="container-x relative">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className="text-center">
					<div className="mb-4 flex items-center justify-center gap-3">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>
						<span
							className="font-mono text-[10px] font-semibold uppercase tracking-[0.4em]"
							style={{ color: PRIMARY }}>
							Founder, Chairman and Managing Director
						</span>
						<span
							className="h-px w-8"
							style={{ background: SECONDARY }}
						/>
					</div>
					<h2 className="section-title">
						<span className="text-slate-900">Neelesh </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							Chougule
						</span>
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
						First generation serial entrepreneur, philanthropist, educationist, firm believer of global citizenship
					</p>
				</motion.div>

				{/* Hero quote */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{
						duration: 0.8,
						ease: [0.22, 1, 0.36, 1],
						delay: 0.15,
					}}
					className="mx-auto mt-10 max-w-3xl text-center">
					<div
						className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.32em]"
						style={{
							color: PRIMARY,
							borderColor: `${PRIMARY}44`,
							background: `${PRIMARY}10`,
						}}>
						<span
							className="h-1.5 w-1.5 rounded-full"
							style={{ background: PRIMARY }}
						/>
						Leadership insight
					</div>
					<p className="font-display text-xl font-medium italic leading-relaxed text-slate-700 md:text-2xl">
						“The beads of chance favour the most prepared mind.”
						<br></br >- Prof. Shoji Shiba (My Guru)
						<br></br> <br></br>Curiosity sparks possibilities, while purpose fuels the passion and perseverance to turn them into reality, deliver tangible outcomes and drive sustainable growth.
					</p>
				</motion.div>

				{/* Visual area: the portrait between two columns of story cards (lg+).
					    On mobile the portrait leads and the cards stack below it. */}
				<div className="relative mt-14 grid grid-cols-1 items-center gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-8 xl:gap-10">
					{/* Central portrait */}
					<motion.div
						style={{ y: portraitY }}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={inView ? { opacity: 1, scale: 1 } : {}}
						transition={{
							duration: 1,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.1,
						}}
						className="relative z-0 order-1 justify-self-center lg:order-2">
						<div className="group relative">
							{/* Portrait card — the hero plane */}
							<figure
								className="relative isolate w-[22rem] sm:w-[24rem] md:w-[28rem] lg:w-[22rem] xl:w-[28rem]"
								style={{ transform: "translateZ(0)" }}>
								<img
									src={portrait}
									alt="Neelesh Chougule"
									className="w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
									style={{ filter: "saturate(1.04) contrast(1.06)" }}
								/>
							</figure>
						</div>

						{/* CTA directly below the portrait */}
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.7,
								ease: [0.22, 1, 0.36, 1],
								delay: 0.6,
							}}
							className="mt-5 flex justify-center">
							<a
								href="https://in.linkedin.com/in/neelesh-chougule-786a9a58"
								target="_blank"
								rel="noopener noreferrer"
								className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
								style={{
									background: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
									boxShadow: `0 14px 32px -14px ${PRIMARY}99, inset 0 0 0 1px rgba(255,255,255,0.18)`,
								}}>
								<span
									aria-hidden
									className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
								/>
								<span className="relative">Connect on LinkedIn</span>
								<span
									aria-hidden
									className="relative transition-transform duration-300 group-hover/cta:translate-x-1">
									↗
								</span>
							</a>
						</motion.div>
					</motion.div>

					{/* Story cards, alternating left and right of the portrait (lg+).
					    Below lg the columns would split the reading order, so the cards
					    stack in story order instead. */}
					<div className="order-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
						{MESSAGE_CARDS.map((card, i) => (
							<MessageCardView
								key={card.tag}
								card={card}
								index={i}
								trigger={inView}
							/>
						))}
					</div>
					{(["left", "right"] as const).map((side) => (
						<div
							key={side}
							className={`hidden w-full grid-cols-1 gap-5 lg:grid ${
								side === "left" ? "lg:order-1" : "lg:order-3"
							}`}>
							{MESSAGE_CARDS.map((card, i) =>
								card.side === side ?
									<MessageCardView
										key={card.tag}
										card={card}
										index={i}
										trigger={inView}
									/>
								:	null,
							)}
						</div>
					))}
				</div>

				{/* Honours: what the recognition adds up to (5 Oct change list) */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{
							duration: 0.7,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.7,
						}}
						className="mx-auto mt-5 max-w-5xl border-t border-slate-200/80 pt-8 text-center">
						<div className="mb-5 flex items-center justify-center gap-3">
							<span
								className="h-px w-8"
								style={{ background: PRIMARY }}
							/>
							<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.36em] text-slate-500">
								Honours
							</span>
							<span
								className="h-px w-8"
								style={{ background: SECONDARY }}
							/>
						</div>
						<h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-slate-900 md:text-3xl">
							<span>Beyond Achievement, </span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								Towards Impact
							</span>
						</h3>
						<p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
							From individual recognition for industrial execution to
							contributing to academic institutions through Boards of Studies,
							his journey reflects a commitment to excellence, industry
							advancement, and knowledge sharing. While industry recognitions
							celebrate organisational achievements, his academic associations
							create opportunities to bridge industry and education, shaping
							future-ready minds.
						</p>
						<ul className="m-0 mt-7 flex list-none flex-wrap items-stretch justify-center gap-2.5 p-0">
							{HONOURS.map((h, idx) => (
								<motion.li
									key={h}
									initial={{ opacity: 0, scale: 0.9 }}
									animate={inView ? { opacity: 1, scale: 1 } : {}}
									transition={{
										duration: 0.5,
										ease: [0.22, 1, 0.36, 1],
										delay: 0.85 + idx * 0.06,
									}}
									className="inline-flex items-center gap-2 rounded-2xl border px-3.5 py-2 text-left text-[13px] font-medium leading-snug text-slate-700 transition-all duration-300 hover:-translate-y-0.5"
									style={{
										borderColor:
											idx % 2 === 0 ? `${PRIMARY}55` : `${SECONDARY}55`,
										background: idx % 2 === 0 ? `${PRIMARY}10` : `${SECONDARY}10`,
									}}>
									<span
										aria-hidden
										className="h-1.5 w-1.5 shrink-0 rounded-full"
										style={{ background: idx % 2 === 0 ? PRIMARY : SECONDARY }}
									/>
									{h}
								</motion.li>
							))}
						</ul>
					</motion.div>

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
			</div>

			<style>{`
				@keyframes bioFloat {
					0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
					50% { transform: translate3d(30px, -25px, 0) scale(1.06); }
				}
				@keyframes bioFloat2 {
					0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
					50% { transform: translate3d(-30px, 20px, 0) scale(1.08); }
				}
				.bio-blob { animation: bioFloat 16s ease-in-out infinite; }
				.bio-blob-2 { animation: bioFloat2 19s ease-in-out infinite; }
				@media (prefers-reduced-motion: reduce) {
					.bio-blob, .bio-blob-2 { animation: none; }
				}
			`}</style>
		</section>
	);
}

/* ────────────────────────────────────────── GALLERY MARQUEE */

/* ────────────────────────────────────────── ACADEMICS */

function AcademicsSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="academics"
			ref={ref}
			className="cmd-academics section-tint relative isolate overflow-hidden py-10">
			{/* Soft tinted blooms */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-30"
				style={{
					background: `
						radial-gradient(50% 70% at 20% 30%, ${PRIMARY}1a, transparent 60%),
						radial-gradient(60% 80% at 90% 80%, ${SECONDARY}1a, transparent 60%)
					`,
				}}
			/>
			{/* Floating accent blobs */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
				<span
					className="cmd-blob absolute -left-24 top-1/4 h-[28rem] w-[28rem] rounded-full opacity-35 blur-[140px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}55, transparent 70%)`,
					}}
				/>
				<span
					className="cmd-blob cmd-blob-2 absolute -right-32 bottom-1/4 h-[30rem] w-[30rem] rounded-full opacity-30 blur-[140px]"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}55, transparent 70%)`,
					}}
				/>
			</div>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-10 top-0 h-px opacity-60"
				style={{
					background: `linear-gradient(90deg, transparent, ${PRIMARY}aa, transparent)`,
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-10 bottom-0 h-px opacity-50"
				style={{
					background: `linear-gradient(90deg, transparent, ${SECONDARY}99, transparent)`,
				}}
			/>



			{/* Heading guru cards*/}
			<div className="container-x relative">
				<div className="mb-12 text-center sm:mb-16">
				<span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
					Gurus & Lifelong Learning
				</span>

				<h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-3xl">
					Shaped by Mentorship. <span className="text-blue-700">Driven by Purpose</span>
				</h2>
				
				<p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
					His journey as a first-generation entrepreneur has been shaped by the guidance of visionary gurus, strong academic foundations, and continuous learning. Their mentorship strengthened his conviction to keep exploring, learning, and building organisations that create meaningful impact.
				</p>
				<div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-700" />
				</div>

				{/* Leadership Cards */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
				{leaders.map((leader) => (
					<article
					key={leader.id}
					className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
					>
					{/* Circular Portrait */}
					<div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-[0_0_0_2px_#dbeafe] transition-all duration-300 group-hover:shadow-[0_0_0_4px_#2563eb] sm:h-44 sm:w-44">
						<img
						src={leader.image}
						alt={leader.name}
						loading="lazy"
						className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
						/>
					</div>

					{/* Name and Designation */}
					<h3 className="text-lg font-bold text-slate-900">
						{leader.name}
					</h3>

					

					<div className="mx-auto mt-4 h-0.5 w-10 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-600" />
					</article>
				))}
				</div>
			</div>

			
			<div className="container-x relative mt-12">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
					<div className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>
						Almamaters
					</div>
					<h2 className="section-title mt-3 max-w-3xl">
						<span className="text-slate-900">The shaping of a </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							first-generation entrepreneur.
						</span>
					</h2>
					<p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
						From St. Mary's School, Belagavi to a Ph.D. at VTU: the
						institutions that shaped the operator behind every Creintors
						decision.
					</p>
				</motion.div>

				<div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14">
					{/* Almamaters, in the order of the 5 Oct change list */}
					<ol className="m-0 grid list-none grid-cols-1 content-start gap-3 p-0 sm:grid-cols-2 md:col-span-7">
						{ALMA_MATERS.map((a, i) => {
							const accent = i % 2 === 0 ? PRIMARY : SECONDARY;
							const Icon = a.icon;
							return (
								<motion.li
									key={a.stage}
									initial={{ opacity: 0, y: 18 }}
									animate={inView ? { opacity: 1, y: 0 } : {}}
									transition={{
										duration: 0.6,
										ease: [0.22, 1, 0.36, 1],
										delay: 0.15 + i * 0.06,
									}}
									whileHover={{ y: -3 }}
									className="group/acc relative overflow-hidden rounded-2xl border bg-white/95 px-5 py-4 transition-[box-shadow,border-color] duration-500"
									style={{
										borderColor: "rgba(15,23,42,0.08)",
										boxShadow: "0 18px 40px -28px rgba(15,23,42,0.18)",
									}}>
									{/* Top hairline accent */}
									<span
										aria-hidden
										className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-70 transition-opacity duration-500 group-hover/acc:opacity-100"
										style={{
											background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
											boxShadow: `0 0 10px ${accent}66`,
										}}
									/>
									{/* Hover sheen — sweeps across on hover */}
									<span
										aria-hidden
										className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)] opacity-0 transition-[transform,opacity] duration-[900ms] ease-out group-hover/acc:translate-x-full group-hover/acc:opacity-100"
									/>

									<div className="relative flex items-start gap-4">
										<span
											className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white transition-transform duration-500 group-hover/acc:scale-110 group-hover/acc:-rotate-3"
											style={{
												background: `linear-gradient(135deg, ${accent}, ${SECONDARY})`,
												boxShadow: `0 12px 24px -12px ${accent}aa, inset 0 0 0 1px rgba(255,255,255,0.25)`,
											}}>
											<Icon
												aria-hidden
												className="h-[18px] w-[18px]"
												strokeWidth={1.8}
											/>
										</span>
										<div className="min-w-0">
											<h3 className="m-0 font-display text-base font-semibold leading-snug tracking-tight text-slate-900 md:text-[17px]">
												{a.stage}
											</h3>
											{a.place && (
												<p className="m-0 mt-1.5 flex items-start gap-1.5 text-[13px] leading-snug text-slate-600">
													<MapPin
														aria-hidden
														className="mt-0.5 h-3.5 w-3.5 shrink-0"
														style={{ color: accent }}
													/>
													<span>{a.place}</span>
												</p>
											)}
										</div>
									</div>
								</motion.li>
							);
						})}
					</ol>

					{/* Side photo — at the Creintors standee. A full photograph (not a
					    cut-out), so it is framed, and kept near its 407px source width. */}
					<motion.div
							initial={{ opacity: 0, x: 28 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{
								duration: 1,
								ease: [0.22, 1, 0.36, 1],
								delay: 0.25,
							}}
							className="md:col-span-5 md:mt-[-250px]"
						>
							<div className="mx-auto max-w-sm">
							<figure
								className="group relative overflow-hidden rounded-3xl border"
								style={{
									borderColor: "rgba(15,23,42,0.08)",
									boxShadow: "0 28px 60px -32px rgba(15,23,42,0.35)",
								}}>
								<img
									src={standeePhoto}
									alt="Neelesh Chougule at the Creintors vision and mission standee"
									className="h-auto w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
								/>
							</figure>

							{/* Quote card */}
							<motion.div
								initial={{ opacity: 0, y: 24 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{
									duration: 0.8,
									ease: [0.22, 1, 0.36, 1],
									delay: 0.45,
								}}
								whileHover={{ y: -3 }}
								className="group/quote relative -mt-14	 overflow-hidden rounded-2xl border bg-white px-7 py-7 md:px-9 md:py-8"
								style={{
									borderColor: "rgba(15,23,42,0.08)",
									boxShadow: `0 28px 60px -32px rgba(15,23,42,0.25), 0 0 0 1px rgba(255,255,255,0.9) inset`,
								}}>
								{/* Top accent hairline */}
								<span
									aria-hidden
									className="pointer-events-none absolute inset-x-7 top-0 h-px opacity-90"
									style={{
										background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
										boxShadow: `0 0 12px ${PRIMARY}66`,
									}}
								/>

								{/* Soft bloom */}
								<span
									aria-hidden
									className="pointer-events-none absolute -right-20 -bottom-20 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover/quote:opacity-40"
									style={{ background: SECONDARY }}
								/>

								<div className="relative">
									<p className="font-display text-xl font-semibold leading-snug text-slate-900 md:text-2xl">
										“Growth is not just about change; it's about evolving with purpose.”
									</p>

									<div
										className="mt-5 h-px w-12 transition-all duration-500 group-hover/quote:w-24"
										style={{
											background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
										}}
									/>

									<div className="mt-4 flex items-center gap-3">
										<span
											className="bg-clip-text font-display text-base font-bold tracking-tight text-transparent md:text-lg"
											style={{
												backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
											}}>
											Neelesh Chougule
										</span>
										<span
											className="h-px flex-1"
											style={{
												background: `linear-gradient(90deg, ${PRIMARY}33, transparent)`,
											}}
										/>
										<span className="font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500">
											Founder · CMD
										</span>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			<style>{`
				@keyframes cmdFloat {
					0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
					50% { transform: translate3d(40px, -30px, 0) scale(1.08); }
				}
				@keyframes cmdFloat2 {
					0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
					50% { transform: translate3d(-50px, 30px, 0) scale(1.1); }
				}
				.cmd-academics .cmd-blob { animation: cmdFloat 14s ease-in-out infinite; }
				.cmd-academics .cmd-blob-2 { animation: cmdFloat2 18s ease-in-out infinite; }
				@media (prefers-reduced-motion: reduce) {
					.cmd-academics .cmd-blob,
					.cmd-academics .cmd-blob-2 { animation: none; }
				}
			`}</style>
		</section>
	);
}

/* ────────────────────────────────────────── PROGRAMS (magazine layout) */

type ProgramProps = {
	tag: string;
	title: string;
	subtitle: string;
	images: string[];
	accent: string;
};

function ProgramBlock({ tag, title, subtitle, images, accent }: ProgramProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });
	const [feature, ...rest] = images;

	return (
		<div ref={ref}>
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
				<div
					className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em]"
					style={{ color: accent }}>
					<span
						className="h-px w-8"
						style={{ background: accent }}
					/>
					{tag}
				</div>
				<h3 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
					<span>{title.split(" ").slice(0, -1).join(" ")} </span>
					<span
						className="bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(120deg, ${accent}, ${SECONDARY})`,
						}}>
						{title.split(" ").slice(-1)}
					</span>
				</h3>
				<p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
					{subtitle}
				</p>
			</motion.div>

			<div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
				{feature && (
					<motion.figure
						initial={{ opacity: 0, scale: 0.96, y: 24 }}
						animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
						transition={{
							duration: 0.9,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.1,
						}}
						className={`group relative isolate overflow-hidden rounded-2xl border bg-white/95 ${
							rest.length ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-3"
						}`}
						style={{
							borderColor: "rgba(15,23,42,0.08)",
							boxShadow: "0 24px 60px -28px rgba(15,23,42,0.22)",
						}}>
						<img
							src={feature}
							alt=""
							loading="lazy"
							className="aspect-[16/10] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] lg:aspect-auto lg:h-full"
						/>
						<span
							aria-hidden
							className="pointer-events-none absolute inset-0"
							style={{
								background:
									"linear-gradient(180deg, transparent 50%, rgba(7,12,23,0.7) 100%)",
							}}
						/>
						<figcaption className="absolute inset-x-5 bottom-5 z-10 flex items-center justify-between gap-3">
							<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-white/90">
								{tag} · feature
							</span>
							<span
								className="h-px flex-1 opacity-70"
								style={{
									background: `linear-gradient(90deg, transparent, ${accent})`,
								}}
							/>
						</figcaption>
					</motion.figure>
				)}
				{rest.map((src, i) => (
					<motion.figure
						key={src}
						initial={{ opacity: 0, scale: 0.96, y: 24 }}
						animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
						transition={{
							duration: 0.8,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.2 + i * 0.08,
						}}
						className="group relative isolate overflow-hidden rounded-2xl border bg-white/95"
						style={{
							borderColor: "rgba(15,23,42,0.08)",
							boxShadow: "0 18px 48px -24px rgba(15,23,42,0.22)",
						}}>
						<img
							src={src}
							alt=""
							loading="lazy"
							className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
						/>
						<span
							aria-hidden
							className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							style={{
								background: `linear-gradient(180deg, transparent 55%, ${accent}cc 100%)`,
							}}
						/>
						<figcaption className="pointer-events-none absolute inset-x-5 bottom-4 z-10 translate-y-3 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
							{tag}
						</figcaption>
					</motion.figure>
				))}
			</div>
		</div>
	);
}

function ProgramsSection() {
	return (
		<section
			id="programs"
			className="section-tint relative isolate overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-30"
				style={{
					background: `
						radial-gradient(60% 80% at 80% 0%, ${PRIMARY}1a, transparent 60%),
						radial-gradient(60% 80% at 0% 100%, ${SECONDARY}1a, transparent 60%)
					`,
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-10 top-0 h-px opacity-60"
				style={{
					background: `linear-gradient(90deg, transparent, ${PRIMARY}aa, transparent)`,
				}}
			/>

			<div className="container-x relative">
				<div className="eyebrow">
					<span
						className="h-px w-8"
						style={{ background: PRIMARY }}
					/>
					Programs & Engagements
				</div>
				<h2 className="section-title mt-2 max-w-3xl">
					<span className="text-slate-900">The classroom that built </span>
					<span
						className="bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
						}}>
						an industrialist.
					</span>
				</h2>
				<p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
					Visionary Leaders for Manufacturing (VLFM) and the Visionary Leaders
					for Cluster Initiative (VLCI) flagship CII and JICA programs that
					sharpened the principles powering Creintors today.
				</p>
			</div>

			<div className="container-x relative mt-14 space-y-16">
				<div
					className="relative overflow-hidden rounded-3xl border bg-white/85 p-6 backdrop-blur md:p-10"
					style={{
						borderColor: "rgba(15,23,42,0.08)",
						boxShadow:
							"0 28px 70px -32px rgba(15,23,42,0.22), inset 0 0 0 1px rgba(255,255,255,0.6)",
					}}>
					<span
						aria-hidden
						className="pointer-events-none absolute inset-x-10 top-0 h-px opacity-80"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
							boxShadow: `0 0 12px ${PRIMARY}66`,
						}}
					/>
					<ProgramBlock
						tag="VLFM Program"
						title="Visionary Leaders for Manufacturing"
						subtitle="Cohort sessions, factory visits and demonstrator engagements that shaped the manufacturing ethos at the Creintors group."
						images={VLFM_IMAGES}
						accent={PRIMARY}
					/>
				</div>

				<div
					className="relative overflow-hidden rounded-3xl border bg-white/85 p-6 backdrop-blur md:p-10"
					style={{
						borderColor: "rgba(15,23,42,0.08)",
						boxShadow:
							"0 28px 70px -32px rgba(15,23,42,0.22), inset 0 0 0 1px rgba(255,255,255,0.6)",
					}}>
					<span
						aria-hidden
						className="pointer-events-none absolute inset-x-10 top-0 h-px opacity-80"
						style={{
							background: `linear-gradient(90deg, transparent, ${SECONDARY}, ${PRIMARY}, transparent)`,
							boxShadow: `0 0 12px ${SECONDARY}66`,
						}}
					/>
					<ProgramBlock
						tag="VLCI Program"
						title="Visionary Leaders Cluster Initiative"
						subtitle="Cluster-level capacity building that helped translate manufacturing best-practices across the MSME ecosystem."
						images={VLCI_IMAGES}
						accent={SECONDARY}
					/>
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── QUOTE + ETHOS */

function QuoteSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			ref={ref}
			className="relative isolate flex items-center overflow-hidden py-10 md:h-[80vh]"
			style={{ backgroundColor: "#070c17" }}>
			<img
				aria-hidden
				src={cmdHeroImage}
				alt=""
				className="pointer-events-none absolute inset-0 -z-40 h-full w-full object-cover object-[60%_30%] opacity-55"
				style={{ filter: "saturate(0.85) contrast(1.05)" }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-30"
				style={{
					background: `
						linear-gradient(180deg, rgba(7,12,23,0.55) 0%, rgba(7,12,23,0.72) 50%, rgba(7,12,23,0.92) 100%),
						radial-gradient(55% 70% at 20% 80%, ${PRIMARY}33, transparent 65%),
						radial-gradient(55% 70% at 85% 15%, ${SECONDARY}33, transparent 65%)
					`,
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-40 top-10 -z-10 h-[480px] w-[480px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${PRIMARY}55, transparent 70%)`,
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${SECONDARY}55, transparent 70%)`,
				}}
			/>

			<div className="container-x relative">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
					className="relative mx-auto max-w-5xl text-center">
					<blockquote className="font-display text-[clamp(2rem,5.5vw,2rem)] font-semibold leading-[1.1] tracking-tight text-white">
						“The beads of chance favour the most prepared mind.”
						<br></br>My Guru - Prof. Shoji Shiba 
						<br></br><br></br>	Curiosity sparks possibilities, while purpose fuels the passion and perseverance to turn them into reality, deliver tangible outcomes and drive sustainable growth.
					</blockquote>
					<div
						className="mx-auto mt-10 h-px w-40"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
							boxShadow: `0 0 14px ${PRIMARY}88`,
						}}
					/>
					<p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.42em] text-white/70">
						Neelesh Chougule, Founder CMD
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{
						duration: 0.7,
						ease: [0.22, 1, 0.36, 1],
						delay: 0.7,
					}}
					className="mt-12 flex flex-wrap items-center justify-center gap-3">
					<a
						href="/about/history"
						className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
						style={{
							background: `linear-gradient(120deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
							boxShadow: `0 18px 40px -12px ${PRIMARY}99, inset 0 0 0 1px rgba(255,255,255,0.22)`,
						}}>
						<span
							aria-hidden
							className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
						/>
						<span className="relative">Read our full history</span>
						<span
							aria-hidden
							className="relative transition-transform duration-300 group-hover/cta:translate-x-1">
							→
						</span>
					</a>
					<a
						href="/contact"
						className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20">
						Get in touch
						<span aria-hidden>→</span>
					</a>
				</motion.div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── PAGE */

export default function Cmd() {
	useSeo({
		...PAGE_SEO.cmd,
	});

	return (
		<main className="relative isolate">
			<CmdHero />
			<IgnoranceLine />
			<BioSection />
			<AcademicsSection />

			<ProgramsSection />
			<QuoteSection />
		</main>
	);
}
