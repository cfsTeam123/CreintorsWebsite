/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useLanguage } from "../lib/useLanguage";
import { brandName, type BrandForms, type BrandKey } from "../lib/content/brand";

/**
 * A company name, in the language the page is currently showing.
 *
 * Carries `translate="no"` deliberately. The page is declared to Google as
 * English, so without it the widget would take the Devanagari or Kannada we
 * just rendered and try to translate *that* — the names are ours to set, and
 * this keeps the widget's hands off them.
 */
export default function BrandName({
	name,
	form = "full",
	uppercase = false,
	className,
}: {
	name: BrandKey;
	/** `short` drops the leading "Creintors" — see BRAND_NAMES. */
	form?: keyof BrandForms;
	/**
	 * For the all-caps call-to-action rows. A no-op in Devanagari and Kannada,
	 * which have no letter case: the name simply renders as written.
	 */
	uppercase?: boolean;
	className?: string;
}) {
	const language = useLanguage();
	const value = brandName(name, language, form);

	return (
		<span
			translate="no"
			className={`notranslate${className ? ` ${className}` : ""}`}>
			{uppercase ? value.toUpperCase() : value}
		</span>
	);
}
