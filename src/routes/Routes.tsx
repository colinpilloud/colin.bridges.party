import { App } from "@/App";
import { Routes as ReactRouterDomRoutes, Route } from "react-router-dom";
import { About, Error, IndexContent, Portfolio, Resume } from "@/pages";

export function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route path="/" element={<App />} errorElement={<Error />}>
        <Route index element={<IndexContent />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </ReactRouterDomRoutes>
  );
}
