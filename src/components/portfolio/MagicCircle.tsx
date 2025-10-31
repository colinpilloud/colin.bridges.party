import "swiper/css";
import "swiper/css/effect-cards";

import { Link } from "@heroui/react";
import bbl from "../../assets/img/bbl.png";
import bma from "../../assets/img/bma.png";
import bmc from "../../assets/img/bmc.png";
import { Prose } from "../Prose";
import { Carousel } from "./PortfolioPrimitives";

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
          { src: bbl, alt: "bestbasicland.com" },
          { src: bmc, alt: "bestmagiccard.com" },
          { src: bma, alt: "bestmagicart.com" },
        ]}
      />
      <Prose>
        I built these{" "}
        <Link
          isExternal={true}
          className="text-secondary underline"
          href="https://bestmagiccard.com"
        >
          three
        </Link>{" "}
        <Link
          isExternal={true}
          className="text-secondary underline"
          href="https://bestbasicland.com"
        >
          sister
        </Link>{" "}
        <Link
          isExternal={true}
          className="text-secondary underline"
          href="https://bestmagicart.com"
        >
          sites
        </Link>{" "}
        to crowdsource card rankings; users are presented an endless stream of
        randomized groupings of cards and asked to pick their favorite. The
        winner is recorded and scores are aggregated over time.
      </Prose>
      <Prose>
        The frontend is three{" "}
        <span className="font-semibold text-secondary">
          TypeScript / React SPA
        </span>
        s, managed in one monorepo with a shared components library, and the
        backend is written in{" "}
        <span className="font-semibold text-secondary">Scala</span>, talks to
        Postgres, gets packaged as a native image, and deploys into{" "}
        <span className="font-semibold text-secondary">AWS Lambda</span> as a
        custom runtime. Data is synchronized from{" "}
        <Link
          className="text-secondary underline"
          href="https://scryfall.com"
          isExternal={true}
        >
          Scryfall's
        </Link>{" "}
        API.
      </Prose>
    </>
  );
}
