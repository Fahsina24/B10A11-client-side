import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root/Root";
import ErrorPage from "./component/ErrorPage/ErrorPAge";
import Home from "./component/Home/Home";
import AuthProvider from "./provider/AuthProvider";
import LogIn from "./component/LogIn/LogIn";
import Register from "./component/Register/Register";
import AllFood from "./component/AllFood/AllFood";
import Gallery from "./component/Gallery/Gallery";
import MyFoods from "./component/MyFoods/MyFoods";
import AddFoods from "./component/AddFoods/AddFoods";
import MyOrders from "./component/MyOrders/MyOrders";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allFoods",
        element: <AllFood></AllFood>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/my_food",
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/add_food",
        element: (
          <PrivateRoute>
            <AddFoods></AddFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/my_orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
