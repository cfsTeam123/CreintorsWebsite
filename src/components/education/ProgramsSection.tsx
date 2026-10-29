/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import SectionWrapper from "../SectionWrapper";
import { PROGRAMS } from "../../lib/content/education";
import imgImmersion from "../../assets/industries/chemical.jpg";
import imgLabs from "../../assets/industries/pharm.jpeg";
import imgMentorship from "../../assets/industries/foodbanne.jpeg";
import imgWorkshops from "../../assets/industries/textilebanner.jpeg";

const PROGRAM_IMAGES = [imgImmersion, imgLabs, imgMentorship, imgWorkshops];
const ACCENTS = ["#1ac8ff", "#46367f", "#138708", "#ff7849"];
const BRAND = "#1ac8ff";
const VIOLET = "#46367f";

export default function ProgramsSection() {
	return (
		<SectionWrapper className="section-tint relative py-24 md:py-28">
			<div className="container-x relative">
				<div className="mb-14 max-w-3xl">
					<div className="eyebrow reveal">
						<span
							className="h-px w-8"
							style={{ background: BRAND }}
						/>{" "}
						Programs
					</div>
					<h2
						className="section-title reveal bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(95deg, #0b1220 0%, #0b1220 45%, ${BRAND} 80%, ${VIOLET} 100%)`,
						}}>
						The 3i Ecosystem, in practice.
					</h2>
				</div>
				<div className="grid gap-6 md:grid-cols-2">
					{PROGRAMS.map((p, i) => {
						const accent = ACCENTS[i % ACCENTS.length];
						return (
							<div
								key={p.name}
								className="reveal group relative overflow-hidden rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-1"
								style={{
									borderColor: `${accent}33`,
									boxShadow: `0 30px 80px -36px ${accent}66, 0 0 0 1px rgba(255,255,255,0.85) inset`,
								}}>
								<div className="relative h-48 overflow-hidden md:h-56">
									<img
										src={PROGRAM_IMAGES[i % PROGRAM_IMAGES.length]}
										alt={p.name}
										className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div
										aria-hidden
										className="absolute inset-0"
										style={{
											background:
												"linear-gradient(180deg, transparent 20%, rgba(8,10,16,0.9) 95%)",
										}}
									/>
									<div className="absolute left-5 top-5 flex items-center gap-2">
										<span
											className="h-2 w-2 rounded-full"
											style={{
												background: accent,
												boxShadow: `0 0 10px ${accent}`,
											}}
										/>
										<div
											className="font-mono text-[10px] uppercase tracking-[0.32em]"
											style={{ color: accent }}>
											Program 0{i + 1}
										</div>
									</div>
								</div>
								<div className="relative flex h-full flex-col p-7 md:p-8">
									<h3 className="font-display text-3xl font-semibold leading-tight text-slate-900">
										{p.name}
									</h3>
									<p
										className="mt-1 text-xs uppercase tracking-[0.18em]"
										style={{ color: accent }}>
										{p.sub}
									</p>
									<div
										className="mt-4 h-px w-16"
										style={{
											background: `linear-gradient(90deg, ${accent}, transparent)`,
										}}
									/>
									<p className="mt-5 leading-relaxed text-slate-600">
										{p.body}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</SectionWrapper>
	);
}
