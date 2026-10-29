/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import SectionWrapper from "../SectionWrapper";
import { STACK } from "../../lib/content/cautomate";

export default function StackSection() {
	return (
		<SectionWrapper className="py-24 md:py-28">
			<div className="container-x">
				<div className="mb-12 #max-w-4xl">
					<div className="eyebrow reveal">
						<span className="h-px w-8 bg-accent-violet" /> Tech Stack
					</div>
					<h2 className="section-title reveal">
						The full{" "}
						<span className="text-gradient-brand">automation stack</span>.
					</h2>
				</div>
				<div className="grid gap-6 lg:grid-cols-3">
					{STACK.map((s) => (
						<div
							key={s.title}
							className={`reveal relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${s.tone} via-transparent to-transparent p-7`}>
							<h3 className="font-display text-2xl font-semibold text-white">
								{s.title}
							</h3>
							<ul className="mt-5 space-y-3 text-sm text-white">
								{s.items.map((i) => (
									<li
										key={i}
										className="flex items-center gap-3">
										<span className="h-1.5 w-1.5 rounded-full bg-white/60" />
										{i}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}
