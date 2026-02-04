import {
  MagicCircle,
  MagicCircleTitle,
} from "../components/portfolio/MagicCircle";
import { WideBandAccordion } from "../components/WideBandAccordion";
import { FutureFlipCity } from "../components/portfolio/FutureFlipCity";
import { Ogr4u } from "../components/portfolio/Ogr4u";
import { Link } from "react-router-dom";

export function Portfolio() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <Link
          to="/about"
          className="font-metal text-md sticky tracking-[-0.10em] normal-case"
        >
          Colin Bridges
        </Link>
      </div>
      <WideBandAccordion
        sections={[
          {
            key: "ogr4u",
            title: "ogr4u.com",
            children: <Ogr4u />,
            expandedByDefault: false,
          },
          {
            key: "fcfl",
            title: "future.flip.city",
            children: <FutureFlipCity />,
            expandedByDefault: false,
          },
          {
            key: "Ⓜ️",
            title: <MagicCircleTitle />,
            children: <MagicCircle />,
            expandedByDefault: true,
          },
        ]}
      />
    </div>
  );
}
