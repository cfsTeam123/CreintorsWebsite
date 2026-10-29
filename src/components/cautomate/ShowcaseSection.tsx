/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionVisionMission from "../DivisionVisionMission";
import {
	CAU_VISION_MISSION,
	CAUTOMATE_THEME,
} from "../../lib/content/cautomate";
import visionArt from "../../assets/common/creintors-vision.png";
import missionArt from "../../assets/common/creintors-mission.png";

export default function ShowcaseSection() {
	return (
		<DivisionVisionMission
			content={CAU_VISION_MISSION}
			primary={CAUTOMATE_THEME.primary}
			secondary={CAUTOMATE_THEME.secondary}
			tint="#1ac8ff"
			headingTint="#a8a8d4"
			card={{ visionArt, missionArt }}
		/>
	);
}
