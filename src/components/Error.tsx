import { AppLayout } from "./AppLayout.tsx";
import { RedBandCta } from "./RedBandCta.tsx";

export function Error() {
  return (
    <AppLayout>
      <RedBandCta
        header={
          <span>
            You have
            <br />
            browsing problems.
          </span>
        }
        secondaryHeader="We can solve them."
        buttonText="Click here."
        buttonHref="/"
      />
    </AppLayout>
  );
}
