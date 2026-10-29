/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { PRIMARY, tint } from "../../lib/theme";
import { IMPACT_STATS } from "../../lib/content/landing";
import { afterIntro } from "../../lib/brandIntro";
import KeyedVideo from "../KeyedVideo";
// The client's final logo film (2 Oct, "Creintors logo Final.mp4": 1920×1080,
// 60fps, 15s, artwork on black, a silent sound track). Cropped to the area its
// artwork ever lights, 1216×776 at (264, 304), and cut at 6.0s: the logo is
// complete at 5.3s and the rest is the same still, apart from one glitch frame
// at 9.95s where part of the logo drops out. The page holds the last frame,
// so the cut shows nothing less. 1.8 MB down to 190 KB:
//   ffmpeg -i "Creintors logo Final.mp4" -t 6.0 -an -vf crop=1216:776:264:304
//     -c:v libx264 -crf 18 -movflags +faststart creintors-logo-final.mp4
import logoClip from "../../assets/videos/creintors-logo-final.mp4";
// Its last frame, keyed as KeyedVideo keys it, for anyone who will not see it play.
import logoStill from "../../assets/heroes/creintors-logo-final.webp";
// The client's line drawing of the Creintors works (2 Oct, "company
// silhoutte.png", 20145×5424 with a transparent ground), cut to 2880 wide.
import silhouette from "../../assets/heroes/company-silhouette.webp";
// "Made In India_000.jpg" is the logo's grey (#727271) lettering on black; the
// black is keyed out so it stands on the hero's ground like the logo does.
import madeInIndia from "../../assets/logos/made-in-india.webp";
import flagAshoka from "../../assets/logos/flag-ashoka.webp";

/** The logo clip's frame, after the crop. */
const LOGO_CLIP_W = 1216;
const LOGO_CLIP_H = 776;

/** The clip's share of the height left over by the header and the figures (2 Oct: "a little smaller"). */
const LOGO_CLIP_SCALE = 0.85;

/** The silhouette drawing's width over its height. */
const SILHOUETTE_RATIO = 20145 / 5424;

/**
 * The hero's ground, flat: the client's light blue (26 Sep). The drawing of
 * the works stands along its foot (2 Oct) and the logo clip over it: the
 * drawing's own ground is transparent and the clip's black is keyed out in the
 * browser (KeyedVideo), so both sit on this colour, and on each other, without
 * a box. The ASRS footage that once played behind the hero has its own film
 * panel under it, as on the C-Automate page.
 */
const HERO_GROUND = "#B9D9EC";

export default function HeroSection() {
	const heroRef = useRef<HTMLDivElement | null>(null);
	// The clip waits for the YO ONE intro to lift, so its build is not spent
	// under the cover.
	const [playClip, setPlayClip] = useState(false);

	useEffect(() => {
		let ctx: gsap.Context | undefined;

		// On a session's first visit the YO ONE intro covers the page; the
		// entrance waits for it to lift rather than playing out unseen beneath it.
		const cancel = afterIntro(() => {
			setPlayClip(true);
			ctx = gsap.context(() => {
				gsap.fromTo(
					".hero-fade",
					{ opacity: 0, y: 28 },
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: "power3.out",
						stagger: 0.1,
						delay: 0.35,
					},
				);
			}, heroRef);
		});

		return () => {
			cancel();
			ctx?.revert();
		};
	}, []);

	return (
		<section
			ref={heroRef}
			className="relative isolate flex h-[100svh] max-h-[100svh] flex-col justify-center gap-6 overflow-hidden pb-16 pt-24 portrait:pt-[13.5rem] md:gap-8 md:pb-20 md:pt-28 md:portrait:pt-[15rem]"
			style={{ backgroundColor: HERO_GROUND }}>
			<h1 className="sr-only">
				Creintors Group of Companies: Creators + Innovators
			</h1>

			{/*
			 * The works, along the foot of the hero. The full width wherever the
			 * screen is wide enough; on narrower screens it keeps a third of the
			 * screen's height and is cropped at the sides instead, about the tower
			 * that carries the C (30% across the drawing), so it never shrinks to
			 * a strip. In grey and multiplied into the ground, so its white walls
			 * take the sky's colour and only the linework shows (the C on its
			 * tower would otherwise answer the logo's own), and faded towards the
			 * top, where the roofs, the tower and the trees rise behind the logo:
			 * the drawing reads as ground rather than competing with it.
			 */}
			<img
				src={silhouette}
				alt=""
				aria-hidden
				width={2880}
				height={775}
				decoding="async"
				className="pointer-events-none absolute bottom-0 left-[30%] -z-10 h-auto max-w-none -translate-x-[30%] select-none mix-blend-multiply grayscale"
				style={{
					width: `max(100%, 33vh * ${SILHOUETTE_RATIO.toFixed(3)})`,
					opacity: 0.7,
					maskImage:
						"linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.3) 40%, #000 72%)",
					WebkitMaskImage:
						"linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.3) 40%, #000 72%)",
				}}
			/>

			{/*
			 * "Made in India" over the flag, in the top-right corner below the
			 * header, mirroring the clip's place against the left edge. One width
			 * for both, scaled with the screen, so they stay a pair at any size.
			 * The header is 114px tall on phones and 100px from `lg`. On a portrait
			 * screen the clip spans the width, so the hero's top padding clears
			 * the pair (the `portrait:` padding on the section); on a landscape one
			 * the clip stops short of them.
			 */}
			<div className="hero-fade pointer-events-none absolute right-5 top-[7.75rem] z-10 flex w-[clamp(6rem,11vw,11.5rem)] flex-col gap-[clamp(0.375rem,0.6vw,0.625rem)] md:right-8 md:top-32">
				<img
					src={madeInIndia}
					alt="Made in India"
					width={464}
					height={63}
					className="block h-auto w-full select-none"
				/>
				<img
					src={flagAshoka}
					alt=""
					aria-hidden
					width={480}
					height={298}
					className="block h-auto w-full select-none"
				/>
			</div>

			{/*
			 * The logo clip, near the left edge: `pl-5` on phones, where it spans
			 * the width, and in by 5vw from `md` (2 Oct: "a little to the right").
			 * Sized off the viewport height as well as the width, so the clip and
			 * the figures under it always share one screen. It plays once, then
			 * holds the finished logo.
			 */}
			<div className="w-full px-5 md:pl-[5vw]">
				<KeyedVideo
					src={logoClip}
					still={logoStill}
					width={LOGO_CLIP_W}
					height={LOGO_CLIP_H}
					start={playClip}
					className="max-w-full"
					style={{
						width: `min(100%, max(14rem, calc((100svh - 22rem) * ${((LOGO_CLIP_SCALE * LOGO_CLIP_W) / LOGO_CLIP_H).toFixed(3)})), ${Math.round(1100 * LOGO_CLIP_SCALE)}px)`,
					}}
				/>
			</div>

			<div className="container-x">
				<div className="hero-fade mx-auto w-full max-w-4xl">
					<div
						className="relative mx-auto grid grid-cols-3 overflow-hidden rounded-2xl border backdrop-blur-md"
						style={{
							borderColor: "rgba(15,23,42,0.1)",
							background: "rgba(255,255,255,0.4)",
							boxShadow:
								"0 30px 80px -40px rgba(15,23,42,0.45), inset 0 1px 0 rgba(255,255,255,0.7)",
						}}>
						{IMPACT_STATS.map((s, i) => (
							<div
								key={s.label}
								className="group relative flex flex-col items-center justify-center px-1.5 py-5 text-center sm:px-4 md:px-8 md:py-6">
								{i > 0 && (
									<span
										aria-hidden
										className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 sm:block"
										style={{
											background:
												"linear-gradient(180deg, transparent, rgba(15,23,42,0.18), transparent)",
										}}
									/>
								)}

								<div
									aria-hidden
									className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-60"
									style={{
										background: `linear-gradient(90deg, transparent, ${tint(PRIMARY, 0.55)}99, transparent)`,
									}}
								/>

								<div
									className="bg-clip-text font-display text-4xl font-bold leading-none tracking-tight text-transparent md:text-6xl"
									style={{
										backgroundImage: `linear-gradient(160deg, #0f172a 0%, #0f172a 42%, ${PRIMARY} 100%)`,
									}}>
									{s.value}
									{s.suffix}
								</div>
								{/* Tighter tracking on phones, as in the division heroes:
									    three two-word labels share a 320px row there. */}
								<div className="mt-3 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-slate-600 sm:tracking-[0.28em] md:text-xs">
									{s.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
