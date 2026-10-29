/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Check, GraduationCap, School } from "lucide-react";
import Reveal from "../components/Reveal";
import IgnoranceLine from "../components/IgnoranceLine";
import FeatureHero, { HeroAction } from "../components/explore/FeatureHero";
import ExploreNext from "../components/explore/ExploreNext";
import { PRIMARY, SECONDARY } from "../lib/theme";
import { CII_RECOGNITION, VLCI_POINTS } from "../lib/content/explore";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import cohortPhoto from "../assets/explore/cii-cohort.webp";
import innovationAwardsPhoto from "../assets/explore/cii-innovation-awards.webp";
import startupreneurPhoto from "../assets/explore/cii-startupreneur-awards.webp";
import vlciPhoto from "../assets/explore/vlci-certificate.webp";
import vlfmSessionPhoto from "../assets/explore/vlfm-session.webp";

/** The stage photograph for each CII_RECOGNITION entry, by year. */
const RECOGNITION_PHOTOS: Record<string, { src: string; alt: string }> = {
	"2016": {
		src: innovationAwardsPhoto,
		alt: "Three award recipients holding framed certificates and trophies on a CII Industrial Innovation Awards stage",
	},
	"2018": {
		src: startupreneurPhoto,
		alt: "An award being presented on stage in front of the CII Global Future Business Forum backdrop",
	},
};

type Way = {
	icon: ComponentType<{ className?: string }>;
	title: string;
	body: string;
	link: { to: string; label: string };
};

/** Not a sequence, so not numbered: three sides of one relationship. */
const WAYS: Way[] = [
	{
		icon: Award,
		title: "Recognised by CII",
		body: "CII has named Creintors one of India's most promising start-ups and, two years later, one of its most innovative companies.",
		link: { to: "#recognition", label: "See the awards" },
	},
	{
		icon: GraduationCap,
		title: "Learning through CII",
		body: "Our CMD graduated from VSME and VLFM, CII's flagship programmes with JICA, and has been a Graduate Demonstrator since 2017.",
		link: { to: "/vlfm-experience", label: "VLFM Experience" },
	},
	{
		icon: School,
		title: "Sharing with CII",
		body: "With CII and JICA, we take the VLCI course into engineering and diploma colleges.",
		link: { to: "#vlci", label: "About the course" },
	},
];

function SectionHead({
	eyebrow,
	lead,
	accent,
	className = "",
}: {
	eyebrow: string;
	lead: string;
	accent: string;
	className?: string;
}) {
	return (
		<Reveal
			stagger={0.08}
			className={className}>
			<Reveal
				from="up"
				className="eyebrow">
				<span
					className="h-px w-8"
					style={{ background: PRIMARY }}
				/>{" "}
				{eyebrow}
			</Reveal>
			<Reveal
				from="up"
				as="h2"
				className="section-title mt-2">
				<span className="text-slate-900">{lead} </span>
				<span
					className="bg-clip-text text-transparent"
					style={{
						backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
					}}>
					{accent}
				</span>
			</Reveal>
		</Reveal>
	);
}

/** Three ways the group and CII meet, each pointing to where it is told. */
function WaysSection() {
	return (
		<section className="relative py-10">
			<div className="container-x">
				<SectionHead
					eyebrow="Our engagement"
					lead="Three ways we work"
					accent="with CII"
				/>
				<p className="mt-5 max-w-[62ch] text-base leading-relaxed text-slate-600 md:text-lg">
					The Confederation of Indian Industry brings industry, ideas and policy
					makers to one table. We have come to it as an award winner, as a
					student and as a teacher.
				</p>

				<Reveal
					as="ul"
					stagger={0.08}
					className="m-0 mt-12 grid list-none gap-10 p-0 md:grid-cols-3 md:gap-0 md:divide-x md:divide-slate-200">
					{WAYS.map(({ icon: Icon, title, body, link }) => (
						<Reveal
							key={title}
							as="li"
							from="up"
							className="flex flex-col md:px-8 md:first:pl-0 md:last:pr-0">
							<span
								className="grid h-12 w-12 place-items-center rounded-xl text-white"
								style={{
									background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
									boxShadow: `0 14px 30px -14px ${PRIMARY}99`,
								}}>
								<Icon className="h-5 w-5" />
							</span>
							<h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-slate-900">
								{title}
							</h3>
							<p className="mt-2 text-base leading-relaxed text-slate-600">
								{body}
							</p>
							<Link
								to={link.to}
								className="mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-sm font-semibold transition-[gap] duration-300 hover:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
								style={{ color: "#0b7fb8" }}>
								{link.label}
								<ArrowRight
									aria-hidden
									className="h-4 w-4"
								/>
							</Link>
						</Reveal>
					))}
				</Reveal>
			</div>
		</section>
	);
}

/**
 * The page's one loud moment: each award's year set large in outline beside
 * the photograph of the evening, alternating sides down the page.
 */
function RecognitionSection() {
	return (
		<section
			id="recognition"
			className="section-tint relative scroll-mt-24 overflow-hidden py-10">
			<div className="container-x">
				<SectionHead
					eyebrow="Recognition"
					lead="Recognised by"
					accent="CII"
				/>

				<ol className="m-0 mt-14 list-none space-y-16 p-0 md:mt-16 md:space-y-24">
					{CII_RECOGNITION.map((award, i) => {
						const photo = RECOGNITION_PHOTOS[award.year];
						const flip = i % 2 === 1;
						return (
							<li
								key={award.year}
								className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
								<Reveal
									from={flip ? "left" : "right"}
									as="figure"
									className={`m-0 ${flip ? "lg:order-2" : ""}`}>
									<div
										className="overflow-hidden rounded-3xl border-4 border-white bg-white"
										style={{
											boxShadow: "0 40px 80px -40px rgba(15,23,42,0.5)",
										}}>
										<img
											src={photo.src}
											alt={photo.alt}
											width={565}
											height={342}
											loading="lazy"
											decoding="async"
											className="block aspect-[565/342] h-auto w-full object-cover"
										/>
									</div>
									<figcaption className="mt-3 text-sm text-slate-600">
										{award.caption}
									</figcaption>
								</Reveal>

								<Reveal
									from="up"
									stagger={0.08}
									className={flip ? "lg:order-1" : ""}>
									<Reveal
										from="up"
										as="p"
										aria-hidden
										className="m-0 select-none font-display text-[5.5rem] font-bold leading-[0.85] tracking-tight text-transparent md:text-[8.5rem]"
										style={{ WebkitTextStroke: `1.5px ${PRIMARY}` }}>
										{award.year}
									</Reveal>
									<Reveal
										from="up"
										as="h3"
										className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-slate-900 md:text-3xl">
										<span className="sr-only">{award.year}: </span>
										{award.title}
									</Reveal>
									<Reveal
										from="up"
										as="p"
										className="mt-3 max-w-[48ch] text-base leading-relaxed text-slate-700 md:text-lg">
										{award.body}
									</Reveal>
								</Reveal>
							</li>
						);
					})}
				</ol>
			</div>
		</section>
	);
}

/** VLCI: the course the group teaches with CII and JICA. */
function VlciSection() {
	return (
		<section
			id="vlci"
			className="relative scroll-mt-24 py-10">
			<div className="container-x grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
				<Reveal
					from="right"
					as="figure"
					className="m-0">
					<div
						className="overflow-hidden rounded-3xl"
						style={{ boxShadow: "0 40px 90px -45px rgba(15,23,42,0.55)" }}>
						<img
							src={vlciPhoto}
							alt="Our CMD receiving his framed VLCI certificate from two programme representatives, under the Visionary Learning Community of India banner"
							width={1600}
							height={1060}
							loading="lazy"
							decoding="async"
							className="block aspect-[3/2] h-auto w-full object-cover"
						/>
					</div>
					<figcaption className="mt-3 text-sm text-slate-600">
						Our CMD's VLCI certificate, presented at the VLCI Centre of
						Excellence, KLS Gogte Institute of Technology, Belagavi.
					</figcaption>
				</Reveal>

				<div>
					<SectionHead
						eyebrow="Teaching with CII"
						lead="Taking VLCI into"
						accent="colleges"
					/>
					<p className="mt-5 max-w-[56ch] text-base leading-relaxed text-slate-700 md:text-lg">
						With JICA and CII, Creintors offers the Visionary Learning Community
						of India course to engineering and diploma colleges: an
						industry-oriented flow management course that builds skills by
						applying the learning in industry.
					</p>

					<ul className="m-0 mt-7 list-none space-y-3 p-0">
						{VLCI_POINTS.map((point) => (
							<li
								key={point}
								className="flex items-start gap-3 text-base leading-relaxed text-slate-800">
								<span
									aria-hidden
									className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full"
									style={{ background: `${PRIMARY}1f`, color: "#0b7fb8" }}>
									<Check className="h-3.5 w-3.5" />
								</span>
								{point}
							</li>
						))}
					</ul>

					<Link
						to="/education"
						className="btn-primary mt-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
						style={{
							background: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
						}}>
						See the 3i Ecosystem
						<ArrowRight
							aria-hidden
							className="h-4 w-4"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default function CiiEngagement() {
	useSeo({ ...PAGE_SEO.ciiEngagement });

	return (
		<main className="relative isolate">
			<FeatureHero
				crumb="CII Engagement"
				titleLead="CII"
				titleAccent="Engagement"
				tagline="Connecting industry, ideas and policy makers"
				intro="The Confederation of Indian Industry has recognised Creintors as a start-up and as an innovator. Our CMD learned through its programmes with JICA, Government of Japan, and together they back the VLCI course we take into engineering and diploma colleges."
				image={cohortPhoto}
				imageCaption="Participants of the CII and JICA programme.">
				<HeroAction
					to="#recognition"
					filled>
					See the awards
					<ArrowRight
						aria-hidden
						className="h-4 w-4"
					/>
				</HeroAction>
				<HeroAction to="/vlfm-experience">VLFM Experience</HeroAction>
			</FeatureHero>
			<IgnoranceLine />
			<WaysSection />
			<RecognitionSection />
			<VlciSection />
			<ExploreNext
				to="/vlfm-experience"
				label="VLFM Experience"
				desc="Shaping Leaders for Manufacturing: our CMD's years with the programme, from participant to Graduate Demonstrator."
				image={vlfmSessionPhoto}
			/>
		</main>
	);
}
