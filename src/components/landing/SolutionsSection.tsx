/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import Reveal from "../Reveal";
import { PRIMARY, SECONDARY } from "../../lib/theme";
import { SOLUTIONS } from "../../lib/content/landing";
import defaultImage from "../../assets/no.png";

/** Alternating slide direction per card for visual rhythm. */
const CARD_DIRS = ["left", "up", "right"] as const;

export default function SolutionsSection() {
	return (
		<SectionWrapper
			id="solutions"
			className="relative isolate py-10">
			{/* White base. The band used to carry the shared blue `section-tint`;
			    it now sits on white so the photography leads. */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `radial-gradient(70% 55% at 50% 0%, ${PRIMARY}14, transparent 70%),
						linear-gradient(180deg, #ffffff 0%, #f7fbff 100%)`,
				}}
			/>

			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div
					className="absolute -top-40 left-1/3 h-[28rem] w-[28rem] rounded-full blur-[120px] opacity-25"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}40, transparent 70%)`,
					}}
				/>
				<div
					className="absolute -bottom-32 right-0 h-[26rem] w-[26rem] rounded-full blur-[120px] opacity-20"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}33, transparent 70%)`,
					}}
				/>
			</div>

			<div className="container-x relative">
				<Reveal
					stagger={0.18}
					className="mb-16 flex flex-wrap items-end justify-between gap-6">
					<div>
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
							Our Solutions
						</Reveal>
						<Reveal
							from="up"
							distance={32}
							duration={1.1}
							as="h2"
							className="section-title">
							Co-creations{" "}
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								delivering value
							</span>
						</Reveal>
					</div>
					<Reveal
						from="right"
						distance={40}
						duration={1.1}
						as="p"
						className="max-w-md text-slate-600">
						Unique approach that drives us to deliver multifaceted solutions
						under one roof.
					</Reveal>
				</Reveal>

				<Reveal
					stagger={0.18}
					className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
					style={{ perspective: "1400px" }}>
					{SOLUTIONS.map((s, i) => {
						const dir = CARD_DIRS[i % CARD_DIRS.length];
						return (
							<Reveal
								key={s.title}
								from={dir}
								distance={dir === "up" ? 110 : 150}
								duration={1.15}>
								<SolutionCard
									img={s.img}
									index={i}
									icon={s.icon}
									title={s.title}
									desc={s.desc}
									to={s.to}
									company={s.company}
									image={defaultImage}
								/>
							</Reveal>
						);
					})}
				</Reveal>
			</div>
		</SectionWrapper>
	);
}

type IconComp = React.ComponentType<{ className?: string }>;

type SolutionCardProps = {
	img: string;
	index: number;
	icon: IconComp;
	title: string;
	desc: string;
	/** Division page this card opens. */
	to: string;
	/** Owning company, named on the card so the destination is not a surprise. */
	company: string;
	image: string;
};

function SolutionCard({
	img,
	index,
	icon: SIcon,
	title,
	desc,
	to,
	company,
}: SolutionCardProps) {
	const cardRef = useRef<HTMLAnchorElement | null>(null);
	const innerRef = useRef<HTMLDivElement | null>(null);
	const imgRef = useRef<HTMLImageElement | null>(null);
	const rafRef = useRef<number | null>(null);

	const handleMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
		const card = cardRef.current;
		const inner = innerRef.current;
		const imageEl = imgRef.current;
		if (!card || !inner) return;
		const rect = card.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width;
		const py = (e.clientY - rect.top) / rect.height;
		const rx = (0.5 - py) * 17;
		const ry = (px - 0.5) * 19;
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		rafRef.current = requestAnimationFrame(() => {
			inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.015)`;
			card.style.setProperty("--mx", `${px * 100}%`);
			card.style.setProperty("--my", `${py * 100}%`);
			if (imageEl) {
				const ix = (px - 0.5) * -16;
				const iy = (py - 0.5) * -16;
				imageEl.style.transform = `translate3d(${ix}px, ${iy}px, 0) scale(1.12)`;
			}
		});
	};

	const handleLeave = () => {
		const card = cardRef.current;
		const inner = innerRef.current;
		const imageEl = imgRef.current;
		if (!card || !inner) return;
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
		card.style.setProperty("--mx", `50%`);
		card.style.setProperty("--my", `50%`);
		if (imageEl) imageEl.style.transform = "translate3d(0, 0, 0) scale(1.04)";
	};

	return (
		<Link
			to={to}
			ref={cardRef}
			onPointerMove={handleMove}
			onPointerLeave={handleLeave}
			className="group relative block h-full rounded-[2rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
			style={{
				perspective: 1400,
				transformStyle: "preserve-3d",
				transitionDelay: `${index * 60}ms`,
				// CSS vars consumed by the glow layer
				// @ts-expect-error custom CSS vars
				"--mx": "50%",
				"--my": "50%",
			}}>
			{/* Outer halo glow that intensifies on hover */}
			<div
				aria-hidden
				className="pointer-events-none absolute -inset-2 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-60"
				style={{
					background: `radial-gradient(closest-side, ${PRIMARY}40, transparent 70%)`,
				}}
			/>

			<div
				ref={innerRef}
				className="relative overflow-hidden rounded-3xl border transition-[transform,border-color,box-shadow] duration-500 ease-out will-change-transform"
				style={{
					transformStyle: "preserve-3d",
					borderColor: "#C7DCEC",
					background: "#F1F7FB",
					boxShadow:
						"0 24px 60px -28px rgba(15,23,42,0.18), 0 0 0 1px rgba(255,255,255,0.9) inset",
				}}>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-20 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `radial-gradient(420px at var(--mx) var(--my), ${PRIMARY}26, transparent 60%)`,
					}}
				/>

				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-70"
					style={{
						background: `radial-gradient(680px at var(--mx) var(--my), rgba(15,23,42,0.05), transparent 55%)`,
					}}
				/>

				{/* Cursor-tracked border glow */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						borderRadius: "inherit",
						padding: "1.5px",
						background: `radial-gradient(circle at var(--mx) var(--my), ${PRIMARY}, transparent 55%)`,
						WebkitMask:
							"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
						WebkitMaskComposite: "xor",
						maskComposite: "exclude",
					}}
				/>

				<div
					className="relative h-72 overflow-hidden md:h-80"
					style={{
						transform: "translateZ(40px)",
						transformStyle: "preserve-3d",
					}}>
					<img
						ref={imgRef}
						src={img}
						alt=""
						className="absolute inset-0 h-full w-full object-cover will-change-transform"
						style={{
							objectPosition: "center center",
							transformOrigin: "center center",
							transform: "translate3d(0, 0, 0) scale(1.04)",
							transition:
								"transform 700ms cubic-bezier(0.22, 1, 0.36, 1), filter 700ms ease",
							filter: "saturate(1.08) contrast(1.05)",
						}}
					/>

					{/* Engineering grid sheen */}
					<div
						aria-hidden
						className="absolute inset-0 opacity-25 mix-blend-overlay"
						style={{
							backgroundImage:
								"linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
							backgroundSize: "32px 32px",
							maskImage:
								"radial-gradient(ellipse at 50% 30%, black 30%, transparent 80%)",
						}}
					/>

					<div
						aria-hidden
						className="absolute inset-0"
						style={{
							background:
								"linear-gradient(180deg, rgba(11,18,32,0) 0%, rgba(11,18,32,0.35) 55%, rgba(11,18,32,0.85) 100%)",
						}}
					/>
					<div
						aria-hidden
						className="absolute inset-x-0 top-0 h-px"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}aa, transparent)`,
							boxShadow: `0 0 14px ${PRIMARY}66`,
						}}
					/>
				</div>

				<div
					className="relative px-8 pb-9 pt-8"
					style={{ transform: "translateZ(60px)" }}>
					<span
						className="absolute -top-7 right-7 grid h-14 w-14 place-items-center rounded-2xl text-white transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-110"
						style={{
							background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
							boxShadow: `0 22px 50px -10px ${PRIMARY}66, 0 0 0 1px rgba(255,255,255,0.5) inset`,
							transform: "translateZ(90px)",
						}}>
						<SIcon className="h-6 w-6" />
					</span>

					<div className="mb-3 flex items-center gap-2">
						<span
							className="h-1 rounded-full transition-all duration-500 group-hover:w-12"
							style={{
								width: "1.5rem",
								background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
								boxShadow: `0 0 8px ${PRIMARY}55`,
							}}
						/>
						<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
							Solution
						</span>
					</div>

					<h3
						className="font-display text-xl font-semibold leading-snug text-slate-900"
						style={{ transform: "translateZ(70px)" }}>
						{title}
					</h3>
					<p
						className="mt-3 text-sm leading-relaxed text-slate-600"
						style={{ transform: "translateZ(35px)" }}>
						{desc}
					</p>

					<span
						className="mt-5 flex items-center gap-2 text-[0.8125rem] font-semibold opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100"
						style={{ color: PRIMARY, transform: "translateZ(50px)" }}>
						{company}
						<span
							aria-hidden
							className="transition-transform duration-500 ease-out group-hover:translate-x-1">
							→
						</span>
					</span>
				</div>

				{/* Corner crosshairs */}
				<span
					aria-hidden
					className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
					style={{ borderColor: PRIMARY, transform: "translateZ(40px)" }}
				/>
				<span
					aria-hidden
					className="pointer-events-none absolute right-3 bottom-3 h-4 w-4 border-b-2 border-r-2 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
					style={{ borderColor: SECONDARY, transform: "translateZ(40px)" }}
				/>
			</div>
		</Link>
	);
}
