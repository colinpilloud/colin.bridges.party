import React from "react";
import { type ReactNode } from "react";

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
        <h2 className="not-print:text-secondary text-xl font-extrabold whitespace-pre-line uppercase print:-mt-4">
          {content}
        </h2>
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
      className={`${classNames?.ul || ""} flex list-outside flex-col flex-nowrap items-end space-y-4 print:ml-4 print:space-y-0`}
    >
      {items.map((item) => {
        if (typeof item === "string") {
          return (
            <li
              key={item}
              className={`${classNames?.li || ""} w-xs list-disc not-print:list-inside md:w-md print:w-full`}
            >
              {item}
            </li>
          );
        } else if (React.isValidElement(item)) {
          const i = item.key ?? Math.random().toString(36).substring(2, 9);
          return (
            <li
              key={i}
              className={`${classNames?.li || ""} w-xs list-disc not-print:list-inside md:w-md print:w-full`}
            >
              {item}
            </li>
          );
        }
        return (
          <li
            key={undefined}
            className={`${classNames?.li || ""} w-xs list-disc not-print:list-inside md:w-md print:w-full`}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export function SkillList({ skills }: { skills: string[] }) {
  return (
    <>
      {skills.map((item, i) => (
        <span className="not-print:text-secondary font-semibold" key={i}>
          {item}
          {i < skills.length - 1 && (
            <span className="not-print:text-primary font-normal">
              {i === skills.length - 2
                ? `${skills.length === 2 ? "" : ","} and `
                : ", "}
            </span>
          )}
        </span>
      ))}
    </>
  );
}
