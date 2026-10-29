/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import HeroSection from "../components/landing/HeroSection";
import DivisionsSection from "../components/landing/DivisionsSection";
import EcosystemSection from "../components/landing/EcosystemSection";
import SolutionsSection from "../components/landing/SolutionsSection";
import IndustriesSection from "../components/landing/IndustriesSection";
import StatsSection from "../components/landing/StatsSection";
import CtaSection from "../components/landing/CtaSection";
import IgnoranceLine from "../components/IgnoranceLine";
import DivisionAboutFilm from "../components/DivisionAboutFilm";
import { useSeo } from "../lib/seo";
import { PAGE_SEO, ORGANISATION_JSONLD } from "../lib/content/seo";
import { PRIMARY } from "../lib/theme";
// The group film: the client's final cut (2 Oct, "Website Final Videos/HOME
// PAGE.mp4", 1:52 with its soundtrack, in place of the 1 Oct cut), re-encoded
// like the company films: 1080p30 H.264 at crf 26. It replaced the 7s ASRS
// loop that played here. The poster is the film's own Creintors logo frame at
// 3.5s, the same frame in this cut.
import film from "../assets/videos/home-film.mp4";
import filmPoster from "../assets/heroes/home-film.webp";

/** The C-Automate page's soft blue ground under its film, in the group blue. */
const SOFT_BLUE_BG = `
	radial-gradient(80% 60% at 50% 0%, rgba(0, 160, 227, 0.16), transparent 70%),
	radial-gradient(60% 80% at 100% 100%, rgba(0, 160, 227, 0.12), transparent 65%),
	linear-gradient(180deg, #d4ecf8 0%, #b5d6eb 100%)
`;

export default function Landing() {
	useSeo({
		...PAGE_SEO.landing,
		jsonLd: ORGANISATION_JSONLD,
	});

	return (
		<main className="relative isolate">
			{/* Landing page → video → Ignorance wordings (19 Sep change list). The
			    hero holds the "Creators + Innovators" clip on a solid ground; the
			    group film has its own panel under it, film and wordings on one
			    ground as on the C-Automate page. */}
			<HeroSection />
			{/* 40px above and below every section after the hero (26 Sep; every
			    page since 28 Sep). The film and the wordings share one band, so
			    they read as one section: 40px over the film, between the two,
			    and under the card. */}
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
			<EcosystemSection />
			<DivisionsSection className="md:min-h-0" />
			<IndustriesSection />
			<SolutionsSection />
			{/* <CapabilitiesSection />    */}
			<StatsSection />
			<CtaSection />
		</main>
	);
}
