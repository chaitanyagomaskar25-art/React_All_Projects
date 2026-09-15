import { Outlet } from "react-router";
import { useTheme } from "../context/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const { isDark } = useTheme();

  // Dynamic theme container style
  const layoutStyle = {
    backgroundColor: isDark ? "#0b0f17" : "#ffffff",
    color: isDark ? "#f1f5f9" : "#0f172a",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <div style={layoutStyle} className={isDark ? "dark-mode" : "light-mode"}>
      <Navbar />
      {/* Main content expands to push footer to bottom on short pages */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;