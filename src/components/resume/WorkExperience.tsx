import { List, ResumeHeading } from "./ResumePrimitives";
import { Accordion, AccordionItem, Selection } from "@heroui/react";
import jobs from "./jobs.json";
import { useOnPrint } from "../../UseOnPrint";
import { useState } from "react";

interface JobProps {
  company: string;
  roles: RoleProps[];
  responsibilities: string[];
}

function Job(props: JobProps) {
  return (
    <>
      {props.roles.map((role, i) => (
        <ResumeHeading variant="h3" key={i}>
          <div className="justify-content-end flex flex-row items-center gap-2">
            <span className="text-nowrap align-middle text-xs sm:text-sm">
              ({role.startDate} – {role.endDate})
            </span>
            <span className="text-md font-semibold sm:text-lg">
              {role.title}
            </span>
          </div>
        </ResumeHeading>
      ))}
      <List items={props.responsibilities} />
    </>
  );
}

interface RoleProps {
  title: string;
  startDate: string;
  endDate: string;
}

export function WorkExperience() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set([jobs[0].company]),
  );

  const expandAllAccordionSections = () => {
    setSelectedKeys("all");
  };

  // TODO; restore previously expanded sections
  useOnPrint(expandAllAccordionSections, () => {});

  return (
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      selectionMode="multiple"
      showDivider={false}
      itemClasses={{
        base: "-mr-2 flex flex-col items-end",
        title:
          "text-lg md:text-xl font-bold uppercase text-right screen:text-secondary",
        trigger: "w-screen flex flex-row print:py-0",
        indicator:
          "text-secondary text-xl rotate-0 data-[open=true]:rotate-45 print:hidden",
        content:
          "flex flex-col flex-nowrap items-end print:space-y-2 screen:space-y-4 mb-4",
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
