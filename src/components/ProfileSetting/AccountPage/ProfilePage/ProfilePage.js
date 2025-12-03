// src/components/ProfileSetting/AccountPage/ProfilePage/ProfilePage.jsx
import { useMemo, useState } from "react";
import AboutMe from "./AboutMe";
import EducationalDetails from "./EducationalDetails";
import PersonalDetails from "./PersonalDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import TechnicalSkills from "./TechnicalSkills";
import UpdateResume from "./UpdateResume";

const cls = (...a) => a.filter(Boolean).join(" ");

const TabBtn = ({ active, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={cls(
      "h-[40px] sm:h-[42px] md:h-[50px] rounded-[8px] font-medium",
      "px-3 sm:px-4 md:px-6 text-[13px] sm:text-[14px] md:text-[16px] transition whitespace-nowrap w-full",
      active
        ? [
            "bg-[#1F712F] text-white shadow-md ring-1 ring-black/5",
            "-my-1 md:-my-2",
            "pr-8 sm:pr-10 md:pr-16 lg:pr-20",
          ].join(" ")
        : "bg-transparent text-gray-600 hover:text-black"
    )}>
    {children}
  </button>
);

const AvatarProgress = ({ progress = 80 }) => {
  const radius = 120;
  const stroke = 12;
  const r = radius - stroke / 2;
  const C = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, progress));
  const offset = C - (clamped / 100) * C;

  return (
    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[260px] lg:h-[260px] mx-auto lg:mx-0 lg:ml-20">
      <svg
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        className="absolute inset-0 rotate-[-90deg]"
        width="100%"
        height="100%">
        <circle
          cx={radius}
          cy={radius}
          r={r}
          stroke="#E5E7EB"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={radius}
          cy={radius}
          r={r}
          stroke="#2F8C42"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={offset}
          fill="none"
          className="transition-[stroke-dashoffset] duration-500 ease-out"
        />
      </svg>

      <img
        alt="profile"
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
        className="w-full h-full rounded-full object-cover"
      />

      <button
        type="button"
        title="Change photo"
        className="absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-3 md:bottom-4 w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full bg-[#1C1C1C]/80 grid place-items-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7h3l1.5-2H15l1.5 2H20v12H4V7Z"
            stroke="#fff"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="13" r="4" stroke="#fff" strokeWidth="1.5" />
        </svg>
      </button>

      <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 bg-[#2F8C42] text-white text-[10px] sm:text-[11px] md:text-[12px] font-bold rounded-full px-[8px] sm:px-[10px] py-[5px] sm:py-[6px] shadow-sm">
        {clamped}%
      </span>
    </div>
  );
};

const AlmostBanner = () => (
  <div className="mt-4 sm:mt-6 w-full max-w-[420px] rounded-[12px] border border-[#F87171] bg-white px-3 sm:px-4 py-3 text-center shadow-sm mx-auto lg:mx-0 lg:ml-5">
    <p className="text-[13px] sm:text-[14px] leading-[18px] text-[#B91C1C] font-semibold">
      **Almost there!**
    </p>
    <p className="mt-1 text-[12px] sm:text-[13px] leading-[18px] text-[#4B5563]">
      Just a few more details and your profile will be <b>100%</b> complete.
      Don’t miss out on <b>great opportunities</b>.
    </p>
  </div>
);

export default function ProfilePage({ initialTab = "About Me" }) {
  const tabs = useMemo(
    () => [
      "About Me",
      "Personal Details",
      "Professional Details",
      "Educational Details",
      "Technical Skills",
      "Update Resume",
    ],
    []
  );
  const [active, setActive] = useState(
    tabs.includes(initialTab) ? initialTab : tabs[0]
  );

  return (
    <div className="min-h-screen w-full bg-gray-100 overflow-x-hidden">
      {/* Outer container */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-5 md:px-6 pt-4 sm:pt-5 md:pt-6 pb-5 md:pb-6 ml-0 md:ml-10">
        <div className="w-full bg-white border-2 border-[#E9E9E9] rounded-[12px] shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-5 sm:px-6 md:px-8 pt-5 md:pt-6 pb-4 sm:pb-5">
            {/* Back Button with back.svg */}
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-[6px] h-[21px] w-fit hover:opacity-80 ml-0 ">
              <img
                src="/back.svg" // place back.svg at public/icons/back.svg
                alt="Back"
                className="w-4 h-4"
              />
              <span className="font-semibold text-[15px] md:text-[16px] text-[#666]">
                Back
              </span>
            </button>

            <div className="mt-3 sm:mt-4">
              <h1 className="font-semibold text-[#1C1C1C] leading-tight text-[clamp(22px,3.4vw,40px)] ml-0 ">
                Your Professional Identity
              </h1>
              <p className="mt-2 text-[#666] text-[clamp(13px,1.5vw,18px)] leading-[1.6] max-w-[980px] ml-0 ">
                Manage your personal details, track your career milestones, and
                keep your profile updated for the next opportunity.
              </p>
            </div>

            {/* Tabs */}
            <div className="mt-4 sm:mt-5">
              {/* Mobile/Tablet */}
              <div className="md:hidden">
                <div className="flex flex-wrap -mx-1">
                  {tabs.map((t) => (
                    <div key={t} className="w-1/2 sm:w-1/3 px-1 mb-2">
                      <TabBtn
                        active={active === t}
                        onClick={() => setActive(t)}>
                        {t}
                      </TabBtn>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden md:block mx-auto">
                <div className="w-full max-w-[95vw] md:max-w-[1100px] xl:max-w-[1280px] 2xl:max-w-[1398px] mx-auto bg-gray-100 rounded-md py-2">
                  <div className="flex flex-nowrap items-center md:gap-6 lg:gap-0 md:justify-start lg:justify-between px-2 md:px-4 md:overflow-x-auto no-scrollbar">
                    {tabs.map((t) => (
                      <div key={t} className="shrink-0">
                        <TabBtn
                          active={active === t}
                          onClick={() => setActive(t)}>
                          {t}
                        </TabBtn>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-3 sm:px-4 md:px-6 py-5 md:py-8">
            <div className="mx-auto w-full xl:max-w-[1440px] lg:grid lg:grid-cols-[45%_55%] lg:gap-[32px] xl:gap-[40px] lg:items-start">
              {/* LEFT */}
              <div className="self-start flex flex-col items-center lg:items-start">
                <div className="w-full max-w-[600px] md:max-w-[700px] px-0 sm:px-1">
                  <AvatarProgress progress={80} />
                  <AlmostBanner />
                </div>
              </div>

              {/* RIGHT */}
              <div className="self-start w-full lg:pr-4 xl:pr-6 mt-6 lg:mt-0">
                <div className="w-full max-w-[720px] md:max-w-[820px] ml-auto pr-0 sm:pr-2 md:pr-6 lg:pr-8 xl:pr-9">
                  <div className="mt-0">
                    {active === "About Me" && <AboutMe />}
                    {active === "Personal Details" && <PersonalDetails />}
                    {active === "Professional Details" && (
                      <ProfessionalDetails />
                    )}
                    {active === "Educational Details" && <EducationalDetails />}
                    {active === "Technical Skills" && <TechnicalSkills />}
                    {active === "Update Resume" && <UpdateResume />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Body */}
        </div>
      </div>
    </div>
  );
}
