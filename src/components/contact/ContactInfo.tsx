/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { type ReactNode } from "react";
import { GROUP_EMAILS, GROUP_PHONES } from "../../lib/divisions";
import SocialLinks from "../SocialLinks";

const PRIMARY = "#179EE0";
const VIOLET = "#46367F";
const LIME = "#138708";

// Iframe-only embed URL (must stay in the <iframe src>, not used for links)
const MAP_EMBED_URL =
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354.2731661290302!2d74.47064524790358!3d15.769422012100348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf6f660e24280f%3A0xc290926b84c1b84d!2sCreintors%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1780476761159!5m2!1sen!2sin";
// Real Maps link for opening in a new tab
const MAP_LINK_URL = "https://maps.app.goo.gl/YWHbM7XkWkyfLTx26";

export default function ContactInfo() {
	return (
		/*
		 * A row of four under the form, with the map beneath it.
		 *
		 * These cards used to run down a narrow column beside the form, which
		 * is what forced the long email addresses to break mid-word. Across the
		 * full width each card gets a quarter of the page, so the type sizes
		 * step down a little to match.
		 */
		<div className="space-y-6">
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{/* Visit card */}
				<InfoCard
					accent={VIOLET}
					eyebrow="Visit"
					icon={<PinIcon />}>
					<div className="font-display text-lg font-semibold leading-tight text-slate-900 md:text-xl">
						Waghawade Road,
						<br />
						Belgaum, Karnataka, India
					</div>
					<a
						href={MAP_LINK_URL}
						target="_blank"
						rel="noreferrer"
						className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:gap-2.5"
						style={{ color: VIOLET }}>
						Open in Maps →
					</a>
				</InfoCard>

				<InfoCard
					accent={PRIMARY}
					eyebrow="Phone"
					icon={<PhoneIcon />}>
					{GROUP_PHONES.map((p, i) => (
						<a
							key={p}
							href={`tel:${p.replace(/\s+/g, "")}`}
							translate="no"
							className={`block whitespace-nowrap font-display text-lg font-semibold text-slate-900 transition hover:text-brand-600 md:text-xl${
								i > 0 ? " mt-1" : ""
							}`}>
							{p}
						</a>
					))}
				</InfoCard>

				{/* Review feedback C1: the general enquiry address is now shown here
				    as well, from the same source the footer uses. */}
				<InfoCard
					accent={VIOLET}
					eyebrow="Email"
					icon={<MailIcon />}>
					{GROUP_EMAILS.map((e, i) => (
						<a
							key={e}
							href={`mailto:${e}`}
							translate="no"
							className={`block font-display text-[15px] font-semibold text-slate-900 [overflow-wrap:anywhere] transition hover:text-brand-600 md:text-base${
								i > 0 ? " mt-1.5" : ""
							}`}>
							{e}
						</a>
					))}
				</InfoCard>

				<InfoCard
					accent={LIME}
					eyebrow="Hours"
					icon={<ClockIcon />}>
					<div className="font-display text-lg font-semibold text-slate-900 md:text-xl">
						Mon – Sat
					</div>
					<div className="mt-1 text-sm text-slate-600">
						9:30 AM – 5:40 PM IST
					</div>
				</InfoCard>
			</div>

			{/* The group's social profiles (26 Sep), on a strip in the cards' style. */}
			<div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-[0_18px_40px_-22px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:flex-row sm:items-center">
				<div>
					<div
						className="font-mono text-[10px] uppercase tracking-[0.32em]"
						style={{ color: PRIMARY }}>
						Follow us
					</div>
					<div className="mt-2 font-display text-lg font-semibold leading-tight text-slate-900 md:text-xl">
						Creintors Group of Companies
					</div>
				</div>
				<SocialLinks />
			</div>

			{/* Map card */}
			<div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/85 backdrop-blur-xl shadow-[0_18px_40px_-22px_rgba(15,23,42,0.18)] transition-all duration-500 hover:border-slate-300">
				<iframe
					title="Creintors Belgaum"
					className="block h-[21rem] w-full border-0 contrast-105 transition-[filter] duration-500"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					src={MAP_EMBED_URL}
				/>
			</div>
		</div>
	);
}

function InfoCard({
	accent,
	eyebrow,
	icon,
	children,
}: {
	accent: string;
	eyebrow: string;
	icon: ReactNode;
	children: ReactNode;
}) {
	return (
		<div
			className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-6 backdrop-blur-xl shadow-[0_18px_40px_-22px_rgba(15,23,42,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-slate-300"
			style={{ boxShadow: `0 24px 60px -30px ${accent}40` }}>
			<span
				aria-hidden
				className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
				style={{ background: accent }}
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-60 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
					boxShadow: `0 0 12px ${accent}55`,
				}}
			/>

			<div className="relative">
				<div className="flex items-center gap-3">
					<div
						className="grid h-10 w-10 place-items-center rounded-xl border transition-transform duration-500 group-hover:scale-110"
						style={{
							background: `${accent}14`,
							borderColor: `${accent}55`,
							color: accent,
							boxShadow: `0 8px 24px -8px ${accent}55`,
						}}>
						{icon}
					</div>
					<div
						className="font-mono text-[10px] uppercase tracking-[0.32em]"
						style={{ color: accent }}>
						{eyebrow}
					</div>
				</div>
				<div className="mt-5">{children}</div>
			</div>
		</div>
	);
}

function PinIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-5 w-5"
			aria-hidden>
			<path d="M12 22s7-7.6 7-12a7 7 0 1 0-14 0c0 4.4 7 12 7 12Z" />
			<circle
				cx="12"
				cy="10"
				r="2.5"
			/>
		</svg>
	);
}
function PhoneIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-5 w-5"
			aria-hidden>
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.36a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
		</svg>
	);
}
function MailIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-5 w-5"
			aria-hidden>
			<rect
				x="2.5"
				y="4.5"
				width="19"
				height="15"
				rx="2.5"
			/>
			<path d="m3.5 6.5 8.5 6 8.5-6" />
		</svg>
	);
}
function ClockIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-5 w-5"
			aria-hidden>
			<circle
				cx="12"
				cy="12"
				r="9"
			/>
			<path d="M12 7v5l3 2" />
		</svg>
	);
}
