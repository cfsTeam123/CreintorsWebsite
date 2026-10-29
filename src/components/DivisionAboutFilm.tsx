/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionFilm from "./DivisionFilm";
import { cn } from "../lib/utils";

type Props = {
	/** The company, as its page names it. */
	name: string;
	src: string;
	poster: string;
	accent: string;
	hasAudio?: boolean;
	/** Repeat the film rather than play it once — see DivisionFilm. */
	loop?: boolean;
	/** Overrides the section's padding (40px top and bottom, as every section). */
	className?: string;
};

/**
 * The company's film on a company page (17 Sep change list: "About Us video
 * with CMD audio — play the audio for a better understanding / feel of the
 * subject"). Unlabelled: the "About Us" stop it once opened was replaced by
 * "Why …?" (18 Sep). Since 19 Sep it plays straight after the landing page,
 * ahead of the Ignorance wordings and "Why …?" — "landing page → video →
 * ignorance wordings" on every page.
 */
export default function DivisionAboutFilm({
	name,
	src,
	poster,
	accent,
	hasAudio,
	loop,
	className,
}: Props) {
	return (
		<section className={cn("relative overflow-hidden py-10", className)}>
			<h2 className="sr-only">{name} company film</h2>
			<DivisionFilm
				src={src}
				poster={poster}
				accent={accent}
				hasAudio={hasAudio}
				loop={loop}
				label={`${name} company film`}
			/>
		</section>
	);
}
