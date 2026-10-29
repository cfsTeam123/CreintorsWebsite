/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Fragment, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PRIMARY, SECONDARY } from "../lib/theme";
import {
	ABOUT,
	ABOUT_HUB,
	EXPLORE_HUB,
	MORE,
	NAV,
	isMorePath,
} from "../lib/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import creintorsLogo from "../assets/logos/logo.png";

const ROUTE_LOGO: Record<string, string> = [...NAV, ...MORE].reduce(
	(acc, n) => {
		if (n.logo) acc[n.to.toLowerCase()] = n.logo;
		return acc;
	},
	{} as Record<string, string>,
);

const ROUTE_THEME: Record<string, string> = [...NAV, ...MORE].reduce(
	(acc, n) => {
		if (n.theme) acc[n.to.toLowerCase()] = n.theme;
		return acc;
	},
	{} as Record<string, string>,
);

const ROUTE_OPACITY: Record<string, string> = [
	...NAV,
	...MORE,
	...ABOUT,
].reduce(
	(acc, n) => {
		if (typeof n.opacity === "string") acc[n.to.toLowerCase()] = n.opacity;
		return acc;
	},
	{} as Record<string, string>,
);

const DEFAULT_THEME = "#00A0E3";
const DEFAULT_OPACITY = "0";

/**
 * Routes where the header is *not* pinned to the viewport.
 *
 * All three division pages. The fixed header eats screen space that the large
 * product imagery needs, and it stacks on top of each page's own sticky section
 * rail — two bars competing for the same band. Letting it scroll away gives a
 * better viewing experience and leaves the section rail as the single pinned
 * navigation. The header stays in the same place at the top of the page
 * (absolute, still overlaying the hero) — it simply scrolls out of the way
 * instead of following the viewport.
 */
const NON_STICKY_PATHS = ["/cautomate", "/teknosol", "/crienviro"];

/**
 * One link in the mobile drawer.
 *
 * `bold` marks the three group companies, which are set heavier than the
 * section links around them (review feedback). `forceActive` keeps a link lit
 * on routes the router would not call active — Explore's pages sit at
 * /gallery, /policies and so on, outside /explore itself.
 */
function DrawerLink({
	to,
	label,
	end,
	bold = false,
	forceActive = false,
	open,
	index,
}: {
	to: string;
	label: string;
	end?: boolean;
	bold?: boolean;
	forceActive?: boolean;
	open: boolean;
	index: number;
}) {
	return (
		<NavLink
			to={to}
			end={end}
			className={({ isActive }) =>
				`group/m relative overflow-hidden rounded-xl px-4 py-3 text-sm transition-all duration-300 ${
					bold ? "font-bold" : "font-medium"
				} ${
					isActive || forceActive || bold ? "text-slate-900" : (
						"text-slate-600 hover:text-slate-900"
					)
				}`
			}
			style={{
				transitionDelay: open ? `${index * 50}ms` : "0ms",
				transform: open ? "translateY(0)" : "translateY(8px)",
				opacity: open ? 1 : 0,
			}}>
			{({ isActive }) => {
				const on = isActive || forceActive;
				return (
					<>
						<span
							aria-hidden
							className="absolute inset-0 -z-10 rounded-xl transition-all duration-500"
							style={{
								background:
									on ?
										`linear-gradient(135deg, ${PRIMARY}1f, ${SECONDARY}1f)`
									:	"transparent",
								boxShadow: on ? `inset 0 0 0 1px ${PRIMARY}55` : "none",
							}}
						/>
						<span className="relative inline-flex items-center gap-2">
							<span
								aria-hidden
								className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${
									on ? "opacity-100" : "opacity-0 group-hover/m:opacity-60"
								}`}
								style={{
									background: PRIMARY,
									boxShadow: `0 0 8px ${PRIMARY}66`,
								}}
							/>
							{label}
						</span>
					</>
				);
			}}
		</NavLink>
	);
}

/**
 * One link in the desktop header.
 *
 * `forceActive` does the same job it does in the drawer: keep the highlight on
 * while the visitor is on one of the section's pages.
 */
function HeaderLink({
	to,
	label,
	end,
	light,
	forceActive = false,
}: {
	to: string;
	label: string;
	end?: boolean;
	light: boolean;
	forceActive?: boolean;
}) {
	return (
		<NavLink
			to={to}
			end={end}
			className={({ isActive }) =>
				`group/link relative whitespace-nowrap rounded-full px-2 py-2 text-xs font-medium transition-colors duration-300 xl:px-2.5 xl:text-[0.8125rem] 2xl:px-3 2xl:text-sm ${
					light ?
						isActive || forceActive ? "text-slate-900"
						:	"text-slate-600 hover:text-slate-900"
					:	"text-white"
				}`
			}>
			{({ isActive }) => {
				const on = isActive || forceActive;
				return (
					<>
						<span
							aria-hidden
							className={`absolute inset-0 -z-10 rounded-full transition-all duration-500 ease-out ${
								on ?
									"scale-100 opacity-100"
								:	"scale-90 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100"
							}`}
							style={{
								background:
									on ?
										`linear-gradient(135deg, ${PRIMARY}33, ${SECONDARY}33)`
									: light ? "rgba(15,23,42,0.05)"
									: "rgba(255,255,255,0.10)",
								boxShadow:
									on ?
										`inset 0 0 0 1px ${PRIMARY}66, 0 8px 24px -10px ${PRIMARY}55`
									: light ? "inset 0 0 0 1px rgba(15,23,42,0.06)"
									: "inset 0 0 0 1px rgba(255,255,255,0.16)",
							}}
						/>
						<span className="relative">{label}</span>
						<span
							aria-hidden
							className={`absolute inset-x-3 -bottom-0.5 h-px transition-all duration-500 ${
								on ? "opacity-100" : "opacity-0"
							}`}
							style={{
								background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
								boxShadow: `0 0 8px ${PRIMARY}66`,
							}}
						/>
					</>
				);
			}}
		</NavLink>
	);
}

export default function Navbar() {
	/**
	 * Layout flag: the bar is full-width rather than the floating rounded pill
	 * the scrolled treatment used.
	 */
	const scrolled = false;
	/**
	 * Palette flag. The header reads light — ink type and the full-colour marks
	 * over a white wash — so it sits on the home hero the way the reference
	 * does. Every colour decision below already had a light branch written for
	 * the scrolled state; this points them at it without pulling in that
	 * state's layout.
	 */
	const light = true;
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();

	const isPinned = !NON_STICKY_PATHS.includes(pathname.toLowerCase());
	const isMoreActive = isMorePath(pathname.toLowerCase());
	const activeLogo = ROUTE_LOGO[pathname.toLowerCase()] ?? creintorsLogo;
	const activeTheme = ROUTE_THEME[pathname.toLowerCase()] ?? DEFAULT_THEME;
	const activeOpacity =
		ROUTE_OPACITY[pathname.toLowerCase()] ?? DEFAULT_OPACITY;
	const parsedOpacity = parseInt(activeOpacity, 10);
	const activeOpacityValue =
		Math.max(
			0,
			Math.min(100, Number.isNaN(parsedOpacity) ? 60 : parsedOpacity),
		) / 100;

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<motion.header
			initial={{ y: -28, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
			className={`${
				isPinned ? "fixed" : "absolute"
			} inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
				scrolled ? "pt-3" : "pt-0"
			}`}>
			{/*
			 * The bar is an opaque white plate with a crisp bottom edge — no fade.
			 *
			 * It used to ramp out below itself: the container overhung the header
			 * by 24px, four backdrop-blur layers were each masked to fade at a
			 * different depth, and the wash carried a mask of its own on top. Over
			 * a light page that read as a soft edge, but over a dark hero (the
			 * division pages) the lower band ended up blurring dark video with no
			 * white left over it — a grey smear under the bar. One flat plate that
			 * stops where the header stops has no such band to get wrong.
			 */}
			<div
				aria-hidden
				className={`pointer-events-none absolute inset-x-0 top-0 h-full -z-10 transition-opacity duration-700 ${
					scrolled ? "opacity-0" : "opacity-100"
				}`}>
				{/* One even blur, so whatever scrolls under the bar is softened
				    rather than sharp against it. */}
				<div
					className="absolute inset-0"
					style={{
						backdropFilter: "blur(18px) saturate(1.2)",
						WebkitBackdropFilter: "blur(18px) saturate(1.2)",
					}}
				/>

				{/* White plate, with a breath of the route's accent across the top so
				    it is not a plain grey slab, and a hairline where it ends. */}
				<div
					className="absolute inset-0"
					style={{
						background: `
							radial-gradient(80% 110% at 50% 0%, ${activeTheme}12, transparent 72%),
							radial-gradient(50% 90% at 100% 0%, ${activeTheme}0d, transparent 68%),
							linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.95) 100%)
						`,
						boxShadow: "inset 0 -1px 0 rgba(15,23,42,0.09)",
						transition: "background 700ms ease-out",
					}}
				/>
			</div>

			<div
				aria-hidden
				className={`pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-700 ${
					scrolled ? "opacity-0" : "opacity-100"
				}`}
				style={{
					background: `linear-gradient(90deg, transparent, ${activeTheme}88, ${SECONDARY}55, transparent)`,
				}}
			/>

			<div
				className={`relative mx-auto transition-all duration-700 ease-out ${
					scrolled ? "max-w-[86rem] px-4 md:px-5" : "max-w-[92rem] px-6 2xl:px-10"
				}`}>
				<div
					className={`relative flex items-center justify-between transition-all duration-700 ease-out ${
						scrolled ?
							"rounded-full border border-slate-200 bg-white/85 px-4 py-1.5 backdrop-blur-2xl shadow-[0_18px_50px_-22px_rgba(15,23,42,0.18)] md:px-5"
						:	"rounded-none border-0 bg-transparent px-0 py-2.5"
					}`}>
					<div
						aria-hidden
						className={`pointer-events-none absolute inset-x-10 top-0 h-px transition-opacity duration-700 ${
							scrolled ? "opacity-100" : "opacity-0"
						}`}
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}99, ${SECONDARY}99, transparent)`,
						}}
					/>

					<Link
						to="/"
						className="group flex shrink-0 items-center">
						{/* One logo frame for every route — no per-route plate, box or
						    backdrop behind the mark. */}
						<span
							className={`relative block h-20 w-48 rounded-xl px-2 py-1 transition-transform duration-500 group-hover:scale-[1.03] lg:h-[4.5rem] lg:w-44 xl:h-20 xl:w-48 ${
								activeOpacityValue > 0 ? "backdrop-blur-sm" : ""
							}`}
							style={
								activeOpacityValue > 0 ?
									{
										backgroundColor: `rgba(255, 255, 255, ${activeOpacityValue})`,
									}
								:	undefined
							}>
							<img
								src={activeLogo}
								alt="Creintors"
								className="relative z-10 h-full w-full object-contain object-center"
							/>
							<span
								aria-hidden
								className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-50"
								style={{ background: `${PRIMARY}40` }}
							/>
						</span>
					</Link>

					{/* The links and the tagline stack in one column, so the tagline sits
					    centred directly under the links. The pair is shorter than the
					    logo, so the header's height — and every hero below it — is
					    unchanged. Desktop only; the mobile drawer carries the same line. */}
					<div className="hidden min-w-0 flex-col items-center lg:flex">
					<nav className="col-start-1 flex min-w-0 items-center gap-0 xl:gap-0.5 2xl:gap-1">
						{NAV.map((n, idx) => (
							<Fragment key={n.to}>
								<HeaderLink
									to={n.to}
									label={n.label}
									end={n.to === "/"}
									light={light}
								/>

								{/* About Us sits right after Home. It is a plain link to
								    the hub — the section's own links live on that page. */}
								{idx === 0 && (
									<HeaderLink
										to={ABOUT_HUB}
										label="About Us"
										light={light}
									/>
								)}
							</Fragment>
						))}

						{/* Explore, likewise, is a link to its hub rather than a menu. */}
						<HeaderLink
							to={EXPLORE_HUB}
							label="Explore"
							forceActive={isMoreActive}
							light={light}
						/>
					</nav>

				<p className="pointer-events-none mt-6 whitespace-nowrap text-center text-base italic leading-normal tracking-wide text-slate-500 xl:text-lg">
					…building and sustaining{" "}
					<strong className="font-semibold not-italic" style={{ color: PRIMARY }}>
						3CPF
					</strong>{" "}
					(
					<strong className="font-semibold" style={{ color: PRIMARY }}>C</strong>reintors{" "}
					<strong className="font-semibold" style={{ color: PRIMARY }}>C</strong>ognitive{" "}
					<strong className="font-semibold" style={{ color: PRIMARY }}>C</strong>yber{" "}
					<strong className="font-semibold" style={{ color: PRIMARY }}>P</strong>hysical{" "}
					<strong className="font-semibold" style={{ color: PRIMARY }}>F</strong>actory){" "}
					<strong className="font-semibold not-italic" style={{ color: PRIMARY }}>
						for you
					</strong>
				</p>
					</div>

					<div className="col-start-3 flex shrink-0 items-center justify-end gap-2">
						{/* Sits in the header at every breakpoint, so it is reachable on
						    a phone without opening the drawer. */}
						<LanguageSwitcher />

						<div className="hidden min-[1180px]:block">
							<Link
								to="/contact"
								className="group/cta relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
								style={{
									background: `linear-gradient(120deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
									boxShadow: `0 14px 30px -12px ${PRIMARY}99, inset 0 0 0 1px rgba(255,255,255,0.18)`,
								}}>
								<span
									aria-hidden
									className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
								/>
								<span className="relative">Let's Connect</span>
								<span
									aria-hidden
									className="relative transition-transform duration-300 group-hover/cta:translate-x-1">
									→
								</span>
							</Link>
						</div>

						<button
							aria-label="Toggle menu"
							aria-expanded={open}
							onClick={() => setOpen((o) => !o)}
							className={`grid h-10 w-10 place-items-center rounded-full border backdrop-blur-md transition-all duration-300 lg:hidden ${
								light ?
									"border-slate-200 bg-white/80 hover:border-slate-300 hover:bg-white"
								:	"border-white/25 bg-white/10 hover:border-white/40 hover:bg-white/15"
							}`}>
							<span className="relative block h-3 w-5">
								<span
									className={`absolute left-0 h-px w-5 transition-all duration-500 ease-out ${
										light ? "bg-slate-900" : "bg-white"
									} ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
								/>
								<span
									className={`absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 transition-opacity duration-300 ${
										light ? "bg-slate-900" : "bg-white"
									} ${open ? "opacity-0" : "opacity-100"}`}
								/>
								<span
									className={`absolute left-0 h-px w-5 transition-all duration-500 ease-out ${
										light ? "bg-slate-900" : "bg-white"
									} ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
								/>
							</span>
						</button>
					</div>
				</div>

				<div
					/*
					 * The drawer is taller than a phone screen, so it is capped to the
					 * space left below the header and scrolls inside itself — the last
					 * few links (Gallery onwards) used to be clipped off with no way to
					 * reach them. `overscroll-contain` stops the scroll chaining to the
					 * page behind it once the list hits either end.
					 */
					className={`mt-3 rounded-2xl border bg-white/95 backdrop-blur-xl transition-all duration-500 ease-out lg:hidden ${
						open ?
							"max-h-[calc(100svh-7.5rem)] translate-y-0 overflow-y-auto overscroll-contain opacity-100"
						:	"pointer-events-none max-h-0 -translate-y-2 overflow-hidden opacity-0"
					}`}
					style={{
						borderColor: open ? `${PRIMARY}55` : "rgba(15,23,42,0.08)",
						boxShadow: open ? `0 24px 60px -20px ${PRIMARY}40` : "none",
						WebkitOverflowScrolling: "touch",
					}}>
					<nav className="flex flex-col gap-1 p-3">
						{/* The same order as the header bar: About Us right after Home,
						    Explore last. The two section hubs are plain links — each
						    section's own links live on its hub page. */}
						{NAV.map((n, i) => (
							<Fragment key={n.to}>
								<DrawerLink
									to={n.to}
									label={n.label}
									end={n.to === "/"}
									bold={"company" in n && !!n.company}
									open={open}
									index={i === 0 ? 0 : i + 1}
								/>
								{i === 0 && (
									<DrawerLink
										to={ABOUT_HUB}
										label="About Us"
										open={open}
										index={1}
									/>
								)}
							</Fragment>
						))}
						<DrawerLink
							to={EXPLORE_HUB}
							label="Explore"
							forceActive={isMoreActive}
							open={open}
							index={NAV.length + 1}
						/>

						<p className="pointer-events-none mt-4 px-3 text-center text-xs italic leading-relaxed tracking-wide text-slate-500 sm:mt-5 sm:px-4 sm:text-sm sm:leading-normal md:mt-6 md:text-base xl:text-lg">
								…building and sustaining{" "}
								<strong className="font-semibold not-italic" style={{ color: PRIMARY }}>
									3CPF
								</strong>{" "}
								(
								<strong className="font-semibold" style={{ color: PRIMARY }}>C</strong>reintors{" "}
								<strong className="font-semibold" style={{ color: PRIMARY }}>C</strong>ognitive{" "}
								<strong className="font-semibold" style={{ color: PRIMARY }}>C</strong>yber{" "}
								<strong className="font-semibold" style={{ color: PRIMARY }}>P</strong>hysical{" "}
								<strong className="font-semibold" style={{ color: PRIMARY }}>F</strong>actory){" "}
								<strong className="font-semibold not-italic" style={{ color: PRIMARY }}>
									for you
								</strong>
							</p>

						<Link
							to="/contact"
							className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white"
							style={{
								background: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
								boxShadow: `0 12px 30px -10px ${PRIMARY}66`,
								transitionDelay: open ? `${(NAV.length + 2) * 50}ms` : "0ms",
								transform: open ? "translateY(0)" : "translateY(8px)",
								opacity: open ? 1 : 0,
								transition: "transform 400ms ease-out, opacity 400ms ease-out",
							}}>
							Let's Connect <span aria-hidden>→</span>
						</Link>
					</nav>
				</div>
			</div>
		</motion.header>
	);
}
