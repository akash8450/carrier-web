import React, { useEffect, useState } from "react";

const Pencil = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    className="text-[#666]">
    <path
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M14.06 6.19l3.75 3.75L20.5 7.25a1.5 1.5 0 0 0 0-2.12l-1.63-1.63a1.5 1.5 0 0 0-2.12 0l-2.69 2.69Z"
      fill="currentColor"
    />
  </svg>
);

export default function AboutMe({ initial = "" }) {
  const [open, setOpen] = useState(false);
  const [about, setAbout] = useState(
    initial ||
      "I’m a passionate Java developer with over 6 years of experience building scalable backend systems using Spring Boot and Microservices architecture. I enjoy working in agile teams and have a strong interest in system design and cloud deployment on AWS. I’m always eager to learn new technologies and contribute to building efficient, reliable software solutions. Outside of coding, I enjoy mentoring juniors, reading tech blogs, and contributing to open-source projects."
  );

  // Lock page scroll when modal is open
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // Close on Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 className="font-['Source_Sans_Pro'] text-[#1C1C1C] font-semibold text-[22px] leading-[28px] xl:text-[24px] xl:leading-[30px]">
          About Me
        </h2>
        <button
          type="button"
          onClick={() => setOpen(true)}
          title="Edit"
          className="w-[32px] h-[32px] grid place-items-center rounded-[8px] border border-[#E9E9E9] hover:bg-gray-50">
          <Pencil />
        </button>
      </div>

      {/* SAME TO SAME BOX */}
      <div className="mt-4">
        <div className="w-full max-w-[796px] bg-[rgba(202,202,202,0.06)] border-[2px] border-[#E6E6E6] rounded-[12px] shadow-sm">
          <div className="px-[20px] py-[20px]">
            <p className="font-['Source_Sans_Pro'] text-[#666] text-[16px] leading-[1.7] xl:text-[18px] xl:leading-[23px]">
              {about}
            </p>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center">
          {/* Backdrop */}
          <button
            aria-label="Close edit"
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          {/* Dialog */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-title"
            className="relative w-[94vw] max-w-[760px] bg-white rounded-[12px] shadow-xl">
            <div className="px-5 py-4 border-b border-[#E9E9E9]">
              <div id="about-title" className="text-[20px] font-semibold">
                About Me
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-3 text-[#666]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-[2px]">
                  <path
                    d="M12 2 2 7l10 5 10-5-10-5Zm0 20V12"
                    stroke="#1F712F"
                    strokeWidth="1.5"
                  />
                </svg>
                <div>
                  <div className="font-semibold text-[#1C1C1C]">
                    Stand out from the crowd!
                  </div>
                  Write about your strengths, goals, and vision.
                </div>
              </div>

              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                name="about"
                rows={7}
                className="mt-4 w-full resize-y border border-[#E9E9E9] rounded-[12px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1F712F33]"
                placeholder="Tell us about yourself"
              />

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-[42px] px-6 rounded-[10px] bg-[#1F712F] text-white font-semibold hover:bg-[#186026] transition">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
