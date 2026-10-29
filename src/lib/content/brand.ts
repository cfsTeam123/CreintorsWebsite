/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import type { LanguageCode } from "../translate";

/**
 * The company names, written out per language.
 *
 * Everything else on the site is authored in English and translated on the fly
 * by Google's widget. The company names are the one thing that cannot be left
 * to it: they are coined words, so the widget guesses at them, guesses
 * *differently* on each card, and sometimes gives up and leaves one in English
 * — which is how "Creintors Teknosol" and "Creintors C-Automate" came back in
 * Devanagari while "Creintors Crienviro" stayed Latin.
 *
 * These are transliterations, not translations: the names are proper nouns with
 * no meaning to translate, so each is the *sound* of the name written in the
 * target script.
 *
 * `full` is the name as it appears on headings and cards; `short` drops the
 * leading "Creintors" for the places that already sit under the group's mark,
 * such as the header navigation.
 *
 * NOTE FOR REVIEW: these are the only hand-written non-English strings in the
 * codebase and should be signed off by a native speaker of each language before
 * launch. Editing one here changes it everywhere it appears on the site;
 * nothing else needs touching.
 */

export type BrandKey = "creintors" | "teknosol" | "cautomate" | "crienviro";

export type BrandForms = { full: string; short: string };

export const BRAND_NAMES: Record<
	LanguageCode,
	Record<BrandKey, BrandForms>
> = {
	en: {
		creintors: { full: "Creintors", short: "Creintors" },
		teknosol: { full: "Creintors Teknosol", short: "Teknosol" },
		cautomate: { full: "Creintors C-Automate", short: "C-Automate" },
		crienviro: { full: "Creintors Crienviro", short: "Crienviro" },
	},
	hi: {
		creintors: { full: "क्रेंटर्स", short: "क्रेंटर्स" },
		teknosol: { full: "क्रेंटर्स टेक्नोसोल", short: "टेक्नोसोल" },
		cautomate: { full: "क्रेंटर्स सी-ऑटोमेट", short: "सी-ऑटोमेट" },
		crienviro: { full: "क्रेंटर्स क्रिएनवायरो", short: "क्रिएनवायरो" },
	},
	// Marathi shares Devanagari with Hindi, so the names are spelled the same.
	// Kept as its own entry rather than aliased to `hi`: if a reviewer wants one
	// written differently in Marathi, this is the single place it changes.
	mr: {
		creintors: { full: "क्रेंटर्स", short: "क्रेंटर्स" },
		teknosol: { full: "क्रेंटर्स टेक्नोसोल", short: "टेक्नोसोल" },
		cautomate: { full: "क्रेंटर्स सी-ऑटोमेट", short: "सी-ऑटोमेट" },
		crienviro: { full: "क्रेंटर्स क्रिएनवायरो", short: "क्रिएनवायरो" },
	},
	kn: {
		creintors: { full: "ಕ್ರೆಂಟರ್ಸ್", short: "ಕ್ರೆಂಟರ್ಸ್" },
		teknosol: { full: "ಕ್ರೆಂಟರ್ಸ್ ಟೆಕ್ನೋಸೋಲ್", short: "ಟೆಕ್ನೋಸೋಲ್" },
		cautomate: { full: "ಕ್ರೆಂಟರ್ಸ್ ಸಿ-ಆಟೊಮೇಟ್", short: "ಸಿ-ಆಟೊಮೇಟ್" },
		crienviro: { full: "ಕ್ರೆಂಟರ್ಸ್ ಕ್ರಿಎನ್ವೈರೊ", short: "ಕ್ರಿಎನ್ವೈರೊ" },
	},
};

/** The name for `key` in `lang`, falling back to English if one is missing. */
export function brandName(
	key: BrandKey,
	lang: LanguageCode,
	form: keyof BrandForms = "full",
): string {
	return (BRAND_NAMES[lang] ?? BRAND_NAMES.en)[key][form];
}
