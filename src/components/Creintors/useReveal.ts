/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef } from "react";

/**
 * Reveal hook disabled. Returns a ref so existing callers keep working,
 * but performs no scroll-triggered animation. `.tk-fade` elements stay
 * fully visible from mount.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
	_selector = ".tk-fade",
) {
	return useRef<T | null>(null);
}
