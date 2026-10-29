/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect } from "react";

/**
 * Minimal, dependency-free document-head manager.
 *
 * The app is a single-page React Router application with no head library, so
 * this hook writes the per-route title, meta description, keywords, canonical
 * link, Open Graph / Twitter tags and JSON-LD structured data directly into
 * <head> and restores the document defaults on unmount. It touches nothing else
 * — no routing, layout or component structure changes.
 *
 * Review feedback (B8) asked for the SEO implementation to be strengthened
 * across the site: descriptive page titles, proper H1/H2 structure, relevant
 * meta descriptions and keyword-focused content. Every route now supplies its
 * own entry (see src/lib/content/seo.ts); this hook is what puts them in the
 * document.
 */

type SeoOptions = {
	title: string;
	description: string;
	keywords?: string[];
	/** Path this page should be canonical at, e.g. "/cautomate". */
	canonicalPath?: string;
	/** Structured data object serialised into an application/ld+json script. */
	jsonLd?: unknown;
};

const DEFAULT_TITLE =
	"Creintors Group of Companies | Test Systems, Warehouse Automation and Water Treatment";
const DEFAULT_DESCRIPTION =
	"Creintors Group of Companies, Belgaum, Karnataka. Creintors Teknosol builds valve test rigs and leak detection systems, Creintors Automation Solutions builds ASRS warehouse automation and tool management systems, and Creintors Environmental Solutions builds water, sewage and effluent treatment plants.";

/** Write a <meta name="…"> tag, returning an undo function. */
function setMeta(name: string, content: string): () => void {
	return setTag(`meta[name="${name}"]`, "meta", "name", name, content);
}

/** Write a <meta property="…"> tag (Open Graph), returning an undo function. */
function setProperty(property: string, content: string): () => void {
	return setTag(
		`meta[property="${property}"]`,
		"meta",
		"property",
		property,
		content,
	);
}

function setTag(
	selector: string,
	tagName: "meta",
	keyAttr: string,
	keyValue: string,
	content: string,
): () => void {
	let tag = document.head.querySelector<HTMLMetaElement>(selector);
	const created = !tag;
	if (!tag) {
		tag = document.createElement(tagName);
		tag.setAttribute(keyAttr, keyValue);
		document.head.appendChild(tag);
	}
	const previous = tag.getAttribute("content");
	tag.setAttribute("content", content);

	return () => {
		if (created) tag?.remove();
		else if (previous !== null) tag?.setAttribute("content", previous);
	};
}

/** Write <link rel="canonical">, returning an undo function. */
function setCanonical(href: string): () => void {
	let link = document.head.querySelector<HTMLLinkElement>(
		'link[rel="canonical"]',
	);
	const created = !link;
	if (!link) {
		link = document.createElement("link");
		link.setAttribute("rel", "canonical");
		document.head.appendChild(link);
	}
	const previous = link.getAttribute("href");
	link.setAttribute("href", href);

	return () => {
		if (created) link?.remove();
		else if (previous !== null) link?.setAttribute("href", previous);
	};
}

export function useSeo({
	title,
	description,
	keywords,
	canonicalPath,
	jsonLd,
}: SeoOptions) {
	const keywordList = keywords?.join(", ");

	useEffect(() => {
		const previousTitle = document.title;
		document.title = title;

		const restore: (() => void)[] = [
			() => {
				document.title = previousTitle;
			},
			setMeta("description", description),
			setProperty("og:title", title),
			setProperty("og:description", description),
			setMeta("twitter:title", title),
			setMeta("twitter:description", description),
		];

		if (keywordList) restore.push(setMeta("keywords", keywordList));

		if (canonicalPath && typeof window !== "undefined") {
			const href = new URL(canonicalPath, window.location.origin).toString();
			restore.push(setCanonical(href));
			restore.push(setProperty("og:url", href));
		}

		let script: HTMLScriptElement | null = null;
		if (jsonLd) {
			script = document.createElement("script");
			script.type = "application/ld+json";
			script.text = JSON.stringify(jsonLd);
			document.head.appendChild(script);
		}

		return () => {
			restore.forEach((fn) => fn());
			script?.remove();
		};
	}, [title, description, keywordList, canonicalPath, jsonLd]);
}

export { DEFAULT_TITLE, DEFAULT_DESCRIPTION };
