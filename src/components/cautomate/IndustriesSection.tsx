/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReveal } from "../Creintors/useReveal";
import CautomateProductCard from "./CautomateProductCard";
import FilterTabs, { type FilterTab } from "../FilterTabs";
import OfferingOverview from "../OfferingOverview";
import {
	CAU_CATEGORIES,
	CAU_PRODUCTS,
	CAUTOMATE_THEME,
	type CauCategoryId,
	type CauProduct,
} from "../../lib/content/cautomate";
import type { ProductDocument } from "../../lib/content/documents";

type FilterId = "all" | CauCategoryId;
/** A sub-group name, or "all" for every sub-group in the chosen category. */
type SubFilterId = "all" | string;

/**
 * Does this product answer the search box?
 *
 * Every word has to appear somewhere in the product's own text — title, tag,
 * blurbs and the industries it is used in — so "asrs coil" narrows to the coil
 * store rather than returning everything with "ASRS" in the name.
 */
function matches(product: CauProduct, query: string) {
	if (!query) return true;
	const haystack = [
		product.title,
		product.subtitle,
		product.tag,
		product.description,
		product.differentiator,
		product.bestFor,
		product.group,
		...product.useCases,
	]
		.filter(Boolean)
		.join(" ")
		.toLowerCase();
	return query.split(/\s+/).every((word) => haystack.includes(word));
}

type Category = (typeof CAU_CATEGORIES)[number];

/**
 * A category with no products listed yet (Plant Automation, Car Parking) has
 * only its name and blurb to search, and shows an enquiry panel rather than
 * cards.
 */
function isOverviewOnly(category: Category) {
	return (
		!!category.overview &&
		!CAU_PRODUCTS.some((p) => p.category === category.id)
	);
}

function categoryMatches(category: Category, query: string) {
	if (!query) return true;
	const haystack = `${category.label} ${category.blurb}`.toLowerCase();
	return query.split(/\s+/).every((word) => haystack.includes(word));
}

/**
 * Products, grouped so a visitor can tell the categories apart.
 *
 * Review feedback asked for the page to follow the primary product focus —
 * ASRS Solutions, then Vertical Storage Systems, then Tool Management Systems —
 * and for each category to make clear what its products are, what is different
 * about each one and where each applies. So the grid is no longer one flat run
 * of cards: every category gets its own headed block with a one-line
 * explanation of how its products differ, and categories that need it (ASRS)
 * split further into sub-groups.
 */
type Block = {
	key: string;
	/** Category heading — only rendered when more than one category is shown. */
	category?: string;
	blurb?: string;
	/** Sub-group heading inside a category, e.g. "ASRS configurations". */
	group?: string;
	products: CauProduct[];
	/** Set for a category with no products yet: its enquiry panel. */
	overview?: {
		label: string;
		image: string;
		alt: string;
		catalogue?: ProductDocument;
	};
};

function buildBlocks(
	active: FilterId,
	sub: SubFilterId,
	query: string,
): Block[] {
	const categories =
		active === "all" ?
			CAU_CATEGORIES
		:	CAU_CATEGORIES.filter((c) => c.id === active);

	const blocks: Block[] = [];
	for (const category of categories) {
		if (category.overview && isOverviewOnly(category)) {
			if (sub === "all" && categoryMatches(category, query))
				blocks.push({
					key: category.id,
					category: category.label,
					blurb: category.blurb,
					products: [],
					overview: { label: category.label, ...category.overview },
				});
			continue;
		}

		const inCategory = CAU_PRODUCTS.filter(
			(p) =>
				p.category === category.id &&
				(sub === "all" || p.group === sub) &&
				matches(p, query),
		);
		if (!inCategory.length) continue;

		// Gather by sub-group, in the order the groups are first declared. Not by
		// consecutive runs: the tool cabinets are declared either side of the
		// insert machines, and a run-based grouping would head two separate
		// blocks "Tool cabinets" rather than filling one.
		const groups: { name?: string; products: CauProduct[] }[] = [];
		for (const product of inCategory) {
			const existing = groups.find((g) => g.name === product.group);
			if (existing) existing.products.push(product);
			else groups.push({ name: product.group, products: [product] });
		}

		groups.forEach((g, i) => {
			blocks.push({
				key: `${category.id}-${g.name ?? i}`,
				category: i === 0 ? category.label : undefined,
				blurb: i === 0 ? category.blurb : undefined,
				group: g.name,
				products: g.products,
			});
		});
	}
	return blocks;
}

export default function IndustriesSection() {
	const ref = useReveal<HTMLDivElement>();
	const [active, setActive] = useState<FilterId>("all");
	const [sub, setSub] = useState<SubFilterId>("all");
	const [query, setQuery] = useState("");

	const trimmed = query.trim().toLowerCase();

	/**
	 * Counts are taken after the search, not before, so a chip never promises
	 * products the search has already ruled out.
	 */
	const filters = useMemo(
		(): FilterTab<FilterId>[] => [
			{
				id: "all",
				label: "All",
				count: CAU_PRODUCTS.filter((p) => matches(p, trimmed)).length,
			},
			...CAU_CATEGORIES.map((c): FilterTab<FilterId> => {
				if (isOverviewOnly(c))
					return {
						id: c.id,
						label: c.label,
						// No count: "0" beside a range the group offers would read
						// as "we have nothing here". The chip still greys out when
						// a search rules the category out.
						count: null,
						disabled: !categoryMatches(c, trimmed),
					};
				// Nothing left in it under the current search — say so rather
				// than let it be clicked into an empty list.
				const count = CAU_PRODUCTS.filter(
					(p) => p.category === c.id && matches(p, trimmed),
				).length;
				return { id: c.id, label: c.label, count, disabled: count === 0 };
			}),
		],
		[trimmed],
	);

	/**
	 * The chosen category's own sub-groups, in the order the products declare
	 * them. Every category carries them except Software Solutions, which is a
	 * single product — and there the row stays hidden rather than offering a
	 * control that does nothing.
	 */
	const subFilters = useMemo(() => {
		if (active === "all") return [];
		const groups: { id: string; count: number }[] = [];
		for (const p of CAU_PRODUCTS) {
			if (p.category !== active || !p.group || !matches(p, trimmed)) continue;
			const existing = groups.find((g) => g.id === p.group);
			if (existing) existing.count += 1;
			else groups.push({ id: p.group, count: 1 });
		}
		return groups.length > 1 ? groups : [];
	}, [active, trimmed]);
	/**
	 * A search can empty the sub-group that was chosen before it was typed.
	 * Falling back to "all" here rather than in an effect keeps the chosen
	 * sub-group if the search is cleared again.
	 */
	const effectiveSub =
		sub !== "all" && !subFilters.some((g) => g.id === sub) ? "all" : sub;

	const blocks = useMemo(
		() => buildBlocks(active, effectiveSub, trimmed),
		[active, effectiveSub, trimmed],
	);
	const total = blocks.reduce((n, b) => n + b.products.length, 0);
	const filtering =
		active !== "all" || effectiveSub !== "all" || trimmed !== "";

	/** Picking a category clears a sub-group that belongs to the old one. */
	const chooseCategory = (id: FilterId) => {
		setActive(id);
		setSub("all");
	};

	const clearAll = () => {
		setActive("all");
		setSub("all");
		setQuery("");
	};

	return (
		<section className="relative py-10">
			<div
				ref={ref}
				className="container-x">
				{/* "Our Solutions in place of Our Products", and the lead-in cut to
				    its last sentence, reworded as the 19 Sep change list gives it. */}
				<div className="mb-12 max-w-3xl">
					<h2 className="tk-fade section-title">
						<span className="text-white">Our </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, #ffffff 0%, #a8a8d4 100%)`,
							}}>
							Solutions
						</span>
					</h2>
					<p className="tk-fade mt-6 text-xl leading-relaxed text-white">
						Every machine and every line of software is developed in-house as a
						solution delivering productivity, accountability and traceability,
						thus ensuring business excellence.
					</p>
				</div>

				<div className="tk-fade mb-12">
					<div className="mb-3 flex flex-wrap items-center justify-between gap-4">
						{/* "Click and scroll" in place of "Filter by category" (19 Sep):
						    pick a category, then scroll its solutions. */}
						<div className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/60">
							Click and scroll
						</div>

						{/* Find a solution by name, tag or industry — the way through
						    when the category is not what a visitor knows. */}
						<div className="relative w-full sm:w-72">
							<label
								className="sr-only"
								htmlFor="cau-product-search">
								Find a solution
							</label>
							<svg
								aria-hidden
								viewBox="0 0 20 20"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.8"
								strokeLinecap="round"
								className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50">
								<circle
									cx="9"
									cy="9"
									r="6"
								/>
								<path d="M13.5 13.5 17 17" />
							</svg>
							<input
								id="cau-product-search"
								type="search"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Find a solution…"
								className="w-full rounded-2xl border border-white/20 bg-white/10 py-3 pl-10 pr-10 text-sm text-white placeholder:text-white/45 backdrop-blur-sm transition-colors duration-300 focus:border-white/40 focus:bg-white/15 focus:outline-none"
							/>
							{query && (
								<button
									type="button"
									onClick={() => setQuery("")}
									aria-label="Clear search"
									className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/60 transition-colors duration-200 hover:text-white">
									<svg
										aria-hidden
										viewBox="0 0 16 16"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.8"
										strokeLinecap="round">
										<path d="M4 4l8 8M12 4l-8 8" />
									</svg>
								</button>
							)}
						</div>
					</div>
					<FilterTabs
						tabs={filters}
						active={active}
						onChange={chooseCategory}
						label="Filter solutions by category"
						layoutId="cau-filter-active"
						primary={CAUTOMATE_THEME.primary}
						secondary={CAUTOMATE_THEME.secondary}
					/>

					{/*
					 * Second level, for a category deep enough to have one. ASRS is
					 * fifteen products in two quite different cuts — the machine
					 * configurations, and the load each build is shaped around — and
					 * choosing between those is the question a visitor actually has.
					 */}
					<AnimatePresence initial={false}>
						{subFilters.length > 0 && (
							<motion.div
								key={active}
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
								className="overflow-hidden">
								<div className="mb-2 mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">
									Narrow it down
								</div>
								<FilterTabs
									variant="pill"
									tabs={[
										{
											id: "all",
											label: "All of these",
											count: subFilters.reduce((n, g) => n + g.count, 0),
										},
										...subFilters.map((g) => ({
											id: g.id,
											label: g.id,
											count: g.count,
										})),
									]}
									active={effectiveSub}
									onChange={setSub}
									label="Filter solutions by sub-category"
									layoutId="cau-subfilter-active"
									primary={CAUTOMATE_THEME.primary}
									secondary={CAUTOMATE_THEME.secondary}
								/>
							</motion.div>
						)}
					</AnimatePresence>

					{/* What the filters left, and one click back to everything. */}
					{filtering && (
						<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/60">
							{/* Not for a category whose products are still to be listed,
							    where it would only ever say "0 of" everything. */}
							{blocks.some((b) => !b.overview) && (
								<span>
									Showing{" "}
									<span className="font-semibold text-white">{total}</span> of{" "}
									{CAU_PRODUCTS.length} solutions
								</span>
							)}
							<button
								type="button"
								onClick={clearAll}
								className="rounded-full border border-white/25 px-3 py-1 text-[0.78rem] font-semibold text-white/75 transition-colors duration-300 hover:border-white/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
								Clear filters
							</button>
						</div>
					)}
				</div>

				<AnimatePresence mode="wait">
					<motion.div
						key={`${active}-${effectiveSub}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
						className="flex flex-col gap-16">
						{blocks.map((block) => (
							<div key={block.key}>
								{block.category && (
									<div className="mb-8 max-w-3xl">
										<h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
											{block.category}
										</h3>
										{block.blurb && (
											<p className="mt-3 text-[1.05rem] leading-relaxed text-white/75">
												{block.blurb}
											</p>
										)}
									</div>
								)}

								{/* A divider label rather than a heading, so the outline stays
								    h2 (section) › h3 (category) › h4 (product). */}
								{block.group && (
									<div className="mb-6 flex items-center gap-3">
										<span
											aria-hidden
											className="h-px w-8"
											style={{ background: "rgba(255,255,255,0.5)" }}
										/>
										<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
											{block.group}
										</p>
									</div>
								)}

								{/*
								 * Every card is the same cell in the same grid — no card gets a
								 * wider or taller treatment. SFL ASRS keeps its prominence by
								 * being first in its group and by carrying the "Flagship ASRS"
								 * badge, not by being a different size.
								 *
								 * One card per row, so no `auto-rows-fr`.
								 *
								 * Equal-height rows earned their keep when the cards sat two to a row.
								 * Stacked, all it did was stretch every card to the height of the
								 * wordiest one in the group, which left a band of empty card under the
								 * shorter ones and pushed them past the bottom of the screen. Each card
								 * is now as tall as its own content.
								 */}
								{block.overview ?
									<OfferingOverview
										label={block.overview.label}
										kicker="Solution range"
										body={`The full ${block.overview.label.toLowerCase()} range is being added here. Tell us about your site and requirement, and our team will take you through the options that fit.`}
										image={{
											src: block.overview.image,
											alt: block.overview.alt,
										}}
										documents={{ catalogue: block.overview.catalogue }}
										primary={CAUTOMATE_THEME.primary}
										secondary={CAUTOMATE_THEME.secondary}
									/>
								:	<div className="grid gap-8 md:gap-10">
										{block.products.map((p, i) => (
											<CautomateProductCard
												key={p.id}
												product={p}
												index={i}
											/>
										))}
									</div>
								}
							</div>
						))}
					</motion.div>
				</AnimatePresence>

				{blocks.length === 0 && (
					<div className="mt-8 rounded-2xl border border-dashed border-white/30 p-10 text-center text-sm text-white/60">
						{trimmed ?
							<>
								Nothing matches “{query.trim()}”.{" "}
								<button
									type="button"
									onClick={clearAll}
									className="font-semibold text-white underline underline-offset-4">
									Clear filters
								</button>
							</>
						:	"No solutions in this category yet."}
					</div>
				)}
			</div>
		</section>
	);
}
