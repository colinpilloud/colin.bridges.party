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
    <div className="flex flex-1 flex-col justify-center">
      <div className="text-neutral to-primary w-screen bg-linear-to-l from-transparent to-20% py-10 pl-4 md:pl-64">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl leading-10 font-black md:text-4xl md:leading-14">
            {header}
          </h1>
          {secondaryHeader && (
            <h3 className="font-bold md:text-2xl">{secondaryHeader}</h3>
          )}
          <div className="flex flex-col items-start gap-4 font-semibold">
            <ButtonLink
              href={buttonHref}
              text={buttonText}
              variant="black-on-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
