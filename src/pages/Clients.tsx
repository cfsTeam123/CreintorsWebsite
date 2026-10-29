/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import { PRIMARY, SECONDARY } from "../lib/theme";
import { PARTNERS as TEKNOSOL_PARTNERS } from "../lib/content/Creintors";
import { CAU_PARTNERS } from "../lib/content/cautomate";
import { CRI_PARTNERS } from "../lib/content/crienviro";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import IgnoranceLine from "../components/IgnoranceLine";

/**
 * Client entry, shared shape across the three divisions. `logo` is optional —
 * customers whose logo artwork has not been supplied render as type.
 */
type Client = { name: string; logo?: string };

type Group = {
	division: "Creintors" | "C-Automate" | "Crienviro";
	tagline: string;
	accent: string;
	clients: Client[];
};

/*
 * The three lists are the same arrays the division pages render, rather than a
 * second hand-maintained list of file paths. The old copy had drifted: it named
 * only 14 of the 40 Creintors Teknosol logos, and eight of its paths pointed at
 * files that do not exist (.png where the asset is .webp / .jpg), so those
 * eight cards were silently rendering a "no image" placeholder.
 */
const GROUPS: Group[] = [
	{
		division: "Creintors",
		tagline:
			"Test rigs, special-purpose machines and precision manufacturing partners that rely on our valve and pressure-testing systems.",
		accent: "#179ee0",
		clients: TEKNOSOL_PARTNERS,
	},
	{
		division: "C-Automate",
		tagline:
			"Automation, ASRS, AGV and digital integration partners across automotive, manufacturing, food, pharma and logistics.",
		accent: "#46367f",
		clients: CAU_PARTNERS,
	},
	{
		division: "Crienviro",
		tagline:
			"Water and waste-water treatment, environmental engineering and sustainability partners across industry and infrastructure.",
		accent: "#0f80b8",
		clients: CRI_PARTNERS,
	},
];

const TOTAL_CLIENTS = GROUPS.reduce((sum, g) => sum + g.clients.length, 0);

export default function Clients() {
	useSeo({
		...PAGE_SEO.clients,
	});

	return (
		<main className="relative isolate">
			{/* Page header */}
			<SectionWrapper
				stagger={false}
				className="relative pt-36 pb-16 md:pt-44 md:pb-20">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
					<div
						className="absolute -top-32 left-1/3 h-[28rem] w-[28rem] rounded-full blur-[120px] opacity-30"
						style={{
							background: `radial-gradient(circle, ${PRIMARY}40, transparent 70%)`,
						}}
					/>
					<div
						className="absolute -bottom-20 right-0 h-[26rem] w-[26rem] rounded-full blur-[120px] opacity-25"
						style={{
							background: `radial-gradient(circle, ${SECONDARY}33, transparent 70%)`,
						}}
					/>
				</div>

				<div className="container-x">
					<div className="max-w-3xl">
						<div className="eyebrow">
							<span
								className="h-px w-8"
								style={{ background: PRIMARY }}
							/>{" "}
							Our Clients
						</div>
						<h1 className="page-title text-slate-900">
							Engineering teams who{" "}
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								trust us.
							</span>
						</h1>
						<p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
							Across testing, automation and environmental engineering, we
							partner with leaders who demand precision, reliability and
							long-term commitment. Below are{" "}
							<span className="font-semibold text-slate-800">
								{TOTAL_CLIENTS}+ organisations
							</span>{" "}
							we have delivered for, grouped by company.
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							{GROUPS.map((g) => (
								<a
									key={g.division}
									href={`#clients-${g.division.toLowerCase()}`}
									className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900">
									<span
										className="h-1.5 w-1.5 rounded-full"
										style={{
											background: g.accent,
											boxShadow: `0 0 8px ${g.accent}66`,
										}}
									/>
									{g.division}
								</a>
							))}
						</div>
					</div>
				</div>
			</SectionWrapper>
			<IgnoranceLine />

			{/* Division groups */}
			<SectionWrapper className="py-10">
				<div className="container-x flex flex-col gap-10">
					{GROUPS.map((g, i) => (
						<DivisionGroup
							key={g.division}
							group={g}
							index={i}
						/>
					))}
				</div>
			</SectionWrapper>

			{/* CTA */}
			<SectionWrapper className="py-10">
				<div className="container-x">
					<div
						className="reveal relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft-lg md:p-14"
						style={{
							backgroundImage: `linear-gradient(135deg, ${PRIMARY}10 0%, rgba(255,255,255,1) 50%, ${SECONDARY}10 100%)`,
						}}>
						<div
							aria-hidden
							className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl opacity-30"
							style={{ background: `${PRIMARY}40` }}
						/>
						<div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
							<div>
								<div className="eyebrow">
									<span
										className="h-px w-8"
										style={{ background: PRIMARY }}
									/>{" "}
									Become a Partner
								</div>
								<h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
									Join the engineering teams that trust Creintors Group.
								</h2>
								<p className="mt-4 max-w-xl text-slate-600">
									Whether you need a custom test rig, an ASRS rollout, or a
									treatment plant, our cross-company engineers can scope and
									ship it.
								</p>
							</div>
							<div className="flex flex-wrap gap-3 md:justify-end">
								<Link
									to="/contact"
									className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-12px_rgba(23,158,224,0.55)] transition-transform duration-300 hover:scale-[1.04]"
									style={{
										background: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
									}}>
									<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
									<span className="relative">Talk to Engineering</span>
									<span
										aria-hidden
										className="relative transition-transform duration-300 group-hover:translate-x-1">
										→
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</SectionWrapper>
		</main>
	);
}

function DivisionGroup({ group, index }: { group: Group; index: number }) {
	return (
		<section
			id={`clients-${group.division.toLowerCase()}`}
			className="reveal scroll-mt-32"
			style={{ transitionDelay: `${index * 80}ms` }}>
			<div
				className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:p-10"
				style={{
					backgroundImage: `linear-gradient(180deg, ${group.accent}08 0%, rgba(255,255,255,0) 50%)`,
				}}>
				<div
					aria-hidden
					className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl opacity-30"
					style={{ background: `${group.accent}55` }}
				/>

				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 h-px"
					style={{
						background: `linear-gradient(90deg, transparent, ${group.accent}99, transparent)`,
					}}
				/>

				<div className="relative grid items-start gap-6 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-10">
					<div>
						<div className="flex items-center gap-3">
							<span
								className="h-2 w-2 rounded-full"
								style={{
									background: group.accent,
									boxShadow: `0 0 12px ${group.accent}80`,
								}}
							/>
							<h2
								className="font-display text-2xl font-semibold md:text-3xl"
								style={{ color: group.accent }}>
								{group.division}
							</h2>
						</div>

						<p className="mt-4 text-sm leading-relaxed text-slate-600">
							{group.tagline}
						</p>

						<div
							className="mt-5 h-px w-20"
							style={{
								background: `linear-gradient(90deg, ${group.accent}, transparent)`,
							}}
						/>

						<div className="mt-5 flex items-center gap-3">
							<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
								Company
							</span>
							<span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
								{group.clients.length} Clients
							</span>
						</div>
					</div>

					<div
						className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
						style={{ perspective: "1200px" }}>
						{group.clients.map((c, ci) => (
							<ClientLogo
								key={c.name}
								client={c}
								accent={group.accent}
								index={ci}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function ClientLogo({
	client,
	accent,
	index,
}: {
	client: Client;
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
		const rx = (0.5 - py) * 12;
		const ry = (px - 0.5) * 14;
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
				transitionDelay: `${index * 40}ms`,
				// @ts-expect-error custom CSS vars
				"--mx": "50%",
				"--my": "50%",
			}}>
			<div
				aria-hidden
				className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"
				style={{
					background: `radial-gradient(closest-side, ${accent}66, transparent 70%)`,
				}}
			/>

			<div
				ref={innerRef}
				className="relative h-full overflow-hidden rounded-2xl border bg-white transition-[transform,border-color,box-shadow] duration-500 ease-out will-change-transform"
				style={{
					transformStyle: "preserve-3d",
					borderColor: "rgba(15,23,42,0.08)",
					boxShadow: "0 8px 24px -16px rgba(15,23,42,0.18)",
				}}
				onMouseEnter={(e) => {
					(e.currentTarget as HTMLDivElement).style.borderColor = `${accent}88`;
					(e.currentTarget as HTMLDivElement).style.boxShadow =
						`0 18px 50px -16px ${accent}66, 0 0 0 1px ${accent}55 inset`;
				}}
				onMouseLeave={(e) => {
					(e.currentTarget as HTMLDivElement).style.borderColor =
						"rgba(15,23,42,0.08)";
					(e.currentTarget as HTMLDivElement).style.boxShadow =
						"0 8px 24px -16px rgba(15,23,42,0.18)";
				}}>
				{client.logo ?
					<img
						src={client.logo}
						alt={client.name}
						loading="lazy"
						className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-[1200ms] ease-out group-hover:scale-110"
					/>
				:	<span className="absolute inset-0 flex items-center justify-center text-balance px-3 text-center font-display text-base font-bold leading-tight tracking-tight text-slate-800 transition-transform duration-[1200ms] ease-out group-hover:scale-110">
						{client.name}
					</span>
				}

				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `radial-gradient(220px at var(--mx) var(--my), ${accent}26, transparent 60%)`,
					}}
				/>

				<div
					aria-hidden
					className="absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-90"
					style={{
						background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
						boxShadow: `0 0 12px ${accent}80`,
					}}
				/>
			</div>
		</div>
	);
}
