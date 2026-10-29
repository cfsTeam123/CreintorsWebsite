/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionHero from "../components/DivisionHero";
import SectionHub from "../components/SectionHub";
import { MORE } from "../lib/navigation";
import { EXPLORE_STATS } from "../lib/content/explore";
import { PRIMARY } from "../lib/theme";
import { useSeo } from "../lib/seo";
import heroImage from "../assets/heroes/explore-bg.webp";
import crystalC from "../assets/logos/logocHome.webp";
import IgnoranceLine from "../components/IgnoranceLine";
import DivisionAboutFilm from "../components/DivisionAboutFilm";
// The Explore film: the client's final cut (2 Oct, "Website Final
// Videos/EXPLORE.MOV", iPhone HEVC, 1:17 with its soundtrack), re-encoded like
// the company films: 1080p30 H.264 at crf 26. This cut is tagged Display P3,
// so it was converted to BT.709 on the way (colorspace=all=bt709:
// iprimaries=smpte432); without that it plays visibly paler than the 1 Oct cut.
// The poster is its Creintors logo frame at 4.75s, the same frame in this cut.
import film from "../assets/videos/explore-film.mp4";
import filmPoster from "../assets/heroes/explore-film.webp";

/** The soft blue band the home and company pages set their film on. */
const SOFT_BLUE_BG = `
	radial-gradient(80% 60% at 50% 0%, rgba(0, 160, 227, 0.16), transparent 70%),
	radial-gradient(60% 80% at 100% 100%, rgba(0, 160, 227, 0.12), transparent 65%),
	linear-gradient(180deg, #d4ecf8 0%, #b5d6eb 100%)
`;

export default function ExploreHub() {
	useSeo({
		title: "Explore | Creintors Group of Companies",
		description:
			"Everything else at Creintors Group of Companies — our engagement with CII, the VLFM experience, project gallery, quality and governance policies, CMD Connect, knowledge sharing, customer voice and how to reach us.",
		keywords: [
			"Creintors gallery",
			"Creintors policies",
			"CMD Connect",
			"Creintors knowledge sharing",
			"Creintors customer voice",
			"Contact Creintors",
			"Creintors CII",
			"VLFM Visionary Leaders for Manufacturing",
		],
		canonicalPath: "/explore",
	});

	return (
		<main className="relative">
			{/* The same hero as the home and company pages, with the home hero's
			    crystal C beside "Think Collaboration, Think Us" (18 Sep change list). */}
			<DivisionHero
				image={heroImage}
				accent={PRIMARY}
				logo={crystalC}
				leadLine="Think Collaboration,"
				stats={EXPLORE_STATS}
				name="Explore Creintors"
			/>
			{/* Landing page → video → Ignorance wordings, as on the home page:
			    film and wordings on one ground, read as one band. */}
			<div
				className="relative"
				style={{ background: SOFT_BLUE_BG }}>
				<DivisionAboutFilm
					name="Creintors"
					src={film}
					poster={filmPoster}
					accent={PRIMARY}
					hasAudio
				/>
				<IgnoranceLine className="pt-0" />
			</div>
			{/* CII and VLFM have pages of their own since 26 Sep; their cards
			    lead the hub. */}
			<SectionHub
				eyebrow="Exploration for Co-Creation"
				titleLead="Everything else"
				titleAccent="worth a look."
				intro="Built work, the governance behind it, what customers say, and the quickest way to reach the people who did it."
				items={MORE}
				columns={4}
			/>
		</main>
	);
}
