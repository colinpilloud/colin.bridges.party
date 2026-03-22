import React from "react";
import { WorkExperience } from "./WorkExperience";
import sections from "./ResumeSections";
import { ResumeSection } from "@/types";

export function GridResume() {
  return (
    <div className="flex flex-col gap-4 text-[0.55rem]">
      <div className="grid grid-cols-[2fr_3fr] gap-8">
        <div className="flex flex-col space-y-2">
          {sections
            .filter(
              (s) =>
                !([ResumeSection.WorkExperience] as ResumeSection[]).includes(
                  s.section,
                ),
            )
            .map((section) => {
              const { title, children } = section;
              return (
                <GridSectionWithHeader
                  key={section.key}
                  title={title}
                  className="break-inside-avoid"
                >
                  {children}
                </GridSectionWithHeader>
              );
            })}
        </div>
        <GridSectionWithHeader title="Work Experience">
          <WorkExperience />
        </GridSectionWithHeader>
      </div>
    </div>
  );
}

function GridResumeHeader({ title }: { title: React.ReactNode }) {
  return <h2 className="text-base font-black">{title}</h2>;
}

function GridSectionWithHeader({
  title,
  className,
  children,
}: {
  title: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={"flex flex-col space-y-1" + (className ? " " + className : "")}
    >
      <GridResumeHeader title={title} />
      {children}
    </div>
  );
}
