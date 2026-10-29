/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import HeroSection from "../components/crienviro/HeroSection";
import AboutSection from "../components/crienviro/AboutSection";
import ProductsSection from "../components/crienviro/ProductsSection";
import ShowcaseSection from "../components/crienviro/ShowcaseSection";
import CrossSellSection from "../components/crienviro/CrossSellSection";
import SubPageNav from "../components/SubPageNav";
import { CRIENVIRO_DOWNLOADS } from "../lib/content/downloads";
import DivisionAboutFilm from "../components/DivisionAboutFilm";
import DivisionNext from "../components/DivisionNext";
import IgnoranceLine from "../components/IgnoranceLine";
import { CRI_NEXT, CRIENVIRO_THEME } from "../lib/content/crienviro";
// The client's CESPL film (1 Oct: Desktop/CESPL.MOV, iPhone HEVC, 1:26,
// 1920×906, with its soundtrack, in place of the 29 Sep cut), re-encoded like
// the other company films: H.264 at crf 26, 25fps. It kept the file name. The
// poster is the film's own Crienviro logo frame at 1.8s, so it has the film's
// shape and the panel does not jump in height when playback starts. The final
// cut sent on 2 Oct ("Website Final Videos/CESPL.MOV") is the same file, byte
// for byte.
import film from "../assets/videos/CESPL.mp4";
import filmPoster from "../assets/heroes/crienviro-film.webp";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";

/**
 * The running order the 19 Sep change list sets for every page — landing page,
 * video, then the Ignorance wordings — followed by the 17 Sep flow: Why
 * Crienviro?, Vision & Mission, Products, Customers as Co-Creators, and Our
 * thoughts to be future ready. The company film was the "About Us" stop until
 * the 18 Sep follow-up replaced that stop with "Why …?". The "Environmental
 * Engineering Capabilities" band is off the page, as the 17 Sep list asks;
 * its component is kept.
 */
const SECTIONS = [
	{ id: "why", label: "Why Crienviro?" },
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

export default function Crienviro() {
	useSeo({
		...PAGE_SEO.crienviro,
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
				accent={CRIENVIRO_THEME.primary}
				downloads={CRIENVIRO_DOWNLOADS}
				stickyTopClassName="top-0"
				scrollOffset={72}
			/>
			{/* Landing page → video → Ignorance wordings, then "Why …?" (19 Sep
			    change list), on one ground so the two read as one band. The film
			    is the company's current one; the list says a new one is "to be
			    given", and it drops in here. */}
			<div
				className="relative"
				style={{ background: SOFT_BLUE_BG }}>
				<DivisionAboutFilm
					name="Creintors Crienviro"
					src={film}
					poster={filmPoster}
					accent={CRIENVIRO_THEME.primary}
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
				style={{ background: CRIENVIRO_THEME.primary }}>
				<ShowcaseSection />
			</div>
			<div
				id="products"
				className="relative"
				style={{ background: CRIENVIRO_THEME.primary }}>
				<ProductsSection />
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
					content={CRI_NEXT}
					primary={CRIENVIRO_THEME.primary}
					secondary={CRIENVIRO_THEME.secondary}
				/>
			</div>
		</main>
	);
}
