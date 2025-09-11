  import { useNavigate, useParams } from "react-router-dom";

  export default function ExamTrackResults({ exams = DEFAULT_EXAMS }) {
    const { userId } = useParams(); // optional multi-user route support
    const navigate = useNavigate();

    const goDetails = (id) => {
      if (userId) navigate(`/user/${userId}/exam-details/${id}`);
      else navigate(`/account/exam-details/${id}`);
    };

    return (
      <div className="min-h-screen w-full bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-5 md:pt-6 pb-5 md:pb-6">
          <div className="w-full bg-white border-2 border-[#E9E9E9] rounded-[12px] shadow-sm">
            {/* Header */}
            <div className="px-4 md:px-6 pt-5 md:pt-6 pb-4">
              <button
                type="button"
                className="inline-flex items-center gap-[6px] h-[21px] w-fit"
                onClick={() => window.history.back()}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="#666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-['Roboto'] font-semibold text-[15px] md:text-[16px] text-[#666]">
                  Back
                </span>
              </button>

              <div className="mt-3 md:mt-4 max-w-[980px]">
                <h1 className="font-['Source_Sans_Pro'] text-[#1C1C1C] font-semibold text-[clamp(22px,2.5vw,34px)]">
                  Exam Track & Results {userId ? `· User #${userId}` : ""}
                </h1>
                <p className="mt-2 font-['Source_Sans_Pro'] text-[#666] text-[clamp(13px,1.5vw,18px)] leading-[1.5]">
                  Track all the exams you’ve attempted, along with their status,
                  scores, and details. Review your performance and stay prepared
                  for upcoming opportunities.
                </p>
              </div>
            </div>

            {/* List */}
            <div className="px-4 md:px-6 pb-6 md:pb-8 flex flex-col gap-4">
              {exams.map((e) => (
                <Row key={e.id} {...e} onViewDetails={() => goDetails(e.id)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Row({
    title,
    dateTime,
    duration,
    status,
    resultText,
    resultOk,
    onViewDetails,
  }) {
    return (
      <div className="w-full border border-[#E9E9E9] rounded-[12px]">
        <div className="flex items-center justify-between px-4 md:px-6 py-4">
          {/* Left */}
          <div className="flex-1 min-w-0">
            <div className="font-['Source_Sans_Pro'] font-semibold text-[18px] md:text-[20px] text-[#1C1C1C]">
              {title}
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-4 gap-y-2 sm:gap-y-0 sm:gap-x-6 text-[14px] md:text-[15px]">
              {/* Date */}
              <div className="flex items-center gap-2 text-[#666]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
                <span>{dateTime}</span>
              </div>

              <div className="text-[#666]">
                <span className="font-semibold text-[#1C1C1C]">Duration:</span>{" "}
                {duration}
              </div>

              <div className="text-[#666]">
                <span className="font-semibold text-[#1C1C1C]">Status:</span>{" "}
                <span className="text-[#1F712F]">{status}</span>
              </div>

              <div className="text-[#666]">
                <span className="font-semibold text-[#1C1C1C]">Result:</span>{" "}
                <span className={resultOk ? "text-[#1F712F]" : "text-[#E02121]"}>
                  {resultText}
                </span>
              </div>
            </div>
          </div>

          {/* Right: View Details with FILLED triangle */}
          <button
            type="button"
            onClick={onViewDetails}
            className="ml-4 shrink-0 inline-flex items-center gap-1 text-[#666] hover:opacity-80">
            <span className="hidden sm:inline-block">View Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current text-[#666]"
              viewBox="0 0 20 20">
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  /* demo data (remove when backend connects) */
  const DEFAULT_EXAMS = [
    {
      id: 1,
      title: "Senior Java Developer",
      dateTime: "2025-08-20 | 12:30 PM",
      duration: "90 Mins",
      status: "Completed",
      resultText: "82% (Passed)",
      resultOk: true,
    },
    {
      id: 2,
      title: "Senior iOS Developer",
      dateTime: "2025-08-25 | 12:30 PM",
      duration: "90 Mins",
      status: "Completed",
      resultText: "N/A",
      resultOk: true,
    },
    {
      id: 3,
      title: "Aptitude Test (First Round)",
      dateTime: "2024-08-05 | 10:30 AM",
      duration: "60 Mins",
      status: "Completed",
      resultText: "32% (Failed)",
      resultOk: false,
    },
  ];
