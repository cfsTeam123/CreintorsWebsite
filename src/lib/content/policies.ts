/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

export const POLICY_THEME = {
	primary: "#179EE0",
	secondary: "#46367F",
	accent: "#138708",
};

export const POLICY_INTRO = {
	eyebrow: "Integrated Management System",
	title: "Quality. Safety. Trust.",
	subtitle:
		"One management system built on ISO 9001, ISO 14001, ISO 27001 and ISO 45001, and on ZED Silver certification at all three Creintors companies.",
	body: "At Creintors, we are committed to the highest standards of product quality, environmental care, information security and occupational health & safety. As an OEM, our goal is to consistently deliver products and services that are 'Best in Class' and create lasting value for our customers while ensuring a secure future and a safe working environment for our employees and stakeholders.",
};

/**
 * The ZED register, transcribed from the three MSME certificates held in
 * src/assets/certificates. Every field here is read off those documents — the
 * scheme, the level, the assessment agency, the Udyam and certificate numbers,
 * the issue date and the stated validity. Nothing is inferred.
 *
 * All three are ZED SILVER under the MSME Sustainable (ZED) Certification
 * Scheme, assessed by RINA India Private Limited, registered under NIC-2008
 * code 28 (manufacturer of machinery and equipment n.e.c.) at Waghawade Road,
 * Belagavi 590018, and valid for three years from the date of issue.
 */
export type ZedCertificate = {
	company: string;
	udyam: string;
	certificateNo: string;
	issued: string;
};

export const ZED_SCHEME = {
	scheme: "MSME Sustainable (ZED) Certification Scheme",
	level: "ZED Silver",
	assessor: "RINA India Private Limited",
	nic: "28 — Manufacturer of machinery and equipment n.e.c.",
	validity: "Three years from the date of issue",
};

export const ZED_CERTIFICATES: ZedCertificate[] = [
	{
		company: "Creintors Teknosol Private Limited",
		udyam: "UDYAM-KR-04-0006218",
		certificateNo: "30032026_539444",
		issued: "30 March 2026",
	},
	{
		company: "Creintors Environmental Solutions Pvt. Ltd.",
		udyam: "UDYAM-KR-04-0006372",
		certificateNo: "30032026_539487",
		issued: "30 March 2026",
	},
	{
		company: "Creintors Automation Solutions Pvt Ltd",
		udyam: "UDYAM-KR-04-0006388",
		certificateNo: "02042026_539495",
		issued: "2 April 2026",
	},
];

export type PolicyStandard = {
	id: string;
	code: string;
	name: string;
	tagline: string;
	body: string;
	accent: string;
	image: string;
};

export type PolicyCommitment = {
	id: string;
	icon: string;
	title: string;
	body: string;
	accent: string;
};

export const COMMITMENTS_GROUPED = {
	governance: "Governance & Compliance",
	quality: "Quality & Customer Value",
	people: "People & Safety",
	improvement: "Continual Improvement",
};
