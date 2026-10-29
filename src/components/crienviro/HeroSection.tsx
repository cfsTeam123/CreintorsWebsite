/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionHero from "../DivisionHero";
import { DIVISIONS } from "../../lib/divisions";
import { CRI_STATS } from "../../lib/content/crienviro";
import crienviroC from "../../assets/logos/CCESPL w.png";
import heroImage from "../../assets/heroes/crienviro-bg.webp";

const D = DIVISIONS.find((d) => d.slug === "crienviro")!;

/**
 * A photograph behind the headline, no longer a frame of CESPL.mp4. The film
 * itself plays down in the About section, at a size worth watching.
 */
export default function HeroSection() {
	return (
		<DivisionHero
			image={heroImage}
			accent={D.accent}
			leadLine="Think Sustainability,"
			stats={CRI_STATS}
			name={D.name}
			logo={crienviroC}
		/>
	);
}
