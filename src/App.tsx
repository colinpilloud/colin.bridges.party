import useDarkMode from "@fisch0920/use-dark-mode";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppLayout } from "./components/AppLayout.tsx";

export function App() {
  const navigate = useNavigate();
  const darkMode = useDarkMode(true, {
    classNameDark: "dark",
    classNameLight: "light",
  });

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (!darkMode.value) {
        html.classList.remove("dark");
      } else {
        html.classList.add("dark");
      }
    }
  }, [darkMode.value]);

  return (
    <NextUIProvider navigate={navigate}>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </NextUIProvider>
  );
}
