/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import SectionWrapper from "../SectionWrapper";
import { POLICY_INTRO, POLICY_THEME } from "../../lib/content/policies";
import imgIntro from "../../assets/teknosol/cap-automation.png";

const PRIMARY = POLICY_THEME.primary;
const SECONDARY = POLICY_THEME.secondary;

export default function IntroSection() {
	return (
		<SectionWrapper className="section-tint relative py-10">
			<div className="container-x relative">
				<div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
					<div>
						<div className="eyebrow reveal-from-left">
							<span
								className="h-px w-8"
								style={{ background: PRIMARY }}
							/>{" "}
							Our Commitment
						</div>
						<h2
							className="section-title reveal-from-left bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(95deg, #0b1220 0%, #0b1220 40%, ${PRIMARY} 75%, ${SECONDARY} 100%)`,
							}}>
							Built around "Best in Class" outcomes.
						</h2>
						<p className="reveal-from-left mt-6 text-lg leading-relaxed text-slate-600">
							{POLICY_INTRO.body}
						</p>

						<div className="mt-8 grid gap-3 sm:grid-cols-3">
							{[
								{
									k: "OEM",
									v: "Original Equipment Manufacturer",
									dir: "reveal-from-left",
								},
								{
									k: "IMS",
									v: "Integrated Management System",
									dir: "reveal-from-bottom",
								},
								{
									k: "ZED",
									v: "Zero Defect · Zero Effect",
									dir: "reveal-from-right",
								},
							].map((c) => (
								<div
									key={c.k}
									className={`${c.dir} rounded-2xl border bg-white p-4`}
									style={{
										borderColor: `${PRIMARY}33`,
										boxShadow:
											"0 14px 30px -22px rgba(15,23,42,0.18), 0 0 0 1px rgba(255,255,255,0.85) inset",
									}}>
									<div
										className="font-mono text-[10px] uppercase tracking-[0.32em]"
										style={{ color: PRIMARY }}>
										{c.k}
									</div>
									<div className="mt-2 text-sm text-slate-700">{c.v}</div>
								</div>
							))}
						</div>
					</div>

					{/* Image card with 3D layers */}
					<div
						className="reveal-from-right relative"
						style={{ perspective: "1200px" }}>
						<div
							aria-hidden
							className="absolute -inset-6 rounded-[2rem] opacity-50 blur-2xl"
							style={{
								background: `radial-gradient(circle at 30% 30%, ${PRIMARY}44, transparent 70%)`,
							}}
						/>
						<div
							className="relative overflow-hidden rounded-3xl border bg-white p-2 shadow-2xl"
							style={{
								borderColor: `${PRIMARY}33`,
								transform: "rotateY(-4deg) rotateX(2deg)",
								transformStyle: "preserve-3d",
								boxShadow: `0 30px 80px -28px ${PRIMARY}55, 0 0 0 1px rgba(255,255,255,0.85) inset`,
							}}>
							<div className="overflow-hidden rounded-[1.4rem]">
								<img
									src={imgIntro}
									alt="Integrated Management System"
									className="h-full w-full object-cover"
								/>
							</div>
							{/* Floating accent badge */}
							<div
								className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl border bg-white px-4 py-3 shadow-2xl backdrop-blur"
								style={{
									borderColor: `${PRIMARY}33`,
									transform: "translateZ(40px)",
								}}>
								<span
									className="h-2 w-2 rounded-full"
									style={{
										background: PRIMARY,
										boxShadow: `0 0 12px ${PRIMARY}`,
									}}
								/>
								<div>
									<div
										className="font-mono text-[9px] uppercase tracking-[0.32em]"
										style={{ color: PRIMARY }}>
										Aligned with
									</div>
									<div className="text-sm font-semibold text-slate-900">
										ISO 9001 · 45001 · ZED
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
