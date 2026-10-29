/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import TrackRecordSection from "../TrackRecordSection";
import { CAU_STATS, CAUTOMATE_THEME } from "../../lib/content/cautomate";

/**
 * Creintors Automation Solutions "Track Record" band — the shared
 * TrackRecordSection with the C Automate accent and figures.
 */
export default function StatsSection() {
	return (
		<TrackRecordSection
			accent={CAUTOMATE_THEME.primary}
			muted={CAUTOMATE_THEME.secondary}
			accentAlt="#46367f"
			headingLead="Proven,"
			headingAccent="measured."
			stats={CAU_STATS}
		/>
	);
}
