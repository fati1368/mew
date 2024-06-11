import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import SingleItemMovie from "../Pages/SingleItemMovie";
import Search from "../Pages/Search";
import Filter from "../Pages/Filter";
import Genre from "../Pages/Genre";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <SingleItemMovie />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/genre/:id",
    element: <Genre />,
  },
  {
    path: "*",
    element: <h1>not found</h1>,
  },
]);
export default function Routers() {
  return <RouterProvider router={router} />;
}
