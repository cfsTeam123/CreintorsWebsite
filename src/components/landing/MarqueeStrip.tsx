import Marquee from "../Marquee";
import { MARQUEE_ITEMS } from "../../lib/content/landing";

export default function MarqueeStrip() {
  return <Marquee items={MARQUEE_ITEMS} />;
}
