/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useState, type ComponentType } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Bus, Presentation } from "lucide-react";
import SectionWrapper from "../SectionWrapper";
import FilterTabs from "../FilterTabs";
import {
	EDU_MOVEMENTS,
	EDU_OFFERINGS,
	type EduOffering,
	type EduOfferingId,
} from "../../lib/content/education";

import imgInternships from "../../assets/3iEco/offerings/internships.webp";
import imgResearch from "../../assets/3iEco/offerings/research.webp";
import imgCourses from "../../assets/3iEco/offerings/courses.webp";
import imgMasterclass from "../../assets/3iEco/offerings/masterclass.webp";
import imgExchange from "../../assets/3iEco/offerings/exchange.webp";
import imgVlci from "../../assets/3iEco/offerings/vlci.webp";
import wheels from "../../assets/3iEco/offerings/VAN.png";

const BRAND = "#1ac8ff";
const VIOLET = "#46367f";
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Each tab's photograph — our own, from the gallery, cut down to 1200px WebP.
 * The two tabs with nothing on record yet have none, and show an icon on the
 * ecosystem's colours instead of a borrowed photo.
 */
const MEDIA: Record<
	EduOfferingId,
	| { src: string; alt: string }
	| { icon: ComponentType<{ className?: string }> }
> = {
	internships: {
		src: imgInternships,
		alt: "A cohort of students with their Creintors mentor",
	},
	research: {
		src: imgResearch,
		alt: "Students and Creintors engineers around a table, reviewing project work",
	},
	courses: {
		src: imgCourses,
		alt: "Diploma programme sessions and classes run with KLS Gogte Institute of Technology",
	},
	masterclass: {
		src: imgMasterclass,
		alt: "An engineer taking a session for a room of participants",
	},
	conferences: { icon: Presentation },
	exchange: {
		src: imgExchange,
		alt: "Creintors and an institute exchanging signed agreements",
	},
	movements: {
		src: imgVlci,
		alt: "Neelesh Chougule holding his VLCI certificate of participation, between two programme leaders",
	},
	wheels: {
		src: wheels,
		alt: "Neelesh Chougule holding his VLCI certificate of participation, between two programme leaders",
	},
	//wheels: { icon: Bus },
};

/**
 * The 3i Ecosystem's offerings behind filter tabs, as the 19 Sep change list
 * asks — the same white-patch chips as the C-Automate solutions. One panel
 * shows at a time, so eight offerings sit in the height of one.
 */
export default function OfferingsSection() {
	const [active, setActive] = useState<EduOfferingId>(EDU_OFFERINGS[0].id);
	const offering =
		EDU_OFFERINGS.find((o) => o.id === active) ?? EDU_OFFERINGS[0];

	return (
		<SectionWrapper
			id="programs"
			className="section-tint relative py-10">
			<div className="container-x relative">
				<div className="mb-10 max-w-3xl md:mb-12">
					<div className="eyebrow reveal">
						<span
							className="h-px w-8"
							style={{ background: BRAND }}
						/>{" "}
						Our Programs
					</div>
					<h2 className="section-title reveal">
						<span className="text-slate-900">The 3i Ecosystem, </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${BRAND}, ${VIOLET})`,
							}}>
							in practice.
						</span>
					</h2>
					<p className="reveal mt-6 text-slate-600">
						Built for students who want real, and for institutes that want
						industry inside the campus.
					</p>
				</div>

				<FilterTabs
					tabs={EDU_OFFERINGS.map((o) => ({ id: o.id, label: o.label }))}
					active={active}
					onChange={setActive}
					label="3i Ecosystem programs"
					layoutId="edu-offering-active"
					primary={BRAND}
					secondary={VIOLET}
					surface="light"
					className="mb-8 md:mb-10"
				/>

				<AnimatePresence
					mode="wait"
					initial={false}>
					<OfferingPanel
						key={offering.id}
						offering={offering}
					/>
				</AnimatePresence>
			</div>
		</SectionWrapper>
	);
}

function OfferingPanel({ offering }: { offering: EduOffering }) {
	const reduceMotion = useReducedMotion();
	const media = MEDIA[offering.id];

	return (
		<motion.article
			aria-label={offering.label}
			initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
			transition={{ duration: reduceMotion ? 0 : 0.35, ease: EASE }}
			/* A floor on the height, so switching between a short panel and a long
			   one does not pull the page up and down under the tabs. */
			className="group relative grid overflow-hidden rounded-3xl border bg-white lg:min-h-[30rem] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
			style={{
				borderColor: `${BRAND}33`,
				boxShadow: `0 30px 80px -36px ${BRAND}66, 0 0 0 1px rgba(255,255,255,0.85) inset`,
			}}>
			<div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
				{"src" in media ?
					<img
						src={media.src}
						alt={media.alt}
						loading="lazy"
						decoding="async"
						className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
					/>
				:	<div
						aria-hidden
						className="absolute inset-0 grid place-items-center"
						style={{
							background: `radial-gradient(90% 90% at 20% 10%, ${BRAND}55, transparent 60%), linear-gradient(135deg, ${BRAND}, ${VIOLET})`,
						}}>
						<div
							className="absolute inset-0 opacity-40"
							style={{
								backgroundImage:
									"linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
								backgroundSize: "28px 28px",
							}}
						/>
						<media.icon className="relative h-20 w-20 text-white/90" />
					</div>
				}
				<span
					aria-hidden
					className="pointer-events-none absolute inset-x-6 top-0 h-px"
					style={{
						background: `linear-gradient(90deg, transparent, ${BRAND}, transparent)`,
					}}
				/>
			</div>

			<div className="flex flex-col justify-center p-7 md:p-10">
				<p
					className="m-0 font-mono text-[11px] font-semibold uppercase tracking-[0.3em]"
					style={{ color: VIOLET }}>
					{offering.pending ? "Coming up" : offering.label}
				</p>
				<h3 className="m-0 mt-3 font-display text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">
					{offering.title}
				</h3>
				<p className="m-0 mt-4 leading-relaxed text-slate-600 md:text-lg">
					{offering.body}
				</p>

				{offering.id === "movements" && (
					<dl className="m-0 mt-6 divide-y divide-slate-200 border-y border-slate-200">
						{EDU_MOVEMENTS.map((m) => (
							<div
								key={m.acronym}
								className="py-4">
								<dt className="font-display text-lg font-semibold text-slate-900">
									<span
										className="bg-clip-text text-transparent"
										style={{
											backgroundImage: `linear-gradient(120deg, ${BRAND}, ${VIOLET})`,
										}}>
										{m.acronym}
									</span>{" "}
									<span className="text-slate-500">· {m.name}</span>
								</dt>
								<dd className="m-0 mt-2 text-[15px] leading-relaxed text-slate-600">
									{m.body}{" "}
									<span className="font-medium text-slate-900">{m.note}</span>
								</dd>
							</div>
						))}
					</dl>
				)}

				{offering.points && (
					<ul className="m-0 mt-6 grid list-none gap-3 p-0 sm:grid-cols-2">
						{offering.points.map((point) => (
							<li
								key={point}
								className="flex items-start gap-3 text-[15px] leading-snug text-slate-700">
								<span
									aria-hidden
									className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
									style={{ background: BRAND, boxShadow: `0 0 8px ${BRAND}` }}
								/>
								{point}
							</li>
						))}
					</ul>
				)}

				<div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
					{offering.stat && (
						<div>
							<div
								className="bg-clip-text font-display text-4xl font-bold leading-none tracking-tight text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${BRAND}, ${VIOLET})`,
								}}>
								{offering.stat.value}
							</div>
							<div className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
								{offering.stat.label}
							</div>
						</div>
					)}
					<Link
						to="/contact"
						className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
						style={{
							background: `linear-gradient(120deg, ${BRAND}, ${VIOLET})`,
						}}>
						{offering.cta} <span aria-hidden>→</span>
					</Link>
				</div>
			</div>
		</motion.article>
	);
}
