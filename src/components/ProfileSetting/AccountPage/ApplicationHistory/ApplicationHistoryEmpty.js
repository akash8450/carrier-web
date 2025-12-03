// src/components/ProfileSetting/AccountPage/ApplicationHistory/ApplicationHistoryEmpty.js
import { useNavigate } from "react-router-dom";

export default function ApplicationHistoryEmpty() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 pt-5 md:pt-6 pb-5 md:pb-6">
        <div className="w-full bg-white border-2 border-[#E9E9E9] rounded-[12px] shadow-sm">
          <div className="flex flex-col">
            {/* Header */}
            <div className="px-4 md:px-6 pt-5 md:pt-6 pb-2">
              <button
                type="button"
                className="inline-flex items-center gap-[6px] h-[21px] w-fit"
                onClick={() => window.history.back()}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-['Roboto'] font-semibold text-[15px] md:text-[16px] text-[#666666]">
                  Back
                </span>
              </button>

              <div className="mt-3 md:mt-4 max-w-[980px]">
                <h1 className="font-['Source_Sans_Pro'] text-[#1C1C1C] font-semibold text-[clamp(22px,2.5vw,34px)]">
                  My Application History
                </h1>
                <p className="mt-2 font-['Source_Sans_Pro'] text-[#666666] text-[clamp(13px,1.5vw,18px)] leading-[1.5]">
                  Track all your past and ongoing job applications in one place.
                  Stay updated with the status of each application and never
                  miss the next step in your hiring journey.
                </p>
              </div>
            </div>

            {/* Center content */}
            <div className="px-4 md:px-6 py-6 md:py-8">
              <div className="w-full max-w-[520px] mx-auto flex flex-col items-center gap-4">
                <div className="w-[160px] sm:w-[190px] md:w-[220px]">
                  <img
                    src="/objects.svg"
                    alt="No Applications"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="font-['Source_Sans_Pro'] font-bold text-[#1C1C1C] text-[clamp(16px,2vw,22px)]">
                  No Applications Yet
                </div>

                <p className="font-['Source_Sans_Pro'] text-[#666666] text-[clamp(13px,1.5vw,17px)] leading-[1.55] text-center">
                  Once you apply for a role, your application details and status
                  will appear here.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/career")}
                  className="mt-2 w-[170px] sm:w-[190px] h-[42px] sm:h-[48px] border-2 border-[#1F712F] rounded-[8px] flex items-center justify-center hover:opacity-90">
                  <span className="font-['Source_Sans_Pro'] font-bold text-[15px] sm:text-[16px] text-[#1F712F]">
                    Explore Jobs
                  </span>
                </button>
              </div>
            </div>
            {/* /Center */}
          </div>
        </div>
      </div>
    </div>
  );
}
