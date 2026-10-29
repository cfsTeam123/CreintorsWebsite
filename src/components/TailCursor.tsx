/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import logoMark from "../assets/logos/logoc.png";

/** Intrinsic aspect ratio of `logoc.png` (160 × 338), so it never distorts. */
const LOGO_ASPECT = 160 / 338;

/**
 * The grey bar inside the C, as shares of the mark's height (66 × 46 px of
 * `logoc.png`'s 338). The mirror dot is drawn at exactly this size, so at any
 * `logoHeight` it matches the C it mirrors — "make it the size of the dot of
 * the C" (18 Sep).
 */
const LOGO_BAR_W = 66 / 338;
const LOGO_BAR_H = 46 / 338;

interface TailCursorProps {
	/** Colour of the logo's own tail. */
	color?: string;
	/**
	 * Colour of the mirror square — the "shadow" that moves opposite the C —
	 * and of its tail. Grey, the grey of the logo's bar, per the 18 Sep change
	 * list ("the shadow white dot, please change the colour to grey").
	 */
	mirrorColor?: string;
	/** Height of the logo mark that leads the pointer (px). Width follows the
	 *  logo's own aspect ratio. */
	logoHeight?: number;
	/** How many recent samples make up each tail (longer = lazier trail). */
	tailLength?: number;
	/** Stroke width at the head of each tail (px). Kept thin. */
	tailWidth?: number;
	/** Opacity of each tail at the head (fades to nothing at the tip). */
	tailOpacity?: number;
	/**
	 * Colour of the thin outline drawn around the square and both tails.
	 * Those are white, which disappears against the light sections of
	 * the site; this edge keeps them readable there. Kept dark and partly
	 * transparent so it stays invisible against the dark sections.
	 */
	borderColor?: string;
	/** Thickness of that outline (px). 0 disables it. */
	borderWidth?: number;
	/**
	 * Honour `prefers-reduced-motion` by disabling the effect entirely.
	 * Off by default: on Windows that flag is set by "Adjust for best
	 * performance", which is a speed preference rather than a motion
	 * complaint, and it silently killed the cursor on slower laptops.
	 */
	respectReducedMotion?: boolean;
}

interface Point {
	x: number;
	y: number;
}

const TAU = Math.PI * 2;

/** Interpolate an angle toward a target along the shortest arc (no ±π snap). */
function approachAngle(current: number, target: number, t: number): number {
	let diff = ((target - current + Math.PI) % TAU) - Math.PI;
	if (diff < -Math.PI) diff += TAU;
	return current + diff * t;
}

/**
 * Two mirror-symmetric cursors, each trailing a thin tail (the idealworks.com
 * model), with the leading one wearing the Creintors "C" mark.
 *
 * Cursor 1 is the logo alone: it eases toward the pointer with smooth
 * interpolation (lerp, so it never sticks to the pointer). Cursor 2 is the
 * plain square, the exact
 * point-reflection of cursor 1 through the centre of the viewport: move left
 * and it moves right, up becomes down. It still stretches and rotates along its
 * direction of travel. Behind each a thin tail is drawn along cursor 1's recent
 * path; the second tail is simply the first mirrored through centre. The pair
 * is always symmetric about screen centre and the two only meet when the
 * pointer is exactly at the centre.
 *
 * The logo deliberately does *not* take the rotate/stretch treatment — a brand
 * mark that spins and squashes reads as broken. The square keeps it, since a
 * rectangle is unchanged by a 180° turn and so the mirror stays exact.
 *
 * Everything moves on GPU-friendly CSS transforms (`translate3d`, never
 * `top`/`left`); the thin tails are drawn on a canvas that sits just behind.
 * Everything is delta-time based (frame-rate independent) and driven by a
 * single requestAnimationFrame loop. All elements are portalled to <body> and
 * fully inline-styled so no ancestor transform, filter or overflow rule can
 * clip them. The native cursor is only hidden once a frame has actually been
 * painted, so a failure here can never leave a visitor with no pointer at all.
 * On touch / coarse-pointer devices the effect disables itself and the native
 * cursor is left alone.
 */
export default function TailCursor({
	color = "#ffffff",
	mirrorColor = "#727271",
	logoHeight = 26,
	tailLength = 18,
	tailWidth = 3.5,
	tailOpacity = 0.85,
	borderColor = "rgba(15, 23, 42, 0.55)",
	borderWidth = 1,
	respectReducedMotion = false,
}: TailCursorProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const oneRef = useRef<HTMLDivElement | null>(null);
	const twoRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const one = oneRef.current;
		const two = twoRef.current;
		if (!canvas || !one || !two) return;

		// Touch / no true pointing device — leave the native cursor alone.
		const finePointer = window.matchMedia?.("(pointer: fine)").matches ?? true;
		if (!finePointer) return;

		if (
			respectReducedMotion &&
			window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
		) {
			return;
		}

		let ctx = canvas.getContext("2d");
		if (!ctx) return;

		let vw = 0;
		let vh = 0;
		// Viewport centre — the axis both cursors are symmetric about.
		const center = { x: 0, y: 0 };

		const resize = () => {
			if (!ctx) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			vw = window.innerWidth;
			vh = window.innerHeight;
			center.x = vw / 2;
			center.y = vh / 2;
			canvas.width = Math.max(1, Math.floor(vw * dpr));
			canvas.height = Math.max(1, Math.floor(vh * dpr));
			canvas.style.width = `${vw}px`;
			canvas.style.height = `${vh}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();

		// Raw pointer target (the only thing the DOM events write to).
		const pointer = { x: center.x, y: center.y };

		// Physics for cursor 1. Cursor 2 is derived from it every frame.
		const c1 = { x: pointer.x, y: pointer.y, angle: 0, stretch: 0 };
		const follow = 0.2; // lerp toward the pointer, per 60 fps frame
		const stretchK = 0.06; // how strongly speed becomes elongation
		const maxStretch = 1.0; // upper bound on that elongation

		// Recent positions of cursor 1, newest first. Cursor 1's tail is drawn
		// along these; cursor 2's tail is their mirror through centre.
		const trail = Math.max(2, Math.round(tailLength));
		const history: Point[] = Array.from({ length: trail }, () => ({
			x: pointer.x,
			y: pointer.y,
		}));

		let active = false;
		let painted = false;
		let visible = false;

		const hideNativeCursor = () => {
			if (painted && active) {
				document.documentElement.classList.add("tail-cursor-active");
			}
		};
		const showNativeCursor = () =>
			document.documentElement.classList.remove("tail-cursor-active");

		const setVisible = (on: boolean) => {
			if (visible === on) return;
			visible = on;
			one.style.opacity = on ? "1" : "0";
			two.style.opacity = on ? "1" : "0";
			if (!on) {
				ctx?.clearRect(0, 0, vw, vh);
				showNativeCursor();
			}
		};

		const track = (x: number, y: number) => {
			// Any movement wakes the render loop back up.
			idleFrames = 0;
			pointer.x = x;
			pointer.y = y;
			if (!active) {
				// Snap cursor 1 and the whole tail to the first known position.
				c1.x = pointer.x;
				c1.y = pointer.y;
				for (const p of history) {
					p.x = pointer.x;
					p.y = pointer.y;
				}
				active = true;
			}
			setVisible(true);
		};

		const onPointerMove = (e: PointerEvent) => {
			// A real mouse or trackpad drives the cursors; touch and pen do not.
			if (e.pointerType && e.pointerType !== "mouse") return;
			track(e.clientX, e.clientY);
		};
		// Fallback for browsers without PointerEvent (older Safari).
		const onMouseMove = (e: MouseEvent) => track(e.clientX, e.clientY);

		const onLeave = () => setVisible(false);

		const onContextLost = (e: Event) => {
			e.preventDefault();
			painted = false;
			setVisible(false);
		};
		const onContextRestored = () => {
			ctx = canvas.getContext("2d");
			resize();
		};

		// One stroke pass along cursor 1's history buffer, optionally mirrored
		// through centre for cursor 2. `extra` widens the stroke on both sides,
		// which is how the outline pass is drawn underneath the tail itself.
		const strokeTail = (mirror: boolean, stroke: string, extra: number) => {
			if (!ctx) return;
			ctx.lineCap = "round";
			ctx.lineJoin = "round";
			ctx.strokeStyle = stroke;
			for (let i = history.length - 1; i > 0; i--) {
				const a = history[i];
				const b = history[i - 1];
				const ax = mirror ? 2 * center.x - a.x : a.x;
				const ay = mirror ? 2 * center.y - a.y : a.y;
				const bx = mirror ? 2 * center.x - b.x : b.x;
				const by = mirror ? 2 * center.y - b.y : b.y;
				const fade = 1 - i / history.length; // ~1 at head, ->0 at tip
				ctx.globalAlpha = tailOpacity * fade;
				ctx.lineWidth = Math.max(0.3, tailWidth * fade) + extra;
				ctx.beginPath();
				ctx.moveTo(ax, ay);
				ctx.lineTo(bx, by);
				ctx.stroke();
			}
			ctx.globalAlpha = 1;
		};

		// Thin outline first, then the tail on top of it — so the tail keeps a
		// readable edge on light backgrounds. Both passes carry the same
		// head-to-tip fade, so the outline disappears with the tail.
		const drawTail = (mirror: boolean) => {
			if (borderWidth > 0) strokeTail(mirror, borderColor, borderWidth * 2);
			strokeTail(mirror, mirror ? mirrorColor : color, 0);
		};

		let raf = 0;
		let last = 0;
		/*
		 * Frames since the cursor last had anything to do.
		 *
		 * The loop clears and repaints a full-viewport canvas every frame. While
		 * you are scrolling with the pointer held still — which is most of the
		 * time — that was a wasted clear plus a tail redraw competing with the
		 * scroll for the same frame budget. Once the squares have caught up with
		 * a stationary pointer and the tail has collapsed, there is nothing left
		 * to draw, so the loop idles until the pointer moves again.
		 */
		let idleFrames = 0;
		const IDLE_AFTER = 45;

		const render = (now: number) => {
			raf = requestAnimationFrame(render);
			if (!last) last = now;
			// Delta time in ms, clamped so a background tab (huge dt) can't fling
			// the squares across the screen when it regains focus.
			const dt = Math.min(now - last, 64);
			last = now;
			if (!active) return;

			// Settled on a stationary pointer: nothing has moved for long enough
			// that the tail has fully collapsed, so skip the canvas work entirely
			// until the next pointer move resets the counter.
			if (idleFrames > IDLE_AFTER) return;
			idleFrames++;

			// Elapsed time in 60 fps frames — the unit every rate is tuned in,
			// which is what makes the motion frame-rate independent.
			const frames = Math.max(dt * 0.06, 0.0001);

			// Cursor 1: frame-rate-independent lerp toward the pointer.
			const f = 1 - Math.pow(1 - follow, frames);
			const nx = c1.x + (pointer.x - c1.x) * f;
			const ny = c1.y + (pointer.y - c1.y) * f;

			// Velocity, normalised to px per 60 fps frame.
			const vx = (nx - c1.x) / frames;
			const vy = (ny - c1.y) / frames;
			c1.x = nx;
			c1.y = ny;
			const speed = Math.hypot(vx, vy);

			// Advance the tail buffer: shift back, newest sample at the head.
			for (let i = history.length - 1; i > 0; i--) {
				history[i].x = history[i - 1].x;
				history[i].y = history[i - 1].y;
			}
			history[0].x = c1.x;
			history[0].y = c1.y;

			// Speed drives elongation; ease toward it (and back to a plain square
			// as the pointer settles).
			const targetStretch = Math.min(speed * stretchK, maxStretch);
			c1.stretch += (targetStretch - c1.stretch) * (1 - Math.pow(1 - 0.25, frames));

			// Rotate to the movement vector while moving; unwind to upright at rest.
			const targetAngle = speed > 0.35 ? Math.atan2(vy, vx) : 0;
			c1.angle = approachAngle(c1.angle, targetAngle, 1 - Math.pow(1 - 0.2, frames));

			const sx = 1 + c1.stretch;
			const sy = Math.max(0.35, 1 - c1.stretch * 0.55);
			const deg = (c1.angle * 180) / Math.PI;

			// Cursor 1 — the logo mark. Translated only: no rotate, no stretch,
			// so the brand mark stays upright and undistorted at every speed.
			one.style.transform = `translate3d(${c1.x}px, ${c1.y}px, 0)`;

			// Cursor 2: exact point-reflection through the viewport centre. A
			// rectangle is unchanged by a 180° turn, so the same rotate/scale at
			// the mirrored position yields a perfectly symmetric twin.
			const mx = 2 * center.x - c1.x;
			const my = 2 * center.y - c1.y;
			two.style.transform = `translate3d(${mx}px, ${my}px, 0) rotate(${deg}deg) scale(${sx}, ${sy})`;

			// Both thin tails.
			ctx?.clearRect(0, 0, vw, vh);
			if (visible) {
				drawTail(false);
				drawTail(true);
			}

			painted = true;
			hideNativeCursor();
		};
		raf = requestAnimationFrame(render);

		if (typeof window.PointerEvent === "function") {
			window.addEventListener("pointermove", onPointerMove, { passive: true });
		} else {
			window.addEventListener("mousemove", onMouseMove, { passive: true });
		}
		window.addEventListener("resize", resize);
		document.addEventListener("mouseleave", onLeave);
		window.addEventListener("blur", onLeave);
		canvas.addEventListener("contextlost", onContextLost);
		canvas.addEventListener("contextrestored", onContextRestored);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("resize", resize);
			document.removeEventListener("mouseleave", onLeave);
			window.removeEventListener("blur", onLeave);
			canvas.removeEventListener("contextlost", onContextLost);
			canvas.removeEventListener("contextrestored", onContextRestored);
			showNativeCursor();
		};
	}, [
		color,
		mirrorColor,
		logoHeight,
		tailLength,
		tailWidth,
		tailOpacity,
		borderColor,
		borderWidth,
		respectReducedMotion,
	]);

	if (typeof document === "undefined") return null;

	// Shared by every layer: fixed, never interactive, never part of a
	// selection, and above everything. Inline-styled so none of it depends on a
	// stylesheet having loaded.
	const layer: React.CSSProperties = {
		position: "fixed",
		top: 0,
		left: 0,
		opacity: 0,
		pointerEvents: "none",
		userSelect: "none",
		willChange: "transform, opacity",
		backfaceVisibility: "hidden",
		transition: "opacity 220ms ease",
		zIndex: 2147483647,
	};

	// Cursor 1 — the Creintors "C". Width is derived from the logo's own aspect
	// ratio so it can never stretch, and the margins centre it on the point it
	// tracks. A soft drop-shadow (rather than the square's hard outline) keeps
	// it readable over both the light and the dark sections.
	const logoWidth = logoHeight * LOGO_ASPECT;
	const logoStyle: React.CSSProperties = {
		...layer,
		width: logoWidth,
		height: logoHeight,
		marginLeft: -logoWidth / 2,
		marginTop: -logoHeight / 2,
		backgroundImage: `url(${logoMark})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		filter:
			borderWidth > 0 ? `drop-shadow(0 1px 2px ${borderColor})` : undefined,
	};

	// Cursor 2 — the mirror dot, the size of the C's own grey bar. Centred on
	// its transform origin so the rotate/scale pivot about the point it tracks.
	// A soft shadow like the C's rather than the hard 1px outline it used to
	// carry: at this size a ring all round made it read a size larger.
	const dotWidth = logoHeight * LOGO_BAR_W;
	const dotHeight = logoHeight * LOGO_BAR_H;
	const squareStyle: React.CSSProperties = {
		...layer,
		width: dotWidth,
		height: dotHeight,
		marginLeft: -dotWidth / 2,
		marginTop: -dotHeight / 2,
		background: mirrorColor,
		boxShadow:
			borderWidth > 0 ? `0 1px 2px ${borderColor}` : undefined,
	};

	return createPortal(
		<>
			<canvas
				ref={canvasRef}
				aria-hidden="true"
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					pointerEvents: "none",
					zIndex: 2147483646,
				}}
			/>
			<div ref={oneRef} aria-hidden="true" style={logoStyle} />
			<div ref={twoRef} aria-hidden="true" style={squareStyle} />
		</>,
		document.body,
	);
}
