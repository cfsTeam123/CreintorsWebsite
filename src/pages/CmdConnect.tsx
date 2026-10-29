/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import PlaceholderPage from "../components/PlaceholderPage";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";

export default function CmdConnect() {
	useSeo({
		...PAGE_SEO.cmdConnect,
	});

	return (
		<PlaceholderPage
			eyebrow="CMD Connect"
			kicker="LEADERSHIP · DIRECT · IN"
			titleLead="CMD"
			titleAccent="Connect"
			description="A direct line to our Chairman and Managing Director, with perspectives, conversations and a window into the thinking that drives Creintors forward."
			tags={["Leadership", "Insights", "Dialogue"]}
			features={[
				{
					title: "Leadership Notes",
					body: "Regular reflections from the CMD on strategy, industry shifts and the road ahead.",
				},
				{
					title: "Open Conversations",
					body: "A space to engage directly. Ask, share and connect with leadership.",
				},
				{
					title: "Vision in Action",
					body: "How our guiding principles translate into the work we deliver every day.",
				},
			]}
		/>
	);
}
