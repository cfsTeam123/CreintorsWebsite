/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useId, type CSSProperties } from "react";

/** The logo's own blue and the grey of the C's bar (src/assets/logos/logo.png). */
export const C_BLUE = "#00A0E3";
export const BAR_GREY = "#727271";

/**
 * Width ÷ height of the letter, and where its bar sits as a share of its height
 * — for layouts that line something up with the bar.
 */
export const C_ASPECT = 252 / 527;
export const C_BAR_TOP = 225 / 527;
export const C_BAR_HEIGHT = 73 / 527;

/**
 * The Creintors C, drawn rather than placed as an image so it stays sharp at
 * any size. Its measures are the logo's (src/assets/logos/creintorslogoC.png),
 * taken to a 252 × 527 box: corner radius 95, a 28-wide slot from y 76 to 454,
 * the two cuts either side of the bar at y 203–225 and 298–323, and the grey
 * bar itself at y 225–298.
 *
 * Sized by its height; the width follows.
 */
export default function CreintorsC({
	className,
	style,
}: {
	className?: string;
	style?: CSSProperties;
}) {
	const id = useId().replace(/:/g, "");

	return (
		<svg
			viewBox="0 0 252 527"
			aria-hidden
			className={className}
			style={{ aspectRatio: "252 / 527", ...style }}>
			<defs>
				<linearGradient
					id={`${id}-fill`}
					x1="0"
					y1="0"
					x2="0.35"
					y2="1">
					<stop
						offset="0"
						stopColor="#27b4ef"
					/>
					<stop
						offset="1"
						stopColor={C_BLUE}
					/>
				</linearGradient>
				<mask id={`${id}-cut`}>
					<rect
						width="252"
						height="527"
						rx="95"
						fill="#fff"
					/>
					<rect
						x="115"
						y="76"
						width="28"
						height="378"
						rx="14"
						fill="#000"
					/>
					<rect
						x="129"
						y="203"
						width="130"
						height="120"
						fill="#000"
					/>
				</mask>
			</defs>
			<rect
				width="252"
				height="527"
				rx="95"
				fill={`url(#${id}-fill)`}
				mask={`url(#${id}-cut)`}
			/>
			<rect
				x="144"
				y="225"
				width="108"
				height="73"
				fill={BAR_GREY}
			/>
		</svg>
	);
}
