/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import DivisionVisionMission from "../components/DivisionVisionMission";
import { PRIMARY, SECONDARY } from "../lib/theme";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import IgnoranceLine from "../components/IgnoranceLine";
// The client's word clouds (Desktop, "CREINTORS VISION.png" and
// "CREINTORS MISSION.png", 28 Sep), as supplied.
import visionArt from "../assets/common/creintors-vision.png";
import missionArt from "../assets/common/creintors-mission.png";

/**
 * The group's vision and mission, word for word as the full-screen pillars
 * carried them. The group's mission alone, per the 17 Sep change list; the
 * philosophy that followed it has its own page, /about/philosophy.
 */
const GROUP_VISION_MISSION = {
	eyebrow: "Our Core Direction",
	vision:
		"To deliver sustainable innovations that build a better world and create an ecosystem that inspires the youth.",
	mission:
		"To collaborate with all our stakeholders by relying on our technical expertise and unique holistic approach, that delivers business excellence and motivates youth.",
};

/**
 * Since 30 Sep this page is the same white Vision & Mission card the three
 * company pages carry ("make it the same as all other pages"), in the group's
 * blue, with the WHY?/HOW? clouds over each column. It replaced two
 * full-screen StatementPillar bands.
 */
export default function VisionMission() {
	useSeo({
		...PAGE_SEO.visionMission,
	});

	return (
		<main className="relative isolate">
			{/*
			 * The section's own heading is an H2, as on the company pages. Review
			 * feedback (B8) asked for proper H1 / H2 structure, so the page carries
			 * an H1 for assistive technology and crawlers.
			 */}
			<h1 className="sr-only">
				Vision and Mission | Creintors Group of Companies
			</h1>

			{/* No hero here, so the ground starts under the pinned header and the
			    section's padding clears it. */}
			<div
				className="relative pt-24"
				style={{ background: PRIMARY }}>
				<DivisionVisionMission
					content={GROUP_VISION_MISSION}
					primary={PRIMARY}
					secondary={SECONDARY}
					tint="#1ac8ff"
					headingTint="#c8ecfa"
					card={{ visionArt, missionArt }}
				/>
			</div>
			<IgnoranceLine />
		</main>
	);
}
