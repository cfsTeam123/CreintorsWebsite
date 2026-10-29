import { type ReactNode } from "react";

type Props = {
	id?: string;
	children: ReactNode;
	className?: string;
	stagger?: boolean;
};

export default function SectionWrapper({
	id,
	children,
	className = "",
}: Props) {
	return (
		<section
			id={id}
			className={`relative ${className}`}>
			{children}
		</section>
	);
}
