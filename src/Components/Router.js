import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import SingleItem from "../Pages/SingleItem";
import Search from "../Pages/Search";
import Filter from "../Pages/Filter";
import MovieListByGenre from "./MovieListByGenre";

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
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/genre",
    element: <MovieListByGenre />,
  },
  {
    path: "*",
    element: <h1>not found</h1>,
  },
]);
export default function Routers() {
  return <RouterProvider router={router} />;
}
