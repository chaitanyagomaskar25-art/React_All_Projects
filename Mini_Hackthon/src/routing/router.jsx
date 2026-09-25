import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
const Task = lazy(()=>import('../pages/Task'))
const About = lazy(()=>import('../pages/About'))
import App from "../App";

import { TaskContextProvider } from "../context/TaskContextProvider";
import { lazy } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskContextProvider><App /></TaskContextProvider>
    ,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tasks",
        element: <Task />,
      },
      {
        path: 'about',
        element: <About />
      }
    ],
  },
]);
