import { useParams } from "react-router-dom";

export default function ExamDetails({ exam = SAMPLE_EXAM }) {
  const { userId, id } = useParams();

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-5 md:pt-6 pb-5 md:pb-6">
        <div className="w-full bg-white border-2 border-[#E9E9E9] rounded-[12px] shadow-sm">
          {/* Header */}
          <div className="px-4 md:px-6 pt-5 md:pt-6 pb-4">
            <button
              type="button"
              className="inline-flex items-center gap-[6px]"
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

            <h1 className="mt-3 md:mt-4 font-['Source_Sans_Pro'] text-[#1C1C1C] font-semibold text-[clamp(22px,2.5vw,34px)]">
              Exam Track & Results {userId ? `· User #${userId}` : ""}{" "}
              {id ? `· Exam #${id}` : ""}
            </h1>
            <p className="mt-2 text-[#666] text-[clamp(13px,1.5vw,18px)]">
              Detailed view of your exam attempt, score and feedback.
            </p>
          </div>

          {/* One exam block */}
          <div className="px-4 md:px-6 pb-6 md:pb-8">
            <div className="flex items-center justify-between">
              <div className="font-['Source_Sans_Pro'] font-semibold text-[18px] md:text-[20px] text-[#1C1C1C]">
                {exam.title}
              </div>

              {/* View Details with FILLED triangle (same icon) */}
              <button className="inline-flex items-center gap-1 text-[#666] hover:opacity-80">
                <span>View Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current text-[#666]"
                  viewBox="0 0 20 20">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
                </svg>
              </button>
            </div>

            <div className="mt-3 rounded-[10px] overflow-hidden border border-[#E9E9E9]">
              <div className="bg-[#F2FAF4] px-4 md:px-6 py-3 text-[14px]">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  <Info label="Exam Type" value={exam.type} />
                  <Info label="Attempt" value={exam.attempt} />
                  <Info label="Duration" value={exam.duration} />
                  <Info label="Due Date" value={exam.dueDate} />
                  <Info
                    label="Status"
                    value={
                      <span className="text-[#1F712F]">{exam.status}</span>
                    }
                  />
                  <Info
                    label="Result"
                    value={
                      <span
                        className={
                          exam.resultOk ? "text-[#1F712F]" : "text-[#E02121]"
                        }>
                        {exam.resultText}
                      </span>
                    }
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-3">
                  <Info
                    label="Attempted Date & Time"
                    value={exam.attemptedAt}
                    wide
                  />
                  <Info label="Question" value={exam.questions} />
                  <Info label="Total Marks" value={exam.totalMarks} />
                  <Info label="Score" value={exam.score ?? "N/A"} />
                </div>
              </div>

              <div className="px-4 md:px-6 py-4">
                <div className="font-semibold text-[#1C1C1C] mb-1">
                  Feedback
                </div>
                <div className="text-[#666] leading-relaxed text-[15px] space-y-1">
                  {exam.feedback.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* /block */}
        </div>
      </div>
    </div>
  );
}

function Info({ label, value, wide = false }) {
  return (
    <div className={wide ? "col-span-2" : ""}>
      <div className="text-[#666] text-[13px]">{label}</div>
      <div className="text-[#1C1C1C] text-[14px] font-medium">{value}</div>
    </div>
  );
}

const SAMPLE_EXAM = {
  id: 1,
  title: "Senior Java Developer",
  type: "Coding Round",
  attempt: "1/1",
  duration: "90 Mins",
  dueDate: "2025-08-22",
  status: "Completed",
  attemptedAt: "2025-08-20 | 12:30 PM",
  questions: "3",
  totalMarks: "30",
  score: "30",
  resultText: "N/A",
  resultOk: true,
  feedback: [
    "You have successfully cleared the coding test with a good performance.",
    "Next step will be your interview. We will share the link soon.",
    "Best of luck for the upcoming round!",
  ],
};
