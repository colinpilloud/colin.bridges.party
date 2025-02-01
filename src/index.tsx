import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Error, IndexContent, Portfolio, Resume } from "./pages/index";
import { StrictMode } from "react";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <IndexContent />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
    },
  },
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
