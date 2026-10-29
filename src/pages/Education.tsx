import HeroSection from "../components/education/HeroSection";
import IgnoranceLine from "../components/IgnoranceLine";
import DivisionAboutFilm from "../components/DivisionAboutFilm";
import CoreIdeaSection from "../components/education/CoreIdeaSection";
import FlowSection from "../components/education/FlowSection";
import OfferingsSection from "../components/education/OfferingsSection";
import ClosingSection from "../components/education/ClosingSection";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import film from "../assets/videos/3i-ecosystem.mp4";
import filmPoster from "../assets/heroes/3i-ecosystem.webp";

/** The ecosystem's own cyan, as in its hero. */
const ACCENT = "#1ac8ff";

/** The soft blue band the company pages set their film and wordings on. */
const SOFT_BLUE_BG = `
	radial-gradient(80% 60% at 50% 0%, rgba(0, 160, 227, 0.16), transparent 70%),
	radial-gradient(60% 80% at 100% 100%, rgba(0, 160, 227, 0.12), transparent 65%),
	linear-gradient(180deg, #d4ecf8 0%, #b5d6eb 100%)
`;

export default function Education() {
	useSeo({
		...PAGE_SEO.education,
	});

	return (
		<main className="relative">
			{/* Landing page → video → Ignorance wordings (19 Sep change list), the
			    film and the wordings on one ground as on the Teknosol page. The
			    film is the 3i Ecosystem's own: the cut supplied on 1 Oct
			    ("3i.MOV", 1:43, re-encoded to 1080p30 H.264) replaced the 28 Sep
			    one. The poster is its 3i Ecosystem logo frame at 1.6s. The final
			    cut sent on 2 Oct ("Website Final Videos/3I.MOV") is that same
			    file, byte for byte. */}
			<HeroSection />
			<div
				className="relative"
				style={{ background: SOFT_BLUE_BG }}>
				<DivisionAboutFilm
					name="Creintors 3i Ecosystem"
					src={film}
					poster={filmPoster}
					accent={ACCENT}
					hasAudio
				/>
				<IgnoranceLine className="pt-0" />
			</div>
			<CoreIdeaSection />
			<FlowSection />
			{/* The programs behind filter tabs (19 Sep). VLCI and MIJSC, which had
			    a section of their own, are the "MIJSC, VLCI Events" tab. The reach
			    figures live in the hero band. */}
			<OfferingsSection />
			<ClosingSection />
		</main>
	);
}
