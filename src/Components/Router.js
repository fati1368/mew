import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import SingleItem from "../Pages/SingleItem";
import Search from "../Pages/Search";

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
    element: <Search />,
  },
  {
    path: "*",
    element: <h1>not found</h1>,
  },
]);
export default function Routers() {
  return <RouterProvider router={router} />;
}
