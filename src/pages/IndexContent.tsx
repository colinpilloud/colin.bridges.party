import { WideBandCallToAction } from "../components/WideBandCallToAction";

export function IndexContent() {
  return (
    <WideBandCallToAction
      header={
        <span className="whitespace-pre-line">
          You have{"\n"}software problems.
        </span>
      }
      secondaryHeader="We can solve them."
      buttonHref="/about"
    />
  );
}
