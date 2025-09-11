// src/components/LoginSignup/Signup.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as doLogin, setProfileComplete } from "../../utils/auth";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const validatePassword = (v) => {
    setConfirmPassword(v);
    setIsError(password !== v);
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    if (isError) return;
    setLoading(true);
    setTimeout(() => {
      // first time signup -> mark profile incomplete and go to setup
      doLogin();
      setProfileComplete(false);
      navigate("/profilesetup", { replace: true });
    }, 300);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left: Image */}
      <div className="hidden md:flex md:w-1/2 bg-black items-center justify-center overflow-hidden">
        <img
          src="/candidate-career/LoginSignupImg/Signup.png"
          alt="Signup Illustration"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right: Compact Form (no scroll) */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
        <div className="w-full max-w-[520px] px-5">
          {/* Title (smaller + tight line-height) */}
          <div className="text-center mb-6">
            <h1 className="text-[28px] leading-[32px] font-extrabold text-black">
              Set Up Your
              <br />
              Access to the Platform
            </h1>
          </div>

          <form onSubmit={handleSubmitSignup} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                className="w-full h-12 rounded-md border border-gray-300 bg-white px-4 outline-none focus:ring-2 focus:ring-gray-600 "
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                className="w-full h-12 rounded-md border border-gray-300 bg-white px-4 outline-none focus:ring-2 focus:ring-gray-600 "
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => validatePassword(e.target.value)}
                autoComplete="new-password"
                className={`w-full h-12 rounded-md px-4 outline-none focus:ring-2 focus:ring-gray-600 border ${
                  isError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {isError && (
                <p className="mt-1 text-xs text-red-600">
                  Passwords do not match
                </p>
              )}
            </div>

            {/* Primary button (smaller height) */}
            <button
              type="submit"
              disabled={loading || isError}
              className="w-full h-12 rounded-md bg-[#1F712F] text-white text-[14px] font-semibold hover:bg-[#196227] transition disabled:opacity-60">
              {loading ? "Creating." : "SIGN UP"}
            </button>

            {/* Google (outlined, compact) */}
            <button
              type="button"
              onClick={() => {
                doLogin();
                setProfileComplete(false);
                navigate("/profilesetup", { replace: true });
              }}
              className="w-full h-12 rounded-md border-2 border-[#1F712F] bg-white flex items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path
                  d="M21.6 12.23c0-.5-.04-.98-.12-1.44H12v2.73h5.39a4.6 4.6 0 0 1-2 3.01l2.99 2.33C20.25 17.3 21.6 14.99 21.6 12.23z"
                  fill="#1976D2"
                />
                <path
                  d="M12 22c2.7 0 4.96-.9 6.61-2.45l-2.99-2.33c-.83.56-1.9.9-3.62.9-2.78 0-5.14-1.87-5.98-4.38H2.92v2.75C4.55 19.77 8 22 12 22z"
                  fill="#4CAF50"
                />
                <path
                  d="M6.02 13.74A6.06 6.06 0 0 1 5.69 12c0-.6.1-1.18.3-1.74V7.51H2.92A9.98 9.98 0 0 0 2 12c0 1.6.38 3.11 1.06 4.49l2.96-2.75z"
                  fill="#FF3D00"
                />
                <path
                  d="M12 5.4c1.48 0 2.78.51 3.81 1.52l2.86-2.86A9.96 9.96 0 0 0 12 2C8 2 4.55 4.23 2.92 7.51l3.08 2.75C7.84 7.75 9.22 5.4 12 5.4z"
                  fill="#FFC107"
                />
              </svg>
              <span className="text-[14px] font-bold">SIGN IN WITH GOOGLE</span>
            </button>

            {/* Bottom link (compact) */}
            <p className="text-center text-[13px] text-black">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#1F712F] underline font-semibold">
                SIGN IN
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
