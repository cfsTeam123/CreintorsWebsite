/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import HeroSection from "../components/contact/HeroSection";
import FormSection from "../components/contact/FormSection";
import DivisionContactsSection from "../components/contact/DivisionContactsSection";
import RouteToDivisionSection from "../components/contact/RouteToDivisionSection";
import ClosingCtaSection from "../components/contact/ClosingCtaSection";
import SubPageNav from "../components/SubPageNav";
import { PRIMARY } from "@/lib/theme";
import DivisionsSection from "@/components/landing/DivisionsSection";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import IgnoranceLine from "../components/IgnoranceLine";

const SECTIONS = [
	{ id: "form", label: "Contact" },
	{ id: "phones", label: "Direct Lines" },
	{ id: "companies", label: "Companies" },
	{ id: "cta", label: "Connect" },
];

const SOFT_BLUE_BG = `
	radial-gradient(80% 60% at 50% 0%, rgba(23, 158, 224, 0.06), transparent 70%),
	radial-gradient(60% 80% at 100% 100%, rgba(70, 54, 127, 0.05), transparent 65%),
	linear-gradient(180deg, #eaf4ff 0%, #e1edff 100%)
`;

export default function Contact() {
	useSeo({
		...PAGE_SEO.contact,
	});

	return (
		<main className="relative">
			<HeroSection />
			<SubPageNav
				sections={SECTIONS}
				accent={PRIMARY}
				ctaTo="#form"
			/>
			<IgnoranceLine />
			<div
				id="form"
				className="section-tint relative"
				style={{ background: SOFT_BLUE_BG }}>
				<FormSection />
			</div>
			<div
				id="phones"
				className="section-tint relative">
				<DivisionContactsSection />
			</div>
			<div
				id="companies"
				className="section-deep relative">
				<DivisionsSection />
			</div>

			<div
				id="cta"
				className="section-tint relative">
				<ClosingCtaSection />
			</div>
		</main>
	);
}
