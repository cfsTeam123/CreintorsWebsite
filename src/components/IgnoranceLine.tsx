/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Fragment, type CSSProperties } from "react";
import Reveal from "./Reveal";
import CreintorsC, { C_BAR_TOP } from "./CreintorsC";
import { PRIMARY, SECONDARY } from "../lib/theme";
import { LOGO_DOTS } from "../lib/brandIntro";
import { cn } from "../lib/utils";

/**
 * The three steps, each in its own colour as the client's artwork sets them
 * (19 Sep change list): the logo's blue, a mid blue, then navy. Read off the
 * mockup against the logo blue of the C beside them.
 */
const STEPS = [
	{ word: "Learn", color: "#00A0E3" },
	{ word: "Experience", color: "#3A82B0" },
	{ word: "Transform", color: "#030662" },
] as const;

/**
 * "Ignorance brings helplessness, knowledge eliminates it. come...let's
 * Learn · Experience · Transform with... The Power of C" — written as the
 * 19 Sep change list draws it: the group's five dots over the words on the
 * left, and "The Power of" set against the Creintors C on the right.
 *
 * The same list fixes where it goes: every page opens Landing page → Video →
 * Ignorance wordings. So each page places it straight after its hero — and
 * after its company film where it has one. The Philosophy page is the one
 * exception: this sentence is its Philosophy of Business, stated in full.
 *
 * The mockup offers the dots centred over the card or at the start of the
 * text; they sit at the start, on the text's own left edge, which holds on a
 * phone where the two halves stack.
 *
 * Side by side, the two halves line up as the 26 Sep mockups draw them: the C
 * runs the full height of the left half, its top level with the dots; the top
 * of "The" stands level with the top of the C's grey bar; and "of" shares its
 * baseline with "with...". All of it is worked from the one type size,
 * `--ig-line` (see LAYOUT below), so it holds at every width.
 */

/*
 * The measures behind that alignment, as shares of an em. Cambria (the left
 * words) has ascent 0.95 and descent 0.222, so at leading 1.3 its last baseline
 * sits 0.286em above the foot of the text. Ebrima ("The Power of") has ascent
 * 1.08 and descent 0.25, and the top of "The" — the h, a shade above the T —
 * stands 0.75 over its baseline. So at leading 1.08 its baseline sits 0.125em
 * above the foot of a line, and three lines run 2 × 1.08 + 0.75 = 2.91em from
 * the top of the first to the baseline of the last. Where either face is
 * missing its fallback lands within a few pixels.
 */
const POWER_LEADING = 1.08;
const LAYOUT = {
	// The left-hand type size.
	"--ig-line": "clamp(1.3rem, 0.95rem + 1.5vw, 2.1rem)",
	// The C: the left half's height — dots (2rem) + gap (1.5rem) + three
	// lines at 1.3 + the 0.25rem over the last.
	"--ig-c": "calc(3.75rem + 3.9 * var(--ig-line))",
	// Height of the baseline of "with..." above the foot of the C.
	"--ig-drop": "calc(0.286 * var(--ig-line))",
	// "The Power of": sized so its three lines fill the span from the bar's top
	// down to that baseline.
	"--ig-power": `calc((${(1 - C_BAR_TOP).toFixed(4)} * var(--ig-c) - var(--ig-drop)) / 2.91)`,
} as CSSProperties;
export default function IgnoranceLine({
	className,
}: {
	/**
	 * Overrides the section's padding. Under a company film it drops its top
	 * (`pt-0`), so film and wordings sit 40px apart, one band, as on home.
	 */
	className?: string;
}) {
	return (
		<section
			aria-label="Our belief"
			className={cn("relative isolate py-10", className)}>
			<div className="container-x">
				<Reveal
					from="up"
					className="relative overflow-hidden rounded-[28px] border px-6 py-8 sm:px-10 md:px-12 md:py-11"
					style={{
						borderColor: "rgba(23,158,224,0.16)",
						background: `radial-gradient(70% 120% at 0% 0%, ${PRIMARY}12, transparent 65%), radial-gradient(60% 120% at 100% 100%, ${SECONDARY}0d, transparent 60%), linear-gradient(180deg, #f5faff 0%, #e8f2fb 100%)`,
						boxShadow:
							"0 30px 70px -40px rgba(15,23,42,0.35), 0 1px 0 rgba(255,255,255,0.95) inset",
					}}>
					<div
						className="grid gap-x-10 gap-y-7 md:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-16"
						style={LAYOUT}>
						<div className="flex flex-col justify-between gap-5 md:gap-6">
							{/* The group logo's five dots, joined edge to edge as in the logo. */}
							<span
								aria-hidden
								className="flex items-center">
								{LOGO_DOTS.map((dot) => (
									<span
										key={dot.fill}
										className="block h-6 w-6 rounded-full md:h-8 md:w-8"
										style={{
											background: dot.fill,
											boxShadow:
												"rim" in dot ?
													`inset 0 0 0 1.5px ${dot.rim}`
												:	undefined,
										}}
									/>
								))}
							</span>

							<p className="m-0 font-display text-[length:var(--ig-line)] leading-[1.3] text-slate-900">
								<span className="block">Ignorance brings helplessness,</span>
								<span className="block">knowledge eliminates it.</span>
								<span className="mt-1 block">
									<em>come...let&apos;s</em>{" "}
									{STEPS.map((s, i) => (
										<Fragment key={s.word}>
											{/* Mid-dots between the steps, as the artwork has them.
											    Non-breaking before each and an ordinary space after,
											    so a narrow line breaks after a dot, never before. */}
											{i > 0 && (
												<span
													aria-hidden
													className="text-slate-400">
													{" · "}
												</span>
											)}
											<span style={{ color: s.color }}>{s.word}</span>
										</Fragment>
									))}
									{/* Kept on Transform's line, so it never stands alone. */}
									{" with..."}
								</span>
							</p>
						</div>

						{/* "The Power of" stacked against the C, which carries the last
						    word. Read as one line: "The Power of C". */}
						<p className="m-0 flex items-end gap-3 justify-self-end md:gap-5">
							<span
								className="text-right font-subheading text-slate-900"
								style={{
									fontSize: "var(--ig-power)",
									lineHeight: POWER_LEADING,
									// Lifts the last baseline from 0.125em to --ig-drop.
									marginBottom: "calc(var(--ig-drop) - 0.125 * var(--ig-power))",
								}}>
								<span className="block">The</span>
								<span className="block">Power</span>
								<span className="block">of</span>
							</span>
							<span className="sr-only">C</span>
							<CreintorsC
								className="block w-auto shrink-0 drop-shadow-[0_14px_22px_rgba(0,160,227,0.28)]"
								style={{ height: "var(--ig-c)" }}
							/>
						</p>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
