/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionCapabilities from "../DivisionCapabilities";
import { CAU_CAPABILITIES, CAUTOMATE_THEME } from "../../lib/content/cautomate";

export default function SolutionsSection() {
	return (
		<DivisionCapabilities
			items={CAU_CAPABILITIES}
			primary={CAUTOMATE_THEME.primary}
			secondary={CAUTOMATE_THEME.secondary}
			eyebrow="We Automate What Matters Most"
			titleLead="Industrial"
			titleAccent="Automation Solutions"
			intro="From automated storage and retrieval to autonomous mobile robots, vertical storage and tool management systems. Industry 4.0 enabled solutions delivering productivity, accountability and traceability."
		/>
	);
}
