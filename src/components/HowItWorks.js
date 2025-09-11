
const HowItWorks = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#0b0b2a] to-[#1a1a50] overflow-hidden px-4 py-10">
      {/* Background Ellipses */}
      <div className="absolute w-[400px] h-[300px] left-[-150px] top-[-100px] bg-[#6E32E3] blur-[200px]" />
      <div className="absolute w-[350px] h-[250px] right-[-100px] top-0 bg-[#6E32E3] blur-[200px]" />
      <div className="absolute w-[500px] h-[250px] left-[-200px] bottom-[100px] bg-[#0070E0] blur-[200px]" />
      <div className="absolute w-[250px] h-[250px] right-[-50px] bottom-[100px] bg-[#0070E0] blur-[200px]" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Timeline */}
        <div className="relative flex-1">
          {/* Zig-Zag Timeline Path */}
          <svg
            className="absolute left-6 top-0 h-full w-[320px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0 V200 H280 V400 H20 V600 H280 V800 H20 V1000"
              stroke="white"
              strokeWidth="6"
              strokeDasharray="16 16"
            />
          </svg>
          {/* Step 1 */}
          <div className="relative flex items-center gap-4 pb-24">
            {/* Icon inside the timeline center */}
            <div className="absolute left-[20px] top-1/3 -translate-y-1/2 flex items-center justify-center">
              <img src="/howitworks/1.svg" alt="Step 1" className="w-12 h-12" />
            </div>

            {/* Text Content just right of icon */}
            <div className="ml-20 mt-8">
              <h3 className="text-base md:text-lg font-semibold text-[#0070E0]">
                Create Profile
              </h3>
              <p className="text-xs md:text-sm text-white leading-relaxed max-w-md mt-1">
                Start by creating your profile in minutes <br /> -highlight your
                skills, <br />
                experience, and career goals.
              </p>
            </div>
          </div>
          {/* Step 2 - Validate Skills */}
          <div className="relative flex items-start gap-4 pb-24">
            {/* Icon exactly on line center */}
            <div className="absolute left-[250px] top-1/4 flex items-center justify-center">
              <img
                src="/howitworks/2.svg"
                alt="Step 2"
                className="w-12 h-12 translate-x-[70%]" // shifts icon horizontally so center aligns
              />
            </div>

            {/* Text Content just next to icon */}
            <div className="ml-[350px] mt-8 ">
              <h3 className="text-base md:text-lg font-semibold text-[#0070E0]">
                Validate Skills
              </h3>
              <p className="text-xs md:text-sm text-white leading-relaxed max-w-md mt-1">
                Validate your expertise with easy, <br />
                role-based tests recruiters trust.
              </p>
            </div>
          </div>

          {/* Step 3 - Get Matched */}
          <div className="relative flex items-start pb-24">
            {/* Icon exactly on 5th zig-zag line center */}
            <div className="absolute left-[25px] top-1/3 -translate-y-1/2 flex items-center justify-center">
              <img
                src="/howitworks/3.svg"
                alt="Step 3"
                className="w-12 h-12 translate-x-[0%]"
              />
            </div>

            {/* Text Content just right of icon */}
            <div className="ml-[90px] mr-10 mt-10">
              <h3 className="text-base md:text-lg font-semibold text-[#0070E0]">
                Get Matched
              </h3>
              <p className="text-xs md:text-sm text-white leading-relaxed max-w-md mt-1">
                Our smart system connects you with <br /> jobs and recruiters
                looking for <br />
                candidates with your exact skills.
              </p>
            </div>
          </div>
          {/* Step 4 - Apply & Grow */}
          <div className="relative flex items-start pb-24">
            {/* Icon exactly on zig-zag line center (LEFT side line) */}
            <div className="absolute left-[250px] top-1/4 -translate-y-1/2 flex items-center justify-center">
              <img
                src="/howitworks/4.svg"
                alt="Step 4"
                className="w-12 h-12 translate-x-[70%]"
              />
            </div>

            {/* Text Content just right of icon */}
            <div className="ml-[350px] mt-5">
              <h3 className="text-base md:text-lg font-semibold text-[#0070E0]">
                Apply & Grow
              </h3>
              <p className="text-xs md:text-sm text-white leading-relaxed max-w-md mt-1">
                Apply confidently, get noticed faster, <br />
                and track your progress as you build <br />
                the career you deserve.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Static Intro Content) */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#1F712F]">
            HOW IT WORKS
          </h2>
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            Your Career Journey, Simplified
          </h1>
          <p className="text-base md:text-lg text-white">
            Finding the right job shouldn’t feel overwhelming. That’s why we’ve
            built a platform that makes it easy for you to showcase your skills,
            prove your talent, and connect with opportunities that truly fit
            you. Every step is designed to guide you closer to your dream role —
            simple, transparent, and effective.
          </p>
          <ul className="list-disc list-inside text-white space-y-3 text-base md:text-lg">
            <li>
              Start by creating your profile in minutes — highlight your skills,
              experience, and career goals.
            </li>
            <li>
              Validate your expertise with easy, role-based tests that
              recruiters trust. No stress, just an honest reflection of your
              strengths.
            </li>
            <li>
              Our smart system connects you with jobs and recruiters looking for
              candidates with exactly your skills.
            </li>
            <li>
              Apply confidently, get noticed faster, and keep tracking your
              progress as you build the career you deserve.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;  