/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { PRIMARY, SECONDARY, tint } from "../../lib/theme";

type Props = {
	/** The page this one hands on to. */
	to: string;
	label: string;
	/** One line on what is there. */
	desc: string;
	image: string;
};

/**
 * The foot of the CII Engagement and VLFM Experience pages: each hands on to
 * the other, since the two are one story told from two sides, and both lead
 * back to the rest of Explore.
 */
export default function ExploreNext({ to, label, desc, image }: Props) {
	return (
		<section className="relative py-10">
			<div className="container-x">
				<Reveal from="up">
					<Link
						to={to}
						className="group relative grid overflow-hidden rounded-[28px] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
						style={{
							backgroundColor: "#081222",
							boxShadow: "0 40px 90px -50px rgba(8,18,34,0.9)",
						}}>
						<div className="relative z-10 flex flex-col justify-center p-8 md:p-12 lg:p-14">
							<span className="text-sm text-white/60">Next in Explore</span>
							<h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
								{label}
							</h2>
							<p className="mt-4 max-w-[40ch] text-base leading-relaxed text-white/70">
								{desc}
							</p>
							<span
								className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-[gap] duration-300 group-hover:gap-3"
								style={{ color: tint(PRIMARY, 0.35) }}>
								Go to {label}
								<ArrowRight
									aria-hidden
									className="h-4 w-4"
								/>
							</span>
						</div>

						<div className="relative min-h-[14rem] overflow-hidden md:min-h-0">
							<img
								src={image}
								alt=""
								loading="lazy"
								decoding="async"
								className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
							/>
							{/* Melts the photograph into the panel's ground. */}
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0 hidden md:block"
								style={{
									background:
										"linear-gradient(90deg, #081222 0%, rgba(8,18,34,0.55) 30%, transparent 70%)",
								}}
							/>
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0 md:hidden"
								style={{
									background:
										"linear-gradient(180deg, #081222 0%, transparent 45%)",
								}}
							/>
						</div>

						<span
							aria-hidden
							className="pointer-events-none absolute inset-x-10 top-0 h-px"
							style={{
								background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
							}}
						/>
					</Link>
				</Reveal>

				<div className="mt-6 flex justify-center">
					<Link
						to="/explore"
						className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
						<ArrowLeft
							aria-hidden
							className="h-4 w-4"
						/>
						Back to Explore
					</Link>
				</div>
			</div>
		</section>
	);
}
