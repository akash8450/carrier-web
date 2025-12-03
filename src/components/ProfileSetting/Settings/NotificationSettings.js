// src/components/Settings/NotificationsPage.jsx
import React, { useState, useCallback } from "react";

export default function NotificationsPage() {
  const [job, setJob] = useState(true);
  const [profile, setProfile] = useState(true);
  const [system, setSystem] = useState(true);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Max width for desktop; mobile has only side padding */}
      <div className="mx-auto mt-[88px] max-w-[1680px] px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-[#E9E9E9] rounded-[12px] shadow-sm">
          {/* Inner frame – compact on mobile, roomy on large */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 pb-4">
            {/* Back */}
            {/* Back */}
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-1.5 h-[21px] text-[#666] hover:opacity-80">
              <img
                src="/Back.svg"
                alt="Back"
                className="w-4 h-4 object-contain"
              />
              <span className="font-semibold text-[16px] leading-[20px] sm:text-[17px]">
                Back
              </span>
            </button>

            {/* Title block */}
            <div className="mt-4 flex flex-col gap-2">
              <h1
                className="text-[#1C1C1C] font-semibold 
                text-[22px] leading-[30px]
                sm:text-[26px] sm:leading-[34px]
                md:text-[30px] md:leading-[38px]
                lg:text-[34px] lg:leading-[42px]">
                Manage Your Notifications
              </h1>
              <p
                className="text-[#666666] max-w-[975px]
                text-[14px] leading-[20px]
                sm:text-[15px] sm:leading-[22px]
                md:text-[16px] md:leading-[23px]">
                Stay updated the way you want. Choose which notifications you’d
                like to receive and turn off the ones you don’t need.
              </p>
            </div>

            {/* List */}
            <div className="mt-4 flex flex-col divide-y divide-[#E9E9E9]">
              <Row
                icon="/notificationIcon/1.svg"
                title="Job & Application Updates"
                desc="Get all the essential updates in one place — from new job alerts that match your profile to application status changes, interview invites, assessment notifications, and even test results. Stay informed at every step of your hiring journey."
                checked={job}
                onChange={setJob}
              />

              <Row
                icon="/notificationIcon/2.svg"
                title="Profile Reminders"
                desc="A complete and updated profile helps you stand out. Get reminders to update your skills, work experience, and other details to maximize visibility among recruiters."
                checked={profile}
                onChange={setProfile}
              />

              <Row
                icon="/notificationIcon/3.svg"
                last
                title="System Announcement"
                desc="Receive important updates about platform enhancements, new features, and policy changes to get the best experience while using the portal."
                checked={system}
                onChange={setSystem}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Pieces ---------- */

function Row({ icon, title, desc, checked, onChange, last }) {
  return (
    <div className={`w-full ${last ? "py-4" : "py-4"}`}>
      {/* On md+ it’s a two-column layout; on mobile it stacks with the toggle aligned right */}
      <div className="md:flex md:items-start md:justify-between md:gap-4">
        {/* Left group: icon + texts */}
        <div className="flex items-start gap-3 w-full pr-1">
          <img
            src={icon}
            alt=""
            loading="lazy"
            className="mt-0.5 shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain"
          />
          <div className="flex-1">
            <h3
              className="text-[#1C1C1C] font-semibold
              text-[15px] leading-[22px]
              sm:text-[16px] sm:leading-[24px]
              md:text-[18px] md:leading-[26px]
              lg:text-[20px] lg:leading-[28px]">
              {title}
            </h3>
            <p
              className="mt-1.5 text-[#666666]
              text-[13px] leading-[20px]
              sm:text-[14px] sm:leading-[21px]
              md:text-[15px] md:leading-[22px]
              lg:text-[16px] lg:leading-[23px]">
              {desc}
            </p>
          </div>
        </div>

        {/* Right: toggle — on mobile it drops below and aligns to the right */}
        <div className="mt-3 md:mt-0 w-full md:w-auto flex md:block justify-end">
          <ToggleLarge checked={checked} onChange={onChange} label={title} />
        </div>
      </div>
    </div>
  );
}

function ToggleLarge({ checked, onChange, label }) {
  const onKey = useCallback(
    (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        onChange(!checked);
      }
    },
    [checked, onChange]
  );

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      onKeyDown={onKey}
      className={`relative shrink-0 select-none
        w-[54px] h-[30px]
        sm:w-[58px] sm:h-[32px]
        md:w-[64px] md:h-[34px]
        lg:w-[68px] lg:h-[36px]
        rounded-full transition-colors duration-200 ease-out
        ${checked ? "bg-[#419637]" : "bg-gray-300"}`}
      title={checked ? "On" : "Off"}>
      <span
        className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-full shadow transition-all duration-200 ease-out
          w-[26px] h-[26px] left-[2px]
          sm:w-[27px] sm:h-[27px]
          md:w-[28px] md:h-[28px]
          lg:w-[30px] lg:h-[30px]
          ${
            checked
              ? "translate-x-[24px] sm:translate-x-[26px] md:translate-x-[30px] lg:translate-x-[32px]"
              : ""
          }`}
      />
    </button>
  );
}
