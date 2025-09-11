// src/components/ProfileSetting/AccountPage/ProfilePage/ProfessionalDetails.jsx
import React, { useState } from "react";

export default function ProfessionalDetails() {
  const [current, setCurrent] = useState(true);

  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] md:text-[24px] font-semibold text-[#1C1C1C]">
          Professional Details
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
        <Input name="title" label="Professional Title*" mdSpan />
        <Select
          name="experienceYears"
          label="Experience*"
          options={["0-1 yrs", "1-3 yrs", "3-5 yrs", "5-8 yrs", "8+ yrs"]}
        />
        <Input name="company" label="Current Company" />
        <DateInput name="startDate" label="Start Date" />
        <DateInput name="endDate" label="End Date" disabled={current} />

        {/* Toggle right-end (same grid, full row) */}
        <div className="md:col-span-2 flex justify-end">
          <Toggle
            checked={current}
            onChange={setCurrent}
            label="Currently Working Here"
          />
        </div>

        <TextArea
          name="roleDesc"
          label="Current Company Role & Responsibilities"
          rows={5}
          mdSpan
        />
        <button
          type="button"
          className="text-[#1F712F] font-semibold md:col-span-2 hover:underline inline-flex items-center gap-2 justify-end">
          Add More Experience
          <span className="w-5 h-5 grid place-items-center rounded border border-[#1F712F]">
            +
          </span>
        </button>
        <Input name="currentCtc" label="Current CTC" />
        <Input name="expectedCtc" label="Expected CTC" />
        <Select
          name="noticePeriod"
          label="Notice Period"
          options={["Immediate", "15 Days", "30 Days", "60 Days", "90 Days"]}
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

/* field primitives */
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

const DateInput = ({ label, ...rest }) => (
  <div>
    <Label>{label}</Label>
    <input type="date" {...rest} className={base} />
  </div>
);

const TextArea = ({ label, rows = 4, mdSpan = false, ...rest }) => (
  <div className={mdSpan ? "md:col-span-2" : ""}>
    <Label>{label}</Label>
    <textarea
      rows={rows}
      {...rest}
      className="w-full border border-[#E9E9E9] rounded-[10px] px-3 py-3 outline-none focus:ring-2 focus:ring-[#1F712F33]"
    />
  </div>
);

const Toggle = ({ checked, onChange, label }) => (
  <div className="flex items-center gap-3">
    <span className="text-[14px] text-[#1C1C1C]">{label}</span>
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`w-[46px] h-[26px] rounded-full relative transition ${
        checked ? "bg-[#1F712F]" : "bg-gray-300"
      }`}>
      <span
        className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full transition ${
          checked ? "right-1" : "left-1"
        }`}
      />
    </button>
  </div>
);
