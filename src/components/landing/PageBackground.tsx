import { PRIMARY, SECONDARY } from "../../lib/theme";

/**
 * PageBackground light industrial backdrop. Soft cool-grey gradient and
 * subtle brand blooms.
 */
export default function PageBackground() {
	return (
		<div
			aria-hidden
			className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
			<div
				className="absolute inset-0"
				style={{
					background: `
						radial-gradient(1100px 700px at 88% -10%, ${PRIMARY}1f, transparent 60%),
						radial-gradient(900px 700px at -5% 110%, ${SECONDARY}18, transparent 60%),
						linear-gradient(180deg, #EEF6FB 0%, #DCEAF4 60%, #EEF6FB 100%)
					`,
				}}
			/>

			<div
				className="absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full blur-3xl opacity-40 animate-float"
				style={{
					background: `radial-gradient(circle, ${PRIMARY}33, transparent 70%)`,
				}}
			/>
			<div
				className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full blur-3xl opacity-30"
				style={{
					background: `radial-gradient(circle, ${SECONDARY}26, transparent 70%)`,
				}}
			/>
		</div>
	);
}
