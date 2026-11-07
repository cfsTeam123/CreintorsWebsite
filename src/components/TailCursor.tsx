/**
 * Designed & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * Single Creintors logo cursor with a smooth trailing effect.
 * The opposite/mirrored cursor and its tail have been removed.
 */

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import logoMark from "../assets/logos/logoc.png";

/** Intrinsic aspect ratio of logoc.png (160 × 338). */
const LOGO_ASPECT = 160 / 338;

interface TailCursorProps {
	/** Colour of the logo cursor's tail. */
	color?: string;
	/** Height of the logo mark that leads the pointer (px). */
	logoHeight?: number;
	/** How many recent samples make up the tail. */
	tailLength?: number;
	/** Stroke width at the head of the tail (px). */
	tailWidth?: number;
	/** Opacity of the tail at its head. */
	tailOpacity?: number;
	/** Colour of the thin outline around the tail. */
	borderColor?: string;
	/** Thickness of the outline (px). Set to 0 to disable it. */
	borderWidth?: number;
	/** Disable the effect when prefers-reduced-motion is enabled. */
	respectReducedMotion?: boolean;
}

interface Point {
	x: number;
	y: number;
}

export default function TailCursor({
	color = "#ffffff",
	logoHeight = 26,
	tailLength = 18,
	tailWidth = 3.5,
	tailOpacity = 0.85,
	borderColor = "rgba(15, 23, 42, 0.55)",
	borderWidth = 1,
	respectReducedMotion = false,
}: TailCursorProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const logoRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const logo = logoRef.current;

		if (!canvas || !logo) return;

		// Keep the native cursor on touch/coarse-pointer devices.
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

		const resize = () => {
			if (!ctx) return;

			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			vw = window.innerWidth;
			vh = window.innerHeight;

			canvas.width = Math.max(1, Math.floor(vw * dpr));
			canvas.height = Math.max(1, Math.floor(vh * dpr));
			canvas.style.width = `${vw}px`;
			canvas.style.height = `${vh}px`;

			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		resize();

		const pointer: Point = {
			x: vw / 2,
			y: vh / 2,
		};

		const cursor: Point = {
			x: pointer.x,
			y: pointer.y,
		};

		const follow = 0.2;
		const trail = Math.max(2, Math.round(tailLength));

		const history: Point[] = Array.from({ length: trail }, () => ({
			x: pointer.x,
			y: pointer.y,
		}));

		let active = false;
		let visible = false;
		let painted = false;
		let idleFrames = 0;
		let raf = 0;
		let last = 0;

		const IDLE_AFTER = 45;

		const hideNativeCursor = () => {
			if (painted && active) {
				document.documentElement.classList.add("tail-cursor-active");
			}
		};

		const showNativeCursor = () => {
			document.documentElement.classList.remove("tail-cursor-active");
		};

		const setVisible = (on: boolean) => {
			if (visible === on) return;

			visible = on;
			logo.style.opacity = on ? "1" : "0";

			if (!on) {
				ctx?.clearRect(0, 0, vw, vh);
				showNativeCursor();
			}
		};

		const track = (x: number, y: number) => {
			idleFrames = 0;
			pointer.x = x;
			pointer.y = y;

			if (!active) {
				cursor.x = pointer.x;
				cursor.y = pointer.y;

				for (const point of history) {
					point.x = pointer.x;
					point.y = pointer.y;
				}

				active = true;
			}

			setVisible(true);
		};

		const onPointerMove = (event: PointerEvent) => {
			if (event.pointerType && event.pointerType !== "mouse") return;
			track(event.clientX, event.clientY);
		};

		const onMouseMove = (event: MouseEvent) => {
			track(event.clientX, event.clientY);
		};

		const onLeave = () => setVisible(false);

		const onContextLost = (event: Event) => {
			event.preventDefault();
			painted = false;
			setVisible(false);
		};

		const onContextRestored = () => {
			ctx = canvas.getContext("2d");
			resize();
		};

		const strokeTail = (stroke: string, extraWidth: number) => {
			if (!ctx) return;

			ctx.lineCap = "round";
			ctx.lineJoin = "round";
			ctx.strokeStyle = stroke;

			for (let i = history.length - 1; i > 0; i--) {
				const a = history[i];
				const b = history[i - 1];
				const fade = 1 - i / history.length;

				ctx.globalAlpha = tailOpacity * fade;
				ctx.lineWidth = Math.max(0.3, tailWidth * fade) + extraWidth;
				ctx.beginPath();
				ctx.moveTo(a.x, a.y);
				ctx.lineTo(b.x, b.y);
				ctx.stroke();
			}

			ctx.globalAlpha = 1;
		};

		const drawTail = () => {
			if (borderWidth > 0) {
				strokeTail(borderColor, borderWidth * 2);
			}

			strokeTail(color, 0);
		};

		const render = (now: number) => {
			raf = requestAnimationFrame(render);

			if (!last) last = now;

			const dt = Math.min(now - last, 64);
			last = now;

			if (!active || idleFrames > IDLE_AFTER) return;

			idleFrames++;

			const frames = Math.max(dt * 0.06, 0.0001);
			const interpolation = 1 - Math.pow(1 - follow, frames);

			cursor.x += (pointer.x - cursor.x) * interpolation;
			cursor.y += (pointer.y - cursor.y) * interpolation;

			for (let i = history.length - 1; i > 0; i--) {
				history[i].x = history[i - 1].x;
				history[i].y = history[i - 1].y;
			}

			history[0].x = cursor.x;
			history[0].y = cursor.y;

			// Keep the Creintors logo upright and undistorted.
			logo.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, 0)`;

			ctx?.clearRect(0, 0, vw, vh);

			if (visible) {
				drawTail();
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
		tailLength,
		tailWidth,
		tailOpacity,
		borderColor,
		borderWidth,
		respectReducedMotion,
	]);

	if (typeof document === "undefined") return null;

	const logoWidth = logoHeight * LOGO_ASPECT;

	const sharedStyle: React.CSSProperties = {
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

	const logoStyle: React.CSSProperties = {
		...sharedStyle,
		width: logoWidth,
		height: logoHeight,
		marginLeft: -logoWidth / 2,
		marginTop: -logoHeight / 2,
		backgroundImage: `url(${logoMark})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		filter:
			borderWidth > 0
				? `drop-shadow(0 1px 2px ${borderColor})`
				: undefined,
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
			<div ref={logoRef} aria-hidden="true" style={logoStyle} />
		</>,
		document.body,
	);
}
