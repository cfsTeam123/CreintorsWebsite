/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import heroImage from "../../assets/crienviro/about.png";
import waterImage from "../../assets/crienviro/watertreat.jpg";
import wtpImage from "../../assets/crienviro/wtp.png";
import stpImage from "../../assets/crienviro/stp.png";

// Real plant & equipment photography (CESPL)
import stpPhoto from "../../assets/products/CESPL/Sewage Treatement Plant (STP).jpg";
import wtpPhoto from "../../assets/products/CESPL/WTP Plant.jpg";
import owsPhoto from "../../assets/products/CESPL/OWS.png";
import scadaPhoto from "../../assets/products/CESPL/SCADA Screen at WTP Plant.jpg";
import becPhoto from "../../assets/products/CESPL/Batch Electrochlorinator(BEC).jpg";
import lamellaPhoto from "../../assets/products/CESPL/Lamella.jpg";
import psfPhoto from "../../assets/products/CESPL/Pressure Sand Filter(PSF)pic.png";
import clarifloccPhoto from "../../assets/products/CESPL/Clariflocculator 1.jpg";
import flashMixerPhoto from "../../assets/products/CESPL/Flash Mixer.jpg";
import sludgeThickenerPhoto from "../../assets/products/CESPL/Sludge Thickener.jpg";
import panelPhoto from "../../assets/products/CESPL/Panel Manufacturing.jpg";

import client1 from "../../assets/clients/Crienviro/1.png";
import client2 from "../../assets/clients/Crienviro/2.png";
import client3 from "../../assets/clients/Crienviro/3.jpg";
import client4 from "../../assets/clients/Crienviro/4.jpg";
import client5 from "../../assets/clients/Crienviro/5.png";
import client6 from "../../assets/clients/Crienviro/6.png";
import client7 from "../../assets/clients/Crienviro/7.png";
import client8 from "../../assets/clients/Crienviro/8.png";
import {
	INDUSTRY_4_THOUGHTS,
	NEXT_CLOSING,
	NEXT_LEAD,
	type DivisionNextContent,
} from "./next";
import { CATALOGUES, type ProductDocuments } from "./documents";

export const CRIENVIRO_THEME = {
	primary: "#138708",
	secondary: "#686867",
};

export const CRI_HERO_IMAGE = heroImage;
export const CRI_WATER_IMAGE = waterImage;

/**
 * The "Why Crienviro?" section. Eyebrow and answer line are the 19 Sep change
 * list's own words: "Responsible Circular Economy" in place of "Environmental",
 * and "Engineering Eco-Sustainability for a better tomorrow". The list marks
 * the body copy as still "to be changed (in all companies)"; the current text
 * stays until that copy arrives.
 */
export const CRI_ABOUT_INTRO = {
	eyebrow: "Responsible Circular Economy",
	title: "Engineering Eco-Sustainability for a better tomorrow",
	body: "Creintors Environmental Solutions designs, builds and operates water, effluent and sewage treatment systems engineered for compliance, efficiency and longevity. From municipal supply to zero-liquid-discharge industrial trains we deliver turnkey environmental engineering with statutory clearance.",
};

export const CRI_ABOUT_HIGHLIGHTS = [
	{ k: "01", t: "Sustainable", d: "Engineering" },
	{ k: "02", t: "Statutory", d: "Compliance" },
	{ k: "03", t: "Turnkey", d: "Delivery" },
	{ k: "04", t: "Long-term", d: "O&M Support" },
];

export const CRI_VISION_MISSION = {
	eyebrow: "Our Core Direction",
	title: "Vision & Mission",
	subcopy:
		"Crienviro's purpose is to make every drop of water count through engineered treatment systems that protect public health, support industry and respect the environment.",
	vision:
		"To be a beacon of innovation for the holistic architecture and integration of drinking water, effluent, sewage and solid waste management systems, that deliver sustainable solutions with a carbon-negative impact.",
	mission:
		"Through the culture of innovation and collaboration of people and technologies, building an ecosystem of offerings, that deliver sustainable solutions addressing the pains for assuring quality water generation and distribution with accountability, for treating effluent, sewage and solid waste by being closest to the point of generation of waste thus creating the sense of awareness and participation.",
};

export const CRI_CAPABILITIES = [
	{
		t: "Water Treatment Plants",
		d: "Drinking-water plants compliant with IS 10500 and WHO guidelines, sized from village taps to municipal MLD-scale.",
		tag: "WTP",
		image: wtpImage,
		metric: "MLD-scale",
		highlights: ["Filtration", "Disinfection", "RO trains"],
	},
	{
		t: "Sewage Treatment Plants",
		d: "MBBR, MBR and SBR-based STPs for municipal, hospitality, healthcare and educational campuses with strict effluent norms.",
		tag: "STP",
		image: stpImage,
		metric: "Compliant",
		highlights: ["MBBR", "MBR", "SBR"],
	},
	{
		t: "Operations & Maintenance",
		d: "AMC, telemetry, statutory reporting and SLA-bound breakdown response keeping plants compliant and running.",
		tag: "O&M",
		image: waterImage,
		metric: "24×7 SLA",
		highlights: ["AMC", "Telemetry", "Reporting"],
	},
];

export const CRI_PROCESS = [
	{
		k: "01",
		t: "Survey",
		d: "Influent characterization, site survey and statutory framing.",
	},
	{
		k: "02",
		t: "Engineer",
		d: "Process flow, hydraulic and electrical design with compliance built-in.",
	},
	{
		k: "03",
		t: "Construct",
		d: "Civil, mechanical and electrical execution under turnkey scope.",
	},
	{
		k: "04",
		t: "Commission",
		d: "Trial runs, lab testing and PCB / regulatory sign-off.",
	},
	{
		k: "05",
		t: "Operate",
		d: "O&M, AMC contracts, telemetry and reporting.",
	},
];

export type CriProductSpec = {
	label: string;
	value: string;
	highlight?: boolean;
};
export type CriVideo = { label: string; url: string };
export type CriTestimonial = { quote: string; author: string };
/** The three water-treatment streams the 19 Sep change list filters by. */
export type CriStreamId = "drinking-water" | "effluent" | "sewage";

/** `brochure` and `catalogue` are set only where a supplied document covers it: see documents.ts. */
export type CriProduct = ProductDocuments & {
	id: string;
	/**
	 * The streams this product serves, read off its own use cases and
	 * description below — a SCADA or control panel serves every plant, a
	 * clariflocculator both surface water and effluent.
	 */
	streams: CriStreamId[];
	title: string;
	subtitle: string;
	tag: string;
	image: string;
	description: string;
	specs: CriProductSpec[];
	videos: CriVideo[];
	testimonials: CriTestimonial[];
	useCases: string[];
};

export const CRI_PRODUCTS: CriProduct[] = [
	{
		id: "stp",
		streams: ["sewage"],
		title: "Sewage Treatment Plant",
		subtitle: "Domestic & institutional wastewater treatment.",
		tag: "STP",
		image: stpPhoto,
		description:
			"Modular STP trains engineered for hospitals, hotels, campuses and townships. MBBR / SBR / MBR architectures with disinfection deliver effluent that meets discharge or reuse standards while keeping footprint and odour under tight control.",
		specs: [
			{ label: "Capacity", value: "10 – 5000 KLD", highlight: true },
			{ label: "Process", value: "MBBR · SBR · MBR" },
			{ label: "Discharge", value: "BOD < 10 · TSS < 10", highlight: true },
			{ label: "Reuse", value: "Flushing · Gardening" },
			{ label: "Footprint", value: "Compact modular" },
			{ label: "Standard", value: "CPCB / SPCB" },
		],
		videos: [
			{ label: "Plant walkthrough", url: "#" },
			{ label: "Commissioning", url: "#" },
		],
		testimonials: [
			{
				quote:
					"Compact, odourless and consistently below CPCB norms exactly what our hospital block needed.",
				author: "Facilities Head, Tertiary-care Hospital",
			},
		],
		useCases: ["Hospitals", "Hotels & resorts", "Townships", "Campuses"],
	},

	{
		id: "wtp",
		streams: ["drinking-water"],
		title: "Water Treatment Plant",
		subtitle: "Drinking-water grade municipal & industrial supply.",
		tag: "WTP",
		image: wtpPhoto,
		catalogue: CATALOGUES.projects,
		description:
			"Surface and ground-water treatment trains engineered to IS 10500 clarification, dual-media filtration, activated-carbon polishing and disinfection. Delivered turnkey with statutory clearance and long-term O&M.",
		specs: [
			{ label: "Capacity", value: "0.5 – 50 MLD", highlight: true },
			{ label: "Standard", value: "IS 10500 compliant" },
			{ label: "Process", value: "Coag · Filter · Disinfect", highlight: true },
			{ label: "Delivery", value: "Turnkey + O&M" },
			{ label: "Source", value: "Surface · Ground" },
			{ label: "Telemetry", value: "SCADA-ready" },
		],
		videos: [
			{ label: "Filter house", url: "#" },
			{ label: "Disinfection skid", url: "#" },
		],
		testimonials: [
			{
				quote:
					"Commissioned on schedule with full PHED clearance. Quality has held steady through three monsoons.",
				author: "Executive Engineer, PHED",
			},
		],
		useCases: [
			"Municipal supply",
			"Village schemes",
			"Industrial process water",
			"Bottling",
		],
	},
	{
		id: "ows",
		streams: ["effluent"],
		title: "Oil-Water Separator",
		subtitle: "Free & emulsified oil removal before discharge.",
		tag: "OWS",
		image: owsPhoto,
		description:
			"Coalescing-plate and API separators that strip free, dispersed and emulsified oil from process and effluent streams. Sized to your hydraulic load with auto skim and sludge draw. Drop-in upstream of any downstream biological or RO stage.",
		specs: [
			{ label: "Efficiency", value: "Oil out < 10 ppm", highlight: true },
			{ label: "Flow", value: "5 – 500 m³/hr" },
			{ label: "Type", value: "API · CPI · Coalescer", highlight: true },
			{ label: "Skim", value: "Automated weir" },
			{ label: "Footprint", value: "Skid-mounted" },
			// Corrected per the senior-team review: this product is not
			// manufactured in FRP, so FRP has been removed from the material of
			// construction.
			{ label: "Material", value: "MS · SS304" },
		],
		videos: [
			{ label: "Skim mechanism", url: "#" },
			{ label: "Plate-pack assembly", url: "#" },
		],
		testimonials: [
			{
				quote:
					"Replaced our legacy API tank with their CPI skid. Oil-out dropped to under 6 ppm without chemicals.",
				author: "Maintenance Lead, Heavy Engineering Workshop",
			},
		],
		// "Stormwater pretreatment" removed per the senior-team review — it is not
		// an application for this product.
		useCases: [
			"Refineries & depots",
			"Workshops & garages",
			"Marine yards",
			"Effluent pretreatment",
		],
	},
	{
		id: "scada-systems",
		streams: ["drinking-water", "effluent", "sewage"],
		title: "SCADA Systems",
		subtitle: "Real-time monitoring, control & telemetry.",
		tag: "SCADA",
		image: scadaPhoto,
		catalogue: CATALOGUES.waterTreatment,
		description:
			"PLC-based control with redundant HMIs, telemetry and cloud dashboards purpose-built for treatment plants. Dose pacing, flow trending, alarm escalation, statutory log generation and remote multi-plant supervision in a single pane.",
		specs: [
			{ label: "Protocols", value: "Modbus · OPC-UA · MQTT", highlight: true },
			{ label: "Redundancy", value: "Hot-standby PLC + UPS" },
			{ label: "I/O", value: "256 – 4096 points", highlight: true },
			{ label: "Dashboards", value: "Web · Mobile · Cloud" },
			{ label: "Alarms", value: "SMS · Email · App" },
			{ label: "Reports", value: "Auto CPCB / SPCB" },
		],
		videos: [
			{ label: "Live dashboard", url: "#" },
			{ label: "Multi-plant view", url: "#" },
		],
		testimonials: [
			{
				quote:
					"We supervise 11 plants from one control room now. Alarms reach the right operator in under a minute.",
				author: "Operations Director, Municipal Utility",
			},
		],
		useCases: [
			"Remote plant monitoring",
			"Multi-site supervision",
			"Statutory reporting",
			"Dose & flow control",
		],
	},
	{
		id: "chlorination",
		streams: ["drinking-water"],
		title: "Chlorination Systems",
		subtitle: "Reliable disinfection at any plant scale.",
		tag: "DISINFECTION",
		image: becPhoto,
		catalogue: CATALOGUES.waterTreatment,
		description:
			"Gas chlorination, sodium-hypochlorite dosing and on-site electro-chlorination skids sized for the residual you need, not the catalogue you find. Auto pH and ORP feedback close the loop without operator babysitting.",
		specs: [
			{ label: "Type", value: "Gas · Hypo · OSEC", highlight: true },
			{ label: "Dose", value: "0.5 – 20 mg/L" },
			{ label: "Residual", value: "0.2 – 0.5 mg/L", highlight: true },
			{ label: "Control", value: "ORP / Residual feedback" },
			{ label: "Safety", value: "Leak detect + scrubber" },
			{ label: "Cert.", value: "NSF / ANSI" },
		],
		videos: [
			{ label: "Dosing skid demo", url: "#" },
			{ label: "OSEC walkthrough", url: "#" },
		],
		testimonials: [
			{
				quote:
					"Switching to OSEC eliminated chlorine-cylinder logistics across all six of our pumping stations.",
				author: "Project Engineer, Water Board",
			},
		],
		useCases: [
			"Drinking-water plants",
			"Cooling towers",
			"Swimming pools",
			"Pumping stations",
		],
	},
	{
		id: "lamella",
		streams: ["drinking-water"],
		title: "Lamella Clarifier",
		subtitle: "High-rate inclined-plate settling in compact footprint.",
		tag: "CLARIFIER",
		image: lamellaPhoto,
		catalogue: CATALOGUES.waterTreatment,
		description:
			"Inclined-plate settlers achieving conventional clarifier performance in roughly a third of the footprint. Stainless-steel plate packs with adjustable angle, integrated flocculation chamber and motorised sludge scraping for continuous duty.",
		specs: [
			{ label: "Hydraulic load", value: "Up to 1.2 m³/m²·h", highlight: true },
			{ label: "Plate angle", value: "55° – 60°" },
			{ label: "Footprint", value: "≈ 1/3 of conventional", highlight: true },
			{ label: "Throughput", value: "10 – 2000 m³/hr" },
			{ label: "Material", value: "MS / SS 304 / 316 plates" },
			{ label: "Sludge", value: "Motorised scraper" },
		],
		videos: [
			{ label: "Plate-pack tour", url: "#" },
			{ label: "Sludge draw cycle", url: "#" },
		],
		testimonials: [
			{
				quote:
					"Slotted into our existing civil tank without rework. Clarification quality jumped immediately.",
				author: "Process Engineer, Beverage Plant",
			},
		],
		useCases: [
			"Pretreatment for RO",
			"Sludge thickening",
			"Surface-water clarification",
			"Process-water polishing",
		],
	},
	{
		id: "psf",
		streams: ["drinking-water"],
		title: "Pressure Sand Filter",
		subtitle: "Multimedia depth filtration for suspended solids.",
		tag: "PSF",
		image: psfPhoto,
		catalogue: CATALOGUES.waterTreatment,
		description:
			"Vertical and horizontal pressure sand filters using graded silica and gravel beds to strip turbidity and suspended solids ahead of polishing or RO. Engineered for low pressure-drop, easy air-scour backwash and long media life under continuous duty.",
		specs: [
			{ label: "Flow rate", value: "5 – 500 m³/hr", highlight: true },
			{ label: "Media", value: "Graded silica + gravel" },
			{ label: "Turbidity out", value: "< 2 NTU", highlight: true },
			{ label: "Vessel", value: "Vertical · Horizontal" },
			{ label: "Backwash", value: "Air-scour + water" },
			{ label: "Material", value: "MSEP · FRP · SS304" },
		],
		videos: [
			{ label: "Backwash cycle", url: "#" },
			{ label: "Media loading", url: "#" },
		],
		testimonials: [
			{
				quote:
					"Turbidity into our RO dropped below 1 NTU and cartridge change-outs halved after the PSF retrofit.",
				author: "Utilities Engineer, Process Plant",
			},
		],
		useCases: [
			"Pre-RO filtration",
			"Turbidity removal",
			"Borewell water polishing",
			"Cooling-tower makeup",
		],
	},
	{
		id: "clariflocculator",
		streams: ["drinking-water", "effluent"],
		title: "Clariflocculator",
		subtitle: "Combined flocculation & clarification in one tank.",
		tag: "CLARIFLOC",
		image: clarifloccPhoto,
		catalogue: CATALOGUES.waterTreatment,
		description:
			"Circular clariflocculators integrating a slow-mix flocculation zone and a peripheral clarification zone in a single concentric tank. Motorised central drive with scraper bridge delivers high-rate settling and continuous sludge removal for surface-water and effluent trains.",
		specs: [
			{ label: "Diameter", value: "4 – 40 m", highlight: true },
			{ label: "Zones", value: "Flocculation + Clarifier" },
			{ label: "Overflow rate", value: "1.0 – 1.5 m³/m²·h", highlight: true },
			{ label: "Drive", value: "Central motorised bridge" },
			{ label: "Sludge", value: "Scraper + central draw" },
			{ label: "Material", value: "RCC + SS / MS internals" },
		],
		videos: [
			{ label: "Bridge drive tour", url: "#" },
			{ label: "Floc-to-settle flow", url: "#" },
		],
		testimonials: [
			{
				quote:
					"One unit replaced our separate flash-mix and clarifier civil works and saved a large slice of footprint.",
				author: "Project Lead, Municipal WTP",
			},
		],
		useCases: [
			"Surface-water clarification",
			"Effluent primary settling",
			"Lime-softening plants",
			"Pretreatment trains",
		],
	},
	{
		id: "flash-mixer",
		streams: ["drinking-water"],
		title: "Flash Mixer",
		subtitle: "Rapid coagulant dispersion at plant inlet.",
		tag: "MIXER",
		image: flashMixerPhoto,
		catalogue: CATALOGUES.waterTreatment,
		description:
			"High-shear rapid-mix units that disperse coagulant uniformly across the raw-water stream in seconds, the critical first step that decides downstream floc quality. Supplied with a corrosion-resistant impeller, VFD-ready drive and dosing tie-in.",
		specs: [
			{ label: "Detention", value: "30 – 60 sec", highlight: true },
			{ label: "Velocity grad.", value: "G 300 – 1000 /s" },
			{ label: "Impeller", value: "High-shear axial", highlight: true },
			{ label: "Drive", value: "Geared motor · VFD-ready" },
			{ label: "Dosing", value: "Alum · PAC · Polymer" },
			{ label: "Material", value: "SS304 / SS316 wetted" },
		],
		videos: [
			{ label: "Mixing action", url: "#" },
			{ label: "Dosing tie-in", url: "#" },
		],
		testimonials: [
			{
				quote:
					"Floc formation became visibly tighter and chemical dosing dropped once the flash mixer was sized correctly.",
				author: "Process Engineer, Water Board",
			},
		],
		useCases: [
			"Coagulant dosing",
			"pH correction mixing",
			"WTP inlets",
			"Chemical pretreatment",
		],
	},
	{
		id: "sludge-thickener",
		streams: ["effluent", "sewage"],
		title: "Sludge Thickener",
		subtitle: "Gravity sludge concentration & volume reduction.",
		tag: "THICKENER",
		image: sludgeThickenerPhoto,
		description:
			"Gravity thickeners that concentrate dilute biological and chemical sludge before dewatering, cutting downstream filter-press load and disposal volume. Slow-rotating picket-fence rake releases trapped water and delivers a steady, thickened underflow.",
		specs: [
			{ label: "Underflow", value: "Up to 4 – 6% solids", highlight: true },
			{ label: "Loading", value: "30 – 60 kg/m²·d" },
			{ label: "Volume cut", value: "Up to 70% reduction", highlight: true },
			{ label: "Rake", value: "Picket-fence, slow drive" },
			{ label: "Type", value: "Gravity, circular" },
			{ label: "Material", value: "RCC + MS / SS internals" },
		],
		videos: [
			{ label: "Rake mechanism", url: "#" },
			{ label: "Underflow draw", url: "#" },
		],
		testimonials: [
			{
				quote:
					"Thickening ahead of the filter press cut our sludge cake volume and hauling costs dramatically.",
				author: "Plant Manager, Effluent Treatment",
			},
		],
		useCases: [
			"Pre-dewatering",
			"Sludge volume reduction",
			"ETP / STP sludge handling",
			"Filter-press feed",
		],
	},
	{
		id: "control-panels",
		streams: ["drinking-water", "effluent", "sewage"],
		title: "Control & Automation Panels",
		subtitle: "Custom PLC, MCC & instrumentation panels in-house.",
		tag: "PANELS",
		image: panelPhoto,
		catalogue: CATALOGUES.waterTreatment,
		description:
			"In-house designed and manufactured PLC, MCC and instrumentation panels built to plant load schedules and wired for SCADA integration. Each panel is type-tested, IP-rated and supplied with as-built drawings and full I/O documentation.",
		specs: [
			{ label: "Types", value: "PLC · MCC · PCC · APFC", highlight: true },
			{ label: "Enclosure", value: "IP54 – IP65" },
			{ label: "Control", value: "PLC + HMI · SCADA-ready", highlight: true },
			{ label: "Standard", value: "IS / IEC compliant" },
			{ label: "Build", value: "Type-tested, in-house" },
			{ label: "Docs", value: "As-built + I/O list" },
		],
		videos: [
			{ label: "Panel build", url: "#" },
			{ label: "FAT walkthrough", url: "#" },
		],
		testimonials: [
			{
				quote:
					"Panels arrived fully tested and documented. Commissioning on site took hours, not days.",
				author: "Electrical Lead, Treatment Plant EPC",
			},
		],
		useCases: [
			"Plant automation",
			"Motor control centres",
			"SCADA integration",
			"Power-factor correction",
		],
	},
];

export type CriGroupId = "water" | "green-energy";

export type CriTrack = {
	id: CriStreamId | "biogas-plant" | "biogas-software";
	label: string;
	blurb: string;
	/** For an offering with no products supplied yet: its enquiry panel's copy. */
	overview?: string;
};

/**
 * The products section's filters, in the white patches the 19 Sep change list
 * asks for: Water Treatment — Drinking Water, Effluent, Sewage; Green Energy —
 * Biogas Plant Turnkey Solutions, Biogas Ecosystem Management Software.
 *
 * Every water product carries its streams (see CriProduct). Green Energy has
 * no product documents or photographs yet, so its two offerings show enquiry
 * panels; their one line is the site's own "turnkey compressed biogas
 * solutions" (the home page's Crienviro and Green Energy cards).
 */
export const CRI_FILTERS: {
	id: CriGroupId;
	label: string;
	blurb: string;
	tracks: CriTrack[];
}[] = [
	{
		id: "water",
		label: "Water Treatment",
		blurb:
			"Drinking water, effluent and sewage treatment systems engineered for compliance, efficiency and longevity.",
		tracks: [
			{
				id: "drinking-water",
				label: "Drinking Water",
				blurb:
					"Surface and ground-water treatment to IS 10500, from clarification and filtration to disinfection.",
			},
			{
				id: "effluent",
				label: "Effluent",
				blurb:
					"Oil separation, settling and sludge handling that treat industrial effluent before it is discharged.",
			},
			{
				id: "sewage",
				label: "Sewage",
				blurb:
					"Modular sewage treatment for hospitals, hotels, campuses and townships, with sludge handling and plant control.",
			},
		],
	},
	{
		id: "green-energy",
		label: "Green Energy",
		blurb:
			"Turnkey compressed biogas solutions that turn organic waste into clean, renewable energy.",
		tracks: [
			{
				id: "biogas-plant",
				label: "Biogas Plant Turnkey Solutions",
				blurb:
					"Turnkey compressed biogas plants that turn organic waste into clean, renewable fuel.",
				overview:
					"The full range is being added here. Tell us about your site and the waste you have to work with, and our team will take you through the options that fit.",
			},
			{
				id: "biogas-software",
				label: "Biogas Ecosystem Management Software",
				blurb: "Software to manage the biogas ecosystem around the plant.",
				overview:
					"Its details are being added here. Tell us what you need to monitor and manage, and our team will take you through it.",
			},
		],
	},
];

export const CRI_INDUSTRIES = [
	{
		t: "Municipal Bodies",
		d: "Drinking-water plants and city-scale supply systems.",
	},
	{
		t: "Industrial Estates",
		d: "Effluent plants meeting CETP / SPCB standards.",
	},
	{
		t: "Healthcare",
		d: "Hospital-grade STP / disinfection with strict pathogen control.",
	},
	{
		t: "Hospitality & Real Estate",
		d: "Hotel, township and resort water + sewage systems.",
	},
	{
		t: "Educational Campuses",
		d: "Recycle, reuse and rainwater integration.",
	},
	{
		t: "Manufacturing",
		d: "Process water, RO and zero-liquid-discharge systems.",
	},
];

export const CRI_STANDARDS = [
	"CPCB",
	"SPCB",
	"IS 10500",
	"MoEFCC",
	"WHO Guidelines",
];

export const CRI_STATS = [
	{ value: 70, suffix: "%+", label: "Water Recovery" },
	// { value: 30, suffix: "%+", label: "Energy Optimised" },
	{ value: 100, suffix: "%", label: "Compliant Effluent" },
	{ value: 1, suffix: "M+", label: "Ltrs Water Processed" },
];

export const CRI_FAQ = [
	{
		q: "Do you handle approvals with the pollution-control boards?",
		a: "Yes. Drawings, NOC documentation, consent-to-establish and consent-to-operate filings are all part of our standard scope on regulated projects.",
	},
	{
		q: "Can you retrofit an existing plant instead of building new?",
		a: "Absolutely. Many of our engagements are augmentations or retrofits, adding RO trains, MBBR/MBR upgrades or telemetry to plants already in operation.",
	},
	{
		q: "What does long-term O&M look like?",
		a: "We offer annual O&M contracts that cover routine operation, lab analysis, statutory reporting, consumables, and SLA-bound breakdown response.",
	},
	{
		q: "Do you support zero-liquid-discharge (ZLD) designs?",
		a: "Yes. For industrial clients with high-strength effluent, we design multi-stage RO + evaporation/crystallisation trains to reach ZLD or near-ZLD targets.",
	},
];

export type CriPartner = { name: string; logo: string };

/**
 * Names transcribed from the client logo artwork held in
 * src/assets/clients/Crienviro. These previously carried the placeholder labels
 * "Client 01" … "Client 08", which were also used as the image alt text.
 */
export const CRI_PARTNERS: CriPartner[] = [
	{ name: "CRG Infratech Pvt. Ltd.", logo: client1 },
	{ name: "Shree Gomatesh Education Society, Ankali", logo: client2 },
	{ name: "Pragati Construction", logo: client3 },
	{ name: "Government of Karnataka", logo: client4 },
	{ name: "Client name to be confirmed", logo: client5 },
	{ name: "KOMMI", logo: client6 },
	{ name: "K-BEC", logo: client7 },
	{ name: "GAD", logo: client8 },
];

// Legacy exports kept so any leftover imports from old sections still resolve.
export const SOLUTIONS = CRI_CAPABILITIES.map((c) => c.t);
export const PROJECTS = CRI_PRODUCTS.map((p) => ({
	name: p.title,
	capacity: p.specs[0]?.value ?? "",
	type: p.subtitle,
}));
export const PROCESS = CRI_PROCESS;
export const SECTORS = CRI_INDUSTRIES;
export const COMPLIANCE = CRI_STANDARDS;
export const SUSTAINABILITY = CRI_STATS.map((s) => ({
	k: `${s.value}${s.suffix}`,
	v: s.label,
}));
export const FAQ = CRI_FAQ;

/**
 * "Our thoughts to be future ready — Working towards the NEXT" (17 Sep change
 * list): the group's Industry 4.0 thoughts (see ./next), and where Crienviro's
 * plants already stand — the Operations & Maintenance capability and the ZLD
 * answer from CRI_FAQ, as they read elsewhere on the site.
 */
export const CRI_NEXT: DivisionNextContent = {
	lead: NEXT_LEAD,
	steps: INDUSTRY_4_THOUGHTS,
	standing: {
		title: "Where our plants stand",
		body: "AMC, telemetry, statutory reporting and SLA-bound breakdown response keeping plants compliant and running — and, for industrial clients with high-strength effluent, multi-stage RO + evaporation/crystallisation trains designed to reach ZLD or near-ZLD targets.",
	},
	closing: NEXT_CLOSING,
};
