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
            title: <MagicCircleTitle />,
            children: <MagicCircle />,
            expandedByDefault: true,
          },
          {
            title: <FutureFlipCityTitle />,
            children: <FutureFlipCity />,
            expandedByDefault: true,
          },
        ]}
        selectionMode="multiple"
      />
    </div>
  );
}
