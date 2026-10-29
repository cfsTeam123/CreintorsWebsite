/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useReveal } from "./useReveal";
import ProcessSteps from "../ProcessSteps";
import { DIVISIONS } from "../../lib/divisions";
import { PROCESS, TEKNOSOL_THEME } from "../../lib/content/Creintors";

const D = DIVISIONS.find((d) => d.slug === "teknosol")!;

export default function ProcessSection() {
	const ref = useReveal<HTMLDivElement>();

	return (
		<section className="relative py-24 md:py-28">
			<div
				ref={ref}
				className="container-x">
				<div className="mb-12 flex flex-wrap items-end justify-between gap-6">
					<div>
						<div className="tk-fade eyebrow">
							<span
								className="h-px w-8"
								style={{ background: TEKNOSOL_THEME.primary }}
							/>{" "}
							Engagement
						</div>
						<h2 className="tk-fade section-title">
							<span className="text-white">A delivery </span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${TEKNOSOL_THEME.primary}, #ffffff)`,
								}}>
								pipeline
							</span>
							<br />
							<span style={{ color: TEKNOSOL_THEME.secondary }}>
								engineered like our rigs.
							</span>
						</h2>
					</div>
					<p className="tk-fade max-w-md text-white/60">
						Every project runs as one integrated mechanical, electrical and
						software program, from spec definition through to long-term support
						and remote diagnostics.
					</p>
				</div>
				<div className="tk-fade">
					<ProcessSteps
						steps={PROCESS}
						accent={D.accent}
					/>
				</div>
			</div>
		</section>
	);
}
