/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Cpu, Leaf } from "lucide-react";
import { useReveal } from "../Creintors/useReveal";
import CrienviroProductCard from "./CrienviroProductCard";
import FilterTabs, { type FilterTab } from "../FilterTabs";
import OfferingOverview from "../OfferingOverview";
import {
	CRI_FILTERS,
	CRI_PRODUCTS,
	CRIENVIRO_THEME,
	type CriGroupId,
	type CriProduct,
	type CriTrack,
} from "../../lib/content/crienviro";

type SubFilter = "all" | CriTrack["id"];

/** Decorative stand-ins for the photographs the enquiry panels do not have yet. */
const TRACK_ICONS: Partial<
	Record<CriTrack["id"], React.ComponentType<{ className?: string }>>
> = {
	"biogas-plant": Leaf,
	"biogas-software": Cpu,
};

const productsIn = (trackId: CriTrack["id"]): CriProduct[] =>
	CRI_PRODUCTS.filter((p) => (p.streams as string[]).includes(trackId));

/** What one block of the list shows: a heading, then cards or a panel. */
type Block = {
	key: string;
	title: string;
	blurb: string;
	products: CriProduct[];
	track?: CriTrack;
};

export default function ProductsSection() {
	const ref = useReveal<HTMLDivElement>();
	const [groupId, setGroupId] = useState<CriGroupId>("water");
	const [sub, setSub] = useState<SubFilter>("all");

	const group = CRI_FILTERS.find((g) => g.id === groupId) ?? CRI_FILTERS[0];
	const isWater = group.id === "water";

	const groupTabs: FilterTab<CriGroupId>[] = CRI_FILTERS.map((g) => ({
		id: g.id,
		label: g.label,
		// Green Energy lists no products yet; a "0" there would read as "none".
		count: g.id === "water" ? CRI_PRODUCTS.length : null,
	}));

	const trackTabs: FilterTab<SubFilter>[] = [
		{
			id: "all",
			label: "All of these",
			count: isWater ? CRI_PRODUCTS.length : null,
		},
		...group.tracks.map((t) => ({
			id: t.id,
			label: t.label,
			count: isWater ? productsIn(t.id).length : null,
		})),
	];

	/*
	 * Water Treatment's "All of these" is one list, not three: a SCADA or a
	 * control panel serves every stream and would otherwise appear three times.
	 * Green Energy's offerings each get their own panel.
	 */
	const blocks: Block[] =
		sub === "all" && isWater ?
			[
				{
					key: group.id,
					title: group.label,
					blurb: group.blurb,
					products: CRI_PRODUCTS,
				},
			]
		:	group.tracks
				.filter((t) => sub === "all" || t.id === sub)
				.map((t) => ({
					key: t.id,
					title: t.label,
					blurb: t.blurb,
					products: t.overview ? [] : productsIn(t.id),
					track: t,
				}));

	/** Picking a group clears a stream that belongs to the old one. */
	const chooseGroup = (id: CriGroupId) => {
		setGroupId(id);
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
								backgroundImage: `linear-gradient(120deg, #ffffff 0%, #d6f0d0 100%)`,
							}}>
							products
						</span>
					</h2>
					<p className="tk-fade mt-6 text-xl leading-relaxed text-white">
						A complete portfolio of treatment trains and environmental
						engineering platforms engineered in-house, executed turnkey, and
						supported with SLA-bound long-term operations.
					</p>
				</div>

				{/* "Filters (in white patches)" — the 19 Sep change list: the
				    C-Automate solutions' chips, then each group's own streams. */}
				<div className="tk-fade mb-12">
					<FilterTabs
						tabs={groupTabs}
						active={groupId}
						onChange={chooseGroup}
						label="Filter products by field"
						layoutId="cri-group-active"
						primary={CRIENVIRO_THEME.primary}
						secondary={CRIENVIRO_THEME.secondary}
					/>

					<AnimatePresence
						initial={false}
						mode="wait">
						<motion.div
							key={groupId}
							initial={{ opacity: 0, y: 6 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -6 }}
							transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
							<div className="mb-2 mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-white/60">
								Narrow it down
							</div>
							<FilterTabs
								variant="pill"
								tabs={trackTabs}
								active={sub}
								onChange={setSub}
								label={`Filter ${group.label} products`}
								layoutId="cri-track-active"
								primary={CRIENVIRO_THEME.primary}
								secondary={CRIENVIRO_THEME.secondary}
							/>
						</motion.div>
					</AnimatePresence>
				</div>

				<AnimatePresence mode="wait">
					<motion.div
						key={`${groupId}-${sub}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
						className="flex flex-col gap-16">
						{blocks.map((block) => (
							<div key={block.key}>
								{/* h2 (section) › h3 (field or stream) › h4 (product). */}
								<div className="mb-8 max-w-3xl">
									<h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
										{block.title}
									</h3>
									<p className="mt-3 text-[1.05rem] leading-relaxed text-white/80">
										{block.blurb}
									</p>
								</div>

								{/*
								 * One card per row, so no `auto-rows-fr`: stretching every card
								 * to the wordiest one's height left a band of empty card under
								 * the shorter ones. Each card is as tall as its own content.
								 */}
								{block.products.length > 0 ?
									<div className="grid gap-8 md:gap-10">
										{block.products.map((p, i) => (
											<CrienviroProductCard
												key={`${groupId}-${sub}-${p.id}`}
												product={p}
												index={i}
											/>
										))}
									</div>
								: block.track ?
									<OfferingOverview
										label={block.track.label}
										kicker="Green energy"
										body={block.track.overview ?? ""}
										icon={TRACK_ICONS[block.track.id]}
										primary={CRIENVIRO_THEME.primary}
										secondary={CRIENVIRO_THEME.secondary}
									/>
								:	null}
							</div>
						))}
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}
