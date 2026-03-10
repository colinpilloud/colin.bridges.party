import { Link } from "react-router-dom";
import { Prose } from "../Prose";

export function Ogr4uTitle() {
  return (
    <div className="flex flex-row flex-wrap justify-end gap-x-2 md:gap-x-4">
      ogr4u.com
    </div>
  );
}

export function Ogr4u() {
  return (
    <>
      <Prose>
        After scrambling to find the data we needed in the middle of our{" "}
        <Link
          className="text-secondary underline"
          to="https://pinballpdx.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portland Pinball League
        </Link>{" "}
        matches, I wrote{" "}
        <Link
          className="text-secondary underline"
          to="https://ogr4u.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          this site
        </Link>{" "}
        to serve as an at-hand scouting reference.
      </Prose>
      <iframe
        src="https://ogr4u.com"
        title="ogr4u.com"
        sandbox="allow-scripts allow-same-origin"
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
