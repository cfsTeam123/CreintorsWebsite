/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { INDUSTRIES } from "./landing";

/**
 * The Explore hub's figures, per the 17 Sep change list: Sectors served,
 * Countries Explored, Collaborations nurtured. No supplied document states
 * any of the three, so each is counted from what the site already documents,
 * and should be replaced if Creintors gives its own figure.
 *
 * Sectors — the home page's "Industries We Serve" list (INDUSTRIES), counted.
 *
 * Countries — the ones named in the site's sourced content: India; Germany
 * (SKF Marine Germany, TDM Systems, "Fit for Partnership with Germany");
 * Japan (JICA Leadership Award, Tokyo); Saudi Arabia (Arcelor Mittal KSA,
 * SABIC Hadeed); Qatar (Venture Gulf Engineering); Italy (GWC Italia). A
 * floor, hence the "+": the Teknosol customer list carries further Gulf
 * companies whose countries it does not name.
 *
 * Collaborations — the named ones: CII and JICA (VLCI, VLFM); TDM Systems,
 * Sandvik Group (the Indo-German tool-data collaboration, ITMS_Catalogue.pdf);
 * and the academic partners on ITMS_Catalogue.pdf p45 and the Achievements
 * page — KLS Gogte Institute of Technology, Government Polytechnic Belgaum and
 * Bharatesh Polytechnic. A floor too: the company profile's case studies add
 * work "in collaboration with a foreign OEM" that it does not name.
 */
export const EXPLORE_STATS = [
	{ value: INDUSTRIES.length, suffix: "", label: "Sectors Served" },
	{ value: 6, suffix: "+", label: "Countries Explored" },
	// Soft hyphen: on a phone the three-up band is narrower than
	// "Collaborations", which was clipped; anywhere wider it never shows.
	{ value: 6, suffix: "+", label: "Collabo­rations Nurtured" },
];

/**
 * CII Engagement and VLFM Experience, each on a page of its own (26 Sep: "create
 * 2 new separate pages"). They were one dated list on the Explore hub, "Add
 * about CII and VLFM" (17 Sep change list); the entries are the same, split by
 * which page they belong to. Sources:
 *
 * 2005 — IIM Bangalore, "Lean Manufacturing Practices Program" brochure
 * (iimb.ac.in/mijsc/pdf/LMP-Brochure-2025.pdf), "About the Initiative".
 * 2015, 2016 (VLFM), 2017 — the CMD's journey on the CMD page (src/pages/Cmd.tsx),
 * which also calls VLFM and VSME "flagship programs by CII in association with
 * JICA".
 * 2016 (CII) and 2019 — the CMD page's awards list; the 2016 awards are also on
 * the company profile's award timeline ("Presented by CII").
 * 2018 — ITMS_Catalogue.pdf p47 and ACHIEVEMENTS in src/lib/divisions.ts.
 * VLCI — EDU_MOVEMENTS in ./education.ts, and the notes above it.
 * The principles line — the CMD page's "Programs & Engagements" section.
 */

/** Where VLFM tells its graduates' stories: the address the 19 Sep list gave. */
export const VLFM_STORIES_URL = "https://www.vlfm.org/OurStoriesType.aspx?Id=3";

export type CiiRecognition = {
	year: string;
	photoKey: string;
	title: string;
	body: string;
	/** Says what the photograph shows, and no more than the photograph shows. */
	caption: string;
};

/**
 * CII's awards to the group. Photographs, on the page: the 2018 one is that
 * evening's stage, whose backdrop reads "Global Future Business Forum presents
 * CII Startupreneur Awards … 3 December … New Delhi". The 2016 one is from a
 * CII Industrial Innovation Awards stage, which the Achievements page files
 * under 2016; its backdrop carries no year, so its caption does not give one.
 */
export const CII_RECOGNITION: CiiRecognition[] = [
	{
		year: "2016",
		photoKey: "2016",
		title: "Top 10 Promising Start-up and India's Best Manufacturing Start-up",
		body: "Two honours from CII in the same year, for a group founded four years earlier.",
		caption: "On stage at the CII Industrial Innovation Awards.",
	},
	{
		year: "2016",
		photoKey: "2016-Promising",
		title: "Top 10 Promising Start-Ups – Industrial Innovation Awards 2016",
		body: "CTPL Recognised among the Top 10 Promising Start-Ups at the CII Industrial Innovation Awards 2016 for innovation and contributions to industrial development.",
		caption: "Conferred by Confederation of Indian Industry (CII)",
	},
	{
		year: "2018",
		photoKey: "2018-startupreneur",
		title: "Top 25 Most Innovative Company",
		body: "Named at the CII Startupreneur Awards, presented at CII's Global Future Business Forum in New Delhi.",
		caption: "CII Startupreneur Awards, Global Future Business Forum, New Delhi.",
	},
	{
		year: "2018",
		photoKey: "2018-industrial",
		title: "CII Industrial Innovation Awards 2018",
		body: "Shortlisted for final jury evaluation at the CII Industrial Innovation Awards 2018, recognising Creintors Automation Solutions Pvt. Ltd. among the entries considered for industrial innovation.",
		caption: "Conferred by Confederation of Indian Industry (CII) | 2018",
	},
	{
		year: "2018",
		photoKey: "2018-Innovative",
		title: "Top 25 Innovative Companies 2018",
		body: "CTPL Recognised among the Top 25 Innovative Companies in 2018 for contributions to innovation and industrial technology",
		caption: "Conferred by Confederation of Indian Industry (CI",
	},
];
/** The VLCI course, as the CII page lists it. */
export const VLCI_POINTS = [
	"Recognised by AICTE",
	"Students are evaluated by industry",
	"Certified by industry and academia together",
	"Our CMD is certified at VLCI Level 3 and gives the movement two weeks a year",
];

/** How VLFM began: the one entry that comes before the group's own. */
export const VLFM_ORIGIN = {
	year: "2005",
	text: "Visionary Leaders for Manufacturing begins, after President Dr A. P. J. Abdul Kalam invites Prof. Shoji Shiba of MIT to help improve India's manufacturing sector.",
};

export type VlfmStep = {
	year: string;
	/** The programme the step belongs to — the tag beside the year. */
	with: "VSME" | "VLFM" | "JICA";
	title: string;
	text: string;
};

/** Our CMD's years with the programme, in order. */
export const VLFM_JOURNEY: VlfmStep[] = [
	{
		year: "2015",
		with: "VSME",
		title: "Visionary SME graduate",
		text: "Our CMD graduates from Visionary SME, the programme VLFM gave rise to for small and medium industries.",
	},
	{
		year: "2016",
		with: "VLFM",
		title: "VLFM graduate",
		text: "Our CMD graduates from Visionary Leaders for Manufacturing.",
	},
	{
		year: "2017",
		with: "VLFM",
		title: "Graduate Demonstrator",
		text: "Our CMD becomes a Graduate Demonstrator for VLFM and VSME.",
	},
	{
		year: "2019",
		with: "JICA",
		title: "JICA Leadership Award",
		text: "Our CMD receives the Leadership Award from JICA in Tokyo.",
	},
];
