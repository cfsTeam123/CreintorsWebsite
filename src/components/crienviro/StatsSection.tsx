/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import TrackRecordSection from "../TrackRecordSection";
import { CRI_STATS, CRIENVIRO_THEME } from "../../lib/content/crienviro";

/**
 * Creintors Environmental Solutions "Track Record" band — the shared
 * TrackRecordSection with the Crienviro accent and figures.
 */
export default function StatsSection() {
	return (
		<TrackRecordSection
			accent={CRIENVIRO_THEME.primary}
			muted={CRIENVIRO_THEME.secondary}
			accentAlt="#46367f"
			headingLead="Sustainability,"
			headingAccent="measured."
			stats={CRI_STATS}
		/>
	);
}
