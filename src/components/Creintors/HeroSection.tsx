/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionHero from "../DivisionHero";
import { DIVISIONS } from "../../lib/divisions";
import { TEKNOSOL_STATS } from "../../lib/content/Creintors";
import heroImage from "../../assets/heroes/teknosol-bg.webp";

const D = DIVISIONS.find((d) => d.slug === "teknosol")!;

/**
 * The Teknosol hero holds a photograph, not a frame of CTPL.mp4. The film
 * itself plays down in the About section, at a size worth watching rather than
 * washed out behind type.
 */
export default function HeroSection() {
	return (
		<DivisionHero
			image={heroImage}
			accent={D.accent}
			leadLine="Think Technology,"
			stats={TEKNOSOL_STATS}
			name={D.name}
		/>
	);
}
