/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { gsap } from "../../lib/gsap";
import { PRIMARY, SECONDARY, tint } from "../../lib/theme";

type Props = {
	/** The page's name in the breadcrumb, after "Explore". */
	crumb: string;
	/** Title reads `<titleLead> <titleAccent>`, the second half in the gradient. */
	titleLead: string;
	titleAccent: string;
	/** The line under the title — the subtitle the page's hub card carries. */
	tagline: string;
	intro: string;
	/** A photograph full-bleed behind the words. */
	image?: string;
	/** What the backdrop shows, set small in its bottom-right corner. */
	imageCaption?: string;
	/** A right-hand column beside the words, for a page without a backdrop. */
	aside?: ReactNode;
	/** The buttons under the intro. */
	children?: ReactNode;
};

/**
 * The hero the Explore hub's CII Engagement and VLFM Experience pages share.
 *
 * Dark like the other Explore pages' heroes, but shorter than the full-screen
 * division heroes: these pages are read, and the first section should show
 * above the fold. A page either lays a photograph behind the words (CII) or
 * sets pictures beside them (VLFM).
 */
export default function FeatureHero({
	crumb,
	titleLead,
	titleAccent,
	tagline,
	intro,
	image,
	imageCaption,
	aside,
	children,
}: Props) {
	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			return;
		}
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".fh-fade",
				{ opacity: 0, y: 28 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					stagger: 0.08,
					delay: 0.2,
				},
			);
		}, ref);
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={ref}
			className={`relative isolate flex items-end overflow-hidden pb-14 pt-32 md:pb-20 md:pt-40 ${
				image ? "min-h-[78svh]" : "min-h-[70svh]"
			}`}
			style={{ backgroundColor: "#081222" }}>
			{image && (
				<>
					<img
						src={image}
						alt=""
						aria-hidden
						fetchPriority="high"
						className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
						style={{ filter: "saturate(0.95) contrast(1.05)" }}
					/>
					{/* Heaviest behind the words, bottom left; the right of the frame
					    stays a photograph. */}
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 -z-10"
						style={{
							background: `
								linear-gradient(90deg, rgba(8,18,34,0.92) 0%, rgba(8,18,34,0.72) 42%, rgba(8,18,34,0.18) 78%, rgba(8,18,34,0.08) 100%),
								linear-gradient(180deg, rgba(8,18,34,0.45) 0%, transparent 30%, transparent 55%, rgba(8,18,34,0.85) 100%)
							`,
						}}
					/>
					{/* On a phone the words run the full width, over the brightest
					    part of the frame too, so the whole photograph steps back. */}
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 -z-10 md:hidden"
						style={{ background: "rgba(8,18,34,0.5)" }}
					/>
				</>
			)}

			{/* Brand light, low and to the sides, as on the other dark heroes. */}
			<div
				aria-hidden
				className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full blur-[140px]"
				style={{ background: `${tint(PRIMARY, 0.2)}30` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-32 top-10 -z-10 h-[26rem] w-[26rem] rounded-full blur-[140px]"
				style={{ background: `${tint(SECONDARY, 0.3)}33` }}
			/>

			<div className="container-x relative">
				<div
					className={`grid items-end gap-12 ${
						aside ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16" : ""
					}`}>
					<div className={aside ? "" : "max-w-3xl"}>
						<nav
							aria-label="Breadcrumb"
							className="fh-fade">
							<ol className="m-0 flex list-none items-center gap-1.5 p-0 text-sm text-white/60">
								<li>
									<Link
										to="/explore"
										className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
										Explore
									</Link>
								</li>
								<li aria-hidden>
									<ChevronRight className="h-3.5 w-3.5" />
								</li>
								<li
									aria-current="page"
									className="text-white/90">
									{crumb}
								</li>
							</ol>
						</nav>

						<h1 className="fh-fade page-title mt-5 text-white">
							{titleLead}{" "}
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${tint(PRIMARY, 0.15)}, #ffffff)`,
								}}>
								{titleAccent}
							</span>
						</h1>

						<p className="fh-fade mt-4 font-display text-xl leading-snug text-white/90 md:text-2xl">
							{tagline}
						</p>

						<div
							aria-hidden
							className="fh-fade mt-6 h-[3px] w-16 rounded-full"
							style={{
								background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
							}}
						/>

						<p className="fh-fade mt-6 max-w-[60ch] text-base leading-relaxed text-white/75 md:text-lg">
							{intro}
						</p>

						{children && (
							<div className="fh-fade mt-8 flex flex-wrap items-center gap-3">
								{children}
							</div>
						)}
					</div>

					{aside && <div className="fh-fade">{aside}</div>}
				</div>
			</div>

			{image && imageCaption && (
				<p className="absolute bottom-4 right-6 m-0 hidden max-w-xs text-right text-xs text-white/55 md:block lg:right-10">
					{imageCaption}
				</p>
			)}
		</section>
	);
}

type ActionProps = {
	children: ReactNode;
	/** A route, or a `#section` on this page. */
	to?: string;
	/** An address on another site, opened in a new tab. */
	href?: string;
	/** The gradient button, or the outlined one. */
	filled?: boolean;
};

/** A button in the hero's action row. */
export function HeroAction({ children, to, href, filled = false }: ActionProps) {
	const className = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-[transform,background-color,border-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081222] ${
		filled ?
			"text-white hover:scale-[1.03]"
		:	"border border-white/25 bg-white/5 text-white/90 backdrop-blur hover:border-white/45 hover:bg-white/10"
	}`;
	const style =
		filled ?
			{
				background: `linear-gradient(120deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
				boxShadow: `0 14px 30px -12px ${PRIMARY}99, inset 0 0 0 1px rgba(255,255,255,0.18)`,
			}
		:	undefined;

	return href ?
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
				style={style}>
				{children}
				<span className="sr-only">(opens in a new tab)</span>
			</a>
		:	<Link
				to={to ?? "/explore"}
				className={className}
				style={style}>
				{children}
			</Link>;
}
