/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import HeroSection from "../components/Creintors/HeroSection";
import AboutSection from "../components/Creintors/AboutSection";
import IndustriesSection from "../components/Creintors/IndustriesSection";
import HighlightSection from "../components/Creintors/HighlightSection";
import CrossSellSection from "../components/Creintors/CrossSellSection";
import SubPageNav from "../components/SubPageNav";
import { TEKNOSOL_DOWNLOADS } from "../lib/content/downloads";
import DivisionAboutFilm from "../components/DivisionAboutFilm";
import DivisionNext from "../components/DivisionNext";
import IgnoranceLine from "../components/IgnoranceLine";
import { TEK_NEXT, TEKNOSOL_THEME } from "../lib/content/Creintors";
import film from "../assets/videos/CTPL.mp4";
import filmPoster from "../assets/heroes/teknosol.webp";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";

/**
 * The running order the 19 Sep change list sets for every page — landing page,
 * video, then the Ignorance wordings — followed by the 17 Sep flow: Why
 * Teknosol?, Vision & Mission, Products, Customers as Co-Creators, and Our
 * thoughts to be future ready. The company film was the "About Us" stop until
 * the 18 Sep follow-up replaced that stop with "Why …?". The "Industrial
 * Testing Expertise" band is off the page, as the 17 Sep list asks; its
 * component is kept.
 */
const SECTIONS = [
	{ id: "why", label: "Why Teknosol?" },
	{ id: "vision-mission", label: "Vision & Mission" },
	{ id: "products", label: "Products" },
	{ id: "clients", label: "Co-Creators" },
	{ id: "next", label: "The NEXT" },
];

const SOFT_BLUE_BG = `
	radial-gradient(80% 60% at 50% 0%, rgba(0, 160, 227, 0.16), transparent 70%),
	radial-gradient(60% 80% at 100% 100%, rgba(0, 160, 227, 0.12), transparent 65%),
	linear-gradient(180deg, #d4ecf8 0%, #b5d6eb 100%)
`;

export default function Teknosol() {
	useSeo({
		...PAGE_SEO.teknosol,
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
				accent={TEKNOSOL_THEME.primary}
				downloads={TEKNOSOL_DOWNLOADS}
				stickyTopClassName="top-0"
				scrollOffset={72}
			/>
			{/* Landing page → video → Ignorance wordings, then "Why …?" (19 Sep
			    change list), on one ground so the two read as one band. The film
			    is the client's final company film (2 Oct, "Website Final
			    Videos/CTPL.mp4", 1:30, re-encoded to 1080p30), in place of the
			    1 Oct cut. The poster is its logo frame at 3s, the same frame in
			    this cut. */}
			<div
				className="relative"
				style={{ background: SOFT_BLUE_BG }}>
				<DivisionAboutFilm
					name="Creintors Teknosol"
					src={film}
					poster={filmPoster}
					accent={TEKNOSOL_THEME.primary}
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
				style={{ background: TEKNOSOL_THEME.primary }}>
				<HighlightSection />
			</div>
			<div
				id="products"
				className="relative"
				style={{ background: TEKNOSOL_THEME.primary }}>
				<IndustriesSection />
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
					content={TEK_NEXT}
					primary={TEKNOSOL_THEME.primary}
					secondary={TEKNOSOL_THEME.secondary}
				/>
			</div>
		</main>
	);
}
