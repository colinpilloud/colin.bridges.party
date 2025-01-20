import { AppLayout } from "../components/AppLayout.tsx";
import { WideBandCallToAction } from "../components/WideBandCallToAction.tsx";

export function Error() {
  return (
    <AppLayout>
      <WideBandCallToAction
        header={<span>You have{"\n"}browsing problems.</span>}
        buttonHref="/about"
      />
    </AppLayout>
  );
}
