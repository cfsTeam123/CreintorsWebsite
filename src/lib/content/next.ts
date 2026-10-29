/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

/**
 * "Our thoughts to be future ready — Working towards the NEXT", the section
 * the 17 Sep change list adds to all three company pages.
 *
 * The thoughts are the group's own: ITMS_Catalogue.pdf p42, "Industry 4.0 —
 * Our Thoughts", sets out five implementation phases across the organisation's
 * systems pyramid, closing "We CAN (Creintors Analysis to Navigate) partner
 * with you"; p41 frames them "from Uncertain to Certain". Each company then
 * says what it already does along that path — only Cautomate's catalogue
 * (p43, "Our Actions") maps its products phase by phase.
 */

export type NextStep = {
	title: string;
	/** The shift the phase makes, in the catalogue's "from … to …" terms. */
	shift?: string;
	thought: string;
	/** What the company's own systems do at this phase, where documented. */
	action?: string;
};

export type DivisionNextContent = {
	lead: string;
	steps: NextStep[];
	/** Where the company already stands, from its own documented capabilities. */
	standing?: { title: string; body: string };
	closing?: string;
};

/** ITMS_Catalogue.pdf p42 — "Industry 4.0 Implementation Phases across all three levels". */
export const INDUSTRY_4_THOUGHTS: NextStep[] = [
	{
		title: "Functional Human Interface Platform",
		thought:
			"Management information systems, with Industry 4.0 representatives and a team structure to carry them.",
	},
	{
		title: "Organizing Data for Decisions",
		shift: "From data to information",
		thought:
			"Controlled access to physical and information systems; sensing and monitoring big data across machines and networks for the right data.",
	},
	{
		title: "Coding Data for Intelligence",
		shift: "From information to knowledge",
		thought:
			"Intelligence and understanding: patterns and transparency through AI, cognitive analytics and analysis.",
	},
	{
		title: "Innovating Intelligence for Solutions",
		shift: "From knowledge to wisdom to forecast",
		thought:
			"Predictive capability, preparedness and preparation: more AI and cognitive tools across maintenance, innovation and service.",
	},
	{
		title: "Optimizing Autonomous Systems",
		shift: "From wisdom to re-action, from forecast to pro-action",
		thought:
			"Autonomous action and self-optimising machines: agility, flexibility and true innovation — transformation.",
	},
];

export const NEXT_CLOSING =
	"We CAN (Creintors Analysis to Navigate) partner with you.";

export const NEXT_LEAD = "From uncertain to certain.";
