/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import Faq from "../Faq";
import { FAQ } from "../../lib/content/education";
import imgFaq from "../../assets/industries/nuclea.jpeg";

const BRAND = "#1ac8ff";
const VIOLET = "#46367f";

export default function FaqSection() {
	return (
		<SectionWrapper className="section-tint py-24 md:py-28">
			<div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.6fr]">
				<div>
					<div className="eyebrow reveal">
						<span
							className="h-px w-8"
							style={{ background: BRAND }}
						/>{" "}
						FAQ
					</div>
					<h2
						className="section-title reveal bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(95deg, #0b1220 0%, #0b1220 45%, ${BRAND} 80%, ${VIOLET} 100%)`,
						}}>
						How the 3i Ecosystem works.
					</h2>
					<p className="reveal mt-4 text-slate-600">
						Common questions from students, institutes, and parents.
					</p>

					<div
						className="reveal mt-8 overflow-hidden rounded-3xl border bg-white"
						style={{
							borderColor: `${BRAND}33`,
							boxShadow:
								"0 22px 60px -28px rgba(15,23,42,0.18), 0 0 0 1px rgba(255,255,255,0.85) inset",
						}}>
						<div className="relative h-44">
							<img
								src={imgFaq}
								alt=""
								className="h-full w-full object-cover"
							/>
							<div
								aria-hidden
								className="absolute inset-0"
								style={{
									background:
										"linear-gradient(180deg, transparent 30%, rgba(8,10,16,0.95) 95%)",
								}}
							/>
						</div>
						<div className="p-6">
							<div
								className="font-mono text-[10px] uppercase tracking-[0.32em]"
								style={{ color: BRAND }}>
								Still have questions?
							</div>
							<p className="mt-2 text-sm text-slate-600">
								Our education team responds within one working day.
							</p>
							<Link
								to="/contact"
								className="btn-primary mt-5 inline-flex"
								style={{
									background: `linear-gradient(120deg, ${BRAND}, ${VIOLET})`,
								}}>
								Reach Our Education Team →
							</Link>
						</div>
					</div>
				</div>
				<div className="reveal">
					<Faq
						items={FAQ}
						accent={BRAND}
						mode="light"
					/>
				</div>
			</div>
		</SectionWrapper>
	);
}
