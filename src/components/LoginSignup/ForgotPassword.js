// src/components/LoginSignup/ForgotPassword.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // UI-only
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* LEFT: compact content */}
      <div className="w-full lg:w-1/2 bg-white flex justify-center items-center px-4">
        <div className="w-full max-w-[400px]">
          <h2 className="text-center font-extrabold text-[24px] leading-tight">
            Forgot Password
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block mb-1 text-[13px] font-medium text-gray-700">
                  Enter your email
                </label>
                <input
                  type="email"
                  className="w-full h-11 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full h-11 rounded-md focus:ring-gray-600  text-white text-sm font-semibold hover:bg-green-800 transition">
                Send Reset Link
              </button>
            </form>
          ) : (
            <p className="text-center text-green-600 text-sm mt-6">
              If this email exists, a reset link has been sent.
            </p>
          )}

          <p className="text-center text-xs mt-5">
            <Link
              to="/login"
              className="font-semibold underline text-green-700">
              Back to Login
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT: image (unchanged) */}
      <div className="hidden lg:flex w-1/2 bg-black items-center justify-center overflow-hidden">
        <img
          src="/LoginSignupImg/Login.svg"
          alt="Forgot Illustration"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
