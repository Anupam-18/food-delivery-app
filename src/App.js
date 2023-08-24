import RestaurantList from "./components/RestaurantList";
import NavBar from "./components/NavBar";
import React from "react";
// import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import RestuarantMenu from "./components/RestuarantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <RestaurantList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestuarantMenu />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

export default AppRouter;
