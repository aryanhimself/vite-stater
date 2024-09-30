import DefaultLayout from "@/components/layout/default-layout";
import HomePage from "@/pages/(main)/home-page";
import ErrorPage from "@/pages/(static)/error-page";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default routes;
