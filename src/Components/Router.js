import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import SingleItem from "../Pages/SingleItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <SingleItem />,
  },
  {
    path: "/search",
    element: <h2>search</h2>,
  },
  {
    path: "*",
    element: <h1>not found</h1>,
  },
]);
export default function Routers() {
  return <RouterProvider router={router} />;
}
