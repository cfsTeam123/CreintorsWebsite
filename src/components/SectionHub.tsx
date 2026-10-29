/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PRIMARY, SECONDARY, rgbTriplet } from "../lib/theme";
import type { NavItem } from "../lib/navigation";

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Row width per hub, spelled out rather than built from the prop — Tailwind
 * only ships classes it can find as whole strings in the source.
 */
const COLUMNS = {
	3: "lg:grid-cols-3",
	4: "lg:grid-cols-4",
} as const;
const GLOW = rgbTriplet(PRIMARY);

type Props = {
	eyebrow: string;
	/** Title reads `<titleLead> <titleAccent>`, the second half in the gradient. */
	titleLead: string;
	titleAccent: string;
	intro: string;
	/** The section's links — passed straight from the navigation config. */
	items: NavItem[];
	/** Cards per row from `lg` up. Eight About links sit better four across. */
	columns?: keyof typeof COLUMNS;
};

/**
 * A section hub: the index page behind a header dropdown.
 *
 * Both /about and /explore are this component with a different slice of the
 * navigation config, so the two pages cannot drift apart and neither restates
 * a link the header already owns.
 *
 * It sits under the page's hero (see AboutHub and ExploreHub), so it is an
 * ordinary section: the hero owns the first screen and clears the header.
 */
export default function SectionHub({
	eyebrow,
	titleLead,
	titleAccent,
	intro,
	items,
	columns = 3,
}: Props) {
	return (
		<section className="relative isolate overflow-hidden">
			{/* Ambient wash, in the same light key as the rest of the site. */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-20"
				style={{
					background: `
						radial-gradient(80% 60% at 50% 0%, ${PRIMARY}14, transparent 70%),
						radial-gradient(60% 80% at 100% 100%, ${SECONDARY}12, transparent 65%),
						linear-gradient(180deg, #eaf4ff 0%, #e1edff 100%)
					`,
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-24 -z-10 h-[26rem] w-[26rem] rounded-full blur-[160px]"
				style={{ background: `${PRIMARY}1c` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[24rem] w-[24rem] rounded-full blur-[140px]"
				style={{ background: `${SECONDARY}14` }}
			/>

			<div className="container-x relative py-10">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-80px" }}
					variants={{
						hidden: {},
						visible: {
							transition: { staggerChildren: 0.06, delayChildren: 0.05 },
						},
					}}>
					{/* Compact header — the hero above carries the page title. */}
					<motion.div
						className="mb-6 max-w-3xl md:mb-7"
						variants={{
							hidden: { opacity: 0, y: 18 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.6, ease: SMOOTH_EASE },
							},
						}}>
						<div className="eyebrow !mb-3">
							<span
								className="h-px w-8"
								style={{ background: PRIMARY }}
							/>{" "}
							{eyebrow}
						</div>
						{/* A step down from `section-title`: this page is an index, and a
						    display-size heading would cost a row of cards. */}
						<h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-slate-900 md:text-4xl xl:text-[2.6rem]">
							<span>{titleLead} </span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								{titleAccent}
							</span>
						</h2>
						<p className="mt-2.5 max-w-xl text-sm leading-relaxed text-slate-600">
							{intro}
						</p>
					</motion.div>

					{/* Both hubs land in two even rows of four: Explore's eight tabs
					    (19 Sep) and About's eight links. */}
					<div
						className={`grid gap-4 sm:grid-cols-2 md:gap-5 ${COLUMNS[columns]}`}>
						{items.map((item) => (
							<motion.div
								key={item.to}
								variants={{
									hidden: { opacity: 0, y: 22 },
									visible: {
										opacity: 1,
										y: 0,
										transition: { duration: 0.55, ease: SMOOTH_EASE },
									},
								}}>
								<HubCard item={item} />
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>

			{/*
			 * The spotlight and border glow track the pointer through custom
			 * properties, so they have to be a stylesheet rule rather than style
			 * props. Same treatment the division capability cards use, so a hub
			 * card feels like the rest of the site rather than a new invention.
			 */}
			<style>{`
				.hub-card {
					--hub-x: 50%;
					--hub-y: 50%;
					--hub-on: 0;
				}
				.hub-card:hover,
				.hub-card:focus-visible {
					--hub-on: 1;
				}
				.hub-spot {
					border-radius: inherit;
					background: radial-gradient(
						260px circle at var(--hub-x) var(--hub-y),
						rgba(${GLOW}, 0.14),
						transparent 60%
					);
					opacity: var(--hub-on);
					transition: opacity 0.3s ease;
				}
				.hub-ring {
					border-radius: inherit;
					padding: 1.25px;
					background: radial-gradient(
						200px circle at var(--hub-x) var(--hub-y),
						rgba(${GLOW}, 0.9),
						transparent 55%
					);
					-webkit-mask:
						linear-gradient(#000 0 0) content-box,
						linear-gradient(#000 0 0);
					-webkit-mask-composite: xor;
					mask-composite: exclude;
					opacity: var(--hub-on);
					transition: opacity 0.3s ease;
				}
			`}</style>
		</section>
	);
}

function HubCard({ item }: { item: NavItem }) {
	const CardIcon = item.icon;

	/** Feed the pointer position to the spotlight and ring. */
	const track = (e: React.PointerEvent<HTMLAnchorElement>) => {
		const el = e.currentTarget;
		const r = el.getBoundingClientRect();
		el.style.setProperty("--hub-x", `${e.clientX - r.left}px`);
		el.style.setProperty("--hub-y", `${e.clientY - r.top}px`);
	};

	const cardProps = {
		onPointerMove: track,
		className:
			"hub-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 backdrop-blur-sm transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-transparent hover:bg-white focus:outline-none focus-visible:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-offset-2",
		style: {
			boxShadow:
				"0 18px 46px -28px rgba(15,23,42,0.28), 0 0 0 1px rgba(255,255,255,0.9) inset",
		},
	};
	const external = !!item.href;
	const Arrow = external ? ArrowUpRight : ArrowRight;

	const body = (
		<>
			{/*
			 * The picture. `alt` is empty on purpose — the heading below already
			 * names the destination, so voicing the photo too would read the same
			 * link out twice.
			 */}
			{item.image && (
				<span className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-100">
					<img
						src={item.image}
						alt=""
						loading="lazy"
						decoding="async"
						className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
					/>
					{/* Brand tint, brought up on hover. */}
					<span
						aria-hidden
						className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						style={{
							background: `linear-gradient(160deg, ${PRIMARY}3d, transparent 62%)`,
						}}
					/>
				</span>
			)}

			{/* Cursor-tracked spotlight and border ring. */}
			<span
				aria-hidden
				className="hub-spot pointer-events-none absolute inset-0 z-10"
			/>
			<span
				aria-hidden
				className="hub-ring pointer-events-none absolute inset-0 z-20"
			/>
			{/* Top hairline, lit on hover. */}
			<span
				aria-hidden
				className="pointer-events-none absolute inset-x-5 top-0 z-20 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}aa, transparent)`,
					boxShadow: `0 0 12px ${PRIMARY}55`,
				}}
			/>

			<span className="relative z-10 flex flex-1 flex-col px-4 pb-4 md:px-5 md:pb-5">
				{CardIcon && (
					/* The badge straddles the foot of the picture — it is the hinge
					   between the photograph and the words. */
					<span
						className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:rotate-[-4deg] group-hover:scale-105 ${
							item.image ? "-mt-6" : "mt-4 md:mt-5"
						}`}
						style={{
							background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
							boxShadow: `0 14px 30px -12px ${PRIMARY}99, 0 0 0 3px rgba(255,255,255,0.92), 0 1px 0 rgba(255,255,255,0.45) inset`,
						}}>
						<CardIcon className="h-5 w-5" />
					</span>
				)}

				{/* Accent rule — the site's signature "grows on hover" tell. */}
				<span
					aria-hidden
					className="mt-3.5 h-[3px] w-8 origin-left rounded-full transition-all duration-500 group-hover:w-14"
					style={{
						background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
						boxShadow: `0 0 14px ${PRIMARY}55`,
					}}
				/>

				<h3 className="mt-3 font-display text-[1.0625rem] font-bold leading-tight tracking-tight text-slate-900 transition-colors duration-300 md:text-lg">
					{item.label}
				</h3>
				{item.desc && (
					<p className="mt-1.5 text-[13px] leading-[1.55] text-slate-600">
						{item.desc}
					</p>
				)}

				{/* `mt-auto` pins this to the bottom, so the row of cards ends level
				    however long the description runs. */}
				<span
					className="mt-auto flex items-center gap-1.5 pt-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 group-hover:gap-2.5"
					style={{ color: PRIMARY }}>
					{external ? "Visit" : "Explore"}
					<Arrow
						aria-hidden
						className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
					/>
					{external && <span className="sr-only">(opens in a new tab)</span>}
				</span>
			</span>

			{/* Corner crosshair, as on the landing solution cards. */}
			<span
				aria-hidden
				className="pointer-events-none absolute bottom-2.5 right-2.5 z-10 h-3 w-3 border-b-2 border-r-2 opacity-0 transition-opacity duration-500 group-hover:opacity-60"
				style={{ borderColor: SECONDARY }}
			/>
		</>
	);

	return external ?
			<a
				href={item.href}
				target="_blank"
				rel="noopener noreferrer"
				{...cardProps}>
				{body}
			</a>
		:	<Link
				to={item.to}
				{...cardProps}>
				{body}
			</Link>;
}
