import { gsap } from "gsap";

/*
 * ScrollTrigger used to be registered here and re-exported.
 *
 * Nothing ever consumed it: every component imports `{ gsap }` alone, and
 * there is not a single `scrollTrigger:` config or `ScrollTrigger.create()`
 * call anywhere in the app — the GSAP animations are all mount-time timelines,
 * and the scroll-driven reveals go through Framer Motion's `whileInView`
 * instead. `registerPlugin` is a side effect, so the plugin could not be
 * tree-shaken and shipped in the bundle for nothing.
 *
 * If a scroll-linked animation is ever wanted, re-add the import and the
 * registerPlugin call here rather than reaching for the plugin directly, so
 * registration keeps happening exactly once.
 */

export { gsap };
