import { Link } from "@heroui/react";
import { Prose } from "../Prose";

export function Ogr4uTitle() {
  return (
    <div className="flex flex-row flex-wrap justify-end gap-x-2 md:gap-x-4">
      <Link
        isExternal={true}
        className="text-[length:inherit] text-inherit"
        href="https://ogr4u.com"
      >
        ogr4u.com
      </Link>
    </div>
  );
}

export function Ogr4u() {
  return (
    <>
      <Prose>
        After scrambling to find the data we needed in the middle of our{" "}
        <Link
          isExternal={true}
          className="text-secondary underline"
          href="https://pinballpdx.org"
        >
          Portland Pinball League
        </Link>{" "}
        matches, I wrote{" "}
        <Link
          isExternal={true}
          className="text-secondary underline"
          href="https://ogr4u.com"
        >
          this site
        </Link>{" "}
        to serve as an at-hand scouting reference.
      </Prose>
      <iframe
        src="https://ogr4u.com"
        title="ogr4u.com"
        className="h-[450px] w-[80vw] rounded-2xl border-0 shadow-lg md:h-[600px] md:w-[400px]"
      />
      <Prose>
        Data is read from the league's API and updated weekly. Player, machine,
        and other filters allow the team to identify favorable matchups,
        creating a unique strategic advantage.
      </Prose>
    </>
  );
}
