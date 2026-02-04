import { AppLayout } from "../components/AppLayout";
import { WideBandCallToAction } from "../components/WideBandCallToAction";

export function Error() {
  return (
    <AppLayout>
      <WideBandCallToAction
        header={
          <span className="text-6xl leading-[0.8] whitespace-pre-line">
            You have{"\n"}browsing problems.
          </span>
        }
        secondaryHeader="We can solve them."
        buttonHref="/about"
      />
    </AppLayout>
  );
}
