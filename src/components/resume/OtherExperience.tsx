import { Link } from "@heroui/react";
import { List } from "./ResumePrimitives";

function OtherExperienceHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="whitespace-pre-line text-xl font-extrabold uppercase screen:text-secondary print:leading-none">
      {children}
    </h2>
  );
}

export function OtherExperience() {
  const magicCircle = [
    { href: "https://bestmagiccard.com", text: "Triplicate" },
    { href: "https://bestbasicland.com", text: "sister" },
    { href: "https://bestmagicart.com", text: "sites" },
  ];

  return (
    <div className="flex flex-col flex-nowrap screen:items-end screen:space-y-4 print:space-y-0">
      <OtherExperienceHeader>
        <span className="text-lg md:text-xl print:text-md">
          Magic Circle
          <span className="pl-[1px] align-super text-[0.66rem]">Ⓜ️</span>{" "}
          Webring
        </span>
      </OtherExperienceHeader>
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
            <span className="align-super text-[0.3rem]">TM</span> cards
          </span>,
          "Monorepo TypeScript / React frontend powering all three web applications",
          "AWS infrastructure deployed via TypeScript CDK v2",
        ]}
      />
      <OtherExperienceHeader>
        <Link
          isExternal={true}
          className="text-right text-lg font-bold uppercase md:text-xl screen:text-secondary print:mb-2 print:text-md print:text-black"
          href="https://future.flip.city/demo"
        >
          future.flip.city
        </Link>
      </OtherExperienceHeader>
      <List
        items={[
          "Tournament companion webapp for bespoke pinball events",
          "Syncs with Firebase updates published from organizer's iOS app in real-time",
        ]}
      />
      <OtherExperienceHeader>
        <Link
          isExternal={true}
          className="text-right text-lg font-bold uppercase md:text-xl screen:text-secondary print:mb-2 print:text-md print:text-black"
          href="https://ogr4u.com"
        >
          ogr4u.com
        </Link>
      </OtherExperienceHeader>
      <List
        items={[
          "At-hand scouting reference for Pinball League matches",
          "Interactive filters allow rapid querying of machine and player data",
        ]}
      />
    </div>
  );
}
