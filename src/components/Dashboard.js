"use client"

import { useState } from "react"
import AssessmentsArcSection from "./AssessmentsArcSection"
import { jobs } from "../HomePage"
import { useNavigate } from "react-router-dom"
import JobDetails from "./JobDetails"
import ApplyJobModal from "./ApplyJobModal"

export default function Dashboard() {
  const navigate = useNavigate()

  // ✅ State for job interactions (same as HomePage)
  const [selectedJob, setSelectedJob] = useState(null)
  const [showJobDetails, setShowJobDetails] = useState(false)
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [applyingJob, setApplyingJob] = useState(null)

  // ✅ Handlers (same logic as HomePage)
  const handleViewDetails = (job) => {
    setSelectedJob(job)
    setShowJobDetails(true)
  }

  const handleApplyNow = (job) => {
    setApplyingJob(job)
    setShowApplyModal(true)
  }

  const handleBackToJobs = () => {
    setShowJobDetails(false)
    setSelectedJob(null)
  }

  // ✅ If showing job details
  if (showJobDetails && selectedJob) {
    return <JobDetails job={selectedJob} onBack={handleBackToJobs} />
  }
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-b from-[#DFF5E0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#1C1C1C" }}>
                Every Step You Take
                <br />
                Builds Your Future
              </h1>
              <p className="text-base sm:text-lg mb-8" style={{ color: "#1F712F" }}>
                Your career is a journey of growth.
                <br />
                Stay focused, stay determined — and success will follow.
              </p>
              <button
                className="inline-flex items-center justify-center px-6 py-3 rounded font-semibold text-white hover:opacity-95 transition"
                style={{ backgroundColor: "#1F712F" }}
              >
                Find My Next Step
              </button>
            </div>
            {/* Empty column for grid balance */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Hero Illustration - positioned absolutely like other pages */}
        <img
          src="/candidate-career/dashboardbackground.png"
          alt="Business professionals with spotlight illustration"
          className="absolute bottom-0 left-1/2 lg:left-[70%] -translate-x-1/2 max-w-md w-full sm:w-auto object-contain lg:scale-150"
          draggable="false"
        />
      </section>

      {/* Because Talent Deserves More Section */}
      <AssessmentsArcSection />

      {/*skill sec  */}
      {/* Skill Assessments Section */}
<section className="relative py-16 lg:py-24 lg:h-[600px]"> 
  <img src="/candidate-career/skill.svg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" /> 
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 mt-28"> Skill Assessments – <br /> Built to Empower Your Journey </h2>
      <p className="text-base sm:text-lg lg:text-xl text-white max-w-4xl mx-auto leading-relaxed"> Resumes tell a story, but skills prove it. Our Skill Assessments are built to showcase your strengths, validate your expertise, and give recruiters real reasons to trust you. Every test you take moves you closer to the right opportunity — because your talent deserves to be seen, recognized, and rewarded. </p> 
      </div> 
      </section>

      {/* Three Feature Sections */}
      <section className="sm:pt-16 bg-white lg:mt-[-155px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Text */}
            <div className="flex-[0.7]">
              <h3 className="text-lg font-semibold uppercase tracking-wider mb-3 text-[#1F712F]">
                Assessments Made Simple
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5 text-[#1C1C1C]">
                Test Your Skills, Without the Stress
              </h2>
              <p className="text-[15px] leading-7 text-[#333333]">
                Don&apos;t worry about complicated exams or confusing platforms. Here, you&apos;ll find all kinds of
                assessments — aptitude, reasoning, communication, and domain-specific skill tests — in one place. Our
                clean, intuitive interface makes it easy to attempt tests without stress so you can focus on your
                performance and fairly highlight your strengths.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-[1.2] flex justify-center">
              <img src="/candidate-career/Group2.png" alt="Assessment interface" className="w-full h-auto" draggable="false" />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:mt-[-500px]">
            {/* Left Image → aligned with first content start */}
            <div className="flex-[1.2] flex justify-start lg:-ml-28">
              <img src="/candidate-career/Group2021.png" alt="Assessment interface" className="w-full h-auto" draggable="false" />
            </div>

            {/* Right Text */}
            <div className="flex-[0.7]">
              <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wider mb-3 text-[#1F712F]">
                Show Your Coding Power
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5 text-[#1C1C1C]">
                Prove Your Coding Power, Get Noticed Fast
              </h2>
              <p className="text-[15px] leading-7 text-[#333333]">
                Write, compile, and run code in a real-time environment that mirrors real-world problem-solving. No
                distractions or artificial hurdles — just challenges that let your true potential shine. Companies see
                how you think and build, giving you more visibility and credibility as a developer.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:mt-[-500px]">
            {/* Left Text */}
            <div className="flex-[0.7]">
              <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wider mb-3 text-[#1F712F]">
                A Hassle-Free Career Journey
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5 text-[#1C1C1C]">
                Your Career, Streamlined
              </h2>
              <p className="text-[15px] leading-7 text-[#333333]">
                From your first test to final selection, everything is transparent and fast. Update your profile, track
                progress, and stay in control of each stage. The smarter your profile looks, the easier it is for
                employers to notice you and decide quickly.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-[1.2] flex justify-center">
              <img src="/candidate-career/Group3.png" alt="Assessment interface" className="w-full h-auto" draggable="false" />
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="relative py-16 lg:py-24 lg:mt-[-80px]">
        {/* Background */}
        <img
          src="/candidate-career/Frame 427321373 (2).png"
          alt="Job openings background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Block */}
            <div className="lg:col-span-1">
              <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wide mb-3 text-[#1F712F]">
                Job Openings
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5">
                Your Next Role Could Be Right Here
              </h2>
              <p className="text-base text-gray-200 leading-relaxed mb-8">
                From tech to management, discover roles that match your potential. These are just a glimpse — explore
                more on our Careers page.
              </p>
              {/* ✅ Navigate to /home */}
              <button
                onClick={() => navigate("/home")}
                className="px-6 py-3 bg-[#1F712F] text-white font-semibold rounded-lg hover:opacity-90 transition"
              >
                Discover All Openings
              </button>
            </div>

            {/* Right Side – Show 2 Jobs */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {jobs.slice(0, 2).map((job, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-white/30 backdrop-blur-sm rounded-lg p-6 flex flex-col justify-between"
                >
                  {/* Job Info */}
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">{job.title}</h3>

                    {/* Department & Location */}
                    <div className="flex items-center text-sm text-gray-200 space-x-4 mb-2">
                      <span className="flex items-center">
                        <img src="/candidate-career/department.png" alt="Department Icon" className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <img src="/candidate-career/lsicon_location-filled.png" alt="Location Icon" className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center text-sm text-gray-400">
                      <img src="/candidate-career/date.png" alt="Date Icon" className="w-4 h-4 mr-1" />
                      {job.date}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-200 mt-3">{job.description}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => handleApplyNow(job)}
                      className="bg-[#1F712F] text-white px-4 py-2 rounded hover:opacity-90"
                    >
                      Apply Now
                    </button>
                    <button
                      onClick={() => handleViewDetails(job)}
                      className="bg-white text-[#1F712F] px-4 py-2 rounded hover:bg-gray-100"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
       <section className="relative py-16 sm:py-20 lg:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left copy */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-[#1F712F] mb-3">Join Us</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1C1C1C] mb-6">
                Join the League of Skill‑Proven Achievers
              </h2>
              <p className="text-[15px] leading-7 text-[#333333] mb-5">
                Thousands of candidates have already showcased their skills here — and turned them into real career
                opportunities. Each assessment they took brought them one step closer to the job they deserved.
              </p>
              <p className="text-[15px] leading-7 text-[#333333]">
                Now, it’s your turn. Prove your skills. Unlock doors. Build the career you’ve always aimed for.
              </p>
            </div>

            {/* Right collage image */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/candidate-career/Group 2018 (1).png"
                alt="Community of successful candidates"
                className="w-full max-w-[680px] sm:max-w-[760px] md:max-w-[820px] lg:max-w-[880px] h-auto"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
    <section className="relative py-6 sm:py-8 lg:py-10">
  {/* Background */}
  <img
    src="/candidate-career/Frame 275.png"
    alt="Start career background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Rocket Icon */}
    <div className="mb-4 flex justify-center">
      <img
        src="/candidate-career/Frame 427321280 (2).svg"
        alt="Rocket Icon"
        className="h-20 w-20 object-contain"
      />
    </div>

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
      Start Your Career
      <br />
      Journey Today
    </h2>

    {/* Subtext */}
    <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto mb-3 leading-relaxed">
      Join thousands of professionals who found their dream jobs through our comprehensive assessment platform.
    </p>

    {/* CTA Button */}
    <button className="inline-flex items-center justify-center px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1F712F] transition-colors mb-2">
      Get Started Now
    </button>

    {/* Free text with card icon */}
   <div className="flex items-center justify-center text-sm sm:text-base text-white/80 mb-4">
  <img 
    src="/candidate-career/credit-card (1).svg" 
    alt="Credit Card" 
    className="w-10 h-10 mr-5 object-contain" 
  />
  No credit card required • Free to start
</div>

    {/* Three Features */}
    <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
      {/* Smart Matching */}
      <div className="text-center">
        <div className="mb-2 flex justify-center">
          <img
            src="/candidate-career/Frame 427321280 (3).svg"
            alt="Smart Matching"
            className="h-14 w-14 object-contain"
          />
        </div>
        <h3 className="text-sm sm:text-base font-semibold text-white mb-1">Smart Matching</h3>
        <p className="text-xs sm:text-sm text-white/80">AI-powered job recommendations</p>
      </div>

      {/* Skill Validation */}
      <div className="text-center">
        <div className="mb-2 flex justify-center">
          <img
            src="/candidate-career/Frame 427321280 (4).svg"
            alt="Skill Validation"
            className="h-14 w-14 object-contain"
          />
        </div>
        <h3 className="text-sm sm:text-base font-semibold text-white mb-1">Skill Validation</h3>
        <p className="text-xs sm:text-sm text-white/80">Comprehensive assessments</p>
      </div>

      {/* Career Growth */}
      <div className="text-center">
        <div className="mb-2 flex justify-center">
          <img
            src="/candidate-career/Frame 427321280 (5).svg"
            alt="Career Growth"
            className="h-14 w-14 object-contain"
          />
        </div>
        <h3 className="text-sm sm:text-base font-semibold text-white mb-1">Career Growth</h3>
        <p className="text-xs sm:text-sm text-white/80">Continuous learning path</p>
      </div>
    </div>
  </div>
</section>


      
      
      

      {/* ✅ Apply Modal (same as HomePage) */}
      <ApplyJobModal isOpen={showApplyModal} onClose={() => setShowApplyModal(false)} job={applyingJob} />

    </main>
  )
}
