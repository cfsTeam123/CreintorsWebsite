/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import PlaceholderPage from "../components/PlaceholderPage";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import hubCustomerVoice from "../assets/hub/customer-voice.webp";

export default function CustomerVoice() {
	useSeo({
		...PAGE_SEO.customerVoice,
	});

	return (
		<PlaceholderPage
		 	backgroundImage={hubCustomerVoice}
			eyebrow="Customer Voice"
			kicker="LISTEN · DELIVER · TRUST"
			titleLead="Customer"
			titleAccent="Voice"
			description="What our customers say, and what we hear. Testimonials, feedback and the stories of partnerships built on engineering that delivers."
			tags={["Testimonials", "Feedback", "Stories"]}
			features={[
				{
					title: "Testimonials",
					body: "In their own words, from the partners and customers we have earned the trust of.",
				},
				{
					title: "Customer Voice",
					body: "A channel to share your experience and help us keep raising the bar.",
				},
				{
					title: "Success Stories",
					body: "Partnerships and outcomes that show what good engineering makes possible.",
				},
			]}
		/>
	);
}
