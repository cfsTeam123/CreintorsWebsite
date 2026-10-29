/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import imgClosing from "../../assets/industries/construction.jpg.jpeg";

const BRAND = "#1ac8ff";
const VIOLET = "#46367f";

export default function ClosingSection() {
	return (
		<SectionWrapper className="section-tint py-10">
			<div className="container-x relative">
				<div
					className="reveal relative overflow-hidden rounded-[2rem] border p-10 md:p-16"
					style={{
						borderColor: "#C7DCEC",
						backgroundColor: "#F1F7FB",
						backgroundImage: `linear-gradient(135deg, ${BRAND}14 0%, #F1F7FB 50%, ${VIOLET}18 100%)`,
						boxShadow:
							"0 30px 80px -28px rgba(15,23,42,0.2), 0 0 0 1px rgba(255,255,255,0.85) inset",
					}}>
					<div className="absolute inset-0 -z-10">
						<img
							src={imgClosing}
							alt=""
							className="h-full w-full object-cover opacity-15"
						/>
						<div
							aria-hidden
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(135deg, rgba(241,247,251,0.85) 0%, rgba(241,247,251,0.7) 50%, rgba(241,247,251,0.92) 100%)",
							}}
						/>
					</div>
					<div
						aria-hidden
						className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
						style={{ background: BRAND }}
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
						style={{ background: VIOLET }}
					/>

					<div className="relative text-center md:py-6">
						<div
							className="font-mono text-xs uppercase tracking-[0.4em]"
							style={{ color: BRAND }}>
							Closing thought
						</div>
						<h2 className="section-title mt-5">
							Learn. <span className="text-slate-400">Experience.</span>
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage: `linear-gradient(120deg, ${BRAND}, ${VIOLET})`,
								}}>
								{" "}Transform.
							</span>
						</h2>
						<p className="mx-auto mt-6 max-w-2xl text-slate-600 md:text-lg">
							Because every breakthrough begins with <span className="font-semibold text-slate-900">learning,</span>  grows through
{" "}							<span className="font-semibold text-slate-900">experience,</span> and creates <span className="font-semibold text-slate-900">transformation.</span>{" "}
							
						</p>
						<div className="mt-10 flex flex-wrap justify-center gap-3">
							<Link
								to="/contact"
								className="btn-primary"
								style={{
									background: `linear-gradient(120deg, ${BRAND}, ${VIOLET})`,
								}}>
								Partner With Us →
							</Link>
							<Link
								to="/"
								className="btn-ghost">
								Back to Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
