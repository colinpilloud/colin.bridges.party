import type { ResumeSubsectionItem } from "./ResumeSubsectionAccordion";

interface ResumeSubsectionListProps {
  items: ResumeSubsectionItem[];
  wrapperClassName?: string;
  itemClassName?: string;
  headingClassName?: string;
}

export function ResumeSubsectionList({
  items,
  wrapperClassName,
  itemClassName,
  headingClassName,
}: ResumeSubsectionListProps) {
  return (
    <div
      className={`space-y-1.4 flex flex-col flex-nowrap ${wrapperClassName ?? ""}`}
    >
      {items.map((item) => (
        <div
          key={item.key}
          className={`break-inside-avoid ${itemClassName ?? ""}`}
        >
          <h2
            className={`text-[0.8rem] font-bold uppercase ${headingClassName ?? ""}`}
          >
            {item.title}
          </h2>
          {item.content}
        </div>
      ))}
    </div>
  );
}
