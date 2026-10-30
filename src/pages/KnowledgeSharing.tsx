/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import PlaceholderPage from "../components/PlaceholderPage";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import hubKnowledge from "../assets/hub/knowledge-sharing.webp";


export default function KnowledgeSharing() {
	useSeo({
		...PAGE_SEO.knowledgeSharing,
	});

	return (
		<PlaceholderPage
		 backgroundImage={hubKnowledge}
			eyebrow="Knowledge Sharing"
			kicker="LEARN · BUILD · INNOVATE"
			titleLead="Knowledge"
			titleAccent="Sharing"
			description="Articles, case studies and engineering know-how from across the Creintors group, drawn from one and a half decades on the shop floor and shared openly."
			tags={["Articles", "Case Studies", "Resources"]}
			features={[
				{
					title: "Engineering Insights",
					body: "Deep-dives into the problems we solve and the methods we use to solve them.",
				},
				{
					title: "Case Studies",
					body: "Real projects and real outcomes, with the lessons behind every solution we ship.",
				},
				{
					title: "Resources & Guides",
					body: "Practical references for partners, customers and the next generation of engineers.",
				},
			]}
		/>
	);
}
