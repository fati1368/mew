import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <h1>not found</h1>,
  },
]);
export default function Routers() {
  return <RouterProvider router={router} />;
}
