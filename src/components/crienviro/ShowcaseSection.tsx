/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionVisionMission from "../DivisionVisionMission";
import {
	CRI_VISION_MISSION,
	CRIENVIRO_THEME,
} from "../../lib/content/crienviro";
import visionArt from "../../assets/common/creintors-vision.png";
import missionArt from "../../assets/common/creintors-mission.png";

export default function ShowcaseSection() {
	return (
		<DivisionVisionMission
			content={CRI_VISION_MISSION}
			primary={CRIENVIRO_THEME.primary}
			secondary={CRIENVIRO_THEME.secondary}
			tint="#4ade80"
			headingTint="#d6f0d0"
			card={{ visionArt, missionArt }}
		/>
	);
}
