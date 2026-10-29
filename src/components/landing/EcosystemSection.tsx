/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import Reveal from "../Reveal";
import { SECONDARY } from "../../lib/theme";
import { FLOW } from "../../lib/content/education";

import sessionImage from "../../assets/3iEco/bb.jpg";
import cohortImage from "../../assets/3iEco/dd.png";

/**
 * The 3i accent, matching the /education page's own hero rather than the
 * landing page's brand blue — the ecosystem carries its own lighter cyan
 * throughout its section, and reusing it here makes the link between this
 * teaser and the page it opens obvious.
 */
const ACCENT = "#1ac8ff";

/**
 * The 3i Ecosystem teaser on the landing page.
 *
 * Copy on the left and visual on the right, like every other section on the
 * page (18 Sep: this was the only one the other way round), collapsing to a
 * single stacked column — copy first — below `lg`. Every
 * string and both photographs come from what the site already holds — the
 * FLOW steps and the description are the /education page's own, so this
 * section cannot drift out of step with the page it links to.
 *
 * All motion is opacity/transform only (via `Reveal`) plus CSS transitions on
 * hover. No scroll listeners, no animated filters, nothing that runs per frame.
 */
export default function EcosystemSection() {
	return (
		<SectionWrapper
			id="ecosystem"
			/*
			 * Height follows the content, and on desktop that content is now
			 * deliberately short of 80vh.
			 *
			 * Two things keep it there: the three flow steps sit on one row
			 * instead of three — which also reclaims the dead space that used to
			 * run down the right of the stacked cards — and the photograph is
			 * capped in vh so it can never become the tallest thing here. The
			 * padding is the home page's 40px, as on every section (26 Sep).
			 */
			className="relative isolate flex items-center overflow-hidden py-10">
			{/* Ambient wash — static, so it rasterises once and never repaints.
			    Faded out at the foot, so the corner glow does not stop in a hard
			    edge against the companies' tint below. */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `radial-gradient(70% 55% at 8% 0%, ${ACCENT}1f, transparent 70%),
						radial-gradient(60% 60% at 100% 100%, ${SECONDARY}14, transparent 70%)`,
					maskImage: "linear-gradient(to bottom, black 55%, transparent)",
					WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent)",
				}}
			/>

			<div className="mx-auto w-full max-w-[92rem] px-6 lg:px-10">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
					{/* ── LEFT: the copy ── */}
					<Reveal
						stagger={0.12}
						className="flex flex-col">
						<Reveal
							from="up"
							as="div"
							className="eyebrow">
							<span
								className="h-px w-8"
								style={{ background: ACCENT }}
							/>{" "}
							Creators of Talent
						</Reveal>

						<Reveal
							from="up"
							as="h2"
							className="section-title mt-4">
							<span className="text-slate-900">3i </span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${ACCENT}, ${SECONDARY})`,
								}}>
								Ecosystem
							</span>
							{/* Subordinate line: at the headline size the tagline would
							    outweigh the name it follows. Order per the 17 Sep change
							    list — Creators of Talent / 3i Ecosystem / Learn. Experience.
							    Transform. */}
							<span className="mt-1.5 block font-display text-xl font-semibold tracking-tight text-slate-500 md:text-2xl">
								Learn. Experience. Transform
							</span>
						</Reveal>

						<Reveal
							from="up"
							as="p"
							className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 lg:text-[17px]">
							Where education and real-world application stay closely connected
							so students don't just learn, they build, ship and transform
							alongside practising engineers.
						</Reveal>

						{/* The three steps, straight from the /education flow. Three
						    across from `sm` up: stacked, each card ran the full width
						    of the column for two words of copy and left the rest of
						    the row empty. */}
						<Reveal
							from="up"
							as="ul"
							className="mt-7 grid gap-3 sm:grid-cols-3">
							{FLOW.map((f) => (
								<li
									key={f.step}
									className="group/step flex flex-col gap-2.5 rounded-2xl border border-slate-200/80 bg-white/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]">
									<span
										className="grid h-9 w-9 shrink-0 place-items-center rounded-xl font-mono text-[11px] font-bold tracking-wider text-white transition-transform duration-300 group-hover/step:scale-105"
										style={{
											background: `linear-gradient(135deg, ${f.accent}, ${SECONDARY})`,
										}}>
										{f.step}
									</span>
									<span>
										<span className="block font-display text-[15px] font-semibold text-slate-900">
											{f.title}
										</span>
										<span className="mt-0.5 block text-[13.5px] leading-snug text-slate-600">
											{f.detail}
										</span>
									</span>
								</li>
							))}
						</Reveal>

						<Reveal
							from="up"
							as="div"
							className="mt-7">
							<Link
								to="/education"
								className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_-14px_rgba(26,200,255,0.75)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_46px_-14px_rgba(26,200,255,0.9)]"
								style={{
									background: `linear-gradient(120deg, ${ACCENT}, ${SECONDARY})`,
								}}>
								<span
									aria-hidden
									className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
								/>
								<span className="relative">Explore 3i Ecosystem</span>
								<span
									aria-hidden
									className="relative transition-transform duration-300 group-hover/cta:translate-x-1">
									→
								</span>
							</Link>
						</Reveal>
					</Reveal>

					{/* ── RIGHT: the ecosystem in action ── */}
					<Reveal
						from="right"
						className="group relative">
						<div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_30px_70px_-32px_rgba(15,23,42,0.30)]">
							<img
								src={sessionImage}
								alt="A Creintors engineer running a shop-floor session for student engineers"
								loading="lazy"
								decoding="async"
								className="h-[260px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-[340px] lg:h-[clamp(19rem,42vh,25rem)]"
							/>
							{/* Brand tint so the photograph sits on-system rather than
							    reading as a raw snapshot. */}
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0"
								style={{
									background: `linear-gradient(160deg, ${ACCENT}14, transparent 55%)`,
								}}
							/>
							<span
								aria-hidden
								className="pointer-events-none absolute inset-x-8 top-0 h-px opacity-80"
								style={{
									background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
								}}
							/>
						</div>

						{/* Overlapping cohort photo — the "Institute inside Industry"
						    half of the same idea. Hidden on the narrowest screens,
						    where it would crowd the main image. It hangs off the
						    inner corner, towards the copy, rather than out past the
						    page edge. */}
						<div className="absolute -bottom-8 -left-2 hidden w-[46%] overflow-hidden rounded-2xl border-4 border-white shadow-[0_24px_50px_-20px_rgba(15,23,42,0.40)] transition-transform duration-700 ease-out group-hover:-translate-y-1.5 sm:block lg:-left-6">
							<img
								src={cohortImage}
								alt="A student cohort hosted at the Creintors facility"
								loading="lazy"
								decoding="async"
								className="aspect-[16/9] w-full object-cover"
							/>
						</div>
					</Reveal>
				</div>
			</div>
		</SectionWrapper>
	);
}
