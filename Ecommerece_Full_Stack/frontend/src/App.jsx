import { createBrowserRouter } from "react-router";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProtectedRoute from "./component/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./layout/admin/AdminLayout";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminRoute from "./component/admin/AdminRoute";
import AddProducts from "./pages/admin/AddProducts";
import Graph from "./pages/admin/Graph";
import LikedProducts from "./pages/LikedProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
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
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {path: "/liked-products",
        element: (
          <ProtectedRoute>
            <LikedProducts />
          </ProtectedRoute>
        ),}
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute >
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <AdminProducts />,
      },
      {
        path: "add-products",
        element: <AddProducts />
      },
      {
        path: "graph",
        element: <Graph />
      },
      {

      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
