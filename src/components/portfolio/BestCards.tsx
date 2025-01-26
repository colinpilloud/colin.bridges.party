import "swiper/css";
import "swiper/css/effect-cards";

import { Link } from "@heroui/react";
import bbl from "../../assets/img/bbl.png";
import bmc from "../../assets/img/bmc.png";
import { Prose } from "../Prose.tsx";
import { Carousel } from "./PortfolioPrimitives.tsx";

export function BestBasicLandBestMagicCardTitle() {
  return (
    <div className="flex flex-row flex-wrap justify-end gap-x-2 md:gap-x-4">
      <Link
        isExternal={true}
        className="text-[length:inherit] text-inherit"
        href="https://bestmagiccard.com"
      >
        bestmagiccard.com
      </Link>
      {
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <span> // </span>
      }
      <Link
        isExternal={true}
        className="text-[length:inherit] text-inherit"
        href="https://bestbasicland.com"
      >
        bestbasicland.com
      </Link>
    </div>
  );
}

export function BestBasicLandBestMagicCard() {
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
        ]}
      />
      <Prose>
        I built these two{" "}
        <Link
          isExternal={true}
          className="text-secondary underline"
          href="https://bestmagiccard.com"
        >
          sister
        </Link>{" "}
        <Link
          isExternal={true}
          className="text-secondary underline"
          href="https://bestbasicland.com"
        >
          sites
        </Link>{" "}
        to crowdsource card rankings; users are presented an endless stream of
        randomized groupings of cards and asked to pick their favorite. The
        winner is recorded and scores are aggregated over time.
      </Prose>
      <Prose>
        The frontend is two{" "}
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
