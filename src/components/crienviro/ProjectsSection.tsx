/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useReveal } from "../Creintors/useReveal";
import CrienviroProductCard from "./CrienviroProductCard";
import {
	CRI_PRODUCTS,
	CRI_INDUSTRIES,
	CRIENVIRO_THEME,
} from "../../lib/content/crienviro";

const PRIMARY = CRIENVIRO_THEME.primary;
const SECONDARY = CRIENVIRO_THEME.secondary;

export default function ProjectsSection() {
	const ref = useReveal<HTMLDivElement>();
	return (
		<section className="relative py-24 md:py-28">
			<div
				ref={ref}
				className="container-x">
				<div className="mb-12 max-w-3xl">
			
					<h2 className="tk-fade section-title">
						<span className="text-white">Our </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
							}}>
							projects
						</span>
					</h2>
					<p className="tk-fade mt-6 text-white/65">
						A portfolio of treatment and supply systems engineered in-house,
						commissioned with statutory clearance and operated under SLA-bound
						contracts.
					</p>
				</div>

				{/*
				 * One card per row, so no `auto-rows-fr`.
				 *
				 * Equal-height rows earned their keep when the cards sat two to a row.
				 * Stacked, all it did was stretch every card to the height of the
				 * wordiest one in the group, which left a band of empty card under the
				 * shorter ones and pushed them past the bottom of the screen. Each card
				 * is now as tall as its own content.
				 */}
				<div className="grid gap-8 md:gap-10">
					{CRI_PRODUCTS.map((p, i) => (
						<CrienviroProductCard
							key={p.id}
							product={p}
							index={i}
						/>
					))}
				</div>

				<div className="mt-24">
					<div className="mb-10 #max-w-4xl">
						<div className="tk-fade eyebrow">
							<span
								className="h-px w-8"
								style={{ background: PRIMARY }}
							/>{" "}
							Sectors served
						</div>
						<h3 className="tk-fade font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
							<span className="text-white">Built for sectors that </span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
								}}>
								protect public health.
							</span>
						</h3>
					</div>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{CRI_INDUSTRIES.map((it, i) => (
							<div
								key={it.t}
								className="tk-fade group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(62,180,137,0.45)] hover:bg-white/[0.05]">
								<span
									aria-hidden
									className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
									style={{ background: PRIMARY }}
								/>
								<div className="relative">
									<div
										className="font-mono text-[10px] uppercase tracking-[0.32em]"
										style={{ color: SECONDARY }}>
										Sector 0{i + 1}
									</div>
									<h4 className="mt-2 font-display text-xl font-semibold text-white">
										{it.t}
									</h4>
									<p className="mt-2 text-sm leading-relaxed text-white/60">
										{it.d}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
