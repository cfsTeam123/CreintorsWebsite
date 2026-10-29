/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { POLICY_THEME } from "../../lib/content/policies";
import heroImage from "../../assets/gallery/isoo.jpg";

const ACCENT = POLICY_THEME.primary;
const SECONDARY = POLICY_THEME.secondary;

/*
 * The four ISO standards on the certification photograph (src/assets/gallery/
 * iso.png) plus the ZED level awarded on the three MSME certificates in
 * src/assets/certificates. Nothing here is claimed that those do not show.
 */
const FOCUS = [
	"ISO 9001",
	"ISO 14001",
	"ISO 27001",
	"ISO 45001",
	"ZED Silver",
];

export default function HeroSection() {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			const COMMON = { duration: 1, ease: "power3.out", delay: 0.3 };
			gsap.fromTo(
				".tk-from-top",
				{ opacity: 0, y: -48 },
				{ opacity: 1, y: 0, ...COMMON },
			);
			gsap.fromTo(
				".tk-from-bottom",
				{ opacity: 0, y: 26 },
				{ opacity: 1, y: 0, ...COMMON, stagger: 0.08 },
			);
			gsap.fromTo(
				".tk-from-left",
				{ opacity: 0, x: -28 },
				{ opacity: 1, x: 0, ...COMMON },
			);
			gsap.fromTo(
				".tk-from-right",
				{ opacity: 0, x: 28 },
				{ opacity: 1, x: 0, ...COMMON },
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
						linear-gradient(180deg, rgba(7,12,23,0.22) 0%, rgba(7,12,23,0.40) 55%, rgba(7,12,23,0.80) 100%),
						radial-gradient(60% 80% at 80% 20%, ${ACCENT}26, transparent 60%),
						radial-gradient(60% 80% at 0% 100%, ${SECONDARY}33, transparent 60%)
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
				<div className="tk-from-top flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/55">
					<span>Integrated Management System Policy</span>
				</div>

				<h1 className="tk-from-left mt-6 max-w-5xl page-title">
					<span className="text-white">IMS </span>
					<span
						className="bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(120deg, ${ACCENT}, #ffffff)`,
						}}>
						Policy
					</span>
				</h1>

				<p className="tk-from-right mt-6 max-w-3xl text-lg text-white/70 md:text-xl">
					Certified to ISO 9001, ISO 14001, ISO 27001 and ISO 45001, and
					awarded ZED Silver under the MSME Sustainable (ZED) Certification
					Scheme at all three Creintors companies. One management system
					governing quality, environment, information security and
					occupational health &amp; safety across everything we engineer,
					ship and run as an OEM.
				</p>

				<div
					className="tk-bar mt-10 h-px w-full origin-left"
					style={{
						background: `linear-gradient(90deg, ${ACCENT}, transparent)`,
					}}
				/>

				<div className="tk-from-bottom mt-8 flex flex-wrap items-center gap-3">
					<span
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur"
						style={{
							borderColor: "rgba(255,255,255,0.18)",
							background: "rgba(255,255,255,0.06)",
						}}>
						OEM · Since 2020
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
