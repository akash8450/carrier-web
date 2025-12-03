// src/components/LoginSignup/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as doLogin, hasProfile } from "../../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      doLogin();
      // profile complete? -> /home : /profilesetup
      navigate(hasProfile() ? "/home" : "/profilesetup", { replace: true });
    }, 400);
  };

  const handleSubmitGoogle = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      doLogin();
      navigate(hasProfile() ? "/home" : "/profilesetup", { replace: true });
    }, 300);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* LEFT: compact content */}
      <div className="w-full lg:w-1/2 bg-white flex justify-center items-center px-4">
        <div className="w-full max-w-[400px]">
          <h2 className="text-center font-extrabold text-[24px] leading-tight">
            Login to
          </h2>
          <h3 className="text-center font-extrabold text-[24px] leading-tight mt-1">
            Skill Assessment Test
          </h3>

          <form onSubmit={handleSubmitLogin} className="mt-5 space-y-4">
            <div>
              <label className="block mb-1 text-[13px] font-medium text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full h-11 mb-4 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-[13px] font-medium text-gray-700">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full h-11 mb-4 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-md bg-green-700 text-white text-sm font-semibold  focus:ring-gray-600 text-smtransition disabled:opacity-70">
              {loading ? "Signing In..." : "SIGN IN"}
            </button>
          </form>

          {/* Google Sign In */}
          <button
            onClick={handleSubmitGoogle}
            disabled={loading}
            className="mt-3 w-full h-11 rounded-md border-2 border-green-700 bg-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition disabled:opacity-70">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            {loading ? "Please wait..." : "SIGN IN WITH GOOGLE"}
          </button>

          {/* Links */}
          <div className="text-center mt-4">
            <Link
              to="/forgot-password"
              className="text-xs font-semibold underline">
              Forgot Password?
            </Link>
          </div>

          <p className="text-center text-xs mt-5">
            Need an account?{" "}
            <Link
              to="/signup"
              className="font-semibold underline text-green-700">
              SIGN UP
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT: image (unchanged) */}
      <div className="hidden lg:flex w-1/2 bg-black items-center justify-center overflow-hidden">
        <img
          src="/LoginSignupImg/Login.svg"
          alt="Login Illustration"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
