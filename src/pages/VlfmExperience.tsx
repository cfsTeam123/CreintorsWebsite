/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import IgnoranceLine from "../components/IgnoranceLine";
import FeatureHero, { HeroAction } from "../components/explore/FeatureHero";
import ExploreNext from "../components/explore/ExploreNext";
import { PRIMARY, SECONDARY, tint } from "../lib/theme";
import {
	VLFM_JOURNEY,
	VLFM_ORIGIN,
	VLFM_STORIES_URL,
	type VlfmStep,
} from "../lib/content/explore";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import sessionPhoto from "../assets/explore/vlfm-session.webp";
import handshakePhoto from "../assets/explore/vlfm-handshake.webp";
import bowPhoto from "../assets/explore/vlfm-bow.webp";
import jicaPhoto from "../assets/explore/vlfm-jica.webp";
import cohortPhoto from "../assets/explore/cii-cohort.webp";

/**
 * The yellow of the programme's shirts, in every one of these photographs.
 * The page spends it in one place — the journey — so it reads as VLFM's
 * colour rather than decoration.
 */
const VLFM_YELLOW = "#F5C400";
/** Japan's red, for the step JICA gave. */
const JICA_RED = "#E0414F";

const TAG_COLOUR: Record<VlfmStep["with"], string> = {
	VSME: VLFM_YELLOW,
	VLFM: VLFM_YELLOW,
	JICA: JICA_RED,
};

/**
 * Captions say what the frame shows and no more: none of these is dated, so
 * none is tied to a year on the journey.
 */
const PROGRAMME_PHOTOS = [
	{
		src: sessionPhoto,
		alt: "A VLFM cohort in yellow programme shirts, in discussion around a table",
	},
	{
		src: handshakePhoto,
		alt: "A handshake between two VLFM participants in the programme's workshop room",
	},
	{
		src: bowPhoto,
		alt: "A deep bow of respect exchanged in the VLFM workshop room",
	},
	{
		src: jicaPhoto,
		alt: "A certificate presented in front of the flags of India and JICA",
	},
];

function Photo({
	src,
	alt,
	className = "",
}: {
	src: string;
	alt: string;
	className?: string;
}) {
	return (
		<img
			src={src}
			alt={alt}
			width={1200}
			height={900}
			decoding="async"
			className={`block aspect-[4/3] h-auto w-full rounded-2xl object-cover ring-1 ring-white/10 ${className}`}
			style={{ boxShadow: "0 30px 60px -30px rgba(0,0,0,0.85)" }}
		/>
	);
}

/** Four frames from the programme, in two columns set half a step apart. */
function HeroMosaic() {
	const [a, b, c, d] = PROGRAMME_PHOTOS;
	return (
		<div className="grid grid-cols-2 gap-3 sm:gap-4">
			<div className="flex flex-col gap-3 pt-8 sm:gap-4 sm:pt-12">
				<Photo {...a} />
				<Photo
					{...c}
					className="hidden sm:block"
				/>
			</div>
			<div className="flex flex-col gap-3 sm:gap-4">
				<Photo {...b} />
				<Photo
					{...d}
					className="hidden sm:block"
				/>
			</div>
		</div>
	);
}

/** 2005: where the programme came from, set as a statement. */
function OriginSection() {
	return (
		<section className="relative py-10">
			<div className="container-x grid items-start gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-16">
				<Reveal
					from="up"
					as="p"
					aria-hidden
					className="m-0 select-none font-display text-[6rem] font-bold leading-[0.8] tracking-tight text-transparent md:text-[10rem]"
					style={{ WebkitTextStroke: `1.5px ${PRIMARY}` }}>
					{VLFM_ORIGIN.year}
				</Reveal>

				<Reveal stagger={0.08}>
					<Reveal
						from="up"
						className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						Where it began
					</Reveal>
					<Reveal
						from="up"
						as="h2"
						className="m-0 mt-2 max-w-[34ch] font-display text-2xl font-semibold leading-snug tracking-tight text-slate-900 md:text-[2.1rem] md:leading-[1.3]">
						<span className="sr-only">{VLFM_ORIGIN.year}: </span>
						{VLFM_ORIGIN.text}
					</Reveal>
					<Reveal
						from="up"
						as="p"
						className="mt-6 max-w-[60ch] text-base leading-relaxed text-slate-600 md:text-lg">
						CII runs it with JICA, Government of Japan, and for small and
						medium industries it gave rise to Visionary SME (VSME). Both shaped
						the manufacturing ethos at the Creintors group.
					</Reveal>
				</Reveal>
			</div>
		</section>
	);
}

/**
 * The page's one loud moment: our CMD's four steps with the programme, on a
 * dark band lit by the programme's yellow. A real sequence, so it runs as a
 * track — across on a wide screen, down on a phone.
 */
function JourneySection() {
	return (
		<section
			id="journey"
			className="relative isolate scroll-mt-24 overflow-hidden py-10"
			style={{ backgroundColor: "#081222" }}>
			<div
				aria-hidden
				className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-[26rem] w-[26rem] rounded-full blur-[140px]"
				style={{ background: `${tint(SECONDARY, 0.3)}33` }}
			/>

			<div className="container-x">
				<Reveal stagger={0.08}>
					<Reveal
						from="up"
						className="eyebrow !text-white/70">
						<span
							className="h-px w-8"
							style={{ background: VLFM_YELLOW }}
						/>{" "}
						Our CMD's journey
					</Reveal>
					<Reveal
						from="up"
						as="h2"
						className="section-title mt-2 !text-white">
						From participant to{" "}
						<span style={{ color: VLFM_YELLOW }}>demonstrator</span>
					</Reveal>
				</Reveal>

				<Reveal
					as="ol"
					stagger={0.1}
					className="relative m-0 mt-14 grid list-none gap-10 p-0 md:mt-16 lg:grid-cols-4 lg:gap-8">
					{/* The track: down the left on a phone, across on a wide screen. */}
					<span
						aria-hidden
						className="absolute bottom-2 left-[7px] top-2 w-px lg:hidden"
						style={{
							background: `linear-gradient(180deg, ${VLFM_YELLOW}, ${VLFM_YELLOW}33)`,
						}}
					/>
					<span
						aria-hidden
						className="absolute left-0 right-0 top-[7px] hidden h-px lg:block"
						style={{
							background: `linear-gradient(90deg, ${VLFM_YELLOW}, ${VLFM_YELLOW}33)`,
						}}
					/>

					{VLFM_JOURNEY.map((step) => (
						<Reveal
							key={step.year}
							as="li"
							from="up"
							className="relative pl-10 lg:pl-0 lg:pt-12">
							<span
								aria-hidden
								className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full lg:top-0"
								style={{
									background: TAG_COLOUR[step.with],
									boxShadow: `0 0 0 5px #081222, 0 0 22px ${TAG_COLOUR[step.with]}88`,
								}}
							/>
							<div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
								<span className="font-display text-4xl font-bold leading-none tracking-tight text-white md:text-5xl">
									{step.year}
								</span>
								<span
									className="rounded-full border px-2.5 py-0.5 text-xs font-semibold"
									style={{
										borderColor: `${TAG_COLOUR[step.with]}80`,
										color: TAG_COLOUR[step.with],
									}}>
									{step.with}
								</span>
							</div>
							<h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-white">
								{step.title}
							</h3>
							<p className="mt-2 max-w-[36ch] text-base leading-relaxed text-white/70">
								{step.text}
							</p>
						</Reveal>
					))}
				</Reveal>
			</div>
		</section>
	);
}

/** Where the programme goes next: into colleges, and into its own stories. */
function PassingOnSection() {
	return (
		<section className="section-tint relative overflow-hidden py-10">
			<div className="container-x grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
				<Reveal stagger={0.08}>
					<Reveal
						from="up"
						className="eyebrow">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						Passing it on
					</Reveal>
					<Reveal
						from="up"
						as="h2"
						className="section-title mt-2">
						<span className="text-slate-900">From VLFM Classrooms to </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							 building Industry-Institute Ecosystem
						</span>
					</Reveal>
					<Reveal
						from="up"
						as="p"
						className="mt-5 max-w-[58ch] text-base leading-relaxed text-slate-700 md:text-lg">
						The Visionary Learning Community of India (VLCI) grew out of
						Visionary Leaders for Manufacturing to build a talent pipeline from
						engineering colleges. With CII and JICA, Creintors takes the course
						into engineering and diploma colleges, and our CMD is certified at
						VLCI Level 3.
					</Reveal>
					<Reveal
						from="up"
						className="mt-8 flex flex-wrap gap-3">
						<Link
							to="/cii-engagement#vlci"
							className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
							style={{
								background: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							How we teach VLCI
							<ArrowRight
								aria-hidden
								className="h-4 w-4"
							/>
						</Link>
						<Link
							to="/education"
							className="btn-ghost focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
							See the 3i Ecosystem
						</Link>
					</Reveal>
				</Reveal>

				<Reveal
					from="left"
					className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-10"
					style={{ boxShadow: "0 40px 80px -45px rgba(15,23,42,0.45)" }}>
					<span
						aria-hidden
						className="absolute inset-x-0 top-0 h-1.5"
						style={{ background: VLFM_YELLOW }}
					/>
					<h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
						Stories from VLFM
					</h3>
					<p className="mt-3 text-base leading-relaxed text-slate-600">
						Graduates of the programme tell their own stories of it on the VLFM
						website.
					</p>
					<a
						href={VLFM_STORIES_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold transition-[gap] duration-300 hover:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
						style={{ color: "#0b7fb8" }}>
						Read VLFM stories
						<ArrowUpRight
							aria-hidden
							className="h-4 w-4"
						/>
						<span className="sr-only">(opens in a new tab)</span>
					</a>
				</Reveal>
			</div>
		</section>
	);
}

export default function VlfmExperience() {
	useSeo({ ...PAGE_SEO.vlfmExperience });

	return (
		<main className="relative isolate">
			<FeatureHero
				crumb="VLFM Experience"
				titleLead="VLFM"
				titleAccent="Experience"
				tagline="Shaping Leaders for Manufacturing"
				intro="Visionary Leaders for Manufacturing is the programme CII runs with JICA, Government of Japan. Our CMD came to it as a participant and stayed on as a Graduate Demonstrator, and the principles it taught still power Creintors today."
				aside={<HeroMosaic />}>
				<HeroAction
					to="#journey"
					filled>
					Follow the journey
					<ArrowRight
						aria-hidden
						className="h-4 w-4"
					/>
				</HeroAction>
				<HeroAction href={VLFM_STORIES_URL}>
					Read VLFM stories
					<ArrowUpRight
						aria-hidden
						className="h-4 w-4"
					/>
				</HeroAction>
			</FeatureHero>
			<IgnoranceLine />
			<OriginSection />
			<JourneySection />
			<PassingOnSection />
			<ExploreNext
				to="/cii-engagement"
				label="CII Engagement"
				desc="Connecting industry, ideas and policy makers: CII's awards to the group, and the VLCI course we teach with CII and JICA."
				image={cohortPhoto}
			/>
		</main>
	);
}
