/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import type { ComponentType } from "react";
import {
	Award,
	BadgeCheck,
	BookOpen,
	Compass,
	GraduationCap,
	Handshake,
	HeartHandshake,
	History,
	Images,
	Mail,
	MessageSquareQuote,
	MessagesSquare,
	Quote,
	Route,
	ScrollText,
	Users,
} from "lucide-react";
import { SERVICE_NAMES } from "./divisions";
import creintorsLogo from "../assets/logos/logo.png";
import teknosollogo from "../assets/logos/tecnoLogo.png";
import cautomate from "../assets/logos/automateLogo.png";
import crienviro from "../assets/logos/envLogo.png";
// Re-cut from the full-size artwork (i3.jpg) with room on every side: the
// cut-out it replaces was cropped so tight that the right edge took the "s"
// of Creintors, the last dot, and the ends of the M and m ("3i logo at top
// left — r is getting cut", 19 Sep change list). The Creintors wordmark and
// dots in its corner are redrawn from the group logo, as the JPEG's are too
// small and too compressed to cut out cleanly.
import i3logo from "../assets/logos/3i-ecosystem.webp";

/**
 * Card art for the two hub pages.
 *
 * Each one is a 16:10 WebP cut down from a photo the destination page itself
 * uses, so a card previews where it goes without a hub shipping six or eight
 * full-size originals.
 *
 * Since 26 Sep (NEW CHANGES.docx, photos 2–7 and 13–16) the About and Explore
 * cards carry the client's chosen photographs.
 *
 * Four are composed rather than cropped — a cut-out set whole, standing on the
 * card's foot, over a heavily blurred frame, so the tile carries a background
 * like every other card ("add a blur bg", 26 Sep):
 *   - philosophy — the self-made-man statue over our workshop under window light
 *   - approach — the rig on its stand over our meeting room
 *   - achievements — the award group over the CII award stage
 *   - cmd — the CMD's cut-out portrait set over a blurred frame of our own
 *     meeting room, so the tile carries a background like every other card.
 *     Subject sits centre-right: the icon badge straddles the bottom-left
 *     and must not land on his face.
 */
import hubGallery from "../assets/hub/gallaryimg.png";
import hubPolicies from "../assets/hub/policies.webp";
import hubCmdConnect from "../assets/hub/cmd-connect.webp";
import hubKnowledge from "../assets/hub/knowledge-sharing.webp";
import hubCustomerVoice from "../assets/hub/customer-voice.webp";
import hubContact from "../assets/hub/contact.webp";
import hubHistory from "../assets/hub/history.webp";
import hubPhilosophy from "../assets/hub/philosophy.webp";
import hubVisionMission from "../assets/hub/vision-mission.webp";
import hubAchievements from "../assets/hub/achievements.webp";
import hubTeam from "../assets/hub/team.webp";
import hubApproach from "../assets/hub/approach.png";
import hubCmd from "../assets/hub/cmd.webp";
import hubCertifications from "../assets/hub/certifications.webp";
// The client's CII and JICA programme photographs (26 Sep: "CII photo no. 13",
// "VLCI photo no. 14").
import hubCiiEngagement from "../assets/hub/cii-engagement.webp";
import hubVlfmExperience from "../assets/hub/vlfm-experience.webp";

/**
 * The site's navigation, in one place.
 *
 * These arrays used to live inside Navbar.tsx. They now sit here because three
 * things render them — the header dropdowns, the /about hub and the /explore
 * hub — and a link that changed in one but not the others would be a silent
 * bug. Add or retire a section link here and every surface follows.
 */

export type NavItem = {
	to: string;
	label: string;
	/** Shown under the label in the dropdown and on the hub card. */
	desc?: string;
	/** Header mark for the route. */
	logo?: string;
	/** Header accent for the route. */
	theme?: string;
	/** Opacity of the plate behind the header mark, "0"–"100". */
	opacity?: string;
	/** One of the three group companies — set heavier in the mobile drawer. */
	company?: boolean;
	/** Card icon on the hub pages. */
	icon?: ComponentType<{ className?: string }>;
	/** Card art on the hub pages — a look at the page behind the link. */
	image?: string;
	/**
	 * An address on another site. The hub card opens it in a new tab instead
	 * of routing to `to`, which then only keys the card.
	 */
	href?: string;
};

/** Top-level header links. */
export const NAV: NavItem[] = [
	{
		to: "/",
		label: "Home",
		logo: creintorsLogo,
		theme: "#00A0E3",
		opacity: "0",
	},
	{
		to: "/teknosol",
		// Named by what the company does. The mark in the header already says
		// which company it is, so the link does not repeat it. Header-only
		// wording: the home-page cards still read SERVICE_NAMES ("Technology").
		label: "Special Solutions",
		logo: teknosollogo,
		theme: "#01A0E2",
		opacity: "0",
		company: true,
	},
	{
		to: "/cautomate",
		label: SERVICE_NAMES.cautomate,
		logo: cautomate,
		theme: "#000080",
		opacity: "0",
		company: true,
	},
	{
		to: "/crienviro",
		label: SERVICE_NAMES.crienviro,
		logo: crienviro,
		theme: "#138708",
		opacity: "0",
		company: true,
	},
	{
		to: "/education",
		label: "3i Ecosystem",
		logo: i3logo,
		theme: "#01A0E2",
		opacity: "0",
	},
];

/**
 * The pages under Explore, and their cards on /explore, in the order the 19 Sep
 * change list gives its tabs: CII Engagement and VLFM Experience first. Labels
 * and subtitles are the list's own ("Gallery to be changed to Our Moments",
 * "Get in Touch — Start a Conversation with Us", …).
 *
 * CII Engagement and VLFM Experience became pages of their own on 26 Sep. They
 * were a section of /explore and a link out to VLFM's stories page; that link
 * now sits on the VLFM Experience page.
 */
export const MORE: NavItem[] = [
	{
		to: "/cii-engagement",
		label: "CII Engagement",
		desc: "Connecting industry, ideas and policy makers",
		logo: creintorsLogo,
		theme: "#01A0E2",
		opacity: "0",
		icon: Handshake,
		image: hubCiiEngagement,
	},
	{
		to: "/vlfm-experience",
		label: "VLFM Experience",
		desc: "Shaping Leaders for Manufacturing",
		logo: creintorsLogo,
		theme: "#01A0E2",
		opacity: "0",
		icon: GraduationCap,
		image: hubVlfmExperience,
	},
	{
		to: "/gallery",
		label: "Our Moments",
		desc: "Celebrating people, progress and milestones",
		logo: creintorsLogo,
		theme: "#01A0E2",
		opacity: "0",
		icon: Images,
		image: hubGallery,
	},
	{
		to: "/policies",
		label: "Our Policies",
		desc: "Concern for Quality, Environment and Systems",
		logo: creintorsLogo,
		theme: "#01A0E2",
		opacity: "0",
		icon: ScrollText,
		image: hubPolicies,
	},
	{
		to: "/cmd-connect",
		label: "CMD Connect",
		desc: "Insights and Perspectives",
		logo: creintorsLogo,
		theme: "#01A0E2",
		opacity: "0",
		icon: MessagesSquare,
		image: hubCmdConnect,
	},
	{
		to: "/knowledge-sharing",
		label: "Knowledge Sharing",
		desc: "Articles, Case Studies, Blogs",
		logo: creintorsLogo,
		theme: "#01A0E2",
		opacity: "0",
		icon: BookOpen,
		image: hubKnowledge,
	},
	{
		to: "/customer-voice",
		label: "Customer Voice",
		desc: "Interviews and Testimonials",
		logo: creintorsLogo,
		theme: "#01A0E2",
		opacity: "0",
		icon: Quote,
		image: hubCustomerVoice,
	},
	// {
	// 	to: "/careers",
	// 	label: "Careers",
	// 	desc: "Join our team.",
	// 	logo: creintorsLogo,
	// 	theme: "#01A0E2",opacity:"40"
	// },
	{
		to: "/contact",
		label: "Get in Touch",
		desc: "Start a Conversation with Us",
		logo: creintorsLogo,
		theme: "#01A0E2",
		opacity: "0",
		icon: Mail,
		image: hubContact,
	},
];

/**
 * The "About Us" dropdown, the cards on /about and the footer's About Us
 * column. The capitals in the subtitles are the client's own marking (18 Sep).
 */
export const ABOUT: NavItem[] = [
	{
		to: "/about/history",
		label: "Our Journey",
		desc: "Reflecting on the path to our Dreams",
		opacity: "0",
		icon: History,
		image: hubHistory,
	},
	{
		to: "/about/philosophy",
		label: "Our Philosophy",
		desc: "People and Business",
		opacity: "0",
		icon: HeartHandshake,
		image: hubPhilosophy,
	},
	{
		to: "/about/vision-mission",
		label: "Our Vision and Mission",
		desc: "That Inspire Us",
		opacity: "0",
		icon: Compass,
		image: hubVisionMission,
	},
	{
		to: "/about/achievements",
		label: "Our Achievements",
		desc: "Celebrating Innovations",
		opacity: "0",
		icon: Award,
		image: hubAchievements,
	},
	{
		to: "/about/team",
		label: "Our Team",
		desc: "People that make it Happen",
		opacity: "0",
		icon: Users,
		image: hubTeam,
	},
	{
		to: "/about/approach",
		label: "Our Approach",
		desc: "Is Quick Fail",
		opacity: "0",
		icon: Route,
		image: hubApproach,
	},
	{
		to: "/about/cmd",
		label: "Our CMD",
		desc: "Spark to Wings of Fire",
		opacity: "0",
		icon: MessageSquareQuote,
		image: hubCmd,
	},
	{
		to: "/about/certifications",
		label: "Our Certifications",
		desc: "Building stronger Frameworks",
		opacity: "0",
		icon: BadgeCheck,
		image: hubCertifications,
	},
];

/** The hub page each dropdown's label navigates to. */
export const ABOUT_HUB = "/about";
export const EXPLORE_HUB = "/explore";

export const MORE_PATHS = MORE.map((m) => m.to.toLowerCase());
export const ABOUT_PATHS = ABOUT.map((a) =>
	a.to.split("#")[0].toLowerCase(),
);

/** True on a section's hub page or on any of its children. */
export const isAboutPath = (p: string) =>
	p === ABOUT_HUB || ABOUT_PATHS.includes(p);
export const isMorePath = (p: string) =>
	p === EXPLORE_HUB || MORE_PATHS.includes(p);
