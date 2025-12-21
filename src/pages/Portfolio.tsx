import { Link } from "@heroui/react";
import {
  MagicCircle,
  MagicCircleTitle,
} from "../components/portfolio/MagicCircle";
import { WideBandAccordion } from "../components/WideBandAccordion";
import {
  FutureFlipCity,
  FutureFlipCityTitle,
} from "../components/portfolio/FutureFlipCity";
import { Ogr4u, Ogr4uTitle } from "../components/portfolio/Ogr4u";

export function Portfolio() {
  return (
    <div className="flex flex-col items-center">
      <div className="-mr-4 mb-4 md:-mr-[10vw]">
        <Link
          href="/about"
          className="sticky font-metal text-md normal-case tracking-[-0.10em]"
        >
          Colin Bridges
        </Link>
      </div>
      <WideBandAccordion
        sections={[
          {
            title: <Ogr4uTitle />,
            children: <Ogr4u />,
            expandedByDefault: false,
          },
          {
            title: <FutureFlipCityTitle />,
            children: <FutureFlipCity />,
            expandedByDefault: false,
          },
          {
            title: <MagicCircleTitle />,
            children: <MagicCircle />,
            expandedByDefault: true,
          },
        ]}
        selectionMode="multiple"
      />
    </div>
  );
}
