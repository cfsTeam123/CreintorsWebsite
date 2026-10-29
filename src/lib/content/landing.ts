/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import type { ReactElement } from "react";
import { Icon, type IconProps } from "../icons";

import img1 from "../../assets/common/precisio.jpg";
import img2 from "../../assets/common/SPL PPR.webp";
import img3 from "../../assets/common/ASRSPlantAutomation.webp";
import img4 from "../../assets/gallery/material-handaling-avg.png";
import img5 from "../../assets/common/Industrial Software.webp";
import img6 from "../../assets/common/environmental_so.jpg";

type IconComp = (p: IconProps) => ReactElement;

export const DIVISION_COPY: Record<
	string,
	{ tagline: string; points: string[]; legal: string }
> = {
	teknosol: {
		tagline: "Technology",
		points: [
			"Valve Test Benches",
			"Test Rigs for Automotive, Aircraft and Nuclear components/products",
			"Consultancy for enhancing productivity and business excellence",			"...AI enabled solutions"

		],
		legal: "Creintors Pvt. Ltd.",
	},
	cautomate: {
		tagline: "Automation",
		points: [
			"Automated Storage and Retrieval System Solutions (ASRS)",
			"Robot Integration Systems and End to End Automated Material Handling (RPA)",
			"Insert and Tool Management Systems (ITMS)",
			"Autonomous Material Movement (AMRs, AGVs)",
			"Industry 4.0 Software Solutions (ERP, WMS, API Interface for SAP, Oracle, etc.)",
			"...AI enabled solutions"
		],
		legal: "Creintors Automation Solutions Pvt. Ltd.",
	},
	crienviro: {
		tagline: "Environmental",
		points: [
			"Surface Water Treatment",
			"Sewage & Effluent Water Treatment",
			"Oil Water Separator (Global Supplier for SKF Marine - Germany)",
			"Turnkey Compressed Biogas Solutions",			"...AI enabled solutions"

		],
		legal: "Creintors Environmental Solutions Pvt. Ltd.",
	},
};

/**
 * Each solution belongs to one of the three companies, and the card links
 * through to it. The routing follows the divisions' own catalogues rather than
 * the wording of the card: SPMs are Teknosol products (SPM 075 / SPM 020 in its
 * product list), and Industrial Software is Cautomate's Information Flow
 * Solutions, not a separate offering.
 */
export const SOLUTIONS: {
	img: string;
	icon: IconComp;
	title: string;
	desc: string;
	/** Division page this card opens. */
	to: string;
	/** The company that owns it, shown on the card as the link's destination. */
	company: string;
}[] = [
	{
		img: img1,
		icon: Icon.Gauge,
		title: "Valve Testing Systems",
		to: "/teknosol",
		company: "Creintors Teknosol",
		desc: "Precision-engineered hydrostatic, pneumatic and high-pressure test rigs purpose-built to validate valves for the most critical industrial applications.",
	},
	{
		img: img2,
		icon: Icon.Chip,
		title: "Special Purpose Machines",
		to: "/teknosol",
		company: "Creintors Teknosol",
		desc: "Custom SPMs and assembly stations engineered to your process: repeatable, data-rich and built to raise productivity on the shop floor.",
	},
	{
		img: img3,
		icon: Icon.Stack,
		title: "ASRS & Plant Automation",
		to: "/cautomate",
		company: "Creintors C-Automate",
		desc: "Automated Storage & Retrieval Systems and full-plant automation that compress footprint, raise throughput and bring end-to-end traceability.",
	},
	{
		img: img4,
		icon: Icon.Robot,
		title: "Material Handling & AGV",
		to: "/cautomate",
		company: "Creintors C-Automate",
		desc: "AGV fleets, conveyors and robotic cells that move material safely, predictably and at industrial scale across high-mix production lines.",
	},
	{
		img: img5,
		icon: Icon.Code,
		title: "Industrial Software",
		to: "/cautomate",
		company: "Creintors C-Automate",
		desc: "MES, WMS and intelligent monitoring software: the digital layer that makes hardware observable, scheduled and continuously improvable.",
	},
	{
		img: img6,
		icon: Icon.Drop,
		title: "Water & Wastewater Treatment",
		to: "/crienviro",
		company: "Creintors Crienviro",
		desc: "WTP, ETP, STP systems engineered for reliability and environmental compliance, supporting sustainable industrial and municipal operations.",
	},
];

export const INDUSTRIES: { icon: IconComp; label: string }[] = [
	{ icon: Icon.Car, label: "Automotive" },
	{ icon: Icon.Atom, label: "Nuclear" },
	{ icon: Icon.Cup, label: "Food & Beverages" },
	{ icon: Icon.Beaker, label: "Chemical" },
	{ icon: Icon.Flame, label: "Steel" },
	{ icon: Icon.Truck, label: "Logistics & Warehousing" },
	{ icon: Icon.Factory, label: "Manufacturing" },
	{ icon: Icon.Diamond, label: "Jewellery" },
	{ icon: Icon.Shirt, label: "Textile" },
	{ icon: Icon.Sofa, label: "Furniture" },
	{ icon: Icon.Pill, label: "Pharmaceuticals & Healthcare" },
	{ icon: Icon.Shield, label: "Defence & Aerospace" },
	{ icon: Icon.Building, label: "Civil Construction & Real Estate" },
];

export const CAPABILITIES: {
	icon: IconComp;
	title: string;
	desc: string;
	points: string[];
}[] = [
	{
		icon: Icon.Gauge,
		title: "Precision Engineering",
		desc: "Advanced engineering design and manufacturing capabilities used to develop reliable industrial systems, valve testing rigs, and special purpose machines for critical applications.",
		points: ["Test Rigs", "SPMs", "Mechanical Design", "Validation"],
	},
	{
		icon: Icon.Robot,
		title: "Industrial Automation",
		desc: "Smart automation solutions including ASRS systems, AGVs, and plant automation designed to improve efficiency, traceability, and operational productivity.",
		points: ["ASRS", "AGV", "PLC & SCADA", "Software"],
	},
	{
		icon: Icon.Leaf,
		title: "Environmental Solutions",
		desc: "Advanced water and wastewater treatment systems including WTP, STP technologies that support sustainable and compliant industrial operations.",
		points: ["WTP", "STP", "ZLD Compliance"],
	},
];

export const CLIENTS = [
	"TVS",
	"Tata Motors",
	"NPCIL",
	"Tanishq",
	"Vega",
	"Technova",
	"Flowserve",
	"L&T",
	"Azbil",
	"Grab",
	"Wire",
	"GWC",
];

/**
 * ITMS_Catalogue.pdf p4 / Software.pdf p2: "Creintors Group of Companies
 * founded by Mr. Neelesh Chougule in 2012" — confirmed by the 18 Sep change
 * list ("Creintors started in 2012 not 2002"), which the History page follows.
 */
const GROUP_FOUNDED = 2012;

/**
 * The group's impact figures, in the client's own words (19 Sep change list,
 * Home page — "Impact: 14+ Years of Innovation, 150+ Empowered Teammates, 11+
 * Awards of Recognition"). The home hero's band (in place of Customers /
 * Projects / Certifications, 26 Sep), the home page's stats band and the About
 * hub's hero all read this, so they cannot drift apart.
 *
 * Years — counted from GROUP_FOUNDED, so it moves on by itself: 14 in 2026.
 * (The 18 Sep list flags "two decades" as wrong.)
 * Teammates — ITMS_Catalogue.pdf p5 / Software.pdf p2, "150+ Energetic
 * Teammates".
 * Awards — the award timeline in the company profile: eleven entries, from the
 * 2014 Outstanding Exporter Award to the 2025 LogiVerse award. Matches "11+
 * National Awards" on the Achievements page.
 *
 * `caption` is the line under each figure on the home page's cards.
 */
export const IMPACT_STATS = [
	{
		value: new Date().getFullYear() - GROUP_FOUNDED,
		suffix: "+",
		label: "Years of Innovation",
		//caption: `Since ${GROUP_FOUNDED}`,
	},
	{
		value: 10,
		suffix: "+",
		label: "Sectors",
		//caption: "Engineers · Designers · Operators",
	},
	{
		value: 300,
		suffix: "+",
		label: "Projects",
		//caption: "For innovation & quality",
	},
];

export const ABOUT_IMPACT_STATS = [

	{
		value: 150,
		suffix: "+",
		label: "Empowered Teammates",
		//caption: "Engineers · Designers · Operators",
	},
	{
		value: 11,
		suffix: "+",
		label: "Awards Of Recongnition",
		//caption: "For innovation & quality",
	},
		{
		value: 10,
		suffix: "+",
		label: "Quality Certifications",
		//caption: `Since ${GROUP_FOUNDED}`,
	},
];
export const MARQUEE_ITEMS = [
	"AUTOMATION",
	"TEST RIGS",
	"WATER TREATMENT",
	"ASRS · AGV",
	"SUSTAINABLE ENGINEERING",
	"ROBOTICS",
	"INTRALOGISTICS",
	"MANUFACTURING",
];

/**
 * Source: ITMS_Catalogue.pdf p6 & p48 / Software.pdf p3 — Integrated Management
 * System certified company; ITMS_Catalogue.pdf p1 — "Made in India".
 */
export const CAPABILITY_BADGES = [
	"ISO 9001",
	"ISO 14001",
	"ISO 45001",
	"ISO 27001",
	"Made in India",
];
