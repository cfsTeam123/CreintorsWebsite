/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, RotateCcw, Volume2, VolumeX } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * What the centre of the panel offers, when it offers anything: "play" when the
 * browser refused to start the film itself, "replay" once it has played through.
 */
type Prompt = "play" | "replay" | null;

type Props = {
	/** The division's film — the one that used to loop behind its hero. */
	src: string;
	/** The still its hero now holds, standing in until the film has loaded. */
	poster: string;
	/** Division accent, for the bloom behind the panel. */
	accent: string;
	/**
	 * The file carries a sound track. Browsers only autoplay muted, so a film
	 * with sound gets a control to hear it from the start.
	 */
	hasAudio?: boolean;
	/** What the film is, for assistive technology when it has sound. */
	label?: string;
	/**
	 * Play on repeat. Only the home page's short, silent ASRS cut does; the
	 * company films play once (28 Sep).
	 */
	loop?: boolean;
	className?: string;
};

/**
 * A division's film, in its own "About Us" section straight after the hero
 * (17 Sep change list — it used to sit at the foot of the About copy).
 *
 * All three heroes used to play these films full-bleed behind the headline,
 * under a white wash — which is to say barely visible,
 * and paid for on every visit whether or not anyone looked at them. Each hero
 * now holds a frame of its own film, and the film plays here instead: 80vw,
 * outside the text column, with nothing washed over it.
 *
 * 28 Sep change list: the company films no longer repeat. Each plays once, then
 * stops on its last frame with its sound muted and a "Watch again" button over
 * it. Because the one play is all a visitor gets, it starts only once the panel
 * is on screen, and a silent film pauses while it is scrolled out of view. A
 * film playing with sound keeps going, so the narration can be followed while
 * reading on.
 */
export default function DivisionFilm({
	src,
	poster,
	accent,
	hasAudio = false,
	label,
	loop = false,
	className = "",
}: Props) {
	const ref = useRef<HTMLVideoElement | null>(null);
	/**
	 * These run to tens of megabytes, so the `src` is only attached once the
	 * panel is near the viewport — a visitor who never scrolls this far never
	 * pays for it.
	 */
	const [load, setLoad] = useState(false);
	const [soundOn, setSoundOn] = useState(false);
	const [prompt, setPrompt] = useState<Prompt>(null);
	const inView = useRef(false);

	// Start (or resume) the film without sound, as browsers allow. Never after it
	// has ended: `play()` on an ended film would quietly start it over.
	const playMuted = () => {
		const v = ref.current;
		if (!v || !v.currentSrc || v.ended || !v.paused) return;
		v.play().then(
			() => setPrompt(null),
			() => setPrompt("play"),
		);
	};

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(
			(entries) => {
				if (entries.some((e) => e.isIntersecting)) {
					setLoad(true);
					io.disconnect();
				}
			},
			{ rootMargin: "300px" },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	// Plays while a good part of the panel is on screen. Out of view, a silent
	// film pauses to keep its one play for when it is seen.
	useEffect(() => {
		const v = ref.current;
		if (!v) return;
		const io = new IntersectionObserver(
			([entry]) => {
				inView.current = entry.isIntersecting;
				if (entry.isIntersecting) playMuted();
				else if (v.muted && !v.paused) v.pause();
			},
			{ threshold: 0.4 },
		);
		io.observe(v);
		return () => io.disconnect();
	}, []);

	// The panel may already be in view when the `src` arrives.
	useEffect(() => {
		if (load && inView.current) playMuted();
	}, [load]);

	// Once through: stop on the last frame, muted, and offer it again.
	const onEnded = () => {
		const v = ref.current;
		if (v) v.muted = true;
		setSoundOn(false);
		setPrompt("replay");
	};

	// From the top, and with sound where the film has it — a click is what lets
	// the browser play it audibly.
	const playFromStart = () => {
		const v = ref.current;
		if (!v) return;
		v.currentTime = 0;
		v.muted = !hasAudio;
		setSoundOn(hasAudio);
		setPrompt(null);
		void v.play().catch(() => {
			v.muted = true;
			setSoundOn(false);
			setPrompt("play");
		});
	};

	// Turning sound on starts the film over, so the narration is heard from its
	// first line rather than joined mid-sentence.
	const toggleSound = () => {
		const v = ref.current;
		if (!v) return;
		if (!load) setLoad(true);
		if (v.muted) {
			v.muted = false;
			v.currentTime = 0;
			void v.play().catch(() => {});
			setSoundOn(true);
		} else {
			v.muted = true;
			setSoundOn(false);
		}
	};

	return (
		<motion.div
			className={`relative mx-auto w-[80vw] max-w-[1600px] ${className}`}
			initial={{ opacity: 0, y: 44 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.9, ease: EASE }}>
			{/* Accent bloom, so the panel is lit rather than pasted on. */}
			<div
				aria-hidden
				className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] blur-3xl"
				style={{ background: `${accent}1f` }}
			/>
			<div
				className="relative overflow-hidden rounded-3xl border bg-white"
				style={{
					borderColor: "rgba(15,23,42,0.10)",
					boxShadow: "0 44px 100px -46px rgba(15,23,42,0.42)",
				}}>
				{/* `h-auto` on a 16:9 file: the whole frame plays, uncropped. */}
				<video
					ref={ref}
					src={load ? src : undefined}
					poster={poster}
					aria-hidden={hasAudio ? undefined : true}
					aria-label={hasAudio ? label : undefined}
					muted
					loop={loop}
					playsInline
					preload="none"
					onEnded={onEnded}
					className="block h-auto w-full"
				/>

				<AnimatePresence>
					{prompt && (
						<motion.div
							key="prompt"
							className="absolute inset-0 flex items-center justify-center bg-black/35"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.4, ease: EASE }}>
							<button
								type="button"
								onClick={playFromStart}
								className="inline-flex items-center gap-2.5 rounded-full bg-white/95 px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] transition hover:scale-[1.03] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6 sm:py-3.5 sm:text-base">
								{prompt === "replay" ?
									<RotateCcw
										aria-hidden
										className="h-4 w-4 sm:h-5 sm:w-5"
										style={{ color: accent }}
									/>
								:	<Play
										aria-hidden
										className="h-4 w-4 sm:h-5 sm:w-5"
										style={{ color: accent }}
									/>
								}
								{prompt === "replay" ? "Watch again" : "Play film"}
							</button>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Off while the panel offers a play: that button starts the film
				    with its sound anyway. */}
				{hasAudio && !prompt && (
					<button
						type="button"
						onClick={toggleSound}
						aria-pressed={soundOn}
						className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/55 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-5 sm:left-5 sm:px-4 sm:py-2.5 sm:text-sm">
						{soundOn ?
							<Volume2
								aria-hidden
								className="h-4 w-4 sm:h-5 sm:w-5"
							/>
						:	<VolumeX
								aria-hidden
								className="h-4 w-4 sm:h-5 sm:w-5"
							/>
						}
						{soundOn ? "Mute" : "Play with sound"}
					</button>
				)}
			</div>
		</motion.div>
	);
}
