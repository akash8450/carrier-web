// src/components/Settings/PoliciesPage.jsx
import React, { useState, useCallback } from "react";

export default function PoliciesPage() {
  const [openTnC, setOpenTnC] = useState(false); // collapsed
  const [openPrivacy, setOpenPrivacy] = useState(true); // expanded
  const acceptedOn = "21 August 2025";

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Desktop max width; phones/tablets get safe side padding */}
      <div className="mx-auto mt-[112px] max-w-[1680px] px-4 sm:px-6 lg:px-10 xl:px-[60px]">
        <div className="bg-white border-2 border-[#E9E9E9] rounded-[12px]">
          {/* Inner frame – compact on mobile, roomy on large */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] pt-6 sm:pt-8 pb-8">
            {/* Back */}
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-1.5 h-[21px] text-[#666] hover:opacity-80">
              <img
                src="/candidate-career/Back.svg"
                alt="Back"
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
              />
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
                lg:text-[48px] lg:leading-[60px]">
                Review Policies &amp; Compliance Documents
              </h1>
              <p
                className="mt-2 max-w-[1056px] text-[#666666]
                text-[14px] leading-[20px]
                sm:text-[15px] sm:leading-[22px]
                md:text-[16px] md:leading-[23px]
                lg:text-[18px] lg:leading-[24px]">
                Access our organization’s legal documents including Privacy
                Policy, Terms of Use, and compliance-related notices. Stay
                informed about data protection, rights, and responsibilities.
              </p>
            </div>

            {/* Accordions */}
            <div className="mt-5 sm:mt-6 flex flex-col gap-3 sm:gap-4">
              {/* Terms & Conditions */}
              <Accordion
                icon="/Group.svg"
                title="Term & Conditions"
                rightText={`Accepted on ${acceptedOn}`}
                open={openTnC}
                setOpen={setOpenTnC}>
                <div className="text-[#666] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] break-words">
                  Review the latest version of our Terms &amp; Conditions.
                </div>
              </Accordion>

              {/* Privacy Policy */}
              <Accordion
                icon="/Group.svg"
                title="Privacy Policy"
                rightText={`Accepted on ${acceptedOn}`}
                open={openPrivacy}
                setOpen={setOpenPrivacy}>
                <p className="text-[#666] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] break-words">
                  Lorem ipsum dolor sit amet consectetur. In morbi aliquam
                  tellus purus et. Donec quisque consectetur a elementum luctus
                  amet ut augue. Lorem phasellus cursus id in feugiat. Nunc
                  blandit nunc nunc mauris tellus et rhoncus morbi. Senectus
                  sapien adipiscing aliquam commodo. Dictumst vel convallis sit
                  tempus nibh erat feugiat egestas. In posuere pretium facilisis
                  nulla tellus felis. Diam lacus consequat viverra tincidunt
                  convallis. Amet mauris pharetra amet pulvinar mauris. Velit
                  neque vitae aliquet libero vulputate mattis fermentum tellus
                  suscipit. Lorem bibendum lacus viverra nulla ornare.
                  Ullamcorper nulla diam laoreet dapibus vitae id felis
                  adipiscing suspendisse. Metus ac arcu non rhoncus leo in.
                  Egestas adipiscing felis proin morbi maecenas ut. Dui
                  fermentum mauris sem malesuada sit diam augue. Scelerisque
                  adipiscing elementum mattis nunc vitae viverra. Eros aliquam
                  pellentesque blandit et semper feugiat tellus sapien
                  adipiscing. Id parturient tincidunt sem quam urna tellus in
                  mauris. Pharetra ac viverra eu nam. Velit volutpat quisque
                  ornare purus. Porttitor auctor aliquet id id.
                </p>
                <p className="text-[#666] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] mt-4 break-words">
                  Magna mollis fermentum augue netus vel vel id in. Aenean velit
                  suspendisse blandit ornare scelerisque elementum. Erat etiam
                  egestas eget gravida leo etiam augue rhoncus vel morbi. Quam
                  urna viverra viverra neque. Dictum ut adipiscing nibh sit.
                  Vitae tristique justo viverra vitae. Interdum molestie viverra
                  facilisis sed. Velit enim enim et lectus leo. Fames
                  pellentesque volutpat venenatis elit malesuada tincidunt
                  aliquam dui ullamcorper. Bibendum at nulla sollicitudin eget
                  odio consequat tortor etiam eget. At aliquam sit id eros
                  quisque aliquet malesuada arcu odio. Feugiat rutrum massa
                  blandit sagittis congue ante neque. Eros tellus fringilla eget
                  aliquam tellus. Commodo at tempor id egestas pulvinar enim
                  adipiscing. Quis cursus eget feugiat adipiscing eleifend lorem
                  eleifend in venenatis. Auctor a libero amet commodo nulla.
                </p>
                <p className="text-[#666] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] mt-4 break-words">
                  Egestas lacus justo id diam nunc imperdiet ut interdum.
                  Viverra pretium quis platea pharetra etiam. Pret ium nunc
                  pellentesque accumsan vel est. Condimentum mi viverra et
                  pellentesque lacus consectetur nisl. Mi vulputate vivamus
                  suspendisse risus imperdiet est quisque pharetra. Pellentesque
                  velit arcu pellentesque rutrum ac amet cras. Cursus habitant
                  vitae mauris quisque a. A sit condimentum diam cursus. Et
                  aenean porttitor enim tristique. Congue sed eget pellentesque
                  mattis nullam. Non auctor enim id eu at ultrices. Odio
                  maecenas amet ornare lectus porta adipiscing.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============= Reusable (accessible + mobile-first) ============= */

function Accordion({ icon, title, rightText, open, setOpen, children }) {
  const toggle = useCallback(() => setOpen((v) => !v), [setOpen]);

  return (
    <div className="rounded-[12px] border border-[#D9D9D9] bg-white">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-3 sm:px-4 md:px-6 py-3.5 sm:py-4">
        {/* Left: icon + title */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <img
            src={icon}
            alt=""
            loading="lazy"
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain shrink-0"
          />
          <span
            className="text-[#1C1C1C] font-semibold truncate
            text-[16px] leading-[22px]
            sm:text-[18px] sm:leading-[26px]
            md:text-[20px] md:leading-[28px]"
            title={title}>
            {title}
          </span>
        </div>

        {/* Right: accepted text + chevron */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {rightText && (
            <span
              className="hidden xs:inline text-[#666] italic
              text-[13px] leading-[20px]
              sm:text-[14px] sm:leading-[22px]
              md:text-[16px] md:leading-[24px]">
              {rightText}
            </span>
          )}
          <img
            src="/candidate-career/Dropdown.svg"
            alt="toggle"
            className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {open && (
        <div className="px-3 sm:px-4 md:px-6 pb-5 pt-1.5 sm:pt-2">
          {children}
        </div>
      )}
    </div>
  );
}
