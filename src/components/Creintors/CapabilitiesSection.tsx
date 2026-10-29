/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionCapabilities from "../DivisionCapabilities";
import { CAPABILITIES_RICH, TEKNOSOL_THEME } from "../../lib/content/Creintors";

export default function CapabilitiesSection() {
	return (
		<DivisionCapabilities
			items={CAPABILITIES_RICH}
			primary={TEKNOSOL_THEME.primary}
			secondary={TEKNOSOL_THEME.secondary}
			eyebrow="We Test What Matters Most"
			titleLead="Industrial"
			titleAccent="Testing Expertise"
			intro="From precision pressure validation to software-integrated test ecosystems, we engineer every system for repeatable performance, traceability and reliable field confidence."
		/>
	);
}
