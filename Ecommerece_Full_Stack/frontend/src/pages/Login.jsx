import React from "react";
import { useAdminAuth, useAuthContext, useAuthDispatch } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const setLoggedIn = useAuthDispatch();
  const navigate = useNavigate();
  const { setIsAdmin } = useAdminAuth();
  const loggedIn = useAuthContext();

  const handleLogin = () => {
    setLoggedIn(true);
    navigate("/");
  };

  const handleAdminLogin = () => {
    setLoggedIn(true);
    setIsAdmin(true);
    navigate("/admin");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-slate-950 text-slate-100 p-4 overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-md bg-slate-900/80 border border-slate-800 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl font-bold shadow-inner">
            🔐
          </div>
          <h2 className="text-2xl font-black tracking-tight text-white">
            Welcome Back
          </h2>
          <p className="text-xs text-slate-400 font-medium">
            Select an option below to access your account
          </p>
        </div>

        {/* Action Buttons Deck */}
        <div className="space-y-4">
          {loggedIn ? (
            <button
              onClick={handleLogin}
              className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Log In
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Log In
            </button>
          )}

          <button
            onClick={handleAdminLogin}
            className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs tracking-wider uppercase text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Login as an admin
          </button>
        </div>

        {/* Divider & Return Link */}
        <div className="pt-4 border-t border-slate-800/80 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors duration-200"
          >
            <span>←</span> Go back
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;