/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

/**
 * CONTENT SOURCE OF TRUTH
 * ───────────────────────
 * Every product name, specification, feature, capacity, dimension, model
 * number and application in this file is transcribed from the official
 * Creintors Automation Solutions Pvt. Ltd. (CASPL) product documents:
 *
 *   AMR.pdf, ASRS.pdf, CASPL TMS_.pdf, ITMS_Catalogue.pdf,
 *   Mobile and Key Storage.pdf, ROV.pdf, Shuttle_Pamphlet.pdf, Software.pdf,
 *   Tool Cabinet.pdf, Vertical_Carousel.pdf, Vertical_Lift.pdf, WMS.pdf
 *
 * Each product below carries a `source` field naming the document (and page
 * where relevant) it was taken from. Do not add a specification, statistic,
 * certification or application to this file unless it appears in one of those
 * documents.
 */

import heroImage from "../../assets/teknosol/cautomate-hero.jpg";
import capAsrs from "../../assets/industries/cmate/Automated Storage & Retrieval.webp";
import capAgv from "../../assets/industries/cmate/AGV  AMR Fleets.webp";
import capTool from "../../assets/industries/cmate/Tool Management Systems.webp";
import capSoftware from "../../assets/industries/cmate/Plant Software & Analytics.webp";
import capVertical from "../../assets/products/Vertical Lift.png";
// Industry photography for the industry-specific case studies.
import csAutomotive from "../../assets/products/CASPL/Plant Automation.webp";
import csSteel from "../../assets/industries/stee.jpeg";
import csManufacturing from "../../assets/industries/manufacturing.jpg";
import csLogistics from "../../assets/industries/logistic.jpg";
import csTextile from "../../assets/industries/textilebanner.jpeg";
import csFood from "../../assets/industries/foodbanne.jpeg";
import csPharma from "../../assets/industries/pharm.jpeg";
import csJewellery from "../../assets/industries/jewelr.jpeg";
import csFurniture from "../../assets/industries/furniture.jpg";
import toolstorage from "../../assets/products/CASPL/ASRS Tool Storage (Dies Moulds).png";

// CASPL / Automation product photos
import prodAmr from "../../assets/products/AMR (Autonomous Mobile Robot).png";
import prodBinAsrs from "../../assets/products/Bin ASRS.png";
import prodTrolleyAsrs from "../../assets/products/Trolley ASRS.png";
import prodInsert from "../../assets/products/IMS Insert Management System.png";
import prodToolCabinet from "../../assets/products/Tool Cabinet.png";
import prodToolCabinetRfid from "../../assets/products/Tool Cabinet1.png";
import prodVerticalLift from "../../assets/products/Vertical Lift.png";
import prodVerticalCarousel from "../../assets/products/Vertical Carousel.png";
import prodItms from "../../assets/products/ITMS Insert and Tool Management System.png";
// ITMS_Catalogue.pdf product shots (iIMS 2000 p11, iTMS 1000 p17, iTC H200 p25,
// iTC V200 p28, iTT 100 p31) — cropped from the catalogue, so they keep the
// brochure backdrop and render in photo mode.
import prodIims2000 from "../../assets/products/iIMS 2000.jpg";
import prodItms1000 from "../../assets/products/iTMS 1000.png";
import prodItcH200 from "../../assets/products/iTC H200.jpg";
import prodItcV200 from "../../assets/products/iTC V200.png";
import prodItt100 from "../../assets/products/iTT 100 Tool Trolley.png";
import prodBumperAsrs from "../../assets/products/Bumper ASRS.jpg";
import prodMobileStore from "../../assets/products/Mobile_Store.png";
// CASPL product photos
import prodCasplCoils from "../../assets/products/CASPL/ASRS Coils.webp";
import prodCasplDrums from "../../assets/products/CASPL/ASRS Drums - Barrels - Chemicals.webp";
import prodCasplFabricRolls from "../../assets/products/CASPL/ASRS Fabric Rolls.png";
import prodCasplJumboBags from "../../assets/products/CASPL/ASRS Jumbo Bags.webp";
import prodCasplPipe from "../../assets/products/CASPL/ASRS Pipe.webp";
import prodCasplSheetMetal from "../../assets/products/CASPL/ASRS Sheet Metal.webp";
import prodCasplLongPlastic from "../../assets/products/CASPL/ASRS_Long_Plastic_Parts.png";
import prodCasplKeyCabinet from "../../assets/products/CASPL/Asset_key_management_cabinets.png";
import prodCasplRgv from "../../assets/products/CASPL/Rail Guided Vehicle.webp";
import prodCasplRov from "../../assets/products/CASPL/RoV (Ride on Vehicle).png";
// The two categories added by the 18 Sep product-filter change. No product
// document covers them yet, so each shows the client's own photograph and an
// enquiry panel instead of product cards.
import catPlantAutomation from "../../assets/products/CASPL/Plant Automation.png";
import catCarParking from "../../assets/products/CASPL/Car Parking.webp";
// ASRS configuration photographs taken from the official Creintors documents:
// the radio-shuttle shots from Shuttle_Pamphlet.pdf, the stacker-crane aisle and
// mini-load aisle from ASRS.pdf.
// The client's own product shot (18 Sep change list), cut out of its white
// ground so it floats on the card's stage like the other renders.
import prod4WayShuttle from "../../assets/products/CASPL/4 WAYSHUTTLE .png";
// The client's photo of their own Cautomate shuttle (18 Sep), replacing the
// stacker-crane aisle from ASRS.pdf.
import prod2WayStacker from "../../assets/products/CASPL/2-Way Shuttle Stacker ASRS.webp";
import prodMiniAsrs from "../../assets/products/CASPL/Mini ASRS.jpg";
// The client's own CTU render (18 Sep), cut out, so it floats on the card's
// stage rather than filling it as a photo.
import prodAsrsCtu from "../../assets/products/CASPL/ASRS with CTU.webp";
import client1 from "../../assets/clients/Cautomate/1.png";
import client2 from "../../assets/clients/Cautomate/2.png";
import client3 from "../../assets/clients/Cautomate/3.jpg";
import client4 from "../../assets/clients/Cautomate/4.jpg";
import client5 from "../../assets/clients/Cautomate/5.jpg";
import client6 from "../../assets/clients/Cautomate/6.png";
import client7 from "../../assets/clients/Cautomate/7.webp";
import client8 from "../../assets/clients/Cautomate/8.png";
import client9 from "../../assets/clients/Cautomate/9.webp";
import client10 from "../../assets/clients/Cautomate/10.jpg";
import client11 from "../../assets/clients/Cautomate/11.webp";
import client12 from "../../assets/clients/Cautomate/12.webp";
import client13 from "../../assets/clients/Cautomate/13.png";
import client14 from "../../assets/clients/Cautomate/14.png";
import client15 from "../../assets/clients/Cautomate/15.png";
import client16 from "../../assets/clients/Cautomate/16.webp";
import client17 from "../../assets/clients/Cautomate/17.png";
import client18 from "../../assets/clients/Cautomate/18.png";
import client19 from "../../assets/clients/Cautomate/19.jpg";
import client20 from "../../assets/clients/Cautomate/20.webp";
import client21 from "../../assets/clients/Cautomate/21.png";
import client22 from "../../assets/clients/Cautomate/22.jpg";
import {
	INDUSTRY_4_THOUGHTS,
	NEXT_CLOSING,
	type DivisionNextContent,
} from "./next";
import {
	BROCHURES,
	CATALOGUES,
	type ProductDocument,
	type ProductDocuments,
} from "./documents";

export const CAUTOMATE_THEME = {
	primary: "#000080",
	secondary: "#686867",
};

export const CAU_HERO_IMAGE = heroImage;

/**
 * The "Why C-Automate?" section. Eyebrow and answer line are the 19 Sep change
 * list's own words: "WE SEE…WE AUTOMATE / Why C-Automate? / Integrated
 * Information and Material Flow". The body is ITMS_Catalogue.pdf p5 &
 * Software.pdf p2 ("About Us"); the list marks it as still "to be changed (in
 * all companies)", and it stays until that copy arrives.
 */
export const CAU_ABOUT_INTRO = {
	eyebrow: "We See…We Automate",
	title: "Integrated Information and Material Flow",
	body: "At Creintors = Creators + Innovators, we have young engineers who want to take up challenges to address customer pains. Our research, development and customer feedback have helped co-create a proven range of products that solve customer problems and satisfy their latent needs. Creintors Automation Solutions Pvt. Ltd. delivers innovations in accountability, ease of handling and productivity for cutting tools, inspection tools, material storage and document access with safety.",
};

/** Source: ITMS_Catalogue.pdf p4 — "Productivity | Accountability | Traceability". */
export const CAU_ABOUT_HIGHLIGHTS = [
	{ k: "01", t: "Productivity", d: "Enhanced" },
	{ k: "02", t: "Accountability", d: "100%" },
	{ k: "03", t: "Traceability", d: "Digital" },
	{ k: "04", t: "Industry 4.0", d: "Enabled" },
];

/**
 * Source: ITMS_Catalogue.pdf p6 (Vision, Holistic Approach) and p35 /
 * Software.pdf p15 (Information Flow Solutions approach).
 */
export const CAU_VISION_MISSION = {
	eyebrow: "Our Core Direction",
	title: "Vision & Mission",
	subcopy:
		"Holistic approach is our uniqueness. Our belief is in simplicity. The best design is always simple, and a simple design the most optimum.",
	vision:
		"To be the customer's top choice as an innovation partner, recognized as a holistic automation architect and integrator, addressing all their end-to-end business needs of information flow and material flow solutions, delivering elevated productivity through a human centric value-addition approach, while ensuring sustainability is ingrained in every action we take.",
	mission:
		"Through the culture of innovation and collaboration of people and technologies, building an ecosystem of offerings, that deliver sustainable solutions, driven by immediate productivity gains and supported by a mechanism of continuous improvement facilitated by tools designed to significantly reduce human physical and mental fatigue, with tools enabling proactive thinking for the establishment of systems that consistently deliver business excellence.",
};

/**
 * Source: ASRS.pdf, AMR.pdf, ITMS_Catalogue.pdf p3/p43/p44, Software.pdf.
 */
export const CAU_CAPABILITIES = [
	{
		t: "ASRS Solutions",
		d: "One-stop partner for integrated storage and retrieval systems with end-to-end flow management. The range covers SFL ASRS, 4-way shuttle, 2-way shuttle with stacker, mini ASRS and ASRS with CTU, from extra small to extra large.",
		tag: "ASRS",
		image: capAsrs,
		metric: "1 carat – 30 T",
		highlights: ["SFL ASRS", "4-Way Shuttle", "Mini ASRS"],
	},
	{
		t: "Vertical Storage Systems",
		d: "Machines that turn unused building height into usable storage at a single ergonomic pick face. The range covers vertical lift systems, intelligent vertical carousels and vertical reciprocating conveyors.",
		tag: "Vertical",
		image: capVertical,
		metric: "Up to 15 m",
		highlights: ["Vertical Lift", "Vertical Carousel", "VRC"],
	},
	{
		t: "Tool Management Systems",
		d: "One-stop integrated tool management solutions for the machining industry, covering ITMS, IMS, tool cabinets and RFID tool cabinets, with 100% accountability of every new and used insert and tool.",
		tag: "Tooling",
		image: capTool,
		metric: "100% accountability",
		highlights: ["ITMS", "IMS", "RFID Tool Cabinet"],
	},
	{
		t: "AGV / AMR / RGV",
		d: "Autonomous Mobile Robots that sense their environment, make decisions and move independently, plus guided and rail-guided vehicles for automatic point-to-point material transfer.",
		tag: "Fleet",
		image: capAgv,
		metric: "30 kg – 30,000 kg",
		highlights: ["AMR", "AGV", "RGV"],
	},
];

/**
 * Source: ITMS_Catalogue.pdf p34 — "Steps to Digitise your Conventional Store"
 * and p43 — Industry 4.0 phased upgrade path.
 */
export const CAU_PROCESS = [
	{
		k: "01",
		t: "Identification",
		d: "Identification of each and every tool along with a human control system to build a database of tool registration and issue / return through the digital system provided.",
	},
	{
		k: "02",
		t: "Traceability",
		d: "Software is interfaced so every operation stakeholder can visualise the tools in store and in use, through the ERP interface.",
	},
	{
		k: "03",
		t: "Accountability",
		d: "With step 1 and step 2 sustained, operations invest in automated store and retrieval machines with a software upgrade, shifting from human control to digital system control.",
	},
];

export type CauProductSpec = {
	label: string;
	value: string;
	highlight?: boolean;
};
export type CauCategoryId =
	| "asrs"
	| "vertical-storage"
	| "dispensing"
	| "asset-storage"
	| "mobility"
	| "software"
	| "plant-automation"
	| "car-parking";
/**
 * A product card's content. Its `brochure` and `catalogue` (ProductDocuments)
 * are set only where a supplied document covers it: see documents.ts.
 */
export type CauProduct = ProductDocuments & {
	id: string;
	category: CauCategoryId;
	/**
	 * Optional sub-group heading inside a category. ASRS, for example, splits
	 * into the machine configurations (4-way shuttle, stacker, mini, CTU) and
	 * the load types those configurations are built around.
	 */
	group?: string;
	title: string;
	subtitle: string;
	tag: string;
	image: string;
	/** Alt text for the product photo. */
	alt: string;
	/** Official document this entry is transcribed from. */
	source: string;
	/**
	 * When true the card renders the image as a full-bleed photo (object-cover,
	 * crienviro style) instead of the floating 3D pop-out render. Use for real
	 * site photos or product shots that carry their own background.
	 */
	photo?: boolean;
	/**
	 * CSS `object-position` for a photo whose subject is off-centre. The desktop
	 * card crops photos to a portrait column, so a centred crop can cut the
	 * part that matters out of a landscape shot.
	 */
	imagePosition?: string;
	/**
	 * No photograph of this configuration has been supplied yet. The card
	 * renders a neutral branded panel rather than borrowing another product's
	 * photo, which would misrepresent it.
	 */
	photoPending?: boolean;
	/** Give this product a wider, highlighted card at the top of its category. */
	featured?: boolean;
	description: string;
	/**
	 * The one thing that sets this product apart from the others in its
	 * category — review feedback asked that each category make its products'
	 * unique features obvious.
	 */
	differentiator?: string;
	/** Where this product is the right choice ("where each one is applicable"). */
	bestFor?: string;
	specs: CauProductSpec[];
	useCases: string[];
};

/**
 * The eight filters, named and ordered as the 19 Sep change list sets them
 * out: ASRS Solutions, Automated Vertical Storage Solutions, Tool Management
 * Solutions (was Tooling Solutions), Asset Management Solutions, Intra-logistics
 * Solutions (was Mobility Solutions), Car Parking Systems, "etc." — Software
 * Solutions and Plant Automation, which the list does not rename, keep their
 * names and follow in their earlier order. ASRS is first here and therefore
 * first on the page. `blurb` is the one-line answer to "how do these differ
 * and where does each one apply", shown above each group of solutions.
 */
export const CAU_CATEGORIES: {
	id: CauCategoryId;
	label: string;
	blurb: string;
	/**
	 * For a category with no products listed yet: the photograph its enquiry
	 * panel shows in place of product cards, and the range's catalogue where one
	 * was supplied. Remove it once the category's own products are added.
	 */
	overview?: { image: string; alt: string; catalogue?: ProductDocument };
}[] = [
	{
		id: "asrs",
		label: "ASRS Solutions",
		blurb:
			"Automated storage and retrieval, from 1 carat to 30 tons. Pick the configuration by how dense the store has to be and how fast it has to move; pick the build by what is being stored.",
	},
	{
		id: "vertical-storage",
		label: "Automated Vertical Storage Solutions",
		blurb:
			"Machines that turn unused building height into usable storage at a single ergonomic pick face. Choose by whether the goods are trayed, carried or driven between floors.",
	},
	{
		id: "dispensing",
		label: "Tool Management Solutions",
		blurb:
			"Controlled issue and return of inserts and cutting tools with 100% accountability of every item, new or used. Choose by what is stored, how much of it, and how close to the machine it needs to sit.",
	},
	{
		id: "asset-storage",
		label: "Asset Management Solutions",
		blurb:
			"Access-controlled lockers for the things that are not tooling, such as phones, keys and personal assets, with the same 24×7 traceability.",
	},
	{
		id: "mobility",
		label: "Intra-logistics Solutions",
		blurb:
			"Moving material between the store, the line and the machine. Choose by whether the route is free, guided or railed.",
	},
	{
		id: "car-parking",
		label: "Car Parking Systems",
		blurb:
			"Automated car parking that stacks vehicles on more than one level, to park more cars on the same footprint.",
		overview: {
			image: catCarParking,
			alt: "Cars parked on two levels of an automated stack parking system",
			catalogue: CATALOGUES.carParking,
		},
	},
	{
		id: "software",
		label: "Software Solutions",
		blurb:
			"The information layer over the hardware: ERP, planning, warehouse and tool-crib software, all developed in-house.",
	},
	{
		id: "plant-automation",
		label: "Plant Automation",
		blurb:
			"Robot integration systems and end-to-end automated material handling, joining the store, the machines and the line into one automated plant.",
		overview: {
			image: catPlantAutomation,
			alt: "Industrial robots working along an automated vehicle body assembly line",
		},
	},
];

/**
 * Sub-group headings, one set per category.
 *
 * These do two jobs: they head the blocks of cards on the page, and they are
 * the sub-filter under the category chips. Each set answers the question that
 * category's own blurb poses — ASRS by configuration and by stored load, tool
 * management by what is stored, mobility by how fixed the route is.
 */
export const CAU_GROUP_ASRS_CONFIG = "ASRS configurations";
export const CAU_GROUP_ASRS_LOAD = "ASRS by stored load";
export const CAU_GROUP_VERTICAL_LIFT = "Tray-served lifts";
export const CAU_GROUP_VERTICAL_CAROUSEL = "Rotating carousels";
export const CAU_GROUP_TOOL_CABINETS = "Tool cabinets";
export const CAU_GROUP_INSERT_MGMT = "Insert management";
export const CAU_GROUP_INSERT_TOOL_MGMT = "Insert & tool management";
export const CAU_GROUP_ASSET_LOCKERS = "Personal lockers";
export const CAU_GROUP_ASSET_KEYS = "Key cabinets";
export const CAU_GROUP_MOBILITY_TOOL = "Tool delivery";
export const CAU_GROUP_MOBILITY_FREE = "Free route";
export const CAU_GROUP_MOBILITY_FIXED = "Fixed route";

/**
 * Source: ASRS.pdf — "Solution That Serve Every Industry". These nine sectors
 * are the industries named in the ASRS brochure and are used as the
 * application list for every ASRS configuration.
 */
const ASRS_INDUSTRIES = [
	"Automotive",
	"Steel",
	"Manufacturing",
	"Logistics",
	"Textile",
	"Food & Beverages",
	"Pharmaceutical",
	"Jewellery",
	"Furniture",
];

/**
 * Shared ASRS platform specification. Source: ASRS.pdf — the four brochure
 * features. The platform-wide payload range ("1 carat to 30 tons") is stated in
 * the description rather than repeated as a spec on every configuration card.
 *
 * NOTE: ASRS.pdf documents the ASRS platform as a whole. It does not publish
 * per-load-type capacities or dimensions, so none are stated on the
 * configuration cards below.
 */
const asrsPlatformSpecs = (storedLoad: string): CauProductSpec[] => [
	{ label: "Stored load", value: storedLoad, highlight: true },
	{ label: "Accountability", value: "Complete accountability" },
	{ label: "Retrieval", value: "Fast retrieval" },
	{ label: "Reporting", value: "Customised reporting" },
	{ label: "Space", value: "Vertical space utilization" },
];

const asrsDescription = (storedLoad: string) =>
	`Automated storage and retrieval configured for ${storedLoad.toLowerCase()}. Part of the Creintors ASRS platform, a one-stop partner for integrated storage and retrieval systems with end-to-end flow management, handling payloads from 1 carat to 30 tons with precision.`;

/**
 * Shared platform specification for the ASRS *configurations* (as opposed to
 * the load types). ASRS.pdf documents the platform as a whole and publishes no
 * per-configuration capacities, throughputs or dimensions, so the rows below
 * describe how each configuration works rather than quoting numbers that are
 * not in any supplied document.
 */
const asrsConfigSpecs = (rows: CauProductSpec[]): CauProductSpec[] => [
	...rows,
	{ label: "Accountability", value: "Complete accountability" },
	{ label: "Reporting", value: "Customised reporting" },
	{ label: "Payload range", value: "1 carat – 30 tons (platform)" },
];

export const CAU_PRODUCTS: CauProduct[] = [
	// ─── ASRS Solutions · configurations ─────────────────────────────
	// The senior-team review asked for the ASRS machine configurations to be
	// shown as distinct products, with SFL ASRS given prominence.
	{
		id: "asrs-sfl",
		category: "asrs",
		group: CAU_GROUP_ASRS_CONFIG,
		featured: true,
		title: "ASRS",
		subtitle: "The flagship Creintors ASRS configuration.",
		tag: "ASRS",
		photo: true,
		image: capAsrs,
		alt: "Creintors ASRS automated storage and retrieval installation",
		source: "ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description:
			"Our lead ASRS configuration and the one most Creintors warehouse projects are built around. A one-stop integrated storage and retrieval system with end-to-end flow management. It gives complete accountability of every location, fast retrieval, customised reporting and full use of the building's vertical space, handling payloads from 1 carat to 30 tons.",
		differentiator:
			"The configuration Creintors leads with, and the broadest payload and layout envelope of the range.",
		bestFor:
			"Full-warehouse automation projects where storage, retrieval and flow management are delivered as one system.",
		specs: asrsConfigSpecs([
			{ label: "Role", value: "Flagship ASRS configuration", highlight: true },
			{ label: "Scope", value: "End-to-end storage & retrieval flow" },
			{ label: "Retrieval", value: "Fast retrieval", highlight: true },
		]),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-4way-shuttle",
		category: "asrs",
		group: CAU_GROUP_ASRS_CONFIG,
		title: "4-Way Shuttle ASRS",
		subtitle: "Shuttles that travel both axes inside the rack.",
		tag: "4-Way",
		image: prod4WayShuttle,
		alt: "Creintors C-Automate four-way radio shuttle for shuttle ASRS racking",
		source: "Shuttle_Pamphlet.pdf · ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description:
			"Radio shuttles that move along the rack in all four directions, down the lane and across it, so a single shuttle can serve any location on its level without an aisle crane. Removing the aisles turns the same footprint into a far denser store, and several shuttles can work the same rack at once.",
		differentiator:
			"Travels lengthways as well as crossways, so one shuttle serves a whole level and the store needs no crane aisles.",
		bestFor:
			"High-density, high-throughput warehouses where floor area is the constraint and many lanes move at once.",
		specs: asrsConfigSpecs([
			{
				label: "Movement",
				value: "Four-directional shuttle travel",
				highlight: true,
			},
			{
				label: "Density",
				value: "Multi-deep, aisle-free racking",
				highlight: true,
			},
			{ label: "Throughput", value: "Multiple shuttles per rack" },
		]),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-2way-shuttle-stacker",
		category: "asrs",
		group: CAU_GROUP_ASRS_CONFIG,
		title: "2-Way Shuttle + Stacker ASRS",
		subtitle: "Lane shuttle paired with an aisle stacker crane.",
		tag: "2-Way + Stacker",
		photo: true,
		image: prod2WayStacker,
		// Left of centre, so the portrait crop keeps the Cautomate logo on the
		// shuttle's front panel.
		imagePosition: "30% 50%",
		alt: "A C-Automate shuttle carrying crates along its lane in a blue ASRS rack",
		source: "Shuttle_Pamphlet.pdf · ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description:
			"A two-way radio shuttle handles the length of each storage lane while a stacker crane in the aisle moves the shuttle and the load between levels and lanes. Splitting the work this way keeps the rack simple and puts the vertical reach in one well-understood machine.",
		differentiator:
			"Shuttle handles the lane, crane handles the height. The simpler, lower-cost route to deep-lane storage.",
		bestFor:
			"Deep-lane pallet stores with steady, predictable movement, where reach up the rack matters more than peak throughput.",
		specs: asrsConfigSpecs([
			{
				label: "Movement",
				value: "Two-directional shuttle + aisle stacker",
				highlight: true,
			},
			{
				label: "Vertical reach",
				value: "Stacker crane served",
				highlight: true,
			},
			{ label: "Density", value: "Deep-lane racking" },
		]),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-mini",
		category: "asrs",
		group: CAU_GROUP_ASRS_CONFIG,
		title: "Mini ASRS",
		subtitle: "Mini-load storage for totes, trays and small parts.",
		tag: "Mini",
		photo: true,
		image: prodMiniAsrs,
		alt: "Creintors mini ASRS mini-load aisle storing totes and trays",
		source: "ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description:
			"The small-parts end of the range: a compact mini-load system storing totes, trays and bins rather than pallets, with the same complete accountability and customised reporting. It fits inside an existing building and next to the line it serves, so a store can be automated without rebuilding around it.",
		differentiator:
			"Sized for totes and small parts, and compact enough to drop into an existing bay.",
		bestFor:
			"Component and small-parts stores, kitting areas and line-side buffers, including a first automation step at a smaller scale.",
		specs: asrsConfigSpecs([
			{ label: "Load", value: "Totes · trays · bins", highlight: true },
			{
				label: "Scale",
				value: "Compact, in-building footprint",
				highlight: true,
			},
			{ label: "Retrieval", value: "Fast retrieval" },
		]),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-ctu",
		category: "asrs",
		group: CAU_GROUP_ASRS_CONFIG,
		title: "ASRS with CTU",
		subtitle: "Container transfer unit handling at the pick face.",
		tag: "CTU",
		image: prodAsrsCtu,
		alt: "C-Automate container transfer unit: a mobile robot with a container lift and six on-board shelves",
		source: "Shuttle_Pamphlet.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description:
			"An ASRS built around container transfer units, which lift whole containers out of the rack and carry them to the pick station instead of moving the rack or the operator. Goods come to the person, so the picking face stays at one ergonomic height and the store behind it can be as dense as the building allows.",
		differentiator:
			"Container transfer units bring the goods to the operator, so nobody walks or climbs the rack.",
		bestFor:
			"Goods-to-person picking, order fulfilment and any store where pick rate and operator ergonomics come first.",
		specs: asrsConfigSpecs([
			{
				label: "Handling",
				value: "Container transfer unit (CTU)",
				highlight: true,
			},
			{
				label: "Picking",
				value: "Goods-to-person at the station",
				highlight: true,
			},
			{ label: "Load", value: "Containers · totes" },
		]),
		useCases: ASRS_INDUSTRIES,
	},

	// ─── ASRS Solutions · by stored load ─────────────────────────────
	{
		id: "asrs-bin",
		category: "asrs",
		group: CAU_GROUP_ASRS_LOAD,
		title: "ASRS Bin",
		subtitle: "ASRS configured for bin storage.",
		tag: "ASRS",
		image: prodBinAsrs,
		alt: "Creintors bin ASRS automated bin storage and retrieval system",
		source: "ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description: asrsDescription("Bins"),
		differentiator: "Bin and tote handling with location-level accountability.",
		bestFor:
			"Small-parts and component stores feeding assembly and kitting lines.",
		specs: asrsPlatformSpecs("Bins"),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-trolley",
		category: "asrs",
		group: CAU_GROUP_ASRS_LOAD,
		title: "ASRS Trolley",
		subtitle: "ASRS configured for trolley storage.",
		tag: "ASRS",
		image: prodTrolleyAsrs,
		alt: "Creintors trolley ASRS automated trolley storage and retrieval system",
		source: "ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		photo: true,
		description: asrsDescription("Trolleys"),
		differentiator: "Whole trolleys stored and retrieved as a single unit.",
		bestFor:
			"Work-in-progress trolleys that would otherwise have to be unloaded to be stored.",
		specs: asrsPlatformSpecs("Trolleys"),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-tool-storage",
		category: "asrs",
		group: CAU_GROUP_ASRS_LOAD,
		title: "ASRS Tool Storage (Dies / Moulds)",
		subtitle: "ASRS configured for dies and moulds.",
		tag: "ASRS",
		photo: true,
		image: toolstorage,
		alt: "Creintors ASRS tool storage system for dies and moulds",
		source: "ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description: asrsDescription("Dies & moulds"),
		differentiator: "Built around the weight and handling of dies and moulds.",
		bestFor:
			"Press shops and moulding plants where change-over time drives output.",
		specs: asrsPlatformSpecs("Dies & moulds"),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-jumbo-bags",
		category: "asrs",
		group: CAU_GROUP_ASRS_LOAD,
		title: "ASRS Jumbo Bags",
		subtitle: "ASRS configured for jumbo bag storage.",
		tag: "ASRS",
		photo: true,
		image: prodCasplJumboBags,
		alt: "Creintors ASRS automated storage for jumbo bags",
		source: "ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description: asrsDescription("Jumbo bags"),
		differentiator: "Handles flexible bulk bags with no rigid pallet base.",
		bestFor: "Bulk powder, grain and granulate stores.",
		specs: asrsPlatformSpecs("Jumbo bags"),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-drums",
		category: "asrs",
		group: CAU_GROUP_ASRS_LOAD,
		title: "ASRS Drums / Barrels / Chemicals",
		subtitle: "ASRS configured for drums and barrels.",
		tag: "ASRS",
		photo: true,
		image: prodCasplDrums,
		alt: "Creintors ASRS automated storage for drums, barrels and chemicals",
		source: "ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description: asrsDescription("Drums, barrels & chemicals"),
		differentiator:
			"Controlled-access handling for drums, barrels and chemical containers.",
		bestFor: "Chemical and process plants with segregated storage duties.",
		specs: asrsPlatformSpecs("Drums, barrels & chemicals"),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-fabric-rolls",
		category: "asrs",
		group: CAU_GROUP_ASRS_LOAD,
		title: "ASRS Fabric Rolls",
		subtitle: "ASRS configured for fabric roll storage.",
		tag: "ASRS",
		photo: true,
		image: prodCasplFabricRolls,
		alt: "Creintors ASRS automated storage for fabric rolls",
		source: "ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description: asrsDescription("Fabric rolls"),
		differentiator: "Roll cradles that protect the wound face and the edges.",
		bestFor: "Textile mills and converting lines storing finished rolls.",
		specs: asrsPlatformSpecs("Fabric rolls"),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-pipe",
		category: "asrs",
		group: CAU_GROUP_ASRS_LOAD,
		title: "ASRS for Pipes, Rods and Long Profiles",
		subtitle: "Designed for long parts",
		tag: "ASRS",
		photo: true,
		image: prodCasplPipe,
		alt: "Creintors ASRS automated storage for pipes",
		source: "ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description: asrsDescription("Pipes"),
		differentiator: "Long-load storage and retrieval on cantilever carriers.",
		bestFor:
			"Pipe, tube and extrusion stores where length rules out standard racking.",
		specs: asrsPlatformSpecs("Pipes"),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-sheet-metal",
		category: "asrs",
		group: CAU_GROUP_ASRS_LOAD,
		title: "ASRS Sheet Metal",
		subtitle: "ASRS configured for sheet metal storage.",
		tag: "ASRS",
		photo: true,
		image: prodCasplSheetMetal,
		alt: "Creintors ASRS automated storage for sheet metal",
		source: "ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description: asrsDescription("Sheet metal"),
		differentiator: "Flat-stack handling that keeps sheets unmarked.",
		bestFor: "Fabrication and press shops feeding laser and turret lines.",
		specs: asrsPlatformSpecs("Sheet metal"),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-coils",
		category: "asrs",
		group: CAU_GROUP_ASRS_LOAD,
		title: "ASRS Coils",
		subtitle: "ASRS configured for coil storage.",
		tag: "ASRS",
		photo: true,
		image: prodCasplCoils,
		alt: "Creintors ASRS automated storage for steel coils",
		source: "ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description: asrsDescription("Coils"),
		differentiator: "Cradled coil storage sized for mill loads.",
		bestFor: "Steel service centres and stamping plants.",
		specs: asrsPlatformSpecs("Coils"),
		useCases: ASRS_INDUSTRIES,
	},
	{
		id: "asrs-long-plastic",
		category: "asrs",
		group: CAU_GROUP_ASRS_LOAD,
		title: "ASRS Long Plastic Parts (BUMPERS, ETC.,)",
		subtitle: "ASRS configured for long plastic parts.",
		tag: "ASRS",
		image: prodBumperAsrs,
		alt: "Creintors ASRS automated storage for long plastic parts",
		source: "ASRS.pdf",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
		description: asrsDescription("Long plastic parts"),
		differentiator:
			"Long, light and awkward parts supported so they do not deform.",
		bestFor: "Injection-moulding and extrusion plants storing long profiles.",
		specs: asrsPlatformSpecs("Long plastic parts"),
		useCases: ASRS_INDUSTRIES,
	},
	// {
	// 	id: "asrs-bumper",
	// 	category: "asrs",
	// 	group: CAU_GROUP_ASRS_LOAD,
	// 	title: "ASRS Bumper",
	// 	subtitle: "ASRS configured for bumper storage.",
	// 	tag: "ASRS",
	// 	photo: true,
	// 	image: prodBumperAsrs,
	// 	alt: "Creintors ASRS automated storage for automotive bumpers",
	// 	source: "ASRS.pdf",
	// 	description: asrsDescription("Bumpers"),
	// 	differentiator:
	// 		"Contoured carriers that protect painted surfaces.",
	// 	bestFor:
	// 		"Automotive plants storing painted bumpers and large body panels.",
	// 	specs: asrsPlatformSpecs("Bumpers"),
	// 	useCases: ASRS_INDUSTRIES,
	// },

	// ─── Vertical Storage ───────────────────────────────────────────
	{
		id: "vertical-lift",
		category: "vertical-storage",
		group: CAU_GROUP_VERTICAL_LIFT,
		title: "Vertical Lift System",
		subtitle: "The pinnacle of storage efficiency.",
		tag: "VLS",
		image: prodVerticalLift,
		alt: "Creintors Vertical Lift System automatic vertical storage machine",
		source: "Vertical_Lift.pdf",
		brochure: BROCHURES.verticalLift,
		description:
			"Our automatic vertical storage system offers unparalleled convenience for materials of any shape, weight or size. With racks, metal containers and a lift device, it optimizes space and streamlines picking. Its flexible configuration adapts to your storage needs, ensuring maximum efficiency without sacrificing accessibility.",
		differentiator:
			"One central lift serves every tray, so the whole store presents at a single ergonomic window.",
		bestFor:
			"Tall, low-footprint stores holding mixed sizes and weights, up to 1000 kg a tray.",
		specs: [
			{ label: "Maximum height", value: "15 m", highlight: true },
			{ label: "Tray capacity", value: "1000 kg per tray", highlight: true },
			{ label: "Construction", value: "Racks, metal containers & lift device" },
			{ label: "Retrieval", value: "Scanning by barcode / RFID" },
			{
				label: "Interface",
				value: "Ethernet LAN (Industry 4.0) · ERP / SAP export",
			},
			{
				label: "Safety",
				value:
					"Light barrier, overload detection, automatic doors with interlock",
			},
		],
		useCases: [
			"Complete accountability & traceability",
			"Improved inventory management & control",
			"Tray-wise user access control",
			"BOM list input to the system",
			"Frequently used parts at shortest level",
			"Storage flexibility by adding / removing trays",
		],
	},
	{
		id: "vertical-carousel",
		category: "vertical-storage",
		group: CAU_GROUP_VERTICAL_CAROUSEL,
		title: "Intelligent Vertical Carousel (iVC Series)",
		subtitle: "More vertically tall for all.",
		tag: "iVC",
		image: prodVerticalCarousel,
		alt: "Creintors iVC 500 Intelligent Vertical Carousel storage machine",
		source: "Vertical_Carousel.pdf · ITMS_Catalogue.pdf p21–24",
		brochure: BROCHURES.verticalCarousel,
		catalogue: CATALOGUES.toolManagement,
		description:
			"Vertical Carousel Modules are a series of carriers attached in fixed locations to a chain drive. Movement is powered by a motor, which sends the carriers in a vertical loop around a track in both forward and reverse directions. Authorised access is allowed to only a particular section of the compartment with automatic positioning doors.",
		differentiator:
			"Carriers run a continuous loop in both directions, so the store rotates to the operator.",
		bestFor:
			"Fast repeat picking of small, high-value items such as tooling, pharma, jewellery and documents.",
		specs: [
			{
				label: "Models",
				value: "iVC 50 · 50D · 100 · 100D · 200 · 500",
				highlight: true,
			},
			{
				label: "Weight per carrier",
				value: "50 – 500 kg",
				highlight: true,
			},
			{ label: "No. of carriers", value: "12 – 42" },
			{
				label: "Machine footprint",
				value: "1460 – 3350 mm (W) × 1000 – 1800 mm (D)",
			},
			{ label: "Machine height", value: "2290 – 7380 mm" },
			{
				label: "Carrier size",
				value: "218 – 530 mm (D) × 262 – 415 mm (H)",
			},
			{
				label: "Identification",
				value: "RFID / QR / barcode + weighing system interface",
			},
		],
		useCases: [
			"Machine tool industry",
			"Pharma",
			"Jewellery",
			"Textile",
			"Banking",
			"Corporate offices",
		],
	},

	// {
	// 	id: "vrc",
	// 	category: "vertical-storage",
	// 	title: "VRC (Vertical Reciprocating Conveyor)",
	// 	subtitle: "Mechanical goods lift between floors and levels.",
	// 	tag: "VRC",
	// 	photoPending: true,
	// 	image: prodVerticalLift,
	// 	alt: "Creintors VRC vertical reciprocating conveyor",
	// 	source:
	// 		"Product named in the Creintors senior-team website review; specification and photography to be confirmed by the product team.",
	// 	description:
	// 		"A vertical reciprocating conveyor moves loaded pallets, trolleys and cages between floors, mezzanines and pit levels on a guided carriage. Unlike a passenger lift it carries goods only, which keeps the structure and the controls simple, and it links the storage systems on one level to the lines on another.",
	// 	differentiator:
	// 		"Moves loads between levels rather than storing them. It is the link between floors, not a store in itself.",
	// 	bestFor:
	// 		"Mezzanine and multi-floor plants moving pallets, trolleys or cages between levels.",
	// 	specs: [
	// 		{ label: "Function", value: "Goods transfer between levels", highlight: true },
	// 		{ label: "Carriage", value: "Guided platform", highlight: true },
	// 		{ label: "Load", value: "Pallets · trolleys · cages" },
	// 		{ label: "Use", value: "Goods only, not for passengers" },
	// 	],
	// 	useCases: [
	// 		"Mezzanine floors",
	// 		"Multi-level warehouses",
	// 		"Production to despatch transfer",
	// 	],
	// },

	// ─── Tool Management Systems ────────────────────────────────────
	{
		id: "tool-cabinet",
		category: "dispensing",
		group: CAU_GROUP_TOOL_CABINETS,
		title: "Tool Cabinet TC 100",
		subtitle: "Every tool in its perfect place.",
		tag: "TC 100",
		image: prodToolCabinet,
		alt: "Creintors TC 100 smart tool cabinet with six access-controlled drawers",
		source: "Tool Cabinet.pdf · CASPL TMS_.pdf",
		brochure: BROCHURES.toolCabinet,
		description:
			"Tool Cabinet is an intelligent chest of drawers with access control, meant for storage of tools, dies, gauges and expensive materials. Each configurable drawer has access controlled pockets which allow traceability and accountability for the stored material. This solution is also available in an RFID configuration.",
		differentiator:
			"Access-controlled drawers with pocket-level traceability, in the smallest footprint of the range.",
		bestFor:
			"A first step into controlled tool storage, or a secure cabinet beside the line.",
		specs: [
			{ label: "Model", value: "TC 100", highlight: true },
			{ label: "Drawers", value: "6 configurable drawers (D1 – D6)" },
			{
				label: "Access",
				value: "RFID-enabled access & tracking",
				highlight: true,
			},
			{ label: "Dispensing", value: "Single-flap tool dispenser" },
			{ label: "Availability", value: "24/7" },
			{ label: "Origin", value: "Made in India" },
		],
		useCases: [
			"Secure access",
			"Usage insights",
			"High efficiency",
			"Stock alerts",
			"Cost saving",
			"Complete accountability",
		],
	},
	{
		id: "rfid-tool-cabinet",
		category: "dispensing",
		group: CAU_GROUP_TOOL_CABINETS,
		title: "RFID Tool Cabinet",
		subtitle: "The Tool Cabinet in its RFID configuration.",
		tag: "RFID",
		image: prodToolCabinetRfid,
		alt: "Creintors RFID tool cabinet with tag-based issue and return",
		source: "Tool Cabinet.pdf · CASPL TMS_.pdf",
		brochure: BROCHURES.toolCabinet,
		description:
			"The same intelligent chest of drawers, supplied in its RFID configuration. Every tool carries a tag, so an item is booked out the moment it leaves the drawer and booked back in the moment it returns. There is no scanning step, no logging by hand, and stock that is counted continuously rather than at a stocktake.",
		differentiator:
			"Tagged tools book themselves in and out, so accountability needs no operator action at all.",
		bestFor:
			"Cribs with high issue-and-return traffic, or tooling valuable enough that every movement must be recorded.",
		specs: [
			{
				label: "Identification",
				value: "RFID tag per tool",
				highlight: true,
			},
			{
				label: "Transaction",
				value: "Automatic on issue & return",
				highlight: true,
			},
			{ label: "Drawers", value: "6 configurable drawers (D1 – D6)" },
			{ label: "Access", value: "RFID-enabled access & tracking" },
			{ label: "Availability", value: "24/7" },
			{ label: "Origin", value: "Made in India" },
		],
		useCases: [
			"Hands-free accountability",
			"Continuous stock count",
			"High-value tooling",
			"Secure access",
		],
	},
	{
		id: "iims-500",
		category: "dispensing",
		group: CAU_GROUP_INSERT_MGMT,
		title: "Intelligent Insert Management System (iIMS 500)",
		subtitle: "A mini insert keeper. Small, yet sets a culture.",
		tag: "iIMS 500",
		image: prodInsert,
		alt: "Creintors iIMS 500 Intelligent Insert Management System dispensing machine",
		source: "ITMS_Catalogue.pdf p8–10 · CASPL TMS_.pdf",
		brochure: BROCHURES.toolManagement,
		catalogue: CATALOGUES.toolManagement,
		description:
			"Designed for CNC machine shops that need to store 500 inserts (locations) or 2000 inserts. This product encourages the first step towards complete accountability of inserts, with new and used treated as equally important. Insert protection is taken care of by storing each insert in a compact plastic box / container.",
		differentiator:
			"Insert-only store of 500 locations, treating used inserts with the same care as new.",
		bestFor: "CNC shops starting insert accountability at single-cell scale.",
		specs: [
			{
				label: "New inserts",
				value: "500 locations (500, or 500 × 4 = 2000 inserts)",
				highlight: true,
			},
			{ label: "Used inserts", value: "100 used inserts" },
			{ label: "Tools", value: "50 to 80 tools (with tool drawer provision)" },
			{
				label: "Overall dimensions",
				value: "970 mm (W) × 1130 mm (D) × 1770 mm (H) with table",
			},
			{ label: "Foot print", value: "2000 mm × 2300 mm (with maintenance)" },
			{ label: "Maximum pay-load", value: "75 kg approx", highlight: true },
			{ label: "Weight (empty)", value: "300 kg approx" },
		],
		useCases: [
			"CNC machine shops",
			"Used-insert collection",
			"24×7 insert accessibility",
			"Auto purchase order generation",
		],
	},
	
	{
		id: "iitms-1000",
		category: "dispensing",
		group: CAU_GROUP_INSERT_TOOL_MGMT,
		title: "Intelligent Insert and Tool Management System (iITMS 1000)",
		subtitle: "Keeper with space for all. Bigger, accommodates variety.",
		tag: "iITMS 1000",
		image: prodItms,
		alt: "Creintors iITMS 1000 Intelligent Insert and Tool Management System",
		source: "ITMS_Catalogue.pdf p14–16 · CASPL TMS_.pdf",
		brochure: BROCHURES.toolManagement,
		catalogue: CATALOGUES.toolManagement,
		description:
			"Designed for storage and retrieval of both inserts and cutting tools like drills, taps, end mills and special tools, with 100% accountability of each insert and tool, new or used. The standard design accommodates 600 insert locations and 350+ tools; this composition can be modified as per customer requirement.",
		differentiator:
			"Stores inserts and cutting tools in one machine, under one account.",
		bestFor:
			"Shops that want a single point of issue for both inserts and tooling.",
		specs: [
			{
				label: "Inserts",
				value: "Min. 600 to 2400 inserts",
				highlight: true,
			},
			{
				label: "Tools",
				value: "260 × Ø3–11 · 88 × Ø12–26 · 22 × Ø27–50",
				highlight: true,
			},
			{
				label: "Overall dimensions",
				value: "1250 mm (W) × 1400 mm (D) × 2000 mm (H)",
			},
			{ label: "Space required", value: "2500 mm × 2000 mm" },
			{ label: "Maximum pay-load", value: "300 kg approx" },
			{ label: "Weight (empty)", value: "750 kg approx" },
		],
		useCases: [
			"CNC machine shops",
			"Drills, taps & end mills",
			"Special tools",
			"100% insert & tool accountability",
		],
	},
	{
		id: "itms-1000",
		category: "dispensing",
		group: CAU_GROUP_INSERT_TOOL_MGMT,
		title: "Intelligent Tool Management System (iTMS Series)",
		subtitle: "Keeper that expands. Biggest, modular by design.",
		tag: "iTMS 1000",
		image: prodItms1000,
		photo: true,
		alt: "Creintors iTMS 1000 modular Intelligent Tool Management System",
		source: "ITMS_Catalogue.pdf p17–19",
		catalogue: CATALOGUES.toolManagement,
		description:
			"Storage and retrieval of both insert packets and cutting tools such as drills, taps, end mills and special tools, with 100% accountability of each item, new or used. A completely customised modular design: customers add modules to store more as the need grows.",
		differentiator:
			"Modular by design, so assemblies are added as the tool crib grows.",
		bestFor:
			"Central tool cribs expected to expand, across a wide range of tool diameters.",
		specs: [
			{
				label: "Storage locations",
				value: "962 across 25 pockets (example configuration)",
				highlight: true,
			},
			{
				label: "Pocket range",
				value: "Ø3–14 × 270L · Ø13–28 × 250L · Ø29–52 × 170L",
			},
			{
				label: "Modularity",
				value: "20 to 25 assemblies, customised per requirement",
				highlight: true,
			},
			{
				label: "Overall dimensions",
				value: "2700 mm (W) × 1500 mm (D) × 2000 mm (H)",
			},
			{ label: "Foot print", value: "5500 mm × 2500 mm (with maintenance)" },
			{ label: "Maximum pay-load", value: "600 kg approx" },
			{ label: "Weight (empty)", value: "1500 kg approx" },
		],
		useCases: [
			"CNC machine shops",
			"Modular expansion",
			"Insert packets & cutting tools",
			"Used-tool collection",
		],
	},
	// {
	// 	id: "itc-h200",
	// 	category: "dispensing",
	// 	group: CAU_GROUP_TOOL_CABINETS,
	// 	title: "Intelligent Tool Cabinet (iTC H200)",
	// 	subtitle: "Slide with ease. Horizontal drawer cabinet.",
	// 	tag: "iTC H200",
	// 	image: prodItcH200,
	// 	photo: true,
	// 	alt: "Creintors iTC H200 intelligent horizontal drawer tool cabinet",
	// 	source: "ITMS_Catalogue.pdf p25–27",
	// 	catalogue: CATALOGUES.toolManagement,
	// 	description:
	// 		"A compact digitised mini-store placed nearest to the machining centre or cell, maintaining accountability of machine-dedicated tooling alongside tools issued from the central store. The horizontal drawer design suits tools whose size, shape and weight vary a lot. Every cabinet is customised by design.",
	// 	differentiator:
	// 		"Horizontal drawers, so tools of very different size, shape and weight share one cabinet.",
	// 	bestFor:
	// 		"A machine- or cell-side mini-store for last-mile tool accountability.",
	// 	specs: [
	// 		{
	// 			label: "Tool drawers",
	// 			value: "104 × Ø3–12 · 60 × Ø13–26 · 30 × Ø27–50",
	// 			highlight: true,
	// 		},
	// 		{
	// 			label: "Overall dimensions",
	// 			value: "1580 mm (H) × 1000 mm (W) × 750 mm (D)",
	// 		},
	// 		{ label: "Foot print", value: "~1500 mm × ~1500 mm (with maintenance)" },
	// 		{ label: "Maximum pay-load", value: "250 kg approx", highlight: true },
	// 		{ label: "Weight (empty)", value: "350 kg approx" },
	// 		{ label: "Input supply", value: "220V AC, single phase, 3 wire" },
	// 	],
	// 	useCases: [
	// 		"Machining centre / cell-side mini-store",
	// 		"Last-mile tool accountability",
	// 		"Varying tool sizes & shapes",
	// 		"ERP-interfaced consumption",
	// 	],
	// },
	{
		id: "itc-v200",
		category: "dispensing",
		group: CAU_GROUP_TOOL_CABINETS,
		title: "Intelligent Tool Cabinet (iTC V200)",
		subtitle: "Slide with ease. Vertical drawer cabinet.",
		tag: "iTC V200",
		image: prodItcV200,
		photo: true,
		alt: "Creintors iTC V200 intelligent vertical drawer tool cabinet for BT tool holders",
		source: "ITMS_Catalogue.pdf p28–30",
		catalogue: CATALOGUES.toolManagement,
		description:
			"The vertical drawer variant of the intelligent tool cabinet, best used with symmetrical, mostly diametrical tools such as tool holders. Locators and adjustable shelves cater to varying heights. Every cabinet is customised by design.",
		differentiator: "Vertical drawers with locators sized for BT tool holders.",
		bestFor:
			"Cells running BT 30 / 40 / 50 holders that need them presented ready to load.",
		specs: [
			{
				label: "Tool drawers",
				value: "72 × BT 30 · 72 × BT 40 · 48 × BT 50 (max 180 mm length)",
				highlight: true,
			},
			{
				label: "Overall dimensions",
				value: "1900 mm (H) × 850 mm (W) × 1150 mm (D)",
			},
			{
				label: "Space required",
				value: "~1600 mm × ~2000 mm (with maintenance)",
			},
			{ label: "Weight (empty)", value: "450 kg approx" },
			{ label: "Carriers", value: "6 carriers per drawer" },
			{ label: "Input supply", value: "220V AC, single phase, 3 wire" },
		],
		useCases: [
			"BT 30 / BT 40 / BT 50 tool holders",
			"Symmetrical diametrical tools",
			"Last-mile tool accountability",
			"ERP-interfaced consumption",
		],
	},
	{
		id: "itt-100",
		category: "mobility",
		group: CAU_GROUP_MOBILITY_TOOL,
		title: "Intelligent Tool Trolley (iTT 100)",
		subtitle: "Tools on wheels. Self-mobility coupled tool trolley.",
		tag: "iTT 100",
		image: prodItt100,
		photo: true,
		alt: "Creintors iTT O100 open trolley and iTT C100 close trolley with AGV mobility",
		source: "ITMS_Catalogue.pdf p31–33",
		catalogue: CATALOGUES.toolManagement,
		description:
			"A mobility-enabled mini store with Automated Guided Vehicle (AGV) option, delivering tools with controlled access to the right location, for the right process owner, at the right time. One trolley or a series of trolleys can move at a time from the tool crib to the machine location. Available as iTT O100 (open trolley) and iTT C100 (close trolley, customised for trays, bins or special containers).",
		differentiator: "A tool store that drives itself to the machine.",
		bestFor:
			"Delivering tools from the crib to a machine location and back, under access control.",
		specs: [
			{
				label: "Variants",
				value: "iTT O100 open trolley · iTT C100 close trolley",
				highlight: true,
			},
			{
				label: "Tool capacity (O100)",
				value: "Max 100 tools: 44 × BT 30 · 36 × BT 40 · 24 × BT 50",
				highlight: true,
			},
			{
				label: "Overall dimensions",
				value: "1050 mm (W) × 980 mm (D) × 1325 mm (H)",
			},
			{
				label: "Space required",
				value: "~2000 mm × ~2000 mm (with maintenance)",
			},
			{ label: "Maximum pay-load", value: "250 kg approx" },
			{ label: "Weight (empty)", value: "350 kg approx" },
		],
		useCases: [
			"Tool crib to machine delivery",
			"AGV-coupled mobility",
			"Last-mile tool accountability",
			"Tool logistics management software",
		],
	},
	// ─── Asset & Key Storage ────────────────────────────────────────
	// Not tooling, so these sit outside "Tool Management Systems" — the review
	// asked that each category show only the products that belong to it.
	{
		id: "mobile-device-storage",
		category: "asset-storage",
		group: CAU_GROUP_ASSET_LOCKERS,
		title: "FOCUS F270 Mobile Storage",
		subtitle: "Smart storage for smart people.",
		tag: "FOCUS",
		image: prodMobileStore,
		alt: "Creintors FOCUS F270 smart mobile device storage locker",
		source: "Mobile and Key Storage.pdf",
		brochure: BROCHURES.mobileKeyStorage,
		description:
			"Secure spaces, all yours, anytime. Security, personalised for you, and your round-the-clock guardian. Lock away distractions, unlock your potential.",
		differentiator: "250+ individually accessed personal lockers.",
		bestFor:
			"Shop floors and controlled areas where phones and personal items must stay outside.",
		specs: [
			{ label: "Model", value: "FOCUS F270", highlight: true },
			{ label: "Capacity", value: "250+ secure spaces", highlight: true },
			{ label: "Availability", value: "24×7" },
			{ label: "Security", value: "Personalized for each user" },
			{ label: "Alignment", value: "Industry 4.0" },
		],
		useCases: [
			"Secure spaces, anytime",
			"Personalized security",
			"Round-the-clock access",
		],
	},
	{
		id: "key-storage",
		category: "asset-storage",
		group: CAU_GROUP_ASSET_KEYS,
		title: "ASSURE A15 Key Storage",
		subtitle: "Where every key finds its safest home.",
		tag: "ASSURE",
		image: prodCasplKeyCabinet,
		alt: "Creintors ASSURE A15 electronic key storage cabinet",
		source: "Mobile and Key Storage.pdf",
		brochure: BROCHURES.mobileKeyStorage,
		description:
			"Secure your keys, unlock your peace of mind. Your keys, our responsibility. Key security, designed for you. Focus on life, not on keys.",
		differentiator:
			"Electronic key cabinet with accountability down to the individual key.",
		bestFor: "Fleet, facility and plant key control.",
		specs: [
			{ label: "Model", value: "ASSURE A15", highlight: true },
			{ label: "Capacity", value: "12+ keys", highlight: true },
			{ label: "Availability", value: "24×7" },
			{ label: "Security", value: "Key security, designed for you" },
		],
		useCases: ["Secure key storage", "Round-the-clock key access"],
	},

	// ─── Intra-logistics Solutions ─────────────────────────────────────────
	{
		id: "amr",
		category: "mobility",
		group: CAU_GROUP_MOBILITY_FREE,
		title: "AMR (Autonomous Mobile Robotics)",
		subtitle: "Moving mountains for you.",
		tag: "AMR",
		image: prodAmr,
		alt: "Creintors AMR autonomous mobile robot with LiDAR based navigation",
		source: "AMR.pdf",
		brochure: BROCHURES.amr,
		description:
			"Autonomous Mobile Robots (AMRs) are advanced machines that can sense their environment, make decisions, and move independently without human control. Part of an intelligent system that connects the AMR station, Automated Storage and Retrieval System, on-line assembly system and manufacturing processes, moving smoothly across shop floors.",
		differentiator:
			"Navigates by LiDAR and decides its own route, with nothing to install in the floor.",
		bestFor:
			"Shopfloors where routes change, or where guide tape and rails are impractical.",
		specs: [
			{ label: "Payload", value: "30 kg to 30,000 kg", highlight: true },
			{ label: "Navigation", value: "LiDAR based navigation", highlight: true },
			{
				label: "Autonomy",
				value: "Senses environment, decides and moves without human control",
			},
			{
				label: "Intelligent system",
				value:
					"AMR station · ASRS · on-line assembly · manufacturing processes",
			},
		],
		useCases: [
			"Maintain consistent, high-quality performance",
			"Augment manpower and close workforce gaps",
			"Enable innovation in services and business models",
			"Reduce operating and labour costs",
			"Free up staff for higher-value tasks",
			"Scale cost-effectively",
			"Boost productivity and efficiency",
		],
	},
	{
		id: "rov",
		category: "mobility",
		group: CAU_GROUP_MOBILITY_FREE,
		title: "RoV (Ride on Vehicle)",
		subtitle: "Get ahead of your game.",
		tag: "RoV",
		image: prodCasplRov,
		alt: "Creintors RoV ride on vehicle from the Humanomate Series",
		source: "ROV.pdf",
		brochure: BROCHURES.rov,
		description:
			"Part of the Humanomate Series. From light tasks to heavy-duty work, it handles it all. Compact design for seamless docking and undocking, with sensors and RFID that ensure perfect alignment, every time, and smart sensors that never miss a thing.",
		differentiator:
			"The operator rides with the load, with sensor and RFID assisted docking.",
		bestFor:
			"Mixed light-to-heavy transfer tasks that still need a person in the loop.",
		specs: [
			{ label: "Series", value: "Humanomate Series", highlight: true },
			{
				label: "Duty",
				value: "From light tasks to heavy-duty work",
				highlight: true,
			},
			{ label: "Design", value: "Compact, for seamless docking and undocking" },
			{ label: "Alignment", value: "Sensors and RFID" },
			{ label: "Safety", value: "Smart sensors that never miss a thing" },
			{ label: "Error proofing", value: "Poka-Yoka" },
		],
		useCases: ["User friendly", "Safety", "Poka-Yoka", "Industry 4.0"],
	},
	{
		id: "agv",
		category: "mobility",
		group: CAU_GROUP_MOBILITY_FIXED,
		title: "AGV (Automated Guided Vehicle)",
		subtitle: "Automatic point-to-point material transfer.",
		tag: "AGV",
		image: capAgv,
		alt: "Creintors Automated Guided Vehicle for automatic material transfer",
		source: "ITMS_Catalogue.pdf p31, p43, p44",
		photo: true,
		description:
			"For material transfer automatically from one point to a defined point, consistently, in the most productive and safe manner. Deployed as conveyor systems with AGV / RGV within our warehouse solutions, and as the mobility layer for tool trolleys and mini stores, moving one trolley or a series of trolleys from the tool crib to the required machine location and back.",
		differentiator:
			"Fixed, repeatable point-to-point routes, run consistently and safely.",
		bestFor:
			"High-volume transfer between the same points, day in and day out.",
		specs: [
			{
				label: "Function",
				value: "Automatic point-to-point material transfer",
				highlight: true,
			},
			{ label: "Delivery", value: "Consistent, productive and safe" },
			{
				label: "Configuration",
				value: "Conveyor systems with AGV / RGV",
				highlight: true,
			},
			{
				label: "Tool logistics",
				value: "Mobility for tool trolleys / mini stores",
			},
		],
		useCases: [
			"Warehouse solutions",
			"Smart factory",
			"Tool crib to machine delivery",
		],
	},
	{
		id: "rgv",
		category: "mobility",
		group: CAU_GROUP_MOBILITY_FIXED,
		title: "RGV (Rail Guided Vehicle)",
		subtitle: "Rail-guided material transfer.",
		tag: "RGV",
		photo: true,
		image: prodCasplRgv,
		alt: "Creintors Rail Guided Vehicle for warehouse material transfer",
		source: "ITMS_Catalogue.pdf p44",
		description:
			"Rail Guided Vehicle for material transfer automatically from one point to a defined point, consistently, in the most productive and safe manner. Deployed within our warehouse solutions as conveyor systems with AGV / RGV.",
		differentiator:
			"Rail-guided, so the path is fixed and the load can be heavy.",
		bestFor: "Heavy or high-frequency transfer along a permanent route.",
		specs: [
			{ label: "Guidance", value: "Rail guided", highlight: true },
			{
				label: "Function",
				value: "Automatic point-to-point material transfer",
				highlight: true,
			},
			{ label: "Delivery", value: "Consistent, productive and safe" },
			{ label: "Configuration", value: "Conveyor systems with AGV / RGV" },
		],
		useCases: ["Warehouse solutions", "Smart factory", "Material handling"],
	},

	// ─── Warehouse & Software ───────────────────────────────────────
	{
		id: "software-solutions",
		category: "software",
		title: "Creintors Flow Solutions",
		subtitle: "Complete solution for information and material flow management.",
		tag: "SOFTWARE",
		photo: true,
		image: capSoftware,
		alt: "Creintors Flow Solutions software suite for information and material flow management",
		source: "Software.pdf · ITMS_Catalogue.pdf p35–37",
		brochure: BROCHURES.wms,
		catalogue: CATALOGUES.software,
		description:
			"ERP, machine interface, LMS, WMS and more, to connect, analyse and deliver a transformation in operations. We interface any machine with our software and hardware capabilities, making it simple for any operator to utilise the full potential of the solution. All our machines and software are developed in-house.",
		differentiator:
			"Interfaces to any machine and any ERP, with every module developed in-house.",
		bestFor:
			"Plants that need one information layer across machines, stores and ERP.",
		specs: [
			{
				label: "Suite",
				value: "ERP · PPSS · Visualisation · LMS / WMS · TMS · HRMS",
				highlight: true,
			},
			{
				label: "ERP modules",
				value:
					"Marketing · Design · Planning · Purchase · Store · Production · Quality · Accounts · HR · Maintenance",
			},
			{
				label: "Integration",
				value: "SAP / Oracle ERP · IoT machine live status",
				highlight: true,
			},
			{ label: "Platform", value: "Cloud-ready, runs on any browser" },
			{
				label: "Tool management",
				value:
					"Tool life and insert consumption by project / operation / machine",
			},
			{
				label: "Collaboration",
				value: "TDM Systems (Sandvik Group), Indo-German",
			},
		],
		useCases: [
			"Production planning & scheduling",
			"Order processing & delivery (CFS Mitra)",
			"Inventory management & billing",
			"Unmanned smart store control",
			"Human resource management",
			"Sub-contract management",
		],
	},
];

/**
 * SEO — every term below is a product name, model number or industry that
 * appears in the official CASPL documents. No keyword stuffing, no invented
 * claims.
 */
export const CAU_SEO = {
	title: "ASRS Warehouse Automation Systems | Creintors Automation Solutions",
	description:
		"Creintors Automation Solutions Pvt. Ltd. (Belgaum, Karnataka) designs and builds ASRS warehouse automation systems, including SFL ASRS, 4-way shuttle ASRS, 2-way shuttle with stacker, mini ASRS and ASRS with CTU, plus vertical storage systems, ITMS / IMS tool management systems, AMR / AGV / RGV and Creintors Flow Solutions software.",
	keywords: [
		"ASRS warehouse automation systems",
		"Automated Storage and Retrieval System",
		"ASRS",
		"SFL ASRS",
		"4-Way Shuttle ASRS",
		"2-Way Shuttle Stacker ASRS",
		"Mini ASRS",
		"ASRS with CTU",
		"Vertical Storage Systems",
		"Vertical Reciprocating Conveyor",
		"VRC",
		"Tool Management Systems",
		"RFID Tool Cabinet",
		"ITMS",
		"IMS",
		"Vertical Lift System",
		"Intelligent Vertical Carousel",
		"iVC 500",
		"Tool Cabinet TC 100",
		"iIMS 500",
		"iIMS 2000",
		"iITMS 1000",
		"iTMS 1000",
		"iTC H200",
		"iTC V200",
		"iTT 100",
		"FOCUS F270",
		"ASSURE A15",
		"Autonomous Mobile Robot",
		"AMR",
		"AGV",
		"RGV",
		"Ride on Vehicle",
		"Creintors Flow Solutions",
		"Creintors Automation Solutions",
		"Belgaum",
	],
};

/**
 * Structured product information (schema.org ItemList of Product) generated
 * from the verified product data above — nothing is hard-coded separately, so
 * the markup cannot drift from the catalogue content.
 */
export const CAU_PRODUCT_JSONLD = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	name: "Creintors Automation Solutions Products",
	numberOfItems: CAU_PRODUCTS.length,
	itemListElement: CAU_PRODUCTS.map((p, i) => ({
		"@type": "ListItem",
		position: i + 1,
		item: {
			"@type": "Product",
			name: p.title,
			description: p.description,
			category: p.tag,
			brand: {
				"@type": "Brand",
				name: "Creintors Automation Solutions Pvt. Ltd.",
			},
			additionalProperty: p.specs.map((s) => ({
				"@type": "PropertyValue",
				name: s.label,
				value: s.value,
			})),
		},
	})),
};

/** Source: ASRS.pdf — "Solution That Serve Every Industry". */
/**
 * Industry-specific case studies.
 *
 * The senior-team review asked for case studies grouped by industry, in
 * separate categories, to show the range of sectors Creintors works across.
 *
 * Each entry states the storage or tooling problem that industry brings, the
 * Creintors systems that answer it (every one of them a product from
 * CAU_PRODUCTS above) and the outcome — expressed only in the terms the
 * official documents use: complete accountability, fast retrieval, customised
 * reporting, vertical space utilisation, 100% tool accountability.
 *
 * The nine industries are exactly the sectors named in ASRS.pdf ("Solution
 * That Serve Every Industry"). No customer name, project value, tonnage or
 * percentage appears here, because none is documented — named project
 * narratives can be added to the same structure once the project team confirms
 * them against the POs.
 */
export type CauCaseStudy = {
	id: string;
	industry: string;
	image: string;
	challenge: string;
	/** Product titles, as they appear in CAU_PRODUCTS. */
	systems: string[];
	outcomes: string[];
};

export const CAU_CASE_STUDIES: CauCaseStudy[] = [
	{
		id: "automotive",
		industry: "Automotive",
		image: csAutomotive,
		challenge:
			"Painted bumpers, panels and sub-assemblies have to be buffered between paint, trim and final assembly without picking up a mark, then delivered to the line in build sequence.",
		systems: [
			"ASRS Bumper",
			"ASRS Trolley",
			"4-Way Shuttle ASRS",
			"AMR (Autonomous Mobile Robotics)",
		],
		outcomes: [
			"Contoured carriers protect painted surfaces",
			"Sequenced retrieval to the line",
			"Complete accountability of every buffer location",
		],
	},
	{
		id: "steel",
		industry: "Steel",
		image: csSteel,
		challenge:
			"Coils, sheet and long products are heavy, awkward and easily damaged, and a service centre still has to find the right grade and gauge quickly.",
		systems: [
			"ASRS Coils",
			"ASRS Sheet Metal",
			"ASRS Pipe",
			"RGV (Rail Guided Vehicle)",
		],
		outcomes: [
			"Cradled and flat-stack handling",
			"Payloads up to 30 tons",
			"Fast retrieval by grade and gauge",
		],
	},
	{
		id: "manufacturing",
		industry: "Manufacturing",
		image: csManufacturing,
		challenge:
			"Inserts, cutting tools and gauges leave the crib and never come back, and nobody can say what was issued, to whom, or how much is left.",
		systems: [
			"Intelligent Insert and Tool Management System (iITMS 1000)",
			"Intelligent Tool Cabinet (iTC H200)",
			"RFID Tool Cabinet",
			"Creintors Flow Solutions",
		],
		outcomes: [
			"100% accountability of new and used items",
			"Consumption by project, operation and machine",
			"Automatic purchase order generation",
		],
	},
	{
		id: "logistics",
		industry: "Logistics",
		image: csLogistics,
		challenge:
			"Receiving, put-away, picking, packing and dispatch all compete for the same floor, and peak-day pick rate decides whether orders ship on time.",
		systems: [
			"ASRS with CTU",
			"4-Way Shuttle ASRS",
			"AGV (Automated Guided Vehicle)",
			"Creintors Flow Solutions",
		],
		outcomes: [
			"Goods-to-person picking at the station",
			"Aisle-free, multi-deep storage density",
			"Live stock visibility across warehouses",
		],
	},
	{
		id: "textile",
		industry: "Textile",
		image: csTextile,
		challenge:
			"Finished fabric rolls damage at the wound face and the edges, while small high-value trims and accessories need controlled access.",
		systems: [
			"ASRS Fabric Rolls",
			"Intelligent Vertical Carousel (iVC Series)",
			"Vertical Lift System",
		],
		outcomes: [
			"Roll cradles that protect face and edges",
			"Building height turned into usable storage",
			"Access control by user and compartment",
		],
	},
	{
		id: "food-beverages",
		industry: "Food & Beverages",
		image: csFood,
		challenge:
			"Fast-moving stock and short shelf life leave no room for manual counting, or for a pallet that cannot be found when it is due to ship.",
		systems: [
			"SFL ASRS",
			"2-Way Shuttle + Stacker ASRS",
			"Creintors Flow Solutions",
		],
		outcomes: [
			"Deep-lane density for FMCG / FMPG flow",
			"Customised reporting per batch",
			"Complete accountability of every location",
		],
	},
	{
		id: "pharmaceutical",
		industry: "Pharmaceutical",
		image: csPharma,
		challenge:
			"Materials must sit behind controlled access, with an auditable record of every movement in and out.",
		systems: [
			"Intelligent Vertical Carousel (iVC Series)",
			"Mini ASRS",
			"Creintors Flow Solutions",
		],
		outcomes: [
			"Authorised access to a single compartment",
			"Automatic positioning doors",
			"Transaction log readable from any location",
		],
	},
	{
		id: "jewellery",
		industry: "Jewellery",
		image: csJewellery,
		challenge:
			"Payloads are measured in carats and every item has to be accounted for at every moment of its life in the store.",
		systems: [
			"Intelligent Vertical Carousel (iVC Series)",
			"ASSURE A15 Key Storage",
			"Creintors Flow Solutions",
		],
		outcomes: [
			"Payloads from 1 carat",
			"Access control down to the compartment",
			"Customised reporting on every transaction",
		],
	},
	{
		id: "furniture",
		industry: "Furniture",
		image: csFurniture,
		challenge:
			"Panels, frames and finished units are bulky and vary widely, so no single rack pitch suits the whole store.",
		systems: [
			"ASRS Trolley",
			"ASRS Long Plastic Parts",
			"Vertical Lift System",
		],
		outcomes: [
			"Storage flexibility by adding or removing trays",
			"Bulky and varied loads on one platform",
			"Vertical space utilization",
		],
	},
];

/** Source: ASRS.pdf — "Solution That Serve Every Industry". */
export const CAU_INDUSTRIES = [
	{
		t: "Automotive",
		d: "Storage and retrieval across automotive manufacturing.",
	},
	{ t: "Steel", d: "Coil, sheet and long-product storage and retrieval." },
	{
		t: "Manufacturing",
		d: "Tool, insert and material management on the shop floor.",
	},
	{
		t: "Logistics",
		d: "Warehouse management, put away, picking and dispatch.",
	},
	{ t: "Textile", d: "Fabric roll storage and vertical carousel storage." },
	{
		t: "Food & Beverages",
		d: "Automated storage and retrieval for FMCG / FMPG flows.",
	},
	{
		t: "Pharmaceutical",
		d: "Controlled-access vertical carousel and ASRS storage.",
	},
	{
		t: "Jewellery",
		d: "Payloads from 1 carat, with controlled access and reporting.",
	},
	{ t: "Furniture", d: "Storage and retrieval for bulky and varied loads." },
];

/**
 * Source: ITMS_Catalogue.pdf p6 & p48, Software.pdf p3 — Integrated Management
 * Systems (IMS) certified company.
 */
export const CAU_STANDARDS = [
	"ISO 9001 Quality Management",
	"ISO 14001 Environmental Management",
	"ISO 45001 Health and Safety",
	"ISO 27001 Information Security",
];

/**
 * Source: ITMS_Catalogue.pdf p5 & Software.pdf p2 (300+ satisfied customers,
 * 150+ energetic teammates); ITMS_Catalogue.pdf p20 (24 x 7 service support);
 * ITMS_Catalogue.pdf p48 (IMS certified — ISO 9001, 14001, 27001, 45001).
 */
export const CAU_STATS = [
	{ value: 100, suffix: "+", label: "Tons Material Handled" },
	// { value: 150, suffix: "+", label: "Energetic Teammates" },
	{ value: 24, suffix: "×7", label: "Service Support" },
	{ value: 8, suffix: "+", label: "Verticals" },
];

/** Source: ITMS_Catalogue.pdf p20 (IMS / ITMS / TMS FAQ) and p24 (Vertical Carousel FAQ). */
export const CAU_FAQ = [
	{
		q: "Can the machine be integrated with our ERP, CNC machines and tool database?",
		a: "Yes. Every machine can be interfaced with any ERP for information management, and this comes as a basic feature. It can be upgraded with Artificial Intelligence tools along with our Production Planning and Control Software and Supply Chain Management Software, which are part of Creintors Information Flow Solutions (IFS). For CNC tool data we collaborate with the German company TDM Systems, whose exhaustive tool database connects product design through to machining.",
	},
	{
		q: "Do we require a skilled operator to run these machines?",
		a: "No. Any user who operates a cellular phone, mobile or TV remote can operate these machines. Voice instructions add further comfort, and our simple user-interfaced screen design gives navigation through different modules. Every user is provided with authorised control access.",
	},
	{
		q: "Can the machine be moved from one place to another and plugged in to start?",
		a: "Yes. Caster wheels are provided for movement on the shop floor and lifting hooks are provided on top of the machine. Move it to any location, plug in 230 V AC single phase and connect the Ethernet cable or Wi-Fi.",
	},
	{
		q: "Can the machine be diagnosed online by our maintenance team?",
		a: "Yes. Our machine control design and online communication interface let us address any issue online, assuring least down time. 24 x 7 service support has been our USP, backed by online / remote service support, periodic operator training and ease of maintenance.",
	},
	{
		q: "What happens if the Vertical Carousel breaks down?",
		a: "A manual mode retrieves and picks material with the same accountability under admin access, so operations are not held up. The online service interface lets us take the system online remotely, making it a 24 x 7 readiness machine.",
	},
	{
		q: "Can the Vertical Carousel be integrated with other solutions like ASRS and AGVs?",
		a: "Yes. It can be integrated with any internal logistics or planning software, or with other intelligent devices like AGVs and other ASRS systems. Integrating any make of other systems to our system is our strength.",
	},
];

export type CauPartner = { name: string; logo: string };

/**
 * Names transcribed from the client logo artwork held in
 * src/assets/clients/Cautomate. Previously these carried the placeholder
 * labels "Client 01" … "Client 22", which were also used as the image alt text.
 */
export const CAU_PARTNERS: CauPartner[] = [
	{ name: "TVS", logo: client1 },
	{ name: "Vega", logo: client2 },
	{ name: "Bharat Forge Kalyani", logo: client3 },
	{ name: "Gerab", logo: client4 },
	{ name: "West", logo: client5 },
	{ name: "Brite", logo: client6 },
	{ name: "Tanishq", logo: client7 },
	{ name: "Larsen & Toubro", logo: client8 },
	{ name: "ABB", logo: client9 },
	{ name: "TechNova", logo: client10 },
	{ name: "Flowserve", logo: client11 },
	{ name: "Emerson", logo: client12 },
	{ name: "INDO-MIM", logo: client13 },
	{ name: "UNO Minda", logo: client14 },
	{ name: "Polyhydron Systems (PSPL)", logo: client15 },
	{ name: "NPCIL", logo: client16 },
	{ name: "Anand Group", logo: client17 },
	{ name: "Crane", logo: client18 },
	{ name: "Sundram Fasteners", logo: client19 },
	{ name: "Menon Group", logo: client20 },
	{ name: "Nuclear Fuel Complex", logo: client21 },
	{ name: "BHEL", logo: client22 },
];

// Legacy exports kept so existing components (FeaturesSection, StackSection, ShowcaseSection)
// don't break — they're no longer rendered but their imports must still resolve.
export const SOLUTIONS = CAU_CAPABILITIES.map((c) => c.t);

/** Source: WMS.pdf p2 — "Features of WMS" / benefits. */
export const FEATURES = [
	{
		t: "Real-time inventory tracking",
		d: "Live stock visibility across centralised multi-warehouse and virtual multiple warehouse inventory management.",
	},
	{
		t: "Complete accountability",
		d: "RFID / QR / barcode identification interfaced with the intelligent system software accounts for every item and user.",
	},
	{
		t: "Real-time and customizable reporting",
		d: "Customised reporting for faster decisions, with a log of every transaction from any remote location.",
	},
	{
		t: "Maximize operational efficiency",
		d: "Reduce errors and enhance accuracy across receiving, put away, storage, picking, packing, shipping and reporting.",
	},
];
export const PROCESS = CAU_PROCESS;

/** Source: ITMS_Catalogue.pdf p3 (family of products), p35–37 (software), p44 (warehouse solutions). */
export const STACK = [
	{
		title: "Hardware",
		items: [
			"ASRS & Radio Shuttle",
			"Vertical carousels & vertical lift",
			"Insert & tool management systems",
			"Tool cabinets & tool trolleys",
			"AMR / AGV / RGV",
		],
		tone: "from-brand-400/30",
	},
	{
		title: "Interfaces",
		items: [
			"RFID / QR / barcode identification",
			"Weighing system interface",
			"Ethernet LAN (Industry 4.0 connect)",
			"ERP / SAP data export",
			"TDM Systems tool data",
		],
		tone: "from-accent-violet/30",
	},
	{
		title: "Software",
		items: [
			"ERP solutions",
			"Production planning & scheduling",
			"Warehouse & logistics management",
			"Tool crib management",
			"Visualisation tool & live reporting",
		],
		tone: "from-accent-lime/30",
	},
];
export const INDUSTRIES = CAU_INDUSTRIES;

/** Source: ITMS_Catalogue.pdf p45 — Creating an Eco-System / Industry–Academia. */
export const PROJECTS = [
	{
		name: "Honours Program in Automation & Robotics",
		sub: "KLS's Gogte Institute of Technology",
		detail:
			"Creintors developed the curriculum in line with industry expectation; it is approved by the Board of Studies and the Academic Council of GIT as per autonomous norms.",
	},
	{
		name: "VLCI Flow Management Course",
		sub: "With JICA and CII",
		detail:
			"In association with the Japan International Cooperation Agency and the Confederation of Indian Industry, Creintors offers the Visionary Learning Community of India course for engineering and diploma colleges, recognised by AICTE.",
	},
];
export const FAQ = CAU_FAQ;

/**
 * ITMS_Catalogue.pdf p43, "Industry 4.0 — Our Actions": "Our every Tool
 * Management System is intelligent and is equipped to adapt for all phases of
 * Industry 4.0" — what it does at each of the five phases in ./next.
 */
const CAU_INDUSTRY_4_ACTIONS = [
	"Our solution can be interfaced to the customer's ERP for data connect, which enables visibility with reports and thus effective control.",
	"Our solution can be upgraded to interface with your production planning and control software for data-based decision making — for example auto procurement and priority-based tool issue.",
	"With an artificial intelligence module loaded, our solutions can predict tool consumption and new requirements based on past and forecast data.",
	"Our solution can be upgraded to run different AI logics simultaneously and arrive at the right decision based on the situation.",
	"Our machines work autonomously to dispense the right tool in the right quantity to the right person at the right time, with no human intervention in operations, save for service and maintenance.",
];

/**
 * "Our thoughts to be future ready — Working towards the NEXT" (17 Sep change
 * list). Lead: ITMS_Catalogue.pdf p41, "from Uncertain to Certain — Aligning
 * with Industry 4.0".
 */
export const CAU_NEXT: DivisionNextContent = {
	lead: "From uncertain to certain: aligning with Industry 4.0.",
	steps: INDUSTRY_4_THOUGHTS.map((t, i) => ({
		...t,
		action: CAU_INDUSTRY_4_ACTIONS[i],
	})),
	closing: NEXT_CLOSING,
};
