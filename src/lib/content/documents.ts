/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

/**
 * The product brochures and catalogues, one entry per file. The client
 * supplied them on 2 Oct ("WEBSITE DATA 01-10-2026", Brochures and Catalogue
 * folders). Products point at these from their own data, as `brochure` and
 * `catalogue` beside their photo, and a card offers a download only for the
 * documents its product has.
 *
 * A document is set on a product when it has pages on that product, or, for a
 * product-line document, on the line the product is one of: the ASRS
 * brochure and catalogue on every ASRS card, the test-rig catalogue on every
 * test stand. A passing mention is not enough. The tool-management catalogue
 * names the AGV and RGV only inside other systems, so those two cards have no
 * document.
 *
 * Files over 5 MB were made smaller for download: photos re-encoded as RGB
 * JPEG and taken down to 150 dpi where they were finer, with every page
 * checked against the supplied file. The ASRS catalogue went from 100 MB to
 * 24 MB, the test-rig catalogue from 35 MB to 3.9 MB. The rest are byte for
 * byte as supplied.
 */
import amrBrochure from "../../assets/documents/brochures/cautomate-amr-brochure.pdf";
import asrsBrochure from "../../assets/documents/brochures/cautomate-asrs-brochure.pdf";
import mobileKeyStorageBrochure from "../../assets/documents/brochures/cautomate-mobile-key-storage-brochure.pdf";
import rovBrochure from "../../assets/documents/brochures/cautomate-rov-brochure.pdf";
import toolCabinetBrochure from "../../assets/documents/brochures/cautomate-tool-cabinet-brochure.pdf";
import toolManagementBrochure from "../../assets/documents/brochures/cautomate-tool-management-brochure.pdf";
import verticalCarouselBrochure from "../../assets/documents/brochures/cautomate-vertical-carousel-brochure.pdf";
import verticalLiftBrochure from "../../assets/documents/brochures/cautomate-vertical-lift-brochure.pdf";
import wmsBrochure from "../../assets/documents/brochures/cautomate-wms-brochure.pdf";
import asrsCatalogue from "../../assets/documents/catalogues/cautomate-asrs-catalogue.pdf";
import carParkingCatalogue from "../../assets/documents/catalogues/cautomate-car-parking-catalogue.pdf";
import softwareCatalogue from "../../assets/documents/catalogues/cautomate-software-catalogue.pdf";
import toolManagementCatalogue from "../../assets/documents/catalogues/cautomate-tool-management-catalogue.pdf";
import projectsCatalogue from "../../assets/documents/catalogues/crienviro-projects-catalogue.pdf";
import waterTreatmentCatalogue from "../../assets/documents/catalogues/crienviro-water-treatment-catalogue.pdf";
import steelPlantCatalogue from "../../assets/documents/catalogues/teknosol-steel-plant-catalogue.pdf";
import testRigsCatalogue from "../../assets/documents/catalogues/teknosol-test-rigs-catalogue.pdf";

export type ProductDocument = {
	/** The bundled file. */
	href: string;
	/** What the document is, for the button's accessible name and tooltip. */
	title: string;
	/** The name it saves under, in place of the bundler's hashed one. */
	fileName: string;
};

/** The downloads a product, or a range shown without products, can offer. */
export type ProductDocuments = {
	brochure?: ProductDocument;
	catalogue?: ProductDocument;
};

const doc = (
	href: string,
	title: string,
	fileName: string,
): ProductDocument => ({ href, title, fileName });

/** Each with the supplied file it is, and what it covers. */
export const BROCHURES = {
	/** "AMR.pdf": the AMR. */
	amr: doc(amrBrochure, "AMR brochure", "C-Automate AMR Brochure.pdf"),
	/** "ASRS_Pamphlet.pdf": ASRS from 1 carat to 30 tons. The `source` "ASRS.pdf" of the ASRS products. */
	asrs: doc(asrsBrochure, "ASRS brochure", "C-Automate ASRS Brochure.pdf"),
	/** "Mobile and Key Storage.pdf": FOCUS mobile storage and ASSURE key storage. */
	mobileKeyStorage: doc(
		mobileKeyStorageBrochure,
		"FOCUS and ASSURE storage brochure",
		"C-Automate Mobile and Key Storage Brochure.pdf",
	),
	/** "ROV.pdf": the ride-on vehicle. */
	rov: doc(rovBrochure, "RoV brochure", "C-Automate RoV Brochure.pdf"),
	/** "Tool Cabinet.pdf": TC 100, in its standard and RFID builds. */
	toolCabinet: doc(
		toolCabinetBrochure,
		"Tool Cabinet TC 100 brochure",
		"C-Automate Tool Cabinet Brochure.pdf",
	),
	/** "CASPL TMS final.pdf": the tool cabinet, IMS 500 and ITMS 1000 (the iITMS 1000). */
	toolManagement: doc(
		toolManagementBrochure,
		"Tool Management Solutions brochure",
		"C-Automate Tool Management Brochure.pdf",
	),
	/** "Vertical_Carousel_Pamplet[8927].pdf": the iVC series. */
	verticalCarousel: doc(
		verticalCarouselBrochure,
		"Vertical Carousel brochure",
		"C-Automate Vertical Carousel Brochure.pdf",
	),
	/** "Vertical Lift.pdf": the CVLS 400 vertical lift. */
	verticalLift: doc(
		verticalLiftBrochure,
		"Vertical Lift System brochure",
		"C-Automate Vertical Lift Brochure.pdf",
	),
	/** "WMS.pdf": the warehouse management module of Creintors Flow Solutions. */
	wms: doc(wmsBrochure, "WMS brochure", "C-Automate WMS Brochure.pdf"),
} as const;

/** Each with the supplied file it is, and what it covers. */
export const CATALOGUES = {
	/** "E-Catalogue-ASRS.pdf": ASRS by payload, and bin, barrel, trolley, pallet and coil handling. */
	asrs: doc(asrsCatalogue, "ASRS catalogue", "C-Automate ASRS Catalogue.pdf"),
	/** "car parking new design .pdf NEW FINAL 1.pdf": stack, puzzle and tower parking. */
	carParking: doc(
		carParkingCatalogue,
		"Car Parking Systems catalogue",
		"C-Automate Car Parking Catalogue.pdf",
	),
	/** "Software_Catalogue[8926].pdf": Creintors Flow Solutions. The `source` "Software.pdf". */
	software: doc(
		softwareCatalogue,
		"Creintors Flow Solutions catalogue",
		"C-Automate Software Catalogue.pdf",
	),
	/**
	 * "ITMS_Catalogue[8923].pdf": iIMS 500 (pp. 8–10), iIMS 2000 (11–13), iITMS
	 * 1000 (14–16), iTMS 1000 (17–19), vertical carousels (21–24), iTC H200
	 * (25–27), iTC V200 (28–30) and iTT 100 (31–33).
	 */
	toolManagement: doc(
		toolManagementCatalogue,
		"Tool Management Solutions catalogue",
		"C-Automate Tool Management Catalogue.pdf",
	),
	/** "wtp_catalogue.pdf": 50+ water supply and treatment projects, with the products in them. */
	projects: doc(
		projectsCatalogue,
		"Water treatment projects catalogue",
		"Crienviro Water Treatment Projects Catalogue.pdf",
	),
	/**
	 * "WTP.pdf": water treatment equipment, by stage: mixing (flash mixers),
	 * sedimentation (clariflocculators, high-rate clarifiers), filtration
	 * (pressure sand filters), disinfection (chlorination) and automation
	 * (SCADA and control panels).
	 */
	waterTreatment: doc(
		waterTreatmentCatalogue,
		"Water Treatment Solutions catalogue",
		"Crienviro Water Treatment Catalogue.pdf",
	),
	/** "STEEL PPT.pdf": a page on each steel-plant product, as supplied to SABIC Hadeed and Arcelor Mittal. */
	steelPlant: doc(
		steelPlantCatalogue,
		"Steel plant products catalogue",
		"Creintors Teknosol Steel Plant Catalogue.pdf",
	),
	/** "Test Rig_catalogues.pdf": the Hydrothrust hydrostatic test rigs. */
	testRigs: doc(
		testRigsCatalogue,
		"Hydrostatic test rigs catalogue",
		"Creintors Teknosol Test Rigs Catalogue.pdf",
	),
} as const;
