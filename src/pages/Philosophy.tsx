/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { PRIMARY, SECONDARY } from "../lib/theme";
import { LOGO_DOTS } from "../lib/brandIntro";
import groupLogo from "../assets/logos/logo.png";
import philosophyStatue from "../assets/common/philosophy-statue.webp";
import philosophyBusiness from "../assets/common/philosophy-business.webp";
import StatementPillar from "../components/StatementPillar";
import CreintorsC from "../components/CreintorsC";
import Reveal from "../components/Reveal";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";

/**
 * "Our Thought Process That Binds Us Together", from the artwork supplied with
 * the 17 Sep change list — each word, and what it does for us.
 */
const THOUGHT_PROCESS = [
	{ word: "Philosophy", does: "inspires us" },
	{ word: "Core Values", does: "make us believe" },
	{ word: "Vision", does: "gives us clarity" },
	{ word: "Mission", does: "helps us set goals" },
	{ word: "Strategies", does: "help us achieve them" },
];

/**
 * The five core values, word for word and in order, from the client's "Core
 * Values" artwork (Desktop/Crientors photos new/core value-.png): "Our
 * Philosophy inspires us to believe in our, … making us, Creintors". Each
 * keeps the colour of its dot in that artwork.
 */
const CORE_VALUES = [
	{ value: "Courage", dot: "#F6962A" },
	{ value: "Culture", dot: "#00A3D4" },
	{ value: "Competitiveness", dot: "#3E2A9A" },
	{ value: "Collaboration", dot: "#35982C" },
	{ value: "Contribution", dot: "#FFFFFF", rim: "#334155" },
];

/**
 * Our Philosophy, laid out as the 17 Sep change list orders it: the philosophy
 * of people, the philosophy of business, the core values it leads to ("as is
 * from Our philosophy inspires us — to making us Creintors"), and the thought
 * process that ties philosophy to strategy.
 *
 * This used to be the last band of the Vision & Mission page; that page now
 * carries only the group's vision and mission.
 */
export default function Philosophy() {
	useSeo({
		...PAGE_SEO.philosophy,
	});

	return (
		<main className="relative isolate">
			<h1 className="sr-only">
				Our Philosophy | Creintors Group of Companies
			</h1>

			{/* PHILOSOPHY OF PEOPLE — the statement the Vision & Mission page carried. */}
			<div className="relative z-20">
				<StatementPillar
					label="Philosophy of People"
					statement="We stand on the foundation of humanity, worshipping our work with the faith that, we are the creators of our own Destiny."
					statementLines={[
						"We stand on the foundation of humanity,",
						"worshipping our work with the faith that,",
						"we are the creators of our own Destiny.",
					]}
					aside={{
						src: philosophyStatue,
						alt: "A sculpture of a man carving himself out of the rock, hammer raised",
					}}
					dots
				/>
			</div>

			{/* PHILOSOPHY OF BUSINESS */}
			<div className="relative z-10">
				<StatementPillar
					label="Philosophy of Business"
					statement="Ignorance brings helplessness, knowledge eliminates it. We educate to transform."
					statementLines={[
						"Ignorance brings helplessness,",
						"knowledge eliminates it.",
						"We educate to transform.",
					]}
					aside={{
						src: philosophyBusiness,
						alt: "An orange mechanical fixture standing on a steel base",
					}}
					dots
				/>
			</div>

			{/* CORE VALUES — as the artwork sets them: the C beside the words. */}
			<section
				id="core-values"
				aria-labelledby="core-values-title"
				className="section-tint relative scroll-mt-24 overflow-hidden py-10">
				<div className="container-x">
					<Reveal
						stagger={0.1}
						className="mx-auto grid max-w-4xl grid-cols-[auto_minmax(0,1fr)] items-center gap-x-5 sm:gap-x-10 lg:gap-x-20">
						<Reveal
							from="left"
							className="self-center">
							<CreintorsC className="block h-[clamp(9rem,46vw,11rem)] sm:h-[20rem] lg:h-[27rem]" />
						</Reveal>

						<div>
							<Reveal
								from="up"
								className="eyebrow">
								<span
									className="h-px w-8"
									style={{ background: PRIMARY }}
								/>{" "}
								<span id="core-values-title">Core Values</span>
							</Reveal>
							<Reveal
								from="up"
								as="p"
								className="mt-4 max-w-[26ch] font-display text-xl leading-snug text-slate-600 sm:text-2xl md:text-3xl">
								Our philosophy inspires us to believe in our
							</Reveal>

							<Reveal
								as="ul"
								stagger={0.08}
								className="m-0 mt-5 list-none space-y-1.5 p-0 md:mt-7 md:space-y-2">
								{CORE_VALUES.map((v) => (
									<Reveal
										key={v.value}
										as="li"
										from="left"
										className="flex items-center gap-3 md:gap-4">
										<span
											aria-hidden
											className="h-3.5 w-3.5 shrink-0 rounded-full md:h-5 md:w-5"
											style={{
												background: v.dot,
												boxShadow:
													v.rim ? `inset 0 0 0 1.5px ${v.rim}` : undefined,
											}}
										/>
										<span className="font-display text-[clamp(1.25rem,6.4vw,1.5rem)] font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
											{v.value}
										</span>
									</Reveal>
								))}
							</Reveal>

							<Reveal
								from="up"
								className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 md:mt-9">
								<span className="font-display text-xl text-slate-600 sm:text-2xl md:text-3xl">
									…making us
								</span>
								<img
									src={groupLogo}
									alt="Creintors Group of Companies"
									width={768}
									height={510}
									loading="lazy"
									decoding="async"
									className="h-auto w-36 sm:w-44 md:w-52"
								/>
							</Reveal>
						</div>
					</Reveal>
				</div>
			</section>

			{/* OUR THOUGHT PROCESS */}
			<section className="relative overflow-hidden py-10">
				<div className="container-x">
					<Reveal
						stagger={0.1}
						className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
						<Reveal from="up">
							<div className="eyebrow">
								<span
									className="h-px w-8"
									style={{ background: PRIMARY }}
								/>{" "}
								Our Philosophy
							</div>
							<h2 className="section-title mt-4">
								<span className="text-slate-900">Our Thought Process </span>
								<span
									className="bg-clip-text text-transparent"
									style={{
										backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
									}}>
									That Binds Us Together
								</span>
							</h2>
						</Reveal>

						<Reveal
							as="ol"
							stagger={0.09}
							className="m-0 list-none divide-y divide-slate-200 border-y border-slate-200 p-0">
							{THOUGHT_PROCESS.map((t, i) => {
								const dot = LOGO_DOTS[i];
								return (
									<Reveal
										key={t.word}
										as="li"
										from="left"
										className="flex items-baseline gap-4 py-5 md:gap-5 md:py-6">
										{/* The group logo's five dots, one per step. */}
										<span
											aria-hidden
											className="relative top-[-0.2em] h-3 w-3 shrink-0 self-center rounded-full md:h-3.5 md:w-3.5"
											style={{
												background: dot.fill,
												boxShadow:
													"rim" in dot ? `inset 0 0 0 1.5px ${dot.rim}` : undefined,
											}}
										/>
										<p className="m-0 leading-tight">
											<span className="font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-[2.75rem]">
												{t.word}…
											</span>{" "}
											<span className="text-lg text-slate-500 md:text-xl">
												{t.does}
											</span>
										</p>
									</Reveal>
								);
							})}
						</Reveal>
					</Reveal>
				</div>
			</section>
		</main>
	);
}
