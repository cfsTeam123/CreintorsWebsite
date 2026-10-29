/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Fragment, type CSSProperties } from "react";
import { motion } from "motion/react";
import { useReveal } from "./Creintors/useReveal";
import { Icon } from "../lib/icons";

const PURPLE = "#46367f";
/** Copy colour on the white card layout. */
const CARD_INK = "#737372";
const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

export type VisionMissionContent = {
	eyebrow: string;
	/** The line under the heading. The group's page has none. */
	subcopy?: string;
	vision: string;
	mission: string;
};

type Props = {
	content: VisionMissionContent;
	/** Division accent — the vision wedge and the eyebrow rule. */
	primary: string;
	secondary: string;
	/** The light end of the vision wedge's gradient — a bright relative of `primary`. */
	tint: string;
	/** The pale tint the heading fades into. Lighter than `tint`. */
	headingTint: string;
	/**
	 * Swaps the interlocking wedges for one white card: two centred columns,
	 * each running art → title → copy. The art wants a transparent ground.
	 * Every page that uses this section passes it, so the wedges currently
	 * render nowhere.
	 */
	card?: { visionArt: string; missionArt: string };
};

/**
 * The Vision & Mission wedges, shared by all three division pages and the
 * group's /about/vision-mission page.
 *
 * This is the Teknosol panel verbatim, themed: `py-12 md:py-14`, an `mb-8`
 * header, and the two interlocking wedges at `lg:h-[24rem] xl:h-[26rem]`.
 * Cautomate and Crienviro had each grown a taller copy — `md:h-[38rem]`, an
 * `mb-14` header, and the wedge layout kicking in a breakpoint earlier — which
 * made the same section read as a different size on each page.
 */
export default function DivisionVisionMission({
	content,
	primary,
	secondary,
	tint,
	headingTint,
	card,
}: Props) {
	const ref = useReveal<HTMLDivElement>();

	const visionGradient = `linear-gradient(120deg, ${primary} 0%, ${tint} 100%)`;
	const missionGradient = `linear-gradient(135deg, ${PURPLE} 0%, ${secondary} 100%)`;

	return (
		<section className="relative isolate overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-24 -z-10 h-[26rem] w-[26rem] rounded-full blur-[160px]"
				style={{ background: `${primary}33` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-32 bottom-24 -z-10 h-[24rem] w-[24rem] rounded-full blur-[140px]"
				style={{ background: `${secondary}55` }}
			/>

			<div
				ref={ref}
				className="container-x relative">
				<div className="mb-8">
					<div className="tk-fade eyebrow text-white">
						<span
							className="h-px w-8"
							style={{ background: primary }}
						/>{" "}
						{content.eyebrow}
					</div>
					<h2 className="tk-fade section-title">
						<span className="text-white">What drives </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(90deg, #ffffff 0%, ${headingTint} 100%)`,
							}}>
							every system we build.
						</span>
					</h2>
					{content.subcopy && (
						<p className="tk-fade mt-4 max-w-4xl text-white">
							{content.subcopy}
						</p>
					)}
				</div>

				{card ? (
					<VisionMissionCard
						content={content}
						accent={primary}
						{...card}
					/>
				) : (
					<div
						className="relative mx-auto flex w-full flex-col gap-6 lg:block lg:h-[27rem] xl:h-[29rem]"
						style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.45))" }}>
						{/* Vision (slides down from top — wider left wedge) */}
						<motion.article
							initial={{ y: -120, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 1.2, ease: SMOOTH_EASE }}
							className="relative w-full overflow-hidden rounded-3xl text-white lg:absolute lg:inset-0 lg:z-20 lg:rounded-[28px_0_0_28px] lg:[clip-path:polygon(0_0,60%_0,30%_100%,0_100%)]"
							style={{ background: visionGradient }}>
							<span
								aria-hidden
								className="pointer-events-none absolute inset-0"
								style={{
									background: `linear-gradient(135deg, ${primary}99 0%, ${tint}8c 100%)`,
								}}
							/>
							{/* Grid texture */}
							<span
								aria-hidden
								className="pointer-events-none absolute inset-0 opacity-40"
								style={{
									backgroundImage:
										"linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
									backgroundSize: "36px 36px",
									maskImage:
										"radial-gradient(ellipse at top left, black 30%, transparent 80%)",
									WebkitMaskImage:
										"radial-gradient(ellipse at top left, black 30%, transparent 80%)",
								}}
							/>
							{/* Soft inner glow */}
							<span
								aria-hidden
								className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl"
								style={{ background: `${primary}aa` }}
							/>

							{/*
							 * The open half of the wedge, at the size it deserves. Position
							 * and size are held clear of both the copy and the diagonal at
							 * each breakpoint, so the mark is never cut by the clip path.
							 */}
							<motion.span
								initial={{ scale: 0.6, opacity: 0, rotate: 12 }}
								whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 1, ease: SMOOTH_EASE, delay: 0.5 }}
								className="pointer-events-none absolute hidden text-white/25 lg:left-[36%] lg:top-[6%] lg:block xl:left-[32%] xl:top-[5%]"
								aria-hidden>
								<span
									className="absolute -inset-6 -z-10 rounded-full blur-2xl"
									style={{ background: "rgba(255,255,255,0.10)" }}
								/>
								<Icon.Eye className="h-28 w-28 xl:h-40 xl:w-40" />
							</motion.span>

							{/* Content */}
							<motion.div
								initial={{ y: -30, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 1, ease: SMOOTH_EASE, delay: 0.4 }}
								className="relative z-10 flex flex-col px-6 py-10 lg:absolute lg:left-10 lg:top-12 lg:block lg:p-0 xl:left-14">
								<Icon.Eye
									className="mb-3 h-12 w-12 shrink-0 text-white lg:hidden"
									aria-hidden
								/>
								<h3 className="whitespace-nowrap font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight lg:text-[2.5rem] xl:text-5xl">
									Our Vision
								</h3>
								<p className="mt-5 max-w-[32rem] text-base leading-[1.6] text-white/90 lg:max-w-[18rem] xl:max-w-[21rem] xl:text-lg">
									{content.vision}
								</p>
							</motion.div>
						</motion.article>

						{/* Mission (slides up from bottom — narrower right wedge) */}
						<motion.article
							initial={{ y: 120, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 1.2, ease: SMOOTH_EASE, delay: 0.15 }}
							className="relative w-full overflow-hidden rounded-3xl lg:absolute lg:inset-0 lg:z-10 lg:rounded-[0_28px_28px_0] lg:[clip-path:polygon(62%_0,100%_0,100%_100%,32%_100%)]"
							style={{ background: missionGradient }}>
							<span
								aria-hidden
								className="pointer-events-none absolute inset-0"
								style={{
									background: `linear-gradient(135deg, ${PURPLE}99 0%, ${secondary}80 100%)`,
								}}
							/>
							{/* Grid texture */}
							<span
								aria-hidden
								className="pointer-events-none absolute inset-0 opacity-40"
								style={{
									backgroundImage:
										"linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
									backgroundSize: "36px 36px",
									maskImage:
										"radial-gradient(ellipse at bottom right, black 30%, transparent 80%)",
									WebkitMaskImage:
										"radial-gradient(ellipse at bottom right, black 30%, transparent 80%)",
								}}
							/>
							{/* Soft inner glow */}
							<span
								aria-hidden
								className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
								style={{ background: `${secondary}99` }}
							/>

							{/* Same idea on the mission side, where the open space sits low-left. */}
							<motion.span
								initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
								whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 1, ease: SMOOTH_EASE, delay: 0.6 }}
								className="pointer-events-none absolute hidden text-white/25 lg:left-[46%] lg:top-[58%] lg:block xl:left-[47%] xl:top-[50%]"
								aria-hidden>
								<span
									className="absolute -inset-6 -z-10 rounded-full blur-2xl"
									style={{ background: "rgba(255,255,255,0.10)" }}
								/>
								<Icon.Target className="h-32 w-32 xl:h-44 xl:w-44" />
							</motion.span>

							{/* Content */}
							<motion.div
								initial={{ y: 30, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 1, ease: SMOOTH_EASE, delay: 0.55 }}
								className="relative z-10 flex flex-col px-6 py-10 text-white lg:absolute lg:bottom-12 lg:right-10 lg:block lg:p-0 xl:right-12">
								<Icon.Target
									className="mb-3 h-12 w-12 shrink-0 text-white lg:hidden"
									aria-hidden
								/>
								<h3 className="whitespace-nowrap font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight lg:text-[2.5rem] xl:text-5xl">
									Our Mission
								</h3>
								<p className="mt-5 max-w-[32rem] text-base leading-[1.6] text-white/90 lg:max-w-[21rem] xl:max-w-[25rem] xl:text-lg">
									{content.mission}
								</p>
							</motion.div>
						</motion.article>
					</div>
				)}
			</div>
		</section>
	);
}

/**
 * The card layout: one white rectangle, vision and mission side by side from
 * `md`, stacked below it, with a rule in the division's colour between them.
 * No wedges, no diagonal, no watermark icons.
 */
function VisionMissionCard({
	content,
	accent,
	visionArt,
	missionArt,
}: {
	content: VisionMissionContent;
	accent: string;
	visionArt: string;
	missionArt: string;
}) {
	const columns = [
		{ title: "Our Vision", body: content.vision, art: visionArt },
		{ title: "Our Mission", body: content.mission, art: missionArt },
	];

	return (
		<div
			className="grid gap-8 rounded-[28px] bg-white px-6 py-12 md:grid-cols-[1fr_auto_1fr] md:gap-8 md:px-10 lg:gap-10 lg:px-14 lg:py-14"
			style={{ boxShadow: "0 30px 60px rgba(0,0,0,0.45)" }}>
			{columns.map((col, i) => (
				<Fragment key={col.title}>
					{i > 0 && <CardDivider accent={accent} />}
					<motion.article
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 1, ease: SMOOTH_EASE, delay: i * 0.15 }}
						className="flex flex-col items-center text-center"
						style={{ color: CARD_INK }}>
						{/*
						 * Both clouds are ~500px wide, so at one width they draw at one
						 * scale. Side by side, the box is the taller (vision) file's
						 * shape and the art sits on its floor, so the titles stay level.
						 */}
						<div className="flex w-full max-w-[22rem] items-end md:aspect-[501/201]">
							<img
								src={col.art}
								alt=""
								aria-hidden
								loading="lazy"
								className="h-auto w-full"
							/>
						</div>
						<h3 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight lg:text-[2.5rem] xl:text-5xl">
							{col.title}
						</h3>
						<p className="mt-5 max-w-[30rem] text-base leading-[1.6] xl:text-lg">
							{col.body}
						</p>
					</motion.article>
				</Fragment>
			))}
		</div>
	);
}

/**
 * The rule between vision and mission: a 2px line in the division's colour,
 * fading out at both ends. It stands upright from `md`, reaching into the
 * card's padding, and lies flat between the stacked columns below `md`. It
 * opens out from the centre.
 */
function CardDivider({ accent }: { accent: string }) {
	return (
		<div
			aria-hidden
			className="relative flex justify-center md:-my-6 lg:-my-8"
			style={{ "--vm-accent": accent } as CSSProperties}>
			<motion.span
				initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
				whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 1.1, ease: SMOOTH_EASE, delay: 0.3 }}
				className="h-[2px] w-2/3 bg-[linear-gradient(90deg,transparent,var(--vm-accent)_20%,var(--vm-accent)_80%,transparent)] md:absolute md:inset-y-0 md:left-1/2 md:-ml-px md:h-auto md:w-[2px] md:bg-[linear-gradient(180deg,transparent,var(--vm-accent)_20%,var(--vm-accent)_80%,transparent)]"
			/>
		</div>
	);
}
