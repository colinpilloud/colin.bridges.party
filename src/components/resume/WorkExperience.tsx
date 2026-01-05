import { List, ResumeHeading } from "./ResumePrimitives";
import { Accordion, AccordionItem, Selection } from "@heroui/react";
import jobs from "./jobs.json";
import { useState } from "react";
import { useMediaQuery } from "../../UseMediaQuery";

interface JobProps {
  company: string;
  roles: RoleProps[];
  responsibilities: string[];
}

function Job(props: JobProps) {
  return (
    <div className="break-inside-avoid">
      {props.roles.map((role, i) => (
        <ResumeHeading variant="h3" key={i}>
          <div className="flex items-center justify-end gap-x-2 print:flex-row-reverse">
            <span className="text-nowrap align-middle text-xs sm:text-sm">
              ({role.startDate} – {role.endDate})
            </span>
            <span className="text-md font-semibold print:text-[0.75rem]">
              {role.title}
            </span>
          </div>
        </ResumeHeading>
      ))}
      <List items={props.responsibilities} />
    </div>
  );
}

interface RoleProps {
  title: string;
  startDate: string;
  endDate: string;
}

export function WorkExperience() {
  const printMedia = useMediaQuery("print");

  return printMedia ? <ListWorkExperience /> : <AccordionWorkExperience />;
}

function AccordionWorkExperience() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set([jobs[0].company]),
  );

  return (
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      selectionMode="multiple"
      showDivider={false}
      className="px-0"
      itemClasses={{
        base: "screen:-mr-2 flex flex-col screen:items-end px-0",
        title:
          "text-lg print:text-md screen:md:text-xl font-bold uppercase screen:text-right screen:text-secondary",
        trigger: "w-screen flex flex-row print:py-0",
        indicator:
          "text-secondary text-xl rotate-0 data-[open=true]:rotate-45 print:hidden",
        content:
          "flex flex-col flex-nowrap screen:items-end py-0 print:space-y-2 screen:space-y-4 print:mb-3 mb-6",
      }}
    >
      {jobs.map((job, i) => (
        <AccordionItem title={job.company} key={job.company} indicator="+">
          <Job {...job} />
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function ListWorkExperience() {
  return (
    <div className="flex flex-col flex-nowrap space-y-1.75">
      {jobs.map((job, i) => (
        <div key={job.company} className="break-inside-avoid">
          <h2 className="text-md font-bold uppercase">{job.company}</h2>
          <Job {...job} />
        </div>
      ))}
    </div>
  );
}
