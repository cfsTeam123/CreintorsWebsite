/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionHero from "../components/DivisionHero";
import SectionHub from "../components/SectionHub";
import { ABOUT } from "../lib/navigation";
import { ABOUT_IMPACT_STATS } from "../lib/content/landing";
import { PRIMARY } from "../lib/theme";
import { useSeo } from "../lib/seo";
import heroImage from "../assets/heroes/about-bg.webp";
import IgnoranceLine from "../components/IgnoranceLine";
import DivisionAboutFilm from "../components/DivisionAboutFilm";
// The About Us film (1 Oct: Desktop/"About Page.mp4", 1:19 with its
// soundtrack), re-encoded like the company films: 1080p30 H.264 at crf 26.
// The poster is its opening "Think Innovation, Think Us!" frame at 2.65s.
// The final cut sent on 2 Oct ("Website Final Videos/ABOUT US.mp4") is this
// same file, byte for byte.
import film from "../assets/videos/about-film.mp4";
import filmPoster from "../assets/heroes/about-film.webp";

/** The soft blue band the home and company pages set their film on. */
const SOFT_BLUE_BG = `
	radial-gradient(80% 60% at 50% 0%, rgba(0, 160, 227, 0.16), transparent 70%),
	radial-gradient(60% 80% at 100% 100%, rgba(0, 160, 227, 0.12), transparent 65%),
	linear-gradient(180deg, #d4ecf8 0%, #b5d6eb 100%)
`;

export default function AboutHub() {
	useSeo({
		title: "About Us | Creintors Group of Companies",
		description:
			"The story, people and standards behind Creintors Group of Companies — our history, vision and mission, leadership, team, approach, achievements and certifications.",
		keywords: [
			"About Creintors",
			"Creintors history",
			"Creintors vision and mission",
			"Creintors leadership",
			"Creintors team",
			"Creintors certifications",
		],
		canonicalPath: "/about",
	});

	return (
		<main className="relative">
			{/* The same hero as the home and company pages, with the group's light
			    blue C. */}
			<DivisionHero
				image={heroImage}
				accent={PRIMARY}
				leadLine="Think Innovation,"
				stats={ABOUT_IMPACT_STATS}
				name="About Creintors"
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
			<SectionHub
				eyebrow="Built to last"
				titleLead="A Shared"
				titleAccent="Vision"
				intro="Great things start small. When like-minded people come together with a shared vision, they create something truly meaningful."
				items={ABOUT}
				columns={4}
			/>
		</main>
	);
}
