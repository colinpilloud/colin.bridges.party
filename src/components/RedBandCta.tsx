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
    <div className="-mx-2 mt-16 flex flex-col gap-4 bg-primary py-4 pr-4 text-black md:pr-32">
      <h1 className="whitespace-pre-line text-2xl font-black md:text-4xl">
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
  );
}
