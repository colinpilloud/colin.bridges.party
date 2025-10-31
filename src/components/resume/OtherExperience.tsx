import { Link } from "@heroui/react";
import { List, ResumeHeading } from "./ResumePrimitives";

export function OtherExperience() {
  return (
    <div className="flex flex-col flex-nowrap space-y-4 screen:items-end">
      <ResumeHeading variant="h2">
        <span className="text-lg md:text-xl">
          Magic Circle
          <span className="pl-[1px] align-super text-[0.66rem]">Ⓜ️</span>{" "}
          Webring
        </span>
      </ResumeHeading>
      <List
        items={[
          <span>
            <Link
              isExternal={true}
              className="underline screen:text-secondary print:text-black print:no-underline"
              href="https://bestmagiccard.com"
            >
              Triplicate
            </Link>{" "}
            <Link
              isExternal={true}
              className="underline screen:text-secondary print:text-black print:no-underline"
              href="https://bestbasicland.com"
            >
              sister
            </Link>{" "}
            <Link
              isExternal={true}
              className="underline screen:text-secondary print:text-black print:no-underline"
              href="https://bestmagicart.com"
            >
              sites
            </Link>{" "}
            that crowdsource rankings for Magic: the Gathering
            <span className="align-super text-xs">TM</span> cards
          </span>,
          "Monorepo TypeScript / React frontend powering all three web applications",
          "AWS infrastructure deployed via TypeScript CDK v2",
        ]}
      />
      <ResumeHeading variant="h2">
        <Link
          isExternal={true}
          className="text-right text-lg font-bold uppercase md:text-xl screen:text-secondary print:text-black"
          href="https://future.flip.city/demo"
        >
          future.flip.city
        </Link>
      </ResumeHeading>
      <List
        items={[
          "Tournament companion webapp for bespoke pinball events",
          "Syncs with Firebase updates published from organizer's iOS app in real-time",
        ]}
      />
    </div>
  );
}
