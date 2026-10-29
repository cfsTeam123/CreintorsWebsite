/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import { PRIMARY, SECONDARY } from "../../lib/theme";
import { Icon } from "../../lib/icons";

import imgNuclear from "../../assets/industries/nuclea.jpeg";
import imgFood from "../../assets/industries/foodbanne.jpeg";
import imgChemical from "../../assets/industries/chemical.jpg";
import imgSteel from "../../assets/industries/stee.jpeg";
import imgLogistic from "../../assets/industries/logistic.jpg";
import imgManufacturing from "../../assets/industries/manufacturing.jpg";
import imgJewellery from "../../assets/industries/jewelr.jpeg";
import imgTextile from "../../assets/industries/textilebanner.jpeg";
import imgFurniture from "../../assets/industries/furniture.jpg";
import imgPharma from "../../assets/industries/pharm.jpeg";
import imgAerospace from "../../assets/industries/aerospaceanddefenc.jpeg";
import imgConstruction from "../../assets/industries/construction.jpg.jpeg";
// Unsplash, Roger Starnes Sr — see src/image-credits.json.
import imgGreenEnergy from "../../assets/industries/green-energy-biogas-plant.webp";

type IconComp = React.ComponentType<{ className?: string }>;

type Industry = {
	cat: string;
	title: string;
	desc: string;
	icon: IconComp;
	image: string;
};

const INDUSTRY_LIST: Industry[] = [
	{
		cat: "Automotive",
		title: "Precision Production And Component Testing",
		desc: "Engineering testing systems, automation solutions, and manufacturing technologies designed to improve precision, efficiency, and quality in automotive production and component testing.",
		icon: Icon.Car,
		// no dedicated automotive asset yet fall back to manufacturing imagery
		image: imgManufacturing,
	},
	{
		cat: "Nuclear",
		title: "High Reliability Systems For Regulated Infrastructure",
		desc: "High reliability engineering and testing systems designed to meet strict safety, performance, and regulatory standards required in nuclear and energy infrastructure.",
		icon: Icon.Atom,
		image: imgNuclear,
	},
	{
		cat: "Food And Beverages",
		title: "Clean, Efficient, Quality Led Production",
		desc: "Automation and process solutions that support efficient production, quality control, and hygienic operations across food processing and beverage manufacturing industries.",
		icon: Icon.Cup,
		image: imgFood,
	},
	{
		cat: "Chemical",
		title: "Safer And More Reliable Process Control",
		desc: "Advanced automation, testing, and monitoring systems designed to improve safety, process efficiency, and reliability in chemical manufacturing environments.",
		icon: Icon.Beaker,
		image: imgChemical,
	},
	{
		cat: "Steel",
		title: "Heavy Duty Automation For Demanding Operations",
		desc: "Industrial automation and engineered testing solutions supporting steel production, material handling, and heavy manufacturing processes.",
		icon: Icon.Flame,
		image: imgSteel,
	},
	{
		cat: "Logistics And Warehousing",
		title: "Smarter Flow, Storage, And Fulfilment",
		desc: "Smart automation solutions including ASRS systems, automated material handling, and warehouse management technologies that improve storage efficiency and operational productivity.",
		icon: Icon.Truck,
		image: imgLogistic,
	},
	{
		cat: "Manufacturing",
		title: "Integrated Systems For Smart Factory Performance",
		desc: "Integrated engineering systems, automation technologies, and testing equipment designed to support modern manufacturing and smart factory environments.",
		icon: Icon.Factory,
		image: imgManufacturing,
	},
	{
		cat: "Jewellery",
		title: "Fine Precision For Delicate Manufacturing",
		desc: "Precision engineering solutions and specialised automation systems designed to support delicate manufacturing processes and quality control in jewellery production.",
		icon: Icon.Diamond,
		image: imgJewellery,
	},
	{
		cat: "Textile",
		title: "Process Optimization Across Every Production Line",
		desc: "Automation and engineered systems that enhance production efficiency, quality control, and process optimization in textile manufacturing.",
		icon: Icon.Shirt,
		image: imgTextile,
	},
	{
		cat: "Furniture",
		title: "Scalable Production With Better Precision",
		desc: "Manufacturing automation and production solutions designed to improve efficiency, precision, and scalability in furniture manufacturing operations.",
		icon: Icon.Sofa,
		image: imgFurniture,
	},
	{
		cat: "Pharmaceuticals And Health Care",
		title: "Controlled Environments With Regulatory Confidence",
		desc: "Reliable automation and environmental systems designed to meet strict regulatory standards and ensure safe, controlled production environments.",
		icon: Icon.Pill,
		image: imgPharma,
	},
	{
		cat: "Defence And Aerospace",
		title: "Mission Critical Engineering With High Precision",
		desc: "High precision engineering solutions, testing systems, and automation technologies designed for mission critical defence and aerospace applications.",
		icon: Icon.Shield,
		image: imgAerospace,
	},
	{
		cat: "Civil Constructions And Real Estate",
		title: "Infrastructure Support With Sustainable Engineering",
		desc: "Engineering and environmental solutions supporting infrastructure development, water treatment systems, and sustainable construction projects.",
		icon: Icon.Building,
		image: imgConstruction,
	},
	{
		// Added 18 Sep, on a biogas plant photograph as asked; the copy stays
		// within what the group states elsewhere (Crienviro's turnkey
		// compressed biogas solutions).
		cat: "Green Energy",
		title: "Turning Waste Into Clean, Renewable Fuel",
		desc: "Turnkey compressed biogas solutions and environmental engineering that turn organic waste into clean, renewable energy for a lower carbon future.",
		icon: Icon.Leaf,
		image: imgGreenEnergy,
	},
];

const AUTOPLAY_MS = 4000;
const VISIBLE_RANGE = 3;
const SWIPE_THRESHOLD = 60;
const SPRING = "cubic-bezier(0.34, 1.3, 0.4, 1)";

export default function IndustriesSection() {
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);
	const [drag, setDrag] = useState(0);
	const dragStateRef = useRef<{
		startX: number;
		startY: number;
		dragging: boolean;
	}>({
		startX: 0,
		startY: 0,
		dragging: false,
	});
	const didDragRef = useRef(false);
	const total = INDUSTRY_LIST.length;
	const timerRef = useRef<number | null>(null);

	const goTo = (i: number) => setActive(((i % total) + total) % total);
	const next = () => goTo(active + 1);
	const prev = () => goTo(active - 1);

	useEffect(() => {
		if (paused) return;
		timerRef.current = window.setTimeout(() => {
			setActive((a) => (a + 1) % total);
		}, AUTOPLAY_MS);
		return () => {
			if (timerRef.current) window.clearTimeout(timerRef.current);
		};
	}, [active, paused, total]);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "ArrowRight") next();
			if (e.key === "ArrowLeft") prev();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});

	const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
		dragStateRef.current = {
			startX: e.clientX,
			startY: e.clientY,
			dragging: true,
		};
		didDragRef.current = false;
		(e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
	};

	const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		if (!dragStateRef.current.dragging) return;
		const dx = e.clientX - dragStateRef.current.startX;
		const dy = e.clientY - dragStateRef.current.startY;
		if (Math.abs(dy) > Math.abs(dx) * 1.4) return;
		if (Math.abs(dx) > 6) didDragRef.current = true;
		setDrag(dx);
	};

	const onPointerUp = () => {
		const dx = drag;
		dragStateRef.current.dragging = false;
		setDrag(0);
		if (dx > SWIPE_THRESHOLD) prev();
		else if (dx < -SWIPE_THRESHOLD) next();
	};

	const dragShift = drag / 8;

	const current = INDUSTRY_LIST[active];

	return (
		<SectionWrapper className="relative isolate flex h-screen min-h-[640px] flex-col overflow-hidden py-10">
			{/* Light ambient wash — the base surface for the section. */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `radial-gradient(70% 55% at 50% 0%, ${PRIMARY}1f, transparent 70%),
						radial-gradient(60% 60% at 100% 100%, ${SECONDARY}14, transparent 70%),
						linear-gradient(180deg, #ffffff 0%, #f7fbff 100%)`,
				}}
			/>

			{/* Brand colour blooms */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div
					className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[140px] opacity-45 industries-pulse"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}33, transparent 70%)`,
					}}
				/>
				<div
					className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full blur-[120px] opacity-40 industries-pulse"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}2b, transparent 70%)`,
						animationDelay: "2s",
					}}
				/>
				<div
					className="absolute top-1/3 left-0 h-64 w-64 rounded-full blur-[110px] opacity-35"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}2b, transparent 70%)`,
					}}
				/>
			</div>

			{/* Top + bottom hairlines */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-px"
				style={{
					background: `linear-gradient(90deg, transparent, ${PRIMARY}66, ${SECONDARY}66, transparent)`,
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
				style={{
					background: `linear-gradient(90deg, transparent, ${SECONDARY}55, ${PRIMARY}55, transparent)`,
				}}
			/>

			<div className="container-x relative z-10 flex flex-1 min-h-0 flex-col">
				<div className="mb-4 flex flex-wrap items-end justify-between gap-4 md:mb-6">
					<div className="max-w-3xl">
						<div
							className="reveal mb-2 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] md:text-xs"
							style={{ color: PRIMARY }}>
							<span
								className="h-px w-8"
								style={{ background: PRIMARY }}
							/>
							Industries We Serve
						</div>
						<h2 className="section-title reveal">
							Innovations across{" "}
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								industries…
							</span>
						</h2>
					</div>

					<div className="reveal flex items-center gap-3">
						<span
							className="h-px w-16"
							style={{
								background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
							}}
						/>
					</div>
				</div>

				<div
					className="relative flex flex-1 min-h-0 select-none items-center"
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}>
					<div
						className="absolute left-1/2 top-1/2 z-0 hidden h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 md:block"
						style={{
							background: `radial-gradient(circle, ${PRIMARY}33 0%, transparent 60%)`,
							transition: "opacity 800ms ease",
						}}
					/>

					<div
						className="absolute left-1/2 top-[78%] z-0 hidden h-44 w-[55%] -translate-x-1/2 rounded-[50%] opacity-60 blur-2xl md:block"
						aria-hidden
						style={{
							background: `radial-gradient(ellipse, ${PRIMARY}26 0%, transparent 65%)`,
						}}
					/>

					<div
						className="relative mx-auto h-full max-h-[34rem] w-full touch-pan-y"
						style={{ perspective: "1800px", perspectiveOrigin: "50% 55%" }}
						onPointerDown={onPointerDown}
						onPointerMove={onPointerMove}
						onPointerUp={onPointerUp}
						onPointerCancel={onPointerUp}>
						<div
							className="relative h-full w-full"
							style={{ transformStyle: "preserve-3d" }}>
							{INDUSTRY_LIST.map((item, i) => {
								let offset = i - active;
								if (offset > total / 2) offset -= total;
								if (offset < -total / 2) offset += total;
								const abs = Math.abs(offset);

								if (abs > VISIBLE_RANGE)
									return (
										<div
											key={item.cat}
											aria-hidden
											className="hidden"
										/>
									);

								const isActive = offset === 0;
								const sign = Math.sign(offset);

								const baseTranslateX = offset * 48;
								const translateX = baseTranslateX + dragShift * (1 / (abs + 1));
								const translateZ = isActive ? 0 : -200 - (abs - 1) * 130;
								const translateY = isActive ? 0 : abs * 6;
								const rotateY =
									-offset * 24 - drag * 0.06 * (isActive ? 1 : 0.4);
								const rotateX = isActive ? 0 : abs * 1.5;
								const opacity =
									isActive ? 1
									: abs === 1 ? 0.55
									: abs === 2 ? 0.25
									: 0.1;
								const blur =
									isActive ? 0
									: abs === 1 ? 2
									: abs === 2 ? 5
									: 8;
								const zIndex = 20 - abs;
								const scale = isActive ? 1 : 1 - abs * 0.06;

								return (
									<div
										key={item.cat}
										role={isActive ? undefined : "button"}
										tabIndex={isActive ? -1 : 0}
										aria-label={isActive ? undefined : `Show ${item.cat}`}
										onClick={() => {
											if (didDragRef.current) return;
											if (!isActive) goTo(i);
										}}
										onKeyDown={(e) => {
											if (isActive) return;
											if (e.key === "Enter" || e.key === " ") {
												e.preventDefault();
												goTo(i);
											}
										}}
										className="absolute left-1/2 top-1/2 h-[min(95%,32rem)] w-[min(92%,42rem)] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-3xl"
										style={{
											transform: `translate(-50%, -50%) translateX(${translateX}%) translateY(${translateY}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
											opacity,
											filter: `blur(${blur}px)`,
											zIndex,
											pointerEvents: "auto",
											cursor: isActive ? "grab" : "pointer",
											transformStyle: "preserve-3d",
											transitionProperty: "transform, opacity, filter",
											transitionTimingFunction: SPRING,
											transitionDuration:
												dragStateRef.current.dragging ? "120ms"
												: isActive ? "900ms"
												: "850ms",
											transitionDelay: isActive ? "0ms" : `${abs * 30}ms`,
										}}>
										<IndustryCard
											item={item}
											active={isActive}
											parallax={isActive ? drag * 0.05 : sign * 6}
										/>

										{isActive && (
											<div
												aria-hidden
												className="pointer-events-none absolute -bottom-20 left-1/2 h-32 w-[80%] -translate-x-1/2 rounded-[50%] opacity-50 blur-2xl"
												style={{
													background: `radial-gradient(ellipse, ${PRIMARY}55 0%, transparent 70%)`,
													transform: "translate(-50%, 0) rotateX(70deg)",
													transformStyle: "preserve-3d",
												}}
											/>
										)}
									</div>
								);
							})}
						</div>
					</div>

					<button
						type="button"
						aria-label="Previous industry"
						onClick={prev}
						className="industries-nav-btn absolute left-2 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/85 text-slate-600 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-slate-300 hover:text-slate-900 md:left-6 md:h-14 md:w-14"
						style={{ boxShadow: `0 12px 30px -12px ${PRIMARY}55` }}>
						<svg
							viewBox="0 0 40 40"
							className="h-5 w-5"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<polyline points="23.5 12.5 14.5 20 23.5 27.5" />
						</svg>
					</button>
					<button
						type="button"
						aria-label="Next industry"
						onClick={next}
						className="industries-nav-btn absolute right-2 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/85 text-slate-600 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-slate-300 hover:text-slate-900 md:right-6 md:h-14 md:w-14"
						style={{ boxShadow: `0 12px 30px -12px ${SECONDARY}55` }}>
						<svg
							viewBox="0 0 40 40"
							className="h-5 w-5"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<polyline points="16.5 12.5 25.5 20 16.5 27.5" />
						</svg>
					</button>
				</div>

				<div className="mt-4 flex flex-col items-center gap-3 md:mt-6">
					<div className="flex flex-wrap items-center justify-center gap-2">
						{INDUSTRY_LIST.map((item, i) => (
							<button
								key={item.cat}
								type="button"
								onClick={() => goTo(i)}
								aria-label={`Go to ${item.cat}`}
								className="relative h-2 rounded-full transition-all duration-700 ease-out"
								style={{
									width: i === active ? 32 : 8,
									background:
										i === active ?
											`linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`
										:	"rgba(15,23,42,0.16)",
									boxShadow: i === active ? `0 0 12px ${PRIMARY}66` : "none",
								}}
							/>
						))}
					</div>
				</div>
			</div>

			<style>{`
				@keyframes industriesProgress {
					from { width: 0%; }
					to { width: 100%; }
				}
				@keyframes industriesFadeUp {
					0% { opacity: 0; transform: translateY(18px); filter: blur(4px); }
					60% { filter: blur(0); }
					100% { opacity: 1; transform: translateY(0); filter: blur(0); }
				}
				@keyframes industriesFadeIn {
					from { opacity: 0; }
					to { opacity: 1; }
				}
				@keyframes industriesPulse {
					0%, 100% { opacity: 0.18; transform: scale(1); }
					50% { opacity: 0.32; transform: scale(1.05); }
				}
				.industries-fade-up { animation: industriesFadeUp 800ms cubic-bezier(0.22,1,0.36,1) both; }
				.industries-fade-in { animation: industriesFadeIn 500ms ease both; }
				.industries-pulse { animation: industriesPulse 6s ease-in-out infinite; }
				.industries-nav-btn:hover {
					background: #ffffff;
				}
			`}</style>
		</SectionWrapper>
	);
}

function IndustryCard({
	item,
	active,
	parallax,
}: {
	item: Industry;
	active: boolean;
	parallax: number;
}) {
	return (
		<div
			className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100"
			style={{
				boxShadow:
					active ?
						`0 50px 100px -28px rgba(15,23,42,0.38), 0 0 0 1px rgba(255,255,255,0.5) inset`
					:	"0 20px 40px -22px rgba(15,23,42,0.28)",
				transformStyle: "preserve-3d",
			}}>
			<div
				className="absolute inset-0 overflow-hidden"
				style={{ transformStyle: "preserve-3d" }}>
				<img
					src={item.image}
					alt=""
					className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] ease-out will-change-transform"
					style={{
						objectPosition: "center center",
						transformOrigin: "center center",
						// Clamp parallax so the translate never exceeds the scale-up bleed,
						// which is what was making the right edge of the image visibly cut.
						transform: `translate3d(${Math.max(Math.min(parallax, 8), -8)}px, 0, 0) scale(${active ? 1.05 : 1.02})`,
					}}
				/>
			</div>

			<div
				aria-hidden
				className="absolute inset-0"
				style={{
					background:
						"linear-gradient(180deg, rgba(5,6,10,0.2) 0%, rgba(5,6,10,0.55) 45%, rgba(5,6,10,0.96) 100%)",
				}}
			/>

			<div
				aria-hidden
				className="absolute inset-0 opacity-30 mix-blend-screen"
				style={{
					background: `radial-gradient(80% 60% at 50% 100%, ${PRIMARY}33 0%, transparent 60%)`,
				}}
			/>

			<div
				aria-hidden
				className="absolute inset-x-0 top-0 h-px"
				style={{
					background: `linear-gradient(90deg, transparent, ${PRIMARY}99, transparent)`,
				}}
			/>
			<div
				aria-hidden
				className="absolute inset-x-0 bottom-0 h-px"
				style={{
					background: `linear-gradient(90deg, transparent, ${SECONDARY}99, transparent)`,
				}}
			/>

			<div
				aria-hidden
				className="pointer-events-none absolute -right-6 -top-2 select-none font-display text-[8rem] font-bold leading-none opacity-[0.04]"
				style={{ transform: "translateZ(20px)" }}>
				{item.cat.slice(0, 2).toUpperCase()}
			</div>

			<div
				className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8"
				style={{ transform: "translateZ(60px)" }}>
				<div
					key={item.cat}
					className={active ? "industries-fade-up" : "opacity-90"}>
					{/* <div className="mb-5 flex items-center gap-3">
						<span
							className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-700"
							style={{
								background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
								boxShadow: `0 12px 30px -8px ${PRIMARY}99`,
								transform: active ? "translateZ(40px)" : "none",
							}}>
							<ICon className="h-6 w-6" />
						</span>
						<span
							className="rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] backdrop-blur-md"
							style={{
								color: "#ffffff",
								background: "rgba(0,0,0,0.55)",
								borderColor: `${PRIMARY}88`,
								textShadow: `0 0 14px ${PRIMARY}, 0 1px 2px rgba(0,0,0,0.7)`,
							}}>
							{item.title}
						</span>
					</div> */}
					<h3 className="font-display text-xl font-semibold leading-tight text-white md:text-2xl">
						{item.cat}
					</h3>
					<p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/70 md:mt-3 md:text-sm">
						{item.desc}
					</p>
				</div>
			</div>
		</div>
	);
}
