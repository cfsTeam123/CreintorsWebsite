/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useId, useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import CreintorsC from "./CreintorsC";
import { LOGO_DOTS } from "../lib/brandIntro";

const EASE = [0.22, 1, 0.36, 1] as const;

/** The band's ground (26 Sep). */
const GROUND = "#C4E4FE";
/** The motto artwork's own dark grey, for the name and its rules. */
const INK = "#2A2A28";

type StatementPillarProps = {
	/** What the statement is — "Our Vision", "Philosophy of People". The band's heading. */
	label: string;
	statement: string;
	/** Optional explicit line breaks, kept from `md` up. */
	statementLines?: string[];
	/**
	 * A cut-out to stand on the band's right, the C's height and on its floor
	 * (from `lg`, where there is room beside the words). Transparent ground.
	 */
	aside?: { src: string; alt: string };
	/**
	 * Artwork above the name, standing on its top rule, centred over the
	 * statement (28 Sep: the "WHY?" and "HOW?" word clouds on the Vision &
	 * Mission page). Transparent ground. Sized off the letter, not its own
	 * height, so every band's artwork is drawn at one scale; a tall one rises
	 * past the C's top. From md a band with art fills the screen, its content
	 * centred below the header.
	 */
	art?: { src: string; alt: string };
	/**
	 * The group logo's five dots, centred in a row under the statement
	 * (Philosophy of People). Decorative.
	 */
	dots?: boolean;
};

/**
 * One of the statements the group stands on — its vision, its mission, its
 * philosophies — set the way the Creintors motto artwork sets "Stay afloat":
 * the C on the left, the statement's name running out beside its grey bar
 * between two fine rules, and the words beneath.
 *
 * Since 26 Sep the band is light, the letter carries no icon, and the name
 * sits on no grey block of its own — transparent between its rules, as
 * "Stay afloat" does in the footer's motto.
 *
 * The C is CreintorsC; everything that lines up with its bar is expressed as a
 * share of the letter's height (`--c`) — 225/527 to the bar, 73/527 tall.
 *
 * The one piece of motion: as the band comes into view the rules run out of the
 * letter and the statement settles under them. Nothing else moves.
 */
export default function StatementPillar({
	label,
	statement,
	statementLines,
	aside,
	art,
	dots = false,
}: StatementPillarProps) {
	const id = useId().replace(/:/g, "");
	const reduce = useReducedMotion();
	const reveal = (delay: number, from: Record<string, number>) =>
		reduce ?
			{}
		:	{
				initial: from,
				whileInView: { opacity: 1, x: 0, y: 0, scaleX: 1 },
				viewport: { once: true, margin: "-15% 0px" },
				transition: { duration: 0.9, ease: EASE, delay },
			};

	const statementRef = useRef<HTMLParagraphElement | null>(null);
	const artRef = useRef<HTMLDivElement | null>(null);
	const hasArt = Boolean(art);

	// From md the art centres over the statement's lines, not its 34ch box:
	// the longest line rarely reaches the measure, and the difference shows
	// (28 Sep, "it's not in center"). The art's box is run from the track's
	// left edge to the longest line's right end; its padding matches the
	// statement's, so what is left is the span of the words.
	useLayoutEffect(() => {
		const p = statementRef.current;
		const box = artRef.current;
		if (!hasArt || !p || !box) return;

		const fit = () => {
			const track = box.offsetParent?.getBoundingClientRect();
			const range = document.createRange();
			range.selectNodeContents(p);
			const rights = [...range.getClientRects()]
				.filter((r) => r.width > 0)
				.map((r) => r.right);
			if (!track || !rights.length) return;
			box.style.setProperty(
				"--sp-art-w",
				`${Math.max(...rights) - track.left}px`,
			);
		};

		fit();
		const ro = new ResizeObserver(fit);
		ro.observe(p);
		// The lines wrap differently once the display face has loaded.
		let live = true;
		void document.fonts?.ready.then(() => {
			if (live) fit();
		});
		return () => {
			live = false;
			ro.disconnect();
		};
	}, [hasArt]);

	return (
		<section
			aria-labelledby={`${id}-label`}
			className={`sp-band${art ? " sp-band--art" : ""} relative isolate overflow-hidden border-t border-slate-900/[0.06] pb-24 pt-32 md:py-36`}
			style={{ background: GROUND }}>
			<div className="container-x">
				<div className={`sp-grid relative${aside ? " sp-grid--aside" : ""}`}>
					{/* THE C */}
					<div className="sp-letter relative">
						<CreintorsC
							className="block h-[var(--c)]"
							style={{
								filter: "drop-shadow(0 24px 44px rgba(0, 96, 160, 0.28))",
							}}
						/>
					</div>

					{/* THE NAME, run out of the letter between two rules */}
					<div className="sp-track relative">
						{/* THE ART — above the name, on its top rule, centred over
						    the statement (it takes the statement's face so its
						    `ch` measure is the same) */}
						{art && (
							<div
								ref={artRef}
								className="sp-art font-display">
								<motion.img
									src={art.src}
									alt={art.alt}
									loading="lazy"
									decoding="async"
									className="select-none"
									{...reveal(0.55, { opacity: 0, y: 16 })}
								/>
							</div>
						)}
						<div className="sp-bar">
							<motion.span
								aria-hidden
								className="absolute inset-0 origin-left"
								{...reveal(0.1, { scaleX: 0 })}>
								<span
									className="absolute inset-x-0 top-0 h-px"
									style={{
										background: `linear-gradient(90deg, ${INK}99, ${INK}00 85%)`,
									}}
								/>
								<span
									className="absolute inset-x-0 bottom-0 h-px"
									style={{
										background: `linear-gradient(90deg, ${INK}99, ${INK}00 85%)`,
									}}
								/>
							</motion.span>
							<h2
								id={`${id}-label`}
								className="relative z-10 m-0 flex items-center whitespace-nowrap px-4 font-body text-[13px] font-semibold sm:text-sm md:px-7 md:text-lg"
								style={{ color: INK }}>
								<motion.span {...reveal(0.45, { opacity: 0, x: -8 })}>
									{label}
								</motion.span>
							</h2>
						</div>
					</div>

					{/* THE STATEMENT */}
					<motion.p
						ref={statementRef}
						className="sp-statement m-0 font-display font-normal text-slate-900"
						{...reveal(0.4, { opacity: 0, y: 16 })}>
						{statementLines ?
							statementLines.map((line) => (
								<span
									key={line}
									className="block xl:whitespace-nowrap">
									{line}
								</span>
							))
						:	statement}
					</motion.p>

					{/* THE ASIDE — on the right, standing on the C's floor */}
					{aside && (
						<motion.img
							src={aside.src}
							alt={aside.alt}
							loading="lazy"
							decoding="async"
							className="sp-aside hidden select-none lg:block"
							style={{
								filter: "drop-shadow(0 24px 36px rgba(0, 60, 110, 0.25))",
							}}
							{...reveal(0.55, { opacity: 0, y: 16 })}
						/>
					)}
				</div>

				{/* THE DOTS — the group logo's five, joined edge to edge, centred under the statement */}
				{dots && (
					<div
						aria-hidden
						className="mt-10 flex items-center justify-center md:mt-14">
						{LOGO_DOTS.map((d, i) => (
							<motion.span
								key={d.fill}
								className="h-3.5 w-3.5 rounded-full md:h-5 md:w-5"
								style={{
									background: d.fill,
									boxShadow:
										"rim" in d ? `inset 0 0 0 1.5px ${d.rim}` : undefined,
								}}
								{...reveal(0.8 + i * 0.08, { opacity: 0, y: 10 })}
							/>
						))}
					</div>
				)}
			</div>

			<style>{`
				.sp-band {
					--c: 11.5rem;
					/* The statement's size, shared with the art so both measure
					   the same 34ch. */
					--sp-fs: clamp(1.5rem, 1.05rem + 1.9vw, 2.75rem);
				}
				@media (min-width: 768px) { .sp-band { --c: clamp(18rem, 46vh, 27.5rem); } }
				.sp-grid {
					display: grid;
					grid-template-columns: calc(var(--c) * 0.4782) minmax(0, 1fr);
					align-items: start;
				}
				.sp-letter { grid-column: 1; grid-row: 1; }
				.sp-track { grid-column: 2; grid-row: 1; height: var(--c); }
				.sp-bar {
					position: absolute;
					left: 0;
					right: 0;
					top: calc(var(--c) * 0.4269);
					height: calc(var(--c) * 0.1385);
					display: flex;
				}
				/* Stands a small gap above the top rule (the track is --c tall, the
				   rule 0.4269 of it down) and centres over the rules, inset each
				   side as the name is on phones and the statement is from md. */
				.sp-art {
					position: absolute;
					left: 0;
					right: 0;
					bottom: calc(var(--c) * 0.5731);
					display: flex;
					justify-content: center;
					padding: 0 1rem calc(var(--c) * 0.045);
				}
				/* Phones keep it under the C's top: the band's padding there
				   barely clears the header. */
				.sp-art img {
					display: block;
					width: calc(var(--c) * 0.95);
					min-width: 0;
					max-width: 100%;
					height: auto;
				}
				.sp-statement {
					grid-column: 1 / -1;
					margin-top: 2rem;
					max-width: 32ch;
					font-size: var(--sp-fs);
					line-height: 1.24;
					letter-spacing: -0.005em;
					text-wrap: pretty;
				}
				@media (min-width: 768px) {
					.sp-statement {
						grid-column: 2;
						grid-row: 1;
						margin-top: 0;
						padding-left: 1.75rem;
						padding-top: calc(var(--c) * 0.5654 + 1.75rem);
						max-width: 34ch;
					}
					/* Over the statement's own lines (--sp-art-w, measured) rather
					   than the whole run of the rules; until measured, over its
					   column — its size, its 34ch and its left inset. */
					.sp-art {
						right: auto;
						width: var(--sp-art-w, 100%);
						max-width: 34ch;
						font-size: var(--sp-fs);
						padding-left: 1.75rem;
						padding-right: 0;
					}
					/* The clouds are 500px files; past 600px they blur. */
					.sp-art img { width: min(calc(var(--c) * 1.15), 37.5rem); }
					/* A band with art fills the screen and centres its content in
					   the space below the fixed header (up to 7rem tall): 10rem
					   over, 3rem under. Across, the grid is only as wide as the C
					   and the statement's measure, and sits in the middle (28 Sep,
					   "make this whole section in center"); where the band is
					   narrower than that it fills it as before. The grid's top
					   margin holds the art's rise above the C inside the block. */
					/* Its letter is sized to fill that space (28 Sep, "a little big
					   to cover the screen"): as tall as the tallest statement lets
					   it be under the header, and no wider than a third of the
					   screen allows. The statement is a fixed share of the letter,
					   so the whole group scales as one. */
					.sp-band.sp-band--art {
						--c: clamp(18rem, min((100svh - 14.75rem) * 0.8, 32vw), 40rem);
						--sp-fs: calc(var(--c) * 0.118);
						min-height: 100svh;
						display: flex;
						flex-direction: column;
						justify-content: center;
						padding-top: 10rem;
						padding-bottom: 3rem;
					}
					.sp-band--art .sp-grid {
						width: fit-content;
						max-width: 100%;
						margin: calc(var(--c) * 0.08) auto 0;
					}
					/* The page's 80rem column would clip the grown group. */
					.sp-band--art .container-x { max-width: none; }
					.sp-band--art .sp-bar h2 {
						font-size: clamp(1.125rem, calc(var(--c) * 0.046), 1.625rem);
					}
				}
				@media (min-width: 1024px) {
					.sp-statement { padding-left: 2.25rem; }
					.sp-art { padding-left: 2.25rem; }
					.sp-grid--aside {
						grid-template-columns: calc(var(--c) * 0.4782) minmax(0, 1fr) auto;
					}
					.sp-aside {
						grid-column: 3;
						grid-row: 1;
						height: var(--c);
						width: auto;
						margin-left: 2rem;
					}
				}
			`}</style>
		</section>
	);
}
