/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import SectionWrapper from "../SectionWrapper";
import AnimatedCard from "../AnimatedCard";
import { DIVISIONS } from "../../lib/divisions";
import { FEATURES } from "../../lib/content/cautomate";

const D = DIVISIONS.find((d) => d.slug === "cautomate")!;

export default function FeaturesSection() {
	return (
		<SectionWrapper className="py-24 md:py-28">
			<div className="container-x">
				<div className="mb-12 #max-w-4xl">
					<div className="eyebrow reveal">
						<span className="h-px w-8 bg-accent-violet" /> Key Features
					</div>
					<h2 className="section-title reveal">
						Software-defined <br /> operations.
					</h2>
				</div>
				<div className="grid gap-6 md:grid-cols-2">
					{FEATURES.map((f) => (
						<AnimatedCard
							key={f.t}
							glareColor={`${D.accent}55`}>
							<h3 className="font-display text-2xl font-semibold text-white">
								{f.t}
							</h3>
							<p className="mt-3 text-white/65">{f.d}</p>
						</AnimatedCard>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}
