/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import HeroSection from "../components/cautomate/HeroSection";
import AboutSection from "../components/cautomate/AboutSection";
import IndustriesSection from "../components/cautomate/IndustriesSection";
import CaseStudiesSection from "../components/cautomate/CaseStudiesSection";
import ShowcaseSection from "../components/cautomate/ShowcaseSection";
import CrossSellSection from "../components/cautomate/CrossSellSection";
import SubPageNav from "../components/SubPageNav";
import { CAUTOMATE_DOWNLOADS } from "../lib/content/downloads";
import DivisionAboutFilm from "../components/DivisionAboutFilm";
import DivisionNext from "../components/DivisionNext";
import IgnoranceLine from "../components/IgnoranceLine";
import {
	CAUTOMATE_THEME,
	CAU_NEXT,
	CAU_PRODUCT_JSONLD,
	CAU_SEO,
} from "../lib/content/cautomate";
import film from "../assets/videos/CASPL.mp4";
import filmPoster from "../assets/heroes/cautomate.webp";
import { useSeo } from "../lib/seo";

/**
 * The running order the 19 Sep change list sets for every page — landing page,
 * video, then the Ignorance wordings — followed by the 17 Sep flow: Why
 * C-Automate?, Vision & Mission, Solutions, Customers as Co-Creators, and Our
 * thoughts to be future ready. The company film was the "About Us" stop until
 * the 18 Sep follow-up replaced that stop with "Why …?". The "Industrial
 * Automation Solutions" band (the old Turnkey Solutions stop) is off the page:
 * it is this page's counterpart of the testing band the 17 Sep list removes,
 * and its component is kept. Case Studies is not in the list's flow but stays,
 * next to the solutions it draws its evidence from.
 *
 * "Solutions" and "C-Automate" are the 19 Sep list's own words: "Solutions in
 * place of Products", and "everywhere we have Cautomate make it C-Automate,
 * even in the tabs on top". The `products` anchor keeps its id so links into
 * the page still land.
 */
const SECTIONS = [
	{ id: "why", label: "Why C-Automate?" },
	{ id: "vision-mission", label: "Vision & Mission" },
	{ id: "products", label: "Solutions" },
	{ id: "case-studies", label: "Case Studies" },
	{ id: "clients", label: "Co-Creators" },
	{ id: "next", label: "The NEXT" },
];

const SOFT_BLUE_BG = `
	radial-gradient(80% 60% at 50% 0%, rgba(0, 160, 227, 0.16), transparent 70%),
	radial-gradient(60% 80% at 100% 100%, rgba(0, 160, 227, 0.12), transparent 65%),
	linear-gradient(180deg, #d4ecf8 0%, #b5d6eb 100%)
`;

export default function Cautomate() {
	useSeo({
		title: CAU_SEO.title,
		description: CAU_SEO.description,
		keywords: CAU_SEO.keywords,
		canonicalPath: "/cautomate",
		jsonLd: CAU_PRODUCT_JSONLD,
	});

	return (
		<main className="relative">
			<HeroSection />
			{/*
			 * The header is not pinned on this page (see NON_STICKY_PATHS in
			 * Navbar) — it scrolls away so the section rail is the only pinned bar.
			 * With no header to clear, the rail sticks flush to the top.
			 */}
			<SubPageNav
				sections={SECTIONS}
				accent={CAUTOMATE_THEME.primary}
				downloads={CAUTOMATE_DOWNLOADS}
				stickyTopClassName="top-0"
				scrollOffset={72}
			/>
			{/* Landing page → video → Ignorance wordings, then "Why …?" (19 Sep
			    change list), on one ground so the two read as one band. The film
			    is the revised cut supplied on 1 Oct ("CASPL-1.mp4", 1:53,
			    re-encoded to 1080p30 like the Teknosol film). The poster is its
			    C-Automate logo frame at 3.5s. The final cut sent on 2 Oct
			    ("Website Final Videos/CASPL.mp4") is that same file, byte for
			    byte. */}
			<div
				className="relative"
				style={{ background: SOFT_BLUE_BG }}>
				<DivisionAboutFilm
					name="Creintors C-Automate"
					src={film}
					poster={filmPoster}
					accent={CAUTOMATE_THEME.primary}
					hasAudio
				/>
				<IgnoranceLine className="pt-0" />
			</div>
			<div
				id="why"
				className="section-tint relative"
				style={{ background: SOFT_BLUE_BG }}>
				<AboutSection />
			</div>
			<div
				id="vision-mission"
				className="relative"
				style={{ background: CAUTOMATE_THEME.primary }}>
				<ShowcaseSection />
			</div>
			<div
				id="products"
				className="relative"
				style={{ background: CAUTOMATE_THEME.primary }}>
				<IndustriesSection />
			</div>
			<div
				id="case-studies"
				className="section-tint relative"
				style={{ background: SOFT_BLUE_BG }}>
				<CaseStudiesSection />
			</div>
			<div
				id="clients"
				className="relative"
				style={{ background: SOFT_BLUE_BG }}>
				<CrossSellSection />
			</div>
			<div
				id="next"
				className="section-tint relative"
				style={{ background: SOFT_BLUE_BG }}>
				<DivisionNext
					content={CAU_NEXT}
					primary={CAUTOMATE_THEME.primary}
					secondary={CAUTOMATE_THEME.secondary}
				/>
			</div>
		</main>
	);
}
