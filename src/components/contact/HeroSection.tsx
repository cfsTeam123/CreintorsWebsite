/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import heroImage from "../../assets/common/connecttoday.png";
import { PRIMARY, SECONDARY } from "../../lib/theme";

const ACCENT = PRIMARY;
const FOCUS = ["Test Rigs", "Automation", "Water Treatment", "Education"];

export default function HeroSection() {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".tk-fade",
				{ opacity: 0, y: 36 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					stagger: 0.08,
					delay: 0.3,
				},
			);
			gsap.fromTo(
				".tk-bar",
				{ scaleX: 0 },
				{
					scaleX: 1,
					duration: 1.4,
					ease: "expo.out",
					delay: 0.4,
					transformOrigin: "left",
				},
			);
			gsap.fromTo(
				".tk-orb",
				{ scale: 0.6, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 1.6, ease: "elastic.out(1,0.6)" },
			);
		}, el);
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={ref}
			className="relative isolate flex min-h-[68vh] items-end overflow-hidden pb-16 pt-32 md:min-h-[72vh] md:pb-20"
			style={{ backgroundColor: "#070c17" }}>
			<img
				aria-hidden
				src={heroImage}
				alt=""
				className="pointer-events-none absolute inset-0 -z-40 h-full w-full object-cover opacity-75"
				style={{ filter: "saturate(0.9) contrast(1.05)" }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-30"
				style={{
					background: `
						linear-gradient(90deg, rgba(7,12,23,0.80) 0%, rgba(7,12,23,0.40) 50%, transparent 100%),
						radial-gradient(60% 80% at 80% 20%, ${ACCENT}16, transparent 20%),
						radial-gradient(60% 80% at 0% 100%, ${SECONDARY}23, transparent 20%)
					`,
				}}
			/>
			<div
				aria-hidden
				className="tk-orb pointer-events-none absolute -right-40 top-12 -z-10 h-[460px] w-[460px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${ACCENT}55, transparent 70%)`,
				}}
			/>
			<div
				aria-hidden
				className="tk-orb pointer-events-none absolute -left-32 bottom-0 -z-10 h-[380px] w-[380px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${SECONDARY}55, transparent 70%)`,
				}}
			/>

			<div className="container-x relative">
				<div className="tk-fade flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/55">
					<span>Contact · Creintors Group</span>
				</div>

				<h1 className="tk-fade mt-6 max-w-5xl page-title">
					<span className="text-white">Connect</span>{" "}
					<span
						className="bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(120deg, ${ACCENT}, #ffffff)`,
						}}>
						Today
					</span>
				</h1>

				<p className="tk-fade mt-6 max-w-3xl text-lg text-white/70 md:text-xl">
					Tell us about a project, an idea, or a problem worth engineering.
					We'll route it to the right company and reply within one business
					day.
				</p>

				<div
					className="tk-bar mt-10 h-px w-full origin-left"
					style={{
						background: `linear-gradient(90deg, ${ACCENT}, transparent)`,
					}}
				/>

				<div className="tk-fade mt-8 flex flex-wrap items-center gap-3">
					<span
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur"
						style={{
							borderColor: "rgba(255,255,255,0.18)",
							background: "rgba(255,255,255,0.06)",
						}}>
						Founded 2012
					</span>
					{FOCUS.map((f) => (
						<span
							key={f}
							className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
							style={{
								borderColor: `${ACCENT}55`,
								background: `${ACCENT}14`,
							}}>
							{f}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
