import { AppLayout } from "./AppLayout.tsx";
import { RedBandCta } from "./RedBandCta.tsx";

export function Error() {
  return (
    <AppLayout>
      <RedBandCta
        header={<span>You have{"\n"}browsing problems.</span>}
        buttonHref="/"
      />
    </AppLayout>
  );
}
