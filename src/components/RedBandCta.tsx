import { ReactNode } from "react";
import { ButtonLink } from "./ButtonLink.tsx";

interface RedBandCtaProps {
  header: ReactNode;
  buttonHref: string;
  buttonText?: string;
  secondaryHeader?: string;
}

export function RedBandCta(props: RedBandCtaProps) {
  const {
    header,
    buttonHref,
    buttonText = "Click here.",
    secondaryHeader = "We can solve them.",
  } = props;

  return (
    <div className="mt-16 w-screen bg-primary py-4 pr-4 text-black md:pr-[20vw]">
      <div className="flex flex-col gap-4">
        <h1 className="whitespace-pre-line pl-8 text-2xl font-black md:text-4xl">
          {header}
        </h1>
        <h3 className="font-bold md:text-2xl">{secondaryHeader}</h3>
        <div className="flex flex-col items-end gap-4 font-semibold">
          <ButtonLink
            href={buttonHref}
            text={buttonText}
            variant="black-on-primary"
          />
        </div>
      </div>
    </div>
  );
}
