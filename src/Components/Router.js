import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import SingleItemMovie from "../Pages/SingleItemMovie";
import SingleItemTV from "../Pages/SingleItemTV";
import Search from "../Pages/Search";
import FilterMovie from "../Pages/FilterMovie";
import FilterTV from "../Pages/FilterTV";
import CreditSingle from "../Pages/CreditSingle";
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
    path: "/TV/:id",
    element: <SingleItemTV />,
  },
  {
    path: "/credit/:id",
    element: <CreditSingle />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/filter/movie/:sortParams",
    element: <FilterMovie />,
  },
  {
    path: "/filter/tv/:sortParams",
    element: <FilterTV />,
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
