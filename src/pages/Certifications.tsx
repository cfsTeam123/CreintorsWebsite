/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Award, BadgeCheck, Leaf, Shield, ShieldCheck, X } from "lucide-react";
import { gsap } from "../lib/gsap";
import { PRIMARY, SECONDARY } from "../lib/theme";

import heroImage from "../assets/awards/award3.png";
import ctpl1 from "../assets/certificates/ctpl1.jpg";
import ctpl2 from "../assets/certificates/ctpl2.jpg";
import ctpl3 from "../assets/certificates/ctpl3.jpg";
import cespl1 from "../assets/certificates/cespl1.jpg";
import cespl2 from "../assets/certificates/cespl2.jpg";
import cespl3 from "../assets/certificates/cespl3.jpg";
import caspl1 from "../assets/certificates/caspl1.jpg";
import caspl2 from "../assets/certificates/caspl2.jpg";
import caspl3 from "../assets/certificates/caspl3.jpg";
import caspl27001 from "../assets/certificates/caspl27001.jpg";
import ctplZedSilver from "../assets/certificates/ctpl-zed-silver.jpg";
import cesplZedSilver from "../assets/certificates/cespl-zed-silver.jpg";
import casplZedSilver from "../assets/certificates/caspl-zed-silver.jpg";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";
import IgnoranceLine from "../components/IgnoranceLine";

/* ────────────────────────────────────────── DATA */

type IconKey = "ShieldCheck" | "Leaf" | "Shield" | "BadgeCheck" | "Award";

type Certificate = {
	name: string;
	standard: string;
	scope: string;
	description: string;
	image: string;
	icon: IconKey;
	accent: string;
};

type CompanyGroup = {
	slug: string;
	company: string;
	tag: string;
	description: string;
	certificates: Certificate[];
};

const ICONS = {
	ShieldCheck,
	Leaf,
	Shield,
	BadgeCheck,
	Award,
} as const;

const GROUPS: CompanyGroup[] = [
	{
		slug: "ctpl",
		company: "CTPL",
		tag: "Creintors Teknosol Pvt Ltd",
		description:
			"Precision testing systems engineered to ISO quality, environmental and occupational-health standards, and recognised at ZED Silver level under the MSME Sustainable scheme.",
		certificates: [
			{
				name: "ISO 9001:2015",
				standard: "Quality Management System",
				scope: "CTPL · Design & manufacture of test rigs",
				description:
					"Certifies a structured quality management system covering design, manufacture and commissioning of valve test rigs and validation platforms.",
				image: ctpl1,
				icon: "BadgeCheck",
				accent: PRIMARY,
			},
			{
				name: "ISO 14001:2015",
				standard: "Environmental Management System",
				scope: "CTPL · Sustainable operations",
				description:
					"Recognises the discipline applied to environmental impact, resource use and pollution prevention across the manufacturing facility.",
				image: ctpl2,
				icon: "Leaf",
				accent: SECONDARY,
			},
			{
				name: "ISO 45001:2018",
				standard: "Occupational Health & Safety",
				scope: "CTPL · Worker safety & hazard control",
				description:
					"Awarded for a worker-led safety management system covering hazard identification, risk control and safe shop-floor operations.",
				image: ctpl3,
				icon: "Shield",
				accent: PRIMARY,
			},
			{
				name: "ZED Silver",
				standard: "MSME Sustainable (ZED) Certification",
				scope: "CTPL · Zero Defect Zero Effect",
				description:
					"Awarded by the Ministry of Micro, Small & Medium Enterprises under the MSME Sustainable (ZED) Scheme, assessed by RINA India, recognising zero-defect manufacturing practice with zero effect on the environment.",
				image: ctplZedSilver,
				icon: "Award",
				accent: SECONDARY,
			},
		],
	},
	{
		slug: "cespl",
		company: "CESPL",
		tag: "Creintors Environmental Solutions Pvt Ltd",
		description:
			"Water, effluent and sewage treatment systems built to CPCB / SPCB norms, certified across the IMS framework and recognised at ZED Silver level under the MSME Sustainable scheme.",
		certificates: [
			{
				name: "ISO 14001:2015",
				standard: "Environmental Management System",
				scope: "CESPL · Treatment plant operations",
				description:
					"Confirms environmental compliance across the design, build and operations of CESPL water and STP plants.",
				image: cespl1,
				icon: "Leaf",
				accent: SECONDARY,
			},
			{
				name: "ISO 9001:2015",
				standard: "Quality Management System",
				scope: "CESPL · Turnkey project delivery",
				description:
					"Validates the quality system applied to engineering, fabrication and turnkey delivery of environmental engineering projects.",
				image: cespl2,
				icon: "BadgeCheck",
				accent: PRIMARY,
			},
			{
				name: "ISO 45001:2018",
				standard: "Occupational Health & Safety",
				scope: "CESPL · Site & plant safety",
				description:
					"Worker-safety system covering hazard control, on-site operations and statutory compliance for plant build and O&M.",
				image: cespl3,
				icon: "Shield",
				accent: PRIMARY,
			},
			{
				name: "ZED Silver",
				standard: "MSME Sustainable (ZED) Certification",
				scope: "CESPL · Zero Defect Zero Effect",
				description:
					"Awarded by the Ministry of Micro, Small & Medium Enterprises under the MSME Sustainable (ZED) Scheme, assessed by RINA India, recognising zero-defect manufacturing practice with zero effect on the environment.",
				image: cesplZedSilver,
				icon: "Award",
				accent: SECONDARY,
			},
		],
	},
	{
		slug: "caspl",
		company: "CASPL",
		tag: "Creintors Automation Solutions Pvt Ltd",
		description:
			"Industrial automation, ASRS and intralogistics systems certified for quality, environment and occupational safety, and recognised at ZED Silver level under the MSME Sustainable scheme.",
		certificates: [
			{
				name: "ISO 9001:2015",
				standard: "Quality Management System",
				scope: "CASPL · Automation systems delivery",
				description:
					"Certifies quality processes for design, integration and on-site commissioning of automation, ASRS and AGV/AMR systems.",
				image: caspl1,
				icon: "BadgeCheck",
				accent: PRIMARY,
			},
			{
				name: "ISO 14001:2015",
				standard: "Environmental Management System",
				scope: "CASPL · Responsible operations",
				description:
					"Recognises CASPL's commitment to environmental responsibility across manufacturing, engineering and field operations.",
				image: caspl2,
				icon: "Leaf",
				accent: SECONDARY,
			},
			{
				name: "ISO 45001:2018",
				standard: "Occupational Health & Safety",
				scope: "CASPL · Worker-led safety practice",
				description:
					"Worker-participation safety system across automation projects covering risk control and on-site H&S compliance.",
				image: caspl3,
				icon: "Shield",
				accent: PRIMARY,
			},
			{
				name: "ZED Silver",
				standard: "MSME Sustainable (ZED) Certification",
				scope: "CASPL · Zero Defect Zero Effect",
				description:
					"Awarded by the Ministry of Micro, Small & Medium Enterprises under the MSME Sustainable (ZED) Scheme, assessed by RINA India, recognising zero-defect manufacturing practice with zero effect on the environment.",
				image: casplZedSilver,
				icon: "Award",
				accent: SECONDARY,
			},
		],
	},
	// {
	// 	slug: "caspl-isms",
	// 	company: "CASPL · ISMS",
	// 	tag: "Information Security Management System",
	// 	description:
	// 		"Independent ISO 27001 certification covering CASPL's information security controls, a critical capability for software-driven automation, data and IoT customer engagements.",
	// 	certificates: [
	// 		{
	// 			name: "ISO 27001:2013",
	// 			standard: "Information Security Management System",
	// 			scope: "CASPL · Information security controls",
	// 			description:
	// 				"Certifies the controls protecting confidentiality, integrity and availability of customer, operational and technical information assets handled by CASPL.",
	// 			image: caspl27001,
	// 			icon: "ShieldCheck",
	// 			accent: PRIMARY,
	// 		},
	// 	],
	// },
];

const HERO_BADGES = [
	"ISO 9001:2015",
	"ISO 45001:2018",
	"ZED Silver Level",
];

/* ────────────────────────────────────────── HERO */

function CertificationsHero() {
	const heroRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const el = heroRef.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".cf-fade",
				{ opacity: 0, y: 36 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					stagger: 0.08,
					delay: 0.25,
				},
			);
			gsap.fromTo(
				".cf-bar",
				{ scaleX: 0 },
				{
					scaleX: 1,
					duration: 1.4,
					ease: "expo.out",
					delay: 0.45,
					transformOrigin: "left",
				},
			);
			gsap.fromTo(
				".cf-orb",
				{ scale: 0.5, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 1.8, ease: "elastic.out(1,0.6)" },
			);
		}, el);
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={heroRef}
			className="relative isolate flex min-h-[60vh] items-end overflow-hidden pb-14 pt-28 md:min-h-[60vh] md:pb-16 md:pt-32"
			style={{ backgroundColor: "#070c17" }}>
			<img
				aria-hidden
				src={heroImage}
				alt=""
				className="pointer-events-none absolute inset-0 -z-40 h-full w-full object-cover opacity-70"
				style={{ filter: "saturate(0.9) contrast(1.08)" }}
			/>

			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-30"
				style={{
					background: `
						linear-gradient(180deg, rgba(7,12,23,0.20) 0%, rgba(7,12,23,0.45) 55%, rgba(7,12,23,0.92) 100%),
						radial-gradient(60% 80% at 80% 20%, ${PRIMARY}26, transparent 60%),
						radial-gradient(60% 80% at 0% 100%, ${SECONDARY}33, transparent 60%)
					`,
				}}
			/>

			<div
				aria-hidden
				className="cf-orb pointer-events-none absolute -right-40 top-12 -z-10 h-[460px] w-[460px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${PRIMARY}55, transparent 70%)`,
				}}
			/>
			<div
				aria-hidden
				className="cf-orb pointer-events-none absolute -left-32 bottom-0 -z-10 h-[380px] w-[380px] rounded-full blur-3xl"
				style={{
					background: `radial-gradient(circle, ${SECONDARY}55, transparent 70%)`,
				}}
			/>

			<div className="container-x relative">
				<div className="cf-fade flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/55">
					<span>ISO / IMS Certifications</span>
					<span
						className="ml-2 hidden h-px w-12 md:block"
						style={{
							background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
						}}
					/>
					<span className="hidden font-mono text-[10px] tracking-[0.4em] text-white/35 md:inline">
						QUALITY · ENV · OH&S · ISMS
					</span>
				</div>

				<h1 className="cf-fade mt-6 max-w-9xl page-title">
					<span className="text-white">Certifications &amp; </span>
					<span
						className="bg-clip-text text-transparent"
						style={{
							backgroundImage: `linear-gradient(120deg, ${PRIMARY}, #ffffff)`,
						}}>
						Compliance
					</span>
				</h1>

				<p className="cf-fade mt-6 max-w-3xl text-lg text-white/70 md:text-xl">
					An Integrated Management System Certified Group of Companies. Every
					Creintors company is independently certified to global ISO standards
					covering quality, environment, occupational health &amp; safety, and
					information security.
				</p>

				<div
					className="cf-bar mt-10 h-px w-full origin-left"
					style={{
						background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
					}}
				/>

				<div className="cf-fade mt-8 flex flex-wrap items-center gap-3">
					<span
						className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur"
						style={{
							borderColor: "rgba(255,255,255,0.18)",
							background: "rgba(255,255,255,0.06)",
						}}>
						Group Wide IMS
					</span>
					{HERO_BADGES.map((b) => (
						<span
							key={b}
							className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur"
							style={{
								borderColor: `${PRIMARY}55`,
								background: `${PRIMARY}14`,
							}}>
							{b}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}

/* ────────────────────────────────────────── CARD */

function CertificateCard({
	cert,
	index,
	onOpen,
}: {
	cert: Certificate;
	index: number;
	onOpen: () => void;
}) {
	const Icon = ICONS[cert.icon];

	return (
		<motion.button
			type="button"
			onClick={onOpen}
			initial={{ opacity: 0, y: 32, scale: 0.96 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{
				duration: 0.7,
				ease: [0.22, 1, 0.36, 1],
				delay: index * 0.08,
			}}
			whileHover={{ y: -6 }}
			className="group relative w-full overflow-hidden rounded-3xl border bg-white text-left transition-shadow duration-500 hover:shadow-[0_30px_80px_-28px_rgba(0,160,227,0.35),0_0_0_1px_rgba(0,160,227,0.18)_inset]"
			style={{
				borderColor: "rgba(15,23,42,0.08)",
				boxShadow:
					"0 22px 60px -32px rgba(15,23,42,0.22), 0 0 0 1px rgba(255,255,255,0.85) inset",
			}}>
			{/* Top hairline */}
			<span
				aria-hidden
				className="pointer-events-none absolute inset-x-6 top-0 z-30 h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background: `linear-gradient(90deg, transparent, ${cert.accent}, ${SECONDARY}aa, transparent)`,
					boxShadow: `0 0 12px ${cert.accent}55`,
				}}
			/>

			{/* Image */}
			<div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
				<div
					aria-hidden
					className="absolute inset-0"
					style={{
						background: `radial-gradient(circle at 50% 30%, ${cert.accent}10, transparent 70%)`,
					}}
				/>
				<img
					src={cert.image}
					alt={cert.name}
					loading="lazy"
					className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
				/>
				<div
					aria-hidden
					className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				/>
				{/* Icon badge */}
				<span
					aria-hidden
					className="absolute right-3 top-3 inline-grid h-10 w-10 place-items-center rounded-full border backdrop-blur-md"
					style={{
						background: "rgba(255,255,255,0.85)",
						borderColor: `${cert.accent}55`,
						color: cert.accent,
					}}>
					<Icon className="h-5 w-5" />
				</span>
				{/* Standard tag */}
				<span
					className="absolute left-3 top-3 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-md"
					style={{
						background: "rgba(255,255,255,0.85)",
						borderColor: `${cert.accent}55`,
						color: cert.accent,
					}}>
					{cert.name}
				</span>
			</div>

			{/* Body */}
			<div className="relative p-6">
				<p
					className="font-mono text-[10px] uppercase tracking-[0.32em]"
					style={{ color: cert.accent }}>
					{cert.scope}
				</p>
				<h3 className="mt-2 font-display text-lg font-semibold leading-tight text-slate-900">
					{cert.standard}
				</h3>
				<p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-slate-600">
					{cert.description}
				</p>

				<div className="mt-5 flex items-center gap-3">
					<span
						aria-hidden
						className="h-[2px] flex-1 origin-left scale-x-50 rounded-full transition-transform duration-700 group-hover:scale-x-100"
						style={{
							background: `linear-gradient(90deg, ${cert.accent}, ${SECONDARY}66, transparent)`,
						}}
					/>
					<span
						className="grid h-9 w-9 place-items-center rounded-full border text-base transition-all duration-500 group-hover:translate-x-1 group-hover:scale-110"
						style={{
							color: cert.accent,
							borderColor: `${cert.accent}55`,
							background: `${cert.accent}10`,
						}}>
						↗
					</span>
				</div>
			</div>
		</motion.button>
	);
}

/* ────────────────────────────────────────── GROUP */

function GroupSection({
	group,
	index,
}: {
	group: CompanyGroup;
	index: number;
}) {
	const [active, setActive] = useState<Certificate | null>(null);

	return (
		<section className="relative overflow-hidden py-10">
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-12 h-[24rem] w-[24rem] rounded-full blur-[140px]"
				style={{
					background: `${index % 2 === 0 ? PRIMARY : SECONDARY}1c`,
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-32 bottom-12 h-[22rem] w-[22rem] rounded-full blur-[140px]"
				style={{
					background: `${index % 2 === 0 ? SECONDARY : PRIMARY}1c`,
				}}
			/>

			<div className="container-x relative">
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
					className="mb-12 max-w-3xl">
					<div className="eyebrow text-slate-600">
						<span
							className="h-px w-8"
							style={{ background: PRIMARY }}
						/>{" "}
						{group.tag}
					</div>
					<h2 className="section-title">
						<span className="text-slate-900">We at </span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
							}}>
							{group.company}
						</span>
					</h2>
					<p className="mt-6 text-slate-600">{group.description}</p>
				</motion.div>

				<div
					className={`grid gap-6 ${
						group.certificates.length === 1 ? "mx-auto max-w-md"
						: group.certificates.length % 4 === 0 ?
							"md:grid-cols-2 lg:grid-cols-4"
						:	"md:grid-cols-2 lg:grid-cols-3"
					}`}>
					{group.certificates.map((c, i) => (
						<CertificateCard
							key={`${group.slug}-${c.name}`}
							cert={c}
							index={i}
							onOpen={() => setActive(c)}
						/>
					))}
				</div>
			</div>

			<CertificateDialog
				cert={active}
				onClose={() => setActive(null)}
			/>
		</section>
	);
}

/* ────────────────────────────────────────── DIALOG */

function CertificateDialog({
	cert,
	onClose,
}: {
	cert: Certificate | null;
	onClose: () => void;
}) {
	useEffect(() => {
		if (!cert) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener("keydown", onKey);
		};
	}, [cert, onClose]);

	return (
		<AnimatePresence>
			{cert && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.25 }}
					className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
					onClick={onClose}>
					<motion.div
						initial={{ opacity: 0, scale: 0.94, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.96, y: 10 }}
						transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
						onClick={(e) => e.stopPropagation()}
						className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
						<div className="flex items-start justify-between border-b border-slate-200 px-6 py-4">
							<button
								type="button"
								onClick={onClose}
								aria-label="Close"
								className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900">
								<X className="h-5 w-5" />
							</button>
						</div>

						<div className="bg-slate-50">
							<img
								src={cert.image}
								alt={cert.name}
								className="mx-auto max-h-[70vh] w-full object-contain p-4"
							/>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

/* ────────────────────────────────────────── PAGE */

export default function Certifications() {
	useSeo({
		...PAGE_SEO.certifications,
	});

	return (
		<main className="relative isolate">
			<CertificationsHero />
			<IgnoranceLine />
			{GROUPS.map((g, i) => (
				<GroupSection
					key={g.slug}
					group={g}
					index={i}
				/>
			))}
		</main>
	);
}
