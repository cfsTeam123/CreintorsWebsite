/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useId, type CSSProperties } from "react";
import { GROUP_SOCIALS, type SocialId } from "../lib/divisions";
import { cn } from "../lib/utils";

/** Each network's own colour — the button's hover glow takes it. */
const BRAND_COLOR: Record<SocialId, string> = {
	linkedin: "#0A66C2",
	instagram: "#E1306C",
	facebook: "#1877F2",
	youtube: "#FF0000",
	x: "#000000",
};

/**
 * The group's social profiles as a row of round buttons, each carrying its
 * network's own full-colour mark (26 Sep: "social media colourful icons in
 * footer and contact us page"). The marks are drawn inline — the icon set in
 * use (lucide) no longer ships brand logos. Paths are Simple Icons' (CC0).
 */
export default function SocialLinks({ className }: { className?: string }) {
	return (
		<ul
			aria-label="Creintors on social media"
			className={cn(
				"m-0 flex list-none flex-wrap items-center gap-2.5 p-0",
				className,
			)}>
			{GROUP_SOCIALS.map((s) => (
				<li key={s.id}>
					<a
						href={s.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Creintors on ${s.label}`}
						title={s.label}
						className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white shadow-[0_6px_16px_-8px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_12px_24px_-10px_var(--brand)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
						style={{ "--brand": BRAND_COLOR[s.id] } as CSSProperties}>
						<SocialIcon id={s.id} />
					</a>
				</li>
			))}
		</ul>
	);
}

function SocialIcon({ id }: { id: SocialId }) {
	const gradientId = useId();
	const svg = {
		viewBox: "0 0 24 24",
		className: "h-5 w-5",
		"aria-hidden": true,
	} as const;

	switch (id) {
		case "linkedin":
			return (
				<svg {...svg}>
					<path
						fill={BRAND_COLOR.linkedin}
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
					/>
				</svg>
			);
		case "instagram":
			// The app mark: the gradient tile with the camera in white.
			return (
				<svg {...svg}>
					<defs>
						<radialGradient
							id={gradientId}
							cx="0.3"
							cy="1.07"
							r="1.5">
							<stop
								offset="0"
								stopColor="#fdf497"
							/>
							<stop
								offset="0.05"
								stopColor="#fdf497"
							/>
							<stop
								offset="0.45"
								stopColor="#fd5949"
							/>
							<stop
								offset="0.6"
								stopColor="#d6249f"
							/>
							<stop
								offset="0.9"
								stopColor="#285AEB"
							/>
						</radialGradient>
					</defs>
					<rect
						x="0.5"
						y="0.5"
						width="23"
						height="23"
						rx="6.5"
						fill={`url(#${gradientId})`}
					/>
					<rect
						x="5.5"
						y="5.5"
						width="13"
						height="13"
						rx="4"
						fill="none"
						stroke="#fff"
						strokeWidth="1.8"
					/>
					<circle
						cx="12"
						cy="12"
						r="3.1"
						fill="none"
						stroke="#fff"
						strokeWidth="1.8"
					/>
					<circle
						cx="15.9"
						cy="8.1"
						r="0.95"
						fill="#fff"
					/>
				</svg>
			);
		case "facebook":
			return (
				<svg {...svg}>
					<path
						fill={BRAND_COLOR.facebook}
						d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
					/>
				</svg>
			);
		case "youtube":
			return (
				<svg {...svg}>
					<path
						fill={BRAND_COLOR.youtube}
						d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
					/>
					<path
						fill="#fff"
						d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
					/>
				</svg>
			);
		case "x":
			return (
				<svg
					{...svg}
					className="h-[18px] w-[18px]">
					<path
						fill={BRAND_COLOR.x}
						d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
					/>
				</svg>
			);
	}
}
