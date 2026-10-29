/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import { FOR_INSTITUTES, FOR_STUDENTS } from "../../lib/content/education";
import imgStudents from "../../assets/industries/logistic.jpg";
import imgInstitutes from "../../assets/industries/stee.jpeg";

const BRAND = "#1ac8ff";
const VIOLET = "#46367f";

export default function AudienceSection() {
	return (
		<SectionWrapper className="section-tint py-24 md:py-28">
			<div className="container-x relative grid gap-8 lg:grid-cols-2">
				<AudienceCard
					accent={BRAND}
					eyebrow="For Students"
					title="The bridge from curiosity to career."
					items={FOR_STUDENTS}
					image={imgStudents}
					ctaLabel="Apply / Enquire →"
					ctaTo="/contact"
					ctaPrimary
				/>
				<AudienceCard
					accent={VIOLET}
					eyebrow="For Institutes"
					title="An industry partnership built into your campus."
					items={FOR_INSTITUTES}
					image={imgInstitutes}
					ctaLabel="Partner With Us →"
					ctaTo="/contact"
				/>
			</div>
		</SectionWrapper>
	);
}

function AudienceCard({
	accent,
	eyebrow,
	title,
	items,
	image,
	ctaLabel,
	ctaTo,
	ctaPrimary,
}: {
	accent: string;
	eyebrow: string;
	title: string;
	items: string[];
	image: string;
	ctaLabel: string;
	ctaTo: string;
	ctaPrimary?: boolean;
}) {
	return (
		<div
			className="reveal group relative overflow-hidden rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-1"
			style={{
				borderColor: `${accent}33`,
				boxShadow: `0 30px 100px -36px ${accent}66, 0 0 0 1px rgba(255,255,255,0.85) inset`,
			}}>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
				style={{ background: accent }}
			/>
			<div className="relative h-52 overflow-hidden md:h-64">
				<img
					src={image}
					alt={title}
					className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				/>
				<div
					aria-hidden
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(180deg, rgba(8,10,16,0.2) 0%, rgba(8,10,16,0.9) 95%)",
					}}
				/>
				<div className="absolute bottom-5 left-6 right-6">
					<div
						className="font-mono text-xs uppercase tracking-[0.4em]"
						style={{ color: accent }}>
						{eyebrow}
					</div>
					<h3 className="mt-2 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
						{title}
					</h3>
				</div>
			</div>
			<div className="relative p-8 md:p-10">
				<ul className="space-y-4 text-slate-700">
					{items.map((s) => (
						<li
							key={s}
							className="flex items-start gap-3">
							<span
								className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
								style={{
									background: accent,
									boxShadow: `0 0 8px ${accent}`,
								}}
							/>
							<span>{s}</span>
						</li>
					))}
				</ul>
				<Link
					to={ctaTo}
					className={
						ctaPrimary ?
							"btn-primary mt-8 inline-flex"
						:	"btn-ghost mt-8 inline-flex"
					}
					style={
						ctaPrimary ?
							{
								background: `linear-gradient(120deg, ${accent}, ${VIOLET})`,
							}
						:	undefined
					}>
					{ctaLabel}
				</Link>
			</div>
		</div>
	);
}
