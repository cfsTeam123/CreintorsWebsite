/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				// Headings → Cambria (serif)
				display: ["Cambria", "Georgia", "'Times New Roman'", "serif"],
				heading: ["Cambria", "Georgia", "'Times New Roman'", "serif"],
				// Sub-headings → Ebrima (humanist sans)
				subheading: ["Ebrima", "'Segoe UI'", "Tahoma", "sans-serif"],
				body: ["Inter", "system-ui", "sans-serif"],
				mono: ["'JetBrains Mono'", "monospace"],
			},
			colors: {
				/*
				 * Light industrial palette.
				 * `ink-*` historically meant the dark backgrounds; in the light theme it
				 * doubles as the slate text scale so existing utility usage stays valid.
				 */
				ink: {
					950: "#0b1220",
					900: "#0f172a",
					800: "#1e293b",
					700: "#334155",
					600: "#475569",
					500: "#64748b",
					400: "#94a3b8",
					300: "#cbd5e1",
					200: "#e2e8f0",
					100: "#eef2f8",
					50: "#f7f9fc",
				},
				surface: {
					0: "#ffffff",
					1: "#f7f9fc",
					2: "#eef2f8",
					3: "#e2e8f0",
				},
				brand: {
					50: "#e9f6fd",
					100: "#c7e8f9",
					200: "#94d3f3",
					300: "#5cbaeb",
					400: "#2da6e3",
					500: "#179ee0",
					600: "#0f80b8",
					700: "#0d6691",
					800: "#0a4f70",
					900: "#073a52",
				},
				deep: {
					400: "#7c6bbf",
					500: "#5a4a9a",
					600: "#46367f",
					700: "#382b66",
					800: "#2a204d",
				},
				accent: {
					lime: "#84cc16",
					violet: "#46367f",
					orange: "#ea580c",
					steel: "#1e293b",
				},
			},
			backgroundImage: {
				grid:
					"linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
				radial: "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
				shine:
					"linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)",
				blueprint:
					"linear-gradient(rgba(23,158,224,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(23,158,224,0.08) 1px, transparent 1px)",
			},
			boxShadow: {
				glow: "0 0 80px -10px rgba(23,158,224,0.35)",
				"glow-lg": "0 0 140px -20px rgba(23,158,224,0.45)",
				inset: "inset 0 1px 0 0 rgba(255,255,255,0.9)",
				soft: "0 18px 40px -22px rgba(15,23,42,0.18)",
				"soft-lg": "0 30px 80px -30px rgba(15,23,42,0.22)",
			},
			keyframes: {
				float: {
					"0%,100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				shimmer: {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" },
				},
				spinSlow: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				pulseGlow: {
					"0%,100%": { opacity: "0.6" },
					"50%": { opacity: "1" },
				},
				logoIn: {
					"0%": { opacity: "0", transform: "scale(0.9)", filter: "blur(8px)" },
					"60%": { filter: "blur(0)" },
					"100%": { opacity: "1", transform: "scale(1)", filter: "blur(0)" },
				},
				logoGlow: {
					"0%,100%": { opacity: "0.35" },
					"50%": { opacity: "0.65" },
				},
			},
			animation: {
				float: "float 6s ease-in-out infinite",
				shimmer: "shimmer 3s linear infinite",
				spinSlow: "spinSlow 24s linear infinite",
				pulseGlow: "pulseGlow 3s ease-in-out infinite",
				logoIn: "logoIn 1.4s cubic-bezier(0.22,1,0.36,1) both",
				logoGlow: "logoGlow 4s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
