import useDarkMode from "@fisch0920/use-dark-mode";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function App() {
  const navigate = useNavigate();
  const darkMode = useDarkMode(true, {
    classNameDark: "dark",
    classNameLight: "light",
  });

  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        // TODO should be a better way to sync this with tailwind's colors
        darkMode.value ? "#0000ff" : "#0070f3",
      );
    }

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
      <div className="flex min-h-screen flex-col items-center justify-center bg-white text-center text-black dark:bg-black dark:text-white">
        <Outlet />
      </div>
    </NextUIProvider>
  );
}
