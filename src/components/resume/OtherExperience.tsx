import { Link } from "@heroui/react";
import { List, ResumeHeading } from "./ResumePrimitives";

export function OtherExperience() {
  const magicCircle = [
    { href: "https://bestmagiccard.com", text: "Triplicate" },
    { href: "https://bestbasicland.com", text: "sister" },
    { href: "https://bestmagicart.com", text: "sites" },
  ];

  return (
    <div className="flex flex-col flex-nowrap screen:items-end screen:space-y-4">
      <ResumeHeading variant="h2">
        <span className="text-lg md:text-xl print:text-md">
          Magic Circle
          <span className="pl-[1px] align-super text-[0.66rem]">Ⓜ️</span>{" "}
          Webring
        </span>
      </ResumeHeading>
      <List
        items={[
          <span>
            {magicCircle.map((l) => (
              <span key={l.href}>
                <Link
                  isExternal={true}
                  className="underline screen:text-secondary print:text-sm print:text-black print:no-underline"
                  href={l.href}
                >
                  {l.text}
                </Link>{" "}
              </span>
            ))}
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
          className="text-right text-lg font-bold uppercase md:text-xl screen:text-secondary print:text-md print:text-black"
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
