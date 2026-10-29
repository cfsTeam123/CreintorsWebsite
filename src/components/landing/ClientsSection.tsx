/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import { PRIMARY, SECONDARY } from "../../lib/theme";
import noImage from "../../assets/no.png";

// Eagerly bundle every client logo across the three division folders.
// Vite resolves these to hashed URLs at build time, keyed by source path.
const LOGO_MODULES = import.meta.glob(
	"../../assets/clients/**/*.{png,jpg,jpeg,svg,webp}",
	{ eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const LOGO_BY_PATH: Record<string, string> = Object.fromEntries(
	Object.entries(LOGO_MODULES).map(([k, v]) => {
		// Convert "../../assets/clients/Teknosol/1.png" → "src/assets/clients/Teknosol/1.png"
		const normalised = k.replace(/^\.\.\/\.\.\//, "src/");
		return [normalised, v];
	}),
);

function resolveLogo(path: string): string {
	return LOGO_BY_PATH[path] ?? noImage;
}

type Group = {
	division: "Creintors" | "C-Automate" | "Crienviro";
	tagline: string;
	accent: string;
	accentSoft: string;
	clients: string[];
};

const GROUPS: Group[] = [
	{
		division: "Creintors",
		tagline: "Test rigs, SPMs and precision manufacturing partners.",
		accent: "#1ac8ff",
		accentSoft: "#1ac8ff33",
		clients: [
			"src/assets/clients/Teknosol/1.png",
			"src/assets/clients/Teknosol/2.png",
			"src/assets/clients/Teknosol/3.png",
			"src/assets/clients/Teknosol/4.png",
			"src/assets/clients/Teknosol/5.png",
			"src/assets/clients/Teknosol/6.png",
			"src/assets/clients/Teknosol/7.png",
			"src/assets/clients/Teknosol/8.png",
			"src/assets/clients/Teknosol/9.png",
			"src/assets/clients/Teknosol/10.png",
			"src/assets/clients/Teknosol/11.png",
			"src/assets/clients/Teknosol/12.png",
			"src/assets/clients/Teknosol/13.png",
			"src/assets/clients/Teknosol/14.png",
		],
	},
	{
		division: "C-Automate",
		tagline: "Automation, ASRS, AGV and digital integration partners.",
		accent: "#000080",
		accentSoft: "#00008033",
		clients: [
			"src/assets/clients/Cautomate/1.png",
			"src/assets/clients/Cautomate/2.png",
			"src/assets/clients/Cautomate/3.jpg",
			"src/assets/clients/Cautomate/4.jpg",
			"src/assets/clients/Cautomate/5.jpg",
			"src/assets/clients/Cautomate/6.png",
			"src/assets/clients/Cautomate/7.png",
			"src/assets/clients/Cautomate/8.png",
			"src/assets/clients/Cautomate/9.png",
			"src/assets/clients/Cautomate/10.jpg",
			"src/assets/clients/Cautomate/11.png",
			"src/assets/clients/Cautomate/12.png",
			"src/assets/clients/Cautomate/13.png",
			"src/assets/clients/Cautomate/14.png",
			"src/assets/clients/Cautomate/15.png",
			"src/assets/clients/Cautomate/16.png",
			"src/assets/clients/Cautomate/17.png",
			"src/assets/clients/Cautomate/18.png",
			"src/assets/clients/Cautomate/19.jpg",
			"src/assets/clients/Cautomate/20.png",
			"src/assets/clients/Cautomate/21.png",
			"src/assets/clients/Cautomate/22.jpg",
		],
	},
	{
		division: "Crienviro",
		tagline: "Water treatment and environmental engineering partners.",
		accent: "#138708",
		accentSoft: "#13870833",
		clients: [
			"src/assets/clients/Crienviro/1.png",
			"src/assets/clients/Crienviro/2.png",
			"src/assets/clients/Crienviro/3.png",
			"src/assets/clients/Crienviro/4.png",
			"src/assets/clients/Crienviro/5.png",
			"src/assets/clients/Crienviro/6.png",
			"src/assets/clients/Crienviro/7.png",
			"src/assets/clients/Crienviro/8.png",
		],
	},
];

export default function ClientsSection() {
	return (
		<SectionWrapper className="relative py-24 md:py-28">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 overflow-hidden">
				<div
					className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[140px] opacity-25 clients-pulse"
					style={{
						background: `radial-gradient(circle, ${PRIMARY}55, transparent 70%)`,
					}}
				/>
				<div
					className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full blur-[120px] opacity-20 clients-pulse"
					style={{
						background: `radial-gradient(circle, ${SECONDARY}55, transparent 70%)`,
						animationDelay: "2.4s",
					}}
				/>
			</div>

			<div className="container-x relative">
				<div className="mb-14 max-w-3xl">
					<div className="eyebrow reveal">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						Our Clients
					</div>
					<h2 className="section-title reveal">
						Engineering teams who{" "}
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							trust us.
						</span>
					</h2>
					<p className="reveal mt-6 text-white/65">
						Trusted across our three companies testing, automation and
						environmental by leaders who demand precision and reliability.
					</p>
				</div>

				<div className="flex flex-col gap-6">
					{GROUPS.map((g, i) => (
						<DivisionGroup
							key={g.division}
							group={g}
							index={i}
						/>
					))}
				</div>
			</div>

			<style>{`
				@keyframes clientsPulse {
					0%, 100% { opacity: 0.18; transform: scale(1); }
					50% { opacity: 0.32; transform: scale(1.06); }
				}
				.clients-pulse { animation: clientsPulse 6.5s ease-in-out infinite; }

				@keyframes clientsBorderPan {
					0% { background-position: 0% 0%; }
					100% { background-position: 200% 0%; }
				}
			`}</style>
		</SectionWrapper>
	);
}

function DivisionGroup({ group, index }: { group: Group; index: number }) {
	return (
		<div
			className="reveal relative"
			style={{ transitionDelay: `${index * 100}ms` }}>
			<div
				className="relative overflow-hidden rounded-3xl p-[1.5px]"
				style={{
					background: `linear-gradient(135deg, ${group.accent}99, ${group.accent}22, ${group.accent}99)`,
					backgroundSize: "200% 100%",
					animation: "clientsBorderPan 10s linear infinite",
				}}>
				<div
					className="relative h-full overflow-hidden rounded-[calc(1.5rem-1.5px)] p-6 md:p-8"
					style={{
						background:
							"linear-gradient(180deg, rgba(8,10,16,0.92), rgba(8,10,16,0.96))",
					}}>
					<div
						aria-hidden
						className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl opacity-50"
						style={{ background: group.accent + "55" }}
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full blur-3xl opacity-30"
						style={{ background: group.accent + "44" }}
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 opacity-[0.05]"
						style={{
							backgroundImage:
								"linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
							backgroundSize: "28px 28px",
							maskImage:
								"radial-gradient(ellipse at top, black 30%, transparent 80%)",
						}}
					/>

					<div className="relative grid items-center gap-6 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-8">
						<div className="relative">
							<div className="mb-3 flex items-center justify-between">
								<div className="flex items-center gap-3">
									<span
										className="h-2 w-2 rounded-full"
										style={{
											background: group.accent,
											boxShadow: `0 0 12px ${group.accent}`,
										}}
									/>
									<span
										className="font-display text-xl font-semibold"
										style={{ color: group.accent }}>
										{group.division}
									</span>
								</div>
							</div>

							<p className="text-sm leading-relaxed text-white/65">
								{group.tagline}
							</p>

							<div
								className="mt-4 h-px w-16"
								style={{
									background: `linear-gradient(90deg, ${group.accent}, transparent)`,
								}}
							/>

							<span className="mt-3 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 md:inline-block">
								Company
							</span>
						</div>

						<div
							className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
							style={{ perspective: "1200px" }}>
							{group.clients.map((c, ci) => (
								<ClientLogo
									key={c}
									name={c}
									accent={group.accent}
									index={ci}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function ClientLogo({
	name,
	accent,
	index,
}: {
	name: string;
	accent: string;
	index: number;
}) {
	const cardRef = useRef<HTMLDivElement | null>(null);
	const innerRef = useRef<HTMLDivElement | null>(null);
	const rafRef = useRef<number | null>(null);

	const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
		const card = cardRef.current;
		const inner = innerRef.current;
		if (!card || !inner) return;
		const rect = card.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width;
		const py = (e.clientY - rect.top) / rect.height;
		const rx = (0.5 - py) * 14;
		const ry = (px - 0.5) * 16;
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		rafRef.current = requestAnimationFrame(() => {
			inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
			card.style.setProperty("--mx", `${px * 100}%`);
			card.style.setProperty("--my", `${py * 100}%`);
		});
	};

	const handleLeave = () => {
		const card = cardRef.current;
		const inner = innerRef.current;
		if (!card || !inner) return;
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		inner.style.transform = "rotateX(0deg) rotateY(0deg)";
		card.style.setProperty("--mx", "50%");
		card.style.setProperty("--my", "50%");
	};

	return (
		<div
			ref={cardRef}
			onPointerMove={handleMove}
			onPointerLeave={handleLeave}
			className="group relative h-28"
			style={{
				transformStyle: "preserve-3d",
				transitionDelay: `${index * 60}ms`,
				// @ts-expect-error custom CSS vars
				"--mx": "50%",
				"--my": "50%",
			}}>
			<div
				aria-hidden
				className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-80"
				style={{
					background: `radial-gradient(closest-side, ${accent}99, transparent 70%)`,
				}}
			/>

			<div
				ref={innerRef}
				className="relative h-full overflow-hidden rounded-2xl border bg-[#F1F7FB] transition-[transform,border-color,box-shadow] duration-500 ease-out will-change-transform"
				style={{
					transformStyle: "preserve-3d",
					borderColor: `${accent}33`,
					boxShadow: `0 6px 18px -10px ${accent}55`,
				}}
				onMouseEnter={(e) => {
					(e.currentTarget as HTMLDivElement).style.borderColor = `${accent}`;
					(e.currentTarget as HTMLDivElement).style.boxShadow =
						`0 22px 60px -10px ${accent}aa, 0 0 0 1px ${accent}cc inset, 0 0 30px ${accent}55`;
				}}
				onMouseLeave={(e) => {
					(e.currentTarget as HTMLDivElement).style.borderColor = `${accent}33`;
					(e.currentTarget as HTMLDivElement).style.boxShadow =
						`0 6px 18px -10px ${accent}55`;
				}}>
				<img
					src={resolveLogo(name)}
					alt=""
					className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-[1200ms] ease-out group-hover:scale-110"
				/>

				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-20 opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `radial-gradient(220px at var(--mx) var(--my), ${accent}aa, transparent 60%)`,
					}}
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-90"
					style={{
						background: `radial-gradient(320px at var(--mx) var(--my), ${accent}55, transparent 55%)`,
					}}
				/>

				<div
					aria-hidden
					className="absolute inset-x-0 top-0 h-[2px] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
						boxShadow: `0 0 12px ${accent}`,
					}}
				/>
				<div
					aria-hidden
					className="absolute inset-x-0 bottom-0 h-[2px] opacity-40 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
						boxShadow: `0 0 12px ${accent}`,
					}}
				/>
			</div>
		</div>
	);
}
