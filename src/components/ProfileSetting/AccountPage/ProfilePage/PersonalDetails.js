// src/components/ProfileSetting/AccountPage/ProfilePage/PersonalDetails.jsx
import React from "react";

export default function PersonalDetails() {
  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] md:text-[24px] font-semibold text-[#1C1C1C]">
          Personal Details
        </h2>
        <button
          type="button"
          className="w-9 h-9 rounded-[8px] border border-[#E9E9E9] grid place-items-center hover:bg-gray-50">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Z"
              stroke="#666"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="firstName" label="First Name*" />
        <Input name="lastName" label="Second Name*" />
        <Select
          name="gender"
          label="Gender*"
          options={["Male", "Female", "Other"]}
        />
        <DateInput name="dob" label="Date of Birth*" />
        {/* ✅ Now both Email & Phone are full width */}
        <Input name="email" label="Email*" type="email" mdSpan />
        <Input name="phone" label="Phone Number*" mdSpan />
        <Input name="address1" label="Address Line 1*" mdSpan />
        <Input name="address2" label="Address Line 2" mdSpan />
        <Input name="city" label="City*" />
        <Select
          name="state"
          label="State*"
          options={["Delhi", "Haryana", "UP", "Maharashtra"]}
        />
      </div>

      <div className="mt-6 flex justify-end">
        <button
          className="h-[44px] px-6 rounded-[10px] bg-[#1F712F] text-white font-semibold"
          type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

/* small field components */
const Label = ({ children }) => (
  <label className="block text-[14px] text-[#1C1C1C] mb-1 font-medium">
    {children}
  </label>
);

const base =
  "w-full h-[46px] md:h-[48px] border border-[#E9E9E9] rounded-[10px] px-3 outline-none focus:ring-2 focus:ring-[#1F712F33]";

const Input = ({ label, mdSpan = false, ...rest }) => (
  <div className={mdSpan ? "md:col-span-2" : ""}>
    <Label>{label}</Label>
    <input {...rest} className={base} />
  </div>
);

const DateInput = ({ label, ...rest }) => (
  <div>
    <Label>{label}</Label>
    <div className="relative">
      <input type="date" {...rest} className={base} />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-70">
        📅
      </span>
    </div>
  </div>
);

const Select = ({ label, options = [], ...rest }) => (
  <div>
    <Label>{label}</Label>
    <select {...rest} className={base}>
      <option value="">Select</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);
