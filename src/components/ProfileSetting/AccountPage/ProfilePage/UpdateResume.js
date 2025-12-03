// src/components/ProfileSetting/AccountPage/ProfilePage/UpdateResume.jsx
import React, { useRef, useState } from "react";

export default function UpdateResume() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);

  const onDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) setFile(f);
  };

  return (
    <div className="w-full">
      {/* Heading with edit button */}
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] md:text-[24px] font-semibold text-[#1C1C1C]">
          Update Resume
        </h2>
        <button
          type="button"
          className="w-9 h-9 rounded-[8px] border border-[#E9E9E9] grid place-items-center hover:bg-gray-50">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Z"
              stroke="#666"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      {/* Upload box */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="mt-4 rounded-[12px] border border-[#E9E9E9] bg-white">
        <div className="px-4 md:px-6 py-6 text-center">
          {/* Simple upload icon */}
          <img
            src="/upload.svg"
            alt="Upload Icon"
            className="mx-auto w-12 h-12"
          />

          <div className="mt-3 text-[#1C1C1C] font-semibold">
            Drag your file(s) to start uploading
          </div>
          <div className="mt-2 text-[#666] text-[14px]">
            PDF or DOC • up to 5 MB
          </div>

          <div className="mt-5">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="h-[42px] px-5 rounded-[10px] bg-[#1F712F] text-white font-semibold">
              {file ? "Replace Resume" : "Browse Files"}
            </button>
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              hidden
            />
          </div>

          {file && (
            <div className="mt-4 text-[14px]">
              Selected: <b>{file.name}</b>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
