// src/components/WhyChooseUs.js
import React from "react";

const WhyChooseUs = () => {
  const points = [
    {
      icon: "/A/1.svg",
      text: "We focus on what you can do, not just what’s on your resume.",
    },
    {
      icon: "/A/2.svg",
      text: "Your test results make you stand out and build instant credibility.",
    },
    {
      icon: "/A/3.svg",
      text: "AI-driven recommendations ensure you’re only connected with roles that fit your skills and goals.",
    },
    {
      icon: "/A/4.svg",
      text: "From your first test to your dream role — we’re here for the long run.",
    },
    {
      icon: "/A/5.svg",
      text: "No confusion, no hidden barriers — just a clear path from assessment to opportunity.",
    },
  ];

  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 sm:gap-5 max-w-[1040px] text-center">
        <p className="uppercase text-[#1F712F] font-semibold text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px]">
          WHY CHOOSE US?
        </p>
        <h2 className="text-[#1C1C1C] font-semibold text-[24px] sm:text-[28px] leading-[32px] sm:leading-[36px]">
          Your Potential, Our Platform — A Perfect Match
        </h2>
        <p className="text-[#333333] font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[26px] max-w-[880px]">
          We’re not just another job platform — we’re your career partner. Our
          mission is to simplify your journey, showcase your true potential, and
          connect you with the right opportunities faster than ever.
        </p>
      </div>

      {/* BG image + icons */}
      <div className="relative w-full max-w-[1200px] mx-auto mt-10 sm:mt-12">
        {/* BG line image (visible only on large screens) */}
        <img
          src="/A/6.jpg"
          alt="arrows-line"
          className="hidden lg:block mx-auto w-[90%] max-w-[1000px] h-auto object-contain"
        />

        {/* Icons */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-8 sm:gap-y-10 gap-x-6 sm:gap-x-10 mt-8 lg:mt-[-40px]">
          {points.map((point, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-[56px] sm:w-[64px] h-[56px] sm:h-[64px] rounded-full bg-[#1F712F]/15 flex items-center justify-center mb-3">
                <img
                  src={point.icon}
                  alt={`icon-${i}`}
                  className="w-[24px] sm:w-[28px] h-[24px] sm:h-[28px]"
                />
              </div>
              <p className="text-[#333333] text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] max-w-[200px]">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
