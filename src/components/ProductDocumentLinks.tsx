/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { BookDown, FileDown, type LucideIcon } from "lucide-react";
import type {
	ProductDocument,
	ProductDocuments,
} from "../lib/content/documents";

type Props = ProductDocuments & {
	/** The division's accent, for the icon and the outline. */
	accent: string;
};

/**
 * "Download Brochure" and "Download Catalogue", beside a card's enquiry
 * button, for whichever of the two its product has (see documents.ts). With
 * neither it renders nothing, so a card without documents keeps no empty
 * slot. Outlined, so the enquiry stays the card's one filled button; the pair
 * wraps as a unit, onto its own row on a narrow card.
 */
export default function ProductDocumentLinks({
	brochure,
	catalogue,
	accent,
}: Props) {
	if (!brochure && !catalogue) return null;
	return (
		<div className="flex flex-wrap items-center gap-2">
			{brochure && (
				<DocumentLink
					doc={brochure}
					kind="Brochure"
					icon={FileDown}
					accent={accent}
				/>
			)}
			{catalogue && (
				<DocumentLink
					doc={catalogue}
					kind="Catalogue"
					icon={BookDown}
					accent={accent}
				/>
			)}
		</div>
	);
}

function DocumentLink({
	doc,
	kind,
	icon: Icon,
	accent,
}: {
	doc: ProductDocument;
	kind: "Brochure" | "Catalogue";
	icon: LucideIcon;
	accent: string;
}) {
	// `download` saves it under its own name; where a browser declines (iOS
	// opens PDFs in its viewer), the new tab keeps the visitor on the page.
	return (
		<a
			href={doc.href}
			download={doc.fileName}
			target="_blank"
			rel="noopener"
			aria-label={`Download the ${doc.title} (PDF)`}
			title={`${doc.title} (PDF)`}
			className="group/doc inline-flex items-center gap-2 rounded-full border border-[color:var(--doc-edge)] bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 transition-colors duration-300 hover:border-[color:var(--doc-accent)] hover:bg-[color:var(--doc-tint)] hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--doc-accent)] focus-visible:ring-offset-2"
			style={
				{
					"--doc-accent": accent,
					"--doc-edge": `${accent}55`,
					"--doc-tint": `${accent}0d`,
				} as React.CSSProperties
			}>
			<Icon
				aria-hidden
				className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/doc:translate-y-0.5"
				style={{ color: accent }}
			/>
			<span className="sm:hidden">{kind}</span>
			<span className="hidden sm:inline">Download {kind}</span>
		</a>
	);
}
