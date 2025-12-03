// src/components/ProfileSetting/AccountPage/ApplicationHistory/ApplicationHistory.js
import { useState } from "react";
import { useParams } from "react-router-dom";
import ApplicationHistoryEmpty from "./ApplicationHistoryEmpty";

/** small helpers */
const cls = (...a) => a.filter(Boolean).join(" ");
const statusChip = (text = "") => {
  const t = String(text).toLowerCase();
  if (t.includes("completed") || t.includes("shortlisted"))
    return "bg-[#E7F6EA] text-[#1F712F] border-[#CBEBD2]";
  if (t.includes("interview") || t.includes("under review"))
    return "bg-[#F7FAFF] text-[#1C1C1C] border-[#DFEAFB]";
  if (t.includes("not shortlisted") || t.includes("rejected"))
    return "bg-[#FFECEC] text-[#E02121] border-[#FFD2D2]";
  return "bg-[#F7FAFF] text-[#1C1C1C] border-[#E9E9E9]";
};

export default function ApplicationHistory({
  applications = DEFAULT_APPLICATIONS,
}) {
  const { userId } = useParams();
  const [openId, setOpenId] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-5 sm:pt-6 pb-5 sm:pb-6">
        {/* outer card */}
        <div className="w-full bg-white border-2 border-[#E9E9E9] rounded-[12px] shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-4 sm:px-6 pt-5 sm:pt-6 pb-4 sm:pb-5 border-b border-[#E9E9E9]">
            <button
              type="button"
              className="inline-flex items-center gap-[6px] h-[21px] w-fit hover:opacity-80"
              onClick={() => window.history.back()}>
              {/* Back.svg from public */}
              <img
                src="/Back.svg"
                alt="Back"
                className="w-2 h-2 sm:w-5 sm:h-5 object-contain"
              />
              <span className="font-['Roboto'] font-semibold text-[15px] sm:text-[16px] text-[#666]">
                Back
              </span>
            </button>

            <div className="mt-3 sm:mt-4 max-w-[980px]">
              <h1 className="font-['Source_Sans_Pro'] text-[#1C1C1C] font-semibold leading-tight text-[clamp(24px,3.4vw,40px)]">
                My Application History {userId ? `· User #${userId}` : ""}
              </h1>
              <p className="mt-2 font-['Source_Sans_Pro'] text-[#666] text-[clamp(13px,1.5vw,18px)] leading-[1.6]">
                Track all your past and ongoing job applications in one place.
                Stay updated with the status of each application and never miss
                the next step in your hiring journey.
              </p>
            </div>
          </div>

          {/* List */}
          <div className="px-4 sm:px-6 py-5 sm:py-6 flex flex-col gap-4">
            {!applications || applications.length === 0 ? (
              <ApplicationHistoryEmpty />
            ) : (
              applications.map((a) => (
                <ApplicationRow
                  key={a.id}
                  {...a}
                  isOpen={openId === a.id}
                  onToggle={() =>
                    setOpenId((id) => (id === a.id ? null : a.id))
                  }
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ApplicationRow({
  id,
  role,
  dateTime,
  currentStatus,
  nextStep,
  company,
  location,
  overallStatus, // e.g., "Completed"
  latestUpdate,
  isOpen,
  onToggle,
}) {
  const panelId = `app-row-${id}-panel`;

  return (
    <div
      className={cls(
        "w-full rounded-[12px] border border-[#E9E9E9] transition-shadow",
        "hover:shadow-[0_2px_10px_rgba(0,0,0,0.04)] bg-white"
      )}>
      {/* Top Row */}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={cls(
          "w-full text-left px-4 sm:px-6 py-4",
          "flex items-center justify-between gap-4",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F712F33] rounded-[12px]"
        )}>
        {/* Left */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="font-['Source_Sans_Pro'] font-semibold text-[#1C1C1C] text-[18px] sm:text-[20px] leading-tight">
              {role}
            </div>
            {overallStatus ? (
              <span
                className={cls(
                  "inline-flex items-center h-[24px] px-2 rounded-[6px] border text-[12px] font-semibold",
                  statusChip(overallStatus)
                )}>
                {overallStatus}
              </span>
            ) : null}
          </div>

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-y-2 sm:gap-y-0 sm:gap-x-6 text-[14px] sm:text-[15px]">
            {/* Date */}
            <div className="flex items-center gap-2 text-[#666]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="16"
                  rx="2"
                  stroke="#666"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 3V7M16 3V7M3 11H21"
                  stroke="#666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="tabular-nums">{dateTime}</span>
            </div>

            {/* Current Status */}
            <div className="text-[#666]">
              <span className="font-semibold text-[#1C1C1C]">
                Current Status:
              </span>{" "}
              <span className="text-[#1C1C1C]">{currentStatus}</span>
            </div>

            {/* Next Step */}
            <div className="text-[#666]">
              <span className="font-semibold text-[#1C1C1C]">Next Step:</span>{" "}
              <span className="text-[#1C1C1C]">{nextStep}</span>
            </div>
          </div>
        </div>

        {/* Caret (filled) */}
        <span
          className={cls(
            "ml-2 shrink-0 inline-flex items-center justify-center",
            "w-8 h-8 rounded-[8px] border border-[#E9E9E9]",
            "bg-white text-[#666] transition-transform",
            isOpen ? "rotate-180" : "rotate-0"
          )}
          aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true">
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
          </svg>
        </span>
      </button>

      {/* Divider (subtle) */}
      <div
        className={cls(
          "h-px bg-[#E9E9E9]",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Expanded Details */}
      <div
        id={panelId}
        className={cls(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}>
        <div className="overflow-hidden">
          <div className="px-4 sm:px-6 pb-5 pt-4">
            {/* Top info rows (Company, Location, Status etc.) */}
            <div className="rounded-none overflow-hidden border border-[#E9E9E9]">
              {/* Green row */}
              <div className="flex flex-col md:flex-row justify-between bg-[#F4F8F5] px-4 sm:px-6 py-3 gap-4">
                <div className="text-[15px] sm:text-[16px] text-[#666]">
                  Company: <span className="font-semibold">{company}</span>
                </div>
                <div className="text-[15px] sm:text-[16px] text-[#666]">
                  Location: <span className="font-semibold">{location}</span>
                </div>
                <div className="text-[15px] sm:text-[16px] text-[#666]">
                  Status:{" "}
                  <span className="font-semibold text-[#1F712F]">
                    {overallStatus}
                  </span>
                </div>
              </div>

              {/* Blue row */}
              <div className="flex flex-col md:flex-row justify-between bg-[#F7FAFF] px-4 sm:px-6 py-3 gap-4">
                <div className="text-[15px] sm:text-[16px] text-[#666]">
                  Applied On Date & Time:{" "}
                  <span className="font-semibold">{dateTime}</span>
                </div>
                <div className="text-[15px] sm:text-[16px] text-[#666]">
                  Next Step: <span className="font-semibold">{nextStep}</span>
                </div>
                <div className="text-[15px] sm:text-[16px] text-[#666]">
                  Current Status:{" "}
                  <span className="font-semibold">{currentStatus}</span>
                </div>
              </div>
            </div>

            {/* Latest Update */}
            {latestUpdate ? (
              <div className="mt-5">
                <div className="font-['Source_Sans_Pro'] font-semibold text-[16px] text-[#1C1C1C]">
                  Latest Update
                </div>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#666]">
                  {latestUpdate}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Demo data — replace with backend response */
const DEFAULT_APPLICATIONS = [
  {
    id: 101,
    role: "Senior Java Developer",
    dateTime: "2025-08-20 | 12:30 PM",
    currentStatus: "Under Review",
    nextStep: "Awaiting Coding Test invitation",
    company: "Akash",
    location: "Gurugram, Haryana",
    overallStatus: "Completed",
    latestUpdate:
      "We have reviewed your application for the Senior Java Developer role. Based on your performance in the coding round, you have been shortlisted for an interview. However, as the aptitude test was not cleared, you’ll be eligible to reapply after 6 months.",
  },
  {
    id: 102,
    role: "Frontend Developer (React.js)",
    dateTime: "2025-07-10 | 10:30 PM",
    currentStatus: "Interview Scheduled",
    nextStep: "22 August 2025, 3:00 PM",
    company: "—",
    location: "—",
    overallStatus: "—",
    latestUpdate: "",
  },
  {
    id: 103,
    role: "Aptitude Test – Graduate Trainee",
    dateTime: "2025-03-15 | 11:30 PM",
    currentStatus: "Not Shortlisted",
    nextStep: "Eligible to re-apply after 15 September 2025",
    company: "—",
    location: "—",
    overallStatus: "—",
    latestUpdate: "",
  },
];
