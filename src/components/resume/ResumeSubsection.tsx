import type { ResumeSubsectionItem } from "./ResumeSubsectionAccordion";
import { ResumeMediaSwap } from "./ResumeMediaSwap";
import { ResumeSubsectionAccordion } from "./ResumeSubsectionAccordion";
import { ResumeSubsectionList } from "./ResumeSubsectionList";

interface ResumeSubsectionProps {
  items: ResumeSubsectionItem[];
  defaultOpenKeys?: string[];
}

export function ResumeSubsection({
  items,
  defaultOpenKeys,
}: ResumeSubsectionProps) {
  return (
    <ResumeMediaSwap
      screen={
        <ResumeSubsectionAccordion
          items={items}
          defaultOpenKeys={defaultOpenKeys}
        />
      }
      print={<ResumeSubsectionList items={items} />}
    />
  );
}
