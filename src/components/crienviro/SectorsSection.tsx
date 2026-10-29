/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import SectionWrapper from "../SectionWrapper";
import { DIVISIONS } from "../../lib/divisions";
import { SECTORS } from "../../lib/content/crienviro";

const D = DIVISIONS.find((d) => d.slug === "crienviro")!;

export default function SectorsSection() {
	return (
		<SectionWrapper className="py-24 md:py-28">
			<div className="container-x">
				<div className="mb-12 #max-w-4xl">
					<div className="eyebrow reveal">
						<span
							className="h-px w-8"
							style={{ background: D.accent }}
						/>{" "}
						Sectors Served
					</div>
					<h2 className="section-title reveal">
						Where clean water <br />
						<span className="text-gradient-brand">matters most</span>.
					</h2>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{SECTORS.map((it, i) => (
						<div
							key={it.t}
							className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05]">
							<div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/40">
								Sector 0{i + 1}
							</div>
							<h3 className="mt-2 font-display text-2xl font-semibold text-white">
								{it.t}
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-white/60">
								{it.d}
							</p>
							<span
								aria-hidden
								className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition group-hover:opacity-50"
								style={{ background: D.accent }}
							/>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}
