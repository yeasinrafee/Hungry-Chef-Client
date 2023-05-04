import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Chefs from "../pages/Home/Chefs/Chefs/Chefs";
import ChefDetails from "../pages/Home/Chefs/ChefDetails/ChefDetails";
import Login from "../pages/Login/Login/Login";

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
      {
        path: `chefs/:id`,
        element: <ChefDetails />,
        loader: ({ params }) =>
          fetch(
            `https://hungry-chef-server-yeasinrafee.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
