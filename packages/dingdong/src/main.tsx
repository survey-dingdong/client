import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Test1 from "./component/Test1";
import Test2 from "./component/Test2";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="/test1">Test 1</Link>
      </div>
    ),
  },
  {
    path: "/test1",
    element: <Test1 />,
  },
  {
    path: "/test2",
    element: <Test2 />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
