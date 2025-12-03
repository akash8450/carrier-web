import { useNavigate } from "react-router-dom";

/* Solid-green icon using CSS mask */
function GreenIcon({ src, alt }) {
  return (
    <span
      aria-label={alt}
      className="inline-block w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]"
      style={{
        backgroundColor: "#1F712F",
        WebkitMask: `url(${src}) center / contain no-repeat`,
        mask: `url(${src}) center / contain no-repeat`,
      }}
    />
  );
}

export default function ProfileSection({
  user = {
    name: "Abhishek Singh",
    role: "Senior Java developer",
  },
}) {
  const navigate = useNavigate();

  const WRAP = "mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 xl:px-16";

  const menuItems = [
    {
      id: "Profile Info",
      icon: "/ProfileIcon/1.svg",
      path: "/profileinfo/profilepage",
    },
    {
      id: "Application History",
      icon: "/ProfileIcon/2.svg",
      path: "/account/application-history",
    },
    {
      id: "Exam History",
      icon: "/ProfileIcon/3.svg",
      path: "/account/exam-results",
    },
    {
      id: "Notifications",
      icon: "/ProfileIcon/4.svg",
      path: "/notificationspage",
    },
    {
      id: "Security Settings",
      icon: "/ProfileIcon/5.svg",
      path: "/securitypage",
    },
    {
      id: "Legal & Compliance",
      icon: "/ProfileIcon/6.svg",
      path: "/policiepage",
    },
  ];

  return (
    <main className="w-full">
      {/* ========== HERO ========== */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #DFF5E0 0%, #FFFFFF 100%)",
        }}>
        <div className={WRAP}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 pt-10 md:pt-16 pb-10">
            {/* Left Text */}
            <div className="flex flex-col gap-5">
              <h1 className="font-['Source_Sans_Pro'] font-semibold text-[#1C1C1C] leading-tight text-[clamp(28px,6vw,56px)]">
                Your Account,
                <br /> Your Space
              </h1>
              <p className="font-['Source_Sans_Pro'] text-[#1F712F] text-[clamp(14px,2.4vw,20px)] leading-relaxed max-w-[46ch]">
                From personal details to exam history, everything you need to
                stay on track is right here.
              </p>
            </div>

            {/* Right Avatar with Overlay Chips */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative">
                {/* Avatar */}
                <img
                  src="/Star 1.jpg"
                  alt="Profile"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/340x340.png?text=Star";
                  }}
                  className="
                    object-cover rounded-full shadow
                    w-[160px] h-[160px]
                    sm:w-[200px] sm:h-[200px]
                    md:w-[260px] md:h-[260px]
                    lg:w-[300px] lg:h-[300px]
                    xl:w-[340px] xl:h-[340px]"
                />

                {/* Name chip */}
                <div className="absolute right-[-18%] top-[28%] hidden md:flex">
                  <div className="inline-flex items-center justify-center min-w-[150px] h-[42px] px-5 bg-white rounded-full shadow font-['Source_Sans_Pro'] italic font-semibold text-[#1F712F] text-[15px]">
                    {user.name}
                  </div>
                </div>

                {/* Role chip */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 hidden md:flex">
                  <div className="inline-flex items-center gap-2 min-w-[210px] h-[44px] px-5 bg-white rounded-full shadow">
                    <span className="inline-block w-5 h-5 rounded-full border border-[#1F712F]" />
                    <span className="font-['Source_Sans_Pro'] italic font-semibold text-[#1F712F] text-[15px]">
                      {user.role}
                    </span>
                  </div>
                </div>

                {/* Mobile Chips */}
                <div className="md:hidden mt-3 flex flex-col items-center gap-2">
                  <div className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full shadow text-[#1F712F] font-['Source_Sans_Pro'] italic font-semibold text-[13px]">
                    {user.name}
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow">
                    <span className="inline-block w-4 h-4 rounded-full border border-[#1F712F]" />
                    <span className="text-[#1F712F] font-['Source_Sans_Pro'] italic font-semibold text-[13px]">
                      {user.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MENU ========== */}
      <section className={WRAP + " py-6 md:py-10"}>
        <ul className="w-full">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => navigate(item.path)}
              className="flex items-center justify-between gap-5 border-b border-[#E9E9E9] cursor-pointer py-3 sm:py-4 h-[60px] sm:h-[66px] select-none hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4 sm:gap-5">
                <GreenIcon src={item.icon} alt={item.id} />
                <span className="font-['Source_Sans_Pro'] text-[#1C1C1C] font-semibold text-[18px] sm:text-[20px] leading-[1.2]">
                  {item.id}
                </span>
              </div>

              <svg
                className="w-3 sm:w-[12px] h-5 sm:h-[24px] text-[#666666]"
                viewBox="0 0 12 24"
                fill="none">
                <path
                  d="M3 18L9 12L3 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
