/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionVisionMission from "../DivisionVisionMission";
import { VISION_MISSION, TEKNOSOL_THEME } from "../../lib/content/Creintors";
import visionArt from "../../assets/common/creintors-vision.png";
import missionArt from "../../assets/common/creintors-mission.png";

export default function HighlightSection() {
	return (
		<DivisionVisionMission
			content={VISION_MISSION}
			primary={TEKNOSOL_THEME.primary}
			secondary={TEKNOSOL_THEME.secondary}
			tint="#1ac8ff"
			headingTint="#c8ecfa"
			card={{ visionArt, missionArt }}
		/>
	);
}
