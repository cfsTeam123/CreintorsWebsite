/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionHero from "../DivisionHero";
import { EDU_STATS } from "../../lib/content/education";
import heroStill from "../../assets/heroes/3i-ecosystem-bg.webp";

/** The ecosystem's own cyan, the key the sections below the hero are in. */
const ACCENT = "#1ac8ff";

/**
 * The 3i Ecosystem hero, built from the same component the three division
 * pages use: the Creintors C beside a "Think Talent, Think Us" lockup, over
 * the ecosystem's own photograph, with its reach banded underneath.
 *
 * It used to be a bespoke dark hero with a headline, a paragraph and a row of
 * pills. Sharing the division hero means the fourth page in the group now
 * arrives the way the other three do rather than looking like a different
 * site.
 */
export default function HeroSection() {
	return (
		<DivisionHero
			image={heroStill}
			accent={ACCENT}
			leadLine="Think Talent,"
			stats={EDU_STATS}
			name="Creintors 3i Ecosystem"
		/>
	);
}
