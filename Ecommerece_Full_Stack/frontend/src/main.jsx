import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AuthContextProvider>
      <RouterProvider router={router} />
      </AuthContextProvider>
      </ThemeProvider>
      
    </Provider>
  </StrictMode>
);
