const Pill = ({ children, className = "" }) => (
  <div
    className={[
      "px-3.5 py-2 rounded-full bg-[#E2EDE4] text-[#333333] shadow-sm",
      "text-xs sm:text-sm font-semibold",
      "whitespace-nowrap",
      className,
    ].join(" ")}
  >
    {children}
  </div>
)

export default function AssessmentsArcSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[#1F712F] font-semibold text-2xl sm:text-3xl">Because Talent Deserves More</h2>

        {/* Mobile fallback: pills in a compact grid for readability */}
        <div className="mt-6 grid grid-cols-2 gap-3 max-w-md mx-auto sm:hidden">
          <Pill>Aptitude &amp; Logical Reasoning</Pill>
          <Pill>Technical MCQs</Pill>
          <Pill>Coding Challenges</Pill>
          <Pill>Interviews</Pill>
          <Pill>Analytical &amp; Critical Thinking</Pill>
          <Pill>Communication &amp; Soft Skills</Pill>
          <div className="col-span-2 flex justify-center">
            <Pill>Problem-Solving Case Studies</Pill>
          </div>
        </div>

        {/* Arcs + positioned pills (sm and up) */}
        <div className="relative mx-auto mt-6 sm:mt-8 hidden sm:block max-w-[720px]">
          {/* Responsive SVG arcs (upper halves of circles) */}
          <svg viewBox="0 0 800 400" className="w-full h-auto text-[#E7ECE8]" aria-hidden="true">
            <defs>
              <clipPath id="half">
                <rect x="0" y="0" width="800" height="360" />
              </clipPath>
            </defs>
            <g clipPath="url(#half)" stroke="currentColor" fill="none" strokeWidth="3">
              <circle cx="400" cy="380" r="360" />
              <circle cx="400" cy="380" r="300" />
              <circle cx="400" cy="380" r="240" />
              {/* <circle cx="400" cy="380" r="180" /> */}
              <circle cx="400" cy="380" r="175" />
            </g>
          </svg>

          {/* Compact pill placements with subtle rotations */}
          <Pill className="absolute left-1/2 -translate-x-1/2 top-[12px]">Aptitude &amp; Logical Reasoning</Pill>
          <Pill className="absolute left-[10%] top-[78px] -rotate-[10deg]">Coding Challenges</Pill>
          <Pill className="absolute right-[10%] top-[78px] rotate-[12deg]">Technical MCQs</Pill>
          {/* interviews to second arc from top */}
          <Pill className="absolute left-1/2 -translate-x-1/2 top-[108px]">Interviews</Pill>
          <Pill className="absolute left-[6%] top-[200px] -rotate-[8deg]">Analytical &amp; Critical Thinking</Pill>
          <Pill className="absolute right-[6%] top-[200px] rotate-[8deg]">Communication &amp; Soft Skills</Pill>
          {/* inside the inner-most arc */}
          <Pill className="absolute left-1/2 -translate-x-1/2 top-[220px]">Problem-Solving Case Studies</Pill>
        </div>

        <div className="mx-auto -mt-14 sm:-mt-16 max-w-[720px] relative z-[1]">
          <div className="w-full rounded-xl border border-[#E9E9E9] bg-[#E2EDE4] px-4 py-3 sm:py-4">
            <p className="text-center italic text-[#333333] text-sm sm:text-base">
              Multiple tests. One platform. Endless opportunities to prove your talent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
