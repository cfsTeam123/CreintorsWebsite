/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "motion/react";
import ProductDocumentLinks from "../ProductDocumentLinks";
import type { Product } from "../../lib/content/Creintors";
import { TEKNOSOL_THEME } from "../../lib/content/Creintors";

const PRIMARY = TEKNOSOL_THEME.primary;
const SECONDARY = TEKNOSOL_THEME.secondary;

/**
 * The render is laid out at POP× its resting size and scaled *down* at rest, so
 * the compositor rasterises the layer once at the largest size it will ever
 * reach and every transform is a downscale — growing a composited layer past
 * its raster scale just stretches an already-rasterised bitmap and softens it.
 *
 * In the previous vertical card this also let the photo break out of the card's
 * top edge. The horizontal layout keeps the render inside its own column
 * instead (there is no longer a card edge above it to escape through), so the
 * scale is now purely a hover swell — but the raster trick is still worth
 * keeping, because these are large transparent PNGs and the softening on
 * upscale was very visible.
 */
const POP = 1.6;

const imageVariants: Variants = {
	rest: {
		scale: 1 / POP,
		transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
	},
	hover: {
		scale: 1.08 / POP,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
	},
};

const shadowVariants: Variants = {
	rest: { opacity: 0.5, scale: 0.9 },
	hover: {
		opacity: 0.9,
		scale: 1.15,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

const orbVariants: Variants = {
	rest: { opacity: 0, scale: 0.6 },
	hover: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

type Props = {
	product: Product;
	index: number;
};

/**
 * Horizontal product card: the render on the left, everything readable on the
 * right.
 *
 * The card was a vertical tile — render stacked on top of the copy — which in a
 * two-column grid ran very tall and gave the spec tiles the same narrow measure
 * as the photo. Side by side, the render gets a full-height column of its own
 * and the copy gets a comfortable line length, so title, specs, use cases and
 * the call to action all sit in one scan.
 *
 * Below `lg` the columns stack back to the original vertical order, with the
 * render taking a fixed 16:10 box so every card presents the same shape. The
 * card is as tall as its own content — the cards stack one per row, so
 * matching their heights only padded the shorter ones out.
 */
export default function TeknosolProductCard({ product, index }: Props) {
	const tiltRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = tiltRef.current;
		if (!el) return;

		/*
		 * Pointer position drives the spotlight and nothing else.
		 *
		 * The card used to tilt and scale up under the pointer, which meant the
		 * whole tile shifted while you were reading it and the neighbouring cards
		 * appeared to jump. Review feedback asked for the card to hold still on
		 * hover, so the transform tween is gone: only the two CSS custom
		 * properties the glow reads from are written here, and they move light
		 * across a stationary card.
		 */
		const handleMove = (e: MouseEvent) => {
			const rect = el.getBoundingClientRect();
			el.style.setProperty(
				"--glow-x",
				`${((e.clientX - rect.left) / rect.width) * 100}%`,
			);
			el.style.setProperty(
				"--glow-y",
				`${((e.clientY - rect.top) / rect.height) * 100}%`,
			);
			el.style.setProperty("--glow-intensity", "1");
		};

		const handleLeave = () => {
			el.style.setProperty("--glow-intensity", "0");
		};

		el.addEventListener("mousemove", handleMove);
		el.addEventListener("mouseleave", handleLeave);
		return () => {
			el.removeEventListener("mousemove", handleMove);
			el.removeEventListener("mouseleave", handleLeave);
		};
	}, []);

	return (
		<motion.div
			className="h-full w-full"
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1],
				// One column now, so the stagger follows reading order.
				delay: Math.min(index * 0.09, 0.45),
			}}>
			<motion.div
				ref={tiltRef}
				initial="rest"
				whileHover="hover"
				animate="rest"
				className="tk-card relative h-full"
				style={
					{
						"--glow-x": "50%",
						"--glow-y": "50%",
						"--glow-intensity": "0",
					} as React.CSSProperties
				}>
				<article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/60 shadow-[0_30px_70px_-32px_rgba(15,23,42,0.28),0_0_0_1px_rgba(255,255,255,0.9)_inset] transition-shadow duration-500 hover:shadow-[0_50px_110px_-30px_rgba(0,160,227,0.38),0_0_0_1px_rgba(0,160,227,0.22)_inset] lg:flex-row">
					{/* Top hairline */}
					<span
						aria-hidden
						className="pointer-events-none absolute inset-x-6 top-0 z-30 h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}aa, transparent)`,
							boxShadow: `0 0 12px ${PRIMARY}55`,
						}}
					/>
					<div
						className="tk-card-spotlight pointer-events-none absolute inset-0 z-10"
						aria-hidden
					/>
					<div
						className="tk-card-border-glow pointer-events-none absolute inset-0 z-20"
						aria-hidden
					/>

					{/* ── LEFT: the render on its branded stage ── */}
					<div className="relative isolate aspect-[16/10] w-full shrink-0 overflow-hidden lg:aspect-auto lg:w-[42%] lg:min-h-[20rem]">
						<div
							className="absolute inset-0"
							style={{
								background: `radial-gradient(circle at 50% 55%, ${PRIMARY}1f, transparent 70%)`,
							}}
							aria-hidden
						/>
						<div
							className="absolute inset-0"
							style={{
								backgroundImage:
									"linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
								backgroundSize: "28px 28px",
								maskImage:
									"radial-gradient(ellipse at center, black 40%, transparent 80%)",
							}}
							aria-hidden
						/>
						<motion.span
							variants={orbVariants}
							className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
							style={{ background: `${PRIMARY}3d` }}
							aria-hidden
						/>

						{/* Soft contact shadow under the render. */}
						<motion.span
							variants={shadowVariants}
							className="pointer-events-none absolute bottom-6 left-1/2 h-8 w-3/5 -translate-x-1/2 rounded-[50%] blur-2xl"
							style={{ background: "rgba(15,23,42,0.35)" }}
							aria-hidden
						/>

						{/* The render itself: laid out at POP× and scaled down, so every
						    transform stays a downscale of one crisp raster. */}
						<div className="absolute inset-0 flex items-center justify-center p-6">
							<motion.img
								src={product.image}
								alt={product.title}
								variants={imageVariants}
								className="max-h-none w-auto max-w-none shrink-0 object-contain will-change-transform"
								style={{
									height: `${POP * 100}%`,
									filter:
										"drop-shadow(0 24px 34px rgba(15,23,42,0.26)) drop-shadow(0 12px 20px rgba(0,160,227,0.30))",
								}}
							/>
						</div>

						<div
							className="absolute left-4 top-4 z-30 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-md"
							style={{
								background: "rgba(255,255,255,0.85)",
								borderColor: `${PRIMARY}66`,
								color: PRIMARY,
							}}>
							{product.tag}
						</div>
					</div>

					{/* ── RIGHT: copy ── */}
					<div className="relative flex flex-1 flex-col gap-4 p-5 sm:p-6 lg:p-7">
						<div>
							<h4 className="font-display text-xl font-semibold leading-tight text-slate-900 md:text-2xl">
								{product.title}
							</h4>
							<p
								className="mt-1.5 text-sm font-medium leading-snug"
								style={{ color: PRIMARY }}>
								{product.subtitle}
							</p>
						</div>

						<div>
							<div
								className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em]"
								style={{ color: SECONDARY }}>
								Specifications
							</div>
							<div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
								{product.specs.slice(0, 6).map((s) => (
									<div
										key={s.label}
										className="rounded-xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-2.5 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_8px_18px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(0,160,227,0.4)] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_14px_22px_-12px_rgba(0,160,227,0.25)]">
										<div
											className="text-[9px] font-semibold uppercase tracking-[0.18em]"
											style={{ color: SECONDARY }}>
											{s.label}
										</div>
										<div
											className="mt-1 text-[12px] leading-snug"
											style={{
												color: s.highlight ? "#0f172a" : "#475569",
												fontWeight: s.highlight ? 700 : 500,
											}}>
											{s.value}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Use cases and the CTA share the footer row, pinned to the
						    bottom so every card's button lines up with its neighbours. The
						    product's brochure and catalogue sit beside it, where it has them. */}
						<div className="mt-auto">
							<div
								className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em]"
								style={{ color: SECONDARY }}>
								Use Cases
							</div>
							<div className="flex flex-wrap gap-1.5">
								{product.useCases.map((u) => (
									<span
										key={u}
										className="rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-600 transition-colors duration-300 hover:border-[rgba(0,160,227,0.55)] hover:text-slate-900"
										style={{
											borderColor: `${PRIMARY}33`,
											background: `${PRIMARY}08`,
										}}>
										{u}
									</span>
								))}
							</div>

							<div className="mt-4 flex flex-wrap items-center gap-2.5 border-t border-slate-100 pt-4">
								<Link
									to="/contact"
									className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_28px_-12px_rgba(0,160,227,0.6)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_16px_36px_-12px_rgba(0,160,227,0.75)]"
									style={{
										background: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
									}}>
									<span
										aria-hidden
										className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
									/>
									<span className="relative">Enquire</span>
									<span
										aria-hidden
										className="relative transition-transform duration-300 group-hover/cta:translate-x-1">
										→
									</span>
								</Link>
								<ProductDocumentLinks
									brochure={product.brochure}
									catalogue={product.catalogue}
									accent={PRIMARY}
								/>
							</div>
						</div>
					</div>
				</article>
			</motion.div>

			<style>{`
				.tk-card-spotlight {
					background: radial-gradient(
						circle at var(--glow-x) var(--glow-y),
						rgba(0, 160, 227, calc(var(--glow-intensity) * 0.18)),
						transparent 60%
					);
					opacity: var(--glow-intensity);
					transition: opacity 0.25s ease;
					border-radius: inherit;
				}
				.tk-card-border-glow {
					border-radius: inherit;
					padding: 1.5px;
					background: radial-gradient(
						circle at var(--glow-x) var(--glow-y),
						rgba(0, 160, 227, calc(var(--glow-intensity) * 0.85)),
						transparent 55%
					);
					-webkit-mask:
						linear-gradient(#000 0 0) content-box,
						linear-gradient(#000 0 0);
					-webkit-mask-composite: xor;
					mask-composite: exclude;
					opacity: var(--glow-intensity);
					transition: opacity 0.25s ease;
				}
			`}</style>
		</motion.div>
	);
}
