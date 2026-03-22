import { Outlet } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import ScrollToTop from "./components/ScrollToTop";

export function App() {
  return (
    <>
      <ScrollToTop />
      <AppLayout>
        <Outlet />
      </AppLayout>
    </>
  );
}
