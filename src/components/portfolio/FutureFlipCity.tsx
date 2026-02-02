import "swiper/css";
import "swiper/css/effect-cards";

import { Prose } from "../Prose";
import { Link } from "react-router-dom";

export function FutureFlipCityTitle() {
  return (
    <div className="flex flex-row flex-wrap justify-end gap-x-2 md:gap-x-4">
      <Link
        className="text-[length:inherit] text-inherit"
        to="https://future.flip.city/demo"
        target="_blank"
        rel="noopener noreferrer"
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
          className="text-secondary underline"
          to="https://future.flip.city/demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          this site
        </Link>{" "}
        was written in tandem with an iOS engineer friend, in order to support{" "}
        <span className="text-secondary font-semibold">
          Flip City Future League
        </span>{" "}
        events.
      </Prose>
      <Link
        to="https://future.flip.city/demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/img/fcfl.png"
          alt={"Flip City Future League"}
          className="w-[80vw] rounded-lg md:w-[400px]"
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
