/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	ArrowRight,
	BookDown,
	Check,
	ChevronDown,
	Download,
	FileDown,
} from "lucide-react";
import groupLogo from "../assets/logos/logo.png";
import teknosolLogo from "../assets/logos/tecnoLogo.png";
import cautomateLogo from "../assets/logos/automateLogo.png";
import crienviroLogo from "../assets/logos/envLogo.png";
import { SECONDARY } from "@/lib/theme";
import type { ProductDocument } from "@/lib/content/documents";
import type { ProductDownload } from "@/lib/content/downloads";

export type SubPageSection = { id: string; label: string };

/**
 * The company mark for each route, in the full-colour artwork rather than the
 * white one the header carries: this rail sits on a light surface, where the
 * header's light-ink version would be invisible. Same marks, and the same set
 * the Contact page's division cards already use.
 *
 * Resolved from the route so a page renders <SubPageNav /> exactly as before —
 * there is no logo to pass and none to keep in step.
 */
const ROUTE_LOGOS: { match: string; logo: string; alt: string }[] = [
	{ match: "/teknosol", logo: teknosolLogo, alt: "Creintors Teknosol" },
	{ match: "/cautomate", logo: cautomateLogo, alt: "Creintors C-Automate" },
	{ match: "/crienviro", logo: crienviroLogo, alt: "Creintors Crienviro" },
];

function logoForPath(pathname: string) {
	const p = pathname.toLowerCase();
	return (
		ROUTE_LOGOS.find((r) => p === r.match || p.startsWith(r.match + "/")) ?? {
			logo: groupLogo,
			alt: "Creintors Group of Companies",
		}
	);
}

type Props = {
	sections: SubPageSection[];
	/** Theme accent color for the active item, indicator dot, hairline glow. */
	accent: string;
	/** Pixel offset from top of viewport when smooth-scrolling to a section. */
	scrollOffset?: number;
	/**
	 * Tailwind `top-*` classes for the sticky rail. Defaults to clearing the
	 * pinned header; pages where the header scrolls away (C Automate) pass
	 * `"top-0"` so the rail sits flush against the viewport instead of leaving
	 * an empty band where the header used to be.
	 */
	stickyTopClassName?: string;
	/** Copy on the rail's call to action. */
	ctaLabel?: string;
	/**
	 * Where the CTA goes. A `#section-id` scrolls within the current page (the
	 * Contact page already *is* the destination, so it jumps to the form
	 * instead); anything else is a route.
	 */
	ctaTo?: string;
	/**
	 * Product-wise brochures and catalogues, offered as a dropdown beside the
	 * CTA: one row per product, a download button for each document it has.
	 * Omitted, the rail has no dropdown.
	 */
	downloads?: ProductDownload[];
};

export default function SubPageNav({
	sections,
	accent,
	scrollOffset = 120,
	stickyTopClassName = "top-20 md:top-24",
	ctaLabel = "Let's Connect",
	ctaTo = "/contact",
	downloads,
}: Props) {
	const { pathname } = useLocation();
	const brand = logoForPath(pathname);
	const [active, setActive] = useState<string>(sections[0]?.id ?? "");
	const [open, setOpen] = useState(false);
	const railRef = useRef<HTMLDivElement | null>(null);
	const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
	const menuRef = useRef<HTMLDivElement | null>(null);
	const toggleRef = useRef<HTMLButtonElement | null>(null);
	const panelId = useId();
	const [dlOpen, setDlOpen] = useState(false);
	const [dlMobileOpen, setDlMobileOpen] = useState(false);
	const dlRef = useRef<HTMLDivElement | null>(null);
	const dlToggleRef = useRef<HTMLButtonElement | null>(null);
	const dlPanelId = useId();

	// Close the dropdown on a tap outside it or on Escape.
	useEffect(() => {
		if (!open) return;
		const onPointer = (e: PointerEvent) => {
			if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
		};
		const onKey = (e: KeyboardEvent) => {
			if (e.key !== "Escape") return;
			setOpen(false);
			toggleRef.current?.focus();
		};
		document.addEventListener("pointerdown", onPointer);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("pointerdown", onPointer);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);

	// The downloads dropdown closes the same way: a tap outside, or Escape.
	useEffect(() => {
		if (!dlOpen) return;
		const onPointer = (e: PointerEvent) => {
			if (!dlRef.current?.contains(e.target as Node)) setDlOpen(false);
		};
		const onKey = (e: KeyboardEvent) => {
			if (e.key !== "Escape") return;
			setDlOpen(false);
			dlToggleRef.current?.focus();
		};
		document.addEventListener("pointerdown", onPointer);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("pointerdown", onPointer);
			document.removeEventListener("keydown", onKey);
		};
	}, [dlOpen]);

	useEffect(() => {
		const targets = sections
			.map((s) => document.getElementById(s.id))
			.filter((el): el is HTMLElement => !!el);
		if (!targets.length) return;

		const io = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				if (visible[0]) setActive(visible[0].target.id);
			},
			{
				rootMargin: "-30% 0px -55% 0px",
				threshold: [0, 0.25, 0.5, 0.75, 1],
			},
		);
		targets.forEach((t) => io.observe(t));
		return () => io.disconnect();
	}, [sections]);

	useEffect(() => {
		const rail = railRef.current;
		const el = itemRefs.current[active];
		if (!rail || !el) return;
		const railRect = rail.getBoundingClientRect();
		const elRect = el.getBoundingClientRect();
		const target =
			rail.scrollLeft +
			(elRect.left - railRect.left) -
			railRect.width / 2 +
			elRect.width / 2;
		rail.scrollTo({ left: target, behavior: "smooth" });
	}, [active]);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault();
		const target = document.getElementById(id);
		if (!target) return;
		const top =
			target.getBoundingClientRect().top + window.scrollY - scrollOffset;
		window.scrollTo({ top, behavior: "smooth" });
		setOpen(false);
	};

	const activeLabel =
		sections.find((s) => s.id === active)?.label ?? sections[0]?.label ?? "";

	const ctaIsAnchor = ctaTo.startsWith("#");
	const ctaClassName =
		"group/cta relative shrink-0 items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full px-4 py-2 text-[0.8rem] font-semibold text-white transition-transform duration-300 hover:scale-[1.04] md:gap-2 md:px-5 md:py-2.5 md:text-sm";
	const ctaStyle = {
		background: `linear-gradient(120deg, ${accent} 0%, ${SECONDARY} 100%)`,
		boxShadow: `0 14px 30px -12px ${accent}99, inset 0 0 0 1px rgba(255,255,255,0.18)`,
	};
	const ctaContent = (
		<>
			<span
				aria-hidden
				className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
			/>
			<span className="relative">{ctaLabel}</span>
			<ArrowRight
				aria-hidden
				className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-hover/cta:translate-x-1"
			/>
		</>
	);
	/** `display` decides where it shows: beside the rail from `sm` up, inside
	 *  the dropdown on phones. */
	const renderCta = (display: string) =>
		ctaIsAnchor ?
			<a
				href={ctaTo}
				onClick={(e) => handleClick(e, ctaTo.slice(1))}
				className={`${ctaClassName} ${display}`}
				style={ctaStyle}>
				{ctaContent}
			</a>
		:	<Link
				to={ctaTo}
				onClick={() => setOpen(false)}
				className={`${ctaClassName} ${display}`}
				style={ctaStyle}>
				{ctaContent}
			</Link>;

	return (
		<div className={`sticky z-40 -mx-px ${stickyTopClassName}`}>
			<div
				className="relative border-y bg-white/80 backdrop-blur-xl"
				style={{
					borderColor: "rgba(15,23,42,0.08)",
					boxShadow: "0 6px 22px -16px rgba(15,23,42,0.18)",
				}}>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
					style={{
						background: `linear-gradient(90deg, transparent, ${accent}88, transparent)`,
					}}
				/>

				<div className="container-x">
					<div className="flex items-center gap-3 md:gap-4">
						{/* Which company this page belongs to, in the mark the header shows.
						    Review feedback: read it at a glance. The height is set rather
						    than stretched (`self-stretch` cannot do this: the rail's own
						    height comes from its content, so a replaced element with auto
						    height has nothing to stretch against and snaps to its
						    intrinsic size), and deliberately kept just under the tab row's
						    height — the tabs set the bar, so the mark sits inside it with
						    air above and below rather than butting the hairlines. `max-w`
						    keeps a wide lockup from crowding out the tabs and the CTA. */}
						<img
							src={brand.logo}
							alt={brand.alt}
							draggable={false}
							className="h-10 w-auto max-w-[38vw] shrink-0 select-none object-contain sm:max-w-[150px] md:h-11 xl:h-12 xl:max-w-[180px]"
						/>
						<span
							aria-hidden
							className="hidden h-8 w-px shrink-0 min-[1180px]:block"
							style={{
								background:
									"linear-gradient(180deg, transparent, rgba(15,23,42,0.14), transparent)",
							}}
						/>

						<div className="min-w-0 flex-1">
							{/* Mobile: label-button + floating dropdown. The panel is
							    absolutely positioned under the toggle so opening it never
							    changes the bar's height — when it expanded in-flow, the
							    narrow middle column grew tall, the mark and CTA drifted to
							    its vertical centre and every label wrapped word by word. */}
							<div ref={menuRef} className="relative py-3 min-[1180px]:hidden">
								<button
									ref={toggleRef}
									type="button"
									aria-expanded={open}
									aria-controls={panelId}
									aria-haspopup="true"
									onClick={() => setOpen((o) => !o)}
									className="flex w-full min-w-0 items-center gap-2.5 rounded-full border bg-white px-4 py-2.5 text-[0.9rem] font-semibold text-slate-700 transition-shadow sm:inline-flex sm:w-auto sm:max-w-full"
									style={{
										borderColor: `${accent}55`,
										boxShadow: open ? `0 0 0 3px ${accent}1f` : "none",
									}}>
									<span
										aria-hidden
										className="h-1.5 w-1.5 shrink-0 rounded-full"
										style={{
											background: accent,
											boxShadow: `0 0 8px ${accent}99`,
										}}
									/>
									<span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 sm:inline">
										Section
									</span>
									<span className="min-w-0 flex-1 truncate text-left text-slate-900">
										{activeLabel}
									</span>
									<ChevronDown
										aria-hidden
										className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
									/>
								</button>

								<div
									id={panelId}
									className={`absolute left-0 right-0 top-full z-50 origin-top transition duration-200 ease-out sm:right-auto sm:w-72 ${
										open ?
											"visible translate-y-0 opacity-100"
										:	"pointer-events-none invisible -translate-y-1 opacity-0"
									}`}>
									<div
										className="overflow-hidden rounded-2xl border bg-white p-1.5"
										style={{
											borderColor: "rgba(15,23,42,0.08)",
											boxShadow: `0 22px 44px -18px rgba(15,23,42,0.35), 0 0 0 1px ${accent}14`,
										}}>
										<ul className="flex flex-col">
											{sections.map((s) => {
												const isActive = s.id === active;
												return (
													<li key={s.id}>
														<a
															href={`#${s.id}`}
															aria-current={isActive ? "true" : undefined}
															onClick={(e) => handleClick(e, s.id)}
															className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[0.9rem] font-semibold transition-colors ${
																isActive ? "text-slate-900" : (
																	"text-slate-600 hover:bg-slate-50 hover:text-slate-900"
																)
															}`}
															style={
																isActive ? { background: `${accent}12` } : undefined
															}>
															<span
																aria-hidden
																className="h-1.5 w-1.5 shrink-0 rounded-full"
																style={{
																	background: accent,
																	opacity: isActive ? 1 : 0.3,
																}}
															/>
															<span className="min-w-0 flex-1 truncate">
																{s.label}
															</span>
															{isActive && (
																<Check
																	aria-hidden
																	className="h-4 w-4 shrink-0"
																	style={{ color: accent }}
																/>
															)}
														</a>
													</li>
												);
											})}
										</ul>
										{/* Phones: the downloads, as one collapsible row. */}
										{downloads?.length ?
											<div className="mt-1.5 border-t border-slate-100 pt-1.5 sm:hidden">
												<button
													type="button"
													aria-expanded={dlMobileOpen}
													onClick={() => setDlMobileOpen((o) => !o)}
													className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-[0.9rem] font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900">
													<Download
														aria-hidden
														className="h-4 w-4 shrink-0"
														style={{ color: accent }}
													/>
													<span className="min-w-0 flex-1 truncate">
														Brochures & Catalogues
													</span>
													<ChevronDown
														aria-hidden
														className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-300 ${dlMobileOpen ? "rotate-180" : ""}`}
													/>
												</button>
												{dlMobileOpen && (
													<div className="max-h-64 overflow-y-auto">
														<DownloadRows
															downloads={downloads}
															accent={accent}
														/>
													</div>
												)}
											</div>
										:	null}
										{/* Phones: the bar has no room for the CTA beside the
										    toggle, so it closes out the menu instead. */}
										<div className="mt-1.5 border-t border-slate-100 p-1.5 pt-2.5 sm:hidden">
											{renderCta("flex w-full justify-center py-2.5 text-sm")}
										</div>
									</div>
								</div>
							</div>

							{/* Desktop: horizontal rail */}
							{/* Review feedback: more breathing room between tabs and a slightly
							    bolder face, so the rail reads clearly at a glance.

							    The crossover is a measured width, not a named breakpoint. Six
							    labels this long need roughly 630px; the mark, the CTA and the
							    gutters take about 360 of whatever `container-x` has, which puts
							    the rail's break-even just under 1180px of viewport. `lg` showed
							    it too early and the first and last tabs were clipped mid-word;
							    `xl` showed it too late — a scrollbar alone drops a 1280px window
							    below 1280 and the rail fell back to the dropdown on a screen
							    with room to spare. Below this the collapsible label reads the
							    section instead, which is what the phone layout already does. */}
							<div
								ref={railRef}
								className="hidden gap-1 overflow-x-auto py-3 min-[1180px]:flex xl:gap-2"
								style={{ scrollbarWidth: "none" }}>
								{sections.map((s) => {
									const isActive = s.id === active;
									return (
										<a
											key={s.id}
											ref={(node) => {
												itemRefs.current[s.id] = node;
											}}
											href={`#${s.id}`}
											onClick={(e) => handleClick(e, s.id)}
											className={`group/sn relative shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-[0.8rem] font-semibold tracking-[0.01em] transition-colors duration-300 xl:px-3 xl:py-2.5 xl:text-[0.875rem] ${
												isActive ? "text-slate-900" : (
													"text-slate-600 hover:text-slate-900"
												)
											}`}>
											<span
												aria-hidden
												className={`absolute inset-0 -z-10 rounded-full transition-all duration-500 ease-out ${
													isActive ?
														"scale-100 opacity-100"
													:	"scale-90 opacity-0 group-hover/sn:scale-100 group-hover/sn:opacity-100"
												}`}
												style={{
													background:
														isActive ?
															`linear-gradient(135deg, ${accent}24, ${accent}10)`
														:	"rgba(15,23,42,0.04)",
													boxShadow:
														isActive ?
															`inset 0 0 0 1px ${accent}66, 0 8px 22px -10px ${accent}66`
														:	"inset 0 0 0 1px rgba(15,23,42,0.05)",
												}}
											/>
											<span className="relative inline-flex items-center gap-2">
												{s.label}
											</span>
											<span
												aria-hidden
												className={`absolute inset-x-3 -bottom-0.5 h-px transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
												style={{
													background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
													boxShadow: `0 0 10px ${accent}aa`,
												}}
											/>
										</a>
									);
								})}
							</div>
						</div>

						{/* Review feedback: the rail should end on the ask, not on a
						    utility — "back to top" now floats in the corner instead. Themed
						    to the page's accent so it belongs to this division, not the
						    header. */}
						{/* Product-wise brochures and catalogues, ahead of the ask. Icon only at
						    every width: the container stops growing at 80rem, so a label never
						    finds room beside the rail (six tabs on C-Automate). */}
						{downloads?.length ?
							<div
								ref={dlRef}
								className="relative hidden shrink-0 sm:block">
								<button
									ref={dlToggleRef}
									type="button"
									aria-expanded={dlOpen}
									aria-controls={dlPanelId}
									aria-haspopup="true"
									aria-label="Brochures and catalogues"
									title="Brochures & Catalogues"
									onClick={() => setDlOpen((o) => !o)}
									className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-2 text-[0.8rem] font-semibold text-slate-700 transition-colors hover:text-slate-950 md:px-4 md:py-2.5 md:text-sm"
									style={{
										borderColor: `${accent}55`,
										boxShadow: dlOpen ? `0 0 0 3px ${accent}1f` : "none",
									}}>
									<Download
										aria-hidden
										className="h-4 w-4 shrink-0"
										style={{ color: accent }}
									/>
									Catalogues
									{/* <ChevronDown
															
										aria-hidden
										className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-300 ${dlOpen ? "rotate-180" : ""}`}
									/> */}
								</button>
								<div
									id={dlPanelId}
									className={`absolute right-0 top-full z-50 mt-2 w-[26rem] max-w-[calc(100vw-2rem)] origin-top-right transition duration-200 ease-out ${
										dlOpen ?
											"visible translate-y-0 opacity-100"
										:	"pointer-events-none invisible -translate-y-1 opacity-0"
									}`}>
									<div
										className="overflow-hidden rounded-2xl border bg-white p-1.5"
										style={{
											borderColor: "rgba(15,23,42,0.08)",
											boxShadow: `0 22px 44px -18px rgba(15,23,42,0.35), 0 0 0 1px ${accent}14`,
										}}>
										<p className="m-0 px-3.5 pb-1.5 pt-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
											Brochures & Catalogues
										</p>
										<div className="max-h-[min(24rem,60vh)] overflow-y-auto">
											<DownloadRows
												downloads={downloads}
												accent={accent}
											/>
										</div>
									</div>
								</div>
							</div>
						:	null}
						{renderCta("hidden sm:inline-flex")}
					</div>
				</div>
			</div>
		</div>
	);
}

/**
 * One row per product: its name, then a download button for each document it
 * has (see content/downloads.ts). Wraps on a narrow panel.
 */
function DownloadRows({
	downloads,
	accent,
}: {
	downloads: ProductDownload[];
	accent: string;
}) {
	return (
		<ul className="m-0 flex list-none flex-col p-0">
			{downloads.map((d) => (
				<li
					key={d.product}
					className="flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-slate-50">
					<span className="min-w-0 flex-1 basis-32 text-[0.85rem] font-semibold leading-snug text-slate-800">
						{d.product}
					</span>
					<span className="flex shrink-0 gap-1.5">
						{d.brochure && (
							<DocPill
								doc={d.brochure}
								kind="Brochure"
								accent={accent}
							/>
						)}
						{d.catalogue && (
							<DocPill
								doc={d.catalogue}
								kind="Catalogue"
								accent={accent}
							/>
						)}
					</span>
				</li>
			))}
		</ul>
	);
}

function DocPill({
	doc,
	kind,
	accent,
}: {
	doc: ProductDocument;
	kind: "Brochure" | "Catalogue";
	accent: string;
}) {
	const Icon = kind === "Brochure" ? FileDown : BookDown;
	// `download` saves it under its own name; where a browser declines (iOS
	// opens PDFs in its viewer), the new tab keeps the visitor on the page.
	return (
		<a
			href={doc.href}
			download={doc.fileName}
			target="_blank"
			rel="noopener"
			aria-label={`Download the ${doc.title} (PDF)`}
			title={`${doc.title} (PDF)`}
			className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold text-slate-700 transition-colors hover:text-slate-950 focus:outline-none focus-visible:ring-2"
			style={{ borderColor: `${accent}55`, background: `${accent}0d` }}>
			<Icon
				aria-hidden
				className="h-3.5 w-3.5 shrink-0"
				style={{ color: accent }}
			/>
			{kind}
		</a>
	);
}
