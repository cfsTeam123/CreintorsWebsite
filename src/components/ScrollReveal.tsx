/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollReveal — global, accessible viewport-driven animator.
 *
 * Strategy:
 * Walks the document for `.tk-fade`, `.reveal`, and `[data-reveal]` elements.
 * Elements ALREADY in the viewport at scan time are left untouched (so
 *   anything the hero's local GSAP context owns, or any element the user is
 *   already looking at, never flashes).
 * Elements BELOW the fold are "armed" (opacity 0 + small offset) and a single
 *   IntersectionObserver promotes them to `.tk-in` as they scroll in.
 * Re-scans on route changes and via a throttled MutationObserver so
 *   late-mounting content still gets animated.
 * Honours `prefers-reduced-motion` (no-op).
 *
 * Pure side-effect component returns null.
 */
export default function ScrollReveal() {
	const { pathname } = useLocation();

	useLayoutEffect(() => {
		if (typeof window === "undefined") return;

		const reducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (reducedMotion) return;

		const SELECTOR =
			".tk-fade, .reveal, .reveal-from-top, .reveal-from-bottom, .reveal-from-left, .reveal-from-right, [data-reveal]";

		const inViewport = (el: Element) => {
			const r = el.getBoundingClientRect();
			const vh = window.innerHeight || document.documentElement.clientHeight;
			return r.top < vh * 0.95 && r.bottom > 0;
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.remove("tk-armed");
						entry.target.classList.add("tk-in");
						observer.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
		);

		const armElement = (el: Element) => {
			if (el.classList.contains("tk-armed") || el.classList.contains("tk-in")) {
				return;
			}
			if (inViewport(el)) {
				// Already on screen — leave alone (avoids flash and respects any
				// local GSAP/Framer animation that already owns the element).
				el.classList.add("tk-in");
				return;
			}
			el.classList.add("tk-armed");
			observer.observe(el);
		};

		const scan = () => {
			document.querySelectorAll(SELECTOR).forEach(armElement);
		};

		// Initial arm pass before paint to avoid flicker for below-fold items.
		scan();

		// Catch late-mounting content (data fetches, hydration, deferred imports).
		const raf1 = requestAnimationFrame(scan);
		const raf2 = requestAnimationFrame(() => requestAnimationFrame(scan));
		const t1 = window.setTimeout(scan, 120);
		const t2 = window.setTimeout(scan, 480);
		const t3 = window.setTimeout(scan, 1200);

		// Watch for DOM additions (route content streams in, accordions, etc.).
		let mutationTimer: number | null = null;
		const mutationObserver = new MutationObserver(() => {
			if (mutationTimer !== null) return;
			mutationTimer = window.setTimeout(() => {
				mutationTimer = null;
				scan();
			}, 100);
		});
		mutationObserver.observe(document.body, {
			childList: true,
			subtree: true,
		});

		return () => {
			cancelAnimationFrame(raf1);
			cancelAnimationFrame(raf2);
			window.clearTimeout(t1);
			window.clearTimeout(t2);
			window.clearTimeout(t3);
			if (mutationTimer !== null) window.clearTimeout(mutationTimer);
			mutationObserver.disconnect();
			observer.disconnect();
		};
	}, [pathname]);

	return null;
}
