import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import TodoDetails from "../pages/TodoDetails";
import About from "../pages/About";
import TodoForm from "../components/TodoForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/todos",
                element: <Todos />
            },
            {
                path: '/todos/:id',
                element: <TodoDetails />
            },
            {
                path: "/create-todo",
                element: <TodoForm />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
])