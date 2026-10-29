/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import { POLICY_THEME } from "../../lib/content/policies";
import imgClosing from "../../assets/teknosol/high-pressure-testing.png";

const PRIMARY = POLICY_THEME.primary;
const SECONDARY = POLICY_THEME.secondary;

export default function ClosingSection() {
	return (
		<SectionWrapper className="section-tint py-10">
			<div className="container-x relative">
				<div
					className="reveal-from-bottom relative overflow-hidden rounded-[2rem] border p-10 md:p-16"
					style={{
						borderColor: "#C7DCEC",
						backgroundColor: "#F1F7FB",
						backgroundImage: `linear-gradient(135deg, ${PRIMARY}14 0%, #F1F7FB 50%, ${SECONDARY}18 100%)`,
						boxShadow:
							"0 30px 80px -28px rgba(15,23,42,0.2), 0 0 0 1px rgba(255,255,255,0.85) inset",
					}}>
					<div className="absolute inset-0 -z-10">
						<img
							src={imgClosing}
							alt=""
							className="h-full w-full object-cover opacity-15"
						/>
						<div
							aria-hidden
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(135deg, rgba(241,247,251,0.85) 0%, rgba(241,247,251,0.7) 50%, rgba(241,247,251,0.92) 100%)",
							}}
						/>
					</div>
					<div
						aria-hidden
						className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
						style={{ background: PRIMARY }}
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
						style={{ background: SECONDARY }}
					/>

					<div className="relative text-center md:py-6">
						<div
							className="reveal-from-top font-mono text-xs uppercase tracking-[0.4em]"
							style={{ color: PRIMARY }}>
							Authorised commitment
						</div>
						<h2 className="section-title-sm reveal-from-left mx-auto mt-5 max-w-3xl">
							<span>Endorsed by leadership.</span>{" "}
							{/* Its own line: inline, the clause broke mid-phrase after
							    "Lived by". */}
							<span
								className="block bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								Lived by every team.
							</span>
						</h2>
						<p className="reveal-from-right mx-auto mt-6 max-w-2xl text-slate-600 md:text-lg">
							This Integrated Management System policy is reviewed periodically
							and is communicated to all employees, contractors and interested
							parties.
						</p>
						<div className="reveal-from-bottom mt-10 flex flex-wrap justify-center gap-3">
							<Link
								to="/contact"
								className="btn-primary"
								style={{
									background: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								Request the full IMS document →
							</Link>
							<Link
								to="/"
								className="btn-ghost">
								Back to Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
