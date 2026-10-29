/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import SectionWrapper from "../SectionWrapper";
import StatsCounter from "../StatsCounter";

const BRAND = "#1ac8ff";
const VIOLET = "#46367f";

export default function StatsSection() {
	return (
		/* Flat brand surface shared with every other stats band. */
		<SectionWrapper className="section-stats relative isolate overflow-hidden py-24 md:py-28">

			{/* Ambient orbs */}
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-12 -z-10 h-[26rem] w-[26rem] rounded-full blur-[140px]"
				style={{ background: `${BRAND}1f` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-32 bottom-12 -z-10 h-[22rem] w-[22rem] rounded-full blur-[140px]"
				style={{ background: `${VIOLET}1f` }}
			/>

			<div className="container-x relative">
				<div className="mb-12 max-w-3xl">
					<div className="eyebrow reveal text-slate-600">
						<span
							className="h-px w-8"
							style={{ background: BRAND }}
						/>{" "}
						Ecosystem Reach
					</div>
					<h2 className="section-title reveal">
						<span className="text-slate-900">Lives </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(95deg, ${BRAND} 0%, ${VIOLET} 100%)`,
							}}>
							we've touched.
						</span>
					</h2>
				</div>
				<div className="grid auto-rows-fr gap-10 sm:grid-cols-2 lg:grid-cols-4">
					<StatsCounter
						value={500}
						label="Students Mentored"
						index={0}
					/>
					<StatsCounter
						value={20}
						label="Partner Institutes"
						index={1}
					/>
					<StatsCounter
						value={50}
						label="Live Projects"
						index={2}
					/>
					<StatsCounter
						value={12}
						suffix="+"
						label="Years of Impact"
						index={3}
					/>
				</div>
			</div>
		</SectionWrapper>
	);
}
