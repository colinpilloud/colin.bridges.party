import "swiper/css";
import "swiper/css/effect-cards";

import { Link, Image } from "@heroui/react";
import { Prose } from "../Prose";
import fcfl from "../../assets/img/fcfl.png";

export function FutureFlipCityTitle() {
  return (
    <div className="flex flex-row flex-wrap justify-end gap-x-2 md:gap-x-4">
      <Link
        isExternal={true}
        className="text-[length:inherit] text-inherit"
        href="https://future.flip.city/demo"
      >
        future.flip.city
      </Link>
    </div>
  );
}

export function FutureFlipCity() {
  return (
    <>
      <Prose>
        Powering bespoke pinball tournament formats in Portland,{" "}
        <Link
          isExternal={true}
          className="text-secondary underline"
          href="https://future.flip.city/demo"
        >
          this site
        </Link>{" "}
        was written in tandem with an iOS engineer friend, in order to support{" "}
        <span className="text-secondary font-semibold">
          Flip City Future League
        </span>{" "}
        events.
      </Prose>
      <Link href="https://future.flip.city/demo" isExternal={true}>
        <Image
          src={fcfl}
          alt={"Flip City Future League"}
          className="w-[80vw] md:w-[400px]"
        />
      </Link>
      <Prose>
        The tournament organizer uses an iOS app to manage the event, and
        updates are pushed into{" "}
        <span className="text-secondary font-semibold">Firebase</span>. This{" "}
        <span className="text-secondary font-semibold">
          TypeScript / React webapp
        </span>{" "}
        reads those updates and renders the tournament's pairings, scores, and
        statuses in real-time.
      </Prose>
    </>
  );
}
