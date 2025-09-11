// src/components/ProfileSetting/AccountPage/ExamHistory/ExamHistory.js
import { useNavigate } from "react-router-dom";

export default function ExamHistoryEmpty() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 pt-5 md:pt-6 pb-5 md:pb-6">
        {/* Card */}
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
                  Exam Track & Results
                </h1>
                <p className="mt-2 font-['Source_Sans_Pro'] text-[#666666] text-[clamp(13px,1.5vw,18px)] leading-[1.5]">
                  Track all the exams you’ve attempted, along with their status,
                  scores, and details. Review your performance and stay prepared
                  for upcoming opportunities.
                </p>
              </div>
            </div>

            {/* Center content */}
            <div className="px-4 md:px-6 py-6 md:py-8">
              <div className="w-full max-w-[520px] mx-auto flex flex-col items-center gap-4">
                {/* Illustration */}
                <div className="w-[160px] sm:w-[190px] md:w-[220px]">
                  <img
                    src="/candidate-career/objects.svg"
                    alt="No Exam History Illustration"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Headline */}
                <div className="font-['Source_Sans_Pro'] font-bold text-[#1C1C1C] text-[clamp(16px,2vw,22px)]">
                  No Exam History Yet
                </div>

                {/* Description */}
                <p className="font-['Source_Sans_Pro'] text-[#666666] text-[clamp(13px,1.5vw,17px)] leading-[1.55] text-center">
                  Looks like you haven’t attempted any exams yet. Once you
                  complete an exam, your results will be available here.
                </p>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => navigate("/account/exam-results")}
                  className="mt-2 w-[160px] sm:w-[180px] h-[42px] sm:h-[48px] border-2 border-[#1F712F] rounded-[8px] flex items-center justify-center hover:opacity-90">
                  <span className="font-['Source_Sans_Pro'] font-bold text-[15px] sm:text-[16px] text-[#1F712F]">
                    Explore Career Section
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
