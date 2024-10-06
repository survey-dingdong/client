import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Project from "./component/project-list/ProjectList";
import { Provider } from "./Provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Project params={{}} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
