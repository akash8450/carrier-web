// src/components/Settings/SecurityPage.jsx
import React, { useMemo, useState, useCallback } from "react";

export default function SecurityPage() {
  // Change Password
  const [openPwd, setOpenPwd] = useState(true);
  const [showPwd, setShowPwd] = useState({ cur: false, new: false, con: false });
  const [pwd, setPwd] = useState({ cur: "", n: "", c: "" });
  const lastChange = "21 August 2025";

  // 2FA
  const [open2FA, setOpen2FA] = useState(false);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [method, setMethod] = useState("phone");
  const [phone, setPhone] = useState("+91 8975 8453 78");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpFilled = useMemo(() => otp.every((d) => d && d.length === 1), [otp]);

  const onOtpChange = (i, v) => {
    if (!/^\d?$/.test(v)) return;
    const copy = [...otp];
    copy[i] = v;
    setOtp(copy);
    if (v && i < 5) document.getElementById(`otp-${i + 1}`)?.focus();
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Desktop max width; phones/tablets safe side padding */}
      <div className="mx-auto mt-[112px] max-w-[1680px] px-4 sm:px-6 lg:px-10 xl:px-[60px]">
        <div className="bg-white border-2 border-[#E9E9E9] rounded-[12px]">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] pt-6 sm:pt-8 pb-8">
            {/* Back */}
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-1.5 h-[21px] text-[#666] hover:opacity-80"
            >
              <img src="/Back.svg" alt="Back" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
              <span className="font-semibold text-[16px] leading-[20px] sm:text-[18px] sm:leading-[21px]">
                Back
              </span>
            </button>

            {/* Title */}
            <div className="mt-4 sm:mt-5">
              <h1
                className="text-[#1C1C1C] font-semibold
                text-[22px] leading-[30px]
                sm:text-[28px] sm:leading-[36px]
                md:text-[36px] md:leading-[44px]
                lg:text-[48px] lg:leading-[60px]"
              >
                Secure Your Account
              </h1>
              <p
                className="mt-2 max-w-[1056px] text-[#666666]
                text-[14px] leading-[20px]
                sm:text-[15px] sm:leading-[22px]
                md:text-[16px] md:leading-[23px]
                lg:text-[18px] lg:leading-[24px]"
              >
                Your account security is our priority. Manage your password and enable additional
                layers of protection to keep your profile safe.
              </p>
            </div>

            {/* Accordions */}
            <div className="mt-5 sm:mt-6 flex flex-col gap-3 sm:gap-4">
              {/* Change Password */}
              <Accordion
                icon="/Group.svg"
                title="Change Password"
                rightText={`Last change on ${lastChange}`}
                open={openPwd}
                setOpen={setOpenPwd}
              >
                <p className="text-[#666] text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[23px] mb-4 sm:mb-5">
                  Update your current password to keep your account secure. Regularly changing your
                  password helps prevent potential breaches.
                </p>

                {/* --- Responsive form --- */}
                <div className="max-w-[688px]">
                  {/* Current */}
                  <Field
                    label="Current Password"
                    type={showPwd.cur ? "text" : "password"}
                    value={pwd.cur}
                    onChange={(e) => setPwd({ ...pwd, cur: e.target.value })}
                    onToggle={() => setShowPwd((s) => ({ ...s, cur: !s.cur }))}
                  />

                  {/* New */}
                  <Field
                    label="New Password"
                    type={showPwd.new ? "text" : "password"}
                    value={pwd.n}
                    onChange={(e) => setPwd({ ...pwd, n: e.target.value })}
                    onToggle={() => setShowPwd((s) => ({ ...s, new: !s.new }))}
                    className="mt-4"
                  />

                  {/* Confirm */}
                  <Field
                    label="Confirm New Password"
                    type={showPwd.con ? "text" : "password"}
                    value={pwd.c}
                    onChange={(e) => setPwd({ ...pwd, c: e.target.value })}
                    onToggle={() => setShowPwd((s) => ({ ...s, con: !s.con }))}
                    className="mt-4"
                  />

                  {/* Actions */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <button
                      type="button"
                      className="h-[48px] sm:h-[52px] rounded-[8px] bg-[#1F712F] text-white font-semibold hover:opacity-95"
                    >
                      Update Password
                    </button>
                    <button
                      type="button"
                      className="h-[48px] sm:h-[52px] rounded-[8px] border-2 border-[#1F712F] text-[#1F712F] font-semibold hover:bg-[#EAF6EC]"
                      onClick={() => setPwd({ cur: "", n: "", c: "" })}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Accordion>

              {/* 2FA */}
              <Accordion
                icon="/Group.svg"
                title="Two-Factor Authentication (2FA)"
                rightText={twoFAEnabled ? "Enabled" : "Disabled"}
                open={open2FA}
                setOpen={setOpen2FA}
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-2">
                  <p className="text-[#666] text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[23px]">
                    Add an extra layer of protection by enabling two-factor authentication. You’ll
                    be asked to verify your identity using an OTP sent to your registered email or
                    mobile.
                  </p>
                  <Toggle checked={twoFAEnabled} onChange={setTwoFAEnabled} ariaLabel="Enable 2FA" />
                </div>

                {/* Method */}
                <div className="mt-2">
                  <label className="text-[#1C1C1C] font-semibold text-[15px] sm:text-[17px] md:text-[18px] leading-[22px] md:leading-[23px]">
                    Select verification method
                  </label>
                  <div className="mt-2 flex gap-4 sm:gap-6 flex-wrap">
                    <Radio label="Email" checked={method === "email"} onChange={() => setMethod("email")} />
                    <Radio label="Phone Number" checked={method === "phone"} onChange={() => setMethod("phone")} />
                  </div>
                </div>

                {/* Phone + Verify */}
                {method === "phone" && (
                  <>
                    <p className="text-[#666] text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[23px] mt-4">
                      To enable two-factor authentication via SMS, please enter your mobile number.
                      An OTP (One-Time Password) will be sent to this number for verification.
                    </p>

                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 max-w-[688px]">
                      <input
                        className="w-full h-[48px] sm:h-[52px] rounded-[8px] border-2 border-[#999] bg-[rgba(202,202,202,0.06)] px-4 outline-none focus:border-[#1F712F]"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XXXXXXXXXX"
                      />
                      <button
                        type="button"
                        className="h-[48px] sm:h-[52px] px-6 sm:px-7 rounded-[8px] border-2 border-[#1F712F] text-[#1F712F] font-semibold hover:bg-[#EAF6EC]"
                      >
                        Verify
                      </button>
                    </div>
                  </>
                )}

                {/* OTP */}
                <p className="text-[#666] text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[23px] mt-4 sm:mt-5">
                  We&apos;ve sent a 6-digit verification code to your mobile number. Please enter the
                  OTP below to complete the verification.
                </p>

                <div className="mt-3 flex gap-2 sm:gap-3 flex-wrap">
                  {otp.map((d, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      inputMode="numeric"
                      maxLength={1}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-[8px] border-2 border-[#D9D9D9] bg-[rgba(202,202,202,0.06)] text-center text-[18px] sm:text-[20px] outline-none focus:border-[#1F712F]"
                      value={d}
                      onChange={(e) => onOtpChange(i, e.target.value)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  disabled={!otpFilled}
                  className={`mt-5 sm:mt-6 h-[48px] sm:h-[52px] px-6 rounded-[8px] font-semibold text-white ${
                    otpFilled ? "bg-[#1F712F] hover:opacity-95" : "bg-[#9FC8A6] cursor-not-allowed"
                  }`}
                >
                  Verify OTP &amp; Enable 2FA
                </button>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============== Reusable Pieces =============== */

function Accordion({ icon, title, rightText, open, setOpen, children }) {
  const toggle = useCallback(() => setOpen((v) => !v), [setOpen]);

  return (
    <div className="rounded-[8px] border border-[#D9D9D9] bg-white">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-3 sm:px-4 md:px-6 py-3.5 sm:py-4"
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          <img src={icon} alt="" className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain" />
          <span className="text-[#1C1C1C] font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[22px] sm:leading-[26px] md:leading-[28px]">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {rightText && (
            <span className="text-[#666] italic text-[13px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]">
              {rightText}
            </span>
          )}
          <svg
            className={`w-5 h-5 sm:w-6 sm:h-6 text-[#666] transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {open && <div className="px-3 sm:px-4 md:px-6 pb-5 sm:pb-6 pt-1.5 sm:pt-2">{children}</div>}
    </div>
  );
}

function Field({ label, type, value, onChange, onToggle, className = "" }) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-[#1C1C1C] font-semibold text-[15px] sm:text-[16px]">{label}</label>
      <div className="relative">
        <input
          type={type}
          className="w-full h-[48px] sm:h-[52px] rounded-[8px] border-2 border-[#999] bg-[rgba(202,202,202,0.06)] px-4 pr-12 outline-none focus:border-[#1F712F]"
          value={value}
          onChange={onChange}
          placeholder="************"
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#1F712F]"
          aria-label="Toggle password visibility"
        >
          👁️
        </button>
      </div>
    </div>
  );
}

function Toggle({ checked, onChange, ariaLabel }) {
  return (
    <button
      type="button"
      role="switch"
      aria-label={ariaLabel}
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative w-[60px] sm:w-[70px] h-[32px] sm:h-[36px] rounded-full transition-colors ${
        checked ? "bg-[#419637]" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 w-[26px] sm:w-[30px] h-[26px] sm:h-[30px] bg-white rounded-full shadow transition-all ${
          checked ? "right-[3px]" : "left-[3px]"
        }`}
      />
    </button>
  );
}

function Radio({ label, checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`w-5 h-5 rounded-full border grid place-items-center ${
          checked ? "border-[#1F712F]" : "border-[#BDBDBD]"
        }`}>
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            checked ? "bg-[#1F712F]" : "bg-transparent"
          }`}></span>
      </span>
      <span className="text-[#1C1C1C] text-[14px] sm:text-[15px]">{label}</span>
    </label>
  );
}

