/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { PRIMARY, SECONDARY } from "@/lib/theme";

/** How far down the page the reader must be before the button appears. */
const REVEAL_AT = 400;

/**
 * A floating "back to top" control, pinned to the bottom-right of the viewport.
 *
 * It used to live inside the sub-page rail, where it only existed on the four
 * pages that render one and competed for width with the section tabs. As a
 * fixed affordance it is reachable from every page and every scroll position,
 * and the rail gets that space back for the contact CTA.
 *
 * Hidden until the reader is `REVEAL_AT` past the top — at the top of a page it
 * would be a button that does nothing.
 */
export default function BackToTopButton() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		let frame = 0;
		const read = () => {
			frame = 0;
			setVisible(window.scrollY > REVEAL_AT);
		};
		// Scroll fires far faster than we can paint; coalesce to one read a frame.
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(read);
		};

		read();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	}, []);

	const scrollToTop = () => {
		const reduced = window.matchMedia?.(
			"(prefers-reduced-motion: reduce)",
		).matches;
		window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
	};

	return (
		<button
			type="button"
			onClick={scrollToTop}
			aria-label="Back to top"
			title="Back to top"
			// `invisible` (not just opacity) so the hidden button never swallows a
			// tap over whatever sits in that corner.
			className={`group/top fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-300 ease-out md:bottom-8 md:right-8 md:h-14 md:w-14 ${
				visible ?
					"translate-y-0 scale-100 opacity-100 hover:-translate-y-1"
				:	"invisible translate-y-3 scale-90 opacity-0"
			}`}
			style={{
				background: `linear-gradient(135deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
				boxShadow: `0 18px 38px -14px ${PRIMARY}cc, inset 0 0 0 1px rgba(255,255,255,0.22)`,
			}}>
			{/* Soft halo that swells on hover, echoing the header CTA's sheen. */}
			<span
				aria-hidden
				className="absolute inset-0 -z-10 rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover/top:opacity-70"
				style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})` }}
			/>
			<ArrowUp
				aria-hidden
				className="h-5 w-5 transition-transform duration-300 group-hover/top:-translate-y-0.5 md:h-6 md:w-6"
				strokeWidth={2.5}
			/>
		</button>
	);
}
