/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useLocation } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import { PRIMARY, SECONDARY } from "../../lib/theme";
import { getContactForPath } from "../../lib/divisions";

export default function ClosingCtaSection() {
	// These two buttons previously carried a hard-coded number (one of the
	// C Automate lines) and a hello@ address used nowhere else on the site.
	// They now resolve from the same source as the footer and the contact page,
	// so every contact detail on the site agrees (review feedback C1).
	const { pathname } = useLocation();
	const { phones, emails } = getContactForPath(pathname);
	const phone = phones[0];
	const email = emails[0];

	return (
		<SectionWrapper
			className="py-10"
			stagger={false}>
			<div className="container-x">
				<div
					className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-[0_30px_80px_-30px_rgba(15,23,42,0.4),0_0_0_1px_rgba(255,255,255,0.85)_inset] md:p-16"
					style={{
						backgroundImage: `radial-gradient(70% 70% at 50% 0%, ${PRIMARY}10, transparent 70%)`,
					}}>
					<div
						aria-hidden
						className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-50 blur-3xl"
						style={{ background: `${PRIMARY}33` }}
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
						style={{ background: `${SECONDARY}33` }}
					/>
					{/* Top brand edge */}
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-12 top-0 h-px opacity-90"
						style={{
							background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)`,
							boxShadow: `0 0 14px ${PRIMARY}66`,
						}}
					/>

					<div className="relative">
						<p
							className="font-mono text-xs uppercase tracking-[0.4em]"
							style={{ color: SECONDARY }}>
							We're listening
						</p>
						<h2 className="section-title mx-auto mt-5 max-w-3xl">
							<span className="text-slate-900">Come </span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
								}}>
								connect
							</span>
							<span className="text-slate-900"> with us.</span>
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-slate-600 md:text-lg">
							Whether it's a coffee, a campus visit, or a 100-page RFQ, we're
							ready when you are.
						</p>
						<div className="mt-10 flex flex-wrap justify-center gap-3">
							<a
								href={`tel:${phone.replace(/\s+/g, "")}`}
								translate="no"
								className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
								style={{
									background: `linear-gradient(120deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
									boxShadow: `0 18px 44px -15px ${PRIMARY}aa`,
								}}>
								<span
									aria-hidden
									className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
								/>
								<span className="relative">Call Us</span>
								<span
									aria-hidden
									className="relative transition-transform duration-300 group-hover/btn:translate-x-1">
									→
								</span>
							</a>
							<a
								href={`mailto:${email}?subject=${encodeURIComponent(
									"Hello Creintors",
								)}`}
								className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50">
								Email Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
