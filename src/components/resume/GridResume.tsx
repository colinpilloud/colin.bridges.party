import React from "react";
import { ResumeSection, sections } from "../../pages/Resume";
import { Objective } from "./Objective";
import { WorkExperience } from "./WorkExperience";
import { cn } from "@heroui/react";

export function GridResume() {
  return (
    <div className="mx-4 flex flex-col gap-4">
      <GridSectionWithHeader title="Objective">
        <Objective />
      </GridSectionWithHeader>
      <div className="grid grid-cols-2 gap-8">
        <GridSectionWithHeader
          title="Work Experience"
          className="break-inside-auto"
        >
          <WorkExperience />
        </GridSectionWithHeader>
        <div className="flex flex-col space-y-4">
          {sections
            .filter(
              (s) =>
                ![
                  ResumeSection.WorkExperience,
                  ResumeSection.Objective,
                ].includes(s.section),
            )
            .map((section) => {
              const { title, children } = section;
              return (
                <GridSectionWithHeader
                  key={section.section}
                  title={title}
                  className={
                    [
                      ResumeSection.Objective,
                      ResumeSection.WorkExperience,
                    ].includes(section.section)
                      ? "col-span-2"
                      : ""
                  }
                >
                  {children}
                </GridSectionWithHeader>
              );
            })}
        </div>
      </div>
    </div>
  );
}

function GridResumeHeader({ title }: { title: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <h2 className="font-metal -mb-0.5 text-lg tracking-[0.02em]">{title}</h2>
      <h3 className="lowercase">({title})</h3>
    </div>
  );
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
      className={cn("flex break-inside-avoid flex-col space-y-2", className)}
    >
      <GridResumeHeader title={title} />
      {children}
    </div>
  );
}
