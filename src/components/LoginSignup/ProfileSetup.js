// src/components/LoginSignup/ProfileSetup.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, setProfileComplete } from "../../utils/auth";

/**
 * Same design, improved responsiveness:
 * - Inputs & button full-width on mobile
 * - Avatar above form on small screens, side-by-side on lg
 */
export default function ProfileSetup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    title: "",
    agree: true,
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setProfileComplete(true);
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-12 pb-16">
        {/* Heading */}
        <h1 className="text-[26px] sm:text-[28px] font-semibold text-[#1e3a1f]">
          Let’s Set Up Your Profile
        </h1>
        <p className="mt-2 text-[15px] text-neutral-600 max-w-2xl">
          Just a few more steps! Update your information and make your journey
          seamless.
        </p>

        {/* Card */}
        <div className="mt-8 rounded-lg border border-neutral-200 shadow-sm">
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-10 items-start">
              {/* Avatar block */}
              <div className="flex justify-center lg:justify-start">
                <button
                  type="button"
                  className="relative h-56 w-56 shrink-0 rounded-full bg-neutral-100 flex items-center justify-center border border-neutral-200"
                  aria-label="Upload profile picture">
                  {/* Placeholder person */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-20 w-20 text-neutral-300"
                    fill="currentColor">
                    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5C21 16.5 17 14 12 14Z" />
                  </svg>
                  {/* Small camera badge */}
                  <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white border border-neutral-300 shadow px-2 py-1 flex items-center gap-1 text-xs text-neutral-600">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor">
                      <path d="M9 4l1.5-2h3L15 4h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm3 4a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z" />
                    </svg>
                    <span>Upload</span>
                  </span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={onSubmit} className="w-full max-w-2xl">
                <div className="space-y-6">
                  {/* First Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-800">
                      First Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={onChange}
                      className="w-full rounded-md border border-neutral-300 bg-white px-3 py-3 text-[15px] outline-none focus:border-green-700 focus:ring-2 focus:ring-green-200"
                      placeholder=""
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-800">
                      Last Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={onChange}
                      className="w-full rounded-md border border-neutral-300 bg-white px-3 py-3 text-[15px] outline-none focus:border-green-700 focus:ring-2 focus:ring-green-200"
                      placeholder=""
                    />
                  </div>

                  {/* Professional Title */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-800">
                      Professional Title<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="title"
                      value={form.title}
                      onChange={onChange}
                      className="w-full rounded-md border border-neutral-300 bg-white px-3 py-3 text-[15px] outline-none placeholder:text-neutral-400 focus:border-green-700 focus:ring-2 focus:ring-green-200"
                      placeholder="e.g. Java developer"
                    />
                  </div>

                  {/* Terms */}
                  <label className="flex items-start gap-3 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={form.agree}
                      onChange={onChange}
                      className="mt-1 h-5 w-5 rounded border-neutral-400 text-green-700 focus:ring-green-600"
                    />
                    <span className="text-[15px] text-neutral-700 leading-6">
                      I have read and agree to the{" "}
                      <a
                        href="#"
                        className="text-green-700 underline underline-offset-2">
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-green-700 underline underline-offset-2">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto rounded-md bg-green-700 px-5 sm:px-6 py-3 text-white text-[15px] font-medium shadow hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300">
                      Save & Continue
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
