/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import ProductDocumentLinks from "./ProductDocumentLinks";
import type { ProductDocuments } from "../lib/content/documents";

type Props = {
	/** The offering's name, as its filter chip reads. */
	label: string;
	/** The small line over the copy — "Solution range", "In the making". */
	kicker: string;
	/**
	 * Name the offering inside the panel too. Off where a heading right above
	 * the panel already names it.
	 */
	titled?: boolean;
	body: string;
	/** The client's own photograph of it, where one exists. */
	image?: { src: string; alt: string; position?: string };
	/** Stands in for a photograph that has not been supplied. Decorative. */
	icon?: ComponentType<{ className?: string }>;
	ctaLabel?: string;
	/** The range's brochure or catalogue, where one was supplied. */
	documents?: ProductDocuments;
	primary: string;
	secondary: string;
};

/**
 * Stands in for the cards of an offering whose details have not been supplied:
 * the client's photograph where there is one, and a way to ask about it. It
 * says nothing about models, capacities or specifications — none have been
 * supplied, and nothing on these pages is made up.
 *
 * Where no photograph exists either, a branded panel with the offering's icon
 * holds the image's place, rather than a borrowed photo of something else.
 */
export default function OfferingOverview({
	label,
	kicker,
	titled = false,
	body,
	image,
	icon: Icon,
	ctaLabel = `Enquire about ${label}`,
	documents,
	primary,
	secondary,
}: Props) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.22)] lg:flex-row">
			<div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden lg:aspect-auto lg:min-h-[18rem] lg:w-[42%]">
				{image ?
					<img
						src={image.src}
						alt={image.alt}
						loading="lazy"
						decoding="async"
						className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
						style={{ objectPosition: image.position }}
					/>
				:	<div
						aria-hidden
						className="absolute inset-0 grid place-items-center"
						style={{
							background: `radial-gradient(90% 90% at 20% 10%, ${primary}33, transparent 60%), linear-gradient(135deg, ${primary}, ${secondary})`,
						}}>
						<div
							className="absolute inset-0 opacity-40"
							style={{
								backgroundImage:
									"linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
								backgroundSize: "28px 28px",
							}}
						/>
						{Icon && (
							<Icon className="relative h-16 w-16 text-white/90 transition-transform duration-700 ease-out group-hover:scale-110 md:h-20 md:w-20" />
						)}
					</div>
				}
			</div>
			<div className="flex flex-1 flex-col justify-center gap-4 p-7 md:p-9">
				<p className="m-0 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
					{kicker}
				</p>
				{titled && (
					<h4 className="m-0 font-display text-2xl font-semibold tracking-tight text-slate-900">
						{label}
					</h4>
				)}
				<p className="m-0 text-[1.05rem] leading-relaxed text-slate-600">
					{body}
				</p>
				<div className="flex flex-wrap items-center gap-2.5">
					<Link
						to="/contact"
						className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_28px_-12px_rgba(15,23,42,0.5)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_16px_36px_-12px_rgba(15,23,42,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
						style={{
							background: `linear-gradient(120deg, ${primary}, ${secondary})`,
						}}>
						<span className="relative">{ctaLabel}</span>
						<span
							aria-hidden
							className="relative transition-transform duration-300 group-hover/cta:translate-x-1">
							→
						</span>
					</Link>
					<ProductDocumentLinks
						{...documents}
						accent={primary}
					/>
				</div>
			</div>
		</motion.article>
	);
}
