/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useSyncExternalStore } from "react";
import {
	DEFAULT_LANGUAGE,
	getCurrentLanguage,
	subscribeLanguage,
	type LanguageCode,
} from "./translate";

/**
 * The language the page is currently showing.
 *
 * Almost nothing needs this: the site is authored in English and Google's
 * widget rewrites it in place, so components stay language-agnostic. It exists
 * for the handful of strings we translate ourselves rather than hand to the
 * widget — the company names — so they re-render the moment a visitor switches.
 */
export function useLanguage(): LanguageCode {
	return useSyncExternalStore(
		subscribeLanguage,
		getCurrentLanguage,
		() => DEFAULT_LANGUAGE,
	);
}
