/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useReveal } from "../Creintors/useReveal";
import ProcessSteps from "../ProcessSteps";
import { CAU_PROCESS, CAUTOMATE_THEME } from "../../lib/content/cautomate";

const PRIMARY = CAUTOMATE_THEME.primary;
const SECONDARY = CAUTOMATE_THEME.secondary;

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
							How We Deploy
						</div>
						<h2 className="tk-fade section-title">
							<span className="text-white">From </span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
								}}>
								audit to go-live
							</span>
							<br />
							<span style={{ color: SECONDARY }}>in five phases.</span>
						</h2>
					</div>
					<p className="tk-fade max-w-md text-white/60">
						Every deployment runs as one integrated program covering hardware,
						controls and software, staged from pilot to plant-wide rollout with
						live SLA monitoring.
					</p>
				</div>
				<div className="tk-fade">
					<ProcessSteps
						steps={CAU_PROCESS}
						accent={PRIMARY}
					/>
				</div>
			</div>
		</section>
	);
}
