import { HeroUIProvider } from "@heroui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppLayout } from "./components/AppLayout.tsx";

export function App() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate}>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </HeroUIProvider>
  );
}
