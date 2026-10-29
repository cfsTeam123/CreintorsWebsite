/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { motion, useReducedMotion, type Variants } from "motion/react";
import { type ReactNode, type ElementType, type CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade";

type Props = {
	children: ReactNode;
	/** Direction the element slides in from. `fade` does opacity only. */
	from?: Direction;
	/** Pixels of travel. Defaults to 28 for vertical, 40 for horizontal. */
	distance?: number;
	/** Delay in seconds before this element starts animating. */
	delay?: number;
	/** Duration in seconds. */
	duration?: number;
	/**
	 * Stagger children by this many seconds. When set, direct child
	 * <Reveal> components animate sequentially. They should omit their
	 * own `delay` to participate in the stagger.
	 */
	stagger?: number;
	/**
	 * `inView` (default) plays once when scrolled into view.
	 * `mount` plays immediately on mount — use for above-the-fold elements.
	 */
	trigger?: "inView" | "mount";
	/** IntersectionObserver root-margin tweak for inView trigger. */
	margin?: string;
	/** Element tag to render. Defaults to `div`. */
	as?: ElementType;
	className?: string;
	style?: CSSProperties;
};

const EASE = [0.22, 1, 0.36, 1] as const;

function offsetFor(dir: Direction, distance?: number) {
	// Short travel on purpose. The previous defaults (56 / 80px) over nearly a
	// second read as whole sections sliding into place as you scrolled, which is
	// what made the page feel like it was snapping between sections rather than
	// scrolling continuously. A small offset still registers as an entrance
	// without the content appearing to move independently of the scroll.
	const d = distance ?? (dir === "left" || dir === "right" ? 32 : 24);
	switch (dir) {
		case "up":
			return { x: 0, y: d };
		case "down":
			return { x: 0, y: -d };
		case "left":
			return { x: d, y: 0 };
		case "right":
			return { x: -d, y: 0 };
		case "fade":
		default:
			return { x: 0, y: 0 };
	}
}

/**
 * Drop-in entrance animator. Wrap any element to slide+fade it in.
 *
 * Single element:
 *   <Reveal from="up"><Card /></Reveal>
 *
 * Stagger children:
 *   <Reveal stagger={0.08}>
 *     <Reveal from="up">A</Reveal>
 *     <Reveal from="up">B</Reveal>
 *   </Reveal>
 *
 * Honours `prefers-reduced-motion` — falls back to a plain opacity fade.
 */
export default function Reveal({
	children,
	from = "up",
	distance,
	delay = 0,
	// Short enough that the entrance finishes while the element is still
	// arriving, instead of continuing to travel after you have stopped scrolling.
	duration = 0.6,
	stagger,
	trigger = "inView",
	margin = "-80px",
	as,
	className,
	style,
}: Props) {
	const reduce = useReducedMotion();
	const { x, y } = offsetFor(from, distance);

	/*
	 * Opacity and transform only — deliberately no animated `filter: blur()`.
	 *
	 * This used to tween blur(8px) → blur(0px) alongside the slide. A blur
	 * filter cannot be handled by the compositor: every frame of every revealing
	 * element forced a fresh paint plus a GPU blur pass, and because reveals are
	 * triggered by scroll position, a dozen of them would fire at once as a
	 * section came into view. That was the single largest cause of the stutter
	 * while scrolling. Opacity and transform are compositor-only properties, so
	 * the same entrance now costs essentially nothing per frame.
	 *
	 * The resting appearance is unchanged: blur(0px) was always the end state.
	 */
	const variants: Variants = {
		hidden: reduce ? { opacity: 0 } : { opacity: 0, x, y },
		visible:
			reduce ?
				{ opacity: 1, transition: { duration: 0.4 } }
			:	{
					opacity: 1,
					x: 0,
					y: 0,
					transition: {
						duration,
						ease: EASE,
						delay,
						...(stagger !== undefined && {
							staggerChildren: stagger,
							delayChildren: delay,
						}),
					},
				},
	};

	// When acting as a stagger container, children inherit the visible animation
	// via initial/animate propagation — we just need to provide a parent variants
	// object that defines staggerChildren.
	const Comp = motion(as ?? "div");

	const triggerProps =
		trigger === "mount" ?
			{ initial: "hidden", animate: "visible" }
		:	{
				initial: "hidden",
				whileInView: "visible",
				viewport: { once: true, margin },
			};

	return (
		<Comp
			variants={variants}
			{...triggerProps}
			className={className}
			style={style}>
			{children}
		</Comp>
	);
}
