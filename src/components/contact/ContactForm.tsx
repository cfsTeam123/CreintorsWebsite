/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useRef, useState, type FormEvent } from "react";
import Field from "./Field";

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
	const cardRef = useRef<HTMLDivElement | null>(null);
	const rafRef = useRef<number | null>(null);
	const [status, setStatus] = useState<Status>("idle");

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("sending");
		setTimeout(() => setStatus("sent"), 900);
	};

	const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
		const card = cardRef.current;
		if (!card) return;
		const rect = card.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width;
		const py = (e.clientY - rect.top) / rect.height;
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		rafRef.current = requestAnimationFrame(() => {
			card.style.setProperty("--mx", `${px * 100}%`);
			card.style.setProperty("--my", `${py * 100}%`);
		});
	};

	const handleLeave = () => {
		const card = cardRef.current;
		if (!card) return;
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		card.style.setProperty("--mx", "50%");
		card.style.setProperty("--my", "50%");
	};

	return (
		<div
			ref={cardRef}
			onPointerMove={handleMove}
			onPointerLeave={handleLeave}
			className="relative"
			style={
				{
					"--mx": "50%",
					"--my": "50%",
				} as React.CSSProperties
			}>
			<div
				aria-hidden
				className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-40 blur-3xl"
				style={{
					background:
						"radial-gradient(circle at var(--mx) var(--my), rgba(23,158,224,0.30), transparent 60%)",
				}}
			/>
			<div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-8 backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25),0_0_0_1px_rgba(255,255,255,0.85)_inset] md:p-10">
				{/* Top brand edge */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-8 top-0 h-px"
					style={{
						background:
							"linear-gradient(90deg, transparent, rgba(23,158,224,0.85), rgba(70,54,127,0.7), transparent)",
						boxShadow: "0 0 12px rgba(23,158,224,0.45)",
					}}
				/>
				{/* Mouse spotlight */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0"
					style={{
						background:
							"radial-gradient(420px at var(--mx) var(--my), rgba(23,158,224,0.10), transparent 60%)",
					}}
				/>

				<div className="relative">
					<div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
						<div>
							<div className="font-mono text-[10px] uppercase tracking-[0.32em] text-brand-600">
								Send a message
							</div>
							<h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
								Let's start a conversation.
							</h2>
						</div>
						<p className="text-sm text-slate-600 lg:pb-1.5">
							We'll route your message to the right company engineer.
						</p>
					</div>

					<form
						onSubmit={submit}
						className="mt-7 flex flex-col gap-5">
						{/* Four across on desktop. Stacked, these left most of the
						    card empty now that it spans the page. */}
						<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
							<Field
								label="Your name"
								name="name"
								placeholder="Jane Engineer"
								required
							/>
							<Field
								label="Email"
								name="email"
								type="email"
								placeholder="you@company.com"
								required
							/>
							<Field
								label="Company"
								name="company"
								placeholder="Your organisation"
							/>

							<label className="group relative block">
								<span className="mb-2 block text-xs uppercase tracking-[0.32em] text-slate-500 transition group-focus-within:text-brand-600">
									Department
								</span>
								<select
									name="department"
									className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(23,158,224,0.12)]"
									defaultValue="">
									<option
										value=""
										disabled>
										Choose a company
									</option>
									<option value="general">General Enquiry</option>
									<option value="Creintors">Creintors Test Rigs</option>
									<option value="cautomate">C-Automate Automation</option>
									<option value="crienviro">Crienviro Water Treatment</option>
									<option value="education">3i Ecosystem Education</option>
									<option value="careers">Careers</option>
								</select>
							</label>
						</div>

						<Field
							label="What can we engineer for you?"
							name="message"
							textarea
							rows={4}
							placeholder="Tell us a little about the project…"
							required
						/>

						<div className="mt-2 flex flex-wrap items-center gap-4">
							<button
								type="submit"
								disabled={status !== "idle"}
								className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03] disabled:opacity-70"
								style={{
									background:
										"linear-gradient(120deg, #179ee0 0%, #46367f 100%)",
									boxShadow: "0 18px 40px -12px rgba(23,158,224,0.55)",
								}}>
								<span
									aria-hidden
									className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
								/>
								{status === "idle" && (
									<>
										<span className="relative">Send Message</span>
										<span
											aria-hidden
											className="relative transition-transform duration-300 group-hover/btn:translate-x-1">
											→
										</span>
									</>
								)}
								{status === "sending" && (
									<span className="relative">Sending…</span>
								)}
								{status === "sent" && (
									<span className="relative">Received ✓</span>
								)}
							</button>
							<p className="text-xs text-slate-500">
								By submitting, you agree to be contacted by Creintors Group.
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
