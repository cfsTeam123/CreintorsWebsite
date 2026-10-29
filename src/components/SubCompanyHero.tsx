/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

type Props = {
	legalName: string;
	title: string;
	tagline: string;
	founded: number;
	focus: string[];
	accent: string;
};

export default function SubCompanyHero({
	legalName,
	title,
	tagline,
	founded,
	focus,
	accent,
}: Props) {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".sh-fade",
				{ opacity: 0, y: 36 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					stagger: 0.08,
					delay: 0.25,
				},
			);
			gsap.fromTo(
				".sh-bar",
				{ scaleX: 0 },
				{
					scaleX: 1,
					duration: 1.4,
					ease: "expo.out",
					delay: 0.3,
					transformOrigin: "left",
				},
			);
			gsap.fromTo(
				".sh-orb",
				{ scale: 0.6, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 1.6, ease: "elastic.out(1,0.6)" },
			);
		}, el);
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={ref}
			className="relative isolate overflow-hidden pt-40 pb-24">
			<div
				aria-hidden
				className="sh-orb pointer-events-none absolute -right-40 top-10 h-[460px] w-[460px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${accent}55, transparent 70%)`,
				}}
			/>
			<div
				aria-hidden
				className="sh-orb pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${accent}33, transparent 70%)`,
				}}
			/>

			<div className="container-x relative">
				<div className="sh-fade flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/45">
					<span>{legalName}</span>
				</div>

				<h1 className="sh-fade mt-6 font-display text-[clamp(2.6rem,9vw,7rem)] font-semibold leading-[0.92] tracking-tight">
					<span className="text-white">{title.split(" ")[0]}</span>{" "}
					<span
						className="bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(120deg, ${accent}, #ffffff)`,
						}}>
						{title.split(" ").slice(1).join(" ") || "."}
					</span>
				</h1>

				<p className="sh-fade mt-6 #max-w-4xl text-xl text-white/65 md:text-2xl">
					{tagline}
				</p>

				<div
					className="sh-bar mt-10 h-px w-full origin-left"
					style={{
						background: `linear-gradient(90deg, ${accent}, transparent)`,
					}}
				/>

				<div className="sh-fade mt-8 flex flex-wrap items-center gap-3">
					<span className="chip">Founded {founded}</span>
					{focus.map((f) => (
						<span
							key={f}
							className="chip"
							style={{ borderColor: `${accent}55` }}>
							{f}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
