/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionCapabilities from "../DivisionCapabilities";
import { CRI_CAPABILITIES, CRIENVIRO_THEME } from "../../lib/content/crienviro";

export default function SolutionsSection() {
	return (
		<DivisionCapabilities
			items={CRI_CAPABILITIES}
			primary={CRIENVIRO_THEME.primary}
			secondary={CRIENVIRO_THEME.secondary}
			eyebrow="We Treat What Matters Most"
			titleLead="Environmental"
			titleAccent="Engineering Capabilities"
			intro="From municipal-grade water plants to zero-liquid-discharge effluent trains and SLA-bound O&M, we engineer every system for compliance, efficiency and longevity."
		/>
	);
}
