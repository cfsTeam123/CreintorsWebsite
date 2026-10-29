/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";

export type FilterTab<T extends string> = {
	id: T;
	label: string;
	/** Shown beside the label. `null` or left out hides it. */
	count?: number | null;
	/** Nothing is left behind it — e.g. a search has ruled it out. */
	disabled?: boolean;
};

type Props<T extends string> = {
	tabs: FilterTab<T>[];
	active: T;
	onChange: (id: T) => void;
	/** What the row filters, for assistive tech — e.g. "Filter solutions by category". */
	label: string;
	/** Unique per row on the page: the chosen chip's highlight slides between buttons by it. */
	layoutId: string;
	/** The chosen chip's gradient, in the page's own colours. */
	primary: string;
	secondary: string;
	/**
	 * `chip` — the white patches of the C-Automate solutions filter, which the
	 * 19 Sep change list made the pattern for every page ("filter tabs as in
	 * automation page", "filters in white patches"). `pill` — the smaller
	 * second row under a chip, for the chosen one's own sub-groups.
	 */
	variant?: "chip" | "pill";
	/** The ground the row sits on. Chips read on either; pills take their ink from it. */
	surface?: "dark" | "light";
	className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;
const SPRING = { type: "spring", stiffness: 380, damping: 32 } as const;

/**
 * A row of filter buttons with a highlight that slides to the chosen one.
 *
 * Toggle buttons (`aria-pressed`) in a labelled group rather than an ARIA tab
 * list: each one narrows the list below it in place, and a tab list would
 * promise arrow-key roving and tab panels that a filter does not have.
 */
export default function FilterTabs<T extends string>({
	tabs,
	active,
	onChange,
	label,
	layoutId,
	primary,
	secondary,
	variant = "chip",
	surface = "dark",
	className = "",
}: Props<T>) {
	const reduceMotion = useReducedMotion();
	const slide = reduceMotion ? { duration: 0 } : SPRING;
	const chip = variant === "chip";
	const dark = surface === "dark";

	return (
		<div
			role="group"
			aria-label={label}
			className={`flex flex-wrap items-center ${chip ? "gap-2.5 sm:gap-4" : "gap-2.5"} ${className}`}>
			{tabs.map((t) => {
				const isActive = t.id === active;
				// A chosen chip is never greyed out, even when a search empties it,
				// so the visitor can still see where they are.
				const disabled = !isActive && !!t.disabled;
				const hasCount = t.count !== null && t.count !== undefined;

				if (chip) {
					return (
						<motion.button
							key={t.id}
							type="button"
							aria-pressed={isActive}
							disabled={disabled}
							onClick={() => onChange(t.id)}
							whileHover={disabled || reduceMotion ? undefined : { y: -2 }}
							whileTap={disabled || reduceMotion ? undefined : { scale: 0.97 }}
							transition={{ duration: 0.2, ease: EASE }}
							/* Long labels ("Automated Vertical Storage Solutions") wrap
							   inside the chip on a phone rather than push it past the
							   screen edge; from `sm` up every chip holds one line. */
							className={`group relative inline-flex max-w-full items-center gap-2.5 overflow-hidden rounded-2xl px-4 py-3 text-left text-[0.9rem] font-bold leading-snug tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-[0.95rem] ${
								disabled ? "cursor-not-allowed opacity-40" : ""
							}`}
							style={
								{
									color: isActive ? "#fff" : "#334155",
									"--tw-ring-color": dark ? "rgba(255,255,255,0.7)" : primary,
								} as CSSProperties
							}>
							{isActive ?
								<motion.span
									layoutId={layoutId}
									aria-hidden
									className="absolute inset-0 rounded-2xl"
									style={{
										background: `linear-gradient(120deg, ${primary}, ${secondary})`,
										// On a section in the same colour, a thin white rim is
										// what keeps the chosen chip from sinking into it.
										boxShadow: `0 18px 38px -14px ${primary}99, 0 0 0 ${dark ? "1.5px rgba(255,255,255,0.6)" : `1px ${primary}66`} inset`,
									}}
									transition={slide}
								/>
							:	<span
									aria-hidden
									className="absolute inset-0 rounded-2xl border bg-white/75 backdrop-blur-sm transition-all duration-300 group-hover:border-[color:var(--chip-hover)] group-hover:bg-white group-hover:shadow-[0_14px_28px_-18px_rgba(15,23,42,0.45)]"
									style={
										{
											borderColor: `${primary}26`,
											"--chip-hover": `${primary}66`,
										} as CSSProperties
									}
								/>
							}

							<span
								aria-hidden
								className="relative z-10 h-2 w-2 shrink-0 rounded-full transition-all duration-300"
								style={{
									background: isActive ? "#fff" : primary,
									boxShadow:
										isActive ?
											"0 0 10px rgba(255,255,255,0.9)"
										:	`0 0 8px ${primary}55`,
								}}
							/>
							<span className="relative z-10 sm:whitespace-nowrap">
								{t.label}
							</span>
							{hasCount && (
								<span
									className="relative z-10 text-[0.78rem] font-semibold tabular-nums"
									style={{
										color: isActive ? "rgba(255,255,255,0.75)" : "#64748b",
									}}>
									{t.count}
								</span>
							)}
						</motion.button>
					);
				}

				return (
					<button
						key={t.id}
						type="button"
						aria-pressed={isActive}
						disabled={disabled}
						onClick={() => onChange(t.id)}
						className={`relative inline-flex max-w-full items-center gap-2 rounded-full px-4 py-2 text-left text-[0.8rem] font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 ${
							dark ?
								"focus-visible:ring-white/60"
							:	"focus-visible:ring-slate-400"
						} ${disabled ? "cursor-not-allowed opacity-40" : ""}`}
						style={{
							color:
								dark ?
									isActive ? "#fff"
									:	"rgba(255,255,255,0.72)"
								: isActive ? primary
								: "#475569",
						}}>
						{isActive ?
							<motion.span
								layoutId={layoutId}
								aria-hidden
								className="absolute inset-0 rounded-full"
								style={
									dark ?
										{
											background: "rgba(255,255,255,0.18)",
											boxShadow: "0 0 0 1px rgba(255,255,255,0.45) inset",
										}
									:	{
											background: `${primary}14`,
											boxShadow: `0 0 0 1px ${primary}55 inset`,
										}
								}
								transition={slide}
							/>
						:	<span
								aria-hidden
								className={`absolute inset-0 rounded-full border transition-colors duration-300 ${
									dark ?
										"border-white/20 hover:border-white/40"
									:	"border-slate-300 hover:border-slate-400"
								}`}
							/>
						}
						<span className="relative z-10 sm:whitespace-nowrap">{t.label}</span>
						{hasCount && (
							<span
								className={`relative z-10 text-[0.72rem] tabular-nums ${
									dark ? "text-white/55" : "text-slate-400"
								}`}>
								{t.count}
							</span>
						)}
					</button>
				);
			})}
		</div>
	);
}
