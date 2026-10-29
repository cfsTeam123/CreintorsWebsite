/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import HeroSection from "../components/policies/HeroSection";
import IntroSection from "../components/policies/IntroSection";
import StandardsSection from "../components/policies/StandardsSection";
import CommitmentsSection from "../components/policies/CommitmentsSection";
import ClosingSection from "../components/policies/ClosingSection";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import IgnoranceLine from "../components/IgnoranceLine";

export default function Policies() {
	useSeo({
		...PAGE_SEO.policies,
	});

	return (
		<main className="relative">
			<HeroSection />
			<IgnoranceLine />
			<CommitmentsSection />
			<ClosingSection />
		</main>
	);
}
