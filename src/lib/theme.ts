export const PRIMARY = "#179EE0";
export const SECONDARY = "#46367F";

/**
 * The scrim that drops a hero image back far enough for light type to sit on
 * it.
 *
 * Two layers rather than one flat wash: a pool of shadow under the whole
 * lockup — mark, headline and figures — where the contrast has to be earned,
 * and a thin gradient elsewhere that leaves the image as an image. It stays
 * deliberately light through the upper right, which is where the division
 * images sit their subject.
 *
 * Shared by the group hero and the three division heroes so all four match —
 * they drift apart the moment they are tuned apart. The group hero carried a
 * white wash of its own until its montage was judged to be washing out; there
 * is one treatment now, not two.
 *
 * The pool has to reach the C as well as the type. Crienviro's mark is a mid
 * grey that lands within a few percent of the photograph's own luminance, so
 * without a ground under it the mark and the plant behind it read as one shape.
 */
export const HERO_SCRIM = `
	radial-gradient(86% 84% at 36% 58%, rgba(6,12,24,0.50) 0%, rgba(6,12,24,0.22) 48%, transparent 78%),
	linear-gradient(180deg, rgba(6,12,24,0.34) 0%, rgba(6,12,24,0.17) 24%, rgba(6,12,24,0.25) 56%, rgba(6,12,24,0.42) 82%, rgba(6,12,24,0.58) 100%)
`;

/**
 * "#00A0E3" -> "0, 160, 227", for the `rgba()` in cursor-tracked glow CSS.
 *
 * The glow follows the pointer through custom properties, so it has to be a
 * stylesheet rule rather than a style prop — which means the colour has to be
 * interpolated as a triplet rather than passed as a hex.
 */
export function rgbTriplet(hex: string) {
	const h = hex.replace("#", "");
	const n = parseInt(
		h.length === 3 ?
			h
				.split("")
				.map((c) => c + c)
				.join("")
		:	h,
		16,
	);
	return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

/**
 * A hex mixed toward white by `amount` (0–1), returned as a hex so the usual
 * `${tint(accent, 0.5)}33` alpha suffix still works on it.
 *
 * Two of the three division accents are dark — Cautomate's navy, Crienviro's
 * forest green — and disappear into the hero scrim. Wherever a hero paints an
 * accent onto that dark it paints this instead, so the colour still reads as
 * the division's without being lost in the shadow.
 */
export function tint(hex: string, amount: number) {
	const mixed = rgbTriplet(hex)
		.split(", ")
		.map((channel) =>
			Math.round(Number(channel) + (255 - Number(channel)) * amount)
				.toString(16)
				.padStart(2, "0"),
		)
		.join("");
	return `#${mixed}`;
}
