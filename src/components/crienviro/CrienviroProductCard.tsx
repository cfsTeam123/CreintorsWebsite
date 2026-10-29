/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import ProductDocumentLinks from "../ProductDocumentLinks";
import type { CriProduct } from "../../lib/content/crienviro";
import { CRIENVIRO_THEME } from "../../lib/content/crienviro";

const PRIMARY = CRIENVIRO_THEME.primary;
const SECONDARY = CRIENVIRO_THEME.secondary;

type Props = {
	product: CriProduct;
	index: number;
};

/**
 * Horizontal product card: photo on the left, everything readable on the right.
 *
 * The card was a vertical tile — image stacked on top of the copy — which meant
 * a two-column grid of them ran very tall and the photo competed with the spec
 * tiles for the same narrow measure. Laid out side by side the photo gets a
 * full-height column of its own and the copy gets a comfortable line length,
 * so title, description, specs and the call to action all sit in one scan.
 *
 * Below `lg` the two columns stack back to the original vertical order, with
 * the image taking a fixed 16:10 crop so every card in the list presents the
 * same shape. Each card is as tall as its own content, since they stack one
 * per row.
 */
export default function CrienviroProductCard({ product, index }: Props) {
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
			viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
			transition={{
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1],
				// One column now, so the stagger follows reading order.
				delay: Math.min(index * 0.09, 0.45),
			}}>
			<div
				ref={tiltRef}
				className="cri-card relative h-full"
				style={
					{
						"--glow-x": "50%",
						"--glow-y": "50%",
						"--glow-intensity": "0",
					} as React.CSSProperties
				}>
				<article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.22),0_0_0_1px_rgba(255,255,255,0.9)_inset] transition-shadow duration-500 hover:shadow-[0_36px_90px_-28px_rgba(19,135,8,0.32),0_0_0_1px_rgba(19,135,8,0.18)_inset] lg:flex-row">
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
						className="cri-card-spotlight pointer-events-none absolute inset-0 z-10"
						aria-hidden
					/>
					<div
						className="cri-card-border-glow pointer-events-none absolute inset-0 z-20"
						aria-hidden
					/>

					{/* ── LEFT: photo ── */}
					<div className="relative isolate aspect-[16/10] w-full shrink-0 overflow-hidden lg:aspect-auto lg:w-[42%] lg:min-h-[20rem]">
						<div
							className="absolute inset-0 z-10"
							style={{
								background: `radial-gradient(circle at 50% 65%, ${PRIMARY}1a, transparent 70%)`,
							}}
							aria-hidden
						/>
						<img
							src={product.image}
							alt={product.title}
							className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
							loading="lazy"
						/>

						<div
							className="absolute left-4 top-4 z-30 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-md"
							style={{
								background: "rgba(255,255,255,0.88)",
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
							<p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">
								{product.description}
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
										className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 transition-colors duration-300 group-hover:border-slate-300">
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
										className="rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-600 transition-colors duration-300 hover:border-[rgba(19,135,8,0.55)] hover:text-slate-900"
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
									className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_28px_-12px_rgba(19,135,8,0.6)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_16px_36px_-12px_rgba(19,135,8,0.75)]"
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
			</div>

			<style>{`
				.cri-card-spotlight {
					background: radial-gradient(
						circle at var(--glow-x) var(--glow-y),
						rgba(19, 135, 8, calc(var(--glow-intensity) * 0.18)),
						transparent 60%
					);
					opacity: var(--glow-intensity);
					transition: opacity 0.25s ease;
					border-radius: inherit;
				}
				.cri-card-border-glow {
					border-radius: inherit;
					padding: 1.5px;
					background: radial-gradient(
						circle at var(--glow-x) var(--glow-y),
						rgba(19, 135, 8, calc(var(--glow-intensity) * 0.85)),
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
