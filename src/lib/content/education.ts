/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

/**
 * The ecosystem's impact numbers, in the hero band the way the three division
 * heroes hold theirs, so its reach is on screen before a visitor scrolls.
 *
 * Figures and labels are the client's own (19 Sep change list, "Impact
 * Numbers"): 850+ students mentored, 13+ partnered institutes, 33+ internship
 * projects, 7+ years of impact.
 */
export const EDU_STATS = [
	{ value: 850, suffix: "+", label: "Students Mentored" },
	{ value: 13, suffix: "+", label: "Partnered Institutes" },
	{ value: 33, suffix: "+", label: "Internship Projects" },
	//{ value: 7, suffix: "+", label: "Years of Impact" },
];

export const FLOW = [
	{
		step: "01",
		title: "Learn",
		detail: "Gain knowledge",
		body: "Curiosity meets structure. Foundational thinking, theory and the language of engineering.",
		accent: "#1ac8ff",
	},
	{
		step: "02",
		title: "Experience",
		detail: "Apply in real environments",
		body: "Step into live industry work alongside teams on real projects, with real constraints and real outcomes.",
		accent: "#000080",
	},
	{
		step: "03",
		title: "Transform",
		detail: "Build confidence and problem-solving ability",
		body: "Emerge as engineers, makers and decision-makers ready to shape what comes next.",
		accent: "#138708",
	},
];

export const PROGRAMS = [
	{
		name: "Industry Immersion",
		sub: "Internships · Live projects",
		body: "Final-year and graduate students embed with our engineering teams to ship real deliverables on real customer projects.",
	},
	{
		name: "Campus Labs",
		sub: "On-site industrial labs",
		body: "We help institutes set up working test rigs, automation cells and mini-pilot plants right inside their campuses.",
	},
	{
		name: "Mentorship Cohorts",
		sub: "Engineers ↔ Students",
		body: "Structured mentorship between practising engineers and student cohorts: review-driven, project-based and outcome-tracked.",
	},
	{
		name: "Skill Bridges",
		sub: "Workshops & masterclasses",
		body: "Short, dense workshops on PLC, ASRS, automation software and water-engineering fundamentals.",
	},
];

export const FOR_STUDENTS = [
	"Hands-on exposure to real industrial systems",
	"Mentorship from practising engineers",
	"Project-based learning, not just lectures",
	"A clear bridge from classroom to career",
];

export const FOR_INSTITUTES = [
	"Industry-aligned curriculum support",
	"On-campus lab and rig partnerships",
	"Joint research and problem-solving programs",
	"Faculty exchanges with practising engineers",
];

export const FAQ = [
	{
		q: "Who can participate in the 3i Ecosystem?",
		a: "We work with engineering colleges, polytechnics, ITIs and university programs and individually with students through structured internships and mentorship cohorts.",
	},
	{
		q: "Are the programs paid or sponsored?",
		a: "Most institutional partnerships are co-funded with the partnering institute. Student-side programs (internships, mentorship) are typically free; specialised workshops may be lightly priced.",
	},
	{
		q: "Can my institute partner with you for an on-campus lab?",
		a: "Yes. We routinely co-design industrial labs and pilot rigs that live inside campuses, and our engineers help operate and curriculum-align them.",
	},
	{
		q: "Do students work on real customer projects?",
		a: "Yes. Embedded students join real teams on real deliverables under mentorship and with appropriate scope, but on live customer work, not toy problems.",
	},
];

/**
 * The two names the 17 Sep change list adds to the 3i page.
 *
 * VLCI — ITMS_Catalogue.pdf p45: "In association with Japan International
 * Cooperation Agency (JICA) and Confederation of Indian Industry (CII),
 * Creintors is offering Visionary Learning Community of India (VLCI) course for
 * Engineering and Diploma Colleges. This Industry Oriented Flow Management
 * Course recognised by AICTE is aimed to build the skills by applying the
 * learning to Industry", with "Evaluation of VLCI Students by Industry" and
 * "Certification of Students by Industry-Academia". The CMD's Level 3 and his
 * two-weeks-a-year commitment are read off his VLCI certificate, pictured in
 * src/assets/gallery/vlci1.jpg (signed by Prof. Shoji Shiba, Chief Adviser,
 * CSM / VLFM Project, JICA), taken at the VLCI Centre of Excellence, KLS Gogte
 * Institute of Technology, Belagavi.
 *
 * MIJSC — IIM Bangalore's "Lean Manufacturing Practices Program" brochure
 * (iimb.ac.in/mijsc/pdf/LMP-Brochure-2025.pdf, "About the Initiative"). It
 * documents where VLCI stands today; it does not name Creintors, so nothing here
 * claims a direct Creintors–MIJSC tie.
 */
export const EDU_MOVEMENTS = [
	{
		acronym: "VLCI",
		name: "Visionary Learning Community of India",
		body: "With JICA and CII, Creintors offers the VLCI course to engineering and diploma colleges: an industry-oriented flow management course, recognised by AICTE, that builds skills by applying the learning in industry. VLCI students are evaluated by industry and certified by industry and academia together.",
		note: "Our CMD is certified at VLCI Level 3 and commits two weeks a year to the movement.",
	},
	{
		acronym: "MIJSC",
		name: "Mizuho India Japan Study Centre, IIM Bangalore",
		body: "VLCI grew out of the Visionary Leaders for Manufacturing programme to build a talent pipeline from engineering colleges. Renamed Lean Manufacturing Practices in 2017, it has been hosted since 2023 by MIJSC at IIM Bangalore, which develops industry-ready engineers through collaboration between academia and SMEs.",
		note: "The programme runs on 30% self-study and 70% practice.",
	},
];

export type EduOfferingId =
	| "internships"
	| "research"
	| "courses"
	| "masterclass"
	| "conferences"
	| "exchange"
	| "movements"
	| "wheels";

export type EduOffering = {
	id: EduOfferingId;
	/** The filter tab, in the client's words. */
	label: string;
	title: string;
	body: string;
	points?: string[];
	/** An impact number from EDU_STATS that belongs with this offering. */
	stat?: { value: string; label: string };
	/**
	 * No details have been supplied for this one yet. Its panel says so and
	 * offers a way to ask, rather than describing events that are not on record.
	 */
	pending?: boolean;
	cta: string;
};

/**
 * The 3i page's filter tabs, in the order the 19 Sep change list gives them
 * ("filter tabs as in automation page for products").
 *
 * Every line is the page's own earlier copy, regrouped under the tab it
 * belongs to: the programs (PROGRAMS), who they serve (FOR_STUDENTS,
 * FOR_INSTITUTES), the FAQ's answers, the Industry → Institute and Institute →
 * Industry cards, and VLCI / MIJSC (EDU_MOVEMENTS), which now sit under their
 * own tab. Conferences, Seminars and Webinars, and Learning on Wheels, have
 * nothing on record yet, so they are `pending`.
 */
export const EDU_OFFERINGS: EduOffering[] = [
	{
		id: "internships",
		label: "Internships",
		title: "Internships on live customer projects",
		body: "Final-year and graduate students embed with our engineering teams to ship real deliverables on real customer projects, under mentorship and with appropriate scope.",
		points: FOR_STUDENTS,
		stat: { value: "33+", label: "Internship Projects" },
		cta: "Apply / Enquire",
	},
	{
		id: "research",
		label: "Research and Projects",
		title: "Research and projects with institutes",
		body: "We help institutes set up working test rigs, automation cells and mini-pilot plants right inside their campuses, and take up research and problem-solving programs with them.",
		points: [
			"On-campus lab and rig partnerships",
			"Joint research and problem-solving programs",
			"Engineers who help operate the labs and align them to the curriculum",
		],
		cta: "Partner With Us",
	},
	{
		id: "courses",
		label: "Course Offerings for Academia",
		title: "Courses for engineering and diploma colleges",
		body: "With JICA and CII, Creintors offers the VLCI course to engineering and diploma colleges: an industry-oriented flow management course, recognised by AICTE, that builds skills by applying the learning in industry.",
		points: [
			"Industry-aligned curriculum support",
			"Students evaluated by industry",
			"Certification by industry and academia together",
		],
		stat: { value: "13+", label: "Partnered Institutes" },
		cta: "Partner With Us",
	},
	{
		id: "masterclass",
		label: "Masterclass for Industries",
		title: "Masterclasses and workshops",
		body: "Short, dense workshops and masterclasses on PLC, ASRS, automation software and water-engineering fundamentals.",
		cta: "Enquire",
	},
	{
		id: "conferences",
		label: "Conferences, Seminars and Webinars",
		title: "Conferences, seminars and webinars",
		body: "The conferences, seminars and webinars run through the 3i Ecosystem will be listed here. Write to us to hear about the next one.",
		pending: true,
		cta: "Ask about upcoming sessions",
	},
	{
		id: "exchange",
		label: "Industry Academia Exchange",
		title: "Industry inside institute, institute inside industry",
		body: "When industry comes into institutes, students meet real challenges, real constraints and real outcomes. When institutes step into industry, students work around live projects, observe real teams and see how decisions actually get made.",
		points: [
			"Faculty exchanges with practising engineers",
			"Structured mentorship between engineers and student cohorts",
		],
		cta: "Partner With Us",
	},
	{
		id: "movements",
		label: "MIJSC, VLCI Events",
		title: "VLCI and MIJSC",
		body: "The movement the 3i courses belong to, and the centre that is its home today.",
		cta: "Enquire",
	},
	{
		id: "wheels",
		label: "Learning on Wheels",
		title: "Learning on Wheels",
		body: "Details of Learning on Wheels will be shared here soon. Write to us to know more.",
		pending: true,
		cta: "Enquire",
	},
];
