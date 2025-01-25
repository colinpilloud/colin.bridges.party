import {
  BestBasicLandBestMagicCard,
  BestBasicLandBestMagicCardTitle,
} from "../components/portfolio/BestCards.tsx";
import { WideBandAccordion } from "../components/WideBandAccordion.tsx";

export function Portfolio() {
  return (
    <WideBandAccordion
      sections={[
        {
          title: <BestBasicLandBestMagicCardTitle />,
          children: <BestBasicLandBestMagicCard />,
          expandedByDefault: true,
        },
      ]}
    />
  );
}
