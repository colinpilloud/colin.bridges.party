import { AppLayout } from "../components/AppLayout.tsx";
import { RedBandCta } from "../components/RedBandCta.tsx";

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
