/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import SectionWrapper from "../SectionWrapper";
import Timeline from "../Timeline";
import { PRIMARY, SECONDARY } from "../../lib/theme";
import { ACHIEVEMENTS } from "../../lib/divisions";

export default function TimelineSection() {
	return (
		<SectionWrapper
			id="timeline"
			className="py-24 md:py-28">
			<div className="container-x">
				<div className="mb-12 #max-w-4xl">
					<div className="eyebrow reveal">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						A Decade of Recognition
					</div>
					<h2 className="section-title reveal">
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							Awards & milestones
						</span>
						<br />
						that shaped us.
					</h2>
				</div>
				<Timeline items={ACHIEVEMENTS} />
			</div>
		</SectionWrapper>
	);
}
