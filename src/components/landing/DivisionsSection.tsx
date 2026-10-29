/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import AnimatedCard from "../AnimatedCard";
import Reveal from "../Reveal";
import { PRIMARY, SECONDARY } from "../../lib/theme";
import { cn } from "../../lib/utils";
import { DIVISIONS } from "../../lib/divisions";
import { DIVISION_COPY } from "../../lib/content/landing";
import BrandName from "../BrandName";
import sidebar2 from "../../assets/logos/cretorNOBG.png";
import sidebar3 from "../../assets/logos/cmateNOBG.png";
import sidebar4 from "../../assets/logos/envroNOBG.png";

/** Alternating slide direction per card for visual rhythm. */
const CARD_DIRS = ["left", "up", "right"] as const;

const DIVISION_IMAGES = [sidebar2, sidebar3, sidebar4] as const;

function DivisionVisual({ image }: { image: string }) {
	// Image is fully contained inside the slot. The 3D effect comes from
	// translateZ (so the image parallaxes against the card during tilt) +
	// a soft contact-shadow ellipse beneath it + a gentle continuous bob.
	return (
		<div
			className="relative -mx-6 -mt-2 mb-2 h-[13rem]"
			style={{ transformStyle: "preserve-3d", perspective: "1400px" }}>
			<div
				aria-hidden
				className="division-3d-shadow pointer-events-none absolute bottom-2 left-1/2 h-4 w-48 rounded-[50%] blur-md"
				style={{ background: "rgba(15,23,42,0.22)" }}
			/>

			<img
				src={image}
				alt=""
				draggable={false}
				className="division-3d-img pointer-events-none absolute bottom-2 left-1/2 h-[11.5rem] w-auto max-w-none select-none object-contain"
				style={{
					transformStyle: "preserve-3d",
					filter: "drop-shadow(0 28px 32px rgba(15,23,42,0.28))",
				}}
			/>
		</div>
	);
}

export default function DivisionsSection({
	className,
}: {
	/** Extra classes — the home page lifts the 90vh floor. */
	className?: string;
}) {
	return (
		<SectionWrapper
			id="companies"
			className={cn(
				"section-tint flex items-center py-10 md:min-h-[90vh]",
				className,
			)}>
			<div className="mx-auto w-full max-w-[92rem] px-6 lg:px-10">
				<Reveal
					stagger={0.18}
					className="mb-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
					<div className="max-w-5xl">
						<Reveal
							from="left"
							distance={40}
							duration={1.1}
							as="div"
							className="eyebrow">
							<span
								className="h-px w-8"
								style={{ background: PRIMARY }}
							/>{" "}
							Innovators Delivering Solutions{" "}
						</Reveal>
						<Reveal
							from="up"
							distance={32}
							duration={1.1}
							as="h2"
							className="section-title">
							<BrandName name="creintors" />{" "}
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								Group of Companies
							</span>
						</Reveal>
						<Reveal
							from="up"
							distance={60}
							duration={1}
							as="p"
							className="mt-5 text-base leading-relaxed text-slate-600 lg:text-lg">
							Three focused entities with unique approach considering special
							solutions for critical processes, end-to-end automation and
							environmental sustenance.
						</Reveal>
					</div>
				</Reveal>

				<Reveal
					stagger={0.2}
					className="grid gap-8 md:grid-cols-3">
					{DIVISIONS.map((d, i) => {
						const overlay = DIVISION_COPY[d.slug];
						const tagline = overlay?.tagline ?? d.shortTagline;
						const points = overlay?.points;
						const image = DIVISION_IMAGES[i] ?? sidebar2;
						const dir = CARD_DIRS[i % CARD_DIRS.length];

						return (
							<Reveal
								key={d.slug}
								from={dir}
								distance={dir === "up" ? 120 : 160}
								duration={1.2}
								className="block h-full">
								<Link
									to={"/" + d.slug}
									className="group block h-full">
									<AnimatedCard
										glareColor={`${d.accent}55`}
										borderColor={d.accent}
										topLine={false}
										innerClassName="!p-7 !bg-transparent !border-transparent !shadow-none [transform-style:preserve-3d]">
										<div className="flex h-full flex-col">
											<DivisionVisual image={image} />

											{/* The logo above already carries the company name, so the
											    card leads with what the company does instead. */}
											<p
												className="mt-1 text-sm font-semibold uppercase tracking-[0.14em]"
												style={{ color: d.accent }}>
												{tagline}
											</p>

											{points ?
												<ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-slate-600">
													{points.map((point) => (
														<li
															key={point}
															className="flex gap-2.5">
															<span
																aria-hidden
																className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full"
																style={{ background: d.accent }}
															/>
															{point}
														</li>
													))}
												</ul>
											:	<p className="mt-3 text-[0.95rem] leading-relaxed text-slate-600">
													{d.description}
												</p>
											}

											<div
												className="mt-4 h-px w-full transition-all duration-500 group-hover:w-[110%]"
												style={{
													background: `linear-gradient(90deg, ${d.accent}66, transparent)`,
												}}
											/>

											<span className="mt-auto pt-5 inline-flex items-center justify-between text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-slate-900">
												<span className="inline-flex items-center gap-2.5">
													<span
														className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-125"
														style={{
															background: d.accent,
															boxShadow: `0 0 10px ${d.accent}66`,
														}}
													/>
													Explore : {d.serviceName.toUpperCase()}
												</span>
												<span
													aria-hidden
													className="grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 group-hover:translate-x-1.5 group-hover:scale-105"
													style={{
														borderColor: `${d.accent}66`,
														background: `${d.accent}14`,
														color: d.accent,
													}}>
													→
												</span>
											</span>
										</div>
									</AnimatedCard>
								</Link>
							</Reveal>
						);
					})}
				</Reveal>
			</div>

			<style>{`
				.division-3d-img {
					transform: translate3d(-50%, 0, 50px);
				}
				.division-3d-shadow {
					transform: translate3d(-50%, 0, 0);
					opacity: 0.55;
				}
			`}</style>
		</SectionWrapper>
	);
}
