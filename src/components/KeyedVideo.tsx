/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * The key, as the share of full brightness of a pixel's brightest channel:
 * at or below KEY_LOW it is ground and fully transparent, from KEY_HIGH up it
 * is artwork and fully opaque, and in between (anti-aliased edges, fades from
 * black) it is partly both. KEY_HIGH sits under the dimmest solid colour in
 * the Creintors logo, its grey (~0.43), so no flat colour is thinned; KEY_LOW
 * sits over the noise H.264 leaves in black.
 */
const KEY_LOW = 0.035;
const KEY_HIGH = 0.38;

const VERTEX = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
	v_uv = a_pos * 0.5 + 0.5;
	gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

// Premultiplied output: the colour is capped at alpha, which is exactly the
// frame's own colour for anything the key leaves opaque.
const FRAGMENT = `
precision mediump float;
uniform sampler2D u_frame;
varying vec2 v_uv;
void main() {
	vec3 c = texture2D(u_frame, v_uv).rgb;
	float m = max(c.r, max(c.g, c.b));
	float a = clamp((m - ${KEY_LOW.toFixed(3)}) / ${(KEY_HIGH - KEY_LOW).toFixed(3)}, 0.0, 1.0);
	gl_FragColor = vec4(min(c, vec3(a)), a);
}`;

type Props = {
	/** A clip of artwork on pure black. */
	src: string;
	/**
	 * The clip's last frame, keyed the same way, with alpha. Shown instead of
	 * the clip to visitors who prefer reduced motion, when WebGL is unavailable,
	 * and when the browser refuses to start the clip.
	 */
	still: string;
	/** The clip's frame, in pixels. */
	width: number;
	height: number;
	/** Play once this turns true; until then the first frame shows. */
	start: boolean;
	className?: string;
	style?: CSSProperties;
};

/**
 * A clip drawn with its black ground keyed out, so the artwork alone sits over
 * whatever is behind it — a photograph or drawing, not only a flat colour.
 *
 * A browser cannot give an H.264 file transparency, and the one video format
 * that carries alpha in Chrome and Firefox (VP9 WebM) plays with a black box in
 * Safari. So the clip plays in a hidden <video>, and every new frame is drawn
 * into a WebGL canvas through a shader that turns black to transparent. It
 * plays once and the canvas keeps its last frame.
 */
export default function KeyedVideo({
	src,
	still,
	width,
	height,
	start,
	className = "",
	style,
}: Props) {
	const [showStill, setShowStill] = useState(
		() =>
			typeof window !== "undefined" &&
			!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
	);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		if (showStill) return;
		const canvas = canvasRef.current;
		const v = videoRef.current;
		if (!canvas || !v) return;

		const gl = canvas.getContext("webgl", {
			alpha: true,
			premultipliedAlpha: true,
			antialias: false,
			depth: false,
			stencil: false,
		});
		if (!gl || gl.isContextLost()) {
			setShowStill(true);
			return;
		}

		const compile = (type: number, source: string) => {
			const shader = gl.createShader(type)!;
			gl.shaderSource(shader, source);
			gl.compileShader(shader);
			return shader;
		};
		const program = gl.createProgram()!;
		gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX));
		gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT));
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			setShowStill(true);
			return;
		}
		gl.useProgram(program);

		// One quad over the whole canvas.
		gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
			gl.STATIC_DRAW,
		);
		const pos = gl.getAttribLocation(program, "a_pos");
		gl.enableVertexAttribArray(pos);
		gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

		gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.viewport(0, 0, canvas.width, canvas.height);
		gl.clearColor(0, 0, 0, 0);

		const draw = () => {
			if (v.readyState < 2 || gl.isContextLost()) return;
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, v);
			gl.clear(gl.COLOR_BUFFER_BIT);
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		};

		// Redraw on each new frame while the clip plays: per decoded frame where
		// the browser can say when one arrives, per display frame where not.
		let frameId = 0;
		const usesVfc = "requestVideoFrameCallback" in v;
		const stop = () => {
			if (usesVfc) v.cancelVideoFrameCallback(frameId);
			else cancelAnimationFrame(frameId);
		};
		const onFrame = () => {
			draw();
			if (!v.paused && !v.ended) schedule();
		};
		const schedule = () => {
			stop();
			frameId =
				usesVfc ?
					v.requestVideoFrameCallback(onFrame)
				:	requestAnimationFrame(onFrame);
		};

		const onLost = (e: Event) => {
			e.preventDefault();
			setShowStill(true);
		};

		v.addEventListener("loadeddata", draw);
		v.addEventListener("seeked", draw);
		v.addEventListener("play", schedule);
		v.addEventListener("ended", draw);
		canvas.addEventListener("webglcontextlost", onLost);
		draw();

		return () => {
			stop();
			v.removeEventListener("loadeddata", draw);
			v.removeEventListener("seeked", draw);
			v.removeEventListener("play", schedule);
			v.removeEventListener("ended", draw);
			canvas.removeEventListener("webglcontextlost", onLost);
		};
	}, [showStill]);

	useEffect(() => {
		const v = videoRef.current;
		if (!start || showStill || !v) return;
		// Autoplay can be refused (iOS Low Power Mode): show the end state then.
		void v.play().catch(() => setShowStill(true));
	}, [start, showStill]);

	if (showStill) {
		return (
			<img
				src={still}
				alt=""
				aria-hidden
				width={width}
				height={height}
				className={`pointer-events-none block h-auto w-full select-none ${className}`}
				style={style}
			/>
		);
	}

	return (
		<div
			className={`relative ${className}`}
			style={style}>
			<canvas
				ref={canvasRef}
				aria-hidden
				width={width}
				height={height}
				className="pointer-events-none block h-auto w-full select-none"
			/>
			{/* Decoded but never seen: the canvas shows its frames. Kept in the
			    layout at full size, as some mobile browsers stop handing frames
			    to WebGL from a video that is collapsed or `display: none`. */}
			<video
				ref={videoRef}
				src={src}
				aria-hidden
				tabIndex={-1}
				muted
				playsInline
				preload="auto"
				width={width}
				height={height}
				className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
			/>
		</div>
	);
}
