import { ReactNode } from "react";

type ResumeHeadingVariant = "h1" | "h2" | "h3";

interface ResumeHeadingProps {
  variant: ResumeHeadingVariant;
  content: string | ReactNode;
}

export function ResumeHeading(props: ResumeHeadingProps) {
  const { variant, content } = props;

  switch (variant) {
    case "h1":
      return (
        <h1 className="-mr-2 w-screen bg-gradient-to-r from-transparent to-primary to-20% pb-2 pr-2 pt-5 text-xl font-black text-black md:-mr-[calc(12vw+2px)] md:pr-[calc(12vw+2px)]">
          {content}
        </h1>
      );
    case "h2":
      return <h2 className="text-xl font-extrabold">{content}</h2>;
    case "h3":
      return <h3 className="text-lg">{content}</h3>;
  }
}

export function ResumeSection({
  headingProps,
  children,
}: {
  headingProps: ResumeHeadingProps;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col flex-nowrap items-end space-y-4">
      <ResumeHeading {...headingProps} />
      {children}
    </div>
  );
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
          className={`${classNames?.li || ""} w-[20rem] list-inside list-disc md:w-[32rem]`}
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
