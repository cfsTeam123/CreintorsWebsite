import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useSeo } from "../lib/seo";
import { PAGE_SEO } from "../lib/content/seo";

export default function NotFound() {
	useSeo({
		...PAGE_SEO.notFound,
	});

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-brand-500/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-accent-violet/30 blur-3xl"
      />

      <div className="container-x relative grid min-h-screen place-items-center py-32 text-center">
        <Reveal trigger="mount" stagger={0.12}>
          <Reveal from="up" trigger="mount">
            <div className="font-mono text-xs uppercase tracking-[0.4em] text-brand-300">
              Error 404 · Off-grid
            </div>
          </Reveal>
          <Reveal from="up" trigger="mount">
            <h1 className="mt-6 font-display text-[clamp(5rem,18vw,12rem)] font-semibold leading-none">
              <span className="text-gradient">404</span>
            </h1>
          </Reveal>
          <Reveal from="up" trigger="mount">
            <p className="mx-auto mt-6 max-w-lg text-lg text-white/65">
              The page you're looking for doesn't exist or maybe it's still on
              the drawing board.
            </p>
          </Reveal>
          <Reveal from="up" trigger="mount">
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="btn-primary transition-transform duration-300 hover:-translate-y-0.5">
                Back to Home →
              </Link>
              <Link
                to="/contact"
                className="btn-ghost transition-transform duration-300 hover:-translate-y-0.5">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </main>
  );
}
