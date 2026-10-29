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
import { DIVISION_ACCENTS } from "../lib/divisions";
import teamHero from "../assets/team/rtteton.jpeg";
import fottteamHero from "../assets/team/fsafotter.jpeg";

import vichare from "../assets/team/teamMembers/S N Vichare.jpeg";
import disha from "../assets/team/teamMembers/Disha Chougule.jpeg";
import sagar from "../assets/team/teamMembers/Sagar Kavadi BH - CTPL.jpg";
import rahul from "../assets/team/teamMembers/Rahul Kale BH - CASPL Projects 7795000801.jpg";
import parag from "../assets/team/teamMembers/Parag Bilgi BH - CESPL 7795000803.jpg";
import sheldon from "../assets/team/teamMembers/Sheldon D'Lima BH - CASPL Innovation and Products 7019224122.jpg";
import cmdPortrait from "../assets/team/teamMembers/Neelesh Chougule CMD1.webp";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import IgnoranceLine from "../components/IgnoranceLine";

/* ────────────────────────────────────────── DATA */

type Director = {
	name: string;
	role: string;
	scope: string;
	image: string;
	/** Inset the portrait a little instead of bleeding to the card edges. */
	padded?: boolean;
};

type Lead = {
	name: string;
	role: string;
	phone: string;
	email?: string;
	image: string;
	accent: string;
};

const DIRECTORS: Director[] = [
	{
		name: "Neelesh Chougule",
		role: "Chairman & Managing Director",
		scope: " Creintors Group Of Companies",
		image: cmdPortrait,
		padded: true,
	},
	{
		name: "Disha Chougule",
		role: "Executive Director",
		scope: " Creintors Group Of Companies",
		image: disha,
	},
];

const LEADS: Lead[] = [
	{
		name: "Sagar Kavadi",
		role: "Business Head, CTPL",
		phone: "+91 7795000812",
		email: "sagar.kavadi@creintors.com",
		image: sagar,
		accent: PRIMARY,
	},
	{
		name: "Parag Bilgi",
		role: "Business Head, CESPL",
		phone: "+91 7795000803",
		image: parag,
		email: "parag@crienviro.com",
		// CESPL is the environmental company — its own green, not the group blue.
		accent: DIVISION_ACCENTS.crienviro,
	},
	{
		name: "Rahul Kale",
		role: "Business Head, CASPL Projects",
		phone: "+91 7795000801",
		email: "rahul.k@cautomate.com",
		image: rahul,
		accent: SECONDARY,
	},

	{
		name: "Sheldon D'Lima",
		role: "Business Head, CASPL Innovation and Products",
		phone: "+91 7019224122",
		image: sheldon,
		email: "sheldon.d@cautomate.com",

		accent: SECONDARY,
	},
];

const VALUES = [
	{
		num: "01",
		title: "Engineer-first culture",
		body: "Every business head ships from the shop floor. Design, validation and delivery sit under one roof.",
		accent: PRIMARY,
	},
	{
		num: "02",
		title: "Owner mindset",
		body: "Leaders are accountable for outcomes, not slices, from first call to commissioning sign-off.",
		accent: SECONDARY,
	},
	{
		num: "03",
		title: "Team work to dream work",
		body: "Three companies, one playbook: exports, automation and environment compound each other.",
		accent: PRIMARY,
	},
];

const STATS = [
	{ value: 50, suffix: "+", label: "Engineers across group" },
	{ value: 3, suffix: "", label: "Operating companies" },
	{ value: 20, suffix: "+", label: "Years on the shop floor" },
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

function useTilt(maxDeg = 6) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [t, setT] = useState({ rx: 0, ry: 0 });
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const onMove = (e: MouseEvent) => {
			const r = el.getBoundingClientRect();
			const px = (e.clientX - r.left) / r.width;
			const py = (e.clientY - r.top) / r.height;
			setT({ ry: (px - 0.5) * 2 * maxDeg, rx: -(py - 0.5) * 2 * maxDeg });
		};
		const onLeave = () => setT({ rx: 0, ry: 0 });
		el.addEventListener("mousemove", onMove);
		el.addEventListener("mouseleave", onLeave);
		return () => {
			el.removeEventListener("mousemove", onMove);
			el.removeEventListener("mouseleave", onLeave);
		};
	}, [maxDeg]);
	return {
		ref,
		style: {
			transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
			transition: "transform 320ms cubic-bezier(0.22,1,0.36,1)",
		},
	};
}

/* ────────────────────────────────────────── HERO */

function TeamHero() {
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
			className="relative isolate flex min-h-[60vh] items-end overflow-hidden pb-12 pt-24 md:min-h-[60vh] md:max-h-[60vh] md:pb-14 md:pt-24"
			style={{ backgroundColor: "#070c17" }}>
			<img
				aria-hidden
				src={teamHero}
				alt=""
				className="pointer-events-none absolute inset-0 -z-40 h-full w-full object-cover object-[60%_40%] opacity-75"
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
					<span>Our Team</span>
					<span
						className="ml-2 hidden h-px w-12 md:block"
						style={{
							background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
						}}
					/>
					<span className="hidden font-mono text-[10px] tracking-[0.4em] text-white/35 md:inline">
						BOARD · BUSINESS HEADS · ENGINEERS
					</span>
				</div>

				<h1 className="tk-fade mt-4 max-w-5xl page-title">
					<span className="text-white">Our</span>
					<span
						className="bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
						}}>
						{" "}
						Team
					</span>
				</h1>

				<p className="tk-fade mt-5 max-w-3xl text-base text-white/70 md:text-lg">
					Three companies, one playbook. The leaders below ship every Creintors
					rig, AGV and treatment plant from the Belgaum factory to the
					customer's shop floor.
				</p>

				<div
					className="tk-bar mt-6 h-px w-full origin-left"
					style={{
						background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
					}}
				/>

				<div className="tk-fade mt-5 flex flex-wrap items-center gap-3">
					<span
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur"
						style={{
							borderColor: "rgba(255,255,255,0.18)",
							background: "rgba(255,255,255,0.06)",
						}}>
						Team work → Dream work
					</span>
					<span
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
						style={{
							borderColor: `${PRIMARY}55`,
							background: `${PRIMARY}14`,
						}}>
						Engineer-led
					</span>
					<span
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
						style={{
							borderColor: `${SECONDARY}55`,
							background: `${SECONDARY}14`,
						}}>
						Belgaum · India
					</span>
				</div>
			</div>

			<style>{`
				@keyframes scrollDot {
					0% { transform: translateY(0); opacity: 0; }
					15% { opacity: 1; }
					85% { opacity: 1; }
					100% { transform: translateY(20px); opacity: 0; }
				}
				@media (prefers-reduced-motion: reduce) {
					.group\\/scroll * { animation: none !important; }
				}
			`}</style>
		</section>
	);
}

/* ────────────────────────────────────────── BOARD */

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
			initial={{ opacity: 0, y: 24 }}
			animate={trigger ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
			className="group relative overflow-hidden rounded-2xl border bg-white/95 px-5 py-7 text-center transition-all duration-500 hover:-translate-y-1"
			style={{
				borderColor: "rgba(15,23,42,0.08)",
				boxShadow: "0 16px 40px -22px rgba(15,23,42,0.18)",
			}}>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-80 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
				}}
			/>
			{/* Soft accent glow on hover */}
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background: `radial-gradient(80% 80% at 50% 0%, ${PRIMARY}1a, transparent 70%)`,
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
			<div className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500 md:text-[11px]">
				{label}
			</div>
		</motion.div>
	);
}

function DirectorCard({ d, idx }: { d: Director; idx: number }) {
	const tilt = useTilt(9);
	const accent = idx % 2 === 0 ? PRIMARY : SECONDARY;
	return (
		<motion.div
			initial={{ opacity: 0, y: 26 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 1,
				ease: [0.22, 1, 0.36, 1],
				delay: idx * 0.12,
			}}>
			<div
				ref={tilt.ref}
				style={tilt.style}
				className="will-change-transform">
				{/* Outer glow halo */}
				<div
					aria-hidden
					className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
					style={{
						background: `radial-gradient(closest-side, ${accent}55, transparent 70%)`,
					}}
				/>
				<figure
					className="group/dc relative isolate overflow-hidden rounded-[1.75rem] border bg-white/95 transition-[box-shadow,transform] duration-500 hover:-translate-y-1"
					style={{
						borderColor: `${accent}26`,
						boxShadow: "0 32px 80px -28px rgba(15,23,42,0.28)",
					}}>
					{/* Animated gradient ring on hover */}
					<div
						aria-hidden
						className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/dc:opacity-100"
						style={{
							background: `conic-gradient(from 130deg at 50% 50%, ${accent}cc, ${accent}33, ${SECONDARY}aa, ${accent}33, ${accent}cc)`,
							WebkitMask:
								"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
							WebkitMaskComposite: "xor",
							maskComposite: "exclude",
							padding: "1.5px",
						}}
					/>

					<span
						aria-hidden
						className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px opacity-90"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
							boxShadow: `0 0 14px ${accent}aa`,
						}}
					/>

					{/* Image */}
					<div className="relative overflow-hidden">
						<img
							src={d.image}
							alt={d.name}
							className={`aspect-[7/9] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover/dc:scale-[1.06] ${
								d.padded ? "rounded-[1.4rem] p-3" : ""
							}`}
							style={{ filter: "saturate(1.05) contrast(1.08)" }}
						/>
						{/* Corner crosshair */}
						<span
							aria-hidden
							className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 transition-all duration-500 group-hover/dc:h-6 group-hover/dc:w-6"
							style={{ borderColor: accent }}
						/>
						<span
							aria-hidden
							className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 opacity-0 transition-all duration-500 group-hover/dc:opacity-80"
							style={{ borderColor: accent }}
						/>
					</div>

					{/* Caption block */}
					<figcaption className="relative px-5 pb-6 pt-5 md:px-6">
						<h3 className="mt-3 font-display text-[1.4rem] font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-[1.6rem]">
							{d.name}
						</h3>
						<p
							className="mt-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.24em]"
							style={{ color: accent }}>
							{d.role}
						</p>
						<div
							className="mt-2.5 h-px w-10 transition-all duration-500 group-hover/dc:w-24"
							style={{
								background: `linear-gradient(90deg, ${accent}, transparent)`,
							}}
						/>
						<p className="mt-2.5 text-[13px] leading-relaxed text-slate-600">
							{d.scope}
						</p>
					</figcaption>
				</figure>
			</div>
		</motion.div>
	);
}

function BoardSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="board"
			ref={ref}
			className="section-tint relative isolate overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10">
				<div
					className="absolute -top-32 left-[10%] h-[28rem] w-[28rem] rounded-full opacity-40 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}26, transparent 70%)`,
					}}
				/>
				<div
					className="absolute -bottom-40 right-[8%] h-[26rem] w-[26rem] rounded-full opacity-35 blur-[120px]"
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
					<div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-slate-500">
						<span
							className="h-px w-10"
							style={{
								background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
							}}
						/>
						<span>The Board</span>
					</div>
					<h2 className="section-title mt-3 max-w-4xl">
						<span className="text-slate-900">Board of </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							Directors
						</span>
					</h2>
					<p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
						The compass behind every Creintors decision operating discipline,
						long-term thinking, and an obsession with the engineer-customer
						interface.
					</p>
				</motion.div>

				<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 md:mx-auto md:mt-12 md:max-w-4xl md:gap-8">
					{DIRECTORS.map((d, i) => (
						<DirectorCard
							key={d.name}
							d={d}
							idx={i}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── BUSINESS HEADS */

function LeadCard({ lead, idx }: { lead: Lead; idx: number }) {
	const tilt = useTilt(8);
	return (
		<motion.article
			initial={{ opacity: 0, y: 26 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 1,
				ease: [0.22, 1, 0.36, 1],
				delay: idx * 0.14,
			}}
			className="group relative h-full">
			{/* Outer glow halo */}
			<div
				aria-hidden
				className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
				style={{
					background: `radial-gradient(closest-side, ${lead.accent}55, transparent 70%)`,
				}}
			/>
			<div
				ref={tilt.ref}
				style={tilt.style}
				className="h-full will-change-transform">
				<figure
					className="group/card relative isolate flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-white/95 transition-[transform,box-shadow] duration-500 hover:-translate-y-1"
					style={{
						borderColor: `${lead.accent}26`,
						boxShadow: "0 28px 70px -28px rgba(15,23,42,0.25)",
					}}>
					{/* Animated gradient ring on hover */}
					<div
						aria-hidden
						className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
						style={{
							background: `conic-gradient(from 130deg at 50% 50%, ${lead.accent}cc, ${lead.accent}33, ${SECONDARY}aa, ${lead.accent}33, ${lead.accent}cc)`,
							WebkitMask:
								"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
							WebkitMaskComposite: "xor",
							maskComposite: "exclude",
							padding: "1.5px",
						}}
					/>

					<span
						aria-hidden
						className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px opacity-90"
						style={{
							background: `linear-gradient(90deg, transparent, ${lead.accent}, ${SECONDARY}, transparent)`,
							boxShadow: `0 0 14px ${lead.accent}88`,
						}}
					/>

					<div className="relative shrink-0 overflow-hidden">
						<img
							src={lead.image}
							alt={lead.name}
							className="aspect-[7/9] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover/card:scale-[1.06]"
							style={{ filter: "saturate(1.05) contrast(1.08)" }}
						/>

						{/* Top corner crosshair */}
						<span
							aria-hidden
							className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 opacity-70 transition-all duration-500 group-hover/card:h-6 group-hover/card:w-6 group-hover/card:opacity-100"
							style={{ borderColor: lead.accent }}
						/>
					</div>

					<div className="relative flex flex-1 flex-col p-5 md:p-6">
						<h3 className="mt-3 font-display text-[1.35rem] font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-[1.5rem]">
							{lead.name}
						</h3>
						<div
							className="mt-3 h-px w-10 transition-all duration-500 group-hover/card:w-24"
							style={{
								background: `linear-gradient(90deg, ${lead.accent}, transparent)`,
							}}
						/>
						<p
							className="mt-3 text-[14px] font-semibold leading-snug"
							style={{ color: lead.accent }}>
							{lead.role}
						</p>

						{/* Contact (always visible) */}
						<div
							className="mt-auto space-y-2 border-t pt-4"
							style={{ borderColor: `${lead.accent}1f` }}>
							<a
								href={`tel:${lead.phone.replace(/\s+/g, "")}`}
								translate="no"
								className="group/contact flex items-center gap-2.5 text-[13px] text-slate-700 transition-colors hover:text-slate-900">
								<span
									className="grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-transform duration-300 group-hover/contact:scale-110"
									style={{
										borderColor: `${lead.accent}55`,
										background: `${lead.accent}12`,
										color: lead.accent,
									}}>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-3.5 w-3.5"
										aria-hidden>
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
									</svg>
								</span>
								<span className="font-medium tracking-wide">{lead.phone}</span>
							</a>
							{lead.email && (
								<a
									href={`mailto:${lead.email}`}
									translate="no"
									className="group/contact flex items-center gap-2.5 text-[13px] text-slate-700 transition-colors hover:text-slate-900">
									<span
										className="grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-transform duration-300 group-hover/contact:scale-110"
										style={{
											borderColor: `${lead.accent}55`,
											background: `${lead.accent}12`,
											color: lead.accent,
										}}>
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-3.5 w-3.5"
											aria-hidden>
											<rect
												x="3"
												y="5"
												width="18"
												height="14"
												rx="2"
											/>
											<polyline points="3 7 12 13 21 7" />
										</svg>
									</span>
									<span className="truncate font-medium">{lead.email}</span>
								</a>
							)}
						</div>
					</div>

					<span
						aria-hidden
						className="pointer-events-none absolute right-4 top-4 h-3.5 w-3.5 border-r-2 border-t-2 opacity-70 transition-all duration-500 group-hover/card:h-5 group-hover/card:w-5 group-hover/card:opacity-100"
						style={{ borderColor: lead.accent }}
					/>
				</figure>
			</div>
		</motion.article>
	);
}

function LeadsSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="leads"
			ref={ref}
			className="section-tint relative isolate overflow-hidden py-10">
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
						background: `radial-gradient(circle, ${SECONDARY}2a, transparent 70%)`,
					}}
				/>
			</div>

			<div className="relative mx-auto w-full max-w-[88rem] px-6 lg:px-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
					<div className="flex items-center justify-between gap-4 md:gap-6">
						<div>
							<div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-slate-500">
								<span
									className="h-px w-10"
									style={{
										background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
									}}
								/>
								<span>Shop-floor leaders</span>
							</div>
							<h2 className="section-title mt-3 max-w-4xl">
								<span className="text-slate-900">Business </span>
								<span
									className="bg-clip-text text-transparent"
									style={{
										backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
									}}>
									Heads
								</span>
							</h2>
						</div>
					</div>
					<p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
						The leaders who own the customer relationship end-to-end from first
						call to commissioning sign-off across exports, ITMS, AGV and ASRS.
					</p>
				</motion.div>

				<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 md:mt-12">
					{LEADS.map((l, i) => (
						<LeadCard
							key={l.name}
							lead={l}
							idx={i}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── VALUES / CTA */

function ValuesSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			ref={ref}
			className="relative isolate flex items-center overflow-hidden py-10 md:h-[80vh]"
			style={{ backgroundColor: "#070c17" }}>
			<img
				aria-hidden
				src={fottteamHero}
				alt=""
				className="pointer-events-none absolute inset-0 -z-40 h-full w-full object-cover object-center opacity-55"
				style={{ filter: "saturate(0.85) contrast(1.05)" }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-30"
				style={{
					background: `
						linear-gradient(180deg, rgba(7,12,23,0.20) 0%, rgba(7,12,23,0.34) 50%, rgba(7,12,23,0.62) 100%),
						radial-gradient(55% 70% at 20% 80%, ${PRIMARY}26, transparent 65%),
						radial-gradient(55% 70% at 85% 15%, ${SECONDARY}26, transparent 65%)
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

			<div className="container-x relative w-full">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
					className="relative mx-auto max-w-5xl text-center">
					<blockquote className="font-display text-[clamp(1.9rem,5.2vw,3.8rem)] font-semibold leading-[1.1] tracking-tight text-white">
						We make team work the dream work; three companies, one playbook,
						built by people who design, ship and own the outcome.
					</blockquote>
					<div
						className="mx-auto mt-10 h-px w-40"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
							boxShadow: `0 0 14px ${PRIMARY}88`,
						}}
					/>
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
						href="/about/cmd"
						className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
						style={{
							background: `linear-gradient(120deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
							boxShadow: `0 18px 40px -12px ${PRIMARY}99, inset 0 0 0 1px rgba(255,255,255,0.22)`,
						}}>
						<span
							aria-hidden
							className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
						/>
						<span className="relative">Meet our CMD</span>
						<span
							aria-hidden
							className="relative transition-transform duration-300 group-hover/cta:translate-x-1">
							→
						</span>
					</a>
					<a
						href="/contact"
						className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20">
						Join the team
						<span aria-hidden>→</span>
					</a>
				</motion.div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── LEADERSHIP SPOTLIGHT (top of hierarchy) */

function SpotlightSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const tilt = useTilt(6);

	return (
		<section
			id="leadership"
			ref={ref}
			className="section-tint relative isolate overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10">
				<div
					className="absolute -top-32 right-[10%] h-[28rem] w-[28rem] rounded-full opacity-40 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}26, transparent 70%)`,
					}}
				/>
				<div
					className="absolute -bottom-40 left-[8%] h-[26rem] w-[26rem] rounded-full opacity-35 blur-[120px]"
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
					<div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-slate-500">
						<span
							className="h-px w-10"
							style={{
								background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
							}}
						/>
						<span>Leadership</span>
					</div>
				</motion.div>

				<div className="mt-10 grid grid-cols-1 items-center gap-8 md:mt-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
					{/* Portrait */}
					<motion.div
						initial={{ opacity: 0, y: 26 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
						className="group relative mx-auto w-full max-w-md">
						<div
							aria-hidden
							className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
							style={{
								background: `radial-gradient(closest-side, ${PRIMARY}55, transparent 70%)`,
							}}
						/>
						<div
							ref={tilt.ref}
							style={tilt.style}
							className="will-change-transform">
							<figure
								className="group/cmd relative isolate overflow-hidden rounded-[1.75rem] border bg-white/95 transition-[box-shadow,transform] duration-500 hover:-translate-y-1"
								style={{
									borderColor: `${PRIMARY}26`,
									boxShadow: "0 32px 80px -28px rgba(15,23,42,0.28)",
								}}>
								<div
									aria-hidden
									className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/cmd:opacity-100"
									style={{
										background: `conic-gradient(from 130deg at 50% 50%, ${PRIMARY}cc, ${PRIMARY}33, ${SECONDARY}aa, ${PRIMARY}33, ${PRIMARY}cc)`,
										WebkitMask:
											"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
										WebkitMaskComposite: "xor",
										maskComposite: "exclude",
										padding: "1.5px",
									}}
								/>
								<span
									aria-hidden
									className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px opacity-90"
									style={{
										background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
										boxShadow: `0 0 14px ${PRIMARY}aa`,
									}}
								/>
								<div className="relative overflow-hidden">
									<img
										src={vichare}
										alt="S N Vichare"
										className="aspect-[7/9] w-full object-cover object-top transition-transform duration-[1600ms] ease-out group-hover/cmd:scale-[1.06]"
										style={{ filter: "saturate(1.05) contrast(1.08)" }}
									/>
									<span
										aria-hidden
										className="pointer-events-none absolute -right-2 -top-3 select-none font-display text-[5.5rem] font-bold leading-none tracking-tighter opacity-15"
										style={{
											color: PRIMARY,
											WebkitTextStroke: `1px ${PRIMARY}aa`,
										}}>
										01
									</span>
									<span
										aria-hidden
										className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2"
										style={{ borderColor: PRIMARY }}
									/>
								</div>
							</figure>
						</div>
					</motion.div>

					{/* Content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}>
						<span
							className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em]"
							style={{
								borderColor: `${PRIMARY}40`,
								background: `${PRIMARY}10`,
								color: PRIMARY,
							}}>
							Vice President
						</span>
						<h2 className="section-title mt-4">
							<span className="text-slate-900">Suryaji</span>{" "}
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								Vichare
							</span>
						</h2>
						<p
							className="mt-3 font-mono text-[12px] font-semibold uppercase tracking-[0.24em]"
							style={{ color: PRIMARY }}>
							Vice President · Creintors Group of Companies
						</p>
						<div
							className="mt-4 h-px w-16"
							style={{
								background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
							}}
						/>
						<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
							As Vice President of the Creintors Group, Suryaji Vichare turns
							strategy into execution aligning all three companies behind one
							operating rhythm. He sets the pace on performance and
							accountability, carrying the same standard from the boardroom to
							the shop floor to the customer.
						</p>
				
					</motion.div>
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── PAGE */

export default function Team() {
	useSeo({
		...PAGE_SEO.team,
	});

	return (
		<main className="relative isolate">
			<TeamHero />
			<IgnoranceLine />
			<SpotlightSection />
			<BoardSection />
			<LeadsSection />
			<ValuesSection />
		</main>
	);
}
