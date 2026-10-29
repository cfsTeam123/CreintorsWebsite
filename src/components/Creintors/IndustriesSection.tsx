/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Briefcase, Cog, Layers, Satellite } from "lucide-react";
import { useReveal } from "./useReveal";
import TeknosolProductCard from "./TeknosolProductCard";
import FilterTabs, { type FilterTab } from "../FilterTabs";
import OfferingOverview from "../OfferingOverview";
import {
	PRODUCTS,
	TEK_LAYERS,
	TEKNOSOL_THEME,
	type TekLayerId,
	type TekTrack,
	type TekTrackId,
} from "../../lib/content/Creintors";

type SubFilter = "all" | TekTrackId;

/** Decorative stand-ins for the photographs the enquiry panels do not have yet. */
const TRACK_ICONS: Partial<
	Record<TekTrackId, React.ComponentType<{ className?: string }>>
> = {
	"foaming-line": Layers,
	honing: Cog,
	"satellite-docket": Satellite,
	"business-excellence": Briefcase,
};

const productsOf = (track: TekTrack) =>
	track.family ? PRODUCTS.filter((p) => p.family === track.family) : [];

/** A count for a chip, or none where "0" would read as "we have nothing here". */
const countOf = (tracks: TekTrack[]) => {
	const n = tracks.reduce((sum, t) => sum + productsOf(t).length, 0);
	return n > 0 ? n : null;
};

/**
 * Products in the three layers of the 19 Sep change list: what is ready to
 * scale, what is in the making, and the challenges Teknosol is looking for.
 * The layers are the first row of chips — the C-Automate solutions' white
 * patches — and each layer's own tracks are the second.
 */
export default function IndustriesSection() {
	const ref = useReveal<HTMLDivElement>();
	const [layerId, setLayerId] = useState<TekLayerId>("ready");
	const [sub, setSub] = useState<SubFilter>("all");

	const layer = TEK_LAYERS.find((l) => l.id === layerId) ?? TEK_LAYERS[0];

	const layerTabs = useMemo(
		(): FilterTab<TekLayerId>[] =>
			TEK_LAYERS.map((l) => ({
				id: l.id,
				label: l.label,
				count: countOf(l.tracks),
			})),
		[],
	);

	const trackTabs: FilterTab<SubFilter>[] =
		layer.tracks.length > 1 ?
			[
				{ id: "all", label: "All of these", count: countOf(layer.tracks) },
				...layer.tracks.map((t) => ({
					id: t.id,
					label: t.label,
					count: countOf([t]),
				})),
			]
		:	[];

	const shown =
		sub === "all" ? layer.tracks : layer.tracks.filter((t) => t.id === sub);

	/** Picking a layer clears a track that belongs to the old one. */
	const chooseLayer = (id: TekLayerId) => {
		setLayerId(id);
		setSub("all");
	};

	return (
		<section className="relative py-10">
			<div
				ref={ref}
				className="container-x">
				<div className="mb-12 max-w-3xl">
					<h2 className="tk-fade section-title">
						<span className="text-white">Our </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, #ffffff 0%, #c8ecfa 100%)`,
							}}>
							products
						</span>
					</h2>
					<p className="tk-fade mt-6 text-xl leading-relaxed text-white">
						Test rigs and validation platforms for the valve industry, and
						precision hydraulics, drives and tooling for steel plants -
						engineered in-house and commissioned on your floor.
					</p>
				</div>

				<div className="tk-fade mb-12">
					<FilterTabs
						tabs={layerTabs}
						active={layerId}
						onChange={chooseLayer}
						label="Filter products by layer"
						layoutId="tek-layer-active"
						primary={TEKNOSOL_THEME.primary}
						secondary={TEKNOSOL_THEME.secondary}
					/>

					<AnimatePresence initial={false}>
						{trackTabs.length > 0 && (
							<motion.div
								key={layerId}
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
								className="overflow-hidden">
								<div className="mb-2 mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-white/60">
									Narrow it down
								</div>
								<FilterTabs
									variant="pill"
									tabs={trackTabs}
									active={sub}
									onChange={setSub}
									label={`Filter ${layer.label} by track`}
									layoutId="tek-track-active"
									primary={TEKNOSOL_THEME.primary}
									secondary={TEKNOSOL_THEME.secondary}
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				<AnimatePresence mode="wait">
					<motion.div
						key={`${layerId}-${sub}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
						className="flex flex-col gap-16">
						{shown.map((track) => {
							const products = productsOf(track);
							return (
								<div key={track.id}>
									{/* h2 (section) › h3 (track) › h4 (product). */}
									<div className="mb-8 max-w-3xl">
										<h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
											{track.label}
										</h3>
										{track.blurb && (
											<p className="mt-3 text-[1.05rem] leading-relaxed text-white/80">
												{track.blurb}
											</p>
										)}
									</div>

									{/*
									 * One card per row, so no `auto-rows-fr`: stretching every card
									 * to the wordiest one's height left a band of empty card under
									 * the shorter ones. Each card is as tall as its own content.
									 */}
									{products.length > 0 ?
										<div className="grid gap-8 md:gap-10">
											{products.map((p, i) => (
												<TeknosolProductCard
													/*
													 * Keyed by the filter too: switching tabs swaps which
													 * product sits at each slot, and without this a card
													 * would keep the previous one's state and skip its reveal.
													 */
													key={`${layerId}-${sub}-${p.id}`}
													product={p}
													index={i}
												/>
											))}
										</div>
									:	<OfferingOverview
											label={track.label}
											kicker={layer.kicker}
											body={track.overview ?? ""}
											icon={TRACK_ICONS[track.id]}
											primary={TEKNOSOL_THEME.primary}
											secondary={TEKNOSOL_THEME.secondary}
										/>
									}
								</div>
							);
						})}
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}
