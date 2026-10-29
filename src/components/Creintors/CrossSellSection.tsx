/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "../../lib/gsap";
import { useReveal } from "./useReveal";
import {
	TEKNOSOL_THEME,
	PARTNERS,
	type Partner,
} from "../../lib/content/Creintors";

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

const PRIMARY = TEKNOSOL_THEME.primary;
const SECONDARY = TEKNOSOL_THEME.secondary;

// PRIMARY (#00A0E3) as an RGB triplet for the glow vars.
const GLOW_RGB = "0, 160, 227";
const SPOTLIGHT_RADIUS = 220;

export default function CrossSellSection() {
	const ref = useReveal<HTMLDivElement>();
	const gridRef = useRef<HTMLDivElement>(null);

	// Global cursor-tracking spotlight + per-card glow intensity.
	useEffect(() => {
		const grid = gridRef.current;
		if (!grid) return;

		const spotlight = document.createElement("div");
		spotlight.className = "cs-global-spotlight";
		spotlight.style.cssText = `
			position: fixed;
			width: 700px;
			height: 700px;
			border-radius: 50%;
			pointer-events: none;
			background: radial-gradient(circle,
				rgba(${GLOW_RGB}, 0.18) 0%,
				rgba(${GLOW_RGB}, 0.09) 18%,
				rgba(${GLOW_RGB}, 0.04) 36%,
				rgba(${GLOW_RGB}, 0.02) 55%,
				transparent 70%);
			z-index: 30;
			opacity: 0;
			transform: translate(-50%, -50%);
			mix-blend-mode: multiply;
		`;
		document.body.appendChild(spotlight);

		const proximity = SPOTLIGHT_RADIUS * 0.55;
		const fadeDistance = SPOTLIGHT_RADIUS * 1.4;

		const handleMove = (e: MouseEvent) => {
			const section = grid.closest(".cs-bento-section");
			const rect = section?.getBoundingClientRect();
			const inside =
				rect &&
				e.clientX >= rect.left &&
				e.clientX <= rect.right &&
				e.clientY >= rect.top &&
				e.clientY <= rect.bottom;

			const cards = grid.querySelectorAll<HTMLElement>(".cs-card");
			if (!inside) {
				gsap.to(spotlight, { opacity: 0, duration: 0.3, ease: "power2.out" });
				cards.forEach((c) => c.style.setProperty("--glow-intensity", "0"));
				return;
			}

			let minDistance = Infinity;
			cards.forEach((card) => {
				const r = card.getBoundingClientRect();
				const cx = r.left + r.width / 2;
				const cy = r.top + r.height / 2;
				const dist = Math.max(
					0,
					Math.hypot(e.clientX - cx, e.clientY - cy) -
						Math.max(r.width, r.height) / 2,
				);
				minDistance = Math.min(minDistance, dist);

				let intensity = 0;
				if (dist <= proximity) intensity = 1;
				else if (dist <= fadeDistance)
					intensity = (fadeDistance - dist) / (fadeDistance - proximity);

				const rx = ((e.clientX - r.left) / r.width) * 100;
				const ry = ((e.clientY - r.top) / r.height) * 100;
				card.style.setProperty("--glow-x", `${rx}%`);
				card.style.setProperty("--glow-y", `${ry}%`);
				card.style.setProperty("--glow-intensity", intensity.toString());
			});

			gsap.to(spotlight, {
				left: e.clientX,
				top: e.clientY,
				duration: 0.12,
				ease: "power2.out",
			});

			const targetOpacity =
				minDistance <= proximity ? 0.8
				: minDistance <= fadeDistance ?
					((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
				:	0;
			gsap.to(spotlight, {
				opacity: targetOpacity,
				duration: targetOpacity > 0 ? 0.2 : 0.45,
				ease: "power2.out",
			});
		};

		const handleLeave = () => {
			grid.querySelectorAll<HTMLElement>(".cs-card").forEach((c) => {
				c.style.setProperty("--glow-intensity", "0");
			});
			gsap.to(spotlight, { opacity: 0, duration: 0.3, ease: "power2.out" });
		};

		document.addEventListener("mousemove", handleMove);
		document.addEventListener("mouseleave", handleLeave);

		return () => {
			document.removeEventListener("mousemove", handleMove);
			document.removeEventListener("mouseleave", handleLeave);
			spotlight.parentNode?.removeChild(spotlight);
		};
	}, []);

	return (
		<section
			className="cs-bento-section relative isolate overflow-hidden py-10"
			style={{
				background: `
					radial-gradient(80% 60% at 0% 0%, ${PRIMARY}29, transparent 60%),
					radial-gradient(80% 60% at 100% 100%, ${PRIMARY}1f, transparent 65%),
					linear-gradient(180deg, #d4ecf8 0%, #b5d6eb 100%)
				`,
			}}>
			{/* Soft ambient blooms */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div
					className="cs-pulse absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}33, transparent 70%)`,
					}}
				/>
				<div
					className="cs-pulse absolute -bottom-32 right-0 h-[26rem] w-[26rem] rounded-full opacity-25 blur-[120px]"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}33, transparent 70%)`,
						animationDelay: "2.4s",
					}}
				/>
			</div>

			<div
				ref={ref}
				className="container-x relative">
				{/* Header */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={{
						hidden: {},
						visible: {
							transition: { staggerChildren: 0.1, delayChildren: 0.05 },
						},
					}}
					className="mb-14 max-w-3xl">
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 14 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.7, ease: SMOOTH_EASE },
							},
						}}
						className="eyebrow text-slate-600">
						<motion.span
							variants={{
								hidden: { scaleX: 0 },
								visible: {
									scaleX: 1,
									transition: { duration: 0.9, ease: SMOOTH_EASE },
								},
							}}
							className="h-px w-8 origin-left"
							style={{ background: PRIMARY }}
						/>{" "}
						Building Ecosystem
					</motion.div>
					<motion.h2
						variants={{
							hidden: { opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)" },
							visible: {
								opacity: 1,
								y: 0,
								clipPath: "inset(0 0 0% 0)",
								transition: { duration: 0.95, ease: SMOOTH_EASE },
							},
						}}
						className="section-title">
						{/* "Customer as Co-Creator" (19 Sep change list), under the 17 Sep
						    list's "Building Ecosystem". Asked on the Crienviro page; the three
						    company pages share this heading, so all three carry it. */}
						<span className="text-slate-900">Customer as </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY} 0%, #0b1220 60%, ${SECONDARY} 100%)`,
							}}>
							Co-Creator.
						</span>
					</motion.h2>
					<motion.p
						variants={{
							hidden: { opacity: 0, y: 16 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.85, ease: SMOOTH_EASE },
							},
						}}
						className="mt-6 text-slate-600">
						Trusted by valve manufacturers, oil & gas operators, power plants
						and process industries that demand precision and reliability.
					</motion.p>
				</motion.div>

				{/* Bento logo grid */}
				<div
					ref={gridRef}
					className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
					{PARTNERS.map((p, i) => (
						<BentoLogoCard
							key={p.name}
							partner={p}
							index={i}
						/>
					))}
					<BentoMoreCard index={PARTNERS.length} />
				</div>
			</div>

			<style>{`
				@keyframes csPulse {
					0%, 100% { opacity: 0.18; transform: scale(1); }
					50%      { opacity: 0.32; transform: scale(1.06); }
				}
				.cs-pulse { animation: csPulse 6.5s ease-in-out infinite; }

				@keyframes csMoreDot {
					0%, 100% { opacity: 0.15; }
					45%      { opacity: 1; }
				}
				.cs-more-dot {
					display: inline-block;
					animation: csMoreDot 1.5s ease-in-out infinite;
				}


				.cs-card {
					--glow-x: 50%;
					--glow-y: 50%;
					--glow-intensity: 0;
					--glow-radius: ${SPOTLIGHT_RADIUS}px;
					background:
						radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
							rgba(${GLOW_RGB}, calc(var(--glow-intensity) * 0.95)) 0%,
							rgba(${GLOW_RGB}, calc(var(--glow-intensity) * 0.55)) 30%,
							rgba(${GLOW_RGB}, calc(var(--glow-intensity) * 0.15)) 55%,
							transparent 70%),
						linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.82));
					transition: box-shadow 0.3s ease, background 0.25s ease;
				}
				.cs-card:hover {
					box-shadow:
						0 12px 30px -8px rgba(15, 23, 42, 0.22),
						0 0 30px rgba(${GLOW_RGB}, 0.35);
				}
				.cs-particle {
					position: absolute;
					width: 4px;
					height: 4px;
					border-radius: 50%;
					background: rgba(${GLOW_RGB}, 1);
					box-shadow: 0 0 8px rgba(${GLOW_RGB}, 0.7);
					pointer-events: none;
					z-index: 3;
				}
			`}</style>
		</section>
	);
}

/**
 * The tile that closes the grid.
 *
 * The customer list is a selection, not the whole of it — this says so, rather
 * than letting the grid trail off into an empty half-row.
 */
function BentoMoreCard({ index }: { index: number }) {
	const col = index % 5;
	const row = Math.floor(index / 5);

	return (
		<motion.div
			initial={{ opacity: 0, y: 28, scale: 0.94 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{
				duration: 0.6,
				ease: SMOOTH_EASE,
				delay: 0.04 * col + 0.08 * row,
			}}
			className="cs-card group relative overflow-hidden rounded-[20px] p-[1.5px]">
			<div className="relative overflow-hidden rounded-[18.5px] bg-slate-900">
				<div className="relative flex aspect-[16/10] w-full items-center justify-center bg-white p-5">
					{/* The ellipsis is part of the phrase, not a row of bullets under it:
					    the three dots trail the words and pulse in turn. */}
					<span
						className="flex items-baseline justify-center text-center font-display text-lg font-bold uppercase leading-tight tracking-[0.16em] transition-transform duration-500 ease-out group-hover:scale-[1.06] md:text-xl"
						style={{ color: PRIMARY }}>
						And more
						<span
							aria-hidden
							className="tracking-[0.08em]">
							{[0, 1, 2].map((d) => (
								<span
									key={d}
									className="cs-more-dot"
									style={{ animationDelay: `${d * 0.18}s` }}>
									.
								</span>
							))}
						</span>
					</span>

					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						style={{
							background: `radial-gradient(220px at var(--glow-x) var(--glow-y), rgba(${GLOW_RGB}, 0.18), transparent 60%)`,
						}}
					/>
				</div>

				<span
					aria-hidden
					className="pointer-events-none absolute inset-x-4 top-0 z-10 h-px opacity-50 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `linear-gradient(90deg, transparent, rgba(${GLOW_RGB}, 0.9), transparent)`,
						boxShadow: `0 0 12px rgba(${GLOW_RGB}, 0.6)`,
					}}
				/>
			</div>
		</motion.div>
	);
}

function BentoLogoCard({
	partner,
	index,
}: {
	partner: Partner;
	index: number;
}) {
	const cardRef = useRef<HTMLDivElement>(null);
	const particlesRef = useRef<HTMLDivElement[]>([]);
	const hoveredRef = useRef(false);
	const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
	const magnetismTweenRef = useRef<gsap.core.Tween | null>(null);

	useEffect(() => {
		const el = cardRef.current;
		if (!el) return;

		const spawnParticles = () => {
			if (!hoveredRef.current || !cardRef.current) return;
			const { width, height } = cardRef.current.getBoundingClientRect();
			const count = 8;
			for (let i = 0; i < count; i++) {
				const id = window.setTimeout(() => {
					if (!hoveredRef.current || !cardRef.current) return;
					const p = document.createElement("div");
					p.className = "cs-particle";
					p.style.left = `${Math.random() * width}px`;
					p.style.top = `${Math.random() * height}px`;
					cardRef.current.appendChild(p);
					particlesRef.current.push(p);

					gsap.fromTo(
						p,
						{ scale: 0, opacity: 0 },
						{
							scale: 1,
							opacity: 1,
							duration: 0.3,
							ease: "back.out(1.7)",
						},
					);
					gsap.to(p, {
						x: (Math.random() - 0.5) * 80,
						y: (Math.random() - 0.5) * 80,
						rotation: Math.random() * 360,
						duration: 2 + Math.random() * 2,
						ease: "none",
						repeat: -1,
						yoyo: true,
					});
					gsap.to(p, {
						opacity: 0.3,
						duration: 1.4,
						ease: "power2.inOut",
						repeat: -1,
						yoyo: true,
					});
				}, i * 90);
				timeoutsRef.current.push(id);
			}
		};

		const clearParticles = () => {
			timeoutsRef.current.forEach((id) => clearTimeout(id));
			timeoutsRef.current = [];
			particlesRef.current.forEach((p) => {
				gsap.to(p, {
					scale: 0,
					opacity: 0,
					duration: 0.25,
					ease: "back.in(1.7)",
					onComplete: () => p.parentNode?.removeChild(p),
				});
			});
			particlesRef.current = [];
		};

		const onEnter = () => {
			hoveredRef.current = true;
			spawnParticles();
			gsap.to(el, {
				rotateX: 5,
				rotateY: 5,
				duration: 0.35,
				ease: "power2.out",
				transformPerspective: 1000,
			});
		};

		const onMove = (e: MouseEvent) => {
			if (!cardRef.current) return;
			const rect = cardRef.current.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			// Tilt
			const rotateX = ((y - centerY) / centerY) * -10;
			const rotateY = ((x - centerX) / centerX) * 10;
			gsap.to(el, {
				rotateX,
				rotateY,
				duration: 0.12,
				ease: "power2.out",
				transformPerspective: 1000,
			});

			// Magnetism
			const magnetX = (x - centerX) * 0.05;
			const magnetY = (y - centerY) * 0.05;
			magnetismTweenRef.current = gsap.to(el, {
				x: magnetX,
				y: magnetY,
				duration: 0.3,
				ease: "power2.out",
			});
		};

		const onLeave = () => {
			hoveredRef.current = false;
			clearParticles();
			magnetismTweenRef.current?.kill();
			gsap.to(el, {
				rotateX: 0,
				rotateY: 0,
				x: 0,
				y: 0,
				duration: 0.4,
				ease: "power2.out",
			});
		};

		const onClick = (e: MouseEvent) => {
			if (!cardRef.current) return;
			const rect = cardRef.current.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const maxDistance = Math.max(
				Math.hypot(x, y),
				Math.hypot(x - rect.width, y),
				Math.hypot(x, y - rect.height),
				Math.hypot(x - rect.width, y - rect.height),
			);

			const ripple = document.createElement("div");
			ripple.style.cssText = `
				position: absolute;
				width: ${maxDistance * 2}px;
				height: ${maxDistance * 2}px;
				border-radius: 50%;
				background: radial-gradient(circle, rgba(${GLOW_RGB}, 0.4) 0%, rgba(${GLOW_RGB}, 0.2) 30%, transparent 70%);
				left: ${x - maxDistance}px;
				top: ${y - maxDistance}px;
				pointer-events: none;
				z-index: 4;
			`;
			cardRef.current.appendChild(ripple);

			gsap.fromTo(
				ripple,
				{ scale: 0, opacity: 1 },
				{
					scale: 1,
					opacity: 0,
					duration: 0.8,
					ease: "power2.out",
					onComplete: () => ripple.remove(),
				},
			);
		};

		el.addEventListener("mouseenter", onEnter);
		el.addEventListener("mousemove", onMove);
		el.addEventListener("mouseleave", onLeave);
		el.addEventListener("click", onClick);
		return () => {
			hoveredRef.current = false;
			el.removeEventListener("mouseenter", onEnter);
			el.removeEventListener("mousemove", onMove);
			el.removeEventListener("mouseleave", onLeave);
			el.removeEventListener("click", onClick);
			clearParticles();
		};
	}, []);

	const col = index % 5;
	const row = Math.floor(index / 5);

	return (
		<motion.div
			ref={cardRef}
			initial={{ opacity: 0, y: 28, scale: 0.94 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{
				duration: 0.6,
				ease: SMOOTH_EASE,
				delay: 0.04 * col + 0.08 * row,
			}}
			className="cs-card group relative overflow-hidden rounded-[20px] p-[1.5px]">
			{/* Inner plate: bg-slate-900 hides the parent gradient except at the 1.5px border ring */}
			<div className="relative overflow-hidden rounded-[18.5px] bg-slate-900">
				{/* White plate that holds the logo — or the name, set as type, for
				    customers whose logo artwork has not been supplied. */}
				<div className="relative flex aspect-[16/10] w-full items-center justify-center bg-white p-5">
					{partner.logo ?
						<img
							src={partner.logo}
							alt={partner.name}
							className="max-h-[80px] w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.06]"
							loading="lazy"
						/>
					:	<span className="text-balance px-2 text-center font-display text-lg font-bold leading-tight tracking-tight text-slate-800 transition-transform duration-500 ease-out group-hover:scale-[1.06] md:text-xl">
							{partner.name}
						</span>
					}
					{/* Soft cursor-driven glow over the logo */}
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						style={{
							background: `radial-gradient(220px at var(--glow-x) var(--glow-y), rgba(${GLOW_RGB}, 0.18), transparent 60%)`,
						}}
					/>
				</div>

				{/* Top hairline accent */}
				<span
					aria-hidden
					className="pointer-events-none absolute inset-x-4 top-0 z-10 h-px opacity-50 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `linear-gradient(90deg, transparent, rgba(${GLOW_RGB}, 0.9), transparent)`,
						boxShadow: `0 0 12px rgba(${GLOW_RGB}, 0.6)`,
					}}
				/>
			</div>
		</motion.div>
	);
}
