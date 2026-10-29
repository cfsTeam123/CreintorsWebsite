/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Forces every route change to start at the top of the page.
 *
 * Strategy:
 * Disable browser scroll restoration so back/forward never drops us mid-page.
 * useLayoutEffect to scroll BEFORE the new page paints (avoids the "I see the
 *   new page at the old scroll" flash).
 * Re-fire after RAF + small + medium timeouts to outlast the page-transition
 *   tween, async image layout and any restored scroll positions.
 * Targets every plausible scrolling element (window, html, body,
 *   scrollingElement, #root) because some smooth-scroll setups hijack one of
 *   them.
 * Respects `#hash` links those are anchor jumps, not page-load resets.
 */
export default function ScrollToTop() {
	const { pathname, hash, key } = useLocation();
	const navType = useNavigationType();
	const lastKeyRef = useRef<string | null>(null);

	useEffect(() => {
		if ("scrollRestoration" in window.history) {
			window.history.scrollRestoration = "manual";
		}
	}, []);

	useLayoutEffect(() => {
		// Same location object key (e.g. just a re-render) skip.
		if (lastKeyRef.current === key) return;
		lastKeyRef.current = key;

		/*
		 * Anchor link (e.g. /about/philosophy#core-values).
		 *
		 * On a full page load the browser finds the element itself, but on a
		 * client-side navigation it does nothing — the route swaps and the page
		 * stays wherever it was. Seek the target instead, retrying while the
		 * page-transition tween and image layout settle, and stop as soon as it
		 * lands so it can't fight the visitor's own scrolling.
		 */
		if (hash) {
			const id = decodeURIComponent(hash.slice(1));
			let landed = false;
			const seek = () => {
				if (landed) return;
				const el = document.getElementById(id);
				if (!el) return;
				el.scrollIntoView({ block: "start" });
				landed = true;
			};

			seek();
			const ra = requestAnimationFrame(seek);
			const ta = window.setTimeout(seek, 100);
			const tb = window.setTimeout(seek, 400);

			return () => {
				cancelAnimationFrame(ra);
				window.clearTimeout(ta);
				window.clearTimeout(tb);
			};
		}

		const jump = () => {
			try {
				window.scrollTo(0, 0);
			} catch {
				/* noop */
			}
			if (document.scrollingElement) {
				document.scrollingElement.scrollTop = 0;
			}
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
			const root = document.getElementById("root");
			if (root) root.scrollTop = 0;
			const top = document.getElementById("top");
			if (top) top.scrollTop = 0;
		};

		jump();
		const r1 = requestAnimationFrame(jump);
		const r2 = requestAnimationFrame(() => requestAnimationFrame(jump));
		const t1 = window.setTimeout(jump, 50);
		const t2 = window.setTimeout(jump, 300);
		const t3 = window.setTimeout(jump, 1000);

		return () => {
			cancelAnimationFrame(r1);
			cancelAnimationFrame(r2);
			window.clearTimeout(t1);
			window.clearTimeout(t2);
			window.clearTimeout(t3);
		};
	}, [pathname, hash, key, navType]);

	return null;
}
