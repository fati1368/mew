import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import PopularPerson from "../Pages/PopularPerson";
import SingleItemMovie from "../Pages/SingleItemMovie";
import SingleItemTV from "../Pages/SingleItemTV";
import Search from "../Pages/Search";
import FilterMovie from "../Pages/FilterMovie";
import FilterTV from "../Pages/FilterTV";
import SingleItemCredit from "../Pages/SingleItemCredit";
import BestList from "../Pages/BestList";
import FilterTrend from "../Pages/FilterTrend";
import NotFound from "../Pages/NotFound";

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
    element: <SingleItemCredit />,
  },
  {
    path: "/personPopular",
    element: <PopularPerson />,
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
    path: "/filter/trend/:timeParams/:typeParams",
    element: <FilterTrend />,
  },
  {
    path: "/bestList/:TypeParams/:ListParams",
    element: <BestList />,
  },
  {
    path: "*",
    element: <NotFound/>
  },
]);
export default function Routers() {
  return <RouterProvider router={router} />;
}
