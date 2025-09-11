// src/components/ProfileSetting/AccountPage/ProfilePage/TechnicalSkills.jsx
import React, { useState } from "react";

export default function TechnicalSkills() {
  const [skills, setSkills] = useState([{ id: 1, label: "" }, { id: 2, label: "" }]);

  const addSkill = () =>
    setSkills((s) => [...s, { id: Date.now(), label: "" }]);

  const update = (id, v) =>
    setSkills((s) => s.map((x) => (x.id === id ? { ...x, label: v } : x)));

  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] md:text-[24px] font-semibold text-[#1C1C1C]">
          Technical Skills
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

      <div className="mt-4 grid grid-cols-1 gap-4">
        {skills.map((s, i) => (
          <div key={s.id}>
            <label className="block text-[14px] text-[#1C1C1C] mb-1 font-medium">
              {i === 0
                ? "Technical Experience 1*"
                : `Technical Experience ${i + 1}`}
            </label>
            <input
              name={`skills[${i}]`}
              value={s.label}
              onChange={(e) => update(s.id, e.target.value)}
              className="w-full h-[48px] border border-[#E9E9E9] rounded-[10px] px-3 outline-none focus:ring-2 focus:ring-[#1F712F33]"
              placeholder="e.g., Java, Spring Boot, AWS, Microservices"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addSkill}
          className="self-start inline-flex items-center gap-2 text-[#1F712F] font-semibold hover:underline justify-end">
          Add More Skills
          <span className="w-5 h-5 grid place-items-center rounded border border-[#1F712F]">
            +
          </span>
        </button>
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
