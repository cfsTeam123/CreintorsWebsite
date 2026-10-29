/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useReveal } from "../Creintors/useReveal";
import ProcessSteps from "../ProcessSteps";
import { CRI_PROCESS, CRIENVIRO_THEME } from "../../lib/content/crienviro";

const PRIMARY = CRIENVIRO_THEME.primary;
const SECONDARY = CRIENVIRO_THEME.secondary;

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
								style={{ background: PRIMARY }}
							/>{" "}
							How We Deliver
						</div>
						<h2 className="tk-fade section-title">
							<span className="text-white">From </span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
								}}>
								site survey
							</span>
							<br />
							<span style={{ color: SECONDARY }}>to long-term operation.</span>
						</h2>
					</div>
					<p className="tk-fade max-w-md text-white/60">
						Every plant runs as one integrated program covering civil, mechanical
						and electrical work, staged from site survey to PCB sign-off and
						long-term operation under an SLA.
					</p>
				</div>
				<div className="tk-fade">
					<ProcessSteps
						steps={CRI_PROCESS}
						accent={PRIMARY}
					/>
				</div>
			</div>
		</section>
	);
}
