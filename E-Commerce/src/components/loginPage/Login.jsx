import React, { useContext, useState } from "react";
import { useSetterAuth, useStateAuth } from "../../context/AuthContext";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../header/navbar/Navbar";
import Home from "../../pages/Home";
import ProductMain from "../products/ProductMain";
import ProductDetails from "../products/ProductDetails";
import AboutPage from "../../pages/AboutPage";
import Contact from "../../pages/Contact";
import Cart from "../../pages/Cart";
import Profile from "../../pages/Profile";
import Footer from "../footer/Footer";
import { ContextProvider } from "../../context/CartContext";

const Login = () => {
  const navigate = useNavigate();

  const isAuth = useStateAuth();
  const setIsAuth = useSetterAuth();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  if (isAuth) {
    return (
      <ContextProvider>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductMain />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/profile"
              element={
                <Profile
                  name={userData.username}
                  email={userData.email}
                  password={userData.password}
                />
              }
            />
          </Routes>
          <Footer />
        </>
      </ContextProvider>
    );
  }

  const handleErrors = (e) => {
    const { name, value } = e.target;
    setError((prev) => {
      let msg = "";
      if (name === "username") {
        msg =
          value.length <= 2 ? "Username must be at least 3 characters." : "";
      }
      if (name === "email") {
        msg = !value.includes("@")
          ? 'Please enter a valid email containing "@"'
          : "";
      }
      if (name === "password") {
        msg =
          value.length <= 8
            ? `Password is too short(${value.length}/8 characters)`
            : "";
      }
      return { ...prev, [name]: msg };
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Create an Account
        </h1>
        <p className="text-gray-500 text-center mt-2 mb-8">
          Join our community today
        </p>

        <div className="space-y-6">
          {/* Username Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              name="username"
              type="text"
              placeholder="Chaitanya123"
              onChange={(e) => {
                setUserData({ ...userData, username: e.target.value });
                handleErrors(e);
              }}
              className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors 
            ${
              error.username
                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }`}
            />
            {error.username && (
              <span className="text-sm text-red-500">{error.username}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
                handleErrors(e);
              }}
              className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors 
            ${
              error.email
                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }`}
            />
            {error.email && (
              <span className="text-sm text-red-500">{error.email}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
                handleErrors(e);
              }}
              className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors 
            ${
              error.password
                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }`}
            />
            {error.password && (
              <span className="text-sm text-red-500">{error.password}</span>
            )}
          </div>

          <button
            onClick={() => {
              setIsAuth(true);
              navigate("/" , { replace: true })
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 mt-4"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
