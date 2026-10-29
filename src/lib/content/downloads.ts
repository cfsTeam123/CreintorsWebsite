/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { BROCHURES, CATALOGUES, type ProductDocuments } from "./documents";

/** One row of a division's "Brochures & Catalogues" dropdown in the sub-nav. */
export type ProductDownload = ProductDocuments & {
	/** The product, or product line, the documents are for. */
	product: string;
};

/**
 * The downloads each division's sub-nav offers, product by product. They are
 * the same documents the product cards offer (see documents.ts, which says
 * which product each belongs to); here they are gathered by product line so a
 * visitor can fetch one without finding its card first. Products with no
 * document are left out.
 */
export const CAUTOMATE_DOWNLOADS: ProductDownload[] = [
	{
		product: "ASRS",
		brochure: BROCHURES.asrs,
		catalogue: CATALOGUES.asrs,
	},
	{ product: "Vertical Lift System", brochure: BROCHURES.verticalLift },
	{
		product: "Vertical Carousel",
		brochure: BROCHURES.verticalCarousel,
		catalogue: CATALOGUES.toolManagement,
	},
	{ product: "Tool Cabinet", brochure: BROCHURES.toolCabinet },
	{
		product: "Tool Management Solutions",
		brochure: BROCHURES.toolManagement,
		catalogue: CATALOGUES.toolManagement,
	},
	{
		product: "Mobile & Key Storage",
		brochure: BROCHURES.mobileKeyStorage,
	},
	{ product: "AMR", brochure: BROCHURES.amr },
	{ product: "RoV", brochure: BROCHURES.rov },
	{
		product: "Creintors Flow Solutions",
		brochure: BROCHURES.wms,
		catalogue: CATALOGUES.software,
	},
	{ product: "Car Parking Systems", catalogue: CATALOGUES.carParking },
];

export const TEKNOSOL_DOWNLOADS: ProductDownload[] = [
	{ product: "Hydrostatic Test Rigs", catalogue: CATALOGUES.testRigs },
	{ product: "Steel Plant Products", catalogue: CATALOGUES.steelPlant },
];

export const CRIENVIRO_DOWNLOADS: ProductDownload[] = [
	{
		product: "Water Treatment Solutions",
		catalogue: CATALOGUES.waterTreatment,
	},
	{
		product: "Water Treatment Projects",
		catalogue: CATALOGUES.projects,
	},
];
