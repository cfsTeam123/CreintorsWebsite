/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Link, useLocation } from "react-router-dom";
import { PRIMARY, SECONDARY } from "../lib/theme";
import { getContactForPath, getFooterEmailsForPath } from "../lib/divisions";
import Reveal from "./Reveal";
import BrandName from "./BrandName";
import SocialLinks from "./SocialLinks";
import { ABOUT } from "../lib/navigation";
import type { BrandKey } from "../lib/content/brand";
import motto from "../assets/common/creintors-motto.webp";

/* ────────────────────────────────────────── Sitemap (mirrors Navbar) */

type LinkItem = { to: string; label: string; accent?: string };

/**
 * How each division's name is built in the visitor's language.
 *
 * The coined part comes from BRAND_NAMES — Google's widget invents a different
 * transliteration for it every time it meets one. The descriptive part
 * ("Automation Solutions") is ordinary English and is left for the widget to
 * translate, the same as the rest of the page.
 */
const DIVISION_BRANDS: Record<string, { key: BrandKey; rest?: string }> = {
	"/teknosol": { key: "teknosol" },
	"/cautomate": { key: "creintors", rest: "Automation Solutions" },
	"/crienviro": { key: "creintors", rest: "Environmental Solutions" },
};

/**
 * Each company under its registered name (18 Sep: "add Pvt. Ltd. for all 3
 * company names"). The suffix is a legal form, not English to translate.
 */
function DivisionLabel({ to, label }: { to: string; label: string }) {
	const brand = DIVISION_BRANDS[to];
	if (!brand) return <>{label}</>;
	return (
		<>
			<BrandName name={brand.key} />
			{brand.rest ? ` ${brand.rest}` : null}{" "}
			<span translate="no">Pvt. Ltd.</span>
		</>
	);
}

const DIVISIONS_LINKS: LinkItem[] = [
	{
		to: "/teknosol",
		label: "Creintors Teknosol Pvt. Ltd.",
		accent: "#01A0E2",
	},
	{
		to: "/cautomate",
		label: "Creintors Automation Solutions Pvt. Ltd.",
		accent: "#000080",
	},
	{
		to: "/crienviro",
		label: "Creintors Environmental Solutions Pvt. Ltd.",
		accent: "#138708",
	},
];

/**
 * The About Us page's own cards, in their order and wording (18 Sep), taken
 * from the same list so the two cannot drift apart again.
 */
const ABOUT_LINKS: LinkItem[] = ABOUT.map((a) => ({
	to: a.to,
	label: a.label,
}));

const RESOURCES_LINKS: LinkItem[] = [
	{ to: "/education", label: "3i Ecosystem" },
	{ to: "/policies", label: "Policies" },
	{ to: "/careers", label: "Careers" },
	{ to: "/contact", label: "Contact" },
];

const CONTACT_INFO = {
	address: "Waghawade Road, Belgaum, Karnataka, India",
};

/* ────────────────────────────────────────── Footer */

export default function Footer() {
	const { pathname } = useLocation();
	// Numbers and email resolve together from one place, so the details shown
	// on a division page can never disagree with each other (review feedback:
	// the contact details reached from the CTPL page needed checking).
	const { phones } = getContactForPath(pathname);
	// The footer's address differs from the rest of the site: a company page
	// keeps its own, everything else shows the HR mailboxes.
	const emails = getFooterEmailsForPath(pathname);

	return (
		<footer className="relative overflow-hidden border-t border-slate-200/80 bg-white/80 backdrop-blur-sm">
			{/* Top accent line */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-px"
				style={{
					background: `linear-gradient(90deg, transparent, ${PRIMARY}99, ${SECONDARY}99, transparent)`,
					boxShadow: `0 0 14px ${PRIMARY}55`,
				}}
			/>

			{/* Ambient blooms */}
			<div
				aria-hidden
				className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
				style={{ background: `${PRIMARY}33` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -bottom-40 right-0 h-[320px] w-[640px] rounded-full opacity-20 blur-3xl"
				style={{ background: `${SECONDARY}33` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -bottom-32 -left-16 h-[280px] w-[420px] rounded-full opacity-15 blur-3xl"
				style={{ background: `${PRIMARY}22` }}
			/>

			<div className="container-x relative py-14 md:py-16">
				{/* ── TOP: Motto on the left, the whole site map on the right ── */}
				<Reveal
					stagger={0.1}
					className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.3fr)] lg:gap-16">
					{/* The motto is artwork, not type: the words FUTURE / NEW PRESENT /
					    PRESENT and the line beside them live inside the image, so the
					    alt text has to carry them.
					    Side by side, the column runs the row's full height with the C
					    standing on its floor — level with the foot of the CTA buttons
					    (26 Sep: "make C touch the floor"). The label stays up with the
					    other column headings; any spare height opens between the two,
					    never less than the C's own mt-11. */}
					<Reveal
						from="up"
						className="lg:flex lg:flex-col lg:justify-between">
						<div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.36em] text-slate-500">
							<span
								className="inline-block h-px w-6"
								style={{ background: PRIMARY }}
							/>
							Creintors Motto
						</div>
						{/*
						 * The lead-in to "Stay afloat" (17 Sep change list) sits in the
						 * empty quarter right of the C's top half, as live text over the
						 * artwork. Every measure is a share of the image, read off the
						 * 1400 × 1122 file: the lines start where "Stay afloat" starts
						 * (x 566), and the first line's capitals stand level with the top
						 * line of the C (y 5) — "take text upwards till the top line of C"
						 * (18 Sep change list). The 0.27em is the gap between the top of
						 * a Calibri line box and its cap height at this line-height.
						 *
						 * The type is the artwork's own — Calibri Italic in #2A2A28 (Carlito,
						 * its metric twin, where Calibri is not installed) — and since 26 Sep
						 * its size too: "Stay afloat," is 265 wide in the file, which Carlito
						 * Italic sets at 58.5 of 1400, so 4.18cqw. The artwork's line pitch
						 * (71.5) is the same 1.22 used here. Sized in container units, it
						 * scales with the image.
						 *
						 * The margin above sets the C a step lower than the label — "C to
						 * be taken slightly down" (19 Sep) — so its top line meets the
						 * first row of links across the footer.
						 *
						 * Each line holds to one line (26 Sep). The longest runs about a
						 * fifth of the image's width past its right edge, into the grid
						 * gap; the site map steps right to stay clear of it. On phones
						 * there is no room beside the C at this size, so below sm the
						 * lines still wrap inside the image — in six lines, which is all
						 * the room there is above the rule over "Stay afloat".
						 */}
						<div className="relative mt-11 w-full max-w-[26rem] [container-type:inline-size] lg:max-w-none">
							<p
								className="absolute right-0 m-0 sm:right-auto sm:whitespace-nowrap"
								style={{
									left: "40.4%",
									top: "calc(0.36cqw - 0.27em)",
									fontFamily: 'Calibri, Carlito, "Segoe UI", sans-serif',
									fontStyle: "italic",
									fontSize: "4.18cqw",
									lineHeight: 1.22,
									color: "#2A2A28",
								}}>
								<span className="block">
									The present is continuously becoming our past,
								</span>
								<span className="block">
									The future is where we always aspire to be,
								</span>
								{/* Below sm these two run on as one sentence, so "afloat"
								    shares a line with "between the two..." and the lead-in
								    stops at six lines, clear of the grey rule over "Stay
								    afloat" (3 Oct: the seventh line sat on it). */}
								<span className="sm:block">
									But what matters is how we stay afloat
								</span>{" "}
								<span className="sm:block">between the two... </span>
							</p>
							<img
								src={motto}
								alt="The Creintors C, marked from bottom to top: present, new present, future. Stay afloat, to be the change you want to see..!"
								width={1400}
								height={1122}
								loading="lazy"
								decoding="async"
								className="block h-auto w-full"
							/>
						</div>
					</Reveal>

					{/*
					 * The site map and Reach Us share one grid (19 Sep change list):
					 * Companies takes the wider first column, which moves Resources
					 * "slightly right" and keeps the company names off a second line;
					 * About Us runs down the third column; and Reach Us comes up into
					 * the space under Companies and Resources rather than waiting
					 * below the longest list — "Reach Us can go a little above". The
					 * left padding keeps it clear of the motto's lead-in (26 Sep).
					 */}
					<Reveal
						stagger={0.1}
						className="grid gap-8 sm:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(0,1fr)] sm:gap-x-6 lg:gap-x-5 lg:pl-10 xl:gap-x-8 xl:pl-20">
						<FooterColumn
							title="Companies"
							className="sm:col-start-1 sm:row-start-1">
							<ul className="mt-4 space-y-2.5 text-[15px]">
								{DIVISIONS_LINKS.map((d) => (
									<li key={d.to}>
										<FooterLink
											to={d.to}
											accent={d.accent}>
											<DivisionLabel
												to={d.to}
												label={d.label}
											/>
										</FooterLink>
									</li>
								))}
							</ul>
						</FooterColumn>

						<FooterColumn
							title="Resources"
							className="sm:col-start-2 sm:row-start-1">
							<ul className="mt-4 space-y-2.5 text-[15px]">
								{RESOURCES_LINKS.map((r) => (
									<li key={r.to}>
										<FooterLink to={r.to}>{r.label}</FooterLink>
									</li>
								))}
							</ul>
						</FooterColumn>

						<FooterColumn
							title="About Us"
							className="sm:col-start-3 sm:row-span-2 sm:row-start-1">
							<ul className="mt-4 space-y-2.5 text-[15px]">
								{ABOUT_LINKS.map((a) => (
									<li key={a.to}>
										<FooterLink to={a.to}>{a.label}</FooterLink>
									</li>
								))}
							</ul>
						</FooterColumn>

						<FooterColumn
							title="Reach Us"
							className="sm:col-span-2 sm:col-start-1 sm:row-start-2">
							<address className="mt-4 space-y-2.5 text-[15px] not-italic text-slate-700">
								<ContactItem icon={<PinIcon />}>
									<span className="leading-relaxed">
										{CONTACT_INFO.address}
									</span>
								</ContactItem>

								{/* Number and email on the same line (19 Sep); they wrap
								    onto two only where the column is too narrow for both. */}
								<div className="flex flex-wrap gap-x-6 gap-y-2.5">
									{phones.map((p) => (
										<ContactItem
											key={p}
											icon={<PhoneIcon />}>
											<a
												href={`tel:${p.replace(/\s+/g, "")}`}
												translate="no"
												className="whitespace-nowrap transition-colors duration-300 hover:text-slate-900">
												{p}
											</a>
										</ContactItem>
									))}
									{emails.map((email) => (
										<ContactItem
											key={email}
											icon={<MailIcon />}>
											<a
												href={`mailto:${email}`}
												translate="no"
												className="break-all transition-colors duration-300 hover:text-slate-900">
												{email}
											</a>
										</ContactItem>
									))}
								</div>
							</address>

							{/*
							 * The social buttons lead the CTA row (26 Sep: "on the left of
							 * the 2 CTA buttons"). Side by side from lg, this column has no
							 * room for all seven, so the icons sit out to the left of the
							 * buttons, in the open space beside the motto's C, on the
							 * buttons' own line. Stacked, they are simply the row's first
							 * items and wrap above the buttons when the row runs out.
							 */}
							<div className="relative mt-6 flex flex-wrap items-center gap-2.5">
								<SocialLinks className="lg:absolute lg:right-[calc(100%+1.5rem)] lg:top-1/2 lg:-translate-y-1/2 lg:flex-nowrap" />
								<Link
									to="/contact"
									className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_28px_-10px_rgba(23,158,224,0.55)] transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_14px_36px_-10px_rgba(23,158,224,0.75)]"
									style={{
										background: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
									}}>
									<span
										aria-hidden
										className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover:translate-x-full"
									/>
									<span className="relative">Click to Innovate</span>
									<span
										aria-hidden
										className="relative transition-transform duration-300 group-hover:translate-x-1">
										→
									</span>
								</Link>
								<a
									href="#top"
									className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2.5 text-[13px] font-semibold text-slate-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900">
									<span
										aria-hidden
										className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
										↑
									</span>
									Back to top
								</a>
							</div>
						</FooterColumn>
					</Reveal>
				</Reveal>

				{/* ── Bottom legal bar ── */}
				<Reveal
					from="up"
					distance={20}
					duration={0.7}
					delay={0.15}
					className="mt-10 border-t border-slate-200 pt-5">
					<div className="flex flex-col items-start justify-between gap-3 text-[12.5px] text-slate-500 md:flex-row md:items-center">
						<div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
							<span>© {new Date().getFullYear()}</span>
							<Link
								to="/"
								className="font-semibold text-slate-700 underline-offset-4 transition-colors duration-300 hover:text-slate-900 hover:underline">
								Creintors Group Of Companies.
							</Link>
							<span className="text-slate-400">All rights reserved.</span>
						</div>

						<div className="flex flex-wrap items-center gap-x-5 gap-y-2">
							<Link
								to="/policies"
								className="transition-colors duration-300 hover:text-slate-900">
								Privacy Policy
							</Link>

							<span
								aria-hidden
								className="hidden h-3 w-px bg-slate-300 md:inline-block"
							/>
							<span className="text-slate-500">
								In collaboration with{" "}
								<a
									href="https://cubiccode.in/"
									target="_blank"
									rel="noopener noreferrer"
									className="group inline-flex items-center gap-1 font-semibold text-slate-700 underline-offset-4 transition-colors duration-300 hover:text-slate-900 hover:underline">
									Cubiccode
									<span
										aria-hidden
										className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
										↗
									</span>
								</a>
							</span>
						</div>
					</div>
				</Reveal>
			</div>
		</footer>
	);
}

/* ────────────────────────────────────────── Pieces */

function FooterColumn({
	title,
	children,
	className = "",
}: {
	title: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<Reveal
			from="up"
			className={className}>
			<div className="flex items-baseline gap-3">
				<h3 className="text-[11px] font-bold uppercase tracking-[0.32em] text-slate-500">
					{title}
				</h3>
			</div>
			<div
				className="mt-2 h-px w-8"
				style={{
					background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
				}}
			/>
			{children}
		</Reveal>
	);
}

function FooterLink({
	to,
	accent,
	children,
}: {
	to: string;
	accent?: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			to={to}
			className="group/lnk inline-flex items-center gap-2 text-slate-700 transition-all duration-300 hover:translate-x-1 hover:text-slate-900">
			{/* Leading dot: 4px at rest, doubling to 8px on hover. */}
			<span
				aria-hidden
				className="h-1 w-1 shrink-0 rounded-full transition-all duration-300 group-hover/lnk:h-2 group-hover/lnk:w-2"
				style={{
					background: accent ?? "#cbd5e1",
					boxShadow: accent ? `0 0 8px ${accent}66` : "none",
				}}
			/>
			<span className="relative">
				{children}
				{/* Underline wipes in on hover in the dot's own colour. Links with
				    no accent keep currentColor — their dot is a pale slate that
				    would be all but invisible as a hairline. */}
				<span
					aria-hidden
					className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover/lnk:w-full"
					style={{ background: accent ?? "currentColor" }}
				/>
			</span>
			<span
				aria-hidden
				className="ml-0.5 opacity-0 transition-opacity duration-300 group-hover/lnk:opacity-60">
				→
			</span>
		</Link>
	);
}

function ContactItem({
	icon,
	children,
}: {
	icon: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<div className="flex items-start gap-2">
			<span
				aria-hidden
				className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-slate-200 bg-white/60 text-slate-500"
				style={{ boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.6)` }}>
				{icon}
			</span>
			<span className="text-[14px] leading-relaxed">{children}</span>
		</div>
	);
}

/* ── Tiny inline icons ── */

function PinIcon() {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-3.5 w-3.5">
			<path d="M8 14s5-4.5 5-8a5 5 0 1 0-10 0c0 3.5 5 8 5 8Z" />
			<circle
				cx="8"
				cy="6"
				r="1.7"
			/>
		</svg>
	);
}

function PhoneIcon() {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-3.5 w-3.5">
			<path d="M3 3.5a1.5 1.5 0 0 1 1.5-1.5h1.2c.4 0 .76.27.87.66l.7 2.4a.9.9 0 0 1-.27.93l-1.07.9a9.5 9.5 0 0 0 4.18 4.18l.9-1.07a.9.9 0 0 1 .93-.27l2.4.7c.39.11.66.46.66.87v1.2a1.5 1.5 0 0 1-1.5 1.5h-.5C7.06 14 2 8.94 2 4v-.5Z" />
		</svg>
	);
}

function MailIcon() {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-3.5 w-3.5">
			<rect
				x="2"
				y="3.5"
				width="12"
				height="9"
				rx="1.5"
			/>
			<path d="m2.5 4.5 5.5 4 5.5-4" />
		</svg>
	);
}
