import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Chefs from "../pages/Home/Chefs/Chefs/Chefs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "chefs",
        element: <Chefs />,
      },
      ,
    ],
  },
]);

export default router;
