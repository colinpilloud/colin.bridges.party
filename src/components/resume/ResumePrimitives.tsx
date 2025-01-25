import { ReactNode } from "react";

type ResumeHeadingVariant = "h2" | "h3";

interface ResumeHeadingProps {
  variant: ResumeHeadingVariant;
  children: string | ReactNode;
}

export function ResumeHeading(props: ResumeHeadingProps) {
  const { variant, children: content } = props;

  switch (variant) {
    case "h2":
      return (
        <h2 className="text-xl font-extrabold text-secondary">{content}</h2>
      );
    case "h3":
      return <h3 className="text-lg">{content}</h3>;
  }
}

type ListItem = string | ReactNode;

interface ListProps {
  items: ListItem[];
  classNames?: {
    ul?: string;
    li?: string;
  };
}

export function List(props: ListProps) {
  const { items, classNames } = props;
  return (
    <ul
      className={`${classNames?.ul || ""} flex flex-col flex-nowrap items-end space-y-4`}
    >
      {items.map((item, i) => (
        <li
          key={i}
          className={`${classNames?.li || ""} w-[22rem] list-inside list-disc md:w-[36rem]`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SkillList({ skills }: { skills: string[] }) {
  return skills.map((item, i) => (
    <span className="font-semibold text-secondary" key={i}>
      {item}
      {i < skills.length - 1 && (
        <span className="font-normal text-primary">
          {i === skills.length - 2
            ? `${skills.length === 2 ? "" : ","} and `
            : ", "}
        </span>
      )}
    </span>
  ));
}
