import { NextUIProvider } from "@nextui-org/react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppLayout } from "./components/AppLayout.tsx";

export function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </NextUIProvider>
  );
}
