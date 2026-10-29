/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import SectionWrapper from "../SectionWrapper";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function FormSection() {
	return (
		<SectionWrapper
			className="relative py-10"
			stagger={false}>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 overflow-hidden">
				<div
					className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full opacity-30 blur-[120px]"
					style={{
						background:
							"radial-gradient(circle, rgba(23,158,224,0.25), transparent 70%)",
					}}
				/>
				<div
					className="absolute -right-32 bottom-10 h-[24rem] w-[24rem] rounded-full opacity-25 blur-[120px]"
					style={{
						background:
							"radial-gradient(circle, rgba(70,54,127,0.20), transparent 70%)",
					}}
				/>
			</div>
			{/*
			 * Stacked, not side by side.
			 *
			 * The form used to share the row with the address, phone, email and
			 * map cards, which squeezed both: the fields ran in a narrow column
			 * and the contact details wrapped mid-word. The form now takes the
			 * full width of the page and lays its fields out across it, and
			 * everything that was to its right sits underneath.
			 */}
			<div className="container-x relative flex flex-col gap-10">
				<ContactForm />
				<ContactInfo />
			</div>
		</SectionWrapper>
	);
}
