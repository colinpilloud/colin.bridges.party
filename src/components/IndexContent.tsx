import { RedBandCta } from "./RedBandCta.tsx";

export function IndexContent() {
  return (
    <RedBandCta
      header={
        <span>
          You have
          <br />
          software problems.
        </span>
      }
      secondaryHeader="We can solve them."
      buttonText="Let's do this."
      buttonHref="/about"
    />
  );
}
