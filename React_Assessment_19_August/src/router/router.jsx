import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
const ProductsDetails = lazy(() => import("../pages/ProductsDetails"));
const Checkout = lazy(() => import("../pages/Checkout"));
import App from "../App";
import { lazy } from "react";
import { CartContextProvider } from "../context/CartContext";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CartContextProvider><App /></CartContextProvider>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <ProductsDetails />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
]);
