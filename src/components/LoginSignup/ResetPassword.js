// src/components/LoginSignup/ResetPassword.jsx
import React, { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

/* Compact, consistent style (inputs + button same size) */
const ControlClass =
  "w-full h-12 bg-[rgba(202,202,202,0.06)] border border-[#E6E6E6] rounded-lg px-3 text-sm outline-none focus:border-green-700 focus:ring-2 focus:ring-green-200";

export default function ResetPassword() {
  const [sp] = useSearchParams();
  const navigate = useNavigate();
  const token = useMemo(() => sp.get("token") || "", [sp]);

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const tokenValid = !!token; // (backend पर validate होगा)

  const onSubmit = (e) => {
    e.preventDefault();
    if (!tokenValid) return;
    if (password.length < 6) return;
    if (password !== confirm) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
    }, 500);
  };

  return (
    <>
      <div className="flex h-screen w-full overflow-hidden bg-white">
        {/* LEFT: Illustration (hidden on small) */}
        <div className="hidden lg:flex lg:w-1/2 bg-black items-center justify-center">
          <img
            src="/LoginSignupImg/Login.svg" // ← तुम्हारा ही path
            alt="Reset"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* RIGHT: Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-[380px] px-5">
            <h1 className="text-[24px] md:text-[26px] font-extrabold text-black text-center">
              Set a New Password
            </h1>
            <p className="mt-2 text-center text-[13px] md:text-[14px] text-gray-600">
              Make sure your new password is strong and secure.
            </p>

            {!tokenValid ? (
              <p className="mt-6 text-center text-red-600">
                This reset link is invalid or expired.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                {/* New Password */}
                <div className="w-full">
                  <label className="block mb-1 text-sm font-medium text-gray-800">
                    New Password<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={ControlClass}
                    placeholder="••••••••"
                    required
                  />
                </div>

                {/* Confirm New Password */}
                <div className="w-full">
                  <label className="block mb-1 text-sm font-medium text-gray-800">
                    Confirm New Password<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className={ControlClass}
                    placeholder="••••••••"
                    required
                  />
                  {confirm && confirm !== password && (
                    <p className="mt-1 text-xs text-red-600">
                      Passwords do not match.
                    </p>
                  )}
                </div>

                {/* Submit (same size as inputs) */}
                <div className="w-full">
                  <button
                    type="submit"
                    disabled={
                      submitting ||
                      !password ||
                      password.length < 6 ||
                      password !== confirm
                    }
                    className="w-full h-12 rounded-lg bg-green-700 px-4 text-sm md:text-base text-white font-semibold shadow hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-gray-600  disabled:opacity-60">
                    {submitting ? "Please wait..." : "Reset Password"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowSuccess(false)}
          />
          <div className="relative z-10 w-[340px] md:w-[400px] bg-white rounded-xl shadow-xl p-6">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute right-4 top-4 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"
              aria-label="Close">
              ✕
            </button>

            <div className="flex flex-col items-center text-center">
              <img
                src="/Reset.svg" // ← तुम्हारा ही path
                alt="Success"
                className="w-24 h-24 md:w-28 md:h-28 object-contain"
              />
              <h3 className="mt-3 text-base md:text-lg font-semibold">
                🎉 Password Updated Successfully!
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                You can now log in with your new password.
              </p>

              <button
                onClick={() => navigate("/login", { replace: true })}
                className="mt-5 w-[200px] h-11 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-gray-600 ">
                Go to Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
