import { RedBandCta } from "./RedBandCta.tsx";

export function IndexContent() {
  return (
    <RedBandCta
      header={<span>You have{"\n"}software problems.</span>}
      buttonHref="/about"
    />
  );
}
