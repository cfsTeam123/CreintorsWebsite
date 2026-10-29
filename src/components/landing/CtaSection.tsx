	/** @format */

	import { useState } from "react";
	import { motion } from "motion/react";
	import { Link } from "react-router-dom";
	import SectionWrapper from "../SectionWrapper";
	import { PRIMARY, SECONDARY } from "../../lib/theme";
	import ctaBg from "../../assets/gallery/team-cta.webp";

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.12, delayChildren: 0.1 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 16 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
		},
	};

	export default function CtaSection() {
		const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

		const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
			const rect = e.currentTarget.getBoundingClientRect();
			setMousePosition({
				x: ((e.clientX - rect.left) / rect.width) * 100,
				y: ((e.clientY - rect.top) / rect.height) * 100,
			});
		};

		return (
			<SectionWrapper className="section-tint overflow-visible py-10">
				<motion.div
					initial="visible"
					animate="visible"
					variants={containerVariants}
					className="container-x">
					<motion.div
						variants={containerVariants}
						onMouseMove={handleMouseMove}
					className="relative min-h-[520px] overflow-visible rounded-[2rem] border border-white/10 bg-white/20 shadow-[0_40px_100px_-40px_rgba(15,23,42,0.6)]">
						{/* Background team photo. A full photograph since 26 Sep, so it
						    fills the card instead of standing out of its top edge the
						    way the cut-out did; a light wash keeps the heading legible. */}
						<img
							src={ctaBg}
							alt="The Creintors team"
							className="absolute inset-0 h-full w-full rounded-[2rem] object-cover object-[50%_60%]"
						/>
						<div
							aria-hidden
							className="pointer-events-none absolute inset-0 rounded-[2rem]"
							style={{
								background:
									"linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.45) 34%, rgba(255,255,255,0) 58%)",
							}}
						/>

		

						{/* Cursor spotlight */}
						<div
							aria-hidden
						className="pointer-events-none absolute inset-0 rounded-[2rem] transition-opacity duration-300"
							style={{
								background: `radial-gradient(540px circle at ${mousePosition.x}% ${mousePosition.y}%, ${PRIMARY}40, transparent 45%)`,
								mixBlendMode: "screen",
							}}
						/>

						<div
							aria-hidden
							className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
							style={{ background: `${SECONDARY}44` }}
						/>

						<div className="relative z-10 flex min-h-[520px] flex-col items-start justify-start gap-5 px-6 pb-14 pt-8 sm:px-10 sm:pb-16 sm:pt-10 md:px-12 md:pb-20 md:pt-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:px-16 lg:pb-24 lg:pt-14">
						<motion.div
							variants={containerVariants}
							className="max-w-2xl"
							style={{
								textShadow:
									"0 1px 0 rgba(255,255,255,0.9), 0 10px 28px rgba(255,255,255,0.85)",
							}}>
								<motion.div
									variants={itemVariants}
									className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-800">
									<span
										className="h-px w-8"
										style={{ background: PRIMARY }}
									/>
									Let's Build Together
								</motion.div>

								<motion.h2
									variants={itemVariants}
									className="section-title-sm mt-4 text-slate-950">
									Have a system to design, automate, or sustain?
								</motion.h2>

								
							</motion.div>

							<motion.div
								variants={itemVariants}
								className="lg:ml-auto lg:mr-16 lg:mt-12 lg:flex-shrink-0">
								<Link
									to="/contact"
									className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-slate-950 px-5 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-slate-800 active:scale-95 lg:px-7 lg:py-4 lg:text-sm">
									Talk to Our Engineers
									<svg
										className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</svg>
								</Link>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			</SectionWrapper>
		);
	}
