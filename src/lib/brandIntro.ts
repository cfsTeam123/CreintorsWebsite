/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

/**
 * The YO ONE opening (src/components/BrandIntro.tsx): whether it plays, and a
 * way for the page underneath to hold its own entrance until it has lifted.
 *
 * It plays once per browser session (tab), on the first full load of the home
 * page. A visitor who arrives on a deep link — a search result for the careers
 * page, a shared certificate — came for that page and goes straight to it, and
 * following the logo home from there is client-side navigation, which never
 * plays it: the decision is made once per document load and remembered here.
 * Refreshing the home page later in the session does not replay it either.
 */

/**
 * The five dots of the group logo, left to right, read off
 * src/assets/logos/logo.png and "GROUP w.png" (identical in both). The last dot
 * is white with a dark rim, which is what keeps it visible on a light ground.
 */
export const LOGO_DOTS = [
	{ fill: "#00A0E3" },
	{ fill: "#000080" },
	{ fill: "#138808" },
	{ fill: "#FF9933" },
	{ fill: "#FFFFFF", rim: "#1C1B17" },
] as const;

const SEEN_KEY = "creintors:intro-seen";

let playing: boolean | undefined;
const waiting = new Set<() => void>();

function decide(): boolean {
	if (typeof window === "undefined") return false;
	if (window.location.pathname !== "/") return false;
	try {
		if (window.sessionStorage.getItem(SEEN_KEY)) return false;
		window.sessionStorage.setItem(SEEN_KEY, "1");
	} catch {
		// Storage blocked (some private modes): play it. Only a full page load
		// can ask again, so the worst case is the intro on every hard refresh.
	}
	return true;
}

/** True from the first render of a session that opens on the home page until the intro starts lifting. */
export function introIsPlaying(): boolean {
	if (playing === undefined) playing = decide();
	return playing;
}

/** Called by the intro as it starts to lift, which is when the page is handed back. */
export function finishIntro() {
	playing = false;
	for (const fn of waiting) fn();
	waiting.clear();
}

/**
 * Runs `fn` once the intro has started to lift — straight away when there is
 * no intro. Returns a cancel function for effect cleanup.
 */
export function afterIntro(fn: () => void): () => void {
	if (!introIsPlaying()) {
		fn();
		return () => {};
	}
	waiting.add(fn);
	return () => {
		waiting.delete(fn);
	};
}
