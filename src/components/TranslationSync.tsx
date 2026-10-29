/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { reapplyLanguage } from "../lib/translate";

/**
 * Keeps the chosen language applied across route changes.
 *
 * Renders nothing — the same shape as ScrollToTop, and for the same reason: a
 * navigation in this app swaps the page body wholesale, and the widget needs
 * telling that there is new English on the page. A no-op for English visitors.
 */
export default function TranslationSync() {
	const { pathname } = useLocation();

	useEffect(() => {
		reapplyLanguage();
	}, [pathname]);

	return null;
}
