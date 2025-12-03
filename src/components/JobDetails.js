"use client"

import { useState } from "react"
import DOMPurify from "dompurify"
import ApplyJobModal from "./ApplyJobModal"

const JobDetails = ({ job, onBack }) => {
  const [showApplyModal, setShowApplyModal] = useState(false)

  if (!job) return null

  const handleApplyClick = () => {
    setShowApplyModal(true)
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-4">
      <div className="mx-auto max-w-7xl bg-white rounded-[12px] shadow-sm border border-[#E9E9E9] overflow-hidden">
        {/* Header (responsive) */}
        <div className="bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="order-1 md:order-1 flex items-center gap-3 sm:gap-4 md:flex-1 min-w-0">
              <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm sm:text-base font-medium">Back</span>
              </button>

              <img src={job.companyLogo || "/Akash.png"} alt={job.company || "Company"} className="h-5 sm:h-6 w-auto" />

              <span className="hidden md:inline text-[#1C1C1C] font-semibold text-base truncate max-w-[40vw]">
                {job.company || "Akash Software Private Limited"}
              </span>
            </div>

            <div className="order-2 md:hidden">
              <span className="block text-[#1C1C1C] font-semibold text-sm break-words">
                {job.company || "Akash Software Private Limited"}
              </span>
            </div>

            <div className="order-3 md:order-1 flex items-center gap-2 sm:gap-3 flex-wrap md:flex-nowrap">
              <button className="px-4 py-2 border border-[#1F712F] text-[#1F712F] hover:bg-gray-50 rounded-md text-sm flex items-center">
                <img src="./sharebutton.png" className="w-4 h-4 mr-2" />
                Share
              </button>

              <button
                onClick={handleApplyClick}
                className="px-4 py-2 bg-[#1F712F] hover:bg-green-700 text-white rounded-md text-sm flex items-center"
              >
                <img src="./applybutton.png" className="w-4 h-4 mr-2" />
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Title */}
          <div className="mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1F712F]">
              {job.title || "Senior Java Developer"}
            </h1>
            <div className="mt-3 sm:mt-4 text-gray-600 space-y-1">
              <p className="text-base sm:text-lg font-medium">{job.location || "Gurugram, Haryana, India"}</p>
              <p className="text-xs sm:text-sm text-[#1F712F]">{job.postedAt || job.date || "14 hours ago"}</p>
              <p className="text-xs sm:text-sm">More than {job.applicants ?? "50+"} persons applied.</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              <span className="px-4 sm:px-5 h-9 sm:h-11 inline-flex items-center bg-[#E9E9E9] text-[#333] rounded-full text-sm sm:text-base">
                {job.workMode || "Remote"}
              </span>
              <span className="px-4 sm:px-5 h-9 sm:h-11 inline-flex items-center bg-[#E9E9E9] text-[#333] rounded-full text-sm sm:text-base">
                {job.roleType || "Full Time"}
              </span>
            </div>
          </div>

          {/* About this job */}
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1F712F] mb-4 sm:mb-5">About this job</h2>

          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-5 sm:gap-6">
            {/* Left list */}
            <div className="space-y-4 sm:space-y-5">
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-[#1C1C1C]">Position</h4>
                <p className="text-[#666] text-sm sm:text-base">{job.title || "Senior Java Developer"}</p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-[#1C1C1C]">Location</h4>
                <p className="text-[#666] text-sm sm:text-base">{job.location || "Remote"}</p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-[#1C1C1C]">Experience</h4>
                <p className="text-[#666] text-sm sm:text-base">{job.experience || "4+ Years"}</p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-[#1C1C1C]">Department</h4>
                <p className="text-[#666] text-sm sm:text-base">{job.department || "Software Engineering"}</p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-[#1C1C1C]">Employment Type</h4>
                <p className="text-[#666] text-sm sm:text-base">{job.roleType || "Full-time"}</p>
              </div>
            </div>

            {/* Right content — uses same rendering & classes as JobPostingComplete.js */}
            <div className="space-y-6 lg:mt-8">
              <section>
                <h3 className="text-sm sm:text-base font-semibold text-[#1C1C1C]">Company Description</h3>
                <div
                  className="prose prose-sm max-w-none prose-ol:list-decimal prose-ul:list-disc prose-li:ml-4 break-all overflow-hidden [&_ol]:list-decimal [&_ul]:list-disc [&_li]:ml-6 [&_ol]:pl-4 [&_ul]:pl-4"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.companyDescription ?? job.companyDescriptionHtml ?? "") }}
                />
              </section>

              <section>
                <h3 className="text-sm sm:text-base font-semibold text-[#1C1C1C]">Job Summary</h3>
                <div
                  className="prose prose-sm max-w-none prose-ol:list-decimal prose-ul:list-disc prose-li:ml-4 break-all overflow-hidden [&_ol]:list-decimal [&_ul]:list-disc [&_li]:ml-6 [&_ol]:pl-4 [&_ul]:pl-4"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.jobSummary ?? job.summary ?? "") }}
                />
              </section>

              <section>
                <h3 className="text-sm sm:text-base font-semibold text-[#1C1C1C]">Roles &amp; Responsibilities</h3>
                <div
                  className="prose prose-sm max-w-none prose-ol:list-decimal prose-ul:list-disc prose-li:ml-4 break-all overflow-hidden [&_ol]:list-decimal [&_ul]:list-disc [&_li]:ml-6 [&_ol]:pl-4 [&_ul]:pl-4"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.rolesResponsibilities ?? job.responsibilities ?? "") }}
                />
              </section>

              <section>
                <h3 className="text-sm sm:text-base font-semibold text-[#1C1C1C]">
                  Required Skills &amp; Qualifications
                </h3>
                <div
                  className="prose prose-sm max-w-none prose-ol:list-decimal prose-ul:list-disc prose-li:ml-4 break-all overflow-hidden [&_ol]:list-decimal [&_ul]:list-disc [&_li]:ml-6 [&_ol]:pl-4 [&_ul]:pl-4"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.requiredSkills ?? job.required_skills ?? job.skills ?? "") }}
                />
              </section>
            </div>
          </div>
        </div>
      </div>

      <ApplyJobModal isOpen={showApplyModal} onClose={() => setShowApplyModal(false)} job={job} />
    </div>
  )
}

export default JobDetails
