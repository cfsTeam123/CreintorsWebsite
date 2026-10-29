/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionHero from "../DivisionHero";
import { DIVISIONS } from "../../lib/divisions";
import { CAU_STATS } from "../../lib/content/cautomate";
import cautomateC from "../../assets/logos/CCASPL w.png";
import heroImage from "../../assets/heroes/cautomate-bg.webp";

const D = DIVISIONS.find((d) => d.slug === "cautomate")!;

/**
 * A photograph behind the headline, no longer a frame of CASPL.mp4. The film
 * itself plays just below the hero, at a size worth watching.
 *
 * "Think Intelligence, Think Us" is the 19 Sep change list's landing line.
 */
export default function HeroSection() {
	return (
		<DivisionHero
			image={heroImage}
			accent={D.accent}
			leadLine="Think Intelligence,"
			stats={CAU_STATS}
			name={D.name}
			logo={cautomateC}
		/>
	);
}
