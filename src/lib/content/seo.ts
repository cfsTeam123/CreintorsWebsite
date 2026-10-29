/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

/**
 * Per-route SEO copy.
 *
 * Review feedback (B8) asked for the SEO implementation to be strengthened
 * across the whole site — descriptive page titles, relevant meta descriptions
 * and keyword-focused content — where before only the C Automate page carried
 * any of it and every other route inherited the same generic document title.
 *
 * Every title, description and keyword below describes what is actually on that
 * page. Nothing here claims a product, a customer, a certification or a
 * location that the site does not already state elsewhere.
 */

import { GROUP_SOCIALS } from "../divisions";

export type PageSeo = {
	title: string;
	description: string;
	keywords: string[];
	canonicalPath?: string;
};

const BRAND = "Creintors Group of Companies";
const PLACE = "Belgaum, Karnataka, India";

/** Organisation-level structured data, attached to the landing page. */
export const ORGANISATION_JSONLD = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: BRAND,
	url: "https://www.creintors.com/",
	description:
		"Creintors Group of Companies: Creintors Teknosol (valve testing systems), Creintors Automation Solutions (ASRS warehouse automation and tool management systems) and Creintors Environmental Solutions (water, sewage and effluent treatment).",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Waghawade Road",
		addressLocality: "Belgaum",
		addressRegion: "Karnataka",
		addressCountry: "IN",
	},
	// The group's own social profiles, so search engines tie them to the site.
	sameAs: GROUP_SOCIALS.map((s) => s.href),
	subOrganization: [
		{ "@type": "Organization", name: "Creintors Teknosol Pvt. Ltd." },
		{
			"@type": "Organization",
			name: "Creintors Automation Solutions Pvt. Ltd.",
		},
		{
			"@type": "Organization",
			name: "Creintors Environmental Solutions Pvt. Ltd.",
		},
	],
};

export const PAGE_SEO = {
	landing: {
		title: `${BRAND} | Test Systems, Warehouse Automation and Water Treatment`,
		description: `Creintors Group of Companies, ${PLACE}. We build valve test rigs and leak detection systems, ASRS warehouse automation and tool management systems, and water, sewage and effluent treatment plants, all engineered in-house.`,
		keywords: [
			"Creintors Group of Companies",
			"Creintors Teknosol",
			"Creintors Automation Solutions",
			"Creintors Environmental Solutions",
			"valve test rig",
			"ASRS warehouse automation",
			"water treatment plant",
			"industrial automation Belgaum",
		],
		canonicalPath: "/",
	},

	teknosol: {
		title:
			"Valve Test Rigs & Leak Detection Systems | Creintors Teknosol Pvt. Ltd.",
		description: `Creintors Teknosol designs and manufactures valve testing systems: hydrostatic and pneumatic test stands, leak detection rigs, and safety-valve and actuator torque test benches, with PLC and SCADA control. ${PLACE}.`,
		keywords: [
			"valve test rig",
			"valve testing system",
			"hydrostatic test stand",
			"leak detection system",
			"safety valve test rig",
			"actuator torque test rig",
			"tie-rod test stand",
			"Creintors Teknosol",
			"Belgaum",
		],
		canonicalPath: "/teknosol",
	},

	crienviro: {
		title:
			"Water, Sewage & Effluent Treatment Plants | Creintors Environmental Solutions",
		description: `Creintors Environmental Solutions engineers and executes water treatment plants, sewage treatment plants, effluent treatment, oil-water separators, clarifiers, pressure sand filters and SCADA-controlled plant automation. Turnkey delivery with long-term O&M. ${PLACE}.`,
		keywords: [
			"water treatment plant",
			"sewage treatment plant",
			"effluent treatment plant",
			"STP",
			"WTP",
			"ETP",
			"oil water separator",
			"lamella clarifier",
			"pressure sand filter",
			"Creintors Environmental Solutions",
			"Belgaum",
		],
		canonicalPath: "/crienviro",
	},

	education: {
		title: "3i Ecosystem | Industry and Academia Programs | Creintors Group",
		description:
			"The Creintors 3i Ecosystem connects education with real-world engineering: Industry inside Institute, Institute inside Industry. Honours programs in automation and robotics, the VLCI flow-management course with JICA and CII, now hosted by MIJSC at IIM Bangalore, internships and hands-on training with practising engineers.",
		keywords: [
			"3i Ecosystem",
			"industry academia collaboration",
			"automation and robotics honours program",
			"VLCI course",
			"Visionary Learning Community of India",
			"MIJSC IIM Bangalore",
			"engineering internship Belgaum",
			"Creintors education",
		],
		canonicalPath: "/education",
	},

	policies: {
		title: "Quality, Environment & Governance Policies | Creintors Group",
		description:
			"The policies the Creintors Group operates to, covering quality management, environmental responsibility, occupational health and safety, information security and governance commitments across all three companies.",
		keywords: [
			"quality policy",
			"environmental policy",
			"health and safety policy",
			"information security policy",
			"ISO 9001",
			"ISO 14001",
			"ISO 45001",
			"ISO 27001",
			"Creintors policies",
		],
		canonicalPath: "/policies",
	},

	clients: {
		title: "Our Clients | Creintors Group of Companies",
		description:
			"The engineering teams Creintors delivers for, grouped by company: valve testing and precision manufacturing customers, automation and ASRS customers, and water and environmental engineering customers across India and abroad.",
		keywords: [
			"Creintors clients",
			"valve testing customers",
			"ASRS customers",
			"water treatment clients",
			"industrial automation clients India",
		],
		canonicalPath: "/clients",
	},

	contact: {
		title: `Contact Creintors Group | ${PLACE}`,
		description: `Talk to the Creintors Group of Companies. There is a direct line for each company, covering Creintors Teknosol, Creintors Automation Solutions and Creintors Environmental Solutions, plus the group head office at Waghawade Road, ${PLACE}.`,
		keywords: [
			"contact Creintors",
			"Creintors Belgaum address",
			"Creintors phone number",
			"valve test rig enquiry",
			"ASRS enquiry",
			"water treatment enquiry",
		],
		canonicalPath: "/contact",
	},

	history: {
		title: "Our History | Creintors Group Milestones Since 2012",
		description:
			"One and a half decades of the Creintors story, year by year: Creintors Teknosol from 2012, C-Automate and Crienviro from 2017, and the projects, innovations and firsts along the way, from ASRS and water treatment plants to the Indian Space Station docking platform.",
		keywords: [
			"Creintors history",
			"Creintors milestones",
			"Creintors founders",
			"CTPL CESPL CASPL",
			"Creintors projects",
		],
		canonicalPath: "/about/history",
	},

	visionMission: {
		title: "Vision & Mission | Creintors Group of Companies",
		description:
			"The vision and mission of the Creintors Group: sustainable innovations that build a better world, an ecosystem that inspires the youth, and collaboration with every stakeholder.",
		keywords: ["Creintors vision", "Creintors mission", "Creintors Group"],
		canonicalPath: "/about/vision-mission",
	},

	philosophy: {
		title: "Our Philosophy & Core Values | Creintors Group of Companies",
		description:
			"The philosophy of people and of business behind the Creintors Group, the nine core values in the letters of our name, and the thought process that binds philosophy, values, vision, mission and strategy together.",
		keywords: [
			"Creintors philosophy",
			"Creintors core values",
			"company values",
			"We educate to transform",
		],
		canonicalPath: "/about/philosophy",
	},

	cmd: {
		title: "Our Chairman & Managing Director | Creintors Group",
		description:
			"A message from the Chairman & Managing Director of the Creintors Group of Companies on the thinking, the engineering philosophy and the long-term direction behind the group.",
		keywords: [
			"Creintors CMD",
			"Creintors chairman",
			"Creintors managing director",
			"Creintors leadership",
		],
		canonicalPath: "/about/cmd",
	},

	team: {
		title: "Our Team | Creintors Group of Companies",
		description:
			"The engineers and company leads behind Creintors. Our testing systems, automation and environmental engineering teams work across design, manufacture, commissioning and support.",
		keywords: [
			"Creintors team",
			"Creintors engineers",
			"Creintors leadership team",
			"company heads",
		],
		canonicalPath: "/about/team",
	},

	approach: {
		title: "Our Approach | Creintors Group of Companies",
		description:
			"How Creintors delivers: a complete approach that runs from discovery and design through in-house build, commissioning and long-term support, across testing, automation and environmental projects.",
		keywords: [
			"Creintors approach",
			"turnkey engineering process",
			"in-house design and manufacture",
			"commissioning and support",
		],
		canonicalPath: "/about/approach",
	},

	achievements: {
		title: "Awards & Achievements | Creintors Group of Companies",
		description:
			"Recognitions earned by the Creintors Group, including the Outstanding Exporter Award, the Productivity and Innovation Award, Top 25 Most Innovative Company at the CII Startupreneur Awards, and the group's industry–academia work.",
		keywords: [
			"Creintors awards",
			"Outstanding Exporter Award",
			"Productivity and Innovation Award",
			"CII Startupreneur Award",
			"Creintors achievements",
		],
		canonicalPath: "/about/achievements",
	},

	certifications: {
		title: "ISO Certifications & Compliance | Creintors Group",
		description:
			"Integrated Management System certifications held across the Creintors Group: ISO 9001 quality, ISO 14001 environment, ISO 45001 occupational health and safety and ISO 27001 information security, plus ZED certification.",
		keywords: [
			"ISO 9001",
			"ISO 14001",
			"ISO 45001",
			"ISO 27001",
			"ZED certification",
			"Creintors certifications",
			"integrated management system",
		],
		canonicalPath: "/about/certifications",
	},

	careers: {
		title: `Careers at Creintors Group | ${PLACE}`,
		description: `Engineering, design, manufacturing and service roles across Creintors Teknosol, Creintors Automation Solutions and Creintors Environmental Solutions in ${PLACE}. Graduate openings, internships and experienced positions.`,
		keywords: [
			"Creintors careers",
			"engineering jobs Belgaum",
			"automation engineer jobs",
			"mechanical design jobs Karnataka",
			"Creintors internship",
		],
		canonicalPath: "/careers",
	},

	gallery: {
		// "Our Moments" is the page's name since the 19 Sep change list; "Gallery"
		// stays in the title for search.
		title: "Our Moments: Gallery | Creintors Group of Companies",
		description:
			"Inside Creintors: manufacturing and assembly, commissioned installations, exhibitions and awards, team, training and community work across the group's three companies.",
		keywords: [
			"Creintors gallery",
			"Creintors factory photos",
			"LogiMAT",
			"Creintors team photos",
			"Creintors CSR",
		],
		canonicalPath: "/gallery",
	},

	ciiEngagement: {
		title: "CII Engagement | Creintors Group of Companies",
		description:
			"Creintors and the Confederation of Indian Industry: CII's Top 10 Promising Start-up and India's Best Manufacturing Start-up honours (2016), Top 25 Most Innovative Company at the CII Startupreneur Awards (2018), and the VLCI course Creintors teaches with CII and JICA.",
		keywords: [
			"Creintors CII",
			"CII Startupreneur Awards",
			"CII Industrial Innovation Awards",
			"Top 25 Most Innovative Company",
			"VLCI course",
			"CII JICA",
		],
		canonicalPath: "/cii-engagement",
	},

	vlfmExperience: {
		title: "VLFM Experience | Creintors Group of Companies",
		description:
			"Visionary Leaders for Manufacturing (VLFM), the programme CII runs with JICA: how the Creintors CMD went from VSME and VLFM graduate to Graduate Demonstrator and JICA Leadership Award recipient.",
		keywords: [
			"VLFM",
			"Visionary Leaders for Manufacturing",
			"VSME",
			"Graduate Demonstrator",
			"JICA Leadership Award",
			"Prof. Shoji Shiba",
		],
		canonicalPath: "/vlfm-experience",
	},

	cmdConnect: {
		title: "CMD Connect | Creintors Group of Companies",
		description:
			"A direct line to the Chairman and Managing Director of Creintors, with leadership notes, open conversations and how the group's guiding principles translate into the work it delivers.",
		keywords: [
			"CMD Connect",
			"Creintors leadership notes",
			"talk to Creintors leadership",
		],
		canonicalPath: "/cmd-connect",
	},

	knowledgeSharing: {
		title: "Knowledge Sharing | Creintors Group of Companies",
		description:
			"Insights, case studies and technical resources from the Creintors engineering teams across valve testing, warehouse automation and water treatment.",
		keywords: [
			"Creintors knowledge sharing",
			"engineering case studies",
			"automation resources",
			"technical insights",
		],
		canonicalPath: "/knowledge-sharing",
	},

	customerVoice: {
		title: "Customer Voice | Creintors Group of Companies",
		description:
			"What Creintors customers say. Testimonials and feedback from the engineering teams using our test systems, automation installations and treatment plants.",
		keywords: [
			"Creintors testimonials",
			"customer feedback",
			"customer voice",
			"client reviews",
		],
		canonicalPath: "/customer-voice",
	},

	notFound: {
		title: "Page Not Found | Creintors Group of Companies",
		description:
			"The page you are looking for does not exist. Browse the Creintors Group companies: Creintors Teknosol, Creintors Automation Solutions and Creintors Environmental Solutions.",
		keywords: ["Creintors", "page not found"],
	},
} satisfies Record<string, PageSeo>;
