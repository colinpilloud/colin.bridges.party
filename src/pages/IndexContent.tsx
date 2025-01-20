import { WideBandCallToAction } from "../components/WideBandCallToAction.tsx";

export function IndexContent() {
  return (
    <WideBandCallToAction
      header={<span>You have{"\n"}software problems.</span>}
      buttonHref="/about"
    />
  );
}
