/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Globe } from "lucide-react";
import { PRIMARY, SECONDARY } from "../lib/theme";
import {
	DEFAULT_LANGUAGE,
	LANGUAGES,
	getSavedLanguage,
	restoreSavedLanguage,
	setLanguage,
	type LanguageCode,
} from "../lib/translate";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Language selector for the header.
 *
 * Collapsed it is a globe plus the current language's full name in its own
 * script -- "मराठी", never a clipped "मरा" -- sized to sit beside the menu
 * button without competing with it. Open it lists the four languages in their
 * own scripts with a tick on the active one.
 *
 * The whole control carries `translate="no"` so Google leaves the language
 * names themselves alone: "हिंदी" must stay "हिंदी" whatever the page is
 * currently showing.
 */
export default function LanguageSwitcher({
	className = "",
}: {
	className?: string;
}) {
	const [current, setCurrent] = useState<LanguageCode>(DEFAULT_LANGUAGE);
	const [open, setOpen] = useState(false);
	const [busy, setBusy] = useState(false);
	const rootRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

	// Restore the previous choice once, on first mount.
	useEffect(() => {
		setCurrent(getSavedLanguage());
		let cancelled = false;
		void restoreSavedLanguage().then((code) => {
			if (!cancelled) setCurrent(code);
		});
		return () => {
			cancelled = true;
		};
	}, []);

	// Close on outside click and on Escape.
	useEffect(() => {
		if (!open) return;
		const onPointerDown = (e: PointerEvent) => {
			if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
		};
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setOpen(false);
				buttonRef.current?.focus();
			}
		};
		document.addEventListener("pointerdown", onPointerDown);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("pointerdown", onPointerDown);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);

	// Move focus into the list when it opens, so keyboard users land on it.
	useEffect(() => {
		if (!open) return;
		const index = LANGUAGES.findIndex((l) => l.code === current);
		const target = itemRefs.current[index < 0 ? 0 : index];
		const id = window.setTimeout(() => target?.focus(), 40);
		return () => window.clearTimeout(id);
	}, [open, current]);

	const choose = async (code: LanguageCode) => {
		setOpen(false);
		buttonRef.current?.focus();
		if (code === current) return;

		const previous = current;
		setCurrent(code);
		setBusy(true);
		const ok = await setLanguage(code);
		setBusy(false);
		// Widget blocked or offline: put the control back where it was rather
		// than claim a language the page is not actually showing.
		if (!ok) setCurrent(previous);
	};

	/** Roving focus between the options. */
	const onItemKeyDown = (e: React.KeyboardEvent, index: number) => {
		if (e.key === "ArrowDown" || e.key === "ArrowUp") {
			e.preventDefault();
			const next =
				e.key === "ArrowDown" ?
					(index + 1) % LANGUAGES.length
				:	(index - 1 + LANGUAGES.length) % LANGUAGES.length;
			itemRefs.current[next]?.focus();
		} else if (e.key === "Home") {
			e.preventDefault();
			itemRefs.current[0]?.focus();
		} else if (e.key === "End") {
			e.preventDefault();
			itemRefs.current[LANGUAGES.length - 1]?.focus();
		}
	};

	const active =
		LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

	return (
		<div
			ref={rootRef}
			translate="no"
			className={`notranslate relative ${className}`}>
			<button
				ref={buttonRef}
				type="button"
				onClick={() => setOpen((o) => !o)}
				aria-haspopup="listbox"
				aria-expanded={open}
				aria-label={`Language: ${active.englishName}. Change language`}
				className="group inline-flex h-10 items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 text-slate-700 backdrop-blur-md transition-all duration-300 hover:border-slate-300 hover:bg-white hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 sm:gap-2 sm:px-3.5">
				<Globe
					aria-hidden
					className={`h-4 w-4 shrink-0 transition-transform duration-500 ${
						busy ? "animate-spin" : "group-hover:rotate-12"
					}`}
				/>
				<span className="whitespace-nowrap text-[13px] font-semibold leading-tight tracking-wide">
					{active.label}
				</span>
				<svg
					aria-hidden
					viewBox="0 0 12 12"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={`hidden h-3 w-3 shrink-0 opacity-70 transition-transform duration-300 sm:block ${
						open ? "rotate-180" : ""
					}`}>
					<polyline points="3 4.5 6 7.5 9 4.5" />
				</svg>
			</button>

			<AnimatePresence>
				{open && (
					<motion.ul
						role="listbox"
						aria-label="Select a language"
						initial={{ opacity: 0, y: -6, scale: 0.96 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -6, scale: 0.96 }}
						transition={{ duration: 0.22, ease: EASE }}
						/*
						 * Anchored to the right edge so it can never run off the side of
						 * a phone screen, and width-capped to stay inside the viewport.
						 */
						className="absolute right-0 z-50 mt-2 w-44 max-w-[calc(100vw-2rem)] origin-top-right overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl">
						{LANGUAGES.map((lang, i) => {
							const isActive = lang.code === current;
							return (
								<li
									key={lang.code}
									role="option"
									aria-selected={isActive}>
									<button
										ref={(node) => {
											itemRefs.current[i] = node;
										}}
										type="button"
										onClick={() => void choose(lang.code)}
										onKeyDown={(e) => onItemKeyDown(e, i)}
										className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 ${
											isActive ?
												"font-semibold text-slate-900"
											:	"font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
										}`}
										style={
											isActive ?
												{
													background: `linear-gradient(135deg, ${PRIMARY}1f, ${SECONDARY}14)`,
												}
											:	undefined
										}>
										<span className="flex items-center gap-2.5">
											<span
												aria-hidden
												className="h-1.5 w-1.5 shrink-0 rounded-full transition-opacity"
												style={{
													background: PRIMARY,
													boxShadow: `0 0 8px ${PRIMARY}88`,
													opacity: isActive ? 1 : 0.25,
												}}
											/>
											{lang.label}
										</span>
										{isActive && (
											<Check
												aria-hidden
												className="h-4 w-4 shrink-0"
												style={{ color: PRIMARY }}
											/>
										)}
									</button>
								</li>
							);
						})}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
}
