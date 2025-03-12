import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
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
import SingleFood from "./component/SingleFood/SingleFood";
import FoodPurchase from "./component/FoodPurchase/FoodPurchase";
import UpdateFoodInfo from "./component/UpdateFoodInfo/UpdateFoodInfo";

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
        loader: () =>
          fetch(
            `https://restaurant-management-server-sage.vercel.app/allFoods`
          ),
      },
      {
        path: "/singleFood/:id",
        element: <SingleFood></SingleFood>,
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-sage.vercel.app/singleFood/${params.id}`
          ),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/purchase_page/:id",
        element: (
          <PrivateRoute>
            <FoodPurchase></FoodPurchase>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-sage.vercel.app/singleFood/${params.id}`
          ),
      },
      {
        path: "/my_food/users/:email",
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-sage.vercel.app/my_food/users/${params.email}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateFoodInfo />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-sage.vercel.app/update/${params.id}`
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
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
