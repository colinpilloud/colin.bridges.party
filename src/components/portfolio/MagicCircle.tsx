import "swiper/css";
import "swiper/css/effect-cards";

import { Prose } from "../Prose";
import { Carousel } from "./PortfolioPrimitives";
import { Link } from "react-router-dom";

export function MagicCircleTitle() {
  return (
    <span>
      Magic Circle
      <span className="pl-[1px] align-super text-[0.66rem]">Ⓜ️</span> Webring
    </span>
  );
}

export function MagicCircle() {
  return (
    <>
      <Prose>
        I've been playing Magic: the Gathering
        <span className="align-super text-xs">TM</span> since 2003, and every
        Magic player I know has entrenched opinions about which cards are the
        "best", according to their own arbitrary criteria (and opinion of the
        color blue).
      </Prose>
      <Carousel
        items={[
          { src: "/img/bbl.png", alt: "bestbasicland.com" },
          { src: "/img/bmc.png", alt: "bestmagiccard.com" },
          { src: "/img/bma.png", alt: "bestmagicart.com" },
        ]}
      />
      <Prose>
        I built these{" "}
        <Link
          className="text-secondary underline"
          to="https://bestmagiccard.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          three
        </Link>{" "}
        <Link
          className="text-secondary underline"
          to="https://bestbasicland.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          sister
        </Link>{" "}
        <Link
          className="text-secondary underline"
          to="https://bestmagicart.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          sites
        </Link>{" "}
        to crowdsource card rankings; users are presented an endless stream of
        randomized groupings of cards and asked to pick their favorite. The
        winner is recorded and scores are aggregated over time.
      </Prose>
      <Prose>
        The frontend is three{" "}
        <span className="text-secondary font-semibold">
          TypeScript / React SPA
        </span>
        s, managed in one monorepo with a shared components library, and the
        backend is written in{" "}
        <span className="text-secondary font-semibold">Scala</span>, talks to
        Postgres, gets packaged as a native image, and deploys into{" "}
        <span className="text-secondary font-semibold">AWS Lambda</span> as a
        custom runtime. Data is synchronized from{" "}
        <Link
          className="text-secondary underline"
          to="https://scryfall.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Scryfall's
        </Link>{" "}
        API.
      </Prose>
    </>
  );
}
