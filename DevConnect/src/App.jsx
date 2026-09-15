import { createBrowserRouter } from "react-router";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Public_Pages/Home";
import Search from "./pages/Public_Pages/Search";
import Profile from "./pages/Public_Pages/Profile";
import PostDetails from "./pages/Public_Pages/Post_Details";
import Login from "./pages/Auth_Pages/Login";
import Singup from "./pages/Auth_Pages/Singup";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Admin_Pages/Dashboard";
import Users from "./pages/Admin_Pages/Users";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {index: true,
        element: <Home />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "profile/:id",
        element: <Profile />
      },
      {
        path: "post-details/:id",
        element: <PostDetails />
      }

    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Singup />
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path:"users",
        element: <Users />
      },
    ]
  },
{
  path: "*",
  element:  <NotFound />
}
])