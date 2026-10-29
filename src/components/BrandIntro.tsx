/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, Volume2 } from "lucide-react";
import { gsap } from "../lib/gsap";
import { LOGO_DOTS, finishIntro, introIsPlaying } from "../lib/brandIntro";
import introSound from "../assets/audio/yo-one.mp3";

/**
 * The YO ONE opening: a full-screen sheet that plays once, then lifts off the
 * home page.
 *
 *   0.0s  the sheet is already up — it wears the page's own background, so the
 *         blank page before the bundle runs turns into it without a jump — and
 *         a soft brand-blue light rises behind the centre
 *   0.1s  the five logo dots scale in, one after another, at the centre
 *   0.95s a greeting and a "come...let’s grow" button (the logo's tagline,
 *         2 Oct; with a speaker icon, since it brings the sound) fade in
 *         under the dots, and the intro waits for it
 *   ...   on Enter the YO ONE sound plays, the dots glide down to sit under
 *         the word, and YO ONE rises into the space they leave
 *   3.0s  the sheet lifts (the page transition's expo.inOut), trailing a
 *         hairline in the dot colours, and the hero's own entrance plays
 *         under it
 *
 * The times are timeline time, so the wait at Enter is not counted in them.
 *
 * The Enter step is there for the sound (26 Sep change list). Browsers refuse
 * sound until the visitor has clicked, tapped or pressed a key: not on load,
 * and not on the mouse entering or moving over the page (tested in Chrome).
 * So the sound is started inside that click. A click anywhere on the sheet or
 * any key counts, and one that comes before the prompt shows simply carries
 * the intro on.
 *
 * The page is handed back — clicks, scrolling, the hero entrance — the moment
 * the lift starts, not when it ends. If the window has not finished loading by
 * 3.0s the lift waits for it, but never more than LOAD_GRACE_MS, so a slow
 * connection is not held hostage.
 *
 * Under prefers-reduced-motion nothing moves: the dots and prompt fade in, the
 * word fades in on Enter, holds, and the sheet fades out.
 */

/** Timeline time at which the sheet lifts (26 Sep change list). */
const INTRO_MS = 3000;
/** Timeline time at which the intro waits for Enter: once the dots are in. */
const GATE_AT = 0.95;
const REDUCED_GATE_AT = 0.35;
const LOAD_GRACE_MS = 400;

/** Matches the `body` background in index.css, so the hand-off is invisible. */
const PAGE_BACKGROUND = `
	radial-gradient(1100px 700px at 88% -10%, rgba(23, 158, 224, 0.1), transparent 60%),
	radial-gradient(900px 700px at -5% 100%, rgba(70, 54, 127, 0.08), transparent 60%),
	linear-gradient(180deg, #eef6fb 0%, #dceaf4 100%)
`;

/** The logo dots as a colour wheel, for the ring that turns round the Enter button. */
const DOT_RING = `conic-gradient(${[...LOGO_DOTS, LOGO_DOTS[0]].map((dot) => dot.fill).join(", ")})`;

/**
 * YO ONE letter by letter, each in the colour of the logo dot at the same
 * position (18 Sep change list): Y blue, O navy, O green, N saffron, E white.
 * Five letters, five dots, so the word reads as the strip beneath it spelt out.
 */
const WORDS = (() => {
	let dot = 0;
	return ["YO", "ONE"].map((text) =>
		[...text].map((ch) => ({ ch, dot: LOGO_DOTS[dot++] })),
	);
})();

export default function BrandIntro() {
	const [active, setActive] = useState(introIsPlaying);
	const rootRef = useRef<HTMLDivElement | null>(null);

	useLayoutEffect(() => {
		const root = rootRef.current;
		if (!active || !root) return;

		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const gateAt = reduceMotion ? REDUCED_GATE_AT : GATE_AT;

		// Lock scrolling on the root scroller. The gutter is held open so the
		// scrollbar coming back does not nudge the hero sideways mid-reveal.
		const html = document.documentElement;
		const previous = {
			overflow: html.style.overflow,
			gutter: html.style.scrollbarGutter,
		};
		html.style.overflow = "hidden";
		html.style.scrollbarGutter = "stable";
		let locked = true;
		const unlock = () => {
			if (!locked) return;
			locked = false;
			html.style.overflow = previous.overflow;
			html.style.scrollbarGutter = previous.gutter;
		};

		const q = gsap.utils.selector(root);
		const panel = q(".bi-panel");
		const mark = q(".bi-mark");
		const word = q(".bi-word");
		const prompt = q(".bi-enter");
		const strip = q(".bi-dots")[0] as HTMLElement;

		// Loaded now, so it is ready by the time the visitor enters.
		const sound = new Audio(introSound);
		sound.preload = "auto";

		let entered = false;
		let lifting = false;
		let graceTimer = 0;
		let startFrame = 0;

		const ctx = gsap.context(() => {}, root);

		const lift = () => {
			if (lifting) return;
			lifting = true;
			window.clearTimeout(graceTimer);
			window.removeEventListener("load", lift);

			root.style.pointerEvents = "none";
			unlock();
			finishIntro();

			ctx.add(() => {
				intro.kill();
				const out = gsap.timeline({ onComplete: () => setActive(false) });
				if (reduceMotion) {
					out.to(root, { opacity: 0, duration: 0.45, ease: "power1.inOut" });
				} else {
					out
						.to(
							mark,
							{
								yPercent: -40,
								scale: 0.97,
								opacity: 0,
								duration: 0.5,
								ease: "power2.in",
							},
							0,
						)
						.to(panel, { yPercent: -100, duration: 0.8, ease: "expo.inOut" }, 0.05);
				}
			});
		};

		const liftWhenLoaded = () => {
			if (document.readyState === "complete") return lift();
			window.addEventListener("load", lift, { once: true });
			graceTimer = window.setTimeout(lift, LOAD_GRACE_MS);
		};

		const enter = () => {
			if (entered) return;
			entered = true;
			window.removeEventListener("keydown", enter);
			root.removeEventListener("click", enter);
			root.style.cursor = "";

			// Played here, inside the click or key press, because that is the
			// only place every browser allows it (Safari will not honour a
			// click that came earlier). Rejected only for a key that does not
			// count as interaction, such as Escape: the intro carries on silent.
			sound.play().catch(() => {});

			ctx.add(() => {
				gsap.to(prompt, { autoAlpha: 0, duration: 0.3, ease: "power1.out" });
			});
			intro.removePause(gateAt);
			intro.play();
		};

		const showPrompt = () => {
			ctx.add(() => {
				gsap.to(prompt, {
					autoAlpha: 1,
					y: 0,
					duration: 0.5,
					ease: "power2.out",
				});
			});
		};

		let intro!: gsap.core.Timeline;
		ctx.add(() => {
			intro = gsap.timeline({ paused: true, onComplete: liftWhenLoaded });
			gsap.set(prompt, { autoAlpha: 0, y: reduceMotion ? 0 : 8 });

			// Holds the finished mark until INTRO_MS, whatever the entrance ends on.
			intro.to({}, { duration: INTRO_MS / 1000 }, 0).addPause(gateAt, showPrompt);

			if (reduceMotion) {
				intro
					.from(strip, { opacity: 0, duration: 0.35, ease: "power1.out" }, 0)
					.from(word, { opacity: 0, duration: 0.35, ease: "power1.out" }, gateAt);
				return;
			}

			// Where the dots start: on the centre of the word, before it exists.
			const startOffset = () => {
				const w = word[0].getBoundingClientRect();
				const s = strip.getBoundingClientRect();
				return w.top + w.height / 2 - (s.top + s.height / 2);
			};

			intro
				.from(
					q(".bi-glow"),
					{ opacity: 0, scale: 0.8, duration: 0.9, ease: "power2.out" },
					0,
				)
				.from(strip, { y: startOffset, duration: 0.75, ease: "power3.inOut" }, gateAt)
				.from(
					q(".bi-dot"),
					{
						scale: 0,
						opacity: 0,
						duration: 0.55,
						ease: "expo.out",
						stagger: 0.07,
					},
					0.1,
				)
				.from(
					q(".bi-char"),
					{
						yPercent: 65,
						opacity: 0,
						duration: 0.75,
						ease: "expo.out",
						stagger: 0.05,
					},
					gateAt + 0.15,
				)
				.from(word, { scale: 0.95, duration: 0.9, ease: "power3.out" }, gateAt + 0.15);
		});

		// Start two frames in. The frames straight after mount go on painting the
		// site underneath, and a timeline already running through them jumps
		// ahead and loses its opening beat. The from() states are applied now, so
		// nothing shows early.
		startFrame = requestAnimationFrame(() => {
			startFrame = requestAnimationFrame(() => intro.play());
		});

		// click, not pointerdown: a touch only counts as interaction for sound
		// once the finger lifts, and click comes after that.
		root.style.cursor = "pointer";
		window.addEventListener("keydown", enter);
		root.addEventListener("click", enter);

		return () => {
			cancelAnimationFrame(startFrame);
			window.clearTimeout(graceTimer);
			window.removeEventListener("load", lift);
			window.removeEventListener("keydown", enter);
			root.removeEventListener("click", enter);
			ctx.revert();
			unlock();
		};
	}, [active]);

	if (!active) return null;

	return (
		<div
			ref={rootRef}
			className="fixed inset-0 z-[10000] overflow-hidden"
			style={{ touchAction: "none", overscrollBehavior: "none" }}>
			<div
				className="bi-panel absolute inset-0"
				style={{
					background: PAGE_BACKGROUND,
					boxShadow: "0 40px 80px -30px rgba(2, 6, 20, 0.45)",
				}}>
				<div
					aria-hidden
					className="bi-glow pointer-events-none absolute left-1/2 top-1/2 -ml-[45vmax] -mt-[45vmax] h-[90vmax] w-[90vmax] rounded-full"
					style={{
						background:
							"radial-gradient(circle, rgba(0, 160, 227, 0.16) 0%, rgba(0, 160, 227, 0.06) 32%, transparent 62%)",
					}}
				/>

				<div className="absolute inset-0 flex items-center justify-center px-4">
					<div
						className="bi-mark relative"
						style={{ fontSize: "clamp(2.75rem, min(17vw, 24vh), 10rem)" }}>
						{/* A plain block, not flex: text-box trim only applies to block
						    containers, and trimming to the cap height is what puts the
						    letters, not their line box, on the exact centre. */}
						<p
							aria-hidden
							className="bi-word m-0 whitespace-nowrap font-display font-bold leading-none [text-box:trim-both_cap_alphabetic]"
							style={{ letterSpacing: "0.03em", marginRight: "-0.03em" }}>
							{WORDS.map((letters, i) => (
								<span
									key={i}
									style={{ marginLeft: i ? "0.26em" : 0 }}>
									{letters.map(({ ch, dot }, j) => (
										<span
											key={j}
											className="bi-char inline-block"
											style={{
												color: dot.fill,
												// The white E keeps the white dot's dark rim, drawn
												// outside the glyph, so it holds on the pale sheet.
												...("rim" in dot && {
													WebkitTextStroke: `max(2px, 0.024em) ${dot.rim}`,
													paintOrder: "stroke fill",
												}),
											}}>
											{ch}
										</span>
									))}
								</span>
							))}
						</p>

						<div
							className="bi-dots absolute inset-x-0 top-full flex justify-center"
							style={{ marginTop: "0.36em" }}>
							{LOGO_DOTS.map((dot) => (
								<span
									key={dot.fill}
									aria-hidden
									className="bi-dot block rounded-full"
									style={{
										width: "0.17em",
										height: "0.17em",
										background: dot.fill,
										boxShadow:
											"rim" in dot ?
												`inset 0 0 0 max(1px, 0.012em) ${dot.rim}`
											:	undefined,
									}}
								/>
							))}

							{/* Rides with the dots, so it sits under them wherever they
							    are. Animated as a whole so GSAP's transform does not
							    override the button's hover scale. The button's click
							    reaches the sheet's own handler. */}
							<div className="bi-enter absolute inset-x-0 top-full mt-10 flex flex-col items-center gap-4 whitespace-nowrap text-base">
								<p className="m-0 text-xs uppercase tracking-[0.18em] text-slate-600">
									Namaste, and welcome
								</p>
								<button
									type="button"
									className="group relative isolate inline-flex overflow-hidden rounded-full p-[3px] shadow-[0_14px_36px_-12px_rgba(0,160,227,0.55)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_20px_44px_-12px_rgba(0,160,227,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
									{/* The ring: a dot-colour wheel turning behind the pill,
									    clipped to the 3px the padding leaves. Sized well past
									    the pill's diagonal so it covers it at every angle. */}
									<span
										aria-hidden
										className="absolute left-1/2 top-1/2 -z-10 -ml-[14rem] -mt-[14rem] h-[28rem] w-[28rem] motion-safe:animate-[spin_5s_linear_infinite]"
										style={{ background: DOT_RING }}
									/>
									<span className="inline-flex items-center gap-3 rounded-full bg-ink-900 py-1.5 pl-1.5 pr-5 text-white">
										<span className="relative grid h-9 w-9 place-items-center rounded-full bg-brand-500">
											<span
												aria-hidden
												className="absolute inset-0 rounded-full bg-brand-400 motion-safe:animate-[ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite]"
											/>
											<Volume2 aria-hidden className="relative h-4 w-4" />
										</span>
										<span className="text-[0.95rem] font-semibold tracking-wide">
											come...let’s grow
										</span>
										<ArrowRight
											aria-hidden
											className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
										/>
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Trails the sheet as it lifts; sits just below the viewport until then. */}
				<div aria-hidden className="absolute inset-x-0 top-full flex h-[3px]">
					{LOGO_DOTS.map((dot) => (
						<span
							key={dot.fill}
							className="flex-1"
							style={{ background: dot.fill }}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
