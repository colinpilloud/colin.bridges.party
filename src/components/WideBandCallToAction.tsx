import { type ReactNode } from "react";
import { ButtonLink } from "./ButtonLink";

interface WideBandCallToActionProps {
  header: ReactNode;
  buttonHref: string;
  buttonText?: string;
  secondaryHeader: string | null;
}

export function WideBandCallToAction(props: WideBandCallToActionProps) {
  const {
    header,
    buttonHref,
    buttonText = "Click here.",
    secondaryHeader,
  } = props;

  return (
    <div className="to-primary mt-[40vh] w-screen bg-linear-to-r from-transparent to-20% py-10 pr-4 text-black md:pr-[10vw]">
      <div className="flex flex-col gap-4">
        <h1 className="pl-8 text-2xl leading-10 font-black md:text-4xl md:leading-14">
          {header}
        </h1>
        {secondaryHeader && (
          <h3 className="font-bold md:text-2xl">{secondaryHeader}</h3>
        )}
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
