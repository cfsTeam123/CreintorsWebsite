/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { gsap } from "../lib/gsap";
import { PRIMARY, SECONDARY } from "../lib/theme";
import DomeGallery from "../components/custom/DomeGallery";

import g1 from "../assets/gallery/awards1.png";
import g2 from "../assets/gallery/Training1.jpg";
import g3 from "../assets/gallery/Appreciation.jpg";
import g4 from "../assets/gallery/vlci1.jpg";
import g5 from "../assets/gallery/vlfm1.jpg";
import g6 from "../assets/gallery/Training2.jpg";
import g7 from "../assets/gallery/emp_Recog.jpg";
import g8 from "../assets/gallery/GIT1.jpg";
import g9 from "../assets/gallery/vlfm3.jpg";
import g10 from "../assets/gallery/vlfm4.jpg";
import g11 from "../assets/gallery/vlfm5.jpg";
import g12 from "../assets/gallery/vlfm6.jpg";
import g13 from "../assets/gallery/HealthCamp1.jpg";
import g14 from "../assets/gallery/Collage_GIT.jpg";
import g15 from "../assets/gallery/DiplomaGPT.jpg";
import g19 from "../assets/gallery/Team2.png";
import g22 from "../assets/gallery/Clients.jpg";
import g23 from "../assets/gallery/fd1.jpg";
import g24 from "../assets/gallery/fd2.jpg";
import g25 from "../assets/gallery/fd3.jpg";
import g26 from "../assets/gallery/it1.png";
import g27 from "../assets/gallery/it2.jpg";
import g28 from "../assets/gallery/mf1.jpg";
import g33 from "../assets/gallery/iso.png";
import g34 from "../assets/gallery/approach.png";
import g35 from "../assets/gallery/history.png";

import heroImage from "../assets/gallery/awards1.png";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import IgnoranceLine from "../components/IgnoranceLine";

/* ────────────────────────────────────────── DATA */

const DOME_IMAGES: { src: string; alt: string }[] = [
	{ src: g1, alt: "National Productivity Award" },
	{ src: g3, alt: "Letter of Appreciation" },
	{ src: g7, alt: "Employee Recognition" },
	{ src: g4, alt: "VLCI Leadership Forum" },
	{ src: g5, alt: "VLFM Programme" },
	{ src: g9, alt: "VLFM Cohort" },
	{ src: g10, alt: "VLFM Workshop" },
	{ src: g11, alt: "VLFM Session" },
	{ src: g12, alt: "CII & JICA Programme" },
	{ src: g2, alt: "Training Programme" },
	{ src: g6, alt: "Skill Development" },
	{ src: g8, alt: "GIT Collaboration" },
	{ src: g14, alt: "GIT Collage Memories" },
	{ src: g15, alt: "Diploma MOU with GPT Belgaum" },
	{ src: g19, alt: "Team Camaraderie" },
	{ src: g13, alt: "Health Camp" },
	{ src: g22, alt: "Client Visit" },
	{ src: g23, alt: "Factory Floor" },
	{ src: g24, alt: "Process Engineering" },
	{ src: g25, alt: "Final Inspection" },
	{ src: g26, alt: "Installation" },
	{ src: g27, alt: "On-site Commissioning" },
	{ src: g28, alt: "Manufacturing" },
	{ src: g33, alt: "ISO Certification Day" },
	{ src: g34, alt: "Our Approach" },
	{ src: g35, alt: "Journey in Frames" },
];

const STATS = [
	{ value: 200, suffix: "+", label: "Captured Moments" },
	{ value: 20, suffix: "+", label: "Years on the Floor" },
	{ value: 12, suffix: "+", label: "Academia Partners" },
	{ value: 50, suffix: "+", label: "Client Sites" },
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

function GalleryHero() {
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
				".gal-fade",
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
				".gal-bar",
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
				".gal-orb",
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
					className="gal-orb pointer-events-none absolute -right-40 top-12 -z-10 h-[460px] w-[460px] rounded-full blur-3xl"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}55, transparent 70%)`,
					}}
				/>
				<div
					aria-hidden
					className="gal-orb pointer-events-none absolute -left-32 bottom-0 -z-10 h-[380px] w-[380px] rounded-full blur-3xl"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}55, transparent 70%)`,
					}}
				/>

				<div className="container-x relative">
					<div className="gal-fade flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/55">
						<span>Gallery</span>
						<span
							className="ml-2 hidden h-px w-12 md:block"
							style={{
								background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
							}}
						/>
						<span className="hidden font-mono text-[10px] tracking-[0.4em] text-white/35 md:inline">
							MOMENTS · MILESTONES · PEOPLE
						</span>
					</div>

					<h1 className="gal-fade mt-6 max-w-9xl page-title">
						<span className="text-white">Frames from </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
							}}>
							our journey
						</span>
					</h1>

					<p className="gal-fade mt-6 max-w-3xl text-lg text-white/70 md:text-xl">
						One and a half decades of engineering, training and partnership, captured
						across shop floors, classrooms, client sites and the moments in
						between. Drag the dome, tap any tile to step inside the story.
					</p>

					<div
						className="gal-bar mt-10 h-px w-full origin-left"
						style={{
							background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
						}}
					/>

					<div className="gal-fade mt-8 flex flex-wrap items-center gap-3">
						<span
							className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur"
							style={{
								borderColor: "rgba(255,255,255,0.18)",
								background: "rgba(255,255,255,0.06)",
							}}>
							Drag · Tap · Explore
						</span>
						<span
							className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
							style={{
								borderColor: `${PRIMARY}55`,
								background: `${PRIMARY}14`,
							}}>
							Awards · Academia · Industry
						</span>
						<span
							className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
							style={{
								borderColor: `${SECONDARY}55`,
								background: `${SECONDARY}14`,
							}}>
							People at the Centre
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
			className="group relative overflow-hidden rounded-3xl border bg-white/95 px-6 py-7 text-center transition-all duration-500 hover:-translate-y-1.5"
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
						In numbers
					</div>
					<h2 className="section-title mt-3">
						A living archive of{" "}
						<span className="text-gradient-brand">our craft</span>
					</h2>
				</motion.div>

				<div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
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

/* ────────────────────────────────────────── DOME GALLERY SHOWCASE */

function DomeShowcase() {
	const images = useMemo(() => DOME_IMAGES, []);

	return (
		<section
			id="gallery"
			className="relative isolate overflow-hidden"
			style={{ backgroundColor: "#120F17" }}>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `
						radial-gradient(60% 70% at 75% 15%, ${PRIMARY}26, transparent 60%),
						radial-gradient(60% 70% at 10% 85%, ${SECONDARY}33, transparent 60%)
					`,
				}}
			/>

			<div className="container-x relative pt-20 md:pt-24">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
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
						Explore the dome
					</div>
					<h2 className="section-title-sm mt-6 text-white">
						Step inside{" "}
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
							}}>
							our archive
						</span>
					</h2>
				</motion.div>
			</div>

			<div
				className="relative mx-auto mt-8 w-full"
				style={{ height: "min(92vh, 1000px)" }}>
				<DomeGallery
					images={images}
					fit={0.75}
					minRadius={600}
					maxVerticalRotationDeg={0}
					segments={26}
					dragDampening={5}
					grayscale={false}
					overlayBlurColor="#120F17"
					openedImageWidth="min(90vw, 1200px)"
					openedImageHeight="min(85vh, 900px)"
				/>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── CLOSING CTA */

function ClosingSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			ref={ref}
			className="section-tint relative isolate flex items-center overflow-hidden py-10">
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
					<blockquote className="font-display text-[clamp(1.9rem,5.2vw,3.6rem)] font-semibold leading-[1.1] tracking-tight text-slate-900">
						Pictures fade. The discipline behind them does not, and that is what
						you really see in every frame.
					</blockquote>
					<div
						className="mx-auto mt-10 h-px w-40"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
							boxShadow: `0 0 14px ${PRIMARY}66`,
						}}
					/>
					<p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.42em] text-slate-500">
						The Creintors way of working
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
							to="/about/achievements"
							className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
							style={{
								background: `linear-gradient(120deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
								boxShadow: `0 18px 40px -12px ${PRIMARY}99, inset 0 0 0 1px rgba(255,255,255,0.22)`,
							}}>
							<span
								aria-hidden
								className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
							/>
							<span className="relative">See our achievements</span>
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

export default function Gallery() {
	useSeo({
		...PAGE_SEO.gallery,
	});

	return (
		<main className="relative isolate">
			{/*
			 * GalleryHero (which carried the page H1) is disabled, so the page had
			 * no H1 at all. This keeps the document outline correct for assistive
			 * technology and crawlers without altering the visual design.
			 */}
			<h1 className="sr-only">Our Moments | Creintors Group of Companies</h1>
			{/* <GalleryHero /> */}
			<DomeShowcase />
			<IgnoranceLine />
		</main>
	);
}
