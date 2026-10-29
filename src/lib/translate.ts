/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

/**
 * Google Translate integration.
 *
 * The site's content is authored in English; this layer lets a visitor read it
 * in Hindi, Marathi or Kannada without any change to the routes, the markup or
 * the content itself.
 *
 * How it works
 * ------------
 * Google's "translate element" widget is loaded once, on demand, into a hidden
 * container that lives *outside* the React tree (appended straight to <body>).
 * React therefore never reconciles the widget's own DOM, and the widget is only
 * fetched when a visitor actually wants a translation — an English-only visitor
 * pays nothing for it.
 *
 * The widget renders a hidden <select class="goog-te-combo">; setting its value
 * and firing a change event re-translates the page in place, with no reload. A
 * `googtrans` cookie is written alongside so a hard refresh or a direct link to
 * another route comes back in the same language, and the choice is mirrored in
 * localStorage as the source of truth for our own UI.
 *
 * No API key is involved: the element widget is a public, key-less embed.
 */

export type LanguageCode = "en" | "hi" | "mr" | "kn";

export type Language = {
	code: LanguageCode;
	/** Full name, in that language's own script, shown on the control and in the dropdown. */
	label: string;
	/** Read out by screen readers, kept in English. */
	englishName: string;
};

export const LANGUAGES: Language[] = [
	{ code: "en", label: "English", englishName: "English" },
	{ code: "hi", label: "हिंदी", englishName: "Hindi" },
	{ code: "mr", label: "मराठी", englishName: "Marathi" },
	{ code: "kn", label: "ಕನ್ನಡ", englishName: "Kannada" },
];

export const DEFAULT_LANGUAGE: LanguageCode = "en";

const STORAGE_KEY = "language";
const SOURCE_LANGUAGE = "en";
const WIDGET_ID = "google_translate_element";
const SCRIPT_ID = "google-translate-script";
const SCRIPT_SRC =
	"https://translate.google.com/translate_a/element.js?cb=__creintorsTranslateInit";

const isBrowser = () => typeof window !== "undefined";

function isLanguageCode(value: unknown): value is LanguageCode {
	return LANGUAGES.some((l) => l.code === value);
}

/** The language to show on this visit: the saved one, else English. */
export function getSavedLanguage(): LanguageCode {
	if (!isBrowser()) return DEFAULT_LANGUAGE;
	try {
		const saved = window.localStorage.getItem(STORAGE_KEY);
		return isLanguageCode(saved) ? saved : DEFAULT_LANGUAGE;
	} catch {
		// Private mode / storage disabled — fall back to English.
		return DEFAULT_LANGUAGE;
	}
}

function saveLanguage(code: LanguageCode) {
	try {
		window.localStorage.setItem(STORAGE_KEY, code);
	} catch {
		/* storage unavailable — the cookie below still carries the choice */
	}
}

/* ──────────────────────────── script + webfonts ─────────────────────────── */

/**
 * The web font that covers each language's script.
 *
 * The site's type stack is Latin-only — Cambria for headings, Inter for body.
 * Rendering Devanagari or Kannada through it leaves the browser substituting
 * whatever Indic font the machine happens to have, while the line box is still
 * measured from Cambria's and Inter's metrics. Those scripts stack vowel marks
 * well above and below the base letter, so the glyphs came out taller than the
 * box reserved for them and their tops and tails were sliced off — worst on the
 * gradient headings, where `background-clip: text` paints only inside the box.
 *
 * Naming a real font per script fixes the metrics. index.css does the rest,
 * keyed off the `data-script` attribute stamped below.
 *
 * Fetched only when a visitor actually picks that language, in keeping with the
 * rest of this module: an English-only visitor downloads none of it.
 */
const SCRIPT_FONTS: Partial<Record<LanguageCode, string>> = {
	hi: "https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400..700&family=Noto+Serif+Devanagari:wght@400..700&display=swap",
	mr: "https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400..700&family=Noto+Serif+Devanagari:wght@400..700&display=swap",
	kn: "https://fonts.googleapis.com/css2?family=Noto+Sans+Kannada:wght@400..700&family=Noto+Serif+Kannada:wght@400..700&display=swap",
};

/** `latin` for English, `indic` for the three Indian languages. */
function scriptFor(code: LanguageCode): "latin" | "indic" {
	return code === DEFAULT_LANGUAGE ? "latin" : "indic";
}

/** Add the stylesheet for this language's script. Idempotent. */
function loadScriptFont(code: LanguageCode) {
	const href = SCRIPT_FONTS[code];
	if (!href) return;

	const id = `script-font-${code}`;
	if (document.getElementById(id)) return;

	const link = document.createElement("link");
	link.id = id;
	link.rel = "stylesheet";
	link.href = href;
	document.head.appendChild(link);
}

/**
 * Tell the stylesheet which script the page is in.
 *
 * Separate from the listener notification below because it has to run even when
 * the language has not changed — on a reload the saved language is already the
 * current one, but the attribute still needs to be put back on a fresh <html>.
 */
function stampScript(code: LanguageCode) {
	if (!isBrowser()) return;
	const root = document.documentElement;
	root.setAttribute("data-lang", code);
	root.setAttribute("data-script", scriptFor(code));
}

/* ─────────────────────── the language, as an observable ─────────────────── */

/**
 * The language the page is currently showing, plus a subscription so React can
 * render our own strings in step with the widget.
 *
 * Google translates the authored English in place, but it has no idea what
 * "Creintors C-Automate" is supposed to become — left alone it invents a
 * different transliteration for each company name and sometimes none at all.
 * The names are therefore rendered from `BRAND_NAMES` rather than translated,
 * and this is what tells the components which one to render.
 */
type LanguageListener = (code: LanguageCode) => void;

const listeners = new Set<LanguageListener>();
let currentLanguage: LanguageCode | null = null;

/**
 * The active language. Reads through to the saved value the first time, so a
 * component that renders before any switch still gets the right answer.
 */
export function getCurrentLanguage(): LanguageCode {
	if (currentLanguage === null) currentLanguage = getSavedLanguage();
	return currentLanguage;
}

/** Subscribe to language changes. Returns the unsubscribe function. */
export function subscribeLanguage(listener: LanguageListener): () => void {
	listeners.add(listener);
	return () => {
		listeners.delete(listener);
	};
}

/**
 * Record the language the page is now in and tell every subscriber.
 *
 * Only called once a switch has actually taken effect — if the widget could not
 * be reached the page is still in the previous language, and saying otherwise
 * would put the company names out of step with everything around them.
 */
function announceLanguage(code: LanguageCode) {
	stampScript(code);
	if (currentLanguage === code) return;
	currentLanguage = code;
	for (const listener of listeners) listener(code);
}

/* ───────────────────────────── googtrans cookie ─────────────────────────── */

/**
 * Google reads `googtrans=/<source>/<target>` on load. Written for the exact
 * host and, where there is one, the registrable domain, so it survives a
 * refresh on both `example.com` and `www.example.com`.
 */
function writeCookie(target: LanguageCode) {
	const value =
		target === SOURCE_LANGUAGE ? "" : `/${SOURCE_LANGUAGE}/${target}`;
	const host = window.location.hostname;
	const parts = host.split(".");
	const domains = [""];
	if (parts.length > 1 && !/^\d+(\.\d+){3}$/.test(host)) {
		domains.push(`; domain=.${parts.slice(-2).join(".")}`);
	}

	for (const domain of domains) {
		document.cookie =
			value ?
				`googtrans=${value}; path=/${domain}`
			:	`googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${domain}`;
	}
}

/* ─────────────────────────── React / widget guard ───────────────────────── */

let guardInstalled = false;

/**
 * Google's widget rewrites text nodes in place (wrapping them in <font> tags).
 * When React later updates one of those nodes it can find the child it wants to
 * remove is no longer where it left it, and throws NotFoundError, taking the
 * page down.
 *
 * These two wrappers make the operations no-ops instead of throws when the node
 * has already moved. It is the standard mitigation for running the widget on a
 * React page, and it only ever changes behaviour in the case that would
 * otherwise have crashed. Installed lazily, so a visitor who never translates
 * never gets the patch.
 */
function installDomGuard() {
	if (guardInstalled || typeof Node !== "function" || !Node.prototype) return;
	guardInstalled = true;

	const { removeChild, insertBefore } = Node.prototype;

	Node.prototype.removeChild = function <T extends Node>(child: T): T {
		if (child.parentNode !== this) return child;
		return removeChild.call(this, child) as T;
	};

	Node.prototype.insertBefore = function <T extends Node>(
		node: T,
		reference: Node | null,
	): T {
		if (reference && reference.parentNode !== this) return node;
		return insertBefore.call(this, node, reference) as T;
	};
}

/* ────────────────────────────── widget loading ──────────────────────────── */

type TranslateGlobals = {
	__creintorsTranslateInit?: () => void;
	google?: {
		translate?: {
			TranslateElement?: new (
				options: Record<string, unknown>,
				container: string,
			) => unknown;
		};
	};
};

let loadPromise: Promise<HTMLSelectElement | null> | null = null;

function getCombo(): HTMLSelectElement | null {
	return document.querySelector<HTMLSelectElement>("select.goog-te-combo");
}

/** Wait for the widget's hidden <select> to exist, giving up after `timeout`. */
function waitForCombo(timeout = 12000): Promise<HTMLSelectElement | null> {
	return new Promise((resolve) => {
		const existing = getCombo();
		if (existing) return resolve(existing);

		const started = Date.now();
		const tick = window.setInterval(() => {
			const combo = getCombo();
			if (combo) {
				window.clearInterval(tick);
				resolve(combo);
			} else if (Date.now() - started > timeout) {
				window.clearInterval(tick);
				// Widget blocked or offline: the page simply stays in English.
				resolve(null);
			}
		}, 120);
	});
}

/**
 * Load the widget once. Repeat calls return the same promise, so the script is
 * never injected twice and only one widget instance is ever created.
 */
export function loadTranslator(): Promise<HTMLSelectElement | null> {
	if (!isBrowser()) return Promise.resolve(null);
	if (loadPromise) return loadPromise;

	loadPromise = new Promise<HTMLSelectElement | null>((resolve) => {
		installDomGuard();

		// Hidden host for the widget, deliberately outside the React root.
		if (!document.getElementById(WIDGET_ID)) {
			const host = document.createElement("div");
			host.id = WIDGET_ID;
			host.setAttribute("aria-hidden", "true");
			document.body.appendChild(host);
		}

		const w = window as unknown as TranslateGlobals;
		w.__creintorsTranslateInit = () => {
			try {
				const Element = w.google?.translate?.TranslateElement;
				if (!Element) return;
				new Element(
					{
						pageLanguage: SOURCE_LANGUAGE,
						includedLanguages: LANGUAGES.map((l) => l.code).join(","),
						autoDisplay: false,
					},
					WIDGET_ID,
				);
			} catch {
				/* leave the site in English */
			}
		};

		if (!document.getElementById(SCRIPT_ID)) {
			const script = document.createElement("script");
			script.id = SCRIPT_ID;
			script.src = SCRIPT_SRC;
			script.async = true;
			script.onerror = () => resolve(null);
			document.head.appendChild(script);
		}

		void waitForCombo().then(resolve);
	});

	return loadPromise;
}

/* ─────────────────────────────── switching ──────────────────────────────── */

/**
 * Switch the page to `code`, in place. Resolves true when the widget accepted
 * the change; false if the widget could not be reached, in which case the page
 * is left exactly as it was.
 */
export async function setLanguage(code: LanguageCode): Promise<boolean> {
	if (!isBrowser()) return false;

	saveLanguage(code);
	writeCookie(code);
	// Kick the font off now so it is in flight while the widget works.
	loadScriptFont(code);

	// English is the authored language: nothing to load if we are already there.
	if (code === DEFAULT_LANGUAGE && !loadPromise && !getCombo()) {
		announceLanguage(code);
		return true;
	}

	const combo = await loadTranslator();
	if (!combo) {
		// The widget never loaded, so the page is still the authored English.
		// Say so: otherwise the company names, which we render ourselves, would
		// be the only translated text on an otherwise English page.
		announceLanguage(DEFAULT_LANGUAGE);
		return false;
	}

	// Give the widget a tick to finish populating its <option> list.
	if (!combo.querySelector(`option[value="${code}"]`)) {
		await new Promise((r) => window.setTimeout(r, 250));
	}

	combo.value = code;
	combo.dispatchEvent(new Event("change"));
	announceLanguage(code);
	return true;
}

/**
 * Ask the widget to translate whatever is on the page right now.
 *
 * The widget translates the document it finds and re-scans for content that
 * turns up later, but this is a single-page app: a route change replaces the
 * whole body in one go, and the fresh English can land and stay. A nudge after
 * each navigation closes that gap.
 *
 * Re-fires the *same* value at the combo rather than toggling through another
 * language and back, so there is never a flash of a third language: already
 * translated content is left alone and only what is still English is picked up.
 * Deliberately uses `getCombo` rather than `loadTranslator` — if the visitor is
 * reading in English, or the widget never loaded, there is nothing to re-apply
 * and no reason to go and fetch it.
 */
export function reapplyLanguage(): void {
	if (!isBrowser()) return;

	const code = getCurrentLanguage();
	if (code === DEFAULT_LANGUAGE) return;

	const combo = getCombo();
	if (!combo) return;

	combo.value = code;
	combo.dispatchEvent(new Event("change"));
}

/**
 * Restore the saved language on a fresh page load. Does nothing for English, so
 * the common case costs no network request at all.
 */
export async function restoreSavedLanguage(): Promise<LanguageCode> {
	const saved = getSavedLanguage();
	if (saved === DEFAULT_LANGUAGE) {
		// Clear any stale cookie so the widget cannot re-translate behind us.
		if (isBrowser()) writeCookie(DEFAULT_LANGUAGE);
		announceLanguage(DEFAULT_LANGUAGE);
		return DEFAULT_LANGUAGE;
	}
	await setLanguage(saved);
	return saved;
}
