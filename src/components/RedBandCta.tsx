import { ReactNode } from "react";
import { ButtonLink } from "./ButtonLink.tsx";

interface WideBandCallToActionProps {
  header: ReactNode;
  buttonHref: string;
  buttonText?: string;
  secondaryHeader?: string;
}

export function WideBandCallToAction(props: WideBandCallToActionProps) {
  const {
    header,
    buttonHref,
    buttonText = "Click here.",
    secondaryHeader = "We can solve them.",
  } = props;

  return (
    <div className="-ml-2 mt-16 w-screen bg-gradient-to-r from-transparent to-primary to-20% py-4 pr-4 text-black md:pr-[calc(12vw+2px)]">
      <div className="flex flex-col gap-4">
        <h1 className="whitespace-pre-line pl-8 text-2xl font-black md:text-4xl">
          {header}
        </h1>
        <h3 className="font-bold md:text-2xl">{secondaryHeader}</h3>
        <div className="flex flex-col items-end gap-4 font-semibold">
          <ButtonLink
            href={buttonHref}
            text={buttonText}
            variant="black-on-secondary"
          />
        </div>
      </div>
    </div>
  );
}
