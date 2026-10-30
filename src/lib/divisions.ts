/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

export type Division = {
	slug: "teknosol" | "cautomate" | "crienviro";
	name: string;
	/**
	 * What the company *does*, in plain English.
	 *
	 * The header and the home-page cards name each company by its work rather
	 * than by its coined trading name, which the logo above already carries.
	 */
	serviceName: string;
	legalName: string;
	dd: string;
	shortTagline: string;
	tagline: string;
	founded: number;
	focus: string[];
	accent: string;
	gradient: string;
	description: string;
	/** Contact numbers specific to this division/company. */
	phones: string[];
	/**
	 * General enquiry address for this division. Only addresses that appear in
	 * the official Creintors documentation are listed here; a division with no
	 * documented address of its own falls back to the group address.
	 */
	emails?: string[];
};

/** Phone numbers for the Group of Companies (default on non-division pages). */
export const GROUP_PHONES: string[] = ["+91 96069 30105", "+91 91087 08199"];

/**
 * Who answers each direct line.
 *
 * Review feedback asked for the name and designation to be shown alongside the
 * numbers on the contact page. Keyed by the number itself so the two can never
 * drift apart. Every entry matches the business head listed with that same
 * number on the Our Team page — no new people, roles or numbers introduced.
 */
export const PHONE_CONTACTS: Record<string, { name: string; role: string }> = {
	"+91 77950 00812": { name: "Sagar Kavadi", role: "Business Head, CTPL" },
	"+91 77950 00803": { name: "Parag Bilgi", role: "Business Head, CESPL" },
	"+91 77950 00801": {
		name: "Rahul Kale",
		role: "Business Head, CASPL Projects",
	},
	"+91 70192 24122": {
		name: "Sheldon D'Lima",
		role: "Business Head, CASPL Innovation and Products",
	},
};

/** The person who answers a given number, if one is on record. */
export function getContactPerson(
	phone: string,
): { name: string; role: string } | undefined {
	return PHONE_CONTACTS[phone];
}

/**
 * Enquiry addresses shown outside a division page.
 *
 * Review feedback flagged the contact details shown when arriving from the CTPL
 * page. The footer previously printed the HR mailboxes (hr@ / hradmin@) as the
 * site-wide "Reach Us" address on every page, which is a recruitment inbox
 * rather than a general enquiry one. Careers is the only place the HR addresses
 * belong.
 *
 * The general info@ address was then retired at the client's request in favour
 * of the two business heads below, so on the group pages both are listed and a
 * division page narrows it to its own (see each division's `emails`).
 */
export const GROUP_EMAILS: string[] = [
	// "sagar.kavadi@creintor.com",
	// "parag@crienviro.com",
	" hr@creintors.com",
	" hradmin@creintors.com",
];

export type SocialId = "linkedin" | "instagram" | "facebook" | "youtube" | "x";

/**
 * The group's social profiles (26 Sep), in the order the client sent them.
 * The share-link tracking parameters (Instagram's igsh/utm_source, Facebook's
 * mibextid) are dropped; the links open the same profiles without them.
 */
export const GROUP_SOCIALS: { id: SocialId; label: string; href: string }[] = [
	{
		id: "linkedin",
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/creintors-group-of-companies/home/",
	},
	{
		id: "instagram",
		label: "Instagram",
		href: "https://www.instagram.com/creintors_group_of_companies/",
	},
	{
		id: "facebook",
		label: "Facebook",
		href: "https://www.facebook.com/share/14mgZsJd2yz/",
	},
	{
		id: "youtube",
		label: "YouTube",
		href: "https://www.youtube.com/@CreintorsGroupofCompanies",
	},
	{ id: "x", label: "X", href: "https://x.com/CreintorsGOC" },
];

/**
 * The HR mailboxes, shown as the footer's "Reach Us" address on the group
 * pages (home, About, Resources — anything that is not a company page).
 *
 * These were the footer address site-wide until 2026-08, then replaced by the
 * business heads above. The client has asked for them back in the footer. The
 * company pages are deliberately left alone: their footers still resolve to
 * their own enquiry address (see `getFooterEmailsForPath`), which is the
 * routing the senior-team review asked for and which the Contact page's own
 * "Reach Us" block continues to use via GROUP_EMAILS.
 */
export const HR_EMAILS: string[] = [
	"hr@creintors.com",
	"hradmin@creintors.com",
];

export const DIVISIONS: Division[] = [
	{
		slug: "teknosol",
		name: "Creintors Teknosol",
		serviceName: "Technology",
		legalName: "Creintors Teknosol Pvt. Ltd.",
		dd: "CREINTORS TEKNOSOL",

		shortTagline: "Test what matters most",
		tagline:
			"Precision valve testing systems engineered for safety and reliability.",
		founded: 2012,
		focus: ["Valve Test Rigs", "Leak Detection", "Automated Testing systems"],
		accent: "#00A0E3",
		gradient: "from-brand-400/30 via-brand-500/10 to-transparent",
		description:
			"Creintors Teknosol designs and manufactures advanced valve testing systems engineered for precision, safety, and reliability. Our test rigs help industries validate valve performance under real-world operating conditions.",
		phones: ["+91 77950 00812"],
		emails: ["sagar.kavadi@creintor.com"],
	},
	{
		slug: "cautomate",
		name: "Creintors C-Automate",
		serviceName: "Automation",
		dd: "CREINTORS AUTOMATION SOLUTIONS",
		legalName: "Creintors Automation Solutions Pvt. Ltd.",
		shortTagline: "Create > Innovate > Automate",
		tagline: "Smart automation, ASRS, robotics, and digital solutions.",
		founded: 2017,
		// Ordered to match the primary product focus set out in the senior-team
		// review: ASRS first, then vertical storage, then tool management.
		focus: [
			"ASRS",
			"Vertical Storage",
			"Tool Management",
			"AMR / AGV",
			"Software",
		],
		accent: "#000080",
		gradient: "from-accent-violet/30 via-accent-violet/10 to-transparent",
		description:
			"C-Automate builds intelligent automation ecosystems that transform industrial operations with smart, scalable solutions.",
		phones: ["+91 77950 00801", "+91 70192 24122"],
		// Source: ASRS.pdf — "Contact us · Mob : +91 77950 00801 · Email :
		// sales@cautomate.com".
		emails: ["sales@cautomate.com"],
	},
	{
		slug: "crienviro",
		name: "Creintors Crienviro",
		serviceName: "Environmental",
		dd: "CREINTORS ENVIRONMENTAL SOLUTIONS",

		legalName: "Creintors Environmental Solutions Pvt. Ltd.",
		shortTagline: "Engineering Eco-Sustainability",
		tagline: "Sustainable water treatment and environmental engineering.",
		founded: 2017,
		focus: ["WTP", "STP", "ETP"],
		accent: "#138708",
		gradient: "from-accent-lime/30 via-accent-lime/10 to-transparent",
		description:
			"Crienviro designs and executes water treatment systems that ensure sustainability, efficiency, and environmental compliance.",
		phones: ["+91 77950 00803"],
		emails: ["parag@crienviro.com"],
	},
];

/** Slug -> plain-English service name, for the header and the home-page cards. */
export const SERVICE_NAMES = Object.fromEntries(
	DIVISIONS.map((d) => [d.slug, d.serviceName]),
) as Record<Division["slug"], string>;

/** Slug -> brand colour, so a division's colour is stated in exactly one place. */
export const DIVISION_ACCENTS = Object.fromEntries(
	DIVISIONS.map((d) => [d.slug, d.accent]),
) as Record<Division["slug"], string>;

/**
 * Resolve the contact numbers to show for a given route. Division pages
 * (e.g. /teknosol, /cautomate, /crienviro) get their own numbers; everything
 * else falls back to the Group of Companies numbers.
 */
export function getPhonesForPath(pathname: string): string[] {
	return getContactForPath(pathname).phones;
}

/** The company a route belongs to, if any. */
function findDivisionForPath(pathname: string): Division | undefined {
	return DIVISIONS.find(
		(d) => pathname === `/${d.slug}` || pathname.startsWith(`/${d.slug}/`),
	);
}

/**
 * Resolve the full contact block — numbers *and* email — for a given route, so
 * the two can never drift apart. Division pages (e.g. /teknosol, /cautomate,
 * /crienviro) get their own details where those are documented; everything else
 * falls back to the Group of Companies.
 */
export function getContactForPath(pathname: string): {
	phones: string[];
	emails: string[];
} {
	const division = findDivisionForPath(pathname);
	if (!division) return { phones: GROUP_PHONES, emails: GROUP_EMAILS };
	return {
		phones: division.phones,
		emails: division.emails ?? GROUP_EMAILS,
	};
}

/**
 * Enquiry addresses for the footer specifically.
 *
 * A company page keeps its own address, so the footer never disagrees with the
 * page above it. Everywhere else — the home page included — falls back to the
 * HR mailboxes rather than the business heads.
 */
export function getFooterEmailsForPath(pathname: string): string[] {
	return findDivisionForPath(pathname)?.emails ?? HR_EMAILS;
}

/**
 * Source: ITMS_Catalogue.pdf p47 — "Achievements: Customers and Awards".
 *
 * Only awards named in the official Creintors documentation are listed. The
 * previous list carried six further entries (2017, 2020, 2021, 2023, 2024,
 * 2025) with award names and citation paragraphs that appear in no supplied
 * document; they have been removed pending written confirmation from Creintors.
 */
export const ACHIEVEMENTS: { year: string; title: string; detail: string }[] = [
	{
		year: "2014",
		title: "Outstanding Exporter Award",
		detail:
			"Presented to the Creintors group and recorded in the Creintors Automation Solutions catalogue among the group's awards.",
	},
	{
		year: "2015",
		title: "Productivity and Innovation Award",
		detail:
			"Presented to the Creintors group and recorded in the Creintors Automation Solutions catalogue among the group's awards.",
	},
	{
		year: "2016",
		title: "Top 10 Promising Start-up & Best Manufacturing Start-up",
		detail:
			"Recorded in the Creintors Automation Solutions catalogue as a group-of-companies recognition.",
	},
	{
		year: "2018",
		title: "Top 25 Most Innovative Company",
		detail:
			"Received at the CII Startupreneur Awards, Global Future Business Forum, and recorded in the Creintors Automation Solutions catalogue.",
	},
	{
		year: "2019",
		title: "Startupreneur Award 2019",
		detail:
			"Recorded in the Creintors Automation Solutions catalogue as a product-level recognition.",
	},
];
