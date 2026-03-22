import { List, ResumeHeading } from "./ResumePrimitives";
import jobs from "./jobs.json";
import { useState } from "react";
import { useMediaQuery } from "../../UseMediaQuery";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

interface JobProps {
  company: string;
  roles: RoleProps[];
  responsibilities: string[];
}

function Job(props: JobProps) {
  return (
    <div className="flex break-inside-avoid flex-col not-print:gap-2">
      <div className="flex flex-col not-print:gap-2">
        {props.roles.map((role) => (
          <ResumeHeading variant="h3" key={role.title}>
            <div className="flex items-center gap-x-2 not-print:justify-between not-print:sm:justify-start">
              <span className="text-md font-semibold print:text-xs">
                {role.title}
              </span>
              <span className="align-middle text-xs text-nowrap sm:text-sm print:text-[0.6rem]">
                ({role.startDate} – {role.endDate})
              </span>
            </div>
          </ResumeHeading>
        ))}
      </div>
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
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    () => new Set([jobs[0].company]),
  );

  const isOpen = (company: string) => selectedKeys.has(company);

  // Toggle open/close for a job
  const handleToggle = (company: string) => {
    setSelectedKeys((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(company)) {
        newSet.delete(company);
      } else {
        newSet.add(company);
      }
      return newSet;
    });
  };

  return (
    <>
      {jobs.map((job) => (
        <div className="mb-2" key={job.company}>
          <div
            className={`lg:-pl-60 collapse w-screen rounded-none ${isOpen(job.company) ? "collapse-open" : ""}`}
          >
            <div
              tabIndex={0}
              className="collapse-title to-secondary/20 text-secondary print:text-md flex w-full cursor-pointer items-center justify-start bg-gradient-to-l from-transparent via-transparent via-[15%] pl-1 text-lg font-bold uppercase md:text-xl print:ml-4 print:text-left"
              onClick={() => handleToggle(job.company)}
            >
              <span className="ml-2 text-xl text-black md:pl-58 print:hidden">
                {isOpen(job.company) ? (
                  <FeatherIcon
                    size="16"
                    icon="minus"
                    className="text-secondary"
                  />
                ) : (
                  <FeatherIcon
                    size="16"
                    icon="plus"
                    className="text-secondary"
                  />
                )}
              </span>
              <span className="pl-2">{job.company}</span>
            </div>
            <div
              tabIndex={0}
              className={`collapse-content mt-1 w-full pt-2 pl-4 shadow transition-all duration-200 md:pl-62 ${isOpen(job.company) ? "block" : "hidden"} mb-6 flex flex-col space-y-4 md:space-y-6 print:mb-3 print:space-y-2`}
            >
              <Job {...job} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function ListWorkExperience() {
  return (
    <div className="flex flex-col flex-nowrap space-y-1.75">
      {jobs.map((job) => (
        <div key={job.company} className="break-inside-avoid">
          <h2 className="text-[0.8rem] font-bold uppercase">{job.company}</h2>
          <Job {...job} />
        </div>
      ))}
    </div>
  );
}
