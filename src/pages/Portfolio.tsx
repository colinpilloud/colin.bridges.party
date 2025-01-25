import { Link } from "@heroui/react";
import {
  BestBasicLandBestMagicCard,
  BestBasicLandBestMagicCardTitle,
} from "../components/portfolio/BestCards.tsx";
import { WideBandAccordion } from "../components/WideBandAccordion.tsx";

export function Portfolio() {
  return (
    <div className="flex flex-col items-center">
      <div className="-mr-4 mb-4 md:-mr-[10vw]">
        <Link href="/about" className="font-metal text-md normal-case">
          Colin Bridges
        </Link>
      </div>
      <WideBandAccordion
        sections={[
          {
            title: <BestBasicLandBestMagicCardTitle />,
            children: <BestBasicLandBestMagicCard />,
            expandedByDefault: true,
          },
        ]}
      />
    </div>
  );
}
